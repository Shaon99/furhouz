// app/faq/page.tsx
import React from "react";
import FAQHero from "@/app/faq/components/FaqHero";
import FaqLongList from "./components/FaqLongList";

const FAQPage = () => {
  return (
    <div>
      <FAQHero />
      <FaqLongList />
    </div>
  );
};
export default FAQPage;
