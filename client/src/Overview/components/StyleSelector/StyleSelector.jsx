import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StyleThumbnail from '../StyleThumbnail/StyleThumbnail';
import Icons from '../../../components/Icons';

const StyledThumbnailGrid = styled.div`
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
`;
const StyledLoading = styled.div`
  margin: 50px auto;
  text-align: center;
  color: gray;
`;
const StyledHeader = styled.div`
  font-family: sans-serif;
`;
export default function StyleSelector({
  defaultHandler,
  // defaultNumber,
  defaultNumberHandler,
}) {
  const isLoading = useSelector((state) => state.product.isLoading
                                        || state.overview.productStyles.loading);

  const styles = useSelector((state) => {
    console.log('This is state in styleselector: ', state);
    return (state.overview.productStyles.styles.results)
      ? state.overview.productStyles.styles.results : [];
  });

  // useEffect(() => {

  // }, [isLoading]);
  return (
    <StyledSurround>
      {isLoading ? <StyledLoading><Icons.Loading size="2x" className="fa-spin" /></StyledLoading>
        : (
          <>
            <StyledHeader>STYLE SELECTED</StyledHeader>
            <StyledThumbnailGrid>
              { styles.map((styletype) => (
                <StyleThumbnail
                  className={styletype['default?']}
                  styletype={styletype}
                  key={styletype.style_id}
                  id={styletype.style_id}
                  defaultHandler={defaultHandler}
                  defaultNumberHandler={defaultNumberHandler}
                />
              ))}
            </StyledThumbnailGrid>
          </>
        )}
    </StyledSurround>
  );
}
StyleSelector.propTypes = {
  defaultHandler: PropTypes.func.isRequired,
  defaultNumberHandler: PropTypes.func.isRequired,
  // defaultNumber: PropTypes.number.isRequired,
};
