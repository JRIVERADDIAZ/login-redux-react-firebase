import React from 'react'

import '../alertStyles/alertStyles.css'

const AccionCompletada = () => {
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
                        <div className='box-warning-sign-circle'  >
                        </div>
                        <span className='box-warning-checkmark-sign'> &#10004; </span>
                    </div>
                    <div className='box-warning-text' >
                        <span>
                            <p className='warning-caution' > ¡Vamos! </p>
                        </span>
                        <span>
                            <p className='warning-caution-advertising'> Todo ha salido bien :) </p>
                        </span>
                    </div>
                    <div className='button-box'  >
                        <span>
                            <button className='button-box-completado'  >
                                Cerrar pestaña
                            </button>
                        </span>
                    </div>
                </div>
            </div>
    </>
  )
}

export default AccionCompletada