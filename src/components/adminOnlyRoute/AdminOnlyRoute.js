import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectEmail } from "../../redux/slice/authSlice";
import NotFound from "../../pages/notFound/NotFound";
const AdminOnlyRoute = ({ children }) => {
  const userEmail = useSelector(selectEmail);

  if (userEmail === "kalabasefa716@gmail.com") {
    return children;
  }
  return (
 <NotFound/>
  );
};

export const AdminOnlyLink = ({ children }) => {
  const userEmail = useSelector(selectEmail);

  if (userEmail === "kalabasefa716@gmail.com") {
    return children;
  }
  return null;
};

export default AdminOnlyRoute;
