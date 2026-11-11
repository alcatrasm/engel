import React, { useState } from "react";
import { COURSE_UNITS } from "../data/courseData";
import {
  Hash,
  Scale,
  Brain,
  ScrollText,
  UserCheck,
  Search,
  Pin,
  ArrowRight,
  CheckCircle2,
  XCircle
} from "lucide-react";

interface ExamGuideViewProps {
  onOpenUnit: (unitId: string) => void;
  onStartUnitQuiz: (unitId: string) => void;
}

type GuideSection = "numbers" | "pairs" | "theorists" | "crpd" | "case";

const NUMBERS_CHEATSHEET = [
  {
    badge: "%40",
    title: "Devlet Memurları Kanunu (DMK) & Erişkin Raporu Alt Sınırı",
    desc: "Türkiye'de bir bireyin yasal olarak 'engelli' sayılması, EKPSS'ye girmesi ve engelli haklarından yararlanması için resmi sağlık kurulu raporuyla en az %40 yeti kaybı şarttır.",
    clue: "Soruda 'en az yüzde kaç' veya 'DMK engellilik sınırı' geçiyorsa cevap kesinlikle %40'tır."
  },
  {
    badge: "3 Yaş & 6 Belirti",
    title: "Otizm (Yaygın Gelişimsel Bozukluk) Tanı Şifresi",
    desc: "IDEA sınıflandırmasına göre Otizm; 3 yaşından önce ortaya çıkan ve sosyal etkileşim, iletişim ve tekrarlayıcı davranış alanlarında en az 6 belirti ile seyreden gelişimsel durumdur.",
    clue: "3 yaş öncesi + En az 6 belirti = Otizm."
  },
  {
    badge: "16 Yaş Öncesi",
    title: "Zihinsel Engellilik Yaş Sınırı",
    desc: "Ders notlarına göre zihinsel engellilik; 16 yaşından önce gelişim sürecinde ortaya çıkan, zihinsel işlevlerde ortalamanın anlamlı derecede altında olma ve uyumsal davranışlarda (özbakım, iletişim) gerilik durumudur.",
    clue: "16 yaşından önce + Uyumsal davranış geriliği = Zihinsel Engellilik."
  },
  {
    badge: "20 / 70 Ayak",
    title: "Az Gören (Görme Keskinliği Ölçütü)",
    desc: "Tüm düzeltmelere (gözlük/lens) rağmen iyi gören gözündeki görme keskinliği 20'ye 70 ayak (20/70) veya daha az olan bireyler 'Az Gören' olarak tanımlanır.",
    clue: "20'ye 70 ayak = Az Gören."
  },
  {
    badge: "6 m → 60 cm",
    title: "Kör (Yasal Körlük / Ağır Görme Kaybı)",
    desc: "Normal görme gücüne sahip bir kişinin 6 metreden görebildiği nesneyi, tüm düzeltmelere rağmen 60 cm veya daha yakından görebilen (görme keskinliği 1/10 ve altı) kişidir.",
    clue: "6 metreden görüleni 60 cm'den görmek (1/10) = Kör."
  },
  {
    badge: "50+ İşçi (%3 ve %4)",
    title: "4857 Sayılı İş Kanunu Engelli İstihdam Kotası",
    desc: "50 veya daha fazla işçi çalıştıran Özel Sektör işyerleri %3 engelli işçi; Kamu işyerleri ise %4 engelli işçi (ve %2 eski hükümlü) çalıştırmak zorundadır. 657 Devlet Memuru kotası da %3'tür.",
    clue: "50+ İşçi: Özel Sektör = %3 | Kamu İşçi = %4 | Devlet Memuru (657) = %3."
  },
  {
    badge: "18 Yaş Altı",
    title: "ÇÖZGER (Çocuklar İçin Özel Gereksinim Raporu)",
    desc: "18 yaşını doldurmamış çocuklar için '% engel oranı' yazılmaz; bunun yerine çocuğun destek ihtiyacını belirten ÇÖZGER (Özel Gereksinim Düzeyi - ÖGV) raporu verilir.",
    clue: "18 yaş altı çocuk = ÇÖZGER (Yüzde oran yok, Özel Gereksinim Düzeyi var)."
  },
  {
    badge: "2828 / 2022 / 5378",
    title: "3 Temel Kanun Numarası Şifresi",
    desc: "2828 = Sosyal Hizmetler Kanunu (Bakım, rehabilitasyon ihtiyacı & Evde Bakım Yardımı) | 2022 = Muhtaç Engelli ve Yaşlı Aylığı Kanunu | 5378 = 2005 Engelliler Hakkında Kanun (Temel Çerçeve & Erişilebilirlik).",
    clue: "Evde Bakım = 2828 | Engelli Maaşı/Aylığı = 2022 | Genel Engelliler Kanunu = 5378."
  }
];

const CONFUSED_PAIRS = [
  {
    leftTitle: "Biçimsel (Şekli) Eşitlik",
    leftDesc: "Herkesin farklılığını yok sayıp herkese aynı kuralı uygulamaktır. (Örn: Tekerlekli sandalyeli bireye de merdiveni işaret etmek). Adaletsizlik üretir.",
    rightTitle: "Maddi (Gerçek) Eşitlik",
    rightDesc: "Farklı ihtiyaçları dikkate alarak rampa, asansör, ek süre gibi desteklerle sonuçta gerçek fırsat eşitliği sağlamaktır.",
    keyTakeaway: "Sınavda 'Herkese aynı davranmak neden adil değildir?' derse: Biçimsel eşitlik engelleri görmezden gelir, hedef Maddi Eşitliktir!"
  },
  {
    leftTitle: "Erişilebilirlik & Evrensel Tasarım",
    leftDesc: "Erişilebilirlik: Binaların/ulaşımın engelli gruplar için standartlara uygun yapılmasıdır (Grup odaklı). Evrensel Tasarım: En baştan herkes için (ek tadilatsız) tasarlamaktır.",
    rightTitle: "Makul Düzenleme (Md. 5 & 2)",
    rightDesc: "Genel standartların yetmediği somut bir durumda, tek bir engelli bireyin talebi üzerine yapılan kişiye özel uyarlamadır. Reddedilmesi doğrudan ayrımcılıktır!",
    keyTakeaway: "Genel rampa/standart = Erişilebilirlik | En baştan herkes için = Evrensel Tasarım | Belirli bir kişi için özel uyarlama = Makul Düzenleme."
  },
  {
    leftTitle: "Vesayet (İkame Karar Verme)",
    leftDesc: "Geleneksel anlayış: Engelli bireyin karar verme hakkını elinden alıp onun yerine vasinin imza atmasıdır (İradeyi yok sayar).",
    rightTitle: "Destekli Karar Verme (CRPD Md. 12)",
    rightDesc: "Modern İnsan Hakları anlayışı: Bireyin yasal ehliyeti korunur; kendi kararını verirken tercüman, sade anlatım veya güvendiği kişilerle desteklenir.",
    keyTakeaway: "CRPD Madde 12 = Vesayete (İkame Karara) HAYIR, Destekli Karar Vermeye EVET!"
  },
  {
    leftTitle: "Parapleji (Alt Vücut Felci)",
    leftDesc: "Omuriliğin sırt (torakal) veya bel (lomber) seviyesinden yaralanması sonucu yalnızca bacakların ve alt gövdenin etkilenmesidir. Kollar ve eller sağlamdır.",
    rightTitle: "Tetrapleji / Kuadripleji (4 Uzuv)",
    rightDesc: "Omuriliğin boyun (servikal) seviyesinden yaralanması sonucu hem iki kolun hem iki bacağın (4 uzvun) etkilenmesidir.",
    keyTakeaway: "Sadece bacaklar (bel/sırt) = Parapleji | Kollar + Bacaklar (boyun) = Tetrapleji."
  },
  {
    leftTitle: "Serebral Palsi (SP)",
    leftDesc: "Doğum öncesi/sırası/sonrası gelişen beyin hasarına bağlıdır. En önemli sınav şifresi: Beyindeki lezyon İLERLEYİCİ DEĞİLDİR (Non-progresif).",
    rightTitle: "DMD, SMA ve Multipl Skleroz (MS)",
    rightDesc: "DMD ve SMA genetik ve İLERLEYİCİ (progresif) kas/motor nöron hastalıklarıdır. MS ise miyelin kılıf hasarıyla ATAKLARLA (epizodik) seyreder.",
    keyTakeaway: "İlerleyici olmayan beyin hasarı = Serebral Palsi | Genetik ilerleyici kas yıkımı = DMD | Ataklı miyelin kaybı = MS."
  },
  {
    leftTitle: "Tıbbi (Medikal) Model",
    leftDesc: "Sorunu bireyin bedenindeki bozuklukta görür. Birey 'hasta'dır, otorite doktordur, çözüm sadece ameliyat/ilaçtır.",
    rightTitle: "Sosyal Model & İnsan Hakları Modeli",
    rightDesc: "Sosyal Model (UPIAS): Yeti yitimi bedendedir ama engellilik toplumun merdiven ve önyargılarındadır. İnsan Hakları Modeli (CRPD): Birey onurlu bir hak öznesidir.",
    keyTakeaway: "Beden kusurlu = Tıbbi Model | Toplumun engelleri suçlu = Sosyal Model | Onur ve Hak Öznesi = İnsan Hakları Modeli."
  }
];

const THEORISTS_LIST = [
  {
    name: "Erving Goffman",
    theory: "Damgalama (Stigma) Kuramı",
    keyword: "Bozulmuş kimlik, gözden düşürücü etiket, sosyal dışlanma ve utanç.",
    summary: "Toplumun 'normal' beklentilerine uymayan bireye negatif bir damga vurulması ve kişinin sadece engeliyle görülmesidir."
  },
  {
    name: "Howard Becker",
    theory: "Etiketleme (Labeling) Kuramı",
    keyword: "Kuralları koyanların 'yetersiz/sapkın' etiketi yapıştırması ve kendini gerçekleştiren kehanet.",
    summary: "Bireye 'yapamaz, edemez' etiketi yapıştırıldığında, bireyin zamanla bu rolü kabullenip toplumdan çekilmesidir."
  },
  {
    name: "Urie Bronfenbrenner",
    theory: "Ekolojik Sistemler Kuramı",
    keyword: "Mikro (Aile/Okul), Mezzo (Aile-Okul İlişkisi), Ekzo (Ebeveyn İşyeri/Belediye), Makro (Kültür/Yasalar), Krono (Zaman).",
    summary: "Bireyi tek başına değil, iç içe geçmiş 5 çevresel sistemin etkileşimi içinde değerlendirir."
  },
  {
    name: "Kimberlé Crenshaw",
    theory: "Kesişimsellik (Intersectionality)",
    keyword: "Çoklu ayrımcılık (Engelli + Kadın + Yoksul + Göçmen).",
    summary: "Farklı dezavantajlı kimliklerin üst üste binerek tekil ayrımcılıklardan çok daha ağır ve kendine özgü bir dışlanma yaratmasıdır."
  },
  {
    name: "Robert McRuer",
    theory: "Crip (Sakat) Teorisi",
    keyword: "Zorunlu sağlam bedenlilik (Compulsory able-bodiedness), radikal eleştiri, normalliğin reddi.",
    summary: "Toplumun herkesi 'sağlam bedenli' olmaya zorlayan normlarını kökten reddeder ve 'sakat' kelimesini politik bir gururla sahiplenir."
  },
  {
    name: "UPIAS & Mike Oliver",
    theory: "Sosyal Model",
    keyword: "Yeti yitimi (Impairment - biyolojik) vs Engellilik (Disability - toplumsal engel).",
    summary: "Kişiyi engelleyen şey bacağının tutmaması değil, binaya rampa yapmayan toplumdur."
  },
  {
    name: "Lennard Davis",
    theory: "Normalite (Normallik) İdeolojisi",
    keyword: "19. yüzyıl istatistik, çan eğrisi, 'ortalama insan' kurgusu.",
    summary: "'Normal beden' kavramının doğal bir gerçek değil, sanayileşme ve istatistikle icat edilmiş bir iktidar aracı olduğunu gösterir."
  },
  {
    name: "Ivan Illich",
    theory: "Medikalizasyon & İatrojenez",
    keyword: "Hayatın tıbbileştirilmesi, klinik/sosyal/kültürel iatrojenez (tıbbın verdiği zarar).",
    summary: "İnsani farklılıkların hastalık ilan edilip bireylerin ömür boyu tıbbi kurumların pasif müşterisi haline getirilmesini eleştirir."
  }
];

const CRPD_ARTICLES = [
  { art: "Madde 1", title: "Amaç & Engellilik Tanımı", key: "Yeti kaybı + Çevresel/tutumsal engellerin ETKİLEŞİMİ (Sabit tıbbi tanım yok!)." },
  { art: "Madde 3", title: "Genel İlkeler", key: "Kendi seçimini yapma özgürlüğü, özerklik, onur, ayrımcılık yapmama, tam katılım." },
  { art: "Madde 4", title: "Genel Yükümlülükler & DPO", key: "Karar süreçlerinde Engelli Örgütlerine (DPO) danışma ('Bizim hakkımızda, biz olmadan asla!')." },
  { art: "Madde 5", title: "Eşitlik ve Ayrımcılık Yasağı", key: "Makul düzenlemenin reddedilmesi = Doğrudan ayrımcılıktır." },
  { art: "Madde 6", title: "Engelli Kadınlar", key: "Kadın ve kız çocuklarının yaşadığı çoklu (kesişimsel) ayrımcılığa karşı önlemler." },
  { art: "Madde 7", title: "Engelli Çocuklar", key: "Çocuğun yüksek yararı ve yaşına/olgunluğuna göre görüşünün alınması." },
  { art: "Madde 9", title: "Erişilebilirlik", key: "Binalar, yollar, ulaşım, dijital bilgi ve iletişime (Braille, işaret dili) engelsiz erişim." },
  { art: "Madde 12", title: "Yasa Önünde Eşit Tanınma", key: "Yasal ehliyet! Vesayet (ikame karar) yerine DESTEKLİ KARAR VERME." },
  { art: "Madde 13", title: "Adalete Erişim", key: "Mahkeme ve karakollarda usuli uyarlamalar (işaret dili tercümanı, kolay okunur belge)." },
  { art: "Madde 19", title: "Bağımsız Yaşama ve Topluma Dahil Olma", key: "Nerede ve kiminle yaşayacağını seçme, kuruma zorla kapatılmama, kişisel asistan desteği." },
  { art: "Madde 20 & 26", title: "Kişisel Hareketlilik & Habilitasyon", key: "Uygun fiyatlı tekerlekli sandalye/cihaz (Md.20) ve doğuştan beceri kazanma/rehabilitasyon (Md.26)." },
  { art: "Madde 24", title: "Eğitim Hakkı", key: "Ayrıştırılmış okul yerine akranlarla birlikte KAPSAYICI (Kaynaştırma) EĞİTİM." },
  { art: "Madde 27", title: "Çalışma ve İstihdam", key: "Açık işgücü piyasasında eşit işe eşit ücret ve işyerinde makul düzenleme." },
  { art: "Madde 28", title: "Yeterli Yaşam Standardı ve Sosyal Koruma", key: "Yoksullukla mücadele, engelliliğe bağlı ek giderlerin devletçe karşılanması." },
  { art: "Madde 29", title: "Siyasal ve Kamusal Yaşama Katılım", key: "Erişilebilir oy pusulası/sandık, gizli oy ve seçilme hakkı." },
  { art: "Madde 31", title: "İstatistik ve Veri Toplama", key: "Politika üretmek için kişisel gizliliğe uygun ayrıştırılmış veri toplama." }
];

export const ExamGuideView: React.FC<ExamGuideViewProps> = ({
  onOpenUnit,
  onStartUnitQuiz
}) => {
  const [activeSection, setActiveSection] = useState<GuideSection>("numbers");
  const [searchQuery, setSearchQuery] = useState("");

  const allTopics = COURSE_UNITS.flatMap((u) =>
    u.topics.map((t) => ({ ...t, unitOrder: u.order, unitShortTitle: u.shortTitle }))
  );

  const searchResults =
    searchQuery.trim().length >= 2
      ? allTopics.filter((t) => {
          const q = searchQuery.toLowerCase();
          return (
            t.title.toLowerCase().includes(q) ||
            t.eli5.toLowerCase().includes(q) ||
            t.keepInMind.toLowerCase().includes(q) ||
            t.practicalTip.toLowerCase().includes(q)
          );
        })
      : [];

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {/* 1. Fast Concept Search Across All 80 Topics */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-3 shadow-2xs">
        <div className="flex items-center justify-between gap-2">
          <div>
            <h1 className="text-base sm:text-lg font-bold text-slate-900">
              Sınav Şifreleri & Hızlı Tekrar Rehberi
            </h1>
            <p className="text-xs text-slate-500">
              Vize ve final öncesi tüm sayılar, karıştırılan kavramlar, kuramcılar, CRPD maddeleri ve vaka çözümü tek ekranda.
            </p>
          </div>
        </div>

        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="80 konu içinde kavram, kanun veya kuramcı ara (Örn: Goffman, %40, ÇÖZGER, Madde 12, Parapleji)..."
            className="w-full min-h-[42px] pl-10 pr-4 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
          />
        </div>

        {searchResults.length > 0 && (
          <div className="bg-blue-50/60 border border-blue-200 rounded-xl p-3 space-y-2 max-h-80 overflow-y-auto">
            <div className="text-xs font-bold text-blue-900">
              Arama Sonuçları ({searchResults.length} Konu Bulundu):
            </div>
            {searchResults.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-slate-200 rounded-xl p-3 space-y-1.5"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold text-blue-700">
                    {item.unitOrder}. Ünite · {item.title}
                  </span>
                  <button
                    onClick={() => onOpenUnit(item.unitId)}
                    className="text-[11px] font-semibold text-blue-600 hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Üniteye Git</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">{item.eli5}</p>
                <div className="text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-lg px-2.5 py-1.5">
                  📌 <strong>Sınav Şifresi:</strong> {item.keepInMind}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Section Tabs */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          <button
            onClick={() => setActiveSection("numbers")}
            className={`min-h-[38px] px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
              activeSection === "numbers"
                ? "bg-blue-600 text-white"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            <Hash className="w-3.5 h-3.5" />
            <span>Sayılar & Kanunlar</span>
          </button>

          <button
            onClick={() => setActiveSection("pairs")}
            className={`min-h-[38px] px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
              activeSection === "pairs"
                ? "bg-blue-600 text-white"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            <Scale className="w-3.5 h-3.5" />
            <span>Karıştırılan İkililer</span>
          </button>

          <button
            onClick={() => setActiveSection("theorists")}
            className={`min-h-[38px] px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
              activeSection === "theorists"
                ? "bg-blue-600 text-white"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            <Brain className="w-3.5 h-3.5" />
            <span>Kuramcılar & Modeller</span>
          </button>

          <button
            onClick={() => setActiveSection("crpd")}
            className={`min-h-[38px] px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
              activeSection === "crpd"
                ? "bg-blue-600 text-white"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            <ScrollText className="w-3.5 h-3.5" />
            <span>BM CRPD Maddeleri</span>
          </button>

          <button
            onClick={() => setActiveSection("case")}
            className={`min-h-[38px] px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
              activeSection === "case"
                ? "bg-blue-600 text-white"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            <UserCheck className="w-3.5 h-3.5" />
            <span>Mert Vakası & Çözüm Şablonu</span>
          </button>
        </div>
      </div>

      {/* SECTION 1: NUMBERS & LAWS */}
      {activeSection === "numbers" && (
        <div className="space-y-3">
          {NUMBERS_CHEATSHEET.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 space-y-2 shadow-2xs"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-lg text-xs sm:text-sm font-extrabold bg-blue-600 text-white">
                  {item.badge}
                </span>
                <h2 className="text-sm sm:text-base font-bold text-slate-900 flex-1">
                  {item.title}
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {item.desc}
              </p>
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl px-3 py-2 text-xs font-semibold text-emerald-950 flex items-center gap-2">
                <Pin className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span>{item.clue}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* SECTION 2: CONFUSED PAIRS */}
      {activeSection === "pairs" && (
        <div className="space-y-3.5">
          {CONFUSED_PAIRS.map((pair, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 space-y-3 shadow-2xs"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-rose-50/70 border border-rose-200 rounded-xl p-3.5 space-y-1">
                  <div className="text-xs font-bold text-rose-900 flex items-center gap-1.5">
                    <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>{pair.leftTitle}</span>
                  </div>
                  <p className="text-xs text-slate-800 leading-relaxed">
                    {pair.leftDesc}
                  </p>
                </div>

                <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-3.5 space-y-1">
                  <div className="text-xs font-bold text-emerald-900 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{pair.rightTitle}</span>
                  </div>
                  <p className="text-xs text-slate-800 leading-relaxed">
                    {pair.rightDesc}
                  </p>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-amber-950">
                ⚡ <strong>Sınav Ayırt Etme Şifresi:</strong> {pair.keyTakeaway}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* SECTION 3: THEORISTS & MODELS */}
      {activeSection === "theorists" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {THEORISTS_LIST.map((th, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-2xl p-4 space-y-2 shadow-2xs flex flex-col justify-between"
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-purple-100 text-purple-900">
                    {th.name}
                  </span>
                  <span className="text-xs font-bold text-blue-700">
                    {th.theory}
                  </span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {th.summary}
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-[11px] text-slate-800">
                <strong>Anahtar Kelimeler:</strong> {th.keyword}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* SECTION 4: UN CRPD ARTICLES */}
      {activeSection === "crpd" && (
        <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 space-y-3 shadow-2xs">
          <div className="text-xs sm:text-sm font-bold text-slate-900">
            BM Engellilerin Haklarına İlişkin Sözleşme (CRPD - 2006) Sınav Maddeleri
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {CRPD_ARTICLES.map((c, idx) => (
              <div
                key={idx}
                className="border border-slate-200 rounded-xl p-3 bg-slate-50/70 space-y-1"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-extrabold text-blue-700 bg-blue-100 px-2 py-0.5 rounded-md">
                    {c.art}
                  </span>
                  <span className="text-xs font-bold text-slate-900 flex-1">
                    {c.title}
                  </span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">{c.key}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION 5: MERT CASE ANALYSIS TEMPLATE */}
      {activeSection === "case" && (
        <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4 shadow-2xs">
          <div className="space-y-1">
            <div className="text-xs font-bold text-blue-600">
              4. Ünite Uygulama & Sınav Vaka Sorusu Çözüm Rehberi
            </div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              Mert Vakası (24 Yaş, Parapleji) — ICF ve Mikro/Mezzo/Makro Müdahale Planı
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              <strong>Vaka Özeti:</strong> 24 yaşındaki Mert, motosiklet kazası sonrası T10 seviyesinde omurilik yaralanması sonucu <strong>parapleji</strong> (alt ekstremite felci; kolları sağlam) olmuştur. Asansörsüz 3. katta ailesiyle yaşamaktadır. Babası "Artık tek başına yaşayamaz, bakım kurumuna yatıralım" demektedir; Mert ise içine kapanmış ve işini kaybetmiştir.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-blue-50/80 border border-blue-200 rounded-xl p-4 space-y-1.5">
              <div className="text-xs font-bold text-blue-950">
                1. DSÖ ICF (Biyopsikososyal) Analizi
              </div>
              <ul className="text-xs text-slate-800 space-y-1 leading-relaxed">
                <li>• <strong>Vücut Yapı/İşlevleri:</strong> Omurilik (T10) kesiği ve bacaklarda motor/duyu kaybı (Parapleji).</li>
                <li>• <strong>Aktivite Kısıtlılığı:</strong> Merdiven çıkamama, bağımsız transferde zorlanma.</li>
                <li>• <strong>Katılım Kısıtlılığı:</strong> İşten ayrılma, mahalle ve arkadaş çevresinden kopma.</li>
                <li>• <strong>Çevresel Faktörler:</strong> 3. katta asansör/rampa olmaması ve babanın aşırı korumacı/vesayetçi tutumu.</li>
              </ul>
            </div>

            <div className="bg-emerald-50/80 border border-emerald-200 rounded-xl p-4 space-y-1.5">
              <div className="text-xs font-bold text-emerald-950">
                2. Mikro, Mezzo ve Makro Müdahale Düzeyleri
              </div>
              <ul className="text-xs text-slate-800 space-y-1 leading-relaxed">
                <li>• <strong>Mikro Düzey (Birey):</strong> Mert ile güçlendirme (empowerment) odaklı psikososyal danışmanlık, yas süreci çalışması, kendi kaderini tayin hakkının (CRPD Md.12 ve Md.19) desteklenmesi.</li>
                <li>• <strong>Mezzo Düzey (Aile & Grup):</strong> Babaya ve aileye engellilik eğitimi verilmesi (kuruma yatırma fikrinin yanlışlığı), akran destek gruplarıyla tanıştırma, apartman yönetimiyle rampa/merdiven asansörü görüşmesi.</li>
                <li>• <strong>Makro Düzey (Politika & Haklar):</strong> 2828 Evde Bakım Yardımı veya 2022 aylığı bağlantısı, 4857 (%3-%4 kota) ve EKPSS kapsamında mesleki rehabilitasyon ve istihdama yönlendirme.</li>
              </ul>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100">
            <span className="text-xs font-semibold text-slate-600">
              Bu vaka ve tüm konularla ilgili test sorularını hemen çözebilirsin:
            </span>
            <button
              onClick={() => onStartUnitQuiz("unit-4")}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold cursor-pointer"
            >
              4. Ünite Vaka & Uygulama Testini Çöz →
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
