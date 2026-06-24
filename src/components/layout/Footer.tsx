const Facebook = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);
const Twitter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
);
const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);
const Youtube = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
);
const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#f2f4f2] text-new-world-dark py-16 border-t border-slate-200">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16 border-b border-new-world-dark/10 pb-8">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 text-[15px] font-semibold">
            <a href="#" className="hover:opacity-70">Help</a>
            <a href="#" className="hover:opacity-70">Help centre</a>
            <a href="#" className="hover:opacity-70">Service status</a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
          <div className="flex items-center cursor-pointer">
            <svg viewBox="0 0 45 16" width="100" height="34" xmlns="http://www.w3.org/2000/svg"><path d="M12.44 14.7H4.37l4.3-8.8H0l3.05-5.9h13.23l-3.84 14.7zM24.7 14.7h-3.4l.28-7.9c0-1.28-.68-1.55-1.5-1.55-1.6 0-3.3 1.36-4.14 2.86l-.2-6.2h-3.3l-1.9 14.7h3.4l.65-5.02c.7-1.12 1.9-2.2 3.16-2.2.82 0 1.25.46 1.25 1.4v5.8h3.36l.35-7.9c.02-1.3-.65-1.54-1.46-1.54-1.6 0-3.23 1.36-4.08 2.87l-.2-6.2h-3.3l-1.9 14.7h3.4l.64-5.02c.7-1.12 1.9-2.2 3.16-2.2.83 0 1.26.46 1.26 1.4v5.8h3.4zm10.74 0l1.1-5.1h-4.3l-.6 2.3h-4.3c1.1-2.9 4-6 9.4-6 2.45 0 3.52 1 3.52 2.7 0 3.23-2.34 6.1-4.82 6.1zm6.75-9.36c-1.8 0-3.1 1.26-3.1 2.8 0 1.46 1.05 2 2.5 2h.2c1.08 0 1.63.4 1.63 1.05 0 1.04-1.1 1.9-2.73 1.9-1.5 0-3.04-.6-4.08-1.5l1.65-2.5c1 .73 2.15 1.25 3.32 1.25.9 0 1.4-.38 1.4-.9 0-.6-.35-.94-1.8-1.12-1.86-.23-3.08-.8-3.08-2.3 0-1.62 1.44-3.3 3.96-3.3 1.76 0 3.02.66 3.92 1.54l-1.88 2.3c-.7-.52-1.57-.92-2.4-.92h.4zM16.92-.02l-3.2 24h3.35l3.2-24h-3.35z" fill="#12312b" fillRule="evenodd" /></svg>
          </div>

          <div className="flex gap-6">
            <a href="#" className="w-8 h-8 flex items-center justify-center hover:opacity-70"><Facebook className="w-6 h-6 fill-current" /></a>
            <a href="#" className="w-8 h-8 flex items-center justify-center hover:opacity-70"><Twitter className="w-6 h-6 fill-current" /></a>
            <a href="#" className="w-8 h-8 flex items-center justify-center hover:opacity-70"><Instagram className="w-6 h-6" /></a>
            <a href="#" className="w-8 h-8 flex items-center justify-center hover:opacity-70"><Youtube className="w-6 h-6" /></a>
            <a href="#" className="w-8 h-8 flex items-center justify-center hover:opacity-70"><Linkedin className="w-6 h-6 fill-current" /></a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-8 mb-16 text-[15px] max-w-4xl font-medium">
          <a href="#" className="hover:opacity-70">Legal</a>
          <a href="#" className="hover:opacity-70">Privacy policy</a>
          <a href="#" className="hover:opacity-70">Cookie policy</a>
          <a href="#" className="hover:opacity-70">Research privacy policy</a>
          <a href="#" className="hover:opacity-70">Complaints</a>
          <a href="#" className="hover:opacity-70">Country site map</a>
          <a href="#" className="hover:opacity-70">Modern slavery statement</a>
          <a href="#" className="hover:opacity-70">Accessibility</a>
          <a href="#" className="hover:opacity-70">Intellectual property</a>
        </div>

        <div className="text-[13px] text-new-world-dark/70 font-medium space-y-4 max-w-5xl leading-relaxed">
          <p>© Wise Payments Limited {new Date().getFullYear()}</p>
          <p>Wise Payments Limited (Wise) is authorised by the Financial Conduct Authority under the Electronic Money Regulations 2011, Firm Reference 900507, for the issuing of electronic money. Wise works with a local bank partner to offer inward remittance service to India with the approval of the Reserve Bank of India (RBI).</p>
          <p>Vaho Forex Private Limited holds an Authorised Dealer Category II license with the RBI to provide outward remittance services for limited purposes and forex card services as per applicable laws. Wise Payments India Private Limited currently is an in-principle approved Payment Aggregator - Cross Border.</p>
        </div>
      </div>
    </footer>
  );
}
