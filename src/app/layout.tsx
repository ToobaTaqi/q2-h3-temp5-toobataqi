import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NotificationBar from "../components/globalComponents/NotificationBar";
// import Navbar from "../../components/globalComponents/Navbar";
// import { NextIntlClientProvider } from "next-intl";
// import { getMessages } from "next-intl/server";

import Footer from "../components/globalComponents/Footer";
import NavBarMobile from "../components/globalComponents/NavBarMobile";
import NavBarDesktop from "../components/globalComponents/NavBarDesktop";
// import Navbar from "@/components/globalComponents/Navbar";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export const metadata: Metadata = {
//   title: "BANDAGE",
//   description: "Hackathon-3 by Tooba Taqi",
// };

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: string;
  };
}>) {
  // const messages = await getMessages();

  return (
    <html lang={locale}>
      {/* <CartProvider> */}
      {/* <counterContext.Provider value={}> */}
      <body className="max-w-[3840px] mx-auto  text-[#252B42] ]">
        {/* <NextIntlClientProvider messages={messages}> */}
        <div>
          <header>
            <NavBarDesktop />
            <NavBarMobile />
            {/* <Navbar /> */}
          </header>
          {children}
          <Footer />
        </div>
        {/* </NextIntlClientProvider> */}
      </body>
      {/* </counterContext.Provider> */}
      {/* </CartProvider> */}
    </html>
  );
}
