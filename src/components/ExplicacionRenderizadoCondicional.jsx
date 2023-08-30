import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, ToastAndroid, Button } from 'react-native';
//import Sound from 'react-native-sound';

const ExplicacionRenderizadoCondicional = () => {

  const [numero, setNumero] = useState(" ");
  const [esmayor, setEsMayor] = useState(false);
  const [esmenor, setEsMenor] = useState(false);

  useEffect(() => {
    //ESTO SE EJECUTA UNA SOLA VEZ
    setNumero(4)
    if(numero>9){
      console.log("Es mayor a 5")
      setEsMayor(true)
    }else{
      console.log("Es menor o igual a 5")
      setEsMenor(true)
    }
    //ToastAndroid.show("se cargo la aplicacion corectamente", ToastAndroid.SHORT)
  }, [])

  const estilos = StyleSheet.create({
    inputsTexto: {
      height: 40,
      width: 80,
      margin: 10,
      borderWidth: 1,
      padding: 10,
      borderColor: 'gray',
      borderWidth: 3,
    },
  });

  return (
    <View >
      <Text>Evaluar si el numero es mayor a 5</Text>
      {esmayor &&(<Text>El numero es mayor a 5</Text>)}
      {esmenor &&(<Text>El numero es menor o igual a 5</Text>)}
    </View>
  );
};

export default ExplicacionRenderizadoCondicional