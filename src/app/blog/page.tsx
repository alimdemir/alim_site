import { Navbar } from "@/components/ui/navbar";

export default function Blog() {
  const posts = [
    {
      title: "RAG (Retrieval-Augmented Generation) Mimarisi Nedir?",
      date: "12 Mayıs 2026",
      summary: "Büyük dil modellerinin halüsinasyon görmesini engellemek ve kurumsal verilerle doğru cevaplar üretmesini sağlamak için kullanılan RAG mimarisini inceliyoruz.",
    },
    {
      title: "Bilgisayarlı Görüde YOLOv8 ile Gerçek Zamanlı Nesne Tespiti",
      date: "28 Nisan 2026",
      summary: "Endüstri standartı haline gelen YOLO algoritmasının 8. versiyonu ile üretim hattında nasıl saniyede 60 kare hızında hata tespiti yapabileceğimizi adım adım kodlayalım.",
    },
    {
      title: "Makine Öğrenmesinde Veri Ön İşlemenin Önemi",
      date: "15 Nisan 2026",
      summary: "Modelinizin kalitesi, verdiğiniz verinin kalitesi kadardır. Eksik verilerle başa çıkma, ölçeklendirme ve özellik mühendisliği (feature engineering) teknikleri.",
    }
  ];

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex-1 container mx-auto px-6 py-20 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">Blog</h1>
        <div className="w-20 h-1 bg-white rounded-full mb-12"></div>
        
        <div className="space-y-10">
          {posts.map((post, idx) => (
            <article key={idx} className="group cursor-pointer">
              <time className="text-sm text-muted-foreground font-mono">{post.date}</time>
              <h2 className="text-2xl md:text-3xl font-semibold mt-2 mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {post.summary}
              </p>
              <div className="mt-4 text-sm font-medium text-white/80 group-hover:text-white transition-colors flex items-center gap-2">
                Devamını Oku &rarr;
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
