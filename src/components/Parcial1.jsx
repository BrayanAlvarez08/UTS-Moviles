import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ToastAndroid } from 'react-native';

const Parcial1 = () => {

  const [estudiantes, setEstudiantes] = useState({
    Estudiante1: 2.5,
    Estudiante2: 2.6,
    Estudiante3: 4.8
  });

  const [estudianteConMayorNota, setEstudianteConMayorNota] = useState(null);

  useEffect(() => {
    // ESTO SE EJECUTA UNA SOLA VEZ
    encontrarEstudianteConMayorNota(estudiantes);
  }, []);

  const encontrarEstudianteConMayorNota = (estudiantes) => {
    let mayorNota = -1;
    let estudianteMayorNota = null;

    for (let estudiante in estudiantes) {
      if (estudiantes.hasOwnProperty(estudiante)) {
        let nota = estudiantes[estudiante];
        if (nota > mayorNota) {
          mayorNota = nota;
          estudianteMayorNota = estudiante;
        }
      }
    }

    setEstudianteConMayorNota(estudianteMayorNota);
  }

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
    <View>
      <Text>Estudiante con la mayor nota:</Text>
      {estudianteConMayorNota ? (
        <Text>{estudianteConMayorNota} - Nota: {estudiantes[estudianteConMayorNota]}</Text>
      ) : (
        <Text>No hay estudiantes registrados.</Text>
      )}
    </View>
  );
};

export default Parcial1;