import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { WordsPullUpMultiStyle } from '../components/WordsPullUpMultiStyle';

export const Features: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const isGridInView = useInView(gridRef, { once: true, margin: "-100px" });

  const line1Segments = [
    { text: "Kiến tạo sản phẩm di động chất lượng cao.", className: "text-[#E1E0CC]" }
  ];

  const line2Segments = [
    { text: "Định hướng trở thành Product Engineer thực thụ.", className: "text-gray-500" }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as any,
      }
    }
  };

  const card2Items = [
    "Tìm thực tập/làm việc thực tế",
    "Cọ xát với dự án Mobile thực tế",
    "Đóng góp giải pháp Mobile chất lượng",
    "Học hỏi quy trình team chuyên nghiệp"
  ];

  const card3Items = [
    "Trở thành Product Engineer",
    "Làm chủ sản phẩm từ Figma đến Store",
    "Đồng bộ tối đa UI/UX & Code tối ưu"
  ];

  const card4Items = [
    "Lấy người dùng làm trọng tâm",
    "Logic & Thẩm mỹ song hành",
    "Tối ưu hiệu năng, mượt mà trải nghiệm"
  ];

  return (
    <section id="features" className="min-h-screen bg-black py-24 px-4 md:px-8 relative overflow-hidden flex flex-col justify-start">
      {/* Background noise overlay */}
      <div className="bg-noise opacity-[0.15] absolute inset-0 pointer-events-none z-0" />

      {/* Header Text */}
      <div className="w-full max-w-7xl mx-auto text-center mb-16 md:mb-24 z-10">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-[1.3] flex flex-col gap-2">
          <WordsPullUpMultiStyle segments={line1Segments} />
          <WordsPullUpMultiStyle segments={line2Segments} delay={0.2} />
        </h2>
      </div>

      {/* 4-Column Card Grid */}
      <motion.div
        ref={gridRef}
        variants={containerVariants}
        initial="hidden"
        animate={isGridInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-3 md:gap-2 lg:h-[480px] w-full max-w-7xl mx-auto z-10"
      >
        
        {/* Card 1: Video Card */}
        <motion.div 
          variants={cardVariants}
          className="relative overflow-hidden rounded-2xl md:rounded-3xl lg:h-full min-h-[320px] md:min-h-[400px] flex flex-col justify-end p-6 sm:p-8 group shadow-lg border border-[#212121]/30"
        >
          <div className="absolute inset-0 z-0">
            <video
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="object-cover w-full h-full"
            />
            <div className="noise-overlay opacity-[0.5] mix-blend-overlay pointer-events-none absolute inset-0" />
            <div className="bg-gradient-to-t from-black/80 via-black/20 to-black/30 absolute inset-0" />
          </div>
          <span className="text-lg sm:text-xl font-medium text-[#E1E0CC] z-10 relative">
            Tự do sáng tạo.
          </span>
        </motion.div>

        {/* Card 2: Project Storyboard */}
        <motion.div 
          variants={cardVariants}
          className="bg-[#212121] rounded-2xl md:rounded-3xl lg:h-full flex flex-col justify-between p-6 sm:p-8 border border-[#333]/40 hover:border-primary/20 transition-all duration-300"
        >
          <div>
            <div className="flex justify-between items-start">
              <img 
                src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85" 
                alt="Storyboard Icon"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded object-cover" 
              />
              <span className="text-gray-500 text-sm font-serif">01</span>
            </div>
            
            <h3 className="text-lg sm:text-xl font-medium text-[#E1E0CC] mt-6 mb-4">
              Mục tiêu Ngắn hạn.
            </h3>

            <div className="flex flex-col gap-3">
              {card2Items.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400 text-xs sm:text-sm font-light">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <a href="#contact" className="flex items-center gap-1.5 text-primary text-xs sm:text-sm font-medium mt-8 pt-4 border-t border-[#333]/30 group/btn cursor-pointer">
            <span>Kết nối ngay</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 transform -rotate-45 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </a>
        </motion.div>

        {/* Card 3: Smart Critiques */}
        <motion.div 
          variants={cardVariants}
          className="bg-[#212121] rounded-2xl md:rounded-3xl lg:h-full flex flex-col justify-between p-6 sm:p-8 border border-[#333]/40 hover:border-primary/20 transition-all duration-300"
        >
          <div>
            <div className="flex justify-between items-start">
              <img 
                src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85" 
                alt="Critiques Icon"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded object-cover" 
              />
              <span className="text-gray-500 text-sm font-serif">02</span>
            </div>
            
            <h3 className="text-lg sm:text-xl font-medium text-[#E1E0CC] mt-6 mb-4">
              Mục tiêu Dài hạn.
            </h3>

            <div className="flex flex-col gap-3">
              {card3Items.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400 text-xs sm:text-sm font-light">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <a href="#contact" className="flex items-center gap-1.5 text-primary text-xs sm:text-sm font-medium mt-8 pt-4 border-t border-[#333]/30 group/btn cursor-pointer">
            <span>Kết nối ngay</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 transform -rotate-45 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </a>
        </motion.div>

        {/* Card 4: Immersion Capsule */}
        <motion.div 
          variants={cardVariants}
          className="bg-[#212121] rounded-2xl md:rounded-3xl lg:h-full flex flex-col justify-between p-6 sm:p-8 border border-[#333]/40 hover:border-primary/20 transition-all duration-300"
        >
          <div>
            <div className="flex justify-between items-start">
              <img 
                src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85" 
                alt="Immersion Icon"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded object-cover" 
              />
              <span className="text-gray-500 text-sm font-serif">03</span>
            </div>
            
            <h3 className="text-lg sm:text-xl font-medium text-[#E1E0CC] mt-6 mb-4">
              Triết lý Thiết kế.
            </h3>

            <div className="flex flex-col gap-3">
              {card4Items.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400 text-xs sm:text-sm font-light">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <a href="#contact" className="flex items-center gap-1.5 text-primary text-xs sm:text-sm font-medium mt-8 pt-4 border-t border-[#333]/30 group/btn cursor-pointer">
            <span>Kết nối ngay</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 transform -rotate-45 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </a>
        </motion.div>

      </motion.div>

      {/* Portfolio Projects Showcase */}
      <div id="projects" className="mt-24 md:mt-36 border-t border-[#212121]/60 pt-16 w-full max-w-7xl mx-auto z-10 relative">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="text-left mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-primary text-[10px] sm:text-xs uppercase tracking-widest font-medium">
              Dự án chọn lọc
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl text-[#E1E0CC] mt-2 font-normal">
              Dự án Tiêu biểu
            </h3>
          </div>
          <p className="text-gray-500 text-xs sm:text-sm max-w-md font-light leading-relaxed">
            Một số dự án di động nổi bật kết hợp tư duy thiết kế trải nghiệm người dùng và lập trình ứng dụng tối ưu.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {[
            {
              title: "Ứng dụng Giao đồ ăn nhanh — Delivery App",
              desc: "Thiết kế UI/UX và phát triển ứng dụng đặt đồ ăn trực quan, tối ưu hóa trải nghiệm người dùng từ bước chọn món đến thanh toán.",
              tag: "UI/UX & Mobile Dev",
              tech: ["Figma", "Kotlin", "Android Studio"]
            },
            {
              title: "Ứng dụng Theo dõi Sức khỏe — Health Tracker",
              desc: "Phát triển ứng dụng Android native giúp người dùng theo dõi chỉ số sức khỏe hàng ngày, tích hợp biểu đồ trực quan sinh động.",
              tag: "Android Native",
              tech: ["Kotlin", "Android SDK", "Charts"]
            }
          ].map((proj, idx) => (
            <div 
              key={idx} 
              className="bg-[#101010]/80 border border-[#212121]/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-primary/20 hover:bg-[#101010] transition-all duration-300 group"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[10px] sm:text-xs text-primary px-3 py-1 rounded-full border border-primary/25 bg-primary/5 uppercase font-medium tracking-wide">
                    {proj.tag}
                  </span>
                </div>
                <h4 className="text-lg sm:text-xl md:text-2xl text-[#E1E0CC] font-medium mb-3 group-hover:text-primary transition-colors">
                  {proj.title}
                </h4>
                <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed mb-6">
                  {proj.desc}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {proj.tech.map((t, i) => (
                  <span key={i} className="text-[10px] sm:text-xs text-gray-500 bg-[#212121]/50 px-2.5 py-1 rounded font-light">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
