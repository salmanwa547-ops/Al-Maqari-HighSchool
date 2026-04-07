/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { BookOpen, Calendar, GraduationCap, History, User, Video } from 'lucide-react';

export default function App() {
  const schoolName = "ثانوية الشيخ العلامة أحمد بن محمد يحيى المقري";
  const mainImage = "https://i.postimg.cc/SsXVWJdY/17755699781696259233691036069476.jpg";
  const videoId = "Z0VcNCGhir8"; // Extracted from shorts link

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-royal-green rounded-full flex items-center justify-center text-gold">
              <GraduationCap size={24} />
            </div>
            <span className="font-bold text-royal-green hidden md:block">{schoolName}</span>
          </div>
          <div className="flex gap-8 font-medium text-slate-600">
            <a href="#hero" className="hover:text-royal-green transition-colors">الرئيسية</a>
            <a href="#plaque" className="hover:text-royal-green transition-colors">التدشين</a>
            <a href="#scholar" className="hover:text-royal-green transition-colors">العلامة المقري</a>
            <a href="#about" className="hover:text-royal-green transition-colors">عن الثانوية</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative py-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-royal-green/10 text-royal-green rounded-full font-semibold text-sm">
              <Calendar size={16} />
              بمناسبة يوم العلم
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-royal-green leading-tight">
              صرح العلم والمعرفة <br />
              <span className="text-gold">{schoolName}</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-xl leading-relaxed font-serif">
              مؤسسة تربوية عريقة تخرج منها أجيال، تحمل اسم أحد أعظم علماء الجزائر وتاريخها المجيد.
            </p>
            <div className="flex gap-4">
              <a href="#about" className="px-8 py-4 bg-royal-green text-white rounded-xl font-bold hover:shadow-lg hover:shadow-royal-green/20 transition-all">
                اكتشف المزيد
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative p-[60px] bg-slate-50 rounded-[40px] border border-slate-100"
          >
            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={mainImage} 
                alt="واجهة الثانوية" 
                className="w-full h-full object-contain bg-white"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-royal-green/5 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </section>

      {/* Inauguration Plaque Section */}
      <section id="plaque" className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-royal-green mb-4 flex items-center justify-center gap-3">
              <History className="text-gold" />
              الذاكرة التاريخية
            </h2>
            <div className="h-1 w-20 bg-gold mx-auto rounded-full" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, rotateX: 45 }}
            whileInView={{ opacity: 1, rotateX: 0 }}
            transition={{ duration: 1 }}
            className="marble-plaque p-12 md:p-20 rounded-lg text-royal-green"
          >
            <div className="border-2 border-gold/30 p-8 md:p-12 relative">
              <h3 className="text-2xl md:text-4xl font-serif font-bold mb-8 border-b-2 border-gold/20 pb-6">
                الجمهورية الجزائرية الديمقراطية الشعبية
              </h3>
              <div className="space-y-6 font-serif text-xl md:text-2xl">
                <p>تم تدشين هذه المؤسسة التربوية</p>
                <p className="text-3xl md:text-5xl font-black text-royal-green my-8">
                  ثانوية الشيخ العلامة <br /> أحمد بن محمد يحيى المقري
                </p>
                <p>بتاريخ: <span className="font-bold">17 أكتوبر 1979</span></p>
                <p>الموافق لـ: <span className="font-bold">26 شوال 1399 هـ</span></p>
                <div className="mt-12 pt-8 border-t-2 border-gold/20">
                  <p className="mb-4">من طرف السيد العقيد:</p>
                  <p className="text-3xl md:text-4xl font-black text-royal-green tracking-wide">
                    محمد عطايلية
                  </p>
                  <p className="text-lg mt-2 text-slate-700">قائد الناحية العسكرية الأولى</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Sheikh Al-Maqqari Section */}
      <section id="scholar" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="aspect-square bg-royal-green/5 rounded-full absolute -z-10 w-full scale-110 blur-3xl" />
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-gold/10">
                <div className="w-16 h-16 bg-gold/20 rounded-2xl flex items-center justify-center text-gold mb-6">
                  <User size={32} />
                </div>
                <h2 className="text-4xl font-black text-royal-green mb-6">من هو العلامة المقري؟</h2>
                <div className="space-y-6 text-lg text-slate-700 font-serif leading-relaxed">
                  <p>
                    <span className="font-bold text-royal-green">الاسم الكامل:</span> أحمد بن محمد يحيى المقري (شهاب الدين، أبو العباس التلمساني).
                  </p>
                  <p>
                    <span className="font-bold text-royal-green">الأصل والنشأة:</span> ولد في مدينة تلمسان العريقة عام (1578 م)، وتنحدر عائلته من منطقة "مقرة" بولاية المسيلة الجزائرية.
                  </p>
                  <p>
                    <span className="font-bold text-royal-green">مكانته العلمية:</span> يُعد أحد أعظم علماء الجزائر في العهد العثماني، برز كمؤرخ فذ، فقيه متمكن، وأديب بارع.
                  </p>
                  <p>
                    <span className="font-bold text-royal-green">رحلته العلمية:</span> طاف في طلب العلم والتدريس بين فاس، والقاهرة (الأزهر الشريف)، ودمشق، حيث ترك أثراً علمياً لا يُمحى.
                  </p>
                  <p>
                    <span className="font-bold text-royal-green">أشهر مؤلفاته:</span> صاحب الكتاب الموسوعي الشهير "نفح الطيب من غصن الأندلس الرطيب".
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4 pt-12">
                <div className="h-64 bg-royal-green rounded-2xl flex flex-col items-center justify-center text-white p-6 text-center">
                  <BookOpen size={40} className="mb-4 text-gold" />
                  <h4 className="font-bold">مؤرخ وأديب</h4>
                </div>
                <div className="h-48 bg-slate-100 rounded-2xl" />
              </div>
              <div className="space-y-4">
                <div className="h-48 bg-gold/20 rounded-2xl" />
                <div className="h-64 bg-slate-900 rounded-2xl flex flex-col items-center justify-center text-white p-6 text-center">
                  <GraduationCap size={40} className="mb-4 text-gold" />
                  <h4 className="font-bold">عالم جزائري فذ</h4>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About High School & Video Section */}
      <section id="about" className="py-24 bg-royal-green text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-4xl font-black mb-4">التعريف بالثانوية</h2>
              <p className="text-gold font-serif text-xl">عرض مرئي لمرافق ونشاطات المؤسسة</p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Video className="text-gold" />
                  جولة في رحاب المؤسسة
                </h3>
                <p className="font-serif text-lg leading-relaxed text-slate-100">
                  تعتبر ثانوية المقري من المؤسسات الرائدة التي تهدف إلى تقديم تعليم نوعي يجمع بين الأصالة والحداثة، موفرة بيئة تعليمية محفزة للإبداع والتميز الدراسي.
                </p>
                <ul className="mt-6 space-y-3 font-serif">
                  <li className="flex items-center gap-2">• كادر تعليمي متميز وذو خبرة</li>
                  <li className="flex items-center gap-2">• مرافق تعليمية ورياضية متكاملة</li>
                  <li className="flex items-center gap-2">• أنشطة ثقافية وعلمية مستمرة</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative aspect-[9/16] max-w-[400px] mx-auto w-full overflow-hidden rounded-3xl shadow-2xl border-4 border-gold/30"
            >
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 border-t-4 border-gold">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex flex-col items-center gap-6">
            <div className="w-16 h-16 bg-royal-green rounded-full flex items-center justify-center text-gold border-2 border-gold">
              <GraduationCap size={32} />
            </div>
            <h3 className="text-2xl font-bold">{schoolName}</h3>
            <p className="text-slate-400 font-serif">منارة للعلم.. ووفاء للعلماء</p>
            
            <div className="w-full h-px bg-white/10 my-8" />
            
            <p className="text-gold font-bold text-lg">
              تصميم وتطوير المبرمج المبدع: سهيل بودراف
            </p>
            <p className="text-slate-500 text-sm mt-2">
              © {new Date().getFullYear()} جميع الحقوق محفوظة
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
