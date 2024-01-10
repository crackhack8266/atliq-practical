const initialState = {
  favoriteList: [],
};

const FavoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'STORE_FAVORITES': {
      const data = action.payload;
      const index = state.favoriteList.findIndex(
        (item) => item.login.username === data.login.username
      );
      if (index !== -1) {
        // Object with the same ID exists, remove it
        state.favoriteList.splice(index, 1);
      } else {
        // Object with the same ID doesn't exist, add it
        state.favoriteList.push(data);
      }

      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default FavoriteReducer;
