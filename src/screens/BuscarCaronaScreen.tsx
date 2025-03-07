import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useAuth } from "../contexts/AuthContext";

export const ProcurarCarona = () => {
  const { signOut } = useAuth();
  const [partida, setPartida] = useState("");
  const [destino, setDestino] = useState("");
  const [dataHora, setDataHora] = useState("");
  const [valor, setValor] = useState("");

  return (
    <View style={styles.container}>
      <Input placeholder="Partida" value={partida} onChangeText={setPartida} />
      <Input placeholder="Destino" value={destino} onChangeText={setDestino} />
      <Input placeholder="Data e Hora" value={dataHora} onChangeText={setDataHora} />
      <Input placeholder="Valor sugerido" keyboardType="numeric" value={valor} onChangeText={setValor} />
      <Button title="Pedir Carona" onPress={() => console.log("Carona solicitada")} />
      <Button title="Sair" onPress={signOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
});
