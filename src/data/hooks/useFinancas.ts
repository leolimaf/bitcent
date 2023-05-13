import Transacao from "@/logic/core/financas/Transacao"
import { useEffect, useState } from "react"
import transacoesFalsas from "../constants/transacoesFalsas"
import Id from "@/logic/core/comum/Id"

export default function useTrasacoes(){
    const [transacoes, setTransacoes] = useState<Transacao[]>(transacoesFalsas)
    const [transacao, setTransacao] = useState<Transacao | null>(null)

    useEffect(buscarTransacao, [])

    function buscarTransacao(){
        setTransacoes(transacoesFalsas)
    }

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

    function selecionar(transacao: Transacao){
        setTransacao(transacao)
    }

    function cancelar(){
        setTransacao(null)
    }

    return {
        transacoes,
        transacao,
        salvar,
        excluir,
        selecionar,
        cancelar
    }
}