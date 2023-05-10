describe("Signing in", () => {
  beforeEach(() => {
    cy.signup("some", "one", "test@example.com", "password123");
    cy.login("test@example.com", "password123");
  });

  it("with valid credentials, redirects to '/profile'", () => {
    cy.url().should("include", "/profile");
  });

  it("displays a new application when added", () => {
    cy.get("#applicationModal").click();
    cy.get("#company").type("Example Company");
    cy.get("#jobTitle").type("Example Job Title");
    cy.get("#location").type("Example Location");
    cy.get("#link").type("http://example.com");
    cy.get("#jobDetails").type("Example job details");
    cy.get("#applicationStatus").select("Applied for role");
    cy.get("#submit-application").click();
    cy.contains("Company Example");
    cy.get("#deleteApplicationButton").click();
    cy.get("#submitDeleteApplicationButton").click();
  });

  it("displays the details of an application when details button is clicked", () => {
    cy.get("#applicationModal").click();
    cy.get("#company").type("Example Company");
    cy.get("#jobTitle").type("Example Job Title");
    cy.get("#location").type("Example Location");
    cy.get("#link").type("http://example.com");
    cy.get("#jobDetails").type("Example job details");
    cy.get("#applicationStatus").select("Applied for role");
    cy.get("#submit-application").click();
    cy.get("#updateButton").click();
    cy.contains("Application details");
    cy.get("#closeModal").click();
    cy.get("#deleteApplicationButton").click();
    cy.get("#submitDeleteApplicationButton").click();
  });

  it("allows user to add an interview date", () => {
    cy.get("#applicationModal").click();
    cy.get("#company").type("Example Company");
    cy.get("#jobTitle").type("Example Job Title");
    cy.get("#location").type("Example Location");
    cy.get("#link").type("http://example.com");
    cy.get("#jobDetails").type("Example job details");
    cy.get("#applicationStatus").select("Invited to interview");
    cy.get("#interviewDate").type("2023-05-12");
    cy.get("#submit-application").click();
    cy.contains("12/05/2023");
    cy.get("#deleteApplicationButton").click();
    cy.get("#submitDeleteApplicationButton").click();
  });
});
