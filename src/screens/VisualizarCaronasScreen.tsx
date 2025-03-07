import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

export const VisualizarCaronas = () => {
  const [caronas, setCaronas] = useState([]);

  useEffect(() => {
    const caronasMock = [
      { id: "1", partida: "Centro", destino: "IFRO", dataHora: "12/03/2025 08:00", valor: "R$ 5,00" },
      { id: "2", partida: "Bairro X", destino: "IFRO", dataHora: "12/03/2025 09:00", valor: "R$ 7,00" },
      { id: "3", partida: "Avenida Y", destino: "IFRO", dataHora: "12/03/2025 10:00", valor: "R$ 4,50" },
    ];
    setCaronas(caronasMock);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Caronas Disponíveis</Text>
      <FlatList
        data={caronas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardText}><Text style={styles.bold}>Partida:</Text> {item.partida}</Text>
            <Text style={styles.cardText}><Text style={styles.bold}>Destino:</Text> {item.destino}</Text>
            <Text style={styles.cardText}><Text style={styles.bold}>Data e Hora:</Text> {item.dataHora}</Text>
            <Text style={styles.cardText}><Text style={styles.bold}>Valor:</Text> {item.valor}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  cardText: {
    fontSize: 16,
    marginBottom: 5,
  },
  bold: {
    fontWeight: "bold",
  },
});
