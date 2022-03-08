import React from 'react';
import { Grid } from "@mui/material";
import { PremiereResponseItem } from "backend/models/PremiereResponseItemDto";
import { FilmItem } from "components/atoms/FilmItem";

interface PropTypes {
  list: PremiereResponseItem[];
}

export const FilmList = ({ list }: PropTypes) => {
  return (
    <Grid 
      container
      direction="row"
      alignItems="stretch"
      spacing={3} 
    >
      {list.map((item) => (
        <Grid item key={item.kinopoiskId} xs={4} md={3} xl={2}>
          <FilmItem key={item.kinopoiskId} film={item} />
        </Grid>
      ))}
    </Grid>
  );
}