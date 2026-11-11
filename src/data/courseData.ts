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
  { week: 10, date: "26 Kasım 2026", title: "Ruhsal / Psikososyal Engellilik", hasNotes: false },
  { week: 11, date: "3 Aralık 2026", title: "Engellilere Yönelik Bakım Hizmetleri / Modelleri", hasNotes: true, unitId: "unit-4" },
  { week: 12, date: "10 Aralık 2026", title: "Engellilik, Aile ve Bakım Verenlerle Çalışma", hasNotes: true, unitId: "unit-4" },
  { week: 13, date: "17 Aralık 2026", title: "Engellilik Odağında Erişilebilirlik ve Katılım", hasNotes: true, unitId: "unit-3" },
  { week: 14, date: "24 Aralık 2026", title: "Engellilerin Eğitimi, İstihdam, Rehabilitasyon ve Sosyal İçerme", hasNotes: true, unitId: "unit-4" },
  { week: 15, date: "31 Aralık 2026", title: "Engellilik Alanında Sosyal Hizmet Kurumları ve Mesleki Roller", hasNotes: false }
];

export const COURSE_UNITS: CourseUnit[] = [
  {
    id: "unit-1",
    order: 1,
    title: "1. Ünite: Kavramlar, Türler ve Modeller",
    shortTitle: "Kavramlar & Modeller",
    dateLabel: "1 Ekim 2026 Ders Notu",
    description: "Engelli kimdir, hangi sebeplerle engellilik oluşur, engel türleri nelerdir ve tarihsel süreçte engelliliğe nasıl bakılmıştır?",
    pdfUrl: "/assets/aistudio/engellilerle_sosyal_hizmet_1_Ekim_2026_54cd51e6.pdf",
    topics: [
      {
        id: "u1-t1",
        unitId: "unit-1",
        title: "Engelli ve Engellilik Tanımları (DMK, 2828, Hizmet Yasası)",
        subtitle: "Resmi kanunlara göre kime engelli denir?",
        eli5: "Engelliliğin tek bir tanımı yoktur çünkü sadece tıbbi bir hastalık değildir; kişinin özelliği ile toplumun engellerinin çarpışmasıdır. Devlet memurluğu kanunu (DMK) 'En az %40 sağlık kurulu raporu olan kişi' derken, Sosyal Hizmetler Kanunu (2828) 'Doğuştan veya sonradan yeteneklerini kaybedip bakım, rehabilitasyon ve danışmanlığa ihtiyacı olan kişi' der.",
        bulletPoints: [
          "DMK (Devlet Memurları Kanunu): Bedensel, zihinsel, ruhsal, duygusal ve sosyal yeteneklerden en az %40 oranında yoksun olduğu resmi sağlık kurulu raporuyla belgelenenler.",
          "2828 Sayılı SHÇEK Kanunu: Doğuştan veya sonradan hastalık/kaza sonucu yeteneklerini çeşitli derecelerde kaybedip normal yaşamın gereklerine uyamayan; korunma, bakım, rehabilitasyon, danışmanlık ve destek hizmetlerine ihtiyacı olan kişi.",
          "Engellilik Hizmetleri Yasası: Psikiyatrik, bilişsel, nörolojik, duyusal veya fiziksel bozulma sonucu oluşan; kalıcı veya epizodik (zaman zaman, aralıklarla gelen) olabilen; iletişim, sosyal etkileşim, öğrenme ve hareketlilik kapasitesini önemli ölçüde azaltıp sürekli destek gerektiren durum.",
          "Temel Gerçek: Engellilik sadece bir sağlık sorunu değildir; bireyin özellikleriyle toplumun özelliklerinin etkileşimidir."
        ],
        practicalTip: "Soruda 'En az %40 resmi sağlık kurulu raporu' geçiyorsa cevap DMK'dır. 'Korunma, bakım, rehabilitasyon, danışmanlık ihtiyacı' geçiyorsa 2828 sayılı SHÇEK Kanunu'dur. 'Epizodik (aralıklarla olan)' kelimesi geçiyorsa Engellilik Hizmetleri Yasası'dır.",
        examClue: "Epizodik ne demek? Sürekli devam etmeyen, zaman zaman veya nöbetler/ataklar halinde ortaya çıkan demektir.",
        keepInMind: "DMK = %40 Rapor | 2828 SHÇEK = Bakım & Rehabilitasyon İhtiyacı | Hizmet Yasası = Epizodik veya Kalıcı Kapasite Azalması.",
        aiPromptSuggestion: "DMK, 2828 sayılı Kanun ve Engellilik Hizmetleri Yasası arasındaki farkları hiç bilmeyen birine örneklerle anlatır mısın?"
      },
      {
        id: "u1-t2",
        unitId: "unit-1",
        title: "Engellilik Sebepleri ve Fetal Alkol Sendromu",
        subtitle: "Doğuştan, doğum sırası ve doğum sonrası nedenler",
        eli5: "Bir insan 3 farklı dönemde engelli olabilir: Anne karnındayken (doğuştan), tam doğarken (doğum sırası) veya doğup büyürken (doğum sonrası). Özellikle hamilelikte annenin alkol kullanması bebekte 'Fetal Alkol Sendromu' yapar; bu çocuklarda hem organ sorunları hem de düşük IQ ve dikkat sorunları görülür.",
        bulletPoints: [
          "Doğuştan (Doğum Öncesi) Sebepler: Genetik faktörler, akraba evliliği, gebelikte travma, annenin hastalıkları (kızamık, suçiçeği), ilaç kullanımı, ışına/röntgene maruz kalmak, annenin alkol/madde bağımlılığı, kötü beslenme, kan uyuşmazlığı.",
          "Fetal Alkol Sendromu (FAS): Kalp, böbrek ve kemik sorunları; öğrenme güçlüğü ve düşük IQ; hafıza, koordinasyon ve dikkat sorunları; hiperaktivite; uyku ve bebek emzirme sorunları.",
          "Doğum Sırası Sebepler: Kötü ve yetersiz koşullarda (sağlık personeli olmadan) doğum, doğum travmaları, yanlış uygulamalar (forseps/vakum hatası), bebeğin oksijensiz kalması, kordon dolanması, erken/geç doğum.",
          "Doğum Sonrası Sebepler: İş kazaları, ev kazaları, trafik kazaları, savaşlar, terör olayları, endüstriyel kazalar, depremler, ateşli hastalıklar (menenjit, sarılık, havale)."
        ],
        practicalTip: "Sorularda zaman ayrımına dikkat et: 'Röntgen, akraba evliliği, kan uyuşmazlığı' -> Doğum Öncesi. 'Oksijensiz kalma, vakum/forseps, kordon dolanması' -> Doğum Sırası. 'Menenjit, sarılık, iş kazası, deprem' -> Doğum Sonrası.",
        examClue: "Fetal Alkol Sendromu (FAS) slaytlarında özellikle fotoğrafı ve 5 temel belirtisi (Kalp/böbrek/kemik + Düşük IQ + Hafıza/dikkat + Hiperaktivite + Uyku/emzirme) vurgulanmıştır.",
        keepInMind: "Anne hamileyken alkol alırsa = Fetal Alkol Sendromu (Hem organ hasarı hem düşük IQ hem hiperaktivite).",
        aiPromptSuggestion: "Fetal Alkol Sendromu nedir ve doğum öncesi, sırası, sonrası engellilik sebeplerini sınavda nasıl ayırt ederim?"
      },
      {
        id: "u1-t3",
        unitId: "unit-1",
        title: "Engellilik Türleri 1: Otizm, İşitme ve Görme Engeli",
        subtitle: "IDEA Yasasına göre tanı kriterleri ve ölçümler",
        eli5: "Engelli Bireyler Eğitim Yasası (IDEA) engel türlerini tek tek açıklar. Otizm ilk 3 yılda başlar, tanı için en az 6 belirti gerekir. İşitme kaybı 'odyogram' ile ölçülür. Görme engelinde ise 'Az Gören' ve 'Kör' ayrımı metre/ayak hesabı ile yapılır.",
        bulletPoints: [
          "Otizm (Gelişimsel Bozukluk): Yaşamın ilk 3 yılında başlar. 3 ana alanda sorun vardır: 1) Sosyal etkileşimde yetersizlik (göz teması kuramama, yaşıtlarına ilgisizlik), 2) İletişim bozukluğu (konuşamama, aynı kelimeyi tekrar etme/ekolali), 3) Hayali/sembolik oyun oynamama ve rutin takıntısı. Tanı için bu belirtilerden EN AZ 6 TANESİ gereklidir.",
          "İşitme Engeli: Kulağın ses duyma özelliğini tamamen veya kısmen kaybetmesidir. Odyogram testi ile ölçülür. Nedenleri: Kulak kiri tıkanıklığı, iç kulak hasarı, yaşlanma, yüksek ses, kalıtım, iltihap, orta/dış kulakta kemik büyümesi veya tümör.",
          "Görme Engeli: Görme keskinliğinde düzeltilemeyen anlamlı azalma ve yaşamını desteksiz sürdürememe durumudur.",
          "Az Gören vs Kör (Sınav Sayıları!): Normal bir kişinin 200 ayaktan gördüğünü tedaviden sonra 70 ile 20 ayak arasından görebilene 'AZ GÖREN' denir. Normal kişinin 6 metreden gördüğünü 60 cm veya daha yakından görebilene (ya da hiç göremeyene) 'KÖR' denir."
        ],
        practicalTip: "Sayıları şifrele: Otizm = İlk 3 yaş + En az 6 belirti. İşitme = Odyogram. Az Gören = 200 ayak -> 70-20 ayak. Kör = 6 metre -> 60 santimetre.",
        examClue: "Sınavda 'Normal bir kişinin 6 metreden görebildiği şeyi 60 santimetreden görebilme durumu nedir?' diye sorulursa cevap 'Az Gören' değil, doğrudan 'Kör' tanımıdır!",
        keepInMind: "Otizm = 3 yaş, 6 belirti | İşitme = Odyogram | Kör = 6 metreyi 60 cm'den görme | Az Gören = 200 ayağı 70-20 ayaktan görme.",
        aiPromptSuggestion: "Otizm tanı kriterlerini ve Görme engelindeki 'Az Gören' ile 'Kör' arasındaki sayısal farkları kodlayarak anlatır mısın?"
      },
      {
        id: "u1-t4",
        unitId: "unit-1",
        title: "Engellilik Türleri 2: Zihinsel, Çoklu, Fiziksel ve Öğrenme Güçlüğü",
        subtitle: "16 yaş kuralı, ağır çoklu yetersizlik ve ortopedik/süreğen ayrımı",
        eli5: "Zihinsel engellilik 16 yaşından önce başlar ve kişi hem zeka hem de günlük yaşam (yemek, giyinme, iletişim) becerilerinde yaşıtlarının gerisindedir. Öğrenme güçlüğü ise zeka geriliği değildir; çocuğun okuma, yazma veya matematikte zorlanmasıdır.",
        bulletPoints: [
          "Gelişimsel Gecikme: Çocuğun bulunduğu yaşta beklenen becerilerde sürekli geride kalmasıdır (Risk: erken doğum, kurşun zehirlenmesi, kronik kulak enfeksiyonu).",
          "Duygusal Bozukluklar: Zeka veya sağlık sorunuyla açıklanamayan öğrenememe, arkadaşlık kuramama, uygunsuz davranış, yaygın mutsuzluk/depresif duygu ve okul/kişisel korkular (5 kriter).",
          "Zihinsel Engellilik (3 Temel Özellik): 1) 16 yaşından önce ortaya çıkması ve zeka işlevinin ortalamanın belirgin altında olması, 2) Toplumsal ve uyumsal becerilerde (yemek, banyo, iletişim) gerilik, 3) Konuşma, dikkat, bellek ve düşünmede bozukluk.",
          "Çoklu Engellilik (Çoklu Yetersizlik): Ağır düzeyde zihinsel yetersizliğe EK OLARAK en az bir engelin/hastalığın daha bulunmasıdır (Örn: Zihinsel + Bedensel).",
          "Fiziksel Yetersizlik ve Süreğen Hastalık: Ortopedik yetersizlik kas-iskelet sistemindedir (Serebral Palsi, Spina Bifida, felç, uzuv kaybı). Süreğen hastalık ise sürekli tedavi/bakım gerektiren durumlardır (Diyabet, kanser, kalp-damar, Alzheimer).",
          "Öğrenme Güçlüğü: Okul çağının en yaygın sorunudur; dinleme, konuşma, okuma, yazma veya matematiksel hesaplamada yaşanan güçlüktür."
        ],
        practicalTip: "Zihinsel engellilikte yaş sınırı '16 yaş öncesi'dir (Otizmde 3 yaş öncesiydi, karıştırma!). Çoklu yetersizlikte mutlaka 'ağır zihinsel yetersizliğe ilave başka bir engel' şartı vardır.",
        examClue: "Serebral Palsi ve Spina Bifida hangi gruba girer? Ortopedik (Fiziksel) yetersizlik grubuna girer.",
        keepInMind: "Otizm = 3 yaş | Zihinsel Engel = 16 yaş öncesi | Çoklu Engel = Ağır Zihinsel + En Az 1 Ek Engel.",
        aiPromptSuggestion: "Zihinsel engellilik ile öğrenme güçlüğü ve duygusal bozukluk arasındaki farkı en basit haliyle anlatır mısın?"
      },
      {
        id: "u1-t5",
        unitId: "unit-1",
        title: "Engellilik Modelleri: Ahlaki, Medikal, Sosyal ve İnsan Hakları",
        subtitle: "Tarihsel süreçte engelliliğe bakış nasıl değişti?",
        eli5: "Tarihte engelliliğe 4 farklı gözlükle bakılmıştır: 1) Ahlaki Model 'Günah işledin, Allah cezalandırdı' der (1800'lere kadar). 2) Medikal/Tıbbi Model 'Sen bozuk bir makinesin, doktor seni tamir etsin' der (1800-1970). 3) Sosyal Model 'Bedenin değil, merdivenli bina ve ayrımcı toplum suçlu' der (1970'ler). 4) İnsan Hakları Modeli 'Sen yardım dilenen biri değil, eşit hak sahibi bir vatandaşsın' der (2006 BM Sözleşmesi).",
        bulletPoints: [
          "1. Ahlaki Model (En Eski - 1800'lere kadar): Engelliliği işlenen bir günahın cezası olarak görür. Utanç ve dışlanma yaratır (Slayt örneği: Witcher dizisindeki Yennefer karakteri).",
          "2. Medikal / Tıbbi Model (1800 ortası - 1970'ler): Engelliliği normal vücut işlevinden sapma (anormallik) olarak görür. Doktor üstündür, engelli 'hasta rolünü' benimser. Çevreyi yok sayar, sadece bireyi düzeltmeye çalışır.",
          "3. Sosyal Model (1970'ler İngiltere - UPIAS): Tıbbi modele başkaldırıdır! UPIAS (Ayrımcılığa Karşı Fiziksel Engelli Birliği) iki kavramı ayırır: 'Noksanlık' (bedendeki uzuv/organ eksikliği) ve 'Engellilik' (toplumun kişiyi dışlaması). 3 tür engel tanımlar: Yapısal (kurum normları), Çevresel (dik kaldırım, Braille olmaması) ve Tutum engelleri (önyargı).",
          "DSÖ ICIDH (1980): İnsan işlevlerini 3 düzlemde ele alır: 1) Vücut yapıları/işlevleri, 2) Bireysel faaliyetler (beceri), 3) Sosyal faaliyetler (katılım).",
          "4. İnsan Hakları Modeli (2006 BM Sözleşmesi): Engelli bireyi hakların öznesi görür. 1. Kuşak (Sivil/Siyasi: Yaşam, oy, mülkiyet) ve 2. Kuşak (Sosyal/Kültürel: Çalışma, sağlık, eğitim, konut) hakların birlikte benimsenmesini savunur. (3. Kuşak: Dayanışma/Barış/Çevre; 4. Kuşak: Dijital güvenlik, Kent hakkı, Ekosistem)."
        ],
        practicalTip: "UPIAS görürsen -> Sosyal Model! 'Noksanlık bedendedir, engellilik toplumdadır' diyorsa -> Sosyal Model! 'Kent hakkı ve Dijital eşit erişim kaçıncı kuşak haktır?' -> 4. Kuşak Haklar!",
        examClue: "Sosyal modele yapılan 3 eleştiri: 1) Noksanlığı sadece tıbbi görmesi ve dilsel kategorilere bölmesi, 2) Bireysel yaşam deneyimlerini (ağrıyı vb.) göz ardı etmesi, 3) Toplumsal baskıyı sarsılmaz gerçeklik kabul edip ayrımcılığı kurumsallaştırma riski.",
        keepInMind: "Ahlaki = Günah/Ceza | Tıbbi = Hasta Rolü/Anormallik | Sosyal = UPIAS, Sorun Çevrede | İnsan Hakları = 2006 BM Sözleşmesi, Hak Öznesi.",
        aiPromptSuggestion: "Ahlaki, Tıbbi, Sosyal ve İnsan Hakları modellerini ve 1-2-3-4. kuşak hakları sınavda karıştırmamak için tablo gibi özetler misin?"
      }
    ]
  },
  {
    id: "unit-2",
    order: 2,
    title: "2. Ünite: Engellilik Kuramları",
    shortTitle: "Engellilik Kuramları",
    dateLabel: "15 Ekim 2026 Ders Notu",
    description: "Sosyal inşacı yaklaşım, etiketleme, damgalama (Goffman), ekolojik sistemler, feminist kuram, kesişimsellik ve Crip teorisi.",
    pdfUrl: "/assets/aistudio/engellilerle_sosyal_hizmet_15_Ekim_2026_9b978dde.pdf",
    topics: [
      {
        id: "u2-t1",
        unitId: "unit-2",
        title: "Sosyal İnşacı Yaklaşım, Etiketleme ve Damgalama (Stigma)",
        subtitle: "Toplum, dil ve etiketler engelliliği nasıl üretir?",
        eli5: "Bu üç kuram kardeş gibidir: Sosyal İnşacı Yaklaşım 'Normal veya bağımlı dediğimiz şeyleri toplum ve dil uydurdu' der. Etiketleme Kuramı (Becker) 'Kişiye bir kez yetersiz etiketi yapıştırırsan herkes ona öyle davranır' der. Damgalama Kuramı (Goffman) ise 'Toplumun normalinden farklı olan kişi utandırılır, itibarı zedelenir ve kişi bu özelliğini gizlemeye (bilgi kontrolü yapmaya) çalışır' der.",
        bulletPoints: [
          "Model vs Kuram Farkı: Kuram; engellilik deneyiminin nasıl oluştuğunu, sürdüğünü ve anlamlandırıldığını açıklayan kavramsal çerçevedir.",
          "Sosyal İnşacı Yaklaşım: 'Normal, anormal, yeterli, bağımlı' kavramları biyolojik olarak sabit değil, toplumsal ve tarihsel olarak üretilmiştir. Sosyal hizmette vaka kayıtlarındaki dil (örn. 'bakıma muhtaç' ifadesi) eleştirilir.",
          "Etiketleme Kuramı (Howard Becker): Toplum özellikleri kategorilere ayırır ve etiket yapıştırır. Sosyal hizmette soru şudur: 'Bu tanı kişiyi açıklıyor mu, yoksa onu bir kutuya mı hapsediyor?'",
          "Damgalama / Stigma Kuramı (Erving Goffman): Baskın kimlikten sapma sosyal itibarı zedeler. Ana kavramları: Damga, Sosyal kimlik, Görünür/gizli özellik, Bilgi kontrolü (kişinin engelini saklamaya çalışması). 'Özgüveni düşük' demek yerine 'Çevre onu damgalıyor' denmelidir."
        ],
        practicalTip: "Soruda 'Erving Goffman', 'Sosyal itibarın zedelenmesi', 'Görünür/gizli özellik' ve 'Bilgi kontrolü / mahremiyet yönetimi' geçiyorsa cevap %100 Damgalama (Stigma) Kuramıdır!",
        examClue: "Etiketleme Kuramı'nda önemli ayrım: Etiketin (raporun) haklara erişimi kolaylaştırıcı işlevi ile bireyi dışlayıcı etkisi birbirinden ayrıştırılmalıdır.",
        keepInMind: "Sosyal İnşa = Dil ve Normalite | Etiketleme (Becker) = Kategorilere Sıkıştırma | Damgalama (Goffman) = İtibar Zedelenmesi & Bilgi Kontrolü.",
        aiPromptSuggestion: "Sosyal İnşacı Yaklaşım, Etiketleme Kuramı ve Goffman'ın Damgalama (Stigma) Kuramı arasındaki farkı çok basit örneklerle anlatır mısın?"
      },
      {
        id: "u2-t2",
        unitId: "unit-2",
        title: "Ekolojik Sistemler Kuramı (Bronfenbrenner)",
        subtitle: "Mikro, Mezo, Ekzo, Makro ve Kronosistem katmanları",
        eli5: "İnsanı soğan halkaları gibi iç içe geçmiş 5 çevre sarar: En içte ailesi (Mikro), ailesiyle okulunun iletişimi (Mezo), kendisinin içinde olmadığı ama hayatını etkileyen belediye veya ebeveynin işyeri (Ekzo), ülkenin yasaları ve kültür (Makro), ve zamanın geçişi (Krono).",
        bulletPoints: [
          "Mikrosistem: Bireyin doğrudan içinde olduğu en yakın çevre (Birey, aile, yakın arkadaşlar).",
          "Mezosistem: İki mikrosistem arasındaki ilişkilerdir (Okul-aile işbirliği, rehabilitasyon kurumu-aile etkileşimi).",
          "Ekzosistem: Bireyin doğrudan içinde yer almadığı ama dolaylı etkilendiği sistemdir (Yerel yönetimler, belediye hizmet ağları, anne-babanın işyeri koşulları).",
          "Makrosistem: En geniş toplumsal-kültürel değerler, yasalar/mevzuat ve 'ableism' (sağlamcılık/engelli ayrımcılığı).",
          "Kronosistem: Zaman boyutu, yaşam geçişleri ve tarihsel değişimler.",
          "Sosyal Hizmet Bağlantısı: Sorunu tek bir sisteme indirgemez; hem bireyi hem çevre sistemlerini erişilebilir kılmayı amaçlar."
        ],
        practicalTip: "En çok karıştırılan ikili Mezo ve Ekzo'dur! 'Aile ile okulun görüşmesi' -> İki mikro konuştuğu için MEZOSİSTEM. 'Belediye ulaşım kararı veya babanın işyeri' -> Çocuk orada doğrudan bulunmadığı için EKZOSİSTEM.",
        examClue: "Ableism (engelli ayrımcılığı) ve mevzuat hangi sistem düzeyindedir? MAKROSİSTEM!",
        keepInMind: "Mikro = Aile | Mezo = Aile-Okul İlişkisi | Ekzo = Belediye/İşyeri (Birey içinde yok) | Makro = Kültür/Mevzuat/Ableism | Krono = Zaman.",
        aiPromptSuggestion: "Ekolojik Sistemler Kuramındaki Mikro, Mezo, Ekzo, Makro ve Kronosistemi bir engelli çocuğun hayatından tek bir örnekle anlatır mısın?"
      },
      {
        id: "u2-t3",
        unitId: "unit-2",
        title: "Feminist Engellilik Kuramı ve Kesişimsellik (Intersectionality)",
        subtitle: "Toplumsal cinsiyet, bakım emeği ve çoklu eşitsizlik",
        eli5: "Feminist Engellilik Kuramı der ki: 'Engelli bir kadının yaşadığı zorluk sadece engelli olmasıyla açıklanamaz, kadın olduğu için de çifte baskı yaşar; ayrıca evde bakım veren annenin/kadının emeği görünmez kılınır.' Kesişimsellik ise 'Yaşlı + Mülteci + Yoksul + Engelli bir kadının derdi, zengin + genç + engelli bir erkeğin derdiyle aynı değildir; kimlikler üst üste binince bambaşka bir deneyim çıkar' der.",
        bulletPoints: [
          "Feminist Engellilik Kuramı (Garland-Thomson): Engellilik, toplumsal cinsiyet, beden, bakım emeği ve güç ilişkilerini birlikte ele alır. 'Özerklik, kimseye bağımlı olmamak değildir; herkes hayatının bir döneminde birbirine bağımlıdır' der. Bakım verenin 'fedakâr' diye idealize edilip sömürülmesini ve engelli bireyin özne konumunun zayıflatılmasını sorgular.",
          "Kesişimsellik / Intersectionality (Kimberlé Crenshaw): Tek bir eşitsizlik kategorisi bireyi açıklamaz. Engellilik; cinsiyet, sınıf, yaş, ırk/etnisite ve cinsellikle kesişir. Basit bir 'dezavantajlar toplamı' değil, özgül (kendine has) bir deneyim üretir.",
          "Kesişimsellik Ana Kavramları: Kesişen güç ilişkileri, Çoklu eşitsizlik, Yapısal ayrımcılık, Konumlanmış deneyim.",
          "Heteronormativite: Heteroseksüelliğin toplumun tek doğal ve normal yönelimi kabul edilip diğerlerinin sapma görülmesidir."
        ],
        practicalTip: "Soruda 'Bakım emeği', 'Bakım verenin fedakâr olarak idealize edilmesi' veya 'Özerkliğin bağımlılığın zıttı olmaması' geçiyorsa -> Feminist Engellilik Kuramı. 'Mülteci engelli yaşlı kadın ile yoksul genç engelli erkeğin farkı' geçiyorsa -> Kesişimsellik!",
        examClue: "Kesişimsellik (Intersectionality) kuramının öncüsü Kimberlé Crenshaw'dır (1989). Feminist Engellilik Çalışmaları'nın öncüsü Rosemarie Garland-Thomson'dır.",
        keepInMind: "Feminist Kuram = Cinsiyet + Bakım Emeği + Karşılıklı Bağımlılık | Kesişimsellik = Çoklu Kimliklerin Özgül Deneyimi (Homojen grup değildir).",
        aiPromptSuggestion: "Feminist Engellilik Kuramı ile Kesişimsellik (Intersectionality) kuramını sınavda nasıl ayırt edebilirim?"
      },
      {
        id: "u2-t4",
        unitId: "unit-2",
        title: "Eleştirel Engellilik Çalışmaları, Crip Teorisi ve Bedenleşme",
        subtitle: "Sağlamcılık (Ableism), zorunlu engelsizlik ve bedensel deneyim",
        eli5: "Eleştirel Engellilik Çalışmaları 'Neden sağlam bedenleri normal, engelli bedenleri bozuk sayıyoruz? Bu sağlamcılıktır (ableism)!' diye başkaldırır. Crip Teorisi (McRuer) engellilik ile Queer teoriyi birleştirir ve 'Zorunlu engelsizlik' dayatmasını eleştirir. Bedenleşme Yaklaşımı ise 'Sadece kaldırıma rampa yapmak yetmez; bu insanın gerçek bir bedeni, ağrısı, yorgunluğu ve mahremiyeti var, onu da dinleyin!' der.",
        bulletPoints: [
          "Eleştirel Engellilik Çalışmaları (Critical Disability Studies - Goodley): Ableism (sağlamcılık), normallik ideolojisi, güç ve direniş kavramlarına odaklanır. Kurumların 'ideal müracaatçı' ve 'normal yaşam' dayatmalarını sorgular.",
          "Crip Teorisi (Robert McRuer, 2006): Engellilik çalışmaları ile Queer teorinin birleşimidir. 'Crip' sakat anlamına gelen argo kelimenin politik direniş olarak sahiplenilmesidir. 'Able-bodiedness' (zorunlu engelsizlik) ve 'Normatif beden' kavramlarını eleştirir.",
          "Bedenleşme ve Yaşantı Temelli Yaklaşımlar: Engellilik ne sadece dışsal engellerdir ne de sadece tıbbi kusurdur. Ağrı, yorgunluk, mahremiyet, kırılganlık ve beden algısı merkeze alınır. 'Çevresel bariyer kalktıysa her sorun çözülmüştür' şeklindeki aşırı basitleştirmeye karşı çıkar."
        ],
        practicalTip: "Anahtar kelimeler: 'Queer teori + Zorunlu engelsizlik (Able-bodiedness)' = Crip Teorisi (McRuer). 'Ağrı, yorgunluk, içeriden hissedilen beden ve rampa yetmez eleştirisi' = Bedenleşme (Embodiment) Yaklaşımı.",
        examClue: "Sosyal Model 'Bütün sorun çevrede ve rampada' derken, Bedenleşme Yaklaşımı 'Rampa yapılsa bile kişinin kronik ağrısı ve yorgunluğu var, bedeni unutmayın' diyerek Sosyal Modeli zenginleştirir.",
        keepInMind: "Eleştirel = Ableism (Sağlamcılık) Eleştirisi | Crip Teorisi = Queer + Zorunlu Engelsizlik Eleştirisi | Bedenleşme = Ağrı, Yorgunluk ve İçeriden Yaşantı.",
        aiPromptSuggestion: "Crip Teorisi ve Bedenleşme (Yaşantı Temelli) yaklaşımını hiç bilmeyen birine anlatır mısın?"
      }
    ]
  },
  {
    id: "unit-3",
    order: 3,
    title: "3. Ünite: Engellilik ve İnsan Hakları",
    shortTitle: "İnsan Hakları & CRPD",
    dateLabel: "22 Ekim 2026 Ders Notu",
    description: "BM Engellilerin Haklarına İlişkin Sözleşme (CRPD) maddeleri, 5378 sayılı Kanun, makul düzenleme, erişilebilirlik ve maddi eşitlik.",
    pdfUrl: "/assets/aistudio/engellilerle_sosyal_hizmet_22_Ekim_2026_06c9d6d7.pdf",
    topics: [
      {
        id: "u3-t1",
        unitId: "unit-3",
        title: "Hak mı, Yardım mı? Üç Yaklaşım ve BM Sözleşmesi (CRPD)",
        subtitle: "Hayırseverlik, Tıbbi ve İnsan Hakları yaklaşımları",
        eli5: "Üniversite binasında asansör olmadığı için derse giremeyen tekerlekli sandalyeli öğrenciye 'Sen evde otur, biz sana ders notlarını gönderelim' demek İYİLİK DEĞİL, HAK İHLALİDİR! Yardım (hayırseverlik) kişiye acır, İnsan Hakları ise binaya asansör yaptırır. Türkiye BM Sözleşmesi'ni (CRPD) 2007'de imzalamış, 2009'da onaylamıştır.",
        bulletPoints: [
          "Hayırseverlik Yaklaşımı: Kişiyi acınacak/korunacak pasif alıcı görür; yardım verenin iradesini merkeze alır.",
          "Tıbbi Yaklaşım: Tanı ve tedaviye odaklanır; toplumsal dışlanmayı açıklamaz.",
          "İnsan Hakları Yaklaşımı: Onur, bireysel özerklik, eşitlik, erişilebilirlik ve katılımı merkeze alır. Kişi yardımın pasif alıcısı değil, HAK SAHİBİ ve ÖZNESİDİR.",
          "BM Engellilerin Haklarına İlişkin Sözleşme (CRPD - 2006): Türkiye 2007'de imzalamış, 2009'da onaylayarak taraf olmuştur.",
          "Devletin 3 Yükümlülüğü: 1) Saygı Gösterme (Devlet hakkı bizzat ihlal etmemeli), 2) Koruma (Üçüncü kişilerin/özel şirketlerin ayrımcılığını önlemeli), 3) Yerine Getirme (Hakkın fiilen kullanılması için bütçe, hizmet ve denetim kurmalı)."
        ],
        practicalTip: "Tarih sorusu bankosu: BM CRPD Sözleşmesi kabulü = 2006. Türkiye'nin imzalaması = 2007, onaylaması = 2009. Devletin 3 yükümlülüğü: Saygı gösterme - Koruma - Yerine getirme.",
        examClue: "Özel bir işyerinin engelli işçiye ayrımcılık yapmasını devletin engellemesi hangi yükümlülüktür? 'Koruma yükümlülüğü' (3. kişilere karşı koruma).",
        keepInMind: "Yardım = Acıma & Pasif Alıcı | İnsan Hakkı = Onur, Özerklik & Hak Öznesi | Türkiye CRPD = 2007 İmza, 2009 Onay.",
        aiPromptSuggestion: "Hayırseverlik yaklaşımı ile İnsan Hakları yaklaşımı arasındaki farkı ve devletin 3 yükümlülüğünü (Saygı, Koruma, Yerine Getirme) örneklerle açıklar mısın?"
      },
      {
        id: "u3-t2",
        unitId: "unit-3",
        title: "Biçimsel Eşitlik vs Maddi Eşitlik, Makul Düzenleme ve Evrensel Tasarım",
        subtitle: "Sınavda en çok çıkan 4 temel kavram karşılaştırması",
        eli5: "Herkese aynı sınav süresini (60 dk) vermek 'Biçimsel Eşitlik'tir ama görme engelli öğrenci için adaletsizliktir! Ona ek süre veya okuyucu vermek gerçek eşitliği yani 'Maddi Eşitlik'i sağlar. Binayı en baştan herkesin gireceği gibi yapmak 'Evrensel Tasarım / Erişilebilirlik'tir; o sınıfa gelen tek bir engelli öğrenciye özel büyüteçli sıra getirmek ise 'Makul Düzenleme'dir.",
        bulletPoints: [
          "Biçimsel Eşitlik vs Maddi Eşitlik: Biçimsel eşitlik herkese aynı kuralı uygular (farklı ihtiyaçları görmez). Maddi (fiilî) eşitlik ise engelleri kaldırarak haklardan gerçekten eşit yararlanmayı sağlar.",
          "Evrensel Tasarım: Ürün, çevre ve hizmetlerin en baştan herkes tarafından kullanılabilir biçimde tasarlanmasıdır.",
          "Erişilebilirlik (Genel ve Önleyici): Hizmet ve ortamların (rampa, web sitesi, altyazı, işaret dili) geniş kullanıcı grupları için baştan ulaşılabilir olmasıdır.",
          "Makul Düzenleme (Bireysel ve Somut): Belirli bir kişinin somut durumda eşit hak kullanımı için, orantısız/aşırı yük getirmediği ölçüde yapılan özel uyarlamadır. DİKKAT: Makul düzenlemenin reddi AYRIMCILIKTIR!",
          "Doğrudan vs Dolaylı Ayrımcılık: Doğrudan ayrımcılık 'Engellisin diye seni almıyoruz' demektir. Dolaylı ayrımcılık ise herkese tarafsız görünen bir kuralın (örn. sadece merdivenli salonda toplantı yapmak) engelliyi dezavantajlı duruma düşürmesidir."
        ],
        practicalTip: "Genel kitle için baştan yapılan rampa = Erişilebilirlik / Evrensel Tasarım. Tek bir kişinin somut ihtiyacı için yapılan sınav/masa uyarlaması = Makul Düzenleme!",
        examClue: "CRPD Madde 5'e göre: 'Makul düzenlemenin reddedilmesi' engelliliğe dayalı AYRIMCILIK sayılır! Ayrıca fiilî eşitliği sağlamak için alınan özel tedbirler 'ayrımcılık' veya 'ayrıcalık' değildir.",
        keepInMind: "Herkese aynı kural = Biçimsel Eşitlik | Engeli kaldırıp eşit fırsat = Maddi Eşitlik | Baştan genel tasarım = Erişilebilirlik | Kişiye özel somut uyarlama = Makul Düzenleme.",
        aiPromptSuggestion: "Biçimsel eşitlik ile maddi eşitlik, ve Erişilebilirlik ile Makul Düzenleme arasındaki farkları sınav sorusu örneğiyle anlatır mısın?"
      },
      {
        id: "u3-t3",
        unitId: "unit-3",
        title: "BM Sözleşmesi (CRPD) Kritik Maddeleri (Madde 3'ten 29'a Şifreli Liste)",
        subtitle: "Hangi madde hangi hakkı koruyor? Destekli karar verme nedir?",
        eli5: "BM Sözleşmesi'nin maddeleri engelli bireyin hayatındaki her alanı güvenceye alır. Özellikle Madde 12 çok önemlidir: 'Zihinsel veya fiziksel engeli var diye kişinin yerine ailesi karar veremez (vesayet/ikame karar değil), kişiye kararını vermesi için bilgi ve iletişim desteği sunulur (Destekli Karar Verme)!'",
        bulletPoints: [
          "Madde 3: Sözleşmenin Genel İlkeleri (Özerklik, ayrımcılık yapmama, katılım, farklılıklara saygı).",
          "Madde 5: Eşitlik ve Ayrımcılık Yasağı (Makul düzenleme reddi = ayrımcılık).",
          "Madde 6 ve Madde 7: Madde 6 = Engelli Kadınlar ve Kız Çocukları; Madde 7 = Engelli Çocuklar (Üstün yarar + görüşünü ifade hakkı).",
          "Madde 9: Erişilebilirlik (Fiziksel çevre, ulaşım, dijital bilgi ve iletişim).",
          "Madde 12: Hukuki Ehliyet ve Destekli Karar Verme ('Onun için en iyisini biz biliriz' anlayışına karşı çıkar; irade ve tercihleri merkeze alır).",
          "Madde 13: Adalete Erişim | Madde 16: İhmal, İstismar ve Şiddetten Korunma.",
          "Madde 19: Bağımsız Yaşam ve Topluma Dahil Olma (Nerede ve kiminle yaşayacağını seçme hakkı; kurumsal bakım tek seçenek olmamalı).",
          "Madde 24: Kapsayıcı Eğitim | Madde 25: Sağlık | Madde 27: Çalışma ve İstihdam | Madde 28: Yeterli Yaşam Standardı ve Sosyal Koruma | Madde 29: Siyasal ve Kamusal Yaşama Katılım (Oy verme)."
        ],
        practicalTip: "En çok sorulan 4 madde numarası: Madde 9 = Erişilebilirlik | Madde 12 = Hukuki Ehliyet (Destekli Karar Verme) | Madde 19 = Bağımsız Yaşam | Madde 24 = Kapsayıcı Eğitim.",
        examClue: "Bağımsız Yaşam (Madde 19) kişinin her işini tek başına desteksiz yapması demek DEĞİLDİR! Nerede, nasıl ve kiminle yaşayacağına dair seçimlerde kontrol sahibi olması demektir.",
        keepInMind: "Md.9 Erişilebilirlik | Md.12 Hukuki Ehliyet & Destekli Karar | Md.19 Bağımsız Yaşam | Md.24 Eğitim | Md.27 İstihdam.",
        aiPromptSuggestion: "BM Sözleşmesindeki Destekli Karar Verme (Madde 12) ve Bağımsız Yaşam (Madde 19) kavramlarını günlük hayattan bir örnekle açıklar mısın?"
      },
      {
        id: "u3-t4",
        unitId: "unit-3",
        title: "Türkiye Hukuki Çerçevesi (Anayasa 10-42-61, 5378) ve Erişim Zinciri",
        subtitle: "Anayasa maddeleri, 5378 sayılı Kanun ve 6 adımlı Erişim Zinciri",
        eli5: "Türkiye'de engelli haklarını koruyan üç büyük kalkan vardır: Anayasa (Madde 10 Eşitlik, Madde 42 Eğitim, Madde 61 Engellilerin Korunması), 2005 tarihli 5378 sayılı Engelliler Hakkında Kanun ve BM Sözleşmesi. Sosyal hizmet uzmanı bir hakkın gerçekten kullanılıp kullanılmadığını 6 halkalı 'Erişim Zinciri' ile kontrol eder.",
        bulletPoints: [
          "T.C. Anayasası: Madde 10 (Kanun önünde eşitlik / pozitif tedbirler), Madde 42 (Eğitim ve öğrenim hakkı), Madde 61 (Devletin engellileri koruma ve topluma intibaklarını sağlama görevi).",
          "5378 Sayılı Engelliler Hakkında Kanun (2005): Doğrudan/dolaylı ayrımcılığı yasaklar, erişilebilirliği, bağımsız yaşamı, eğitimi ve istihdamı düzenler.",
          "Hak Temelli Değerlendirme - 6 Adımlı Erişim Zinciri: 1) İhtiyaç -> 2) Bilgi (Süreç biliniyor mu?) -> 3) Başvuru (Form/dijital süreç erişilebilir mi?) -> 4) Temas ve Değerlendirme -> 5) Hizmet -> 6) Sonuç (Katılımda ne değişti?).",
          "Savunuculuk Düzeyleri: Mikro (Bireyin haklarını öğrenmesi), Mezzo (Okul/hastane/belediye/işyeri engellerinin kaldırılması), Makro (Kanun, bütçe ve ulusal politika değişikliği)."
        ],
        practicalTip: "Anayasa maddelerini şifrele: 10 = Eşitlik (10 numara eşitlik), 42 = Eğitim, 61 = Sosyal koruma / Engellilerin korunması.",
        examClue: "Erişim Zincirinin ilk ve son halkasına dikkat: 1. Halka = İhtiyaç, 6. Halka = Sonuç (sadece hizmetin verilmesi değil, kişinin bağımsızlığında ve katılımında ne değiştiği).",
        keepInMind: "Anayasa: Md.10 Eşitlik, Md.42 Eğitim, Md.61 Engellileri Koruma | 5378 = Engelliler Hakkında Kanun | Erişim Zinciri = İhtiyaç -> Bilgi -> Başvuru -> Temas -> Hizmet -> Sonuç.",
        aiPromptSuggestion: "Hak temelli değerlendirmedeki 6 adımlı Erişim Zincirini ve Anayasa 10, 42, 61. maddeleri kısaca özetler misin?"
      }
    ]
  },
  {
    id: "unit-4",
    order: 4,
    title: "4. Ünite: Fiziksel Engellilik ve Sosyal Hizmet",
    shortTitle: "Fiziksel Engellilik",
    dateLabel: "5 Kasım 2026 Ders Notu",
    description: "Omurilik yaralanmaları, Serebral Palsi, DSÖ ICF modeli, Türkiye istatistikleri, sağlık raporları (ÇÖZGER), istihdam kotaları ve Mert vakası.",
    pdfUrl: "/assets/aistudio/engellilerle_sosyal_hizmet_5_Kas_m_2026_df46ea9d.pdf",
    topics: [
      {
        id: "u4-t1",
        unitId: "unit-4",
        title: "Fiziksel Engellilik Türleri: Omurilik Yaralanması, Serebral Palsi ve Kas Hastalıkları",
        subtitle: "Parapleji vs Tetrapleji, ilerleyici olmayan ve ilerleyici durumlar",
        eli5: "Fiziksel engellilik 4 ana gruptan oluşur: Ortopedik (uzuv kaybı), Nörolojik (beyin/omurilik hasarı), Nöromüsküler (ilerleyici kas hastalıkları) ve Kronik hastalıklar. Omurilik yaralanmasında belden aşağısı felçse 'Parapleji', dört uzuv (hem kollar hem bacaklar) etkilenmişse 'Tetrapleji (Kuadripleji)' denir. Serebral Palsi ise bebeklikte oluşan İLERLEYİCİ OLMAYAN beyin hasarıdır.",
        bulletPoints: [
          "1. Ortopedik Yetersizlikler: Amputasyon (uzuv kaybı), kas-iskelet deformiteleri, kemik/eklem hastalıkları.",
          "2. Nörolojik Kökenli Yetersizlikler: Omurilik yaralanması, Serebral Palsi (SP), İnme, Spina Bifida, Travmatik beyin hasarı.",
          "Omurilik Yaralanmaları: Çoğunlukla trafik/iş kazası, yüksekten düşme sonucu (genç erkeklerde sık). Parapleji = alt ekstremiteler (bacaklar) ve gövde; Tetrapleji (Kuadripleji) = 4 ekstremite (kollar + bacaklar). İkincil sorunlar: bası yarası, mesane-bağırsak kontrolü, spastisite.",
          "Serebral Palsi (SP): Gelişmekte olan beyinde doğum öncesi/sırası/erken çocuklukta oluşan İLERLEYİCİ OLMAYAN hareket ve postür bozukluğudur. Çocuklukta fiziksel engelliliğin en sık nedenidir. DİKKAT: Zihinsel yetersizlikle eş anlamlı değildir!",
          "3. Nöromüsküler ve İlerleyici Durumlar: Duchenne Musküler Distrofisi (DMD), SMA (Spinal Müsküler Atrofi), Multipl Skleroz (MS - genç yetişkinlikte ataklarla seyreder, görünmeyen yorgunluk yapar). Zamanla işlev kaybı arttığı için esnek gelecek planlaması gerekir."
        ],
        practicalTip: "Çok önemli tuzak: Serebral Palsi (SP) 'ilerleyici bir hastalık' DEĞİLDİR ve 'zihinsel engel' DEĞİLDİR! İlerleyici olanlar DMD, SMA ve MS'tir.",
        examClue: "Parapleji = Alt uzuvlar (bacaklar). Tetrapleji / Kuadripleji = 4 uzuv (Tetra = 4 demektir).",
        keepInMind: "Parapleji = Bacaklar | Tetrapleji = 4 Uzuv | Serebral Palsi = İlerleyici Olmayan Çocukluk Beyin Hasarı | DMD, SMA, MS = İlerleyici Durumlar.",
        aiPromptSuggestion: "Parapleji, Tetrapleji, Serebral Palsi ve Multipl Skleroz (MS) arasındaki farkları sınavda çıkmaya aday noktalarıyla anlatır mısın?"
      },
      {
        id: "u4-t2",
        unitId: "unit-4",
        title: "DSÖ ICF Sınıflandırması (2001) ve Türkiye İstatistikleri / Raporlar",
        subtitle: "Biyopsikososyal model, Washington Grubu, ÇÖZGER ve Erişkin Raporu",
        eli5: "Dünya Sağlık Örgütü 2001'de ICF modelini çıkardı ve 'Sadece vücuttaki hasara bakmayın; kişinin ne yapabildiğine (Etkinlik), topluma ne kadar katıldığına (Katılım) ve çevresine (asansör, gelir, aile) birlikte bakın' dedi. Türkiye'de 18 yaş altına ÇÖZGER raporu, yetişkinlere ise Erişkin Engellilik Sağlık Kurulu Raporu verilir.",
        bulletPoints: [
          "DSÖ ICF (2001 - Biyopsikososyal Bakış): 1) Vücut işlevleri ve yapıları (kas gücü, uzuv varlığı), 2) Etkinlik (yürüme, giyinme gibi bireysel görevler), 3) Katılım (eğitim, iş, toplumda yer alma) + Bağlamsal Etkenler (Çevresel ve Kişisel etkenler). Aynı tanıya sahip iki kişinin yaşam kalitesini çevresel etkenler belirler!",
          "Türkiye Verileri (2011 Nüfus ve Konut Araştırması - Washington Grubu Soru Seti): 3+ yaş nüfusun %6,9'u (yaklaşık 4,9 milyon kişi) en az bir alanda engellidir. Yürüme/merdiven zorluğu %3,3 (2,3 milyon), taşıma/tutma zorluğu %4,1'dir. En yüksek oran hareket zorluğudur ve kadınlarda daha yüksektir.",
          "Ulusal Engelli Veri Sistemi (İdari Kayıt): Sağlık kurulu raporlarına dayanır, yaklaşık 2,5 milyon kişi kayıtlıdır (%13,8 ortopedik, %40,6 süreğen hastalık). Rapor almayanları kapsamaz!",
          "75+ Yaş Verisi (2019 Türkiye Sağlık Araştırması): 75 yaş ve üzerindekilerin %44,7'si yardım veya araç olmadan yürüyememektedir.",
          "Sağlık Kurulu Raporları: 18 yaş altı çocuklar için ÇÖZGER (Çocuklar İçin Özel Gereksinim Raporu); yetişkinler için Erişkinler İçin Engellilik Değerlendirmesi Raporu."
        ],
        practicalTip: "Sayısal veri sorularında: 2011 Araştırması (Washington Grubu) = %6,9 (4,9 milyon kişi). İdari Kayıt Sistemi (Raporlular) = 2,5 milyon kişi (%40,6 süreğen, %13,8 ortopedik). 18 yaş altı rapor = ÇÖZGER.",
        examClue: "2011 Nüfus ve Konut Araştırması tıbbi tanıdan çok işlevsel sınırlılıkları ölçen 'Washington Grubu soru setine' dayanmaktadır.",
        keepInMind: "ICF (2001) = Biyopsikososyal (Vücut + Etkinlik + Katılım + Çevre) | 18 Yaş Altı = ÇÖZGER | 2011 Araştırması = %6,9 (Washington Grubu).",
        aiPromptSuggestion: "DSÖ'nün ICF (2001) sınıflandırmasını ve Türkiye'deki engellilik istatistikleri ile ÇÖZGER raporunu kısaca özetler misin?"
      },
      {
        id: "u4-t3",
        unitId: "unit-4",
        title: "İstihdam Kotaları (4857 & 657), Sosyal Yardımlar (2022 & 2828) ve Bakım",
        subtitle: "Sınavda kesin çıkan kanun numaraları ve istihdam yüzdeleri",
        eli5: "Türkiye'de 50 ve üzeri işçi çalıştıran özel şirketler %3, kamu işyerleri %4 engelli işçi çalıştırmak zorundadır (4857 İş Kanunu). Devlet memurluğunda ise kota %3'tür ve EKPSS ile girilir (657 DMK). Maddi yardımlarda 2022 sayılı Kanun 'Engelli Aylığı' verirken, 2828 sayılı Kanun 'Evde Bakım Yardımı' ve 'Umut Evleri' hizmetini sunar.",
        bulletPoints: [
          "İstihdam Oranları (EYHGM 2023): Genel nüfusta işgücüne katılım %53,2 iken engelli nüfusta %22,1'dir (engelli kadınlarda sadece %12,5!).",
          "4857 Sayılı İş Kanunu (50+ İşçi çalıştıranlar): Özel sektör işyerleri %3, Kamu işyerleri %4 engelli işçi çalıştırmakla yükümlüdür.",
          "657 Sayılı Devlet Memurları Kanunu: Kamu kurumlarında %3 oranında engelli memur istihdam edilir (Alım EKPSS ile yapılır).",
          "2022 Sayılı Kanun (Nakdi Aylıklar): Muhtaçlık koşulunu sağlayan engelli bireylere engel oranına göre 'Engelli Aylığı', 18 yaş altı engelli çocuğu olan muhtaç ailelere 'Engelli Yakını Aylığı' bağlanır.",
          "2828 Sayılı Kanun (Bakım Hizmetleri): Ağır engelli bireyin evde bakımını üstlenen yakına gelir ölçütüne göre 'Evde Bakım Yardımı' (562 bin kişi, %17'si bedensel engelli) ödenir. Ayrıca 'Umut Evleri' ev tipi bakım hizmeti modelidir.",
          "Diğer Haklar: 5378 sayılı Kanun ile valiliklerde 'Erişilebilirlik İzleme ve Denetleme Komisyonları' denetim yapar. Şehir içi ücretsiz toplu taşıma, ÖTV/vergi indirimi, ağır engelli çocuğu olan kadın sigortalılara erken emeklilik hakkı vardır."
        ],
        practicalTip: "Kotaları şifrele: 50+ işçi Özel Sektör = %3 | Kamu İşçi = %4 | Kamu Memur (EKPSS) = %3. Kanunları şifrele: 2022 = Engelli Aylığı | 2828 = Evde Bakım Yardımı | 4857 = İş Kanunu | 5378 = Engelliler Hakkında Kanun.",
        examClue: "Umut Evleri nedir? Büyük kışla tipi kurum bakımı yerine, engelli bireylerin toplum içinde ev ortamında yaşamasını sağlayan 'ev tipi bakım hizmeti modeli'dir.",
        keepInMind: "Özel İşçi Kota = %3 | Kamu İşçi Kota = %4 | Memur Kota = %3 (EKPSS) | 2022 Kanunu = Engelli Aylığı | 2828 Kanunu = Evde Bakım Yardımı.",
        aiPromptSuggestion: "4857, 657, 2022, 2828 ve 5378 sayılı kanunları ve engelli istihdam kotalarını tek bakışta ezberleyebileceğim şekilde yazar mısın?"
      },
      {
        id: "u4-t4",
        unitId: "unit-4",
        title: "Multidisipliner Ekip, Etik Dil ve Vaka Analizi: Mert (24 Yaş, Parapleji)",
        subtitle: "Fizyoterapist vs Ergoterapist, doğru dil ve Mikro-Mezzo-Makro müdahale",
        eli5: "Rehabilitasyon ekibinde Fizyoterapist kas gücü ve yürümeye bakarken, Ergoterapist günlük yaşam becerilerine ve evin düzenlenmesine (banyo tutamağı, kapı genişliği) bakar. Sosyal Hizmet Uzmanı ise Mert gibi kaza geçirip eve kapanan bir genci 'kuruma kapatmak' yerine kendi tercihlerini dinler, evine rampa/gelir desteği sağlar (Mikro), ailesiyle çalışır (Mezzo) ve belediye erişilebilirliği için mücadele eder (Makro).",
        bulletPoints: [
          "Fizyoterapi vs Ergoterapi: Fizyoterapi hareket ve kas gücüne odaklanır; Ergoterapi ise günlük yaşam etkinliklerine ve çevre/ev uyarlamasına odaklanır.",
          "Etik ve Dil Kullanımı: 'Sakat, özürlü, tekerlekli sandalyeye mahkûm' DENMEZ -> 'Tekerlekli sandalye kullanan kişi' denir. Kişiyi 'kahraman' veya 'acınacak kişi' yapmaktan kaçınılır. Refakatçiyle değil doğrudan kişiyle konuşulur. Tekerlekli sandalyeye (bedenin uzantısıdır) izinsiz dokunulmaz!",
          "Mert Vakası Özeti: 24 yaşında, sigortasız inşaat işçisi, motosiklet kazası sonrası parapleji (tekerlekli sandalye). Asansörsüz 3. katta yaşıyor, geliri yok, 'hiçbir işe yaramam' diyor. Annesi tükenmiş, babası kuruma yatırmak istiyor.",
          "Mert Vakası Müdahale Planı: Babanın kurum bakımı isteği tek seçenek kabul edilmez; Mert'in kendi tercihi merkeze alınır. Mikro: Psikososyal destek, sağlık kurulu raporu, 2022 aylığı/2828 evde bakım yardımı, İŞKUR mesleki rehabilitasyon. Mezzo: Anne-baba ile aile danışmanlığı (bakım yükü paylaşımı), akran desteği (omurilik felçlileri derneği), ev/giriş uyarlaması. Makro: İlçedeki erişilebilirlik ve ulaşım engellerinin belediyeye/komisyona bildirilmesi."
        ],
        practicalTip: "Vaka sorularında altın kural: Aile 'Kuruma yatıralım' dese bile Sosyal Hizmet Uzmanı hemen kuruma göndermez! Önce kişinin iradesini sorar (Madde 12 & 19) ve toplum içinde yaşamasını sağlayacak destekleri (ev uyarlaması, evde bakım, akran desteği) devreye sokar.",
        examClue: "Fizyoterapist = Hareket ve kas gücü. Ergoterapist = Günlük yaşam etkinlikleri ve çevre/ev uyarlaması.",
        keepInMind: "Tekerlekli sandalyeye mahkûm DEĞİL, kullanan kişi! | Fizyoterapi = Kas/Hareket, Ergoterapi = Günlük Yaşam/Çevre Uyarlaması | Kurum bakımı son çaredir, kişi merkezli planlama esastır.",
        aiPromptSuggestion: "Mert vakasını ICF çerçevesinde ve Mikro, Mezzo, Makro sosyal hizmet müdahale düzeylerinde sınavda tam puan alacak şekilde çözer misin?"
      }
    ]
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
