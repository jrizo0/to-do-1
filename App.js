import tw from 'tailwind-react-native-classnames'
import React, { useState } from 'react'
import {
  Text,
  View,
  SafeAreaView,
  Platform,
  Keyboard,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import Task from './components/Task'

export default function App() {
  const [task, setTask] = useState()
  const [taskItems, setTaskItems] = useState([])

  const handleAddTask = () => {
    if (task) {
      Keyboard.dismiss()
      setTaskItems([...taskItems, task])
      setTask(null)
    }
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems]
    itemsCopy.splice(index, 1)
    setTaskItems(itemsCopy)
  }

  return (
    <SafeAreaView style={tw`flex-1 bg-gray-200`}>
      {/* Todays tasks */}
      <View style={tw`pt-20 px-6`}>
        <Text style={tw`text-2xl font-bold pb-6`}>Tareas para hacer hoy</Text>

        <View>
          {/* Tasks */}
          {taskItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task text={item} />
              </TouchableOpacity>
            )
          })}
        </View>
      </View>

      {/* Write a task */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={tw`absolute bottom-10 w-full flex-row justify-around items-center`}
      >
        <TextInput
          style={tw`py-2 px-3 bg-white rounded-full border-gray-400 border w-52`}
          placeholder={'Escribe una tarea'}
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View
            style={tw`w-12 h-12 bg-white rounded-full justify-center items-center border-gray-400 border`}
          >
            <Text>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}
