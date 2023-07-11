
describe('Тестирование сайта "Тело Просит"', function () {
    it('Запись на услугу', function () {
         cy.visit('https://teloprosit.ru/');
         cy.get('#main-page-massage > .container > :nth-child(2) > :nth-child(2) > .service-item > .service-item--more > span').click();
         cy.get('#service-item-massage-sport > .modal-dialog > .modal-content > .modal-body > .modal-body--button > .round-btn > span').click();
         cy.get('.yCloseIcon').click();
         cy.get('#service-item-massage-sport > .modal-dialog > .modal-content > .modal-content--close > svg').click();
         cy.contains('.main-page--text-subheader')
     })
 })
 

