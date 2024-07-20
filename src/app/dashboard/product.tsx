import React from "react";
import { colors } from "@/src/constants/colors";
import ProductCard from "@/src/components/cards/product";
import { height, width } from "@/src/utilities/dimension";
import { categories, products } from "@/src/constants/data";
import { StyleSheet, FlatList, View, Text } from "react-native";

const stockButtons = [
    { id: 0, label: "All stocks" },
    { id: 1, label: "Low stock" },
    { id: 2, label: "Expired" }
];

export default function Page() {
    const [index, setIndex] = React.useState(0);

    const setDynamicStyle = (id: number) => {
        if (id === index) return { color: colors.blue, backgroundColor: colors.lightblue };
        return { color: colors.lightblue, backgroundColor: colors.blue };
    };

    return <View style={styles.container}>
        <FlatList
            horizontal
            data={categories}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categories}
            keyExtractor={({ id }) => id.toString()}
            renderItem={({ item }) => <Text>{item.name}</Text>}
            style={{ borderTopColor: colors.lightgray, borderTopWidth: 1 }}
        />

        <View style={styles.stockContainer}>
            {stockButtons.map(item => (
                <Text onPress={() => setIndex(item.id)} style={[styles.stockButton, setDynamicStyle(item.id)]}>
                    {item.label}
                </Text>
            ))}
        </View>

        <FlatList
            data={products}
            contentContainerStyle={styles.products}
            keyExtractor={({ id }) => id.toString()}
            renderItem={({ item }) => <ProductCard {...item} />}
        />

        <Text style={styles.float}>+ New</Text>
    </View>;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        alignItems: "center",
    },
    categories: {
        gap: 20,
        height: 40,
        padding: 10,
        // alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: colors.white,
    },
    category: {
        flex: 0,
        flexWrap: "nowrap",
        backgroundColor: "red",
        textTransform: "capitalize"
    },
    stockContainer: {
        gap: 20,
        width: "100%",
        borderTopWidth: 1,
        paddingVertical: 15,
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomEndRadius: 20,
        paddingHorizontal: width(5),
        borderColor: colors.lightgray,
        backgroundColor: colors.white,
        justifyContent: "space-evenly",
    },
    stockButton: {
        flex: 1,
        borderRadius: 200,
        paddingVertical: 10,
        textAlign: "center",
    },
    products: {
        gap: 10,
    },
    float: {
        padding: 30,
        fontSize: 18,
        elevation: 5,
        color: "white",
        right: width(5),
        bottom: height(3),
        borderRadius: 300,
        shadowRadius: 3.84,
        shadowOpacity: 0.20,
        paddingVertical: 10,
        shadowColor: "#000",
        position: "absolute",
        backgroundColor: colors.blue,
        shadowOffset: { width: 0, height: 2 },

    }
});
