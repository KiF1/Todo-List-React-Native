import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Itask } from '../../screens/Home';
import { styles } from './styles';

interface ParticipantProps {
  task: Itask;
  onComplete: () => void;
  onRemove: () => void;
}

export function Task({ task, onRemove, onComplete }: ParticipantProps){
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onComplete}>
        {task.isCompleted ? 
          <Image source={require('../../../assets/checked.png')} resizeMode="contain" /> : 
          <Image source={require('../../../assets/uncheck.png')} resizeMode="contain" /> 
        }
      </TouchableOpacity>  
      <Text style={task.isCompleted ? styles.completed : styles.content}>{task.content}</Text>
      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Image source={require('../../../assets/lixo.png')} resizeMode="contain" />
      </TouchableOpacity>  
    </View>
  )
}