import { useRef, useState } from "react";
import { useScroll, motion, AnimatePresence } from "framer-motion";
import { WordsPullUpMultiStyle } from "../components/WordsPullUpMultiStyle";
import { AnimatedLetter } from "../components/AnimatedLetter";
import CircularGallery from "../components/CircularGallery";
import {
  ChevronLeft,
  ChevronRight,
  Music,
  Gamepad2,
  Headphones,
  Sparkles,
} from "lucide-react";

export const About: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: bodyRef,
    offset: ["start 0.9", "end 0.2"],
  });

  // FUT Player Selection Card States & Data
  const [cardIdx, setCardIdx] = useState(0);
  const [slideDirection, setSlideDirection] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const futCards = [
    {
      id: "guitar",
      category: "Guitar",
      title: "Chơi Guitar",
      quote: "Giai điệu mộc mạc kết nối những tâm hồn đồng điệu.",
      color: "#F59E0B",
      rgb: "245, 158, 11",
      themeGlow: "rgba(245, 158, 11, 0.25)",
      bgImage:
        "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?w=400&q=80",
      icon: <Music className="w-8 h-8 text-amber-400 animate-pulse" />,
    },
    {
      id: "fc26",
      category: "Gaming",
      title: "Game FC 26",
      quote: "Chiến thuật đỉnh cao, làm chủ từng khoảnh khắc trên sân cỏ ảo.",
      color: "#06B6D4",
      rgb: "6, 182, 212",
      themeGlow: "rgba(6, 182, 212, 0.25)",
      bgImage:
        "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&q=80",
      icon: <Gamepad2 className="w-8 h-8 text-cyan-400 animate-pulse" />,
    },
    {
      id: "music",
      category: "Music",
      title: "Nghe Nhạc",
      quote: "Nơi ngôn từ bất lực, âm nhạc sẽ cất lời.",
      color: "#EC4899",
      rgb: "236, 72, 153",
      themeGlow: "rgba(236, 72, 153, 0.25)",
      bgImage:
        "https://images.unsplash.com/photo-1484755560695-a4c74891d06b?w=400&q=80",
      icon: <Headphones className="w-8 h-8 text-pink-400 animate-pulse" />,
    },
    {
      id: "harrypotter",
      category: "Magic",
      title: "Harry Potter",
      quote: "Expecto Patronum! Đam mê khám phá thế giới ma thuật kỳ bí.",
      color: "#8B5CF6",
      rgb: "139, 92, 246",
      themeGlow: "rgba(139, 92, 246, 0.25)",
      bgImage:
        "https://images.unsplash.com/photo-1547891654-e66ed7edd96c?w=400&q=80",
      icon: <Sparkles className="w-8 h-8 text-violet-400 animate-pulse" />,
    },
  ];

  const handleNext = () => {
    setSlideDirection(1);
    setCardIdx((prev) => (prev + 1) % futCards.length);
  };

  const handlePrev = () => {
    setSlideDirection(-1);
    setCardIdx((prev) => (prev - 1 + futCards.length) % futCards.length);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    const tiltX = (yc - y) / 10;
    const tiltY = (x - xc) / 10;
    setTilt({ x: tiltX, y: tiltY });

    const px = (x / rect.width) * 100;
    const py = (y / rect.height) * 100;
    setGlare({ x: px, y: py, opacity: 0.5 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  };

  const headingSegments = [
    {
      text: "Tôi là Nguyễn Thái An, ",
      className: "font-normal text-[#E1E0CC]",
    },
    {
      text: "sinh viên Đại học Điện Lực. ",
      className: "italic font-serif text-primary",
    },
    {
      text: "Đam mê kiến tạo sản phẩm di động hoàn thiện từ code đến thiết kế.",
      className: "font-normal text-[#E1E0CC]",
    },
  ];

  const scrollText =
    "Hành trình của tôi bắt đầu từ những giờ tự học lập trình di động tại Đại học Điện Lực, nơi tôi nhận ra code thôi là chưa đủ — một ứng dụng tuyệt vời cần có một giao diện chạm đến cảm xúc. Từ đó, tôi rèn luyện cả tư duy logic của Kotlin/React Native lẫn tính duy mỹ trên Figma. Những lúc không ngồi trước màn hình code, tôi thường tìm kiếm cảm hứng mới qua tiếng đàn Guitar, những trận game FC cùng bạn bè, hay đơn giản là chìm đắm trong giai điệu âm nhạc.";
  const characters = scrollText.split("");

  const galleryItems = [
    { image: `/src/assets/public/anh1.jpg`, text: "Đà Lạt" },
    { image: `/src/assets/public/anh2.jpg`, text: "History" },
    { image: `/src/assets/public/anh3.jpg`, text: "NO.1" },
    { image: `/src/assets/public/anh4.jpg`, text: "😄" },
  ];

  return (
    <section
      id="about"
      ref={containerRef}
      className="bg-black py-24 md:py-40 px-4 md:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* --- HEADER SECTION --- */}
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24 px-2">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-[1px] w-12 bg-primary/50" />
            <span className="text-primary text-xs uppercase tracking-[0.3em] font-bold">
              Về tôi
            </span>
            <div className="h-[1px] w-12 bg-primary/50" />
          </motion.div>

          {/* Thay text-left bằng text-center và thêm mx-auto để block luôn nằm giữa */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.15] tracking-tighter text-center max-w-5xl mx-auto balance">
            <WordsPullUpMultiStyle segments={headingSegments} />
          </h2>
        </div>

        {/* --- GRID LAYOUT: Bento Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* 1. KHỐI CÂU CHUYỆN (8 Cols) */}
          <div className="lg:col-span-8 bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-8 md:p-12 lg:p-16 flex flex-col justify-center relative overflow-hidden group hover:border-white/10 transition-all duration-500 min-h-[320px]">
            <div ref={bodyRef} className="relative z-10 my-auto">
              <p className="text-xl md:text-2xl leading-relaxed font-light text-left text-balance">
                {characters.map((char, idx) => (
                  <AnimatedLetter
                    key={idx}
                    char={char}
                    index={idx}
                    totalChars={characters.length}
                    scrollYProgress={scrollYProgress}
                  />
                ))}
              </p>
            </div>
            {/* Hiệu ứng nền subtle khi hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          </div>

          {/* 2. KHỐI TIỂU SỬ NHANH (4 Cols) */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {/* Vị trí hiện tại */}
            <div className="bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-8 flex flex-col justify-between group hover:border-white/10 transition-all duration-500 min-h-[180px]">
              <h4 className="text-primary text-xs uppercase tracking-widest font-bold">
                Vị trí hiện tại
              </h4>
              <div className="mt-auto">
                <p className="text-[#E1E0CC] text-2xl font-serif italic mb-1">
                  Sinh viên IT
                </p>
                <p className="text-gray-500 text-sm tracking-wide font-medium">
                  Đại học Điện Lực
                </p>
              </div>
            </div>

            {/* Mục tiêu cốt lõi */}
            <div className="bg-primary rounded-[2rem] p-8 flex flex-col justify-between transition-all duration-500 hover:scale-[0.99] hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.15)] min-h-[180px]">
              <h4 className="text-black/60 text-xs uppercase tracking-widest font-bold">
                Mục tiêu cốt lõi
              </h4>
              <p className="text-black text-xl md:text-2xl font-semibold leading-snug mt-auto">
                Cân bằng hoàn hảo giữa hiệu năng của code và trải nghiệm của UI.
              </p>
            </div>
          </div>

          {/* 3. KHỐI GALLERY (12 Cols) */}
          <div className="lg:col-span-12 mt-4 bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-6 md:p-10 overflow-hidden group hover:border-white/10 transition-all duration-500">
            <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4 mb-8 px-2">
              <div>
                <h3 className="text-xl md:text-3xl text-[#E1E0CC] font-medium tracking-tight">
                  Sản phẩm & Ý tưởng
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  Giao diện tối giản thiết kế trên WebGL
                </p>
              </div>
              <div className="text-gray-600 text-[10px] uppercase tracking-widest font-semibold border border-white/5 px-3 py-1.5 rounded-full bg-white/[0.02] self-start sm:self-auto">
                Kéo để cuộn ảnh • Drag to explore
              </div>
            </div>

            <div className="h-[450px] md:h-[620px] w-full pointer-events-auto overflow-hidden rounded-2xl bg-black/20">
              <CircularGallery
                items={galleryItems}
                bend={1.0} // Giảm nhẹ độ cong giúp căn chỉnh ảnh và text cân đối, không lệch rìa
                textColor="#E1E0CC"
                borderRadius={0.06}
              />
            </div>
          </div>

          {/* 4. KHỐI KỸ NĂNG & CÔNG CỤ (8 Cols) */}
          <div className="lg:col-span-8 bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-8 md:p-12 flex flex-col justify-between group hover:border-white/10 transition-all duration-500">
            <div>
              <h3 className="text-primary text-xs uppercase tracking-widest font-bold mb-10">
                Technical Arsenal
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Mobile Dev */}
                <div className="flex flex-col justify-between">
                  <span className="text-gray-600 text-[10px] uppercase font-bold tracking-wider block mb-4">
                    Mobile Development
                  </span>
                  <ul className="space-y-4">
                    <li className="flex justify-between items-center border-b border-white/5 pb-3">
                      <span className="text-[#E1E0CC] text-sm md:text-base">
                        React Native / Expo
                      </span>
                      <span className="text-[10px] text-primary/80 border border-primary/30 bg-primary/5 px-2 py-0.5 rounded font-medium">
                        Core
                      </span>
                    </li>
                    <li className="flex justify-between items-center border-b border-white/5 pb-3">
                      <span className="text-[#E1E0CC] text-sm md:text-base">
                        Kotlin / Android
                      </span>
                      <span className="text-[10px] text-gray-400 border border-white/10 bg-white/[0.02] px-2 py-0.5 rounded font-medium">
                        Native
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Design & UI */}
                <div className="flex flex-col justify-between">
                  <span className="text-gray-600 text-[10px] uppercase font-bold tracking-wider block mb-4">
                    Design & UI
                  </span>
                  <ul className="space-y-4">
                    <li className="flex justify-between items-center border-b border-white/5 pb-3">
                      <span className="text-[#E1E0CC] text-sm md:text-base">
                        Figma Layout
                      </span>
                      <span className="text-[10px] text-primary/80 border border-primary/30 bg-primary/5 px-2 py-0.5 rounded font-medium">
                        Advanced
                      </span>
                    </li>
                    <li className="flex justify-between items-center border-b border-white/5 pb-3">
                      <span className="text-[#E1E0CC] text-sm md:text-base">
                        Tailwind CSS / Motion
                      </span>
                      <span className="text-[10px] text-gray-400 border border-white/10 bg-white/[0.02] px-2 py-0.5 rounded font-medium">
                        UI System
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-10 p-5 bg-white/[0.02] rounded-2xl border border-white/5 group-hover:border-white/10 transition-colors">
              <span className="text-gray-600 text-[10px] uppercase font-bold tracking-wider block mb-2">
                Backend Capability
              </span>
              <p className="text-gray-400 text-sm leading-relaxed">
                Phát triển hệ thống{" "}
                <span className="text-white font-medium">
                  ASP.NET Core MVC (C#)
                </span>{" "}
                xử lý luồng dữ liệu logic chặt chẽ cho các nền tảng ứng dụng
                thương mại.
              </p>
            </div>
          </div>

          {/* 5. KHỐI LIFESTYLE (4 Cols) */}
          <div className="lg:col-span-4 bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-8 flex flex-col justify-between group/bento hover:border-white/10 transition-all duration-500 overflow-hidden relative min-h-[500px]">
            <div className="flex justify-between items-center z-10 w-full mb-2">
              <h3 className="text-primary text-xs uppercase tracking-widest font-bold">
                Lifestyle
              </h3>
              <span className="text-[10px] text-gray-500 font-mono tracking-wider uppercase bg-white/[0.03] px-2 py-0.5 rounded border border-white/5">
                {futCards[cardIdx].category}
              </span>
            </div>

            {/* The Slider Arena */}
            <div className="relative flex-1 flex items-center justify-center py-4 w-full overflow-visible">
              {/* Left Arrow Button */}
              <button
                onClick={handlePrev}
                className="absolute left-0 z-30 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all active:scale-95 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Right Arrow Button */}
              <button
                onClick={handleNext}
                className="absolute right-0 z-30 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all active:scale-95 cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Sliding Card Wrap */}
              <div className="w-full flex justify-center items-center overflow-visible">
                <AnimatePresence
                  initial={false}
                  custom={slideDirection}
                  mode="wait"
                >
                  <motion.div
                    key={cardIdx}
                    custom={slideDirection}
                    variants={{
                      enter: (direction: number) => ({
                        x: direction > 0 ? 150 : -150,
                        opacity: 0,
                        scale: 0.9,
                        rotateY: direction > 0 ? 15 : -15,
                      }),
                      center: {
                        x: 0,
                        opacity: 1,
                        scale: 1,
                        rotateY: 0,
                        transition: {
                          x: { type: "spring", stiffness: 350, damping: 28 },
                          opacity: { duration: 0.15 },
                          scale: { duration: 0.2 },
                          rotateY: { duration: 0.2 },
                        },
                      },
                      exit: (direction: number) => ({
                        x: direction < 0 ? 150 : -150,
                        opacity: 0,
                        scale: 0.9,
                        rotateY: direction < 0 ? 15 : -15,
                        transition: {
                          x: { type: "spring", stiffness: 350, damping: 28 },
                          opacity: { duration: 0.15 },
                          scale: { duration: 0.2 },
                          rotateY: { duration: 0.2 },
                        },
                      }),
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.4}
                    onDragEnd={(_, info) => {
                      if (info.offset.x < -40) handleNext();
                      else if (info.offset.x > 40) handlePrev();
                    }}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{
                      perspective: 1000,
                      transformStyle: "preserve-3d",
                      transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.02, 1.02, 1.02)`,
                      transition: "transform 0.1s ease-out",
                    }}
                    className="cursor-grab active:cursor-grabbing select-none"
                  >
                    {/* Rectangular Glassmorphism Card */}
                    <div
                      className="p-[1px] transition-all duration-500 rounded-[28px]"
                      style={{
                        background: `linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(${futCards[cardIdx].rgb},0.4) 40%, rgba(255,255,255,0.05) 70%, rgba(${futCards[cardIdx].rgb},0.25) 100%)`,
                      }}
                    >
                      {/* Inner Card Body */}
                      <div className="w-[230px] h-[340px] bg-black/40 backdrop-blur-xl relative overflow-hidden flex flex-col p-5 justify-between rounded-[27px]">
                        {/* Vivid Background Image */}
                        <div className="absolute inset-0 z-0 select-none pointer-events-none">
                          <img
                            src={futCards[cardIdx].bgImage}
                            alt={futCards[cardIdx].title}
                            className="w-full h-full object-cover opacity-45 scale-105 transition-transform duration-500 hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/25" />
                        </div>

                        {/* Glare foil reflection */}
                        <div
                          className="absolute inset-0 z-30 pointer-events-none transition-opacity duration-150"
                          style={{
                            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)`,
                            opacity: glare.opacity,
                          }}
                        />

                        {/* Top Row: Category and Miniature Icon Indicator */}
                        <div className="relative z-10 flex justify-between items-center w-full mt-1">
                          <span className="text-[9px] font-mono tracking-widest text-white/55 uppercase bg-white/5 px-2.5 py-1 rounded-full border border-white/5 backdrop-blur-md">
                            {futCards[cardIdx].category}
                          </span>
                          <div
                            className="w-8 h-8 rounded-full flex items-center justify-center border border-white/10 backdrop-blur-md bg-white/5 shadow-lg"
                            style={{
                              boxShadow: `0 0 12px rgba(${futCards[cardIdx].rgb}, 0.25)`,
                            }}
                          >
                            {futCards[cardIdx].icon}
                          </div>
                        </div>

                        {/* Center: Large Icon & Title */}
                        <div className="relative z-10 flex flex-col items-center justify-center flex-1 my-auto text-center gap-4 pt-4">
                          <div
                            className="w-16 h-16 rounded-2xl flex items-center justify-center bg-white/[0.04] border border-white/10 shadow-inner relative"
                            style={{
                              boxShadow: `0 10px 30px rgba(${futCards[cardIdx].rgb}, 0.2)`,
                            }}
                          >
                            <div
                              className="absolute inset-0 rounded-2xl blur-md opacity-25"
                              style={{
                                backgroundColor: futCards[cardIdx].color,
                              }}
                            />
                            {futCards[cardIdx].icon}
                          </div>
                          <div>
                            <h4
                              className="text-sm md:text-base font-extrabold text-white tracking-widest uppercase select-none"
                              style={{ fontFamily: "Outfit, sans-serif" }}
                            >
                              {futCards[cardIdx].title}
                            </h4>
                            <div
                              className="w-10 h-[1.5px] mx-auto mt-2"
                              style={{
                                background: `linear-gradient(to right, transparent, ${futCards[cardIdx].color}, transparent)`,
                              }}
                            />
                          </div>
                        </div>

                        {/* Bottom Row: Quote Text */}
                        <div className="relative z-10 w-full text-center mt-auto border-t border-white/5 pt-3">
                          <p className="text-[11px] text-gray-300 italic leading-relaxed px-1 text-balance select-none">
                            "{futCards[cardIdx].quote}"
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Pagination & Quotes */}
            <div className="mt-4 flex flex-col items-center gap-3 w-full">
              {/* Pagination Dots */}
              <div className="flex gap-1.5 justify-center">
                {futCards.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setSlideDirection(i > cardIdx ? 1 : -1);
                      setCardIdx(i);
                    }}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      i === cardIdx
                        ? "w-5 bg-primary"
                        : "w-1.5 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
