'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/context/AuthContext';

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const { user } = useAuth();
  const [userData, setUserData] = useState(null);
  const [userDetailsData, setUserDetailsData] = useState(null);

  const handleRedirect = (page) => {
    setMenuOpen(false); // Close the menu after clicking an option
    router.push(`/${page}`);
  };

  const fetchUserData = async () => {
    if (user && user.userId) {
      try {
        // Call first API to get user info
        const userResponse = await fetch('https://ovigrtovg9.execute-api.ap-south-1.amazonaws.com/test/user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userId: user.userId }),
        });
        const userData = await userResponse.json();
        setUserData(userData);

        // Call second API to get user details
        const userDetailsResponse = await fetch('https://ovigrtovg9.execute-api.ap-south-1.amazonaws.com/test/userdetails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userId: user.userId }),
        });
        const userDetailsData = await userDetailsResponse.json();
        setUserDetailsData(userDetailsData);

      } catch (error) {
        console.error('Error fetching data from APIs:', error);
      }
    }
  };

  useEffect(() => {
    if (user && user.userId) {
      fetchUserData();
    }
  }, [user]);

  // Calculate the values for the table
  const referralsCount = userDetailsData?.referredUsers?.length || 0;
  const taskCount = userData?.taskCount || 0;
  const referralValue = referralsCount * 100;
  const taskValue = taskCount * 10;
  const totalValue = referralValue + taskValue;

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
        className={`fixed top-0 left-0 h-full bg-customYellow-400 text-black border-[1px] border-black w-64 transform transition-all duration-300 ease-in-out ${
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
      <div className="min-h-screen bg-customYellow-200 p-8 pt-16 text-black ">
        <h1 className="text-4xl font-extrabold text-black text-center">Account page</h1>

        {/* Table */}
        <div className="mt-8 overflow-x-auto">
          <table className="w-full max-w-2xl mx-auto border-r-4 border-b-4 border-2 border-black shadow-[4px_4px_0px_0px_black] rounded-lg">
            <thead>
              <tr>
                <th className="border border-black bg-customYellow-300 px-4 py-2">Details</th>
                <th className="border border-black bg-customYellow-300 px-4 py-2">Count</th>
                <th className="border border-black bg-customYellow-300 px-4 py-2">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-black bg-customYellow-100 px-4 py-2">Referrals</td>
                <td className="border border-black bg-customYellow-100 px-4 py-2">{referralsCount}</td>
                <td className="border border-black bg-customYellow-100 px-4 py-2">{referralValue}</td>
              </tr>
              <tr>
                <td className="border border-black bg-customYellow-100 px-4 py-2">Tasks</td>
                <td className="border border-black bg-customYellow-100 px-4 py-2">{taskCount}</td>
                <td className="border border-black bg-customYellow-100 px-4 py-2">{taskValue}</td>
              </tr>
              <tr>
                <td className="border border-black bg-customYellow-100 px-4 py-2">Total</td>
                <td className="border border-black bg-customYellow-100 px-4 py-2"></td>
                <td className="border border-black bg-customYellow-100 px-4 py-2 font-bold">{totalValue}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Total Earnings */}
        <div className="mt-4 text-xl font-semibold text-center">
          <p>Total Earnings: ₹{totalValue}</p>
        </div>
      </div>
    </div>
  );
}
