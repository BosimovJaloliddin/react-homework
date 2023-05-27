import { students } from "../../mock";

export const initialValue = {
  user: JSON.parse(localStorage.getItem("users")) || students,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "delete":
      let res = state.user.filter((v) => v.id !== action.peyload);
      localStorage.setItem("users", JSON.stringify(res));
      return { ...state, user: res };
  }
};
