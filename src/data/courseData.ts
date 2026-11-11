import { UNIT_1_TOPICS, UNIT_2_TOPICS } from "./expandedTopicsUnit12";
import { UNIT_3_TOPICS, UNIT_4_TOPICS } from "./expandedTopicsUnit34";

export interface VisualSchemaItem {
  icon: string;
  label: string;
  highlight: string;
  detail: string;
  color: "blue" | "emerald" | "amber" | "purple" | "rose";
}

export interface TopicVisualSchema {
  title: string;
  items: VisualSchemaItem[];
}

export interface TopicCard {
  id: string;
  unitId: string;
  title: string;
  subtitle: string;
  eli5: string; // "En Basit Haliyle (Salağa Anlatır Gibi)"
  bulletPoints: string[];
  practicalTip: string; // "Pratik Bilgi"
  examClue: string; // "Sınav İpucu"
  keepInMind: string; // "Aklında Tut!"
  aiPromptSuggestion: string;
  visualSchema?: TopicVisualSchema;
}

export interface CourseUnit {
  id: string;
  order: number;
  title: string;
  shortTitle: string;
  dateLabel: string;
  description: string;
  pdfUrl: string;
  topics: TopicCard[];
}

export interface QuizQuestion {
  id: string;
  unitId: string;
  question: string;
  options: string[];
  correctIndex: number;
  simpleExplanation: string;
  keepInMind: string;
}

export interface SyllabusWeek {
  week: number;
  date: string;
  title: string;
  hasNotes: boolean;
  unitId?: string;
}

export const SYLLABUS_WEEKS: SyllabusWeek[] = [
  { week: 1, date: "24 Eylül 2026", title: "Tanışma, Beklentiler, Ders İşleme Yönteminin Aktarılması", hasNotes: false },
  { week: 2, date: "1 Ekim 2026", title: "Engellilikle İlgili Kavramlar ve Kuramlar / Modeller", hasNotes: true, unitId: "unit-1" },
  { week: 3, date: "8 Ekim 2026", title: "Engellilik Modelleri ve Kuramsal Yaklaşımlar", hasNotes: true, unitId: "unit-2" },
  { week: 4, date: "15 Ekim 2026", title: "Engellilik ve İnsan Hakları (BM CRPD & 5378)", hasNotes: true, unitId: "unit-3" },
  { week: 5, date: "22 Ekim 2026", title: "Engellilikle İlgili Mevzuat ve Hak Temelli Uygulama", hasNotes: true, unitId: "unit-3" },
  { week: 6, date: "29 Ekim / 21 Kasım 2026", title: "Fiziksel Engellilik ve Sosyal Hizmet", hasNotes: true, unitId: "unit-4" },
  { week: 7, date: "5 Kasım 2026", title: "Görme ve İşitme Engellilik", hasNotes: true, unitId: "unit-1" },
  { week: 8, date: "12 Kasım 2026", title: "Ara Sınavlar (Vize Haftası)", hasNotes: false },
  { week: 9, date: "19 Kasım 2026", title: "Zihinsel Yetersizlik ve Gelişimsel Yetersizlikler", hasNotes: true, unitId: "unit-1" },
  { week: 10, date: "26 Kasım 2026", title: "Ruhsal / Psikososyal Engellilik", hasNotes: true, unitId: "unit-4" },
  { week: 11, date: "3 Aralık 2026", title: "Engellilere Yönelik Bakım Hizmetleri / Modelleri", hasNotes: true, unitId: "unit-4" },
  { week: 12, date: "10 Aralık 2026", title: "Engellilik, Aile ve Bakım Verenlerle Çalışma", hasNotes: true, unitId: "unit-4" },
  { week: 13, date: "17 Aralık 2026", title: "Engellilik Odağında Erişilebilirlik ve Katılım", hasNotes: true, unitId: "unit-3" },
  { week: 14, date: "24 Aralık 2026", title: "Engellilerin Eğitimi, İstihdam, Rehabilitasyon ve Sosyal İçerme", hasNotes: true, unitId: "unit-4" },
  { week: 15, date: "31 Aralık 2026", title: "Engellilik Alanında Sosyal Hizmet Kurumları ve Mesleki Roller", hasNotes: true, unitId: "unit-4" }
];

export const COURSE_UNITS: CourseUnit[] = [
  {
    id: "unit-1",
    order: 1,
    title: "1. Ünite: Kavramlar, Türler, Modeller ve Tarihçe",
    shortTitle: "Kavramlar & Modeller",
    dateLabel: "1 Ekim 2026 Ders Notu · 15 Konu Kartı",
    description: "Engelli tanımları, doğum öncesi/sırası/sonrası nedenler, tüm engel türleri (IDEA), Ahlaki-Tıbbi-Sosyal-İnsan Hakları modelleri, ICIDH, tarihsel süreç ve Normalleştirme ilkesi.",
    pdfUrl: "/assets/aistudio/engellilerle_sosyal_hizmet_1_Ekim_2026_54cd51e6.pdf",
    topics: UNIT_1_TOPICS
  },
  {
    id: "unit-2",
    order: 2,
    title: "2. Ünite: Engellilik Kuramları ve Sosyolojik Yaklaşımlar",
    shortTitle: "Engellilik Kuramları",
    dateLabel: "15 Ekim 2026 Ders Notu · 15 Konu Kartı",
    description: "Sosyal inşacı yaklaşım, etiketleme (Becker), damgalama/stigma (Goffman), ekolojik sistemler (Bronfenbrenner), feminist kuram, kesişimsellik, Crip teorisi, bedenleşme, Foucault ve güçlendirme.",
    pdfUrl: "/assets/aistudio/engellilerle_sosyal_hizmet_15_Ekim_2026_9b978dde.pdf",
    topics: UNIT_2_TOPICS
  },
  {
    id: "unit-3",
    order: 3,
    title: "3. Ünite: Engellilik, İnsan Hakları, BM CRPD ve Mevzuat",
    shortTitle: "İnsan Hakları & CRPD",
    dateLabel: "22 Ekim 2026 Ders Notu · 15 Konu Kartı",
    description: "Hayırseverlik vs İnsan Hakları, devletin 3 yükümlülüğü, biçimsel/maddi eşitlik, makul düzenleme, BM CRPD tüm kritik maddeleri (Md. 3-34), İhtiyari Protokol, Anayasa, 5378 ve 6 adımlı Erişim Zinciri.",
    pdfUrl: "/assets/aistudio/engellilerle_sosyal_hizmet_22_Ekim_2026_06c9d6d7.pdf",
    topics: UNIT_3_TOPICS
  },
  {
    id: "unit-4",
    order: 4,
    title: "4. Ünite: Fiziksel Engellilik, Bakım, Aile, İstihdam ve Vaka",
    shortTitle: "Fiziksel Engellilik & Uygulama",
    dateLabel: "5 Kasım 2026 Ders Notu · 15 Konu Kartı",
    description: "Amputasyon, omurilik yaralanması, Serebral Palsi, DMD/SMA/MS, DSÖ ICF (2001), Türkiye verileri, ÇÖZGER, kotalar (4857/657), 2022 ve 2828 yardımları, aile yas süreci, TRSM, etik dil ve Mert vakası.",
    pdfUrl: "/assets/aistudio/engellilerle_sosyal_hizmet_5_Kas_m_2026_df46ea9d.pdf",
    topics: UNIT_4_TOPICS
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: "q1",
    unitId: "unit-1",
    question: "Devlet Memurları Kanunu'na (DMK) göre bir bireyin 'engelli' sayılabilmesi için resmi sağlık kurulu raporuyla belgelenmesi gereken en az yeti kaybı oranı kaçtır?",
    options: ["%25", "%40", "%50", "%60"],
    correctIndex: 1,
    simpleExplanation: "DMK'ya göre bedensel, zihinsel, ruhsal, duygusal ve sosyal yeteneklerden en az %40 oranında yoksun olduğu resmi sağlık kurulu raporu ile belgelenenlere engelli denir.",
    keepInMind: "DMK engellilik alt sınırı = En az %40 sağlık kurulu raporu."
  },
  {
    id: "q2",
    unitId: "unit-1",
    question: "Engelli Bireyler Eğitim Yasası'na (IDEA) göre 'Otizm' tanısı konabilmesi için belirtilerin yaşamın ilk kaç yılında başlaması ve en az kaç belirtinin görülmesi gerekir?",
    options: [
      "İlk 1 yılda başlamalı, en az 3 belirti olmalı",
      "İlk 3 yılda başlamalı, en az 6 belirti olmalı",
      "İlk 6 yılda başlamalı, en az 4 belirti olmalı",
      "16 yaşından önce başlamalı, en az 5 belirti olmalı"
    ],
    correctIndex: 1,
    simpleExplanation: "Otizm genellikle yaşamın ilk 3 yılında başlayan gelişimsel bir bozukluktur ve tanı için sosyal etkileşim, iletişim ve tekrarlayıcı davranış alanlarından en az 6 belirtinin bulunması gerekir. (16 yaş sınırı Zihinsel Engellilik içindir).",
    keepInMind: "Otizm = İlk 3 yıl + En az 6 belirti."
  },
  {
    id: "q3",
    unitId: "unit-1",
    question: "Normal bir kişinin yaklaşık 6 metreden görebildiği bir şeyi 60 santimetreden ya da daha yakın bir mesafeden görebilmesi (veya hiç görememesi) durumu nasıl tanımlanır?",
    options: ["Az gören", "Kör", "Renk körlüğü", "Gelişimsel gecikme"],
    correctIndex: 1,
    simpleExplanation: "Ders notlarına göre: 200 ayaklık mesafeyi tedaviden sonra 70-20 ayaktan görebilene 'Az Gören', 6 metreden görüleni 60 cm veya daha yakından görebilene ise 'Kör' denir.",
    keepInMind: "6 metre -> 60 cm = Kör | 200 ayak -> 70-20 ayak = Az Gören."
  },
  {
    id: "q4",
    unitId: "unit-1",
    question: "1970'li yıllarda İngiltere'de ortaya çıkan, UPIAS'ın etkisiyle 'noksanlık' (bedensel durum) ile 'engellilik' (toplumsal dışlanma) kavramlarını birbirinden ayıran model hangisidir?",
    options: ["Ahlaki Model", "Medikal (Tıbbi) Model", "Sosyal Model", "Hayırseverlik Modeli"],
    correctIndex: 2,
    simpleExplanation: "Sosyal Model 1970'lerde İngiltere'de UPIAS (Ayrımcılığa Karşı Fiziksel Engelli Birliği) öncülüğünde doğmuştur. Engelliliği bireyin kusuru değil, yapısal, çevresel ve tutumsal engellerin yarattığı toplumsal dışlanma olarak tanımlar.",
    keepInMind: "UPIAS + Noksanlık/Engellilik ayrımı + 1970'ler İngiltere = Sosyal Model."
  },
  {
    id: "q5",
    unitId: "unit-1",
    question: "Aşağıdakilerden hangisi 4. Kuşak İnsan Hakları (Sürdürülebilir Yaşamla İlgili Haklar) arasında yer alır?",
    options: [
      "Seçme ve Seçilme Hakkı",
      "Sendika ve Toplu Pazarlık Hakkı",
      "Kendi Kaderini Tayin Hakkı",
      "Kent Hakkı ve Dijital Ortama Eşit Erişim Hakkı"
    ],
    correctIndex: 3,
    simpleExplanation: "1. Kuşak = Sivil/Siyasi (Seçme, yaşam); 2. Kuşak = Sosyal/Kültürel (Sendika, çalışma, eğitim); 3. Kuşak = Dayanışma (Barış, kendi kaderini tayin); 4. Kuşak = Sürdürülebilir Yaşam (Ekosistem, Kent Hakkı, Dijital Güvenlik ve Dijital Eşit Erişim).",
    keepInMind: "Kent Hakkı + Dijital Erişim + Gelecek Nesiller = 4. Kuşak Haklar."
  },
  {
    id: "q6",
    unitId: "unit-2",
    question: "Erving Goffman'ın geliştirdiği; 'sosyal kimlik, görünür/gizli özellik ve bilgi kontrolü' kavramları üzerinden sosyal itibarın zedelenmesini inceleyen kuram hangisidir?",
    options: [
      "Damgalama (Stigma) Kuramı",
      "Ekolojik Sistemler Kuramı",
      "Crip Teorisi",
      "Bedenleşme Yaklaşımı"
    ],
    correctIndex: 0,
    simpleExplanation: "Erving Goffman (1963) Damgalama (Stigma) kuramında, toplumun 'normal' kabul ettiği kimlikten sapan özelliklerin sosyal itibarı nasıl zedelediğini ve bireyin 'bilgi kontrolü' (gizleme/ifşa yönetimi) süreçlerini analiz eder.",
    keepInMind: "Erving Goffman + Bilgi Kontrolü + Sosyal İtibar = Damgalama (Stigma) Kuramı."
  },
  {
    id: "q7",
    unitId: "unit-2",
    question: "Bronfenbrenner'in Ekolojik Sistemler Kuramı'na göre; engelli bireyin doğrudan içinde yer almadığı ancak hayatını etkileyen 'yerel yönetimler, belediye hizmet ağları ve ebeveynin işyeri' hangi sistem düzeyidir?",
    options: ["Mikrosistem", "Mezosistem", "Ekzosistem", "Makrosistem"],
    correctIndex: 2,
    simpleExplanation: "Bireyin doğrudan içinde yer almadığı ancak dolaylı olarak etkilendiği yerel yönetimler, hizmet ağları ve işyeri 'Ekzosistem'dir. (Mikro = Aile, Mezo = Okul-Aile ilişkisi, Makro = Kültür/Mevzuat/Ableism).",
    keepInMind: "Birey doğrudan içinde yok ama etkileniyor (Belediye, Ebeveyn işyeri) = Ekzosistem."
  },
  {
    id: "q8",
    unitId: "unit-2",
    question: "Engellilik çalışmaları ile Queer teorinin birleşiminden doğan, Robert McRuer tarafından geliştirilen ve 'zorunlu engelsizlik (able-bodiedness)' kavramını eleştiren yaklaşım hangisidir?",
    options: [
      "Etiketleme Kuramı",
      "Crip Teorisi (Crip Theory)",
      "Ekolojik Sistemler Kuramı",
      "Biçimsel Eşitlik Yaklaşımı"
    ],
    correctIndex: 1,
    simpleExplanation: "Crip Teorisi (McRuer, 2006), engellilik çalışmaları ile queer teoriyi birleştirerek 'normatif beden' ve 'zorunlu engelsizlik (able-bodiedness)' dayatmalarını sorgular.",
    keepInMind: "Queer Teori + Zorunlu Engelsizlik Eleştirisi = Crip Teorisi."
  },
  {
    id: "q9",
    unitId: "unit-2",
    question: "Sosyal modelin 'çevresel bariyer kaldırıldıysa sorun çözülmüştür' şeklindeki aşırı basitleştirmesine karşı çıkarak; ağrı, yorgunluk, kırılganlık ve mahremiyet gibi deneyimleri merkeze alan yaklaşım hangisidir?",
    options: [
      "Bedenleşme ve Yaşantı Temelli Yaklaşımlar",
      "Etiketleme Kuramı",
      "Ahlaki Model",
      "Hayırseverlik Yaklaşımı"
    ],
    correctIndex: 0,
    simpleExplanation: "Bedenleşme ve Yaşantı Temelli Yaklaşımlar, engelliliği sadece dışsal/çevresel engellere indirgemez; kişinin ağrı, yorgunluk, mahremiyet ve beden algısı gibi gündelik bedensel yaşantısını analizin merkezine alır.",
    keepInMind: "Ağrı, yorgunluk + 'Rampa yapmak her şeyi çözmez' = Bedenleşme Yaklaşımı."
  },
  {
    id: "q10",
    unitId: "unit-3",
    question: "BM Engellilerin Haklarına İlişkin Sözleşme'ye (CRPD) göre, belirli bir engelli bireyin somut bir durumda hakkını eşit kullanabilmesi için aşırı yük getirmeyen bireysel uyarlamaların yapılmasına ne ad verilir?",
    options: [
      "Biçimsel eşitlik",
      "Makul düzenleme",
      "Dolaylı ayrımcılık",
      "İkame karar verme"
    ],
    correctIndex: 1,
    simpleExplanation: "Somut durumda belirli bir kişinin eşit hak kullanımı için yapılan uygun ve gerekli değişikliğe 'Makul Düzenleme' denir. Makul düzenlemenin reddedilmesi ayrımcılık sayılır.",
    keepInMind: "Somut durumda kişiye özel uygun değişiklik = Makul Düzenleme (Reddi ayrımcılıktır!)."
  },
  {
    id: "q11",
    unitId: "unit-3",
    question: "BM Engellilerin Haklarına İlişkin Sözleşme'nin (CRPD) 12. Maddesi kapsamında 'Onun için en iyisini biz biliriz' anlayışına karşı çıkarak kişinin kendi irade ve tercihlerini merkeze alan kavram hangisidir?",
    options: [
      "Destekli karar verme",
      "Vesayet altına alma",
      "Kurumsal bakım",
      "Paternalist koruma"
    ],
    correctIndex: 0,
    simpleExplanation: "CRPD Madde 12 hukuki ehliyeti güvence altına alır ve kişinin iradesini başkasıyla değiştirmek yerine 'Destekli Karar Verme' (erişilebilir bilgi, zaman ve iletişim desteği sunma) modelini savunur.",
    keepInMind: "CRPD Madde 12 = Hukuki Ehliyet ve Destekli Karar Verme."
  },
  {
    id: "q12",
    unitId: "unit-3",
    question: "Kamu otoritelerinin, üçüncü kişilerin ve özel kurumların engelli bireylere yönelik ayrımcı uygulamalarına karşı etkili önlemler alması hangi insan hakları yükümlülüğüdür?",
    options: [
      "Saygı gösterme yükümlülüğü",
      "Koruma yükümlülüğü",
      "Yerine getirme yükümlülüğü",
      "Biçimsel eşitlik yükümlülüğü"
    ],
    correctIndex: 1,
    simpleExplanation: "Saygı gösterme: Devletin bizzat ihlal etmemesi. Koruma: Üçüncü kişilerin ve kurumların ayrımcılığına karşı koruma sağlaması. Yerine getirme: Hizmet, kaynak ve izleme mekanizmaları kurması.",
    keepInMind: "3. Kişilere ve özel kurumlara karşı önlem alma = Koruma Yükümlülüğü."
  },
  {
    id: "q13",
    unitId: "unit-4",
    question: "Gelişmekte olan beyinde doğum öncesi, sırası veya erken çocuklukta oluşan, 'ilerleyici olmayan' hasara bağlı hareket ve postür bozukluğu aşağıdakilerden hangisidir?",
    options: [
      "Multipl Skleroz (MS)",
      "Serebral Palsi (SP)",
      "Duchenne Musküler Distrofisi (DMD)",
      "Spinal Müsküler Atrofi (SMA)"
    ],
    correctIndex: 1,
    simpleExplanation: "Serebral Palsi (SP), çocukluk döneminde fiziksel engelliliğin en sık nedenlerinden biridir ve ilerleyici olmayan beyin hasarına bağlıdır. (MS, DMD ve SMA ise ilerleyici durumlardır).",
    keepInMind: "İlerleyici olmayan erken çocukluk beyin hasarı = Serebral Palsi."
  },
  {
    id: "q14",
    unitId: "unit-4",
    question: "4857 sayılı İş Kanunu'na göre 50 ve üzeri işçi çalıştıran ÖZEL SEKTÖR ve KAMU işyerlerinde engelli işçi çalıştırma kotaları sırasıyla yüzde kaçtır?",
    options: [
      "Özel %2 — Kamu %3",
      "Özel %3 — Kamu %4",
      "Özel %4 — Kamu %5",
      "Özel %3 — Kamu %3"
    ],
    correctIndex: 1,
    simpleExplanation: "4857 sayılı İş Kanunu'na göre 50 ve üzeri işçi çalıştıran özel sektör işyerleri %3, kamu işyerleri ise %4 oranında engelli işçi çalıştırmakla yükümlüdür. (657 sayılı Kanuna göre engelli memur kotası ise %3'tür).",
    keepInMind: "4857 İş Kanunu (50+ işçi): Özel Sektör = %3, Kamu İşyeri = %4."
  },
  {
    id: "q15",
    unitId: "unit-4",
    question: "Türkiye'de 18 yaş altındaki çocuklar için düzenlenen resmi değerlendirme raporunun adı ve evde bakım yardımını düzenleyen kanun aşağıdakilerden hangisinde doğru verilmiştir?",
    options: [
      "ÇÖZGER — 2828 sayılı Kanun",
      "ÇÖZGER — 4857 sayılı Kanun",
      "EKPSS — 2022 sayılı Kanun",
      "ICIDH — 657 sayılı Kanun"
    ],
    correctIndex: 0,
    simpleExplanation: "18 yaş altındaki çocuklar için Çocuklar İçin Özel Gereksinim Raporu (ÇÖZGER) düzenlenir. Ağır engelli bireyin evde bakımını üstlenen yakına yapılan Evde Bakım Yardımı ise 2828 sayılı Sosyal Hizmetler Kanunu kapsamındadır.",
    keepInMind: "18 Yaş Altı Rapor = ÇÖZGER | Evde Bakım Yardımı = 2828 Sayılı Kanun."
  }
];
