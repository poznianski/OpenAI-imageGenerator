import React from 'react';
import { Triangle } from 'react-loader-spinner';

export const Loader: React.FC = () => {
  return (
    <Triangle
      height="80"
      width="80"
      color="white"
      ariaLabel="triangle-loading"
      wrapperStyle={{
        'display': 'flex',
        'justifyContent': 'center',
      }}
      wrapperClass=''
      visible={true}
    />
  );
};
