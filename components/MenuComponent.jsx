import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Pressable } from 'react-native'
import { FontAwesome } from "@expo/vector-icons";
import { Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { addToCart, decrementQuantity, incrementQuantity, removeFromCart } from '../Redux/cartReducer';


const MenuComponent = ({ food }) => {
    const dispatch = useDispatch()
    const [addItems, setAddItems] = useState(0)
    const [selected, setSelected] = useState(false)
    return (
        <View>
            <Pressable style={styles.pressedContainerz}>
                <View>
                    <Text style={styles.foodName}>{food.name}</Text>
                    <Text>{food.price}</Text>
                    <Text style={styles.pressedIconContainerz}>
                        {[0, 0, 0, 0, 0].map   ((en, i) => (
                            <FontAwesome
                                // key={`${food.id}-${i}`}
                                style={styles.ratingIconz}
                                name={i < Math.floor(food.rating) ? "star" : "star-o"}
                                size={15}
                                color="orange"
                            // color="#FFD700"
                            />
                        ))}
                    </Text>
                    <Text style={styles.descriptionText}>
                        {food.description.length > 30 ? food.description.substr(0, 35) + "..." : food.description}
                    </Text>
                </View>

                <Pressable style={styles.descriptionImageContainer}>
                    <Image style={styles.descriptionImage} source={{ uri: food.image }} />
                    {selected ? (
                        <Pressable style={styles.orderContainer}>
                            <Pressable onPress={() => {
                                if (addItems === 1) {
                                    dispatch(removeFromCart(food))
                                    setSelected(false)
                                    setAddItems(0);
                                } else {
                                    setAddItems((c) => c - 1);
                                    dispatch(decrementQuantity(food))

                                }
                            }}>
                                <Text style={styles.orderContainerText}
                                >
                                    -
                                </Text>
                            </Pressable>

                            <Pressable>
                                <Text
                                    style={styles.orderContainerText}
                                >
                                    {addItems}
                                </Text>
                            </Pressable>

                            <Pressable onPress={() => {
                                setAddItems((c) => c + 1);
                                dispatch(incrementQuantity(food))
                            }}>
                                <Text
                                    style={styles.orderContainerText}
                                >
                                    +
                                </Text>
                            </Pressable>
                        </Pressable>
                    ) : (
                        <Pressable onPress={() => {
                            setSelected(true)
                            if (addItems == 0) {
                                setAddItems((c) => c + 1)
                            }
                            dispatch(addToCart(food))
                        }} style={styles.addToCartContainer}>
                            <Text style={styles.addToCartText}>ADD</Text>
                        </Pressable>
                    )}

                </Pressable>
            </Pressable>
        </View>
    )
}

export default MenuComponent

const styles = StyleSheet.create({
    pressedContainerz: {
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    foodName: {
        fontWeight: '600',
        fontSize: 18
    },
    pressedIconContainerz: {
        marginTop: 5,
        borderRadius: 4,
    },
    ratingIconz: {
        paddingHorizontal: 3
    },
    descriptionText: {
        width: 100,
        marginTop: 8,
        color: 'gray',
        fontSize: 16
    },
    descriptionImageContainer: {
        marginRight: 10
    },
    descriptionImage: {
        width: 120,
        height: 120,
        borderRadius: 8
    },
    addToCartContainer: {
        position: 'absolute',
        top: 85,
        left: 20,
        flexDirection: 'row',
        paddingHorizontal: 25,
        paddingVertical: 10,
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 5,
    },
    orderContainer: {
        position: "absolute",
        top: 90,
        left: 15,
        flexDirection: "row",
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignItems: "center",
        backgroundColor: "orange",
        borderRadius: 5,
    },
    addToCartText: {
        fontSize: 18,
        color: 'orange',
        // color: '#018749'
        fontWeight: '900'
    },
    orderContainerText: {
        fontSize: 25,
        color: "white",
        paddingHorizontal: 6,
        fontWeight: '900'
    }
})