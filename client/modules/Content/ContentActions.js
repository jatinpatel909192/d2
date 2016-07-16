import callApi from '../../util/apiCaller';

// Export Constants

export const ADD_CONTENT = 'ADD_CONTENT';
export const ADD_CONTENTS = 'ADD_CONTENTS';
export const ADD_CONTENT_FOR_EDIT = 'ADD_CONTENT_FOR_EDIT';
export const DELETE_CONTENT = 'DELETE_CONTENT';

// Export Actions

export function addContent(content) {
  return {
    type: ADD_CONTENT,
    content,
  };
}

export function addContentRequest(content) {
  return (dispatch) => {
    return callApi('contents', 'content', {
      content: {
        name: content.name,
        location: content.location,
      },
    }).then(res => dispatch(addContent(res.content)));
  };
}

export function addContents(contents) {
  return {
    type: ADD_CONTENTS,
    contents,
  };
}

export function addContentForEdit(content) {
  return {
    type: ADD_CONTENT_FOR_EDIT,
    content,
  };
}

export function fetchContents() {
  return (dispatch) => {
    return callApi('contents').then(res => {
      dispatch(addContents(res.contents));
    });
  };
}

export function fetchContentForEdit() {
  return (dispatch) => {
    return callApi('contents').then(res => {
      dispatch(addContentForEdit(res.content[0]));
    });
  };
}

export function fetchContent(id) {
  return (dispatch) => {
    return callApi(`contents/${id}`).then(res => dispatch(addContent(res.content)));
  };
}

export function deleteContent(id) {
  return {
    type: DELETE_CONTENT,
    id,
  };
}

export function deleteContentRequest(id) {
  return (dispatch) => {
    return callApi(`contents/${id}`, 'delete').then(() => dispatch(deleteContent(id)));
  };
}
