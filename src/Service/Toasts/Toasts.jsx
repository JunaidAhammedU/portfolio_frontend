import { toast } from "react-hot-toast";
//--------------------------------------

export const errorAlert = async (message) => {
  toast.error(message, {
    position: "top-center",
  });
};

export const successAlert = async (message) => {
  toast.success(message, {
    position: "top-center",
    style: {
      zIndex: 9999,
    },
  });
};
