import React from 'react';
import useInput from './useInput';

const FormBody = () => {
  const nameInput = useInput('name');
  const surnameInput = useInput('surname');
  const favAnimal = useInput('favAnimal');

  return (
    <>
      <label htmlFor={nameInput.id}>Name</label>
      <input {...nameInput} />
      <label htmlFor={surnameInput.id}>Surname</label>
      <input {...surnameInput} />
      <label htmlFor={favAnimal.id}>Favourite animal</label>
      <input {...favAnimal} />
      <button type="submit" className="button">
        Save
      </button>
    </>
  );
};

export default FormBody;
