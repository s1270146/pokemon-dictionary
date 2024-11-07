import { apiPath } from '@/consts';
import { Pokemon } from '@/types';
import { createContext, useContext, useEffect, useState } from 'react';

export const PokemonContext = createContext<Pokemon | undefined>(undefined);

export const usePokemonContext = (): Pokemon => {
  const context = useContext(PokemonContext);
  if (!context) {
    throw new Error('useDataContext must be used within a DataProvider');
  }
  return context;
};

export interface ApiPokemon {
  pokemon_no: string;
  pokemon_name: string;
  img_url: string;
  sex: number;
  category: string;
  weight: number;
  height: number;
  hp: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
  descriptions: string[];
  types: {
    type_id: number;
    type_name: string;
    img_url: string;
  }[];
  properties: {
    property_id: number;
    property_name: string;
    description: string;
  }[];
}

export const useFetchPokemon = (pokemonNo: number) => {
  const [data, setData] = useState<Pokemon | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${apiPath}/pokemon/${pokemonNo.toString()}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const jsonData: ApiPokemon = await response.json();
        const result: Pokemon = {
          pokemonNo: jsonData.pokemon_name,
          pokemonName: jsonData.pokemon_name,
          imgUrl: jsonData.img_url,
          sex: jsonData.sex,
          category: jsonData.category,
          weight: jsonData.weight,
          height: jsonData.height,
          hp: jsonData.hp,
          attack: jsonData.attack,
          defense: jsonData.defense,
          specialAttack: jsonData.special_attack,
          specialDefense: jsonData.special_defense,
          speed: jsonData.speed,
          descriptions: jsonData.descriptions,
          types: jsonData.types.map((type) => {
            return {
              typeId: type.type_id,
              typeName: type.type_name,
              imgUrl: type.img_url,
            };
          }),
          properties: jsonData.properties.map((property) => {
            return {
              propertyId: property.property_id,
              propertyName: property.property_name,
              description: property.description,
            };
          }),
        };
        setData(result);
      } catch (error) {
        console.error(
          error instanceof Error ? error.message : 'An unknown error occurred.'
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [pokemonNo]);

  return { data, isLoading };
};
