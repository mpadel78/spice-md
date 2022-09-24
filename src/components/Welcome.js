import React from "react";

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
          Spice MD make this bold cool looking
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
          Insert some icon/logo of spice MD
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
          Type some catchy lines here
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
          start button here
        </Grid>
      </Grid>
    </div>
  );
}

export default Welcome;
