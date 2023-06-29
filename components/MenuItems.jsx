import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import hotels from "../data/hotels";
import { useNavigation } from '@react-navigation/native';


const MenuItems = () => {

  const data = hotels;

  // const [isPress, setIsPress] = useState(false)

  const navigation = useNavigation();

  return (
    <View style={styles.menuItemContainer}>
      {data.map((item, i) => (
        <Pressable onPress={() => navigation.navigate("Menu", {
          id: item.id,
          name: item.name,
          image: item.image,
          rating: item.rating,
          time: item.time,
          adress: item.adress,
          cost_for_two: item.cost_for_two,
          cuisines: item.cuisines,
          menu: item.menu,
        })} style={styles.menuItemPress} key={i} item={item}>
          <View>
            <ImageBackground imageStyle={{ borderRadius: 6 }} style={{ height: 170, aspectRatio: 5 / 6 }} source={{ uri: item.image }}>
              <AntDesign style={styles.menuItemHeart} name="hearto" size={24} color="white" />
            </ImageBackground>
          </View>

          <View style={styles.menuItemDetailsContainer}>
            <Text style={styles.menuItemName}>{item.name}</Text>
            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 3 }}>
              <MaterialIcons name="stars" size={24} color="green" />
              <Text style={styles.menuItemRating}>{item.rating}</Text>
              <Text style={{ marginLeft: 3 }}>.</Text>
              <Text style={styles.menuItemRating}>{item.time} mins</Text>
            </View>

            <Text style={styles.menuItemAddress}>{item.adress}</Text>

            <View style={styles.menuItemPriceContainer}>
              <View style={styles.menuItemPriceSymbolContainer}>
                <Text style={styles.menuItemPriceSymbol}>₦</Text>
              </View>

              <Text style={styles.menuItemCost}>{item.cost_for_two} for two</Text>
            </View>

            <View style={styles.deliveryContainer}>
              <MaterialCommunityIcons name="bike-fast" size={24} color="black" />
              <Text style={styles.deliveryText}>FREE DELIVERY</Text>
            </View>
          </View>
        </Pressable >
      ))}
    </View >
  )
}

export default MenuItems

const styles = StyleSheet.create({
  menuItemContainer: {
    margin: 10,
  },
  menuItemPress: {
    flexDirection: 'row',
    marginBottom: 10
  },
  menuItemHeart: {
    position: 'absolute',
    top: 10,
    right: 10
  },
  menuItemDetailsContainer: {
    marginLeft: 20,
    // textAlign: 'center',
    // justifyContent: 'center'
  },
  menuItemName: {
    fontSize: 16,
    fontWeight: "bold"
  },
  menuItemRatingContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 3
  },
  menuItemRating: {
    marginLeft: 3,
    fontSize: 15,
    fontWeight: '400'
  },
  menuItemAddress: {
    fontSize: 16,
    color: 'gray',
    marginTop: 6
  },
  menuItemPriceContainer: {
    flexDirection: 'row',
    // alignItems: 'center',
    marginTop: 5
  },
  menuItemPriceSymbolContainer: {
    backgroundColor: '#ffb6c1',
    width: 22,
    height: 22,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center'
  },
  menuItemPriceSymbol: {
    textAlign: "center",
    fontSize: 13,
    fontWeight: "bold",
    color: "white",
  },
  menuItemCost: {
    marginTop: 2,
    marginLeft: 4,
    fontSize: 16,
    fontWeight: "500",
    textAlign: 'center'
  },
  deliveryContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  deliveryText: {
    marginLeft: 6,
    fontSize: 16
  }
})