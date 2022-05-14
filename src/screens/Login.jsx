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
const PersonSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
<path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
</svg>`;
const EyeFill = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
<path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
<path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
</svg>`;
const EyeSlashed = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash-fill" viewBox="0 0 16 16">
<path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"/>
<path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"/>
</svg>`;

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
