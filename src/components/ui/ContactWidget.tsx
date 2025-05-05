"use client";
import { useState, useEffect } from "react";

/**
 * A premium, fully interactive contact widget with proper flags and intuitive icons
 */
export default function ContactWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("main");
  const [deviceType, setDeviceType] = useState("desktop");

  // Detect device type on mount and window resize
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setDeviceType("mobile");
      } else if (width < 1024) {
        setDeviceType("tablet");
      } else {
        setDeviceType("desktop");
      }
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Reset phone menu when widget is closed
  useEffect(() => {
    if (!isOpen) {
      setActiveMenu("main");
    }
  }, [isOpen]);

  // Main contact buttons
  const mainButtons = [
    {
      id: "phone",
      label: "Phone",
      bgColor: "bg-gradient-to-br from-green-500 to-green-600",
      shadowColor: "shadow-green-300/30",
      onClick: () => setActiveMenu("phone"),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-full h-full text-white"
        >
          <path
            fill="currentColor"
            d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"
          />
        </svg>
      ),
    },
    {
      id: "whatsapp",
      label: "WhatsApp",
      bgColor: "bg-gradient-to-br from-green-500 to-green-600",
      shadowColor: "shadow-green-300/30",
      href: "https://wa.me/37376061466",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="w-full h-full text-white"
        >
          <path
            fill="currentColor"
            d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
          />
        </svg>
      ),
    },
    {
      id: "viber",
      label: "Viber",
      bgColor: "bg-[#7360f2]",
      shadowColor: "shadow-[#ae9ef4]/30",
      href: "viber://chat?number=+37376061466",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 631.99 666.43"
          className="w-full h-full"
        >
          <defs>
            <style>{`.cls-1{fill:#fff;}.cls-2{fill:#7360f2;}`}</style>
          </defs>
          <title>Artboard 3</title>
          <path
            className="cls-1"
            d="M527.75,98.77c-14-12.72-74.43-50.69-200.52-51.24,0,0-149.3-9.81-221.78,55.84C65.1,143.2,51.51,202.43,50,274.72s-9.21,210.35,123,247.08h0s-.51,102.51-.58,111.52c0,6.3,1,10.61,4.6,11.5,2.6.63,6.47-.71,9.78-4,21.13-21.23,88.81-102.88,88.81-102.88,90.82,5.93,163.06-12,170.83-14.54,18.28-5.86,117.32-14.41,134.13-149.83C598,233.91,574.27,138.6,527.75,98.77Z"
          />
          <path
            className="cls-2"
            d="M560.65,65C544.09,49.72,477.17,1.14,328.11.48c0,0-175.78-10.6-261.47,68C18.94,116.19,2.16,186,.39,272.55S-3.67,521.3,152.68,565.28l.15,0-.1,67.11s-1,27.17,16.89,32.71c21.64,6.72,34.34-13.93,55-36.19,11.34-12.22,27-30.17,38.8-43.89,106.93,9,189.17-11.57,198.51-14.61,21.59-7,143.76-22.66,163.63-184.84C646.07,218.4,615.64,112.66,560.65,65Zm18.12,308.58C562,509,462.91,517.51,444.64,523.37c-7.77,2.5-80,20.47-170.83,14.54,0,0-67.68,81.65-88.82,102.88-3.3,3.32-7.18,4.66-9.77,4-3.64-.89-4.64-5.2-4.6-11.5.06-9,.58-111.52.58-111.52s-.08,0,0,0C38.94,485.05,46.65,347,48.15,274.71S63.23,143.2,103.57,103.37c72.48-65.65,221.79-55.84,221.79-55.84,126.09.55,186.51,38.52,200.52,51.24C572.4,138.6,596.1,233.91,578.77,373.54Z"
          />
          <path
            className="cls-2"
            d="M389.47,277.2a8.42,8.42,0,0,1-8.41-8c-1.43-28.61-14.91-42.62-42.42-44.1a8.43,8.43,0,0,1,.91-16.83c36.3,2,56.48,22.73,58.34,60.09a8.43,8.43,0,0,1-8,8.84Z"
          />
          <path
            className="cls-2"
            d="M432.73,291.7h-.2a8.43,8.43,0,0,1-8.23-8.62c.65-28.81-7.58-52.14-25.16-71.32s-41.53-29.58-73.46-31.92A8.43,8.43,0,1,1,326.91,163c35.93,2.63,64.41,15.2,84.66,37.35s30.32,50.17,29.58,83.08A8.44,8.44,0,0,1,432.73,291.7Z"
          />
          <path
            className="cls-2"
            d="M477,309a8.44,8.44,0,0,1-8.43-8.37c-.39-51.53-15.23-90.89-45.37-120.31-29.78-29-67.4-43.88-111.83-44.2a8.43,8.43,0,0,1,.06-16.86h.07c48.92.36,90.46,16.84,123.47,49S485,245,485.44,300.53a8.43,8.43,0,0,1-8.36,8.49Z"
          />
          <path
            className="cls-2"
            d="M340.76,381.68s11.85,1,18.23-6.86l12.44-15.65c6-7.76,20.48-12.71,34.66-4.81A366.67,366.67,0,0,1,437,374.1c9.41,6.92,28.68,23,28.74,23,9.18,7.75,11.3,19.13,5.05,31.13,0,.07-.05.19-.05.25a129.81,129.81,0,0,1-25.89,31.88c-.12.06-.12.12-.23.18q-13.38,11.18-26.29,12.71a17.39,17.39,0,0,1-3.84.24,35,35,0,0,1-11.18-1.72l-.28-.41c-13.26-3.74-35.4-13.1-72.27-33.44a430.39,430.39,0,0,1-60.72-40.11,318.31,318.31,0,0,1-27.31-24.22l-.92-.92-.92-.92h0l-.92-.92c-.31-.3-.61-.61-.92-.92a318.31,318.31,0,0,1-24.22-27.31,430.83,430.83,0,0,1-40.11-60.71c-20.34-36.88-29.7-59-33.44-72.28l-.41-.28a35,35,0,0,1-1.71-11.18,16.87,16.87,0,0,1,.23-3.84Q141,181.42,152.12,168c.06-.11.12-.11.18-.23a129.53,129.53,0,0,1,31.88-25.88c.06,0,.18-.06.25-.06,12-6.25,23.38-4.13,31.12,5,.06.06,16.11,19.33,23,28.74a366.67,366.67,0,0,1,19.74,30.94c7.9,14.17,2.95,28.68-4.81,34.66l-15.65,12.44c-7.9,6.38-6.86,18.23-6.86,18.23S254.15,359.57,340.76,381.68Z"
          />
        </svg>
      ),
    },
    {
      id: "telegram",
      label: "Telegram",
      bgColor: "bg-gradient-to-br from-blue-500 to-blue-600",
      shadowColor: "shadow-blue-300/30",
      href: "https://t.me/your_username",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 496 512"
          className="w-full h-full text-white"
        >
          <path
            fill="currentColor"
            d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"
          />
        </svg>
      ),
    },
  ];

  // Phone numbers for different countries
  const phoneNumbers = [
    {
      id: "md1",
      country: "MD",
      number: "+373 76 06 14 66",
      callUrl: "tel:+37376061466",
      bgColor: "bg-gradient-to-r from-blue-600 to-blue-700",
      ringColor: "ring-blue-400",
      shadowColor: "shadow-blue-400/20",
      flagSrc: "/images/moldova-flag.svg", // Path to Moldova flag SVG
    },
    {
      id: "ro",
      country: "RO",
      number: "+40 744 49 31 49",
      callUrl: "tel:+40744493149",
      bgColor: "bg-gradient-to-r from-yellow-500 to-yellow-600",
      ringColor: "ring-yellow-400",
      shadowColor: "shadow-yellow-400/20",
      flagSrc: "/images/romania-flag.svg", // Path to Romania flag SVG
    },
    {
      id: "md2",
      country: "MD",
      number: "+40 720 25 14 39",
      callUrl: "tel:+40720251439",
      bgColor: "bg-gradient-to-r from-blue-600 to-blue-700",
      ringColor: "ring-blue-400",
      shadowColor: "shadow-blue-400/20",
      flagSrc: "/images/moldova-flag.svg", // Path to Moldova flag SVG
    },
    {
      id: "back",
      label: "Back",
      bgColor: "bg-gradient-to-r from-gray-600 to-gray-700",
      ringColor: "ring-gray-400",
      shadowColor: "shadow-gray-400/20",
      onClick: () => setActiveMenu("main"),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          className="w-4 h-4 text-white"
        >
          <path
            fill="currentColor"
            d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
          />
        </svg>
      ),
    },
  ];

  // Toggle button
  const toggleButton = {
    open: {
      label: "Open Contact Menu",
      bgColor: "bg-gradient-to-br from-blue-500 to-blue-600",
      shadowColor: "shadow-blue-300/30",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-full h-full text-white"
        >
          <path
            fill="currentColor"
            d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
          />
        </svg>
      ),
    },
    close: {
      label: "Close Contact Menu",
      bgColor: "bg-gradient-to-br from-red-500 to-red-600",
      shadowColor: "shadow-red-300/30",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          className="w-full h-full text-white"
        >
          <path
            fill="currentColor"
            d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
          />
        </svg>
      ),
    },
  };

  // Get sizes based on device type
  const getButtonSize = () => {
    switch (deviceType) {
      case "mobile":
        return "w-12 h-12";
      case "tablet":
        return "w-14 h-14";
      default:
        return "w-16 h-16";
    }
  };

  const getIconSize = () => {
    switch (deviceType) {
      case "mobile":
        return "w-5 h-5";
      case "tablet":
        return "w-6 h-6";
      default:
        return "w-7 h-7";
    }
  };

  const getPhoneButtonWidth = () => {
    switch (deviceType) {
      case "mobile":
        return "max-w-[240px]";
      case "tablet":
        return "max-w-[300px]";
      default:
        return "max-w-[320px]";
    }
  };

  const getFontSize = () => {
    switch (deviceType) {
      case "mobile":
        return "text-xs";
      case "tablet":
        return "text-sm";
      default:
        return "text-base";
    }
  };

  // Position classes based on device
  const getPositionClasses = () => {
    switch (deviceType) {
      case "mobile":
        return "bottom-3 right-3 gap-2";
      case "tablet":
        return "bottom-4 right-4 gap-3";
      default:
        return "bottom-5 right-5 gap-4";
    }
  };

  return (
    <div
      className={`fixed z-50 flex flex-col items-end ${getPositionClasses()}`}
    >
      {/* Contact buttons - visible only when widget is open */}
      {isOpen && (
        <>
          {/* Phone Numbers Menu */}
          {activeMenu === "phone" && (
            <div
              className={`flex flex-col gap-3 ${getPhoneButtonWidth()} transition-all duration-500`}
              style={{
                opacity: 1,
                transform: "translateY(0)",
                animation: "fadeSlideIn 0.4s ease-out",
              }}
            >
              {phoneNumbers.map((phone, index) => (
                <a
                  key={phone.id}
                  href={phone.callUrl}
                  onClick={phone.onClick}
                  className={`flex items-center justify-between px-4 py-3 rounded-full 
                    ${phone.bgColor} ${phone.shadowColor} 
                    shadow-lg backdrop-blur-sm 
                    ring-1 ${phone.ringColor} ring-opacity-50
                    transition-all duration-300 transform hover:scale-[1.03] 
                    active:scale-95 ${getFontSize()}
                    animation-delay-${index}`}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animation: "fadeSlideIn 0.5s ease-out forwards",
                    opacity: 0,
                    transform: "translateY(20px)",
                  }}
                >
                  {phone.country ? (
                    <>
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-white">
                          {phone.country}
                        </span>
                        <span className="font-medium text-white">
                          {phone.number}
                        </span>
                      </div>
                    </>
                  ) : (
                    <div className="flex items-center justify-center w-full gap-2">
                      {phone.icon}
                      <span className="text-white font-medium">
                        {phone.label}
                      </span>
                    </div>
                  )}
                </a>
              ))}
            </div>
          )}

          {/* Main Contact Buttons */}
          {activeMenu === "main" && (
            <div className="flex flex-col gap-3">
              {mainButtons.map((button, index) => (
                <a
                  key={button.id}
                  href={button.href}
                  onClick={button.onClick}
                  target={button.href ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center ${getButtonSize()} rounded-full 
                    ${button.bgColor} ${button.shadowColor}
                    shadow-lg backdrop-blur-sm 
                    border border-white/20
                    transition-all duration-300 transform hover:scale-110 
                    hover:shadow-xl active:scale-95`}
                  aria-label={button.label}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animation: "fadeSlideIn 0.5s ease-out forwards",
                    opacity: 0,
                    transform: "translateY(20px)",
                  }}
                >
                  <div className={getIconSize()}>{button.icon}</div>
                </a>
              ))}
            </div>
          )}
        </>
      )}

      {/* Toggle Button - Always visible */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`flex items-center justify-center ${getButtonSize()} rounded-full 
          ${isOpen ? toggleButton.close.bgColor : toggleButton.open.bgColor}
          ${
            isOpen
              ? toggleButton.close.shadowColor
              : toggleButton.open.shadowColor
          }
          shadow-lg backdrop-blur-sm 
          border border-white/20
          transition-all duration-500 transform hover:scale-110 
          hover:shadow-xl active:scale-95 z-50`}
        aria-label={isOpen ? toggleButton.close.label : toggleButton.open.label}
      >
        <div className={getIconSize()}>
          {isOpen ? toggleButton.close.icon : toggleButton.open.icon}
        </div>
      </button>

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeSlideOut {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(20px);
          }
        }
      `}</style>
    </div>
  );
}
