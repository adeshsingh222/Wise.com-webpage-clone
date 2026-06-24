"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import AuthModal from "@/components/calculator/AuthModal";

interface AuthContextType {
  openAuthModal: (data?: { sendAmount: string; sourceCurrCode: string }) => void;
  closeAuthModal: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState<{ sendAmount: string; sourceCurrCode: string } | null>(null);

  const openAuthModal = (data?: { sendAmount: string; sourceCurrCode: string }) => {
    if (data) {
      setModalData(data);
    } else {
      setModalData(null);
    }
    setIsOpen(true);
  };

  const closeAuthModal = () => {
    setIsOpen(false);
    // Optional: wait for animation to finish before clearing data
    setTimeout(() => setModalData(null), 300);
  };

  return (
    <AuthContext.Provider value={{ openAuthModal, closeAuthModal }}>
      {children}
      <AuthModal
        isOpen={isOpen}
        onClose={closeAuthModal}
        sendAmount={modalData?.sendAmount}
        sourceCurrCode={modalData?.sourceCurrCode}
      />
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
