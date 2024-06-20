import styled from "styled-components/native";

export const Tempeature = styled.View`
  width: 360px;
  height: 246px;
  background-color: rgba(0, 0, 0, .5);
  border-radius: 10px;
  justify-content: center;
`;

export const TempeatureCardTop = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 12px 16px;
`;

export const TempeatureCardTopMinMax = styled.Text`
  font-family: "Nunito_700Bold";
  font-size: 15px;
  color: #cbcbcb;
`;

export const TempeatureCardMid = styled.View`
  display: flex;
  flex-direction: column;
`;

export const TempeatureCardMidCity = styled.Text`
  font-family: "Nunito_700Bold";
  text-align: center;
  font-size: 19px;
  color: #cbcbcb;
`;

export const TemperatureCardMidNumber = styled.Text`
  font-family: "Nunito_700Bold";
  text-align: center;
  font-size: 78px;
  color: #cbcbcb;
`;

export const TempeatureCardBot = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 42px;
  margin-left: 10px;
  margin-right: 10px;
`;

export const TempeatureCardBotDescription = styled.Text`
  font-family: "Nunito_700Bold";
  font-size: 15px;
  color: #cbcbcb;
`;

export const TempeatureCardBotCurrentDate = styled.Text`
  font-family: "Nunito_700Bold";
  font-size: 15px;
  color: #cbcbcb;
`;
