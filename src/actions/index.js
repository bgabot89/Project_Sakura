import axios from 'axios';

export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const CREATE_COMMENT = 'CREATE_COMMENT';
export const FETCH_COMMENT = 'FETCH_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

const ROOT_URL = 'https://reduxblog.herokuapp.com/api';
const API_KEY = '?key=dfadsfalkkli';

//define function that will fetchposts from API
export function fetchComments() {
  //API get request
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type : FETCH_COMMENTS,
    payload: request
  };
}

//define function that will create Post
export function createComment(props) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props)
  return {
    type : CREATE_COMMENT,
    payload: request
  };
}

//define function that will get a comment
export function fetchComment(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
  return {
    type : FETCH_COMMENT,
    payload: request
  };
}

//define function that will delete a comment
export function deleteComment(id) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);
  return {
    type : DELETE_COMMENT,
    payload: request
  };
}
