import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {
  Select,
  MenuItem,
  Button,
  Paper,
  CardMedia,
  CardContent,
} from "@mui/material/";
import { Link } from "react-router-dom";

function Recommendation() {
  const spices = [
    {
      name: "bay leaves",
      image: "https://m.media-amazon.com/images/I/417SSI9Sk-L.jpg",
      tags: ["cancer", "digestion", "ph"],
      nutrition: ["antimagnesium", "calcium", "essential oil", "calcium"],
      mix: ["salad", "pasta", "chicken", "pasta"],
      symptoms: ["blood clotting"],
      storage: "None",
      history: "Any history is here",
      notes: "Lorem ipsium notes here!",
    },
    {
      name: "turmeric",
      image:
        "https://divinitynutra.com/wp-content/uploads/turmeric-benefits-v2.jpg",
      tags: ["cancer", "digestion", "ph"],
      nutrition: ["antimagnesium", "calcium", "essential oil", "calcium"],
      mix: ["salad", "pasta", "chicken", "pasta"],
      symptoms: ["blood clotting"],
      storage: "None",
      history: "Any history is here",
      notes: "Lorem ipsium notes here!",
    },
    {
      name: "saffron",
      image:
        "https://post.healthline.com/wp-content/uploads/2020/11/saffron-732x549-thumbnail.jpg",
      tags: ["cancer", "digestion", "ph"],
      nutrition: ["antimagnesium", "calcium", "essential oil", "calcium"],
      mix: ["salad", "pasta", "chicken", "pasta"],
      symptoms: ["blood clotting"],
      storage: "None",
      history: "Any history is here",
      notes: "Lorem ipsium notes here!",
    },
    {
      name: "aloe vera",
      image: "https://www.niehs.nih.gov/health/assets/images/aloe_og.jpg",
      tags: ["cancer", "digestion", "ph"],
      nutrition: ["antimagnesium", "calcium", "essential oil", "calcium"],
      mix: ["salad", "pasta", "chicken", "pasta"],
      symptoms: ["blood clotting"],
      storage: "None",
      history: "Any history is here",
      notes: "Lorem ipsium notes here!",
    },
  ];

  return (
    <>
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
          <Typography variant="h5">
            {" "}
            Below are the recommended spices
          </Typography>
        </Grid>

        {spices.map((spice) => {
          return (
            <>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={4}
                style={{
                  textAlign: "center",
                  paddingLeft: "30px",
                  paddingRight: "10px",
                }}
              >
                <Link
                  to="/detail"
                  state={{ spice }}
                  style={{ textDecoration: "none" }}
                >
                  <Paper
                    style={{
                      height: "30vh",
                    }}
                    elevation={24}
                  >
                    <CardMedia
                      component="img"
                      height="100px"
                      image={spice.image}
                    />
                    <CardContent>
                      <Typography color="primary" variant="h5">
                        {spice.name}
                      </Typography>
                      <Typography color="textSecondary" variant="subtitle2">
                        {spice.notes}
                      </Typography>
                    </CardContent>
                  </Paper>
                </Link>
              </Grid>
            </>
          );
        })}
      </Grid>
    </>
  );
}

export default Recommendation;
