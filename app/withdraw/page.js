//Withdraw page
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [amount, setAmount] = useState('');
  const [upiId, setUpiId] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleRedirect = (page) => {
    setMenuOpen(false); // Close the menu after clicking an option
    router.push(`/${page}`);
  };

  const handleWithdraw = () => {
    const newErrors = {};

    if (!amount.trim()) {
      newErrors.amount = 'Amount is required.';
    }

    if (!upiId.trim()) {
      newErrors.upiId = 'UPI ID is required.';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setLoading(true);
      // Perform withdraw logic here
      setTimeout(() => {
        setLoading(false);
        alert(`${amount} could not be withdrew as this function is not live yet. Once it is live, you can withdraw your amount. T&C apply.`);
        setAmount('');
        setUpiId('');
      }, 1000);
    }
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
      <div className="min-h-screen bg-customYellow-200 p-8 pt-16 flex items-center justify-center">
        {/* News Section with Running Animation */}
        <div className="absolute top-16 mt-4 bg-customYellow-300 p-4 text-black font-semibold text-center border-2 border-black rounded-md shadow-[4px_4px_0px_0px_black]">
          <h3 className="text-xl">News:</h3>
          <div className="overflow-hidden w-full">
            <div className="animate-marquee whitespace-nowrap">
              Next Big Update on 26 January 2025
            </div>
          </div>
        </div>
        <div className="bg-customYellow-300 p-8 rounded-lg shadow-[8px_8px_0px_0px_black] w-80 border-[1px] border-black">
          <h1 className="text-3xl font-bold text-center mb-6 text-black">Withdraw Page</h1>

          <div className="mb-4">
            <input
              type="text"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-3 border-2 border-black rounded-md shadow-[4px_4px_0px_0px_black] focus:outline-none focus:ring-1 focus:ring-customYellow-300 bg-customYellow-200 text-black"
            />
            {errors.amount && (
              <p className="text-red-500 text-sm">{errors.amount}</p>
            )}
          </div>

          <div className="mb-4">
            <input
              type="text"
              placeholder="Enter UPI ID"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              className="w-full p-3 border-2 border-black rounded-md shadow-[4px_4px_0px_0px_black] focus:outline-none focus:ring-1 focus:ring-customYellow-300 bg-customYellow-200 text-black"
            />
            {errors.upiId && (
              <p className="text-red-500 text-sm">{errors.upiId}</p>
            )}
          </div>

          <button
            onClick={handleWithdraw}
            className={`w-full p-3 bg-customGreen-200 text-black font-bold uppercase border-2 border-black rounded-md shadow-[4px_4px_0px_0px_black] hover:bg-customGreen-300 ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={loading}
          >
            {loading ? 'Processing...' : 'Withdraw'}
          </button>
        </div>
      </div>
    </div>
  );
}
