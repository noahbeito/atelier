import React from 'react';
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import StyleThumbnail from '../StyleThumbnail/StyleThumbnail';
import Icons from '../../../components/Icons';

const StyledThumbnailGrid = styled.div`
  /* display: flex;
  justify-content: left;
  flex-wrap: wrap; */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`;
const StyledSurround = styled.div`
  border: lightgrey 3px solid;
  border-radius: 5px;
  padding: 5px;
  width:95%;
  /* margin: 5px; */
`;
const StyledLoading = styled.div`
  margin: 50px auto;
  text-align: center;
  color: gray;
`;
export default function StyleSelector() {
  const isLoading = useSelector((state) => state.product.isLoading
                                        || state.overview.productStyles.loading);

  const styles = useSelector((state) => {
    console.log('This is state in styleselector: ', state);
    return state.overview.productStyles.styles.results;
  });

  return (
    <StyledSurround>
      {isLoading ? <StyledLoading><Icons.Loading size="2x" className="fa-spin" /></StyledLoading>
        : (
          <>
            <p><b>STYLE</b></p>
            <StyledThumbnailGrid>
              { styles.map((styletype) => (
                <StyleThumbnail
                  className={styletype['default?']}
                  styletype={styletype}
                  key={styletype.style_id}
                  id={styletype.style_id}
                />
              ))}
            </StyledThumbnailGrid>
          </>
        )}
    </StyledSurround>
  );
}
