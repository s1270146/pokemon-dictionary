import { apiPath } from '@/consts';
import { Property, Type } from '@/types';
import { useEffect, useState } from 'react';

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

export const useFetchTypes = () => {
  const [data, setData] = useState<Type[] | undefined>(undefined);
  interface ApiType {
    type_id: number;
    type_name: string;
    img_url: string;
  }

  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const response = await fetch(`${apiPath}/type`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const jsonData: ApiType[] = await response.json();
        const result: Type[] = jsonData.map((value) => {
          return {
            typeId: value.type_id,
            typeName: value.type_name,
            imgUrl: value.img_url,
          };
        });
        setData(result);
      } catch (error) {
        console.error(
          error instanceof Error ? error.message : 'An unknown error occurred.'
        );
      }
    };
    fetchTypes();
  }, []);
  return data;
};

export const useFetchProperties = () => {
  const [data, setData] = useState<Property[] | undefined>(undefined);
  interface ApiProperty {
    property_id: number;
    property_name: string;
    description: string;
  }
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch(`${apiPath}/property`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const jsonData: ApiProperty[] = await response.json();
        const result: Property[] = jsonData.map((value) => {
          return {
            propertyId: value.property_id,
            propertyName: value.property_name,
            description: value.description,
          };
        });
        setData(result);
      } catch (error) {
        console.error(
          error instanceof Error ? error.message : 'An unknown error occurred.'
        );
      }
    };
    fetchProperties();
  });
  return data;
};
