import { ImageBackground, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import quickfood from '../data/quickfood'
import { MaterialIcons } from '@expo/vector-icons';

const QuickFood = () => {

  const data = quickfood;

  return (
    <View style = {styles.quickFoodContainer}>
      <Text style = {styles.quickFoodText}>Get it quickly!</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator = 'false'>
        {data.map((d, i) => (
            <Pressable style = {styles.press} key={i}>
                <ImageBackground imageStyle= {{borderRadius: 6}} style = {{height: 170, aspectRatio: 5/6}} source={{uri: d.image}}>
                    <Text style = {styles.imageText}>{d.offer}</Text>
                </ImageBackground>
                <Text style = {styles.quickFoodName}>{d.name}</Text>
                <View style = {styles.iconsContainer}>
                    <MaterialIcons name="stars" size={24} color="green" /> 
                    <Text style = {styles.quickFoodRating}>{d.rating}</Text>
                    <Text style = {{marginLeft: 3}}>.</Text>
                    <Text style = {styles.quickFoodRating}>{d.time} mins</Text>
                </View>
        </Pressable>
        ))}
      </ScrollView>
    </View>
  )
}

export default QuickFood

const styles = StyleSheet.create({
  quickFoodContainer: {
    margin: 10
},
quickFoodText: {
    // fontSize: 25,
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 10
},
press: {
    margin: 10
},
imageText: {
    position: "absolute",
    bottom: 10,
    left: 10,
    fontSize: 27,
    fontWeight: "900",
    color: 'white'
},
quickFoodName:{
    marginTop: 10,
    fontSize: 16,
    fontWeight: "500",
    // color: "red"
},
iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 3
},
quickFoodRating: {
    marginLeft: 3,
    fontSize: 16,
    fontWeight: '400',
    // color: 'red'
}
})