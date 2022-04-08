
  describe("Calculator addition", () => {
    it("Test addition", () => {
      cy.visit("http://localhost:3000");
      cy.contains("1").click();
      cy.contains("+").click();
      cy.contains("2").click();
      cy.contains("=").click();
      cy.get(".result").contains("3");
    });
  });

  describe("Calculator substraction", () => {
    it("Test substraction", () => {
      cy.visit("http://localhost:3000");
      cy.contains("3").click();
      cy.contains("-").click();
      cy.contains("2").click();
      cy.contains("=").click();
      cy.get(".result").contains("1");
    });
  });

  describe("Calculator square", () => {
    it("Test square", () => {
      cy.visit("http://localhost:3000");
      cy.contains("9").click();
      cy.contains("√x").click();
      cy.contains("=").click();
      cy.get(".result").contains("3");
    });
  });
  
  