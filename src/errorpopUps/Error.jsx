import React from 'react'

import '../alertStyles/alertStyles.css'
import { useDispatch, useSelector } from 'react-redux'
import { eraseError } from '../actions/ui'
const Error = () => {

    const dispatch = useDispatch()

    const { msgError } = useSelector(state => state.ui)
    const closeModal = () =>{
      dispatch( eraseError( msgError ))
    }

    return (
        <>
            <div className='warning-advisor'  >
                <div className='warning-container-error'  >
                    <div className="exit-icon-container-error" >
                        <div className="exit-icon-circle " >
                            <span>
                                <p
                                 className="exit-icon-cross"
                                 onClick={closeModal}
                                 >  &#43; </p>
                            </span>
                        </div>
                    </div>
                    <div className='box-warning-error'  >
                        <div className='box-warning-sign-circle'  >
                        </div>
                        <span className='box-warning-cross-sign'> &#43; </span>
                    </div>
                    <div className='box-warning-text' >
                        <span>
                            <p className='warning-caution' > Upss </p>
                        </span>
                        <span>
                            <p className='warning-caution-advertising'> { msgError  } </p>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Error