import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
export const Beverage = () => (
  <div>
    <FontAwesomeIcon icon="check-square" />
    Favorite beverage: <FontAwesomeIcon icon="coffee" />
  </div>
)