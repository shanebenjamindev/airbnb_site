import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function useCheckRole() {

  const userData = JSON?.parse(localStorage.getItem("USER_LOGIN"));
  const user = userData?.user;

  // const navigate = useNavigate();
  return user
}
