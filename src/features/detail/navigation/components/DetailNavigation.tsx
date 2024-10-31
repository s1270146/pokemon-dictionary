'use client';

import NavigationButton from '@/components/elements/button/NavigationButton';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';

export default function DetailNavigation() {
  const params = useParams<{ no: string }>();

  const imageUrl =
    'https://zukan.pokemon.co.jp/zukan-api/up/images/index/72c82f8be362d1b53ae308d706728411.png';
  const pokemonName = 'ゲンガー';
  const buttonWidth = 'calc(( 30 / 1280 ) *100vw )';
  const butonHeight = 'calc(( 140 / 1280 ) *100vw )';
  const buttonMaxWidth = 30;
  const buttonMaxHeight = 140;
  return (
    <div
      className="flex items-center justify-between p-8"
      style={{
        height: 'calc(( 312 / 1280 ) *100vw )',
      }}
    >
      <NavigationButton
        width={buttonWidth}
        height={butonHeight}
        maxWidth={buttonMaxWidth}
        maxHeight={buttonMaxHeight}
      >
        <BiSolidLeftArrow size={20} color={'#ff0000'} />
      </NavigationButton>
      <div className="flex">
        <div className="px-10">
          <Image
            src={imageUrl}
            alt={`${params.no}`}
            width={500}
            height={0}
            style={{
              width: 'calc(( 270 / 1280 ) *100vw )',
            }}
          />
        </div>
        <div className="w-[calc(500/1280*100vw)] shadow-[8px_8px_0_#d9d9d9] rounded-lg bg-white m-10 px-8 py-10 flex flex-col justify-between">
          <div>
            <p className="text-xl font-bold">{`No.${params.no}`}</p>
            <p className="text-3xl font-bold">{pokemonName}</p>
          </div>
          <div className="flex">
            <Image
              src={'/images/detail/icon_male.svg'}
              alt="オス"
              width={100}
              height={0}
              style={{
                width: 'calc(( 30 / 1280 ) *100vw )',
              }}
            />
            <Image
              src={'/images/detail/icon_female.svg'}
              alt="メス"
              width={100}
              height={0}
              style={{
                width: 'calc(( 30 / 1280 ) *100vw )',
              }}
            />
          </div>
        </div>
      </div>
      <NavigationButton
        width={buttonWidth}
        height={butonHeight}
        maxWidth={buttonMaxWidth}
        maxHeight={buttonMaxHeight}
      >
        <BiSolidRightArrow size={20} color={'#ff0000'} />
      </NavigationButton>
    </div>
  );
}
