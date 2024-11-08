'use client';

import Image from 'next/image';
import { searchImagePath } from '@/consts';
import SearchModal from './SearchModal';
import { useSearchModal } from '../hooks';

export default function SearchButton() {
  const { isOpen, openModal, closeModal } = useSearchModal();

  return (
    <>
      <div
        onClick={() => {
          openModal();
        }}
        className="ml-2"
      >
        <div className="h-[45px]">
          <Image src={searchImagePath} alt="検索" height={40} width={40} />
        </div>
        <p className="text-xs">検索</p>
      </div>
      <SearchModal isOpen={isOpen} closeModal={() => closeModal()} />
    </>
  );
}
