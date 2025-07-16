

import ContactInfo from "./contact-ui/ContactInfo"
import Form from "./contact-ui/Form"
import Map from "./contact-ui/Map"
import OurOffices from "./contact-ui/OurOffices"


const Contacto = () => {
  return (
    <section className='mt-20 text-text w-full px-8 grid grid-cols-1 md:grid-cols-2 tracking-normal' style={{letterSpacing:'-0.099em'}}>
        <ContactInfo />
        <Form />  
        <Map />
        <OurOffices />
    </section>
  )
}

export default Contacto
