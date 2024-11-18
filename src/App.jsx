export default function App() {
    return(
        <div className="id">
            <h1>Biblioteca de Jogos</h1>
            <form>
                <div>
                    <label htmlFor="title">Título: </label>
                    <input type="text" name="title" id="title" />
                </div>
                <div>
                    <label htmlFor="cover">Capa: </label>
                    <input type="text" name="cover" id="cover" />
                </div>
                <button type="submit">Adicionar à biblioteca</button>
            </form>
        </div>
    )
}