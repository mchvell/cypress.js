describe('Проверка авторизации', function () { 

    it('Позитивный кейс: верный мейл', function () {
        cy.visit('https://skillsetter.io/login');
        cy.get('#sendButton').should('be.disabled') 
        cy.get('#login_email').type('mchvellofc@gmail.com');
        cy.get('#sendButton').click(); 
        cy.contains('Проверьте почту');
        cy.get('.lp_panel_close > svg > circle');
    })
})

describe('Проверка авторизации', function () { 

    it('Негативный кейс: неверный мейл', function () {
        cy.reload();
        cy.visit('https://skillsetter.io/login');
        cy.get('#sendButton').should('be.disabled') 
        cy.get('#login_email').type('mchvell@gmail.com');
        cy.get('#sendButton').click(); 
        cy.contains('Нам не удалось найти учетную запись с таким адресом электронной почты.');
        cy.get('.lp_panel_close > svg > circle');
    })
})

describe('Проверка авторизации', function () { 

    it('Негативный кейс: мейл без @', function () {
        cy.reload();
        cy.visit('https://skillsetter.io/login');
        cy.get('#sendButton').should('be.disabled') 
        cy.get('#login_email').type('mchvellgmail.com');
        cy.get('#sendButton').click(); 
        cy.get('#sendButton').should('be.disabled');
    })
})