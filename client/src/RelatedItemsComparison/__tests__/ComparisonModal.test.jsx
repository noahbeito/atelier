/* eslint-env jest */
// import React from 'react';

// import { render, fireEvent, screen } from '@testing-library/react';
// import '@testing-library/jest-dom';

// import ProductCard from '../components/ProductCard/ProductCard';

// export default () => {
//   describe('Comparison Modal Component', () => {
//     // Mock API Requests
//     const server = setupServer(
//       rest.get('/products/41009', (req, res, ctx) => res(ctx.json({
//         id: 40344,
//         campus: 'hr-rfp',
//         name: 'Camo Onesie',
//         slogan: 'Blend in to your crowd',
//         description: 'The So Fatigues will wake you up and fit you in.
// This high energy camo will have you blending in to even the wildest surroundings.',
//         category: 'Jackets',
//         default_price: '140.00',
//         created_at: '2021-08-13T14:38:44.509Z',
//         updated_at: '2021-08-13T14:38:44.509Z',
//       }))),
//       rest.get('/products/41009/styles', (req, res, ctx) => res(ctx.json({
//         product_id: 41009,
//         results: [
//           {
//             style_id: '244788',
//             name: 'Lime',
//             original_price: '715.00',
//             sale_price: '14.00',
//             'default?': true,
//             photos: [
//               {
//                 thumbnail_url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
//                 url: 'https://images.unsplash.com/photo-1459501462159-97d5bded1416?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
//               },
//             ],
//             skus: {
//               1419322: {
//                 quantity: 41,
//                 size: 'XS',
//               },
//               1419323: {
//                 quantity: 26,
//                 size: 'S',
//               },
//               1419324: {
//                 quantity: 42,
//                 size: 'M',
//               },
//               1419325: {
//                 quantity: 26,
//                 size: 'L',
//               },
//               1419326: {
//                 quantity: 0,
//                 size: 'XL',
//               },
//               1419327: {
//                 quantity: 5,
//                 size: 'XXL',
//               },
//             },
//           },
//         ],
//       }))),
//     );

//     beforeAll(() => server.listen());
//     afterEach(() => server.resetHandlers());
//     afterAll(() => server.close());

//     test('click on star button opens modal', async () => {
//       const id = 41009;
//       const handleRemoveItemClick = jest.fn();
//       const symbol = 'EmptyStar';
//       render(
//         <ProductCard
//           id={id}
//           handleRemoveItemClick={handleRemoveItemClick}
//           symbol={symbol}
//         />,
//       );
//       fireEvent.click(screen.getByRole('button'));

//       await screen.findByRole('dialog');

//       expect(screen.getByRole('dialog')).toBeInTheDocument();
//     });
//   });
// };
