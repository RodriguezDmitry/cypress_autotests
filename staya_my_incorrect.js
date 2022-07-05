
describe('Тестирование staya, проверка логина', function () {
    
    it('Проверка валидации залогиybdfybz', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('bartfast@yandex.ru');
        cy.get('.auth-form > form > [type="password"]').type('wrongpass');
        cy.get('.auth-form__submit').click();
        cy.contains('Невозможно войти с предоставленными учетными данными.');

     

    })
    
})
