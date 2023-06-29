import { StyleSheet, Text, View, SafeAreaView, Pressable, TouchableOpacity } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import MapView, { Marker, Polyline } from "react-native-maps";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import moment from "moment/moment";
const OrderScreen = () => {
    const [tip, setTip] = useState(0);
    const time = moment().format("LT");
    const mapView = useRef(null);
    const [coordinates] = useState([
        {
            latitude: 12.9716,
            longitude: 77.5946,
        },
        {
            latitude: 13.0451,
            longitude: 77.6269,
        },
    ]);
    useEffect(() => {
        mapView.current.fitToCoordinates(coordinates, {
            edgePadding: {
                top: 50,
                bottom: 50,
                left: 50,
                right: 50
            }
        });
    }, [])
    return (
        <SafeAreaView>
            <View style={styles.orderScreeHeader}>
                <View style={{ marginLeft: 10 }}>
                    <Text style={styles.orderScreenText1}>
                        Delivery in 20 mins
                    </Text>
                    <Text
                        style={styles.orderScreenText2}
                    >
                        Order placed at {time}
                    </Text>
                </View>
                <Text style={styles.orderScreenText3}>
                    HELP
                </Text>
            </View>
            <MapView
                ref={mapView}
                style={{ width: "100%", height: 400 }}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker coordinate={coordinates[0]} />
                <Marker coordinate={coordinates[1]} />

                <Polyline coordinates={coordinates} strokeColor="black" lineDashPattern={[4]} strokeWidth={1} />
            </MapView>
            <View style={styles.orderScreenFooter}>
                <View style={{ padding: 10 }}>
                    <View>
                        <Text style={styles.orderScreenFooterHeading}>
                            Meghana Foods has accepted your order
                        </Text>
                        <View style={styles.orderScreenFooterBodyContainer}>
                            <FontAwesome5 name="hand-holding-heart" size={28} color="#fc8019"/>
                            <View style={{ marginLeft: 10 }}>
                                <Text style={styles.orderScreenFooterBodyContainerHead}>
                                    Tip your hunger Saviour
                                </Text>
                                <Text
                                    style={styles.orderScreenFooterBodyContainerBody}>
                                    Thank your delivery partner for helping you stay safe
                                    indoors.Support them through these tough times with a tip
                                </Text>
                                <Pressable
                                    style={styles.tipContainer}>
                                    <TouchableOpacity
                                        activeOpacity={0.6}
                                        onPress={() => setTip(30)}
                                        style={styles.tipBox1}>
                                        <Text style={styles.tipBox1Text}>
                                            ₦30
                                        </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        activeOpacity={0.6}
                                        onPress={() => setTip(50)}
                                        style={styles.tipBox2}>
                                        <Text style={styles.tipBox2Text}>
                                            ₦50
                                        </Text>
                                        <Text style={styles.tipBox2Badge}>
                                            Most Tipped
                                        </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity activeOpacity={0.6} onPress={() => setTip(70)} style={styles.tipBox3}>
                                        <Text style={styles.tipBox3Text}>
                                            ₦70
                                        </Text>
                                    </TouchableOpacity>
                                </Pressable>
                            </View>
                        </View>
                        {tip ? (
                            <View>
                                <Text style={styles.tipText}>
                                    please pay {"₦"}
                                    {tip} to your delivery agent at the time of delivery
                                </Text>
                                <TouchableOpacity onPress={() => setTip(0)}
                                    activeOpacity={0.7}
                                    style={styles.cancelContainer}>
                                    <Text style={styles.cancelContainerText}>
                                        (Cancel)
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        ) : null}
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default OrderScreen;

const styles = StyleSheet.create({
    orderScreeHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: 80,
        backgroundColor: "orange",
        padding: 10,
    },
    orderScreenText1: { 
        color: "white",
        fontSize: 17,
        fontWeight: "600"
    },
    orderScreenText2: {
        color: "white",
        fontSize: 17,
        fontWeight: "600",
        marginTop: 4,
    },
    orderScreenText3: { 
        fontSize: 17, 
        fontWeight: "bold", 
        color: "white" 
    },
    orderScreenFooterHeading:{ 
        fontWeight: "500", 
        fontSize: 17, 
        textAlign: "center", 
    },
    orderScreenFooterBodyContainer:{
        flexDirection: "row", 
        marginTop: 20, 
    },
    orderScreenFooterBodyContainerHead: {
        fontSize: 18,
        fontWeight: "500",
        paddingHorizontal: 2,
        marginBottom: 6,
    },
    orderScreenFooterBodyContainerBody: {
        fontSize: 16,
        fontWeight: "600",
        color: "orange",
        marginRight: 10,
        paddingHorizontal: 2,
    },
    tipContainer: {
        paddingTop: 20,
        flexDirection: "row",
        alignItems: "center",
    },
    tipBox1:{
        backgroundColor: "#F5F5F5",
        marginHorizontal: 10,
        paddingHorizontal: 10,
        borderRadius: 7,
    },
    tipBox1Text: {
        padding: 10,
        color: "#002D62",
        fontWeight: "bold",
    },
    tipBox2: {
        alignItems: "center",
        backgroundColor: "#F5F5F5",
        marginHorizontal: 10,
        borderRadius: 7,
        paddingHorizontal: 10,
    },
    tipBox2Text: {
        padding: 4,
        color: "#002D62",
        fontWeight: "bold",
    },
    tipBox2Badge: {
        backgroundColor: "orange",
        paddingHorizontal: 10,
        fontSize: 14,
        fontWeight: "bold",
        color: "white",
    },
    tipBox3: {
        backgroundColor: "#F5F5F5",
        marginHorizontal: 10,
        paddingHorizontal: 10,
        borderRadius: 7,
    },
    tipBox3Text: {
        padding: 10,
        color: "#002D62",
        fontWeight: "bold",
    },
    tipText: {
        color: "#fc8019",
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
        fontSize: 16,
        fontWeight: "600",
    },
    cancelContainer: {
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
        position: "absolute",
        top: 40,
        paddingBottom: 40,
    },
    cancelContainerText: { 
        color: "red", 
        fontSize: 14, 
        fontWeight: "700" 
    },

});
