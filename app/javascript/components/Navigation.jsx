import { Link, Stack } from "@mui/material";
import React from "react";

export default function Navigation() {
  return (
    <>
      <Stack flexDirection={"row"} justifyContent={"center"} component={"nav"} padding={"20px"}>
        <Link href='/'>Home</Link>
      </Stack>
    </>
  );
}
