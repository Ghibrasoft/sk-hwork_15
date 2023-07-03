import "./App.css";
import ToggleThemeButton from "./components/ToggleThemeButton";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useWindowResize } from "./hooks/useWindowResize";
import { useDetectDevice } from "./hooks/useDetectDevice";

function App() {
  const [lightMode, setLightMode] = useLocalStorage("mode", true);
  const { width } = useWindowResize();
  const device = useDetectDevice();

  return (
    <div
      className="container"
      style={{
        backgroundColor: `${width > 576 && !lightMode ? "#0f172a" : "#f8fafc"}`,
      }}
    >
      <div className="text-wrapper">
        <h1>{device}</h1>
      </div>
      <ToggleThemeButton setLightMode={setLightMode} />
    </div>
  );
}

export default App;
