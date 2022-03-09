import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Landing } from "../pages/Landing";
import { GiveClasses } from "../pages/GiveClasses";
import { StudyTabs } from "./StudyTabs";

const Stack = createNativeStackNavigator();

export function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="GiveClasses" component={GiveClasses} />
        <Stack.Screen name="Study" component={StudyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
