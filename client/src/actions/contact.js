import axios from "axios";
import { IS_LOADING, GET_CONTACT } from "../actions/action_types";

export const getContacts = () => dispatch => {
  dispatch({
    type: IS_LOADING
  });
  axios.get("/contact").then(res =>
    dispatch({
      type: GET_CONTACT,
      payload: res.data
    })
  );
};

export const addContact = newcontact => dispatch => {
  axios
    .post("/contact", newcontact)
    .then(dispatch(getContacts()))
    .catch(err => console.log(err));
};

export const deleteContact = id => dispatch => {
  axios
    .delete(`/contact/${id}`)
    .then(dispatch(getContacts()))
    .catch(err => console.log(err));
};

export const editContact = newcontact => dispatch => {
  console.log(newcontact);
  axios
    .put(`/contact/update/${newcontact.id}`, newcontact)
    .then(dispatch(getContacts()))
    .catch(err => console.log(err));
};
