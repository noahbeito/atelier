import { combineReducers } from 'redux';

const questionsReducer = (state = { questions: [], loading: true, error: null }, action = {}) => {
  switch (action.type) {
    case '@questions/FETCH_DATA':
      return { ...state, loading: true };

    case '@questions/SET_DATA':
      return { ...state, loading: false, questions: action.payload };

    case '@questions/FETCH_FAILED':
      return { ...state, loading: false, error: action.payload };

    case '@questions/MARK_HELPFUL': {
      const temp = [...state.questions];
      temp.forEach((question, i) => {
        if (question.question_id === action.question_id) {
          temp[i].question_helpfulness += 1;
        }
      });
      temp.sort((a, b) => b.question_helpfulness - a.question_helpfulness);
      return { ...state, questions: temp };
    }

    case '@questions/REPORT': {
      const temp = [...state.questions];
      temp.forEach((question, i) => {
        if (question.question_id === action.question_id) {
          temp[i].reported = true;
        }
      });
      temp.sort((a, b) => b.question_helpfulness - a.question_helpfulness);
      return { ...state, questions: temp };
    }

    case '@questions/ADD_QUESTIONS': {
      const seen = new Set();
      return {
        ...state,
        loading: false,
        questions: [
          ...state.questions, ...action.payload,
        ].sort(
          (a, b) => b.question_helpfulness - a.question_helpfulness,
        ).filter((question) => {
          if (!seen.has(question.question_id)) {
            seen.add(question.question_id);
            return true;
          }
          return false;
        }),
      };
    }

    case '@answers/MARK_HELPFUL': {
      const temp = { ...state };
      temp.questions.forEach((question, i) => {
        const obj = question.answers;
        if (action.answer_id in obj) {
          temp.questions[i].answers[action.answer_id].helpfulness += 1;
        }
      });
      return temp;
    }
    case '@answers/REPORT': {
      const temp = { ...state };
      temp.questions.forEach((question, i) => {
        const obj = question.answers;
        if (action.answer_id in obj) {
          temp.questions[i].answers[action.answer_id].reported = true;
        }
      });
      return temp;
    }

    case '@answers/ADD_ANSWER': {
      const temp = { ...state };
      temp.questions.forEach((question, i) => {
        const obj = question.answers;
        if (action.answer_id in obj) {
          temp.questions[i].answers[action.payload.answer_id] = action.payload;
        }
      });
      return temp;
    }
    default:
      return state;
  }
};

const searchReducer = (state = { text: '' }, action = {}) => {
  switch (action.type) {
    case '@qa/search/SET_SEARCH':
      return { ...state, text: action.payload };
    default:
      return state;
  }
};

const questionsAnswersReducer = combineReducers({
  main: questionsReducer,
  search: searchReducer,
});

export default questionsAnswersReducer;
