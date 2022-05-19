import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, FlatList, ActivityIndicator, Pressable,  TextInput } from "react-native";



const Drivers = ({navigation}) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [company, setCompany] = useState('')
  
    const getDrivers = async () => {
       try {
        const response = await fetch('https://transportes-villarreal.herokuapp.com/drivers/getDrivers'
          );
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    useEffect(() => {
        getDrivers();
        return setData()
      }, []);

  
    return (
        <View style={styles.body}>
            {
                isLoading ? <ActivityIndicator/> :
                <FlatList
                ListHeaderComponent={
                    <View>
                        <View>
                            <Text style={styles.h1}>Choferes de {company}</Text>
                            <TextInput onChangeText={setCompany} value={company} />
                        </View>
                    </View>
                }   
                data={data}
                keyExtractor={(value, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.li}> 
                        <Text> {item.name} </Text>
                        <Text>{ item.company }</Text>
                        <Pressable 
                          style={styles.btn}  onPress={
                          ()=> navigation.navigate('DriverDetail', {
                            itemId: item._id,
                            unit: item.bus,
                            driver: item.name,
                            company: item.company,
                            status: item.fueDadoDeBaja,
                            coordinator: item.coordinator,
                            photo: item.photo.url 
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
        backgroundColor: '#669BC7',
        paddingTop: 30
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
      },
      input: {
        backgroundColor: '#fff',
        borderBottomWidth: 2,
        height: 2,
        borderColor: '#000'
      }
})

export default Drivers