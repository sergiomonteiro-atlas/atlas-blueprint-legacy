import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath, pathToFileURL} from 'node:url';
import Ajv from 'ajv/dist/2020.js';
import addFormats from 'ajv-formats';

const blueprint = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const workspace = path.resolve(process.argv[2] ?? path.join(blueprint, '..'));
const {VaultIndexer} = await import(pathToFileURL(path.join(workspace,'atlas-agent/dist/gbrain/indexer.js')));
const {SoulLoader} = await import(pathToFileURL(path.join(workspace,'atlas-agent/dist/soul/loader.js')));
const ajv = new Ajv({allErrors:true});
addFormats(ajv);
const graphSchema = ajv.compile(JSON.parse(await readFile(path.join(blueprint,'contracts/graph.schema.json'))));
const leadSchema = ajv.compile(JSON.parse(await readFile(path.join(blueprint,'contracts/lead.schema.json'))));
const indexer = new VaultIndexer(path.join(workspace,'atlas-workforce/vault-starter'));
await indexer.initialize();
const graph = indexer.getGraph();
assert.ok(graphSchema(graph),JSON.stringify(graphSchema.errors));
const agents = graph.nodes.filter(n=>n.kind==='agent');
const leads = graph.nodes.filter(n=>n.kind==='lead');
assert.equal(agents.length,5,'starter AtlasHub specialist count');
assert.equal(leads.length,3,'starter fictional CRM count');
for(const lead of leads) assert.ok(leadSchema(lead.frontmatter),`${lead.id}: ${JSON.stringify(leadSchema.errors)}`);
const ids = new Set(graph.nodes.map(n=>n.id));
assert.equal(ids.size,graph.nodes.length,'IDs unique');
for(const node of graph.nodes) assert.equal(node.id,node.path.slice(0,-3));
for(const edge of graph.links) assert.ok(ids.has(edge.source)&&ids.has(edge.target),'no ghost graph edges');
assert.equal(graph.unresolved.length,0,JSON.stringify(graph.unresolved));
const souls = new SoulLoader(indexer);
for(const agent of agents) {
  const slug=path.posix.basename(agent.id);
  const identity=await souls.load(slug);
  assert.ok(identity.soul.trim(),`${slug}: soul loaded`);
  assert.ok(identity.specialty.trim(),`${slug}: specialty loaded`);
}
assert.ok(indexer.search('Atlas').length>0,'lexical retrieval on real starter');
console.log(JSON.stringify({status:'pass',nodes:graph.nodes.length,links:graph.links.length,agents:agents.length,leads:leads.length,unresolved:graph.unresolved.length,soulsLoaded:agents.length,indexWarnings:indexer.warnings},null,2));
