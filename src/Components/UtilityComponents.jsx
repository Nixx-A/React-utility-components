import { faqs } from '../data/faq'
import { Accordion } from './Accordion'
import './UtilityComponents.css'
import { Sidebar } from './Sidebar'

export function UtilityComponents() {
  return (
    <>
      <h1 className='title'>Utility Components</h1>
      <div className='accordion-flex'>
        {faqs.map((faq, index) => (
          <Accordion key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
      <Sidebar />
    </>
  )
}
