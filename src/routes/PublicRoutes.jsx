import { Route } from "react-router-dom";

import HomePage from "../pages/public/HomePage";
import LoginPage from "../pages/public/LoginPage";

export default function PublicRoutes() {
  return (
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
    </>
  );
}