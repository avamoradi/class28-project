import {
  NOTIFICATION_LIST_REQUEST,
  NOTIFICATION_LIST_SUCCESS,
  NOTIFICATION_LIST_FAIL,
} from "../constants/notificationsConstants";
import axios from "axios";
export const listNotification = () => async (dispatch) => {
  try {
    dispatch({ type: NOTIFICATION_LIST_REQUEST });
    const { data } = await axios.get(`/api/notification`);
    dispatch({ type: NOTIFICATION_LIST_SUCCESS, payload: data });
    console.log(data);
  } catch (error) {
    dispatch({
      type: NOTIFICATION_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};
