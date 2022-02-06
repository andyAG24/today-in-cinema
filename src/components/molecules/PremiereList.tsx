import { Grid } from "@mui/material";
import { PremiereResponseItem } from "backend/models/PremiereResponseItemDto";
import { PremiereItem } from "components/atoms/PremiereItem";

interface PropTypes {
  list: PremiereResponseItem[];
}

export const PremiereList = ({ list }: PropTypes) => {
  return (
    <Grid container spacing={4}>
      {list.map((item) => (
        <Grid item xs={3}>
          <PremiereItem key={item.kinopoiskId} film={item} />
        </Grid>
      ))}
    </Grid>
  );
}