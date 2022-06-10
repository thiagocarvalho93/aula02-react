

const Cadastro = () => {

    const handleClick = () => {
        alert("Cadastro enviado com sucesso.")
    }
    return(
        <div className="box">
            <label htmlFor="nome">Nome: 
                <input type="text" id="nome" placeholder="Insira seu nome" />
            </label>
            <br/>
            <label htmlFor="idade">Idade: 
                <input type="text" id="idade" placeholder="Insira sua idade"/>
            </label>
            <br />
            <label htmlFor="sexo">Sexo: 
                <input type="text" id="sexo" placeholder="Insira seu sexo"/>
            </label>
            <br />
            <label htmlFor="cidade">Cidade: 
                <input type="text" id="cidade" placeholder="Insira sua cidade"/>
            </label>
            <br />
            <button onClick={handleClick}>Enviar</button>
        </div>
    )
}

export default Cadastro