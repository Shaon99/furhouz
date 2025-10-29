"use client"

export function WhatsAppHelpWidget() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "1234567890";
    const message = "Hello, I need help!";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 flex items-center gap-3 px-4 py-3 z-50 animate-[whatsapp-updown_2.5s_ease-in-out_infinite]"
      aria-label="Chat with us on WhatsApp"
    >
      <span className="text-sm font-medium text-gray-800 bg-white shadow-xl rounded-xl px-4 py-3">
        Need Help? Chat with us
      </span>
      <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center">
        <img src="/WhatsApp.webp" alt="Whatsapp" width={44} height={44} />
      </div>
      <style>
        {`
          @keyframes whatsapp-updown {
            0%, 100% { transform: translateY(0); }
            20% { transform: translateY(-18px);}
            50% { transform: translateY(0);}
          }
        `}
      </style>
    </button>
  );
}
