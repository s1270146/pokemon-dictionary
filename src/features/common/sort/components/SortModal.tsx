'use client';

import Button from '@/components/elements/button/Button';
import Modal from '@/components/elements/modal/Modal';
import ModalHeader from '@/components/elements/modal/ModalHeader';
import ModalHeading from '@/components/elements/modal/ModalHeading';
import { sortImagePath } from '@/consts';
import Image from 'next/image';

interface SortModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

export default function SortModal({ isOpen, closeModal }: SortModalProps) {
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
              src={sortImagePath}
              alt="表示"
              style={{ height: 'calc((45 / 1280)* 100vw)' }}
              height={30}
              width={40}
            />
          </div>
          <p
            className="font-bold ml-2"
            style={{ fontSize: 'calc((24 / 1280)* 100vw)' }}
          >
            表示順を変える
          </p>
        </div>
      </ModalHeader>
      <div className="px-16 py-10">
        <ModalHeading title="ずかん番号" />
        <div className="flex justify-center">
          <Button onClick={() => {}} isSelected={true}>
            <div className="flex justify-center">
              <p>1</p>
              <p>&#x25B6;</p>
              <p>9</p>
            </div>
          </Button>
          <Button onClick={() => {}} isSelected={false}>
            <div className="flex justify-center">
              <p>9</p>
              <p>&#x25B6;</p>
              <p>1</p>
            </div>
          </Button>
        </div>
        <ModalHeading title="なまえ" />
        <div className="flex justify-center">
          <Button onClick={() => {}} isSelected={false}>
            <div className="flex justify-center">
              <p>ア</p>
              <p>&#x25B6;</p>
              <p>ン</p>
            </div>
          </Button>
          <Button onClick={() => {}} isSelected={false}>
            <div className="flex justify-center">
              <p>ン</p>
              <p>&#x25B6;</p>
              <p>ア</p>
            </div>
          </Button>
        </div>
        <ModalHeading title="高さ" />
        <div className="flex justify-center">
          <Button onClick={() => {}} isSelected={false}>
            <div className="flex justify-center">
              <p>高い</p>
              <p>&#x25B6;</p>
              <p>低い</p>
            </div>
          </Button>
          <Button onClick={() => {}} isSelected={false}>
            <div className="flex justify-center">
              <p>低い</p>
              <p>&#x25B6;</p>
              <p>高い</p>
            </div>
          </Button>
        </div>
        <ModalHeading title="重さ" />
        <div className="flex justify-center">
          <Button onClick={() => {}} isSelected={false}>
            <div className="flex justify-center">
              <p>重い</p>
              <p>&#x25B6;</p>
              <p>軽い</p>
            </div>
          </Button>
          <Button onClick={() => {}} isSelected={false}>
            <div className="flex justify-center">
              <p>軽い</p>
              <p>&#x25B6;</p>
              <p>重い</p>
            </div>
          </Button>
        </div>
      </div>
      <div
        className="flex justify-center items-center w-full bg-gray-100 absolute bottom-0"
        style={{ height: 'calc((120 / 1280)* 100vw)' }}
      >
        <Button
          isSelected={false}
          onClick={() => {
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
