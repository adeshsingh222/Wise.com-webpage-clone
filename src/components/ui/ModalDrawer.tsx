"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion, useDragControls } from "framer-motion";
import { X } from "lucide-react";

interface ModalDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  maxWidth?: string;
}

export default function ModalDrawer({ isOpen, onClose, children, maxWidth = "max-w-[560px]" }: ModalDrawerProps) {
  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  // Lock body scroll and handle history pushState for native back button on mobile
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      
      const stateId = Math.random().toString();
      window.history.pushState({ modalId: stateId }, "");
      
      const handlePopState = (e: PopStateEvent) => {
        onCloseRef.current();
      };
      window.addEventListener("popstate", handlePopState);
      
      return () => { 
        document.body.style.overflow = ""; 
        window.removeEventListener("popstate", handlePopState);
        if (window.history.state?.modalId === stateId) {
          window.history.back();
        }
      };
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* ── Backdrop ── */}
          <motion.div
            key="backdrop"
            className="fixed inset-0 bg-black/60 z-[200]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          {/* ── Desktop Modal ── */}
          <motion.div
            key="modal"
            className="hidden md:flex fixed inset-0 z-[201] items-center justify-center p-6"
            onClick={onClose}
          >
            <motion.div
              className={`bg-white rounded-[24px] w-full ${maxWidth} max-h-[90vh] overflow-y-auto relative shadow-2xl [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]`}
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 12 }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close btn */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors z-10"
              >
                <X size={17} className="text-slate-600" />
              </button>
              {children}
            </motion.div>
          </motion.div>

          {/* ── Mobile Drawer ── */}
          <motion.div
            key="drawer"
            className="md:hidden fixed bottom-0 left-0 right-0 z-[201] bg-white rounded-t-[28px] max-h-[92vh] overflow-y-auto shadow-2xl [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] overscroll-none"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
            onClick={(e) => e.stopPropagation()}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.4 }}
            onDragEnd={(e, info) => {
              if (info.offset.y > 100 || info.velocity.y > 500) {
                onClose();
              }
            }}
          >
            {/* Drag handle */}
            <div className="flex justify-center pt-3 pb-1 sticky top-0 bg-white z-10">
              <div className="w-10 h-1.5 bg-slate-200 rounded-full" />
            </div>
            {/* Close btn */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors z-10"
            >
              <X size={17} className="text-slate-600" />
            </button>
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
