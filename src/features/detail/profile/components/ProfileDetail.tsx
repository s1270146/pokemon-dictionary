'use client';

import SpecGauge from '@/components/detail/SpecGauge';
import Button from '@/components/elements/button/Button';
import { usePropertyModal } from '../hooks';
import PropertyModal from './PropertyModal';
import { useContext } from 'react';
import { PokemonContext } from '../../hooks';

export default function ProfileDetail() {
  const pokemon = useContext(PokemonContext);
  const { isOpen, openModal, closeModal } = usePropertyModal();

  return (
    <div className="flex flex-col items-center py-10 bg-white">
      <div style={{ width: 'calc(( 1000 / 1280 ) *100vw )' }}>
        <div className="flex">
          <div className="border-4 rounded-lg py-4 px-8 m-2 w-1/2">
            <div className="flex mb-4">
              <p className="text-lg font-bold">分類：</p>
              <p className="text-lg">{pokemon?.category}</p>
            </div>
            <div className="flex mb-4">
              <p className="text-lg font-bold">タイプ：</p>
            </div>
            <div className="flex mb-4">
              <p className="text-lg font-bold">高さ：</p>
              <p className="text-lg mr-4">{`${pokemon?.weight}m`}</p>
              <p className="text-lg font-bold">重さ：</p>
              <p className="text-lg">{`${pokemon?.weight}kg`}</p>
            </div>
            <div className="flex mb-4 items-center">
              <p className="text-lg font-bold">特性：</p>
              <p className="text-lg mr-4">
                {pokemon?.properties[0].propertyName}
              </p>
              <Button
                onClick={() => {
                  openModal();
                }}
                isSelected={false}
                width="90px"
              >
                <p>特性</p>
              </Button>
              <PropertyModal
                propertyName={pokemon?.properties[0].propertyName ?? ''}
                description={pokemon?.properties[0].description ?? ''}
                isOpen={isOpen}
                closeModal={() => closeModal()}
              />
            </div>
          </div>
          <div className="border-4 rounded-lg py-4 px-8 m-2 w-1/2">
            <SpecGauge count={pokemon?.hp ?? 0} title="HP" />
            <SpecGauge count={pokemon?.attack ?? 0} title="こうげき" />
            <SpecGauge count={pokemon?.defense ?? 0} title="ぼうぎょ" />
            <SpecGauge count={pokemon?.specialAttack ?? 0} title="とくこう" />
            <SpecGauge count={pokemon?.specialDefense ?? 0} title="とくぼう" />
            <SpecGauge count={pokemon?.speed ?? 0} title="すばやさ" />
          </div>
        </div>
        <div className="border-4 rounded-lg p-4 m-2">
          <p className="text-xl px-8">{pokemon?.descriptions[0] ?? ''}</p>
        </div>
      </div>
    </div>
  );
}
