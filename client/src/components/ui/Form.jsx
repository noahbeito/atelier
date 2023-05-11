import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Toast from './Toast';

const StyledForm = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export default function Form({ children, onSubmit, ...props }) {
  const [error, setError] = useState(null);

  console.log('error', error, !!error);

  const allowed = new Set(['Input', 'TextArea', 'ImageUpload']);
  const submitHandler = (e) => {
    e.preventDefault();
    const missing = [];
    for (let i = 0; i < children.length; i += 1) {
      const child = children[i];

      const { value, validation } = child.props;
      console.log(child);

      if (value !== undefined && validation && allowed.has(child.type.name)) {
        if (value.length === 0 && child.props.required) {
          missing.push(child.props.id);
        }
      }
    }
    if (missing.length > 0) {
      const missingError = (
        <>
          <h3>You must enter the following:</h3>
          <ul>
            {missing.map((item) => <li>{item}</li>)}
          </ul>
        </>
      );

      console.log(missing);

      onSubmit(e, missingError);
      setError(missingError);
      return;
    }

    for (let i = 0; i < children.length; i += 1) {
      const child = children[i];

      const { value, validation } = child.props;

      if (value !== undefined && validation && allowed.has(child.type.name)) {
        console.log('VALUE', value, validation(value));
        if (!validation(value)) {
          onSubmit(e, child.props.error);
          setError(child.props.error);
          return;
        }
      }
    }
    onSubmit(e, null);
  };

  const handleExitToast = () => setError(null);
  return (
    <StyledForm>
      <Toast onClick={handleExitToast} isOpen={!!error}>{error}</Toast>
      <form {...props} onSubmit={submitHandler}>{children}</form>
    </StyledForm>
  );
}

Form.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func,
};

Form.defaultProps = {
  onSubmit: () => {},
};
