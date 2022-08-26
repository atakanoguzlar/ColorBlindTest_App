import React, { useState } from 'react';
import { Platform, Text, View, StyleSheet, SafeAreaView, TouchableOpacity, ImageBackground } from 'react-native';
import { useFonts } from "expo-font";
import ProgressBar from 'react-native-progress/Bar';

let pos = 0;

let counter = 0;

let accuracy = 0;

let resultText1 = "";

let resultText2 = "";

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


function TestScreen({ route, navigation }) {

    const { imageArray } = route.params;

    const [button1, setButton1] = useState(Math.floor(Math.random() * 100));

    const [button2, setButton2] = useState(imageArray[0][1]);

    const [button3, setButton3] = useState(Math.floor(Math.random() * 100));

    const [button4, setButton4] = useState(characters.charAt(Math.floor(Math.random() * characters.length)));

    const [barLevel, setBarLevel] = useState(0);

    const [currentImage, setCurrentImage] = useState(imageArray[0][0]);

    const [fontsLoaded] = useFonts({
        Font1: require("../assets/fonts/YanoneKaffeesatz-Bold.ttf"),
        Font2: require("../assets/fonts/Brandon_bld.otf")
    })
    if (!fontsLoaded) {
        return null;
    }



    function giveValueToButtons() {

        let oneToFour = [setButton1, setButton2, setButton3, setButton4]

        let k = Math.floor(Math.random() * oneToFour.length)
        oneToFour[k](imageArray[pos][1])
        oneToFour.splice(k, 1)

        let l = Math.floor(Math.random() * oneToFour.length)
        let a = Math.floor(Math.random() * characters.length)
        oneToFour[l](characters.charAt(a))
        oneToFour.splice(l, 1)

        let m = Math.floor(Math.random() * oneToFour.length)
        let b = Math.floor(Math.random() * characters.length)
        while (a == b) {
            b = Math.floor(Math.random() * characters.length)
        }
        oneToFour[m](characters.charAt(b))
        oneToFour.splice(m, 1)

        let n = Math.floor(Math.random() * oneToFour.length)
        let c = Math.floor(Math.random() * 100)
        while (c == imageArray[pos][0]) {
            c = Math.floor(Math.random() * 100)
        }
        oneToFour[n](c)
        oneToFour.splice(n, 1)
    }



    let nextImage = (whichButton) => {

        if (pos < imageArray.length - 1) {

            if (imageArray[pos][1] == whichButton) {
                counter++;
            }
            pos++;
            giveValueToButtons()
            setCurrentImage(imageArray[pos][0])
            setBarLevel(pos / imageArray.length)

        } else {

            if (imageArray[pos][1] == whichButton) {
                counter++;
            }
            accuracy = Math.round((counter / (imageArray.length)) * 100);

            if (accuracy >= 80) {
                resultText1 = "Normal Color Vision"
                resultText2 = "You have normal color vision, which means you can see up to one million distinct shades of color."
            } else if (accuracy <= 35) {
                resultText1 = "Strong Color Blindness"
                resultText2 = "Protanopia, deuteranopia, protanomaly, and deuteranomaly are commonly inherited forms of red-green color blindness which affect a substantial portion of the human population.Those affected have difficulty with discriminating red and green hues due to the absence or mutation of the red or green retinal photoreceptors."
            } else if ((accuracy < 80) && (accuracy > 35)) {
                resultText1 = "Minor Color Blind"
                resultText2 = "Protanopia, deuteranopia, protanomaly, and deuteranomaly are commonly inherited forms of red-green color blindness which affect a substantial portion of the human population. Those affected have difficulty with discriminating red and green hues due to the absence or mutation of the red or green retinal photoreceptors."
            }
            counter = 0;
            pos = 0;

            navigation.navigate("Result", {
                counter: counter, imageArrayLength: imageArray.length,
                resultText1: resultText1, resultText2: resultText2,
                accuracy: accuracy,
            })
        }
    };


    return (
        <SafeAreaView style={styles.container}>

            <ImageBackground style={{
                alignSelf: "center",
                width: 350,
                height: 350,
                position: "absolute",
                top: 130,
            }}
                source={currentImage}>
            </ImageBackground>


            <ProgressBar
                progress={barLevel}
                color={"#cccccc"}
                width={350}
                style={{
                    top: 500,
                    borderColor: "#999999",
                    borderWidth: 2,
                    borderRadius: 3.5,
                }} />


            <View style={{
                width: "100%",
                top: 550,
                flexDirection: "row",
                justifyContent: "space-evenly"
            }}>

                <TouchableOpacity
                    onPress={() => nextImage(button1)}
                    style={{
                        backgroundColor: "#cccccc",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 80,
                        width: 80,
                        borderRadius: 15,
                    }}>
                    <Text
                        numberOfLines={1}
                        adjustsFontSizeToFit
                        style={{
                            fontFamily: "Font2",
                            fontSize: 50,
                            color: "#323232"
                        }}>
                        {button1}</Text>
                </TouchableOpacity>


                <TouchableOpacity
                    onPress={() => nextImage(button2)}
                    style={{
                        backgroundColor: "#cccccc",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 80,
                        width: 80,
                        borderRadius: 15,
                    }}>
                    <Text
                        numberOfLines={1}
                        adjustsFontSizeToFit
                        style={{
                            fontWeight: "bold",
                            fontFamily: "Font2",
                            fontSize: 50,
                            color: "#323232"
                        }}>
                        {button2}</Text>
                </TouchableOpacity>


                <TouchableOpacity
                    onPress={() => nextImage(button3)}
                    style={{
                        backgroundColor: "#cccccc",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 80,
                        width: 80,
                        borderRadius: 15,
                    }}>
                    <Text
                        numberOfLines={1}
                        adjustsFontSizeToFit
                        style={{
                            fontFamily: "Font2",
                            fontSize: 50,
                            color: "black"
                        }}>
                        {button3}</Text>
                </TouchableOpacity>


                <TouchableOpacity
                    onPress={() => nextImage(button4)}
                    style={{
                        backgroundColor: "#cccccc",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 80,
                        width: 80,
                        borderRadius: 15,
                    }}>
                    <Text
                        numberOfLines={1}
                        adjustsFontSizeToFit
                        style={{
                            fontFamily: "Font2",
                            fontSize: 50,
                            color: "black"
                        }}>
                        {button4}</Text>
                </TouchableOpacity>
            </View>


            <TouchableOpacity
                onPress={() => {
                    counter = 0;
                    pos = 0;
                    navigation.navigate("Start")
                }}
                style={{
                    position: "absolute",
                    top: 50,
                    backgroundColor: "#FFCCCC",
                    alignSelf: "flex-start",
                    alignItems: "center",
                    justifyContent: "center",
                    left: -5,
                    height: 40,
                    width: 70,
                    borderRadius: 7,
                }}>
                <Text style={{
                    top: 3.3,
                    left: 2.5,
                    fontFamily: "Font1",
                    fontSize: 30,
                    letterSpacing: 1.5,
                    color: "red"
                }}
                >EXIT</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
});

export default TestScreen;