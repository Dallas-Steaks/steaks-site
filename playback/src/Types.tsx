type BoolValue = {
  BOOL: boolean;
};
type NumberValue = {
  N: number;
};
type StringValue = {
  S: string;
};

export type ActionType = {
  awayOuts: NumberValue;
  awayTeamSecondaryColor: StringValue;
  halfInningOuts: NumberValue;
  homeTeamSecondaryColor: StringValue;

  terminology: StringValue;
  awayTeamNickname: StringValue;
  playCount: NumberValue;
  homeTeam: StringValue;
  phase: NumberValue;
  atBatBalls: NumberValue;
  weather: NumberValue;
  awayTeam: StringValue;
  homePitcherName: StringValue;
  homeOuts: NumberValue;
  halfInningScore: NumberValue;
  rules: StringValue;
  finalized: BoolValue;
  homeBatter: StringValue;
  awayTeamName: StringValue;
  timestamp: StringValue;
  atBatStrikes: NumberValue;
  homeBases: NumberValue;
  hash: StringValue;
  awayTeamColor: StringValue;
  homeBatterName: StringValue;
  seriesLength: NumberValue;
  awayScore: NumberValue;
  homeBalls: NumberValue;
  homeTeamBatterCount: NumberValue;
  next_id: StringValue;
  awayOdds: NumberValue;
  topOfInning: BoolValue;
  season: NumberValue;
  gameComplete: BoolValue;
  awayTeamEmoji: StringValue;
  homeScore: NumberValue;
  awayPitcherName: StringValue;
  awayBalls: NumberValue;
  repeatCount: NumberValue;
  inning: NumberValue;
  awayBatterName: StringValue;
  homeTeamNickname: StringValue;
  awayTeamBatterCount: NumberValue;
  shame: BoolValue;
  gameId: StringValue;
  awayBatter: StringValue;
  homeTeamColor: StringValue;
  gameStart: BoolValue;
  homeOdds: NumberValue;
  homeTeamEmoji: StringValue;
  statsheet: StringValue;
  lastUpdate: StringValue;
  homePitcher: StringValue;
  baserunnerCount: NumberValue;
  awayPitcher: StringValue;
  homeTeamName: StringValue;
  awayBases: NumberValue;
  awayStrikes: NumberValue;
  day: NumberValue;
  homeStrikes: NumberValue;
  seriesIndex: NumberValue;
  isPostseason: BoolValue;
};

export type ActionResponseType = {
  data: ActionType;
};

export const EmptyAction: ActionType = {
  awayOuts: { N: 0 },
  awayTeamSecondaryColor: { S: "" },
  homeTeamSecondaryColor: { S: "" },
  halfInningOuts: { N: 0 },
  terminology: { S: "" },
  awayTeamNickname: { S: "" },
  playCount: { N: 0 },
  homeTeam: { S: "" },
  phase: { N: 0 },
  atBatBalls: { N: 0 },
  weather: { N: 0 },
  awayTeam: { S: "" },
  homePitcherName: { S: "" },
  homeOuts: { N: 0 },
  halfInningScore: { N: 0 },
  rules: { S: "" },
  finalized: { BOOL: false },
  homeBatter: { S: "" },
  awayTeamName: { S: "" },
  timestamp: { S: "" },
  atBatStrikes: { N: 0 },
  homeBases: { N: 0 },
  hash: { S: "" },
  awayTeamColor: { S: "" },
  homeBatterName: { S: "" },
  seriesLength: { N: 0 },
  awayScore: { N: 0 },
  homeBalls: { N: 0 },
  homeTeamBatterCount: { N: 0 },
  next_id: { S: "" },
  awayOdds: { N: 0 },
  topOfInning: { BOOL: false },
  season: { N: 0 },
  gameComplete: { BOOL: false },
  awayTeamEmoji: { S: "" },
  homeScore: { N: 0 },
  awayPitcherName: { S: "" },
  awayBalls: { N: 0 },
  repeatCount: { N: 0 },
  inning: { N: 0 },
  awayBatterName: { S: "" },
  homeTeamNickname: { S: "" },
  awayTeamBatterCount: { N: 0 },
  shame: { BOOL: false },
  gameId: { S: "" },
  awayBatter: { S: "" },
  homeTeamColor: { S: "" },
  gameStart: { BOOL: false },
  homeOdds: { N: 0 },
  homeTeamEmoji: { S: "" },
  statsheet: { S: "" },
  lastUpdate: { S: "" },
  homePitcher: { S: "" },
  baserunnerCount: { N: 0 },
  awayPitcher: { S: "" },
  homeTeamName: { S: "" },
  awayBases: { N: 0 },
  awayStrikes: { N: 0 },
  day: { N: 0 },
  homeStrikes: { N: 0 },
  seriesIndex: { N: 0 },
  isPostseason: { BOOL: false },
};
