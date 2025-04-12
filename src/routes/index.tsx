import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import Layout from "../pages/Layout";
import Payment from "../pages/Payment";
import NotFound from "../pages/NotFound";
import ROUTES from "./routes";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={ROUTES.HOME} element={<Layout />}>
        <Route index element={<Payment />} />
        <Route path={ROUTES.PAYMENT} element={<Payment />} />
        
      
      </Route>


      <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
    </>
  ),
  {
    basename: "/round-3-car-rental-front", 
  }
);

export default router