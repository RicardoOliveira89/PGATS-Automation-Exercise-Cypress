class Login {
    preencherFormularioDePreCadastro(name, email) {
        cy.get('[data-qa="signup-name"]').type(name)
        cy.get('[data-qa="signup-email"]').type(email)
        cy.contains('button', 'Signup').click()
    }

    preencherFormularioDeLogin(user, pass){
        cy.get('[data-qa="login-email"]').type(user)
        cy.get('[data-qa="login-password"]').type(pass)
        cy.get('[data-qa="login-button"]').click()

    }

    verificarLoginComSucesso(user){
        cy.get('i.fa-user').parent('a').should('contain', user)
        cy.get('a[href="/logout"]').should('be.visible')
        cy.contains('b', user)
    }

    verificarLoginSemSucesso(){
        cy.get('p').contains('Your email or password is incorrect!').should('be.visible')
    }

    verificarLogoutComSucesso(){
        cy.url().should('contain', 'login')
    }

    verificarEmailExistente(){
        cy.get('p').contains('Email Address already exist!').should('be.visible')
    }
}

export default new Login()