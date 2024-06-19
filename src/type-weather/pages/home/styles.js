import styled from "styled-components/native";

export const Container = styled.ImageBackground`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const HeaderContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  margin-top: 20%;
`;

export const HeaderImg = styled.Image`
  width: 176px;
  height: 108px;
`;

export const TitleText = styled.Text`
  font-size: 20px;
  color: white;
  font-weight: bold;
`;

export const TitleContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 188px;
  gap: 4px;
`;

export const Subtitle = styled.Text`
  font-size: 14px;
  font-weight: normal;
  color: white;
`;

export const TitleColored = styled.Text`
  font-size: 20px;
  color: #8fb2f5;
  font-weight: bold;
`;

export const Input = styled.TextInput`
  width: 91.5%;
  height: 70px;
  padding: 16px;
  color: white;
  border-radius: 10px;
  background-color: #000000;
  opacity: 0.5;
`;

export const ForecastContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 13px;
  padding-bottom: 100px;
`;

export const Forecast = styled.View`
  width: 300px;
  height: 160px;
  background-color: #000000;
  border-radius: 20px;
  opacity: 0.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MiddleContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MiddleContainerCard = styled.View`
  margin-top: 20px;
`;

export const MiddleContainerForecastView = styled.View`
  margin-top: 20px;
`;

export const ForecastDay = styled.Text`
  color: white;
`


export const ScrollScreen = styled.ScrollView``;
