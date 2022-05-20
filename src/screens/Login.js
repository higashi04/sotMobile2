import React, { useState } from "react";
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
import { SvgXml } from "react-native-svg";

import axios from "axios";

import logo from "../assets/272707556_231916139148938_3564323865832014711_n-removebg-small.png";
import { PersonSvg, EyeFill, EyeSlashed } from "../assets/svgPaths";

const Login = () => {
  const [text, SetText] = useState("");
  const [user, setUser] = useState('');
  const [toggle, setToggle] = useState(true)
  const [isSubmiting, setSubmit] = useState(false)

  function changeToggle() {
      setToggle(prevToggle => !prevToggle)
  }
  const onSubmit = () => {
    if(text === '' || user === '') {
        Alert.alert('Favor de llenar ambos campos.')
        setSubmit(false)
    } else {
      handleLogin()
    }
  }

  const handleLogin = () => {
      const url = 'https://transportes-villarreal.herokuapp.com/users/login'
      axios.post(url, {user: user, text: text}).then((response) => {
        const result = response.data
        setSubmit(true)
        const {message, status, data} = result
      }).catch(error => {
        console.log(error.JSON())
      })
  }

  return (
      <KeyboardAvoidingView
        style={{flex: 1, backgroundColor: 'transparent'}}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={43}
      >
        <ScrollView style={styles.body}>
        <View>
          <Image source={logo} style={styles.img} />
        </View>
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
          <TextInput style={styles.input} placeholder="Usuario" placeholderTextColor='#669BC7' onChangeText={setUser} value={user} />
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
         {isSubmiting && <Pressable
            style={styles.submit}
          >
            <ActivityIndicator size='small' color='#fff' />
          </Pressable> }
         {!isSubmiting && <Pressable
            title="Iniciar Sesión"
            onPress={() => onSubmit()}
            style={styles.submit}
          >
            <Text style={styles.btnText}>Iniciar Sesión </Text>
          </Pressable> }
        </View>
        </ScrollView>
      </KeyboardAvoidingView>
  );
};

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
export default Login;
