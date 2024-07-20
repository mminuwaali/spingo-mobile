import React from "react";
import Menu from "./menu";
import { colors } from "@/src/constants/colors";
import { StyleSheet, Image, Pressable, View, Text } from "react-native";

export default function Product(props: ProductType) {
    const categoryName = React.useMemo(() => {
        let categories = props.category;
        if (categories.length == 1) return categories[0].name;

        return "multiple brands";
    }, []);

    return <Pressable style={styles.container}>
        <Image alt="image" style={styles.image} source={props.image} />

        <View style={styles.mainContent}>
            <View style={styles.upper}>
                <Text style={[styles.name]}>
                    <Image alt="image" style={{ width: 15, height: 15, objectFit: "contain", marginRight: 10 }} source={require("../../../assets/icons/food.png")} />
                    <Text style={{ color: colors.blue, textDecorationLine: "underline", fontWeight: "700" }}>{props.name}</Text>
                </Text>
                <Text style={[styles.category, { backgroundColor: categoryName == "multiple brands" ? colors.lightgray : colors.lightblue }]}>{categoryName}</Text>
            </View>

            <View style={styles.lower}>
                <Text style={{ color: "gray" }}>per piece</Text>
                <Text style={{ color: "black", fontWeight: "700" }}>{props.price.toLocaleString('en-NG', { style: 'currency', currency: 'NGN' })}</Text>
            </View>
        </View>

        <Menu style={{ marginBottom: "auto" }} />

    </Pressable>
};

const styles = StyleSheet.create({
    container: {
        gap: 10,
        padding: 30,
        width: "100%",
        elevation: 5,
        shadowOpacity: 1,
        position: "static",
        shadowRadius: 3.84,
        alignItems: "center",
        flexDirection: "row",
        shadowColor: colors.palegray,
        backgroundColor: colors.white,
        justifyContent: "space-between",
        shadowOffset: { width: 0, height: 2 },
    },
    image: {
        width: 60,
        height: 60,
        borderWidth: 1,
        borderRadius: 200,
        objectFit: "cover",
        backgroundColor: colors.black,
        borderColor: colors.lightgray,
    },
    mainContent: {
        flex: 1,
        gap: 10,
        alignItems: "flex-start",
        justifyContent: "space-around",
    },
    upper: {
        gap: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    name: {
        gap: 10,
        display: "flex",
        flexDirection: "row",
    },
    category: {
        fontSize: 10,
        borderRadius: 200,
        paddingVertical: 5,
        paddingHorizontal: 20,
        backgroundColor: colors.lightgray,
    },
    lower: {
        gap: 10,
        flexDirection: "row",
        justifyContent: "flex-start"
    },
    menuButton: {
        gap: 3,
        padding: 5,
        alignItems: "center",
        marginBottom: "auto",
        justifyContent: "center",
    },
    menuPoint: {
        width: 3,
        height: 3,
        borderRadius: 100,
        backgroundColor: "black",
    },
    menuList: {
        top: 20,
        right: 50,
        width: 150,
        zIndex: 10,
        height: 500,
        position: "absolute",
        backgroundColor: "black",
    }
});
