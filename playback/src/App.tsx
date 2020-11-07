import React, { useEffect, useState } from "react";
import { ActionResponseType, EmptyAction } from "./Types";
import "./App.css";

const parseEmoji = (str: string) =>
  str.length === 0 ? "" : String.fromCodePoint(parseInt(str));

export const App = () => {
  const [data, setData] = useState(EmptyAction);
  useEffect(() => {
    const socket = new WebSocket(
      "wss://kvh25rp7a4.execute-api.us-east-1.amazonaws.com/production"
    );
    socket.onmessage = (response) => {
      const action: ActionResponseType = JSON.parse(response.data);
      // this parses as a string for some godforsaken reason, so let's fix it
      action.data.season.N = parseInt("" + action.data.season.N);
      setData(action.data);
    };
  }, []);

  const away_emoji = parseEmoji(data.awayTeamEmoji.S);
  const home_emoji = parseEmoji(data.homeTeamEmoji.S);

  const teamText = (forBattingTeam: string, forPitchingTeam: string) =>
    data.topOfInning.BOOL ? forBattingTeam : forPitchingTeam;

  return (
    <div className="App">
      <h1>Dallas Steaks : Playback</h1>
      <h2>
        Season {1 + data.season.N} : Day {data.day.N}
      </h2>
      <div>
        {away_emoji}
        <span className={teamText("at_bat", "")}>{data.awayTeamName.S}</span>
        {" at "}
        <span className={teamText("", "at_bat")}>{data.homeTeamName.S}</span>
        {home_emoji}
      </div>
      <h3>{data.lastUpdate.S}</h3>
      <p>
        {teamText(data.homePitcherName.S, data.awayPitcherName.S) || "..."}{" "}
        pitching for the {teamText(data.homeTeamName.S, data.awayTeamName.S)}
      </p>
      <p>
        {teamText(data.awayBatterName.S, data.homeBatterName.S) || "..."}{" "}
        batting for the {teamText(data.awayTeamName.S, data.homeTeamName.S)}
      </p>
      <p>
        {data.atBatBalls.N}-{data.atBatStrikes.N} with {data.halfInningOuts.N}
        {data.halfInningOuts.N === 1 ? " Out" : " Outs"}
      </p>
    </div>
  );
};
