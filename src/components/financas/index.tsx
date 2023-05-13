import Cabecalho from "../template/Cabecalho";
import Conteudo from "../template/Conteudo";
import Pagina from "../template/Pagina";
import { TransacaoVazia } from "@/logic/core/financas/Transacao";
import Lista from "./Lista";
import Sumario from "./Sumario";
import Formulario from "./Formulario";
import { IconPlus } from "@tabler/icons-react";
import useTrasacoes from "@/data/hooks/useFinancas";
import NaoEncontrado from "../template/NaoEncontrado";

export default function Financas() {
    const {
        transacoes, transacao, selecionar, salvar, excluir, cancelar
    } = useTrasacoes()

    return (
        <Pagina>
            <Cabecalho />
            <Conteudo className="gap-5">
                <Sumario transacoes={transacoes} />
                <div>
                    <button 
                        className="btn bg-blue-500" 
                        onClick={() => selecionar(TransacaoVazia)}
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
                        cancelar={cancelar}
                    />) : transacoes.length > 0 ? (
                    <Lista 
                        transacoes={transacoes}
                        selecionarTransacao={selecionar}    
                    />
                ) : (
                    <NaoEncontrado>
                        Nenhuma transação encontrada.
                    </NaoEncontrado>
                )}
            </Conteudo>
        </Pagina>
        )
}