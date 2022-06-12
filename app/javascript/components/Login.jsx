import { Button, Card, Grid, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PRIMARY_COLOR_0, PRIMARY_COLOR_1 } from "./constants";
import { axiosInstance } from "./utils/axiosInstance";

export default function Login(props) {
  const [user, setUser] = useState({});
  const [error, setError] = useState({});

  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      let url = "users/sign_in";
      let response = await axiosInstance.post(url, { user: user });
      let data = await response.data;
      if (data.success) {
        localStorage.setItem("user", user.email);
        props.setAuth(true);
        navigate("/");
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Stack flexDirection={"row"} justifyContent={"center"} component={"nav"} padding={"20px"}>
      <Card sx={{ width: "300px", minHeight: "300px" }} raised>
        <Grid container spacing={3} direction={"column"} justifyContent={"center"} alignItems={"center"}>
          <Grid item xs={12}>
            <TextField
              label='Email'
              type={"email"}
              sx={{ marginTop: "30px" }}
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
              }}
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label='Password'
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
              type={"password"}
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <Button
              disableRipple
              sx={{
                backgroundColor: PRIMARY_COLOR_0,
                color: "#fff",
                "&.MuiButtonBase-root:hover": {
                  backgroundColor: PRIMARY_COLOR_1,
                  color: "#fff",
                },
              }}
              fullWidth
              onClick={() => {
                handleLogin();
              }}
            >
              Login
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              New User? <Link to='/signup'>Sign Up</Link>
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </Stack>
  );
}
