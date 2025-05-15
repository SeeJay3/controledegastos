import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles';
import { SpendingStorageDTO } from "../../storage/spending/SpendingStorageDTO";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

type Props = {
  data: SpendingStorageDTO
  onRemove?: () => void
  onEdit?: () => void
}

export function TransactionExpenses({ data, onRemove, onEdit }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.actions}>
      <Text style={styles.description}>{data.name}</Text>
      <TouchableOpacity onPress = {onEdit}>
      <FontAwesome 
        name="pencil" 
        size={24} 
        color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress = {onRemove}>
        <FontAwesome 
          name="trash-o" 
          size={24} 
          color="red" />
      </TouchableOpacity>
      </View>
      <Text style={styles.amount}>{data.amount}</Text>
      <Text style={styles.local}>{data.local}</Text>
      <View style={styles.footer}>
        <Text style={styles.category}>{data.category}</Text>
        <Text style={styles.date}>{data.datePurchase}</Text>
      </View>
      
    </View>
  )
}