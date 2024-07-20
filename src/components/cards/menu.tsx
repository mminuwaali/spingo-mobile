import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '@/src/constants/colors';
import { FontAwesome5 } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Pressable, View, ViewStyle, Text } from 'react-native';

const menuItems: { icon: any, label: string, component: any }[] = [
    {
        icon: 'pencil',
        label: 'Edit Stock',
        component: FontAwesome,
    },
    {
        icon: 'user',
        label: 'Supplier',
        component: AntDesign,
    },
    {
        icon: 'upload',
        label: 'Export',
        component: Feather,
    },
    {
        label: 'Duplicate',
        icon: 'content-duplicate',
        component: MaterialCommunityIcons,
    },
    {
        label: 'Share',
        icon: 'sharealt',
        component: AntDesign,
    },
    {
        icon: 'history',
        label: 'View History',
        component: FontAwesome5,
    },
    {
        icon: 'delete',
        label: 'Delete',
        component: AntDesign,
    },
];

export default function Menu(props: { style?: ViewStyle }) {
    const [isMenuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!isMenuVisible);
    };

    const handleItemPress = (item: string) => {
        console.log(`Selected: ${item}`);
        setMenuVisible(false);
    };

    return (
        <View style={[styles.container, props.style]}>
            <Pressable style={styles.button} onPress={toggleMenu}>
                {Array.from({ length: 3 }).map((_, id) => <View key={id} style={styles.point} />)}
            </Pressable>

            {isMenuVisible && (
                <View style={styles.window}>
                    {menuItems.map((item, index) => (
                        <Pressable key={index} onPress={() => handleItemPress(item.label)} style={styles.menuItem}>
                            <item.component name={item.icon as any} size={18} color={colors.gray} style={styles.icon} />
                            <Text style={styles.menuText}>{item.label}</Text>
                        </Pressable>
                    ))}
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
    },
    button: {
        gap: 3,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    point: {
        width: 3,
        height: 3,
        borderRadius: 100,
        backgroundColor: 'black',
    },
    window: {
        top: 10,
        right: 20,
        width: 180, // Adjust width as needed
        elevation: 5,
        borderRadius: 2,
        shadowRadius: 3.84,
        shadowOpacity: 0.25,
        shadowColor: '#000',
        position: 'absolute',
        backgroundColor: colors.white,
        shadowOffset: { width: 0, height: 2 },
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    icon: {
        marginRight: 10,
    },
    menuText: {
        color: colors.gray,
        textTransform: 'capitalize',
    },
});
