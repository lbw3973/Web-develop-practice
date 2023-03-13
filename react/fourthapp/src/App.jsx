import { ThemeProvider } from "styled-components";
import { Button } from "./components";
import GlobalStyle from "./styles/globalStyle";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* <Button size="large" color="red" onClick={() => alert("check")} />
      <Button size="medium" color="green" />
      <Button size="small" color="blue" /> */}
      <Button />
    </ThemeProvider>
  );
}

export default App;
