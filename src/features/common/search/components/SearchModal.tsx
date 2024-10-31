'use client';

import Button from '@/components/elements/button/Button';
import Input from '@/components/elements/input/Input';
import Modal from '@/components/elements/modal/Modal';
import ModalHeader from '@/components/elements/modal/ModalHeader';
import ModalHeading from '@/components/elements/modal/ModalHeading';
import Select from '@/components/elements/button/Select';
import { searchImagePath } from '@/consts';
import { SelectOption } from '@/types';
import Image from 'next/image';
import MultipleSlider from '../../slider/components/MultipleSlider';
import { usePokemonNumberRangeState } from '../hooks';

interface SearchModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

export default function SearchModal({ isOpen, closeModal }: SearchModalProps) {
  const { start, end, setPokemonNumberRangeState } = usePokemonNumberRangeState(
    1,
    151
  );
  const options: SelectOption[] = [
    { label: '特性をえらぶ', value: null },
    { label: 'ARシステム', value: 'ARシステム' },
  ];
  return (
    <Modal
      isOpen={isOpen}
      closeModal={() => closeModal()}
      width="calc((800 / 1280)* 100vw)"
      height="95vh"
    >
      <ModalHeader closeModal={() => closeModal()}>
        <div className="flex items-center">
          <div>
            <Image
              src={searchImagePath}
              alt="検索"
              style={{ height: 'calc((45 / 1280)* 100vw)' }}
              height={30}
              width={40}
            />
          </div>
          <p
            className="font-bold ml-2"
            style={{ fontSize: 'calc((24 / 1280)* 100vw)' }}
          >
            タイプや条件で探す
          </p>
        </div>
      </ModalHeader>
      <div className="px-16 py-10">
        <ModalHeading title="フリーワード" />
        <Input placeholder="なまえやずかん番号でさがす" />
        <ModalHeading title="タイプ" />
        <ModalHeading title="特性" />
        <Select options={options} onChange={() => {}} />
        <ModalHeading title="番号" />
        <MultipleSlider
          min={1}
          max={151}
          onChange={setPokemonNumberRangeState}
        />
      </div>
      <div
        className="flex justify-center items-center w-full bg-gray-100 absolute bottom-0"
        style={{ height: 'calc((120 / 1280)* 100vw)' }}
      >
        <Button
          isSelected={false}
          onClick={() => {
            console.log(start, end);
            closeModal();
          }}
          isDecision
        >
          <p className="text-white">検索する</p>
        </Button>
        <div className="ml-4">
          <Button
            isSelected={false}
            onClick={() => {
              closeModal();
            }}
          >
            <p>条件をリセット</p>
          </Button>
        </div>
      </div>
    </Modal>
  );
}
