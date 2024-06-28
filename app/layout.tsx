import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { GoogleAnalytics } from '@next/third-parties/google'
import { Providers } from "./providers";
import { cn } from "../lib/utils/cn";
import { fontSans } from "../lib/fonts";
import Header from "../components/landing/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PDFternity",
  description: "App to view PDF templates, make changes and generate the PDF!",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
      <Providers>
      <body
        className={cn(
          "relative flex min-h-screen w-full flex-col justify-center overflow-x-hidden scroll-smooth bg-[#FCFCFC] dark:bg-black font-sans antialiased",
          fontSans.variable,
        )}
        >
          <Header/>
          {children}
        </body>
        <Toaster richColors position='top-center' closeButton expand visibleToasts={1} />
        </Providers>
    </html>
  );
};

export default RootLayout;
