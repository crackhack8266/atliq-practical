import { Colors, Metrics } from '#/styles';
import { StyleSheet } from 'react-native';

const NavigatorStyles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    bottom: Metrics.ScaleValue(30),
    left: Metrics.ScaleValue(20),
    width: '90%',
    height: Metrics.ScaleValue(60),
    borderRadius: Metrics.ScaleValue(8),
    shadowColor: Colors.shadowColor,
    shadowOffset: {
      width: Metrics.ScaleValue(-2),
      height: Metrics.ScaleValue(2),
    },
    shadowOpacity: Metrics.ScaleValue(0.1),
    shadowRadius: Metrics.ScaleValue(10),
  },
  tabBarButtonView: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    height: Metrics.ScaleValue(60),
    borderRadius: Metrics.ScaleValue(8),
  },
  activeIconStyle: {
    backgroundColor: Colors.activeTabColor,
    height: Metrics.ScaleValue(3),
    marginTop: Metrics.ScaleValue(3),
    borderRadius: Metrics.ScaleValue(50),
  },
});

export default NavigatorStyles;
