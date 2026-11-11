import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import Ajv from 'ajv/dist/2020.js';
import addFormats from 'ajv-formats';

const ajv = new Ajv({allErrors: true, strict: true});
addFormats(ajv);
const validators = {};
for (const name of ['graph','event','lead']) {
  const schema = JSON.parse(await readFile(new URL(`../contracts/${name}.schema.json`, import.meta.url)));
  validators[name] = ajv.compile(schema);
}
const lead = {status:'qualified',value:4900,currency:'BRL',owner_agent:'atlas-sales-os-commander',next_action:'Prepare diagnostic'};
const node = {id:'packs/crm-sales-os/leads/example',path:'packs/crm-sales-os/leads/example.md',label:'Example',kind:'lead',tags:['example'],frontmatter:lead};
const graph = {version:1,generatedAt:'2026-11-11T12:00:00Z',nodes:[node],links:[],unresolved:[]};
const event = {version:1,id:'df9bb467-3ac7-4d84-8f9b-8d38619eeb3c',runId:'1d54278d-fcee-439f-a12d-b539575cdaef',agentSlug:'atlas-sales-os-commander',type:'agent:critic_review',timestamp:'2026-11-11T12:00:00Z',data:{accepted:false}};

test('v1 graph, lead and event examples validate', () => {
  for(const [name,value] of Object.entries({graph,event,lead})) assert.ok(validators[name](value),JSON.stringify(validators[name].errors));
});
test('unknown schema version and event type rejected',()=>{
  assert.equal(validators.graph({...graph,version:2}),false);
  assert.equal(validators.event({...event,type:'agent:fake_success'}),false);
});
test('invalid CRM stage, negative value and malformed currency rejected',()=>{
  for(const patch of [{status:'paid'},{value:-1},{currency:'brl'},{owner_agent:'../../outside'},{next_action:''}]) assert.equal(validators.lead({...lead,...patch}),false);
});
test('timestamps, IDs, path separators and node kind validated',()=>{
  assert.equal(validators.event({...event,id:'not-uuid'}),false);
  assert.equal(validators.event({...event,timestamp:'yesterday'}),false);
  assert.equal(validators.graph({...graph,nodes:[{...node,path:'C:\\private.md'}]}),false);
  assert.equal(validators.graph({...graph,nodes:[{...node,kind:'customer'}]}),false);
});
test('links require resolved source and target IDs in fixtures',()=>{
  const ids = new Set(graph.nodes.map(n=>n.id));
  assert.equal(ids.size,graph.nodes.length);
  for(const link of graph.links) assert.ok(ids.has(link.source)&&ids.has(link.target));
  for(const n of graph.nodes) assert.equal(n.id,n.path.slice(0,-3));
});
