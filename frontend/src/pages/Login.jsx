import { useState } from "react";
import { FaPaw } from "react-icons/fa";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [senha,setSenha] = useState('');
  const [email,setEmail] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/HomePage");
  }

  return (
    <main className="grid min-h-screen bg-white font-sans text-texto min-[860px]:grid-cols-2">
      {/* Painel verde */}
      <section className="relative flex flex-col justify-between gap-6 overflow-hidden bg-verde-escuro px-6 py-8 text-white min-[860px]:px-16 min-[860px]:py-14">
        <div aria-hidden="true" className="absolute -right-[90px] -top-[90px] size-80 rounded-full bg-verde" />
        <div aria-hidden="true" className="absolute -bottom-[70px] right-[120px] size-[200px] rounded-full bg-laranja" />
        <div aria-hidden="true" className="absolute -left-[60px] bottom-[140px] size-[150px] rounded-full bg-verde-medio" />

        <header className="relative flex items-center gap-3">
          <div className="flex size-12 items-center justify-center rounded-[14px] bg-white text-2xl text-verde">
            <FaPaw aria-hidden="true" />
          </div>
          <h1 className="text-[22px] font-extrabold tracking-wide">Patinhas Verdes</h1>
        </header>

        <article className="relative max-w-[460px]">
          <h2 className="mb-4 text-3xl font-extrabold leading-[1.1] min-[860px]:text-[44px]">
            Bem-vindo de volta ao cuidado que seu pet merece.
          </h2>
          <p className="text-lg leading-normal text-verde-claro">
            Entre na sua conta para agendar banho e tosa, comprar rações e acompanhar seus pedidos.
          </p>
        </article>

        <div aria-hidden="true" className="relative hidden h-px min-[860px]:block" />
      </section>

      {/* Formulário */}
      <section className="flex items-center justify-center bg-white px-5 py-8 min-[860px]:px-8 min-[860px]:py-12">
        <form method="post" onSubmit={handleSubmit} className="w-full max-w-[400px]">
          <h2 className="mb-2 text-[32px] font-extrabold text-verde-profundo">Entrar</h2>
          <p className="mb-8 text-base leading-normal text-cinza">
            Use seu e-mail e senha para acessar.
          </p>

          <div className="mb-5">
            <label htmlFor="email" className="mb-2 block text-[15px] font-bold">
              E-mail
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={setEmail(e.target.value)}
              placeholder="voce@gmail.com"
              autoComplete="email"
              className="h-12 w-full rounded-xl border-[1.5px] border-borda bg-white px-4 text-base text-texto outline-none focus:border-verde-escuro focus:ring-[3px] focus:ring-foco"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="senha" className="mb-2 block text-[15px] font-bold">
              Senha
            </label>
            <div className="relative">
              <input
                type={mostrarSenha ? "text" : "password"}
                name="senha"
                id="senha"
                value={senha}
                onChange={setSenha(e.target.value)}
                placeholder="Sua senha"
                autoComplete="current-password"
                className="h-12 w-full rounded-xl border-[1.5px] border-borda bg-white pl-4 pr-[52px] text-base text-texto outline-none focus:border-verde-escuro focus:ring-[3px] focus:ring-foco"
              />
              <button
                type="button"
                onClick={() => setMostrarSenha((v) => !v)}
                aria-label={mostrarSenha ? "Ocultar senha" : "Mostrar senha"}
                className="absolute right-1 top-0.5 flex size-11 cursor-pointer items-center justify-center rounded-[10px] text-[22px] text-cinza hover:bg-fundo"
              >
                {mostrarSenha ? <IoEyeOffOutline aria-hidden="true" /> : <IoEyeOutline aria-hidden="true" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="h-[52px] w-full cursor-pointer rounded-xl bg-laranja text-[17px] font-extrabold text-texto hover:bg-laranja-hover focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-verde-escuro"
          >
            Entrar
          </button>
        </form>
      </section>
    </main>
  );
}