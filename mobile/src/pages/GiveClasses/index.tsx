import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ImageBackground, Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import giveClassesBgImage from "../../assets/images/give-classes-background.png";

import { styles } from "./styles";

export function GiveClasses() {
  const { goBack } = useNavigation();

  function handleNavigateBack() {
    goBack();
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="contain"
        source={giveClassesBgImage}
        style={styles.content}
      >
        <Text style={styles.title}>Quer ser um Proffy?</Text>
        <Text style={styles.description}>
          Para começar, você precisa se cadastrar como professor na nossa
          plataforma Web.
        </Text>
      </ImageBackground>

      <RectButton onPress={handleNavigateBack} style={styles.okButton}>
        <Text style={styles.okButtonText}>Tudo bem</Text>
      </RectButton>
    </View>
  );
}
