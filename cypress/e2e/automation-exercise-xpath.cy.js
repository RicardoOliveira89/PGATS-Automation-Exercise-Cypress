/// <reference types="cypress" />

const timestamp = new Date().getTime()

describe('Automation Exercise', () => {

    beforeEach(() => {
        cy.visit('https://automationexercise.com')
        cy.xpath('//a[@href="/login"]').click()
    })

    it('Cadastrar um usuário', () => {
        cy.xpath('//*[@data-qa="signup-name"]').type('QA Tester')
        cy.xpath('//*[@data-qa="signup-email"]').type(`qatesteremail${timestamp}@email.com`)
        cy.contains('button', 'Signup').click()
        cy.xpath('//input[@type="radio" and @value="Mr"]').check()
        cy.xpath('//*[@id="password"]').type('12345', { log: false })
        cy.xpath('//*[@data-qa="days"]').select('18')
        cy.xpath('//*[@data-qa="months"]').select('April')
        cy.xpath('//*[@data-qa="years"]').select('1989')
        cy.xpath('//input[@type="checkbox" and @id="newsletter"]').check()
        cy.xpath('//input[@type="checkbox" and @id="optin"]').check()
        cy.xpath('//*[@id="first_name"]').type('Bob')
        cy.xpath('//*[@id="last_name"]').type('Marley')
        cy.xpath('//*[@id="company"]').type('PGATS')
        cy.xpath('//*[@id="address1"]').type('Avenida Teste, n 1234')
        cy.xpath('//*[@id="country"]').select('Canada')
        cy.xpath('//*[@id="state"]').type('Alberta')
        cy.xpath('//*[@id="city"]').type('Calgary')
        cy.xpath('//*[@data-qa="zipcode"]').type('87000')
        cy.xpath('//*[@data-qa="mobile_number"]').type('111 222 333')
        cy.xpath('//*[@data-qa="create-account"]').click()
        cy.url().should('includes', 'account_created')
        cy.contains('b', 'Account Created!')
        cy.xpath('//h2[@data-qa="account-created"]').should('have.text', 'Account Created!')
    })

    it('Login de Usuário com e-mail e senha corretos', () => {
        cy.xpath('//*[@data-qa="login-email"]').type('qatesteremail1759703873783@email.com')
        cy.xpath('//*[@data-qa="login-password"]').type('12345')
        cy.xpath('//*[@data-qa="login-button"]').click()
        cy.xpath('//i[contains(@class, "fa-user")]/parent::a').should('contain', 'QA Tester')
        cy.xpath('//a[@href="/logout"]').should('be.visible')
        cy.contains('b', 'QA Tester')
    })

    it('Login de Usuário com e-mail e senha incorretos', () => {
        cy.xpath('//*[@data-qa="login-email"]').type('incorreto@email.com')
        cy.xpath('//*[@data-qa="login-password"]').type('incorreto')
        cy.xpath('//*[@data-qa="login-button"]').click()
        cy.xpath('//p[contains(text(), "Your email or password is incorrect!")]').should('contain', 'Your email or password is incorrect!')
    })

    it('Logout de Usuário', () => {
        cy.xpath('//*[@data-qa="login-email"]').type('qatesteremail1759703873783@email.com')
        cy.xpath('//*[@data-qa="login-password"]').type('12345')
        cy.xpath('//*[@data-qa="login-button"]').click()
        cy.xpath('//i[contains(@class, "fa-user")]/parent::a').should('contain', 'QA Tester')
        cy.xpath('//a[@href="/logout"]').click()
        cy.url().should('contain', 'login')
    })

    it('Cadastrar usuário com e-mail existente no sistema', () => {
        cy.xpath('//*[@data-qa="signup-name"]').type('QA Tester')
        cy.xpath('//*[@data-qa="signup-email"]').type('qatesteremail1759703873783@email.com')
        cy.contains('button', 'Signup').click()
        cy.xpath('//p[contains(text(), "Email Address already exist!")]').should('contain', 'Email Address already exist!')
    })
})