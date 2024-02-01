import GlobalContextProvider from "./src/context/GlobalContext";
import Routes from "./src/routes/routes";

export default function App() {
  return (
    <GlobalContextProvider>
      <Routes />
    </GlobalContextProvider>
  );
}