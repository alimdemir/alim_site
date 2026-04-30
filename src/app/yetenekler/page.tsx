import { Navbar } from "@/components/ui/navbar";

export default function Yetenekler() {
  const skills = [
    { category: "Programlama Dilleri", items: ["Python", "JavaScript / TypeScript", "SQL", "C++"] },
    { category: "Yapay Zeka & Veri Bilimi", items: ["PyTorch", "TensorFlow", "Scikit-Learn", "Pandas", "NumPy", "OpenCV"] },
    { category: "Gelişmiş Teknolojiler", items: ["Büyük Dil Modelleri (LLM)", "RAG Mimarisi", "Doğal Dil İşleme (NLP)", "YOLOv8 / Bilgisayarlı Görü"] },
    { category: "Web & Mimarî", items: ["Next.js", "React", "Docker", "Git", "FastAPI", "Flask"] }
  ];

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex-1 container mx-auto px-6 py-20 max-w-5xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">Yetenekler</h1>
        <div className="w-20 h-1 bg-white rounded-full mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup, idx) => (
            <div key={idx} className="bg-card border border-border/50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold mb-6">{skillGroup.category}</h2>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((item, i) => (
                  <span key={i} className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-sm font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
