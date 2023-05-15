import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import TextArea from '../../components/ui/TextArea';
import Input from '../../components/ui/Input';
import Form from '../../components/ui/Form';
import Submit from '../../components/ui/Submit';
import { postQuestion } from '../actions';

export default function AddQuestion({ productId, handleCloseModal }) {
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e, error) => {
    if (!error) {
      dispatch(postQuestion(productId, {
        body, name, email,
      }))
        .then(() => {
          handleCloseModal();
        })
        .catch(() => new Error('Server error: Error submitting form!'));
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <TextArea
        required
        cols="100"
        rows="5"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        label="Your Questions"
        validation={(value) => value.length <= 1000}
        error="You wrote too many characters in your question! The limit is 1000."
        id="question"
      />
      <Input
        required
        size="60"
        value={name}
        onChange={(e) => setName(e.target.value)}
        label="What is your nickname"
        validation={(value) => value.length <= 60}
        placeholder="Example: jackson11!"
        warning="For privacy reasons, do not use your full name or email address"
        error="Username must have fewer than 60 characters."
        id="question-nickname"
      />
      <Input
        required
        size="60"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        label="Your email"
        validation={(value) => value.length <= 60}
        placeholder="Example: jack@email.com!"
        warning="For authentication reasons, you will not be emailed"
        error="Email must be a valid email."
        id="question-email"
      />
      <Submit>Submit question</Submit>
    </Form>
  );
}

AddQuestion.propTypes = {
  productId: PropTypes.number.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
};
