'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/context/AuthContext';

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [referrals, setReferrals] = useState([]);
  const router = useRouter();
  const { user } = useAuth();

  // Function to fetch user details
  const fetchUserDetails = async () => {
    if (user && user.userId) {
      try {
        const response = await fetch('https://ovigrtovg9.execute-api.ap-south-1.amazonaws.com/test/userdetails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userId: user.userId }),
        });

        const data = await response.json();
        console.log('User Details:', data);

        // Set the referrals state
        if (data.referredUsers) {
          setReferrals(data.referredUsers);
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    }
  };

  useEffect(() => {
    // Call fetchUserDetails when the component mounts and the user is available
    if (user) {
      fetchUserDetails();
    }
  }, [user]);

  const handleRedirect = (page) => {
    setMenuOpen(false); // Close the menu after clicking an option
    router.push(`/${page}`);
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
      <div className="min-h-screen bg-customYellow-200 p-8 pt-16 border-black">
        <h1 className="text-4xl font-extrabold text-black text-center mb-4">Referral Page</h1>
        <h2 className="text-2xl font-bold text-center mb-6 text-black">Total Referrals: {referrals.length}</h2>

        {/* Referral Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-customGreen-300">
            <thead>
              <tr className="bg-customYellow-400">
                <th className="py-2 px-4 border">Sr No</th>
                <th className="py-2 px-4 border">User ID</th>
                <th className="py-2 px-4 border">Full Name</th>
              </tr>
            </thead>
            <tbody>
              {referrals.length > 0 ? (
                referrals.map((referral, index) => (
                  <tr key={referral.userId} className="hover:bg-customGreen-200">
                    <td className="py-2 px-4 border text-center text-black">{index + 1}</td>
                    <td className="py-2 px-4 border text-center text-black">{referral.userId}</td>
                    <td className="py-2 px-4 border text-center text-black">
                      {referral.firstName} {referral.lastName}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="py-4 text-center text-gray-500">
                    No referrals found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
