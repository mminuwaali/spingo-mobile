import React from "react";
import { Slot } from "expo-router";
import { StyleSheet } from "react-native";
import { hideAsync, preventAutoHideAsync } from "expo-splash-screen";

preventAutoHideAsync();
export default function Layout() {
    React.useEffect(() => { hideAsync(); }, []);

    return <Slot />;
};

const styles = StyleSheet.create({});
