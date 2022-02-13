import { Grid, Typography } from "@mui/material";
import { PremiereResponseItem } from "backend/models/PremiereResponseItemDto";
import { PremiereItem } from "components/atoms/PremiereItem";

interface PropTypes {
  list: PremiereResponseItem[];
}

export const PremiereList = ({ list }: PropTypes) => {
  return (
    <Grid 
      container
      direction="row"
      // justifyContent="center"
      alignItems="stretch"
      spacing={3} 
    >
      {list.map((item) => (
        <Grid item key={item.kinopoiskId} xs={3}>
          <PremiereItem key={item.kinopoiskId} film={item} />
        </Grid>
      ))}
    </Grid>
  );
}