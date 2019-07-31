import React, { useReducer } from 'react';
import { FormStateContext, FormDispatchContext } from './FormContext';

const Form = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'REGISTER':
        return {
          ...state,
          [action.name]: '',
        };
      case 'UPDATE':
        return {
          ...state,
          [action.name]: action.value,
        };
      default:
        return state;
    }
  }, {});

  const onSubmitHandler = e => {
    e.preventDefault();
    alert(JSON.stringify(state));
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <FormStateContext.Provider value={state}>
        <FormDispatchContext.Provider value={dispatch}>
          {children}
        </FormDispatchContext.Provider>
      </FormStateContext.Provider>
    </form>
  );
};

export default Form;
