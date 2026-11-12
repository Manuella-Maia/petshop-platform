import { useState } from "react";
import { FiPlus, FiSearch, FiX } from "react-icons/fi";
import Header from "../components/Header";
import AnimalAvatar from "../components/AnimalAvatar";
import AnimalProfileModal from "../components/AnimalProfileModal";
import AnimalRegistrationModal from "../components/AnimalRegistrationModal";
import { filterAnimals } from "../utils/animals";

const headerLinks = [
  { label: "Início", pathname: "/homePage" },
  { label: "Animais", pathname: "/animais" },
];

const animais = [
  {
    nome: "bob",
    idade: 10,
    raca: "husky siberiano",
    especie: "cão",
    tutor: "Roberto",
    dono: "Richard",
  },
  {
    nome: "luna",
    idade: 3,
    raca: "persa",
    especie: "gato",
    tutor: "Mariana",
    dono: "Ana",
  },
  {
    nome: "thor",
    idade: 5,
    raca: "labrador",
    especie: "cão",
    tutor: "Carlos",
    dono: "Pedro",
  },
  {
    nome: "mel",
    idade: 2,
    raca: "siamês",
    especie: "gato",
    tutor: "Fernanda",
    dono: "Julia",
  },
  {
    nome: "rex",
    idade: 7,
    raca: "pastor alemão",
    especie: "cão",
    tutor: "Lucas",
    dono: "Marcos",
  },
  {
    nome: "nina",
    idade: 4,
    raca: "poodle",
    especie: "cão",
    tutor: "Beatriz",
    dono: "Sofia",
  },
];

export default function Animals() {
  const [search, setSearch] = useState("");
  const [species, setSpecies] = useState("");
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [registrationOpen, setRegistrationOpen] = useState(false);
  const speciesOptions = [...new Set(animais.map((animal) => animal.especie))];
  const filteredAnimals = filterAnimals(animais, search, species);

  function clearFilters() {
    setSearch("");
    setSpecies("");
  }

  return (
    <div className="min-h-screen bg-fundo font-sans text-texto">
      <Header links={headerLinks} />
      <main className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-verde-escuro">
              Cadastro
            </p>
            <h1 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl">Animais</h1>
            <p role="status" aria-live="polite" className="mt-3 text-texto/70">
              {filteredAnimals.length === 1
                ? "1 animal encontrado"
                : `${filteredAnimals.length} animais encontrados`}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setRegistrationOpen(true)}
            aria-haspopup="dialog"
            className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-laranja px-6 py-3.5 text-sm font-bold transition hover:bg-laranja-escuro focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-verde-escuro"
          >
            <FiPlus aria-hidden="true" className="text-xl" />
            Cadastrar animal
          </button>
        </div>

        <section aria-label="Filtros de animais" className="my-8 flex flex-wrap items-center gap-5 rounded-3xl bg-white p-5 sm:p-6">
          <div className="relative min-w-0 flex-1 basis-80">
            <label htmlFor="busca-animais" className="sr-only">
              Buscar por nome, raça, tutor ou dono
            </label>
            <FiSearch aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg text-verde-escuro" />
            <input
              id="busca-animais"
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Buscar por nome, raça, tutor ou dono"
              className="h-12 w-full rounded-full border border-verde-claro bg-fundo pl-11 pr-12 text-sm outline-none focus:border-verde-escuro focus:ring-2 focus:ring-verde-claro [&::-webkit-search-cancel-button]:appearance-none"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                aria-label="Limpar busca"
                className="absolute right-2 top-1/2 flex size-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full text-verde-escuro hover:bg-verde-claro focus-visible:outline-2 focus-visible:outline-verde-escuro"
              >
                <FiX aria-hidden="true" />
              </button>
            )}
          </div>
          <div role="group" aria-label="Filtrar por espécie" className="flex flex-wrap gap-2">
            {["", ...speciesOptions].map((option) => (
              <button
                key={option}
                type="button"
                aria-pressed={species === option}
                onClick={() => setSpecies(option)}
                className={`cursor-pointer rounded-full border px-5 py-3 text-sm font-bold capitalize transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-verde-escuro ${species === option ? "border-verde-escuro bg-verde-escuro text-white" : "border-verde-claro text-verde-escuro hover:bg-fundo"}`}
              >
                {option || "Todos"} · {option ? animais.filter((animal) => animal.especie === option).length : animais.length}
              </button>
            ))}
          </div>
        </section>

        {filteredAnimals.length > 0 ? (
          <ul aria-label="Animais encontrados" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredAnimals.map((animal) => (
              <li key={`${animal.nome}-${animal.dono}`}>
                <article className="flex h-full flex-col rounded-3xl bg-white p-7">
                  <div className="flex items-center gap-4">
                    <AnimalAvatar animal={animal} />
                    <div className="min-w-0">
                      <h2 className="break-words text-2xl font-extrabold capitalize">{animal.nome}</h2>
                      <p className="mt-1 break-words text-sm capitalize text-texto/70">
                        {animal.especie} · {animal.raca}
                      </p>
                    </div>
                  </div>
                  <dl className="my-6 space-y-3 text-sm">
                    {[
                      ["Idade", `${animal.idade} ${animal.idade === 1 ? "ano" : "anos"}`],
                      ["Tutor", animal.tutor],
                      ["Dono", animal.dono],
                    ].map(([label, value]) => (
                      <div key={label} className="flex items-baseline justify-between gap-4">
                        <dt className="text-texto/70">{label}</dt>
                        <dd className="break-words text-right font-semibold">{value}</dd>
                      </div>
                    ))}
                  </dl>
                  <button
                    type="button"
                    onClick={() => setSelectedAnimal(animal)}
                    aria-label={`Ver ficha de ${animal.nome}`}
                    aria-haspopup="dialog"
                    className="mt-auto w-full cursor-pointer rounded-full border border-verde-escuro px-5 py-3 text-sm font-bold text-verde-escuro transition hover:bg-verde-claro focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-verde-escuro"
                  >
                    Ver ficha
                  </button>
                </article>
              </li>
            ))}
          </ul>
        ) : (
          <section className="rounded-3xl bg-white px-6 py-16 text-center">
            <FiSearch aria-hidden="true" className="mx-auto mb-4 size-8 text-verde-escuro" />
            <h2 className="text-xl font-bold">Nenhum registro encontrado</h2>
            <p className="mt-2 text-sm text-texto/70">Tente outro nome, raça, tutor ou dono, ou altere a espécie.</p>
            <button
              type="button"
              onClick={clearFilters}
              className="mt-6 cursor-pointer rounded-full bg-verde-escuro px-6 py-3 text-sm font-bold text-white hover:bg-verde focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-verde-escuro"
            >
              Limpar filtros
            </button>
          </section>
        )}
      </main>
      <AnimalProfileModal animal={selectedAnimal} onClose={() => setSelectedAnimal(null)} />
      {registrationOpen && (
        <AnimalRegistrationModal onClose={() => setRegistrationOpen(false)} />
      )}
    </div>
  );
}
