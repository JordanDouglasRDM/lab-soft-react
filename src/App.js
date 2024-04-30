import './App.css';
import Relogio from "./Relogio";
import EfeitoDigitacao from "./EfeitoDigitacao";

function App() {
    return (
        <div className="App">
            <Relogio />
            <EfeitoDigitacao frase={"Olá, meu nome é Jordan Douglas"} velocidadeDigitacao={100} />
        </div>

    );
}

export default App;
