import {useState} from 'react';

const Cadastro = () => {
    const[dados, setDados] = useState({nome:"", idade: "", sexo: "", cidade: ""})
    const[prompt, setPrompt] = useState("");

    const handleClick = () => { 
        let check = true;
        setPrompt("Favor preencher: ");
        if(dados.nome.length == 0){
            setPrompt(prevState => prevState + " nome ")
            check = false;
        }
        if(parseInt(dados.idade) <= 0){
            setPrompt(prevState => prevState + " idade ")
            check = false;
        }
        if(dados.sexo.length == 0){
            setPrompt(prevState => prevState + " sexo ")
            check = false;
        }
        if(dados.cidade.length == 0){
            setPrompt(prevState => prevState + " cidade ")
            check = false;
        }
        if(check){
            setDados({nome:"", idade: "", sexo: "", cidade: ""})
            alert("Cadastro enviado com sucesso!")
        }
    }

    return(
        <div className="box">
            <div>
                <input type="text" id="nome" value={dados.nome}
                onChange={(e) => setDados({...dados, nome: e.target.value})} placeholder="Insira seu nome" />
            </div>
            <br/>
            <div>
                <input type="text" id="idade" value={dados.idade}
                onChange={(e) => setDados({...dados, idade: e.target.value})} placeholder="Insira sua idade"/>
            </div>
            <br />
            <div>
                <input type="text" id="sexo" value={dados.sexo}
                onChange={(e) => setDados({...dados, sexo: e.target.value})} placeholder="Insira seu sexo"/>
            </div>
            <br />
            <div>
                <input type="text" id="cidade" value={dados.cidade}
                onChange={(e) => setDados({...dados, cidade: e.target.value})} placeholder="Insira sua cidade"/>
            </div>
            <h6>{prompt}</h6>
            <button onClick={handleClick}>Enviar</button>
        </div>


    )
}

export default Cadastro