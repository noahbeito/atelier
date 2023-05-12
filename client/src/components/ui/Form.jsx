import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Toast from './Toast';

const StyledForm = styled.div`
  width: 80%;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Form({ children, onSubmit, ...props }) {
  const [error, setError] = useState(null);
  const [toastIsOpen, setToastIsOpen] = useState(false);

  const allowed = new Set(['Input', 'TextArea']);
  const submitHandler = (e) => {
    e.preventDefault();
    const missing = [];

    // Generate error for any missing components that are required
    for (let i = 0; i < children.length; i += 1) {
      const child = children[i];

      const { value, validation } = child.props;

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

      onSubmit(e, missingError);
      setError(missingError);
      setToastIsOpen(true);
      return;
    }
    // Generate any other types of errors
    for (let i = 0; i < children.length; i += 1) {
      const child = children[i];

      const { value, validation } = child.props;

      if (value !== undefined && validation && allowed.has(child.type.name)) {
        if (!validation(value)) {
          onSubmit(e, child.props.error);
          setError(child.props.error);
          setToastIsOpen(true);
          return;
        }
      } else if (validation && child.type.name === 'ImageUpload') {
        const { images } = child.props;
        if (!validation(images)) {
          onSubmit(e, child.props.error);
          setError(child.props.error);
          setToastIsOpen(true);
          return;
        }
      }
    }
    onSubmit(e, null);
  };

  const handleExitToast = () => setToastIsOpen(false);

  return (
    <StyledForm>
      <Toast onClick={handleExitToast} isOpen={toastIsOpen}>{error}</Toast>
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
