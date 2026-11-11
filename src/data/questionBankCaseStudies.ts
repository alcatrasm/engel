import { QuizQuestion } from "./courseData";
import { UNIT_1_2_QUESTIONS } from "./questionBankUnit12";
import { UNIT_3_4_QUESTIONS } from "./questionBankUnit34";

type RawScenarioQ = [
  string, // unitId
  string, // question
  [string, string, string, string],
  number,
  string,
  string
];

const SCENARIO_QUESTIONS_RAW: RawScenarioQ[] = [
  [
    "unit-1",
    "Vaka: 32 yaşındaki Ahmet Bey, iş kazası sonucu sağ elinin iki parmağını kaybetmiştir. Hastane sağlık kurulu kendisine '%28 engel oranı' vermiştir. Devlet Memurları Kanunu'na (DMK) göre Ahmet Bey engelli memur kadrosuna başvurabilir mi?",
    [
      "Evet, %10 üzeri her rapor yeterlidir",
      "Hayır, DMK'ya göre resmi sağlık kurulu raporunda en az %40 oranında kayıp bulunması şarttır",
      "Evet, sadece parmak kaybı olması yeterlidir",
      "Sadece 50 yaşından sonra başvurabilir"
    ],
    1,
    "DMK kapsamında engelli haklarından ve EKPSS memur kadrosundan yararlanabilmek için sağlık kurulu raporunun en az %40 olması gerekir; %28 yasal sınırın altındadır.",
    "DMK yasal engellilik sınırı = En az %40 rapor."
  ],
  [
    "unit-1",
    "Vaka: Epilepsi hastası olan Zeynep Hanım normal zamanlarda hiçbir belirti göstermemekte, ancak ayda bir kez nöbet geçirmektedir. Zeynep Hanım'ın bu durumu Engellilik Hizmetleri Yasası'ndaki hangi kavramla doğrudan tanımlanır?",
    [
      "Epizodik (aralıklarla / nöbetler halinde gelen) kapasite azalması",
      "Doğuştan ortopedik engel",
      "Prelingual sağırlık",
      "Kör-sağırlık"
    ],
    0,
    "Sürekli görünmeyen, nöbet veya ataklar halinde ortaya çıkan epilepsi ve MS gibi durumlar 'epizodik' engellilik kapsamındadır.",
    "Nöbet/Atak halinde gelen durum = Epizodik."
  ],
  [
    "unit-1",
    "Vaka: 4 yaşındaki Kerem; ismine seslenildiğinde bakmamakta, göz teması kurmamakta, oyuncak arabaları sürmek yerine saatlerce tekerleğini çevirmekte ve sorulan soruları papağan gibi aynen tekrarlamaktadır (ekolali). Bu belirtiler 2 yaşından beri vardır. Kerem'in durumu IDEA'ya göre hangisidir?",
    [
      "Otizm Spektrum Bozukluğu (OSB)",
      "Özel Öğrenme Güçlüğü (Disleksi)",
      "Ortopedik Yetersizlik",
      "Postlingual İşitme Kaybı"
    ],
    0,
    "3 yaşından önce başlayan göz teması azlığı, ekolali ve tekrarlayıcı (stereotipik) davranışlar Otizm Spektrum Bozukluğu'nun tipik tanı kriterleridir.",
    "3 yaş öncesi + Göz teması azlığı + Ekolali + Tekrarlayıcı hareket = Otizm."
  ],
  [
    "unit-1",
    "Vaka: İlkokul 3. sınıf öğrencisi Elif'in yapılan WISC-R zeka testinde IQ puanı 105 (normal) çıkmıştır. Ancak Elif okurken 'b' ile 'd' harflerini sürekli karıştırmakta ve yaşıtlarına göre çok yavaş okumaktadır. Elif'in durumu nedir?",
    [
      "Zihinsel Yetersizlik",
      "Özel Öğrenme Güçlüğü (Disleksi)",
      "Otizm",
      "Ağır İşitme"
    ],
    1,
    "Zekası normal (IQ 105) olduğu halde okuma ve harfleri ayırt etmede yaşanan özgül zorluk 'Özel Öğrenme Güçlüğü (Disleksi)'dir.",
    "Normal IQ + Harf karıştırma/okuma güçlüğü = Disleksi (Özel Öğrenme Güçlüğü)."
  ],
  [
    "unit-1",
    "Vaka: Göz doktoru muayenesinde gözlükle bile normal bir insanın 6 metreden okuyabildiği harfi ancak 50 santimetreden okuyabilen Hasan Bey'in durumu nedir?",
    [
      "Yasal olarak Kör (Görme Engelli)",
      "Tamamen sağlam",
      "Sadece renk körü",
      "İşitme engelli"
    ],
    0,
    "Normal gözün 6 metreden gördüğünü 60 cm veya daha yakından (50 cm) görebilen kişi (1/10 altı) yasal olarak 'Kör' kabul edilir.",
    "6 metreyi <= 60 cm'den görme = Yasal Körlük."
  ],
  [
    "unit-1",
    "Vaka: 22 yaşındaki üniversite öğrencisi, geçirdiği motosiklet kazasında bacağını kaybetmiştir. Bu durum zihinsel yetersizlik tanımındaki '16 yaş kuralı' ile karşılaştırıldığında hangi sonuca ulaşılır?",
    [
      "Zihinsel yetersizlik 16 yaş öncesi gelişim döneminde başlarken, ortopedik/fiziksel engellilik yaşamın her yaşında (doğum sonrası kazayla da) oluşabilir",
      "Ortopedik engel de sadece 16 yaş öncesi olur",
      "22 yaşında oluşan kayıp engel sayılmaz",
      "Kaza doğum öncesi nedendir"
    ],
    0,
    "Zihinsel yetersizlik tanısı için 16 yaş öncesi (gelişim dönemi) şartı vardır; oysa fiziksel/ortopedik veya süreğen engellilik her yaşta ortaya çıkabilir.",
    "Zihinsel engel = 16 yaş öncesi | Fiziksel/Süreğen engel = Her yaşta olabilir."
  ],
  [
    "unit-1",
    "Vaka: Köyde doğuştan engelli doğan bir çocuk için komşuların 'Babası gençliğinde haram yemişti, Allah da çocuğunu böyle yaratarak cezalandırdı' demesi hangi engellilik modelidir?",
    ["Ahlaki (Dini/Geleneksel) Model", "Sosyal Model", "İnsan Hakları Modeli", "Biyopsikososyal Model"],
    0,
    "Engelliliği anne-babanın günahına veya ilahi cezaya bağlayan anlayış Ahlaki Modeldir.",
    "Günah ve ilahi ceza yorumu = Ahlaki Model."
  ],
  [
    "unit-1",
    "Vaka: Bir belediye başkanının 'Şehrimizdeki engelliler için her Ramazan ayında yardım kolisi dağıtıyoruz ve onları sevindiriyoruz, rampa yapmaya gerek yok' demesi hangi iki yaklaşımın karşıtlığını gösterir?",
    [
      "Başkan 'Hayırseverlik/Ahlaki Model' ile hareket etmekte, 'Sosyal/İnsan Hakları Modeli'nin gerektirdiği erişilebilirlik yükümlülüğünü ise ihlal etmektedir",
      "Başkan Evrensel Tasarım yapmaktadır",
      "Başkan Crip Teorisini uygulamaktadır",
      "Başkan ICF modelini uygulamaktadır"
    ],
    0,
    "Hak olan rampayı (erişilebilirliği) yapmayıp sadaka/yardım kolisiyle yetinmek tipik Hayırseverlik yaklaşımıdır ve İnsan Hakları modeline aykırıdır.",
    "Rampa (Hak) yerine Koli (Sadaka) = Hayırseverlik Yaklaşımı."
  ],
  [
    "unit-1",
    "Vaka: 8 yaşındaki işitme engelli çocuk, işitme cihazı taktığında öğretmenin sesini duyabilmekte ve konuşulanları anlayabilmektedir. Bu çocuğun durumu IDEA'ya göre nedir?",
    ["Ağır İşitme (Hard of Hearing)", "Tam Sağırlık (Deafness)", "Kör-sağırlık", "Otizm"],
    0,
    "Cihaz yardımıyla konuşmayı işitme yoluyla algılayabilen bireyler 'Sağır' değil, 'Ağır İşitme' grubunda tanımlanır.",
    "Cihazla konuşmayı duyabiliyorsa = Ağır İşitme."
  ],
  [
    "unit-1",
    "Vaka: Kronik böbrek yetmezliği nedeniyle haftada 3 gün diyalize giren ve çalışma gücü %70 oranında azalan 45 yaşındaki Ayşe Hanım hangi engel grubunda yer alır?",
    [
      "Süreğen (Kronik) Hastalık / Fiziksel Engellilik",
      "Zihinsel Engellilik",
      "Özel Öğrenme Güçlüğü",
      "Otizm Spektrum Bozukluğu"
    ],
    0,
    "Sürekli bakım ve tedavi gerektiren böbrek yetmezliği, kalp ve diyabet gibi durumlar 'Süreğen (Kronik) Hastalık' grubundadır.",
    "Diyaliz / Böbrek / Kalp / Diyabet = Süreğen (Kronik) Engel."
  ],
  [
    "unit-1",
    "Vaka: Yenidoğan yoğun bakım ünitesinde dünyaya gelen bir bebekte, annenin gebelik boyunca yoğun alkol tükettiği öğrenilmiştir. Bebekte küçük baş çevresi (mikrosefali), yüz anomalileri ve gelişim geriliği saptanmıştır. Tanı nedir?",
    ["Fetal Alkol Sendromu (FAS)", "Postlingual sağırlık", "İş kazası", "Balthazard sendromu"],
    0,
    "Gebelikte alkol kullanımına bağlı gelişen organ/yüz anomalisi ve zihinsel gelişim geriliği tablosu Fetal Alkol Sendromu'dur.",
    "Gebelikte alkol + Mikrosefali/Düşük IQ = Fetal Alkol Sendromu."
  ],
  [
    "unit-1",
    "Vaka: Bir apartman yönetiminde tekerlekli sandalyeli komşunun bina girişine rampa yapılması talebi 'Binanın görüntüsünü bozar' denilerek reddedilmiştir. Sosyal Model'e göre buradaki asıl 'engel' nedir?",
    [
      "Komşunun bacaklarının tutmaması",
      "Apartman yönetiminin önyargılı tutumu (tutum engeli) ve rampasız bina girişi (çevresel engel)",
      "Tekerlekli sandalyenin markası",
      "Komşunun yaşı"
    ],
    1,
    "Sosyal modele göre kişiyi eve hapseden şey bacakları değil, rampasız merdiven (çevresel engel) ve bina yönetiminin ayrımcı tutumudur (tutum engeli).",
    "Sosyal Model: Engel bedende değil, rampasız bina ve önyargılı tutumdadır."
  ],
  [
    "unit-1",
    "Vaka: Hem ileri derecede görme kaybı hem de ileri derecede işitme kaybı olan bir çocuğun eğitim planlaması yapılırken IDEA yasasına göre neden 'Çoklu Yetersizlik' yerine özel bir kategori kullanılır?",
    [
      "Çünkü 'Kör-Sağırlık (Deaf-Blindness)' dokunsal iletişim gibi çok özel eğitim yöntemleri gerektirdiği için başlı başına ayrı bir kategoridir",
      "Çünkü bu çocuklar hiç eğitim alamaz",
      "Çünkü sadece gözlükle düzelir",
      "Çünkü sadece işitme cihazıyla düzelir"
    ],
    0,
    "IDEA'da Kör-Sağırlık, sadece görme veya sadece işitme engelliler için hazırlanan programlarla karşılanamayacağı için Çoklu Yetersizlikten ayrı tutulmuştur.",
    "Kör-Sağırlık = Çoklu yetersizlikten ayrı, kendine özgü kategori."
  ],
  [
    "unit-1",
    "Vaka: Bir bebeğe doğumdan hemen sonra topuk kanı testi yapılmış, Fenilketonüri tespit edilerek hemen özel mama/diyet başlanmış ve çocuğun zihinsel engelli olması tamamen önlenmiştir. Bu uygulama hangi koruma düzeyidir?",
    ["İkincil Koruma (Erken Tanı ve Erken Müdahale)", "Üçüncül Koruma", "Ahlaki Model", "Etiketleme"],
    0,
    "Hastalık doğuştan var olduğu halde erken tarama (topuk kanı) ile yakalanıp kalıcı özre dönüşmesinin engellenmesi 'İkincil Koruma'dır.",
    "Topuk kanı ile erken yakalayıp engeli önleme = İkincil Koruma."
  ],
  [
    "unit-2",
    "Vaka: Yüzünde doğuştan büyük bir yanık izi olan Selim Bey, otobüse bindiğinde insanların kendisine dik dik baktığını veya yanına체 oturmadığını fark etmekte ve bu yüzden sadece gece karanlığında dışarı çıkmaktadır. Goffman'a göre Selim Bey'in durumu nedir?",
    [
      "Fark Edilen / Gözden Düşmüş (Discredited) Damga ve Sosyal İzolasyon",
      "Evrensel Tasarım",
      "Kronosistem",
      "Pozitif Ayrımcılık"
    ],
    0,
    "Dışarıdan ilk bakışta görülen fiziksel farklılıklar Goffman'ın kuramında 'Discredited (Fark edilen)' damgadır.",
    "Yüzdeki iz / Tekerlekli sandalye (Hemen görünen) = Discredited Damga."
  ],
  [
    "unit-2",
    "Vaka: Şizofreni tanısı alan ve ilaçlarıyla semptomları kontrol altında olan Murat Bey, yeni girdiği iş yerinde dışarıdan tamamen 'sağlam' görünmektedir. Ancak 'Ya hastalığımı öğrenirlerse beni işten atarlar mı?' korkusuyla sürekli diken üstündedir. Goffman buna ne ad verir?",
    [
      "Fark Edilebilir / Gizlenebilir (Discreditable) Damga ve Bilgi Yönetimi",
      "Fiziksel Engel",
      "Mezosistem",
      "Ortopedik Engel"
    ],
    0,
    "Dışarıdan görünmeyen ancak öğrenildiğinde damgalanma riski taşıyan durumlara Goffman 'Discreditable (Fark edilebilir)' der.",
    "Dışarıdan görünmeyen, saklanan tanı = Discreditable Damga."
  ],
  [
    "unit-2",
    "Vaka: Otizmli bir çocuğun annesi, çocuğunu parka götürdüğünde diğer ebeveynlerin 'Çocuğuna terbiye verememiş, ne biçim anne' diyerek kendisini de dışladığını anlatmaktadır. Goffman'a göre annenin maruz kaldığı bu durum nedir?",
    [
      "Yakınlık / İlişki Damgası (Courtesy Stigma)",
      "Makul Düzenleme",
      "Biyomedikal Model",
      "Kapsayıcı Eğitim"
    ],
    0,
    "Damgalanan bireyin ailesinin ve yakınlarının da toplum tarafından damgalanmasına 'Yakınlık Damgası (Courtesy Stigma)' denir.",
    "Ailenin de damgalanması = Courtesy Stigma (Yakınlık Damgası)."
  ],
  [
    "unit-2",
    "Vaka: Sosyal hizmet uzmanı, Serebral Palsili 10 yaşındaki Ali'nin okula devamsızlık yaptığını fark eder. Ali'nin annesi ile sınıf öğretmeninin hiç konuşmadığını ve birbirini suçladığını görür. Uzman, anne ile öğretmeni bir araya getirip ortak bir iletişim planı kurar. Uzman Ekolojik Kuram'ın hangi katmanına müdahale etmiştir?",
    ["Mezosistem (Aile-Okul etkileşimi)", "Kronosistem", "Biyolojik sistem", "Genetik sistem"],
    0,
    "Aile (mikro) ile Okul (mikro) arasındaki ilişki ve iletişimi güçlendirmek doğrudan 'Mezosistem' müdahalesidir.",
    "Aile ve Okulu bir araya getirme = Mezosistem müdahalesi."
  ],
  [
    "unit-2",
    "Vaka: İlçedeki belediye yönetiminin engelli taşıma aracını bütçe kısıtlaması nedeniyle iptal etmesi sonucu, ilçedeki 15 engelli gencin rehabilitasyon merkezine gidememesi Ekolojik Kuram'da hangi sistemin etkisidir?",
    ["Ekzosistem", "Mikrosistem", "Fizyolojik sistem", "Ahlaki sistem"],
    0,
    "Gençlerin yönetiminde bizzat yer almadığı yerel yönetim/belediye kararlarının onların günlük hayatını etkilemesi 'Ekzosistem'dir.",
    "Belediye hizmet kararı = Ekzosistem."
  ],
  [
    "unit-2",
    "Vaka: Suriye'den göç etmiş, Türkçe bilmeyen, yoksul ve tekerlekli sandalye kullanan 19 yaşındaki Meryem'in sağlık hizmetine erişirken hem dil engeli, hem yoksulluk, hem kadın olma hem de engellilik nedeniyle çok katmanlı dışlanma yaşaması hangi kuramla açıklanır?",
    [
      "Kesişimsellik (Intersectionality - Kimberlé Crenshaw)",
      "Biçimsel Eşitlik",
      "Tıbbi Model",
      "Odyoloji"
    ],
    0,
    "Göçmenlik + Yoksulluk + Kadınlık + Engellilik kimliklerinin kesişerek ayrımcılığı katlaması 'Kesişimsellik' kavramının en net örneğidir.",
    "Göçmen + Kadın + Yoksul + Engelli = Kesişimsellik (Intersectionality)."
  ],
  [
    "unit-2",
    "Vaka: Üniversitedeki bir engelli öğrenci topluluğunun 'Biz kusurlu değiliz, sağlamcı (ableist) standartlarınıza uymayı reddediyoruz ve farklı bedenlerimizle gurur duyuyoruz!' diyerek kampüste festival düzenlemesi hangi kurama örnektir?",
    ["Crip Teorisi ve Eleştirel Engellilik Çalışmaları", "Ahlaki Model", "Tıbbi Model", "Etiketleme Kuramı"],
    0,
    "Sağlamcılığa (ableism) ve zorunlu normalliğe karşı çıkıp engelli kimliğini politik bir özgüven ve gurura dönüştürmek Crip Teorisi'dir.",
    "Sağlamcılığa başkaldırı ve engelli gururu = Crip Teorisi."
  ],
  [
    "unit-2",
    "Vaka: Ağır romatoid artriti ve fiziksel engeli olan bir danışan, sosyal hizmet uzmanına 'Rampalar yapılsa bile sabahları eklemlerimdeki şiddetli ağrı yüzünden yataktan kalkmakta çok zorlanıyorum' demiştir. Bu deneyim hangi kuramın önemini gösterir?",
    [
      "Bedenleşme (Embodiment) ve Yaşantı Temelli Yaklaşım",
      "Ahlaki Model",
      "Biçimsel Eşitlik",
      "Etiketleme Kuramı"
    ],
    0,
    "Sadece dış çevreye odaklanmanın yetmeyeceğini, bedenin yaşadığı gerçek ağrı ve yorgunluğun da dikkate alınması gerektiğini vurgulayan kuram 'Bedenleşme'dir.",
    "Bedensel ağrı ve yorgunluk gerçeği = Bedenleşme (Embodiment)."
  ],
  [
    "unit-2",
    "Vaka: 30 yaşındaki görme engelli avukat Can Bey'e adliyedeki bir görevlinin 'Aferin sana delikanlı, bak gözün görmüyor ama ne güzel çantanı taşıyorsun' diyerek başını okşamaya kalkması hangi sağlamcı tutumdur?",
    [
      "Çocuklaştırma (Infantilization) ve Paternalizm",
      "Destekli Karar Verme",
      "Makul Düzenleme",
      "Evrensel Tasarım"
    ],
    0,
    "Yetişkin ve meslek sahibi bir engelli bireye küçük bir çocukmuş gibi davranılması 'Çocuklaştırma (Infantilization)' ve sağlamcılıktır.",
    "Yetişkin engelliye çocuk gibi davranma = Çocuklaştırma."
  ],
  [
    "unit-2",
    "Vaka: Engelli çocuğuna 18 yıldır tek başına bakan 52 yaşındaki Fatma Hanım, sosyal hizmet uzmanına 'Artık belim tutmuyor, 10 yıldır bir gün bile tatile veya komşuya gidemedim, kimse bana nasıl olduğumu sormuyor' demiştir. Bu durum hangi iki kavramla açıklanır?",
    [
      "Feminist Engellilik Kuramı (Görünmeyen Kadın Bakım Emeği) ve Bakım Veren Yükü",
      "Biçimsel Eşitlik ve Kota",
      "Prelingual ve Postlingual",
      "Ortez ve Protez"
    ],
    0,
    "Bakım emeğinin kadınların sırtına yüklenmesi Feminist Engellilik Kuramı ile, annenin yaşadığı tükenmişlik ise Bakım Veren Yükü (Caregiver Burden) ile açıklanır.",
    "Annenin tükenmişliği = Görünmeyen Kadın Bakım Emeği & Bakım Veren Yükü."
  ],
  [
    "unit-3",
    "Vaka: Bir kamu kurumu yaptığı işe alım sınavında görme engelli aday Mehmet Bey'e diğer adaylarla tamamen aynı kağıt kitapçığı ve aynı 60 dakikayı vermiş, 'Biz herkese eşit davranıyoruz' demiştir. Kurumun bu uygulaması nedir?",
    [
      "Biçimsel (Şekli) Eşitliktir; Maddi (Gerçek) Eşitliği ve Makul Düzenlemeyi ihlal ettiği için ayrımcılıktır!",
      "Maddi Eşitliktir",
      "Evrensel Tasarımdır",
      "Pozitif Ayrımcılıktır"
    ],
    0,
    "Farklı durumda olan görme engelli adaya Braille/okuyucu ve ek süre vermeden 'herkese aynı kağıdı verdik' demek Biçimsel Eşitliktir ve gerçekte ayrımcılıktır.",
    "Farklı ihtiyacı yok sayıp 'herkese aynı kural' demek = Biçimsel Eşitlik (Adaletsizlik)."
  ],
  [
    "unit-3",
    "Vaka: Bir yazılım şirketinde işe başlayan işitme engelli mühendis Burak Bey, toplantılarda konuşulanları takip edebilmek için şirket bilgisayarında ücretsiz canlı altyazı özelliğinin açılmasını talep etmiş, ancak müdürü bunu reddetmiştir. Müdürün bu reddi 5378 sayılı Kanun ve CRPD'ye göre nedir?",
    [
      "Makul Düzenlemenin Reddi = Engelliliğe Dayalı Ayrımcılık!",
      "Yasal bir tasarruf",
      "Evrensel tasarım",
      "Destekli karar verme"
    ],
    0,
    "Şirkete aşırı yük getirmeyen kişiye özel bu uyarlama 'Makul Düzenleme'dir; reddedilmesi hem CRPD Madde 5 hem de 5378 sayılı Kanun'a göre doğrudan ayrımcılıktır.",
    "Makul düzenleme talebini reddetmek = Ayrımcılık!"
  ],
  [
    "unit-3",
    "Vaka: Yeni inşa edilen bir şehir kütüphanesinin girişinin hiç basamaksız düz ayak yapılması, kapıların sensörlü olması ve tüm katlara geniş asansör konulması hangi kavramın en güzel örneğidir?",
    [
      "Evrensel Tasarım (Universal Design)",
      "Tıbbi Model",
      "Ahlaki Model",
      "Etiketleme"
    ],
    0,
    "Binanın sonradan tek bir kişi için tadilat edilmek yerine en baştan herkes (engelli, yaşlı, çocuk arabalı) için erişilebilir inşa edilmesi 'Evrensel Tasarım'dır.",
    "En baştan herkes için engelsiz tasarım = Evrensel Tasarım."
  ],
  [
    "unit-3",
    "Vaka: Hafif düzeyde zihinsel engeli olan 26 yaşındaki Emre, kendi kazandığı maaşıyla hangi telefonu alacağına karar vermek istemektedir. CRPD Madde 12'ye göre Emre'ye nasıl yaklaşılmalıdır?",
    [
      "Hemen mahkemeden vasi atanıp tüm imza yetkisi elinden alınmalıdır (İkame karar)",
      "Destekli Karar Verme modeliyle, telefonların özellikleri ve bütçesi kendisine sade bir dille anlatılarak kendi seçimini yapması desteklenmelidir",
      "Maaşına el konulmalıdır",
      "Telefon kullanması yasaklanmalıdır"
    ],
    1,
    "BM CRPD Madde 12, kişinin iradesini yok sayan vesayet (ikame karar) yerine 'Destekli Karar Verme'yi esas alır.",
    "CRPD Md. 12 = Vesayet yerine Destekli Karar Verme."
  ],
  [
    "unit-3",
    "Vaka: Tekerlekli sandalye kullanan Derya Hanım, evinden çıkıp rampalı otobüse binmiş, metro asansörünü kullanmış ancak gideceği noterlik 2. katta olduğu ve binada asansör bulunmadığı için işlemini yaptıramadan eve dönmüştür. Bu durum neyi kanıtlar?",
    [
      "Erişim Zinciri'nin 5. halkası (bina girişi/asansör) koptuğu için önceki tüm erişilebilir halkaların işlevsiz kaldığını",
      "Otobüslerin gereksiz olduğunu",
      "Tıbbi modelin doğruluğunu",
      "Sadece evden çıkmamak gerektiğini"
    ],
    0,
    "Erişim Zinciri (Ev -> Kaldırım -> Durak -> Taşıt -> Bina -> Bilgi) bir bütündür; tek bir halka koparsa sonuçta hizmete erişilemez.",
    "Erişim Zinciri: Son halkada asansör yoksa tüm yolculuk boşa gider!"
  ],
  [
    "unit-3",
    "Vaka: Özel bir kreşin sahibi, Down sendromlu 4 yaşındaki bir çocuğu 'Diğer veliler istemiyor' diyerek kaydetmeyi reddetmiştir. Devletin bu kreşi denetleyip ayrımcılık cezası kesmesi devletin hangi insan hakları yükümlülüğüdür?",
    [
      "Koruma (Protect) Yükümlülüğü (3. kişilerin/özel sektörün hak ihlalini önleme)",
      "İhlal etme",
      "Ahlaki model",
      "Öjeni"
    ],
    0,
    "Devletin özel kişilerin ve özel kurumların (kreşin) engelli bireye ayrımcılık yapmasını engellemesi ve cezalandırması 'Koruma (Protect)' yükümlülüğüdür.",
    "Özel kreşin/şirketin ayrımcılığını önleme = Devletin Koruma (Protect) yükümlülüğü."
  ],
  [
    "unit-4",
    "Vaka: 19 yaşındaki yüzücü Kaan, sığ suya balıklama atlama sonucu boyun omuru (C5 servikal) kırığı yaşamış ve hem kollarında hem bacaklarında felç gelişmiştir. Kaan'ın tıbbi durumu nedir?",
    ["Tetrapleji (Kuadripleji)", "Parapleji", "Hemipleji", "Serebral Palsi"],
    0,
    "Boyun (servikal) omuriliği yaralanması sonucu 4 uzvun (iki kol + iki bacak) etkilenmesine Tetrapleji (Kuadripleji) denir.",
    "Boyun kırığı + 4 uzuv felci = Tetrapleji."
  ],
  [
    "unit-4",
    "Vaka: 5 yaşındaki Serebral Palsili (SP) Defne'nin ailesi, sosyal hizmet uzmanına 'Çocuğumuzun beynindeki hasar her geçen yıl büyüyüp daha da kötüleşecek mi?' diye endişeyle sormuştur. Uzmanın doğru cevabı ne olmalıdır?",
    [
      "'Hayır, Serebral Palsi ilerleyici (progresif) bir hastalık DEĞİLDİR; beyindeki hasar büyümez, aksine düzenli fizyoterapi, ergoterapi ve özel eğitimle çocuğun becerileri gelişir'",
      "'Evet, her yıl beyin hasarı iki katına çıkar'",
      "'Serebral Palsi bulaşıcı bir hastalıktır'",
      "'Hiçbir rehabilitasyon işe yaramaz'"
    ],
    0,
    "Serebral Palsi'de beyindeki lezyon sabittir, ilerleyici değildir; doğru rehabilitasyonla çocuğun hareket ve günlük yaşam kapasitesi artar.",
    "Serebral Palsi = İlerleyici DEĞİLDİR, rehabilitasyonla gelişir."
  ],
  [
    "unit-4",
    "Vaka: 7 yaşındaki ağır otizmli ve bakıma ihtiyacı olan Çınar için ailesi hastaneden sağlık kurulu raporu almıştır. Çınar 18 yaşından küçük olduğu için raporunda 'Tam Bağımlı' yerine hangi ibare yer alır?",
    [
      "ÇÖZGER Raporu — 'Özel Koşul Gereksinimi Vardır (ÖKGV)'",
      "Erişkin Raporu — '%95 Ağır Özürlü'",
      "Balthazard Raporu",
      "Maluliyet Raporu"
    ],
    0,
    "18 yaş altı çocuklara ÇÖZGER verilir ve en üst bakım gereksinimi düzeyi 'Özel Koşul Gereksinimi Vardır (ÖKGV)' olarak yazılır.",
    "18 yaş altı çocukta en üst bakım raporu = ÇÖZGER (ÖKGV)."
  ],
  [
    "unit-4",
    "Vaka: 100 işçi çalıştıran özel bir fabrika ile 100 işçi çalıştıran bir kamu kurumu, 4857 sayılı İş Kanunu'na göre en az kaç engelli işçi çalıştırmak zorundadır?",
    [
      "Özel fabrika en az 3 (%3), Kamu işyeri en az 4 (%4) engelli işçi",
      "İkisi de 10'ar işçi",
      "Özel fabrika 1, Kamu 1 işçi",
      "Hiç zorunluluk yoktur"
    ],
    0,
    "4857 sayılı İş Kanunu'na göre 50+ işçi çalıştıran özel sektör %3 (100 işçide 3 kişi), kamu işyerleri ise %4 (100 işçide 4 kişi) engelli işçi çalıştırmak zorundadır.",
    "100 işçide kota: Özel = 3 kişi (%3) | Kamu = 4 kişi (%4)."
  ],
  [
    "unit-4",
    "Vaka: 'Tam Bağımlı' engelli sağlık kurulu raporu olan 70 yaşındaki felçli dedesine evde bakan gelini, Sosyal Hizmet Merkezi'ne 'Evde Bakım Yardımı' (2828 Ek Madde 7) için başvurmuştur. Gelir incelemesinde hangi sınır kontrol edilir?",
    [
      "Hane içinde kişi başına düşen ortalama aylık gelirin net asgari ücretin 2/3'ünden (üçte ikisinden) az olup olmadığı",
      "Asgari ücretin 1/10'undan az olup olmadığı",
      "Asgari ücretin 5 katı olup olmadığı",
      "Hiçbir gelir şartı yoktur"
    ],
    0,
    "Evde Bakım Yardımı'nda 'Tam Bağımlı (veya ÖKGV)' rapor şartı yanında, hane içi kişi başı gelirin net asgari ücretin 2/3'ünden az olması şartı aranır.",
    "Evde Bakım Yardımı gelir sınırı = Asgari ücretin 2/3'ü."
  ],
  [
    "unit-4",
    "Vaka: %55 engelli sağlık kurulu raporu olan ve hiçbir geliri/sigortası bulunmayan 28 yaşındaki Bekir Bey, 2022 sayılı Kanun kapsamında 'Engelli Aylığı' almak için Sosyal Yardımlaşma ve Dayanışma Vakfı'na (SYDV) başvurmuştur. Gelir kriteri nedir?",
    [
      "Hane içinde kişi başına düşen ortalama aylık gelirin net asgari ücretin 1/3'ünden (üçte birinden) az olması",
      "Asgari ücretin 2/3'ünden az olması",
      "Asgari ücretin 3 katı olması",
      "Hiçbir gelir şartı aranmaz"
    ],
    0,
    "2022 sayılı Kanun kapsamındaki engelli aylıklarında hane içi kişi başı gelirin net asgari ücretin 1/3'ünden az olması şartı aranır.",
    "2022 Engelli Aylığı gelir sınırı = Asgari ücretin 1/3'ü."
  ],
  [
    "unit-4",
    "Vaka: Bacağında kısmi güçsüzlük olan bir hastaya doktor 'Var olan bacağını desteklemek ve bileğini dik tutmak için dışarıdan takılan bir aparat' önermiştir. Bu yardımcı cihazın adı nedir?",
    ["Ortez (Örn: AFO cihazı)", "Protez", "Koklear İmplant", "Snellen"],
    0,
    "Mevcut olan ancak güçsüz olan uzvu destekleyen cihazlara 'Ortez', tamamen kaybedilen uzvun yerine takılan yapay uzva ise 'Protez' denir.",
    "Var olan uzvu destekleyen = Ortez | Kayıp uzvun yerine takılan = Protez."
  ],
  [
    "unit-4",
    "Vaka: Trafik kazasında diz altından bacağı kesilen (ampüte edilen) bir bireyin tekrar yürüyebilmesi için takılan yapay bacak nedir?",
    ["Protez", "Ortez", "Odyometre", "Braille"],
    0,
    "Kaybedilen bir organ veya uzvun yerini tutan yapay uzva 'Protez' denir.",
    "Kesilen/Kayıp uzvun yerine takılan yapay uzuv = Protez."
  ],
  [
    "unit-4",
    "Vaka: Rehabilitasyon merkezinde çalışan iki uzmandan biri danışanın bacak kaslarını güçlendirme ve paralel barda yürüme egzersizi yaptırırken; diğeri danışanın tek elle gömlek ilikleme, çatal tutma ve banyo küvetine transfer olma becerisini çalışmaktadır. Bu iki uzman sırasıyla kimdir?",
    [
      "1. Fizyoterapist — 2. Ergoterapist (İş ve Uğraşı Terapisti)",
      "1. Odyolog — 2. Psikolog",
      "1. Sosyolog — 2. Diyetisyen",
      "1. Göz Doktoru — 2. Ortopedist"
    ],
    0,
    "Fizyoterapist kaba motor güç ve yürümeyle; Ergoterapist ise günlük yaşam aktiviteleri (giyinme, yemek, banyo) ve çevre uyarlamasıyla ilgilenir.",
    "Kas/Yürüme egzersizi = Fizyoterapist | Günlük yaşam becerisi/Ergonomi = Ergoterapist."
  ],
  [
    "unit-4",
    "Vaka: Bir yetişkinin sağlık kurulunda %40 Ortopedik ve %30 Görme engeli saptanmıştır. Balthazard formülüne göre bu kişinin toplam engel oranı nasıl hesaplanır?",
    [
      "En yüksek oran (%40) alınır; kalan sağlam kapasitenin (%60'ın) %30'u (%18) eklenerek %40 + %18 = %58 bulunur!",
      "Doğrudan 40 + 30 = %70 bulunur",
      "İkisinin ortalaması %35 alınır",
      "Sadece küçük olan %30 alınır"
    ],
    0,
    "Balthazard formülünde oranlar aritmetik toplanmaz! Önce büyük oran (%40) alınır, geriye kalan %60 sağlam kapasitenin %30'u (%18) hesaplanıp %40 + %18 = %58 bulunur.",
    "Balthazard Formülü: %40 + (%60'ın %30'u = %18) = %58!"
  ],
  [
    "unit-3",
    "Vaka: Bir belediye otobüs şoförü, durakta bekleyen tekerlekli sandalyeli yolcuyu 'Rampayı açmakla uğraşamam, otobüs gecikiyor' diyerek almadan gitmiştir. Bu eylem hukuken nedir?",
    [
      "5378 sayılı Kanun, TCK 122 ve BM CRPD Madde 9'a aykırı doğrudan ayrımcılık ve erişilebilirlik hakkı ihlalidir",
      "Şoförün yasal hakkıdır",
      "Makul bir tasarruftur",
      "Evrensel tasarımdır"
    ],
    0,
    "Toplu taşıma aracının engelli yolcuyu almaması açıkça erişilebilirlik hakkının ihlali ve engelliliğe dayalı ayrımcılıktır.",
    "Otobüse engelli yolcuyu almamak = Doğrudan ayrımcılık ve hak ihlali."
  ],
  [
    "unit-3",
    "Vaka: Görme engelli bir seçmen seçim günü oy kullanmaya gittiğinde, pusula üzerinde kabartma (Braille) şablon olmadığı için sandık görevlisinin 'Sen söyle ben senin yerine mührü basayım' demesi BM CRPD'nin hangi maddesini ve ilkesini ihlal eder?",
    [
      "Madde 29 (Siyasal ve Kamusal Yaşama Katılım — Gizli ve bağımsız oy kullanma hakkı)",
      "Madde 25 (Sağlık hakkı)",
      "Madde 11 (Afetler)",
      "Madde 30 (Spor hakkı)"
    ],
    0,
    "CRPD Madde 29, engelli seçmenlerin başkasının yardımına muhtaç olmadan gizli ve bağımsız oy kullanabilmesi için erişilebilir oy şablonlarını zorunlu kılar.",
    "CRPD Madde 29 = Gizli ve bağımsız oy kullanma hakkı."
  ],
  [
    "unit-3",
    "Vaka: İşitme engelli bir vatandaş karakola veya mahkemeye ifade vermeye gittiğinde kendisine ücretsiz 'Türk İşaret Dili Tercümanı' sağlanması BM CRPD'nin hangi maddesinin gereğidir?",
    [
      "Madde 13 (Adalete Erişim)",
      "Madde 30 (Kültürel Yaşam)",
      "Madde 28 (Sosyal Koruma)",
      "Madde 11 (Acil Durumlar)"
    ],
    0,
    "CRPD Madde 13 (Adalete Erişim), kolluk ve yargı süreçlerinde işaret dili tercümanı dahil her türlü usuli kolaylaştırmayı devletin görevi sayar.",
    "Mahkemede/Karakolda işaret dili tercümanı = CRPD Madde 13 (Adalete Erişim)."
  ],
  [
    "unit-2",
    "Vaka: Bir televizyon programında engelli bireylerin fotoğrafları hüzünlü bir fon müziği eşliğinde gösterilerek 'Bu çaresiz kardeşlerimize el uzatalım, bağış yapalım' anonsu yapılması hangi iki kuramsal eleştirinin hedefindedir?",
    [
      "Hayırseverlik/Ahlaki Modelin acıma dili ve Sağlamcılık (Ableism / Nesneleştirme)",
      "Evrensel Tasarım ve ICF",
      "Ekolojik Kuram ve Mezosistem",
      "Destekli Karar Verme ve Özerklik"
    ],
    0,
    "Engelli bireyleri acınası ve çaresiz 'yardım nesneleri' olarak teşhir etmek Hayırseverlik Modelinin ve Sağlamcılığın (Ableism) tipik bir ürünüdür; İnsan Hakları Modeline aykırıdır.",
    "Hüzünlü müzikle acındırarak bağış toplama = Hayırseverlik & Sağlamcılık."
  ],
  [
    "unit-2",
    "Vaka: Bir lisede öğretmenlerin kaynaştırma öğrencisi olan otizmli çocuğa 'kaynaştırma' kelimesini bir hakaret veya eksiklik etiketi gibi kullanması ('Sen zaten kaynaştırmasın, anlamazsın') hangi kuramı doğrular?",
    [
      "Howard Becker'in Etiketleme (Labeling) Kuramı ve Erving Goffman'ın Damgalama Kuramı",
      "Biyomedikal Kuram",
      "Fizyoterapi Kuramı",
      "Evrensel Tasarım"
    ],
    0,
    "Destek amacıyla konulan eğitsel bir tanının (kaynaştırma) okul içinde küçültücü bir yaftaya dönüşmesi Etiketleme ve Damgalama kuramlarının en somut örneğidir.",
    "Eğitsel tanının küçültücü yaftaya dönüşmesi = Etiketleme & Damgalama."
  ],
  [
    "unit-1",
    "Vaka: 15. Haftalık ders ana hattına göre SHZ237 Engellilerle Sosyal Hizmet dersinde vize sınavından sonraki haftalarda hangi engel grupları ve konular işlenmektedir?",
    [
      "Zihinsel Yetersizlik, Ruhsal/Psikososyal Engellilik, Bakım Hizmetleri, Aile ve Bakım Verenlerle Çalışma, Erişilebilirlik, Eğitim/İstihdam ve Sosyal Hizmet Kurumları",
      "Sadece matematik ve fizik",
      "Sadece tıp tarihi",
      "Sadece yabancı dil"
    ],
    0,
    "Ders izlencesinde 9-15. haftalar; Zihinsel, Ruhsal engellilik, Bakım modelleri, Ailelerle çalışma, Erişilebilirlik, Eğitim/İstihdam ve Mesleki roller konularını kapsar.",
    "SHZ237 Ders Planı = Tüm engel grupları + Bakım + Aile + Erişilebilirlik + İstihdam + Mesleki Roller."
  ],
  [
    "unit-4",
    "Vaka: DSÖ ICF (2001) şemasına göre 'T10 seviyesinde omurilik kesiği' hangi kutucuğa, 'tekerlekli sandalyeyle markete gidememe' hangi kutucuğa ve 'bozuk kaldırımlar' hangi kutucuğa yazılır?",
    [
      "Omurilik kesiği = Vücut Yapısı/İşlevi | Markete gidememe = Etkinlik ve Katılım Kısıtlılığı | Bozuk kaldırım = Çevresel Faktör (Engelleyici)",
      "Hepsi sadece genetik kutucuğuna yazılır",
      "Hepsi kişisel faktördür",
      "Bozuk kaldırım vücut yapısıdır"
    ],
    0,
    "ICF analizinde: Tıbbi lezyon -> Vücut Yapısı/İşlevi; Günlük eylem ve sosyal yaşam -> Etkinlik/Katılım; Kaldırım ve rampa durumu -> Çevresel Faktörlerdir.",
    "ICF Uygulaması: Lezyon = Vücut | Eylem = Etkinlik/Katılım | Kaldırım = Çevresel Faktör."
  ],
  [
    "unit-3",
    "Vaka: Türkiye'de özel eğitim veya rehabilitasyon desteğine ihtiyacı olan bir çocuk için önce hastaneden ÇÖZGER raporu alınmakta, ardından ücretsiz destek eğitiminden yararlanabilmesi için Milli Eğitim Bakanlığı'na bağlı hangi kuruma başvurulmaktadır?",
    [
      "RAM (Rehberlik ve Araştırma Merkezi)",
      "İŞKUR",
      "Tapu Müdürlüğü",
      "Vergi Dairesi"
    ],
    0,
    "Sağlık kurulu raporundan (ÇÖZGER) sonra çocuğun eğitsel değerlendirmesi ve özel eğitim/rehabilitasyon raporu RAM (Rehberlik ve Araştırma Merkezi) tarafından düzenlenir.",
    "ÇÖZGER (Hastane) -> Eğitsel Tanılama ve Özel Eğitim Yönlendirmesi = RAM."
  ],
  [
    "unit-4",
    "Vaka: Aile ve Sosyal Hizmetler Bakanlığı'na bağlı olarak il ve ilçelerde engelli bireylerin evde bakım yardımı başvurularını alan, sosyal inceleme yapan ve psikososyal destek sunan temel taşra birimi hangisidir?",
    [
      "SHM (Sosyal Hizmet Merkezi)",
      "RAM",
      "Noterlik",
      "Gümrük Müdürlüğü"
    ],
    0,
    "Aile ve Sosyal Hizmetler Bakanlığı'nın vatandaşlara doğrudan hizmet sunan, evde bakım ve sosyal inceleme süreçlerini yürüten birimi SHM (Sosyal Hizmet Merkezi) müdürlükleridir.",
    "Evde bakım başvurusu ve sosyal inceleme kurumu = SHM (Sosyal Hizmet Merkezi)."
  ],
  [
    "unit-4",
    "Vaka: Sosyal hizmet uzmanı, evde bakım incelemesi için gittiği evde engelli bireyin kendisine hiç söz hakkı verilmediğini, tüm sorulara aile bireylerinin cevap verdiğini görür. Uzman mesleki etik olarak ne yapmalıdır?",
    [
      "İletişim kurabiliyorsa doğrudan engelli bireyin kendisiyle göz teması kurarak konuşmalı, onun görüş ve tercihlerini merkeze almalıdır (Kendi Kaderini Tayin Hakkı ve Özerklik)",
      "Engelli bireyi tamamen görmezden gelmelidir",
      "Sadece komşulara sormalıdır",
      "Görüşmeyi hemen iptal etmelidir"
    ],
    0,
    "Sosyal hizmetin temel etik ilkesi 'Danışanın Kendi Kaderini Tayin Hakkı (Self-Determination)' ve insan onuruna saygıdır; uzman her zaman engelli bireyin kendi sesini ve iradesini merkeze alır.",
    "Sosyal Hizmet Etik İlkesi = Danışanın Kendi Kaderini Tayin Hakkı (Özne olarak dinlemek)."
  ]
];

const SCENARIO_QUESTIONS: QuizQuestion[] = SCENARIO_QUESTIONS_RAW.map(
  (item, idx) => ({
    id: `sc-q${idx + 1}`,
    unitId: item[0],
    question: item[1],
    options: item[2],
    correctIndex: item[3],
    simpleExplanation: item[4],
    keepInMind: item[5]
  })
);

export const ALL_BANK_QUESTIONS: QuizQuestion[] = [
  ...UNIT_1_2_QUESTIONS,
  ...UNIT_3_4_QUESTIONS,
  ...SCENARIO_QUESTIONS
];
