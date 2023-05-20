import { Provider as ReduxProvider } from "react-redux";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import store from "./redux/store";

function App() {
  return (
    <ReduxProvider store={store}>
      <div className="App">
        <Header />
        <Home />
      </div>
    </ReduxProvider>
  );
}

export default App;
