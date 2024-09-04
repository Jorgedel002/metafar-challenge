import { ActivityIndicator, MD2Colors } from 'react-native-paper';

const LoadingSpinner = () => (
  <ActivityIndicator animating={true} color={MD2Colors.red800} />
);

export default LoadingSpinner;