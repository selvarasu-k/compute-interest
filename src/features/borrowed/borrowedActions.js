import { deleteRequest, getRequest, postRequest, putRequest } from "../../http";
import {
  addBorrowData,
  fetchBorrowData,
  updateBorrowData,
} from "./borrowedSlice";

const API_URL = "https://json-server-deployment-uepg.onrender.com/borrowed";

export const addBorrow = (borrowData) => async (dispatch) => {
  try {
    const getData = await postRequest(API_URL, borrowData);
    dispatch(addBorrowData(getData));
  } catch (error) {
    window.confirm(error);
  }
};

export const fetchBorrow = () => async (dispatch) => {
  try {
    const getData = await getRequest(API_URL);
    dispatch(fetchBorrowData(getData));
  } catch (error) {
    window.confirm(error);
  }
};

export const updateBorrow = (rowData) => async (dispatch) => {
  try {
    const updatedData = await putRequest(API_URL, rowData);
    dispatch(updateBorrowData(updatedData));
  } catch (error) {
    window.confirm(error);
  }
};

export const deleteBorrow = (id) => async () => {
  try {
    await deleteRequest(API_URL, id);
  } catch (error) {
    window.confirm(error);
  }
};
