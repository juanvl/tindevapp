import React, { useState, useEffect } from "react";
import { Platform } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

import api from "~services/api";
import logo from "~assets/logo.png";
import * as S from "./styles";

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    (async () => {
      const userId = await AsyncStorage.getItem("userId");
      if (userId) {
        navigation.navigate("Main", { userId });
      }
    })();
  }, []);

  const onLogin = async () => {
    const res = await api.post("/devs", { username });
    const { _id } = res.data;

    await AsyncStorage.setItem("userId", _id);
    navigation.navigate("Main", { userId: _id });
  };

  return (
    <S.Container behavior="padding" enabled={Platform.OS === "ios"}>
      <S.LogoImage source={logo} />
      <S.UserInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Digite seu usuário do GitHub"
        placeholderTextColor="#999"
        onChangeText={setUsername}
        value={username}
      />
      <S.LoginButton onPress={onLogin}>
        <S.LoginButtonText>Entrar</S.LoginButtonText>
      </S.LoginButton>
    </S.Container>
  );
};

export default Login;
