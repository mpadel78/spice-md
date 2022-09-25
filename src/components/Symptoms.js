import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Select, MenuItem, Button } from "@mui/material/";
import { Link } from "react-router-dom";

function Symptoms() {
  const [symptoms, setSymptoms] = useState([]);
  console.log(symptoms);
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
          <Typography variant="h5">
            {" "}
            Hey what are your symptoms and status?
          </Typography>
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
          <Select
            value={2}
            style={{ marginTop: 10, marginLeft: 10, width: "30vw" }}
          >
            <MenuItem
              value="Hypertension"
              onClick={(event) => {
                if (symptoms.indexOf("Hypertension") <= -1) {
                  setSymptoms((symptoms) => [...symptoms, "Hypertension"]);
                }
              }}
            >
              Hypertension
            </MenuItem>
            <MenuItem
              value="Diabetes"
              onClick={(event) => {
                if (symptoms.indexOf("Diabetes") <= -1) {
                  setSymptoms((symptoms) => [...symptoms, "Diabetes"]);
                }
              }}
            >
              Diabetes
            </MenuItem>
            <MenuItem
              value="Arthritis"
              onClick={(event) => {
                if (symptoms.indexOf("Arthritis") <= -1) {
                  setSymptoms((symptoms) => [...symptoms, "Arthritis"]);
                }
              }}
            >
              Arthritis
            </MenuItem>
            <MenuItem
              value="Pregnancy"
              onClick={(event) => {
                if (symptoms.indexOf("Pregnancy") <= -1) {
                  setSymptoms((symptoms) => [...symptoms, "Pregnancy"]);
                }
              }}
            >
              Pregnancy
            </MenuItem>
            <MenuItem
              value="Irritable Bowl Syndrome"
              onClick={(event) => {
                if (symptoms.indexOf("Irritable Bowl Syndrome") <= -1) {
                  setSymptoms((symptoms) => [
                    ...symptoms,
                    "Irritable Bowl Syndrome",
                  ]);
                }
              }}
            >
              Irritable Bowl Syndrome
            </MenuItem>
            <MenuItem
              value="Constipation"
              onClick={(event) => {
                if (symptoms.indexOf("Constipation") <= -1) {
                  setSymptoms((symptoms) => [...symptoms, "Constipation"]);
                }
              }}
            >
              Constipation
            </MenuItem>
            <MenuItem
              value={4}
              onClick={(event) => {
                if (symptoms.indexOf("Obesity") <= -1) {
                  setSymptoms((symptoms) => [...symptoms, "Obesity"]);
                }
              }}
            >
              Obesity
            </MenuItem>
            <MenuItem
              value={4}
              onClick={(event) => {
                if (symptoms.indexOf("Cancer") <= -1) {
                  setSymptoms((symptoms) => [...symptoms, "Cancer"]);
                }
              }}
            >
              Cancer
            </MenuItem>
            <MenuItem
              value={4}
              onClick={(event) =>
                setSymptoms((symptoms) => [...symptoms, "PMS"])
              }
            >
              PMS
            </MenuItem>
            <MenuItem
              value={4}
              onClick={(event) => {
                if (symptoms.indexOf("Alzheimer") <= -1) {
                  setSymptoms((symptoms) => [...symptoms, "Alzheimer"]);
                }
              }}
            >
              Alzheimer
            </MenuItem>
            <MenuItem
              value={4}
              onClick={(event) => {
                if (symptoms.indexOf("Constipation") <= -1) {
                  setSymptoms((symptoms) => [...symptoms, "Dementia"]);
                }
              }}
            >
              Dementia
            </MenuItem>
            <MenuItem
              value={4}
              onClick={(event) => {
                if (symptoms.indexOf("Sore Throat") <= -1) {
                  setSymptoms((symptoms) => [...symptoms, "Sore Throat"]);
                }
              }}
            >
              Sore Throat
            </MenuItem>
            <MenuItem
              value={4}
              onClick={(event) => {
                if (symptoms.indexOf("Cramps") <= -1) {
                  setSymptoms((symptoms) => [...symptoms, "Cramps"]);
                }
              }}
            >
              Cramps
            </MenuItem>
            <MenuItem
              value={4}
              onClick={(event) => {
                if (symptoms.indexOf("Burns") <= -1) {
                  setSymptoms((symptoms) => [...symptoms, "Burns"]);
                }
              }}
            >
              Burns
            </MenuItem>
            <MenuItem
              value={4}
              onClick={(event) => {
                if (symptoms.indexOf("Urinary Track Infection") <= -1) {
                  setSymptoms((symptoms) => [
                    ...symptoms,
                    "Urinary Track Infection",
                  ]);
                }
              }}
            >
              Urinary Track Infection
            </MenuItem>
            <MenuItem
              value={4}
              onClick={(event) => {
                if (symptoms.indexOf("High Cholestrol") <= -1) {
                  setSymptoms((symptoms) => [...symptoms, "High Cholestrol"]);
                }
              }}
            >
              High Cholestrol
            </MenuItem>
            <MenuItem
              value={4}
              onClick={(event) => {
                if (symptoms.indexOf("Low Liver function") <= -1) {
                  setSymptoms((symptoms) => [
                    ...symptoms,
                    "Low liver function",
                  ]);
                }
              }}
            >
              Low Liver function
            </MenuItem>
            <MenuItem
              value={4}
              onClick={(event) => {
                if (symptoms.indexOf("Nausea") <= -1) {
                  setSymptoms((symptoms) => [...symptoms, "Nausea"]);
                }
              }}
            >
              Nausea
            </MenuItem>
            <MenuItem
              value={4}
              onClick={(event) => {
                if (symptoms.indexOf("Dizzines") <= -1) {
                  setSymptoms((symptoms) => [...symptoms, "Dizziness"]);
                }
              }}
            >
              Dizziness
            </MenuItem>
            <MenuItem
              value={4}
              onClick={(event) => {
                if (symptoms.indexOf("Diarrhea") <= -1) {
                  setSymptoms((symptoms) => [...symptoms, "Diarrhea"]);
                }
              }}
            >
              Diarrhea
            </MenuItem>
            <MenuItem
              value={4}
              onClick={(event) => {
                if (symptoms.indexOf("Cough") <= -1) {
                  setSymptoms((symptoms) => [...symptoms, "Cough"]);
                }
              }}
            >
              Cough
            </MenuItem>
            <MenuItem
              value={4}
              onClick={(event) => {
                if (symptoms.indexOf("Congestion") <= -1) {
                  setSymptoms((symptoms) => [...symptoms, "Congestion"]);
                }
              }}
            >
              Congestion
            </MenuItem>
            <MenuItem
              value={4}
              onClick={(event) => {
                if (symptoms.indexOf("Itchiness") <= -1) {
                  setSymptoms((symptoms) => [...symptoms, "Itchiness"]);
                }
              }}
            >
              Itchiness
            </MenuItem>
            <MenuItem
              value={4}
              onClick={(event) => {
                if (symptoms.indexOf("Heartburn") <= -1) {
                  setSymptoms((symptoms) => [...symptoms, "Heartburn"]);
                }
              }}
            >
              Heartburn
            </MenuItem>
            <MenuItem
              value={4}
              onClick={(event) => {
                if (symptoms.indexOf("Ulcer") <= -1) {
                  setSymptoms((symptoms) => [...symptoms, "Ulcer"]);
                }
              }}
            >
              Ulcer
            </MenuItem>
            <MenuItem
              value={4}
              onClick={(event) => {
                if (symptoms.indexOf("Excessive Teeth Plaque") <= -1) {
                  setSymptoms((symptoms) => [
                    ...symptoms,
                    "Excessive Teeth Plaque",
                  ]);
                }
              }}
            >
              Excessive Teeth Plaque
            </MenuItem>
          </Select>
          <br />
          <br />
          <br />
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
          Symptoms you have selected are:
          <br />
          <br />
          <br />
          <br />
          {symptoms.map((employee, index) => {
            return (
              <>
                <Button key={index} variant="contained">
                  {employee}
                </Button>{" "}
              </>
            );
          })}
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
          <br />
          <br />
          <br />
          <Button
            variant="outlined"
            color="error"
            onClick={(event) =>
              setSymptoms(
                //(symptoms) => [...symptoms, "Itchiness"])
                []
              )
            }
          >
            Clear the symptoms
          </Button>

          <br />
          <br />
          <br />
          <br />
          <br />
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
          <Button variant="contained" color="success">
            <Link to="/recommendation" style={{ textDecoration: "none" }}>
              Get the spices
            </Link>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Symptoms;
