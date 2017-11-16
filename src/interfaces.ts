export enum Players {
  BLUE = 'B',
  RED = 'R',
  BOMB = 'X',
  NOONE = 'N'
}
export interface MasterCard {
  firstPlayer: Players;
  placements: {[key in Players]: [number, number][]};
}

export type PlayerGrid = [string, string, string, string, string][];

export type Coordinate = [number | undefined, number | undefined];
export type SubmittedGuess = {
  coordinate: Coordinate;
  owner: Players
};