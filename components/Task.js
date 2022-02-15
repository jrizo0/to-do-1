import tw from 'tailwind-react-native-classnames';
import React from 'react';
import { View, Text, StyleSheet} from 'react-native'
import { TouchableOpacity } from 'react-native';

const Task = (props) =>{
    return (
        <View style={tw`bg-white p-3 rounded-lg mb-6 items-center flex-row justify-between`}>
            <View style={tw`flex-row items-center flex-wrap`}>
                <TouchableOpacity style={tw`w-6 h-6 bg-blue-300 rounded-lg mr-2`}/>
                <Text style={tw`max-w-7xl`}> {props.text} </Text>
            </View>
            <View style={tw`w-2 h-2 border-blue-400 rounded-full border-2`}></View>
        </View>
    )
}

export default Task;