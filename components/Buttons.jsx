import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const Buttons = () => {


  return (
    <View style = {styles.buttonContainer}>
        <Pressable style = {styles.pressOn}>
            <Text style = {styles.pressOneText}>Filter</Text>
            <Ionicons name="filter" size={16} color="black" />
        </Pressable>

        <Pressable style = {styles.pressOn}>
            <Text>Sort By Rating</Text>
        </Pressable>

        <Pressable style = {styles.pressOn}>
            <Text>Sort By Price</Text>
        </Pressable>
    </View>
  )
}

export default Buttons

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
},
pressOn: {
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#d0d0d0',
    padding: 10,
    borderRadius: 20,
    width: 120,
    justifyContent: 'center'
},
pressOneText: {
    marginRight: 20
}
})