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

export default function Card(props) {
  return (
    <Tempeature>
      <TempeatureCardTop>
        <TempeatureCardTopMinMax>
        {`Min ${Number.isNaN(Number.parseInt(props.tempMin)) === true
            ? ""
            : `${Number.parseInt(props.tempMin)}°`}`}
        </TempeatureCardTopMinMax>
        <TempeatureCardTopMinMax>
        {`Max ${Number.isNaN(Number.parseInt(props.tempMax)) === true
            ? ""
            : `${Number.parseInt(props.tempMax)}°`}`}
        </TempeatureCardTopMinMax>
      </TempeatureCardTop>

      <TempeatureCardMid>
        <TempeatureCardMidCity>
          {props.city}
        </TempeatureCardMidCity>
        <TemperatureCardMidNumber>
          {Number.isNaN(Number.parseInt(props.temp)) === true
            ? ""
            : `${Number.parseInt(props.temp)}°c`}
        </TemperatureCardMidNumber>
      </TempeatureCardMid>

      <TempeatureCardBot>
        <TempeatureCardBotDescription>
          {props.desc}
        </TempeatureCardBotDescription>
        <TempeatureCardBotCurrentDate>
          {props.currentDate}
        </TempeatureCardBotCurrentDate>
      </TempeatureCardBot>
    </Tempeature>
  );
}
