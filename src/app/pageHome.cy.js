import React from 'react'
import Home from './page'

describe('<Home />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Home name = "EBAC-QE"/>)
    cy.get('#name').should('have.text', 'EBAC-QE')
  })
})