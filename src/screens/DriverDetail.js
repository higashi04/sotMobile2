import React, { useState, useEffect } from "react";
import {
  Text,
  Pressable,
  View,
  StyleSheet,
  Image,
  ScrollView,
  ActivityIndicator,
} from "react-native";

import logo from "../assets/272707556_231916139148938_3564323865832014711_n-removebg-small.png";
import noImg from "../assets/noimg.jpg";

const DriverDetail = ({ route, navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { unit, company, status, coordinator, driver, photo, address, imss } =
    route.params;
  useEffect(() => {
    let abortController;
    const getBus = async () => {
      try {
        abortController = new AbortController();
        let signal = abortController.signal;
        const response = await fetch(
          `https://transportes-villarreal.herokuapp.com/buses/getBuses/${JSON.stringify(
            unit
          ).replace(/"/g, "")}`,
          { signal: signal }
        );
        const json = await response.json();
        setData(json);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
      return abortController.abort();
    };
    getBus();
  }, []);

  return (
    <ScrollView style={styles.body}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View>
          <View style={styles.imgBox}>
            <Image source={logo} style={styles.img} />
          </View>
              <View>
                {!photo ? (
                  <Image source={noImg} style={styles.img} />
                ) : (
                  <Image
                    source={{
                      uri: `${JSON.stringify(photo).replace(/"/g, "")}`,
                    }}
                    style={styles.gafete}
                  />
                )}
                <Text style={styles.h1}>
                  Chofer: {JSON.stringify(driver).replace(/"/g, "")}
                </Text>
                <Text style={styles.text}>
                  Empresa: {JSON.stringify(company).replace(/"/g, "")}
                </Text>
                <Text style={styles.text}>
                  Coordinador: {JSON.stringify(coordinator).replace(/"/g, "")}
                </Text>
                <Text style={styles.text}>
                  {!status ? "Activo" : "Inactivo"}
                </Text>
              </View>
              <View>
                <Text style={styles.text}>Unidad: {data.unidad}</Text>
                <Text style={styles.text}>{data.tipo}</Text>
              </View>
              <View>
                <Text style={styles.text}>
                  Dirección: {JSON.stringify(address).replace(/"/g, "")}
                </Text>
                <Text style={styles.text}>
                  IMSS: {JSON.stringify(imss).replace(/"/g, "")}
                </Text>
                  <Pressable
                    style={styles.btn}
                    onPress={() => {
                      navigation.goBack();
                    }}
                  >
                    <Text style={styles.btnText}>Atrás</Text>
                  </Pressable>
              </View>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#669BC7",
    height: 800,
  },
  h1: {
    fontSize: 30,
    marginTop: 20,
    marginHorizontal: 10,
  },
  text: {
    fontSize: 25,
    margin: 25,
  },
  img: {
    width: 350,
    height: 150,
    marginTop: 20,
    marginHorizontal: 100,
  },
  btn: {
    borderRadius: 50,
    backgroundColor: "#2a9d8f",
    margin: 25,
    marginHorizontal: 105,
    padding: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontSize: 20,
  },
  imgBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  gafete: {
    width: 350,
    height: 350,
    marginTop: 20,
    marginHorizontal: 10,
  },
});

export default DriverDetail;
