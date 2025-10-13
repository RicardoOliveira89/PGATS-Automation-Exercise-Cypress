class Contatos {
    preencherCamposFormularioContato(name, email, subject, message){
        cy.get('[data-qa="name"]').type(name)
        cy.get('[data-qa="email"]').type(email)
        cy.get('[data-qa="subject"]').type(subject)
        cy.get('[data-qa="message"]').type(message)
    }

    anexarArquivo(file){
        cy.fixture(file).as('arquivo')
        cy.get('input[type=file]').selectFile('@arquivo')
        cy.get('[data-qa="submit-button"]').click()
    }

    verificarEnvioDeFormulario(){
        cy.get('.status').should('be.visible')
        cy.get('.status').should('have.text', 'Success! Your details have been submitted successfully.')
    }
}

export default new Contatos()