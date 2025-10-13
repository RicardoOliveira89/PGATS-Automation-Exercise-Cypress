/// <reference types="cypress" />

import { faker } from '@faker-js/faker'
import { getRandomEmail } from '../support/helpers'
import userData from '../fixtures/exemple.json'
import menu from '../modules/menu'
import login from '../modules/login'
import cadastro from '../modules/cadastro'
import contato from '../modules/contato'

describe('Automation Exercise', () => {

    beforeEach(() => {
        cy.visit('/')
        menu.navegarParaLogin()
    })

    it('Cadastrar um usuário', () => {
        const firstName = faker.person.firstName()
        const lastName = faker.person.lastName()
        login.preencherFormularioDePreCadastro(`${firstName} ${lastName}`, getRandomEmail())
        cadastro.preencherFormularioDeCadastroCompleto('Mr', userData.password, '18', 'April', '1989', faker.person.firstName(), faker.person.lastName(), `PGATS ${faker.company.name()}`, faker.location.streetAddress(), 'Canada', faker.location.state(), faker.location.city(), faker.location.zipCode(), userData.mobileNumber)
        cadastro.verificarCadastroComSucesso()
    })

    it('Login de Usuário com e-mail e senha corretos', () => {
        login.preencherFormularioDeLogin(userData.email, userData.password)
        login.verificarLoginComSucesso(userData.name)
    })

    it('Login de Usuário com e-mail e senha incorretos', () => {
        login.preencherFormularioDeLogin(userData.email, 'senhaerrada')
        login.verificarLoginSemSucesso()
    })

    it('Logout de Usuário', () => {
        login.preencherFormularioDeLogin(userData.email, userData.password)
        menu.efetuarLogout()
        login.verificarLogoutComSucesso()
    })

    it('Cadastrar usuário com e-mail existente no sistema', () => {
        const firstName = faker.person.firstName()
        const lastName = faker.person.lastName()
        login.preencherFormularioDePreCadastro(`${firstName} ${lastName}`, userData.email)
        login.verificarEmailExistente()
    })

    it('Enviar um formulário de contato com upload de arquivo', () => {
        menu.navegarParaContatos()
        contato.preencherCamposFormularioContato(userData.name, userData.email, userData.subject, userData.message)
        contato.anexarArquivo('Anexo teste.pdf')
        contato.verificarEnvioDeFormulario()
    })

})