"use client";

import { PrismaHero } from "@/components/ui/prisma-hero";
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { Hero as AnimatedHero } from "@/components/ui/animated-hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <PrismaHero />

      {/* Portfolio Content Sections */}
      <div className="max-w-6xl mx-auto px-6 py-20 space-y-32">
        
        {/* Spline Interactive About Section */}
        <section id="about">
          <Card className="w-full min-h-[500px] bg-black/[0.96] relative overflow-hidden rounded-3xl border-border/50">
            <Spotlight
              className="-top-40 left-0 md:left-60 md:-top-20"
              fill="white"
            />
            
            <div className="flex flex-col md:flex-row h-full min-h-[500px]">
              {/* Left content */}
              <div className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center">
                <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                  Etkileşimli Zeka
                </h2>
                <p className="mt-6 text-lg text-neutral-300 max-w-lg leading-relaxed">
                  Yapay Zeka (AI) ve Makine Öğrenmesi alanında tutkulu bir mühendisim. Veriyi anlamlandırarak, karmaşık problemlere akıllı ve ölçeklenebilir çözümler üretmeyi hedefliyorum. Derin Öğrenme, Doğal Dil İşleme (NLP) ve Bilgisayarlı Görü konularında çeşitli projeler geliştiriyor, inovatif sistemler inşa ediyorum.
                </p>
              </div>

              {/* Right content - Spline */}
              <div className="flex-1 relative min-h-[300px] md:min-h-full">
                <SplineScene 
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full"
                />
              </div>
            </div>
          </Card>
        </section>

        {/* Skills Section */}
        <section id="skills" className="space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Yetenekler</h2>
          <div className="w-20 h-1 bg-white rounded-full"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
            {[
              "Python", "PyTorch", "TensorFlow", "Scikit-Learn",
              "Makine Öğrenmesi", "Derin Öğrenme", "NLP (Doğal Dil İşleme)", "Bilgisayarlı Görü",
              "SQL / NoSQL", "Pandas & NumPy", "Git & Docker", "Next.js & React"
            ].map((skill, index) => (
              <div key={index} className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4 text-center hover:bg-card/80 transition-colors">
                <span className="font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Öne Çıkan Projeler</h2>
          <div className="w-20 h-1 bg-white rounded-full"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            {[
              {
                title: "Akıllı Müşteri Destek Asistanı",
                desc: "LLM (Büyük Dil Modelleri) ve RAG mimarisi kullanarak geliştirilmiş, şirket içi belgelere dayalı doğru cevaplar veren NLP tabanlı sohbet botu.",
                tech: "Python, LangChain, OpenAI, Pinecone"
              },
              {
                title: "Görüntü Tabanlı Hata Tespiti",
                desc: "Üretim hattındaki ürünlerin hatalarını gerçek zamanlı tespit eden derin öğrenme tabanlı bilgisayarlı görü modeli.",
                tech: "PyTorch, YOLOv8, OpenCV"
              },
              {
                title: "Müşteri Kayıp (Churn) Analizi",
                desc: "Müşteri davranış verilerini analiz ederek, platformu terk etme olasılığı yüksek kullanıcıları önceden tespit eden makine öğrenmesi modeli.",
                tech: "Scikit-Learn, XGBoost, Pandas"
              },
              {
                title: "AI Destekli Portfolyo",
                desc: "Modern web teknolojileri kullanılarak tasarlanmış, dinamik animasyonlara ve profesyonel tasarıma sahip kişisel web sitesi.",
                tech: "Next.js, TailwindCSS, Framer Motion"
              }
            ].map((project, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 p-8 transition-all hover:border-white/20 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-6 line-clamp-3">{project.desc}</p>
                <p className="text-sm font-mono text-white/60">{project.tech}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Animated Hero CTA */}
        <section className="pt-10">
          <AnimatedHero />
        </section>

      </div>
    </main>
  );
}
