import { Card, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material';
import { PremiereResponseItem } from 'backend/models/PremiereResponseItemDto';
import React from 'react';
import Moment from 'react-moment';
import 'moment/locale/ru';

interface PropTypes {
  film: PremiereResponseItem;
}

export const PremiereItem = ({ film }: PropTypes) => {

  const getStringFromArray = (array: any[], field: string): string => {
    let result = '';
    array.forEach((item, index, array) => {
      const kek = index === array.length - 1 ? item[field] : item[field] + ', ';
      result += kek; 
    });
    return result;
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={film.nameRu}
        subheader={<Moment locale="ru" format="D MMM YYYY">{film.premiereRu}</Moment>}
      />
      <CardMedia
        component="img"
        height="194"
        image={film.posterUrl}
        alt="Paella dish"
      />
      <CardContent>
        <Grid container direction={'column'} spacing={1}>
          <Grid item container direction={'row'}>
            <Grid item xs={8}>
              <Typography variant="body1" color="text.secondary">
                {film.nameEn} ({film.year})
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" color="text.secondary">
                {film.duration} мин.
              </Typography>
            </Grid>
          </Grid>
          <Grid item container direction={'column'} spacing={1}>
            <Grid item>
              <Typography variant="body2" color="text.secondary">
                Жанр: {getStringFromArray(film.genres, 'genre')}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" color="text.secondary">
                {getStringFromArray(film.countries, 'country')}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

