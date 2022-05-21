import React, {useState} from "react";
import {
    TextInput,
    View,
    StyleSheet,
    Text,
    ScrollView,
    Image,
    ActivityIndicator,
    Pressable,
    KeyboardAvoidingView,
    Platform,
    Alert
  } from "react-native";

  import { PersonSvg, EyeFill, EyeSlashed } from "../assets/svgPaths";

  const SignUp = () => {
    const [toggle, setToggle] = useState(true)

    function changeToggle() {
        setToggle(prevToggle => !prevToggle)
    }
      return(
          <KeyboardAvoidingView
            style={{flex: 1, backgroundColor: 'transparent'}}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={43}
          >
              <ScrollView style={styles.body}>
                <View style={styles.box}>
                    <TextInput
                    style={styles.input}
                    placeholder='Nombre de Usuario'
                    />
                </View>
              </ScrollView>
          </KeyboardAvoidingView>
      )
  }

  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderBottomWidth: 1,
      padding: 10,
      marginHorizontal: 50
    },
    body: {
      backgroundColor: "#669BC7",
      paddingTop: 30
    },
    img: {
      width: 350,
      height: 150,
      marginTop: 20,
      marginLeft: 20,
      marginRight: "auto",
    },
    box: {
      backgroundColor: "#fff",
      borderRadius: 20,
      marginTop: 50,
      height: 450,
      marginHorizontal: 10
    },
    passw: {
      paddingLeft: 50,
      fontSize: 20,
    },
    submit: {
      backgroundColor: "#2a9d8f",
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 20,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      marginHorizontal: 100,
      marginVertical: 20,
      borderRadius: 50,
      flexDirection: "row",
    },
    svg: {
      flex: 1,
      marginLeft: 7,
      marginTop: 5,
    },
    btnText: {
      fontSize: 15,
    },
    boxOne: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 50
    },
    svgEye: {
        marginTop: 5,
        marginLeft: 15
    }
  });

  export default SignUp;