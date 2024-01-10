const initialState = {
  favorite: [],
};

const FavoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'STORE_FAVORITES': {
      const data = action.payload;
      const index = state.favorite.findIndex(
        (item) => item.login.username === data.login.username
      );
      if (index !== -1) {
        state.favorite.splice(index, 1);
      } else {
        state.favorite.push(data);
      }

      return {
        ...state,
        favorite: state.favorite,
      };
    }
    default:
      return state;
  }
};

export default FavoriteReducer;
