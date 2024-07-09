import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectRoute from "./Components/Auth/ProtectRoute";
import axios from "axios";
const Home = lazy(() => import("./Pages/Home/Home"));
const Login = lazy(() => import("./Pages/Login/Login"));
const DashBoard = lazy(() => import("./Pages/DashBoard/DashBoard"));
const DefaultDashBoard = lazy(() =>
  import("./Pages/Default DashBoard/DefaultDashBoard")
);
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { Skeleton } from "@mui/material";
import NotFound from "./Pages/NotFound/NotFound";
import { Toaster } from "react-hot-toast";
import { server } from "./Features/config";
import { userExists, userNotExists } from "./redux/reducer/authslice";
import { useUserProfileQuery } from "./redux/api/api";
import { useErrors } from "./Features/hooks";

function App() {
  const { user, loader } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  // const { isLoading, isError, error, data, refetch } = useUserProfileQuery();
  // useErrors([{ isError, error }]);

  // // if(isError){
  // //   console.log(error)
  // //         dispatch(userNotExists());
  // // }

  // dispatch(userExists(data?.user));
  // }

    //axios fetching ...
  useEffect(() => {
    axios
      .get(`${server}/api/v1/user/profile`, { withCredentials: true })
      .then(({ data }) => {
        dispatch(userExists(data?.user));
      })
      .catch((err) => {
        console.log(err);
        dispatch(userNotExists());
      });
  }, [dispatch]);

  return loader ? (
    <Skeleton />
  ) : (
    <BrowserRouter>
      <Suspense fallback={<Skeleton />}>
        <Routes>
          <Route element={<ProtectRoute user={user} />}>
            <Route path="/" element={<DefaultDashBoard />} />
            <Route path="/dashboard/:city" element={<DashBoard />} />
          </Route>

          <Route
            path="/login"
            element={
              <ProtectRoute user={!user} redirect="/">
                <Login />
              </ProtectRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Toaster position="top-center" />
    </BrowserRouter>
  );
}

export default App;
