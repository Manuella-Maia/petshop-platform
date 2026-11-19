import { useState } from "react";
import { useEffect } from "react";
import { FaPaw, FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const apiKey = import.meta.env.VITE_API_KEY;

const especies = ["Canino", "Felino", "Ave", "Outro"];

const portes = ["Pequeno", "Médio", "Grande"];

//Classes compartilhadas dos campos do formulario
const labelClasses = "text-sm font-semibold text-texto";

const fieldBaseClasses =
  "w-full rounded-xl border border-[#d8e0d8] bg-white px-4 text-[15px] transition-colors placeholder:text-[#9aa79a] focus:border-verde focus:outline-none focus:ring-2 focus:ring-verde/30";

const inputClasses = `${fieldBaseClasses} h-12 text-texto`;

const selectClasses = `${fieldBaseClasses} h-12 cursor-pointer appearance-none pr-10`;

const textareaClasses = `${fieldBaseClasses} h-[120px] resize-none py-3 text-texto`;

export default function AnimalRegistration() {
  const [racasCaes, setRacasCaes] = useState([]);
  const [racasGatos, setRacasGatos] = useState([]);

  //Variaveis para armazenar o valor dos campos no formulario

  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [especie, setEspecie] = useState("");
  const [raca, setRaca] = useState("");
  const [porte, setPorte] = useState("");
  const [data, setData] = useState(""); //nomeei a variavel como data para reduzir o tamanho do nome (para data de nascimento do animal)

  //Use efect para pegar sincronizar o componente com o consumo da api para
  //para facilitar o uso de pesquisa nas raças

  //O useEffect só sera rodado quando o componente for montado
  useEffect(() => {
    racas.length = 0;

    async function dadosGatos() {
      const res = await fetch("https://api.thecatapi.com/v1/breeds", {
        headers: { "x-api-key": apiKey },
      });
      const data = await res.json();
      const array = JSON.parse(data);
      const nomes = array.map(pet => pet.name);
      setRacasGatos0p(...nomes);
    }

    async function dadosCanino() {
      const res = await fetch("https://api.thedogapi.com/v1/breeds", {
        headers: { "x-api-key": apiKey },
      });
      const data = await res.json();
      const array = JSON.parse(data);
      const nomes = array.map(pet => pet.name);
      setRacasCaes(...nomes);
    }

    dadosGatos();

    dadosCanino();

  }, []);
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <main className="grid min-h-screen bg-white font-sans text-texto min-[860px]:grid-cols-2">
        <section className="relative flex flex-col justify-between gap-6 overflow-hidden bg-verde-escuro px-6 py-8 text-white min-[860px]:px-16 min-[860px]:py-14">
          <div
            aria-hidden="true"
            className="absolute -right-[90px] -top-[90px] size-80 rounded-full bg-verde"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-[70px] right-[120px] size-[200px] rounded-full bg-laranja"
          />
          <div
            aria-hidden="true"
            className="absolute -left-[60px] bottom-[140px] size-[150px] rounded-full bg-verde-medio"
          />

          <header className="relative flex items-center gap-3">
            <div className="flex size-12 items-center justify-center rounded-[14px] bg-white text-2xl text-verde">
              <FaPaw aria-hidden="true" />
            </div>
            <h1 className="text-[22px] font-extrabold tracking-wide">
              Patinhas Verdes
            </h1>
          </header>

          <article className="relative max-w-[460px]">
            <h2 className="mb-4 text-3xl font-extrabold leading-[1.1] min-[860px]:text-[44px]">
              Conte quem é o seu pet.
            </h2>
            <p className="text-lg leading-normal text-verde-claro">
              Com o cadastro pronto, fica mais fácil agendar banho e tosa e
              cuidar de cada detalhe dele
            </p>
          </article>

          <div
            aria-hidden="true"
            className="relative hidden h-px min-[860px]:block"
          />
        </section>
        <section className="flex items-center justify-center bg-white px-5 py-8 min-[860px]:px-8 min-[860px]:py-12">
          <form
            method="post"
            onSubmit={handleSubmit}
            className="w-full max-w-[400px]"
          >
            <h2 className="mb-2 text-[32px] font-extrabold text-[#14401a]">
              Cadastrar pet
            </h2>
            <p className="mb-8 text-base leading-normal text-[#6f7a6f]">
              Preencha os dados do seu animal de estimação.
            </p>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="nome" className={labelClasses}>
                  Nome do pet
                </label>
                <input
                  type="text"
                  name="nome"
                  id="nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Ex.: Thor"
                  required
                  className={inputClasses}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="especie" className={labelClasses}>
                    Espécie
                  </label>
                  <div className="relative">
                    <select
                      name="especie"
                      id="especie"
                      value={especie}
                      onChange={(e) => setEspecie(e.target.value)}
                      required
                      className={`${selectClasses} ${especie === "" ? "text-[#9aa79a]" : "text-texto"
                        }`}
                    >
                      <option value="" disabled>
                        Selecione
                      </option>
                      {especies.map((opcao) => (
                        <option key={opcao} value={opcao}>
                          {opcao}
                        </option>
                      ))}
                    </select>
                    <FaChevronDown
                      aria-hidden="true"
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#6f7a6f]"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="raca" className={labelClasses}>
                    Raça
                  </label>
                  <input
                    type="text"
                    placeholder="Ex.: Golden Retriever"
                    name="raca"
                    id="raca"
                    value={raca}
                    onChange={(e) => setRaca(e.target.value)}
                    required
                    className={inputClasses}
                  />
                  
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="porte" className={labelClasses}>
                  Porte
                </label>
                <div className="relative">
                  <select
                    name="porte"
                    id="porte"
                    value={porte}
                    onChange={(e) => setPorte(e.target.value)}
                    required
                    className={`${selectClasses} ${porte === "" ? "text-[#9aa79a]" : "text-texto"
                      }`}
                  >
                    <option value="" disabled>
                      Selecione
                    </option>
                    {portes.map((opcao) => (
                      <option key={opcao} value={opcao}>
                        {opcao}
                      </option>
                    ))}
                  </select>
                  <FaChevronDown
                    aria-hidden="true"
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#6f7a6f]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="data" className={labelClasses}>
                  Data de nascimento
                </label>
                <input
                  type="date"
                  name="data"
                  id="data"
                  value={data}
                  onChange={(e) => setData(e.target.value)}
                  required
                  className={inputClasses}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="observacoes" className={labelClasses}>
                Observações
              </label>
              <textarea
                name="observacoes"
                id="observacoes"
                placeholder="Alergias, temperamento, cuidados especiais…"
                className={textareaClasses}
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            className="mt-8 h-[52px] w-full cursor-pointer rounded-xl bg-laranja text-[17px] font-extrabold text-texto hover:bg-laranja-escuro focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-verde-escuro"
          >
            Cadastrar pet
          </button>
        </form>
      </section>
    </main >
    </>
  );
}
