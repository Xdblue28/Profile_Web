import { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import { WordsPullUpMultiStyle } from "../components/WordsPullUpMultiStyle";
import { AnimatedLetter } from "../components/AnimatedLetter";
import CircularGallery from "../components/CircularGallery";

export const About: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: bodyRef,
    offset: ["start 0.9", "end 0.2"],
  });

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
    { image: "https://picsum.photos/800/600?random=1", text: "Project A" },
    { image: "https://picsum.photos/800/600?random=2", text: "Project B" },
    { image: "https://picsum.photos/800/600?random=3", text: "Project C" },
    { image: "https://picsum.photos/800/600?random=4", text: "Project D" },
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
          <div className="lg:col-span-4 bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-8 flex flex-col justify-between group hover:border-white/10 transition-all duration-500">
            <div>
              <h3 className="text-primary text-xs uppercase tracking-widest font-bold mb-8">
                Lifestyle
              </h3>
              <div className="space-y-5">
                {[
                  {
                    label: "Music",
                    value: "Acoustic Guitar",
                    icon: "fa-guitar",
                  },
                  {
                    label: "Gaming",
                    value: "FC 25 (Tactics)",
                    icon: "fa-gamepad",
                  },
                  {
                    label: "Sport",
                    value: "FC Barcelona Fan",
                    icon: "fa-futbol",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 py-1.5 group/item"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover/item:bg-primary group-hover/item:border-primary group-hover/item:text-black text-gray-400 transition-all duration-300 shrink-0">
                      <i className={`fa-solid ${item.icon} text-sm`}></i>
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-[#E1E0CC] text-sm font-medium">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Thêm một quote nhỏ tinh tế phía dưới để điền đầy khoảng trống bằng flex-box */}
            <div className="mt-8 pt-4 border-t border-white/5 text-left">
              <p className="text-[11px] text-gray-600 italic">
                "Work hard, play tactical."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
