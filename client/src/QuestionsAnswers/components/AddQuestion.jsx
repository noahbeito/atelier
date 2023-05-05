import React from 'react';
import TextArea from '../../components/ui/TextArea';
import Input from '../../components/ui/Input';
import Form from '../../components/ui/Form';
// import ImageUpload from '../../components/ui/ImageUpload';
import Submit from '../../components/ui/Submit';
import Popup from '../../components/Popup';

export default function AddAnswer() {
  return (
    <Popup>
      <Form>
        <TextArea
          required
          label="Your question"
          validation={(value) => value.length <= 1000}
          id="question"
        />
        <Input
          required
          label="Your nickname"
          validation={(value) => value.length <= 60}
          placeholder="Example: jackson11!"
          warning="For privacy reasons, do not use your full name or email address"
          id="question-nickname"
        />
        <Input
          required
          label="Your email"
          validation={(value) => value.length <= 60}
          placeholder="Example: jack@email.com!"
          warning="For authentication reasons, you will not be emailed"
          id="question-email"
        />
        {/* <ImageUpload
          label="Upload your photos"
          validation={(value) => value.length <= 5}
        /> */}
        <Submit>Submit Question</Submit>
      </Form>
    </Popup>
  );
}
