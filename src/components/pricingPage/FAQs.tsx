// parent of QnA
import React from "react";
import QnA from "./QnA";
// import QnA from "./QnA";

export default function FAQs() {
  return (
    <section className="bg-white lg:w-[80vw] mx-auto text-[#252B42] flex flex-col gap-[80px] py-[80px]">
      <div className="w-[80vw]  px-10 mx-auto text-center flex flex-col gap-[15px]">
        <h2 className="font-bold text-[40px]">Pricing FAQs</h2>
        <p className="text-sm ">
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row lg:flex-wrap gap-[10px]">
        <QnA
          q="Work better together"
          a="Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
        />
        <QnA
          q="OpenType features and 
Variable fonts"
          a="Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
        />

        <QnA
          q="Start working faster today"
          a="Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
        />

        <QnA
          q="Work at the speed of thought."
          a="Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
        />
        <QnA
          q="The Fastest way to organize"
          a="Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
        />
        <QnA
          q="The Fastest way to navigate"
          a="Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
        />
      </div>

      <div className="text-[#737373] text-xl text-center">
        <h4>
          Haven't got your answer? <br className="lg:hidden" />
          Contact out support
        </h4>
      </div>
    </section>
  );
}
