import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import ClientGoogleTagManager from "./components/helper/google-tag-manager";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Raza - Portfolio",
  description:
    "This is the portfolio of Mohammed Sibtain Raza.I’m a full-stack developer with a creative edge and a real love for the web. Curiosity keeps me going, and I’ve always been the type to teach myself and figure things out.I enjoy turning ideas into products that actually work and feel good to use.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-gray-900 dark:text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
        <ClientGoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
      </body>
    </html>
  );
}
