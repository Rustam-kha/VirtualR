import { useState } from "react";

const SignIn = ({ onSignIn, switchToCreateAccount }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignIn(email, password);
  };

  // Reset input fields when switching to Create Account page
  const handleSwitchToCreateAccount = () => {
    setEmail(""); // Clear email field
    setPassword(""); // Clear password field
    switchToCreateAccount();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-6 px-6">
      <h2 className="text-4xl text-white font-semibold">Sign In</h2>
      <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-sm">
        <input
          type="email"
          className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full py-3 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Sign In
        </button>
      </form>
      <p className="text-white text-center">
        Don't have an account?{" "}
        <button
          onClick={handleSwitchToCreateAccount}
          className="text-blue-400 hover:underline"
        >
          Create Account
        </button>
      </p>
    </div>
  );
};

export default SignIn;
