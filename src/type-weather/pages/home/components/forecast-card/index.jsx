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
          <ForecastContainerDay>{`${props.days}`}</ForecastContainerDay>
        ) : (
          " "
        )}

        {props.main && props.main !== null ? (
          <ForecastContainerTemp>{`${props.temp}°C`}</ForecastContainerTemp>
        ) : (
          " "
        )}

        {props.main && props.main !== null ? (
          <ForecastContainerTexts>{`${props.main}`}</ForecastContainerTexts>
        ) : (
          " "
        )}

        {/* {props.tempMin && props.tempMax ? (
          <ForecastContainerViewMinMax>
            <ForecastContainerTexts>{`Min: ${props.tempMin}°`}</ForecastContainerTexts>
            <ForecastContainerTexts>{`Max: ${props.tempMax}°`}</ForecastContainerTexts>
          </ForecastContainerViewMinMax>
        ) : (
          " "
        )} */}

        {/* {props.windSpeed ? (
          <ForecastContainerTexts>{`Wind Speed: ${props.windSpeed}km`}</ForecastContainerTexts>
        ) : (
          " "
        )}

        {props.humidity ? (
          <ForecastContainerTexts>{`Humidity: ${props.humidity}`}</ForecastContainerTexts>
        ) : (
          " "
        )} */}
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
