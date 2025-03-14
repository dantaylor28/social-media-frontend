import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { CurrentUserProvider } from "../../contexts/CurrentUserContext";
import NavBar from "../NavBar";

test("NavBar renders correctly", () => {
  render(
    <Router>
      <NavBar />
    </Router>
  );
  //   screen.debug()
  const SignInLink = screen.getByRole("link", { name: "Sign In" });
  expect(SignInLink).toBeInTheDocument();
});

test("Renders link to user profile", async () => {
  render(
    <Router>
      <CurrentUserProvider>
        <NavBar />
      </CurrentUserProvider>
    </Router>
  );

  const ProfileLink = await screen.findByText("Profile");
  expect(ProfileLink).toBeInTheDocument();
});

test("Renders Sign In & Create Account links upon sign out", async () => {
  render(
    <Router>
      <CurrentUserProvider>
        <NavBar />
      </CurrentUserProvider>
    </Router>
  );

  const SignOutLink = await screen.findByRole("link", { name: "Sign Out" });
  fireEvent.click(SignOutLink);

  const SignInLink = await screen.findByText("Sign In");
  const CreateAccountLink = await screen.findByText("Create Account");

  expect(SignInLink).toBeInTheDocument();
  expect(CreateAccountLink).toBeInTheDocument();
});
