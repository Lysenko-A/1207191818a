import { ADD_REVIEW_SUCCESS } from './userDetailsConstants';

export function addReviewAction(values) {
  return {
    type: ADD_REVIEW_SUCCESS,
    payload: values,
  };
}
