import { useState } from "react";

const CreateAccount = ({ onCreateAccount, switchToSignIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateAccount(email, password);
  };

  // Reset input fields when switching to Sign In page
  const handleSwitchToSignIn = () => {
    setEmail(""); // Clear email field
    setPassword(""); // Clear password field
    switchToSignIn();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-6 px-6">
      <h2 className="text-4xl text-white font-semibold">Create Account</h2>
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
          Create Account
        </button>
      </form>
      <p className="text-white text-center">
        Already have an account?{" "}
        <button
          onClick={handleSwitchToSignIn}
          className="text-blue-400 hover:underline"
        >
          Sign In
        </button>
      </p>
    </div>
  );
};

export default CreateAccount;
