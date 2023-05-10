import LoginForm from './LoginForm'
const navigate = () => {}

describe("Logging in", () => {
  it("calls the /tokens endpoint", () => {
    cy.mount(<LoginForm navigate={navigate}/>)

    cy.intercept('POST', '/tokens', { token: "fakeToken" }).as("loginRequest")

    cy.get("#email").type("some@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();
    cy.wait('@loginRequest').then( interception => {
      expect(interception.response.body.token).to.eq("fakeToken")
    })
  })
})
