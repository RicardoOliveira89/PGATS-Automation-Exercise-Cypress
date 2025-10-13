class Menu {
    navegarParaLogin(){
        cy.get('a[href="/login"]').click()
    }

    navegarParaContatos(){
         cy.get('a[href*=contact]').click()
    }

    efetuarLogout(){
        cy.get('a[href="/logout"]').click()
    }
}

export default new Menu()