import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useAuth } from "../AuthProvider";
import ChatWidget from "../ChatWidget/ChatWidget";

const MainLayout = () => {
  const location = useLocation();
  const { user, logout } = useAuth();

  const staticPaths = [
    "/register",
    "/login",
    "/oauth-success",
    "/complete-signup",
    "/instructor/dashboard",
  ];

  const dynamicPathPatterns = [/^\/courses\/[^/]+$/];

  const shouldHideChatWidget =
    staticPaths.includes(location.pathname) ||
    dynamicPathPatterns.some((pattern) => pattern.test(location.pathname));

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {!shouldHideChatWidget && <ChatWidget />}
      <Header user={user} onLogout={logout} />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
