export function toFeature(record) {
  return {
    type: "Feature",
    geometry: record.location
      ? { type: "Point", coordinates: [record.location.longitude, record.location.latitude] }
      : null,
    properties: { id: record.id, description: record.description, collectedAt: record.collectedAt },
  };
}

export function exportGeoJSON(records) {
  return { type: "FeatureCollection", features: records.map(toFeature) };
}
