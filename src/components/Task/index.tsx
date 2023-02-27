import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface ParticipantProps {
  content: string;
  onComplete: () => void;
  onRemove: () => void;
}

export function Task({ content, onRemove, onComplete }: ParticipantProps){
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{content}</Text>
      <TouchableOpacity style={styles.button} onPress={onRemove}>
          <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>  
    </View>
  )
}