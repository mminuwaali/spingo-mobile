import React from "react";
import { router } from "expo-router";
import { colors } from "@/src/constants/colors";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Page() {
    return <View style={styles.container}>
        <TouchableOpacity onPress={() => router.replace("./product")} style={styles.button}>
            <Text style={styles.buttonText}>Goto products page</Text>
        </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingHorizontal: 20,
        justifyContent: "center",
    },
    button: {
        padding: 15,
        width: "100%",
        borderWidth: 1,
        shadowOpacity: 1,
        borderRadius: 200,
        shadowRadius: 3.84,
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        borderColor: colors.blue,
        shadowColor: colors.palegray,
        backgroundColor: colors.blue,
        shadowOffset: { width: 0, height: 2 },
    },
    buttonText: {
        fontSize: 14,
        fontWeight: "600",
        color: colors.white,
    }
});
