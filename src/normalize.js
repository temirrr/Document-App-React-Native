/**
 * @providesModule Normalize
 */

 import { Dimensions } from 'react-native';

const scale = Dimensions.get('window').width / 375;

normalize = (size) => {
  return Math.round(scale * size);
};

export default normalize;