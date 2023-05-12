import transacoesFalsas from "@/data/constants/transacoesFalsas";
import Cabecalho from "../template/Cabecalho";
import Conteudo from "../template/Conteudo";
import Pagina from "../template/Pagina";
import { useState } from "react";
import Transacao from "@/logic/core/financas/Transacao";
import Lista from "./Lista";
import Sumario from "./Sumario";

export default function Financas() {
    const [transacoes, setTransacoes] = useState<Transacao[]>(transacoesFalsas)

    return (
        <Pagina>
            <Cabecalho />
            <Conteudo className="gap-5">
                <Sumario transacoes={transacoes} />
                <Lista transacoes={transacoes} />
            </Conteudo>
        </Pagina>
        )
}