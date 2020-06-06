export interface Card {
  front: string;
  back: string;
}

export interface Deck {
  title: string;
  cards: Card[];
}
