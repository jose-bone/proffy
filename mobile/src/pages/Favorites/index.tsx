import React from "react";
import { View } from "react-native";

import { PageHeader } from "../../components/PageHeader";

import { styles } from "./styles";

export function Favorites() {
  return (
    <View style={styles.container}>
      <PageHeader title="Meus proffys favoritos" />
    </View>
  );
}
