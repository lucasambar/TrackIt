import { ThreeDots } from 'react-loader-spinner'
import CORES from '../constantes/Cores'

export default function Load () {

return (<ThreeDots
    type="circles"
    height="13"
    width="51"
    radius="9"
    color={CORES.branco}
    ariaLabel="loading"
    wrapperStyle
    wrapperClass
/>)

}
