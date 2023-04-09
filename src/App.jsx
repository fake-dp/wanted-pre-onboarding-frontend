import Test from "./pages/Test";
import MyApp from "./router/MyApp";
import GlobalStyle from "./styles/global/globalStyled.styled";
function App() {
  return (
    <GlobalStyle>
      <MyApp />
    </GlobalStyle>
  );
}

export default App;
