import { Navbar } from "@/components/ui/navbar";

export default function Iletisim() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex-1 container mx-auto px-6 py-20 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">İletişim</h1>
        <div className="w-20 h-1 bg-white rounded-full mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold">Birlikte Çalışalım</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Yapay zeka projeleriniz, makine öğrenmesi modelleri veya veri odaklı iş fikirleriniz için benimle iletişime geçebilirsiniz. Yeni teknolojiler üzerine konuşmaktan her zaman mutluluk duyarım.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-lg">
                <span className="font-semibold w-24">Email:</span>
                <a href="mailto:iletisim@alimdemir.com" className="hover:text-primary transition-colors">iletisim@alimdemir.com</a>
              </div>
              <div className="flex items-center gap-4 text-lg">
                <span className="font-semibold w-24">Konum:</span>
                <span className="text-muted-foreground">Türkiye</span>
              </div>
            </div>
          </div>
          
          <div className="bg-card border border-border/50 p-8 rounded-2xl">
            <form className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Adınız</label>
                <input type="text" id="name" className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">E-posta</label>
                <input type="email" id="email" className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Mesajınız</label>
                <textarea id="message" rows={4} className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Projenizden bahsedin..."></textarea>
              </div>
              <button type="button" className="w-full bg-white text-black font-semibold py-3 rounded-lg hover:bg-white/90 transition-colors">
                Gönder
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
