import React, { useState } from "react";
import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import SerachExercises from "../components/SerachExercises";
import Exercises from "../components/Exercises";

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SerachExercises />
      <Exercises />
    </Box>
  );
};

export default Home;
