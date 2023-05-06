import React from 'react';
import styled from 'styled-components';

const Div = styled.section`
  width: 60%;
  height: 98%;
  display: flex;
  flex-direction: column;
  border: solid 2px black;
  margin:2px;
  padding:5px;
`;
export default function ImageGallery() {
  return (
    <Div>
      <div>Test</div>
      {/* HERE I AM GOING TO Render the main Image along with the zoom in display and the other
      pics as thumbnails aswell */}
    </Div>
  );
}
