import styled from "styled-components/native";

export const ForecastContainerAll = styled.View`
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const ForecastContainerDay = styled.Text`
  font-family: "Nunito_700Bold";
  color: #cbcbcb;
  font-size: 20px;
  text-align: center;
`;

export const ForecastContainerTemp = styled.Text`
  font-family: "Nunito_700Bold";
  color: #cbcbcb;
  font-size: 30px;
  text-align: center;
`;

export const ForecastContainerTexts = styled.Text`
  font-family: "Nunito_700Bold";
  color: #cbcbcb;
  font-size: 20px;
  text-align: center;
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
