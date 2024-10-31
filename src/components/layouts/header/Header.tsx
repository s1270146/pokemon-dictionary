import Logo from '@/components/layouts/header/Logo';
import SortButton from '@/features/common/sort/components/SortButton';
import SearchButton from '@/features/common/search/components/SearchButton';

export default function Header() {
  return (
    <header className="h-[80px] px-[25px] flex items-center justify-between shadow-md">
      <Logo />
      <div className="h-[70px] flex justify-end items-center text-center">
        <SortButton />
        <SearchButton />
      </div>
    </header>
  );
}
