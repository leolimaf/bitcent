import Image from 'next/image'
import loading from '../../../public/loading.gif'
import Pagina from './Pagina'

export default function Carregando() {
    return (
        <Pagina externa classname='justify-center items-center'>
            <Image
                priority
                src={loading}
                alt="loading"
                width={40}
                height={40}
            />
        </Pagina>
    )
}