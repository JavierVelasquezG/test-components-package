import React, { useEffect, useState } from 'react';

interface ButtonType {
  label: string;
}

const Button = ({ label }: ButtonType) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('This works');
  }, []);

  const addCountHandler = (): void => {
    setCounter(prev => prev + 1);
  };

  return (
    <button onClick={addCountHandler} type="button">
      {`${label}: ${counter}`}
    </button>
  );
};

export default Button;
