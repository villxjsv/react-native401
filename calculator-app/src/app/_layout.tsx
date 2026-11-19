import { globalStyles } from "@/styles/global-styles";
import { useFonts } from "expo-font";
import { NavigationBar } from "expo-navigation-bar";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Platform, View } from "react-native";

const RootLayout = () => {
  const [loadedFont] = useFonts({
    SpaceMono: require("../../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loadedFont) {
    return null;
  }

  return (
    <View style={globalStyles.background}>
      <Slot />
      <StatusBar style="dark" />
      {Platform.OS === "android" && <NavigationBar style="dark" />}
    </View>
  );
};

export default RootLayout;
