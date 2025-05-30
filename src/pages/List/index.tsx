import { useState, useEffect, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { FlatList, View, Text, TouchableOpacity, Alert } from 'react-native'
import { styles } from './styles'
import { spendingGetAll } from '../../storage/spending/spendingGetAll'
import { SpendingStorageDTO } from '../../storage/spending/SpendingStorageDTO'
import { TransactionExpenses } from '../../components/TransactionExpenses'
import { spendingRemove } from '../../storage/spending/spendingRemove'
import { spendingEdit } from '../../storage/spending/spendingEdit'

export function List() {
  const [dataExpenses, setDataExpenses] =
    useState<SpendingStorageDTO[]>([])

  async function loadDataSpending() {
    const data: SpendingStorageDTO[] = await spendingGetAll()
    setDataExpenses(data)
  }

  async function handleDeleteSpending(itemToDelete:SpendingStorageDTO) {
    Alert.alert(
      'Excluir gasto',
      'Deseja mesmo excluir este gasto?',
      [
        { text: 'Cancelar'},
        {text: 'Excluir', onPress: async () => { await spendingRemove(itemToDelete); loadDataSpending();}}
      ]
    );
  }

  async function handleEditSpending(itemEdited: SpendingStorageDTO) {
    Alert.alert(
      'Editar gasto',
      'Deseja salvar as alterações deste gasto?',
      [
        { text: 'Cancelar' },
        { 
          text: 'Salvar', 
          onPress: async () => { 
            await spendingEdit(itemEdited); 
            loadDataSpending(); 
          } 
        }
      ]
    );
  }

  useFocusEffect(useCallback(() => {
    loadDataSpending()
  }, []))

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Listagem de Gastos</Text>
      </View>
      <View style={styles.transactions}>
        <FlatList
          data={dataExpenses}
          renderItem={({ item }) => (
            <TransactionExpenses
              data={item}
              onEdit={() => handleEditSpending(item)}
              onRemove={() => handleDeleteSpending(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
          />
      </View>

    </View>
  )
}