import React from "react";
import {
  Container,
  HeaderContainer,
  HeaderImg,
  ScrollScreen,
  MiddleContainer,
  MiddleContainerForecastView,
  ForecastContainer,
  Input,
} from "./styles";
import { useState } from "react";
import Background from "../../assets/images/ceu-limpo-background.png";
import Logo from "../../assets/images/logotipo-NoSeuTempo.png";
import { useFonts, Nunito_700Bold } from "@expo-google-fonts/nunito";
import Card from "./components/temperature-card/index";
import axios from "axios";
import { FlatList, Dimensions } from "react-native";

import ForecastCard from "./components/forecast-card";

const key = "afb5fd1ea152ce949db3fa511fc4ce34";

const dias = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];

const meses = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const { width } = Dimensions.get("window");

export default function Home() {
  const [stateTemperatura, setStateTemperatura] = useState();
  const [descricao, setDescricao] = useState("");
  const [cidadeInput, setCidadeInput] = useState("");
  const [cidade, setCidade] = useState("");

  const [stateTempMin, setStateTempMin] = useState("");
  const [stateTempMax, setStateTempMax] = useState("");

  const [forecastArray, setForecastArray] = useState([]);

  const [fontLoaded] = useFonts({
    Nunito_700Bold,
  });

  if (!fontLoaded) {
    return null;
  }

  const callApi = () => {
    const searchApi = `https://api.openweathermap.org/data/2.5/weather?q=${cidadeInput}&lang=pt_br&units=metric&appid=${key}`;
    const forecastApi = `https://api.openweathermap.org/data/2.5/forecast?q=${cidadeInput}&appid=${key}&units=metric`;

    try {
      axios
        .get(searchApi)
        .then((dadoTemperatura) => {
          console.log(dadoTemperatura.data.main);
          setDescricao(dadoTemperatura.data.weather[0].description);
          setStateTemperatura(dadoTemperatura.data.main.temp);
          setStateTempMin(dadoTemperatura.data.main.temp_min);
          setStateTempMax(dadoTemperatura.data.main.temp_max);
          setCidade(dadoTemperatura.data.name);
        })
        .catch((error) => {
          console.error(error);
        });

      axios
        .get(forecastApi)
        .then((foreCastData) => {
          const myTempArray = [];
          for (let i = 7; i < 40; i += 8) {
            myTempArray.push({
              main: foreCastData.data.list[i].weather[0].main,
              icon: `https://openweathermap.org/img/wn/${foreCastData.data.list[i].weather[0].icon}.png`,
              temp_max: Number.parseInt(
                foreCastData.data.list[i].main.temp_max
              ),
              temp_min: Number.parseInt(
                foreCastData.data.list[i].main.temp_min
              ),
              humidity: foreCastData.data.list[i].main.humidity,
            });
            console.log(myTempArray);
          }

          setForecastArray(myTempArray);
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (err) {
      console.log("Erro ao consumir alguma api: ", err);
    }
  };

  let now = new Date();

  let daysWeek = dias[now.getDay()];
  let dayOfMonth = now.getDate();
  let monthOfYear = meses[now.getMonth()];
  let year = now.getFullYear();
  let currentDate = `${daysWeek}, ${dayOfMonth} de ${monthOfYear} ${year}`;

  const getWeatherForNextDays = (daysToShow) => {
    const todayIndex = now.getUTCDay();
    let nextDays = [];
    for (let i = 0; i < daysToShow; i++) {
      nextDays.push(dias[(todayIndex + i) % 7]);
    }
    return nextDays;
  };

  const displayedWeather = getWeatherForNextDays(5);

  return (
    <Container source={Background} resizeMode="cover">
      <HeaderContainer>
        <HeaderImg source={Logo} />

        <Input
          placeholder="Pesquisar cidade"
          placeholderTextColor={"#CBCBCB"}
          onChangeText={(newText) => {
            setCidadeInput(newText);
          }}
          onSubmitEditing={callApi}
          style={{ fontFamily: "Nunito_700Bold" }}
        />
      </HeaderContainer>
      <ScrollScreen
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <MiddleContainer>
          <Card
            city={cidade}
            tempMin={stateTempMin}
            tempMax={stateTempMax}
            temp={stateTemperatura}
            desc={descricao}
            currentDate={currentDate}
          />

          <MiddleContainerForecastView>
            <ForecastContainer>
              <FlatList
                data={displayedWeather}
                horizontal
                snapToAlignment={"start"}
                snapToOffsets={[...Array(displayedWeather.length)].map(
                  (x, i) => i * (width * 0.8 - 40) + (i - 1) * 40
                )}
                scrollEventThrottle={16}
                decelerationRate={"normal"}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => String(item)}
                renderItem={({ item, index }) => (
                  <ForecastCard forecastArray={forecastArray} index={index}/>
                )}
              ></FlatList>
            </ForecastContainer>
          </MiddleContainerForecastView>
        </MiddleContainer>
      </ScrollScreen>
    </Container>
  );
}
