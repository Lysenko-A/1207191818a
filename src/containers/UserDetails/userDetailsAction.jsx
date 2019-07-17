import { ADD_REVIEW_SUCCESS, CHANGES_COMMENTS_VIEW } from './userDetailsConstants';

export function addReviewAction(values) {
  return {
    type: ADD_REVIEW_SUCCESS,
    payload: values,
  };
}

export function changedCommentsViewAction(values) {
  return {
    type: CHANGES_COMMENTS_VIEW,
    payload: values,
  };
}
