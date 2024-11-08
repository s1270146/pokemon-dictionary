import NavigationButton from '@/components/elements/button/NavigationButton';
import { pickupPath } from '@/consts';
import { useFetchPickupPokemon } from '@/features/detail/hooks';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';

const items: {
  pokemonNo: string;
  pokemonName: string;
  imgUrl: string;
}[] = [
  {
    pokemonNo: '0007',
    pokemonName: 'ゼニガメ',
    imgUrl:
      'https://zukan.pokemon.co.jp/zukan-api/up/images/index/17388b7f608671656716ab509ee0fa05.png',
  },
  {
    pokemonNo: '0007',
    pokemonName: 'ゼニガメ',
    imgUrl:
      'https://zukan.pokemon.co.jp/zukan-api/up/images/index/17388b7f608671656716ab509ee0fa05.png',
  },
  {
    pokemonNo: '0007',
    pokemonName: 'ゼニガメ',
    imgUrl:
      'https://zukan.pokemon.co.jp/zukan-api/up/images/index/17388b7f608671656716ab509ee0fa05.png',
  },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const pokemons = useFetchPickupPokemon([23, 56, 78]);

  const buttonWidth = 'calc(( 30 / 1280 ) *100vw )';
  const butonHeight = 'calc(( 140 / 1280 ) *100vw )';
  const buttonMaxWidth = 30;
  const buttonMaxHeight = 140;

  const nextSlide = () => {
    setCurrentIndex(currentIndex === items.length - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? items.length - 1 : currentIndex - 1);
  };

  return (
    <div className="h-[calc((400/1280)*100vw)] pb-pickup-bottom">
      <div className="h-5/6 bg-gray-100 relative">
        <h2 className="absolute top-pickup-heading-30 left-pickup-heading-90 w-pickup-heading">
          <Image
            className=""
            src={pickupPath}
            alt="ピックアップ"
            width={300}
            height={0}
          />
        </h2>
        <div className="absolute z-[2] h-full w-full px-30 flex justify-between items-center">
          <NavigationButton
            width={buttonWidth}
            height={butonHeight}
            maxWidth={buttonMaxWidth}
            maxHeight={buttonMaxHeight}
            onClick={() => {
              prevSlide();
            }}
          >
            <BiSolidLeftArrow size={20} color={'#ff0000'} />
          </NavigationButton>
          <NavigationButton
            width={buttonWidth}
            height={butonHeight}
            maxWidth={buttonMaxWidth}
            maxHeight={buttonMaxHeight}
            onClick={() => {
              nextSlide();
            }}
          >
            <BiSolidRightArrow size={20} color={'#ff0000'} />
          </NavigationButton>
        </div>
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {pokemons &&
              pokemons.map((item, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 flex justify-center"
                >
                  <div className="w-1/3">
                    <Link href={`/detail/${item.pokemonNo}`}>
                      <div className=" flex space-x-2">
                        <Image
                          src={item.imgUrl}
                          alt={`Slide ${index}`}
                          className="w-2/3"
                          width={200}
                          height={200}
                        />
                        <div className="w-1/3 flex flex-col justify-center">
                          <p className="font-bold text-xl">{`No.${item.pokemonNo}`}</p>
                          <p className="font-bold text-2xl">
                            {item.pokemonName}
                          </p>
                          <div className="flex mt-4">
                            {item.types.map((type, index) => {
                              return (
                                <div className="w-10" key={`type-${index}`}>
                                  <Image
                                    src={type.imgUrl}
                                    alt={type.typeName}
                                    width={200}
                                    height={200}
                                  />
                                  <p className="text-xs">{type.typeName}</p>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center space-x-4 mt-8">
        {items.map((value, index) => {
          return (
            <button
              key={String(index)}
              onClick={() => {
                setCurrentIndex(index);
              }}
            >
              <div
                className={`
                    w-4 h-4 rounded-full
                    ${index === currentIndex ? 'bg-black' : 'border-2 border-gray-200 flex items-center justify-center'} 
                `}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
