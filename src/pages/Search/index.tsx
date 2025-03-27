import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { styles } from '../../styles/styles';

export function Search() {
  return (
    <View style={styles.container}>
      <Text>Search</Text>
      <StatusBar style="auto" />
    </View>
  );
}


