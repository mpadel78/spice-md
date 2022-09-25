import React from "react";
import { useLocation } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {
  Select,
  MenuItem,
  Button,
  Paper,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material/";

function Detail() {
  const location = useLocation();
  let from = location.state;

  console.log(typeof from);
  // console.log(JSON.parse(from.spice));
  //console.log(object1.spice);

  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={12} md={1}>
          <Button
            variant="contained"
            color="error"
            style={{
              margin: "10px 0px 0px 0px",
            }}
          >
            Close
          </Button>
        </Grid>

        {/*
        
        
        
        Middle grid 
        
        
        */}

        <Grid
          item
          xs={12}
          sm={12}
          md={10}
          justify="space-around"
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ width: "100%", height: "50vh" }}
        >
          {/*Creating grid insnide of the middle grid*/}
          <Card
            variant="outlined"
            style={{
              height: "50vh",

              boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
              backgroundColor: "#fafafa",
              margin: "90px 30px 90px 30px",
              borderRadius: 20,
              paddingBottom: "20px",
            }}
          >
            <CardContent>
              <Typography color="primary" variant="h3">
                {from.name}
              </Typography>
              <br />
              <Typography
                color="textSecondary"
                variant="subtitle2"
                component="p"
              >
                <b> Description: </b>
                <br />
                {from.name}
              </Typography>
            </CardContent>

            <br />

            <img src={from.image} style={{ height: "50%" }} />
          </Card>
        </Grid>

        <Grid item xs={12} sm={12} md={1}></Grid>
      </Grid>
    </>
  );
}

export default Detail;
