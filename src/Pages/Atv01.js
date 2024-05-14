import Relogio from "../components/Relogio";
import EfeitoDigitacao from "../components/EfeitoDigitacao";

function Atv01() {
    return (
        <div className="Atv01 container text-center mt-lg-4">
            <div className="border rounded bg-secondary-subtle shadow-sm">
                <Relogio/>
                <EfeitoDigitacao frase={"Olá, meu nome é Jordan Douglas"} velocidadeDigitacao={100}/>
            </div>
        </div>
    );
}

export default Atv01;