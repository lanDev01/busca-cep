import type { ChangeEvent } from "react";
import type { Address } from "../../models/address";
import { InputGroup } from "../input-group/input-group";

interface AddressFormProps {
  cep: string;
  address: Address;
  handleCepChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function AddressForm({
  cep,
  address,
  handleCepChange,
}: AddressFormProps) {
  return (
    <div className="wrapper-box">
      <h1>BUSCA CEP</h1>

      <InputGroup
        label="CEP"
        id="search-cep"
        name="search-cep"
        placeholder="CEP"
        value={cep}
        onChange={handleCepChange}
      />

      <InputGroup
        label="Rua"
        id="street"
        name="street"
        placeholder="Rua"
        value={address.street}
        readOnly
      />

      <InputGroup
        label="Bairro"
        id="neighborhood"
        name="neighborhood"
        placeholder="Bairro"
        value={address.neighborhood}
        readOnly
      />

      <InputGroup
        label="Cidade"
        id="city"
        name="city"
        placeholder="Cidade"
        value={address.city}
        readOnly
      />

      <InputGroup
        label="Estado"
        id="state"
        name="state"
        placeholder="Estado"
        value={address.state}
        readOnly
      />
    </div>
  );
}
