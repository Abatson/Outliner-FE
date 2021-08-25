import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Card, CardContent, CardHeader, Typography } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <br></br>
      <Card style={{display:"inline-block"}} variant="outlined">
        <CardHeader title="Plot Point"></CardHeader>
        <CardContent>
          <Typography>Description about the plot point</Typography>
        </CardContent>
      </Card>
      <br></br>
    </div>
  );
}

export default App;
