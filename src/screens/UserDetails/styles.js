import { Colors, Metrics } from '#/styles';
import { StyleSheet } from 'react-native';

const UserDetailsStyles = StyleSheet.create({
  parentView: {
    marginHorizontal: Metrics.ScaleValue(18),
    marginTop: Metrics.ScaleValue(12),
  },
  profileImageAndNameView: {
    marginTop: Metrics.ScaleValue(31),
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImageWidth: { width: Metrics.ScaleValue(130) },
  profileImageBorder: { borderRadius: Metrics.ScaleValue(90) },
  genderIconView: {
    padding: Metrics.ScaleValue(12),
    backgroundColor: Colors.white,
    position: 'absolute',
    bottom: Metrics.ScaleValue(4),
    left: Metrics.ScaleValue(89),
    borderRadius: Metrics.ScaleValue(25),
    shadowColor: Colors.shadowColor,
    shadowOffset: {
      width: Metrics.ScaleValue(-2),
      height: Metrics.ScaleValue(2),
    },
    shadowOpacity: Metrics.ScaleValue(0.3),
    shadowRadius: Metrics.ScaleValue(20),
  },
  profileNameTitleView: { marginLeft: Metrics.ScaleValue(20) },
  profileNameTitleTextStyle: {
    ...Metrics.mediumEighteen,
    color: Colors.lightgrey,
    lineHeight: Metrics.ScaleValue(20),
    letterSpacing: Metrics.ScaleValue(-0.36),
  },
  profileNameValueTextStyle: {
    ...Metrics.semiboldTwentyTwo,
    color: Colors.darkGrey,
    letterSpacing: Metrics.ScaleValue(-0.44),
    flexWrap: 'wrap',
    width: Metrics.ScaleValue(190),
    marginRight: Metrics.ScaleValue(20),
  },
  userDetailsTextStyle: {
    ...Metrics.normalSixteen,
    marginLeft: Metrics.ScaleValue(26),
    color: Colors.darkGrey,
    letterSpacing: Metrics.ScaleValue(-0.32),
    lineHeight: Metrics.ScaleValue(20),
  },
  profileDesignView: {
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: Metrics.ScaleValue(0),
  },
});

export default UserDetailsStyles;
