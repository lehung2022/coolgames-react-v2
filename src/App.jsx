import "./styles/main.scss";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import store from "./redux/store/store";
import SoundBar from "./components/soundtrack/SoundBar";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <SoundBar />
        <AppRouter />
      </Provider>
    </div>
  );
}

export default App;
