import { Provider } from "react-redux";
import LoginForm from "./components/LoginForm";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <LoginForm />
    </Provider>
  );
}

export default App;
