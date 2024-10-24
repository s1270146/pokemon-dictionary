'use client';

import Image from 'next/image';
import { sortImagePath } from '@/consts';
import SortModal from './SortModal';
import { useSortModal } from '../hooks';

export default function SortButton() {
  const { isOpen, openModal, closeModal } = useSortModal();

  return (
    <>
      <div
        onClick={() => {
          openModal();
        }}
        className="ml-2"
      >
        <div className="h-[45px]">
          <Image src={sortImagePath} alt="表示順" width={50} height={38} />
        </div>
        <p className="text-xs">表示順</p>
      </div>
      <SortModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
}
