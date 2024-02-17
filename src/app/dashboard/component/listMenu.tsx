import React from 'react';
import { usePathname, useRouter } from 'next/navigation';

interface MenuListProps {
  name: string;
  path: string;
}

const MenuList: React.FC<MenuListProps> = ({ name, path }) => {
  const router = useRouter();
  const pathName = usePathname();

  return (
    <p
      onClick={() => router.replace(path)}
      className={pathName == path ? 'active' : ''}
    >
      {name}
    </p>
  );
};

export default MenuList;
