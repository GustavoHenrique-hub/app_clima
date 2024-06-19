import {
  Tempeature,
  TempeatureCardTop,
  TempeatureCardTopMinMax,
  TempeatureCardMid,
  TempeatureCardMidCity,
  TemperatureCardMidNumber,
  TempeatureCardBot,
  TempeatureCardBotDescription,
  TempeatureCardBotCurrentDate
} from "./styles";
import { useFonts, Nunito_700Bold } from "@expo-google-fonts/nunito";

export default function Card(props) {
  const [fontLoaded] = useFonts({
    Nunito_700Bold,
  });

  if (!fontLoaded) {
    return null;
  }
  return (
    <Tempeature>
      <TempeatureCardTop>
        <TempeatureCardTopMinMax style={{ fontFamily: "Nunito_700Bold" }}>
        {`Min ${Number.isNaN(Number.parseInt(props.tempMin)) === true
            ? ""
            : `${Number.parseInt(props.tempMin)}°`}`}
        </TempeatureCardTopMinMax>
        <TempeatureCardTopMinMax style={{ fontFamily: "Nunito_700Bold" }}>
        {`Max ${Number.isNaN(Number.parseInt(props.tempMax)) === true
            ? ""
            : `${Number.parseInt(props.tempMax)}°`}`}
        </TempeatureCardTopMinMax>
      </TempeatureCardTop>

      <TempeatureCardMid>
        <TempeatureCardMidCity style={{ fontFamily: "Nunito_700Bold" }}>
          {props.city}
        </TempeatureCardMidCity>
        <TemperatureCardMidNumber style={{ fontFamily: "Nunito_700Bold" }}>
          {Number.isNaN(Number.parseInt(props.temp)) === true
            ? ""
            : `${Number.parseInt(props.temp)}°c`}
        </TemperatureCardMidNumber>
      </TempeatureCardMid>

      <TempeatureCardBot>
        <TempeatureCardBotDescription style={{ fontFamily: "Nunito_700Bold" }}>
          {props.desc}
        </TempeatureCardBotDescription>
        <TempeatureCardBotCurrentDate style={{ fontFamily: "Nunito_700Bold" }}>
          {props.currentDate}
        </TempeatureCardBotCurrentDate>
      </TempeatureCardBot>
    </Tempeature>
  );
}
