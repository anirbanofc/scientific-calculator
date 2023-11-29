import React from 'react'
import css from "../CSS/calculator.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDivide } from '@fortawesome/free-solid-svg-icons'
export default function inputOutput() {
  return (

    <div className='inputOutput'>
      <div className='Output'>0</div>
      <div> <button>DEG</button> <button>f-E</button></div>
      <div> <button>MC</button> <button>M+</button> <button>M-</button> <button>MS</button> </div>
      <div className='lastdiv'> <button>Trigonometry </button> <button> Function</button></div>
    </div>
  )
}
