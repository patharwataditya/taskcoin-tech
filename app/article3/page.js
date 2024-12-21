"use client";
import { useState, useEffect } from "react";
import { useAuth } from "@/app/context/AuthContext";
import { useRouter } from 'next/navigation';

export default function Article3() {
  const [firstCountdown, setFirstCountdown] = useState(10);
  const [secondCountdown, setSecondCountdown] = useState(10);
  const [firstButtonState, setFirstButtonState] = useState("Start");
  const [secondButtonState, setSecondButtonState] = useState("Hidden");
  const [secondButtonVisible, setSecondButtonVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();
  const router = useRouter();
  const [showScrollMessage, setShowScrollMessage] = useState(false); // For the scroll message

  // Load Adsterra script when the component mounts
  useEffect(() => {
    const adScript = document.createElement("script");
    adScript.type = "text/javascript";
    adScript.src = "//pl25338009.profitablecpmrate.com/f3/2b/03/f32b037e1e762163fa3c9f4200148b1e.js";
    adScript.async = true;
    document.body.appendChild(adScript);

    return () => {
      document.body.removeChild(adScript);
    };
  }, []);

  useEffect(() => {
    const adScript = document.createElement("script");
    adScript.type = "text/javascript";
    adScript.src = "//pl25338977.profitablecpmrate.com/da/d2/92/dad29265bfe30f4577247249ad88821b.js";
    adScript.async = true;
    document.body.appendChild(adScript);

    return () => {
      document.body.removeChild(adScript);
    };
  }, []);

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
  const handleSecondButtonClick = async () => {
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
      if (!user?.userId) {
        console.log('No user ID found');
        return;
      }

      try {
        setIsLoading(true);
        const response = await fetch(
          "https://ovigrtovg9.execute-api.ap-south-1.amazonaws.com/test/completetask",
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

        if (data.message === "Task completed successfully") {
          router.push('/earn');
        }
      } catch (error) {
        console.error('Error completing task:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="p-6 font-sans bg-gray-50 min-h-screen flex flex-col">

<div className="my-6 text-center">
  <script
    type="text/javascript"
    dangerouslySetInnerHTML={{
      __html: `
        atOptions = {
          'key' : '7aebe933cfcc802157e48f6b249384a1',
          'format' : 'iframe',
          'height' : 300,
          'width' : 160,
          'params' : {}
        };
      `,
    }}
  />
  <script
    type="text/javascript"
    src="//www.highperformanceformat.com/7aebe933cfcc802157e48f6b249384a1/invoke.js"
  />
</div>


      {/* First Button at the top of the article */}
      <div className="flex justify-center mb-4">
        <button
          onClick={handleFirstButtonClick}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium text-lg hover:bg-blue-700 transition duration-300"
          disabled={isLoading}
        >
          {firstButtonState === "Start"
            ? `Start (${firstCountdown})`
            : "Continue"}
        </button>
      </div>

      {/* Scroll down message */}
      {showScrollMessage && (
        <div className="text-red-600 text-xl font-bold mb-4 animate-blink text-center">
          Please scroll down to continue!
        </div>
      )}

      
       {/* Native Banner Ad */}
       <div className="my-6 text-center">
        <script
          async="async"
          data-cfasync="false"
          src="//pl25338177.profitablecpmrate.com/1808ca4886be8a70f535e01c6eb71efc/invoke.js"
        ></script>
        <div id="container-1808ca4886be8a70f535e01c6eb71efc"></div>
      </div>

      <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">
        The Future of Electric Vehicles
      </h1>
      <div className="max-w-4xl mx-auto bg-white p-6 shadow-md rounded-lg mb-8">
        <p className="mb-4 text-gray-700">
          Electric vehicles (EVs) are transforming the automotive industry. As
          governments around the globe push for greener transportation, EV
          technology is advancing rapidly, with longer ranges, faster charging
          times, and more affordable options.
        </p>
        <p className="mb-4 text-gray-700">
          Companies like Tesla, Rivian, and legacy automakers are leading the
          charge, offering innovative solutions to reduce carbon emissions. EV
          adoption is expected to soar as infrastructure improves and battery
          technology evolves.
        </p>
        <p className="text-gray-700">
          With renewable energy integration and AI-driven efficiency
          optimization, EVs are set to become the standard for personal and
          public transportation.
        </p>
      </div>

      {/* Image */}
      <div className="max-w-4xl mx-auto my-6">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyvJan_BSOBX-qGHcJkhkey8K0bf4XavNK0Q&s"
          alt="GTA 6 Game"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>


      {/* Additional Content for Article 3 */}
<div className="max-w-4xl mx-auto mt-6 bg-white p-6 shadow-md rounded-lg">
  <p className="mb-4 text-gray-700">
    One of the most notable aspects of the electric vehicle revolution is the shift towards sustainability. Traditional gasoline-powered cars contribute significantly to air pollution and global warming due to their carbon emissions. EVs, on the other hand, produce zero tailpipe emissions, making them a vital part of the global effort to reduce pollution and combat climate change.
  </p>
  <p className="mb-4 text-gray-700">
    The growing adoption of electric vehicles also brings challenges in terms of battery production and recycling. The materials required for batteries, such as lithium, cobalt, and nickel, are sourced from regions with complex ethical and environmental considerations. As EV production scales up, there is a need to focus on sustainable sourcing practices and the development of recycling technologies to minimize the impact of these materials on the environment.
  </p>
  <p className="mb-4 text-gray-700">
    The evolution of charging infrastructure is also playing a critical role in the widespread adoption of electric vehicles. Charging stations are becoming more prevalent across cities and highways, with some countries aiming to provide charging points every few kilometers. Fast-charging technologies are emerging, allowing EV owners to charge their vehicles in minutes instead of hours, making EVs more practical for long-distance travel.
  </p>
  <p className="mb-4 text-gray-700">
    As autonomous driving technology evolves, we are seeing the integration of electric vehicles with self-driving capabilities. This combination could lead to a future where fully autonomous electric vehicles are commonplace, reducing traffic accidents and enhancing mobility for people with disabilities and the elderly. This integration could also reduce congestion in urban areas as autonomous vehicles optimize traffic flow and parking.
  </p>
  <p className="text-gray-700">
    Looking ahead, the future of electric vehicles is bright. With advancements in battery technology, cost reductions, and improved charging infrastructure, electric vehicles are poised to become the dominant form of transportation. By transitioning to electric vehicles, we can create a cleaner, greener, and more sustainable world for future generations.
  </p>
</div>

{/* Image */}
<div className="max-w-4xl mx-auto my-6">
        <img
          src="https://www.power.com/sites/default/files/styles/blog_header_image/public/content/images/AdobeStock_574550707.jpeg?itok=JwTVbByE"
          alt="GTA 6 Game"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>


{/* Additional Content for Article 3 */}
<div className="max-w-4xl mx-auto mt-6 bg-white p-6 shadow-md rounded-lg">
  <p className="mb-4 text-gray-700">
    Another exciting development in the electric vehicle sector is the increasing variety of electric models available for consumers. From compact city cars to high-performance sports vehicles and even electric trucks, the EV market is becoming diverse, catering to a wide range of needs and preferences. This variety is crucial for the widespread adoption of EVs, as it ensures that consumers can find an electric vehicle that fits their lifestyle and budget.
  </p>
  <p className="mb-4 text-gray-700">
    As electric vehicles gain popularity, the automotive industry is seeing a shift towards modular design and open-source technology. This enables automakers to collaborate on the development of standardized battery systems, reducing costs and improving the efficiency of EV production. Additionally, automakers are focusing on improving the energy density of batteries, allowing for longer driving ranges and reducing the frequency of recharging.
  </p>
  <p className="mb-4 text-gray-700">
    The transition to electric vehicles also presents a significant opportunity for energy companies. As demand for EVs grows, there will be a rising need for renewable energy sources to power these vehicles. Solar, wind, and hydroelectric power will play a crucial role in making electric vehicles even more sustainable by ensuring that the energy used to charge them is clean and green. This will further reduce the carbon footprint of EVs, making them a vital part of the global push toward a low-carbon economy.
  </p>
  <p className="mb-4 text-gray-700">
    In addition to environmental benefits, electric vehicles offer significant cost savings for consumers. While the initial purchase price of EVs can be higher than that of traditional cars, the overall cost of ownership is lower. EVs require less maintenance, as they have fewer moving parts and no need for oil changes. Electricity is also cheaper than gasoline in many regions, and government incentives and subsidies are making EVs more affordable for a broader range of people.
  </p>
  <p className="text-gray-700">
    As we look toward the next decade, electric vehicles are poised to become a critical element of sustainable transportation systems worldwide. With innovations in battery technology, charging infrastructure, and renewable energy integration, EVs will continue to evolve, making the dream of a carbon-free future more achievable than ever before.
  </p>
</div>

{/* Image */}
<div className="max-w-4xl mx-auto my-6">
        <img
          src="https://img-cdn.thepublive.com/filters:format(webp)/industry-wired/media/post_attachments/wp-content/uploads/2024/08/Future-of-Electric-Vehicles-Innovations-and-Challenges.jpg"
          alt="GTA 6 Game"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>


{/* Additional Content for Article 3 */}
<div className="max-w-4xl mx-auto mt-6 bg-white p-6 shadow-md rounded-lg">
  <p className="mb-4 text-gray-700">
    One of the most critical aspects driving the future of electric vehicles (EVs) is the development of fast-charging networks. Charging infrastructure has traditionally been one of the major barriers to EV adoption, but advancements in fast-charging technology are addressing this challenge. Companies and governments worldwide are investing heavily in ultra-fast charging stations that can recharge an EV’s battery to 80% in as little as 30 minutes, making long road trips more feasible and convenient for EV owners.
  </p>
  <p className="mb-4 text-gray-700">
    Furthermore, automakers are exploring the potential of wireless charging, which could eliminate the need for cables altogether. By integrating charging pads into roads or parking spaces, EVs could be charged automatically while driving or while parked, creating a seamless experience for drivers and eliminating concerns about finding a charging station.
  </p>
  <p className="mb-4 text-gray-700">
    Another exciting area of innovation in the electric vehicle market is autonomous driving technology. As EVs become more capable and integrated with AI systems, self-driving features are being developed that can make driving even safer and more efficient. The combination of EVs and autonomous driving technology promises to reshape transportation by reducing traffic accidents, optimizing traffic flow, and enhancing the overall driving experience.
  </p>
  <p className="mb-4 text-gray-700">
    On a broader scale, the adoption of electric vehicles is poised to transform entire urban landscapes. As cities move towards smart infrastructure, EVs will be an essential part of the transportation ecosystem, seamlessly integrating with autonomous public transit systems, shared mobility platforms, and even electric flying vehicles. This holistic approach to transportation will help reduce congestion, lower emissions, and create more sustainable and livable cities.
  </p>
  <p className="text-gray-700">
    While the future of electric vehicles looks incredibly promising, there are still challenges to overcome. Issues such as battery recycling, rare earth material sourcing, and ensuring equitable access to charging infrastructure remain critical. However, with continued innovation and global cooperation, these obstacles can be addressed, and electric vehicles will continue to play a central role in the global transition to a more sustainable future.
  </p>
</div>

{/* Image */}
<div className="max-w-4xl mx-auto my-6">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpjz_daGmW8nVBCbEypUOmG6ubOSjBOslc0w&s"
          alt="GTA 6 Game"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>

      <div className="my-6 text-center">
  <script
    type="text/javascript"
    dangerouslySetInnerHTML={{
      __html: `
        atOptions = {
          'key' : '03d1272981fab4af247f649e79d8769c',
          'format' : 'iframe',
          'height' : 600,
          'width' : 160,
          'params' : {}
        };
      `,
    }}
  />
  <script
    type="text/javascript"
    src="//www.highperformanceformat.com/03d1272981fab4af247f649e79d8769c/invoke.js"
  />
</div>


      {/* Second Button at the bottom of the article */}
      {secondButtonVisible && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleSecondButtonClick}
            className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium text-lg hover:bg-green-700 transition duration-300"
            disabled={isLoading}
          >
            {secondButtonState === "Start"
              ? `Start (${secondCountdown})`
              : isLoading
              ? "Processing..."
              : "Continue"}
          </button>
        </div>
      )}


<div className="my-6 text-center">
  <script
    type="text/javascript"
    dangerouslySetInnerHTML={{
      __html: `
        atOptions = {
          'key' : '55a03f9bbf30f921b77f15386eb173eb',
          'format' : 'iframe',
          'height' : 250,
          'width' : 300,
          'params' : {}
        };
      `,
    }}
  />
  <script
    type="text/javascript"
    src="//www.highperformanceformat.com/55a03f9bbf30f921b77f15386eb173eb/invoke.js"
  />
</div>
    </div>
  );
}
