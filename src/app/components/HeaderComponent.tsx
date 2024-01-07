import React from 'react';

interface IHeaderComponentProps {
  title: string;
}

const HeaderComponent: React.FC<IHeaderComponentProps> = ({ title }: IHeaderComponentProps) => {
  return (
    <h1>
      <h1>{title}</h1>
    </h1>
  );
};

export { 
  HeaderComponent,
  IHeaderComponentProps
};
