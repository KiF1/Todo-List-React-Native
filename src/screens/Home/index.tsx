import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, FlatList, Alert, Image } from 'react-native';
import { Task } from '../../components/Task';
import uuid from 'react-native-uuid';
import { styles } from './styles';

export interface Itask{
  id: string;
  content: string;
  isCompleted: boolean
}

export function Home() {
  const [tasks, setTasks] = useState<Itask[]>([]);
  const [content, setContent] = useState<string>('');
  const iscompleted = tasks.filter((tasks)=> tasks.isCompleted).length;
  const taskQuantity = tasks.length;

  function handleAddTask(content: string) {
    setTasks([...tasks, {
      id: String(uuid.v4()),
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
      <View style={styles.header}>
        <Image source={require("../../../assets/Logo.png")} resizeMode="contain" />
        <View style={styles.form}>
         <TextInput placeholder='Adicione uma tarefa' placeholderTextColor='#808080' style={styles.input} value={content} onChangeText={setContent} />
         <TouchableOpacity style={styles.button} onPress={() => handleAddTask(content)}>
            <Image source={require("../../../assets/add.png")} resizeMode="cover" />
         </TouchableOpacity>  
       </View>
      </View>
      <View style={styles.content}>
        <View style={styles.informations}>
          <View style={styles.box}>
            <Text style={styles.blue}>Criadas</Text>
            <Text style={styles.number}>{taskQuantity}</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.purple}>Concluidas</Text>
            <Text style={styles.number}>{iscompleted}</Text>
          </View>
        </View>
        {taskQuantity >= 1 ? (
          <FlatList data={tasks} keyExtractor={item => item.id} renderItem={({ item }) => (
            <Task key={item.id} onComplete={() => isCompleteTask(item.id)} task={item} onRemove={() => handleRemoveParticipant(item.id)} />
          )} showsVerticalScrollIndicator={false} />
        ) : (
          <View style={styles.notask}>
            <Image style={styles.imagenotask} resizeMode="cover" source={require('../../../assets/Clipboard.png')} />
            <Text style={styles.text}>Você ainda não tem tarefas cadastradas</Text>
            <Text style={styles.text}>Crie tarefas e organize seus itens a fazer</Text>
          </View>
        ) }
      </View>
    </View>
  )
}