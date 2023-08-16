import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { useQuery } from "react-query";

const fetchData = async (key) => {
  const res = await fetch("");
  return res.json();
};

const Cards = () => {
  return (
    <div>
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          component={"img"}
          height="540"
          image="https://images.unsplash.com/photo-1682685794304-99d3d07c57d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80"
          alt="test image"
        />
      </Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div"></Typography>
      </CardContent>
    </div>
  );
};

export default Cards;
