import {useState} from 'react'

export const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState)

    const reset = () => {
        setValues(initialState)
    }

    const handleInputChange = ({target}) => {
        setValues({
            ...values,
            [target.name]: target.value
        })
    }

    return [values, handleInputChange, reset]
}


/*
    Recibe un objeto por props y los inicializa en su state llamado values
    Luego llama a handleInputChange que es una funcion que toma como
    parametro el target (viene del evento del form) y con eso
    captura los nuevos valores seleccionados por el NAME del input
    GUARDANDO los otros valores del objeto gracias al SPREAD ...
*/