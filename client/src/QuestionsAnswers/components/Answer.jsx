import React from 'react';
import Divider from '../../components/Divider';
import Helpful from '../../components/Helpful';
import Report from '../../components/Report';
import NameDate from '../../components/NameDate';
import PhotoList from './PhotoList';

export default function Answer() {
  return (
    <div>
      <div>Tootsie Roll Pudding</div>
      <PhotoList />
      <div>
        <Divider>
          <NameDate />
          <Helpful />
          <Report />
        </Divider>
      </div>
    </div>
  );
}
