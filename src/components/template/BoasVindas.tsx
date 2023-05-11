// https://unicode-table.com/en/1F44B/

import usuario from "@/data/constants/UsuarioFalso"

export default function BoasVindas() {
    return (
        <div className={`text-3xl font-black`}>
            Olá{' '}
            <span className="hidden sm:inline">
                {usuario?.nome?.split(' ')[0]}
            </span>{' '}
            👋
        </div>
    )
}