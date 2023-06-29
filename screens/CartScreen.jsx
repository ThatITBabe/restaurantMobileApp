import { StyleSheet, Text, ScrollView, View, Pressable } from 'react-native'
import React from 'react'
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation, useRoute } from '@react-navigation/native';
import { clearCart, decrementQuantity, incrementQuantity } from '../Redux/cartReducer';
import { useDispatch, useSelector } from 'react-redux';


const CartScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const cart = useSelector((state) => state.cart.cart);
    const total = cart
        .map((item) => item.price * item.quantity)
        .reduce((curr, prev) => curr + prev, 0);
    const dispatch = useDispatch();
    const instructions = [
        {
            id: "0",
            name: "Avoid Ringing",
            iconName: "bell",
        },
        {
            id: "1",
            name: "Leave at the door",
            iconName: "door-open",
        },
        {
            id: "2",
            name: "directions to reach",
            iconName: "directions",
        },
        {
            id: "3",
            name: "Avoid Calling",
            iconName: "phone-alt",
        },
    ];
    return (
        <>
            <ScrollView style={styles.cartPage}>
                {total > 0 ? (
                    <>
                        <View style={styles.cartPageHeader}>
                            <Ionicons onPress={() => navigation.goBack()} name="arrow-back" size={24} color="black" />
                            {/* <Ionicons onPress={() => navigation.goBack()}name="arrow-back" size={24} color="white"/> */}
                            <Text style={styles.cartPageHeaderText}>{route.params.name}</Text>
                        </View>

                        <View style={styles.cartPageHeader2}>
                            <Text style={styles.cartPageHeader2Text}>Ordering for someone else?{" "}</Text>
                            <Text style={styles.cartPageHeader2Text2}>Add Details</Text>
                        </View>

                        <View style={styles.cartPageHeader3}>
                            {cart.map((item, i) => (
                                <View style={styles.cartPageHeader3Head} key={i}>
                                    <Text style={styles.cartPageHeader3TextR}>{item.name}</Text>

                                    <Pressable style={styles.cartPageHeader3Btn}>
                                        <Pressable onPress={() => {
                                            dispatch(decrementQuantity(item));
                                        }}>
                                            <Text style={styles.cartPageHeader3Textzz}>
                                                -
                                            </Text>
                                        </Pressable>

                                        <Pressable>
                                            <Text style={styles.cartPageHeader3Textzz}>
                                                {item.quantity}
                                            </Text>
                                        </Pressable>

                                        <Pressable onPress={() => {
                                            dispatch(incrementQuantity(item));
                                        }}>
                                            <Text style={styles.cartPageHeader3Textzz}>
                                                +
                                            </Text>
                                        </Pressable>
                                    </Pressable>

                                    <Text style={styles.cartPageHeader3Textzz2}>
                                        ₦{item.price * item.quantity}
                                    </Text>
                                </View>
                            ))}
                        </View>

                        <View style={{ padding: 10 }}>
                            <Text style={styles.deliveryText}>
                                Delivery Instructions
                            </Text>
                            <ScrollView horizontal style={{ marginTop: 10 }} showsHorizontalScrollIndicator={false}>
                                {instructions.map((item, i) => (
                                    <Pressable style={styles.deliveryInstructionContainer}>
                                        <View>
                                            <FontAwesome5 name={item.iconName} size={22} color={"gray"} />
                                            <Text style={styles.deliveryInstructionText}>
                                                {item.name}
                                            </Text>
                                        </View>
                                    </Pressable>
                                ))}
                            </ScrollView>
                        </View>

                        <View style={styles.billingDetailsSegment}>
                            <Text style={styles.billingDetailsSegmentText}>
                                Billing Details
                            </Text>
                            <View style={styles.billingDetailsContainer}>
                                <View style={styles.billingDetailsSections}>
                                    <Text style={styles.billingDetailsHeader}>
                                        Item Total
                                    </Text>
                                    <Text style={styles.billingDetailsTextz}>
                                        ₦{total}
                                    </Text>
                                </View>

                                <View style={styles.billingDetailsSectionsz}>
                                    <Text style={styles.billingDetailsHeader}>
                                        Delivery Fee || 1.2KM
                                    </Text>
                                    <Text style={styles.billingDetailsText}>
                                        FREE
                                    </Text>
                                </View>

                                <View style={styles.billingDetailsSections}>
                                    <Text style={styles.billingDetailsHeader}>
                                        Free Delivery on Your order
                                    </Text>
                                </View>

                                <View style={styles.billingDetailsLine} />

                                <View style={styles.billingDetailsSectionss}>
                                    <Text style={styles.billingDetailsHeader}>
                                        Delivery Tip
                                    </Text>
                                    <Text style={styles.billingDetailsText}>
                                        ADD TIP
                                    </Text>
                                </View>

                                <View style={styles.billingDetailsSections}>
                                    <Text style={styles.billingDetailsHeader}>
                                        Taxes and Charges
                                    </Text>

                                    <Text style={styles.billingDetailsText}>
                                        ₦95
                                    </Text>
                                </View>

                                <View style={styles.billingDetailsLine} />

                                <View style={styles.totalAmtContainer}>
                                    <Text style={styles.totalAmtHeader}>
                                        To Pay
                                    </Text>
                                    <Text style={styles.totalAmt}>
                                        ₦{total + 95}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </>
                ) : (
                    <View style={styles.emptyCartContainer}>
                        <Text style={styles.emptyCartText}>
                            Your Cart is Empty!
                        </Text>
                    </View>
                )}
            </ScrollView>

            {total === 0 ? null : (
                <Pressable
                    style={styles.cartFooterContainer}>
                    <View>
                        <Text style={styles.cartFooterText}>₦{total + 95}</Text>
                        <Text style={styles.cartFooterText2}>View Detailed Bill</Text>
                    </View>

                    <Pressable onPress={() => {
                        navigation.navigate("Loading");
                        dispatch(clearCart());
                    }} style={styles.paymentBtn}>
                        <Text style={styles.paymentBtnText}>Proceed To pay</Text>
                    </Pressable>
                </Pressable>
            )}
        </>
    )
}

export default CartScreen

const styles = StyleSheet.create({
    cartPage: {
        marginTop: 50,
        // backgroundColor: 'orange',
        // color: 'white'
    },
    cartPageHeader: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    cartPageHeaderText: {
        fontSize: 17,
        fontWeight: "800",
        marginLeft: 3
    },
    cartPageHeader2: {
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        borderRadius: 8,
        marginHorizontal: 10,
        flexDirection: 'row',
    },
    cartPageHeader2Text: {
        fontSize: 16,
        fontWeight: '500'
    },
    cartPageHeader2Text2: {
        fontWeight: '700',
        fontSize: 16,
        color: 'orange'
    },
    cartPageHeader3: {
        marginTop: 16,
        marginHorizontal: 15,
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 14,
        marginLeft: 10,
        marginRight: 10,
    },
    cartPageHeader3Head: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10
    },
    cartPageHeader3TextR: {
        width: 100,
        fontSize: 18,
        fontWeight: '800'
    },
    cartPageHeader3Btn: {
        flexDirection: "row",
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignItems: "center",
        borderColor: "gray",
        borderWidth: 0.5,
        borderRadius: 10,
    },
    cartPageHeader3Textzz: {
        fontSize: 25,
        color: "orange",
        paddingHorizontal: 6,
        fontWeight: "900",
    },
    cartPageHeader3Textzz2: {
        fontSize: 18,
        fontWeight: "bold"
    },
    deliveryText: {
        fontSize: 16,
        fontWeight: "600"
    },
    deliveryInstructionContainer: {
        margin: 10,
        borderRadius: 10,
        padding: 10,
        backgroundColor: "white",
    },
    deliveryInstructionText: {
        width: 75,
        fontSize: 13,
        color: "gray",
        paddingTop: 10,
    },
    emptyCartContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    emptyCartText: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: "600"
    },
    cartFooterContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "white",
        marginBottom: 20,
        padding: 20,
    },
    cartFooterText: {
        fontSize: 18,
        fontWeight: "700"
    },
    cartFooterText2: {
        color: "orange",
        fontSize: 17
    },
    paymentBtn: {
        backgroundColor: "orange",
        padding: 14,
        width: 200,
        borderRadius: 6,
    },
    paymentBtnText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    },
    totalAmt: {
        fontSize: 18,
        fontWeight: "bold"
    },
    totalAmtHeader: {
        fontSize: 18,
        fontWeight: "bold"
    },
    totalAmtContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 8,
    },
    billingDetailsLine: {
        borderColor: "gray",
        height: 1,
        borderWidth: 0.5,
        marginTop: 10,
    },
    billingDetailsHeader: {
        fontSize: 18,
        fontWeight: "400",
        color: "gray"
    },
    billingDetailsText: {
        fontSize: 18,
        fontWeight: "400",
        color: "orange",
    },
    billingDetailsTextz: {
        fontSize: 18,
        fontWeight: '600'
    },
    billingDetailsSections:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    billingDetailsSectionsz:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 8
    },
    billingDetailsSectionss:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 10
    },
    billingDetailsContainer: {
        backgroundColor: "white",
        borderRadius: 7,
        padding: 10,
        marginTop: 15,
    },
    billingDetailsSegment: {
        marginHorizontal: 10
    },
    billingDetailsSegmentText:{
        fontSize: 16,
        fontWeight: "bold"
    }
})