import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import TextArea from '../../components/ui/TextArea';
import Input from '../../components/ui/Input';
import Form from '../../components/ui/Form';
import ImageUpload from '../../components/ui/ImageUpload';
import Submit from '../../components/ui/Submit';
import { postAnswer } from '../actions';

import validateEmail from '../../utils/validateEmail';

export default function AddAnswer({ productId, questionId, handleCloseModal }) {
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);

  const dispatch = useDispatch();

  const imageDeleteHandler = (e, i) => {
    const temp = [...photos];
    temp.splice(i, 1);
    setPhotos(temp);
  };
  const imageChangeHandler = (e) => {
    const { files } = e.target;
    const temp = [...photos];
    for (let i = 0; i < files.length; i += 1) {
      temp.push(URL.createObjectURL(files[i]));
    }
    setPhotos(temp);
  };

  const handleSubmit = (e, error) => {
    if (!error) {
      dispatch(postAnswer(productId, questionId, {
        body, name, email, photos,
      }))
        .then(() => {
          handleCloseModal();
        })
        .catch(() => new Error('Server error: Error submitting form!'));
    }
  };
  return (
    <Form onSubmit={handleSubmit} data-testid="form">
      <TextArea
        required
        data-testid="question-field"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        label="Your Answer"
        validation={(value) => value.length <= 1000}
        error="You wrote too many characters in your answer! The limit is 1000."
        id="answer"
      />
      <Input
        required
        data-testid="nickname-field"
        value={name}
        onChange={(e) => setName(e.target.value)}
        label="What is your nickname"
        validation={(value) => value.length <= 60}
        placeholder="Example: jack543!"
        warning="For privacy reasons, do not use your full name or email address"
        error="Username must have fewer than 60 characters."
        id="answer-nickname"
      />
      <Input
        required
        data-testid="email-field"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        label="Your email"
        validation={(value) => value.length <= 60 && validateEmail(value)}
        placeholder="Example: jack@email.com!"
        warning="For authentication reasons, you will not be emailed"
        error="Email must be a valid email."
        id="answer-email"
      />
      <ImageUpload
        data-testid="image-field"
        label="Upload your photos"
        images={photos}
        onDelete={imageDeleteHandler}
        onChange={imageChangeHandler}
        error="You may only submit up to five images!"
        validation={(imgs) => imgs.length <= 5}
      />
      <Submit>Submit answer</Submit>
    </Form>
  );
}

AddAnswer.propTypes = {
  productId: PropTypes.number.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
  questionId: PropTypes.number.isRequired,
};
