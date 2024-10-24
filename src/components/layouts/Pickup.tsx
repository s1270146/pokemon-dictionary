import Image from 'next/image';
import { pickupPath } from '@/consts';
import NavigationButton from '@/components/elements/NavigationButton';
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';

export default function Pickup() {
  const buttonWidth = 'calc(( 30 / 1280 ) *100vw )';
  const butonHeight = 'calc(( 140 / 1280 ) *100vw )';
  const buttonMaxWidth = 30;
  const buttonMaxHeight = 140;

  return (
    <div className="h-pickup pb-pickup-bottom">
      <div className="h-full bg-gray-100 relative">
        <h2 className="absolute top-pickup-heading-30 left-pickup-heading-90 w-pickup-heading">
          <Image
            className=""
            src={pickupPath}
            alt="ピックアップ"
            width={300}
            height={0}
          />
        </h2>
        <div className="absolute h-full w-full px-30 flex justify-between items-center">
          <NavigationButton
            width={buttonWidth}
            height={butonHeight}
            maxWidth={buttonMaxWidth}
            maxHeight={buttonMaxHeight}
          >
            <BiSolidLeftArrow size={20} color={'#ff0000'} />
          </NavigationButton>
          <NavigationButton
            width={buttonWidth}
            height={butonHeight}
            maxWidth={buttonMaxWidth}
            maxHeight={buttonMaxHeight}
          >
            <BiSolidRightArrow size={20} color={'#ff0000'} />
          </NavigationButton>
        </div>
      </div>
    </div>
  );
}
