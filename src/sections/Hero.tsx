import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { WordsPullUp } from "../components/WordsPullUp";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        color: isHovered ? "#E1E0CC" : "rgba(225, 224, 204, 0.8)",
        transition: "color 0.3s ease",
      }}
      className="text-[10px] sm:text-xs md:text-sm uppercase tracking-wider font-medium whitespace-nowrap"
    >
      {children}
    </a>
  );
};

export const Hero: React.FC = () => {
  const navItems = [
    { name: "Giới thiệu", href: "#about" },
    { name: "Mục tiêu", href: "#features" },
    { name: "Kỹ năng", href: "#skills" },
    { name: "Dự án", href: "#projects" },
    { name: "Liên hệ", href: "#contact" },
  ];

  // Logic xử lý hiệu ứng Typing luân chuyển mượt mà
  const [typedText, setTypedText] = useState("");
  const [phase, setPhase] = useState<
    "typing1" | "deleting1" | "typing2" | "deleting2" | "final"
  >("typing1");

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const word1 = "MOBILE DEVELOPER";
    const word2 = "UI/UX DESIGNER";
    const finalWord = "MOBILE DEVELOPER & UI/UX DESIGNER";

    if (phase === "typing1") {
      if (typedText.length < word1.length) {
        timer = setTimeout(() => {
          setTypedText(word1.slice(0, typedText.length + 1));
        }, 90);
      } else {
        timer = setTimeout(() => setPhase("deleting1"), 1500);
      }
    } else if (phase === "deleting1") {
      if (typedText.length > 0) {
        timer = setTimeout(() => {
          setTypedText(typedText.slice(0, -1));
        }, 40);
      } else {
        timer = setTimeout(() => setPhase("typing2"), 400);
      }
    } else if (phase === "typing2") {
      if (typedText.length < word2.length) {
        timer = setTimeout(() => {
          setTypedText(word2.slice(0, typedText.length + 1));
        }, 90);
      } else {
        timer = setTimeout(() => setPhase("deleting2"), 1500);
      }
    } else if (phase === "deleting2") {
      if (typedText.length > 0) {
        timer = setTimeout(() => {
          setTypedText(typedText.slice(0, -1));
        }, 40);
      } else {
        timer = setTimeout(() => setPhase("final"), 400);
      }
    } else if (phase === "final") {
      if (typedText.length < finalWord.length) {
        timer = setTimeout(() => {
          setTypedText(finalWord.slice(0, typedText.length + 1));
        }, 70);
      }
    }

    return () => clearTimeout(timer);
  }, [typedText, phase]);

  return (
    <section className="h-screen w-full p-4 md:p-6 bg-black relative flex flex-col justify-between overflow-hidden">
      {/* Nhúng CSS nhấp nháy trực tiếp để tránh lỗi thiếu class styles */}
      <style>{`
        @keyframes blink {
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 0.8s step-end infinite;
        }
      `}</style>

      <div className="w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden relative flex flex-col justify-between">
        {/* 1. Background Video and Overlays */}
        <div className="absolute inset-0 z-0">
          <video
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full"
          />
          <div className="noise-overlay opacity-[0.7] mix-blend-overlay pointer-events-none absolute inset-0" />
          <div className="bg-gradient-to-b from-black/40 via-black/10 to-black/90 absolute inset-0" />
        </div>

        {/* 2. Floating Navbar Pill */}
        <div className="w-full flex justify-center absolute top-0 left-0 right-0 z-30">
          <nav className="bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-3 md:px-8 md:py-4 flex items-center justify-center gap-3 sm:gap-6 md:gap-12 lg:gap-14 border border-t-0 border-[#212121]/50 shadow-2xl">
            {navItems.map((item, idx) => (
              <NavLink key={idx} href={item.href}>
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* 3. Tiêu đề trung tâm cấu trúc hàng dọc (PORTFOLIO & TÊN NỔI BẬT) */}
        <div className="absolute inset-0 flex flex-col items-center justify-start pt-[20vh] sm:pt-[16vh] md:pt-[12vh] z-10 pointer-events-none select-none w-full px-4 text-center">
          <WordsPullUp
            text="PORTFOLIO"
            className="font-medium leading-[0.8] tracking-[-0.06em] text-center justify-center text-[16vw] sm:text-[15vw] md:text-[13vw] lg:text-[11vw] xl:text-[10vw]"
            showAsterisk={true}
            delay={0.1}
          />

          {/* Khối danh tính của bạn */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto mt-4 md:mt-6 flex flex-col items-center gap-2 md:gap-3 group"
          >
            {/* Họ và tên chính */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-widest text-[#E1E0CC] transition-all duration-500 group-hover:scale-105 group-hover:drop-shadow-[0_0_15px_rgba(225,224,204,0.3)] cursor-default font-sans">
              NGUYỄN THÁI AN
            </h1>

            <div className="h-[1px] w-16 bg-primary/40 transition-all duration-500 group-hover:w-32 group-hover:bg-primary" />

            {/* Vai trò được làm to nổi bật hơn, sử dụng font-bold, màu primary sáng, kèm hiệu ứng Typing */}
            <p className="text-primary font-bold uppercase tracking-[0.2em] text-xs sm:text-sm md:text-base min-h-[1.5rem] flex items-center justify-center gap-0.5 drop-shadow-[0_0_10px_rgba(var(--primary-rgb),0.2)]">
              <span>{typedText}</span>
              {phase !== "final" ||
              typedText.length < "MOBILE DEVELOPER & UI/UX DESIGNER".length ? (
                <span className="w-[2px] h-[1em] bg-primary animate-blink inline-block shadow-[0_0_8px_#primary]" />
              ) : null}
            </p>
          </motion.div>
        </div>

        {/* 4. Khối nội dung mô tả Typography bản lớn sang trọng ở đáy màn hình */}
        <div className="mt-auto w-full p-6 md:p-12 z-20 max-w-5xl mx-auto flex flex-col items-center text-center gap-6 md:gap-8 bg-gradient-to-t from-black/60 via-transparent to-transparent pt-32">
          <div className="flex flex-col items-center gap-3 max-w-4xl">
            {/* Tagline nghệ thuật Serif */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal text-[#E1E0CC]/95 font-serif italic"
            >
              "MONG MUỐN TRỞ THÀNH MOBIE DEVELOPER SIÊU HẠNG"
            </motion.h2>

            {/* Đoạn tuyên ngôn cốt lõi định vị thương hiệu bản thân */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-[#E1E0CC]/80 text-sm sm:text-base md:text-lg lg:text-xl font-light leading-relaxed tracking-wide"
            >
              Tôi định hướng trở thành một{" "}
              <span className="text-[#E1E0CC] font-medium border-b border-primary/40 pb-0.5">
                Product Engineer thực thụ
              </span>{" "}
              — kết hợp tư duy kỹ thuật để tối ưu mã nguồn và thẩm mỹ nghệ thuật
              để làm chủ trải nghiệm, đưa sản phẩm trọn vẹn từ bản vẽ Figma đến
              kho ứng dụng.
            </motion.p>
          </div>

          {/* Các nút hành động Call To Action */}
          <div className="flex flex-wrap gap-4 items-center justify-center w-full mt-2">
            <motion.a
              href="#projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 pl-6 pr-2 py-2 bg-primary text-black rounded-full font-medium text-xs sm:text-sm transition-all duration-300 group hover:gap-4 cursor-pointer shadow-lg shadow-primary/10"
            >
              <span>Khám phá dự án</span>
              <div className="flex items-center justify-center bg-black rounded-full w-8 h-8 transition-transform duration-300 group-hover:scale-110">
                <ArrowRight className="w-4 h-4 text-primary" />
              </div>
            </motion.a>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center text-xs sm:text-sm font-medium px-5 py-2.5 text-[#E1E0CC]/80 hover:text-[#E1E0CC] transition-all border border-[#E1E0CC]/20 hover:border-[#E1E0CC]/50 rounded-full cursor-pointer bg-white/5 backdrop-blur-sm"
            >
              Liên hệ với tôi
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};
