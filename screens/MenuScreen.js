import { ScrollView, StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons, AntDesign, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import FoodItem from '../components/FoodItem';
import Modal from "react-native-modal";
import { Image } from 'react-native';
import { useSelector } from 'react-redux';


const MenuScreen = () => {
    const cart = useSelector((state) => state.cart.cart)
    console.log(cart)
    const route = useRoute();
    const navigation = useNavigation();
    // console.log(route.params)
    const [menu, setMenu] = useState([])
    const [modalVisible, setModalVisible] = useState(false)

    useEffect(() => {
        const fetchMenu = () => {
            setMenu(route.params.menu)
        };

        fetchMenu()
    }, []);

    const toggleModal = () => {
        setModalVisible(!modalVisible)
    }

    return (
        <>
            <ScrollView style={styles.menuScreen}>
                <View style={styles.menuScreenContainer}>
                    <View style={styles.menuScreenHeader}>
                        <Ionicons onPress={() => navigation.goBack()} name="arrow-back-outline" size={24} color="black" />
                        <View style={styles.iconContainerz}>
                            <AntDesign name="search1" size={22} color="black" />
                            <Text style={styles.iconTextz}>Search</Text>
                        </View>
                    </View>
                    <View style={styles.whiteContainer}>
                        <View style={styles.whiteContainerSet}>
                            <Text style={styles.whiteContainerHeader}>{route.params.name}</Text>
                            <View style={styles.whiteContainerIcons}>
                                <AntDesign style={styles.whiteContainerShareIcon} name="sharealt" size={24} color="black" />
                                <AntDesign name="hearto" size={24} color="black" />
                            </View>
                        </View>

                        <View style={styles.iconsContainer}>
                            <MaterialIcons name="stars" size={24} color="green" />
                            <Text style={styles.quickFoodRating}>{route.params.rating}</Text>
                            <Text style={{ marginLeft: 3 }}>.</Text>
                            <Text style={styles.quickFoodRating}>{route.params.time} mins</Text>
                        </View>

                        <Text style={styles.cuisineText}>
                            {route.params.cuisines}
                        </Text>

                        <View style={styles.outletContainer}>
                            <Text>Outlet</Text>
                            <Text style={styles.outletContainerAddress}>{route.params.adress}</Text>
                        </View>

                        <View style={styles.outletContainer}>
                            <Text>22 mins</Text>
                            <Text style={styles.outletContainerText}>Home</Text>
                        </View>

                        <Text style={styles.line} />

                        <View style={styles.whiteContainerFooter}>
                            <FontAwesome5 name="bicycle" size={24} color="orange" />
                            <Text style={styles.distance}>0-3Km/s  |</Text>
                            <Text style={styles.distance}>35 Delivery Fee will Apply</Text>
                        </View>
                    </View>
                </View>


                <Text style={styles.menuHeader}>MENU</Text>
                <Text style={styles.line}></Text>

                {route.params.menu.map((item, i) => (
                    <FoodItem item={item} key={i} />
                ))}

            </ScrollView>

            <Pressable onPress={toggleModal} style={styles.menuShortcutButton}>
                <MaterialIcons style={styles.menuShortcutIcon} name="menu-book" size={24} color="white" />
                <Text style={styles.menuShortcutText}>MENU</Text>
            </Pressable>

            <Modal isVisible={modalVisible} onBackdropPress={toggleModal}>
                <View style={styles.menuContentContainer}>
                    {menu.map((item, i) => (
                        <View style={styles.modalContainerText} key={i}>
                            <Text style={styles.modalText}>{item.name}</Text>
                            <Text style={styles.modalText}>{item.items.length}</Text>
                        </View>
                    ))}

                    <View style={styles.modalContainerImage}>
                        <Image style={styles.modalImage} source = {{uri: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza"}}/>
                    </View>
                </View>
            </Modal>
        </>
    )
}

export default MenuScreen

const styles = StyleSheet.create({
    menuScreen: {
        marginTop: 50
    },
    menuScreenContainer: {
        height: 300,
        backgroundColor: "#b0c4de",
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40
    },
    menuScreenHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10
    },
    iconContainerz: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconTextz: {
        fontSize: 16,
        fontWeight: "600",
        marginLeft: 4
    },
    whiteContainer: {
        backgroundColor: 'white',
        height: 210,
        marginHorizontal: 20,
        marginVertical: 5,
        padding: 10,
        borderRadius: 15
    },
    whiteContainerSet: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    whiteContainerHeader: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    whiteContainerIcons: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    whiteContainerShareIcon: {
        marginHorizontal: 15
    },
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 7
    },
    quickFoodRating: {
        marginLeft: 3,
        fontSize: 17,
        fontWeight: '400',
        // color: 'red'
    },
    cuisineText: {
        marginTop: 8,
        color: 'gray',
        fontSize: 17
    },
    outletContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    outletContainerAddress: {
        marginLeft: 15,
        fontSize: 15,
        fontWeight: 'bold'
    },
    outletContainerText: {
        marginLeft: 15,
        fontSize: 14,
        fontWeight: 'bold'
    },
    line: {
        borderColor: 'gray',
        borderWidth: 0.6,
        height: 1,
        marginTop: 12
    },
    whiteContainerFooter: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    distance: {
        marginLeft: 7,
        color: 'gray',
        fontSize: 16
    },
    menuHeader: {
        textAlign: 'center',
        fontSize: 17,
        fontWeight: '500',
        marginTop: 10
    },
    menuShortcutButton: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        borderRadius: 40,
        backgroundColor: 'black',
        marginLeft: 'auto',
        position: 'absolute',
        bottom: 25,
        right: 25,
        alignContent: 'center'
    },
    menuShortcutText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: '500'
    },
    menuShortcutIcon: {
        textAlign: 'center',
    },
    menuContentContainer: {
        height: 150,
        width: 250,
        backgroundColor: 'black',
        position: 'absolute',
        borderRadius: 7,
        bottom: 35,
        right: 10
    },
    modalText: {
        color: '#d0d0d0',
        fontWeight: '400',
        fontSize: 19
    },
    modalContainerText: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    modalContainerImage: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalImage: {
        width: 120,
        height: 70,
        resizeMode: 'contain'
    }
})