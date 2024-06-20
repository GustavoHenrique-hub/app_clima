import { Dimensions } from "react-native";
import {
  ForecastContainerAll,
  ForecastContainerTexts,
  ForecastContainerViewMinMax,
  ForecastContainerLeft,
  ForecastContainerRight,
  ForecastContainerRightImage,
} from "./styles";

const { width } = Dimensions.get("window");

export default function ForecastCard(props) {
  return (
    <ForecastContainerAll
      style={{
        height: width / 1.8,
        width: width * 0.8 - 32,
        marginHorizontal: 16,
      }}
    >
      <ForecastContainerLeft>
        {props.days && props.days !== null ? (
          <ForecastContainerTexts>{`Day: ${props.days}`}</ForecastContainerTexts>
        ) : (
          " "
        )}

        {props.main && props.main !== null ? (
          <ForecastContainerTexts>{`Weather: ${props.main}`}</ForecastContainerTexts>
        ) : (
          " "
        )}

        {props.tempMin && props.tempMax ? (
          <ForecastContainerViewMinMax>
            <ForecastContainerTexts>{`Min: ${props.tempMin}°`}</ForecastContainerTexts>
            <ForecastContainerTexts>{`Max: ${props.tempMax}°`}</ForecastContainerTexts>
          </ForecastContainerViewMinMax>
        ) : (
          " "
        )}

        {props.windSpeed ? (
            <ForecastContainerTexts>{`Wind Speed: ${props.windSpeed}km`}</ForecastContainerTexts>
        ) : (
          " "
        )}

        {props.humidity ? (
            <ForecastContainerTexts>{`Humidity: ${props.humidity}`}</ForecastContainerTexts>
        ) : (
          " "
        )}
      </ForecastContainerLeft>

      <ForecastContainerRight>
        <ForecastContainerRightImage
          src={props.weatherIcon}
          alt="Weather icon"
        />
      </ForecastContainerRight>
    </ForecastContainerAll>
  );
}
