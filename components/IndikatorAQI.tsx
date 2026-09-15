// components/IndikatorAQI.tsx
import { View, Text } from "react-native";
import { LaporanUdara } from "../types/cuaca";

export default function IndikatorAQI({ kota, indeksAQI, tingkat, diperbaruiPada }: LaporanUdara) {
    let warnaAQI = "black";
    if (tingkat === "BAIK") {
        warnaAQI = "green";
    } else if (tingkat === "SEDANG") {
        warnaAQI = "gold";
    } else if (tingkat === "TIDAK_SEHAT") {
        warnaAQI = "orange";
    } else if (tingkat === "BERBAHAYA") {
        warnaAQI = "red";
    }

    return (
        <View style={{ padding: 12, borderRadius: 8, backgroundColor: "#fff", borderWidth: 1, borderColor: "#ccc" }}>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>{kota}</Text>
            <Text>AQI: {indeksAQI}</Text>
            <Text style={{ color: warnaAQI, fontWeight: "600", marginTop: 4 }}>Status: {tingkat}</Text>
            {diperbaruiPada && (
                <Text style={{ fontSize: 12, color: "gray", marginTop: 8 }}>Terakhir diperbarui: {diperbaruiPada}</Text>
            )}
        </View>
    );
}
