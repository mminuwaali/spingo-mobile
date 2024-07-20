import React from "react";
import { router } from "expo-router";
import { colors } from "../constants/colors";
import { width } from "../utilities/dimension";
import { TouchableOpacity, StyleSheet, Image, View, Text } from "react-native";

export default function Page() {
    return <View style={styles.container}>
        <View style={styles.upper}>
            <Image alt="image" style={styles.image} source={require("../../assets/images/1.jpg")} />

            <View style={styles.lineContainer}>
                <View style={styles.line} />
            </View>
        </View>

        <View style={styles.lower}>
            <View>
                <View style={{ gap: 10, flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ fontSize: 110, color: colors.lightgray, fontWeight: "700" }}>01</Text>

                    <Text style={{ flex: 1, fontSize: 18, fontWeight: "700", color: "black", lineHeight: 20 }}>
                        Welcome to <Text style={{ color: colors.blue, textTransform: "uppercase" }}>spingo!</Text> Your ultimate Business Companion.
                    </Text>
                </View>
                <Text>
                    Streamline your business operations and maximize efficiency with our all-in-one platform.
                </Text>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => router.push("/dashboard/product")} style={[styles.button, { backgroundColor: colors.blue }]}>
                    <Text style={[styles.buttonText, { color: colors.white }]}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => router.push("/dashboard/product")} style={[styles.button, { backgroundColor: colors.white }]}>
                    <Text style={[styles.buttonText, { color: colors.blue }]}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    upper: {
        flex: 1,
        alignItems: "center",
        position: "relative",
        backgroundColor: colors.blue,
    },
    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    },
    lineContainer: {
        height: 6,
        bottom: 20,
        width: "80%",
        borderRadius: 20,
        position: "absolute",
        backgroundColor: colors.white,
    },
    line: {
        width: "45%",
        height: "100%",
        borderRadius: 20,
        backgroundColor: colors.blue,
    },
    lower: {
        flex: 1,
        paddingHorizontal: width(6),
        justifyContent: "space-around",
    },
    buttonContainer: {
        gap: 20,
        width: "100%",
        display: "flex",
    },
    button: {
        padding: 15,
        width: "100%",
        borderWidth: 1,
        borderRadius: 200,
        textAlign: "center",
        alignItems: "center",
        borderColor: colors.blue,
        justifyContent: "center",
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "600",
    }
});
