import test from "node:test"; import assert from "node:assert/strict"; import {exportGeoJSON} from "../src/geojson.js";
test("converte localização para GeoJSON",()=>{const out=exportGeoJSON([{id:"1",description:"árvore",collectedAt:"2026-01-01",location:{latitude:-23.5,longitude:-46.6}}]); assert.deepEqual(out.features[0].geometry.coordinates,[-46.6,-23.5]);});
test("mantém registro sem GPS com geometria nula",()=>{assert.equal(exportGeoJSON([{id:"1",location:null}]).features[0].geometry,null);});
