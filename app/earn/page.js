'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/context/AuthContext';


export default function EarnPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [taskData, setTaskData] = useState(null);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    const fetchTaskData = async () => {
      if (!user?.userId) {
        console.log('No user ID found');
        return;
      }

      try {
        const response = await fetch(
          'https://ovigrtovg9.execute-api.ap-south-1.amazonaws.com/test/task',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              userId: user.userId,
            }),
          }
        );

        const data = await response.json();
        console.log('API Response:', data);
        setTaskData(data);
      } catch (error) {
        console.error('Error fetching task data:', error);
      }
    };

    fetchTaskData();
  }, [user]);

  const handleRedirect = (page) => {
    setMenuOpen(false); // Close the menu after clicking an option
    router.push(`/${page}`);
  };

  const handleNextTask = () => {
    console.log('Next task initiated');
    router.push('/article1'); // Redirect to article1 page
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
        <h1 className="text-4xl font-extrabold text-black text-center mb-8">Earn Page</h1>

        {taskData ? (
          <div className="w-full max-w-2xl mx-auto">
            {/* Task Data Table */}
            <div className="border-2 border-black shadow-[4px_4px_0px_0px_black] rounded-lg">
              <table className="w-full border-collapse">
                <tbody>
                  {/* Row 1: Daily Tasks */}
                  <tr className="border border-black">
                    <td className="p-4 font-bold text-black bg-customYellow-300 border-r border-black">
                      Daily Tasks
                    </td>
                    <td className="p-4 text-black bg-customYellow-100">10</td>
                  </tr>

                  {/* Row 2: Completed Tasks */}
                  <tr className="border border-black">
                    <td className="p-4 font-bold text-black bg-customYellow-300 border-r border-black">
                      Completed Tasks
                    </td>
                    <td className="p-4 text-black bg-customYellow-100">
                        {taskData.dailyTaskCount}
                    </td>
                  </tr>

                  {/* Row 3: Remaining Tasks */}
                  <tr className="border border-black">
                    <td className="p-4 font-bold text-black bg-customYellow-300 border-r border-black">
                      Remaining Tasks
                    </td>
                    <td className="p-4 text-black bg-customYellow-100">
                        {taskData.tasksRemainingToday}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* "Do Next Task" Button */}
            <div className="text-center mt-8">
              <button
                onClick={handleNextTask}
                className="w-full p-3 bg-customGreen-200 text-black font-bold uppercase border-2 border-black rounded-md shadow-[4px_4px_0px_0px_black] hover:bg-customGreen-300"
              >
                Do Next Task
              </button>
            </div>

           
{/* Neu-Neutralism Styled Video Section */}
<div className="mt-8">
  <h2 className="text-2xl font-bold text-black mb-4 text-center">How to do tasks</h2>
  <div className="p-6 bg-customYellow-100 border-2 border-black rounded-md shadow-[4px_4px_0px_0px_black]">
    <iframe
      className="w-full aspect-[9/16] rounded-lg border-2 border-black"
      src="https://www.youtube.com/embed/aDW9zMf0Fak"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</div>


          </div>
        ) : (
          <p className="text-center text-black font-bold">Loading task data...</p>
        )}
      </div>
    </div>
  );
}
