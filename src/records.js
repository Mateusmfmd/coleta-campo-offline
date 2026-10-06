import AsyncStorage from "@react-native-async-storage/async-storage";
import { exportGeoJSON, toFeature } from "./geojson";
export { exportGeoJSON, toFeature };
export async function saveRecord(record) { const old=JSON.parse(await AsyncStorage.getItem("field-records")||"[]"); await AsyncStorage.setItem("field-records",JSON.stringify([...old,record])); }
