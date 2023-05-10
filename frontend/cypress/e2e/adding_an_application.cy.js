describe("Signing in", () => {

  before(() => {
    cy.signup("some", "one", "test@example.com", "password123")
    cy.login("test@example.com", "password123")
  })

  it("with valid credentials, redirects to '/profile'", () => {
    cy.url().should("include", "/profile");
  });

 
});