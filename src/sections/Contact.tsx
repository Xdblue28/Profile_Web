
import { Mail } from 'lucide-react';

const GithubIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const FacebookIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-4 md:px-8 bg-black relative flex flex-col items-center">
      {/* Cinematic Divider */}
      <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-[#212121]/50 to-transparent" />
      
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start text-left mt-8">
        
        {/* Left Column: Heading and info */}
        <div className="md:col-span-6 flex flex-col justify-start">
          <span className="text-primary text-[10px] sm:text-xs uppercase tracking-widest font-semibold mb-4 tracking-wider">
            Kết nối & Cộng tác
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#E1E0CC] mb-6 leading-tight">
            Liên hệ với tôi
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed font-light mb-8 max-w-lg">
            Bạn có một ý tưởng ứng dụng thú vị? Hãy cùng biến nó thành hiện thực nhé! Dù bạn là nhà tuyển dụng đang tìm kiếm một fresher có năng lực, bạn bè muốn cộng tác side-project, hay chỉ đơn giản muốn hỏi thăm — inbox của tôi luôn mở. 😄
          </p>

          {/* Contact Links */}
          <div className="flex flex-col gap-4">
            <a 
              href="mailto:xdblue28@gmail.com" 
              className="flex items-center gap-3 text-primary/80 hover:text-primary transition-all duration-300 text-sm sm:text-base"
              style={{ color: '#DEDBC8' }}
            >
              <Mail className="w-5 h-5 flex-shrink-0" />
              <span className="font-light hover:underline">xdblue28@gmail.com</span>
            </a>
            
            <a 
              href="https://github.com/Xdblue28" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 text-primary/80 hover:text-primary transition-all duration-300 text-sm sm:text-base"
              style={{ color: '#DEDBC8' }}
            >
              <GithubIcon className="w-5 h-5 flex-shrink-0" />
              <span className="font-light hover:underline">github.com/Xdblue28</span>
            </a>
            
            <a 
              href="https://www.facebook.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 text-primary/80 hover:text-primary transition-all duration-300 text-sm sm:text-base"
              style={{ color: '#DEDBC8' }}
            >
              <FacebookIcon className="w-5 h-5 flex-shrink-0" />
              <span className="font-light hover:underline">Nguyễn Thái An</span>
            </a>
          </div>
        </div>

        {/* Right Column: Premium Dark Message Box */}
        <div className="md:col-span-6 bg-[#101010] border border-[#212121]/80 rounded-2xl p-6 sm:p-8 w-full relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-[60px] pointer-events-none" />
          
          <h3 className="text-base sm:text-lg text-[#E1E0CC] font-medium mb-6">Gửi tin nhắn cho tôi</h3>
          
          <form className="flex flex-col gap-4 animate-fade-in" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-1.5">
              <label className="text-[9px] text-gray-500 uppercase tracking-wider font-medium">Họ & Tên</label>
              <input 
                type="text" 
                placeholder="Nguyễn Văn A" 
                className="w-full bg-black/40 border border-[#212121] rounded-lg px-4 py-2.5 text-[#E1E0CC] text-sm focus:outline-none focus:border-primary/40 transition-all duration-300 placeholder:text-gray-700"
              />
            </div>
            
            <div className="flex flex-col gap-1.5">
              <label className="text-[9px] text-gray-500 uppercase tracking-wider font-medium">Email</label>
              <input 
                type="email" 
                placeholder="example@gmail.com" 
                className="w-full bg-black/40 border border-[#212121] rounded-lg px-4 py-2.5 text-[#E1E0CC] text-sm focus:outline-none focus:border-primary/40 transition-all duration-300 placeholder:text-gray-700"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[9px] text-gray-500 uppercase tracking-wider font-medium">Lời nhắn</label>
              <textarea 
                rows={4}
                placeholder="Hãy viết ý tưởng của bạn ở đây..." 
                className="w-full bg-black/40 border border-[#212121] rounded-lg px-4 py-2.5 text-[#E1E0CC] text-sm focus:outline-none focus:border-primary/40 transition-all duration-300 placeholder:text-gray-700 resize-none"
              />
            </div>

            <button 
              type="submit" 
              className="mt-2 w-full bg-primary text-black font-semibold text-xs sm:text-sm py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              Gửi tin nhắn
            </button>
          </form>
        </div>

      </div>

      {/* Footer copyright */}
      <footer className="w-full max-w-6xl text-center mt-20 pt-8 border-t border-[#212121]/40 text-gray-600 text-[10px] sm:text-xs font-light">
        <p>&copy; {new Date().getFullYear()} Nguyễn Thái An. Thiết kế lấy cảm hứng từ sự mượt mà và logic di động. Bảo lưu mọi quyền.</p>
      </footer>
    </section>
  );
};
