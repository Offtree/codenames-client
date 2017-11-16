import { Players, MasterCard, Coordinate, SubmittedGuess } from './interfaces';
const RED_COLOR = '#ff2d00';
const BLUE_COLOR = '#2eaef1';
const YELLOW_COLOR = '#fadd10';
const BLACK_COLOR = '#444444';

export const getPlayerColor = (player: Players): string => {
  switch (player) {
    case Players.BLUE:
      return BLUE_COLOR;
    case Players.RED:
      return RED_COLOR;
    case Players.BOMB:
      return BLACK_COLOR;
    case Players.NOONE:
      return YELLOW_COLOR;
    default:
      return 'white';
  }
};

export const gameRow = [0, 1, 2, 3, 4];
export const getTileColor = (coords: Coordinate, masterCard: MasterCard): string => {
  let color = getPlayerColor(Players.NOONE);
  masterCard.placements[Players.BLUE].forEach((coord) => {
    if (coord[0] === coords[0] && coord[1] === coords[1]) {
      color = getPlayerColor(Players.BLUE);
    }
  });
  masterCard.placements[Players.RED].forEach((coord) => {
    if (coord[0] === coords[0] && coord[1] === coords[1]) {
      color = getPlayerColor(Players.RED);
    }
  });
  masterCard.placements[Players.BOMB].forEach((coord) => {
    if (coord[0] === coords[0] && coord[1] === coords[1]) {
      color = getPlayerColor(Players.BOMB);
    }
  });
  return color;
};
export const getTileOwner = (coords: Coordinate, masterCard: MasterCard): Players => {
  let owner = Players.NOONE;
  masterCard.placements[Players.BLUE].forEach((coord) => {
    if (coord[0] === coords[0] && coord[1] === coords[1]) {
      owner = Players.BLUE;
    }
  });
  masterCard.placements[Players.RED].forEach((coord) => {
    if (coord[0] === coords[0] && coord[1] === coords[1]) {
      owner = Players.RED;
    }
  });
  masterCard.placements[Players.BOMB].forEach((coord) => {
    if (coord[0] === coords[0] && coord[1] === coords[1]) {
      owner = Players.BOMB;
    }
  });
  return owner;
};

export const getBorderColor = (masterCard: MasterCard): string => {
  let color = BLACK_COLOR;
  if (masterCard.firstPlayer === Players.BLUE) {
    color = BLUE_COLOR;
  }
  if (masterCard.firstPlayer === Players.RED) {
    color = RED_COLOR;
  }
  return color;
};

export const isStagedGuess = (coord: Coordinate, stagedGuess: Coordinate): boolean => {
  return (coord[0] === stagedGuess[0] && coord[1] === stagedGuess[1]);
};

export const ownerOfTile = (coord: Coordinate, submittedGuesses: SubmittedGuess[]): Players|undefined => {
  let ownedBy = undefined;
  submittedGuesses.forEach((guess) => {
    if (isStagedGuess(coord, guess.coordinate)) {
      ownedBy = guess.owner;
    }
  });
  return ownedBy;
};
