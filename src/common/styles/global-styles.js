import { StyleSheet } from 'react-native';
import Colors from './colors';
import Metrics from './metrics';

const GlobalStyles = StyleSheet.create({
  // INFO: GlobalStyles will contain the common styles which will be used commonly all over the app
  flex: {
    flex: 1,
  },
  flexGrow: {
    flexGrow: 1,
  },
  flexRow: {
    flexDirection: 'row',
  },
  centerRowAlign: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  centerAlign: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: Metrics.ScaleValue(16),
  },
  containerWithoutPadding: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  justifySpaceBetweenInRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapFlex: { flexWrap: 'wrap', flexDirection: 'row', alignItems: 'center' },
  rowFlexEnd: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  svgIconStyle: {
    width: Metrics.ScaleValue(24),
    height: Metrics.ScaleValue(24),
  },
  scrollingViewBottomPadding: {
    paddingBottom: Metrics.ScaleValue(50),
  },
  containerPadding: {
    paddingHorizontal: Metrics.ScaleValue(16),
  },
});

export default GlobalStyles;
