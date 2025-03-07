import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Input placeholder="Nome completo" value={nome} onChangeText={setNome} />
      <Input placeholder="Telefone" keyboardType="phone-pad" value={telefone} onChangeText={setTelefone} />
      <Input placeholder="E-mail" keyboardType="email-address" value={email} onChangeText={setEmail} />
      <Input placeholder="Senha" secureTextEntry value={password} onChangeText={setPassword} />
      <Button title="Cadastrar" onPress={() => console.log("Cadastro realizado")} />
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
