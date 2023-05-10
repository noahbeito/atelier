import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import ReviewList from './components/ReviewsList/ReviewList';
import RatingBreakdown from './components/RatingBreakdown/RatingBreakdown';
import Button from '../components/ui/Button';
import SortOptions from './components/SortOptions/SortOptions';
import WriteNewReview from './components/WriteNewReview/WriteNewReview';

import { fetchReviews, fetchMetadata } from './actions/index';

const StyledFlex = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledRatingBreakdown = styled(RatingBreakdown)`
  flex-grow: 1;
  padding-right: 5%;
  position: relative;
`;

const StyledReviewList = styled.div`
  flex-grow: 3;
`;

const StyledRatingsReviews = styled.div`
  padding-bottom: 1%;
`;

const StyledMoreReviewButton = styled(Button)`
  margin-left: 0%;
`;

const StyledAddAReviewButton = styled(Button)`
  $::after {
    content:
    font
  }
`;

export default function RatingsReviews() {
  const [showModal, setShowModal] = React.useState(false);

  const productId = useSelector((state) => state.product.data.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMetadata(productId));
    dispatch(fetchReviews(productId));
  }, [productId]);

  return (
    <div>
      <StyledRatingsReviews>
        RATINGS & REVIEWS
      </StyledRatingsReviews>
      <StyledFlex>
        <StyledRatingBreakdown />
        <StyledReviewList>
          <SortOptions />
          <ReviewList />
          <StyledFlex>
            <StyledMoreReviewButton variant="large"> MORE REVIEWS </StyledMoreReviewButton>
            <WriteNewReview showModal={showModal} setShowModal={setShowModal} />
            <StyledAddAReviewButton variant="large-add" onClick={() => setShowModal(!showModal)}> ADD A REVIEW </StyledAddAReviewButton>
          </StyledFlex>
        </StyledReviewList>
      </StyledFlex>
    </div>
  );
}
