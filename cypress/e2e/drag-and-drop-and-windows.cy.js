describe('Drag and Drop and Windows', () => {
    it('Multiple Window', () => {
         
    });

    it('Drag and Drop', () => {
        cy.visit('https://the-internet.herokuapp.com/drag_and_drop') 
        
        const dataTransfer = new DataTransfer()

        cy.contains('A').trigger('dragstart', { dataTransfer })
        cy.contains('A').trigger('dragstart', { dataTransfer })
    });
});