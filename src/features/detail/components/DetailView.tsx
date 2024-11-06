'use client';

import { useParams } from 'next/navigation';
import { PokemonContext, useFetchPokemon } from '../hooks';
import DetailNavigation from '../navigation/components/DetailNavigation';
import ProfileDetail from '../profile/components/ProfileDetail';

export default function DetailView() {
  const params = useParams<{ no: string }>();
  const { data, isLoading } = useFetchPokemon(Number(params.no));
  return (
    <PokemonContext.Provider value={isLoading ? undefined : data}>
      <DetailNavigation />
      <ProfileDetail />
    </PokemonContext.Provider>
  );
}
