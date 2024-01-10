import React from 'react';
import { useSelector } from 'react-redux';
import FavoriteView from './FavoriteView';

const FavoriteContainer = () => {
  const favoritesList = useSelector((state) => state.favorite);

  return <FavoriteView favoritesList={favoritesList} />;
};

export default FavoriteContainer;
