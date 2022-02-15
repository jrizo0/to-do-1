import tw from 'tailwind-react-native-classnames';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import Task from './components/Task'
import { KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={tw`flex-1 bg-gray-200`}>

      {/* Todays tasks */}
      <View style={tw`pt-20 px-6`}>
        <Text style={tw`text-2xl font-bold pb-6`}>Tareas para hacer hoy</Text>

        {/* Tasks */}
        <View>
          <Task text={"Tarea 1"} />
          <Task text={"Tarea 3"} />
        </View>

      </View>

      {/* Write a task */}
      <KeyboardAvoidingView
        behavior = {Platform.OS === "ios" ? "padding" : "height"}
        style={tw`absolute bottom-10 w-full flex-row justify-around items-center`}
      >
        <TextInput style={tw`py-2 px-3 bg-white rounded-full border-gray-400 border w-52`} placeholder={"Escribe una tarea"}/>
          <TouchableOpacity>
            <View style={tw`w-10 h-10 bg-white rounded-full justify-center items-center border-gray-400 border`}>
              <Text>+</Text>
            </View>
        </TouchableOpacity>

      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
 
// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     // backgroundColor: '#E8EAED',
//     tw`flex-1 bg-gray-200`,
//   },
//   taskWrapper: {
//     paddingTop: 80, 
//     paddingHorizontal: 20,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: 'bold'
//   },
//   items: {
//   },

// });
