import React from 'react';
import PropTypes from 'prop-types';

import TextArea from '../../components/ui/TextArea';
import Input from '../../components/ui/Input';
import Form from '../../components/ui/Form';
// import ImageUpload from '../../components/ui/ImageUpload';
import Submit from '../../components/ui/Submit';

export default function AddAnswer({ handleCloseModal }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleCloseModal();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <TextArea
        // required
        label="Your answer"
        validation={(value) => value.length <= 1000}
        id="answer"
      />
      <Input
        // required
        label="Your nickname"
        validation={(value) => value.length <= 60}
        placeholder="Example: jack543!"
        warning="For privacy reasons, do not use your full name or email address"
        id="answer-nickname"
      />
      <Input
        // required
        label="Your email"
        validation={(value) => value.length <= 60}
        placeholder="Example: jack@email.com!"
        warning="For authentication reasons, you will not be emailed"
        id="answer-email"
      />
      {/* <ImageUpload
        label="Upload your photos"
        validation={(value) => value.length <= 5}
      /> */}
      <Submit>Submit Answer</Submit>
    </Form>
  );
}

AddAnswer.propTypes = {
  handleCloseModal: PropTypes.func.isRequired,
};
