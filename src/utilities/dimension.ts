import { Dimensions } from "react-native";

export function width(num: number) {
    return (num / 100) * Dimensions.get("screen").width;
};

export function height(num: number) {
    return (num / 100) * Dimensions.get("screen").height;
};
