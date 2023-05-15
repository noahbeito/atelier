import React from 'react';
// import styled from 'styled-components';
// import PropTypes from 'prop-types';
// import TextArea from '../../../components/ui/TextArea';
// import Input from '../../../components/ui/Input';
// import Form from '../../../components/ui/Form';
// // import Button from '../../../components/ui/Form';
// // import ImageUpload from '../../components/ui/ImageUpload';
// import Submit from '../../../components/ui/Submit';
// import Popup from '../../../components/Popup';

// .modal {
//   position: fixed;
//   top: 0;
//   left: 0;
//   width:100%;
//   height: 100%;
//   background: rgba(0, 0, 0, 0.6);
// }

// .modal-main {
//   position:fixed;
//   background: white;
//   width: 80%;
//   height: auto;
//   top:50%;
//   left:50%;
//   transform: translate(-50%,-50%);
// }

// const StyledPopup = styled(Popup)`
//   position:fixed;
//   background: white;
//   width: 50%;
//   height: 80%;
//   top:50%;
//   left:50%;
//   transform: translate(-50%,-50%);
//   border: solid black 2px;
//   border-radius: 2%;
// `;

export default function WriteNewReview(/* { showModal } */) {
  return <div>E</div>;
  // return (
  //   <div>
  //     {
  //     showModal
  //       ?
  //         <StyledPopup>
  //           <Form>
  //             <TextArea
  //               required
  //               label="Your question"
  //               validation={(value) => value.length <= 1000}
  //               id="question"
  //             />
  //             <Input
  //               required
  //               label="Your nickname"
  //               validation={(value) => value.length <= 60}
  //               placeholder="Example: jackson11!"
  //               warning="For privacy reasons, do not use your full name or email address"
  //               id="question-nickname"
  //             />
  //             <Input
  //               required
  //               label="Your email"
  //               validation={(value) => value.length <= 60}
  //               placeholder="Example: jack@email.com!"
  //               warning="For authentication reasons, you will not be emailed"
  //               id="question-email"
  //             />
  //             {/* <ImageUpload
  //             label="Upload your photos"
  //             validation={(value) => value.length <= 5}
  //           /> */}
  //             <div>
  //               <Submit>Submit Question</Submit>
  //             </div>
  //           </Form>
  //         </StyledPopup>
  //       ''
  //       : ''
  //   }
  //   </div>
  // );
}

// WriteNewReview.propTypes = {
//   showModal: PropTypes.bool.isRequired,
// };
