import React from "react";
import { Select, MenuItem, Button } from "@mui/material/";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

import Grid from "@mui/material/Grid";
function Welcome() {
  return (
    <div>
      <Grid
        style={{
          height: "100%",
        }}
        container
        spacing={2}
      >
        <br />
        <br />
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          style={{
            textAlign: "center",
            paddingLeft: "30px",
          }}
        >
          <img
            style={{
              height: "40vh",
            }}
            src={require("./icon.png")}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          style={{
            textAlign: "center",
            paddingLeft: "30px",
          }}
        >
          <Typography variant="h3">Spice MD</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          style={{
            textAlign: "center",
            paddingLeft: "30px",
          }}
        >
          <Typography variant="h5">Spice for life.</Typography>
        </Grid>
        <br />
        <br />
        <br />
        <br />
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          style={{
            textAlign: "center",
            paddingLeft: "30px",
          }}
        >
          <Button variant="contained" color="success">
            <Link to="/symptoms" style={{ textDecoration: "none" }}>
              Start the application
            </Link>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Welcome;
