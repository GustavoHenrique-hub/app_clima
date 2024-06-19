import { Dimensions } from "react-native";
import { Forecast, ForecastDay } from "./styles";
import { useFonts, Nunito_700Bold } from "@expo-google-fonts/nunito";

const { width } = Dimensions.get("window");

export default function ForecastCard(props) {
  const [fontLoaded] = useFonts({
    Nunito_700Bold,
  });

  if (!fontLoaded) {
    return null;
  }
  return (
    <Forecast
      style={{
        height: width / 2.6,
        width: width * 0.8 - 32,
        marginHorizontal: 16,
      }}
    >
      {props.forecastArray[props.index] &&
      props.forecastArray[props.index].main !== null ? (
        <ForecastDay style={{ fontFamily: "Nunito_700Bold" }}>
          {props.forecastArray[props.index]}
        </ForecastDay>
      ) : (
        <ForecastDay>{props.forecastArray[props.index]}</ForecastDay>
      )}
    </Forecast>
  );
}
