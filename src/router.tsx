import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./views/App";
import Profile from "./views/Profile";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Profile />} />
    </Route>
  )
);

export default router;
