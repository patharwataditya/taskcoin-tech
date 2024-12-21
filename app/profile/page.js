'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/context/AuthContext';

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    const fetchUserData = async () => {
      if (!user?.userId) {
        console.log('No user ID found');
        return;
      }

      try {
        const response = await fetch(
          "https://ovigrtovg9.execute-api.ap-south-1.amazonaws.com/test/user",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userId: user.userId,
            }),
          }
        );

        const data = await response.json();
        console.log('API Response:', data);
        setUserData(data);
        
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [user]);

  const handleRedirect = (page) => {
    setMenuOpen(false);
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
            {['home', 'profile', 'referral', 'earn', 'account', 'withdraw'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => handleRedirect(item)}
                  className="w-full text-left py-2 px-4 rounded-md bg-customYellow-100 hover:bg-customYellow-300"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="min-h-screen bg-customYellow-200 p-8 pt-16">
        <h1 className="text-4xl font-extrabold text-black text-center mb-8">Profile Page</h1>

        {userData ? (
          <div className="w-full max-w-2xl mx-auto  border-2 border-black  shadow-[4px_4px_0px_0px_black] rounded-lg  ">
            <table className="w-full border-collapse">
              <tbody>
                {[
                  { title: 'User ID', value: userData.userId },
                  { title: 'First Name', value: userData.firstName },
                  { title: 'Last Name', value: userData.lastName },
                  { title: 'Phone Number', value: userData.phoneNumber },
                  { title: 'Referred By', value: userData.referedBy || 'None' },
                  { title: 'ID Created On', value: userData.IdCreatedOnDate },
                ].map((item, index) => (
                  <tr key={index} className="border border-black">
                    <td className="p-4 font-bold text-black bg-customYellow-300 border-r border-black">{item.title}</td>
                    <td className="p-4 text-black bg-customYellow-100">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-black font-bold">Loading user data...</p>
        )}
      </div>
    </div>
  );
}
