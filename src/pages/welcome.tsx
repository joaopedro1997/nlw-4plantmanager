import React from "react";
import { Feather } from "@expo/vector-icons";
import {
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  View,
} from "react-native";

import wateringImg from "../assets/watering.png";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { useNavigation } from "@react-navigation/core";

export function Welcome() {
  const navigation = useNavigation();

  function handleStart() {
    navigation.navigate("UserIdentification");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Gerencie {"\n"} suas plantas de{"\n"}forma fácil
        </Text>

        {
          <Image
            style={styles.image}
            source={wateringImg}
            resizeMode={"contain"}
          />
        }

        <Text style={styles.subtitle}>
          Não esqueça mais de regar suas plantas.
          {"\n"}Nós cuidamos de lembrar você
          {"\n"}
          sempre que precisar.
        </Text>
        <TouchableOpacity
          onPress={handleStart}
          activeOpacity={0.7}
          style={styles.button}
        >
          <Text>
            <Feather name="chevron-right" style={styles.buttonIcon} />
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //ocupar a tela toda
  },
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around", //para as extremidades não colarem na borda
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.heading,
    marginTop: 38,
    fontFamily: fonts.heading,
    lineHeight: 34,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  image: {
    height: Dimensions.get("window").width * 0.7,
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
  buttonIcon: {
    color: colors.white,
    fontSize: 32,
  },
});
