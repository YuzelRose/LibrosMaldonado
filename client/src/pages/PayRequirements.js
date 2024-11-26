import React, { useState } from 'react'
import './css/pay_requirementes.css'
import fond from '../img/fond/loginfondo.png'
import { CompUserRequirements } from '../backend'

export default function PayRequirements() {
  return (
    <main id='pay_requirementes' style={{ backgroundImage: `url(${fond})` }}>
      <section id='requeriment_section'>
        <CompUserRequirements />
      </section>
    </main>
  )
}
