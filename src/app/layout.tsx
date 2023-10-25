import type { Metadata } from "next";
import "./globals.css";
import AuthProvider from "@/components/AuthProvider";
import ProfileButton from "@/components/Button/ProfileButton";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import BackButton from "@/components/Button/BackButton";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "Money Counter",
  description: "Spending control",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className="p-2 pt-20 bg-body relative overflow-hidden max-h-screen">
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          pauseOnHover
          theme="dark"
        />
        <BackButton />
        <AuthProvider session={session}>
          <ProfileButton />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
