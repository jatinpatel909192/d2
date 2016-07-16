import { ADD_CONTENT, ADD_CONTENTS, DELETE_CONTENT } from './ContentActions';

// Initial State
const initialState = { data: [] };

const ContentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTENT :
      return {
        data: [action.Content, ...state.data],
      };

    case ADD_CONTENTS:
      return {
        data: action.Contents,
      };

    case DELETE_CONTENT:
      return {
        data: state.data.filter(Content => Content.id !== action.id),
      };
    default:
      return state;
  }
};
// Selectors

// Get all Contents
export const getContents = state => state.Contents.data;

// get Content by id
export const getContent = (state, id) => state.Contents.data.filter(Content => Content.id === id)[0];

// Export Reducer
export default ContentReducer;
