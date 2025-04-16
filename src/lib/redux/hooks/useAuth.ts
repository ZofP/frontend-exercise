"use client";

import { useSelector } from "react-redux";

import { selectAuth } from "../services";

export const useAuth = () => {
  const auth = useSelector(selectAuth);
  return auth;
};
