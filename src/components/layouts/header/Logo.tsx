import Link from 'next/link';
import { logoPath } from '@/consts';
import Image from 'next/image';

export default function Logo() {
  return (
    <h1>
      <Link href={'/'}>
        <Image alt={'ポケモン図鑑'} src={logoPath} width={196.9} height={0} />
      </Link>
    </h1>
  );
}
