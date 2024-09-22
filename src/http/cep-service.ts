import { toast } from "sonner";
import type { Address } from "../models/address";

export async function fetchCepData(cepValue: string): Promise<Address | null> {
  if (cepValue.length === 8) {
    try {
      const response = await fetch(
        `https://viacep.com.br/ws/${cepValue}/json/`
      );
      const data = await response.json();

      if (!data.erro) {
        return {
          street: data.logradouro,
          neighborhood: data.bairro,
          city: data.localidade,
          state: data.uf,
        };
        // biome-ignore lint/style/noUselessElse: <explanation>
      } else {
        toast.error("CEP Não Encontrado", {
          style: {
            padding: "10px 12px",
          },
        });
        return null;
      }
    } catch (error) {
      console.error("Erro ao buscar o CEP:", error);
      alert("Erro ao buscar o CEP. Tente novamente.");
      return null;
    }
  }
  return null;
}
