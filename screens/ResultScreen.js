import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Platform } from 'react-native';
import { useFonts } from "expo-font";

function ResultScreen({ route, navigation }) {

    const { accuracy, resultText1, resultText2 } = route.params;

    const [fontsLoaded] = useFonts({
        Font1: require("../assets/fonts/YanoneKaffeesatz-Bold.ttf"),
        Font2: require("../assets/fonts/Brandon_bld.otf")
    })
    if (!fontsLoaded) {
        return null;
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={{ alignItems: "center" }}>

                <Text style={{
                    left: 6,
                    top: 40,
                    fontSize: 60,
                    letterSpacing: 15,
                    fontFamily: "Font1",
                    color: "#FFCB9A",
                }}>RESULT
                </Text>

                <View style={{
                    position: "absolute",
                    top: 110,
                    height: 6,
                    width: "85%",
                    backgroundColor: "#1ca6a9",
                }} />

                <Text style={{
                    position: "absolute",
                    left: 13,
                    top: 130,
                    fontSize: 27,
                    letterSpacing: 1,
                    fontFamily: "Font2",
                    color: "#D1E8E2",
                }}>Accuracy: %{accuracy}
                </Text>

                <Text style={{
                    position: "absolute",
                    top: 185,
                    fontSize: 30,
                    letterSpacing: 1,
                    fontFamily: "Font2",
                    color: "#FFCB9A",
                }}>{resultText1}
                </Text>

                <Text style={{
                    position: "absolute",
                    textAlign: "center",
                    top: 245,
                    width: 340,
                    fontSize: 20,
                    fontFamily: "Font2",
                    color: "#D9B08C",
                }}>{resultText2}
                </Text>

            </View>


            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("Start")
                }}
                style={{
                    position: "absolute",
                    alignItems: "center",
                    justifyContent: "center",
                    top: 643,
                    height: 90,
                    width: 270,
                    backgroundColor: "#0a3c3d",
                    borderWidth: 5,
                    borderColor: "#D9B08C",
                    borderRadius: 15,
                }}>
                <Text style={{
                    left: 2,
                    top: 4.5,
                    fontSize: 50,
                    letterSpacing: 5,
                    color: "#FFCB9A",
                    fontFamily: "Font1"
                }}
                >TRY AGAIN</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
        backgroundColor: "#116466",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
});

export default ResultScreen;