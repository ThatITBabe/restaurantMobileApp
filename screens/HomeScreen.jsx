import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import Carousel from '../components/Carousel';
import FoodTypes from '../components/FoodTypes';
import QuickFood from '../components/QuickFood';
import Buttons from '../components/Buttons';
import MenuItems from '../components/MenuItems';
import hotels from '../data/hotels';


const HomeScreen = () => {

    const data = hotels

  return (
    <ScrollView style={styles.container}>
        <View style={styles.inputContainer}>
            <TextInput placeholder='Search for restaurants and more...'/>
            <AntDesign name="search1" size={24} color="black" />
        </View>

        <Carousel/>

        <FoodTypes/>

        <QuickFood/>

        <Buttons/>

        <MenuItems/>
        
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    "container": {
        marginTop:  50
    },
    "inputContainer": {
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#c0c0c0',
        padding: 10,
        margin: 10,
        borderRadius: 7,
    }
})