import { Platform, StyleSheet } from 'react-native';
import Metrics from '../styles/metrics';
import Colors from '../styles/colors';

const ListOfUsersStyles = StyleSheet.create({
  loadingView: { flex: 1, marginTop: Metrics.ScaleValue(20) },
  flatListStyle: {
    marginTop: Metrics.ScaleValue(20),
    marginHorizontal: Metrics.ScaleValue(18),
    marginBottom:
      Platform.OS === 'ios' ? Metrics.ScaleValue(60) : Metrics.ScaleValue(100),
  },
  emptyComponentView: {
    flex: 1,
    alignItems: 'center',
    marginTop: Metrics.ScaleValue(12),
  },
  noDataFoundTextStyle: { ...Metrics.normalSixteen, color: Colors.darkGrey },
  viewMoreTextStyle: {
    ...Metrics.normalTwelve,
    color: Colors.darkGrey,
    textAlign: 'center',
    fontStyle: 'italic',
  },
});

const SingleUserViewStyles = StyleSheet.create({
  parentView: {
    flexDirection: 'row',
    height: Metrics.ScaleValue(56),
    width: '100%',
    marginBottom: Metrics.ScaleValue(15),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '85%',
  },
  favoriteIconView: { marginRight: Metrics.ScaleValue(15) },
  userEmailTextStyle: {
    ...Metrics.normalTwelve,
    color: '#8B8B8B',
    lineHeight: Metrics.ScaleValue(20),
    letterSpacing: Metrics.ScaleValue(-0.24),
  },
  userNameTextStyle: {
    ...Metrics.semiboldSixteen,
    color: '#696464',
    lineHeight: Metrics.ScaleValue(20),
    letterSpacing: Metrics.ScaleValue(-0.32),
  },
  userDetailsView: { marginLeft: Metrics.ScaleValue(12) },
  userImageStyle: {
    position: 'absolute',
    top: Metrics.ScaleValue(11),
    left: Metrics.ScaleValue(18),
    borderRadius: Metrics.ScaleValue(25),
  },
  userGenderIconStyle: {
    backgroundColor: Colors.white,
    position: 'absolute',
    zIndex: 1,
    padding: Metrics.ScaleValue(8),
    borderRadius: Metrics.ScaleValue(25),
    top: Metrics.ScaleValue(1),
    shadowColor: Colors.shadowColor,
    shadowOffset: {
      width: Metrics.ScaleValue(-2),
      height: Metrics.ScaleValue(2),
    },
    shadowOpacity: Metrics.ScaleValue(0.2),
    shadowRadius: Metrics.ScaleValue(20),
    borderColor: Colors.darkGrey,
    borderWidth: Metrics.ScaleValue(0.4),
  },
  genderAndUserProfileView: {
    width: Metrics.ScaleValue(62),
    height: Metrics.ScaleValue(56),
  },
});

const HeaderStyles = StyleSheet.create({
  parentView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Metrics.ScaleValue(20),
    marginHorizontal: Metrics.ScaleValue(18),
  },
  userNameTextStyle: {
    ...Metrics.semiboldTwentyFour,
    color: Colors.headerTitleColor,
    letterSpacing: Metrics.ScaleValue(-0.48),
    lineHeight: Metrics.ScaleValue(30),
  },
});

const SearchStyles = StyleSheet.create({
  parentView: {
    flexDirection: 'row',
    marginHorizontal: Metrics.ScaleValue(18),
    backgroundColor: Colors.white,
    height: Metrics.ScaleValue(52),
    width: '90%',
    borderRadius: Metrics.ScaleValue(54),
    alignItems: 'center',
    paddingLeft: Metrics.ScaleValue(16),
    marginTop: Metrics.ScaleValue(32),
    borderColor: Colors.darkGrey,
    borderWidth: Metrics.ScaleValue(0.4),
  },
  textInputStyle: {
    height: Metrics.ScaleValue(52),
    width: '70%',
    marginLeft: Metrics.ScaleValue(12.28),
  },
  verticalSeparatorView: {
    width: Metrics.ScaleValue(2),
    backgroundColor: '#E0E2E3',
    height: Metrics.ScaleValue(52),
  },
  filterIconView: {
    flex: 1,
    borderTopRightRadius: Metrics.ScaleValue(52),
    borderBottomRightRadius: Metrics.ScaleValue(52),
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export { ListOfUsersStyles, SingleUserViewStyles, HeaderStyles, SearchStyles };
