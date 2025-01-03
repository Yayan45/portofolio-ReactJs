import React from "react";

const TopScroll = () => {
  return (
    <div>
      <a
        href="#home"
        class="fixed bottom-3 right-4 z-[9999] hidden h-14 w-14 items-center justify-center rounded-full bg-hero p-4 hover:animate-pulse"
        id="to-top"
      >
        <span class="mt-2 block h-5 w-5 rotate-45 border-t-2 border-l-2"></span>
      </a>
    </div>
  );
};

export default TopScroll;
