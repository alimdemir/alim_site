import { Navbar } from "@/components/ui/navbar";

export default function Projeler() {
  const projects = [
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
      title: "Otonom Araç Simülasyonu",
      desc: "Takviyeli öğrenme (Reinforcement Learning) kullanarak simülasyon ortamında kendi kendine park edebilen araç algoritması.",
      tech: "Python, OpenAI Gym, TensorFlow"
    }
  ];

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex-1 container mx-auto px-6 py-20 max-w-6xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">Projeler</h1>
        <div className="w-20 h-1 bg-white rounded-full mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 p-8 transition-all hover:border-white/20 hover:-translate-y-1 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{project.desc}</p>
              <div className="mt-auto">
                <span className="text-sm font-mono text-white/60 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                  {project.tech}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
