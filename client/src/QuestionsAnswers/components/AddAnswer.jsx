import React, { useState } from 'react';
import PropTypes from 'prop-types';

import TextArea from '../../components/ui/TextArea';
import Input from '../../components/ui/Input';
import Form from '../../components/ui/Form';
// import ImageUpload from '../../components/ui/ImageUpload';
import Submit from '../../components/ui/Submit';

export default function AddAnswer({ handleCloseModal }) {
  const [answer, setAnswer] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e, error) => {
    // handleCloseModal();
    if (error) {
      console.log(error);
    } else {
      console.log('GOOD')
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <TextArea
        required
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        label="Your answer"
        validation={(value) => value.length <= 5}
        error="You wrote too many characters in the form! The limit is 1000."
        id="answer"
      />
      <Input
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        label="Your nickname"
        validation={(value) => value.length <= 60}
        placeholder="Example: jack543!"
        warning="For privacy reasons, do not use your full name or email address"
        id="answer-nickname"
      />
      <Input
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
