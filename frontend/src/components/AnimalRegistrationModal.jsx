import { useEffect, useRef } from "react";
import { FiX } from "react-icons/fi";

const fields = [
  { name: "nome", label: "Nome", placeholder: "Ex.: Bob" },
  { name: "idade", label: "Idade (anos)", placeholder: "Ex.: 3", type: "number" },
  { name: "raca", label: "Raça", placeholder: "Ex.: Husky siberiano" },
  { name: "especie", label: "Espécie", placeholder: "Ex.: Cão" },
  { name: "tutor", label: "Tutor", placeholder: "Nome do tutor", optional: true },
  { name: "dono", label: "Dono", placeholder: "Nome do dono" },
];

export default function AnimalRegistrationModal({ onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (!dialog.open) dialog.showModal();

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  function closeModal() {
    dialogRef.current.close();
  }

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="cadastro-animal-titulo"
      aria-describedby="cadastro-animal-descricao"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) closeModal();
      }}
      className="fixed inset-0 m-auto max-h-[90dvh] w-[calc(100%_-_2rem)] max-w-xl overflow-y-auto rounded-3xl border-0 bg-white p-0 font-sans text-texto shadow-xl backdrop:bg-texto/50"
    >
      <div>
        <div className="relative bg-fundo p-6 pr-16 sm:p-8 sm:pr-16">
          <h2 id="cadastro-animal-titulo" className="text-2xl font-black">
            Cadastrar animal
          </h2>
          <p id="cadastro-animal-descricao" className="mt-2 text-sm leading-6 text-texto/70">
            Prévia do formulário. O cadastro ainda não está disponível e os dados não serão salvos.
          </p>
          <button
            type="button"
            onClick={closeModal}
            aria-label="Fechar cadastro"
            className="absolute right-4 top-4 flex size-10 cursor-pointer items-center justify-center rounded-full text-xl text-verde-escuro hover:bg-verde-claro focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-verde-escuro"
          >
            <FiX aria-hidden="true" />
          </button>
        </div>
        <form onSubmit={(event) => event.preventDefault()} className="p-6 sm:p-8">
          <p id="cadastro-animal-obrigatorios" className="mb-5 text-xs text-texto/70">
            Campos com * são obrigatórios. Tutor é opcional.
          </p>
          <div className="grid gap-5 sm:grid-cols-2">
            {fields.map(({ name, label, placeholder, type = "text", optional = false }) => (
              <div key={name}>
                <label htmlFor={`cadastro-animal-${name}`} className="mb-2 block text-sm font-bold">
                  {label}{" "}
                  {optional ? (
                    <span className="font-normal text-texto/65">(opcional)</span>
                  ) : (
                    <span aria-hidden="true" className="text-verde-escuro">*</span>
                  )}
                </label>
                <input
                  id={`cadastro-animal-${name}`}
                  name={name}
                  type={type}
                  required={!optional}
                  min={type === "number" ? 0 : undefined}
                  step={type === "number" ? 1 : undefined}
                  placeholder={placeholder}
                  aria-describedby="cadastro-animal-obrigatorios"
                  className="h-12 w-full rounded-xl border border-verde-claro bg-fundo px-4 text-sm outline-none focus:border-verde-escuro focus:ring-2 focus:ring-verde-claro"
                />
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={closeModal}
              className="cursor-pointer rounded-full border border-verde-escuro px-6 py-3 text-sm font-bold text-verde-escuro hover:bg-verde-claro focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-verde-escuro"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled
              className="cursor-not-allowed rounded-full bg-laranja px-6 py-3 text-sm font-bold text-texto opacity-50"
            >
              Cadastrar animal
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}
