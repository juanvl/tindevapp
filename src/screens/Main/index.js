import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import AsyncStorage from "@react-native-community/async-storage";

import api from "~services/api";
import logo from "~assets/logo.png";
import like from "~assets/like.png";
import dislike from "~assets/dislike.png";
import itsamatch from "~assets/itsamatch.png";

import * as S from "./styles";

const Main = ({ navigation }) => {
  const userId = navigation.getParam("userId");
  const [users, setUsers] = useState([]);
  const [matchDev, setMatchDev] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await api.get("/devs", {
        headers: {
          user: userId
        }
      });
      setUsers(res.data);
    })();
  }, [userId]);

  useEffect(() => {
    const socket = io("http://localhost:3333", {
      query: { userId }
    });

    socket.on("match", dev => {
      setMatchDev(dev);
    });
  }, [userId]);

  const handleLike = async () => {
    const [user, ...rest] = users;

    await api.post(`/devs/${user._id}/likes`, null, {
      headers: {
        user: userId
      }
    });

    setUsers(rest);
  };

  const handleDislike = async () => {
    const [user, ...rest] = users;

    await api.post(`/devs/${user._id}/dislikes`, null, {
      headers: {
        user: userId
      }
    });

    setUsers(rest);
  };

  const logout = async () => {
    await AsyncStorage.removeItem("userId");
    navigation.navigate("Login");
  };

  return (
    <S.Container>
      <S.LogoutButton onPress={logout}>
        <S.Logo source={logo}></S.Logo>
      </S.LogoutButton>

      {users.length > 0 ? (
        <>
          <S.CardsContainer>
            {users.map((user, index) => (
              <S.Card key={user._id} zIndex={users.length - index}>
                <S.CardImage
                  source={{
                    uri: user.avatar
                  }}
                />
                <S.Footer>
                  <S.Name>{user.name}</S.Name>
                  <S.Bio numberOfLines={3}>{user.bio}</S.Bio>
                </S.Footer>
              </S.Card>
            ))}
          </S.CardsContainer>

          <S.ButtonsContainer>
            <S.ChooseButton onPress={handleDislike}>
              <S.ChooseButtonImage source={dislike}></S.ChooseButtonImage>
            </S.ChooseButton>
            <S.ChooseButton onPress={handleLike}>
              <S.ChooseButtonImage source={like}></S.ChooseButtonImage>
            </S.ChooseButton>
          </S.ButtonsContainer>
        </>
      ) : (
        <S.EmptyUsersText>Acabaram os devs :/</S.EmptyUsersText>
      )}

      {matchDev && (
        <S.MatchContainer>
          <S.ItsAMatchImage source={itsamatch} />
          <S.MatchDevAvatar
            source={{
              uri: matchDev.avatar
            }}
          />
          <S.MatchDevName>{matchDev.name}</S.MatchDevName>
          <S.MatchDevBio>{matchDev.bio}</S.MatchDevBio>
          <S.CloseMatchButton type="button" onPress={() => setMatchDev(null)}>
            <S.CloseMatchButtonText>Fechar</S.CloseMatchButtonText>
          </S.CloseMatchButton>
        </S.MatchContainer>
      )}
    </S.Container>
  );
};

export default Main;
