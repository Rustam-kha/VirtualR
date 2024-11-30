import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import Workflow from "./components/Workflow";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import SignIn from "./components/SignIn";
import CreateAccount from "./components/CreateAccount";
import Navbar from "./components/Navbar";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState(""); // "success" or "error"

  // Check localStorage for authentication status and user credentials
  useEffect(() => {
    const storedAuthStatus = localStorage.getItem("isAuthenticated");
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    // If the user has logged out or there's no stored authentication, keep the user logged out
    if (storedAuthStatus === "true" && storedEmail && storedPassword) {
      setIsAuthenticated(false); // Force the user to sign in again
    }
  }, []);

  // Handle Sign-In
  const handleSignIn = (email, password) => {
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    if (!storedEmail || !storedPassword) {
      setAlertMessage("You need to register first!");
      setAlertType("error");
    } else if (email === storedEmail && password === storedPassword) {
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", "true");
      setAlertMessage(""); // Clear any previous messages
      setAlertType(""); // Clear any previous messages
    } else {
      setAlertMessage("Invalid Credentials!");
      setAlertType("error");
    }
  };

  // Handle Account Creation
  const handleCreateAccount = (email, password) => {
    if (email && password) {
      // Store credentials but do not automatically authenticate
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);

      // Display success message after account creation
      setAlertType("success");
      setAlertMessage("Your account was created successfully!");

      // Display message for 60 seconds
      setTimeout(() => {
        setAlertMessage("");
        setAlertType("");
      }, 60000); // 60 seconds delay for the success message
    } else {
      setAlertMessage("Please fill out all fields.");
      setAlertType("error");
    }
  };

  // Handle Logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    setAlertMessage(""); // Clear alert message
    setAlertType("");
  };

  return (
    <div className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-black min-h-screen text-white">
      {/* Display Alert Message */}
      {alertMessage && (
        <div
          className={`alert fixed top-0 left-0 w-full py-3 text-center z-50 transition-all duration-500 ${
            alertType === "success"
              ? "bg-green-600 text-white"
              : "bg-red-600 text-white"
          } ${alertType === "success" ? "animate-fade-in" : "animate-shake"}`}
        >
          {alertMessage}
        </div>
      )}

      {/* Only render Navbar if authenticated */}
      {isAuthenticated && (
        <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      )}

      {/* Main Content */}
      {!isAuthenticated ? (
        <div className="flex flex-col items-center justify-center min-h-screen space-y-6">
          {isCreatingAccount ? (
            <CreateAccount
              onCreateAccount={handleCreateAccount}
              switchToSignIn={() => setIsCreatingAccount(false)}
            />
          ) : (
            <SignIn
              onSignIn={handleSignIn}
              switchToCreateAccount={() => setIsCreatingAccount(true)}
            />
          )}
        </div>
      ) : (
        <div className="max-w-7xl mx-auto pt-20 px-6">
          <div id="hero">
            <HeroSection />
          </div>
          <div id="features">
            <FeaturesSection />
          </div>
          <div id="workflow">
            <Workflow />
          </div>
          <div id="pricing">
            <Pricing />
          </div>
          <div id="testimonials">
            <Testimonials />
          </div>
        </div>
      )}

      {/* Only render Footer if authenticated */}
      {isAuthenticated && <Footer />}
    </div>
  );
}

export default App;
