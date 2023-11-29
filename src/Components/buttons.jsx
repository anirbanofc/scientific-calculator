import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDivide } from '@fortawesome/free-solid-svg-icons'
import css from "../CSS/calculator.css"
import InputOutput from "./inputOutput"



export default function Buttons() {
    return (
        <div className='maindiv'>
            <div className='functionality'>
                <div className='buttons'>
                    <InputOutput />
                    <hr />
                    <div> <button>2<sup>nd</sup></button> <button> π</button> <button>e</button> <button>C</button> <button > Backspace </button> </div>
                    <div> <button>x<sup>2</sup></button> <button> 1/x</button> <button>|X|</button> <button>exp</button> <button >mod</button> </div>
                    <div> <button>2rootx<sup>nd</sup></button> <button> (</button> <button>)</button> <button>n!</button> <button >
                        <FontAwesomeIcon icon={faDivide} />
                    </button> </div>
                    <div> <button>x<sup>y</sup></button> <button className='numbers'> 7</button> <button className='numbers'>8</button> <button className='numbers'>9</button> <button >X</button> </div>
                    <div> <button>10<sup>x</sup></button> <button className='numbers'> 4</button> <button className='numbers'>5</button> <button className='numbers'>6</button> <button >-</button> </div>
                    <div> <button>log</button> <button className='numbers'> 1</button> <button className='numbers'>2</button > <button className='numbers' >3</button > <button >+</button> </div>
                    <div> <button>in</button> <button className='numbers'> +/-</button> <button className='numbers'>0</button> <button className='numbers'>.</button> <button className='equal'>=</button> </div>
                </div>
            </div>
            <aside className='aside'>
                <span className='history'>History</span>
                <span>Memory</span>
                <p>There's no history yet</p>
            </aside>
        </div>
    )
}
