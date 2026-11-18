import { useEffect, useRef } from "react";
import { FiX } from "react-icons/fi";
import AnimalAvatar from "./AnimalAvatar";

export default function AnimalProfileModal({ animal, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!animal) {
      if (dialog.open) dialog.close();
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.showModal();

    return () => {
      document.body.style.overflow = previousOverflow;
      if (dialog.open) dialog.close();
    };
  }, [animal]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="ficha-titulo"
      aria-describedby="ficha-descricao"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      className="fixed inset-0 m-auto max-h-[90dvh] w-[calc(100%_-_2rem)] max-w-lg overflow-y-auto rounded-3xl border-0 bg-white p-0 font-sans text-texto shadow-xl backdrop:bg-texto/50"
    >
      {animal && (
        <div>
          <div className="relative flex flex-col items-center bg-fundo px-6 pb-7 pt-10">
            <button
              type="button"
              onClick={onClose}
              aria-label="Fechar ficha"
              className="absolute right-4 top-4 flex size-10 cursor-pointer items-center justify-center rounded-full text-xl text-verde-escuro hover:bg-verde-claro focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-verde-escuro"
            >
              <FiX aria-hidden="true" />
            </button>
            <AnimalAvatar animal={animal} large />
            <p className="mt-5 text-xs font-bold uppercase tracking-widest text-verde-escuro">
              Ficha do animal
            </p>
            <h2 id="ficha-titulo" className="mt-2 text-3xl font-black capitalize">
              {animal.nome}
            </h2>
            <p id="ficha-descricao" className="mt-2 text-center text-sm text-texto/70">
              Informações de cadastro e responsáveis pelo animal.
            </p>
          </div>
          <dl className="grid grid-cols-1 gap-4 p-6 min-[400px]:grid-cols-2 sm:p-8">
            {[
              ["Nome", animal.nome],
              ["Idade", `${animal.idade} ${animal.idade === 1 ? "ano" : "anos"}`],
              ["Espécie", animal.especie],
              ["Raça", animal.raca],
              ["Tutor", animal.tutor],
              ["Dono", animal.dono],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-verde-claro p-4">
                <dt className="text-xs font-medium text-texto/65">{label}</dt>
                <dd className="mt-1 break-words font-bold capitalize">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}
    </dialog>
  );
}
