import AppRouter from "./router/AppRouter";
import GlobalStyle from "./styles/global/globalStyled.styled";
import reset from "./styles/global/reset.css";

function App() {
  return (
    <GlobalStyle>
      <AppRouter />
    </GlobalStyle>
  );
}

export default App;
