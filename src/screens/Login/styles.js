import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: #f5f5f5;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

export const LogoImage = styled.Image``;

export const UserInput = styled.TextInput`
  height: 46px;
  align-self: stretch;
  background-color: #fff;
  border-width: 1px;
  border-color: #ddd;
  border-radius: 4px;
  margin-top: 20px;
  padding-horizontal: 15px;
`;

export const LoginButton = styled.TouchableOpacity`
  height: 46px;
  align-self: stretch;
  background-color: #df4723;
  border-radius: 4px;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
`;

export const LoginButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
