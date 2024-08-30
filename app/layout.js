import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Domo",
  description: "Domo app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <div className="text-center">
            <img src="https://i.imgur.com/xkhCMjT.png" alt="Logo" className="mx-auto mb-8"></img>
            {children}
          </div>
          
        </main>
      </body>
    </html>
  );
}
