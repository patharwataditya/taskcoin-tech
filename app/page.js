// app/page.js
'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from './context/AuthContext';

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const router = useRouter();
  const { login } = useAuth();

  const handleLogin = async () => {
    const newErrors = {};

    if (!username.trim()) {
      newErrors.username = "Username is required.";
    }
    if (!password.trim()) {
      newErrors.password = "Password is required.";
    }

    setErrors(newErrors);
    setApiError("");

    if (Object.keys(newErrors).length === 0) {
      setLoading(true);

      try {
        const response = await fetch(
          "https://ovigrtovg9.execute-api.ap-south-1.amazonaws.com/test/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userId: username,
              password: password,
            }),
          }
        );

        const data = await response.json();

        if (response.status === 200) {
          // Store user data in context and localStorage
          login({ userId: username, ...data });
          router.push("/home");
        } else {
          setApiError(data.error || "Login failed. Please try again.");
        }
      } catch (error) {
        setApiError("Something went wrong. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
  };

  const handleRedirectToSignup = () => {
    router.push("/signup");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-customYellow-200 overflow-hidden">
      
      <div className="absolute top-10 text-6xl font-extrabold text-black neo-brutalism-style">
        Task Coin
      </div>

      <div className="bg-customYellow-300 p-8 rounded-lg shadow-[8px_8px_0px_0px_black] w-80 border-[1px] border-black">
        <h1 className="text-3xl font-bold text-center mb-6 text-black">Login</h1>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 border-2 border-black rounded-md shadow-[4px_4px_0px_0px_black] focus:outline-none focus:ring-1 focus:ring-customYellow-300 bg-customYellow-200 text-black"
          />
          {errors.username && (
            <p className="text-red-500 text-sm">{errors.username}</p>
          )}
        </div>

        <div className="mb-6">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border-2 border-black rounded-md shadow-[4px_4px_0px_0px_black] focus:outline-none focus:ring-1 focus:ring-customYellow-300 bg-customYellow-200 text-black"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}
        </div>

        {apiError && <p className="text-red-500 text-sm mb-4">{apiError}</p>}

        <button
          onClick={handleLogin}
          className={`w-full p-3 bg-customGreen-200 text-black font-bold uppercase border-2 border-black rounded-md shadow-[4px_4px_0px_0px_black] hover:bg-customGreen-300 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="text-center mt-4">
          <button
            onClick={handleRedirectToSignup}
            className="text-customGreen-300 font-semibold hover:underline"
          >
            Don't have an account? Sign Up
          </button>
        </p>
      </div>
    </div>
  );
}
