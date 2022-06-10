import { Button, Card, Grid, Link, TextField, Typography } from "@mui/material";
import React from "react";

export default function Login() {
  return (
    <Card sx={{ width: "300px", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Grid container spacing={3} direction={"column"} justifyContent={"center"} alignItems={"center"}>
        <Grid item xs={12}>
          <TextField label='Username'></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField label='Password' type={"password"}></TextField>
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth> Login </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography>
            New User? <Link href='/signup'>Sign Up</Link>
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
}
