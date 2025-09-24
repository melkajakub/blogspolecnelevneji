import React, { useState } from 'react';
import Header from '@/components/blog/Header';
import Hero from '@/components/blog/Hero';
import ArticleCard from '@/components/blog/ArticleCard';
import ArticleModal from '@/components/blog/ArticleModal';
import AffiliateBanner from '@/components/blog/AffiliateBanner';
import Footer from '@/components/blog/Footer';

// Data článků
const articles = [
  {
    id: 1,
    title: "Proč vznikl projekt Společně levněji a co od nás můžete čekat",
    excerpt: "Platíte za energie a nejste si jistí, jestli je vaše cena férová? Právě proto vznikl projekt Společně levněji – abych vám pomohl ušetřit peníze s minimálním úsilím z vaší strany.",
    content: `### Úvod
Platíte za energie a nejste si jistí, jestli je vaše cena férová? Nejste sami. Mnoho domácností v Česku zbytečně platí tisíce korun navíc jen proto, že se v nabídkách a fakturách těžko vyznají. Právě proto vznikl projekt **Společně levněji** – abych vám pomohl ušetřit peníze s minimálním úsilím z vaší strany.

### Moje motivace
Rozhodl jsem se tuto službu poskytovat proto, že se často setkávám s lidmi, kteří zbytečně přeplácí. Dodavatelé spoléhají na to, že zákazníci nebudou řešit končící fixace a automaticky spadnou na nevýhodné ceníky. Cílem projektu je stát na vaší straně – hlídat, vyjednávat a hledat férové řešení.

### Jak služba funguje
- Klient zaplatí **600 Kč ročně**.
- Za tuto částku za něj hlídám fixace, komunikuji s dodavateli a hledám nejlepší řešení.
- Klient dostává přehledné e-mailové reporty s výsledky a návrhy dalších kroků.
- Smlouvu vždy uzavírá přímo klient s dodavatelem, já působím jako nezávislý poradce.

### Jakým tématům se budeme na blogu věnovat
Na blogu najdete praktické tipy k úsporám, návody, jak číst faktury, vysvětlení rozdílů mezi tarify, přehledy aktuálních změn a také příběhy domácností, kterým se podařilo ušetřit. Chci, abyste se v energiích cítili jistě a nemuseli mít obavy, že vás dodavatel přeplatí.

### Závěr
Blog Společně levněji je tu proto, abyste se snadno zorientovali v energiích a vyhnuli se nevýhodným nabídkám. Sledujte naše články a využijte možnost objednat si naši službu – **s námi budete mít jistotu, že platíte férově**.`,
    date: "24. září 2024",
    readTime: "5 min",
    category: "O nás",
    featured: true
  },
  {
    id: 2,
    title: "Máte správnou distribuční sazbu?",
    excerpt: "Jedním z nejjednodušších způsobů, jak ušetřit na energiích, je správně nastavená distribuční sazba. Pokud je vaše sazba nevhodně zvolená, můžete platit zbytečně stovky až tisíce korun ročně navíc.",
    content: `### Úvod
Jedním z nejjednodušších způsobů, jak ušetřit na energiích, je správně nastavená **distribuční sazba**. Jde o část regulované složky ceny, která je stejná bez ohledu na to, jakého máte dodavatele. Pokud je vaše sazba nevhodně zvolená, můžete platit zbytečně stovky až tisíce korun ročně navíc.

### Nejčastější distribuční sazby
- **D01d** – pro domácnosti s velmi nízkou spotřebou (např. byty bez elektrického vytápění, chalupy).
- **D02d** – nejběžnější sazba pro domácnosti se střední spotřebou.
- **D25d** – pro domácnosti s elektrickým ohřevem vody (bojler).
- **D26d** – pro domácnosti s elektrickým vytápěním a ohřevem vody.

Každá sazba je určena pro jiné podmínky, a pokud je nastavená nesprávně, domácnost na tom tratí.

### Častý problém
Často se setkávám se situací, kdy má domácnost s roční spotřebou třeba jen **1,5 MWh** sazbu **D02d**. V takovém případě je mnohem výhodnější přejít na sazbu **D01d**, což může přinést úsporu i kolem **1 000 Kč ročně** – a to bez ohledu na to, jakého má zákazník dodavatele nebo jakou má sjednanou cenu.

### Proč na sazbě záleží
Distribuční sazba určuje, jak platíte regulovanou část ceny elektřiny. Nesprávná volba znamená, že platíte víc, než musíte, i když máte jinak výhodný tarif od dodavatele. Proto je vždy důležité zkontrolovat, zda odpovídá vaší skutečné spotřebě.

### Závěr
Správná distribuční sazba je jeden z detailů, který může rozhodnout o tom, jestli platíte férovou cenu. Pokud si nejste jistí, zda máte sazbu nastavenou optimálně, obraťte se na nás – pomůžeme vám s kontrolou i optimalizací.`,
    date: "20. září 2024",
    readTime: "4 min",
    category: "Úspory",
    featured: false
  }
];

const Index = () => {
  const [selectedArticle, setSelectedArticle] = useState<typeof articles[0] | null>(null);

  const handleArticleClick = (article: typeof articles[0]) => {
    setSelectedArticle(article);
  };

  const handleCloseModal = () => {
    setSelectedArticle(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      {/* Hlavní obsah */}
      <main className="container py-16">
        
        {/* Affiliate banner E.ON */}
        <div className="mb-12">
          <AffiliateBanner
            title="Dodavatel E.ON – spolehlivé dodávky energií"
            description="E.ON patří mezi největší dodavatele energií v Česku. Nabízí transparentní ceníky a kvalitní zákaznický servis. Porovnejte si jejich nabídku s ostatními dodavateli."
            buttonText="Navštívit E.ON"
            href="https://www.eon.cz"
            company="E.ON"
          />
        </div>

        {/* Seznam článků */}
        <section id="clanky" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nejnovější články
            </h2>
            <p className="text-lg text-text-light max-w-2xl mx-auto">
              Praktické tipy a rady, které vám pomohou ušetřit na energiích
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article) => (
              <ArticleCard
                key={article.id}
                title={article.title}
                excerpt={article.excerpt}
                content={article.content}
                date={article.date}
                readTime={article.readTime}
                category={article.category}
                featured={article.featured}
                onClick={() => handleArticleClick(article)}
              />
            ))}
          </div>
        </section>

        {/* Další affiliate banner - připraveno pro Ušetřeno.cz */}
        <div className="mb-12">
          <AffiliateBanner
            title="Ušetřeno.cz – srovnání cen energií"
            description="Porovnejte si ceny energií od různých dodavatelů a najděte tu nejlepší nabídku pro vaši domácnost. Rychle, jednoduše a zdarma."
            buttonText="Porovnat ceny"
            href="https://www.useteno.cz"
            company="Ušetřeno.cz"
          />
        </div>

        {/* O blogu sekce */}
        <section id="o-blogu" className="bg-muted/50 rounded-lg p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              O blogu Společně levněji
            </h2>
            <p className="text-text-light leading-relaxed mb-6">
              Tento blog je přirozeným rozšířením služby **Společně levněji**, která pomáhá 
              českým domácnostem dlouhodobě šetřit na energiích. Najdete zde praktické rady, 
              návody a tipy, jak se zorientovat v nepřehledném světě energetických dodavatelů.
            </p>
            <p className="text-text-light leading-relaxed">
              Náš cíl je jednoduchý – chceme, abyste platili za energie férovou cenu 
              a nemuseli se obávat, že vás dodavatel přeplatí.
            </p>
          </div>
        </section>

      </main>

      <Footer />

      {/* Modal pro zobrazení článku */}
      {selectedArticle && (
        <ArticleModal
          isOpen={!!selectedArticle}
          onClose={handleCloseModal}
          title={selectedArticle.title}
          content={selectedArticle.content}
          date={selectedArticle.date}
          readTime={selectedArticle.readTime}
          category={selectedArticle.category}
        />
      )}
    </div>
  );
};

export default Index;
