import type { ChangeEvent } from "react";
import type { Address } from "./models/address";
import { useState } from "react";
import { fetchCepData } from "./http/cep-service";

import { Input } from "./components/input/input";
import { Label } from "./components/label/label";

import { Container, ContentLeft, ContentRight } from ".";
import { GlobalStyle } from "./styles/global";

export function App() {
  const [cep, setCep] = useState<string>("");
  const [address, setAddress] = useState<Address>({
    street: "",
    neighborhood: "",
    city: "",
    state: "",
  });

  function handleCepChange(event: ChangeEvent<HTMLInputElement>): void {
    const cepValue = event.target.value.replace(/\D/g, "");
    setCep(cepValue);
    if (cepValue.length === 8) {
      fetchCepData(cepValue)
        .then(data => {
          if (data) {
            setAddress(data);
          }
        })
        .catch(error => {
          console.error("Erro ao buscar o CEP:", error);
        });
    }
  }

  return (
    <Container>
      <ContentLeft>
        <div className="wrapper-box">
          <h1>BUSCA CEP</h1>

          <div className="wrapper-input">
            <Label htmlFor="search-cep" text="CEP" />
            <Input
              type="text"
              placeholder="XXXXX-XXX"
              name="search-cep"
              id="search-cep"
              value={cep}
              onChange={handleCepChange}
            />
          </div>

          <div className="wrapper-input">
            <Label htmlFor="street" text="Rua" />
            <Input
              type="text"
              placeholder="Rua"
              name="street"
              id="street"
              value={address.street}
              readOnly
            />
          </div>

          <div className="wrapper-input">
            <Label htmlFor="neighborhood" text="Bairro" />
            <Input
              type="text"
              placeholder="Bairro"
              name="neighborhood"
              id="neighborhood"
              value={address.neighborhood}
              readOnly
            />
          </div>

          <div className="wrapper-input">
            <Label htmlFor="city" text="Cidade" />
            <Input
              type="text"
              placeholder="Cidade"
              name="city"
              id="city"
              value={address.city}
              readOnly
            />
          </div>

          <div className="wrapper-input">
            <Label htmlFor="state" text="Estado" />
            <Input
              type="text"
              placeholder="Estado"
              name="state"
              id="state"
              value={address.state}
              readOnly
            />
          </div>
        </div>
      </ContentLeft>

      <ContentRight>
        <h1>world!</h1>
      </ContentRight>

      <GlobalStyle />
    </Container>
  );
}
