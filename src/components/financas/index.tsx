import transacoesFalsas from "@/data/constants/transacoesFalsas";
import Cabecalho from "../template/Cabecalho";
import Conteudo from "../template/Conteudo";
import Pagina from "../template/Pagina";
import { useState } from "react";
import Transacao, { TransacaoVazia } from "@/logic/core/financas/Transacao";
import Lista from "./Lista";
import Sumario from "./Sumario";
import Formulario from "./Formulario";
import Id from "@/logic/core/comum/Id";
import { IconPlus } from "@tabler/icons-react";

export default function Financas() {
    const [transacoes, setTransacoes] = useState<Transacao[]>(transacoesFalsas)
    const [transacao, setTransacao] = useState<Transacao | null>(null)

    function salvar(transacao: Transacao){
        const outras = transacoes.filter(t => t.id !== transacao.id)
        setTransacoes([
            ...outras,
            {...transacao, id: transacao.id ?? Id.novo()}
        ])
        setTransacao(null)
    }

    function excluir(transacao: Transacao){
        const outras = transacoes.filter(t => t.id !== transacao.id)
        setTransacoes(outras)
        setTransacao(null)
    }

    return (
        <Pagina>
            <Cabecalho />
            <Conteudo className="gap-5">
                <Sumario transacoes={transacoes} />
                <div>
                    <button 
                        className="btn bg-blue-500" 
                        onClick={() => setTransacao(TransacaoVazia)}
                    >
                        <IconPlus />
                        <span>Nova Transação</span>
                    </button>
                </div>
                {transacao ? (
                    <Formulario 
                        transacao={transacao}
                        salvar={salvar}
                        excluir={excluir}
                        cancelar={() => setTransacao(null)}
                    />) : (
                    <Lista 
                        transacoes={transacoes}
                        selecionarTransacao={setTransacao}    
                    />
                )}
            </Conteudo>
        </Pagina>
        )
}