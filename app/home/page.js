'use client';
import { useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext'; // Import the useAuth hook to access context
import { ToastContainer, toast } from 'react-toastify'; // Optional for copy-to-clipboard feedback
import 'react-toastify/dist/ReactToastify.css'; // Optional for ToastContainer styling

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const { user, logout, loading } = useAuth(); // Access user, logout, and loading state from context

  // Handle the loading state
  if (loading) {
    return <div>Loading...</div>; // You can replace this with a loading spinner or a more styled message
  }

  // Function to get the time-based greeting
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  // Function to handle the redirect based on menu item
  const handleRedirect = (page) => {
    setMenuOpen(false); // Close the menu after clicking an option
    router.push(`/${page}`);
  };

  // Function to copy the referral link to clipboard
  const copyToClipboard = () => {
    const text = `https://www.taskcoin.tech/signup?referId=${user?.userId}`;
  
    if (navigator.clipboard) {
      // Use the Clipboard API if available (desktop, modern browsers)
      navigator.clipboard.writeText(text).then(() => {
        toast.success('Referral link copied to clipboard!');
      }).catch((error) => {
        toast.error('Failed to copy referral link');
      });
    } else {
      // Fallback for Android or older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        const successful = document.execCommand('copy');
        if (successful) {
          toast.success('Referral link copied to clipboard!');
        } else {
          toast.error('Failed to copy referral link');
        }
      } catch (err) {
        toast.error('Failed to copy referral link');
      } finally {
        document.body.removeChild(textArea);
      }
    }
  };
  

  // Handle logout
  const handleLogout = () => {
    logout();
    router.push('/'); // Redirect to login page after logging out
  };

  return (
    <div className="relative">
      {/* Top Menu Bar */}
      <div
        onClick={() => setMenuOpen(!menuOpen)}
        className="absolute top-4 left-4 w-12 h-12 bg-customYellow-400 text-black text-2xl font-bold flex items-center justify-center rounded-xl cursor-pointer shadow-xl hover:bg-customYellow-300"
      >
        ☰
      </div>

      {/* Slide-In Menu */}
      <div
        className={`fixed top-0 left-0 h-full bg-customYellow-400 text-black border-[1px] border-black w-64 transform transition-all duration-300 ease-in-out z-40 ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6">
          <h2 className="text-3xl font-extrabold mb-6 text-center">Menu</h2>
          <ul className="space-y-4">
            <li>
              <button
                onClick={() => handleRedirect('home')}
                className="w-full text-left py-2 px-4 rounded-md bg-customYellow-100 hover:bg-customYellow-300"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => handleRedirect('profile')}
                className="w-full text-left py-2 px-4 rounded-md bg-customYellow-100 hover:bg-customYellow-300"
              >
                Profile
              </button>
            </li>
            <li>
              <button
                onClick={() => handleRedirect('referral')}
                className="w-full text-left py-2 px-4 rounded-md bg-customYellow-100 hover:bg-customYellow-300"
              >
                Referral
              </button>
            </li>
            <li>
              <button
                onClick={() => handleRedirect('earn')}
                className="w-full text-left py-2 px-4 rounded-md bg-customYellow-100 hover:bg-customYellow-300"
              >
                Earn
              </button>
            </li>
            <li>
              <button
                onClick={() => handleRedirect('account')}
                className="w-full text-left py-2 px-4 rounded-md bg-customYellow-100 hover:bg-customYellow-300"
              >
                Account
              </button>
            </li>
            <li>
              <button
                onClick={() => handleRedirect('withdraw')}
                className="w-full text-left py-2 px-4 rounded-md bg-customYellow-100 hover:bg-customYellow-300"
              >
                Withdraw
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="min-h-screen bg-customYellow-200 p-8 pt-16">
        {/* Greeting */}
        <h1 className="text-4xl font-extrabold text-black text-center">
          {getGreeting()}, {user?.userId || 'User'}
        </h1>

        {/* News Section with Running Animation */}
        <div className="mt-4 bg-customYellow-400 p-4 text-black font-semibold text-center border-2 border-black rounded-md shadow-[4px_4px_0px_0px_black]">
          <h3 className="text-xl">News:</h3>
          <div className="overflow-hidden w-full">
            <div className="animate-marquee whitespace-nowrap">
              Next Big Update on 26 January 2025
            </div>
          </div>
        </div>

        {/* Referral Section */}
        <div className="mt-8 bg-customYellow-400 p-6  max-w-md mx-auto font-bold uppercase border-2 border-black rounded-md shadow-[4px_4px_0px_0px_black]">
          <h3 className="text-2xl text-black font-semibold text-center">Your Referral Link</h3>
          <div className="mt-4 flex items-center justify-between ">
            <input
              type="text"
              readOnly
              value={`https://www.taskcoin.tech/signup?referId=${user?.userId}`}
              className="w-full px-4 py-2 rounded-md border border-black bg-customYellow-400"
            />
            <button
              onClick={copyToClipboard}
              className="ml-2  text-black p-2  bg-customGreen-200 border-blackbg-customGreen-200 font-bold uppercase border-2 border-black rounded-md shadow-[4px_4px_0px_0px_black] hover:bg-customGreen-300"
            >
              Copy
            </button>
          </div>
        </div>

        {/* Logout Button */}
        <div className="mt-8 text-center">
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white py-2 px-6  hover:bg-red-400 font-bold uppercase border-2 border-black rounded-md shadow-[4px_4px_0px_0px_black]"
          >
            Logout
          </button>
        </div>

        {/* Referral Rules Section */}
        <div className="mt-8 mx-auto max-w-lg p-6 bg-customYellow-400 text-black border-2 border-black rounded-md shadow-[8px_8px_0px_0px_black]">
          <h2 className="text-3xl font-extrabold text-center mb-4">Referral Rules</h2>
          <ul className="list-disc list-inside space-y-2 font-semibold">
            <li>The person using your referral code must be active for at least 10 days.</li>
            <li>They must complete 100 tasks, averaging 10 tasks per day.</li>
            <li>Each referral will earn you 100 rupees.</li>
            <li>The referral reward will only be credited once all conditions are met.</li>
            <li>The referred user should not violate any platform policies.</li>
            <li>Multiple accounts created to exploit referral rewards will be disqualified.</li>
            <li>Referral bonuses are subject to verification and approval by the admin team.</li>
          </ul>
        </div>
      </div>

      {/* Toast Notifications */}
      <ToastContainer />
    </div>
  );
}
