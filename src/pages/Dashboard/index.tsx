import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';
import { styles } from './styles';
import { useState, useCallback } from 'react'
import { ScrollView } from 'react-native'
import { spendingCreate } from '../../storage/spending/spendingCreate'
import { spendingGetAll } from '../../storage/spending/spendingGetAll'
import { TextInputMask } from 'react-native-masked-text';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Dashboard() {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [datePurchase, setDatePurchase] = useState('')
  const [category, setCategory] = useState('')
  const [local, setLocal] = useState('')

  async function handleAddNewSpending() {
    // Para limpar a lista
    // await AsyncStorage.clear()
    // alert("O programa será finalizado")
    // return;

    if (name.trim() === '' || amount.trim() === '' || datePurchase.trim() === '' || category.trim() === '' || local.trim() === '') 
    {return Alert.alert('Gastos', 'Favor preencha todos os campos')}

    const data = {
      name,
      amount,
      datePurchase,
      category,
      local
    }

    console.log(data)

    await spendingCreate(data)
    const result = await spendingGetAll()
    console.log(result)

    setName('')
    setAmount('')
    setDatePurchase('')
    setCategory('')
    setLocal('')
  }

  return (
    <View style={styles.container}>
       <View style={styles.header}>
          <Text style={styles.title}>Controle de Gastos</Text>
       </View>
      <TextInput 
        style={styles.input} 
        placeholder='Descrição'
        value={name}
        onChangeText={value => setName(value)}
        />
      <TextInputMask
        type={'datetime'}
        options={{
          format: 'DD/MM/YYYY',
        }}
        style={styles.input}
        placeholder="Data"
        value={datePurchase}
        onChangeText={value => setDatePurchase(value)}
      />	
          
      <TextInput 
        style={styles.input}
        placeholder='Valor'
        value={amount}
        keyboardType='numeric'
        onChangeText={value => setAmount(value)}
        />
      <TextInput 
        style={styles.input}
        placeholder='Categoria'
        value={category}
        onChangeText={value => setCategory(value)}
        />
      <TextInput 
        style={styles.input}
        placeholder='Local'
        value={local}
        onChangeText={value => setLocal(value)}
        />
      <StatusBar style="auto" />

      <TouchableOpacity style={styles.button} onPress={handleAddNewSpending}>
        <Text style={styles.buttonText}>
            Adicionar
        </Text>
      </TouchableOpacity> 
    </View>
  );
}


