import React, { useState } from 'react';
import BlogHeader from '@/components/blog/BlogHeader';
import BlogHero from '@/components/blog/BlogHero';
import ArticleCard from '@/components/blog/ArticleCard';
import ArticleModal from '@/components/blog/ArticleModal';
import AffiliateBanner from '@/components/blog/AffiliateBanner';
import BlogFooter from '@/components/blog/BlogFooter';
import { Button } from '@/components/ui/button';
import { articles, type Article } from '@/data/articles';

const BlogIndex = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const handleArticleClick = (article: Article) => {
    setSelectedArticle(article);
  };

  const handleCloseModal = () => {
    setSelectedArticle(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <BlogHero />
      
      <main className="container py-16">
        {/* Hlavní banner pro službu Společně levněji */}
        <div className="mb-16">
          <div className="bg-primary/5 border-2 border-primary/20 rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Dlouhodobá optimalizace vašeho odběrného místa
            </h2>
            <p className="text-lg text-text-light mb-6 max-w-3xl mx-auto leading-relaxed">
              Služba se vyplatí každému, kdo aktivně nebojuje s dodavateli o co nejvýhodnější ceny 
              a přijímá zdánlivě výhodné nabídky, které mu dodavatel pošle před koncem fixace, 
              nebo dokonce nechá smlouvu automaticky prolongovat se základním ceníkem. 
              <strong>Pokud takový zákazník topí plynem nebo elektřinou, úspora může být klidně přes 10 000 Kč ročně!</strong>
            </p>
            <Button asChild size="lg" className="text-lg px-8 py-3">
              <a 
                href="https://www.spolecnelevneji.cz" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Objednat službu za 600 Kč/rok
              </a>
            </Button>
          </div>
        </div>

        {/* Affiliate banner E.ON */}
        <div className="mb-12">
          <AffiliateBanner
            title="E.ON – ověřený dodavatel s výhodnými nabídkami"
            description="Pokud nechcete využít mých služeb a chcete přejít k ověřenému dodavateli, tak E.ON má aktuálně pro nové zákazníky jedny z nejvýhodnějších nabídek na trhu."
            buttonText="Přejít k E.ON"
            href="https://ehub.cz/system/scripts/click.php?a_aid=7023d82f&a_bid=87497054"
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
                date={article.date}
                readTime={article.readTime}
                category={article.category}
                featured={article.featured}
                onClick={() => handleArticleClick(article)}
              />
            ))}
          </div>
        </section>

        {/* Affiliate banner Ušetřeno.cz */}
        <div className="mb-12">
          <AffiliateBanner
            title="Ušetřeno.cz – nezávislé srovnání nabídek"
            description="Pokud nechcete využít mých služeb a chcete nezávislé porovnání nabídek energií, tak doporučuji Ušetřeno.cz pro rychlé a jednoduché porovnání."
            buttonText="Porovnat na Ušetřeno"
            href="https://www.usetreno.cz"
            company="Ušetřeno.cz"
          />
        </div>

        {/* O blogu sekce */}
        <section id="o-blogu" className="bg-muted/50 rounded-lg p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <img 
                src="/spolecnelevneji-logo.png" 
                alt="Společně levněji logo" 
                className="h-12 w-12"
              />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                O blogu Společně levněji
              </h2>
            </div>
            <p className="text-text-light leading-relaxed mb-6">
              Tento blog je přirozeným rozšířením služby <strong>Společně levněji</strong>, která pomáhá 
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

      <BlogFooter />

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

export default BlogIndex;