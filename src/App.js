//import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Symptoms from "./components/Symptoms";
import Instructions from "./components/Instructions";
import Recommendation from "./components/Recommendation";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import Grid from "@mui/material/Grid";
import Detail from "./components/Detail";

function App() {
  return (
    <BrowserRouter>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          style={{
            textAlign: "center",
            paddingLeft: "30px",
            height: "7vh",
            backgroundColor: "green",
          }}
        >
          <Navigation />
        </Grid>

        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          style={{
            textAlign: "center",
            paddingLeft: "30px",
            height: "86vh",
            backgroundColor: "white",
          }}
        >
          <Routes>
            <Route exact path="/" element={<Welcome />}></Route>
            <Route exact path="/symptoms" element={<Symptoms />}></Route>
            <Route
              exact
              path="/instructions"
              element={<Instructions />}
            ></Route>

            <Route
              exact
              path="/recommendation"
              element={<Recommendation />}
            ></Route>

            <Route exact path="/navigation" element={<Navigation />}></Route>
            <Route exact path="/detail" element={<Detail />}></Route>
          </Routes>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          style={{
            textAlign: "center",
            paddingLeft: "30px",
            height: "10vh",
            backgroundColor: "green",
          }}
        >
          <Footer />
        </Grid>
      </Grid>
    </BrowserRouter>
  );
}

export default App;
