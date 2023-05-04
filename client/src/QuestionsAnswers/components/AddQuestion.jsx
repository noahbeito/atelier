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
        />
        <Input
          required
          label="Your nickname"
          validation={(value) => value.length <= 60}
          placeHolder="Example: jackson11!"
        />
        <Input
          required
          label="Your email"
          validation={(value) => value.length <= 60}
          placeHolder="Example: jack@email.com!"
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
