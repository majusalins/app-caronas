import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useAuth } from "../contexts/AuthContext";

export const Login = () => {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>E-mail</Text>
        <Input placeholder="Digite seu e-mail" keyboardType="email-address" value={email} onChangeText={setEmail} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Senha</Text>
        <Input placeholder="Digite sua senha" secureTextEntry value={password} onChangeText={setPassword} />
      </View>

      <Button title="Entrar" onPress={() => signIn(email, password)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#155310",
  },
});

