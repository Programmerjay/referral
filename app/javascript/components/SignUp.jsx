import { Button, Card, Grid, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PRIMARY_COLOR_0, PRIMARY_COLOR_1 } from "./constants";
import { axiosInstance } from "./utils/axiosInstance";

export default function SignUp(props) {
  const [user, setUser] = useState({});

  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      let url = "/users";
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

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
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
            <TextField label='Password' name='password' type={"password"} onChange={(e) => handleChange(e)}></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label='Confirm Password'
              name='password_confirmation'
              type={"password"}
              onChange={(e) => handleChange(e)}
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              onClick={handleSignUp}
              disableRipple
              sx={{
                backgroundColor: PRIMARY_COLOR_0,
                color: "#fff",
                "&.MuiButtonBase-root:hover": {
                  backgroundColor: PRIMARY_COLOR_1,
                  color: "#fff",
                },
              }}
            >
              SignUp
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              Already Registered? <Link to='/login'>Login</Link>
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </Stack>
  );
}
