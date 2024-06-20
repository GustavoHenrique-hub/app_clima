
import { Dimensions } from "react-native";
import {
  ForecastContainerAll,
  ForecastContainerTexts,
  ForecastContainerLeft,
  ForecastContainerRight,
  ForecastContainerRightImage,
  ForecastContainerDay,
  ForecastContainerTemp,
} from "./styles";

const {width} = Dimensions.get("window")

export default function ForecastCard(props) {
  return (
    <ForecastContainerAll
    style={{
      height: width / 1.4,
      width: width * 0.45 - 32,
      marginHorizontal: 16,
    }}>
      <ForecastContainerLeft>
        {props.days && props.days !== null ? (
          <ForecastContainerDay>{`${props.days}`}</ForecastContainerDay>
        ) : (
          " "
        )}

        {props.main && props.main !== null ? (
          <ForecastContainerTemp>{`${props.temp}°C`}</ForecastContainerTemp>
        ) : (
          " "
        )}

        <ForecastContainerRightImage
          src={props.weatherIcon}
          alt="Weather icon"
        />

        {props.main && props.main !== null ? (
          <ForecastContainerTexts>{`${props.main}`}</ForecastContainerTexts>
        ) : (
          " "
        )}

      </ForecastContainerLeft>
    </ForecastContainerAll>
  );
}
