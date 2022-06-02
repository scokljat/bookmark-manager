import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { Grid, Flex } from "@chakra-ui/react";
import { getBooks } from "./action";

import ThemeSwitcher from "./assets/components/ThemeSwitcher";
import TheSidebar from "./assets/components/TheSidebar";
import Cover from "./pages/Cover";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Error from "./pages/Error";

function App() {
  const books = useSelector((state) => state.books);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <>
      {isLoggedIn ? (
        <Grid templateColumns="100px 2fr">
          {isLoggedIn ? <TheSidebar gridColumn="1/3" /> : ""}
          <Flex gridColumn="2/3" justifyContent="center" mt={30}>
            <header>
              <ThemeSwitcher />
            </header>
            <Routes>
              <Route path="/" element={<Cover />} />
              <Route path="sign-up" element={<Signup />} />
              <Route path="login" element={<Login />} />
              <Route path="home" element={<Home />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </Flex>
        </Grid>
      ) : (
        <>
          <header>
            <ThemeSwitcher />
          </header>
          <Routes>
            <Route path="/" element={<Cover />} />
            <Route path="sign-up" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route path="home" element={<Home />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
