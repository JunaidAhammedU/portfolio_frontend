import axios from "axios";
import { errorAlert, successAlert } from "../Toasts/Toasts";
//-------------------------------------------------------------

// fuction for sending new message
export const sendMessage = async (newMessage) => {
  try {
    const { data } = await axios.post(
      `${import.meta.env.VITE_REACT_APP_SERVER_URL}/newMessage`,
      { newMessage }
    );
    if (data.status) {
      successAlert(data.message);
      return data;
    } else {
      errorAlert(data.message);
    }
  } catch (error) {
    errorAlert(error.message);
  }
};

// fuction for get portfolio Data
export const getPortfolioData = async () => {
  try {
    const { data } = await axios.get(
      `${import.meta.env.VITE_REACT_APP_SERVER_URL}/user`
    );
    if (data.status) {
      return data.data;
    } else {
      errorAlert(data.message);
    }
  } catch (error) {
    errorAlert(error.message);
  }
};
