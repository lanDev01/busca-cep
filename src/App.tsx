import type { ChangeEvent } from "react";
import type { Address } from "./models/address";
import { useState } from "react";
import { fetchCepData } from "./http/cep-service";
import { AddressForm } from "./components/address-form/address-form";
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
        <AddressForm
          cep={cep}
          address={address}
          handleCepChange={handleCepChange}
        />
      </ContentLeft>

      <ContentRight>
        <h1>world!</h1>
      </ContentRight>

      <GlobalStyle />
    </Container>
  );
}
