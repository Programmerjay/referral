import { Button, Card, Grid, Link, Stack, TextField, Typography } from "@mui/material";
import React from "react";

export default function SignUp() {
  return (
    <Stack flexDirection={"row"} justifyContent={"center"} component={"nav"} padding={"20px"}>
      <Card sx={{ width: "300px" }}>
        <Grid container spacing={3} direction={"column"} justifyContent={"center"} alignItems={"center"}>
          <Grid item xs={12}>
            <TextField label='Username'></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField label='Password' type={"password"}></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField label='Confirm Password' type={"password"}></TextField>
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth> SignUp </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              Already Registered? <Link href='/login'>Login</Link>
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </Stack>
  );
}
