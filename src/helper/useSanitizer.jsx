
import { useSelector, useDispatch} from "react-redux"

import { setError } from '../actions/ui';

export const isFormValid = ( email, usuario, password, password2  ) => {
    
    const { removeError } = useSelector(state => state.ui)

    const dispatch = useDispatch()

        const mailformat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

        if (usuario.trim().length === 0) {
            dispatch(setError('El usario deve ser mayor a 0 caracteres'))
            return false
        } else if (!email.match(mailformat)) {
            dispatch(setError('Formato de email invalido'))
            return false
        } else if (!password.length < 5 && password !== password2) {
            dispatch(setError('Password deve ser mayor a 5 caracteres o iguales'))
            return false

        }
        removeError()
        return true
    }

