import { apiPath } from '@/consts';
import { PokemonForList } from '@/types';

// 予想されるAPIのレスポンスの型を定義
interface ApiPokemonListData {
  pokemon_no: string;
  pokemon_name: string;
  img_url: string;
}

export const fetchPokemonList = async (): Promise<PokemonForList[]> => {
  try {
    const response = await fetch(`${apiPath}/pokemon`);

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    // 型を明示的に指定
    const result: ApiPokemonListData[] = await response.json();

    // マッピングする際には型の恩恵を受けます
    const pokemons: PokemonForList[] = result.map((value) => ({
      pokemonNo: String(value.pokemon_no),
      pokemonName: value.pokemon_name,
      imgUrl: value.img_url,
    }));
    return pokemons;
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error fetching data:', error.message);
    } else {
      console.error('An unknown error occurred.');
    }
    return []; // エラー時は空配列を返す
  }
};
