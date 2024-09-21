import { Container, ContentLeft, ContentRight } from ".";
import { Input } from "./components/input/input";
import { Label } from "./components/label/label";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <Container>
      <ContentLeft>
        <div className="wrapper-box">
          <h1>BUSCA CEP</h1>

          <div className="wrapper-input">
            <Label htmlFor="search-cep" />
            <Input
              type="number"
              placeholder="XXXXX-XXX"
              name="search-cep"
              id="search-cep"
            />
          </div>
        </div>
      </ContentLeft>

      {/*  */}
      <ContentRight>
        <h1>world!</h1>
      </ContentRight>

      <GlobalStyle />
    </Container>
  );
}
