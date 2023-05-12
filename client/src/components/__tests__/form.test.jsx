/* eslint-env jest */
import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import Form from '../ui/Form';
import Input from '../ui/Input';
import ImageUpload from '../ui/ImageUpload';
import Submit from '../ui/Submit';

export default () => {
  describe('Form Component', () => {
    it('should display all form elements', () => {
      render(
        <Form>
          <Input
            label="Input 1"
            id="label1"
          />
          <Input
            label="Input 2"
            id="label2"
          />
        </Form>,
      );

      const input1 = screen.queryByLabelText('Input 1');
      const input2 = screen.queryByLabelText('Input 2');
      expect(input1).toBeInTheDocument();
      expect(input2).toBeInTheDocument();
    });

    it('should not give errors on successful input', () => {
      const text1 = 'some text';
      const text2 = 'hello world!';

      const submitHandler = jest.fn((e, error) => {
        expect(error).toBeNull();
      });

      render(
        <Form data-testid="form" onSubmit={submitHandler}>
          <Input
            value={text1}
            label="Input 1"
            id="label1"
          />
          <Input
            value={text2}
            label="Input 2"
            id="label2"
          />
          <Submit>Submit</Submit>
        </Form>,
      );

      const form = screen.queryByTestId('form');
      fireEvent.submit(form);

      expect(submitHandler).toHaveBeenCalled();

      const toast = screen.queryByTestId('toast');
      expect(toast).toBeInTheDocument();
      expect(toast.classList).toContain('closed');

      const toastValue = screen.queryByTestId('toast');
      expect(toastValue).toBeInTheDocument();
    });

    it('should render an error message if input validation not met', async () => {
      const text1 = 'some text';
      const text2 = 'no world!';
      const error2 = 'Input 2 must contain the word hello!';

      const submitHandler = jest.fn((e, error) => {
        expect(error).toBe(error2);
      });

      render(
        <Form data-testid="form" onSubmit={submitHandler}>
          <Input
            value={text1}
            label="Input 1"
            id="label1"
          />
          <Input
            value={text2}
            label="Input 2"
            validation={(value) => value.includes('hello')}
            error={error2}
            id="label2"
          />
          <Submit>Submit</Submit>
        </Form>,
      );

      const form = screen.queryByTestId('form');
      fireEvent.submit(form);

      // Ensures we don't get false positive for tests
      expect(submitHandler).toHaveBeenCalled();
    });

    it('should display an error indicating empty, required fields first', () => {
      const text1 = 'some text';
      const error2 = 'Input 2 must contain the word hello!';

      const submitHandler = jest.fn((e, error) => {
        expect(screen.queryByText(error2)).not.toBeInTheDocument();
        expect(error).not.toBeUndefined();
        expect(error.props.children[1].props.children[0].props.children).toBe('label2');
      });

      render(
        <Form data-testid="form" onSubmit={submitHandler}>
          <Input
            required
            value={text1}
            label="Input 1"
            id="label1"
          />
          <Input
            required
            value=""
            label="Input 2"
            validation={(value) => value.includes('hello')}
            error={error2}
            id="label2"
          />
          <Input
            required
            value=""
            label="Input 3"
            id="label2"
          />
          <Submit>Submit</Submit>
        </Form>,
      );

      const form = screen.queryByTestId('form');
      fireEvent.submit(form);

      expect(submitHandler).toHaveBeenCalled();
    });

    it('should display an error if ImageUpload validation not met', () => {
      const files = ['example1.jpg', 'example2.jpg', 'example3.jpg'];
      const errorMessage = 'There can only be at most 2 files!';

      const submitHandler = jest.fn((e, error) => {
        expect(error).toBe(errorMessage);
      });

      render(
        <Form data-testid="form" onSubmit={submitHandler}>
          <ImageUpload
            images={files}
            label="Input 2"
            validation={(images) => images.length <= 2}
            error={errorMessage}
            id="label2"
          />
          <Submit>Submit</Submit>
        </Form>,
      );

      const form = screen.queryByTestId('form');
      fireEvent.submit(form);
      expect(submitHandler).toHaveBeenCalled();
    });
  });
};
