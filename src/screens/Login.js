import React, { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  Alert,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SvgXml } from "react-native-svg";

import logo from "../assets/272707556_231916139148938_3564323865832014711_n-removebg-small.png";
import { PersonSvg, EyeFill, EyeSlashed } from "../assets/svgPaths";

const Login = () => {
  const [text, SetText] = useState("");
  const [toggle, setToggle] = useState(true)

  function changeToggle() {
      setToggle(prevToggle => !prevToggle)
  }

  return (
    <ScrollView style={styles.body}>
      <View>
        <Image source={logo} style={styles.img} />
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.loginBox}>
            <View style={styles.boxOne}>
            <Text style={styles.passw}>Usuario</Text>
          <SvgXml
              style={styles.svg}
              xml={PersonSvg}
              width="32"
              height="32"
              stroke="black"
              strokeWidth=".5"
              fill="black"
              viewBox="0 0 32 32"
            />
            </View>
          <TextInput style={styles.input} placeholder="Usuario" placeholderTextColor='#669BC7' />
          <View style={styles.boxOne}>
            <Text style={styles.passw}>Contraseña</Text>
            <SvgXml
              xml={toggle ? EyeFill : EyeSlashed}
              style={styles.svgEye}
              width="48"
              height="48"
              stroke="black"
              strokeWidth=".5"
              fill="black"
              viewBox="0 0 48 48"
              onPress={changeToggle}
            />
          </View>
          <TextInput
            onChangeText={SetText}
            secureTextEntry={toggle ? true : false}
            style={styles.input}
            value={text}
            placeholder={"Contraseña"}
            placeholderTextColor='#669BC7'
          />
          <Pressable
            title="Iniciar Sesión"
            onPress={() => Alert.alert("Button press")}
            style={styles.submit}
          >
            <Text style={styles.btnText}>Iniciar Sesión </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    padding: 10,
    // backgroundColor: "#779",
  },
  body: {
    backgroundColor: "#669BC7",
  },
  img: {
    width: 350,
    height: 150,
    marginTop: 20,
    marginLeft: 20,
    marginRight: "auto",
  },
  loginBox: {
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
    justifyContent: "space-around",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    marginHorizontal: 100,
    marginVertical: 20,
    marginBottom: 20,
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
export default Login;
