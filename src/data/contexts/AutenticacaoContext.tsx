import Usuario from "@/logic/core/usuario/Usuario"
import AutenticacaoFirebase from "@/logic/firebase/auth/Autenticacao"
import { createContext, useEffect, useState } from "react"

interface Autenticacao {
    carregando: boolean
    usuario: Usuario | null
    loginGoogle: () => Promise<Usuario | null>
    logout: () => Promise<void>
}

const AutenticacaoContext = createContext<Autenticacao>({
    carregando: true,
    usuario: null,
    loginGoogle: async () => null,
    logout: async () => {},
})

export default AutenticacaoContext

export function AutenticacaoProvider(props: any){
    const autenticacao = new AutenticacaoFirebase()

    const [carregando, setCarregando] = useState<boolean>(true)
    const [usuario, setUsuario] = useState<Usuario | null>(null)

    useEffect(() => {
        const cancelar = autenticacao.monitorar(function (usuario){
            setUsuario(usuario)
            setCarregando(false)
        })
        return () => cancelar()
    }, [])

    async function loginGoogle(): Promise<Usuario | null>{
        const usuario = await autenticacao.loginGoogle()
        setUsuario(usuario)
        return usuario
    }

    async function logout(): Promise<void> {
        await autenticacao.logout()
        setUsuario(null)
    }

    return(
        <AutenticacaoContext.Provider value={{
            carregando,
            usuario,
            loginGoogle,
            logout,
        }}>
            {props.children}
        </AutenticacaoContext.Provider>
    )
}