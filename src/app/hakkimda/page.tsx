import { Navbar } from "@/components/ui/navbar";

export default function Hakkimda() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex-1 container mx-auto px-6 py-20 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">Hakkımda</h1>
        <div className="w-20 h-1 bg-white rounded-full mb-12"></div>
        
        <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
          <p>
            Merhaba, ben <strong>Alim Demir</strong>. Yapay Zeka (AI) ve Makine Öğrenmesi alanında tutkulu, yenilikçi çözümler üretmeyi seven bir mühendisim.
          </p>
          <p>
            Verinin gücüne inanıyor, karmaşık problemleri anlamlandırarak şirketlere ve insanlara değer katan akıllı sistemler geliştiriyorum. Özel ilgi alanlarım arasında Derin Öğrenme (Deep Learning), Doğal Dil İşleme (NLP) ve Bilgisayarlı Görü (Computer Vision) bulunuyor.
          </p>
          <p>
            Gelişen teknolojileri yakından takip ederek sadece bugünün değil, yarının problemlerini de çözebilecek ölçeklenebilir ve güvenilir yapay zeka modelleri tasarlamayı hedefliyorum.
          </p>
          
          <h2 className="text-2xl font-semibold text-foreground pt-8">Eğitim ve Vizyon</h2>
          <p>
            Akademik geçmişim ve mühendislik vizyonum, teorik bilgiyi pratik uygulamalarla birleştirmeme olanak tanıyor. Büyük Dil Modelleri (LLM), otonom ajanlar ve görüntü tanıma sistemleri üzerinde sürekli olarak yeni projeler üreterek kendimi geliştiriyorum.
          </p>
        </div>
      </div>
    </main>
  );
}
