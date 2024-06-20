import Home from "./src/type-weather/pages/home";

import { useFonts, Nunito_700Bold } from "@expo-google-fonts/nunito";



export default function App() {

  const [fontLoaded] = useFonts({
    Nunito_700Bold,
  });
  
  if (!fontLoaded) {
    return null;
  }

  
  return <Home />;
}
