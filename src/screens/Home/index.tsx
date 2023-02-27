import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, FlatList, Alert } from 'react-native';
import { Task } from '../../components/Task';
import { styles } from './styles';

export interface Itask{
  id: string;
  content: string;
  isCompleted: boolean
}

export function Home() {
  const [tasks, setTasks] = useState<Itask[]>([]);
  const [content, setContent] = useState<string>('');

  function handleAddTask(content: string) {
    setTasks([...tasks, {
      id: crypto.randomUUID(),
      content: content,
      isCompleted: false
    }]);
    setContent('');
  }

  function handleRemoveParticipant(taskId: string) {
    Alert.alert("Remover", 'Deseja remover a task selecionada?', [
      { text: 'Sim', onPress: () => setTasks(tasks.filter(task => task.id !== taskId)) },
      { text: 'Não' }
    ])
  }

  function isCompleteTask(taskId: string){
    const newTasks = tasks.map((task) => {
      if(task.id == taskId){
        return{
        ...task,
        isCompleted: !task.isCompleted,
      }
    }
      return task;
    });
    setTasks(newTasks);
  }


  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de novembro de 2022</Text>
      <View style={styles.form}>
        <TextInput placeholder='Nome do Participante' placeholderTextColor='#6B6B6B' value={content} onChangeText={setContent} />
        <TouchableOpacity style={styles.button} onPress={() => handleAddTask(content)}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>  
      </View>
      <FlatList data={tasks} keyExtractor={item => item} renderItem={({ item }) => (
        <Task key={item.id} onComplete={() => isCompleteTask(item.id)} content={item.content} onRemove={() => handleRemoveParticipant(item.id)} />
      )}
      showsVerticalScrollIndicator={false} ListEmptyComponent={() => (
        <Text style={styles.listEmptyText}>A lista está vazia</Text>
      )}
       />
    </View>
  );
}