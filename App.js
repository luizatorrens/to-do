import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './src/components/Header';
export default function App() {
  const tasks = ['Tarefa 1', 'Tarefa 2', 'Tarefa 3']
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={tasks}
        renderItem={({ item }) => <Text> {item} </Text>}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
