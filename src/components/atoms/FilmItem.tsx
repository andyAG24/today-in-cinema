import { Card, CardActionArea, CardContent, CardHeader, CardMedia, Grid, Tooltip, Typography } from '@mui/material';
import { PremiereResponseItem } from 'backend/models/PremiereResponseItemDto';
import React from 'react';
import Moment from 'react-moment';
import 'moment/locale/ru';
import { getStringFromNestedObjectArrayByField } from 'utils/string';
import { Link } from 'react-router-dom';

interface PropTypes {
  film: PremiereResponseItem;
}

export const FilmItem = ({ film }: PropTypes) => {
  const filmName = film.nameRu ? film.nameRu : film.nameEn;
  const originalFilmNameAndYear = (film.nameEn ? film.nameEn + ', ': '') + film.year;
  
  return (
    <Card style={{ height: '100%' }}>
      <CardActionArea style={{ height: '100%' }} component={Link} to={`/film/${film.kinopoiskId}`}>
        <CardHeader
          style={{ overflow: 'hidden', display: 'block' }}
          title={
            <Tooltip title={filmName} arrow key={'filmName'}>
              <Typography noWrap gutterBottom variant='h6' component='h4'>
                {filmName}
              </Typography>
            </Tooltip>
          }
          subheader={
            <Grid container justifyContent={'space-between'} direction={'row'}>
              <Grid item justifyContent={'flex-end'}>
                <Typography variant='body1' color='text.secondary'>
                  <Moment locale='ru' format='D MMM YYYY'>{film.premiereRu}</Moment>
                </Typography>
              </Grid>
              <Grid item xs={4}>
                { film.duration &&
                  <Typography variant='body1' color='text.secondary' style={{ textAlign: 'end' }}>
                    {film.duration} мин.
                  </Typography>
                }
              </Grid>
            </Grid>
          }
        />
        <CardMedia
          component='img'
          height='294'
          image={film.posterUrl}
          alt={filmName}
        />
        <CardContent>
          <Grid container direction={'column'} spacing={2}>
            <Grid item container direction={'row'}>
              <Grid item>
                <Typography variant='body1' color='text.secondary' key={'originalFilmNameAndYear'}>
                  {originalFilmNameAndYear}
                </Typography>
              </Grid>
            </Grid>
            <Grid item container direction={'column'} spacing={1}>
              <Grid item>
                <Typography variant='body2' color='text.secondary' key={'genres'}>
                  Жанр: {getStringFromNestedObjectArrayByField(film.genres, 'genre')}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body2' color='text.secondary' key={'countries'}>
                  {getStringFromNestedObjectArrayByField(film.countries, 'country')}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

