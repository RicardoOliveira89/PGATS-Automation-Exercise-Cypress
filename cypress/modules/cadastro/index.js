class Cadastro {
    preencherFormularioDeCadastroCompleto(pronoun, pass, day, month, year, firstname, lastname, companyname, adress, country, state, city, zipcode, mobilenumber){
        cy.get('input[type="radio"]').check(pronoun)
        cy.get('#password').type(pass, { log: false })
        cy.get('[data-qa="days"]').select(day)
        cy.get('[data-qa="months"]').select(month)
        cy.get('[data-qa="years"]').select(year)
        cy.get('input[type="checkbox"]#newsletter').check()
        cy.get('input[type="checkbox"]#optin').check()
        cy.get('#first_name').type(firstname)
        cy.get('#last_name').type(lastname)
        cy.get('#company').type(companyname)
        cy.get('#address1').type(adress)
        cy.get('#country').select(country)
        cy.get('#state').type(state)
        cy.get('#city').type(city)
        cy.get('[data-qa="zipcode"]').type(zipcode)
        cy.get('[data-qa="mobile_number"]').type(mobilenumber)
        cy.get('[data-qa="create-account"]').click()
    }

    verificarCadastroComSucesso(){
        cy.url().should('includes', 'account_created')
        cy.contains('b', 'Account Created!')
        cy.get('h2[data-qa="account-created"]').should('have.text', 'Account Created!')
    }
}

export default new Cadastro()