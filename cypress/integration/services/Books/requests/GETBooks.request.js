/// <reference types="cypress" />

function allbooks() {
    return cy.request({
        method: 'GET',
        url: '/Books',
        failOnStatusCode: false
    })
}
export {allbooks};