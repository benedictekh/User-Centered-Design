import { StyleSheet, View } from 'react-native';
import NavBar from './components/NavBar';

export default function App() {
  return (
    <View style={styles.container}>
      <NavBar></NavBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
