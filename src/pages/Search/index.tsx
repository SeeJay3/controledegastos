import { useState } from 'react';
import { Alert, FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { spendingGetAll } from '../../storage/spending/spendingGetAll';
import { SpendingStorageDTO } from '../../storage/spending/SpendingStorageDTO';
import { TransactionExpenses } from '../../components/TransactionExpenses';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export function Search() {
  const [category, setCategory] = useState('')
  const [dataExpenses, setDataExpenses] = useState<SpendingStorageDTO[]>([])
  
  async function handleSearchSpending() {
    if (category.trim() === ''){
    return Alert.alert('Gastos', 'Por favor, digite o nome da categoria')
    }
    const data = await spendingGetAll()

    const newData = data.filter(dat => dat.category.toLowerCase() === category.toLowerCase())

    if (newData.length === 0){
      return Alert.alert('Gastos', 'Categoria Inexistente')
    }
    setDataExpenses(newData)
  }
  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Pesquisa de Gastos</Text>
        </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, { flex: 1, marginRight: 10, marginBottom: 0 }]}
              placeholder='Categoria:'
              onChangeText={value => setCategory(value)}
            />
            
            <TouchableOpacity
              style={styles.button}
              onPress={handleSearchSpending}
            >
              <FontAwesome 
                     name="search" 
                     size={26} 
                     color={"white"}
              /> 
            </TouchableOpacity>
          </View>
          
          <View style={styles.transactions}>
            <FlatList
              data={dataExpenses}
              renderItem={({ item }) => <TransactionExpenses data={item}/>}
              showsVerticalScrollIndicator={false}
            />
          </View>
    </View>
  );
}
