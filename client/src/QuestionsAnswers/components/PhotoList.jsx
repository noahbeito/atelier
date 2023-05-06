import React from 'react';
import Photo from './Photo';
import { FlexWrap } from '../styles';

export default function PhotoList() {
  return (
    <FlexWrap>
      <Photo />
      <Photo />
      <Photo />
      <Photo />
      <Photo />
    </FlexWrap>
  );
}
