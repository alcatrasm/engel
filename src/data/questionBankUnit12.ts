import { QuizQuestion } from "./courseData";

type RawQ = [
  string, // question
  [string, string, string, string], // options
  number, // correctIndex
  string, // simpleExplanation
  string // keepInMind
];

const UNIT_1_RAW: RawQ[] = [
  [
    "Devlet Memurları Kanunu'na (DMK) göre bir bireyin 'engelli' sayılabilmesi için resmi sağlık kurulu raporuyla belgelenmesi gereken en az yeti kaybı oranı kaçtır?",
    ["%25", "%40", "%50", "%60"],
    1,
    "DMK'ya göre resmi sağlık kurulu raporuyla çalışma gücünden en az %40 oranında kayıp olduğu belgelenen kişiler yasal olarak engelli kabul edilir.",
    "DMK engellilik alt sınırı = En az %40 sağlık kurulu raporu."
  ],
  [
    "2828 sayılı Sosyal Hizmetler (SHÇEK) Kanunu'nun engelli tanımında aşağıdaki ifadelerden hangisi ön plandadır?",
    [
      "En az %40 vergi indirimi raporu olması",
      "Korunma, bakım, rehabilitasyon, danışmanlık ve destek hizmetlerine ihtiyaç duyması",
      "Sadece doğuştan gelen genetik bir hastalığa sahip olması",
      "Yalnızca tekerlekli sandalye kullanması"
    ],
    1,
    "2828 sayılı Sosyal Hizmetler Kanunu yüzde oran vermez; kişinin normal hayatın gereklerine uyamaması sebebiyle korunma, bakım, rehabilitasyon ve danışmanlığa ihtiyaç duymasını vurgular.",
    "2828 SHÇEK Kanunu = Korunma, bakım, rehabilitasyon ve danışmanlık ihtiyacı."
  ],
  [
    "Engellilik Hizmetleri Yasası'ndaki tanımda geçen 'epizodik' kelimesinin en basit anlamı nedir?",
    [
      "Sadece çocuklukta görülen",
      "Bulaşıcı olan",
      "Sürekli olmayan, zaman zaman nöbet veya ataklar halinde ortaya çıkan",
      "Sadece yaşlılıkta başlayan"
    ],
    2,
    "Epizodik; epilepsi veya MS gibi her saniye görünmeyen ama zaman zaman ataklar/nöbetler halinde ortaya çıkan durumları ifade eder.",
    "Epizodik = Aralıklarla / ataklar halinde gelen durum (Hizmet Yasası)."
  ],
  [
    "Bir trafik kazası sonucunda bireyin bacağındaki sinirlerin kopması DSÖ'nün (ICIDH) üçlü ayrımında hangisine karşılık gelir?",
    ["Engel (Handicap)", "Zedelenme (Impairment)", "Damgalama (Stigma)", "Sosyal Dışlanma"],
    1,
    "Vücudun anatomik, fiziksel veya psikolojik yapısındaki tıbbi kayıp ve hasara 'Zedelenme (Impairment)' denir.",
    "Organ/doku hasarı = Zedelenme."
  ],
  [
    "Bacağındaki sinir hasarı nedeniyle bir kişinin merdiven çıkamaması veya yürüyememesi hangi kavramla açıklanır?",
    ["Zedelenme", "Yetersizlik (Disability)", "Ahlaki Model", "Etiketleme"],
    1,
    "Zedelenme sonucunda kişinin normalde bir insanın yapabildiği yürüme, görme gibi bir işlevi yapamamasına 'Yetersizlik' denir.",
    "Fonksiyon/işlev kaybı (yürüyememe) = Yetersizlik."
  ],
  [
    "Tekerlekli sandalye kullanan bir öğrencinin, üniversite binasında asansör olmadığı için dersliğe girememesi hangisine örnektir?",
    ["Zedelenme", "Engel / Özür (Handicap)", "Fetal Alkol Sendromu", "Tıbbi Model"],
    1,
    "Yetersizliği olan bireyin, fiziksel veya toplumsal çevre engelleri yüzünden yaşıtları gibi toplumsal rollerini yerine getirememesine 'Engel (Handicap)' denir.",
    "Toplumsal/çevresel duvar = Engel (Handicap)."
  ],
  [
    "Hamilelik sırasında annenin alkol tüketmesi sonucunda bebekte hem büyüme geriliği/organ anomalisi hem de merkezi sinir sistemi hasarı (düşük IQ, dikkat eksikliği) oluşmasına ne ad verilir?",
    ["Serebral Palsi", "Fetal Alkol Sendromu (FAS)", "Spina Bifida", "Kas Distrofisi"],
    1,
    "Gebelikte alkol kullanımı plasentadan bebeğe geçerek Fetal Alkol Sendromu'na (FAS) yol açar; zihinsel gerilik ve organ bozukluklarının önemli bir doğum öncesi nedenidir.",
    "Gebelikte alkol = Fetal Alkol Sendromu (Düşük IQ + Organ hasarı)."
  ],
  [
    "Aşağıdakilerden hangisi engelliliğin 'doğum öncesi (prenatal)' nedenlerinden biridir?",
    [
      "Doğum sırasında bebeğin kordonunun boynuna dolanması",
      "Akraba evliliği ve kan uyuşmazlığı",
      "2 yaşında geçirilen ağır ateşli menenjit",
      "İş kazası geçirilmesi"
    ],
    1,
    "Akraba evliliği, genetik bozukluklar, kan uyuşmazlığı ve annenin hamileyken geçirdiği hastalıklar doğum öncesi (anne karnı) sebeplerdir.",
    "Anne karnındaki genetik/kan/ilaç etkenleri = Doğum öncesi."
  ],
  [
    "Aşağıdakilerden hangisi engelliliğin 'doğum sırası (natal)' nedenleri arasında yer alır?",
    [
      "Bebeğin doğum kanalında oksijensiz kalması (asfiksi) ve hatalı vakum/forseps kullanımı",
      "Annenin hamileyken röntgen çektirmesi",
      "Çocuğun 5 yaşında yüksekten düşmesi",
      "Genetik kromozom anomalisi"
    ],
    0,
    "Doğum anında bebeğin oksijensiz kalması (asfiksi), kordon dolanması veya doğum araçlarının (forseps/vakum) hatalı kullanımı doğum sırası nedenlerdir.",
    "Doğum anında oksijensiz kalma / vakum / forseps = Doğum sırası."
  ],
  [
    "Aşağıdakilerden hangisi engelliliğin 'doğum sonrası (postnatal)' nedenlerinden biridir?",
    [
      "Kan uyuşmazlığı",
      "Gebelikte kızamıkçık",
      "Bebeklikte geçirilen ağır ateşli hastalık (menenjit) veya trafik kazası",
      "Kordon dolanması"
    ],
    2,
    "Bebek doğduktan sonra karşılaştığı ateşli hastalıklar, beslenme yetersizlikleri, kazalar ve afetler doğum sonrası nedenlerdir.",
    "Doğduktan sonraki ateşli hastalık/kaza = Doğum sonrası."
  ],
  [
    "IDEA (Engelli Bireylerin Eğitimi Yasası) kriterlerine göre Otizm Spektrum Bozukluğu (OSB) tanısı için belirtilerin kaç yaşından önce ortaya çıkması ve en az kaç belirtinin görülmesi gerekir?",
    [
      "1 yaşından önce ve en az 2 belirti",
      "3 yaşından önce ve en az 6 belirti",
      "7 yaşından önce ve en az 10 belirti",
      "18 yaşından önce ve en az 4 belirti"
    ],
    1,
    "Slaytlara göre Otizm; sosyal etkileşim, iletişim ve tekrarlayıcı davranış alanlarında toplam en az 6 belirtinin 3 yaşından önce ortaya çıkmasıyla tanımlanır.",
    "Otizm şifresi = 3 yaşından önce + en az 6 belirti."
  ],
  [
    "Otizm Spektrum Bozukluğu'nda görülen 'ekolali' ne demektir?",
    [
      "Göz teması kurmaktan kaçınma",
      "Karşısındakinin söylediği sözcük veya cümleleri papağan gibi aynen tekrar etme",
      "Parmak ucunda yürüme",
      "Acıya karşı duyarsız olma"
    ],
    1,
    "Ekolali (yankı konuşma), otizmli bireyin duyduğu kelimeleri veya soruyu yanıtlamak yerine aynen tekrar etmesidir.",
    "Ekolali = Sözcükleri yankı gibi aynen tekrarlama."
  ],
  [
    "İşitme cihazı kullanmasına rağmen konuşulanları işitme yoluyla hiç algılayamayan bireyin durumu IDEA'ya göre nasıl tanımlanır?",
    ["Ağır işitme", "Sağırlık (Deafness)", "Afazi", "Disleksi"],
    1,
    "Cihaz (amplifikasyon) yardımıyla bile dilsel bilgileri işitme yoluyla işleyemeyecek kadar ağır kayba 'Sağırlık' denir.",
    "Cihazla bile konuşmayı duyamama = Sağırlık."
  ],
  [
    "İşitme kaybı olmasına rağmen işitme cihazı desteğiyle konuşulanları kısmen duyabilen bireyin durumu nedir?",
    ["Tam sağırlık", "Ağır işitme (Hard of hearing)", "Kör-sağırlık", "Otizm"],
    1,
    "İşitme kalıntısı olan ve cihazla konuşmayı algılayabilen kişiler 'Ağır işitme' grubunda yer alır.",
    "Cihazla duyabiliyorsa = Ağır işitme."
  ],
  [
    "İnsan kulağının işitebildiği ses sıklığı (frekans) birimine ne ad verilir?",
    ["Desibel (dB)", "Hertz (Hz)", "Snellen", "Balthazard"],
    1,
    "Sesin yüksekliği/şiddeti Desibel (dB) ile, sesin incelik-kalınlık sıklığı (frekansı) ise Hertz (Hz) ile ölçülür.",
    "Ses sıklığı (frekans) = Hertz (Hz)."
  ],
  [
    "Sesin şiddetini (gürlüğünü) ölçen birim aşağıdakilerden hangisidir?",
    ["Desibel (dB)", "Hertz (Hz)", "Diyoptri", "Derece"],
    0,
    "İşitme testlerinde (odyogram) sesin şiddeti Desibel (dB) birimiyle ölçülür.",
    "Ses şiddeti = Desibel (dB)."
  ],
  [
    "Bir çocuğun dili ve konuşmayı öğrenmeden önce işitme yetisini kaybetmesine ne ad verilir?",
    ["Postlingual işitme kaybı", "Prelingual (konuşma öncesi) işitme kaybı", "Ortopedik yetersizlik", "Süreğen hastalık"],
    1,
    "Prelingual (dil öncesi) işitme kaybı, çocuk henüz konuşmayı öğrenmeden önce gerçekleştiği için dil gelişimini doğrudan etkiler.",
    "Prelingual = Konuşma/dil öncesi işitme kaybı."
  ],
  [
    "Tüm düzeltmelere (gözlük/lens) rağmen normal gören bir gözün 6 metreden görebildiği bir nesneyi ancak 60 santimetreden (veya daha yakından) görebilen ya da görme alanı açısı 20 dereceden dar olan kişi nasıl tanımlanır?",
    ["Az gören", "Yasal olarak Kör (Görme engelli)", "Astigmat", "Renk körü"],
    1,
    "Görme keskinliği 1/10'un (6m -> 60cm veya 20/200 ayak) altında olan ya da görme açısı 20 dereceden dar olan birey yasal olarak 'Kör' kabul edilir.",
    "6 metreyi 60 cm'den görme veya <20 derece açı = Kör."
  ],
  [
    "Gözlük veya lensle düzeltmeden sonra bile görme keskinliği 20/70 ile 20/200 ayak arasında olan, yani görme kalıntısını günlük yaşamda kullanabilen bireylere ne denir?",
    ["Tam kör", "Az gören (Low vision)", "Sağır-kör", "Zihinsel yetersiz"],
    1,
    "Tamamen görme kaybı olmayan, büyüteç ve aydınlatma gibi desteklerle görme yetisini kullanabilen kişilere 'Az gören' denir.",
    "20/70 - 20/200 arası görme = Az gören."
  ],
  [
    "Zihinsel yetersizlik tanısı konulabilmesi için zihinsel işlevlerdeki ortalamanın altında olma ve uyumsal davranış geriliği hangi yaştan önce başlamalıdır?",
    ["3 yaş", "6 yaş", "16 yaş (veya gelişim dönemi bitmeden)", "25 yaş"],
    2,
    "Ders notlarına göre zihinsel yetersizlik, 16 yaşından önce (gelişim döneminde) ortaya çıkan genel zeka işlevi geriliği ve uyumsal davranış yetersizliğidir.",
    "Zihinsel yetersizlik yaş sınırı = 16 yaş öncesi."
  ],
  [
    "Zihinsel yetersizlik tanısında standart zeka testlerinde (IQ) genellikle hangi puanın altı sınır kabul edilir?",
    ["100", "90", "70", "50"],
    2,
    "Ortalama IQ 100 kabul edilir; 70 puanın altı (uyumsal davranış geriliğiyle birlikte) zihinsel yetersizlik sınırıdır.",
    "Zihinsel yetersizlik IQ sınırı = 70'in altı."
  ],
  [
    "Bireyde tek bir özel eğitim programıyla karşılanamayacak düzeyde birden fazla ağır yetersizliğin (örneğin zihinsel engel + ortopedik engel) bir arada bulunmasına ne denir?",
    ["Süreğen hastalık", "Çoklu yetersizlik (Multiple disabilities)", "Öğrenme güçlüğü", "Otizm"],
    1,
    "Zihinsel yetersizlik-körlük veya zihinsel yetersizlik-ortopedik engel gibi eşzamanlı birden fazla engele 'Çoklu yetersizlik' denir (Kör-sağırlık bu tanımın dışında ayrı bir kategoridir).",
    "Birden fazla engel bir arada = Çoklu yetersizlik (Kör-sağırlık hariç!)."
  ],
  [
    "IDEA yasasına göre 'Çoklu Yetersizlik' (Multiple Disabilities) tanımının dışında tutulan ve kendine özgü iletişim ihtiyacı nedeniyle ayrı bir kategori sayılan durum hangisidir?",
    ["Zihinsel engel + Ortopedik engel", "Kör-sağırlık (Deaf-blindness)", "Otizm + Konuşma geriliği", "Dikkat eksikliği"],
    1,
    "Kör-sağırlık hem görme hem işitme kaybını içerdiği için çoklu yetersizlik içinde değil, başlı başına ayrı bir engel grubu olarak sınıflandırılır.",
    "Çoklu yetersizlik istisnası = Kör-sağırlık."
  ],
  [
    "Fiziksel engellilik ders notlarında hangi iki ana alt gruba ayrılmaktadır?",
    [
      "Zihinsel ve Ruhsal",
      "Ortopedik yetersizlik ve Süreğen (kronik) hastalıklar",
      "İşitme ve Görme",
      "Otizm ve Öğrenme güçlüğü"
    ],
    1,
    "Fiziksel engellilik; kas-iskelet sistemini etkileyen 'Ortopedik yetersizlik' ile kalp, diyabet, böbrek yetmezliği gibi 'Süreğen hastalıklar' olarak ikiye ayrılır.",
    "Fiziksel engellilik = 1. Ortopedik + 2. Süreğen hastalık."
  ],
  [
    "Kişinin çalışma kapasitesini ve işlevlerini sınırlayan, sürekli tıbbi bakım ve tedavi gerektiren diyabet, kalp-damar hastalığı, böbrek yetmezliği ve kanser gibi durumlar hangi gruptadır?",
    ["Ortopedik engel", "Süreğen (Kronik) hastalık / engel", "Zihinsel yetersizlik", "Özel öğrenme güçlüğü"],
    1,
    "Uzun süreli devam eden ve sürekli bakım/tedavi gerektiren iç organ ve sistem hastalıklarına 'Süreğen (kronik) hastalık' denir.",
    "Diyabet, kalp, böbrek, astım = Süreğen (kronik) engel."
  ],
  [
    "Zekası normal veya normalin üzerinde olmasına rağmen dinleme, okuma, yazma, heceleme veya matematiksel hesaplama süreçlerinde güçlük yaşayan bir çocuğun durumu nedir?",
    ["Zihinsel yetersizlik", "Özel öğrenme güçlüğü (Disleksi vb.)", "Otizm", "Ruhsal engel"],
    1,
    "Özel öğrenme güçlüğünde zeka geriliği yoktur; disleksi (okuma), disgrafi (yazma) veya diskalkuli (matematik) gibi bilgi işleme farklılıkları vardır.",
    "Normal zeka + okuma/yazma/matematik zorluğu = Özel öğrenme güçlüğü."
  ],
  [
    "Tarihsel olarak en eski model olan ve engelliliği 'Tanrı'nın bir cezası, ailesinin günahı veya ahlaki bir kusur' olarak açıklayan model hangisidir?",
    ["Medikal Model", "Sosyal Model", "Ahlaki (Dini) Model", "İnsan Hakları Modeli"],
    2,
    "1800'lü yıllara kadar baskın olan Ahlaki Model, engelliliği günah, sınav, büyü veya kaderle açıklar; toplumsal tepkisi utanç, gizleme veya sadakadır.",
    "Günah / Ceza / Sadaka = Ahlaki Model."
  ],
  [
    "1800'lü yıllardan 1970'lere kadar baskın olan ve engelliliği 'bireyin bedenindeki tıbbi bir arıza/hastalık' olarak görüp kişiyi 'hasta rolüne' sokan model hangisidir?",
    ["Ahlaki Model", "Medikal (Tıbbi) Model", "Sosyal Model", "Crip Teorisi"],
    1,
    "Medikal (Tıbbi) Model, sorunu tamamen bireyin bozuk bedeninde görür; doktor ve uzmanları otorite kabul eder, bireyi düzeltip 'normalleştirmeye' çalışır.",
    "Sorun bireyin bozuk bedeninde + Doktor otoritesi = Medikal (Tıbbi) Model."
  ],
  [
    "Medikal (Tıbbi) Model'de engelli bireyin toplumsal konumu aşağıdakilerden hangisidir?",
    [
      "Eşit haklara sahip aktif yurttaş",
      "Uzmanların kararlarına uyması beklenen pasif 'hasta / vaka'",
      "Kendi hayatının politik öznesi",
      "Bağımsız karar verici"
    ],
    1,
    "Tıbbi modelde birey 'hasta' rolündedir; kararları doktorlar ve rehabilitasyon uzmanları verir, bireyin topluma uyması beklenir.",
    "Tıbbi modelde birey = Pasif hasta."
  ],
  [
    "1970'lerde İngiltere'de (UPIAS hareketi ve Mike Oliver öncülüğünde) ortaya çıkan ve 'İnsanı tekerlekli sandalye değil, merdivenli binalar engeller' diyen model hangisidir?",
    ["Ahlaki Model", "Medikal Model", "Sosyal Model", "Biyomedikal Model"],
    2,
    "Sosyal Model, biyolojik 'noksanlık' (impairment) ile toplumsal 'engelliliği' (disability) ayırır; sorunun bireyde değil, erişimsiz çevre ve önyargılı toplumda olduğunu savunur.",
    "Sorun bireyde değil rampasız toplumda = Sosyal Model."
  ],
  [
    "Sosyal Model'in temelini atan UPIAS örgütüne göre 'Noksanlık (Impairment)' ile 'Engellilik (Disability)' arasındaki fark nedir?",
    [
      "İkisi tamamen aynı şeydir",
      "Noksanlık bireyin bedensel/biyolojik özelliğidir; Engellilik ise toplumun bu bireyi dışlayan adaletsiz düzenidir",
      "Noksanlık toplumsaldır, engellilik tıbbidir",
      "Noksanlık sadece yaşlılarda görülür"
    ],
    1,
    "UPIAS'a göre bacağın olmaması biyolojik bir noksanlıktır; ancak sokağa çıkamamak toplumun ürettiği engelliliktir.",
    "UPIAS: Noksanlık = Beden, Engellilik = Toplum."
  ],
  [
    "Sosyal Model'e göre toplumun engelli bireylerin önüne çıkardığı 3 temel engel türü aşağıdakilerden hangisidir?",
    [
      "Genetik, Biyolojik, Kimyasal",
      "Yapısal/Kurumsal, Çevresel (Fiziksel) ve Tutum (Önyargı) Engelleri",
      "Doğum öncesi, Doğum sırası, Doğum sonrası",
      "Mikro, Mezo, Makro"
    ],
    1,
    "Sosyal model engelleri 3 başlıkta toplar: 1. Yapısal/Kurumsal (yasalar), 2. Çevresel/Fiziksel (merdivenler, ulaşım), 3. Tutum engelleri (önyargı ve ayrımcılık).",
    "Sosyal modelin 3 engeli = Yapısal + Çevresel + Tutum."
  ],
  [
    "2006 tarihli Birleşmiş Milletler Engellilerin Haklarına İlişkin Sözleşme (CRPD) ile zirveye ulaşan ve engelli bireyi 'hak öznesi' olarak gören model hangisidir?",
    ["Ahlaki Model", "Medikal Model", "İnsan Hakları Modeli", "Hayırseverlik Modeli"],
    2,
    "İnsan Hakları Modeli, Sosyal Model'in üzerine inşa edilmiştir; engelliliği insan çeşitliliğinin doğal bir parçası sayar ve devlete yasal yükümlülük yükler.",
    "2006 BM CRPD + Hak Öznesi = İnsan Hakları Modeli."
  ],
  [
    "İnsan Hakları Modeli'nin Sosyal Model'e eklediği en önemli yenilik aşağıdakilerden hangisidir?",
    [
      "Engelliliği tekrar tıbbi bir hastalık sayması",
      "Sosyal modelin politik tespitlerini ulusal ve uluslararası bağlayıcı hukuk kurallarına (haklara ve devlet yükümlülüklerine) dönüştürmesi",
      "Sadece ortopedik engellileri kapsaması",
      "Hayırseverlik derneklerini artırması"
    ],
    1,
    "Sosyal model 'sorun toplumda' diyerek teşhisi koymuş, İnsan Hakları Modeli ise bunu mahkemede talep edilebilir yasal haklara (BM Sözleşmesi) dönüştürmüştür.",
    "Sosyal Model teşhis koyar, İnsan Hakları Modeli yasal hak verir."
  ],
  [
    "İnsan haklarının tarihsel gelişiminde 'Yaşama hakkı, kişi dokunulmazlığı, seçme-seçilme hakkı' kaçıncı kuşak haklar arasında yer alır?",
    ["1. Kuşak (Kişisel ve Siyasal Haklar)", "2. Kuşak Haklar", "3. Kuşak Haklar", "4. Kuşak Haklar"],
    0,
    "1. Kuşak haklar; devletin dokunmaması gereken temel kişisel ve siyasal özgürlüklerdir (yaşam, ifade, oy hakkı).",
    "1. Kuşak = Kişisel ve Siyasal Haklar (Yaşam, Oy)."
  ],
  [
    "Eğitim hakkı, çalışma hakkı, sağlık ve sosyal güvenlik hakkı kaçıncı kuşak insan haklarıdır?",
    ["1. Kuşak", "2. Kuşak (Ekonomik, Sosyal ve Kültürel Haklar)", "3. Kuşak", "4. Kuşak"],
    1,
    "Devletin aktif olarak hizmet sunmasını gerektiren eğitim, sağlık, çalışma ve sosyal güvenlik hakları 2. Kuşak haklardır.",
    "2. Kuşak = Ekonomik ve Sosyal Haklar (Eğitim, Sağlık, İş)."
  ],
  [
    "Barış hakkı, temiz çevre hakkı ve kalkınma hakkı gibi tüm insanlığın ortak dayanışmasını gerektiren haklar kaçıncı kuşak haklardır?",
    ["1. Kuşak", "2. Kuşak", "3. Kuşak (Dayanışma Hakları)", "Ahlaki Haklar"],
    2,
    "3. Kuşak haklar 'Dayanışma Hakları' olarak bilinir (barış, çevre, ortak miras).",
    "3. Kuşak = Dayanışma Hakları (Barış, Çevre)."
  ],
  [
    "BM Engellilerin Haklarına İlişkin Sözleşme'nin (CRPD) en büyük özelliği hak kuşakları açısından nedir?",
    [
      "Sadece 1. kuşak hakları içermesi",
      "Medeni/siyasi (1. kuşak) ile ekonomik/sosyal (2. kuşak) hakları tek metinde birleştiren bütüncül bir sözleşme olması",
      "Sadece tıbbi tedaviyi düzenlemesi",
      "Sadece çocukları kapsaması"
    ],
    1,
    "BM CRPD, hem yaşam/oy/ehliyet gibi 1. kuşak hakları hem de eğitim/sağlık/istihdam gibi 2. kuşak hakları ayrılmaz bir bütün olarak birleştirmiştir.",
    "CRPD = 1. ve 2. kuşak hakları birleştiren bütüncül sözleşme."
  ],
  [
    "Bir filmde engelli karakterin sürekli 'kötü kalpli, öfkeli ve kaderine küsmüş' ya da tam tersi 'melek gibi günahsız ve acınası' olarak gösterilmesi hangi modele dayanır?",
    ["Ahlaki Model", "Sosyal Model", "İnsan Hakları Modeli", "Ekolojik Model"],
    0,
    "Medyada engelli bireyi ya günahkâr/kötü ya da acınası bir melek gibi sunmak Ahlaki/Geleneksel modelin kalıntısıdır.",
    "Kader/Günah/Acınası melek temsili = Ahlaki Model."
  ],
  [
    "Bir sosyal hizmet uzmanının tekerlekli sandalye kullanan danışanına 'Sorun senin yürüyememen değil, belediyenin kaldırımlara rampa yapmamasıdır; gel belediyeye dilekçe verelim' demesi hangi modele uygundur?",
    ["Ahlaki Model", "Tıbbi Model", "Sosyal Model ve İnsan Hakları Modeli", "Patolojik Model"],
    2,
    "Çevresel engelleri değiştirmeye ve hak savunuculuğuna odaklanmak Sosyal ve İnsan Hakları modellerinin temelidir.",
    "Belediyeden rampa/hak talep etmek = Sosyal & İnsan Hakları Modeli."
  ],
  [
    "Bir doktorun 'İşitme engelli çocuğun işaret dili kullanmasını yasaklıyorum, normal insanlar gibi dudak okuyup konuşmaya mecburdur' demesi hangi yaklaşımın tipik örneğidir?",
    ["Sosyal Model", "Tıbbi (Medikal) Model / Sağlamcılık", "İnsan Hakları Modeli", "Crip Teorisi"],
    1,
    "Bireyi kendi doğal iletişim kültüründen koparıp 'sağlam/normal' kalıbına zorlamak Tıbbi Model ve Sağlamcılık (Ableism) anlayışıdır.",
    "Normalleştirmeye zorlama = Tıbbi Model."
  ],
  [
    "Dünya Sağlık Örgütü'nün 1980 yılında yayımladığı ve 'Zedelenme -> Yetersizlik -> Özür/Engel' doğrusal zincirini içeren ilk sınıflandırmanın kısaltması nedir?",
    ["ICIDH (1980)", "ICF (2001)", "CRPD (2006)", "DSM-5"],
    0,
    "1980 yılındaki ilk sınıflandırma ICIDH'dir; daha sonra 2001 yılında çevresel faktörleri daha güçlü katan ICF'ye dönüştürülmüştür.",
    "1980 doğrusal sınıflandırma = ICIDH."
  ],
  [
    "IDEA yasasına göre çocukta 'Afazi' görülmesi hangi gelişim alanındaki bir bozuklukla doğrudan ilişkilidir?",
    [
      "Ortopedik yürüme bozukluğu",
      "Beyin hasarına bağlı edinilmiş konuşma ve dil anlama/ifade etme bozukluğu",
      "Görme alanı darlığı",
      "Kalp yetmezliği"
    ],
    1,
    "Afazi, beyindeki dil merkezlerinin hasar görmesi sonucu oluşan konuşma ve dili anlama güçlüğüdür; özel öğrenme güçlüğü/dil konuşma bozuklukları içinde anılır.",
    "Afazi = Beyin kaynaklı dil/konuşma kaybı."
  ],
  [
    "Aşağıdakilerden hangisi 'Otizm Spektrum Bozukluğu' olan bir çocukta görülmesi beklenen belirtilerden biri DEĞİLDİR?",
    [
      "Sosyal etkileşim ve göz temasında sınırlılık",
      "Aynılığın korunması ısrarı ve rutinlere aşırı bağlılık",
      "Yaşıtlarıyla empati ve hayali oyun kurmada yaşıtlarından çok daha ileri sosyal beceri gösterme",
      "Tekrarlayıcı (stereotipik) el çırpma veya sallanma hareketleri"
    ],
    2,
    "Otizmde sosyal etkileşim, empati ve sembolik/hayali oyun kurma becerilerinde belirgin güçlük yaşanır.",
    "Otizm 3 temel alan: Sosyal etkileşim + İletişim + Tekrarlayıcı davranış."
  ],
  [
    "Aşağıdakilerden hangisi 'Özel Öğrenme Güçlüğü' kapsamına girmez?",
    [
      "Disleksi (Okuma güçlüğü)",
      "Algısal ket vurma ve minimal beyin disfonksiyonu",
      "Zihinsel gerilik (IQ < 70) veya çevresel/ekonomik dezavantajdan kaynaklanan öğrenme sorunları",
      "Gelişimsel afazi"
    ],
    2,
    "IDEA'ya göre özel öğrenme güçlüğü; görme, işitme, motor engel, zihinsel gerilik veya ekonomik/kültürel dezavantajdan kaynaklanan öğrenme sorunlarını KAPSAMAZ.",
    "Zihinsel gerilik veya yoksulluk kaynaklı sorun ≠ Özel öğrenme güçlüğü."
  ],
  [
    "Doğuştan gelen metabolik bir hastalık olan 'Fenilketonüri (PKU)' ülkemizde bebek doğar doğmaz nasıl tespit edilmektedir?",
    [
      "6 yaşında yapılan IQ testiyle",
      "Yenidoğan topuk kanı taramasıyla (Erken teşhisle özel diyet uygulanırsa zihinsel engel önlenir)",
      "Göz muayenesiyle",
      "Odyogram testiyle"
    ],
    1,
    "Fenilketonüri akraba evliliklerinde sık görülen kalıtsal bir metabolizma hastalığıdır; topuk kanı ile erken yakalanıp diyet verilirse beyin hasarı tamamen önlenir.",
    "Topuk kanı taraması = Fenilketonüri (Önlenebilir zihinsel engel)."
  ],
  [
    "Anne adayının gebeliğin özellikle ilk 3 ayında geçirdiği hangi bulaşıcı hastalık bebekte körlük, sağırlık ve kalp anomalisine yol açabilir?",
    ["Kızamıkçık (Rubella)", "Mevsimsel nezle", "Kırık çıkık", "Gastrit"],
    0,
    "Gebeliğin ilk 3 ayında annenin Kızamıkçık (Rubella) geçirmesi fetüste ağır görme, işitme ve zihinsel yetersizliklere neden olur.",
    "Gebelikte Kızamıkçık (Rubella) = Doğum öncesi ağır engel riski."
  ],
  [
    "Anne kanının Rh (-), baba kanının Rh (+) ve bebek kanının Rh (+) olması durumunda ortaya çıkan doğum öncesi risk faktörü nedir?",
    ["Kan uyuşmazlığı", "Fetal alkol sendromu", "Kordon dolanması", "Spina bifida"],
    0,
    "Anne Rh(-), bebek Rh(+) olduğunda oluşan Rh kan uyuşmazlığı, önlem alınmazsa bebekte ağır sarılık ve beyin hasarına (kernikterus) yol açar.",
    "Anne Rh(-) ve Bebek Rh(+) = Kan uyuşmazlığı."
  ],
  [
    "Hamilelik döneminde anne adayında hangi vitaminin eksikliği bebekte 'Spina Bifida' (açık omurga / nöral tüp defekti) riskini ciddi oranda artırır?",
    ["C vitamini", "Folik Asit (B9 vitamini)", "Kalsiyum", "Demir"],
    1,
    "Gebelik öncesi ve ilk aylarda Folik Asit eksikliği bebekte omuriliğin kapanmaması (Spina Bifida) riskini artırır.",
    "Folik asit eksikliği = Spina Bifida (Açık omurga)."
  ],
  [
    "Kişinin duygu, düşünce ve davranışlarında uzun süreli bozulma yaratarak günlük yaşam ve sosyal uyumunu güçleştiren şizofreni, bipolar bozukluk ve ağır depresyon hangi engel grubuna girer?",
    ["Zihinsel engellilik", "Ruhsal ve Duygusal (Psikososyal) Engellilik", "Ortopedik engellilik", "Özel öğrenme güçlüğü"],
    1,
    "Zihinsel engel ile ruhsal engel sık karıştırılır! Şizofreni ve bipolar zeka geriliği değildir; 'Ruhsal ve Duygusal (Psikososyal) Engellilik' grubundadır.",
    "Şizofreni / Bipolar = Zihinsel DEĞİL, Ruhsal (Psikososyal) Engel!"
  ],
  [
    "Sınavlarda en sık yapılan tuzaklardan biri olan 'Zihinsel Engellilik' ile 'Ruhsal Engellilik' arasındaki temel fark nedir?",
    [
      "İkisi aynı şeydir",
      "Zihinsel engellilik 16 yaş öncesi başlayan kalıcı zeka/uyum geriliğidir; Ruhsal engellilik ise her yaşta başlayabilen duygu/düşünce/psikiyatrik hastalıklardır",
      "Ruhsal engellilik sadece bebeklerde görülür",
      "Zihinsel engellilik ilaçla tamamen iyileşir"
    ],
    1,
    "Zihinsel yetersizlik gelişim döneminde (16 yaş öncesi) başlayan bilişsel kapasite sınırlılığıdır; ruhsal engel ise psikiyatrik rahatsızlıklardır.",
    "Zihinsel = IQ & Gelişim (16 yaş öncesi) | Ruhsal = Psikiyatrik hastalık."
  ],
  [
    "Aşağıdakilerden hangisi 'Ortopedik Engellilik' tanımına en uygun örnektir?",
    [
      "Tip 1 Diyabet hastası olmak",
      "Omurilik yaralanması, serebral palsi veya kol/bacak ampütasyonu (uzuv kaybı)",
      "İşitme cihazı kullanmak",
      "Disleksi olmak"
    ],
    1,
    "Kas, iskelet, eklem ve sinir sistemindeki bozukluklar nedeniyle hareket ve duruş güçlüğü yaşanması ortopedik engelliliktir.",
    "Kas-İskelet-Uzuv kaybı = Ortopedik Engel."
  ],
  [
    "Engelliliğin önlenmesinde 'Birincil Koruma (Primary Prevention)' ne anlama gelir?",
    [
      "Engel oluştuktan sonra protez takılması",
      "Zedelenme ve hastalığın henüz hiç ortaya çıkmadan önce aşı, folik asit, iş güvenliği ve akraba evliliğini önleme ile engellenmesi",
      "Engelli bireyin işe yerleştirilmesi",
      "Bakım merkezine yatırılması"
    ],
    1,
    "Birincil koruma; hastalık veya kaza hiç gerçekleşmeden önce yapılan aşı, güvenli trafik ve anne-bebek sağlığı önlemleridir.",
    "Birincil Koruma = Sorun hiç doğmadan önlemek (Aşı, emniyet kemeri)."
  ],
  [
    "Engelliliğin önlenmesinde 'İkincil Koruma (Secondary Prevention)' neyi hedefler?",
    [
      "Zedelenme/hastalık başladıktan hemen sonra erken teşhis ve acil müdahale ile kalıcı yetersizliğe dönüşmesini önlemek (Örn: Topuk kanı testi)",
      "Sağlıklı bireylere aşı yapmak",
      "Mimari rampalar yapmak",
      "Emekli maaşı bağlamak"
    ],
    0,
    "İkincil koruma = Erken tanı ve erken tedavidir (Örn: Yenidoğan topuk kanı taramasıyla fenilketonüriyi yakalayıp zeka geriliğini önlemek).",
    "İkincil Koruma = Erken teşhis ve erken müdahale (Topuk kanı)."
  ],
  [
    "Engelliliğin önlenmesinde 'Üçüncül Koruma (Tertiary Prevention)' neyi ifade eder?",
    [
      "Akraba evliliğini önlemek",
      "Kalıcı yetersizlik oluştuktan sonra rehabilitasyon, özel eğitim ve çevresel düzenlemelerle bireyin bağımsızlığını en üst düzeye çıkarmak",
      "Hamilelikte röntgenden kaçınmak",
      "Doğumda oksijen vermek"
    ],
    1,
    "Üçüncül koruma; kalıcı yetersizlik gerçekleştikten sonra yapılan rehabilitasyon, sosyal içerme ve toplumsal engelleri kaldırma çalışmalarıdır.",
    "Üçüncül Koruma = Rehabilitasyon ve toplumsal katılım."
  ],
  [
    "Görme engelli bireylerin parmak uçlarıyla dokunarak okuma ve yazma yapmalarını sağlayan 6 noktalı kabartma yazı sisteminin adı nedir?",
    ["Odyogram", "Braille Alfabesi", "Snellen Eşeli", "Balthazard"],
    1,
    "Louis Braille tarafından geliştirilen 6 noktalı kabartma yazı sistemine Braille alfabesi denir.",
    "6 noktalı kabartma yazı = Braille."
  ],
  [
    "Göz muayenelerinde görme keskinliğini ölçmek için kullanılan harf/sembol tablosuna ne ad verilir?",
    ["Odyometre", "Snellen Eşeli (Tablosu)", "Elektrokardiyografi", "Denver Testi"],
    1,
    "Görme keskinliği (20/200 veya 6/60 gibi oranlar) Snellen harf tablosu ile ölçülür.",
    "Görme keskinliği tablosu = Snellen."
  ],
  [
    "İşitme kaybının derecesini ve türünü belirlemek için yapılan ölçüme ve çıkan grafiksel sonuca ne ad verilir?",
    ["Odyometri / Odyogram", "Snellen", "Braille", "Balthazard"],
    0,
    "İşitme testine odyometri, test sonucunda dB ve Hz değerlerini gösteren grafiğe ise odyogram denir.",
    "İşitme testi grafiği = Odyogram."
  ],
  [
    "Tıbbi Model'in engellilik alanındaki olumlu katkısı aşağıdakilerden hangisidir?",
    [
      "Bireyi toplumdan izole etmesi",
      "Ahlaki modeldeki 'günah/büyü' inancını yıkıp bilimsel tedavi, ilaç, cerrahi ve tıbbi rehabilitasyon imkanlarını geliştirmesi",
      "Engellileri pasif hasta rolüne hapsetmesi",
      "Sosyal çevreyi tamamen görmezden gelmesi"
    ],
    1,
    "Tıbbi model eleştirilse de engelliliği 'günah/lanet' olmaktan çıkarıp bilimsel tıp ve yaşam süresini uzatan tedaviler geliştirmesi açısından tarihsel bir ilerlemedir.",
    "Tıbbi modelin artısı = Günah inancını yıkıp bilimsel tedaviyi getirmesi."
  ],
  [
    "Sosyal Model'e yöneltilen en önemli akademik eleştiri aşağıdakilerden hangisidir?",
    [
      "Çevresel engelleri hiç önemsememesi",
      "Tüm sorunu sadece dış çevreye bağlarken bireyin yaşadığı gerçek fiziksel ağrı, yorgunluk ve tıbbi/bedensel deneyimi bazen geriosunda bırakması",
      "İnsan haklarına karşı çıkması",
      "Doktorları çok fazla öne çıkarması"
    ],
    1,
    "Sosyal model 'her şey toplumsal engeldir' derken bireyin bedenindeki kronik ağrıyı ve biyolojik gerçeği ihmal ettiği için daha sonra Biyopsikososyal (ICF) ve Bedenleşme yaklaşımları gelişmiştir.",
    "Sosyal modelin eksiği = Bedensel ağrı ve biyolojik deneyimi ihmal etmesi."
  ],
  [
    "Hem Tıbbi Model'in biyolojik bilgisini hem de Sosyal Model'in çevresel bakışını birleştirerek 'Biyopsikososyal' sentezi kuran yaklaşım hangisidir?",
    ["Ahlaki Model", "DSÖ ICF Sınıflandırması (Biyopsikososyal Model)", "Hayırseverlik Modeli", "Öjeni Hareketi"],
    1,
    "DSÖ'nün 2001 ICF modeli, tıbbi ve sosyal modelleri 'Biyopsikososyal' yaklaşımla birleştirir.",
    "Tıbbi + Sosyal sentez = Biyopsikososyal (ICF)."
  ],
  [
    "19. ve 20. yüzyılın başlarında 'sağlam ırk yaratma' iddiasıyla engelli bireylerin zorla kısırlaştırılmasını veya kuruma kapatılmasını savunan karanlık akım hangisidir?",
    ["Sosyal Model", "Öjeni (Eugenics) Hareketi", "Bağımsız Yaşam Hareketi", "Evrensel Tasarım"],
    1,
    "Sosyal Darwinizm ve Tıbbi Modelin aşırı uç bir sapması olan Öjeni (Eugenics) hareketi, engellileri 'genetik yük' olarak görüp zorla kısırlaştırma ve soykırıma kadar varmıştır.",
    "Genetik ayıklama / Zorla kısırlaştırma = Öjeni (Eugenics)."
  ],
  [
    "1960 ve 70'lerde engelli bireylerin 'Hakkımızda, biz olmadan asla!' (Nothing About Us Without Us) sloganıyla başlattığı hareket hangisidir?",
    [
      "Bağımsız Yaşam (Independent Living) ve Engelli Hakları Hareketi",
      "Tıbbi Rehabilitasyon Hareketi",
      "Hayırseverlik Hareketi",
      "Ahlaki Uyanış Hareketi"
    ],
    0,
    "'Bizim hakkımızda, biz olmadan asla!' sloganı, engellilerin kendi hayatları hakkında doktorların veya vakıfların değil, kendilerinin karar vermesini savunan Bağımsız Yaşam ve Hak hareketinin temel sloganıdır.",
    "'Biz olmadan asla!' = Bağımsız Yaşam ve Engelli Hakları Hareketi."
  ],
  [
    "Aşağıdakilerden hangisi Sosyal Model'de yer alan 'Tutum Engelleri'ne (Attitudinal Barriers) bir örnektir?",
    [
      "Belediye otobüsünde rampa olmaması",
      "İşverenin 'Engelli kişi bu işi beceremez, müşterileri rahatsız eder' şeklindeki önyargısı",
      "Asansörün bozuk olması",
      "Üst geçitte merdiven olması"
    ],
    1,
    "Binalar ve merdivenler 'fiziksel/çevresel' engeldir; insanların zihnindeki önyargı, acıma, korku ve ayrımcılık ise 'tutum engeli'dir.",
    "Önyargı ve acıma = Tutum engeli."
  ],
  [
    "Aşağıdakilerden hangisi Sosyal Model'deki 'Yapısal / Kurumsal Engeller'e (Institutional Barriers) örnektir?",
    [
      "Bir yasanın görme engellilerin hâkim veya öğretmen olmasını açıkça yasaklaması",
      "Kaldırım taşının yüksek olması",
      "Komşunun engelli çocuğa acıyarak bakması",
      "Grip olunması"
    ],
    0,
    "Kanunlar, yönetmelikler, işe alım prosedürleri ve eğitim sistemi kurallarından kaynaklanan dışlamalara 'Yapısal / Kurumsal Engel' denir.",
    "Yasa ve yönetmelik kaynaklı dışlama = Yapısal/Kurumsal engel."
  ]
];

const UNIT_2_RAW: RawQ[] = [
  [
    "Engelliliğin doğada hazır bulunan sabit bir gerçeklik değil, toplumun kültürü, dili ve 'normal' tanımları tarafından üretildiğini savunan kuram hangisidir?",
    ["Biyomedikal Kuram", "Sosyal İnşacı Yaklaşım (Social Constructionism)", "Genetik Kuram", "Ahlaki Kuram"],
    1,
    "Sosyal İnşacı Yaklaşım, 'kimin normal kimin anormal' olduğunun toplumun tarihsel ve kültürel uzlaşılarıyla inşa edildiğini söyler.",
    "'Normali toplum inşa eder' = Sosyal İnşacı Yaklaşım."
  ],
  [
    "Sosyal inşacı yaklaşıma göre eğer bir adada yaşayan insanların %95'i doğuştan işitme engelli olsaydı ve herkes işaret dili konuşsaydı ne olurdu?",
    [
      "Oradaki işitme engelliler yine 'engelli' sayılırdı",
      "Binalar, eğitim ve yaşam işaret diline göre kurulacağı için işitmemek bir 'engel' olmaktan çıkardı",
      "Herkes hastaneye yatırılırdı",
      "Hiç kimse iletişim kuramazdı"
    ],
    1,
    "Tarihteki Martha's Vineyard adası örneğinde olduğu gibi, toplumun tamamı işaret dili bildiğinde sağır olmak bir 'yetersizlik/engel' olarak görülmemiştir; bu da engelliliğin sosyal bir inşa olduğunu kanıtlar.",
    "Herkes işaret dili bilirse sağırlık engel olmaz = Sosyal İnşa kanıtı."
  ],
  [
    "Howard Becker'in öncülük ettiği ve 'Sapma veya yetersizlik bireyin eyleminde değil, güçlü grupların o bireye yapıştırdığı yaftadadır' diyen kuram hangisidir?",
    ["Etiketleme Kuramı (Labeling Theory)", "Ekolojik Kuram", "Biyolojik Kuram", "Sistem Kuramı"],
    0,
    "Etiketleme kuramına göre doktorlar, okul yönetimi veya toplum bireye 'yetersiz/özürlü' etiketini yapıştırdığında birey bir süre sonra bu rolü benimser.",
    "Howard Becker + Yafta yapıştırma = Etiketleme Kuramı."
  ],
  [
    "Etiketleme sürecinde, kendisine sürekli 'Sen yapamazsın, sen engellisin' denilen bireyin bir süre sonra gerçekten denemekten vazgeçip başarısız olmasına ne denir?",
    ["Kendini Gerçekleştiren Kehanet (İkincil Sapma)", "Evrensel Tasarım", "Makul Düzenleme", "Rehabilitasyon"],
    0,
    "Toplumun yapıştırdığı olumsuz etiketin birey tarafından içselleştirilip beklendiği gibi pasif davranmasına 'kendini gerçekleştiren kehanet' (veya ikincil sapma) denir.",
    "Etiketi kabullenip pasifleşmek = Kendini gerçekleştiren kehanet."
  ],
  [
    "1963 yılında yayımladığı 'Stigma: Notes on the Management of Spoiled Identity' (Damga: Örselenmiş Kimliğin İdaresi) kitabıyla Damgalama Kuramı'nı geliştiren sosyolog kimdir?",
    ["Urie Bronfenbrenner", "Erving Goffman", "Kimberlé Crenshaw", "Robert McRuer"],
    1,
    "Damgalama (Stigma) kuramının kurucusu Erving Goffman'dır. Goffman damgayı 'bireyin toplumsal kimliğini değersizleştiren ve örseleyen bir nitelik' olarak tanımlar.",
    "Damgalama (Stigma) = Erving Goffman."
  ],
  [
    "Erving Goffman'a göre tekerlekli sandalye veya beyaz baston gibi dışarıdan bakıldığında hemen fark edilen damgalanma durumuna ne ad verilir?",
    [
      "Gözden düşmüş / Fark edilen (Discredited) kimlik",
      "Gözden düşebilir / Gizlenebilir (Discreditable) kimlik",
      "Makro sistem",
      "Evrensel tasarım"
    ],
    0,
    "Goffman'a göre engel dışarıdan anında görülüyorsa birey 'Discredited' (fark edilen) durumdadır ve bakışları yönetmeye çalışır.",
    "Dışarıdan hemen görünen engel (Goffman) = Discredited (Fark edilen)."
  ],
  [
    "Goffman'a göre epilepsi, diyabet veya hafif ruhsal engel gibi dışarıdan ilk bakışta anlaşılmayan ve bireyin 'Acaba söylesem mi yoksa saklasam mı?' ikilemi yaşadığı durum nedir?",
    [
      "Fark edilen (Discredited) kimlik",
      "Fark edilebilir / Gizlenebilir (Discreditable) kimlik",
      "Birincil koruma",
      "Ortopedik engel"
    ],
    1,
    "Görünmeyen engellerde bireyin temel sorunu 'bilgi kontrolüdür' (saklamak mı açıklamak mı); Goffman buna 'Discreditable' der.",
    "Görünmeyen/saklanabilen engel (Goffman) = Discreditable."
  ],
  [
    "Damgalanma korkusu yaşayan engelli bir bireyin kendi kendine 'Ben zaten dışarı çıkamam, insan içine karışmamalıyım' diyerek toplumun önyargısını kendi içinde kabul etmesine ne denir?",
    ["İçselleştirilmiş Damgalama (Self-Stigma)", "Pozitif Ayrımcılık", "Güçlendirme", "Kapsayıcı Eğitim"],
    0,
    "Toplumun olumsuz önyargılarının bireyin kendi iç sesine dönüşüp özsaygısını yıkmasına 'İçselleştirilmiş Damgalama' denir.",
    "Önyargıyı kendine yöneltip eve kapanma = İçselleştirilmiş damgalama."
  ],
  [
    "Engelli bir bireyin ailesinin veya annesinin de toplum tarafından 'yazık, engelli çocuğu var' denilerek dolaylı olarak damgalanmasına Goffman ne ad verir?",
    ["Kalıtsal damga", "Nezaket Damgası / Yakınlık Damgası (Courtesy Stigma)", "Makro damga", "Crip gururu"],
    1,
    "Goffman, engelli bireyin yakınlarının (ailesinin, eşinin) da toplumun damgalayıcı tutumundan pay almasına 'Courtesy Stigma' (Yakınlık/İlişki Damgası) adını verir.",
    "Ailenin/yakınların da damgalanması = Yakınlık Damgası (Courtesy Stigma)."
  ],
  [
    "Bireyi çevresiyle birlikte iç içe geçmiş 5 katmanlı bir sistem (Mikro, Mezo, Ekzo, Makro, Krono) içinde ele alan 'Ekolojik Sistemler Kuramı'nın kurucusu kimdir?",
    ["Erving Goffman", "Urie Bronfenbrenner", "Howard Becker", "Mike Oliver"],
    1,
    "Ekolojik Sistemler Kuramı Urie Bronfenbrenner tarafından geliştirilmiştir; sosyal hizmetin 'çevresi içinde birey' ilkesinin temel dayanağıdır.",
    "Ekolojik Sistemler (5 Halka) = Urie Bronfenbrenner."
  ],
  [
    "Bronfenbrenner'in Ekolojik Sistemler Kuramı'nda engelli bireyin her gün yüz yüze etkileşim kurduğu ailesi, evi ve sınıf arkadaşları hangi katmandadır?",
    ["Mikrosistem", "Mezosistem", "Ekzosistem", "Makrosistem"],
    0,
    "Bireyin en yakınında bulunan, doğrudan ve günlük ilişki kurduğu ev, aile ve okul ortamı 'Mikrosistem'dir.",
    "En iç halka (Birey + Aile + Ev) = Mikrosistem."
  ],
  [
    "Ekolojik Sistemler Kuramı'nda engelli çocuğun 'ailesi ile okulu arasındaki iletişim' veya 'ailesi ile rehabilitasyon merkezi arasındaki iş birliği' hangi sistemi oluşturur?",
    ["Mikrosistem", "Mezosistem (Mikrosistemler arası bağ)", "Ekzosistem", "Kronosistem"],
    1,
    "İki veya daha fazla mikrosistem (örneğin Aile ve Okul) arasındaki ilişki ve etkileşim ağına 'Mezosistem' denir.",
    "Aile ↔ Okul ↔ Hastane etkileşimi = Mezosistem."
  ],
  [
    "Engelli çocuğun kendisinin doğrudan içinde bulunmadığı ancak alınan kararların çocuğu dolaylı olarak etkilediği 'babanın iş yeri saatleri' veya 'belediye meclisi kararları' hangi katmandadır?",
    ["Mikrosistem", "Mezosistem", "Ekzosistem (Dış sistem)", "Biyosistem"],
    2,
    "Bireyin aktif olarak yer almadığı ama orada yaşananların bireyin hayatını etkilediği dolaylı çevreye 'Ekzosistem' denir.",
    "Bireyin içinde olmadığı ama etkilediği kurum (Babanın iş yeri/Belediye) = Ekzosistem."
  ],
  [
    "Toplumun engelliliğe dair kültürel değerleri, inançları, ekonomik düzeni ve devletin ulusal yasaları (5378 sayılı Kanun vb.) ekolojik kuramın hangi katmanıdır?",
    ["Mikrosistem", "Mezosistem", "Makrosistem", "Fizyolojik sistem"],
    2,
    "En geniş dış çerçeve olan kültür, ideoloji, ekonomi ve ulusal hukuk sistemi 'Makrosistem'dir.",
    "Kültür + Devlet Yasaları + Ekonomi = Makrosistem."
  ],
  [
    "Ekolojik Sistemler Kuramı'nda bireyin yaşam dönemlerini ve tarihsel zaman içindeki değişimleri (örneğin 1980'lerden 2026'ya engelli haklarının gelişimini) ifade eden boyut hangisidir?",
    ["Mikrosistem", "Ekzosistem", "Kronosistem (Zaman boyutu)", "Mezosistem"],
    2,
    "Krono 'zaman' demektir; hem bireyin yaş almasını hem de tarihsel dönemdeki toplumsal dönüşümleri ifade eder.",
    "Krono = Zaman ve tarihsel değişim boyutu."
  ],
  [
    "Rosemarie Garland-Thomson ve Jenny Morris gibi düşünürlerin geliştirdiği 'Feminist Engellilik Kuramı' aşağıdakilerden hangisini özellikle eleştirir?",
    [
      "Engelli kadınların 'cinsiyetsiz/aseksüel' görülmesini ve bakım emeğinin karşılıksız olarak hep kadınların (annelerin) sırtına yüklenmesini",
      "Rampaların geniş yapılmasını",
      "İşaret dili eğitimini",
      "Braille alfabesini"
    ],
    0,
    "Feminist Engellilik Kuramı; hem engelli kadınların annelik ve cinsellik rollerinin yok sayılmasını hem de bakım verenlerin büyük çoğunluğunun kadın olmasını (görünmeyen bakım emeği) vurgular.",
    "Görünmeyen kadın bakım emeği + Engelli kadın kimliği = Feminist Engellilik Kuramı."
  ],
  [
    "Toplumsal cinsiyet normlarında sağlam erkek veya sağlam kadın bedeninden farklı olan engelli kadınların 'eksik kadın' gibi algılanması hangi kuramın temel inceleme konusudur?",
    ["Feminist Engellilik Kuramı", "Biyomedikal Kuram", "Ahlaki Model", "Odyoloji"],
    0,
    "Feminist kuram, ataerkil güzellik ve beden standartlarının engelli kadınları nasıl çifte baskı altına aldığını inceler.",
    "Beden politikaları ve toplumsal cinsiyet = Feminist Engellilik Kuramı."
  ],
  [
    "Hukukçu Kimberlé Crenshaw tarafından ortaya atılan ve 'Engellilik + Kadın olma + Yoksulluk + Göçmenlik' gibi kimliklerin birleşerek ayrımcılığı katladığını anlatan kavram nedir?",
    ["Kesişimsellik (Intersectionality)", "Etiketleme", "Tıbbi Model", "Fetal Alkol Sendromu"],
    0,
    "Kesişimsellik (Intersectionality); farklı dezavantajlı kimliklerin (cinsiyet, sınıf, ırk, engellilik) bir yol kavşağı gibi kesişerek benzersiz ve katmerli bir eşitsizlik ürettiğini açıklar.",
    "Kimberlé Crenshaw + Çoklu kimlik (Engelli + Kadın + Yoksul) = Kesişimsellik."
  ],
  [
    "Kırsal bölgede yaşayan, yoksul, okuma yazma bilmeyen işitme engelli bir kadının yaşadığı sorunları tek başına ne sadece 'engellilikle' ne de sadece 'yoksullukla' açıklayamayacağımızı söyleyen kavram hangisidir?",
    ["Kesişimsellik (Intersectionality)", "Biçimsel Eşitlik", "Medikal Model", "Birincil Koruma"],
    0,
    "Birden fazla eşitsizlik ekseninin aynı anda bireyi etkilemesi Kesişimsellik yaklaşımıyla analiz edilir.",
    "Çoklu dezavantajların kesişimi = Kesişimsellik."
  ],
  [
    "Irkçılık (Racism) veya Cinsiyetçilik (Sexism) gibi, sağlam ve engelsiz bedeni 'üstün ve tek normal', engelli bedeni ise 'kusurlu ve aşağı' gören ayrımcı ideolojiye ne ad verilir?",
    ["Sağlamcılık (Ableism)", "Evrensel Tasarım", "Kapsayıcılık", "Empati"],
    0,
    "Sağlamcılık (Ableism); dünyayı sadece engelsiz bireylere göre tasarlayan ve engelli olmayı trajik bir eksiklik sayan ayrımcılık biçimidir.",
    "Sağlam bedeni üstün görme ideolojisi = Sağlamcılık (Ableism)."
  ],
  [
    "Eleştirel Engellilik Çalışmaları (Critical Disability Studies) engelliliği nasıl ele alır?",
    [
      "Sadece ortopedi doktorlarının çözeceği bir kemik sorunu olarak",
      "Güç ilişkileri, kapitalizm, sağlamcılık (ableism) ve normallik ideolojisinin sorgulanması gereken politik bir mesele olarak",
      "Kader ve günahların kefareti olarak",
      "Sadece yardım derneklerinin konusu olarak"
    ],
    1,
    "Eleştirel Engellilik Çalışmaları; toplumun 'normal insan' dayatmasını, kapitalist üretim ilişkilerini ve sağlamcılığı (ableism) kökünden sorgular.",
    "Normallik dayatmasını ve güç ilişkilerini sorgulama = Eleştirel Engellilik Çalışmaları."
  ],
  [
    "Robert McRuer tarafından geliştirilen ve toplumun herkese 'Zorunlu Engelsizlik' (Compulsory Able-bodiedness) dayatmasına başkaldıran radikal kuram hangisidir?",
    ["Crip Teorisi (Sakat / Topal Kuramı)", "Medikal Kuram", "Ahlaki Kuram", "Davranışçı Kuram"],
    0,
    "Crip Teorisi (Robert McRuer), Queer teoriden ilham alarak aşağılama amaçlı kullanılan 'Crip (Sakat/Topal)' kelimesini politik bir gurur ve direniş kavramına dönüştürür; 'Normal olmak zorunda değiliz!' der.",
    "Robert McRuer + Zorunlu engelsizliğe isyan = Crip Teorisi."
  ],
  [
    "Crip Teorisi'nde geçen 'Zorunlu Engelsizlik (Compulsory Able-bodiedness)' kavramı neyi anlatır?",
    [
      "Herkesin hastanede muayene olma zorunluluğunu",
      "Kültürün ve sistemin, herkesin sağlam ve yüksek performanslı bir bedene sahip olmayı arzulamak zorunda olduğunu varsaymasını",
      "İstihdam kotasını",
      "ÇÖZGER raporunu"
    ],
    1,
    "McRuer'e göre sistem, sağlam bedeni tek arzu edilir hedef olarak dayatır; Crip teorisi ise bu 'zorunlu engelsizlik' dayatmasını reddeder.",
    "Zorunlu Engelsizlik = Robert McRuer (Crip Teorisi)."
  ],
  [
    "Klasik Sosyal Model'in 'Engellilik sadece dışarıdaki merdivendedir' diyerek ihmal ettiği 'ağrı, yorgunluk, kas spazmı ve bedensel hisleri' merkeze alan yaklaşım hangisidir?",
    [
      "Bedenleşme (Embodiment) ve Yaşantı Temelli Yaklaşım",
      "Ahlaki Model",
      "Etiketleme Kuramı",
      "Biçimsel Eşitlik"
    ],
    0,
    "Bedenleşme (Embodiment) yaklaşımı, rampa yapılsa bile bireyin bedeninde yaşadığı kronik ağrı ve öznel bedensel deneyimin de sosyal hizmet tarafından duyulması gerektiğini savunur.",
    "Fiziksel ağrı + Öznel beden deneyimi = Bedenleşme (Embodiment)."
  ],
  [
    "Yaşantı Temelli (Fenomenolojik) Yaklaşım sosyal hizmet uzmanına ne öğütler?",
    [
      "Danışanı hiç dinlemeden sadece tıbbi rapor oranına bakmasını",
      "Engelli bireyin kendi bedenini ve hayatını nasıl deneyimlediğini, kendi öznel hikayesini merkeze almasını",
      "Sadece ailesiyle görüşüp bireyi odaya almamasını",
      "Bireyi kuruma kapatmasını"
    ],
    1,
    "Fenomenolojik / Yaşantı temelli yaklaşım, dışarıdan uzman gözüyle ahkâm kesmek yerine engelli bireyin kendi öznel deneyimini ve sesini dinlemeyi esas alır.",
    "Bireyin öznel hikayesi ve deneyimi = Yaşantı Temelli Yaklaşım."
  ],
  [
    "Medyada engelli bir bireyin sadece 'bakkaldan ekmek alması' veya 'üniversiteye gitmesi' gibi sıradan günlük eylemlerinin engelsiz izleyicileri ağlatıp motive etmek için abartılarak sunulmasına ne denir?",
    [
      "İlham Pornosu (Inspiration Porn) / Sağlamcı Nesneleştirme",
      "Evrensel Tasarım",
      "Makul Düzenleme",
      "Destekli Karar Verme"
    ],
    0,
    "Eleştirel engellilik çalışmalarında (Stella Young vb.), engelli bireylerin sıradan yaşamlarının engelsiz insanlara 'Şükret, bak adam o haliyle neler yapıyor' mesajı vermek için araçsallaştırılması eleştirilir.",
    "Engelliyi engelsizlere moral/ibret nesnesi yapma = İlham pornosu (Sağlamcılık)."
  ],
  [
    "Sanayi Devrimi ve kapitalizmin yükselişiyle birlikte 'standart fabrika makinesinde standart hızda çalışamayan bedenlerin' üretim dışına itilerek engelliliğin ekonomik olarak üretildiğini savunan yaklaşım hangisidir?",
    ["Materyalist / Marksist Eleştirel Engellilik Yaklaşımı", "Ahlaki Model", "Odyoloji", "Genetik Yaklaşım"],
    0,
    "Mike Oliver ve Finkelstein gibi kuramcılar, feodal tarım toplumunda herkes evinde üretime katılabilirken, Sanayi Devrimi'ndeki standart fabrika düzeninin engellileri iş gücü dışına ittiğini açıklar.",
    "Sanayi Devrimi + Fabrika hızı dışlaması = Materyalist/Eleştirel Kuram."
  ],
  [
    "Bir okulda öğretmenin öğrenme güçlüğü olan öğrenciye 'Bu çocuk zaten tembel ve kafası basmıyor' demesi üzerine çocuğun ders çalışmayı tamamen bırakması hangi iki kuramla doğrudan açıklanır?",
    [
      "Etiketleme Kuramı ve Damgalama (Stigma) Kuramı",
      "Ahlaki Model ve Öjeni",
      "Evrensel Tasarım ve Makul Düzenleme",
      "Fizyoterapi ve Ortez"
    ],
    0,
    "Öğretmenin yafta yapıştırması Etiketleme (Becker), çocuğun bu yüzden değersizleştirilip geri çekilmesi Damgalama (Goffman) kuramıdır.",
    "Öğretmen yaftası = Etiketleme | Örselenen kimlik = Damgalama."
  ],
  [
    "Ekolojik Sistemler Kuramı'na göre bir sosyal hizmet uzmanı engelli bir çocukla çalışırken neden sadece çocuğa psikolojik destek vermekle yetinmemelidir?",
    [
      "Çünkü çocukla konuşmak yasaktır",
      "Çünkü sorun sadece bireyde (mikro) değil; aile-okul ilişkisinde (mezo), belediye hizmetlerinde (ekzo) ve yasalarda (makro) da olabilir",
      "Çünkü sadece ilaç yazılması gerekir",
      "Çünkü sosyal hizmet sadece maddi yardım yapar"
    ],
    1,
    "Ekolojik kuram 'Çevresi İçinde Birey' ilkesini esas alır; bireyin güçlenmesi için mikro, mezo, ekzo ve makro katmanların tamamında müdahale gerekir.",
    "Ekolojik müdahale = Çevresi İçinde Birey (Tüm halkalara müdahale)."
  ],
  [
    "Aşağıdakilerden hangisi 'Sağlamcılık (Ableism)' içeren bir dil kullanımına örnektir?",
    [
      "Görme engelli birey",
      "Tekerlekli sandalye kullanan birey",
      "'Normal insanlar ve engelliler' veya 'Tekerlekli sandalyeye mahkûm'",
      "İşitme engelli yurttaş"
    ],
    2,
    "Engelsiz bireylere 'normal' demek, engelli bireyleri 'anormal' konumuna düşürür; 'sandalyeye mahkûm/bağlı' ifadesi ise tekerlekli sandalyeyi bir hapishane gibi gösterir (oysa sandalye özgürlük aracıdır).",
    "'Normal insanlar' veya 'Sandalyeye mahkûm' = Sağlamcı (Ableist) dil!"
  ],
  [
    "Sosyal hizmette 'Güçlendirme (Empowerment) Yaklaşımı'nın temel hedefi nedir?",
    [
      "Engelli bireyin yerine tüm kararları uzmanın alması",
      "Engelli bireyin kendi güçlü yönlerini fark etmesi, kaynaklara ulaşması ve kendi hayatı üzerinde kontrol/söz sahibi olması",
      "Bireyin bakım kurumuna kapatılması",
      "Sadece sadaka toplanması"
    ],
    1,
    "Güçlendirme yaklaşımı, danışanı pasif bir yardım alıcı olmaktan çıkarıp kendi yaşamının öznesi ve hak savunucusu haline getirmeyi amaçlar.",
    "Güçlendirme (Empowerment) = Bireyin kendi hayatı üzerinde söz sahibi olması."
  ],
  [
    "Goffman'ın Damgalama Kuramı'nda bireyin damgalı özelliğini gizlemek için harcadığı yoğun çabaya (örneğin işitme cihazını saçıyla kapatmaya çalışmasına) ne ad verilir?",
    ["Geçiş / Gizleme (Passing) ve Bilgi Yönetimi", "Evrensel Tasarım", "Makrosistem", "Rehabilitasyon"],
    0,
    "Goffman, damgalanabilir bireylerin 'normal' görünmek için engellerini gizleme çabasına 'Passing' (sağlam gibi geçinme/gizleme) adını verir.",
    "Engeli gizleyip 'normal' görünme çabası (Goffman) = Passing."
  ],
  [
    "Feminist Engellilik Kuramı'na göre 'bakım (care)' kavramı nasıl yeniden tanımlanmalıdır?",
    [
      "Bakım sadece annenin kutsal ve ücretsiz görevi olarak kalmalıdır",
      "Bakım bir acıma veya kadınların mecburi yükü değil; devletin desteklediği, hem bakım alanın hem bakım verenin özerkliğini koruyan kamusal bir hak olmalıdır",
      "Bakım tamamen kaldırılmalıdır",
      "Bakım sadece hastanelerde yapılmalıdır"
    ],
    1,
    "Feminist kuramcılar, bakımın kadınları eve hapseden görünmez bir yük olmaktan çıkarılıp kamusal sosyal politikalarla desteklenmesini savunur.",
    "Feminist kuram: Bakım sadece annenin yükü değil, kamusal sorumluluktur."
  ],
  [
    "Aşağıdaki eşleştirmelerden hangisi YANLIŞTIR?",
    [
      "Erving Goffman — Damgalama (Stigma) Kuramı",
      "Urie Bronfenbrenner — Ekolojik Sistemler Kuramı",
      "Kimberlé Crenshaw — Kesişimsellik (Intersectionality)",
      "Robert McRuer — Tıbbi (Medikal) Model"
    ],
    3,
    "Robert McRuer Tıbbi Modelin değil, sağlamcılığa ve zorunlu engelsizliğe karşı çıkan 'Crip Teorisi'nin kurucusudur.",
    "McRuer = Crip Teorisi (Tıbbi model değil!)."
  ],
  [
    "Sosyal İnşacı Yaklaşım 'dilin' (kelimelerin) engellilik üzerindeki rolünü nasıl açıklar?",
    [
      "Dilin hiçbir önemi yoktur",
      "Dil sadece durumu anlatmaz; 'sakat, çürük, özürlü, eksik' gibi kelimeler toplumsal hiyerarşiyi ve dışlamayı yeniden üretir",
      "Sadece tıp terimleri kullanılmalıdır",
      "Dil sadece biyolojiktir"
    ],
    1,
    "Sosyal inşacı yaklaşıma göre dil gerçekliği inşa eder; aşağılayıcı veya acıyıcı kavramlar bireyin toplumdaki konumunu doğrudan zedeler.",
    "Sosyal İnşa: Dil, engellilik algısını ve dışlamayı üretir."
  ],
  [
    "Ekolojik kuramda 'Anne-babanın engelli çocuklarının okulundaki öğretmenlerle düzenli toplantı yapıp ortak hareket etmesi' hangi sistemin güçlü olduğunu gösterir?",
    ["Mezosistem", "Kronosistem", "Biyolojik sistem", "Ahlaki model"],
    0,
    "Ev (mikrosistem) ile Okul (mikrosistem) arasındaki güçlü iletişim bağı sağlıklı bir Mezosistem örneğidir.",
    "Ev + Okul iş birliği = Güçlü Mezosistem."
  ],
  [
    "Belediyenin şehirdeki tüm otobüsleri alçak tabanlı ve rampalı hale getirme kararı alması Ekolojik Kuram'da hangi sistemlerden hangilerine olumlu yansır?",
    [
      "Ekzosistem / Makrosistem kararının bireyin Mikrosistemine (günlük hayatına) olumlu yansıması",
      "Sadece tıbbi sisteme",
      "Sadece genetik sisteme",
      "Hiçbir sisteme yansımaz"
    ],
    0,
    "Belediye meclisi (Ekzosistem) ve ulusal erişilebilirlik yasaları (Makrosistem), bireyin günlük yaşamını (Mikrosistem) doğrudan özgürleştirir.",
    "Üst sistem kararları (Ekzo/Makro) -> Bireyin günlük yaşamını (Mikro) etkiler."
  ],
  [
    "Bedenleşme (Embodiment) kuramı neden 'Sadece mimari engelleri kaldırmak her zaman yetmez' der?",
    [
      "Çünkü rampalara karşıdır",
      "Çünkü dünyadaki tüm binalara rampa yapılsa bile, ağır MS veya kronik ağrısı olan bir bireyin bedensel yorgunluğu ve tıbbi destek ihtiyacı devam eder",
      "Çünkü tıbbi modele geri dönmek ister",
      "Çünkü eğitimi gereksiz görür"
    ],
    1,
    "Bedenleşme kuramı, çevresel düzenlemelerin şart olduğunu kabul eder ama bedenin biyolojik gerçekliğini (ağrı, yorgunluk, tedavi ihtiyacı) yok saymamak gerektiğini hatırlatır.",
    "Bedenleşme: Rampa şarttır ama bedensel ağrı/deneyim de gerçektir."
  ],
  [
    "Engelli bir bireyin hastaneye gittiğinde doktorun soruyu bireyin kendisine değil de yanındaki refakatçisine ('Nesi var bunun?') diye sorması hangi kavramlarla açıklanır?",
    [
      "Bireyi özne yerine nesneleştirme, Damgalama ve Sağlamcılık",
      "Destekli karar verme",
      "Evrensel tasarım",
      "Güçlendirme yaklaşımı"
    ],
    0,
    "Yetişkin bir engelli bireyi yok sayıp yanındaki kişiyle konuşmak, bireyin özerkliğini ezen sağlamcı (ableist) ve damgalayıcı bir tutumdur.",
    "Birey yerine refakatçiyle konuşmak = Nesneleştirme & Sağlamcılık."
  ],
  [
    "Goffman'a göre toplumun damgaladığı bireylerin kendi aralarında bir araya gelerek oluşturdukları destek ve dayanışma gruplarına (örneğin Sağırlar Derneği veya Omurilik Felçlileri Derneği) ne denir?",
    ["Kendi Grubu / Bizimkiler (The Own)", "Yabancılar", "Bürokrasi", "Tıbbi Kurul"],
    0,
    "Goffman, aynı damgayı taşıyan ve birbirini en iyi anlayan akran grubunu 'The Own' (Kendi grubu), onları anlayan duyarlı profesyonelleri/yakınları ise 'The Wise' (Bilgeler) olarak adlandırır.",
    "Goffman: Aynı deneyimi paylaşan akranlar = The Own | Duyarlı uzman/yakınlar = The Wise."
  ]
];

// Additional targeted questions for Unit 1 & Unit 2 to reach 65 + 60 = 125 questions
const UNIT_1_EXTRA: RawQ[] = [
  [
    "Engellilik tanımlanırken kullanılan 'Biyopsikososyal' kavramındaki 3 bileşen sırasıyla nelerdir?",
    [
      "Biyolojik (Beden) + Psikolojik (Bireysel/Ruhsal) + Sosyal (Çevresel/Toplumsal)",
      "Ekonomik + Siyasal + Askeri",
      "Doğum öncesi + Doğum sırası + Doğum sonrası",
      "Ahlaki + Dini + Geleneksel"
    ],
    0,
    "Biyopsikososyal yaklaşım engelliliği tek bir nedene indirgemez; biyolojik yapı, bireyin psikolojisi ve sosyal çevrenin etkileşimi olarak görür.",
    "Biyo (Beden) + Psiko (Ruhsal) + Sosyal (Çevre) = Biyopsikososyal."
  ],
  [
    "Aşağıdakilerden hangisi 'Görme Engellilik' grubunda kullanılan yardımcı teknolojilerden biridir?",
    [
      "Koklear implant",
      "Ekran okuyucu yazılımlar (JAWS, NVDA) ve Beyaz Baston",
      "İşitme cihazı",
      "Alt ekstremite protezi"
    ],
    1,
    "Ekran okuyucu programlar bilgisayar/telefon ekranındaki metinleri seslendirerek görme engellilerin dijital erişimini sağlar; beyaz baston ise bağımsız hareket aracıdır.",
    "Ekran okuyucu + Beyaz baston + Braille = Görme engelli destekleri."
  ],
  [
    "İç kulaktaki hasar nedeniyle işitme cihazından fayda göremeyen ileri/çok ileri derecede işitme kayıplı bireylere cerrahi olarak takılan elektronik cihaza ne ad verilir?",
    ["Snellen cihazı", "Koklear İmplant (Biyonik Kulak)", "Braille daktilosu", "Ortez"],
    1,
    "Koklear implant (biyonik kulak), iç kulaktaki salyangoz (koklea) içine yerleştirilerek ses sinyallerini doğrudan işitme sinirine ileten elektronik cihazdır.",
    "İç kulak cerrahi işitme desteği = Koklear İmplant (Biyonik Kulak)."
  ],
  [
    "İşitme engelli bireylerin görsel-uzamsal olarak elleri, yüz ifadeleri ve beden diliyle kurdukları doğal dile ne ad verilir?",
    ["Braille Dili", "Türk İşaret Dili (TİD)", "Mors Alfabesi", "Fonoloji"],
    1,
    "Türk İşaret Dili (TİD), işitme engelli/sağır toplumunun kendine özgü dilbilgisi kuralları olan doğal dilidir.",
    "İşitme engellilerin doğal görsel dili = Türk İşaret Dili (TİD)."
  ],
  [
    "Aşağıdakilerden hangisi zihinsel yetersizliğin sınıflandırılmasında kullanılan geleneksel 4 dereceden biridir?",
    [
      "Hafif, Orta, Ağır ve Çok Ağır düzeyde zihinsel yetersizlik",
      "Prelingual ve Postlingual",
      "Parapleji ve Tetrapleji",
      "Az gören ve Kör"
    ],
    0,
    "Zihinsel yetersizlik eğitsel ve klinik olarak Hafif, Orta, Ağır ve Çok Ağır olmak üzere 4 düzeyde sınıflandırılır.",
    "Zihinsel engel dereceleri = Hafif - Orta - Ağır - Çok Ağır."
  ],
  [
    "21. kromozom çiftinde fazladan bir kromozom bulunması (Trizomi 21) sonucu ortaya çıkan ve zihinsel gelişim geriliğiyle seyreden genetik durum hangisidir?",
    ["Down Sendromu (Trizomi 21)", "Fetal Alkol Sendromu", "Serebral Palsi", "Multipl Skleroz"],
    0,
    "Down Sendromu (Trizomi 21), 46 yerine 47 kromozom bulunmasıyla oluşan doğum öncesi (genetik) bir durumdur.",
    "Trizomi 21 (47 kromozom) = Down Sendromu."
  ],
  [
    "Özel öğrenme güçlüğü türlerinden 'Diskalkuli' hangi alandaki güçlüğü ifade eder?",
    [
      "Okuma güçlüğü",
      "Matematiksel işlem, sayı ve aritmetik kavramları öğrenme güçlüğü",
      "Yazı yazma güçlüğü",
      "Denge güçlüğü"
    ],
    1,
    "Disleksi = Okuma güçlüğü, Disgrafi = Yazma güçlüğü, Diskalkuli = Matematik/aritmetik güçlüğüdür.",
    "Diskalkuli = Matematik | Disleksi = Okuma | Disgrafi = Yazma."
  ],
  [
    "Özel öğrenme güçlüğü türlerinden 'Disgrafi' ne anlama gelir?",
    [
      "Yazılı anlatım, harfleri doğru yazma ve el yazısı koordinasyonu güçlüğü",
      "İşitme kaybı",
      "Görme alanı kaybı",
      "Kas erimesi"
    ],
    0,
    "Disgrafi, zekası normal olan bireyin yazma becerilerinde yaşadığı özgül öğrenme güçlüğüdür.",
    "Disgrafi = Yazma güçlüğü."
  ],
  [
    "Çocukluk çağında başlayan, dikkati sürdürmede zorluk, aşırı hareketlilik ve dürtüsellik (sonunu düşünmeden hareket etme) ile karakterize gelişimsel durum nedir?",
    ["DEHB (Dikkat Eksikliği ve Hiperaktivite Bozukluğu)", "Sağırlık", "Ortopedik engel", "Afazi"],
    0,
    "Dikkat Eksikliği ve Hiperaktivite Bozukluğu (DEHB); dikkatsizlik, aşırı hareketlilik ve dürtüsellik belirtileriyle seyreder.",
    "Dikkatsizlik + Aşırı hareketlilik + Dürtüsellik = DEHB."
  ],
  [
    "Aşağıdakilerden hangisi 'Dil ve Konuşma Güçlüğü' kapsamındaki bozukluklardan biridir?",
    [
      "Kekemelik ve artikülasyon (sesletim) bozukluğu",
      "Astigmat",
      "Böbrek yetmezliği",
      "Skolyoz"
    ],
    0,
    "Kekemelik (akıcılık bozukluğu), seslerin yanlış çıkarılması (artikülasyon bozukluğu) ve ses bozuklukları Dil ve Konuşma Güçlüğü grubundadır.",
    "Kekemelik ve sesletim bozukluğu = Dil ve Konuşma Güçlüğü."
  ],
  [
    "Engellilik modellerinden hangisi 'hayırseverlik, sadaka ve acıma' duygusunu temel alır?",
    ["Ahlaki / Geleneksel Model", "Sosyal Model", "İnsan Hakları Modeli", "Biyopsikososyal Model"],
    0,
    "Ahlaki ve hayırseverlik modeli engelli bireye bir 'hak sahibi' olarak değil, sevap kazanmak için sadaka verilecek bir 'yardım nesnesi' olarak bakar.",
    "Acıma ve sevap/sadaka = Ahlaki / Hayırseverlik Modeli."
  ],
  [
    "Medikal (Tıbbi) Model'de sosyal çalışmacının (sosyal hizmet uzmanının) rolü nasıl daraltılmıştır?",
    [
      "Toplumu ve yasaları değiştiren hak savunucusu",
      "Doktorun tedavi planına bireyin ve ailesinin uyum sağlamasına yardımcı olan yardımcı personel",
      "Erişilebilirlik denetçisi",
      "Bağımsız yaşam koçu"
    ],
    1,
    "Tıbbi modelde merkezde doktor vardır; sosyal hizmet uzmanından sadece hastanın tedaviyi kabullenmesini (uyumunu) sağlaması beklenir.",
    "Tıbbi modelde uzman rolü = Bireyi tedaviye ve duruma 'uyum' ettirmek."
  ],
  [
    "Sosyal Model'de sosyal hizmet uzmanının temel rolü aşağıdakilerden hangisidir?",
    [
      "Bireyin bozuk organını ameliyat etmek",
      "Ayrımcı yasaları, fiziksel engelleri ve toplumsal önyargıları ortadan kaldırmak için bireyle birlikte hak savunuculuğu yapmak",
      "Bireye kaderine razı olmasını öğütlemek",
      "Bireyi toplumdan uzak bir bakım evine kapatmak"
    ],
    1,
    "Sosyal modelde uzman; savunucu, güçlendirici ve çevresel engelleri değiştiren politik bir aktördür.",
    "Sosyal modelde uzman rolü = Hak savunuculuğu ve çevreyi değiştirme."
  ],
  [
    "Aşağıdakilerden hangisi doğum sırasında bebeğin beyninin oksijensiz kalmasını ifade eden tıbbi terimdir?",
    ["Asfiksi (Hipoksi)", "Disleksi", "Ekolali", "Stigma"],
    0,
    "Doğum esnasında kordon dolanması veya zor doğum nedeniyle bebeğin oksijensiz kalmasına 'Asfiksi / Hipoksi' denir ve Serebral Palsi'nin en önemli nedenlerinden biridir.",
    "Doğumda oksijensiz kalma = Asfiksi / Hipoksi."
  ],
  [
    "Yenidoğan bebekte ağır sarılığın (bilirubin yüksekliğinin) zamanında tedavi edilmemesi sonucu beyin çekirdeklerinin hasar görmesine ne denir?",
    ["Kernikterus", "Otizm", "Disgrafi", "Skolyoz"],
    0,
    "Kan uyuşmazlığı veya ağır yenidoğan sarılığı tedavi edilmezse bilirubin beyne yerleşerek 'Kernikterus' (zihinsel engel, işitme kaybı ve serebral palsi) yapar.",
    "Ağır sarılığın beyne vurması = Kernikterus."
  ],
  [
    "İki gözle görme keskinliği tam (10/10) olsa bile, bir kişinin 'Yasal Kör' sayılabilmesi için görme alanı açısının (tünel görüşü) kaç dereceden daha dar olması gerekir?",
    ["90 derece", "60 derece", "20 derece", "5 derece"],
    2,
    "Merkezi görmesi olsa bile çevre görmesini kaybedip bir dürbünden/borudan bakar gibi 20 dereceden dar açıyla gören kişiler de yasal olarak 'Kör' kabul edilir.",
    "Görme alanı < 20 derece = Yasal Körlük."
  ],
  [
    "Aşağıdakilerden hangisi 'Süreğen (Kronik) Hastalıklar' grubunda yer alan bir engellilik durumudur?",
    ["Talasemi (Akdeniz Anemisi) ve Hemofili", "Ön kol kırığı", "Kekemelik", "Renk körlüğü"],
    0,
    "Talasemi, hemofili, kistik fibrozis, diyabet, kronik böbrek yetmezliği ve kalp hastalıkları süreğen (kronik) hastalıklar grubundadır.",
    "Talasemi, Hemofili, Diyabet, Böbrek = Süreğen hastalık."
  ],
  [
    "Bir çocuğun zeka puanı (IQ) 65 çıkmasına rağmen, günlük yaşam becerilerinde ve sosyal uyumunda hiçbir sorun yoksa sadece IQ puanına bakılarak zihinsel engel tanısı konulabilir mi?",
    [
      "Evet, sadece IQ testi yeterlidir",
      "Hayır! Hem zihinsel işlevlerde gerilik hem de 'uyumsal davranışlarda' (öz bakım, iletişim, sosyal beceri) sınırlılık bir arada olmalıdır",
      "Sadece öğretmen karar verir",
      "Sadece 30 yaşından sonra tanı konur"
    ],
    1,
    "Zihinsel yetersizlik tanısı için 2 şart birlikte aranır: 1. Genel zeka işlevlerinde gerilik, 2. Uyumsal davranışlarda (günlük yaşam) yetersizlik.",
    "Zihinsel engel = Düşük IQ + Uyumsal davranış geriliği (İkisi şart!)."
  ],
  [
    "Engellilik alanında 'Kapsayıcı / Kaynaştırma Eğitimi' (Inclusive Education) hangi modelin bir sonucudur?",
    [
      "Ahlaki Model",
      "Sosyal Model ve İnsan Hakları Modeli",
      "Tıbbi Tecrit Modeli",
      "Öjeni Modeli"
    ],
    1,
    "Engelli çocukları ayrı yatılı okullara kapatmak Tıbbi/Kurumsal modelin ürünüdür; akranlarıyla aynı sınıfta desteklenerek eğitim almaları ise Sosyal ve İnsan Hakları modelinin sonucudur.",
    "Akranlarla aynı okulda kaynaştırma = Sosyal & İnsan Hakları Modeli."
  ],
  [
    "Engellilik tarihindeki 'Kurumsallaşma (Institutionalization)' dönemi neyi ifade eder?",
    [
      "Engellilerin üniversite kurmasını",
      "19. ve 20. yüzyılda engelli ve ruhsal hastalığı olan bireylerin şehir dışındaki dev bakımhane ve akıl hastanelerine kapatılarak toplumdan tecrit edilmesini",
      "Evde bakım hizmetini",
      "EKPSS sınavını"
    ],
    1,
    "Tıbbi model döneminde engelli bireyler aile ve toplumdan koparılarak devasa yatılı kurumlara (asylum/bakımhane) kapatılmıştır; bugün ise bunun tersi olan 'Kurumsuzlaştırma / Toplum Temelli Bakım' savunulur.",
    "Dev bakımhanelere kapatma = Kurumsallaşma (Institutionalization)."
  ],
  [
    "Bireylerin dev yatılı bakım kurumlarından çıkarılıp kendi evlerinde ve mahallelerinde destek hizmetleriyle yaşamalarını savunan politika nedir?",
    ["Kurumsuzlaştırma (Deinstitutionalization) / Toplum Temelli Yaşam", "Tıbbi Yatış", "Öjeni", "Ahlaki Tecrit"],
    0,
    "İnsan Hakları Modeli (BM CRPD Madde 19), kapalı kurumlar yerine toplum içinde bağımsız yaşamı (Deinstitutionalization) zorunlu kılar.",
    "Kapalı kurumdan toplum içi yaşama geçiş = Kurumsuzlaştırma."
  ],
  [
    "Aşağıdakilerden hangisi Otizm Spektrum Bozukluğu olan bireylerde sık görülen 'duyusal hassasiyet' örneklerinden biridir?",
    [
      "Yüksek seslere, parlak floresan ışığa veya kıyafet etiketlerinin dokunuşuna aşırı tepki verme",
      "Görme açısının 20 derece olması",
      "Balthazard formülü",
      "Kas distrofisi"
    ],
    0,
    "Otizmli bireylerde ses, ışık, koku ve dokunma gibi duyusal uyaranlara karşı aşırı duyarlılık (hiper-sensitivite) veya az duyarlılık sık görülür.",
    "Ses, ışık ve dokunmaya aşırı tepki = Otizm duyusal hassasiyet."
  ],
  [
    "Konuşmayı öğrendikten sonra (örneğin 12 yaşında geçirilen menenjit veya travma sonucu) ortaya çıkan işitme kaybına ne ad verilir?",
    ["Prelingual işitme kaybı", "Postlingual (konuşma sonrası) işitme kaybı", "Konjenital sağırlık", "Afazi"],
    1,
    "Postlingual işitme kaybı, birey dili ve konuşmayı edindikten sonra meydana geldiği için bireyin mevcut konuşma hafızası korunabilir.",
    "Postlingual = Konuşmayı öğrendikten sonraki işitme kaybı."
  ],
  [
    "İletişim türüne göre işitme kaybı türleri sınıflandırıldığında; dış ve orta kulaktaki ses iletim sorunlarından kaynaklanan ve tıbbi/cerrahi müdahaleyle düzeltilebilen kayıp türü hangisidir?",
    ["İletim tipi işitme kaybı", "Sensörinöral (sinirsel) işitme kaybı", "Merkezi işitme kaybı", "Kör-sağırlık"],
    0,
    "Dış kulak yolu veya orta kulak kemikçikleri/kulak zarı sorunlarından kaynaklanan kayıplar 'İletim tipi'dir; iç kulak ve işitme siniri hasarı ise 'Sensörinöral (sinirsel)' tiptir.",
    "Dış/Orta kulak = İletim tipi | İç kulak/Sinir = Sensörinöral."
  ],
  [
    "İnsan Hakları Modeli'ne göre 'Engellilik' kavramı insanlık durumu açısından nasıl değerlendirilir?",
    [
      "Utanılacak bir aile sırrı olarak",
      "İnsan çeşitliliğinin ve insanlık durumunun doğal, onurlu bir parçası olarak",
      "Ortadan kaldırılması gereken bir anormallik olarak",
      "Sadece doktorların ilgileneceği bir vaka olarak"
    ],
    1,
    "BM Sözleşmesi (Madde 3), engellilerin farklılıklarına saygı gösterilmesini ve engelliliğin insan çeşitliliğinin doğal bir parçası olarak kabul edilmesini temel ilke sayar.",
    "İnsan Hakları Modeli: Engellilik = İnsan çeşitliliğinin doğal parçası."
  ]
];

const UNIT_2_EXTRA: RawQ[] = [
  [
    "Erving Goffman'ın Damgalama Kuramı'nda tanımladığı 3 ana damga (stigma) türü aşağıdakilerden hangisidir?",
    [
      "1. Bedensel farklılıklar (fiziksel engel), 2. Bireysel karakter kusurları (ruhsal hastalık, bağımlılık), 3. Etnik/Dini/Irksal grup damgaları",
      "Mikro, Mezo, Makro",
      "Doğum öncesi, sırası, sonrası",
      "Hafif, orta, ağır"
    ],
    0,
    "Goffman damgayı 3 grupta inceler: Bedensel damgalar (ortopedik/görme vb.), karakter/davranışla ilişkilendirilen damgalar (akıl hastalığı, sabıka) ve kabile/grup damgaları (ırk, etnisite, din).",
    "Goffman 3 Damga Türü = Bedensel + Karakter/Ruhsal + Grup/Etnik."
  ],
  [
    "Bir kişinin sadece görme engelli olduğu için aynı zamanda 'zekasının da düşük olduğu' veya 'hiçbir karar veremeyeceği' yönündeki toplumsal yanılgıya damgalama kuramında ne denir?",
    ["Damganın Yayılması Etkisi (Spread Effect)", "Evrensel Tasarım", "Makul Düzenleme", "Ekolali"],
    0,
    "Bireyin tek bir duyu veya organındaki yetersizliğin, onun tüm kişiliğine ve zekasına genellenmesine 'Yayılma Etkisi (Spread Effect)' denir.",
    "Tek bir engeli tüm zekaya/kişiliğe genelleme = Yayılma Etkisi (Spread)."
  ],
  [
    "Etiketleme Kuramı'nda (Howard Becker) bireyin sahip olduğu ilk biyolojik farklılığa 'Birincil Sapma' denirken, toplumun etiketi yüzünden bireyin dışlanmış rolünü kabul edip yaşam tarzını değiştirmesine ne denir?",
    ["İkincil Sapma (Secondary Deviation)", "Birincil Koruma", "Evrensel Tasarım", "Kronosistem"],
    0,
    "Toplumun yapıştırdığı etiketin bireyin kimliğine dönüşmesi ve bireyin 'damgalanmış rolüne' uygun davranmaya başlaması 'İkincil Sapma'dır.",
    "Etiketin kimliğe dönüşmesi = İkincil Sapma."
  ],
  [
    "Ekolojik Sistemler Kuramı'na göre 'Türkiye'de 2005 yılında 5378 sayılı Engelliler Hakkında Kanun'un çıkarılması ve yıllar içinde erişilebilirlik algısının değişmesi' hangi iki sistemi birlikte örneklendirir?",
    ["Makrosistem ve Kronosistem", "Sadece Mikrosistem", "Sadece Biyolojik Sistem", "Ahlaki Model"],
    0,
    "Ulusal yasalar Makrosistemi, yıllar içindeki tarihsel değişim ise Kronosistemi (zaman boyutunu) temsil eder.",
    "Yasa = Makrosistem | Tarihsel süreç = Kronosistem."
  ],
  [
    "Engelli çocuğu olan bir annenin, iş yerindeki patronunun esnek çalışma izni vermemesi yüzünden işten ayrılmak zorunda kalması ve çocuğun evde maddi sıkıntı yaşaması Ekolojik Kuram'da hangi sistemin etkisidir?",
    ["Ekzosistem", "Mikrosistem", "Biyosistem", "Genetik sistem"],
    0,
    "Çocuk annenin iş yerinde bizzat bulunmaz ama iş yerinin (Ekzosistem) kararı çocuğun hayatını doğrudan etkiler.",
    "Ebeveynin iş yeri koşulları = Ekzosistem."
  ],
  [
    "Feminist Engellilik Kuramı'nın kurucularından Rosemarie Garland-Thomson'ın ortaya attığı ve toplumun hayalindeki 'kusursuz, genç, sağlam, bağımsız beyaz erkek' standardını ifade eden kavram nedir?",
    ["Normat (Normate)", "Stigma", "Mezosistem", "Ortez"],
    0,
    "Garland-Thomson, kültürün ürettiği hayali ve ayrıcalıklı 'kusursuz normal insan' figürüne 'Normate (Normat)' adını verir.",
    "Garland-Thomson + Hayali kusursuz insan kalıbı = Normat (Normate)."
  ],
  [
    "Feminist Engellilik Kuramı neden 'Tıbbi kürtaj ve doğum öncesi genetik taramaların sunuluş biçimine' eleştirel yaklaşır?",
    [
      "Tıbba tamamen karşı olduğu için",
      "Engelli bir bebek dünyaya getirmenin 'trajedi ve yük' olarak kodlanıp engelli yaşamların değersizleştirilmesi (yeni öjeni) riskine dikkat çektiği için",
      "Hastaneleri kapatmak istediği için",
      "Aşıya karşı olduğu için"
    ],
    1,
    "Feminist ve eleştirel engellilik kuramcıları, genetik taramaların 'engelli hayat yaşanmaya değmez' mesajı vererek sağlamcılığı (ableism) güçlendirmesini tartışmaya açar.",
    "Engelli yaşamın değersiz sayılması eleştirisi = Feminist & Eleştirel Kuram."
  ],
  [
    "Kesişimsellik (Intersectionality) kavramı ilk olarak hangi alanda ortaya çıkmış ve daha sonra engellilik çalışmalarına uyarlanmıştır?",
    [
      "Kimberlé Crenshaw tarafından Siyah kadınların hem ırkçılık hem cinsiyetçilik yaşamalarını açıklamak için hukuk ve siyah feminizm alanında",
      "Ortopedi cerrahisinde",
      "Odyoloji laboratuvarlarında",
      "Mimari mühendislikte"
    ],
    0,
    "Kimberlé Crenshaw (1989), siyah kadınların yaşadığı çifte ayrımcılığı açıklamak için Kesişimsellik (Intersectionality) kavramını geliştirmiş, ardından engellilik çalışmalarına (Engelli + Kadın + Yoksul) taşınmıştır.",
    "Crenshaw (1989) -> Irk + Cinsiyet + Engellilik = Kesişimsellik."
  ],
  [
    "Aşağıdakilerden hangisi 'Kurumsal Sağlamcılık (Institutional Ableism)' örneğidir?",
    [
      "Bir kişinin yolda tekerlekli sandalyeliye bakması",
      "Üniversite sınavında görme engelli adaylara Braille kitapçık veya ekran okuyucu sağlanmaması ve erişimsiz sınav sistemi kurulması",
      "Grip olunması",
      "Yağmur yağması"
    ],
    1,
    "Bireysel önyargının ötesinde, devlet kurumlarının, okulların veya sınav sistemlerinin engelsiz bireyleri varsayarak engellileri dışlayıcı şekilde tasarlanması 'Kurumsal Sağlamcılık'tır.",
    "Kurumların sadece sağlamları varsayan sistemi = Kurumsal Sağlamcılık."
  ],
  [
    "İçselleştirilmiş Sağlamcılık (Internalized Ableism) ne demektir?",
    [
      "Engelli bireyin toplumun sağlamcı değerlerini benimseyerek kendi engelinden utanması, diğer engellilerden uzak durmaya çalışması ve kendini 'eksik' hissetmesi",
      "Belediyenin rampa yapması",
      "Devletin maaş bağlaması",
      "Doktorun ameliyat yapması"
    ],
    0,
    "Engelli bireyin, içinde büyüdüğü sağlamcı kültürün mesajlarını içselleştirerek kendi bedeninden ve engelli kimliğinden nefret etmesine 'İçselleştirilmiş Sağlamcılık' denir.",
    "Engelli bireyin kendi engelinden utanması = İçselleştirilmiş Sağlamcılık."
  ],
  [
    "Crip Teorisi'nin 'Zaman' kavramına getirdiği 'Crip Time (Sakat Zamanı)' kavramı neyi anlatır?",
    [
      "Saatin bozuk olmasını",
      "Kapitalist toplumun 'hızlı yürü, hızlı konuş, 8 saat aralıksız çalış' standart zaman dayatması yerine; zamanı engelli bedenin hızına, dinlenme ve bakım ihtiyacına göre esnetmeyi",
      "Sınavın sabah yapılmasını",
      "Kronosistemi"
    ],
    1,
    "Crip Time; herkesin aynı hızda giyinip, aynı hızda merdiven çıkıp, aynı hızda konuşamayacağını savunarak zamanı bedenin ihtiyaçlarına göre esneten özgürleştirici bir kavramdır.",
    "Crip Time = Zamanı standart hıza değil, engelli bedenin ritmine göre esnetmek."
  ],
  [
    "Crip Teorisi ile Queer Teori arasındaki en önemli ortak nokta nedir?",
    [
      "İkisi de tıbbi modeli savunur",
      "İkisi de toplumun dayattığı 'Normal / Standart' (normatiflik) kalıplarına karşı çıkar ve dışlanan kimlikleri politik bir özgüvene dönüştürür",
      "İkisi de sadece çocuklarla ilgilenir",
      "İkisi de hastanelerde uygulanır"
    ],
    1,
    "Robert McRuer, Queer teorinin heteronormativiteyi sorgulamasından yola çıkarak Crip teorisiyle 'sağlam beden normativitesini' (zorunlu engelsizliği) sorgulamıştır.",
    "Crip & Queer ortaklığı = 'Normal' dayatmasına (normativiteye) karşı çıkmaları."
  ],
  [
    "Sosyal Hizmet uygulamasında 'Baskı Karşıtı Uygulama (Anti-Oppressive Practice)' engellilik alanında neyi hedefler?",
    [
      "Danışana sessizce uymayı öğretmeyi",
      "Engelli bireyin maruz kaldığı damgalama, sağlamcılık, yoksulluk ve kesişimsel güç eşitsizliklerini fark edip bunlara karşı birlikte mücadele etmeyi",
      "Sadece rapor oranını hesaplamayı",
      "Danışanı kuruma yatırmayı"
    ],
    1,
    "Baskı karşıtı sosyal hizmet, engelliliği bireysel bir trajedi değil toplumsal bir baskı ve eşitsizlik sorunu olarak ele alır.",
    "Baskı Karşıtı Uygulama = Sağlamcılık ve eşitsizlikle mücadele."
  ],
  [
    "Goffman'a göre engelli bireyin insanlarla tanışırken yaşadığı 'Acaba bana nasıl tepki verecekler, acıyacaklar mı?' gerginliği hangi kavramla ilgilidir?",
    ["Karma Temaslar (Mixed Contacts) ve Etkileşim Gerginliği", "Evrensel Tasarım", "Makul Düzenleme", "Balthazard"],
    0,
    "Goffman, damgalı birey ile 'normal' sayılan bireylerin karşılaştığı sosyal anlara 'Karma Temaslar (Mixed Contacts)' der ve bu anlarda her iki tarafın da belirsizlik/gerginlik yaşadığını belirtir.",
    "Damgalı ve engelsiz bireyin ilk karşılaşma gerginliği (Goffman) = Karma Temaslar."
  ],
  [
    "Sosyal inşacı yaklaşıma göre 'Zeka Testleri (IQ)' ve 'Normal Çan Eğrisi' kavramları nasıl değerlendirilir?",
    [
      "Doğanın mutlak ve değişmez kanunu olarak",
      "Modern devletin ve eğitim sisteminin insanları sınıflandırmak ve 'standart dışı' olanları ayıklamak için ürettiği sosyal/tarihsel araçlar olarak",
      "Ahlaki bir mucize olarak",
      "Evrensel tasarım olarak"
    ],
    1,
    "Sosyal inşacı ve eleştirel kuramcılar, istatistiksel 'ortalama insan' ve IQ çan eğrisinin 19. yüzyıldan itibaren insanları 'normal/anormal' diye etiketlemek için inşa edildiğini vurgular.",
    "Çan eğrisi ve normallik standardı = Sosyal/Tarihsel inşa."
  ],
  [
    "Bir sosyal hizmet uzmanının engelli bireyin sadece 'ne yapamadığına ve eksiklerine' değil, 'yeteneklerine, kaynaklarına ve dayanıklılığına' odaklanması hangi kuramdır?",
    ["Güçler Perspektifi (Strengths Perspective) ve Güçlendirme", "Tıbbi Patoloji Modeli", "Etiketleme Kuramı", "Ahlaki Model"],
    0,
    "Saleebey'in Güçler Perspektifi ve Güçlendirme yaklaşımı, tıbbi modelin 'eksiklik/arıza avcılığını' reddeder; bireyin ve çevresinin potansiyeline odaklanır.",
    "Eksiklere değil potansiyele odaklanma = Güçler Perspektifi."
  ],
  [
    "Aşağıdakilerden hangisi 'Paternalizm (Babacıllık / Korumacı Tahakküm)' kavramını engellilik açısından en iyi açıklar?",
    [
      "Babaların çocuklarıyla oyun oynaması",
      "'Senin iyiliğin için ben senin adına karar veriyorum, sen bilemezsin' diyerek engelli bireyin özerkliğini ve seçme hakkını elinden alan aşırı korumacı tutum",
      "Babaların doğum izni alması",
      "Destekli karar verme modeli"
    ],
    1,
    "Hem Tıbbi Modelde hem de geleneksel aile yapısında sık görülen Paternalizm, 'iyilik yapma' maskesi altında yetişkin engelli bireye çocuk muamelesi yapıp karar hakkını gasp etmektir.",
    "'Senin iyiliğin için senin yerine karar verdim' = Paternalizm (Aşırı korumacı baskı)."
  ],
  [
    "Yetişkin bir engelli bireye sokakta veya kurumda küçük bir çocukmuş gibi konuşulması ('Aferin sana, ne kadar da tatlısın') hangi damgalama biçimidir?",
    ["Çocuklaştırma (Infantilization)", "Güçlendirme", "Evrensel Tasarım", "Mezosistem"],
    0,
    "Engelli yetişkinlere yaşlarına uygun saygınlıkla yaklaşmak yerine onları küçük bir çocuk gibi sevmek veya azarlamak 'Çocuklaştırma (Infantilization)' olarak adlandırılır.",
    "Yetişkin engelliye çocuk muamelesi yapma = Çocuklaştırma (Infantilization)."
  ],
  [
    "Ekolojik kuramda 'Aile içi roller, anne-baba tutumu ve kardeş ilişkileri' hangi sistemin alt parçasıdır?",
    ["Mikrosistem", "Makrosistem", "Kronosistem", "Ekzosistem"],
    0,
    "Aile içi dinamikler, ebeveyn-çocuk ve kardeş ilişkileri doğrudan Mikrosistem içinde yer alır.",
    "Aile ve kardeş ilişkileri = Mikrosistem."
  ],
  [
    "Engelli bireylerin yaşadığı fiziksel ağrıyı veya yorgunluğu anlatırken 'Şikayet edersem beni zayıf görürler' diyerek acılarını gizlemek zorunda kalmaları hangi iki kuramın kesişiminde tartışılır?",
    [
      "Bedenleşme (Embodiment) ve Sağlamcılık (Ableism)",
      "Odyoloji ve Snellen",
      "Biçimsel Eşitlik ve Kota",
      "Doğum Öncesi ve Doğum Sırası"
    ],
    0,
    "Sağlamcı toplumun 'hep güçlü ve süper engelli olmalısın' baskısı yüzünden bireyin gerçek bedensel ağrısını bastırmak zorunda kalması Bedenleşme kuramının temel eleştirisidir.",
    "Ağrıyı saklama baskısı = Sağlamcılık & Bedenleşme."
  ]
];

export const UNIT_1_2_QUESTIONS: QuizQuestion[] = [
  ...[...UNIT_1_RAW, ...UNIT_1_EXTRA].map((item, idx) => ({
    id: `u1-q${idx + 1}`,
    unitId: "unit-1",
    question: item[0],
    options: item[1],
    correctIndex: item[2],
    simpleExplanation: item[3],
    keepInMind: item[4]
  })),
  ...[...UNIT_2_RAW, ...UNIT_2_EXTRA].map((item, idx) => ({
    id: `u2-q${idx + 1}`,
    unitId: "unit-2",
    question: item[0],
    options: item[1],
    correctIndex: item[2],
    simpleExplanation: item[3],
    keepInMind: item[4]
  }))
];
