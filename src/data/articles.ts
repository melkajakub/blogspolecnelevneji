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
Správná distribuční sazba je jeden z detailů, který může rozhodnout o tom, jestli platíte férovou cenu. Pokud si nejste jistí, zda máte sazbu nastavenou optimálně, obraťte se na nás – pomůžeme vám s kontrolou i optimalizací.`,
    date: "23. září 2025",
    readTime: "4 min",
    category: "Úspory",
    featured: false
  }
];
