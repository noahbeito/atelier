import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NameDate from '../../../../components/NameDate';
import StarRating from '../../../../components/StarRating';
import Divider from '../../../../components/Divider';
import Report from '../../../../components/Report';
import Helpful from '../../../../components/Helpful';

// Example Review Object
// {
//   "review_id": 1274707,
//   "rating": 3,
//   "summary": "w",
//   "recommend": true,
//   "response": null,
//   "body": "w",
//   "date": "2022-05-29T00:00:00.000Z",
//   "reviewer_name": "w",
//   "helpfulness": 0,
//   "photos": [
//       {
//           "id": 2454928,
//           "url": "text"
//       }
//   ]
// }

export default function ReviewTile({
  rating,
  summary,
  recommend,
  response,
  body,
  date,
  reviewerName,
  helpfulness,
  photos,
}) {
  return (
    <div>
      <StarRating rating={rating} />
      <NameDate
        username={reviewerName}
        date={date}
        // TODO: Will have to update isVerified and isSeller
        // once we learn how to query for this data
        isVerified={false}
      />
      <h3>
        {' '}
        {summary}
        {' '}
      </h3>
      <div>
        {' '}
        {body}
        {' '}
      </div>
      <div>
        {' '}
        {response}
        {' '}
      </div>
      <div>
        {' '}
        {recommend}
        {' '}
      </div>
      <Divider>
        <Helpful helpfulness={helpfulness} />
        <Report />
      </Divider>
      {/* <div>
        {photos}
      </div> */}
    </div>
  );
}

ReviewTile.propTypes = {
  rating: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  recommend: PropTypes.bool,
  response: PropTypes.string,
  body: PropTypes.string,
  date: PropTypes.string.isRequired,
  reviewerName: PropTypes.string.isRequired,
  helpfulness: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
};

ReviewTile.defaultProps = {
  recommend: false,
  response: null,
  body: '',
}
