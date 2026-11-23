export function normalizeSearch(value) {
  return value
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLocaleLowerCase("pt-BR")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim();
}

export function filterAnimals(animals, search = "", species = "") {
  const terms = normalizeSearch(search).split(" ").filter(Boolean);

  return animals.filter((animal) => {
    if (species && animal.especie !== species) return false;

    const fields = [animal.nome, animal.raca, animal.tutor, animal.dono].map(
      normalizeSearch,
    );

    return terms.every((term) => fields.some((field) => field.includes(term)));
  });
}

export function getInitials(name) {
  const words = name.trim().split(/\s+/).filter(Boolean);
  return [words[0], words.length > 1 ? words.at(-1) : ""]
    .map((word) => (word ? Array.from(word)[0] : ""))
    .join("")
    .toLocaleUpperCase("pt-BR");
}

export function getRaca(racas,raca){queueMicrotask
    const result = racas.filter(r => r.includes(raca).toLowerCase() === raca.toLowerCase());
    return result;
}