/** @jsx jsx */
import React from 'react'
import { jsx, Styled } from 'theme-ui'

const Details = () => (
 <>
   <Styled.h3 sx={{ mt: 0 }}>Visítanos</Styled.h3>
   <span>
     My Coffee Marbella
     <br />
     Calle Virgen del Pilar, 12
     <br />
     29602 Marbella
   </span>

   <Styled.h3>Contacto</Styled.h3>
   <span>+34 617778247</span>
   <div>
   <span>
     <Styled.a href='mailto:mycoffeemarbella@gmail.com'>mycoffeemarbella@gmail.com</Styled.a>
   </span>
   </div>
   <Styled.h3>Horario</Styled.h3>
   <span>Horario: 09:00 - 18:00 (Lunes cerrado)</span>

 </>
)

export default Details