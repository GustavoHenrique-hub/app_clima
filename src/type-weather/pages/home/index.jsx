import React from "react";
import {
  Container,
  Forecast,
  ForecastContainer,
  HeaderContainer,
  ContainerInput,
  HeaderImg,
  ScrollScreen,
  MiddleContainer,
  MiddleContainerForecastView,
  Input,
} from "./styles";
import { useState } from "react";
import Background from "../../assets/images/ceu-limpo-background.png";
import Logo from "../../assets/images/logotipo-NoSeuTempo.png";
import { useFonts, Nunito_700Bold } from "@expo-google-fonts/nunito";
import Card from "./components/temperature-card";
import axios from "axios";

const key = "afb5fd1ea152ce949db3fa511fc4ce34";

export default function Home() {
  const [stateTemperatura, setStateTemperatura] = useState();
  const [descricao, setDescricao] = useState("");
  const [cidade, setCidade] = useState("");

  const [fontLoaded] = useFonts({
    Nunito_700Bold,
  });

  if (!fontLoaded) {
    return null;
  }

  const callApi = () => {
    const searchApi = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&lang=pt_br&units=metric&appid=${key}`;
    const forecastApi = `https://api.openweathermap.org/data/2.5/forecast?q=${cidade}&appid=${key}&units=metric}`;

    try {
      axios
        .get(searchApi)
        .then((dadoTemperatura) => {
          console.log(dadoTemperatura.data.main.temp);
          setDescricao(dadoTemperatura.data.weather[0].description);
          setStateTemperatura(dadoTemperatura.data.main.temp);
        })
        .catch((error) => {
          console.error(error);
        });

      axios
        .get(forecastApi)
        .then((foreCastData) => {
          for (let i = 7; i < 40; i += 8) {
            console.log(foreCastData.data.list[i].dt_txt);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (err) {
      console.log("Erro ao consumir alguma api: ", err);
    }
  };

  return (
    <Container source={Background} resizeMode="cover">
      <HeaderContainer>
        <HeaderImg source={Logo} />
      
        <Input
          placeholder="Pesquisar cidade"
          placeholderTextColor={"#CBCBCB"}
          onChangeText={(newText) => {
            setCidade(newText);
          }}
          onSubmitEditing={callApi}
        />
        </HeaderContainer>
      <ScrollScreen contentContainerStyle={{
        display: "flex",
        flexDirection: "row"
      }}>
        <MiddleContainer>
          <Card city={cidade} temp={stateTemperatura} desc={descricao} />
          <ScrollScreen
          horizontal={true}>
          <MiddleContainerForecastView>
            <ForecastContainer>
              <Forecast></Forecast>
              <Forecast></Forecast>
              <Forecast></Forecast>
              <Forecast></Forecast>
              <Forecast></Forecast>
              <Forecast></Forecast>
              <Forecast></Forecast>
              <Forecast></Forecast>
            </ForecastContainer>
          </MiddleContainerForecastView>
          </ScrollScreen>
        </MiddleContainer>
      </ScrollScreen>
    </Container>
  );
}
