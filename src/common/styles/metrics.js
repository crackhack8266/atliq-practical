import { Dimensions, Platform } from 'react-native';
import fonts from '../assets/fonts';

const { width, height } = Dimensions.get('window');
const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];
// INFO: Default guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 390;
const guidelineBaseHeight = 680;
const scale = (size) => (shortDimension / guidelineBaseWidth) * size;
const verticalScale = (size) => (longDimension / guidelineBaseHeight) * size;

// INFO: Enable below if necessary
// const moderateScale = (size, factor = 0.5) =>
//   size + (scale(size) - size) * factor;
// const moderateVS = (size, factor = 0.5) =>
//   size + (verticalScale(size) - size) * factor;

const screenHeight = width < height ? height : width;
const screenWidth = width < height ? width : height;
const checkIosDeviceSize = screenHeight === 812 ? 44 : 20;
const Metrics = {
  width,
  height,
  screenHeight,
  screenWidth,
  ScaleValue: (val) => scale(val),
  VerticalScaleValue: (val) => verticalScale(val),
  // INFO: Below all the fonts will change based on the fonts selection
  normalTwentyFour: {
    fontSize: scale(24),
    fontFamily: fonts.fontTypes.InterRegular,
  },
  normalTwelve: {
    fontSize: scale(12),
    fontFamily: fonts.fontTypes.InterRegular,
  },
  boldFourteen: {
    fontFamily: fonts.fontTypes.InterBold,
    fontSize: scale(14),
  },
  twelveMedium: {
    fontFamily: fonts.fontTypes.InterMedium,
    fontSize: scale(12),
  },
  sixteenMedium: {
    fontFamily: fonts.fontTypes.InterMedium,
    fontSize: scale(16),
  },
  eighteenMedium: {
    fontFamily: fonts.fontTypes.InterMedium,
    fontSize: scale(18),
  },
  normalSixteen: {
    fontSize: scale(16),
    fontFamily: fonts.fontTypes.InterRegular,
  },
  normalTwenty: {
    fontSize: scale(20),
    fontFamily: fonts.fontTypes.InterRegular,
  },
  boldTwenty: {
    fontSize: scale(20),
    fontFamily: fonts.fontTypes.InterBold,
  },
  boldTwentyFour: {
    fontSize: scale(24),
    fontFamily: fonts.fontTypes.InterBold,
  },
  semiBoldEighteen: {
    fontSize: scale(18),
    fontFamily: fonts.fontTypes.InterSemiBold,
  },
  semiBoldFourteen: {
    fontSize: scale(14),
    fontFamily: fonts.fontTypes.InterSemiBold,
  },
  semiBoldTwelve: {
    fontSize: scale(12),
    fontFamily: fonts.fontTypes.InterSemiBold,
  },
  mediumTwelve: {
    fontSize: scale(12),
    fontFamily: fonts.fontTypes.InterMedium,
  },
  mediumFourteen: {
    fontSize: scale(14),
    fontFamily: fonts.fontTypes.InterMedium,
  },
  normalEighteen: {
    fontSize: scale(18),
    fontFamily: fonts.fontTypes.InterRegular,
  },
  normalFourteen: {
    fontSize: scale(14),
    fontFamily: fonts.fontTypes.InterRegular,
  },
  thinSixteen: {
    fontSize: scale(16),
    fontFamily: fonts.fontTypes.InterThin,
  },
  normalThirteen: {
    fontSize: scale(13),
    fontFamily: fonts.fontTypes.InterRegular,
  },
  normalTen: {
    fontSize: scale(10),
    fontFamily: fonts.fontTypes.InterRegular,
  },
  semiBoldTen: {
    fontSize: scale(10),
    fontFamily: fonts.fontTypes.InterSemiBold,
  },
  semiBoldSixteen: {
    fontSize: scale(16),
    fontFamily: fonts.fontTypes.InterSemiBold,
  },
  boldSixteen: {
    fontSize: scale(16),
    fontFamily: fonts.fontTypes.InterBold,
  },
  semiBoldTwenty: {
    fontSize: scale(20),
    fontFamily: fonts.fontTypes.InterSemiBold,
  },

  boldTen: {
    fontSize: scale(10),
    fontFamily: fonts.fontTypes.InterBold,
  },
  navBarHeight: Platform.OS === 'ios' ? checkIosDeviceSize : 20,
};

export default Metrics;
