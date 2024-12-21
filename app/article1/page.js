"use client";
import { useState } from "react";

export default function Article1() {
  const [firstCountdown, setFirstCountdown] = useState(10);
  const [secondCountdown, setSecondCountdown] = useState(10);
  const [firstButtonState, setFirstButtonState] = useState("Start");
  const [secondButtonState, setSecondButtonState] = useState("Hidden");
  const [secondButtonVisible, setSecondButtonVisible] = useState(false);
  const [showScrollText, setShowScrollText] = useState(false);

  // Function to handle the first button's countdown
  const handleFirstButtonClick = () => {
    if (firstButtonState === "Start") {
      const timer = setInterval(() => {
        setFirstCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setFirstButtonState("Continue");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else if (firstButtonState === "Continue") {
      setShowScrollText(true); // Show the blinking text when "Continue" is clicked
      setSecondButtonVisible(true);
      setSecondButtonState("Start");
    }
  };

  // Function to handle the second button's countdown
  const handleSecondButtonClick = () => {
    if (secondButtonState === "Start") {
      const timer = setInterval(() => {
        setSecondCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setSecondButtonState("Continue");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else if (secondButtonState === "Continue") {
      // Redirect to article2 when the second button is clicked
      window.location.href = "/article2";
    }
  };

  return (
    <div className="p-6 font-sans bg-gray-50 min-h-screen">
      {/* First Button at the Top */}
      <div className="mb-4 text-center">
        <button
          onClick={handleFirstButtonClick}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium text-lg hover:bg-blue-700 transition duration-300"
        >
          {firstButtonState === "Start"
            ? `Start (${firstCountdown})`
            : "Continue"}
        </button>
      </div>

      {/* Red Blinking Text */}
      {showScrollText && (
        <div className="text-center text-red-500 blink">
          Please scroll down to the second button to continue.
        </div>
      )}

      {/* Article Content */}
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">
        GTA 6: The Next Big Thing in Gaming
      </h1>
      <div className="max-w-4xl mx-auto bg-white p-6 shadow-md rounded-lg">
        <p className="mb-4 text-gray-700">
          After years of anticipation, Rockstar Games has finally announced the
          development of the highly-awaited GTA 6. Promising groundbreaking
          graphics, an expansive open world, and a captivating storyline, GTA 6
          is poised to redefine gaming standards.
        </p>
        <p className="mb-4 text-gray-700">
          The game is rumored to feature dual protagonists, a sprawling city
          inspired by Miami, and a dynamic weather system. Players can expect
          unparalleled realism and gameplay innovations, making GTA 6 a
          potential masterpiece.
        </p>
        <p className="mb-4 text-gray-700">
          Rockstar Games is also reportedly investing in a new AI system to
          enhance NPC interactions, making the game world feel more alive than
          ever before.
        </p>
        <p className="mb-4 text-gray-700">
          Another exciting feature includes a revamped multiplayer mode, which
          is expected to expand on the success of GTA Online. The mode will
          reportedly include cooperative heists, large-scale battles, and
          community events that promise endless hours of fun.
        </p>
        <p className="mb-4 text-gray-700">
          Stay tuned for more updates as Rockstar Games unveils more about this
          exciting journey into the world of GTA 6!
        </p>
      </div>

      {/* Image */}
      <div className="max-w-4xl mx-auto my-6">
        <img
          src="https://300mind.studio/blog/wp-content/uploads/2023/12/GTA-6-Game.webp"
          alt="GTA 6 Game"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>

      {/* Additional Text about GTA 6 */}
<div className="max-w-4xl mx-auto mt-6 bg-white p-6 shadow-md rounded-lg">
  <p className="mb-4 text-gray-700">
    GTA 6 promises to be an extraordinary leap in the world of gaming. With cutting-edge graphics, the game aims to bring an incredibly realistic experience to players. Rockstar Games has spared no expense in creating a living, breathing world, where every street corner feels authentic and every character has their own story to tell.
  </p>
  <p className="mb-4 text-gray-700">
    The game’s expansive map, rumored to include multiple cities and a variety of environments, will offer players countless opportunities for exploration. From lush forests to bustling urban centers, each area will be meticulously designed to immerse players in a world like never before.
  </p>
  <p className="mb-4 text-gray-700">
    One of the most anticipated features of GTA 6 is the next-level AI, which will revolutionize how NPCs behave. Players can expect dynamic interactions with non-playable characters, who will react intelligently to player actions, creating an unpredictable and evolving game world.
  </p>
  <p className="mb-4 text-gray-700">
    In addition to the single-player experience, the multiplayer mode is expected to take the franchise’s online offerings to new heights. Whether you're teaming up with friends for heists or competing in massive multiplayer battles, GTA 6 will provide an endless array of activities to keep players engaged for years to come.
  </p>
  <p className="mb-4 text-gray-700">
    With Rockstar Games’ dedication to quality and innovation, GTA 6 is shaping up to be one of the most anticipated titles in gaming history. Fans around the world are eagerly awaiting more details, and the excitement surrounding the game continues to grow.
  </p>
</div>

{/* Image */}
<div className="max-w-4xl mx-auto my-6">
        <img
          src="https://m.economictimes.com/thumb/msid-105503330,width-1600,height-900,resizemode-4,imgsize-10392/gta-6-grand-theft-auto-vi-trailer.jpg"
          alt="GTA 6 Game"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>

      {/* More Details about GTA 6 */}
<div className="max-w-4xl mx-auto mt-6 bg-white p-6 shadow-md rounded-lg">
  <p className="mb-4 text-gray-700">
    GTA 6 is not only set to redefine the open-world genre but also push the boundaries of what’s possible in video games. One of the most exciting rumors surrounding the game is the potential for a dynamic story that changes based on player choices. Unlike previous iterations, where the narrative followed a predetermined path, GTA 6 may offer a more personalized experience where your decisions impact the world around you.
  </p>
  <p className="mb-4 text-gray-700">
    The game’s plot is expected to focus on the lives of multiple protagonists, each with their own unique backstory and motivations. The interactions between these characters are rumored to be deep and engaging, providing players with a narrative experience that’s both emotionally compelling and action-packed.
  </p>
  <p className="mb-4 text-gray-700">
    As for the setting, Rockstar Games is reportedly designing a sprawling map that will include various regions inspired by real-life locations. Players will explore everything from dense urban cities to remote rural areas, and each environment will be rich with detail. In addition to the core gameplay, there will also be a variety of side activities, including sports, recreational events, and mini-games to keep players entertained.
  </p>
  <p className="mb-4 text-gray-700">
    Multiplayer mode will also receive a major overhaul in GTA 6. Rockstar is reportedly working on enhancing the online experience with new features like large-scale battles, a better progression system, and more meaningful player-driven events. The community will have more power than ever to shape the world around them, with new ways to collaborate and compete in the game’s dynamic ecosystem.
  </p>
  <p className="mb-4 text-gray-700">
    While official details are still sparse, fans are eagerly awaiting the first gameplay reveal and are hoping that GTA 6 will live up to its massive expectations. Rockstar Games is known for delivering high-quality, immersive worlds, and GTA 6 seems poised to be the next step in that legacy, offering players an unforgettable experience.
  </p>
</div>

{/* Image */}
<div className="max-w-4xl mx-auto my-6">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_bXoQF7z-JX0unUlqOhkF04svSjm--_41GiiOpc1SvXgSs4xwipUT5GyVw4vHB4-zn8Q&usqp=CAU"
          alt="GTA 6 Game"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>



      {/* Second Button at the Bottom */}
      {secondButtonVisible && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleSecondButtonClick}
            className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium text-lg hover:bg-green-700 transition duration-300"
          >
            {secondButtonState === "Start"
              ? `Start (${secondCountdown})`
              : "Continue"}
          </button>
        </div>
      )}
    </div>
  );
}
