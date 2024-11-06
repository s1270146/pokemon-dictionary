export type SelectOption = {
  label: string;
  value: string?;
};

export interface PokemonForList {
  pokemonNo: string;
  pokemonName: string;
  imgUrl: string;
}

export interface Pokemon {
  pokemonNo: string;
  pokemonName: string;
  imgUrl: string;
  sex: number;
  category: string;
  weight: number;
  height: number;
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
  descriptions: string[];
  types: {
    typeId: number;
    typeName: string;
    imgUrl: string;
  }[];
  properties: {
    propertyId: number;
    propertyName: string;
    description: string;
  }[];
}
