import { useState } from "react";
import globeImg from "../../public/globe.png";
import pinImg from "../../public/pin.png";
import { pins } from "../constants";

export default function Globe() {
  const [hoveredPin, setHoveredPin] = useState(null);

  return (
    <div className="min-h-screen bg-zinc-900 flex items-center justify-center overflow-x-hidden">
      <div className="relative w-full max-w-screen-2xl h-[80vh] mx-auto">
        <div className="absolute inset-x-0 mx-auto bottom-0 h-full overflow-hidden">
          <img
            src={globeImg}
            alt="Interactive Globe"
            decoding="async"
            loading="lazy"
            className="absolute  bottom-0 w-[200%] h-[450%] object-cover opacity-80"
            style={{
              transform: "translateY(77%)",
              filter:
                "brightness(0.8) contrast(1.2) saturate(0.5) drop-shadow(0px -10px 40px rgba(255, 255, 255, 0.8))",
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent via-zinc-900/50"></div>
        </div>

        {pins.map((pin) => (
          <div
            key={pin.id}
            className="absolute transition-all duration-300 ease-out"
            style={{ top: pin.top, left: pin.left }}
            onMouseEnter={() => setHoveredPin(pin.id)}
            onMouseLeave={() => setHoveredPin(null)}
          >
            <img
              src={pinImg}
              alt="Pin"
              className={`w-12 h-12 transition-all cursor-pointer  relative duration-300
    ${hoveredPin === pin.id ? "scale-125 drop-shadow-xl" : "scale-100"}
  `}
            />

            <div
              className={`absolute left-1/2 -translate-x-1/2 bottom-full mb-2 transition-all duration-500 ease-out origin-bottom
    ${
      hoveredPin === pin.id
        ? "opacity-100 scale-110 translate-y-0 pointer-events-auto z-[999]"
        : "opacity-0 scale-90 translate-y-2 pointer-events-none z-0"
    }`}
            >
              <div className="w-64 p-4 rounded-xl shadow-2xl backdrop-blur-sm border z-50 border-zinc-700/50 bg-zinc-800/80 text-white">
                {pin.imageUrl && (
                  <div className="h-36 w-full relative">
                    <img
                      src={pin.imageUrl}
                      alt={pin.city}
                      className="w-full h-full object-cover rounded-lg"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                  </div>
                )}
                <div className="flex items-center space-x-2 mt-2">
                  <h3 className="text-lg font-bold text-red-400">{pin.city}</h3>
                </div>
                {/* <div className="flex justify-around text-xs text-gray-400 mb-3 border-b border-gray-700/50 pb-3">
                  {pin.features.map((feature, index) => (
                    <div key={index} className="text-center">
                      <i className={`${feature.icon} text-lg text-red-500`}></i>
                      <p className="mt-1 text-[10px] uppercase font-medium">
                        {feature.label}
                      </p>
                    </div>
                  ))}
                </div> */}
                <p className="text-xs font-light text-zinc-300 mb-2">
                  {pin.description}
                </p>
                {/* <div className="flex justify-between text-xs text-zinc-400">
                  <p>
                    <strong>{pin.country}</strong>
                  </p>
                  <p>{pin.stats}</p>
                </div> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
