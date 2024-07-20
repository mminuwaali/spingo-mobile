import { Tabs } from "expo-router";
import Header from "@/src/components/header";
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View } from "react-native";
import { colors } from "@/src/constants/colors";

function TabBarIcon({ route, color, size, focused }: any) {
    let iconName: any;

    if (route.name === 'home') iconName = 'home';
    else if (route.name === 'product') iconName = 'cube';
    else if (route.name === 'receipt') iconName = 'receipt';
    else if (route.name === 'pricing') iconName = 'pricetag';
    else if (route.name === 'stocks') iconName = 'trending-up';

    return <View style={{ alignItems: 'center' }}>
        <Ionicons name={iconName} size={size} color={color} />
        {focused && <View style={styles.activeDot} />}
    </View>;
};

export default function Layout() {
    return (
        <Tabs
            screenOptions={({ route }) => ({
                tabBarStyle: styles.tabBarStyle,
                tabBarActiveTintColor: colors.blue,
                tabBarItemStyle: styles.tabBarItemStyle,
                tabBarLabelStyle: styles.tabBarLabelStyle,
                header: props => <Header title={props.route.name} />,
                tabBarIcon: (props) => <TabBarIcon route={route} {...props} />,
            })}
        >
            <Tabs.Screen name="home" />
            <Tabs.Screen name="product" />
            <Tabs.Screen name="receipt" />
            <Tabs.Screen name="pricing" />
            <Tabs.Screen name="stocks" />
        </Tabs>
    );
}

const styles = StyleSheet.create({
    tabBarLabelStyle: {
        display: 'none',
    },
    tabBarItemStyle: {
        padding: 5,
    },
    tabBarStyle: {
        height: 80,
        paddingHorizontal: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    activeDot: {
        width: 5,
        height: 5,
        marginTop: 3,
        borderRadius: 2.5,
        backgroundColor: colors.blue,
    },
});