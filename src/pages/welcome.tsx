import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import wateringImg from "../assets/watering.png";
import colors from "../styles/colors";
import { Button } from "../components/Button";

export function Welcome() {
  // const [visible, setVisible] = useState(false);

  // function handleVisiblity() {
  //   setVisible(!visible);
  // }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie {"\n"} suas plantas{"\n"}de forma fácil
      </Text>

      {<Image style={styles.image} source={wateringImg} />}

      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas plantas.{"\n"}Nós cuidamos de lembrar
        você{"\n"}
        sempre que precisar.
      </Text>
      <Button title=">"></Button>
      {/* <Button onPress={handleVisiblity} title="Ocultar imagem "></Button> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //ocupar a tela toda
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.heading,
    marginTop: 38,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    width: 56,
  },
  image: {
    width: 292,
    height: 294,
  },
  buttonText: {
    color: colors.white,
    fontSize: 24,
  },
});
