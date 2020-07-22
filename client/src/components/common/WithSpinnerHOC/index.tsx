import React from 'react';

interface WithSpinnerProps {
  loading: boolean;
}

export default (WrappedComponent: React.FC) => {
  const hocComponent: React.FC<WithSpinnerProps> = ({ loading, ...props }) =>
    loading ? (
      <div className='spinner-overlay'>
        <div className='spinner-container '></div>
      </div>
    ) : (
      <WrappedComponent {...props} />
    );

  return hocComponent;
};
