'use client';

import { fetchPokemonList } from '@/apis/pokemon';
import Pickup from '@/components/layouts/pickup/Pickup';
import { ballPath } from '@/consts';
import { PokemonForList } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [pokemons, setPokemons] = useState<PokemonForList[]>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const data = await fetchPokemonList();
        setPokemons(data);
      } catch (error) {
        if (error instanceof Error) {
          console.error('Error fetching data:', error.message);
        } else {
          console.error('An unknown error occurred.');
        }
      } finally {
        setLoading(false);
      }
    };

    getPokemon();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-[80vh] flex justify-center items-center">
        <Image
          className="h-28"
          src={ballPath}
          alt="ball"
          width={200}
          height={200}
        />
      </div>
    );
  }

  return (
    <div>
      <Pickup />
      <div className="mx-10 flex flex-wrap space-x-2">
        {pokemons &&
          pokemons.map((value, index) => {
            return (
              <div key={index} className="w-[12.5%] mb-4">
                <Link href={`/detail/${value.pokemonNo.padStart(4, '0')}`}>
                  <div className="border rounded">
                    <Image
                      src={value.imgUrl}
                      alt={value.pokemonName}
                      width={300}
                      height={300}
                    />
                  </div>
                  <p>{value.pokemonName}</p>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}
