import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, FlatList, ActivityIndicator, Pressable } from "react-native";


const Buses = ({navigation}) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
  
    const getBuses = async () => {
       try {
        const response = await fetch('https://transportes-villarreal.herokuapp.com/buses/getBuses');
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  
    useEffect(() => {
      getBuses();
    }, []);
  
    return (
        <View style={styles.body}>
            {
                isLoading ? <ActivityIndicator/> :
                <FlatList
                ListHeaderComponent={
                    <View>
                        <Text style={styles.h1}>Camiones de P L A C E H O L D E R</Text>
                    </View>
                }   
                data={data}
                keyExtractor={(value, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.li}> 
                        <Text> Unidad: {item.unidad} </Text>
                        <Pressable 
                          style={styles.btn}  onPress={
                          ()=> navigation.navigate('BusDetail', {
                            itemId: item._id,
                            unit: item.unidad,
                            driver: item.chofer
                          })}>
                          <Text style={styles.btnText} >Detalle</Text>
                        </Pressable>
                    </View>
                )}
              />
            }
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: "#669BC7",
      },
      h1: {
          fontSize: 30,
          marginTop: 20,
          marginHorizontal: 10
      },
      li: {
          backgroundColor: '#fff',
          borderRadius: 50,
          marginHorizontal: 10,
          marginVertical: 20,
          display: "flex",
          justifyContent: 'center',
          alignItems: 'center'
      },
      btnText: {
        fontSize: 15
      },
      btn: {
          backgroundColor: '#2a9d8f',
          padding: 10,
          borderRadius: 50,
          margin: 10 
      }
})

export default Buses