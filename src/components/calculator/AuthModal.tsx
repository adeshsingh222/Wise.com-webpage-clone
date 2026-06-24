import { Mail, Lock } from "lucide-react";
import ModalDrawer from "../ui/ModalDrawer";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  sendAmount?: string;
  sourceCurrCode?: string;
}

export default function AuthModal({ isOpen, onClose, sendAmount, sourceCurrCode }: AuthModalProps) {
  return (
    <ModalDrawer isOpen={isOpen} onClose={onClose} maxWidth="max-w-[440px]">
      <div className="px-8 pt-8 pb-8">
        <h2 className="text-2xl font-black tracking-tight text-new-world-dark mb-2">
          Welcome to Wise
        </h2>
        <p className="text-[15px] text-slate-500 mb-8 leading-relaxed">
          {sendAmount && sourceCurrCode ? (
            <>Create an account to securely send <strong>{sendAmount} {sourceCurrCode}</strong> today.</>
          ) : (
            <>Create an account to join 16 million people securely moving money today.</>
          )}
        </p>

        <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-[13px] font-bold text-slate-700 mb-1.5 ml-1">Email address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail size={18} className="text-slate-400" />
              </div>
              <input
                type="email"
                placeholder="name@example.com"
                className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-[15px] rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent block pl-11 p-3.5 transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-[13px] font-bold text-slate-700 mb-1.5 ml-1">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Lock size={18} className="text-slate-400" />
              </div>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-[15px] rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent block pl-11 p-3.5 transition-all"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-4 w-full bg-primary hover:bg-slate-800 text-white py-4 rounded-full font-bold text-[16px] transition-colors"
          >
            Continue
          </button>
        </form>

        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 border-t border-slate-100"></div>
          <span className="text-[13px] text-slate-400 font-medium uppercase tracking-wider">or</span>
          <div className="flex-1 border-t border-slate-100"></div>
        </div>

        <div className="flex flex-col gap-3">
          <button className="flex items-center justify-center gap-3 w-full bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 py-3.5 rounded-full font-bold text-[15px] transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Continue with Google
          </button>
          <button className="flex items-center justify-center gap-3 w-full bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 py-3.5 rounded-full font-bold text-[15px] transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.26-.74 3.58-.71 1.53.04 2.88.75 3.65 1.93-3.14 1.83-2.65 6.01.4 7.23-.74 1.76-1.57 3.23-2.71 4.72z" />
              <path d="M12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.02 4.41-3.74 4.25z" />
            </svg>
            Continue with Apple
          </button>
        </div>
      </div>
      <div className="bg-slate-50 px-8 py-5 text-center text-[13px] text-slate-500 border-t border-slate-100 w-full rounded-b-[24px] md:rounded-b-[24px]">
        Already have an account? <a href="#" className="font-bold text-primary hover:underline">Log in</a>
      </div>
    </ModalDrawer>
  );
}
