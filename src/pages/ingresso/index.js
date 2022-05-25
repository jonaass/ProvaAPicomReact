import { useState } from "react"
import axios from "axios"


export default function Index() {
    const [QtdInteiras, setQtdInteiras] = useState(0);
    const [QtdMeias, setQtdMeias] = useState(0);
    const [diaSemana, setDiaSemana] = useState('');
    const [nacionalidade, setNacionalidade] = useState('');
    const [total, setTotal] = useState(0);

    async function calcular(params) {
        const resp = await axios.post('http://localhost:5000/dia2/ingressocinema', {
            qtdInteiras: QtdInteiras,
            qtdMeias: QtdMeias,
            diaSemana: diaSemana,   
            nacionalidade: nacionalidade
        })

        setTotal(resp.data.total);
    }

    return (
        <main>
            <h1> Ingresso </h1>

            <div>
                Qtd. Inteiras: <input type='text' value={QtdInteiras} onChange={e => setQtdInteiras(Number(e.target.value))} />
            </div>
            <div>
                Qtd. Meias: <input type='text' value={QtdMeias} onChange={e => setQtdMeias(Number(e.target.value))} />
            </div>
            <div>
                Dia da Semana: <input type='text' value={diaSemana} onChange={e => setDiaSemana(e.target.value)} />
            </div>
            <div>
                Nacionalidade: <input type='text' value={nacionalidade} onChange={e => setNacionalidade(e.target.value)} />
            </div>
            <div>
                <button onClick={calcular}>Calcular</button>
            </div>
            <div>
                O total é R$ {total}
            </div>
        </main>
    )
}