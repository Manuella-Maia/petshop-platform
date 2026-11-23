export default function NotFound() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-fundo text-texto flex items-center justify-center px-6 py-12">
      {/* Elementos decorativos de fundo (Verde e Amarelo) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-verde-claro opacity-80 blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-yellow-200 opacity-70 blur-2xl"
      />

      {/* Card principal */}
      <section className="relative z-10 w-full max-w-xl rounded-3xl bg-branco p-8 sm:p-12 text-center shadow-xl border border-verde-claro">
        {/* Badge superior */}
        <span className="inline-flex items-center gap-2 rounded-full bg-yellow-300 px-4 py-1 text-xs sm:text-sm font-bold uppercase tracking-wider text-texto shadow-xs">
          <span className="h-2 w-2 rounded-full bg-verde" />
          Erro 404
        </span>

        {/* Número 404 estilizado */}
        <div className="my-6 flex items-center justify-center select-none">
          <span className="text-7xl sm:text-9xl font-black tracking-tight text-verde">
            4
          </span>

          {/* Ícone central em SVG (Bússola/Folha em Verde, Amarelo e Branco) */}
          <div className="mx-2 sm:mx-3 flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-yellow-400 p-3 shadow-md ring-4 ring-verde-claro">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-12 w-12 sm:h-14 sm:w-14 text-branco"
              aria-hidden="true"
            >
              <circle
                cx="12"
                cy="12"
                r="9"
                stroke="#26662f"
                strokeWidth="2.2"
                fill="#ffffff"
              />
              <polygon
                points="15.5,8.5 13.5,13.5 8.5,15.5 10.5,10.5"
                fill="#3a9f4b"
                stroke="#26662f"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="12" r="1.3" fill="#facc15" />
            </svg>
          </div>

          <span className="text-7xl sm:text-9xl font-black tracking-tight text-verde">
            4
          </span>
        </div>

        {/* Textos */}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-texto tracking-tight">
          Ops! Página não encontrada
        </h1>
        <p className="mt-3 text-base text-texto/75 leading-relaxed max-w-md mx-auto">
          O endereço que você acessou pode ter sido removido, renomeado ou não
          está disponível no momento.
        </p>

        {/* Botões de ação */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          {/* Troque <a> por <Link to="/"> se estiver usando React Router */}
          <a
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-verde px-6 py-3.5 text-sm font-bold text-branco shadow-md transition-all duration-200 hover:bg-verde-escuro focus:outline-none focus:ring-4 focus:ring-verde-claro"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5z" />
            </svg>
            Voltar ao início
          </a>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-300 px-6 py-3.5 text-sm font-bold text-texto transition-all duration-200 hover:bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-200 cursor-pointer"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Página anterior
          </button>
        </div>
      </section>
    </main>
  );
}