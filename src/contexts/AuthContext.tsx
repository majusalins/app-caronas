import React, { createContext, useContext, useState, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AuthContextType {
  user: string | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // Verifica se há um usuário salvo no AsyncStorage
    const loadUser = async () => {
      const storedUser = await AsyncStorage.getItem("@user");
      if (storedUser) setUser(storedUser);
      setLoading(false);
    };
    loadUser();
  }, []);

  const signIn = async (email: string, password: string) => {
    // Simula login
    await AsyncStorage.setItem("@user", email);
    setUser(email);
  };

  const signOut = async () => {
    await AsyncStorage.removeItem("@user");
    setUser(null);
  };


  return (
    <AuthContext.Provider value={{ user, signIn, signOut, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  return context;
};
