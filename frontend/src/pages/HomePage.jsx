import { useState } from "react";
import { FaPaw } from "react-icons/fa";
import {
  FiArrowRight,
  FiClock,
  FiDroplet,
  FiFeather,
  FiGrid,
  FiHeart,
  FiHome,
  FiPackage,
  FiShield,
  FiShoppingBag,
  FiTruck,
  FiX,
} from "react-icons/fi";
import { LuBone, LuCat, LuFish } from "react-icons/lu";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const headerLinks = [
  { label: "Início", pathname: "/homePage" },
  { label: "Animais", pathname: "/animais" },
  { label: "Serviços", pathname: "/homePage", hash: "#servicos" },
  { label: "Produtos", pathname: "/homePage", hash: "#produtos" },
  { label: "Sobre nós", pathname: "/homePage", hash: "#sobre" },
  { label: "Contato", pathname: "/homePage", hash: "#contato" },
];

const pets = [
  { name: "Cães", description: "Ver tudo para cães", icon: LuBone },
  { name: "Gatos", description: "Ver tudo para gatos", icon: LuCat },
  { name: "Peixes", description: "Ver aquarismo", icon: LuFish },
  { name: "Aves", description: "Ver tudo para aves", icon: FiFeather },
];
const services = [
  {
    name: "Banho & tosa",
    description:
      "Higiene com produtos suaves, secagem cuidadosa e tosa no estilo que combina com o seu pet.",
    action: "Agendar horário",
    icon: FiDroplet,
  },
  {
    name: "Consulta veterinária",
    description:
      "Check-ups, vacinas e acompanhamento com veterinários que explicam tudo com calma.",
    action: "Marcar consulta",
    icon: FiGrid,
  },
  {
    name: "Hotelzinho",
    description:
      "Hospedagem com atenção e rotina de passeios para você viajar de coração tranquilo.",
    action: "Reservar vaga",
    icon: FiHome,
  },
  {
    name: "Delivery de ração",
    description:
      "Peça pelo site ou WhatsApp e receba ração, areia e petiscos na porta de casa.",
    action: "Fazer pedido",
    icon: FiTruck,
  },
];
// Catálogo de demonstração: substituir pelos dados da API quando disponível.
const products = [
  {
    id: 1,
    name: "Ração premium para cães adultos",
    category: "Cães",
    icon: FiPackage,
  },
  {
    id: 2,
    name: "Areia higiênica para gatos",
    category: "Gatos",
    icon: LuCat,
  },
  {
    id: 3,
    name: "Petisco natural para recompensa",
    category: "Cães",
    icon: LuBone,
  },
  {
    id: 4,
    name: "Brinquedo interativo resistente",
    category: "Brinquedos",
    icon: FiShoppingBag,
  },
];
const benefits = [
  {
    title: "Equipe que ama bicho",
    description:
      "Profissionais treinados para lidar com cada pet com paciência e respeito.",
    icon: FiHeart,
  },
  {
    title: "Produtos selecionados",
    description:
      "Marcas escolhidas com critério, para você comprar com segurança.",
    icon: FiShield,
  },
  {
    title: "Atendimento sem pressa",
    description: "Tiramos todas as suas dúvidas, pelo balcão ou pelo WhatsApp.",
    icon: FiClock,
  },
];
const container = "mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-12";
const heading = "font-black tracking-tight leading-[1.15]";
const primaryButton =
  "inline-flex items-center justify-center rounded-full bg-verde-escuro px-6 py-3 text-sm font-bold text-white transition hover:bg-verde focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-verde-escuro";
const outlineButton =
  "inline-flex items-center justify-center rounded-full border border-verde-escuro px-5 py-3 text-sm font-bold text-verde-escuro transition hover:bg-verde-claro focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-verde-escuro";

export default function HomePage() {
  const [cart, setCart] = useState({});
  const [cartOpen, setCartOpen] = useState(false);
  const [announcement, setAnnouncement] = useState("");
  const cartCount = Object.values(cart).reduce(
    (total, quantity) => total + quantity,
    0,
  );
  function addToCart(product) {
    setCart((current) => ({
      ...current,
      [product.id]: (current[product.id] || 0) + 1,
    }));
    setAnnouncement(`${product.name} adicionado à sua lista.`);
  }
  function removeFromCart(id) {
    setCart((current) => {
      const next = { ...current };
      if (next[id] > 1) next[id] -= 1;
      else delete next[id];
      return next;
    });
  }
  return (
    <div className="min-h-screen bg-white font-sans text-texto selection:bg-laranja-claro [&_a]:focus-visible:outline-offset-4 [&_button]:cursor-pointer [&_button]:focus-visible:outline-2 [&_button]:focus-visible:outline-offset-4 [&_button]:focus-visible:outline-verde-escuro">
      <a
        href="#conteudo"
        className="sr-only z-50 rounded-lg bg-white p-3 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Pular para o conteúdo
      </a>
      <Header
        links={headerLinks}
        action={{ label: "Agendar banho", to: "/homePage#contato" }}
      />
      <main id="conteudo">
        {cartOpen && (
          <section
            id="lista-compras"
            aria-labelledby="lista-titulo"
            className="border-b border-verde-claro bg-fundo py-6"
          >
            <div className={container}>
              <div className="mb-4 flex items-center justify-between gap-4">
                <h2 id="lista-titulo" className="text-xl font-bold">
                  Sua lista de compras ({cartCount})
                </h2>
                <button
                  type="button"
                  onClick={() => setCartOpen(false)}
                  aria-label="Fechar lista"
                  className="rounded-lg p-2"
                >
                  <FiX />
                </button>
              </div>
              {cartCount === 0 ? (
                <p className="text-sm text-texto/75">
                  Sua lista está vazia. Escolha os favoritos do seu pet abaixo.
                </p>
              ) : (
                <>
                  <ul className="divide-y divide-verde-claro">
                    {products
                      .filter((product) => cart[product.id])
                      .map((product) => (
                        <li
                          key={product.id}
                          className="flex flex-wrap items-center justify-between gap-3 py-3"
                        >
                          <span className="text-sm font-medium">
                            {product.name}{" "}
                            <span className="text-verde-escuro">
                              × {cart[product.id]}
                            </span>
                          </span>
                          <button
                            type="button"
                            onClick={() => removeFromCart(product.id)}
                            aria-label={`Remover uma unidade de ${product.name}`}
                            className="rounded-lg px-3 py-2 text-sm font-bold text-verde-escuro hover:bg-verde-claro"
                          >
                            Remover
                          </button>
                        </li>
                      ))}
                  </ul>
                  <p className="mt-3 text-sm text-texto/70">
                    Lista local para consulta. Valores, estoque e pedidos
                    dependem da confirmação da loja.
                  </p>
                  <a
                    href="#contato"
                    className={`${outlineButton} mt-4`}
                    onClick={() => setCartOpen(false)}
                  >
                    Consultar com a loja{" "}
                    <FiArrowRight aria-hidden="true" className="ml-2" />
                  </a>
                </>
              )}
            </div>
          </section>
        )}
        {/* Apresentação */}
        <section className="bg-fundo py-12 md:py-16">
          <div
            className={`${container} grid items-center gap-10 md:grid-cols-2 md:gap-14`}
          >
            <div>
              <span className="inline-block rounded-full bg-laranja-claro px-4 py-2 text-xs font-bold tracking-wide">
                Cuidado de verdade para o seu pet
              </span>
              <h1
                className={`${heading} mt-6 max-w-lg text-4xl sm:text-5xl lg:text-[54px]`}
              >
                Seu melhor amigo merece{" "}
                <span className="text-verde-escuro">carinho</span> em cada
                detalhe.
              </h1>
              <p className="mt-6 max-w-md text-base leading-7 text-texto/75">
                Banho e tosa, consulta veterinária, hotelzinho e tudo o que seu
                cão ou gato precisa, num só lugar e com gente que ama bicho.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#servicos"
                  className="inline-flex items-center justify-center rounded-full bg-laranja px-6 py-3.5 text-sm font-bold transition hover:bg-laranja-escuro"
                >
                  Conhecer os serviços
                </a>
                <a
                  href="#produtos"
                  className={outlineButton}
                >
                  Ver produtos
                </a>
              </div>
            </div>
            <div
              role="img"
              aria-label="Pata branca em um quadro verde, cercada pelos serviços banho e tosa, veterinário e hotelzinho"
              className="relative isolate mx-auto flex aspect-square w-full max-w-[460px] items-center justify-center overflow-hidden rounded-[36px] bg-laranja-claro"
            >
              <div className="absolute size-[76%] rounded-full bg-verde-claro" />
              <div className="relative flex size-[38%] -rotate-6 items-center justify-center rounded-[30%] bg-verde text-white">
                <FaPaw className="size-[53%]" />
              </div>
              <span className="absolute left-[4%] top-[13%] flex items-center gap-2 rounded-full bg-white px-4 py-3 text-xs font-bold shadow-lg shadow-verde-escuro/10">
                <span className="size-2 rounded-full bg-laranja" />
                Banho & tosa
              </span>
              <span className="absolute right-[4%] top-[36%] flex items-center gap-2 rounded-full bg-white px-4 py-3 text-xs font-bold shadow-lg shadow-verde-escuro/10">
                <span className="size-2 rounded-full bg-verde" />
                Veterinário
              </span>
              <span className="absolute bottom-[9%] left-[10%] flex items-center gap-2 rounded-full bg-white px-4 py-3 text-xs font-bold shadow-lg shadow-verde-escuro/10">
                <span className="size-2 rounded-full bg-laranja" />
                Hotelzinho
              </span>
            </div>
          </div>
        </section>
        {/* Categorias */}
        <section aria-labelledby="tipos-titulo" className="py-12 md:py-16">
          <div className={container}>
            <h2 id="tipos-titulo" className={`${heading} text-3xl`}>
              Compre por tipo de pet
            </h2>
            <p className="mt-2 text-sm text-texto/75">
              Escolha o seu bichinho e encontre o que ele precisa.
            </p>
            <div className="mt-7 grid grid-cols-2 gap-4 md:grid-cols-4">
              {pets.map(({ name, description, icon: Icon }, index) => (
                <a
                  key={name}
                  href="#produtos"
                  className={`group rounded-3xl p-5 transition hover:-translate-y-1 hover:shadow-md sm:p-6 ${index % 2 ? "bg-laranja-claro" : "bg-verde-claro"}`}
                >
                  <span
                    className={`mb-4 flex size-12 items-center justify-center rounded-2xl bg-white text-2xl ${index % 2 ? "text-laranja-escuro" : "text-verde-escuro"}`}
                  >
                    <Icon aria-hidden="true" />
                  </span>
                  <h3 className="text-xl font-extrabold">{name}</h3>
                  <span
                    className={`mt-2 inline-flex items-center gap-2 text-xs font-medium sm:text-sm ${index % 2 ? "text-amber-900" : "text-verde-escuro"}`}
                  >
                    {description}
                    <FiArrowRight
                      aria-hidden="true"
                      className="transition group-hover:translate-x-1"
                    />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
        {/* Serviços */}
        <section
          id="servicos"
          aria-labelledby="servicos-titulo"
          className="scroll-mt-6 bg-fundo py-12 md:py-16"
        >
          <div className={container}>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-verde-escuro">
              Nossos serviços
            </p>
            <h2
              id="servicos-titulo"
              className={`${heading} mt-3 max-w-xl text-3xl sm:text-4xl`}
            >
              Tudo o que seu pet precisa, sem sair do bairro.
            </h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {services.map(
                ({ name, description, action, icon: Icon }, index) => (
                  <article
                    key={name}
                    className={`flex flex-col items-start rounded-3xl border bg-white p-6 sm:p-7 ${index % 2 ? "border-laranja-claro" : "border-verde-claro"} ${index === 3 ? "md:col-span-3" : ""}`}
                  >
                    <span
                      className={`flex size-12 items-center justify-center rounded-2xl text-2xl ${index % 2 ? "bg-laranja-claro text-laranja-escuro" : "bg-verde-claro text-verde-escuro"}`}
                    >
                      <Icon aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 text-xl font-extrabold">{name}</h3>
                    <p className="mb-6 mt-2 text-sm leading-6 text-texto/75">
                      {description}
                    </p>
                    <a
                      href="#contato"
                      className={`mt-auto inline-flex items-center gap-2 rounded text-sm font-bold ${index % 2 ? "text-amber-900 hover:text-laranja-escuro" : "text-verde-escuro hover:text-verde"}`}
                    >
                      {action}
                      <FiArrowRight aria-hidden="true" />
                    </a>
                  </article>
                ),
              )}
            </div>
          </div>
        </section>
        {/* Loja */}
        <section
          id="produtos"
          aria-labelledby="produtos-titulo"
          className="scroll-mt-6 border-t border-verde-claro/60 bg-fundo py-12 md:py-16"
        >
          <div className={container}>
            <div className="flex flex-wrap items-end justify-between gap-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-verde-escuro">
                  Loja
                </p>
                <h2
                  id="produtos-titulo"
                  className={`${heading} mt-3 text-3xl sm:text-4xl`}
                >
                  Queridinhos da semana
                </h2>
              </div>
              <a
                href="#produtos"
                className={outlineButton}
              >
                Ver todos os produtos
              </a>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-5 min-[400px]:grid-cols-2 lg:grid-cols-4">
              {products.map(({ icon: Icon, ...product }, index) => (
                <article
                  key={product.id}
                  className="flex flex-col overflow-hidden rounded-3xl bg-white"
                >
                  <div
                    className={`flex aspect-[7/5] items-center justify-center ${index % 2 ? "bg-laranja-claro text-laranja-escuro" : "bg-verde-claro text-verde-escuro"}`}
                  >
                    <Icon aria-hidden="true" className="size-16 stroke-1" />
                  </div>
                  <div className="flex flex-1 flex-col items-start p-5">
                    <span
                      className={`rounded-full px-3 py-1 text-[10px] font-bold ${index % 2 ? "bg-laranja-claro text-amber-900" : "bg-verde-claro text-verde-escuro"}`}
                    >
                      {product.category}
                    </span>
                    <h3 className="mb-3 mt-3 text-base font-extrabold leading-snug">
                      {product.name}
                    </h3>
                    <p className="mt-auto text-sm font-medium text-verde-escuro">
                      Consulte o valor
                    </p>
                    <button
                      type="button"
                      onClick={() => addToCart(product)}
                      aria-label={`Adicionar ${product.name} à lista`}
                      className={`${primaryButton} mt-3 w-full py-2.5`}
                    >
                      Adicionar
                      {cart[product.id] ? ` (${cart[product.id]})` : ""}
                    </button>
                  </div>
                </article>
              ))}
            </div>
            <p
              role="status"
              aria-live="polite"
              className="mt-4 min-h-5 text-sm text-verde-escuro"
            >
              {announcement}
            </p>
          </div>
        </section>
        {/* Sobre nós */}
        <section
          id="sobre"
          aria-labelledby="sobre-titulo"
          className="scroll-mt-6 py-12 md:py-16"
        >
          <div
            className={`${container} grid items-center gap-8 md:grid-cols-2 md:gap-12`}
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-verde-escuro">
                Por que a Patinhas Verdes
              </p>
              <h2
                id="sobre-titulo"
                className={`${heading} mt-5 text-3xl sm:text-4xl`}
              >
                Pet feliz, tutor tranquilo.
              </h2>
              <p className="mt-5 max-w-md text-sm leading-6 text-texto/75">
                A gente trata cada bichinho pelo nome e cada tutor como parte da
                família. Sem pressa, sem receita pronta.
              </p>
            </div>
            <div className="space-y-3">
              {benefits.map(({ title, description, icon: Icon }, index) => (
                <article
                  key={title}
                  className={`flex items-start gap-4 rounded-3xl p-5 ${index === 1 ? "bg-laranja-claro" : "bg-fundo"}`}
                >
                  <span
                    className={`flex size-10 shrink-0 items-center justify-center rounded-xl text-xl ${index === 1 ? "bg-laranja text-texto" : "bg-verde-escuro text-white"}`}
                  >
                    <Icon aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-extrabold">{title}</h3>
                    <p className="mt-1 text-sm leading-5 text-texto/75">
                      {description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer
        id="contato"
        className="scroll-mt-6 bg-verde-escuro py-12 text-white"
      >
        <div className={container}>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
            <div>
              <Link
                to="/homePage"
                className="inline-flex items-center gap-2 text-xl font-black"
              >
                <FaPaw aria-hidden="true" />
                Patinhas Verdes
              </Link>
              <p className="mt-4 max-w-xs text-sm leading-6 text-white/85">
                Banho, saúde e carinho para quem faz parte da família. Venha
                conhecer a gente.
              </p>
              <Link
                to="/animais"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-laranja px-5 py-3 text-sm font-bold text-texto transition hover:bg-laranja-claro"
              >
                Meus animais
                <FiArrowRight aria-hidden="true" />
              </Link>
            </div>
            <div>
              <h2 className="font-extrabold text-laranja-claro">Endereço</h2>
              <p className="mt-3 text-sm leading-6 text-white/85">
                Endereço da loja
                <br />a ser informado.
              </p>
            </div>
            <div>
              <h2 className="font-extrabold text-laranja-claro">Horário</h2>
              <p className="mt-3 text-sm leading-6 text-white/85">
                Horários de atendimento
                <br />a serem informados.
              </p>
            </div>
            <div>
              <h2 className="font-extrabold text-laranja-claro">Contato</h2>
              <p className="mt-3 text-sm leading-6 text-white/85">
                Telefone, WhatsApp e e-mail serão disponibilizados em breve.
              </p>
            </div>
          </div>
          <div className="mt-10 flex flex-col justify-between gap-3 border-t border-white/20 pt-5 text-xs text-white/80 sm:flex-row">
            <p>
              © {new Date().getFullYear()} Patinhas Verdes. Todos os direitos
              reservados.
            </p>
            <p>Feito com carinho para os pets.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
