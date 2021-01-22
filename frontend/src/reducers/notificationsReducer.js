import {
  NOTIFICATION_LIST_REQUEST,
  NOTIFICATION_LIST_SUCCESS,
  NOTIFICATION_LIST_FAIL,
} from "../constants/notificationsConstants";
export const notificationsReducer = (
  state = { notificationsList: [] },
  action
) => {
  switch (action.type) {
    case NOTIFICATION_LIST_REQUEST:
      return { loading: true, products: [] };
    case NOTIFICATION_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case NOTIFICATION_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
