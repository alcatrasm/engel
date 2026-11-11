import { QuizQuestion } from "./courseData";

type RawQ = [
  string,
  [string, string, string, string],
  number,
  string,
  string
];

const UNIT_3_RAW: RawQ[] = [
  [
    "Birleşmiş Milletler Engellilerin Haklarına İlişkin Sözleşme (CRPD) Birleşmiş Milletler Genel Kurulu'nda hangi yılda kabul edilmiştir?",
    ["1980", "1995", "2006 (13 Aralık 2006)", "2018"],
    2,
    "BM Engellilerin Haklarına İlişkin Sözleşme (CRPD) 13 Aralık 2006 tarihinde BM Genel Kurulu'nda kabul edilmiş, 21. yüzyılın ilk büyük insan hakları sözleşmesi olmuştur.",
    "BM CRPD kabul yılı = 2006."
  ],
  [
    "Türkiye, BM Engellilerin Haklarına İlişkin Sözleşme'yi (CRPD) hangi yılda imzalamış ve hangi yılda TBMM onayıyla yürürlüğe koymuştur?",
    [
      "2007'de ilk imzalayan ülkelerden olmuş, 2009'da yürürlüğe koymuştur",
      "1990'da imzalayıp 1992'de yürürlüğe koymuştur",
      "2020'de imzalamıştır",
      "Henüz imzalamamıştır"
    ],
    0,
    "Türkiye, Sözleşmeyi 30 Mart 2007'de imzaya açıldığı ilk gün imzalayan ülkelerden biri olmuş, 2008'de onaylamış ve 2009'da yürürlüğe koymuştur.",
    "Türkiye CRPD: 2007 İmza -> 2009 Yürürlük."
  ],
  [
    "T.C. Anayasası'nın 90. maddesine göre usulüne göre yürürlüğe konulmuş olan BM Engellilerin Haklarına İlişkin Sözleşme'nin (CRPD) iç hukuktaki konumu nedir?",
    [
      "Sadece tavsiye niteliğindedir",
      "Kanun hükmündedir; hatta temel hak ve özgürlüklere ilişkin olduğu için iç kanunlarla çatışırsa Sözleşme (CRPD) hükümleri üstün tutulur!",
      "Yönetmeliklerin altındadır",
      "Sadece belediyeleri bağlar"
    ],
    1,
    "Anayasa Madde 90 uyarınca temel haklara ilişkin uluslararası sözleşmeler (CRPD dahil) kanunlarla aynı konuda farklı hükümler içerdiğinde uluslararası sözleşme hükümleri esas alınır.",
    "Anayasa Md. 90 = BM Sözleşmesi (CRPD) iç kanunlardan üstündür!"
  ],
  [
    "Engelliliğe yönelik 'Hayırseverlik Yaklaşımı'nda engelli bireyin konumu nedir?",
    [
      "Yasal hak sahibi özne",
      "Acınan, korunan ve sadaka/yardım bekleyen pasif 'yardım nesnesi'",
      "Bağımsız karar verici",
      "Politik yurttaş"
    ],
    1,
    "Hayırseverlik yaklaşımı engelliliği trajik bir talihsizlik olarak görür; bireye hak değil lütuf ve sadaka sunar.",
    "Hayırseverlik yaklaşımı = Birey yardım nesnesidir."
  ],
  [
    "İnsan Hakları Yaklaşımı'na göre devletin engelli bireylere sunduğu eğitim, erişilebilirlik ve bakım hizmetleri ne olarak görülür?",
    [
      "Devletin lütfu ve sadakası",
      "Devletin yerine getirmek zorunda olduğu yasal yükümlülük ve bireyin talep edilebilir hakkı",
      "Gönüllü bağış",
      "Tıbbi deney"
    ],
    1,
    "İnsan hakları yaklaşımında engelli birey 'hak öznesi'dir, devlet ise 'yükümlülük sahibi'dir.",
    "İnsan Hakları Yaklaşımı: Birey = Hak Öznesi | Devlet = Yükümlülük Sahibi."
  ],
  [
    "Herkesin farklılıkları ve özel ihtiyaçları hiç dikkate alınmadan herkese birebir aynı kuralın (örneğin herkese aynı merdivenin ve aynı sınav süresinin) uygulanmasına ne denir?",
    ["Maddi Eşitlik", "Biçimsel (Şekli / Formal) Eşitlik", "Makul Düzenleme", "Evrensel Tasarım"],
    1,
    "Biçimsel (şekli) eşitlik, başlangıçtaki eşitsizlikleri görmezden gelerek herkese aynı muameleyi yapar ve sonuçta engelli birey için adaletsizlik üretir.",
    "Herkese aynı merdiven / aynı süre = Biçimsel (Şekli) Eşitlik."
  ],
  [
    "Bireylerin farklı ihtiyaçlarını ve başlangıçtaki dezavantajlarını dikkate alarak fırsatları ve sonuçları gerçekten eşitlemeye (örneğin görme engelliye okuyucu ve ek sınav süresi vermeye) ne ad verilir?",
    ["Biçimsel Eşitlik", "Maddi (Gerçek / Substantive) Eşitlik", "Doğrudan Ayrımcılık", "Tıbbi Model"],
    1,
    "Maddi (gerçek) eşitlik, farklı durumda olanlara farklı destekler sunarak gerçek adaleti ve fırsat eşitliğini sağlar.",
    "Farklı ihtiyaca uygun destekle gerçek adalet = Maddi (Gerçek) Eşitlik."
  ],
  [
    "Belirli bir somut durumda, tek bir engelli bireyin diğerleriyle eşit şekilde eğitim alabilmesi veya çalışabilmesi için yapılan, aşırı yük getirmeyen kişiye özel uyarlamaya ne ad verilir?",
    ["Evrensel Tasarım", "Makul Düzenleme (Reasonable Accommodation)", "Biçimsel Eşitlik", "Genel İmar Planı"],
    1,
    "Makul Düzenleme, 'tek bir bireyin özel talebi ve ihtiyacı' üzerine o an yapılan uyarlamadır (Örn: İş yerindeki tekerlekli sandalyeli çalışan için masanın yükseltilmesi).",
    "Tek 1 kişiye özel yapılan uyarlama = Makul Düzenleme."
  ],
  [
    "BM Sözleşmesi (CRPD Madde 2 ve Madde 5) ile 5378 sayılı Kanun'a göre 'Makul düzenlemenin reddedilmesi (yapılmaması)' hukuken ne sayılır?",
    [
      "İşverenin takdir hakkı",
      "Doğrudan Engelliliğe Dayalı Ayrımcılık!",
      "Tasarruf tedbiri",
      "Biçimsel eşitlik"
    ],
    1,
    "Hem BM Sözleşmesi hem de 5378 sayılı Kanun açıkça 'Makul düzenlemenin yapılmaması ayrımcılıktır' hükmünü içerir.",
    "Sınav Bankosu: Makul düzenlemeyi yapmamak = Ayrımcılıktır!"
  ],
  [
    "Ürünlerin, binaların, çevrenin ve programların sonradan tadilat veya özel uyarlama gerektirmeden, en baştan tüm insanların (yaşlı, çocuk, engelli, engelsiz) kullanabileceği şekilde tasarlanmasına ne denir?",
    ["Makul Düzenleme", "Evrensel Tasarım (Universal Design / kapsayıcı tasarım)", "Rehabilitasyon", "Ortez"],
    1,
    "Evrensel Tasarım (Ronald Mace), en baştan herkes için tasarımdır (Örn: Fotoselli düz giriş kapısı, hem tekerlekli sandalyeli hem bebek arabalı hem valizli yolcu için uygundur).",
    "En baştan herkes için tasarım = Evrensel Tasarım."
  ],
  [
    "'Erişilebilirlik' ile 'Makul Düzenleme' arasındaki en temel fark nedir?",
    [
      "Hiçbir fark yoktur",
      "Erişilebilirlik geneldir (ex-ante: birey gelmeden önce tüm grup için yapılır); Makul Düzenleme ise bireyseldir (ex-post: belirli bir engelli bireyin somut ihtiyacı doğduğunda o kişiye özel yapılır)",
      "Erişilebilirlik sadece köylerde uygulanır",
      "Makul düzenleme sadece hastanelerde uygulanır"
    ],
    1,
    "Erişilebilirlik (rampa, asansör, web erişimi) genel gruplara yöneliktir ve önceden yapılması zorunludur; Makul Düzenleme ise belirli bir bireyin özel durumu için yapılır.",
    "Erişilebilirlik = Genel Gruba (Önceden) | Makul Düzenleme = Tek Kişiye Özel."
  ],
  [
    "BM CRPD Madde 3'te yer alan 'Genel İlkeler' arasında aşağıdakilerden hangisi YER ALMAZ?",
    [
      "Kendi seçimlerini yapma özgürlüğü dahil bireysel özerklik ve bağımsızlık",
      "Ayrımcılık yapılmaması ve topluma tam ve etkin katılım",
      "Engelli bireylerin kararlarının her zaman aileleri veya doktorları tarafından verilmesi",
      "Fırsat eşitliği ve erişilebilirlik"
    ],
    2,
    "CRPD Madde 3'ün ilk ilkesi 'kendi seçimlerini yapma özgürlüğü dahil bireysel özerklik ve bağımsızlığa saygı'dır.",
    "CRPD Madde 3 = Özerklik, Ayrımcılık Yasağı, Katılım, Erişilebilirlik."
  ],
  [
    "BM CRPD'nin en devrimci maddesi kabul edilen ve zihinsel/ruhsal engelliler dahil tüm engellilerin 'Yasa Önünde Eşit Tanınma ve Hukuki Ehliyet' hakkını düzenleyen maddesi kaçıncı maddedir?",
    ["Madde 5", "Madde 9", "Madde 12", "Madde 24"],
    2,
    "CRPD Madde 12, engelli bireylerin diğerleriyle eşit hukuki ehliyete sahip olduğunu ilan eder ve 'İkame Karar Verme (Vasi)' yerine 'Destekli Karar Verme' sistemini getirir.",
    "CRPD Madde 12 = Yasal Ehliyet & Destekli Karar Verme!"
  ],
  [
    "CRPD Madde 12'nin getirdiği 'Destekli Karar Verme (Supported Decision-Making)' modeli ne demektir?",
    [
      "Engelli bireyin iradesini tamamen yok sayıp onun yerine bir vasinin imza atması (İkame karar)",
      "Engelli bireyin kendi kararını kendisinin vermesi için ona anlayabileceği dilde bilgi ve güvenilir destek sunulması",
      "Kararları sadece mahkemenin vermesi",
      "Kararları doktorun vermesi"
    ],
    1,
    "Eski sistem olan 'İkame Karar Verme (Vesayet)' bireyin iradesini elinden alır; CRPD Madde 12 ise bireyin kendi iradesini ve tercihlerini merkeze alan 'Destekli Karar Verme'yi zorunlu kılar.",
    "Vasi (İkame Karar) YERİNE -> Destekli Karar Verme (CRPD Md. 12)."
  ],
  [
    "BM CRPD'de 'Bağımsız Yaşayabilme ve Topluma Dahil Olma' hakkını düzenleyen ve engellilerin belirli bir yaşam düzenine (yatılı kuruma) zorlanamayacağını belirten madde hangisidir?",
    ["Madde 6", "Madde 12", "Madde 19", "Madde 29"],
    2,
    "CRPD Madde 19, engelli bireylerin nerede ve kiminle yaşayacaklarını seçme hakkını ve toplum içinde kişisel asistan/ev içi desteklerle bağımsız yaşama hakkını güvenceye alır.",
    "CRPD Madde 19 = Bağımsız Yaşam ve Topluma Dahil Olma."
  ],
  [
    "BM CRPD'nin 24. maddesi 'Eğitim' hakkını düzenlerken hangi eğitim modelini taraf devletler için zorunlu kılmıştır?",
    [
      "Sadece yatılı özel eğitim okullarını",
      "Her düzeyde Kapsayıcı Eğitim (Inclusive Education) sistemini ve yaşam boyu öğrenmeyi",
      "Evde tek başına eğitimi",
      "Eğitimden muaf tutulmayı"
    ],
    1,
    "CRPD Madde 24, engelli çocukların genel eğitim sisteminden dışlanmamasını ve kendi mahallesindeki okulda akranlarıyla birlikte 'Kapsayıcı Eğitim' almasını emreder.",
    "CRPD Madde 24 = Kapsayıcı Eğitim (Inclusive Education)."
  ],
  [
    "BM CRPD Madde 6 ve Madde 7 sırasıyla hangi iki özel grubun çoklu ayrımcılığa karşı korunmasını düzenler?",
    [
      "Engelli Kadınlar (Madde 6) ve Engelli Çocuklar (Madde 7)",
      "Memurlar ve İşçiler",
      "Doktorlar ve Hemşireler",
      "Turistler ve Göçmenler"
    ],
    0,
    "CRPD Madde 6 'Engelli Kadınlar' (çoklu ayrımcılık), Madde 7 ise 'Engelli Çocuklar' (çocuğun yüksek yararı ve görüşünü ifade etme hakkı) başlığını taşır.",
    "CRPD Md. 6 = Engelli Kadınlar | Md. 7 = Engelli Çocuklar."
  ],
  [
    "BM CRPD Madde 9 hangi temel hakkı düzenlemektedir?",
    ["Erişilebilirlik (Fiziksel çevre, ulaşım, bilgi ve iletişim teknolojileri)", "Seçme ve seçilme", "Evlilik", "Askerlik"],
    0,
    "CRPD Madde 9 'Erişilebilirlik' maddesidir; binaların, yolların, ulaşımın ve dijital/bilgi sistemlerinin erişilebilir olmasını düzenler.",
    "CRPD Madde 9 = Erişilebilirlik."
  ],
  [
    "BM CRPD Madde 27 'Çalışma ve İstihdam' hakkı neyi vurgular?",
    [
      "Engellilerin sadece korumalı atölyelerde kapatılarak çalıştırılmasını",
      "Açık, kapsayıcı ve erişilebilir bir iş piyasasında, eşit değerde işe eşit ücret alarak çalışma hakkını",
      "Engellilerin çalışmasının yasaklanmasını",
      "Sadece ücretsiz çalıştırılmalarını"
    ],
    1,
    "CRPD Madde 27, engellilerin açık iş gücü piyasasında ayrımcılığa uğramadan, makul düzenlemeler sağlanarak çalışma hakkını korur.",
    "CRPD Madde 27 = Açık iş piyasasında eşit çalışma ve istihdam."
  ],
  [
    "Uluslararası insan hakları hukukunda devletin 3 temel yükümlülük düzeyi (Saygı Gösterme - Koruma - Yerine Getirme) içinde 'Saygı Gösterme (Respect)' ne anlama gelir?",
    [
      "Devletin bizzat kendi organlarıyla bireyin hakkını ihlal etmemesi ve ayrımcı yasa çıkarmaması",
      "Özel şirketleri denetlemesi",
      "Sosyal yardım bütçesi ayırması",
      "Hastane inşa etmesi"
    ],
    0,
    "Saygı gösterme (Respect) negatif/kaçınma yükümlülüğüdür: Devlet kendi eliyle engelli bireyin hakkına müdahale etmez ve ayrımcılık yapmaz.",
    "Saygı Gösterme = Devletin bizzat hak ihlali yapmaması."
  ],
  [
    "Devletin 3 yükümlülüğünden 'Koruma (Protect)' yükümlülüğü neyi ifade eder?",
    [
      "Devletin hiçbir şey yapmamasını",
      "Üçüncü kişilerin (özel sektör işverenlerinin, özel okulların, aile bireylerinin) engelli bireyin hakkını ihlal etmesini ve istismarını önlemesini",
      "Sadece uluslararası anlaşma imzalamasını",
      "Nüfus sayımı yapmasını"
    ],
    1,
    "Koruma (Protect) yükümlülüğü; devletin engelli bireyi 3. şahısların (özel şirketler, işverenler, istismarcılar) ayrımcılık ve ihlallerine karşı denetim ve cezalarla korumasıdır.",
    "Koruma (Protect) = 3. kişilerin (özel sektör/bireyler) ihlalini önlemek."
  ],
  [
    "Devletin 3 yükümlülüğünden 'Yerine Getirme (Fulfill)' yükümlülüğü ne anlama gelir?",
    [
      "Devletin hakların fiilen kullanılabilmesi için bütçe ayırması, yasa çıkarması, erişilebilir okul/ulaşım ve sosyal hizmetleri aktif olarak sunması",
      "Sadece seyirci kalması",
      "Hakları kısıtlaması",
      "Sadece ceza kesmesi"
    ],
    0,
    "Yerine getirme (Fulfill) pozitif yükümlülüktür; devlet bütçe, altyapı, eğitim ve bakım hizmetlerini aktif olarak kurar ve sunar.",
    "Yerine Getirme (Fulfill) = Devletin bütçe ve hizmetle hakkı hayata geçirmesi."
  ],
  [
    "Türkiye'de engellilere yönelik temel yasal çerçeveyi oluşturan ve 2005 yılında kabul edilen ana kanun hangisidir?",
    [
      "5378 sayılı Engelliler Hakkında Kanun",
      "4857 sayılı İş Kanunu",
      "1593 sayılı Umumi Hıfzıssıhha Kanunu",
      "6098 sayılı Borçlar Kanunu"
    ],
    0,
    "2005 yılında çıkarılan 5378 sayılı Engelliler Hakkında Kanun, Türkiye'de engelliliğe dair ayrımcılık yasağını, erişilebilirliği ve temel hakları düzenleyen ana kanundur.",
    "Türkiye ana engellilik yasası = 5378 sayılı Engelliler Hakkında Kanun (2005)."
  ],
  [
    "2013 yılında çıkarılan bir kanunla Türk mevzuatındaki 'özürlü, sakat, çürük' gibi damgalayıcı ibareler hangi kavramla değiştirilmiştir?",
    ["Hasta", "Engelli", "Muhtaç", "Malul"],
    1,
    "2013 yılında yapılan yasal düzenlemeyle tüm kanunlardaki 'özürlü, sakat, çürük' kelimeleri insan onuruna uygun olarak 'engelli' ibaresiyle değiştirilmiştir.",
    "2013 yasal dil değişikliği: Özürlü/Sakat/Çürük -> Engelli."
  ],
  [
    "T.C. Anayasası'nın 'Kanun Önünde Eşitlik' başlıklı 10. maddesine 2010 yılında eklenen fıkra engelliler açısından neyi güvence altına almıştır?",
    [
      "Çocuklar, yaşlılar, engelliler, harp ve vazife şehitlerinin dul ve yetimleri ile malul ve gaziler için alınacak tedbirlerin (pozitif ayrımcılığın) eşitlik ilkesine aykırı sayılmayacağını",
      "Engellilerin vergi vermesini",
      "Askerlik zorunluluğunu",
      "Sadece özel hastaneleri"
    ],
    0,
    "Anayasa Madde 10, engelliler için alınacak özel/pozitif önlemlerin eşitlik ilkesine aykırı sayılamayacağını anayasal güvenceye bağlamıştır.",
    "Anayasa Madde 10 = Eşitlik ve Engellilere Pozitif Ayrımcılık güvencesi."
  ],
  [
    "T.C. Anayasası'nın 42. maddesinde yer alan 'Devlet, durumları sebebiyle özel eğitime ihtiyacı olanları topluma yararlı kılacak tedbirleri alır' hükmü hangi hakla ilgilidir?",
    ["Eğitim ve Öğrenim Hakkı", "Mülkiyet Hakkı", "Konut Hakkı", "Seyahat Hakkı"],
    0,
    "Anayasa Madde 42 'Eğitim ve Öğrenim Hakkı'nı düzenler ve devlete özel eğitime ihtiyacı olanlar için tedbir alma görevi yükler.",
    "Anayasa Madde 42 = Eğitim Hakkı ve Özel Eğitim."
  ],
  [
    "T.C. Anayasası'nın 'Sosyal Güvenlik Bakımından Özel Olarak Korunması Gerekenler' başlıklı 61. maddesi devlete ne görev verir?",
    [
      "Devlet, sakatların (engellilerin) korunmalarını ve toplum hayatına intibaklarını (uyumlarını) sağlayıcı tedbirleri alır",
      "Sadece belediyelere görev verir",
      "Yalnızca özel sektöre görev verir",
      "Hiçbir görev vermez"
    ],
    0,
    "Anayasa Madde 61, devlete engellilerin korunması ve toplum hayatına katılımlarını sağlama ödevi yükler.",
    "Anayasa Madde 61 = Devlet engellileri korur ve topluma katılımını sağlar."
  ],
  [
    "Ders notlarında vurgulanan 'Erişim Zinciri (Chain of Accessibility)' kavramının temel mantığı nedir?",
    [
      "Sadece belediye otobüsüne rampa yapmak yeterlidir",
      "Evden çıkış -> Kaldırım -> Durak -> Toplu taşıma -> Bina girişi -> Bilgi/Hizmet halkalarından TEK BİRİ bile erişimsizse tüm yolculuk imkânsız hale gelir!",
      "Sadece yeni binalara asansör yapılmasıdır",
      "Sadece internet sitesi tasarımıdır"
    ],
    1,
    "Erişim bir zincirdir: Evde asansör var, otobüste rampa var ama okulun girişinde 3 basamak merdiven varsa kişi derse giremez; zincir en zayıf halkasından kopar!",
    "Erişim Zinciri: Tek bir halka koparsa tüm erişim sıfırlanır!"
  ],
  [
    "Bir işverenin 'İş yerimize tekerlekli sandalyeli veya görme engelli başvuruları kesinlikle kabul etmiyoruz' demesi hangi ayrımcılık türüdür?",
    ["Doğrudan Ayrımcılık (Direct Discrimination)", "Dolaylı Ayrımcılık", "Pozitif Ayrımcılık", "Evrensel Tasarım"],
    0,
    "Bir bireye veya gruba sırf engelliliği nedeniyle açıkça daha az elverişli ve dışlayıcı davranılmasına 'Doğrudan Ayrımcılık' denir.",
    "Açıkça engelli olduğu için reddetme = Doğrudan Ayrımcılık."
  ],
  [
    "Görünüşte herkese tarafsız ve eşit gibi duran bir kuralın (örneğin 'İş başvurusunda yazılı sınav sadece basılı kağıtla yapılacaktır' kuralının) görme engelli adayları fiilen elemesi hangi ayrımcılık türüdür?",
    ["Doğrudan Ayrımcılık", "Dolaylı Ayrımcılık (Indirect Discrimination)", "Makul Düzenleme", "Maddi Eşitlik"],
    1,
    "Tarafsız gibi görünen bir kural veya uygulamanın, engelli bireyleri orantısız biçimde dezavantajlı duruma düşürmesine 'Dolaylı Ayrımcılık' denir.",
    "Tarafsız görünen kuralın engelliyi elemesi = Dolaylı Ayrımcılık."
  ]
];

const UNIT_3_EXTRA: RawQ[] = [
  [
    "BM CRPD Madde 13 hangi hakkı güvence altına alır ve mahkemelerde ne yapılmasını zorunlu kılar?",
    [
      "Adalete Erişim (Yargı süreçlerinde usuli kolaylaştırmalar, işaret dili tercümanı ve yaşa/engele uygun düzenlemeler)",
      "Sadece vergi muafiyetini",
      "Spor yapma hakkını",
      "Turizm hakkını"
    ],
    0,
    "CRPD Madde 13 'Adalete Erişim' maddesidir; engelli bireylerin mahkemelerde tanık, davacı veya davalı olarak yer alabilmesi için usuli uyarlamaları (işaret dili tercümanı, kolay okunur belge) şart koşar.",
    "CRPD Madde 13 = Adalete Erişim ve mahkemede usuli uyarlama."
  ],
  [
    "BM CRPD Madde 16 engelli bireyleri hangi tehlikelere karşı korumayı düzenler?",
    [
      "Sömürü, Şiddet ve İstismardan Korunma (Ev içinde ve kurumlarda)",
      "Trafik cezalarından",
      "Enflasyondan",
      "İklim değişikliğinden"
    ],
    0,
    "CRPD Madde 16, engelli bireylerin hem aile içinde hem de bakım kurumlarında her türlü sömürü, şiddet ve istismardan korunmasını ve bağımsız izleme yapılmasını emreder.",
    "CRPD Madde 16 = Sömürü, Şiddet ve İstismardan Korunma."
  ],
  [
    "BM CRPD Madde 28 hangi temel sosyal hizmet alanını düzenler?",
    [
      "Yeterli Yaşam Standardı ve Sosyal Koruma (Yoksulluğun azaltılması, engellilikten doğan ek giderlerin karşılanması ve sosyal yardımlar)",
      "Uzay araştırmaları",
      "Askeri hizmet",
      "Patent hukuku"
    ],
    0,
    "CRPD Madde 28 'Yeterli Yaşam Standardı ve Sosyal Koruma' hakkıdır; devletin engelli bireylere ve ailelerine sosyal güvenlik ve mali destek sağlamasını düzenler.",
    "CRPD Madde 28 = Yeterli Yaşam Standardı ve Sosyal Koruma."
  ],
  [
    "BM CRPD Madde 29 engelli bireylerin hangi alana katılımını güvence altına alır?",
    [
      "Siyasal ve Kamusal Yaşama Katılım (Erişilebilir oy pusulası, gizli oy hakkı, seçme ve seçilme, STK kurma)",
      "Sadece hastane yatışı",
      "Sadece emeklilik",
      "Vergi denetimi"
    ],
    0,
    "CRPD Madde 29, engelli bireylerin erişilebilir oy verme kabinleri ve şablonlarıyla kendi oylarını bağımsızca kullanabilmelerini ve seçilebilmelerini güvenceye alır.",
    "CRPD Madde 29 = Siyasal Yaşam (Seçme ve Seçilme Hakkı)."
  ],
  [
    "BM CRPD'nin uygulanmasını uluslararası düzeyde denetleyen ve Cenevre'de toplanan bağımsız uzmanlar kurulunun adı nedir?",
    [
      "BM Engelli Hakları Komitesi (CRPD Committee)",
      "UEFA Komitesi",
      "UNESCO Kurulu",
      "NATO Konseyi"
    ],
    0,
    "Taraf devletlerin sözleşmeye uyup uymadığını denetleyen ve bireysel başvuruları inceleyen organ 'BM Engelli Hakları Komitesi'dir.",
    "CRPD denetim organı = BM Engelli Hakları Komitesi."
  ],
  [
    "Engelli bireylerin iç hukuk yollarını tükettikten sonra hak ihlalleri için BM Engelli Hakları Komitesi'ne bireysel başvuru yapabilmesini sağlayan ek belge hangisidir?",
    [
      "CRPD Seçmeli Protokol (Optional Protocol)",
      "2022 sayılı Kanun",
      "ÇÖZGER Yönetmeliği",
      "Snellen Tablosu"
    ],
    0,
    "BM Sözleşmesi'nin 'Seçmeli Protokolü'nü (İhtiyari Protokol) onaylayan devletlerin vatandaşları, iç hukuk tükendiğinde BM Engelli Hakları Komitesi'ne bireysel başvuru yapabilir.",
    "BM Komitesine bireysel başvuru hakkı = Seçmeli Protokol (Optional Protocol)."
  ],
  [
    "BM CRPD Madde 4/3'e göre devletler engellilerle ilgili yasa ve politika hazırlarken kime danışmak zorundadır?",
    [
      "Sadece maliye uzmanlarına",
      "Engelli çocukları da kapsayacak şekilde engelli bireylere ve onları temsil eden örgütlere (STK'lara) aktif olarak danışmak zorundadır",
      "Sadece inşaat müteahhitlerine",
      "Sadece yabancı şirketlere"
    ],
    1,
    "Madde 4/3, 'Bizim hakkımızda, biz olmadan asla!' ilkesini hukuk kuralı haline getirmiştir; devlet engellilerle ilgili her kararda engelli örgütleriyle istişare etmek zorundadır.",
    "CRPD Madde 4/3 = Karar süreçlerinde engelli örgütlerine danışma zorunluluğu."
  ],
  [
    "5378 sayılı Engelliler Hakkında Kanun'a göre kamuya açık binaların, kaldırımların ve toplu taşıma araçlarının erişilebilir hale getirilmesini denetlemek üzere illerde kurulan komisyon hangisidir?",
    [
      "Valilik bünyesindeki Erişilebilirlik İzleme ve Denetleme Komisyonu",
      "Olimpiyat Komitesi",
      "Merkez Bankası Kurulu",
      "Disiplin Kurulu"
    ],
    0,
    "5378 sayılı Kanun uyarınca illerde Valilikler bünyesinde içinde engelli konfederasyonu temsilcilerinin de yer aldığı 'Erişilebilirlik İzleme ve Denetleme Komisyonları' görev yapar.",
    "Bina ve ulaşım denetimi = Erişilebilirlik İzleme ve Denetleme Komisyonu."
  ],
  [
    "Erişilebilirlik sadece rampa ve asansörden ibaret değildir! Görme veya işitme engelli bir bireyin devletin web sitesini (e-Devlet vb.) ve mobil uygulamalarını kullanabilmesi hangi erişilebilirlik türüdür?",
    [
      "Bilgi ve İletişim Teknolojileri (Dijital / Web) Erişilebilirliği",
      "Kaldırım erişilebilirliği",
      "Tıbbi rehabilitasyon",
      "Ortopedik protez"
    ],
    0,
    "Web sitelerinin ekran okuyucularla uyumlu olması, videolarda altyazı ve işaret dili bulunması 'Dijital / Bilgi ve İletişim Erişilebilirliği'dir.",
    "Ekran okuyucu uyumlu web + Altyazı + İşaret dili = Dijital/Bilgi Erişilebilirliği."
  ],
  [
    "Zihinsel engelli veya öğrenme güçlüğü olan bireylerin resmi belgeleri, mahkeme kararlarını ve kamu duyurularını anlayabilmesi için metinlerin sadeleştirilip görsellerle desteklenmesine ne ad verilir?",
    [
      "Kolay Okunur / Kolay Anlaşılır Metin (Easy-to-Read)",
      "Braille baskı",
      "Balthazard formülü",
      "Odyogram"
    ],
    0,
    "Bilişsel erişilebilirlik kapsamında karmaşık bürokratik metinlerin kısa cümleler ve sembollerle sadeleştirilmesine 'Kolay Okunur (Easy-to-Read)' format denir.",
    "Zihinsel engelliler için sadeleştirilmiş belge = Kolay Okunur (Easy-to-Read)."
  ],
  [
    "Evrensel Tasarım'ın (Universal Design) 7 temel ilkesi arasında aşağıdakilerden hangisi yer alır?",
    [
      "Eşitlikçi kullanım, Esnek kullanım, Basit ve sezgisel kullanım, Algılanabilir bilgi, Hata toleransı, Düşük fiziksel güç gereksinimi, Yaklaşım ve kullanım için uygun boyut/alan",
      "Sadece güçlü insanların açabileceği ağır demir kapılar",
      "Karmaşık ve şifreli kullanım kılavuzları",
      "Sadece merdivenli girişler"
    ],
    0,
    "Evrensel tasarımın 7 ilkesi; düşük fiziksel güçle, hata payını tolere ederek, herkesin kolayca ve ayrımcılığa uğramadan kullanabileceği mekan/ürün tasarlamaktır.",
    "Evrensel Tasarım 7 İlke = Eşitlikçi, Esnek, Basit, Algılanabilir, Düşük güç, Uygun alan."
  ],
  [
    "Bir belediyenin kaldırıma görme engelliler için sarı kılavuz iz (hissedilebilir yüzey) döşemesi, ancak tam bu sarı çizginin ortasına elektrik direği veya reklam panosu dikmesi neyin ihlalidir?",
    [
      "Erişilebilirlik standartlarının ve Erişim Zinciri bütünlüğünün ihlali",
      "Tıbbi modelin",
      "Ahlaki modelin",
      "Fetal alkol sendromunun"
    ],
    0,
    "Kağıt üzerinde yapılmış gibi görünen ancak standartlara uymadığı için fiilen kullanılamayan uygulamalar erişilebilirlik hakkının ihlalidir.",
    "Sarı çizgi üstüne direk dikmek = Standart dışı / Kırık Erişim Zinciri."
  ],
  [
    "5378 sayılı Engelliler Hakkında Kanun'da tanımlanan 'Korumalı İşyeri' ne demektir?",
    [
      "Normal iş gücü piyasasına kazandırılmaları güç olan zihinsel veya ruhsal engelli bireyler için mesleki rehabilitasyon ve istihdam oluşturmak amacıyla devletçe teknik ve mali yönden desteklenen özel işyeri",
      "Polis karakolu",
      "Güvenlik şirketi",
      "Askeri fabrika"
    ],
    0,
    "Korumalı işyerleri, özellikle zihinsel ve ruhsal engelli bireylerin destekli ortamda çalışabilmesi için devlet teşvikiyle kurulan işyerleridir (En az 5 veya 8 engelli çalışan ve %50/%75 oran kurallarıyla desteklenir).",
    "Zihinsel/ruhsal engelliler için devlet destekli özel çalışma ortamı = Korumalı İşyeri."
  ],
  [
    "BM CRPD'ye göre 'Korumalı İşyerleri' (Sheltered Workshops) konusunda insan hakları savunucularının temel uyarısı nedir?",
    [
      "Korumalı işyerleri engellileri ömür boyu toplumdan ayırıp düşük ücretle kapatan bir tecrit alanına dönüşmemeli; asıl hedef açık ve kapsayıcı iş piyasasına geçiş olmalıdır!",
      "Herkes sadece korumalı işyerinde çalışmalıdır",
      "Açık iş piyasası kapatılmalıdır",
      "Hiç maaş verilmemelidir"
    ],
    0,
    "CRPD Madde 27, engellilerin ayrıştırılmış yerlerde tutulması yerine açık iş gücü piyasasında diğer çalışanlarla bir arada istihdam edilmesini öncelikli hak olarak görür.",
    "CRPD hedefi: Kapalı atölye değil, açık iş piyasasında eşit istihdam!"
  ],
  [
    "İş yerinde veya okulda engelli bir bireyin sırf engeli yüzünden alay konusu yapılması, aşağılanması ve düşmanca/onur kırıcı bir ortam yaratılması 5378 sayılı Kanun'da hangi ayrımcılık türü olarak tanımlanır?",
    ["Taciz (Engelliliğe dayalı taciz / yıldırma)", "Evrensel tasarım", "Makul düzenleme", "Maddi eşitlik"],
    0,
    "İnsan onurunu zedelemek ve gözdağı veren, aşağılayıcı veya saldırgan bir ortam yaratmak 5378 sayılı Kanun'da bir ayrımcılık biçimi olarak 'Taciz' başlığı altında yasaklanmıştır.",
    "Onur kırıcı ve aşağılayıcı ortam yaratma = Engelliliğe dayalı taciz (Ayrımcılık)."
  ],
  [
    "Türk Ceza Kanunu'nun (TCK) 122. maddesi 'Nefret ve Ayrımcılık' suçu kapsamında engellileri nasıl korur?",
    [
      "Engellilik nedeniyle bir kişiye mal veya hizmet satmayı reddeden, işe almayan veya ekonomik faaliyeti engelleyen kişilere hapis cezası öngörür",
      "Hiçbir ceza öngörmez",
      "Sadece uyarı verir",
      "Sadece trafik cezası keser"
    ],
    0,
    "TCK Madde 122, engellilik temelinde ayrımcılık yaparak kişiyi hizmetten, konut kiralamaktan veya işe girmekten mahrum bırakanlara cezai yaptırım uygular.",
    "TCK Madde 122 = Engelliliğe dayalı Nefret ve Ayrımcılık suçu."
  ],
  [
    "Türkiye'de ayrımcılık yasağının izlenmesi ve engelliliğe dayalı ayrımcılık başvurularının incelenerek idari para cezası verilebilmesi hangi kurumun görev alanındadır?",
    [
      "TİHEK (Türkiye İnsan Hakları ve Eşitlik Kurumu - 6701 sayılı Kanun) ve Kamu Denetçiliği Kurumu (Ombudsmanlık)",
      "Meteoroloji Genel Müdürlüğü",
      "Tapu Kadastro Müdürlüğü",
      "Orman Genel Müdürlüğü"
    ],
    0,
    "6701 sayılı Kanunla kurulan TİHEK (Türkiye İnsan Hakları ve Eşitlik Kurumu), engelliliğe dayalı ayrımcılık ve makul düzenleme reddi başvurularını inceler ve yaptırım uygular.",
    "Ayrımcılık başvurusu kurumu = TİHEK ve Ombudsmanlık."
  ],
  [
    "BM CRPD Madde 19'da geçen 'Kişisel Asistanlık Hizmeti' (Personal Assistance) geleneksel bakımdan nasıl ayrılır?",
    [
      "Kişisel asistanın patronu ve yönlendiricisi bizzat engelli bireyin kendisidir; nerede, ne zaman, nasıl destek alacağına engelli birey karar verir",
      "Kişisel asistan engelli bireyin amiridir",
      "Sadece hastanede verilir",
      "Bireyin dışarı çıkmasını yasaklar"
    ],
    0,
    "Bağımsız yaşam hareketinde 'Kişisel Asistan', bireyi yöneten bir bakıcı değil, bireyin kendi talimatlarıyla onun eli-kolu-gözü gibi hareket ederek topluma katılımını sağlayan profesyonel destektir.",
    "Kişisel Asistanlık = Kontrol ve karar tamamen engelli bireydedir!"
  ],
  [
    "BM CRPD Madde 25 'Sağlık' hakkı uyarınca engelli bireylere tıbbi müdahale yapılırken hangi ilke esastır?",
    [
      "Bireye hiç sormadan müdahale edilmesi",
      "Özgür ve Aydınlatılmış Onam (Bilgilendirilmiş Rıza) ilkesi ve sağlık hizmetlerine ayrımcılıksız erişim",
      "Sağlık sigortası kapsamı dışında bırakılması",
      "Sadece aile reisinin izni"
    ],
    1,
    "CRPD Madde 25, engelli bireylerin diğerleriyle eşit kalitede sağlık hizmeti almasını ve tedavilerde 'özgür ve aydınlatılmış onam'larının alınmasını şart koşar.",
    "CRPD Madde 25 (Sağlık) = Özgür ve Aydınlatılmış Onam."
  ],
  [
    "Okulda tekerlekli sandalye kullanan bir öğrencinin sınıfının 3. kattan zemin kata indirilmesi aşağıdakilerden hangisine en somut örnektir?",
    ["Makul Düzenleme", "Biçimsel Eşitlik", "Ahlaki Model", "Dolaylı Ayrımcılık"],
    0,
    "Henüz asansörü olmayan bir okulda, o öğrenci eğitim hakkından mahrum kalmasın diye sınıfın zemin kata taşınması pratik ve etkili bir 'Makul Düzenleme' örneğidir.",
    "Sınıfı zemin kata indirmek = Makul Düzenleme."
  ],
  [
    "Aşağıdakilerden hangisi BM CRPD'nin 8. maddesinde düzenlenen 'Farkındalık Yaratma (Bilinçlendirme)' yükümlülüğünün amacıdır?",
    [
      "Engellilere acıma duygusunu artırmak ve bağış toplamak",
      "Engellilere yönelik kalıp yargıları, önyargıları ve zararlı uygulamaları ortadan kaldırmak; engellilerin haklarına ve katkılarına saygıyı teşvik etmek",
      "Engellileri toplumdan gizlemek",
      "Sadece tıp fakültelerinde ders açmak"
    ],
    1,
    "CRPD Madde 8, devletlerin medya ve eğitim yoluyla sağlamcı önyargıları yıkmasını ve hak temelli toplumsal farkındalık oluşturmasını zorunlu kılar.",
    "CRPD Madde 8 = Önyargıları yıkmak için Toplumsal Farkındalık."
  ],
  [
    "BM CRPD Madde 11 'Risk Durumları ve İnsani Acil Durumlar' devlete hangi sorumluluğu yükler?",
    [
      "Deprem, sel, yangın ve savaş gibi afet/acil durumlarda engelli bireylerin korunması ve erişilebilir tahliye/yardım planlarının yapılması",
      "Afetlerde engellilerin en son kurtarılması",
      "Afet planlarından muaf tutulması",
      "Sadece sigorta şirketlerine bırakılması"
    ],
    0,
    "CRPD Madde 11, doğal afetler (deprem vb.) ve insani krizlerde engelli bireylerin güvenliğini ve erişilebilir erken uyarı/tahliye sistemlerini zorunlu tutar.",
    "CRPD Madde 11 = Deprem ve Afetlerde Engellilerin Korunması."
  ],
  [
    "BM CRPD Madde 23 'Ev ve Aileye Saygı' kapsamında aşağıdakilerden hangisi kesinlikle yasaklanmıştır?",
    [
      "Engelli bireylerin evlenmesi",
      "Engelli bireylerin zorla kısırlaştırılması ve sırf anne-babanın engelli olması nedeniyle çocuğun aileden koparılması",
      "Aile danışmanlığı verilmesi",
      "Kreş desteği sağlanması"
    ],
    1,
    "CRPD Madde 23; engellilerin evlenme, aile kurma, doğurganlıklarını koruma (zorla kısırlaştırma yasağı) ve çocuklarından sırf engellilik yüzünden ayrılmama hakkını korur.",
    "CRPD Madde 23 = Evlenme, Ebeveyn Olma Hakkı ve Zorla Kısırlaştırma Yasağı."
  ],
  [
    "BM CRPD Madde 30 engelli bireylerin hangi alanlara katılım hakkını düzenler?",
    [
      "Kültürel Yaşam, Dinlenme, Boş Zaman Aktiviteleri ve Spor (Erişilebilir müze, sinema, tiyatro, turizm ve spor tesisleri)",
      "Vergi hukuku",
      "Gümrük mevzuatı",
      "Ceza infaz"
    ],
    0,
    "İnsan onuru sadece karın doyurmaktan ibaret değildir; CRPD Madde 30 sanat, kültür, turizm, eğlence ve spora eşit erişim hakkını güvenceye alır.",
    "CRPD Madde 30 = Kültür, Sanat, Turizm ve Spora Katılım."
  ],
  [
    "Bir sosyal hizmet uzmanının engelli danışanına haklarını anlatması ve kurumların ayrımcı uygulamalarına karşı danışanıyla birlikte itiraz dilekçesi hazırlaması hangi mesleki roldür?",
    [
      "Hak Savunuculuğu (Advocacy) ve Güçlendirme Rolü",
      "Tıbbi Tedavi Rolü",
      "Denetçi/Polis Rolü",
      "Hayırsever Bağışçı Rolü"
    ],
    0,
    "Sosyal hizmet uzmanı, insan hakları modelinde danışanının haklarını öğrenmesini sağlayan ve sistemdeki engellere karşı onunla birlikte mücadele eden bir 'Savunucu (Advocate)'dur.",
    "Haksızlığa karşı danışanla birlikte mücadele = Hak Savunuculuğu (Advocacy)."
  ],
  [
    "BM CRPD Madde 2'ye göre 'İletişim' kavramı neleri kapsar?",
    [
      "Sadece sesli konuşmayı",
      "Konuşma dili yanında işaret dillerini, Braille alfabesini, dokunsal iletişimi, iri puntolu yazıyı ve erişilebilir multimedya/bilgi teknolojilerini",
      "Sadece mektup yazmayı",
      "Sadece telefon görüşmesini"
    ],
    1,
    "CRPD Madde 2, işaret dilini, Braille'i, alternatif/destekleyici iletişim biçimlerini ve kolay okunur formatları resmi iletişim araçları olarak tanır.",
    "CRPD İletişim tanımı = İşaret dili + Braille + Alternatif iletişim + Dijital erişim."
  ],
  [
    "BM CRPD Madde 20 'Kişisel Hareketlilik (Personal Mobility)' devlete ne görev yükler?",
    [
      "Engellilerin sokağa çıkmasını kısıtlamayı",
      "Tekerlekli sandalye, protez, ortez, beyaz baston ve rehber hayvan gibi hareketlilik araçlarına kaliteli ve karşılanabilir maliyetle erişimi sağlamayı",
      "Sadece uçak bileti vermeyi",
      "Ehliyetleri iptal etmeyi"
    ],
    1,
    "CRPD Madde 20, bireyin istediği zamanda ve istediği şekilde bağımsız hareket edebilmesi için yardımcı cihaz ve teknolojilere kolay erişimini güvenceye alır.",
    "CRPD Madde 20 = Kişisel Hareketlilik ve yardımcı cihazlara erişim."
  ],
  [
    "Bir kamu kurumunun 'Bütçemiz yok, bu yüzden engelli çalışanımıza ekran okuyucu program alamayız' bahanesi ne zaman geçersizdir?",
    [
      "Kurumun bütçesine ve büyüklüğüne göre bu harcama 'orantısız ve aşırı bir yük' oluşturmuyorsa makul düzenleme yapmak zorunludur; reddedemez!",
      "Her zaman geçerlidir",
      "Sadece kış aylarında geçerlidir",
      "Hiçbir kurum makul düzenleme yapmak zorunda değildir"
    ],
    0,
    "Makul düzenleme yükümlülüğünün tek sınırı 'orantısız/aşırı yük' (undue burden) kriteridir; kamu kurumları ve büyük işverenler basit ve karşılanabilir uyarlamaları bütçe bahanesiyle reddedemez.",
    "Aşırı yük oluşturmayan uyarlamayı reddetmek = Yasaya aykırı ayrımcılık!"
  ],
  [
    "5378 sayılı Engelliler Hakkında Kanun'a göre engelliliğe dayalı ayrımcılık türleri arasında aşağıdakilerden hangisi sayılmıştır?",
    [
      "Doğrudan ayrımcılık, Dolaylı ayrımcılık, Çoklu ayrımcılık, Makul düzenlemenin yapılmaması ve Taciz",
      "Sadece doğrudan ayrımcılık",
      "Sadece fiziksel şiddet",
      "Sadece maaş kesintisi"
    ],
    0,
    "5378 sayılı Kanun (Madde 4/A), doğrudan ayrımcılık, dolaylı ayrımcılık, çoklu ayrımcılık, taciz ve makul düzenlemenin reddedilmesini açıkça yasaklamıştır.",
    "5378 Yasaklı Ayrımcılıklar = Doğrudan + Dolaylı + Çoklu + Taciz + Makul Düzenleme Reddi."
  ],
  [
    "Kapsayıcı Eğitim'de (Inclusive Education) temel felsefe aşağıdakilerden hangisidir?",
    [
      "Çocuk okula uyum sağlayamıyorsa okuldan atılır",
      "Çocuk okula değil, OKUL ÇOCUĞA UYUM SAĞLAR (Müfredat, materyal ve fiziksel ortam her çocuğun ihtiyacına göre esnetilir)",
      "Tüm engelli çocuklar ayrı binalarda toplanır",
      "Engelli çocuklara karne verilmez"
    ],
    1,
    "Eski anlayışta çocuk standart okula uymaya zorlanırdı; Kapsayıcı Eğitimde ise okul tüm çocukların farklı öğrenme ihtiyaçlarına göre kendini dönüştürür.",
    "Kapsayıcı Eğitim şifresi = Çocuk okula değil, OKUL ÇOCUĞA UYAR!"
  ],
  [
    "BM CRPD Madde 31 'İstatistik ve Veri Toplama' neden insan hakları açısından çok önemlidir?",
    [
      "Görünmeyen sorun çözülemez! Devletin engellilerin karşılaştığı engelleri aşacak doğru politikalar üretebilmesi için etik ve ayrıştırılmış güncel veri toplaması şarttır",
      "Sadece fişleme yapmak için",
      "Vergi toplamak için",
      "Hiçbir önemi yoktur"
    ],
    0,
    "Doğru ve güncel istatistik olmadan kaç kişinin hangi desteğe ihtiyacı olduğu bilinemez ve hak temelli sosyal politika planlanamaz.",
    "CRPD Madde 31 = Hak temelli politika için doğru istatistik ve veri toplama."
  ],
  [
    "BM CRPD Madde 33 uyarınca devletlerin sözleşmenin uygulanmasını izlemek üzere ulusal düzeyde kurdukları mekanizmalarda kimlerin yer alması zorunludur?",
    [
      "Sivil toplumun, özellikle engelli bireylerin ve onları temsil eden örgütlerin izleme sürecine tam katılımı zorunludur",
      "Sadece askeri yetkililerin",
      "Sadece banka müdürlerinin",
      "Sadece inşaat mühendislerinin"
    ],
    0,
    "CRPD Madde 33, ulusal izleme ve denetim mekanizmalarında engelli bireylerin ve örgütlerinin bizzat yer almasını şart koşar.",
    "CRPD Madde 33 = Ulusal izlemede engelli örgütlerinin katılımı."
  ],
  [
    "Aşağıdakilerden hangisi 'Hak Temelli Sosyal Hizmet Uygulaması'nın (Rights-Based Social Work) en belirgin özelliğidir?",
    [
      "Danışana lütuf ve merhametle yaklaşmak",
      "Danışanın ihtiyaçlarını ulusal ve uluslararası hukuk metinleriyle (CRPD, Anayasa, 5378) güvence altına alınmış meşru insan hakları talebi olarak savunmak",
      "Danışanı sessiz kalmaya ikna etmek",
      "Sadece erzak kolisi dağıtmak"
    ],
    1,
    "Hak temelli sosyal hizmet, ihtiyaçları birer 'sadaka talebi' olmaktan çıkarıp Anayasa ve BM Sözleşmesi'ne dayanan 'yasal hak' düzeyinde savunur.",
    "İhtiyacı sadaka değil yasal hak olarak savunmak = Hak Temelli Sosyal Hizmet."
  ],
  [
    "Türkiye'de engelli bireylerin genel eğitim okullarında akranlarıyla birlikte eğitim alırken ihtiyaç duydukları bireyselleştirilmiş eğitim planının kısaltması nedir?",
    ["BEP (Bireyselleştirilmiş Eğitim Programı)", "ÇÖZGER", "EKPSS", "ICF"],
    0,
    "Kaynaştırma/kapsayıcı eğitim öğrencileri için okulda hazırlanan ve öğrencinin hedeflerini/uyarlamalarını içeren plana BEP (Bireyselleştirilmiş Eğitim Programı) denir.",
    "BEP = Bireyselleştirilmiş Eğitim Programı."
  ],
  [
    "Özel eğitime ihtiyacı olan bireylerin eğitsel değerlendirme ve tanılamasını yaparak uygun eğitim ortamına yönlendiren resmi kurum hangisidir?",
    ["RAM (Rehberlik ve Araştırma Merkezi - MEB)", "SGK", "İŞKUR", "TÜİK"],
    0,
    "Hastaneden alınan tıbbi raporun ardından eğitsel değerlendirme ve yerleştirme kararı Milli Eğitim Bakanlığı'na bağlı RAM (Rehberlik ve Araştırma Merkezi) tarafından verilir.",
    "Tıbbi tanı = Hastane | Eğitsel tanı ve yönlendirme = RAM."
  ]
];

const UNIT_4_RAW: RawQ[] = [
  [
    "Fiziksel engellilik kendi içinde 3 ana tıbbi gruba ayrıldığında; uzuv kaybı (ampütasyon), doğuştan kalça çıkığı ve skolyoz hangi grupta yer alır?",
    [
      "Ortopedik (Kas-İskelet Sistemi) Bozuklukları",
      "Nörolojik (Merkezi Sinir Sistemi) Bozuklukları",
      "İlerleyici Nöromüsküler Hastalıklar",
      "İşitme Bozuklukları"
    ],
    0,
    "Kemik, eklem ve uzuv yapısını doğrudan etkileyen ampütasyon, kalça çıkığı ve omurga eğriliği (skolyoz) 'Ortopedik Bozukluklar' grubundadır.",
    "Ampütasyon + Kalça çıkığı + Skolyoz = Ortopedik Bozukluk."
  ],
  [
    "Omuriliğin sırt veya bel (torakal/lomber, örn. T10) seviyesinden yaralanması sonucu kolların sağlam kalıp belden aşağısının (bacakların) felç olmasına ne ad verilir?",
    ["Tetrapleji (Kuadripleji)", "Parapleji", "Hemipleji", "Disleksi"],
    1,
    "Parapleji; omuriliğin sırt/bel düzeyindeki hasarı sonucu her iki alt ekstremitenin (bacakların) ve gövde alt kısmının felç olmasıdır; kollar sağlamdır.",
    "Belden aşağı felç (Kollar sağlam, bacaklar etkilenmiş) = Parapleji."
  ],
  [
    "Omuriliğin boyun (servikal, C1-C8) seviyesinden yaralanması sonucu hem kolların hem de bacakların (4 uzvun birden) etkilenmesine ne ad verilir?",
    ["Parapleji", "Tetrapleji / Kuadripleji", "Monopleji", "Afazi"],
    1,
    "Tetra / Kuadri 'dört' demektir; boyun omuriliği yaralanmasında hem iki kol hem iki bacak (4 uzuv) etkilenir.",
    "Boyundan aşağı 4 uzuv (Kollar + Bacaklar) felci = Tetrapleji / Kuadripleji."
  ],
  [
    "Beyin damar tıkanıklığı (inme/felç) veya beyin hasarı sonucunda vücudun sadece SAĞ yarısının (sağ kol ve sağ bacak) veya sadece SOL yarısının felç olmasına ne denir?",
    ["Parapleji", "Hemipleji (Yarım felç)", "Tetrapleji", "Dipleji"],
    1,
    "Hemi 'yarım' demektir; vücudun dikey olarak sağ veya sol yarısının felç olmasına 'Hemipleji' denir.",
    "Vücudun sağ veya sol yarısının felci = Hemipleji."
  ],
  [
    "Gelişmekte olan beynin doğum öncesi, doğum sırası veya doğum sonrası erken dönemde hasar görmesiyle oluşan, İLERLEYİCİ OLMAYAN (kötüleşmeyen) ancak kalıcı hareket ve duruş bozukluğuna ne denir?",
    ["Serebral Palsi (SP - Beyin Felci)", "Duchenne Musküler Distrofi (DMD)", "SMA", "Multipl Skleroz (MS)"],
    0,
    "Serebral Palsi (SP) sınavların en önemli bilgisidir: Beyindeki lezyon İLERLEYİCİ DEĞİLDİR (zamanla büyüyüp kötüleşmez) ve bulaşıcı değildir; erken rehabilitasyonla işlevsellik çok artar!",
    "Sınav Bankosu: Serebral Palsi (SP) = İlerleyici OLMAYAN beyin kaynaklı hareket/duruş bozukluğu!"
  ],
  [
    "Aşağıdakilerden hangisi zamanla kas güçsüzlüğünün arttığı 'İlerleyici (Progresif) Nöromüsküler Hastalıklar' arasında yer alır?",
    [
      "Duchenne Musküler Distrofi (DMD), SMA (Spinal Musküler Atrofi) ve MS (Multipl Skleroz)",
      "Serebral Palsi",
      "Doğuştan tek parmak eksikliği",
      "Renk körlüğü"
    ],
    0,
    "Serebral Palsi ilerleyici değilken; DMD (kas erimesi), SMA ve MS zamanla seyri değişebilen/ilerleyebilen nöromüsküler ve nörolojik hastalıklardır.",
    "DMD, SMA, MS = İlerleyici (Progresif) nöromüsküler hastalıklar."
  ],
  [
    "Anne karnında omurga kemiklerinin tam kapanmaması sonucu omurilik ve sinirlerin dışarı doğru kesecik oluşturmasıyla doğuştan gelişen fiziksel engel nedir?",
    ["Spina Bifida (Açık Omurga)", "Fetal Alkol Sendromu", "Otizm", "Odyogram"],
    0,
    "Spina Bifida (ayrık/açık omurga), gebelikte folik asit eksikliğiyle de ilişkili olan ve bacaklarda felç ile mesane/bağırsak sorunlarına yol açabilen doğuştan nörolojik bir durumdur.",
    "Doğuştan açık omurga = Spina Bifida."
  ],
  [
    "Dünya Sağlık Örgütü'nün (DSÖ) 2001 yılında kabul ettiği ve engelliliği 'Biyopsikososyal' çerçevede sınıflandıran sistemin adı ve kısaltması nedir?",
    [
      "ICF (İşlevsellik, Yetiyitimi ve Sağlığın Uluslararası Sınıflandırması - 2001)",
      "ICIDH (1980)",
      "DSM-5",
      "ÇÖZGER"
    ],
    0,
    "DSÖ 2001 yılında eski ICIDH'yi bırakarak 'ICF (International Classification of Functioning, Disability and Health)' sistemine geçmiştir.",
    "DSÖ 2001 Biyopsikososyal Sınıflandırma = ICF."
  ],
  [
    "DSÖ'nün ICF (2001) sınıflandırmasında 'İşlevsellik ve Yetiyitimi' bölümünün 3 temel bileşeni nelerdir?",
    [
      "1. Vücut İşlevleri ve Yapıları, 2. Etkinlik (Aktivite), 3. Katılım (Participation)",
      "Mikro, Mezo, Makro",
      "Özel, Kamu, Memur",
      "Ahlaki, Tıbbi, Sosyal"
    ],
    0,
    "ICF'de işlevsellik 3 boyutta ele alınır: Vücut yapı/işlevleri (organ düzeyi), Etkinlik (bireyin eylemi) ve Katılım (toplumsal yaşamda yer alma).",
    "ICF 3 Boyut = Vücut Yapısı/İşlevi + Etkinlik + Katılım."
  ],
  [
    "DSÖ ICF (2001) modelini eski 1980 modelinden ayıran ve 'Bağlamsal Faktörler' başlığı altında modele eklenen iki kritik unsur nedir?",
    [
      "Çevresel Faktörler (Kolaylaştırıcılar veya Engeller) ve Kişisel Faktörler",
      "Sadece genetik faktörler",
      "Sadece ilaç dozları",
      "Astrolojik faktörler"
    ],
    0,
    "ICF'nin en büyük devrimi 'Çevresel Faktörleri' (rampa, teknoloji, aile tutumu, yasalar) ve 'Kişisel Faktörleri' (yaş, cinsiyet, baş etme gücü) denkleme dahil etmesidir.",
    "ICF Bağlamsal Faktörler = Çevresel Faktörler + Kişisel Faktörler."
  ],
  [
    "Birleşmiş Milletler İstatistik Komisyonu bünyesinde ülkeler arasında karşılaştırılabilir engellilik verisi toplamak için 6 temel işlev sorusu geliştiren grubun adı nedir?",
    [
      "Washington Engellilik İstatistikleri Grubu (Washington Group)",
      "Cenevre Grubu",
      "Londra Grubu",
      "Balthazard Grubu"
    ],
    0,
    "Washington Grubu Kısa Soru Seti; kişiye 'Engelli misiniz?' diye sormak yerine 6 alanda (Görme, İşitme, Yürüme/Merdiven, Hatırlama/Odaklanma, Öz bakım, İletişim) zorluk derecesini sorar.",
    "6 işlev sorusuyla uluslararası istatistik = Washington Grubu."
  ],
  [
    "Washington Grubu'nun 6 temel sorusu hangi alanlardaki işlev zorluğunu ölçer?",
    [
      "Görme, İşitme, Yürüme/Merdiven çıkma, Hatırlama/Konsantrasyon, Öz bakım (yıkanma/giyinme) ve İletişim",
      "Gelir, Vergi, Tapu, Araç, Emeklilik ve Sigorta",
      "Okuma, Yazma, Resim, Müzik, Spor ve Yabancı dil",
      "Kan grubu, Boy, Kilo, Yaş, Nabız ve Tansiyon"
    ],
    0,
    "Washington Grubu 6 sorusu: 1. Görme, 2. İşitme, 3. Yürüme, 4. Hatırlama/Odaklanma, 5. Öz bakım, 6. İletişim.",
    "Washington 6 Soru = Görme, İşitme, Yürüme, Hatırlama, Öz bakım, İletişim."
  ],
  [
    "Türkiye'de 2011 Nüfus ve Konut Araştırması sonuçlarına göre (en az bir işlevde çok zorlanan veya hiç yapamayan, 3+ yaş) engellilik oranı yaklaşık yüzde kaçtır?",
    ["%1,2", "%6,9 (Yaklaşık 4,8 - 5 milyon kişi)", "%25", "%50"],
    1,
    "2011 Nüfus ve Konut Araştırması'na göre Türkiye'de en az bir işlevde ciddi güçlük yaşayan nüfus oranı %6,9'dur (yaklaşık 4,87 milyon kişi).",
    "2011 Türkiye Araştırması engellilik oranı = %6,9 (~5 milyon kişi)."
  ],
  [
    "Aile ve Sosyal Hizmetler Bakanlığı 'Ulusal Engelli Veri Sistemi'ne kayıtlı (sağlık raporu olan) engelli bireyler arasında EN YAYGIN görülen engel grubu hangisidir?",
    [
      "Süreğen (Kronik) Hastalıklar (1. sırada) ve ardından Ortopedik Engellilik",
      "Sadece Dil ve Konuşma engeli",
      "Kör-sağırlık",
      "Otizm"
    ],
    0,
    "Türkiye istatistiklerinde en yüksek oran %40'ın üzerindeki payla 'Süreğen (Kronik) Hastalıklar' grubundadır; onu Ortopedik ve Zihinsel engellilik takip eder.",
    "Türkiye'de 1. sıradaki en yaygın engel grubu = Süreğen (Kronik) Hastalıklar."
  ],
  [
    "20 Şubat 2019 tarihli yönetmelikle 18 yaşını doldurmamış çocuklar için verilen sağlık kurulu raporunun adı nedir?",
    [
      "ÇÖZGER (Çocuklar İçin Özel Gereksinim Raporu)",
      "Erişkin Engellilik Raporu",
      "Maluliyet Raporu",
      "Balthazard Raporu"
    ],
    0,
    "18 yaş altı çocuklara artık eski '%40 özürlü' raporu yerine gelişimsel ihtiyaçlarını esas alan 'ÇÖZGER (Çocuklar İçin Özel Gereksinim Raporu)' verilir.",
    "18 yaş altı çocuk raporu = ÇÖZGER."
  ],
  [
    "ÇÖZGER (Çocuklar İçin Özel Gereksinim Raporu) ile ilgili aşağıdaki bilgilerden hangisi DOĞRUDUR?",
    [
      "Çocuğa %40, %70 gibi yüzde sayılar verilir",
      "Çocukları etiketlememek için yüzde (%) oranı yerine 'Özel Koşul Gereksinimi Vardır (ÖKGV)' gibi gereksinim düzeyleri kullanılır!",
      "Sadece 65 yaş üstüne verilir",
      "Sadece ehliyet almak için kullanılır"
    ],
    1,
    "ÇÖZGER'de yüzde oranlar kaldırılmış, yerine 'Özel Gereksinim Var', 'İleri Düzeyde Özel Gereksinim Var' ve en ağır düzey için 'Özel Koşul Gereksinimi Vardır (ÖKGV)' ifadeleri getirilmiştir.",
    "ÇÖZGER'de % sayı yerine -> 'Özel Koşul Gereksinimi Vardır (ÖKGV)' ibaresi!"
  ],
  [
    "ÇÖZGER raporundaki hangi ibare, yetişkinlerdeki 'Tam Bağımlı (Eski adıyla Ağır Engelli)' ibaresine denk kabul edilerek evde bakım yardımından yararlanmayı sağlar?",
    [
      "ÖKGV (Özel Koşul Gereksinimi Vardır)",
      "Özel gereksinim yoktur",
      "Hafif düzey",
      "Geçici rapor"
    ],
    0,
    "ÇÖZGER'de en üst destek düzeyi olan 'ÖKGV (Özel Koşul Gereksinimi Vardır)' ibaresi, evde bakım yardımı açısından yetişkinlerdeki 'Tam Bağımlı' ibaresine eşdeğerdir.",
    "ÇÖZGER 'ÖKGV' = Yetişkin raporundaki 'Tam Bağımlı' (Evde bakım şartı)."
  ],
  [
    "18 yaş üstü bireyler için düzenlenen 'Erişkinler İçin Engellilik Sağlık Kurulu Raporu'nda eski 'Ağır Engelli: Evet/Hayır' ibaresinin yerine hangi kavram getirilmiştir?",
    [
      "Bağımsız / Kısmi Bağımlı / Tam Bağımlı",
      "Sakat / Sağlam",
      "Çürük / Elverişli",
      "ÖKGV"
    ],
    0,
    "2019 yönetmeliğiyle yetişkin raporlarındaki damgalayıcı 'Ağır Engelli' ifadesi kaldırılmış; yerine işlevselliği gösteren 'Bağımsız, Kısmi Bağımlı ve Tam Bağımlı' ifadeleri getirilmiştir.",
    "Erişkin raporunda Ağır Engelli yerine -> 'Tam Bağımlı' ibaresi."
  ],
  [
    "Birden fazla engel veya hastalığı olan bir yetişkinin (örneğin %30 ortopedik + %20 görme) toplam engellilik oranı hesaplanırken oranlar doğrudan toplanmaz; hangi formül kullanılır?",
    ["Balthazard Formülü", "Snellen Formülü", "Pisagor Teoremi", "Odyogram Formülü"],
    0,
    "Birden fazla yeti kaybı olduğunda kalan sağlam kapasite üzerinden hesaplama yapan 'Balthazard Formülü' kullanılır (Örn: %30 + %20 doğrudan %50 etmez; %30 + kalan %70'in %20'si (%14) = %44 eder).",
    "Çoklu engel oran hesaplama formülü = Balthazard Formülü."
  ],
  [
    "4857 sayılı İş Kanunu'nun 30. maddesine göre, 50 veya daha fazla işçi çalıştıran ÖZEL SEKTÖR işyerlerinde çalıştırılması zorunlu olan engelli işçi kotası yüzde kaçtır?",
    ["%1", "%3", "%4", "%10"],
    1,
    "4857 sayılı İş Kanunu Madde 30 uyarınca 50+ işçi çalıştıran ÖZEL SEKTÖR işyerleri %3, KAMU işyerleri ise %4 oranında engelli işçi çalıştırmak zorundadır.",
    "4857 İş Kanunu (50+ İşçi): Özel Sektör = %3 | Kamu İşçi = %4."
  ],
  [
    "4857 sayılı İş Kanunu'na göre 50 veya daha fazla işçi çalıştıran KAMU işyerlerinde engelli işçi çalıştırma zorunluluğu (kotası) yüzde kaçtır?",
    ["%2", "%3", "%4", "%6"],
    2,
    "Kamu işyerlerinde (işçi statüsünde) engelli kotası %4'tür (Ayrıca %2 eski hükümlü/terör mağduru kotası vardır).",
    "Kamu işyeri engelli işçi kotası (4857) = %4."
  ],
  [
    "657 sayılı Devlet Memurları Kanunu'nun 53. maddesine göre kamu kurum ve kuruluşlarının toplam dolu kadro sayısının yüzde kaçı oranında engelli memur (EKPSS ile) çalıştırma zorunluluğu vardır?",
    ["%1", "%3", "%4", "%5"],
    1,
    "657 sayılı DMK'ya göre devlet memurluğunda engelli kotası %3'tür ve alımlar EKPSS (Engelli Kamu Personeli Seçme Sınavı) veya kurayla yapılır.",
    "657 Devlet Memuru engelli kotası (EKPSS) = %3."
  ],
  [
    "2022 sayılı Kanun kapsamında verilen 'Engelli Aylığı'ndan yararlanabilmek için (18 yaş üstü) hane içinde kişi başına düşen ortalama aylık gelir sınırı nedir?",
    [
      "Net asgari ücretin 1/3'ünden (üçte birinden) az olması",
      "Asgari ücretin 2 katı olması",
      "Asgari ücretin 2/3'ünden az olması",
      "Gelir şartı yoktur"
    ],
    0,
    "2022 sayılı Kanun kapsamındaki engelli aylıklarında (%40-%69 ve %70+ oranlı aylıklarda) hane içi kişi başı gelirin net asgari ücretin 1/3'ünden az olması şartı aranır.",
    "2022 Engelli Aylığı gelir sınırı = Asgari ücretin 1/3'ünden az."
  ],
  [
    "2828 sayılı Sosyal Hizmetler Kanunu (Ek 7. Madde) kapsamında verilen 'Evde Bakım Yardımı'ndan yararlanabilmek için gereken 2 temel şart nedir?",
    [
      "1. Raporda 'Tam Bağımlı' (Çocuklarda ÖKGV) yazması, 2. Hane içi kişi başı gelirin net asgari ücretin 2/3'ünden (üçte ikisinden) az olması",
      "Sadece %40 rapor olması",
      "Asgari ücretin 1/3'ünden az gelir olması",
      "Emekli olunması"
    ],
    0,
    "Evde Bakım Yardımı için iki kritik sınav şartı vardır: 1) Sağlık raporunda 'Tam Bağımlı' (ÇÖZGER'de ÖKGV) ibaresi + günlük yaşamda başkasının bakımına muhtaçlık, 2) Kişi başı gelirin asgari ücretin 2/3'ünden az olması.",
    "2828 Evde Bakım Şifresi = 'Tam Bağımlı (ÖKGV)' + Gelir < 2/3 Asgari Ücret!"
  ],
  [
    "Multidisipliner rehabilitasyon ekibinde; bireyin kas gücünü, eklem hareket açıklığını, dengesini ve yürüme becerisini egzersizlerle geliştiren uzman kimdir?",
    ["Fizyoterapist", "Ergoterapist (İş ve Uğraşı Terapisti)", "Sosyal Hizmet Uzmanı", "Odyolog"],
    0,
    "Fizyoterapist; kaba motor hareketler, kas kuvveti, denge, mobilite ve fiziksel egzersiz programlarından sorumludur.",
    "Kas gücü, denge ve yürüme egzersizi = Fizyoterapist."
  ],
  [
    "Multidisipliner ekipte; bireyin yemek yeme, giyinme, banyo yapma gibi 'günlük yaşam aktivitelerinde' bağımsızlaşmasını sağlayan ve ev/iş yeri ortamını bireye göre uyarlayan uzman kimdir?",
    ["Fizyoterapist", "Ergoterapist (İş ve Uğraşı Terapisti)", "Ortopedi Cerrahı", "Psikiyatrist"],
    1,
    "Ergoterapist (İş ve Uğraşı Terapisti); ince motor beceriler, günlük yaşam aktiviteleri (giyinme, yemek, banyo) ve ev/okul/iş yeri ergonomik çevre uyarlamaları yapar.",
    "Günlük yaşam becerileri + Ev içi banyo/mutfak uyarlaması = Ergoterapist."
  ],
  [
    "Vücutta tamamen kaybedilen bir uzvun (örneğin kesilen bacağın veya kolun) yerine takılan yapay uzva ne ad verilir?",
    ["Ortez", "Protez", "Koklear", "Braille"],
    1,
    "Kaybedilen (ampüte edilen) organın/uzvun yerini tutan yapay cihaza 'Protez' denir.",
    "Olmayan uzvun yerine takılan yapay uzuv = Protez."
  ],
  [
    "Vücutta mevcut olan ancak zayıf, felçli veya şekil bozukluğu olan bir uzvu desteklemek, korumak veya düzeltmek için dışarıdan takılan yardımcı cihaza (örneğin yürüme cihazı/korse/atel) ne denir?",
    ["Protez", "Ortez", "Odyometre", "Snellen"],
    1,
    "Var olan uzvu destekleyen, sabitleyen veya işlevini kolaylaştıran cihazlara 'Ortez' denir (Örn: AFO ayak bileği ortezi, skolyoz korsesi).",
    "Var olan zayıf uzvu destekleyen cihaz = Ortez."
  ],
  [
    "Ders notlarındaki 'Mert Vakası'nda (24 yaşında, motosiklet kazası sonucu T10 Parapleji olan, asansörsüz 3. katta yaşayan ve babasının 'Artık bize yük olur, bakım kurumuna yatıralım' dediği genç) sosyal hizmet uzmanının MİKRO düzey müdahalesi nedir?",
    [
      "Belediye meclisinde imar kanununu değiştirmek",
      "Mert ile travma/yas danışmanlığı yapmak, babasının aşırı korumacı/kuruma kapatmacı tutumunu değiştirmek ve ev içi banyo/kapı düzenlemesini planlamak",
      "Uluslararası sözleşme imzalamak",
      "Genel nüfus sayımı yapmak"
    ],
    1,
    "Mikro düzey müdahale doğrudan Mert, ailesi (babasının paternalist/dışlayıcı tutumu) ve ev ortamı üzerinde yapılan psikososyal destek ve güçlendirme çalışmasıdır.",
    "Mert Vakası Mikro Müdahale = Bireysel danışmanlık + Aile tutumu + Ev içi düzenleme."
  ],
  [
    "Mert Vakası'nda sosyal hizmet uzmanının Mert'i 'Omurilik Felçlileri Derneği'ndeki akran destek grubuyla buluşturması, İŞKUR meslek kursuna ve belediyenin engelsiz ulaşım birimine bağlaması hangi düzey müdahaledir?",
    ["Mikro düzey", "Mezzo (Mezo) düzey", "Biyolojik düzey", "Genetik düzey"],
    1,
    "Bireyi akran gruplarıyla (grup çalışması) ve yerel kurumlar/hizmet ağlarıyla buluşturmak Mezzo (Mezo) düzey sosyal hizmet müdahalesidir.",
    "Mert Vakası Mezzo Müdahale = Akran destek grubu + Kurumlar arası bağlantı."
  ]
];

const UNIT_4_EXTRA: RawQ[] = [
  [
    "Mert Vakası'nda sosyal hizmet uzmanının mahalledeki erişimsiz kaldırımlar için yerel yönetim nezdinde savunuculuk yapması ve EKPSS/istihdam politikalarını harekete geçirmesi hangi düzey müdahaledir?",
    ["Mikro düzey", "Mezzo düzey", "Makro düzey müdahale", "Tıbbi müdahale"],
    2,
    "Toplumsal savunuculuk, yerel/ulusal politika geliştirme ve yapısal erişilebilirlik mücadelesi Makro düzey sosyal hizmet müdahalesidir.",
    "Mert Vakası Makro Müdahale = Hak savunuculuğu + Politika & Erişilebilirlik."
  ],
  [
    "Sonradan (örneğin 24 yaşında trafik kazasıyla) engelli olan bir bireyin yaşadığı psikolojik uyum sürecinde ilk karşılaşması muhtemel aşamalar nelerdir?",
    [
      "Şok, İnkâr, Öfke/Pazarlık, Depresyon/Yas ve ardından Kabullenme/Yeniden Uyum",
      "Anında mutluluk",
      "Hiçbir duygusal tepki vermeme",
      "Sadece unutkanlık"
    ],
    0,
    "Edinilmiş (sonradan kazanılmış) engellilikte birey önceki beden imajını ve alışkanlıklarını kaybettiği için bir yas/travma süreci (Şok -> İnkâr -> Öfke -> Depresyon -> Uyum) yaşar.",
    "Sonradan engellilik psikolojisi = Şok, İnkâr, Öfke, Yas ve Yeniden Uyum."
  ],
  [
    "Doğuştan engelli olmak ile sonradan (yetişkinlikte kaza/hastalıkla) engelli olmak arasındaki en önemli psikososyal fark nedir?",
    [
      "Hiçbir fark yoktur",
      "Doğuştan engelli birey kimliğini bu durumla büyüyerek geliştirirken; sonradan engelli olan birey kurulu işini, rollerini ve alışkın olduğu beden imajını aniden kaybetmenin travmasını yaşar",
      "Sonradan engelli olanlar hiç üzülmez",
      "Doğuştan engelli olanlar hiç okula gidemez"
    ],
    1,
    "Sonradan gelişen engellilikte birey 'engelsiz dünyadaki statüsünü ve beden algısını' aniden kaybettiği için rol kaybı ve kimlik krizi daha keskin yaşanır.",
    "Sonradan engellilik = Ani rol, statü ve beden imajı kaybı travması."
  ],
  [
    "Engelli bir çocuğun dünyaya gelmesiyle birlikte ailede (anne-babada) yaşanan 'Hayal edilen sağlıklı bebeğin kaybı' sürecine sosyal hizmet literatüründe ne denir?",
    [
      "Kronik Keder / Yas Süreci (Şok, İnkâr, Suçluluk, Öfke, Pazarlık ve Uyum)",
      "Evrensel Tasarım",
      "Makul Düzenleme",
      "Kurumsallaşma"
    ],
    0,
    "Aileler de tıpkı birey gibi başlangıçta şok, inkâr ('Doktor yanlış gördü'), suçluluk ('Benim yüzümden mi oldu?') ve öfke aşamalarından geçerek kabullenme/uyum aşamasına ulaşır.",
    "Ailenin uyum süreci = Şok -> İnkâr -> Suçluluk/Öfke -> Kabullenme."
  ],
  [
    "Engelli bireye uzun yıllar boyunca tek başına ve dinlenmeden bakım veren aile üyesinde (genellikle annede) görülen fiziksel yorgunluk, tükenmişlik, sosyal yalnızlaşma ve ekonomik zorluğa ne ad verilir?",
    ["Bakım Veren Yükü (Caregiver Burden) ve Tükenmişlik", "Pozitif Ayrımcılık", "Crip Gururu", "Odyoloji"],
    0,
    "Bakım Veren Yükü; bakım verenin kendi sağlığını, işini ve sosyal hayatını kaybetmesiyle oluşan çok boyutlu (fiziksel, duygusal, sosyal, ekonomik) zorlanmadır.",
    "Bakım verenin tükenmesi ve yalnızlaşması = Bakım Veren Yükü."
  ],
  [
    "Aileye ve bakım verene nefes aldırmak, annenin hastaneye gidebilmesini veya dinlenebilmesini sağlamak amacıyla engelli bireyin yılda belirli bir süre (örneğin 30 gün) devlet kurumlarında ücretsiz misafir edilmesine ne denir?",
    [
      "Geçici ve Süreli Bakım / Mola Bakımı (Respite Care)",
      "Kalıcı kuruma kapatma",
      "Öjeni",
      "Vesayet altına alma"
    ],
    0,
    "Geçici/Süreli Bakım (Respite Care / Mola Bakımı), bakım verenin tükenmişliğini önlemek için sunulan çok önemli bir destekleyici sosyal hizmet modelidir.",
    "Bakım verene nefes aldıran geçici bakım = Mola Bakımı (Respite Care)."
  ],
  [
    "Türkiye'de 2022 sayılı Kanun kapsamında 18 yaş üstü engellilere verilen aylıklar hangi iki engel oranı dilimine göre farklı miktarlarda ödenir?",
    [
      "1) %40 - %69 arası Engelli Aylığı, 2) %70 ve üzeri Başkasının Yardımı Olmaksızın Hayatını Devam Ettiremeyecek Derecede Engelli Aylığı",
      "%10 ve %20",
      "%25 ve %35",
      "%80 ve %95"
    ],
    0,
    "2022 sayılı Kanun'da iki kademe vardır: %40-%69 arası engelli aylığı ve %70 ve üzeri ağır/tam bağımlı engelli aylığı (ayrıca 18 yaş altı engelli yakını aylığı).",
    "2022 Aylığı 2 Kademe = %40-%69 arası VE %70 ve üzeri."
  ],
  [
    "Engellilik alanında mesleki etik ve insan haklarına UYGUN OLAN dil kullanımı aşağıdakilerden hangisidir?",
    [
      "'Tekerlekli sandalyeye mahkûm / bağlı hasta'",
      "'Tekerlekli sandalye kullanan birey' veya 'Omurilik yaralanması olan birey'",
      "'Özürlü ve sakat vatandaş'",
      "'Normal olmayan kişiler'"
    ],
    1,
    "Önce Birey Dili (Person-First Language) ve hak temelli dilde 'sandalyeye mahkûm' denmez; çünkü tekerlekli sandalye cezaevi değil, bağımsız hareket aracıdır.",
    "Doğru etik dil = 'Tekerlekli sandalye kullanan birey' (Mahkûm/bağlı denmez!)."
  ],
  [
    "Sağlık kurulu raporunda engellilik oranı %90 ve üzerinde (veya özel tertibat şartıyla) olan bireylere tanınan ulaşım hakkı kolaylığı nedir?",
    [
      "ÖTV (Özel Tüketim Vergisi) ve MTV (Motorlu Taşıtlar Vergisi) muafiyetiyle araç alımı",
      "Ücretsiz uçak sahipliği",
      "Trafik kurallarından muafiyet",
      "Ehliyetsiz araç kullanma"
    ],
    0,
    "Bağımsız hareketliliği desteklemek amacıyla %90 ve üzeri raporu olanlara (veya özel tertibatlı araç kullanması gereken ortopedik engellilere) ÖTV ve MTV muafiyeti uygulanır.",
    "Araç alımında vergi kolaylığı = ÖTV ve MTV muafiyeti."
  ],
  [
    "4857 sayılı İş Kanunu'na göre 50 ve üzeri işçi çalıştırdığı halde %3 engelli kotasını doldurmayan özel sektör işverenlerine her ay hangi yaptırım uygulanır?",
    [
      "Çalıştırmadığı her bir engelli ve geçen her ay için İİŞKUR tarafından idari para cezası kesilir (ve bu paralar engelli istihdamı/kendi işini kurma projelerinde kullanılır!)",
      "Hiçbir ceza uygulanmaz",
      "İşyeri tamamen yıkılır",
      "Sadece sözlü uyarı yapılır"
    ],
    0,
    "Kotaya uymayan işverenlerden tahsil edilen idari para cezaları İŞKUR fonunda toplanır ve engellilerin mesleki eğitimi ile kendi işini kurma hibe desteklerinde kullanılır.",
    "Kota cezaları -> İŞKUR Engelli Kendi İşini Kurma হibe Fonuna aktarılır!"
  ],
  [
    "Özel sektörde engelli istihdamını teşvik etmek amacıyla devlet işverene hangi mali desteği sağlar?",
    [
      "Engelli işçinin sigorta priminin işveren hissesinin Hazine tarafından karşılanması teşviki",
      "İşverenin elektrik faturasının ödenmesi",
      "İşverene kira yardımı",
      "Hiçbir teşvik verilmez"
    ],
    0,
    "Devlet, özel sektörün engelli çalıştırmasını teşvik etmek için asgari ücret üzerinden hesaplanan sigorta primi işveren payını karşılar.",
    "İşveren teşviki = Sigorta primi işveren hissesi desteği."
  ],
  [
    "Ağır fiziksel veya zihinsel engelli bireylerin büyük koğuş tipi kışla kurumlar yerine, mahalle içinde apartman dairesi veya müstakil evlerde 4-6 kişilik küçük gruplar halinde uzman desteğiyle yaşadıkları modele ne denir?",
    ["Umut Evleri (Grup Evleri / Toplum Temelli Bakım)", "Darülaceze Kışlası", "Korumalı İşyeri", "RAM"],
    0,
    "Aile ve Sosyal Hizmetler Bakanlığı'nın kurumsallaşmadan toplum temelli bakıma geçiş projesi kapsamında açtığı ev tipi yaşam birimlerine 'Umut Evleri' denir.",
    "Mahalle içinde ev tipi küçük grup yaşamı = Umut Evleri."
  ],
  [
    "Engelli bireylerin istihdamında 'Destekli İstihdam (Supported Employment) ve İş Koçluğu' modeli nasıl işler?",
    [
      "Önce yıllarca kurs verip hiç işe yerleştirmemek",
      "'Önce işe yerleştir, sonra iş başında eğit' ilkesiyle bir İş Koçu'nun (Job Coach) engelli bireye iş yerinde rehberlik etmesi",
      "Bireyi evde oturtmak",
      "Sadece emekli yapmak"
    ],
    1,
    "Destekli İstihdam modelinde bir 'İş Koçu' engelli bireyle birlikte iş yerine gider, işi yerinde öğretir ve işverenle uyumu sağlar.",
    "İş Koçu (Job Coach) ile iş başında uyum = Destekli İstihdam."
  ],
  [
    "DSÖ ICF (2001) sınıflandırmasında 'Etkinlik (Activity)' ile 'Katılım (Participation)' arasındaki fark nedir?",
    [
      "Etkinlik bireyin bir görevi veya eylemi (yürüme, giyinme, okuma) tek başına yerine getirmesidir; Katılım ise bireyin yaşam durumlarında (işe gitme, düğüne katılma, oy verme) yer almasıdır",
      "İkisi de sadece organ yapısını anlatır",
      "İkisi de sadece genetiği anlatır",
      "Hiçbir fark yoktur"
    ],
    0,
    "ICF'de 'Etkinlik' bireysel düzeyde bir eylemi yapabilmeyi (kapasite), 'Katılım' ise toplumsal rollerin ve yaşam alanlarının içinde yer almayı (performans) ifade eder.",
    "ICF: Etkinlik = Bireysel eylem | Katılım = Toplumsal yaşamda yer alma."
  ],
  [
    "DSÖ ICF sınıflandırmasında bir çevresel faktörün (örneğin rampanın, yardımcı teknolojinin veya destekleyici ailenin) bireyin işlevselliğini artırmasına ne ad verilir?",
    ["Kolaylaştırıcı (Facilitator)", "Engelleyici (Barrier)", "Zedelenme", "Stigma"],
    0,
    "ICF'de çevresel faktörler iki yönlü kodlanır: İşlevselliği artıranlara 'Kolaylaştırıcı (Facilitator)', kısıtlayanlara ise 'Engelleyici (Barrier)' denir.",
    "ICF: Destekleyen çevre = Kolaylaştırıcı | Kısıtlayan çevre = Engelleyici."
  ],
  [
    "Omurilik yaralanması olan bireylerde uzun süre aynı pozisyonda yatmaya veya tekerlekli sandalyede oturmaya bağlı olarak cilt dokusunun oksijensiz kalıp açılmasına ne denir?",
    ["Dekübit Ülseri (Bası Yarası / Yatak Yarası)", "Disleksi", "Afazi", "Ekolali"],
    0,
    "Omurilik felçli bireylerde duyu kaybı da olduğu için bası bölgelerinde 'Bası Yarası (Dekübit Ülseri)' riski yüksektir; özel havalı minder/yatak ve düzenli pozisyon değişimi hayati önem taşır.",
    "Uzun süre basınca bağlı cilt yarası = Bası Yarası (Dekübit Ülseri)."
  ],
  [
    "Serebral Palsi'nin (SP) en sık görülen ve kasların aşırı sert, gergin ve kasılmış olmasıyla karakterize alt tipi hangisidir?",
    ["Spastik Tip Serebral Palsi", "Ataksik Tip", "Hipoaktif Tip", "Odyolojik Tip"],
    0,
    "Serebral Palsi vakalarının yaklaşık %70-80'i kas tonusunun aşırı arttığı (kas sertliği) 'Spastik Tip'tir (Diğer tipler: istemsiz hareketlerle seyreden Diskinetik/Atetoid ve denge bozukluğuyla seyreden Ataksik tiptir).",
    "Serebral Palsi en yaygın alt tip (Kas sertliği) = Spastik Tip."
  ],
  [
    "Serebral Palsi'de cerebellum (beyincik) hasarına bağlı olarak 'denge ve koordinasyon bozukluğu, sarhoşvari yürüme' ile görülen alt tip hangisidir?",
    ["Ataksik Tip Serebral Palsi", "İşitsel Tip", "Görme Tipi", "Diyabetik Tip"],
    0,
    "Beyincik (serebellum) denge merkezidir; buradaki hasarla oluşan denge ve koordinasyon bozukluğu 'Ataksik Serebral Palsi' olarak adlandırılır.",
    "Denge ve koordinasyon bozukluğu olan SP = Ataksik Tip."
  ],
  [
    "Özellikle erkek çocuklarda X kromozomuna bağlı genetik geçişle ortaya çıkan ve erken çocuklukta başlayıp hızla ilerleyen en yaygın kas erimesi hastalığı hangisidir?",
    ["Duchenne Musküler Distrofi (DMD)", "Serebral Palsi", "Polio", "Kızamıkçık"],
    0,
    "Duchenne Musküler Distrofi (DMD), distrofin proteini eksikliğine bağlı olarak özellikle erkek çocuklarda görülen ilerleyici (progresif) bir kas hastalığıdır.",
    "Erkek çocuklarda ilerleyici genetik kas erimesi = DMD (Duchenne Musküler Distrofi)."
  ],
  [
    "Omurilikteki motor sinir hücrelerinin (motor nöronların) kaybına yol açarak kas güçsüzlüğü ve erimesi yapan, bebeklikten yetişkinliğe farklı tipleri olan genetik hastalık hangisidir?",
    ["SMA (Spinal Musküler Atrofi)", "Serebral Palsi", "Otizm", "Disleksi"],
    0,
    "SMA (Spinal Musküler Atrofi), SMN1 geni eksikliği nedeniyle omurilikteki motor nöronların kaybına ve ilerleyici kas güçsüzlüğüne yol açan genetik bir hastalıktır (Ülkemizde evlilik öncesi ve yenidoğan SMA taraması başlatılmıştır).",
    "Omurilik motor nöron kaybı + Genetik tarama = SMA."
  ],
  [
    "Genellikle 20-40 yaş arası genç yetişkinlerde başlayan, bağışıklık sisteminin beyin ve omurilikteki sinir kılıflarına (miyelin) saldırmasıyla oluşan ve 'epizodik ataklar' halinde seyredebilen nörolojik hastalık hangisidir?",
    ["MS (Multipl Skleroz)", "Down Sendromu", "Fenilketonüri", "Doğuştan Kalça Çıkığı"],
    0,
    "Multipl Skleroz (MS), merkezi sinir sistemindeki miyelin kılıfın hasar görmesiyle görme bulanıklığı, uyuşma, yorgunluk ve yürüme güçlüğü ataklarıyla (epizodik veya ilerleyici) seyreden bir hastalıktır.",
    "Genç yetişkin + Miyelin kılıf hasarı + Ataklı (epizodik) seyir = MS (Multipl Skleroz)."
  ],
  [
    "Çocuk felci virüsünün omurilikteki motor sinirleri etkilemesiyle oluşan ve aşılamayla büyük ölçüde önlenebilen bulaşıcı hastalık kaynaklı ortopedik engel nedir?",
    ["Poliomyelit (Çocuk Felci / Polio)", "DMD", "Otizm", "Fetal Alkol Sendromu"],
    0,
    "Poliomyelit (Çocuk Felci), doğum sonrası bulaşıcı hastalık nedeniyle bacaklarda asimetrik felç ve kısalık bırakan ancak çocukluk aşılarıyla (Birincil Koruma) önlenebilen bir durumdur.",
    "Aşıyla önlenebilen çocuk felci = Poliomyelit (Polio)."
  ],
  [
    "Bir sosyal hizmet uzmanının fiziksel engelli bireyle yaptığı görüşmede 'Vaka Yönetimi (Case Management)' süreci hangi temel adımlardan oluşur?",
    [
      "Tanışma/Bağ kurma -> Çok boyutlu Değerlendirme (ICF/Ekolojik) -> Planlama -> Müdahale/Kaynak Bağlantısı -> İzleme ve Değerlendirme -> Sonlandırma",
      "Sadece ilaç yazıp gönderme",
      "Sadece gelir testi yapma",
      "Sadece ameliyat günü verme"
    ],
    0,
    "Sosyal hizmette planlı müdahale ve vaka yönetimi; Ön değerlendirme, Planlama, Uygulama/Aracılık, İzleme ve Değerlendirme aşamalarıyla yürütülür.",
    "Planlı Sosyal Hizmet Süreci = Değerlendirme -> Planlama -> Uygulama -> İzleme."
  ],
  [
    "Fiziksel engelli bireylerin toplumsal yaşama katılımında 'Yardımcı Teknolojiler (Assistive Technologies)' neden hak temelli bir gerekliliktir?",
    [
      "Sadece lüks tüketim olduğu için",
      "Yetersizliği olan bireyin çevresel engelleri aşarak eğitim, istihdam ve günlük yaşamda bağımsızlığını doğrudan sağladığı için (ICF'de en güçlü kolaylaştırıcıdır)",
      "İnsan ilişkilerini bitirdiği için",
      "Sadece hastanede kullanıldığı için"
    ],
    1,
    "Akülü tekerlekli sandalye, göz takip sistemleri, ortez-protezler ve akıllı ev sistemleri bireyin başkasının yardımına bağımlılığını azaltan temel insan hakkı araçlarıdır.",
    "Yardımcı Teknoloji = Bağımsız yaşamın anahtarı (ICF Kolaylaştırıcı)."
  ],
  [
    "Engelli çocuğu olan ailelerle sosyal hizmet çalışmasında 'Aile Merkezli Uygulama (Family-Centered Practice)' neyi savunur?",
    [
      "Uzmanın aileyi dışlayıp sadece çocukla çalışmasını",
      "Ailenin çocuğu en iyi tanıyan uzman ortak olarak görülmesini, kararlara katılmasını ve tüm aile sisteminin güçlendirilmesini",
      "Ailenin suçlanmasını",
      "Çocuğun hemen kurum bakımına alınmasını"
    ],
    1,
    "Aile merkezli sosyal hizmet; ebeveynleri pasif dinleyici değil, müdahale ekibinin eşit ve saygın bir ortağı olarak kabul eder.",
    "Aileyi müdahalenin eşit ortağı görme = Aile Merkezli Uygulama."
  ],
  [
    "Türkiye'de engelli bireylerin ve ailelerinin şehir içi belediye otobüsleri, metro, vapur ve TCDD trenlerinden ücretsiz yararlanmasını sağlayan resmi kart hangisidir?",
    [
      "Aile ve Sosyal Hizmetler Bakanlığı tarafından verilen 'Engelli Kimlik Kartı' (En az %40 rapor veya ÇÖZGER ile)",
      "Sürücü Belgesi",
      "Kütüphane Kartı",
      "Müze Kart"
    ],
    0,
    "En az %40 engelli sağlık kurulu raporu (veya ÇÖZGER) olan bireylere Bakanlıkça verilen 'Engelli Kimlik Kartı' ile ücretsiz seyahat, su/internet indirimi ve müze/ören yeri haklarından yararlanılır (Tam bağımlı bireylerin 1 refakatçisi de ücretsiz seyahat eder!).",
    "Engelli Kimlik Kartı (%40+) = Ücretsiz ulaşım + Tam bağımlıda 1 refakatçi hakkı!"
  ],
  [
    "Tam bağımlı (ağır) engelli bireyin Engelli Kimlik Kartı'nda 'Ulaşımda Refakatçi Hakkı Vardır' ibaresi bulunduğunda refakatçisi toplu taşımadan nasıl yararlanır?",
    [
      "Engelli bireyle BİRLİKTE seyahat ederken 1 refakatçisi de şehir içi ve demiryolu ulaşımından ücretsiz yararlanır",
      "Refakatçi tek başına gezerken de ücretsiz biner",
      "Refakatçi iki kat ücret öder",
      "Refakatçi otobüse alınmaz"
    ],
    0,
    "Refakatçi hakkı, engelli bireyin topluma katılımını kolaylaştırmak içindir; bu nedenle tam bağımlı bireyle birlikte yolculuk eden 1 refakatçi ücretsiz ulaşım hakkına sahiptir.",
    "Tam bağımlı bireyle birlikte seyahat eden 1 refakatçi = Ücretsiz ulaşım."
  ],
  [
    "Sosyal hizmet uzmanının fiziksel engelli bireyle çalışırken 'Aracılık (Broker) Rolü' ne anlama gelir?",
    [
      "Ticaret yapmak",
      "Engelli birey ve ailesini ihtiyaç duydukları kurumsal kaynaklarla (İŞKUR, RAM, Sosyal Hizmet Merkezi, belediye, STK'lar) buluşturmak ve yönlendirmek",
      "Ameliyat yapmak",
      "Fizik tedavi egzersizi yaptırmak"
    ],
    1,
    "Sosyal hizmette 'Aracılık (Broker) Rolü', danışanı toplumda var olan ancak ulaşamadığı sosyal yardım, eğitim, sağlık ve istihdam kaynaklarıyla bağlamaktır.",
    "Danışanı doğru kurum ve kaynaklarla buluşturma = Aracılık (Broker) Rolü."
  ],
  [
    "Sosyal hizmet uzmanının engelli bireye ve ailesine haklarını, yasal mevzuatı (2022, 2828, 5378, EKPSS) ve baş etme yollarını öğretmesi hangi mesleki roldür?",
    ["Eğitici / Öğretici (Educator) ve Danışman Rolü", "Yargıç Rolü", "Cerrahi Rol", "Mali Müşavir Rolü"],
    0,
    "Danışanlara haklarını, iletişim becerilerini ve kaynak kullanımını aktarmak sosyal hizmet uzmanının 'Eğitici (Educator)' rolüdür.",
    "Hakları ve baş etme becerilerini öğretme = Eğitici (Educator) Rolü."
  ],
  [
    "SHZ237 Engellilerle Sosyal Hizmet dersinin genel vizyonuna göre, engellilik alanında çalışan bir sosyal hizmet uzmanının nihai amacı nedir?",
    [
      "Engelli bireyleri topluma uydurmak ve sessizleştirmek",
      "Tıbbi ve hayırseverlik kalıplarını aşarak; İnsan Hakları Modeli, Güçlendirme ve Ekolojik yaklaşım ışığında engelsiz, eşit, erişilebilir ve kapsayıcı bir toplum inşa etmek",
      "Sadece evrak doldurmak",
      "Tüm engellileri kapalı bakım merkezlerinde toplamak"
    ],
    1,
    "Modern sosyal hizmetin nihai hedefi; sağlamcılıkla mücadele ederek engelli bireylerin onurlu, özerk ve eşit yurttaşlar olarak toplumsal yaşamın her alanında yer almasını sağlamaktır.",
    "Sosyal Hizmetin Nihai Hedefi = Hak temelli, güçlendirici ve kapsayıcı toplum!"
  ]
];

export const UNIT_3_4_QUESTIONS: QuizQuestion[] = [
  ...[...UNIT_3_RAW, ...UNIT_3_EXTRA].map((item, idx) => ({
    id: `u3-q${idx + 1}`,
    unitId: "unit-3",
    question: item[0],
    options: item[1],
    correctIndex: item[2],
    simpleExplanation: item[3],
    keepInMind: item[4]
  })),
  ...[...UNIT_4_RAW, ...UNIT_4_EXTRA].map((item, idx) => ({
    id: `u4-q${idx + 1}`,
    unitId: "unit-4",
    question: item[0],
    options: item[1],
    correctIndex: item[2],
    simpleExplanation: item[3],
    keepInMind: item[4]
  }))
];
