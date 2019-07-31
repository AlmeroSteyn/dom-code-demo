import { useRef, useContext, useEffect } from 'react';
import uniqid from 'uniqid';
import { FormStateContext, FormDispatchContext } from './FormContext';

const useInput = name => {
  const inputId = useRef(uniqid());
  const formState = useContext(FormStateContext);
  const dispatch = useContext(FormDispatchContext);

  useEffect(() => {
    dispatch({
      type: 'REGISTER',
      name,
    });
  }, [name, dispatch]);

  const onChangeHandler = e => {
    dispatch({
      type: 'UPDATE',
      name,
      value: e.target.value,
    });
  };

  return {
    id: inputId.current,
    name,
    value: formState[name],
    onChange: onChangeHandler,
  };
};

export default useInput;
