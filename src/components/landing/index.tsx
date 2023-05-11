import Pagina from "../template/Pagina";
import Cabecalho from "./cabecalho";
import Logo from "./comum/Logo";
import Destaque from "./destaque";
import Rodape from "./rodape";

export default function Landing(){
    return (
        <Pagina externa={true}>
            <Cabecalho />
            <Destaque />
            <Rodape />
        </Pagina>
    )
}