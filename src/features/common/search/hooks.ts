import { useState } from 'react';

export const useSearchModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return { isOpen, openModal, closeModal };
};

export const usePokemonNumberRangeState = (
  initStart: number,
  initEnd: number
) => {
  const [start, setStart] = useState<number>(initStart);
  const [end, setEnd] = useState<number>(initEnd);

  const setPokemonNumberRangeState = (value: number[]) => {
    setStart(value[0]);
    setEnd(value[1]);
  };

  return { start, end, setPokemonNumberRangeState };
};
