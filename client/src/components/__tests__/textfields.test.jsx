/* eslint-env jest */
import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import Input from '../ui/Input';
import TextArea from '../ui/TextArea';

const testInputs = (TextComponent, innerComponentTagName) => {
  it('renders label and warning correctly', () => {
    const warningText = 'warning is here';
    const { queryByText, getByLabelText } = render(
      <TextComponent label="Name" id="name" warning={warningText} />,
    );

    const warningElement = queryByText('warning is here');
    const inputElement = getByLabelText('Name');

    expect(inputElement).toBeInTheDocument();
    expect(warningElement).toBeInTheDocument();

    // The `innerComponentTagName` is either INPUT or TEXTAREA in this case
    expect(inputElement.tagName).toBe(innerComponentTagName);
    expect(warningElement.tagName).toBe('DIV');
  });

  it('extends the input element and executes onChange function', () => {
    const onChangeMock = jest.fn();
    const { getByLabelText } = render(
      <TextComponent label="Name" id="name" onChange={onChangeMock} />,
    );
    const inputElement = getByLabelText('Name');

    // The `innerComponentTagName` is either INPUT or TEXTAREA in this case
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.tagName).toBe(innerComponentTagName);

    // Simulate a change to the input and verify that onChange function is executed
    fireEvent.change(inputElement, { target: { value: 'John Doe' } });
    expect(onChangeMock).toHaveBeenCalled();
  });
};
export default () => {
  describe('Input UI Component', () => {
    testInputs(Input, 'INPUT');
  });

  describe('Textarea UI Component', () => {
    testInputs(TextArea, 'TEXTAREA');
  });
};
