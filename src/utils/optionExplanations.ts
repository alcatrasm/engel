import { QuizQuestion, TopicCard } from "../data/courseData";

export interface OptionAnalysisItem {
  index: number;
  letter: string;
  optionText: string;
  isCorrect: boolean;
  explanation: string;
}

interface ConceptRule {
  match: (optLower: string, questionLower: string) => boolean;
  explain: (optText: string, correctText: string) => string;
}

const CONCEPT_DISTRACTOR_RULES: ConceptRule[] = [
  // 1. Percentages & Rates
  {
    match: (o) => o === "%25" || o === "%20" || o === "%30" || o === "%35",
    explain: (opt, corr) =>
      `"${opt}" oranı Türkiye'de yasal engellilik statüsü için yeterli değildir. Resmi sağlık kurulu raporlarında engelli sayılma alt sınırı ${corr} oranıdır.`
  },
  {
    match: (o) => o === "%40" || o.includes("en az %40"),
    explain: (opt, corr) =>
      `"${opt}" genel engellilik alt sınırıdır (DMK ve Erişkin Raporu için). Ancak bu soruda sorulan özel durumun doğru karşılığı "${corr}" seçeneğidir.`
  },
  {
    match: (o) => o === "%50" || o === "%60" || o === "%70" || o === "%80" || o === "%90",
    explain: (opt, corr) =>
      `"${opt}" oranı genellikle ağır engellilik, malulen emeklilik veya ÖTV muafiyeti gibi özel eşiklerde gündeme gelir; bu soruda aranan yasal sınır "${corr}" değeridir.`
  },
  {
    match: (o, q) =>
      (o === "%3" || o.includes("%3")) &&
      (q.includes("kota") || q.includes("4857") || q.includes("işçi") || q.includes("memur")),
    explain: (opt, corr) =>
      `"%3" oranı 50+ işçi çalıştıran özel sektör işyerleri ve 657 Devlet Memuru kotası içindir; kamu işyerlerinde işçi kotası %4'tür. Bu soruda doğru cevap "${corr}" seçeneğidir.`
  },
  {
    match: (o, q) =>
      (o === "%4" || o.includes("%4")) &&
      (q.includes("kota") || q.includes("4857") || q.includes("işçi") || q.includes("özel")),
    explain: (opt, corr) =>
      `"%4" oranı kamu işyerlerindeki engelli işçi kotasıdır (eski hükümlü %2 ile birlikte). Özel sektör ve memurlukta ise oran %3'tür. Bu soruda doğru cevap "${corr}" seçeneğidir.`
  },
  {
    match: (o, q) =>
      (o === "%2" || o === "%5" || o === "%6" || o === "%10") &&
      (q.includes("kota") || q.includes("4857") || q.includes("çalıştır")),
    explain: (opt, corr) =>
      `"${opt}" engelli istihdam kotalarında yer alan doğru oran değildir (Özel sektör işçi: %3, Kamu işçi: %4, Devlet memuru: %3). Doğru cevap "${corr}" seçeneğidir.`
  },

  // 2. Age & Diagnostic Thresholds (Otizm, Zihinsel, ÇÖZGER, Görme)
  {
    match: (o, q) =>
      (q.includes("otizm") || q.includes("yaygın gelişimsel")) &&
      (o.includes("yaş") || o.includes("belirti")),
    explain: (opt, corr) =>
      `Otizm tanı kriterlerinde altın kural "3 yaşından önce başlaması ve en az 6 belirti görülmesi"dir. "${opt}" bu kuralı karşılamadığı için yanlıştır; doğru şık "${corr}" seçeneğidir.`
  },
  {
    match: (o, q) =>
      q.includes("zihinsel") && (o.includes("yaş") || o === "12" || o === "18" || o === "21" || o === "6"),
    explain: (opt, corr) =>
      `Ders notlarına göre zihinsel engellilik "16 yaşından önce" ortaya çıkan ve uyumsal davranışlarda gerilikle seyreden durumdur. "${opt}" yaş sınırı bu nedenle yanlıştır; doğru cevap "${corr}" seçeneğidir.`
  },
  {
    match: (o, q) =>
      (q.includes("görme") || q.includes("kör") || q.includes("az gören") || q.includes("ayak") || q.includes("metre")) &&
      (o.includes("ayak") || o.includes("metre") || o.includes("cm") || o.includes("az gören") || o.includes("kör")),
    explain: (opt, corr) =>
      `Görme keskinliği kriterlerinde: "Az gören = 20'ye 70 ayak veya daha az", "Kör = Normal kişinin 6 metreden gördüğünü 60 cm veya daha yakından görmek (1/10)" kuralı geçerlidir. "${opt}" bu soru için yanlıştır; doğru cevap "${corr}" seçeneğidir.`
  },

  // 3. Laws & Regulations
  {
    match: (o) => o.includes("2828") || o.includes("shçek"),
    explain: (opt, corr) =>
      `"${opt}" (2828 sayılı Sosyal Hizmetler Kanunu), engelliliği "korunma, bakım, rehabilitasyon ve danışmanlığa ihtiyaç duyma" ve Evde Bakım Yardımı üzerinden ele alır. Bu soruda ise "${corr}" sorulmaktadır.`
  },
  {
    match: (o) => o.includes("5378"),
    explain: (opt, corr) =>
      `"${opt}" (2005 tarihli Engelliler Hakkında Kanun) Türkiye'deki temel çerçeve ve erişilebilirlik yasasıdır; ancak bu soruda aranan özel düzenleme "${corr}" seçeneğidir.`
  },
  {
    match: (o) => o.includes("2022"),
    explain: (opt, corr) =>
      `"${opt}" (2022 sayılı Kanun) muhtaç, güçsüz ve kimsesiz kişilere bağlanan "Engelli ve Yaşlı Aylığı" kanunudur (Evde Bakım Yardımı ise 2828'dir). Bu soruda doğru cevap "${corr}" seçeneğidir.`
  },
  {
    match: (o) => o.includes("4857"),
    explain: (opt, corr) =>
      `"${opt}" (4857 sayılı İş Kanunu) 50 ve üzeri işçi çalıştıran işyerlerindeki engelli işçi kotalarını (%3 özel, %4 kamu) düzenler. Bu soruda aranan cevap "${corr}" seçeneğidir.`
  },
  {
    match: (o) => o.includes("657") || o.includes("devlet memurları kanunu") || o === "dmk",
    explain: (opt, corr) =>
      `"${opt}" devlet memurluğunda %40 engellilik alt sınırını ve %3 EKPSS memur kotasını düzenler. Soruda tarif edilen kavram ise "${corr}" seçeneğidir.`
  },
  {
    match: (o) => o.includes("çözger"),
    explain: (opt, corr) =>
      `"${opt}" (Çocuklar İçin Özel Gereksinim Değerlendirmesi Raporu) yalnızca 18 yaş altı çocuklar için "% oran" yerine "Özel Gereksinim Düzeyi" belirleyen rapordur. Bu soruda doğru cevap "${corr}" seçeneğidir.`
  },
  {
    match: (o) => o.includes("hizmetleri yasası") || o.includes("epizodik"),
    explain: (opt, corr) =>
      `Engellilik Hizmetleri Yasası'nın ayırt edici şifresi "kalıcı veya epizodik (aralıklarla/ataklarla gelen) kapasite azalması" ifadesidir. Bu soruda ise "${corr}" sorulmaktadır.`
  },

  // 4. Models of Disability
  {
    match: (o) => o.includes("ahlaki model") || o.includes("dini model") || o.includes("geleneksel model"),
    explain: (opt, corr) =>
      `"${opt}" engelliliği günah, kader, sınav, ceza veya lütuf olarak açıklayan en eski yaklaşımdır. Soruda anlatılan durum ise "${corr}" ile ilgilidir.`
  },
  {
    match: (o) => o.includes("tıbbi model") || o.includes("medikal model") || o.includes("bireysel model"),
    explain: (opt, corr) =>
      `"${opt}" sorunu tamamen bireyin bedenindeki bozuklukta (hastalıkta) görür ve çözümü sadece tıbbi tedavide arar. Oysa bu soruda vurgulanan yaklaşım "${corr}" seçeneğidir.`
  },
  {
    match: (o) => o.includes("sosyal model"),
    explain: (opt, corr) =>
      `"${opt}" (UPIAS / Mike Oliver) yeti yitimini bedende, engelliliği ise toplumun çıkardığı fiziksel ve tutumsal engellerde görür. Bu soruda doğrudan "${corr}" sorulmaktadır.`
  },
  {
    match: (o) => o.includes("insan hakları modeli") || o.includes("hak temelli"),
    explain: (opt, corr) =>
      `"${opt}" (2006 BM CRPD) engelli bireyi acınacak bir yardım nesnesi değil, doğuştan onur ve özerkliğe sahip bir "hak öznesi" olarak tanımlar. Bu soruda ise doğru cevap "${corr}" seçeneğidir.`
  },
  {
    match: (o) => o.includes("hayırseverlik") || o.includes("yardım modeli"),
    explain: (opt, corr) =>
      `"${opt}" engelli bireye acıma duygusuyla yaklaşır ve onu pasif bir yardım alıcısı konumuna indirger. Soruda aranan kavram ise "${corr}" seçeneğidir.`
  },
  {
    match: (o) => o.includes("biyopsikososyal") || o.includes("icf"),
    explain: (opt, corr) =>
      `"${opt}" (DSÖ 2001 ICF) tıbbi ve sosyal modeli birleştirerek sağlık durumunu çevresel ve kişisel faktörlerin etkileşimiyle açıklar. Bu soruda aranan şık "${corr}" seçeneğidir.`
  },

  // 5. Theorists & Theories
  {
    match: (o) => o.includes("goffman") || o.includes("damgalama") || o.includes("stigma"),
    explain: (opt, corr) =>
      `"${opt}" toplumun farklı gördüğü bireye negatif bir kimlik yapıştırmasını ("bozulmuş kimlik" / Stigma) açıklar. Bu soruda ise "${corr}" sorulmaktadır.`
  },
  {
    match: (o) => o.includes("becker") || o.includes("etiketleme"),
    explain: (opt, corr) =>
      `"${opt}" (Howard Becker - Etiketleme Kuramı) kuralları koyanların bireye "sapkın/yetersiz" etiketi yapıştırmasını ve bireyin zamanla bu etiketi içselleştirmesini açıklar. Sorunun doğru cevabı "${corr}" seçeneğidir.`
  },
  {
    match: (o) => o.includes("bronfenbrenner") || o.includes("ekolojik"),
    explain: (opt, corr) =>
      `"${opt}" bireyi çevresi içindeki iç içe geçmiş 5 sistemle (Mikro, Mezzo, Ekzo, Makro, Krono) açıklar. Bu soruda ise "${corr}" kavramı sorulmaktadır.`
  },
  {
    match: (o) => o.includes("crenshaw") || o.includes("kesişimsellik"),
    explain: (opt, corr) =>
      `"${opt}" (Kimberlé Crenshaw - Kesişimsellik) engellilik, kadın olma, yoksulluk ve göçmenlik gibi kimliklerin üst üste binerek çoklu ayrımcılık yaratmasını inceler. Bu soruda doğru cevap "${corr}" seçeneğidir.`
  },
  {
    match: (o) => o.includes("mcruer") || o.includes("crip") || o.includes("zorunlu sağlam"),
    explain: (opt, corr) =>
      `"${opt}" (Robert McRuer - Crip Teorisi) toplumun "zorunlu sağlam bedenlilik" dayatmasını radikal biçimde sorgular ve normalliği reddeder. Bu soruda ise "${corr}" sorulmaktadır.`
  },
  {
    match: (o) => o.includes("sağlamcılık") || o.includes("ableism") || o.includes("eleştirel engellilik"),
    explain: (opt, corr) =>
      `"${opt}" sağlam bedeni üstün ve standart kabul edip engelli bedeni eksik gören yapısal ayrımcılığı (Ableism) eleştirir. Bu soruda aranan cevap "${corr}" seçeneğidir.`
  },
  {
    match: (o) => o.includes("feminist"),
    explain: (opt, corr) =>
      `"${opt}" engelli kadınların yaşadığı çifte ayrımcılığı, bakım emeğini ve "aseksüel/anne olamaz" önyargılarını eleştirir. Bu soruda doğru şık "${corr}" seçeneğidir.`
  },
  {
    match: (o) => o.includes("bedenleşme") || o.includes("embodiment"),
    explain: (opt, corr) =>
      `"${opt}" sosyal modelin ihmal ettiği ağrı, yorgunluk ve bedensel deneyimi engellilik çalışmalarına geri kazandıran yaklaşımdır. Bu soruda ise "${corr}" sorulmaktadır.`
  },
  {
    match: (o) => o.includes("sosyal inşacı") || o.includes("inşacılık"),
    explain: (opt, corr) =>
      `"${opt}" normallik ve engellilik sınırlarının biyolojik bir sabit değil, toplum, kültür ve dil tarafından üretilen sosyal kurgular olduğunu savunur. Sorunun doğru cevabı "${corr}" seçeneğidir.`
  },
  {
    match: (o) => o.includes("lennard davis") || o.includes("normalite"),
    explain: (opt, corr) =>
      `"${opt}" 19. yüzyılda istatistik ve çan eğrisiyle "normal insan" kavramının icat edildiğini açıklar. Bu soruda doğru cevap "${corr}" seçeneğidir.`
  },
  {
    match: (o) => o.includes("illich") || o.includes("iatrojenez") || o.includes("medikalizasyon"),
    explain: (opt, corr) =>
      `"${opt}" (Ivan Illich) günlük insani farklılıkların aşırı tıbbileştirilmesini ve tıbbın bizzat zarar üretmesini (iatrojenez) eleştirir. Bu soruda doğru cevap "${corr}" seçeneğidir.`
  },

  // 6. Ecological Systems & Social Work Levels (Mikro, Mezzo, Ekzo, Makro, Krono)
  {
    match: (o) => o.includes("mikro sistem") || o === "mikro" || o.includes("mikro düzey"),
    explain: (opt, corr) =>
      `"${opt}" bireyin doğrudan yüz yüze etkileşimde olduğu en yakın çevreyi (aile, sınıf, bireysel danışmanlık) ifade eder. Soruda anlatılan düzey ise "${corr}" seçeneğidir.`
  },
  {
    match: (o) => o.includes("mezzo") || o.includes("mezo"),
    explain: (opt, corr) =>
      `"${opt}" iki farklı mikro sistem arasındaki ilişkiyi (örneğin aile-okul işbirliği veya grup/apartman düzeyinde çalışma) ifade eder. Bu soruda aranan düzey "${corr}" seçeneğidir.`
  },
  {
    match: (o) => o.includes("ekzo"),
    explain: (opt, corr) =>
      `"${opt}" bireyin bizzat içinde yer almadığı ancak alınan kararlardan dolaylı etkilendiği sistemdir (örneğin ebeveynin işyeri saatleri veya belediye meclisi kararları). Bu soruda doğru cevap "${corr}" seçeneğidir.`
  },
  {
    match: (o) => o.includes("makro sistem") || o === "makro" || o.includes("makro düzey"),
    explain: (opt, corr) =>
      `"${opt}" toplumsal kültür, değerler, ulusal yasalar ve devlet politikaları düzeyidir. Bu soruda tarif edilen düzey ise "${corr}" seçeneğidir.`
  },
  {
    match: (o) => o.includes("krono"),
    explain: (opt, corr) =>
      `"${opt}" (Kronosistem) tarihsel zaman, dönem ve yaşam boyu geçiş süreçlerinin (ör. 2005'te 5378 yasasının çıkması) etkisini anlatır. Bu soruda doğru cevap "${corr}" seçeneğidir.`
  },

  // 7. Equality, Accessibility, Reasonable Accommodation, Universal Design
  {
    match: (o) => o.includes("biçimsel eşitlik") || o.includes("şekli eşitlik"),
    explain: (opt, corr) =>
      `"${opt}" herkesin farklı ihtiyaçlarını görmezden gelerek herkese birebir aynı kuralı uygulamaktır (örneğin tekerlekli sandalyeli bireye de merdiven göstermek). Gerçek adalet sağlamaz; doğru cevap "${corr}" seçeneğidir.`
  },
  {
    match: (o) => o.includes("maddi eşitlik") || o.includes("gerçek eşitlik"),
    explain: (opt, corr) =>
      `"${opt}" bireylerin farklı gereksinimlerini dikkate alarak fırsat ve sonuç eşitliği sağlayan pozitif adalet anlayışıdır. Bu soruda ise "${corr}" sorulmaktadır.`
  },
  {
    match: (o) => o.includes("evrensel tasarım"),
    explain: (opt, corr) =>
      `"${opt}" ürün, bina ve hizmetlerin en baştan sonradan ek tadilata gerek kalmadan herkesin kullanabileceği şekilde tasarlanmasıdır. Bu soruda aranan kavram "${corr}" seçeneğidir.`
  },
  {
    match: (o) => o.includes("makul düzenleme"),
    explain: (opt, corr) =>
      `"${opt}" genel erişilebilirlik kurallarının yetmediği somut bir durumda, belirli bir engelli bireyin talebi üzerine yapılan kişiye özel uyarlamadır (reddi ayrımcılıktır!). Bu soruda doğru cevap "${corr}" seçeneğidir.`
  },
  {
    match: (o) => o === "erişilebilirlik" || o.includes("genel erişilebilirlik"),
    explain: (opt, corr) =>
      `"${opt}" binaların, ulaşımın ve bilginin tüm engelli gruplar için önceden standartlara uygun hale getirilmesidir (grup odaklıdır). Soruda ise "${corr}" sorulmaktadır.`
  },
  {
    match: (o) => o.includes("vesayet") || o.includes("ikame karar"),
    explain: (opt, corr) =>
      `"${opt}" bireyin iradesini yok sayıp onun yerine vasinin karar vermesidir. BM CRPD Madde 12 vesayeti reddeder ve yerine "Destekli Karar Verme"yi getirir. Doğru cevap "${corr}" seçeneğidir.`
  },
  {
    match: (o) => o.includes("destekli karar verme"),
    explain: (opt, corr) =>
      `"${opt}" (CRPD Madde 12) engelli bireyin yasal ehliyetini koruyarak kendi kararlarını alırken ihtiyaç duyduğu desteğin sağlanmasıdır. Bu soruda ise "${corr}" sorulmaktadır.`
  },

  // 8. UN CRPD Articles
  {
    match: (o) => o.includes("madde 5"),
    explain: (opt, corr) =>
      `BM CRPD "${opt}" Eşitlik ve Ayrımcılık Yasağını (ve makul düzenleme yükümlülüğünü) düzenler. Bu soruda sorulan madde/kavram "${corr}" seçeneğidir.`
  },
  {
    match: (o) => o.includes("madde 6"),
    explain: (opt, corr) =>
      `BM CRPD "${opt}" Engelli Kadınların yaşadığı çoklu ayrımcılığı düzenler. Bu soruda doğru cevap "${corr}" seçeneğidir.`
  },
  {
    match: (o) => o.includes("madde 7"),
    explain: (opt, corr) =>
      `BM CRPD "${opt}" Engelli Çocukların yüksek yararını ve görüşlerinin dikkate alınmasını düzenler. Bu soruda doğru cevap "${corr}" seçeneğidir.`
  },
  {
    match: (o) => o.includes("madde 9"),
    explain: (opt, corr) =>
      `BM CRPD "${opt}" Fiziksel Çevre, Ulaşım ve Bilgiye Erişilebilirlik hakkını düzenler. Bu soruda aranan cevap "${corr}" seçeneğidir.`
  },
  {
    match: (o) => o.includes("madde 12"),
    explain: (opt, corr) =>
      `BM CRPD "${opt}" Yasa Önünde Eşit Tanınma ve Destekli Karar Verme hakkını düzenler. Bu soruda doğru cevap "${corr}" seçeneğidir.`
  },
  {
    match: (o) => o.includes("madde 13"),
    explain: (opt, corr) =>
      `BM CRPD "${opt}" Adalete Erişim ve mahkemelerde usuli uyarlamaları düzenler. Bu soruda doğru cevap "${corr}" seçeneğidir.`
  },
  {
    match: (o) => o.includes("madde 19"),
    explain: (opt, corr) =>
      `BM CRPD "${opt}" Bağımsız Yaşama ve Topluma Dahil Olma (kuruma kapatılmama ve kişisel asistan) hakkını düzenler. Bu soruda doğru cevap "${corr}" seçeneğidir.`
  },
  {
    match: (o) => o.includes("madde 24"),
    explain: (opt, corr) =>
      `BM CRPD "${opt}" Kapsayıcı (Kaynaştırma/Bütünleştirme) Eğitim hakkını düzenler. Bu soruda doğru cevap "${corr}" seçeneğidir.`
  },
  {
    match: (o) => o.includes("madde 27"),
    explain: (opt, corr) =>
      `BM CRPD "${opt}" Açık İşgücü Piyasasında Çalışma ve İstihdam hakkını düzenler. Bu soruda doğru cevap "${corr}" seçeneğidir.`
  },
  {
    match: (o) => o.includes("madde 28"),
    explain: (opt, corr) =>
      `BM CRPD "${opt}" Yeterli Yaşam Standardı ve Sosyal Koruma hakkını düzenler. Bu soruda doğru cevap "${corr}" seçeneğidir.`
  },
  {
    match: (o) => o.includes("madde 29"),
    explain: (opt, corr) =>
      `BM CRPD "${opt}" Siyasal ve Kamusal Yaşama Katılım (seçme ve seçilme) hakkını düzenler. Bu soruda doğru cevap "${corr}" seçeneğidir.`
  },

  // 9. Physical Conditions (Parapleji, Tetrapleji, CP, DMD, SMA, MS)
  {
    match: (o) => o.includes("parapleji"),
    explain: (opt, corr) =>
      `"${opt}" omuriliğin sırt/bel seviyesinden yaralanması sonucu yalnızca alt ekstremitelerin (bacakların) etkilenmesidir; kollar sağlamdır. Bu soruda doğru cevap "${corr}" seçeneğidir.`
  },
  {
    match: (o) => o.includes("tetrapleji") || o.includes("kuadripleji"),
    explain: (opt, corr) =>
      `"${opt}" omuriliğin boyun (servikal) seviyesinden yaralanması sonucu hem kolların hem bacakların (4 uzvun) etkilenmesidir. Bu soruda doğru cevap "${corr}" seçeneğidir.`
  },
  {
    match: (o) => o.includes("serebral palsi") || o.includes("sp"),
    explain: (opt, corr) =>
      `"${opt}" gelişmekte olan beyinde oluşan "ilerleyici olmayan (non-progresif)" kalıcı hareket ve duruş bozukluğudur. Bu soruda aranan durum "${corr}" seçeneğidir.`
  },
  {
    match: (o) => o.includes("duchenne") || o.includes("dmd") || o.includes("sma"),
    explain: (opt, corr) =>
      `"${opt}" genetik kökenli ve zamanla ilerleyici (progresif) seyreden kas/motor nöron hastalığıdır. Bu soruda doğru cevap "${corr}" seçeneğidir.`
  },
  {
    match: (o) => o.includes("multipl skleroz") || o === "ms",
    explain: (opt, corr) =>
      `"${opt}" merkezi sinir sisteminde miyelin kılıf hasarıyla seyreden, ataklar ve düzelmelerle (epizodik) ilerleyen nörolojik hastalıktır. Bu soruda doğru cevap "${corr}" seçeneğidir.`
  }
];

/**
 * Generates a specific, crystal-clear Turkish explanation for why a selected wrong option
 * is incorrect, what it actually means in the course, and how it differs from the correct answer.
 */
export function getWrongOptionReason(
  question: QuizQuestion,
  wrongIndex: number
): string {
  const wrongText = question.options[wrongIndex] || "";
  const correctText = question.options[question.correctIndex] || "";
  const optLower = wrongText.toLowerCase().trim();
  const qLower = question.question.toLowerCase();

  // 1. Check specific SHZ237 domain rules
  for (const rule of CONCEPT_DISTRACTOR_RULES) {
    if (rule.match(optLower, qLower)) {
      return rule.explain(wrongText, correctText);
    }
  }

  // 2. Check behavioral / case study anti-patterns in wrong options
  if (
    optLower.includes("kuruma yatır") ||
    optLower.includes("bakım merkezine kapat") ||
    optLower.includes("evde kal") ||
    optLower.includes("dışarı çıkma")
  ) {
    return `"${wrongText}" yaklaşımı bireyi toplumdan izole eder ve BM CRPD Madde 19 (Bağımsız Yaşam Hakkı) ile sosyal hizmetin kendi kaderini tayin ilkesine aykırıdır. Doğru yaklaşım "${correctText}" seçeneğidir.`;
  }

  if (
    optLower.includes("sadece tıbbi") ||
    optLower.includes("yalnızca doktor") ||
    optLower.includes("sadece ilaç") ||
    optLower.includes("bireyin kusuru")
  ) {
    return `"${wrongText}" engelliliği yalnızca bireyin bedenindeki tıbbi bir kusura indirgeyen Tıbbi Model yanılgısıdır; çevresel ve toplumsal engelleri göz ardı eder. Doğru cevap "${correctText}" seçeneğidir.`;
  }

  if (
    optLower.includes("acıma") ||
    optLower.includes("sadaka") ||
    optLower.includes("hayırsever") ||
    optLower.includes("yardıma muhtaç")
  ) {
    return `"${wrongText}" bireyi hak öznesi olmaktan çıkarıp pasif bir yardım nesnesine dönüştüren Hayırseverlik yaklaşımıdır. Sosyal hizmet hak temelli çalışır; doğru cevap "${correctText}" seçeneğidir.`;
  }

  if (
    optLower.includes("ailenin kararı") ||
    optLower.includes("babanın isteği") ||
    optLower.includes("bireye sormadan") ||
    optLower.includes("vesayet altına")
  ) {
    return `"${wrongText}" yetişkin engelli bireyin özerkliğini ve kendi kaderini tayin hakkını (CRPD Md. 12) ihlal eden ataerkil/vesayetçi bir tutumdur. Doğru cevap "${correctText}" seçeneğidir.`;
  }

  // 3. Contextual comparison fallback that explains why this option does not match the question criteria
  return `"${wrongText}" seçeneği bu soruda aranan temel kriteri karşılamamaktadır. Soruda vurgulanan durumu/kavramı doğrudan tanımlayan doğru ifade "${correctText}" seçeneğidir (${question.keepInMind}).`;
}

/**
 * Produces a complete 4-option (A, B, C, D) analysis for any QuizQuestion.
 */
export function getAllOptionsAnalysis(question: QuizQuestion): OptionAnalysisItem[] {
  const letters = ["A", "B", "C", "D"];
  return question.options.map((optText, idx) => {
    const isCorrect = idx === question.correctIndex;
    return {
      index: idx,
      letter: letters[idx] || String(idx + 1),
      optionText: optText,
      isCorrect,
      explanation: isCorrect
        ? `${question.simpleExplanation}`
        : getWrongOptionReason(question, idx)
    };
  });
}

/**
 * Generates a concrete, memorable daily-life example for any of the 80 Topic Cards
 * without requiring any external AI API.
 */
export function getTopicDailyExample(topic: TopicCard): {
  title: string;
  scenario: string;
  socialWorkAction: string;
  examKey: string;
} {
  const firstBullet = topic.bulletPoints[0] || topic.eli5;
  const secondBullet = topic.bulletPoints[1] || topic.practicalTip;

  return {
    title: `${topic.title} — Günlük Hayattan Somut Vaka Örneği`,
    scenario: `${topic.eli5} Örneğin günlük yaşamda bu durumla karşılaşan bir vatandaş için asıl sorun kendi bedensel farklılığı değil; karşılaştığı fiziksel, kurumsal veya önyargısal engellerdir (${firstBullet}).`,
    socialWorkAction: `Sosyal Hizmet Uzmanı bu durumda kişiyi "düzeltilmesi gereken bir hasta" olarak görmez; hak temelli yaklaşımla çevreyi, kurumu ve politikaları düzenler: ${secondBullet}`,
    examKey: topic.keepInMind
  };
}

/**
 * Finds the best matching exam questions from FULL_QUESTION_BANK for a specific TopicCard
 * so the student can immediately test themselves on the current topic card.
 */
export function getQuestionsForTopic(
  topic: TopicCard,
  allQuestions: QuizQuestion[]
): QuizQuestion[] {
  const unitQuestions = allQuestions.filter((q) => q.unitId === topic.unitId);
  const titleWords = topic.title
    .toLowerCase()
    .replace(/[^\wğüşıöçĞÜŞİÖÇ\s%]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 2 && !["ve", "ile", "için", "nedir", "olan"].includes(w));

  const scored = unitQuestions.map((q) => {
    const hay = `${q.question} ${q.simpleExplanation} ${q.keepInMind} ${q.options.join(" ")}`.toLowerCase();
    let score = 0;
    for (const w of titleWords) {
      if (hay.includes(w)) score += 5;
    }
    if (hay.includes(topic.keepInMind.toLowerCase().slice(0, 12))) {
      score += 8;
    }
    return { q, score };
  });

  scored.sort((a, b) => b.score - a.score);
  const top = scored.filter((item) => item.score > 0).map((item) => item.q);
  return top.length > 0 ? top.slice(0, 3) : unitQuestions.slice(0, 2);
}
