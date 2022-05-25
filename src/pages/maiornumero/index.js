import { useState } from "react"
import axios from "axios";


export default function Index() {
const [numeros,setNumeros] =useState({});
const [numero,setNumero] = useState(0);
const [resposta,setResposta] = useState('');

function adicionar() {
    setNumeros([...numeros, numero])
    setNumero('');
} 

async function verificarMaior() {
   const resp = await axios.post('http://localhost:5000/dia2/maiorNumero', numeros);
   setResposta (resp.data.maior);
}

    return(
        <main>
            <h1> Maior Numero </h1>

            <div>
            Número: <input type='text' value={numero} onChange={e => setNumero(Number(e.target.value))} /> 
            <button onClick={adicionar}> Adicionar Número </button>
            </div>

            <div>
                {numeros.map(item =>
                 <div> {item} </div>    
                )}
            </div>

            <div>
              <button>Verificar</button> Maior Número é {resposta}
            </div>
        </main>
    )
}