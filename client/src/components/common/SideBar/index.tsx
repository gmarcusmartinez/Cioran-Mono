import React from 'react';

interface SideBarProps {
  width: number;
  bg: string;
  boxShadow?: string;
}

const SideBar: React.FC<SideBarProps> = ({
  width,
  bg,
  boxShadow,
  children,
}) => {
  return (
    <div style={{ width, backgroundColor: bg, boxShadow }}>{children}</div>
  );
};

export default SideBar;
