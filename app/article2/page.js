"use client";
import { useState } from "react";

export default function Article2() {
  const [firstCountdown, setFirstCountdown] = useState(10);
  const [secondCountdown, setSecondCountdown] = useState(10);
  const [firstButtonState, setFirstButtonState] = useState("Start");
  const [secondButtonState, setSecondButtonState] = useState("Hidden");
  const [secondButtonVisible, setSecondButtonVisible] = useState(false);
  const [showScrollMessage, setShowScrollMessage] = useState(false); // New state for the message

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
      setSecondButtonVisible(true);
      setSecondButtonState("Start");
      setShowScrollMessage(true); // Show the scroll message when "Continue" is clicked
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
      // Redirect to article3 when the second button is clicked
      window.location.href = "/article3";
    }
  };

  return (
    <div className="p-6 font-sans bg-gray-50 min-h-screen flex flex-col">
      {/* First Button at the top of the article */}
      <div className="flex justify-center mb-4">
        <button
          onClick={handleFirstButtonClick}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium text-lg hover:bg-blue-700 transition duration-300"
        >
          {firstButtonState === "Start"
            ? `Start (${firstCountdown})`
            : "Continue"}
        </button>
      </div>

      {/* Scroll Message below the First Button */}
      {showScrollMessage && (
        <div className="text-red-600 text-xl font-bold mb-4 animate-blink">
          Please scroll down to continue!
        </div>
      )}

      <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">
        AI Revolution: Transforming the Future
      </h1>

      <div className="max-w-4xl mx-auto bg-white p-6 shadow-md rounded-lg mb-8">
        <p className="mb-4 text-gray-700">
          Artificial Intelligence (AI) has become a cornerstone of modern
          technology. From autonomous vehicles to advanced healthcare
          diagnostics, AI is reshaping industries and creating unprecedented
          opportunities.
        </p>
        <p className="mb-4 text-gray-700">
          With advancements in machine learning and neural networks, AI systems
          are becoming smarter and more efficient. Ethical considerations,
          however, remain a significant challenge, as the world seeks to
          balance innovation with responsibility.
        </p>
        <p className="text-gray-700">
          As we step into the future, AI promises to redefine how we interact
          with technology, unlocking the potential for smarter cities, enhanced
          productivity, and a better quality of life.
        </p>
      </div>

      {/* Image */}
      <div className="max-w-4xl mx-auto my-6">
        <img
          src="https://images.yourstory.com/cs/2/e35953e0c10a11eeaef14be6ff40ae87/Imageq17a-1706807643174.jpg?mode=crop&crop=faces&ar=2%3A1&format=auto&w=1920&q=75"
          alt="GTA 6 Game"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>

      {/* Additional Content for Article 2 */}
<div className="max-w-4xl mx-auto mt-6 bg-white p-6 shadow-md rounded-lg">
  <p className="mb-4 text-gray-700">
    The rise of AI has brought with it an explosion of new technologies and applications. In sectors like healthcare, AI is revolutionizing diagnostics, enabling quicker and more accurate detection of diseases. Machine learning algorithms can now analyze medical images, identify patterns in patient data, and assist in treatment plans, leading to better patient outcomes and reduced healthcare costs.
  </p>
  <p className="mb-4 text-gray-700">
    In the business world, AI is driving automation and optimization. Companies are using AI-powered tools to streamline processes, predict customer behavior, and improve decision-making. From chatbots that provide customer support to algorithms that optimize supply chain logistics, AI is becoming a key player in improving efficiency and cutting costs across industries.
  </p>
  <p className="mb-4 text-gray-700">
    However, as AI systems become more integrated into daily life, concerns regarding job displacement, privacy, and security are also growing. While AI has the potential to create new jobs and improve productivity, it also has the capability to disrupt existing labor markets. Addressing these challenges while continuing to innovate is essential to ensuring that AI benefits society as a whole.
  </p>
  <p className="mb-4 text-gray-700">
    As AI continues to evolve, it is expected to play a critical role in solving some of the world’s most pressing problems. From tackling climate change with predictive models to enhancing space exploration with autonomous systems, AI is poised to drive transformative change across many fields.
  </p>
  <p className="text-gray-700">
    In conclusion, AI is not just a passing trend—it is a revolutionary force that will shape the future. The key to harnessing its full potential lies in ensuring that ethical standards are upheld and that AI advancements benefit all of humanity. As we move forward, we must focus on responsible development, transparency, and collaboration to navigate this AI-driven future.
  </p>
</div>

{/* Image */}
<div className="max-w-4xl mx-auto my-6">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ66oe0UBf-T4tE_QUGZclnIIlPzlVwDtFxVQ&s"
          alt="GTA 6 Game"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>


{/* Additional Content for Article 2 */}
<div className="max-w-4xl mx-auto mt-6 bg-white p-6 shadow-md rounded-lg">
  <p className="mb-4 text-gray-700">
    One of the most exciting aspects of AI is its potential to revolutionize education. Adaptive learning platforms powered by AI are already being used to personalize lessons and provide tailored experiences to students. These systems can analyze students’ learning patterns and adjust content to suit their needs, helping to improve engagement and learning outcomes.
  </p>
  <p className="mb-4 text-gray-700">
    Furthermore, AI is enhancing accessibility for individuals with disabilities. From speech-to-text technologies to intelligent virtual assistants, AI is helping people with visual, auditory, and mobility impairments to navigate the world more easily. AI-powered applications are making it possible for these individuals to perform daily tasks that were once out of reach, promoting inclusion and equality.
  </p>
  <p className="mb-4 text-gray-700">
    In entertainment, AI is also making waves. It is being used to create more interactive and personalized experiences for consumers. In the gaming industry, AI is enhancing gameplay by enabling more responsive and dynamic environments, allowing for more immersive experiences. AI-driven recommendation systems, such as those used by streaming platforms, are revolutionizing how people discover content by analyzing user preferences and suggesting personalized recommendations.
  </p>
  <p className="mb-4 text-gray-700">
    As AI becomes more integrated into daily life, we must also be mindful of the potential ethical implications. Issues related to bias in AI algorithms, data privacy, and the autonomy of AI systems need to be addressed. Developers and policymakers must work together to establish frameworks that ensure fairness, transparency, and accountability in AI systems, avoiding unintended consequences and ensuring that AI serves the public good.
  </p>
  <p className="text-gray-700">
    The journey of AI is only beginning, and the possibilities are endless. As technology continues to advance, we will see even more groundbreaking innovations that will shape every aspect of our lives. It is up to us to harness AI responsibly and ethically to create a future where technology improves the human experience for all.
  </p>
</div>

{/* Image */}
<div className="max-w-4xl mx-auto my-6">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-T7oyE89Avn9p9Cl3R_5zfWrpj697XfF3Ti0VvI-390QIJY8PrhfemRN-JqFvy4pm-Fw&usqp=CAU"
          alt="GTA 6 Game"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>


      {/* Second Button at the bottom of the article */}
      {secondButtonVisible && (
        <div className="flex justify-center mt-8">
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
