import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'

const FoodTypes = () => {

  const types = [
    {
        id:"0",
        image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/rwnkrdtnusqdkyjssahq",
        name:"Biriyani",
    },
    {
        id:"1",
        image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/qwrkgxefwzjergtzowsc",
        name:"Dessert"
    },
    {
        id:"2",
        image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/uckbx3rr87jhakb81mbs",
        name:"Burger"
    },
    {
        id:"3",
        image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/z9xmu9pb65lcbt3wepud",
        name:"Salad",

    },
    {
        id:"4",
        image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/m7osxfhdon2opecztidb",
        name:"Sandwiches"
    }
]

  return (
    <View>
      <Text style={styles.foodMenu}>Food Menu</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator = 'false'>
        {types.map((type, index)=> (
            <View style={styles.imageContainer} key={index}>
                <Image style={styles.image} source={{uri: type.image}}/>
                <Text style={styles.foodName}>{type.name}</Text>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default FoodTypes

const styles = StyleSheet.create({
  image:{
    width:60,
    height: 60,
    borderRadius: 30
},
imageContainer: {
    margin: 10,

},
foodName: {
    marginTop: 6,
    // textAlign: 'center',

},
foodMenu: {
    fontSize: 16,
    // fontSize: 25,
    fontWeight: "500",
    marginTop:10,
    // textAlign: 'center',
    marginLeft: 10
}
})