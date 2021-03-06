import React from 'react'
import { StyleSheet, Text, View,ScrollView,Image } from 'react-native'
import {Button} from 'react-native-elements'
import {useNavigation} from '@react-navigation/native'


export default function UserGuest() {
  const navigation = useNavigation()
  return (
    <ScrollView
      centerContent
      style={styles.viewBody}
      >
      <Image
        source={require("../../assets/restaurantLogo.jpg")}
        resizeMode="contain"
        style={styles.image}
      />
      <Text style={styles.tittle}>Consulta tu perfil en restaurants</Text>
      <Text style={styles.description}>
      ¿Cómo describirías mejor tu restaurante? Busca y visualiza los mejores restaurantes de una forma sencilla, vota cúal te ha gustado más y comenta cómo ha sido tu experiencia. 
      </Text>
      <Button
        buttonStyle={styles.button}
        title="Ver tu perfil"
        onPress={() => navigation.navigate("login")}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  viewBody: {
    marginHorizontal: 10
  },
  image: {
    height: 300,
    width: "100%",
    marginBottom: 10,
    marginTop: 10,
    
  },
  tittle: {
    fontWeight: "bold",
    fontSize: 16,
    marginVertical: 15,
    textAlign: "center"
  }, 
  description: {
    textAlign: "justify",
    marginHorizontal: 10,
    marginBottom: 20,
    color: "#a65273"

  },
  button: {
    backgroundColor: "#442484",
    width: 350,
    height: 50,


  
  }
})
