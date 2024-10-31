'use client';

import SpecGauge from '@/components/detail/SpecGauge';
import Button from '@/components/elements/button/Button';
import { usePropertyModal } from '../hooks';
import PropertyModal from './PropertyModal';

export default function ProfileDetail() {
  const category = 'シャドーポケモン';
  const height = 1.5;
  const weight = 40.5;
  const properties = 'のろわれボディ';
  const hp = 6;
  const kougeki = 6;
  const bougyo = 6;
  const tokukou = 10;
  const tokubou = 7;
  const speed = 9;
  const propertyDescription =
    'ＨＰが　減ったとき　くさタイプの　技の　威力が　上がる。';

  const { isOpen, openModal, closeModal } = usePropertyModal();

  return (
    <div className="flex flex-col items-center py-10 bg-white">
      <div style={{ width: 'calc(( 1000 / 1280 ) *100vw )' }}>
        <div className="flex">
          <div className="border-4 rounded-lg py-4 px-8 m-2 w-1/2">
            <div className="flex mb-4">
              <p className="text-lg font-bold">分類：</p>
              <p className="text-lg">{category}</p>
            </div>
            <div className="flex mb-4">
              <p className="text-lg font-bold">タイプ：</p>
            </div>
            <div className="flex mb-4">
              <p className="text-lg font-bold">高さ：</p>
              <p className="text-lg mr-4">{`${height}m`}</p>
              <p className="text-lg font-bold">重さ：</p>
              <p className="text-lg">{`${weight}kg`}</p>
            </div>
            <div className="flex mb-4 items-center">
              <p className="text-lg font-bold">特性：</p>
              <p className="text-lg mr-4">{properties}</p>
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
                propertyName={properties}
                description={propertyDescription}
                isOpen={isOpen}
                closeModal={() => closeModal()}
              />
            </div>
          </div>
          <div className="border-4 rounded-lg py-4 px-8 m-2 w-1/2">
            <SpecGauge count={hp} title="HP" />
            <SpecGauge count={kougeki} title="こうげき" />
            <SpecGauge count={bougyo} title="ぼうぎょ" />
            <SpecGauge count={tokukou} title="とくこう" />
            <SpecGauge count={tokubou} title="とくぼう" />
            <SpecGauge count={speed} title="すばやさ" />
          </div>
        </div>
        <div className="border-4 rounded-lg p-4 m-2">
          <p className="text-xl px-8">
            {
              '命を　奪おうと　決めた　獲物の　影に　潜り込み　じっと　チャンスを　狙ってる。　（『ポケットモンスタースカーレット』より）'
            }
          </p>
        </div>
      </div>
    </div>
  );
}
