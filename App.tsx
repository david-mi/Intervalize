import GlobalContextProvider from "./src/context/GlobalContext";
import Routes from "./src/routes/routes";
import 'expo-dev-client';

export default function App() {
  return (
    <GlobalContextProvider>
      <Routes />
    </GlobalContextProvider>
  );
}