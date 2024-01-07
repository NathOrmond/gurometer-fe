import React from 'react';

interface IHeaderComponentProps {
  title: string;
}

const HeaderComponent: React.FC<IHeaderComponentProps> = ({ title }) => {
  return (
    <h1>{title}</h1>
  );
};

export {
  HeaderComponent
};  

export type { IHeaderComponentProps };

