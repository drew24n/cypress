import LoginPage from "../../pageObjects/login.page";
import * as faker from "faker";

describe("Wrong login:", () => {
  const email = faker.internet.email();
  const password = faker.datatype.string(10);

  before(() => {
    LoginPage.open();
    LoginPage.signIn(email, password);
  });

  it("should show error for wrong email / password", () => {
    LoginPage.message.should(
      "include.text",
      "Oops! Please check the email address or password you entered and try again."
    );
  });
});
