import React from 'react'

import '../alertStyles/alertStyles.css'

const NoRetorno = () => {
    return (
        <>
            <div className='warning-advisor'  >
                <div className='warning-container'  >
                    <div className="exit-icon-container" >
                        <div className="exit-icon-circle " >
                            <span>
                                <p className="exit-icon-cross">  &#43; </p>
                            </span>
                        </div>
                    </div>
                    <div className='box-warning'  >
                        <div className='box-warning-sign-circle-exclamation'  >
                            <span className='box-warning-exclamation-sign'> &#33;  </span>
                         </div>  
                    </div>
                    <div className='box-warning-text' >
                        <span>
                            <p className='warning-caution' > ¡Cuidado! </p>
                        </span>
                        <span>
                            <p className='warning-caution-advertising'> No podras volver atras </p>
                        </span>
                    </div>
                    <div className='button-box'  >
                        <span>
                            <button className='button-box-1  '  >
                                Borrar
                            </button>
                        </span>
                        <span>
                            <button className='button-box-2'  >
                                Cancelar
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NoRetorno