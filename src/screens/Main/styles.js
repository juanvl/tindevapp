import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f5f5f5;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.Image`
  margin-top: 30px;
`;

export const CardsContainer = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  max-height: 500px;
`;

export const Card = styled.View`
  border-width: 1px;
  border-color: #ddd;
  border-radius: 8px;
  margin: 30px;
  overflow: hidden;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: ${({ zIndex }) => zIndex};
`;

export const CardImage = styled.Image`
  flex: 1;
  height: 300px;
`;

export const Footer = styled.View`
  background-color: #fff;
  padding: 15px 20px;
`;

export const Name = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

export const Bio = styled.Text`
  font-size: 14px;
  margin-top: 5px;
  color: #999;
  line-height: 18px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-bottom: 30px;
`;

export const ChooseButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  margin-horizontal: 20px;
  elevation: 2px;
  shadow-color: #000;
  shadow-opacity: 0.05;
  shadow-radius: 2px;
  shadow-offset: 0 2px;
`;

export const ChooseButtonImage = styled.Image``;

export const EmptyUsersText = styled.Text`
  margin: auto;
  color: #999;
  font-size: 24px;
  font-weight: bold;
`;

export const LogoutButton = styled.TouchableOpacity``;

export const MatchContainer = styled.View`
  ${StyleSheet.absoluteFillObject};
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const ItsAMatchImage = styled.Image`
  height: 60px;
  resize-mode: contain;
`;

export const MatchDevAvatar = styled.Image`
  width: 160px;
  height: 160px;
  border-radius: 80px;
  border-width: 5px;
  border-color: #fff;
  margin: 30px 0;
`;

export const MatchDevName = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: #fff;
`;

export const MatchDevBio = styled.Text`
  margin-top: 10px;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  padding-horizontal: 30px;
  max-width: 400px;
  color: rgba(255, 255, 255, 0.8);
`;

export const CloseMatchButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export const CloseMatchButtonText = styled.Text`
  font-weight: bold;
  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
  text-align: center;
`;
