describe("When click on button on main page", () => {
    it("should display on alert", () => {
        cy.visit("http://localhost:5173/");

        cy.get('[data-cy="h1"]').should("have.text", "Cypress Testing App");

        cy.get('[data-cy="button"]').should("have.text", "Alert");
        cy.get('[data-cy="button"').click();

        cy.get('[data-cy="message-alert"').contains("Sucesso");

    });
})