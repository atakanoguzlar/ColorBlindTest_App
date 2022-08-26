import React, { useState } from 'react';
import { View, Platform, StyleSheet, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import { useFonts } from "expo-font";
import { Picker } from '@react-native-picker/picker';
import { imageArray } from "../imageArray";

function StartScreen({ navigation }) {

    const [numberOfImages, setNumberOfImages] = useState(10);

    const [fontsLoaded] = useFonts({
        Font1: require("../assets/fonts/YanoneKaffeesatz-Bold.ttf"),
        Font2: require("../assets/fonts/Brandon_bld.otf")
    })
    if (!fontsLoaded) {
        return null;
    }


    function shuffle(array) {

        let currentIndex = array.length, randomIndex;

        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
        return array;
    }


    function start() {
        shuffle(imageArray)
        navigation.navigate("Test", { imageArray: imageArray.slice(0, numberOfImages) })
    }


    return (
        <SafeAreaView style={styles.container}>

            <Text
                style={{
                    textAlign: "center",
                    position: "absolute",
                    left: 57,
                    width: 120,
                    top: 195,
                    fontSize: 30,
                    letterSpacing: 1,
                    color: "#FFCB9A",
                    fontFamily: "Font2",
                    lineHeight: 40,
                }}
            >Number of Images
            </Text>

            <Picker
                selectedValue={numberOfImages}
                onValueChange={(value) => setNumberOfImages(value)}
                style={{
                    right: 60,
                    top: 150,
                    width: 110,
                    height: "auto",
                    position: "absolute",
                    backgroundColor: "#178588",
                    borderRadius: 15,
                    borderWidth: 5,
                    borderColor: "#D9B08C",
                }}>
                <Picker.Item label="10" value="10" />
                <Picker.Item label="20" value="20" />
                <Picker.Item label="30" value="30" />
            </Picker>


            <Text
                style={{
                    textAlign: "center",
                    width: 340,
                    position: "absolute",
                    bottom: 220,
                    fontSize: 30,
                    color: "#D1E8E2",
                    fontFamily: "Font2",
                    lineHeight: 40,
                }}
            >This color blindness test will include "{numberOfImages}" images.
            </Text>


            <View style={{
                position: "absolute",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#0a3c3d",
                borderColor: "#D9B08C",
                bottom: 90,
                height: 90,
                width: 270,
                borderRadius: 15,
                borderWidth: 5,
            }}>
                <TouchableOpacity
                    onPress={() => start()}>
                    <Text style={{
                        left: 2,
                        top: 4,
                        fontSize: 50,
                        letterSpacing: 4,
                        color: "#FFCB9A",
                        fontFamily: "Font1"
                    }}>START TEST
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: "#116466",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
});

export default StartScreen;