import styled from "styled-components/native";

export const ForecastContainerAll = styled.View`
  width: 300px;
  height: 160px;
  background-color: rgba(0, 0, 0, .5);
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const ForecastContainerTexts = styled.Text`
  font-family: "Nunito_700Bold";
  color: white;
  font-size: 15px;
`;

export const ForecastContainerLeft = styled.View`
  display: flex;
  flex-direction: column;
  padding: 16px 10%;
  gap: 15px;
`;

export const ForecastContainerViewMinMax = styled.View`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const ForecastContainerRight = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ForecastContainerRightImage = styled.Image`
  width: 100px;
  height: 100px;
  margin-right: 10px;
`;

