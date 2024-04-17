import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { GoogleAnalytics } from '@next/third-parties/google'

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
    <html lang="en">
       <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
      <body className={inter.className}>{children}</body>
      <Toaster richColors position='top-center' closeButton expand visibleToasts={1}/>
    </html>
  );
};

export default RootLayout;
