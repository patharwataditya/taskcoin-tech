"use client";
import { useState, useEffect } from "react";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [referId, setReferId] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [errors, setErrors] = useState({});
  const [signupResponse, setSignupResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  // Effect to set referId from URL query parameter
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const referIdFromUrl = urlParams.get("referId"); // Get the referId from the URL
    if (referIdFromUrl) {
      setReferId(referIdFromUrl);
    }
  }, []);

  const handleSignup = async () => {
    const newErrors = {};

    if (!firstName.trim()) newErrors.firstName = "First name is required.";
    if (!lastName.trim()) newErrors.lastName = "Last name is required.";

    const cleanedPhoneNumber = phoneNumber.replace(/\s+/g, "");
    if (!cleanedPhoneNumber) {
      newErrors.phoneNumber = "Phone number is required.";
    } else if (cleanedPhoneNumber.length !== 10 || isNaN(cleanedPhoneNumber)) {
      newErrors.phoneNumber = "Phone number must be exactly 10 digits.";
    }

    if (!password.trim()) newErrors.password = "Password is required.";
    if (password.trim() !== confirmPassword.trim())
      newErrors.confirmPassword = "Passwords do not match.";

    const cleanedReferId = referId.replace(/\s+/g, "");
    if (cleanedReferId && cleanedReferId.length !== 6) {
      newErrors.referId = "Referral ID must be exactly 6 characters.";
    }

    if (!agreeToTerms) newErrors.agreeToTerms = "You must agree to the terms and conditions.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setLoading(true);
      try {
        const response = await fetch("https://ovigrtovg9.execute-api.ap-south-1.amazonaws.com/test/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            phoneNumber: cleanedPhoneNumber,
            password,
            referedBy: cleanedReferId,
          }),
        });

        const data = await response.json();

        if (response.status === 201) {
          setSignupResponse(data);
        } else {
          setErrors({ apiError: data.error });
        }
      } catch (error) {
        setErrors({ apiError: "Something went wrong. Please try again later." });
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-customYellow-200 overflow-hidden">
      <div className="bg-customYellow-300 p-8 rounded-lg shadow-[8px_8px_0px_0px_black] w-80 border-[1px] border-black">
        {!signupResponse ? (
          <>
            <h1 className="text-3xl font-bold text-center mb-6 text-black">Sign Up</h1>

            {errors.apiError && <p className="text-red-500 mb-4">{errors.apiError}</p>}

            <div className="mb-4">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full p-3 border-2 border-black rounded-md shadow-[4px_4px_0px_0px_black] focus:outline-none bg-customYellow-200 text-black"
              />
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
            </div>

            <div className="mb-4">
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full p-3 border-2 border-black rounded-md shadow-[4px_4px_0px_0px_black] focus:outline-none bg-customYellow-200 text-black"
              />
              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
            </div>

            <div className="mb-4">
              <input
                type="text"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full p-3 border-2 border-black rounded-md shadow-[4px_4px_0px_0px_black] focus:outline-none bg-customYellow-200 text-black"
              />
              {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
            </div>

            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border-2 border-black rounded-md shadow-[4px_4px_0px_0px_black] focus:outline-none bg-customYellow-200 text-black"
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>

            <div className="mb-4">
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-3 border-2 border-black rounded-md shadow-[4px_4px_0px_0px_black] focus:outline-none bg-customYellow-200 text-black"
              />
              {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
            </div>

            {/* ReferID input field */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Referral ID (Optional)"
                value={referId}
                onChange={(e) => setReferId(e.target.value)}
                className="w-full p-3 border-2 border-black rounded-md shadow-[4px_4px_0px_0px_black] focus:outline-none bg-customYellow-200 text-black"
              />
              {errors.referId && <p className="text-red-500 text-sm">{errors.referId}</p>}
            </div>

            <div className="mb-6 flex items-center">
              <input
                type="checkbox"
                id="terms"
                checked={agreeToTerms}
                onChange={() => setAgreeToTerms(!agreeToTerms)}
                className="w-5 h-5 mr-2 accent-customGreen-200 border-black"
              />
              <label htmlFor="terms" className="text-black">
                I agree to the{" "}
                <span
                  onClick={() => window.location.href = "/termsandconditions"} // Redirect to the terms and conditions page
                  className="text-customGreen-300 font-semibold cursor-pointer hover:underline"
                >
                  terms and conditions
                </span>
              </label>
              {errors.agreeToTerms && <p className="text-red-500 text-sm ml-2">{errors.agreeToTerms}</p>}
            </div>

            <button
              onClick={handleSignup}
              disabled={loading}
              className={`w-full p-3 ${loading ? "bg-gray-400" : "bg-customGreen-200"} text-black font-bold uppercase border-2 border-black rounded-md shadow-[4px_4px_0px_0px_black] hover:bg-customGreen-300`}
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </button>

            <div className="mt-4 text-center">
              <p className="text-black">
                Already have an account?{" "}
                <span
                  onClick={() => window.location.href = "/"}
                  className="text-customGreen-300 font-semibold cursor-pointer hover:underline"
                >
                  Login
                </span>
              </p>
            </div>
          </>
        ) : (
          <div className="text-black">
            <h2 className="text-2xl font-bold mb-4">Signup Successful!</h2>
            <p><strong>UserID:</strong> {signupResponse.userID}</p>
            <p><strong>First Name:</strong> {signupResponse.firstName}</p>
            <p><strong>Last Name:</strong> {signupResponse.lastName}</p>
            <p><strong>Phone Number:</strong> {signupResponse.phoneNumber}</p>
            <p><strong>Created On:</strong> {signupResponse.createdOn}</p>

            <p className="mt-4 font-bold">
              Please note down your UserID and Password or take a screenshot of this page.
            </p>

            <button
              onClick={() => window.location.href = "/"}
              className="mt-6 w-full p-3 bg-customGreen-200 text-black font-bold uppercase border-2 border-black rounded-md shadow-[4px_4px_0px_0px_black] hover:bg-customGreen-300"
            >
              Go to Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
