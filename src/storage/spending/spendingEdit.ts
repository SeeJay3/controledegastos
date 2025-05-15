import AsyncStorage from '@react-native-async-storage/async-storage';
import { SpendingStorageDTO } from './SpendingStorageDTO';
import { SPENDING_COLLECTION } from '../storageConfig';

export async function spendingEdit(itemToEdit: SpendingStorageDTO) {
  const storage = await AsyncStorage.getItem(SPENDING_COLLECTION);
  const data: SpendingStorageDTO[] = storage ? JSON.parse(storage) : [];

  const updatedData = data.map(item => {
    if (
      item.name === itemToEdit.name &&
      item.datePurchase === itemToEdit.datePurchase &&
      item.amount === itemToEdit.amount
    ) {
      return itemToEdit; 
    }
    return item;
  });

  await AsyncStorage.setItem(SPENDING_COLLECTION, JSON.stringify(updatedData));
}

	