import { useState } from "react";
import { useEffect } from "react";
import { FaPaw } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const especies = [
    'Canino',
    'Felino',
    'Ave',
    'Outro'
]

const porte = [
    'Pequeno',
    'Médio',
    'Grande'
]

const racas = [];

export default function AnimalRegistration() {
    //Variaveis para armazenar o valor dos campos no formulario

    const navigate = useNavigate();
    const [nome, setNome] = useState('');
    const [especie, setEspecie] = useState('');
    const [raca, setRaca] = useState('');
    const [porte, setPorte] = useState('');
    const [data, setData] = useState(''); //nomeei a variavel como data para reduzir o tamanho do nome (para data de nascimento do animal)

    //Use efect para pegar sincronizar o componente com o consumo da api para
    //para facilitar o uso de pesquisa nas raças

    //O useEffect só sera rodado quando o componente for montado
    useEffect(() => {
        racas.length = 0;

        async function dadosGatos() {
            const resposta = await fetch("https://api.thecatapi.com/v1/breeds", {
                headers: { "x-api-key": "live_hUYlZFZ83iQeEyxLs8pMk4xgXW0DYTV846w8CJUPSjzifgdMDDkkkEKBNpuUhDwW" },
            });
            const data = await res.json();
            racas.push(...data);
        }

        async function dadosCanino() {

        }

        async function dadosAve() {

        }


    }, []);
    function handleSubmit(e) {
        e.preventDefault()
    }

    return (
        <>
            <main className="grid min-h-screen bg-white font-sans text-texto min-[860px]:grid-cols-2">
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
                            Conte quem é o seu pet.
                        </h2>
                        <p className="text-lg leading-normal text-verde-claro">
                            Com o cadastro pronto, fica mais fácil agendar banho e tosa e cuidar de cada detalhe dele
                        </p>
                    </article>

                    <div aria-hidden="true" className="relative hidden h-px min-[860px]:block" />
                </section>
                <section className="flex items-center justify-center bg-white px-5 py-8 min-[860px]:px-8 min-[860px]:py-12">
                    <form method="post" onSubmit={handleSubmit} className="w-full max-w-[400px]">
                        <h2 className="mb-2 text-[32px] font-extrabold text-verde-profundo">Cadastrar pet</h2>
                        <p className="mb-8 text-base leading-normal text-cinza">
                            Preencha os dados do seu animal de estimação.
                        </p>

                        <div>
                            <label htmlFor="nome">
                                Nome do pet
                            </label>
                            <input type="text" name="nome" id="nome" value={nome} onChange={setNome(e.target.value)} placeholder="Ex.: Thor" required />
                        </div>

                        <div>
                            <div>
                                <label htmlFor="especie">
                                    Espécie
                                </label>
                                <select name="especie" id="especie" value={especie} onSelect={(e) => setEspecie(e.target.value)}>

                                </select>
                            </div>
                            <div>
                                <label htmlFor="raca">Raça</label>
                                <input type="text" placeholder="Ex.: Golden Retriever" name="raca" id="raca" value={raca} onChange={(e) => setRaca(e.target.value)} required/>
                            </div>
                            <div>
                                <label htmlFor="porte">Porte</label>
                                <select name="porte" id="porte">
                                    {
                                        porte.forEach(element => {
                                            
                                        })
                                    }
                                </select>
                            </div>
                            <div>
                                <label htmlFor="data">
                                    Data de nascimento
                                </label>
                                <input type="date" name="data" id="data" required />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="observacoes">
                                Observações
                            </label>
                            <textarea name="observacoes" id="observacoes" cols={20} rows={19} placeholder="Alergias, temperamento, cuidados especiais"></textarea>
                        </div>

                        <button
                            type="submit"
                            className="h-[52px] w-full cursor-pointer rounded-xl bg-laranja text-[17px] font-extrabold text-texto hover:bg-laranja-hover focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-verde-escuro"
                        >
                            Cadastrar pet
                        </button>
                    </form>
                </section>
            </main>
        </>
    )
}