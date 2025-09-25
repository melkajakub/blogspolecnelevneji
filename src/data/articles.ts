export interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  featured: boolean;
}

export const articles: Article[] = [
  {
    id: 1,
    title: "Proč vznikl projekt Společně levněji a co od nás můžete čekat",
    excerpt: "Platíte za energie a nejste si jistí, jestli je vaše cena férová? Právě proto vznikl projekt Společně levněji – abych vám pomohl ušetřit peníze s minimálním úsilím z vaší strany.",
    content: `## 🎯 Úvod
Platíte za energie a nejste si jistí, jestli je vaše cena férová? Nejste sami. Mnoho domácností v Česku zbytečně platí tisíce korun navíc jen proto, že se v nabídkách a fakturách těžko vyznají. Právě proto vznikl projekt **Společně levněji** – abych vám pomohl ušetřit peníze s minimálním úsilím z vaší strany.

## 💡 Moje motivace
Rozhodl jsem se tuto službu poskytovat proto, že se často setkávám s lidmi, kteří zbytečně přeplácí. Dodavatelé spoléhají na to, že zákazníci nebudou řešit končící fixace a automaticky spadnou na nevýhodné ceníky. Cílem projektu je stát na vaší straně – hlídat, vyjednávat a hledat férové řešení.

## ⚙️ Jak služba funguje
Na začátku pro klienta zanalyzuji, zda má správně nastavenou distribuční sazbu, jestli má sjednanou rozumnou cenu, kdy mu končí fixace a zda je možné vyjednat výhodnější cenu u stávajícího dodavatele, nebo bude lepší dodavatele změnit. Všechny varianty odprezentuji včetně čísel, aby klient jasně viděl, co pro něj jednotlivé kroky znamenají a mohl si vybrat nejschůdnější řešení.

Před koncem fixace vždy automaticky oslovím stávajícího dodavatele a pokusím se vyjednat individuální nabídku. O výsledku jednání klienta informuji e-mailem, přiložím srovnání konkurenčních nabídek a klient se pak sám rozhodne, zda nabídku přijme, nebo mě požádá o zajištění jiné. Veškeré smlouvy uzavírá přímo klient s dodavatelem, já vystupuji jako nezávislý poradce.

Za tuto službu klient platí **600 Kč ročně** za každé odběrné místo. Součástí služby je pravidelné hlídání fixací, komunikace s dodavateli a zasílání přehledných reportů s doporučeními a návrhy dalších kroků.

## 👥 Komu se služba vyplatí
Jednorázově se vyplatí každému – pokud po prvním jednání o konkrétním odběrném místě nezajistím úsporu alespoň 1 000 Kč, je první rok služby zdarma.

Dlouhodobě se služba vyplatí zejména těm, kteří sami aktivně nevyjednávájí individuální nabídeky na konci fixace a přistupují na nabídky automaticky posílané dodavatelem. Největší přínos má pro domácnosti s vyšší spotřebou, například tam, kde se topí elektřinou nebo plynem.

## 📚 Jakým tématům se budeme na blogu věnovat
Na blogu najdete praktické tipy k úsporám, návody, jak číst faktury, vysvětlení rozdílů mezi distribučními sazbami a také příběhy domácností, kterým se podařilo ušetřit. Chci, abyste se v energiích cítili jistě a nemuseli mít obavy, že vás dodavatel nechává zbytečně přeplácet.

## ✅ Závěr
Blog Společně levněji je tu proto, abyste se snadno zorientovali v energiích a vyhnuli se nevýhodným nabídkám. Sledujte naše články a využijte možnost objednat si naši službu – **s námi budete mít jistotu, že platíte férové ceny**.`,
    date: "15. září 2025",
    readTime: "5 min",
    category: "O nás",
    featured: true
  },
  {
    id: 2,
    title: "Máte správnou distribuční sazbu?",
    excerpt: "Jedním z nejjednodušších způsobů, jak ušetřit na energiích, je správně nastavená distribuční sazba. Pokud je vaše sazba nevhodně zvolená, můžete platit zbytečně stovky až tisíce korun ročně navíc.",
    content: `## ⚡ Úvod
Jedním z nejjednodušších způsobů, jak ušetřit na energiích, je správně nastavená **distribuční sazba**. Jde o část regulované složky ceny, která je stejná bez ohledu na to, jakého máte dodavatele. Pokud je vaše sazba nevhodně zvolená, můžete platit zbytečně stovky až tisíce korun ročně navíc.

## 📋 Nejčastější distribuční sazby
- **D01d** – pro domácnosti s velmi nízkou spotřebou (např. byty bez elektrického vytápění, chalupy).
- **D02d** – nejběžnější sazba pro domácnosti se střední spotřebou.
- **D25d** – pro domácnosti s elektrickým ohřevem vody (bojler).
- **D57d** – pro domácnosti s tepelným čerpadlem s 20 hodinami nízkého tarifu.

Každá sazba je určena pro jiné podmínky, a pokud je nastavená nesprávně, domácnost na tom tratí.

## ⚠️ Častý problém
Často se setkávám se situací, kdy má domácnost s roční spotřebou třeba jen **1,5 MWh** sazbu **D02d**. V takovém případě je mnohem výhodnější přejít na sazbu **D01d**, což může přinést úsporu i kolem **1 000 Kč ročně** – a to bez ohledu na to, jakého má zákazník dodavatele nebo jakou má sjednanou cenu.

## 💰 Proč na sazbě záleží
Distribuční sazba určuje, jak platíte regulovanou část ceny elektřiny. Nesprávná volba znamená, že platíte víc, než musíte, i když máte jinak výhodný tarif od dodavatele. Proto je vždy důležité zkontrolovat, zda odpovídá vaší skutečné spotřebě.

## ✅ Závěr
Správná distribuční sazba je jeden z detailů, který může rozhodnout o tom, jestli platíte férovou zcenu. Pokud si nejste jistí, zda máte sazbu nastavenou optimálně, obraťte se na nás – pomůžeme vám s kontrolou i optimalizací.`,
    date: "23. září 2025",
    readTime: "4 min",
    category: "Úspory",
    featured: false
  },
  {
    id: 3,
    title: "Musím čekat na konec fixace?",
    excerpt: "Pokud cena na trhu klesá a ještě se třeba blíží topná sezona, není nutné čekat až do konce fixace. U některých dodavatelů lze jako stávající zákazník získat novou individuální nabídku i několik měsíců před vypršením fixace, bez sankcí.",
    content: `## 🕒 Úvod
Mnozí zákazníci si myslí, že musí čekat až do konce fixace, aby mohli změnit cenu za energie. Není to ale pravda. Pokud cena na trhu klesá a ještě se třeba blíží topná sezona, není nutné čekat až do konce fixace. U některých dodavatelů lze jako stávající zákazník získat novou individuální nabídku i několik měsíců před vypršením fixace, bez sankcí.

## 💼 Výhoda stávajícího zákazníka
Dodavatelé si vás většinou chtějí udržet a jsou ochotni jednat o lepších podmínkách. Často vám nabídnou individuální cenu, která může být výhodnější než ta, kterou právě platíte.

## ⚠️ Kdy je vhodné nečekat
Situace, kdy se vyplatí jednat před koncem fixace:
- **Ceny na trhu výrazně klesají** – nemá smysl platit vysokou fixní cenu, když je možné získat lepší
- **Blíží se topná sezona** – vyšší spotřeba znamená, že i menší úspora na ceně se rychle projeví
- **Změna spotřeby** – například instalace tepelného čerpadla nebo naopak snížení spotřeby

## 🤝 Dlouhodobá spolupráce jako výhoda
To je velká výhoda služby **Společně levněji**, která staví na dlouhodobé spolupráci s jedním dodavatelem. Zákazník tak nemusí neustále přecházet, řešit sankce nebo složité výpočty. Stačí jen nechat službu dlouhodobě udržovat dobrou cenu u dodavatele, se kterým je spokojený.

## ✅ Závěr
Nemusíte čekat na konec fixace, pokud je na trhu lepší příležitost. Důležité je mít někoho, kdo sleduje trh a ví, kdy je vhodný čas jednat. **Společně levněji** vám zajistí, že nepropásnete výhodnou nabídku a budete mít vždy férovou cenu.`,
    date: "28. září 2025",
    readTime: "4 min",
    category: "Úspory",
    featured: false
  },
  {
    id: 4,
    title: "Je správné počítat cenu vydělením faktury spotřebou?",
    excerpt: "Mnozí zákazníci počítají cenu za kWh tak, že vydělí celkovou částku na faktuře spotřebou. Tento postup může být ale zavádějící a vést k nesprávným závěrům při porovnávání nabídek.",
    content: `## 🧮 Úvod
Mnozí zákazníci počítají cenu za kWh tak, že **vydělí celkovou částku na faktuře spotřebou**. Tento postup může být ale zavádějící a vést k nesprávným závěrům při porovnávání nabídek. Proč tomu tak je?

## 📊 Složení ceny elektřiny
Cena se totiž skládá z **obchodní a regulované složky**, navíc faktura obsahuje i **paušální poplatky**:
- **Obchodní složka** – cena, kterou si stanovuje dodavatel
- **Regulovaná složka** – distribuce, přenos, systémové služby (stejná u všech dodavatelů)
- **Paušální poplatky** – měsíční poplatek za dodávku a distribuci

## ⚠️ Proč je výpočet zavádějící
Při porovnání dvou odběrných míst s různou spotřebou tak může vyjít zdánlivě jiná cena, i když je sjednaná **stejná obchodní cena za kWh**. 

**Příklad:**
- Domácnost A: spotřeba 2 000 kWh ročně
- Domácnost B: spotřeba 4 000 kWh ročně
- Obě mají stejnou obchodní cenu 1,50 Kč/kWh

U vyšší spotřeby se totiž paušální poplatky „rozpustí" do většího objemu kWh, a výsledek pak vypadá levněji, i když je skutečná obchodní cena stejná.

## ✅ Správný způsob porovnání
Proto je správné **porovnávat jen obchodní cenu za kWh**, ne celkovou částku na faktuře. Jen tak získáte reálný obrázek o tom, která nabídka je skutečně výhodnější.

## 🎯 Závěr
Výpočet ceny vydělením faktury spotřebou může být zavádějící kvůli paušálním poplatkům a struktuře ceny. **Společně levněji** vám pomůže správně porovnat nabídky a najít skutečně nejlepší obchodní cenu pro vaše potřeby.`,
    date: "30. září 2025",
    readTime: "3 min",
    category: "Průvodce",
    featured: false
  }
];
