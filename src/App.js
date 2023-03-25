import './App.css';
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
    const { unityProvider } = useUnityContext({
    loaderUrl: "/games/2d/build/2d.loader.js",
    dataUrl: "/games/2d/build/2d.data",
    frameworkUrl: "/games/2d/build/2d.framework.js",
    codeUrl: "/games/2d/build/2d.wasm",
  });

  return <Unity unityProvider={unityProvider} />;
}

export default App;
