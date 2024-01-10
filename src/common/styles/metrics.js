import { Dimensions } from 'react-native';
import fonts from '../assets/fonts';

const { width, height } = Dimensions.get('window');
const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];
// INFO: Default guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 390;

const scale = (size) => (shortDimension / guidelineBaseWidth) * size;
const screenHeight = width < height ? height : width;
const screenWidth = width < height ? width : height;
const Metrics = {
  width,
  height,
  screenHeight,
  screenWidth,
  ScaleValue: (val) => scale(val),

  // INFO: Below all the fonts will change based on the fonts selection
  semiboldTwentyFour: {
    fontSize: scale(24),
    fontFamily: fonts.fontTypes.OpenSansSemiBold,
  },
  semiboldSixteen: {
    fontSize: scale(16),
    fontFamily: fonts.fontTypes.OpenSansSemiBold,
  },
  normalTwelve: {
    fontFamily: fonts.fontTypes.OpenSansRegular,
    fontSize: scale(12),
  },
  normalSixteen: {
    fontFamily: fonts.fontTypes.OpenSansRegular,
    fontSize: scale(16),
  },
  mediumEighteen: {
    fontFamily: fonts.fontTypes.OpenSansRegular,
    fontSize: scale(18),
  },
  semiboldTwentyTwo: {
    fontFamily: fonts.fontTypes.OpenSansSemiBold,
    fontSize: scale(22),
  },
};

export default Metrics;
