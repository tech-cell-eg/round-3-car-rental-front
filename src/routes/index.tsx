import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "../pages/Layout";
import NotFound from "../pages/NotFound";
import ROUTES from "./routes";

import DetailCar from "../pages/DetailCar";

import Home from "../pages/Home";
import Category from "../pages/Category";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={ROUTES.HOME} element={<Layout />}>

        <Route index element={<Payment />} />
        <Route path={ROUTES.PAYMENT} element={<Payment />} />

        <Route index element={<Home />} />
        <Route path={ROUTES.CATEGORY} element={<Category />} />

        <Route path={ROUTES.DETAILCAR} element={<DetailCar />} />
      </Route>

      <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
    </>
  ),
  {
    basename: "/round-3-car-rental-front",
  }
);

export default router;
