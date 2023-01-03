
describe('Тестирование staya', function () {
    
    it('авторизация, позитивный сценарий', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('mchvell@yandex.ru');
        cy.get('.auth-form__submit').should('be.disabled')
        cy.get('.auth-form > form > [type="password"]').type('15331533Aa');
        cy.get('.auth-form__submit').click()
        cy.contains('Мои заказы')
         })     
})

it('авторизация, негативный сценарий', function () {
    cy.reload();
    cy.visit('https://staya.dog/');
    cy.get('.header-bottom__right--link').click();
    cy.get('.auth-form > form > [type="email"]').type('mchvell@yandex.ru');
    cy.get('.auth-form > form > [type="password"]').type('15331533A');
    cy.get('.auth-form__submit').click()
    cy.contains('Невозможно войти с предоставленными учетными данными.')
     })     
