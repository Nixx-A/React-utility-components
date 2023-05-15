/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react'
import './Accordions.css'

export function Accordion({ question, answer }) {
  const [active, setActive] = useState(false)

  const contentRef = useRef(null)

  useEffect(() => {
    contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : '0px'
  }, [contentRef, active])

  const toggleAccordion = () => {
    setActive(!active)
  }
  return (
    <>
      <div className='App'>
        <div>
          <button
            className={`question-section ${active}`}
            onClick={toggleAccordion}>
            <div>
              <div className='question-align'>
                <h4 className='question-style'>{question}</h4>
                {/* <FiPlus
                  className={active ? `question-icon rotate` : `question-icon`}
                /> */}
              </div>
              <div
                ref={contentRef}
                className={active ? `answer answer-divider` : `answer`}>
                <p>{answer}</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </>
  )
}

/* 
        Una forma de hacerlo mas sencillo es con el elemento details. pero queria probar a hacerlo con los hooks. 
        Con solo estas sintaxis ya tendrias un acordion basico
        <details>
          <h1>Lorem, ipsum.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </details>
*/
