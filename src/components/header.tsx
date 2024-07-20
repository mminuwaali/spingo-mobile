import { colors } from "../constants/colors";
import { StyleSheet, View, Text } from "react-native";

export default function Header(props: { title: string }) {
    return <View style={styles.container}>
        <Text style={styles.text}>{props.title}</Text>
    </View>;
};

const styles = StyleSheet.create({
    container: {
        padding: 30,
        paddingTop: 40,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.white,
    },
    text: {
        fontSize: 20,
        color: "black",
        fontWeight: "700",
        textTransform: "capitalize"
    }
});
