import { getInitials } from "../utils/animals";

export default function AnimalAvatar({ animal, large = false }) {
  return (
    <span
      aria-hidden="true"
      className={`flex shrink-0 items-center justify-center rounded-full font-black ${large ? "size-24 text-4xl" : "size-16 text-3xl"} ${animal.especie === "gato" ? "bg-laranja-claro text-amber-800" : "bg-verde-claro text-verde-escuro"}`}
    >
      {getInitials(animal.nome)}
    </span>
  );
}
