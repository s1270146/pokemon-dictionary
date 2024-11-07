import { ballPath } from '@/consts';
import Image from 'next/image';

interface ModalHeadingProps {
  title: string;
}

export default function ModalHeading({ title }: ModalHeadingProps) {
  return (
    <div className="flex items-center mb-4">
      <div className="mr-2">
        <Image
          src={ballPath}
          alt="検索"
          style={{ height: 'calc((30 / 1280)* 100vw)' }}
          height={30}
          width={40}
        />
      </div>
      <p className="font-bold" style={{ fontSize: 'calc((20 / 1280)* 100vw)' }}>
        {title}
      </p>
    </div>
  );
}
