import { Card, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material';
import { PremiereResponseItem } from 'backend/models/PremiereResponseItemDto';
import React from 'react';
import Moment from 'react-moment';
import 'moment/locale/ru';

interface PropTypes {
  film: PremiereResponseItem;
}

export const FilmItem = ({ film }: PropTypes) => {

  const getStringFromArray = (array: any[], field: string): string => {
    let result = '';
    array.forEach((item, index, array) => {
      const kek = index === array.length - 1 ? item[field] : item[field] + ', ';
      result += kek; 
    });
    return result;
  };

  return (
    <Card style={{ height: '100%' }}>
      <CardHeader
        style={{ overflow: 'hidden', display: 'block' }}
        title={
          <Typography noWrap gutterBottom variant='h6' component='h4'>
            {film.nameRu}
          </Typography>
        }
        subheader={
          <Grid container justifyContent={'space-between'} direction={'row'}>
            <Grid item justifyContent={'flex-end'}>
              <Typography variant='body1' color='text.secondary'>
                <Moment locale='ru' format='D MMM YYYY'>{film.premiereRu}</Moment>
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant='body1' color='text.secondary' style={{ textAlign: 'end' }}>
                {film.duration} мин.
              </Typography>
            </Grid>
          </Grid>
        }
      />
      <CardMedia
        component='img'
        height='294'
        image={film.posterUrl}
        alt={film.nameRu}
      />
      <CardContent>
        <Grid container direction={'column'} spacing={2}>
          <Grid item container direction={'row'}>
            <Grid item>
              <Typography variant='body1' color='text.secondary'>
                {film.nameEn ? film.nameEn + ', ': ''}{film.year}
              </Typography>
            </Grid>
          </Grid>
          <Grid item container direction={'column'} spacing={1}>
            <Grid item>
              <Typography variant='body2' color='text.secondary'>
                Жанр: {getStringFromArray(film.genres, 'genre')}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='body2' color='text.secondary'>
                {getStringFromArray(film.countries, 'country')}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

