
describe('My First Test', function() {
    it('Visit the index page ', function() {

      cy.visit('http://localhost:3000');
      cy.title().should('include', 'Express File Upload');
      cy.wait(2000);

    })

    it('upload  the image ', () => {

      const fileName = 'code-fun.jpeg';        
      const fileType = 'image/jpeg';        
      const fileInput = 'input[type=file]';        
      cy.upload_file(fileName, fileType, fileInput);      
      cy.wait(2000);
      cy.get('input[type="submit"]').click();
      cy.wait(2000);

    })

    it('check the end page', () => {

      cy.get('body').contains('Complete! Check out your public/photo-storage folder');
      cy.wait(2000);

    })

    it('Go back', () => {
      cy.get('a').click()
      cy.wait(2000);

    })

    it('index page  again', function() {
      
      cy.title().should('include', 'Express File Upload');
      cy.wait(2000);

    })

});