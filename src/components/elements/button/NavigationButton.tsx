import { MouseEventHandler, ReactNode } from 'react';

interface NavigationButonProps {
  width: string | number;
  height: string | number;
  maxWidth?: string | number;
  maxHeight?: string | number;
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export default function NavigationButton({
  width,
  height,
  maxWidth,
  maxHeight,
  children,
  onClick,
}: NavigationButonProps) {
  return (
    <>
      <button
        className="bg-white border-2 border-solid border-gray-300 rounded"
        style={{ width, height, maxWidth, maxHeight }}
        onClick={onClick}
      >
        <div className="flex justify-center">{children}</div>
      </button>
    </>
  );
}
