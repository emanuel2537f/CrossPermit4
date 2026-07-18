export function WhatsAppButton() {
  return (
    <div className="group fixed bottom-5 right-5 z-[100] flex items-center gap-2 sm:bottom-6 sm:right-6">
      <span
        aria-hidden="true"
        className="pointer-events-none translate-x-3 whitespace-nowrap rounded-full bg-[#25D366] px-4 py-1.5 text-sm font-semibold leading-none text-white opacity-0 shadow-[0_5px_18px_rgba(0,0,0,0.18)] transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-within:translate-x-0 group-focus-within:opacity-100"
      >
        Chat with us
      </span>
      <a
        href="https://wa.me/355685003416"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with CrossPermit on WhatsApp at +355 68 500 3416"
        className="block h-14 w-14 shrink-0 drop-shadow-[0_6px_10px_rgba(0,0,0,0.25)] transition-transform duration-200 hover:scale-105 focus-visible:scale-105 focus-visible:outline-none"
      >
        <svg
          viewBox="0 0 32 32"
          className="h-full w-full overflow-visible"
          aria-hidden="true"
        >
          <circle cx="16" cy="15.9" r="12.6" fill="#25D366" />
          <path
            fill="white"
            fillRule="evenodd"
            d="M16.04 2.67A13.17 13.17 0 0 0 4.69 22.52L2.8 29.4l7.05-1.85a13.16 13.16 0 1 0 6.19-24.88Zm0 23.97c-1.93 0-3.82-.52-5.47-1.5l-.39-.23-4.18 1.1 1.12-4.08-.25-.42a10.83 10.83 0 1 1 9.17 5.13Zm5.94-8.1c-.33-.16-1.93-.95-2.23-1.06-.3-.11-.52-.16-.74.16-.22.33-.85 1.06-1.04 1.28-.19.22-.38.25-.71.08-.32-.16-1.37-.5-2.61-1.61a9.77 9.77 0 0 1-1.81-2.25c-.19-.33-.02-.5.14-.67.15-.15.33-.38.49-.57.16-.19.22-.33.33-.55.11-.21.05-.4-.03-.57-.08-.16-.74-1.78-1.01-2.44-.27-.64-.54-.56-.74-.57h-.63c-.22 0-.57.08-.87.4-.3.33-1.15 1.12-1.15 2.74s1.18 3.18 1.34 3.4c.17.21 2.32 3.54 5.62 4.97.79.34 1.4.54 1.88.69.79.25 1.5.21 2.07.13.63-.1 1.93-.79 2.2-1.55.27-.76.27-1.41.19-1.55-.08-.14-.3-.22-.63-.38Z"
          />
        </svg>
      </a>
    </div>
  );
}
