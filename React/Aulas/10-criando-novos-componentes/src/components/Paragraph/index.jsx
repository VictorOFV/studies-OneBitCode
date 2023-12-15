 function Paragraph () {
    const login = true;

    return (
        <p style={{ color: login ? "#14c714" : "#d30000"}}>Logado?{login ? "Sim" : "Não"}</p>
    )
}

export default Paragraph