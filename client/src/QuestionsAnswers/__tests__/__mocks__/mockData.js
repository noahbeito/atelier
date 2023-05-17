export const mockError = 'Failed!';
export const mockData = [
  {
    product_id: '123',
    results: [
      {
        question_id: 100,
        question_body: 'Where is this product made?',
        question_date: '2018-02-28T00:00:00.000Z',
        asker_name: 'funnygirl',
        question_helpfulness: 18,
        reported: false,
        answers: {
          345: {
            id: 345,
            body: 'idk',
            date: '2023-03-23T00:00:00.000Z',
            answerer_name: 'professor',
            helpfulness: 5,
            photos: [],
          },
        },
      },
    ],
  },
  {
    product_id: '1234',
    results: [
      {
        question_id: 200,
        question_body: 'Hello World?',
        answers: {},
      },
      {
        question_id: 201,
        question_body: 'Hello?',
        answers: {},
      },
      {
        question_id: 202,
        question_body: 'What is hello?',
        answers: {},
      },
      {
        question_id: 203,
        question_body: 'Is this hXllo okay?',
        answers: {},
      },
      {
        question_id: 204,
        question_body: 'This is not a question?',
        answers: {},
      },
      {
        question_id: 205,
        question_body: 'Who is a question then?',
        answers: {},
      },
      {
        question_id: 206,
        question_body: 'Hello??',
        answers: {},
      },
    ],
  },
  {
    product_id: '123',
    results: [],
  },
  {
    product_id: '123',
    results: [
      {
        question_id: 100,
        question_body: 'Where is this product made?',
        question_date: '2018-02-28T00:00:00.000Z',
        asker_name: 'funnygirl',
        question_helpfulness: 18,
        reported: false,
        answers: {},
      },
    ],
  },
  {
    product_id: '123',
    results: [
      {
        question_id: '100',
        question_body: 'Where is this product made?',
        question_date: '2018-02-28T00:00:00.000Z',
        asker_name: 'funnygirl',
        question_helpfulness: 18,
        reported: false,
        answers: {
          1: {
            id: 1,
            body: 'idk',
            date: '2023-03-23T00:00:00.000Z',
            answerer_name: 'professor',
            helpfulness: 5,
            photos: [],
          },
          2: {
            id: 2,
            body: 'a',
            date: '2023-03-23T00:00:00.000Z',
            answerer_name: 'professor',
            helpfulness: 5,
            photos: [],
          },
          3: {
            id: 3,
            body: 'b',
            date: '2023-03-23T00:00:00.000Z',
            answerer_name: 'professor',
            helpfulness: 5,
            photos: [],
          },
          4: {
            id: 4,
            body: 'c',
            date: '2023-03-23T00:00:00.000Z',
            answerer_name: 'professor',
            helpfulness: 5,
            photos: [],
          },
          5: {
            id: 5,
            body: 'd',
            date: '2023-03-23T00:00:00.000Z',
            answerer_name: 'professor',
            helpfulness: 5,
            photos: [],
          },
        },
      },
    ],
  },
];

export const answerMock = [
  {
    id: 1,
    body: 'idk',
    date: '2023-03-23T00:00:00.000Z',
    answerer_name: 'professor',
    helpfulness: 5,
    photos: [],
  },
  {
    id: 1,
    body: 'idk',
    date: '2023-03-23T00:00:00.000Z',
    answerer_name: 'professor',
    helpfulness: 5,
    photos: ['example.jpg', 'hello.jpg'],
  },
];

export const mockState = (data, loading = false, searchText = '') => ({
  product: {
    loading: false,
    data: {
      id: '123',
    },
    error: null,
  },
  questionsAnswers: {
    main: {
      loading,
      questions: data.results,
    },
    search: {
      text: searchText,
    },
  },
});
