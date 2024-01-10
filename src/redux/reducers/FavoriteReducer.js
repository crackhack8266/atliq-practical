const initialState = {
  favorite: [],
  home: [],
};

const FavoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'STORE_FAVORITES': {
      const data = action.payload;
      let objectToBeModified;
      const index = state.favorite.findIndex(
        (item) => item.login.username === data.login.username
      );
      if (index !== -1) {
        state.favorite.splice(index, 1);
        objectToBeModified = state.home.find(
          (user) => user.login.username === data.login.username
        );
        objectToBeModified.isNotFav = false;
      } else {
        state.favorite.push(data);
        objectToBeModified = state.home.find(
          (user) => user.login.username === data.login.username
        );
        objectToBeModified.isNotFav = true;
      }

      const finalArray = state.home.map((homeDataEntry) => {
        if (
          homeDataEntry.login.username === objectToBeModified.login.username
        ) {
          return objectToBeModified;
        }
        return homeDataEntry;
      });

      return {
        ...state,
        favorite: state.favorite,
        home: finalArray,
      };
    }
    case 'STORE_HOME_DATA': {
      return {
        ...state,
        home: action.payload,
      };
    }
    default:
      return state;
  }
};

export default FavoriteReducer;
