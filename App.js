import React, {useEffect, useState} from "react";
import {Button, Text, TextInput, View} from "react-native";
import * as Location from "expo-location";
import * as ImagePicker from "expo-image-picker";
import {saveRecord, exportGeoJSON} from "./src/records";

export default function App() {
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("Pronto para coletar");
  const [record, setRecord] = useState(null);
  async function collect() {
    const permission = await Location.requestForegroundPermissionsAsync();
    const location = permission.granted ? await Location.getCurrentPositionAsync({}) : null;
    const next = {id: String(Date.now()), description, collectedAt: new Date().toISOString(), location: location ? {latitude: location.coords.latitude, longitude: location.coords.longitude} : null};
    await saveRecord(next); setRecord(next); setMessage("Registro salvo offline");
  }
  return <View style={{padding: 32, gap: 16}}><Text accessibilityRole="header">Coleta de campo</Text><TextInput accessibilityLabel="Descrição" value={description} onChangeText={setDescription} placeholder="Descreva o ponto"/><Button title="Salvar registro" onPress={collect}/><Button title="Exportar GeoJSON" onPress={async () => {if (record) setMessage(JSON.stringify(exportGeoJSON([record])));}}/><Text accessibilityLiveRegion="polite">{message}</Text></View>;
}
