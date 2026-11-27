import { ScrollView, StatusBar, Text, View } from "react-native";
import "./global.css";

const App = () => {
  return (
    <ScrollView className="flex-1 bg-slate-100">
      <StatusBar barStyle="dark-content" />

      <View className="flex-1 items-center justify-center px-6 py-10">
        <View className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-6">
          <Text className="mb-2 text-center text-3xl font-bold text-blue-600">
            NativeWind funciona
          </Text>

          <Text className="mb-6 text-center text-base text-slate-600">
            Prueba de estilos Tailwind CSS en React Native
          </Text>

          <View className="mb-4 rounded-xl bg-blue-500 px-4 py-3">
            <Text className="text-center text-lg font-semibold text-white">
              Fondo azul · texto blanco
            </Text>
          </View>

          <View className="mb-4 flex-row items-center justify-between rounded-xl bg-emerald-100 px-4 py-3">
            <Text className="text-base text-emerald-800">
              Alineación y espaciado
            </Text>
            <View className="h-6 w-6 rounded-full bg-emerald-500" />
          </View>

          <View className="flex-row justify-center gap-3">
            <View className="h-12 w-12 items-center justify-center rounded-lg bg-amber-400">
              <Text className="text-xl font-bold text-white">A</Text>
            </View>
            <View className="h-12 w-12 items-center justify-center rounded-lg bg-rose-500">
              <Text className="text-xl font-bold text-white">B</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default App;
