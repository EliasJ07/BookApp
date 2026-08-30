import React from "react";
import { View, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigations/StackNavigator";
import CustomButton from "../components/CustomButton";

type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">;

export default function Home({ route, navigation }: HomeProps) {
  // Extraemos el email recibido como parámetro desde Login.
  const { email } = route.params;

  return (
    <View>
      <Text>Bienvenido, {email}</Text>

      <CustomButton
        title="Ver useEffect"
        onPress={() => navigation.navigate("UseEffect")}
      />
    </View>
  );
}