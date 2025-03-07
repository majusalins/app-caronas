import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Login } from "../screens/LoginScreen";
import { Cadastro } from "../screens/CadastroScreen";
import { ProcurarCarona } from "../screens/BuscarCaronaScreen";
import { VisualizarCaronas } from "../screens/VisualizarCaronasScreen";
import { useAuth } from "../contexts/AuthContext";
import { ActivityIndicator, View } from "react-native";

const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#007BFF" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }} id={undefined}>
        {user ? (
          <>
            <Tab.Screen name="Procurar Carona" component={ProcurarCarona} />
            <Tab.Screen name="Caronas" component={VisualizarCaronas} />
          </>
        ) : (
          <>
            <Tab.Screen name="Login" component={Login} />
            <Tab.Screen name="Cadastro" component={Cadastro} />
          </>
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
};
