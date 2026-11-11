import { TopicCard } from "./courseData";

export const UNIT_3_TOPICS: TopicCard[] = [
  {
    id: "u3-t1",
    unitId: "unit-3",
    title: "Hak mı, Yardım mı? Hayırseverlik, Tıbbi ve İnsan Hakları Yaklaşımları",
    subtitle: "Üniversite binasında asansör olmaması örneği ve 3 yaklaşımın farkı",
    eli5: "Üniversite binasında asansör olmadığı için derse giremeyen tekerlekli sandalyeli öğrenciye 'Sen evde otur, biz sana ders notlarını gönderelim' demek İYİLİK DEĞİL, HAK İHLALİDİR! Hayırseverlik kişiye acır, Tıbbi yaklaşım bacağına bakar, İnsan Hakları ise binaya asansör yaptırır ve öğrenciyi sınıfa sokar.",
    bulletPoints: [
      "Hayırseverlik Yaklaşımı: Engelli bireyi acınacak, korunacak pasif bir yardım nesnesi görür; yardım verenin vicdanını ve iradesini merkeze alır.",
      "Tıbbi Yaklaşım: Tanı, tedavi ve rehabilitasyona odaklanır; toplumsal dışlanmayı ve hak ihlallerini açıklayamaz.",
      "İnsan Hakları Yaklaşımı: İnsan onuru, bireysel özerklik, eşitlik, erişilebilirlik ve katılımı merkeze alır. Birey yardımın pasif alıcısı değil, HAK SAHİBİ ve ÖZNESİDİR.",
      "Sosyal Hizmet Dönüşümü: İhtiyaç temelli veya sadaka temelli uygulamadan, talep edilebilir ve devlete ödev yükleyen hak temelli uygulamaya geçilmiştir."
    ],
    practicalTip: "Soruda 'Asansörsüz binadaki öğrenciye evde kalıp not gönderilmesi önerisi neden sorunludur?' derse cevap: 'Yardım gibi görünse de eğitim ve katılım hakkının ihlalidir!'",
    examClue: "Hayırseverlikte hizmet 'lütuf/iyilik'tir (istenirse kesilebilir); İnsan Hakları yaklaşımında ise devletin yasal 'yükümlülüğü/ödevi'dir.",
    keepInMind: "Hayırseverlik = Acıma & Pasif Nesne | Tıbbi = Hasta Vaka | İnsan Hakları = Onur, Özerklik & Hak Öznesi.",
    aiPromptSuggestion: "Hayırseverlik yaklaşımı ile İnsan Hakları yaklaşımı arasındaki farkı üniversite öğrencisi örneğiyle açıklar mısın?"
  },
  {
    id: "u3-t2",
    unitId: "unit-3",
    title: "Devletin 3 İnsan Hakları Yükümlülüğü: Saygı, Koruma, Yerine Getirme",
    subtitle: "Uluslararası insan hakları hukukunda devletin 3 temel görevi",
    eli5: "Devletin engelli hakları konusunda 3 net görevi vardır: 1) Saygı Gösterme: 'Devlet olarak sen kendin ayrımcılık yapma!' 2) Koruma: 'Özel şirketlerin, otobüsçülerin veya ailelerin engelliye ayrımcılık/şiddet yapmasına izin verme, onları denetle!' 3) Yerine Getirme: 'Hakkın kağıt üstünde kalmaması için bütçe ayır, rampa yap, öğretmen ata!'",
    bulletPoints: [
      "1. Saygı Gösterme Yükümlülüğü (To Respect): Devletin ve kamu kurumlarının bizzat kendisinin hak ihlali ve ayrımcılık yapmaktan kaçınmasıdır (örn. kamu sınavına engelli adayı almamak saygı yükümlülüğü ihlalidir).",
      "2. Koruma Yükümlülüğü (To Protect): Devletin, üçüncü kişilerin (özel sektör işverenleri, özel okullar, özel ulaşım firmaları, aile üyeleri) engelli bireylere yönelik ayrımcılığını ve istismarını önlemesidir.",
      "3. Yerine Getirme Yükümlülüğü (To Fulfill): Hakkın fiilen kullanılabilmesi için yasal düzenleme yapma, bütçe ayırma, kamu hizmeti kurma ve izleme mekanizmaları oluşturmadır.",
      "Sınav Bağlantısı: Bu 3 yükümlülük birlikte işlemezse insan hakları sadece kağıt üzerinde kalır."
    ],
    practicalTip: "Soruda 'Üçüncü kişilerin veya özel kurumların ayrımcı uygulamalarına karşı devletin önlem alması' geçiyorsa cevap %100 KORUMA YÜKÜMLÜLÜĞÜ! 'Devletin bütçe ve hizmet kurması' geçiyorsa YERİNE GETİRME!",
    examClue: "Özel bir kreşin otizmli çocuğu kaydetmeyi reddetmesine bakanlığın müdahale edip ceza kesmesi 'Koruma Yükümlülüğü' örneğidir.",
    keepInMind: "Saygı Gösterme = Devlet Bizzat İhlal Etmez | Koruma = 3. Kişilere/Özel Sektöre Karşı Korur | Yerine Getirme = Bütçe, Hizmet ve Altyapı Kurar.",
    aiPromptSuggestion: "Devletin Saygı Gösterme, Koruma ve Yerine Getirme yükümlülüklerini birer cümlelik örneklerle anlatır mısın?",
    visualSchema: {
      title: "Görsel Şema · Devletin 3 İnsan Hakları Yükümlülüğü",
      items: [
        { icon: "🛑", label: "1. Saygı Gösterme", highlight: "Devlet İhlal Etmez", detail: "Kamu otoritesi bizzat ayrımcı kural koymaz ve hakkı engellemez", color: "blue" },
        { icon: "🛡️", label: "2. Koruma ★", highlight: "3. Kişilere Karşı Korur", detail: "Özel şirketlerin, işverenlerin ve kurumların ayrımcılığını önler", color: "amber" },
        { icon: "🏗️", label: "3. Yerine Getirme", highlight: "Bütçe & Hizmet Kurar", detail: "Hakkın gerçekten yaşanması için kaynak, eğitim ve denetim sağlar", color: "emerald" }
      ]
    }
  },
  {
    id: "u3-t3",
    unitId: "unit-3",
    title: "Biçimsel Eşitlik vs Maddi Eşitlik ve Doğrudan vs Dolaylı Ayrımcılık",
    subtitle: "Herkese aynı kuralı uygulamak neden bazen en büyük adaletsizliktir?",
    eli5: "Herkese aynı sınav süresini (60 dk) ve aynı küçük puntolu kağıdı vermek 'Biçimsel Eşitlik'tir ama görme engelli öğrenci için adaletsizliktir! Ona ek süre veya Braille kitapçık vererek sonucu eşitlemek 'Maddi (Fiilî) Eşitlik'tir. 'Engellileri işe almıyoruz' demek Doğrudan Ayrımcılık; 'Mülakatı asansörsüz 4. katta yapıyoruz, gelen girer' demek ise Dolaylı Ayrımcılıktır!",
    bulletPoints: [
      "Biçimsel (Formal) Eşitlik: Herkese hiçbir fark gözetmeksizin tamamen aynı kuralı uygulamaktır. Başlangıçtaki yapısal dezavantajları görmezden geldiği için eşitsizliği yeniden üretir.",
      "Maddi / Fiilî (Substantive) Eşitlik: Farklı gereksinimleri ve yapısal engelleri dikkate alarak, herkesin haklardan GERÇEKTEN eşit yararlanmasını sağlayacak destek ve tedbirleri almaktır.",
      "Doğrudan Ayrımcılık: Bir kişinin açıkça engelliliği nedeniyle diğerlerinden daha olumsuz muameleye maruz bırakılmasıdır.",
      "Dolaylı Ayrımcılık: Görünürde tarafsız ve herkes için eşit gibi duran bir kural, ölçüt veya uygulamanın (örn. sadece yazılı basılı form şartı) engelli bireyleri fiilen dezavantajlı duruma düşürmesidir."
    ],
    practicalTip: "Soruda 'Görünürde tarafsız bir kuralın engelli bireyi dezavantajlı duruma düşürmesi' geçiyorsa cevap DOLAYLI AYRIMCILIK! 'Engelleri kaldırarak haklardan gerçekten eşit yararlanmayı sağlama' geçiyorsa MADDİ (FİİLÎ) EŞİTLİK!",
    examClue: "Maddi (fiilî) eşitliği sağlamak için alınan özel önlemler (ek süre, kota, işaret dili) ayrıcalık veya ayrımcılık SAYILMAZ!",
    keepInMind: "Biçimsel Eşitlik = Herkese Aynı Kural | Maddi Eşitlik = Gerçek Fırsat Eşitliği | Doğrudan = Açık Dışlama | Dolaylı = Tarafsız Görünümlü Engelleyici Kural.",
    aiPromptSuggestion: "Biçimsel eşitlik ile maddi eşitliği ve doğrudan ayrımcılık ile dolaylı ayrımcılığı sınav örnekleriyle anlatır mısın?",
    visualSchema: {
      title: "Görsel Karşılaştırma · Eşitlik ve Ayrımcılık Türleri",
      items: [
        { icon: "📏", label: "Biçimsel vs Maddi", highlight: "Aynı Kural vs Gerçek Hak", detail: "Biçimsel herkese merdiven verir; Maddi Eşitlik rampa/ek süre ile sonucu eşitler", color: "blue" },
        { icon: "🚫", label: "Doğrudan Ayrımcılık", highlight: "Açık Dışlama", detail: "'Görme engelliyi işe/kursa kabul etmiyoruz' demek", color: "rose" },
        { icon: "🕸️", label: "Dolaylı Ayrımcılık", highlight: "Tarafsız Görünümlü Tuzak", detail: "Toplantıyı sadece merdivenli salonda yapıp 'herkese açık' demek", color: "amber" }
      ]
    }
  },
  {
    id: "u3-t4",
    unitId: "unit-3",
    title: "Erişilebilirlik, Evrensel Tasarım ve Makul Düzenleme Farkı",
    subtitle: "Genel tasarım ile kişiye özel somut uyarlama arasındaki altın fark",
    eli5: "Bir binayı veya web sitesini en baştan yaşlıların, çocukların ve engellilerin hiç zorlanmadan kullanacağı şekilde tasarlamak 'Evrensel Tasarım'dır. Rampalar, asansörler ve altyazılar gibi genel kurallar 'Erişilebilirlik'tir (kitlelere yöneliktir). Ama o işyerine başlayan tek bir engelli çalışanın boyuna özel masa veya özel ekran yazılımı kurmak 'Makul Düzenleme'dir (bireyseldir)!",
    bulletPoints: [
      "Evrensel Tasarım (Universal Design - Ron Mace): Ürünlerin, çevrelerin, programların ve hizmetlerin özel bir uyarlamaya gerek kalmaksızın, en baştan herkes tarafından kullanılabilecek şekilde tasarlanmasıdır.",
      "Erişilebilirlik (Accessibility): Fiziksel çevre, ulaşım, bilgi ve iletişim teknolojilerinin engelli gruplar için önceden (ex-ante) ve genel standartlarla ulaşılabilir kılınmasıdır.",
      "Makul Düzenleme (Reasonable Accommodation): Belirli bir engelli bireyin SOMUT BİR DURUMDA insan haklarını eşit kullanabilmesi için, orantısız/aşırı yük getirmeyen BİREYSEL uyarlama yapılmasıdır.",
      "Altın Hukuk Kuralı (CRPD Md. 2 & Md. 5): Makul düzenlemenin reddedilmesi (yapılmaması), doğrudan ENGELLİLİĞE DAYALI AYRIMCILIKTIR!"
    ],
    practicalTip: "Sınavda en çok çıkan soru: 'Erişilebilirlik ile Makul Düzenleme arasındaki temel fark nedir?' Cevap: Erişilebilirlik GENEL ve ÖNLEYİCİDİR (gruplara yöneliktir); Makul Düzenleme ise BİREYSEL ve SOMUT DURUMA ÖZGÜDÜR!",
    examClue: "Hem BM CRPD Sözleşmesi'nde hem de 5378 sayılı Kanun'da 'Makul düzenlemenin reddi = Ayrımcılık' olarak açıkça hükme bağlanmıştır.",
    keepInMind: "Evrensel Tasarım = En Baştan Herkes İçin | Erişilebilirlik = Genel Grup Standardı | Makul Düzenleme = Tek Kişiye Somut Uyarlama (Reddi Ayrımcılıktır!).",
    aiPromptSuggestion: "Evrensel Tasarım, Erişilebilirlik ve Makul Düzenleme arasındaki farkı bir okul veya işyeri örneğiyle anlatır mısın?"
  },
  {
    id: "u3-t5",
    unitId: "unit-3",
    title: "BM Engellilerin Haklarına İlişkin Sözleşme (CRPD): Tarihçe ve Madde 3",
    subtitle: "2006 Kabul, 2007 İmza, 2009 Onay ve Sözleşmenin 8 Genel İlkesi",
    eli5: "Birleşmiş Milletler 2006 yılında engelli haklarının dünya anayasası sayılan CRPD Sözleşmesini kabul etti. Türkiye bu sözleşmeyi ilk imzalayan ülkelerden biri oldu (2007'de imzaladı, 2009'da TBMM'de onaylayıp yürürlüğe soktu). Sözleşmenin 3. maddesi ise tüm diğer maddelerin pusulası olan 8 temel ilkeyi sıralar.",
    bulletPoints: [
      "Tarihsel Kronoloji (Banko Sınav Sorusu!): BM Genel Kurulu Kabulü = 13 Aralık 2006 | Türkiye'nin İmzalaması = 30 Mart 2007 | Türkiye'nin Onaylaması = 2009.",
      "Sözleşmenin Felsefesi: Yeni haklar icat etmez; mevcut evrensel insan haklarının engelli bireyler için nasıl fiilen uygulanacağını bağlayıcı kurallara bağlar.",
      "Madde 3 - Sözleşmenin 8 Genel İlkesi: 1) Kendi seçimlerini yapma özgürlüğü dahil bireysel özerklik ve onura saygı, 2) Ayrımcılık yapmama, 3) Topluma tam ve etkin katılım, 4) Farklılıklara saygı ve engelliliğin insan çeşitliliğinin bir parçası olarak kabulü.",
      "Madde 3 (Devamı): 5) Fırsat eşitliği, 6) Erişilebilirlik, 7) Kadın-erkek eşitliği, 8) Engelli çocukların gelişen kapasitelerine ve kimliklerini koruma haklarına saygı."
    ],
    practicalTip: "Tarihleri kodla: 2006 = BM Kabul | 2007 = Türkiye İmza | 2009 = Türkiye Onay! Madde 3 = Genel İlkeler (Özerklik, Katılım, Erişilebilirlik, İnsan Çeşitliliği).",
    examClue: "CRPD Madde 3'e göre engellilik 'düzeltilmesi gereken bir trajedi' değil, 'insan çeşitliliğinin ve insanlığın doğal bir parçası' olarak kabul edilir.",
    keepInMind: "CRPD Tarihleri: 2006 BM Kabul -> 2007 TR İmza -> 2009 TR Onay | Madde 3 = 8 Genel İlke (Onur, Özerklik, Katılım, Erişilebilirlik).",
    aiPromptSuggestion: "BM CRPD Sözleşmesinin kabul/imza/onay tarihlerini ve Madde 3'teki genel ilkeleri kolay ezberlenecek şekilde özetler misin?",
    visualSchema: {
      title: "Görsel Zaman Çizelgesi · BM CRPD Tarihleri ve Madde 3",
      items: [
        { icon: "🌍", label: "2006 (BM Kabul)", highlight: "13 Aralık 2006", detail: "BM Genel Kurulu sözleşmeyi kabul etti (21. yüzyılın ilk insan hakları sözleşmesi)", color: "blue" },
        { icon: "✍️", label: "2007 & 2009 (TR)", highlight: "2007 İmza · 2009 Onay", detail: "Türkiye 2007'de imzaladı, 2009'da onaylayarak iç hukukun parçası yaptı", color: "emerald" },
        { icon: "🧭", label: "Madde 3 İlkeleri", highlight: "Özerklik & Çeşitlilik", detail: "Bireysel özerklik, ayrımcılık yasağı, tam katılım ve insan çeşitliliğine saygı", color: "purple" }
      ]
    }
  },
  {
    id: "u3-t6",
    unitId: "unit-3",
    title: "CRPD Madde 5 (Eşitlik), Madde 6 (Engelli Kadınlar) ve Madde 7 (Çocuklar)",
    subtitle: "Kesişimsel koruma: Neden kadınlar ve çocuklar için ayrı maddeler var?",
    eli5: "BM Sözleşmesi herkesi korurken iki gruba özel madde açmıştır: Madde 6 'Engelli Kadınlar ve Kız Çocukları'nı korur çünkü onlar hem cinsiyet hem engellilik yüzünden çoklu ayrımcılığa uğrar. Madde 7 ise 'Engelli Çocuklar'ı korur ve 'Çocuğun üstün yararını gözetin ama çocuğun kendi görüşünü ifade etme hakkını da mutlaka dinleyin!' der.",
    bulletPoints: [
      "Madde 5 (Eşitlik ve Ayrımcılık Yasağı): Herkes kanun önünde eşittir. Devlet makul düzenlemeyi güvence altına alır. Fiilî eşitliği hızlandırmak için alınan özel tedbirler ayrımcılık sayılmaz.",
      "Madde 6 (Engelli Kadınlar): Engelli kadın ve kız çocuklarının ÇOKLU AYRIMCILIĞA (kesişimsel eşitsizliğe) maruz kaldığını kabul eder ve güçlendirilmelerini şart koşar.",
      "Madde 7 (Engelli Çocuklar - 2 Temel İlke): 1) Tüm kararlarda 'çocuğun üstün yararı' önceliklidir, 2) Engelli çocuklar kendilerini ilgilendiren konularda görüşlerini serbestçe ifade etme ve yaş/olgunluklarına uygun destek alma hakkına sahiptir.",
      "Sosyal Hizmet Uygulaması: Engelli çocukla çalışırken 'O çocuktur ve engellidir, anlamaz' denilerek sadece anne-babayla konuşulması CRPD Madde 7 ihlalidir!"
    ],
    practicalTip: "Madde numaralarını şifrele: Madde 5 = Eşitlik (5 parmak eşitliği) | Madde 6 = Engelli Kadınlar (Çoklu ayrımcılık) | Madde 7 = Engelli Çocuklar (Üstün yarar + Görüş ifade hakkı).",
    examClue: "CRPD Madde 7, engelli çocukların görüşlerini ifade edebilmeleri için yaşlarına ve engellerine uygun iletişim desteği (resimli kart, işaret dili vb.) sağlanmasını devlete ödev olarak yükler.",
    keepInMind: "Md.5 = Eşitlik & Makul Düzenleme | Md.6 = Engelli Kadınlar (Çoklu Ayrımcılık) | Md.7 = Engelli Çocuklar (Üstün Yarar + Görüş Hakkı).",
    aiPromptSuggestion: "CRPD Madde 5, Madde 6 ve Madde 7'nin temel mesajlarını ve sosyal hizmet uzmanına yüklediği görevleri anlatır mısın?",
    visualSchema: {
      title: "Görsel Şifre · CRPD Madde 5, 6 ve 7",
      items: [
        { icon: "⚖️", label: "Madde 5: Eşitlik", highlight: "Ayrımcılık Yasağı", detail: "Makul düzenleme reddi ayrımcılıktır; pozitif tedbirler ayrımcılık sayılmaz", color: "blue" },
        { icon: "👩", label: "Madde 6: Kadınlar", highlight: "Çoklu Ayrımcılık", detail: "Engelli kadın ve kız çocuklarının kesişimsel ayrımcılığa karşı güçlendirilmesi", color: "purple" },
        { icon: "🧒", label: "Madde 7: Çocuklar", highlight: "Üstün Yarar & Görüş", detail: "Çocuğun üstün yararı + kendi görüşünü ifade edebilmesi için iletişim desteği", color: "emerald" }
      ]
    }
  },
  {
    id: "u3-t7",
    unitId: "unit-3",
    title: "CRPD Madde 8 (Farkındalık Artırma) ve Madde 9 (Erişilebilirlik)",
    subtitle: "Zihinlerdeki önyargıları ve sokaktaki/dijitaldeki engelleri kaldırmak",
    eli5: "Madde 8 insanların kafasındaki önyargıları yıkmak içindir (medyada ve okullarda engellileri acınası veya süper kahraman gibi değil, eşit yurttaş olarak göstermek). Madde 9 ise fiziksel binaları, otobüsleri, hastaneleri ve internet sitelerini herkesin bağımsızca kullanabileceği şekilde erişilebilir yapma zorunluluğudur!",
    bulletPoints: [
      "Madde 8 (Farkındalık Artırma): Kalıpyargılar, önyargılar ve zararlı uygulamalarla mücadele etmek; eğitim sisteminde ve medyada engelli bireylere yönelik hak temelli farkındalık oluşturmak.",
      "Madde 9 (Erişilebilirlik): Engelli bireylerin bağımsız yaşayabilmeleri ve yaşamın tüm alanlarına katılabilmeleri için fiziksel çevreye, ulaşıma, bilgi ve iletişim teknolojilerine eşit erişim.",
      "Erişilebilirliğin 3 Boyutu: 1) Fiziksel/Mimari (bina, yol, okul, hastane), 2) Ulaşım (otobüs, metro, durak), 3) Bilgi ve İletişim (web siteleri, ekran okuyucu uyumu, işaret dili, Braille, kolay okunur metin).",
      "Başka Hakların Ön Koşulu: Erişilebilirlik (Md. 9) sağlanmadan eğitim (Md. 24), sağlık (Md. 25), çalışma (Md. 27) ve oy verme (Md. 29) hakları kullanılamaz!"
    ],
    practicalTip: "Soruda 'Kalıpyargılarla ve medya önyargılarıyla mücadele hangi maddedir?' derse Madde 8! 'Fiziksel çevre, ulaşım ve dijital bilgiye erişim hangi maddedir?' derse Madde 9!",
    examClue: "Erişilebilirlik sadece tekerlekli sandalye rampası demek DEĞİLDİR; görme engelli için ekran okuyucu uyumlu e-Devlet, işitme engelli için işaret dili ve zihinsel engelli için 'kolay okunur (easy-to-read)' bilgi de Madde 9 kapsamındadır.",
    keepInMind: "Madde 8 = Farkındalık Artırma & Önyargıyla Mücadele | Madde 9 = Erişilebilirlik (Bina + Ulaşım + Dijital/Bilgi).",
    aiPromptSuggestion: "CRPD Madde 8 ve Madde 9'u ve erişilebilirliğin sadece rampa olmadığını örneklerle anlatır mısın?",
    visualSchema: {
      title: "Görsel Harita · Madde 8 (Zihinler) & Madde 9 (Mekan ve Dijital)",
      items: [
        { icon: "🧠", label: "Madde 8: Farkındalık", highlight: "Önyargıyı Yık!", detail: "Kalıpyargılarla mücadele, medyada ve okullarda hak temelli bilinç", color: "amber" },
        { icon: "🚌", label: "Madde 9: Fiziksel & Ulaşım", highlight: "Bina, Yol, Otobüs", detail: "Kamuya açık tüm bina, kaldırım ve toplu taşımanın engelsiz olması", color: "blue" },
        { icon: "🌐", label: "Madde 9: Bilgi & Dijital", highlight: "Web, Braille, İşaret Dili", detail: "Web siteleri, sesli yönlendirme, altyazı ve kolay okunur metinler", color: "emerald" }
      ]
    }
  },
  {
    id: "u3-t8",
    unitId: "unit-3",
    title: "CRPD Madde 12: Hukuki Ehliyet ve 'Destekli Karar Verme' Devrimi",
    subtitle: "İkame karar verme (vesayet) yerine kişinin kendi iradesini desteklemek",
    eli5: "Sözleşmenin en devrimci maddesi Madde 12'dir! Eskiden zihinsel veya ruhsal engeli olan kişiye 'Sen karar veremezsin, senin yerine annen/vasin imza atsın' denirdi (buna İkame Karar Verme / Vesayet denir). Madde 12 ise 'HAYIR! Onun yerine karar vermeyin; ona anlayacağı dilde bilgi ve süre vererek KENDİ kararını vermesine destek olun (Destekli Karar Verme)!' der.",
    bulletPoints: [
      "Madde 12 (Yasa Önünde Eşit Tanınma): Engelli bireyler her yerde kişi olarak tanınma ve diğer bireylerle eşit koşullar altında HUKUKİ EHLİYETE (hak ve fiil ehliyetine) sahip olma hakkına sahiptir.",
      "İkame Karar Verme (Substituted Decision-Making - Eski Model): Kişinin ehliyetinin elinden alınıp (kısıtlanıp) vasi/veli tarafından 'onun adına ve onun en iyi çıkarı olduğu düşünülen' kararın verilmesidir.",
      "Destekli Karar Verme (Supported Decision-Making - CRPD Modeli): Kişinin hukuki ehliyetini elinden almadan; kararlarını kendi irade ve tercihlerine göre verebilmesi için güvenilir destek kişileri, kolay anlaşılır bilgi ve iletişim araçları sunulmasıdır.",
      "Paternalizm Eleştirisi: 'Onun için en iyisini biz biliriz' şeklindeki korumacı (paternalist) yaklaşım, bireyin özerkliğini yok ettiği için insan hakları yaklaşımıyla bağdaşmaz."
    ],
    practicalTip: "Sınavın banko sorusu: 'CRPD Madde 12'ye göre ikame karar verme (vesayet) yerine benimsenen model hangisidir?' Cevap: DESTEKLİ KARAR VERME (Supported Decision-Making)!",
    examClue: "Destekli karar vermede merkezde 'uzmanın veya ailenin neyi doğru bulduğu' değil, engelli bireyin kendi 'irade ve tercihleri (will and preferences)' yer alır.",
    keepInMind: "CRPD Madde 12 = Hukuki Ehliyet | İkame Karar (Vesayet) = Kişinin Yerine Karar Verme (Reddedilir) | Destekli Karar Verme = Kişinin İradesini Destekleme.",
    aiPromptSuggestion: "CRPD Madde 12'deki 'İkame Karar Verme' ile 'Destekli Karar Verme' arasındaki farkı çok net bir vaka örneğiyle anlatır mısın?",
    visualSchema: {
      title: "Görsel Devrim · CRPD Madde 12 (İkame Karardan Destekli Karara)",
      items: [
        { icon: "❌", label: "İkame Karar (Eski)", highlight: "Vesayet & Kısıtlama", detail: "'Senin için en iyisini biz biliriz' diyerek kişinin yerine imza atmak", color: "rose" },
        { icon: "✅", label: "Destekli Karar (Md. 12)", highlight: "İrade ve Tercihler!", detail: "Kişinin karar hakkını almadan, anlayacağı dilde bilgi ve destek sunmak", color: "emerald" },
        { icon: "⚖️", label: "Güvenceler", highlight: "İstismarı Önleme", detail: "Destek mekanizması kişinin iradesine saygılı olmalı ve denetlenmelidir", color: "blue" }
      ]
    }
  },
  {
    id: "u3-t9",
    unitId: "unit-3",
    title: "CRPD Madde 13 (Adalete Erişim), Madde 14 (Özgürlük) ve Madde 16 (Şiddet)",
    subtitle: "Mahkemede eşitlik, zorla kapatılma yasağı ve istismardan korunma",
    eli5: "İşitme engelli bir mağdur karakola veya mahkemeye gittiğinde ücretsiz işaret dili tercümanı bulabilmeli, zihinsel engelli bireye savcı anlayacağı dilde soru sormalıdır; buna 'Adalete Erişim (Madde 13)' denir. Madde 14 'Hiç kimse sırf engelli diye zorla kuruma/hastaneye kapatılamaz' derken, Madde 16 engelliyi evdeki ve kurumdaki her türlü şiddet ve istismardan korur.",
    bulletPoints: [
      "Madde 13 (Adalete Erişim): Engelli bireylerin soruşturma ve mahkeme süreçlerine (davacı, davalı, tanık olarak) etkin katılımı için usule ilişkin ve yaşa uygun düzenlemeler (işaret dili, kolay anlatım, fiziksel erişim) yapılması ve polis/hakimlerin eğitilmesidir.",
      "Madde 14 (Kişi Özgürlüğü ve Güvenliği): Engellilik hiçbir koşulda bir kişinin özgürlüğünden yoksun bırakılmasının (zorla kapatılmasının) gerekçesi olamaz!",
      "Madde 16 (Sömürü, Şiddet ve İstismardan Korunma): Hem ev içinde hem de bakım kurumlarında her türlü fiziksel, duygusal, cinsel ve ekonomik istismarın önlenmesi ve bağımsız makamlarca denetlenmesidir.",
      "Sosyal Hizmet Rolü: Adli görüşme odalarında (AGO) ve mahkemelerde engelli bireyin ifadelerinin doğru anlaşılması için uzman desteği ve savunuculuk."
    ],
    practicalTip: "Madde numaralarını eşleştir: Madde 13 = Adalete Erişim (Mahkeme/Polis usul uyarlaması) | Madde 14 = Kişi Özgürlüğü | Madde 16 = Şiddet, İhmal ve İstismardan Korunma.",
    examClue: "Adalete erişim (Md. 13) için mahkeme salonunun sadece rampalı olması yetmez; usul kurallarının da (işaret dili tercümanı, ek ifade süresi, uzman eşliği) uyarlanması şarttır.",
    keepInMind: "Md.13 = Adalete Erişim (Usul Uyarlaması & Polis/Hakim Eğitimi) | Md.14 = Özgürlük | Md.16 = İhmal, İstismar ve Şiddetten Korunma.",
    aiPromptSuggestion: "CRPD Madde 13 (Adalete Erişim) ve Madde 16 (İstismardan Korunma) kapsamında sosyal hizmet uzmanının görevlerini anlatır mısın?",
    visualSchema: {
      title: "Görsel Kalkan · CRPD Madde 13, 14 ve 16 Koruma Alanları",
      items: [
        { icon: "🏛️", label: "Madde 13: Adalet", highlight: "Usul Uyarlaması", detail: "Mahkeme ve karakolda işaret dili, kolay iletişim ve personel eğitimi", color: "blue" },
        { icon: "🕊️", label: "Madde 14: Özgürlük", highlight: "Keyfi Kapatma Yasağı", detail: "Hiç kimse sırf engeli nedeniyle özgürlüğünden yoksun bırakılamaz", color: "purple" },
        { icon: "🛡️", label: "Madde 16: Güvenlik", highlight: "Şiddet & İstismar", detail: "Ev ve bakım kurumları bağımsız denetlenmeli, mağdurlar korunmalıdır", color: "rose" }
      ]
    }
  },
  {
    id: "u3-t10",
    unitId: "unit-3",
    title: "CRPD Madde 19: Bağımsız Yaşam ve Topluma Dahil Olma",
    subtitle: "Bağımsız yaşam 'her işi tek başına yapmak' demek değildir!",
    eli5: "Çok dikkat et: 'Bağımsız Yaşam (Madde 19)' engelli kişinin kimseden yardım almadan tek başına yaşaması demek DEĞİLDİR! Bağımsız yaşam; kişinin nerede, kiminle yaşayacağına, sabah ne giyeceğine KENDİSİNİN karar vermesi ve kurumlara kapatılmak yerine toplum içinde kişisel asistan/evde destek hizmetleriyle yaşaması demektir!",
    bulletPoints: [
      "Madde 19 (Bağımsız Yaşam ve Topluma Dahil Olma): Engelli bireylerin diğer bireylerle eşit seçim hakkına sahip olarak toplum içinde yaşama hakkıdır.",
      "3 Temel Unsuru: 1) İkametgahını, nerede ve kiminle yaşayacağını seçme özgürlüğü (belirli bir bakım kurumunda yaşamaya zorlanmama), 2) Kişisel asistanlık dahil ev içi ve toplum temelli destek hizmetlerine erişim, 3) Genel kamusal hizmetlerin engellilere de eşit ve erişilebilir sunulması.",
      "Kurumsuzlaştırma (Deinstitutionalization): Büyük ve izole yatılı bakım kurumlarından toplum temelli küçük yaşam modellerine (örn. destekli evler) geçişi zorunlu kılar.",
      "Sınav Tuzağı: Fiziksel olarak %90 desteğe ihtiyaç duyan bir birey bile, asistanını ve günlük planını kendisi yönetiyorsa 'Bağımsız Yaşam' sürüyor demektir!"
    ],
    practicalTip: "Sınavda 'Bağımsız yaşam (Madde 19) kişinin hiçbir destek almadan kendi kendine yetmesi demektir' derse KESİNLİKLE YANLIŞ! Doğrusu: 'Destek alarak da olsa kendi yaşamı, nerede ve kiminle yaşayacağı üzerinde seçim ve kontrol sahibi olmasıdır.'",
    examClue: "Mert vakasında babasının Mert'i yatılı kuruma göndermek istemesine karşı çıkıp evde/toplum içinde destek planlamak doğrudan CRPD Madde 19'un uygulamasıdır.",
    keepInMind: "CRPD Madde 19 (Bağımsız Yaşam) = Tek Başına Kalmak Değil, Seçim ve Kontrol Sahibi Olmak + Kuruma Zorlanmama + Kişisel Asistanlık.",
    aiPromptSuggestion: "CRPD Madde 19'daki 'Bağımsız Yaşam' kavramının neden 'tek başına her işi yapmak' anlamına gelmediğini örneklerle açıklar mısın?",
    visualSchema: {
      title: "Görsel Şifre · CRPD Madde 19 (Bağımsız Yaşamın 3 Ayağı)",
      items: [
        { icon: "🏠", label: "1. Seçim Özgürlüğü", highlight: "Nerede ve Kiminle?", detail: "Birey yatılı bakım kurumunda yaşamaya zorlanamaz, evini seçer", color: "emerald" },
        { icon: "🤝", label: "2. Kişisel Destek", highlight: "Kişisel Asistanlık", detail: "Toplumdan kopmamak için ev içi bakım ve kişisel asistan desteği alır", color: "blue" },
        { icon: "🌆", label: "3. Kamusal Erişim", highlight: "Toplum İçinde Yaşam", detail: "Mahalledeki tüm genel hizmetlerden diğer yurttaşlarla eşit yararlanır", color: "purple" }
      ]
    }
  },
  {
    id: "u3-t11",
    unitId: "unit-3",
    title: "CRPD Madde 24: Kapsayıcı Eğitim (Dışlama, Ayrıştırma, Entegrasyon vs Kapsayıcılık)",
    subtitle: "Çocuğu okula uydurmak (Entegrasyon) mı, okulu çocuğa uydurmak (Kapsayıcılık) mı?",
    eli5: "Eğitimde 4 basamak vardır: 1) Dışlama: Çocuğu okula hiç almamak. 2) Ayrıştırma: Sadece engellilerin gittiği ayrı özel okula göndermek. 3) Entegrasyon (Kaynaştırma): Çocuğu normal sınıfa koyup 'Sen bizim kurallarımıza uyum sağla' demek. 4) Kapsayıcı Eğitim (Inclusion - Madde 24): Okulun müfredatını, materyalini ve öğretmenini tüm çocukların farklılığına göre değiştirmek!",
    bulletPoints: [
      "1. Dışlama (Exclusion): Engelli çocuğun eğitim sisteminin tamamen dışında bırakılması.",
      "2. Ayrıştırma (Segregation): Engelli çocukların akranlarından koparılarak sadece engellilere yönelik ayrı okul/kurumlarda eğitilmesi.",
      "3. Entegrasyon / Kaynaştırma (Integration): Engelli çocuğun genel okula yerleştirilmesi ancak sistemin değişmeden çocuğun mevcut standartlara uyum sağlamasının beklenmesi.",
      "4. Kapsayıcı Eğitim (Inclusive Education - CRPD Madde 24): Tüm çocukların aynı sınıfta, kendi mahallesindeki okulda; okul sisteminin, öğretim yöntemlerinin ve desteklerin her çocuğa göre uyarlandığı ortamda birlikte eğitim almasıdır."
    ],
    practicalTip: "Çok sık sorulan fark: 'Çocuğun değişip okula uyum sağlamasını beklemek = Entegrasyon (Kaynaştırma)'. 'Okulun ve öğretim sisteminin değişip her çocuğa uyum sağlaması = Kapsayıcı Eğitim (Inclusion - Madde 24)'!",
    examClue: "Madde 24 kapsamında kör ve sağır öğrencilerin Braille, işaret dili (ve sağır kültürü/dilsel kimliği) ile eğitim alma hakkı güvence altındadır.",
    keepInMind: "Entegrasyon = Çocuk Okula Uyar | Kapsayıcı Eğitim (CRPD Md. 24) = Okul ve Sistem Tüm Çocuklara Uyar.",
    aiPromptSuggestion: "Entegrasyon (Kaynaştırma) ile Kapsayıcı Eğitim (Inclusion - CRPD Madde 24) arasındaki farkı çok basit bir sınıf örneğiyle anlatır mısın?",
    visualSchema: {
      title: "Görsel Evrim · Eğitimde 4 Yaklaşım (CRPD Madde 24)",
      items: [
        { icon: "🚫", label: "Dışlama & Ayrıştırma", highlight: "Okul Dışı / Ayrı Okul", detail: "Çocuğu okula almamak veya akranlarından ayırıp izole özel okula koymak", color: "rose" },
        { icon: "🧩", label: "Entegrasyon", highlight: "Çocuk Sisteme Uyar", detail: "Normal sınıfa alınır ama destek verilmez, çocuğun uyum sağlaması beklenir", color: "amber" },
        { icon: "🌈", label: "Kapsayıcı Eğitim (Md.24)", highlight: "Sistem Çocuğa Uyar!", detail: "Okul, müfredat ve materyaller tüm çocukların çeşitliliğine göre dönüşür", color: "emerald" }
      ]
    }
  },
  {
    id: "u3-t12",
    unitId: "unit-3",
    title: "CRPD Madde 25 (Sağlık), Madde 27 (İstihdam), Madde 28 (Sosyal Koruma) & Madde 29 (Siyaset)",
    subtitle: "Ekonomik, sosyal ve siyasal yaşama tam katılım maddeleri",
    eli5: "Sözleşmenin bu dört maddesi yetişkin yaşamın omurgasıdır: Madde 25 'Aydınlatılmış onamla eşit sağlık hizmeti', Madde 27 'Korumalı atölyeye kapatılmadan açık iş piyasasında eşit işe eşit ücretle çalışma', Madde 28 'Yoksulluğa karşı sosyal koruma ve engelliliğe bağlı ek giderlerin karşılanması', Madde 29 ise 'Erişilebilir sandıkta gizli oyla seçme ve seçilme hakkı' sağlar.",
    bulletPoints: [
      "Madde 25 (Sağlık): Engelliliğe dayalı ayrımcılık olmaksızın, ÖZGÜR VE AYDINLATILMIŞ ONAM temelinde (üreme ve cinsel sağlık dahil) en yüksek sağlık standardına erişim.",
      "Madde 27 (Çalışma ve İstihdam): Açık, kapsayıcı ve erişilebilir bir işgücü piyasasında serbestçe seçilen bir işte çalışma, eşit değerde işe eşit ücret, işyerinde makul düzenleme ve sendikal haklar.",
      "Madde 28 (Yeterli Yaşam Standardı ve Sosyal Koruma): Yeterli beslenme, giyim, konut, temiz su ve engellilikle bağlantılı ek giderler için devlet desteği / yoksulluğu azaltma programları.",
      "Madde 29 (Siyasal ve Kamusal Yaşama Katılım): Erişilebilir oy verme usulleri ve materyalleriyle seçme-seçilme hakkı, talep halinde kendi seçtiği kişinin oy kullanırken yardım etmesi ve engelli örgütleri (DPO) kurma hakkı."
    ],
    practicalTip: "Numaraları kodla: 24 = Eğitim -> 25 = Sağlık -> 27 = Çalışma/İstihdam -> 28 = Sosyal Koruma/Yaşam Standardı -> 29 = Siyasal Katılım/Oy Verme!",
    examClue: "Madde 27 sadece 'korumalı işyerlerini' değil, asıl olarak engelli bireylerin herkesle birlikte çalıştığı 'AÇIK İŞGÜCÜ PİYASASINI' (Open labour market) esas alır.",
    keepInMind: "Md.25 Sağlık (Aydınlatılmış Onam) | Md.27 Açık İşgücü İstihdamı | Md.28 Sosyal Koruma | Md.29 Oy Verme & Siyasal Katılım.",
    aiPromptSuggestion: "CRPD Madde 25, 27, 28 ve 29'un temel içeriklerini sınavda karıştırmamak için özetler misin?",
    visualSchema: {
      title: "Görsel Harita · CRPD Madde 25, 27, 28 ve 29",
      items: [
        { icon: "🩺", label: "Md. 25 & Md. 27", highlight: "Sağlık & İstihdam", detail: "Md.25: Aydınlatılmış onamla sağlık | Md.27: Açık piyasada eşit ücretle iş", color: "blue" },
        { icon: "🛡️", label: "Md. 28: Sosyal Koruma", highlight: "Yoksullukla Mücadele", detail: "Yeterli konut, gelir güvencesi ve engelliliğe bağlı ek gider desteği", color: "emerald" },
        { icon: "🗳️", label: "Md. 29: Siyasal Yaşam", highlight: "Seçme & Seçilme", detail: "Erişilebilir oy pusulası/sandık, sivil toplumda ve yönetimde temsil", color: "purple" }
      ]
    }
  },
  {
    id: "u3-t13",
    unitId: "unit-3",
    title: "CRPD Denetim Mekanizması, İhtiyari Protokol ve Gölge Raporlama",
    subtitle: "Devletler sözleşmeye uymazsa kim, nasıl denetler?",
    eli5: "Peki devlet sözleşmeyi imzalayıp uygulamazsa ne olur? BM bünyesinde bağımsız uzmanlardan oluşan 'Engelli Hakları Komitesi' devletlerden düzenli rapor alır. Sivil toplum örgütleri de devletin eksiklerini anlatan 'Gölge Rapor (Alternatif Rapor)' gönderir. Ayrıca 'İhtiyari Protokol' sayesinde iç hukuk yollarını tüketen bir engelli birey doğrudan BM Komitesi'ne bireysel başvuru yapabilir!",
    bulletPoints: [
      "Ulusal İzleme (Madde 33): Devletler sözleşmenin uygulanmasını izlemek için bağımsız mekanizmalar kurmak ve sivil toplumu (engelli örgütlerini) bu sürece dahil etmek zorundadır.",
      "Uluslararası Denetim (Madde 34 - BM Engelli Hakları Komitesi): Taraf devletlerin sunduğu dönemsel ülke raporlarını inceler ve 'Nihai Gözlemler (Concluding Observations)' yayınlar.",
      "Gölge Rapor (Shadow / Alternative Report): Engelli sivil toplum örgütlerinin (STK/DPO), hükümetin resmi raporundaki eksikleri veya sahadaki gerçek hak ihlallerini BM Komitesine bildirdiği bağımsız rapordur.",
      "İhtiyari Protokol (Optional Protocol): Türkiye'nin de taraf olduğu ek protokoldür; iç hukuk yolları tükendiğinde BM Engelli Hakları Komitesi'ne 'Bireysel Başvuru' yapma ve ağır/sistematik ihlallerde Komiteye 'Soruşturma' yetkisi verir."
    ],
    practicalTip: "Soruda 'Bireysel başvuru ve soruşturma yetkisi veren belge hangisidir?' derse cevap: İHTİYARİ PROTOKOL! 'STK'ların hükümet raporuna alternatif olarak BM'ye sunduğu rapor' derse: GÖLGE RAPOR!",
    examClue: "BM Engelli Hakları Komitesi'ne bireysel başvuru yapabilmek için önce ülkedeki 'iç hukuk yollarının tüketilmiş olması' (etkisiz veya aşırı uzun sürmesi hariç) temel şarttır.",
    keepInMind: "BM Engelli Hakları Komitesi = Ülke Raporlarını Denetler | Gölge Rapor = STK'ların Bağımsız Raporu | İhtiyari Protokol = Bireysel Başvuru Hakkı.",
    aiPromptSuggestion: "BM Engelli Hakları Komitesi, Gölge Rapor ve İhtiyari Protokol kavramlarını basitçe açıklar mısın?",
    visualSchema: {
      title: "Görsel Denetim Üçgeni · CRPD Nasıl Denetlenir?",
      items: [
        { icon: "🏛️", label: "BM Komitesi (Md. 34)", highlight: "Uluslararası Denetim", detail: "Devletlerin raporlarını inceler ve tavsiye/gözlem kararları yayınlar", color: "blue" },
        { icon: "📑", label: "Gölge Rapor", highlight: "STK / Engelli Örgütleri", detail: "Hükümet raporundaki eksikleri ve sahadaki gerçek durumu BM'ye bildirir", color: "amber" },
        { icon: "⚖️", label: "İhtiyari Protokol", highlight: "Bireysel Başvuru!", detail: "İç hukuk tükenince bireyin doğrudan BM Komitesine başvurabilmesini sağlar", color: "emerald" }
      ]
    }
  },
  {
    id: "u3-t14",
    unitId: "unit-3",
    title: "Türkiye Ulusal Mevzuatı: Anayasa (Md. 10, 42, 61, 90) ve 5378 Sayılı Kanun",
    subtitle: "İç hukuktaki anayasal güvenceler ve 2005 tarihli temel engellilik yasası",
    eli5: "Türkiye'de engelli haklarının en tepesinde Anayasa vardır: Madde 10 'Engelliler için alınan pozitif tedbirler eşitliğe aykırı sayılmaz' der; Madde 42 eğitim hakkını, Madde 61 devletin engellileri koruma görevini düzenler. Anayasa Madde 90 ise 'BM CRPD Sözleşmesi kanunlarla çelişirse BM Sözleşmesi üstündür!' der. 2005'te çıkan 5378 sayılı Kanun ise Türkiye'nin temel engelliler yasasıdır.",
    bulletPoints: [
      "Anayasa Madde 10 (Kanun Önünde Eşitlik): 2010 değişikliğiyle çocuk, yaşlı ve engelliler için alınacak özel (pozitif) tedbirlerin eşitlik ilkesine aykırı sayılamayacağı anayasal güvenceye alınmıştır.",
      "Anayasa Madde 42 (Eğitim Hakkı) & Madde 61 (Sosyal Güvenlik Bakımından Özel Olarak Korunması Gerekenler): Devlet engellilerin korunmalarını ve toplum hayatına intibaklarını sağlayıcı tedbirleri alır.",
      "Anayasa Madde 90/5 (Uluslararası Sözleşmelerin Üstünlüğü): Usulüne göre yürürlüğe konulmuş temel hak ve özgürlüklere ilişkin uluslararası anlaşmalar (örn. BM CRPD) ile kanunlar farklı hükümler içerirse uluslararası anlaşma esas alınır!",
      "5378 Sayılı Engelliler Hakkında Kanun (2005): Türkiye'de engelliliğe özgü ilk çerçeve kanundur. Doğrudan/dolaylı ayrımcılığı ve makul düzenleme reddini yasaklar; erişilebilirlik, eğitim, istihdam ve bakımı düzenler."
    ],
    practicalTip: "Anayasa şifreleri: Md. 10 = Eşitlik & Pozitif Tedbir | Md. 42 = Eğitim | Md. 61 = Devletin Engellileri Koruma ve Topluma İntibak Görevi | Md. 90 = BM Sözleşmesinin Kanunlara Üstünlüğü | 5378 = 2005 Engelliler Hakkında Kanun.",
    examClue: "5378 sayılı Kanun ilk çıktığında (2005) adı 'Özürlüler Kanunu' idi; 2013 yılında yapılan yasal değişiklikle mevzuattaki tüm 'özürlü, sakat, çürük' ibareleri 'engelli' olarak değiştirilmiştir.",
    keepInMind: "Anayasa Md.10 Eşitlik, Md.42 Eğitim, Md.61 Koruma, Md.90 Uluslararası Sözleşme Üstünlüğü | 5378 Sayılı Kanun (2005) = Temel Engelliler Yasası.",
    aiPromptSuggestion: "Anayasa'nın 10, 42, 61 ve 90. maddeleri ile 5378 sayılı Engelliler Hakkında Kanun'u sınav için özetler misin?"
  },
  {
    id: "u3-t15",
    unitId: "unit-3",
    title: "Hak Temelli Sosyal Hizmet: 6 Adımlı Erişim Zinciri ve Savunuculuk Düzeyleri",
    subtitle: "İhtiyaç -> Bilgi -> Başvuru -> Temas -> Hizmet -> Sonuç ve Mikro/Mezzo/Makro",
    eli5: "Bir hakkın kanunda yazması yetmez; engelli birey o hakka ulaşırken 6 halkalı bir 'Erişim Zinciri'nden geçer. Eğer belediyede yardım vardır ama kişi bunu bilmiyorsa 2. halkada (Bilgi), başvuru formu ekran okuyucuyla okunmuyorsa 3. halkada (Başvuru) zincir kopar! Sosyal hizmet uzmanı bu kopuk halkaları Mikro, Mezzo ve Makro savunuculukla onarır.",
    bulletPoints: [
      "Hak Temelli Değerlendirme - 6 Adımlı Erişim Zinciri: 1) İhtiyaç (Somut engel ve gereksinim nedir?), 2) Bilgi (Kişi hakkını ve süreci biliyor mu?), 3) Başvuru (Formlar, dijital sistem ve bina erişilebilir mi?).",
      "Erişim Zinciri (Devamı): 4) Temas ve Değerlendirme (Personel tutumu hak temelli mi, makul düzenleme var mı?), 5) Hizmet (Hizmet zamanında ve uygun sunuldu mu?), 6) Sonuç (Kişinin bağımsızlığında ve katılımında gerçekte ne değişti?).",
      "Mikro Savunuculuk: Bireyin ve ailesinin haklarını öğrenmesi, öz-savunuculuk becerisi kazanması ve bireysel başvuru süreçlerinin desteklenmesi.",
      "Mezzo ve Makro Savunuculuk: Mezzo = Okul, hastane, işyeri ve belediye düzeyindeki kurumsal engellerin kaldırılması; Makro = Yasa, bütçe, denetim ve ulusal politika değişikliği için mücadele."
    ],
    practicalTip: "Erişim Zincirinin 6 adımını sırasıyla bil: 1. İhtiyaç -> 2. Bilgi -> 3. Başvuru -> 4. Temas -> 5. Hizmet -> 6. Sonuç (Gerçek yaşam etkisi)!",
    examClue: "Sosyal hizmet uzmanı için başarı sadece 5. adımda 'hizmetin verilmiş olması' değil, 6. adımda 'kişinin toplumsal katılımında ve özerkliğinde somut artış sağlanması'dır.",
    keepInMind: "6 Adımlı Erişim Zinciri = İhtiyaç -> Bilgi -> Başvuru -> Temas -> Hizmet -> Sonuç | Savunuculuk = Mikro (Birey) + Mezzo (Kurum) + Makro (Politika).",
    aiPromptSuggestion: "Hak temelli sosyal hizmetteki 6 adımlı Erişim Zincirini ve Mikro, Mezzo, Makro savunuculuğu bir vaka üzerinden anlatır mısın?",
    visualSchema: {
      title: "Görsel Zincir · Hak Temelli 6 Adımlı Erişim Zinciri",
      items: [
        { icon: "1️⃣", label: "1. İhtiyaç & 2. Bilgi", highlight: "Haberdar Olma", detail: "Gereksinimin tespiti ve kişinin haklarından erişilebilir dille haberdar olması", color: "blue" },
        { icon: "2️⃣", label: "3. Başvuru & 4. Temas", highlight: "Engelsiz Süreç", detail: "Erişilebilir başvuru formu/bina ve sağlamcı olmayan personel değerlendirmesi", color: "amber" },
        { icon: "3️⃣", label: "5. Hizmet & 6. Sonuç", highlight: "Gerçek Katılım!", detail: "Uygun hizmetin sunulması ve kişinin bağımsız yaşamında somut değişim yaratması", color: "emerald" }
      ]
    }
  }
];

export const UNIT_4_TOPICS: TopicCard[] = [
  {
    id: "u4-t1",
    unitId: "unit-4",
    title: "Fiziksel Engellilik Sınıflandırması ve Ortopedik Yetersizlikler",
    subtitle: "4 ana fiziksel engellilik grubu, Amputasyon, Protez vs Ortez ve Fantom Ağrısı",
    eli5: "Fiziksel engellilik 4 ana gruba ayrılır: Ortopedik, Nörolojik, Nöromüsküler ve Kronik hastalıklar. Ortopedik grupta yer alan 'Amputasyon' bir kol veya bacağın kesilmesi/kaybıdır. Eksik uzvun yerine takılan yapay uzva 'Protez', var olan ama güçsüz olan uzvu destekleyen cihaza 'Ortez' denir. Kesilen bacağın hâlâ oradaymış gibi ağrımasına ise 'Fantom (Hayalet) Ağrısı' denir.",
    bulletPoints: [
      "Fiziksel Engelliliğin 4 Ana Grubu: 1) Ortopedik yetersizlikler, 2) Nörolojik kökenli yetersizlikler, 3) Nöromüsküler ve ilerleyici hastalıklar, 4) Hareketi kısıtlayan süreğen/kronik hastalıklar.",
      "Amputasyon: Travma (iş/trafik kazası, deprem, mayın) veya hastalık (diyabetik ayak, damar tıkanıklığı, tümör) nedeniyle bir uzvun kısmen ya da tamamen kaybıdır.",
      "Protez vs Ortez Farkı (Sınav Noktası!): Protez = Kaybedilen uzvun yerine geçen yapay cihazdır. Ortez = Mevcut uzvu desteklemek, düzeltmek veya korumak için kullanılan yardımcı cihazdır (atel, korse, AFO).",
      "Fantom (Hayalet) Uzuv Ağrısı ve Beden İmajı: Amputasyon sonrası kaybedilen uzvun hâlâ var olduğu hissi ve ağrısıdır; beden algısı değişimi ve yas süreciyle birlikte psikososyal destek gerektirir."
    ],
    practicalTip: "Protez ve Ortez farkını şifrele: Uzuv YOKSA yerine takılan = PROTEZ. Uzuv VARSA onu destekleyen = ORTEZ!",
    examClue: "Türkiye'de 6 Şubat 2023 depremleri sonrasında ampute birey sayısında ve uzun süreli protez/rehabilitasyon ile psikososyal destek ihtiyacında ciddi artış yaşanmıştır.",
    keepInMind: "Fiziksel Engel = 4 Grup (Ortopedik, Nörolojik, Nöromüsküler, Kronik) | Protez = Eksik Uzuv Yerine | Ortez = Var Olan Uzva Destek.",
    aiPromptSuggestion: "Protez ile Ortez arasındaki farkı ve amputasyon yaşayan bir bireyin psikososyal uyum sürecini anlatır mısın?",
    visualSchema: {
      title: "Görsel Ayrım · Ortopedik Yetersizlikte 3 Temel Kavram",
      items: [
        { icon: "🦿", label: "Protez", highlight: "Eksik Uzvun Yerine", detail: "Amputasyon (uzuv kaybı) sonrası kaybedilen kol/bacak yerine takılan yapay uzuv", color: "blue" },
        { icon: "🦵", label: "Ortez", highlight: "Mevcut Uzva Destek", detail: "Var olan ancak zayıf/eğri olan kas-iskelet yapısını destekleyen cihaz (atel/korse)", color: "emerald" },
        { icon: "⚡", label: "Fantom Ağrısı", highlight: "Hayalet Uzuv Hissi", detail: "Kesilen uzvun hâlâ yerindeymiş gibi hissedilmesi ve beden imajı uyumu", color: "purple" }
      ]
    }
  },
  {
    id: "u4-t2",
    unitId: "unit-4",
    title: "Omurilik Yaralanmaları (SCI): Parapleji vs Tetrapleji ve İkincil Sorunlar",
    subtitle: "Yaralanma seviyesi, bası yaraları (dekübit) ve genç yetişkin travması",
    eli5: "Omurilik, beyinden kol ve bacaklara giden ana elektrik kablosu gibidir. Trafik kazası, yüksekten düşme veya sığ suya balıklama atlama sonucu kablo sırt/bel hizasından koparsa sadece bacaklar etkilenir ('Parapleji'); boyun (servikal) hizasından koparsa hem kollar hem bacaklar yani 4 uzuv birden etkilenir ('Tetrapleji / Kuadripleji').",
    bulletPoints: [
      "Epidemiyoloji: Çoğunlukla trafik kazası, iş kazası, yüksekten düşme ve ateşli silah yaralanması sonucu; özellikle genç ve üretken çağdaki erkeklerde sık görülür.",
      "Parapleji: Torakal (sırt), lomber (bel) veya sakral seviyedeki omurilik hasarı sonucu alt ekstremitelerin (bacakların) ve gövde alt kısmının felcidir; kollar sağlamdır.",
      "Tetrapleji (Kuadripleji): Servikal (boyun) seviyedeki omurilik hasarı sonucu 4 ekstremitenin (hem kolların hem bacakların) ve gövdenin etkilenmesidir.",
      "İkincil Sağlık Sorunları: Bası yaraları (dekübit ülseri - uzun süre aynı pozisyonda yatma/oturma sonucu), nörojenik mesane ve bağırsak kontrol sorunları, spastisite, otonomik disrefleksi ve kronik nöropatik ağrı."
    ],
    practicalTip: "Kelime kökünden yakala: 'Tetra / Kuadri' = 4 demektir -> 4 uzuv (kollar + bacaklar) felci! 'Para' = İki yan (bacaklar) felci, kollar sağlam!",
    examClue: "Omurilik yaralanmalarında havalı minder/yatak kullanımı ve düzenli pozisyon değişimi, hayati tehlike yaratabilen 'bası yaralarını (dekübit)' önlemek için kritik öneme sahiptir.",
    keepInMind: "Parapleji = Belden Aşağı (Bacaklar) | Tetrapleji/Kuadripleji = Boyundan Aşağı (4 Uzuv) | İkincil Sorunlar = Bası Yarası & Mesane-Bağırsak Kontrolü.",
    aiPromptSuggestion: "Parapleji ile Tetrapleji arasındaki farkı ve omurilik yaralanmalarındaki ikincil sağlık sorunlarını anlatır mısın?"
  },
  {
    id: "u4-t3",
    unitId: "unit-4",
    title: "Serebral Palsi (SP) ve Spina Bifida: İlerleyici Olmayan Nörolojik Durumlar",
    subtitle: "Çocukluk çağının en sık fiziksel engeli ve gebelikte folik asidin önemi",
    eli5: "Serebral Palsi (SP), bebek doğmadan hemen önce, doğum sırasında (oksijensiz kalma) veya ilk yıllarda gelişmekte olan beynin hareket merkezinin hasar görmesidir. ÇOK ÖNEMLİ: Beyindeki bu hasar İLERLEYİCİ DEĞİLDİR (zamanla büyümez) ve her SP'li çocukta zihinsel engel vardır sanmak büyük bir yanlıştır! Spina Bifida ise anne karnında omurganın tam kapanmamasıdır (folik asit eksikliği risktir).",
    bulletPoints: [
      "Serebral Palsi (SP / Beyin Felci): Gelişmekte olan beyinde oluşan, İLERLEYİCİ OLMAYAN (non-progressive) kalıcı hareket, kas tonusu ve postür (duruş) bozukluğudur. Çocukluk çağında fiziksel engelliliğin EN SIK nedenidir.",
      "SP Sınav Tuzağı: Serebral Palsi zihinsel yetersizlikle eş anlamlı DEĞİLDİR! SP'li bireylerin önemli bir kısmının zeka düzeyi normal veya normalin üzerindedir (konuşma kasları etkilendiği için yanlışlıkla zihinsel engelli sanılabilirler).",
      "Spina Bifida (Ayrık Omurga): Gebeliğin ilk ayında nöral tüpün (omurganın) tam kapanmaması sonucu oluşan doğumsal anomalidir; bacaklarda güçsüzlük/felç ve hidrosefaliye yol açabilir.",
      "Koruyucu Sosyal Hizmet: Gebelik öncesi ve gebeliğin ilk aylarında yeterli FOLİK ASİT (B9 vitamini) alımı Spina Bifida riskini büyük oranda (%70'e kadar) önler!"
    ],
    practicalTip: "İki altın sınav bilgisi: 1) Serebral Palsi İLERLEYİCİ DEĞİLDİR ve çocuklukta en sık fiziksel engel nedenidir. 2) Spina Bifida = Nöral tüp kapanma defekti (Önlemek için = Folik Asit)!",
    examClue: "Konuşma kaslarındaki spastisite nedeniyle konuşması zor anlaşılan (dizartri) bir SP'li bireye çocuk muamelesi yapmak veya zihinsel engelli varsaymak ağır bir etik hatadır.",
    keepInMind: "Serebral Palsi (SP) = İlerleyici Olmayan Erken Beyin Hasarı (Zihinsel Engel Değildir!) | Spina Bifida = Ayrık Omurga (Folik Asit Korur).",
    aiPromptSuggestion: "Serebral Palsi ile Spina Bifida'yı ve Serebral Palsi hakkında toplumda doğru sanılan yanlışları anlatır mısın?",
    visualSchema: {
      title: "Görsel Kart · Serebral Palsi (SP) ve Spina Bifida",
      items: [
        { icon: "🧠", label: "Serebral Palsi (SP)", highlight: "İlerleyici Değildir!", detail: "Çocuklukta en sık fiziksel engeldir; hareket ve postür bozukluğudur", color: "emerald" },
        { icon: "💡", label: "SP Kritik Gerçek", highlight: "Zeka Geriliği Değildir", detail: "Konuşma kasları etkilenebilir ama zeka çoğu zaman normaldir", color: "blue" },
        { icon: "🧬", label: "Spina Bifida", highlight: "Ayrık Omurga & Folik Asit", detail: "Anne karnında nöral tüp kapanmamasıdır; folik asit ile büyük oranda önlenir", color: "purple" }
      ]
    }
  },
  {
    id: "u4-t4",
    unitId: "unit-4",
    title: "İlerleyici Nöromüsküler Hastalıklar: DMD, SMA ve Multipl Skleroz (MS)",
    subtitle: "Zamanla artan işlev kaybı, ataklarla seyreden MS ve esnek gelecek planlaması",
    eli5: "Serebral Palsi sabit kalırken; DMD, SMA ve MS hastalıkları İLERLEYİCİ (progresif) veya ataklarla seyreden durumlardır. DMD (özellikle erkek çocuklarda) ve SMA kasların zamanla erimesine yol açar. MS (Multipl Skleroz) ise genellikle 20-40 yaş arası genç yetişkinlerde (kadınlarda daha sık) başlar; görme bulanıklığı, denge kaybı ve dışarıdan görünmeyen şiddetli yorgunluk atakları yapar.",
    bulletPoints: [
      "Duchenne Musküler Distrofisi (DMD): Genetik geçişli (çoğunlukla erkek çocuklarda görülen), kas liflerinin zamanla yıkımına ve tekerlekli sandalye/solunum desteğine yol açan ilerleyici kas hastalığıdır.",
      "Spinal Müsküler Atrofi (SMA): Omurilikteki motor sinir hücrelerinin kaybına bağlı ilerleyici kas güçsüzlüğü ve atrofidir (evlilik öncesi SMA taşıyıcılık taraması koruyucu sağlık hizmetidir).",
      "Multipl Skleroz (MS): Merkezi sinir sisteminde miyelin kılıfın hasar gördüğü, genellikle genç yetişkinlikte başlayan, ataklar ve iyileşme dönemleriyle (epizodik) veya ilerleyici seyreden otoimmün hastalıktır.",
      "Sosyal Hizmette İlerleyici Hastalık Planlaması: Durum sabit kalmadığı için ev uyarlamaları, yardımcı teknolojiler ve bakım desteği 'gelecekteki olası işlev kayıpları' öngörülerek esnek ve aşamalı planlanmalıdır."
    ],
    practicalTip: "Soruda 'Serebral Palsi, DMD, SMA ve MS'ten hangisi ilerleyici DEĞİLDİR?' derse cevap Serebral Palsi! 'Genç yetişkinlikte ataklarla seyreden ve görünmeyen yorgunluk yapan miyelin hastalığı hangisidir?' derse cevap MS (Multipl Skleroz)!",
    examClue: "MS hastalarında dışarıdan hiçbir fiziksel engel görünmediği günlerde bile yoğun 'kronik yorgunluk (fatigue)' yaşanabilir; işyerinde esnek mola ve serin ortam 'makul düzenleme' kapsamındadır.",
    keepInMind: "İlerleyici (Progresif) Olanlar = DMD (Kas Erimesi) + SMA (Motor Nöron) + MS (Genç Yetişkin, Ataklı/Epizodik, Miyelin Hasarı).",
    aiPromptSuggestion: "DMD, SMA ve Multipl Skleroz (MS) hastalıklarını ve ilerleyici hastalıklarda sosyal hizmet uzmanının nasıl planlama yapması gerektiğini anlatır mısın?",
    visualSchema: {
      title: "Görsel Tablo · 3 İlerleyici Nöromüsküler / Nörolojik Durum",
      items: [
        { icon: "👦", label: "DMD (Kas Distrofisi)", highlight: "İlerleyici Kas Kaybı", detail: "Çocuklukta (sıklıkla erkeklerde) başlar, kas gücü zamanla azalır", color: "amber" },
        { icon: "🧬", label: "SMA", highlight: "Motor Nöron Kaybı", detail: "Genetik geçişlidir; evlilik öncesi taşıyıcılık testiyle taranır", color: "purple" },
        { icon: "⚡", label: "Multipl Skleroz (MS)", highlight: "Genç Yetişkin & Ataklı", detail: "20-40 yaşta başlar, ataklı (epizodik) seyreder ve görünmeyen yorgunluk yapar", color: "blue" }
      ]
    }
  },
  {
    id: "u4-t5",
    unitId: "unit-4",
    title: "DSÖ ICF (2001) Biyopsikososyal Sınıflandırması",
    subtitle: "Vücut işlevleri + Etkinlik + Katılım + Çevresel ve Kişisel Etkenler",
    eli5: "Dünya Sağlık Örgütü 2001 yılında ICF modeliyle Tıbbi Model ile Sosyal Modeli barıştırdı ve 'Biyopsikososyal Model'i kurdu! ICF der ki: Tıbbi tanısı birebir aynı olan (ikisi de T10 parapleji olan) iki kişiden biri asansörlü evde yaşayıp mühendis olarak çalışırken, diğeri asansörsüz 3. katta eve hapsolabilir. Farkı yaratan şey 'Çevresel Etkenler'dir!",
    bulletPoints: [
      "DSÖ ICF (2001): İşlevsellik, Yetiyitimi ve Sağlığın Uluslararası Sınıflandırması (International Classification of Functioning, Disability and Health).",
      "1. Boyut - Vücut İşlevleri ve Yapıları: Fizyolojik/psikolojik işlevler ve anatomik yapılar (kas gücü, eklem hareketi).",
      "2. Boyut - Etkinlik (Activity): Bireyin bir görevi veya eylemi yerine getirmesi (yürüme, giyinme, yemek yeme - kısıtlanmasına 'etkinlik sınırlılığı' denir).",
      "3. Boyut - Katılım (Participation): Bireyin yaşam durumlarında (okul, iş, aile, sanat, siyaset) yer alması (engellenmesine 'katılım kısıtlılığı' denir).",
      "4. Boyut - Bağlamsal Etkenler: Çevresel Etkenler (mimari, teknoloji, aile/toplum tutumu, yasalar - kolaylaştırıcı veya engelleyici olabilir) ve Kişisel Etkenler (yaş, cinsiyet, baş etme gücü, eğitim)."
    ],
    practicalTip: "ICF şifresi: 2001 yılı + Biyopsikososyal Model + (Vücut İşlevi/Yapısı + Etkinlik + Katılım) × (Çevresel ve Kişisel Etkenler)!",
    examClue: "ICF'de çevresel faktörler iki türlü işler: Rampalı otobüs ve destekleyici aile 'KOLAYLAŞTIRICI (Facilitator)', dik merdiven ve önyargılı işveren ise 'ENGELLEYİCİ (Barrier)' faktördür.",
    keepInMind: "DSÖ ICF (2001) = Biyopsikososyal Model | Bileşenleri = Vücut Yapısı/İşlevi + Etkinlik + Katılım + Bağlamsal (Çevresel & Kişisel) Etkenler.",
    aiPromptSuggestion: "DSÖ'nün ICF (2001) Biyopsikososyal modelini aynı tanıya sahip iki farklı insan örneği üzerinden anlatır mısın?"
  },
  {
    id: "u4-t6",
    unitId: "unit-4",
    title: "Türkiye Engellilik İstatistikleri: Washington Grubu (%6,9) vs İdari Kayıt (2,5 Milyon)",
    subtitle: "Slaytlardaki tüm resmi TÜİK ve EYHGM yüzdelerinin tam listesi",
    eli5: "Türkiye'de engelli sayısını ölçen 2 farklı kaynak vardır ve sayıları farklıdır: 1) 2011 Nüfus ve Konut Araştırması insanlara 'Yürümekte, görmekte zorlanıyor musun?' diye sordu (Washington Grubu soruları) ve nüfusun %6,9'unun (4,9 milyon kişi) engelli olduğunu buldu. 2) Bakanlığın Ulusal Engelli Veri Sistemi ise sadece hastaneden resmi rapor alanları sayar; burada yaklaşık 2,5 milyon kişi kayıtlıdır.",
    bulletPoints: [
      "2011 Nüfus ve Konut Araştırması (Washington Grubu Soru Seti): 3 ve daha yukarı yaştaki nüfusun %6,9'u (yaklaşık 4,9 milyon kişi) en az bir işlev alanında çok zorlanmakta veya hiç yapamamaktadır.",
      "Hareket Zorluğu Verileri (2011): Yürüme veya merdiven çıkmada zorlananlar %3,3 (yaklaşık 2,3 milyon kişi); bir şey taşıma veya tutmada zorlananlar %4,1'dir. En yüksek oran hareket zorluğudur ve kadınlarda erkeklerden daha yüksektir.",
      "Ulusal Engelli Veri Sistemi (İdari Kayıt): Resmi sağlık kurulu raporu olan yaklaşık 2,5 milyon kişi kayıtlıdır. Bu kayıtlıların %40,6'sı süreğen hastalık, %13,8'i ortopedik engellidir. (Rapor almayanları kapsamaz!).",
      "Yaşlılık ve Engellilik (2019 Türkiye Sağlık Araştırması): 75 yaş ve üzerindekilerin %44,7'si yardım veya yardımcı araç olmadan yürüyememektedir."
    ],
    practicalTip: "Slayttaki tüm sayıları tek satırda ezberle: 2011 Washington Grubu = %6,9 (4,9 Milyon) | Yürüme/Merdiven = %3,3 | Taşıma/Tutma = %4,1 | İdari Kayıt (Raporlu) = 2,5 Milyon (%40,6 Süreğen, %13,8 Ortopedik) | 75+ Yaş Yürüyememe = %44,7!",
    examClue: "Neden 2011 araştırmasında 4,9 milyon çıkarken Bakanlık sisteminde 2,5 milyon kişi var? Çünkü Bakanlık sistemi (İdari Kayıt) sadece hastaneye gidip resmi rapor çıkaranları kapsar!",
    keepInMind: "2011 Araştırması (Washington Grubu) = %6,9 (4,9 Milyon) | Yürüme = %3,3 | İdari Kayıt = 2,5 Milyon (%40,6 Süreğen, %13,8 Ortopedik) | 75+ Yaş = %44,7.",
    aiPromptSuggestion: "Türkiye'deki 2011 Washington Grubu araştırması ile Ulusal Engelli Veri Sistemi arasındaki sayısal farkları ve yüzdeleri özetler misin?",
    visualSchema: {
      title: "Görsel Veri Kartı · Türkiye Engellilik İstatistikleri (Slayt Sayıları)",
      items: [
        { icon: "📊", label: "%6,9 (4,9 Milyon)", highlight: "2011 Washington Grubu", detail: "Yürüme/merdiven zorluğu %3,3 (2,3M) | Taşıma/tutma zorluğu %4,1", color: "blue" },
        { icon: "🗂️", label: "2,5 Milyon Kayıtlı", highlight: "Ulusal Veri Sistemi", detail: "Resmi raporu olanlar: %40,6 Süreğen Hastalık, %13,8 Ortopedik Engel", color: "emerald" },
        { icon: "👵", label: "%44,7 (75+ Yaş)", highlight: "2019 Sağlık Araştırması", detail: "75 yaş ve üzerindekilerin %44,7'si yardımsız/araçsız yürüyememektedir", color: "amber" }
      ]
    }
  },
  {
    id: "u4-t7",
    unitId: "unit-4",
    title: "Sağlık Kurulu Raporları: 18 Yaş Altı ÇÖZGER ve 18+ Erişkin Raporu",
    subtitle: "Çocuklarda yüzde yerine ÖKGV kategorisi, yetişkinlerde Balthazard formülü",
    eli5: "2019 yılında yapılan yönetmelik değişikliğiyle 18 yaş altı çocuklara artık '%40, %80 özürlü' gibi yüzdelik sayı verilmez; bunun yerine 'ÇÖZGER (Çocuklar İçin Özel Gereksinim Raporu)' verilir ve çocuğun eğitim/bakım ihtiyacı düzeyle belirlenir. 18 yaş üstü yetişkinlere ise 'Erişkinler İçin Engellilik Sağlık Kurulu Raporu' verilir ve birden fazla hastalık varsa 'Balthazard Formülü' ile birleştirilir.",
    bulletPoints: [
      "ÇÖZGER (Çocuklar İçin Özel Gereksinim Raporu - 18 Yaş Altı): Çocukları yetişkin hastalık cetvelleriyle ölçmek yerine gelişimsel ve eğitsel gereksinimlerini esas alır.",
      "ÖKGV (Özel Koşul Gereksinimi Vardır): ÇÖZGER raporunda ağır engelli / tam bağımlı düzeyine karşılık gelen ve evde bakım yardımı gibi hakları sağlayan en üst düzey ibaredir.",
      "Erişkinler İçin Engellilik Değerlendirmesi Raporu (18 Yaş ve Üstü): En az %40 engel oranı haklara erişimde temel eşiktir. Ağır engellilik yerine artık 'Kısmi Bağımlı' ve 'Tam Bağımlı' ifadeleri kullanılır.",
      "Balthazard Formülü: Yetişkin bir bireyde birden fazla engel/hastalık varsa (örn. %40 ortopedik + %20 işitme), oranlar doğrudan toplanmaz (40+20=60 yapılmaz); Balthazard formülü ile kalan kapasite üzerinden hesaplanır."
    ],
    practicalTip: "Yaş ayrımına dikkat: 18 yaş altı = ÇÖZGER (En üst ibare: ÖKGV). 18 yaş üstü = Erişkin Engellilik Raporu (En üst ibare: Tam Bağımlı, hesaplama: Balthazard formülü).",
    examClue: "Eski raporlarda yazan 'Ağır Engelli: Evet' ibaresi, yeni yönetmelikte erişkinler için 'Tam Bağımlı', çocuklar (ÇÖZGER) için ise 'ÖKGV (Özel Koşul Gereksinimi Vardır)' olarak güncellenmiştir.",
    keepInMind: "18 Yaş Altı = ÇÖZGER (ÖKGV) | 18 Yaş Üstü = Erişkin Raporu (%40 Alt Sınır + Tam Bağımlı + Balthazard Formülü).",
    aiPromptSuggestion: "ÇÖZGER raporu ile Erişkin Engellilik Sağlık Kurulu Raporu arasındaki farkları ve ÖKGV / Tam Bağımlı kavramlarını açıklar mısın?",
    visualSchema: {
      title: "Görsel Karşılaştırma · Türkiye'de 2 Resmi Sağlık Kurulu Raporu",
      items: [
        { icon: "👶", label: "18 Yaş Altı: ÇÖZGER", highlight: "Özel Gereksinim Raporu", detail: "Yüzde yerine gereksinim düzeyi yazar; ağır düzey karşılığı 'ÖKGV'dir", color: "amber" },
        { icon: "🧑", label: "18+ Yaş: Erişkin Raporu", highlight: "En Az %40 & Tam Bağımlı", detail: "Haklar için alt sınır %40'tır; evde bakım için 'Tam Bağımlı' ibaresi aranır", color: "blue" },
        { icon: "🧮", label: "Balthazard Formülü", highlight: "Çoklu Engel Hesabı", detail: "Birden fazla hastalık oranı düz toplanmaz, Balthazard ile birleştirilir", color: "purple" }
      ]
    }
  },
  {
    id: "u4-t8",
    unitId: "unit-4",
    title: "Engelli İstihdamı ve Kotalar: 4857 İş Kanunu, 657 DMK ve EKPSS",
    subtitle: "50+ işçi kuralı, Özel %3, Kamu İşçi %4, Kamu Memur %3 ve işgücü verileri",
    eli5: "Türkiye'de engelli bireylerin iş hayatına katılması için yasal kota zorunluluğu vardır: 4857 sayılı İş Kanunu'na göre 50 ve daha fazla işçi çalıştıran özel sektör işyerleri %3, kamu işyerleri ise %4 engelli işçi çalıştırmak zorundadır. 657 sayılı Devlet Memurları Kanunu'na göre ise kamu kurumları %3 oranında engelli memur (EKPSS ile) çalıştırır.",
    bulletPoints: [
      "İşgücüne Katılım Uçurumu (EYHGM 2023): Türkiye'de genel nüfusta işgücüne katılım oranı %53,2 iken, engelli nüfusta %22,1'dir. Engelli kadınlarda ise bu oran sadece %12,5'tir!",
      "4857 Sayılı İş Kanunu (Madde 30): Aynı il sınırları içinde 50 ve üzeri işçi çalıştıran ÖZEL SEKTÖR işverenleri %3, KAMU işyerleri ise %4 oranında engelli işçi çalıştırmakla yükümlüdür.",
      "657 Sayılı Devlet Memurları Kanunu (Madde 53): Kamu kurum ve kuruluşları toplam dolu kadrolarının %3'ü oranında engelli memur istihdam etmek zorundadır (Yerleştirme EKPSS ve kura ile yapılır).",
      "Destekli İstihdam ve Korumalı İşyerleri: Ağır zihinsel/ruhsal engelli bireyler için iş koçu desteği (destekli istihdam) ve devlet teşvikli Korumalı İşyerleri düzenlenmiştir."
    ],
    practicalTip: "Sınavda yüzde yüz çıkacak kota tablosu: 50+ İşçi Özel Sektör (4857) = %3 | 50+ İşçi Kamu (4857) = %4 | Devlet Memuru (657 EKPSS) = %3! İşgücüne katılım: Genel %53,2 -> Engelli %22,1 -> Engelli Kadın %12,5!",
    examClue: "İşverenlerin kota cezasını ödeyip engelli çalıştırmaktan kaçınması veya engelli çalışanı 'bankamatik çalışanı' yapıp işe getirmemesi sosyal içerme hakkının ihlalidir.",
    keepInMind: "4857 İş Kanunu (50+ İşçi): Özel = %3, Kamu İşçi = %4 | 657 DMK Memur = %3 (EKPSS) | Engelli İşgücü Katılımı = %22,1 (Kadınlarda %12,5).",
    aiPromptSuggestion: "4857 sayılı İş Kanunu ve 657 sayılı DMK'daki engelli çalıştırma kotalarını ve işgücüne katılım oranlarını özetler misin?"
  },
  {
    id: "u4-t9",
    unitId: "unit-4",
    title: "Sosyal Yardımlar ve Bakım Modelleri: 2022 Aylığı, 2828 Evde Bakım ve Umut Evleri",
    subtitle: "Nakdi yardımlar, evde bakım istatistikleri ve toplum temelli ev tipi bakım",
    eli5: "Maddi yardımlarda iki kanunu asla karıştırma: 2022 sayılı Kanun muhtaç engelli bireyin KENDİSİNE (%40-69 veya %70+) ya da 18 yaş altı yakınına 'Engelli Aylığı' bağlar. 2828 sayılı Kanun ise tam bağımlı (ağır) engelliye evde bakan AİLE ÜYESİNE 'Evde Bakım Yardımı' öder ve büyük kışla kurumlar yerine apartman dairelerinde 'Umut Evleri' kurar.",
    bulletPoints: [
      "2022 Sayılı Kanun (Engelli Aylıkları): Sosyal güvencesi olmayan ve hane içinde kişi başına düşen geliri asgari ücretin 1/3'ünden az olanlara (%40-69 arası ve %70+ oranına göre farklı tutarda) ödenen nakdi aylıktır; 18 yaş altı için 'Engelli Yakını Aylığı' verilir.",
      "2828 Sayılı Kanun (Evde Bakım Yardımı): Raporunda 'Tam Bağımlı' (çocuklarda ÖKGV) yazan ve hane kişi başı geliri asgari ücretin 2/3'ünden az olan bireyin bakımını üstlenen akrabasına ödenir.",
      "Evde Bakım İstatistiği (Slayt Verisi): Türkiye'de yaklaşık 562 bin kişi Evde Bakım Yardımı almaktadır ve bunların yaklaşık %17'si bedensel engellidir.",
      "Umut Evleri (Ev Tipi Bakım Modeli): Büyük yatılı kurumlar yerine, 4-6 engelli bireyin mahalle içindeki normal bir apartman dairesinde bakım personeli desteğiyle yaşadığı toplum temelli modeldir."
    ],
    practicalTip: "Kanun numaralarını şifrele: 2022 = Engelli Aylığı (Gelir < 1/3 asgari ücret) | 2828 = Evde Bakım Yardımı (Tam bağımlı, Gelir < 2/3 asgari ücret, 562 bin kişi) & Umut Evleri!",
    examClue: "Evde Bakım Yardımı engelli bireyin kendisine değil, onun günlük bakımını fiilen üstlenen bakım verene (akrabasına/vasisine) ödenir.",
    keepInMind: "2022 Kanunu = Engelli Aylığı (Gelir < 1/3) | 2828 Kanunu = Evde Bakım Yardımı (562 Bin Kişi, Gelir < 2/3) + Umut Evleri (Ev Tipi Bakım).",
    aiPromptSuggestion: "2022 sayılı Kanun kapsamındaki Engelli Aylığı ile 2828 sayılı Kanun kapsamındaki Evde Bakım Yardımı ve Umut Evleri arasındaki farkları anlatır mısın?"
  },
  {
    id: "u4-t10",
    unitId: "unit-4",
    title: "Engelli Çocuğu Olan Ailelerin Uyum ve Yas Süreci (Kübler-Ross / Aile Tepkileri)",
    subtitle: "Şok, İnkâr, Öfke/Suçluluk, Pazarlık, Depresyon ve Kabul aşamaları",
    eli5: "Her anne-baba hamilelik boyunca zihninde 'sağlıklı/ideal bir bebek' hayal eder. Bebek engelli doğduğunda veya sonradan kaza geçirdiğinde aile 'hayalindeki sağlıklı çocuğun kaybı' için doğal bir YAS SÜRECİ yaşar: Önce Şok olur, sonra 'Doktor yanlış baktı' diye İnkâr eder (kapı kapı doktor gezer), sonra Öfke ve Suçluluk duyar, Pazarlık yapar, Üzüntü yaşar ve sonunda çocuğunu olduğu gibi Kabul edip yeniden yapılanır.",
    bulletPoints: [
      "Tanı Anı ve 'İdeal Çocuğun Kaybı': Ailenin yaşadığı yas, çocuğun kendisine değil, zihinlerindeki 'engelsiz/ideal çocuk beklentisinin kaybına' yöneliktir.",
      "1. Aşama - Şok ve Uyuşukluk: Tanı ilk duyulduğunda yaşanan donakalma, ağlama ve söyleneni algılayamama durumu.",
      "2. Aşama - İnkâr (Denial): 'Bu rapor yanlış, benim çocuğumda bir şey yok' diyerek doktor doktor gezme (Doctor shopping).",
      "3. Aşama - Öfke, Suçluluk ve Pazarlık: 'Neden bizim başımıza geldi?' öfkesi, eşlerin birbirini veya kendini suçlaması ('Hamileyken içtiğim ilaçtan mı oldu?') ve manevi pazarlıklar.",
      "4. Aşama - Depresyon (Çökkünlük) ve 5. Aşama - Kabul / Yeniden Yapılanma: Gerçeğin kabul edilip çocuğun potansiyeline ve haklarına odaklanılması (Bu aşamalar düz bir çizgi değildir; okula başlama veya ergenlik gibi geçişlerde duygular tekrar tetiklenebilir - Kronik Keder!)."
    ],
    practicalTip: "Soruda 'Ailenin tanıyı kabul etmeyip tanı değişir umuduyla kapı kapı farklı doktorları gezmesi (doctor shopping) hangi aşamadır?' derse cevap: İNKÂR! 'Okula başlama gibi geçiş dönemlerinde yas duygularının yeniden canlanması' derse: KRONİK KEDER (Olshansky)!",
    examClue: "Sosyal hizmet uzmanı tanı verilirken aileye empatik, suçlayıcı olmayan, anlaşılır bilgi sunmalı ve ailenin inkâr/öfke tepkilerini 'patolojik' görmeyip doğal uyum süreci olarak desteklemelidir.",
    keepInMind: "Aile Uyum Süreci = Şok -> İnkâr (Doktor Doktor Gezme) -> Öfke & Suçluluk -> Pazarlık -> Depresyon -> Kabul ve Yeniden Yapılanma.",
    aiPromptSuggestion: "Engelli çocuğu olan ailelerin yaşadığı yas/uyum aşamalarını ve 'Kronik Keder' kavramını örneklerle anlatır mısın?",
    visualSchema: {
      title: "Görsel Süreç · Ailenin Tanıya Uyum Aşamaları",
      items: [
        { icon: "⚡", label: "1. Şok & 2. İnkâr", highlight: "Doktor Doktor Gezme", detail: "İlk anda donakalma ve 'tanı yanlış' diyerek farklı hastanelere gitme", color: "amber" },
        { icon: "🌧️", label: "3. Öfke, Suçluluk & Yas", highlight: "Neden Biz? / Suçlama", detail: "Kendini/eşi suçlama, pazarlık ve yoğun üzüntü (Kronik keder dalgaları)", color: "rose" },
        { icon: "🌱", label: "4. Kabul & Uyum", highlight: "Yeniden Yapılanma", detail: "Çocuğu olduğu gibi kabul etme, aile işbölümü ve hak/eğitim arayışı", color: "emerald" }
      ]
    }
  },
  {
    id: "u4-t11",
    unitId: "unit-4",
    title: "Bakım Veren Yükü (Caregiver Burden), Kardeşler ve Geçici Bakım (Respite Care)",
    subtitle: "Tükenmişlik, 'Cam Çocuk' (sağlam kardeş) sendromu ve mola bakım hizmeti",
    eli5: "Evde 7/24 ağır engelli bir bireye bakan anne hem fiziksel (bel fıtığı, uykusuzluk) hem duygusal hem de maddi olarak tükenir; buna 'Bakım Veren Yükü' denir. Evdeki sağlam kardeşler ise anne-babalarını üzmemek için kendi dertlerini içine atar ve erken büyür ('ebeveynleşmiş çocuk'). Ailenin nefes alması için devletin birkaç gün/hafta geçici bakım sağlamasına 'Mola / Geçici Bakım (Respite Care)' denir!",
    bulletPoints: [
      "Bakım Veren Yükü (Nesnel ve Öznel Yük): Nesnel yük = Bakıma harcanan saat, maddi kayıp, işten ayrılma ve fiziksel yorgunluk. Öznel yük = Bakım verenin hissettiği stres, yalnızlık, kaygı ve tükenmişlik.",
      "Kardeşlerin Deneyimi (Ebeveynleşmiş Çocuk / Cam Çocuk): Sağlam kardeşler ebeveyn ilgisinin çoğunun engelli kardeşe yönelmesiyle ihmal edilmiş hissedebilir, aşırı sorumluluk yüklenebilir veya akran ortamında damgalanma kaygısı yaşayabilir.",
      "Geçici / Mola Bakım Hizmeti (Respite Care): Evde bakım veren ailenin dinlenmesi, tatile gitmesi, kendi sağlık sorunlarıyla ilgilenmesi veya acil işlerini halletmesi için engelli bireye belirli sürelerle (gündüzlü veya yılda 30-45 gün yatılı) sunulan geçici kurumsal/ev içi bakım desteğidir.",
      "Gelecek Kaygısı: Yaşlanan bakım verenlerin en büyük travması 'Ben öldükten sonra çocuğuma ne olacak?' sorusudur."
    ],
    practicalTip: "Soruda 'Bakım veren ailelerin tükenmişliğini önlemek ve dinlenmelerine fırsat vermek amacıyla sunulan kısa süreli/geçici bakım hizmeti nedir?' diye sorulursa cevap: GEÇİCİ / MOLA BAKIM (Respite Care)!",
    examClue: "Aileyle sosyal hizmet çalışmasında sadece anne ve engelli çocuk değil; genellikle sessiz kalan 'baba' ve 'sağlam kardeşler' de aile sistemine dahil edilmelidir.",
    keepInMind: "Nesnel Yük = Saat/Para Kaybı | Öznel Yük = Duygusal Tükenmişlik | Kardeşler = Erken Sorumluluk | Çözüm = Geçici/Mola Bakım (Respite Care).",
    aiPromptSuggestion: "Bakım veren yükü (nesnel ve öznel yük), engelli bireyin kardeşlerinin yaşadığı sorunlar ve Geçici/Mola Bakım (Respite Care) hizmetini anlatır mısın?",
    visualSchema: {
      title: "Görsel Aile Sistemi · Bakım Yükü, Kardeşler ve Mola Bakım",
      items: [
        { icon: "🔋", label: "Bakım Veren Yükü", highlight: "Nesnel & Öznel Yük", detail: "7/24 mesai, uykusuzluk, işten kopma ve duygusal tükenmişlik (burnout)", color: "rose" },
        { icon: "👧", label: "Kardeş Dinamikleri", highlight: "Ebeveynleşmiş Kardeş", detail: "Sağlam kardeşlerin kendi ihtiyaçlarını bastırması ve erken büyümesi", color: "purple" },
        { icon: "🏖️", label: "Geçici Bakım (Respite)", highlight: "Aileye Nefes / Mola!", detail: "Bakım verenin dinlenmesi için sunulan kısa süreli/gündüzlü mola bakım hizmeti", color: "emerald" }
      ]
    }
  },
  {
    id: "u4-t12",
    unitId: "unit-4",
    title: "Ruhsal / Psikososyal Engellilik ve Toplum Ruh Sağlığı Merkezleri (TRSM)",
    subtitle: "Şizofreni, bipolar bozukluk, epizodik seyir ve toplum temelli iyileşme (Recovery)",
    eli5: "Şizofreni, şizoaffektif bozukluk veya bipolar bozukluk gibi süreğen ruhsal hastalıklar, toplumun önyargılarıyla birleştiğinde 'Psikososyal Engellilik' doğurur. Eskiden bu kişiler depo tipi akıl hastanelerine kapatılırdı. Bugün ise 'Toplum Ruh Sağlığı Merkezleri (TRSM)' ile kişi kendi evinde yaşarken gündüzleri merkeze gelip ilaç takibi, grup terapisi, iş-uğraş ve sosyal hizmet desteği alır!",
    bulletPoints: [
      "Psikososyal Engellilik Kavramı: İnsan hakları yaklaşımında (CRPD) 'ruhsal hastalık' yerine, zihinsel/ruhsal durum ile toplumsal damgalanma ve engellerin etkileşimini vurgulayan 'psikososyal engellilik' kavramı tercih edilir.",
      "Epizodik (Ataklı) Seyir: Psikososyal engellilik sabit değildir; alevlenme (atak) ve iyilik (remisyon) dönemleriyle seyreder. Bu nedenle esnek çalışma ve destek modellerine ihtiyaç vardır.",
      "Toplum Ruh Sağlığı Merkezleri (TRSM - 2011): Ağır ruhsal bozukluğu (şizofreni, bipolar vb.) olan bireyleri hastaneye kapatmak yerine toplum içinde takip eden, gezici ekiple ev ziyareti yapan ve rehabilitasyon sunan gündüzlü merkezlerdir.",
      "İyileşme (Recovery) Yaklaşımı: Klinik olarak semptomların tamamen bitmesi değil; kişinin semptomlarına rağmen umutlu, anlamlı, kendi kararlarını verdiği ve topluma katıldığı bir yaşam sürmesidir."
    ],
    practicalTip: "Soruda 'Ağır ruhsal bozukluğu olan bireylerin kapalı hastaneler yerine toplum içinde gündüzlü rehabilitasyon, iş-uğraş ve ev ziyaretiyle desteklendiği birim hangisidir?' derse cevap: TRSM (Toplum Ruh Sağlığı Merkezi)!",
    examClue: "Toplumda en ağır damgalanmaya (tehlikeli/saldırgan önyargısına) maruz kalan grup psikososyal engellilerdir; oysa araştırmalar bu bireylerin şiddet faili olmaktan çok şiddet MAĞDURU olduklarını göstermektedir.",
    keepInMind: "Psikososyal Engellilik = Epizodik (Ataklı) Seyir + Ağır Damgalanma | TRSM = Toplum Temelli Gündüzlü Ruh Sağlığı ve Gezici Ekip Modeli.",
    aiPromptSuggestion: "Psikososyal engellilik nedir, Toplum Ruh Sağlığı Merkezleri (TRSM) nasıl çalışır ve 'Recovery (İyileşme)' yaklaşımı ne demektir?",
    visualSchema: {
      title: "Görsel Model · Psikososyal Engellilik ve TRSM Dönüşümü",
      items: [
        { icon: "🌊", label: "Epizodik Doğa", highlight: "Atak & Remisyon", detail: "Sürekli aynı kalmaz; alevlenme ve iyilik dönemleriyle dalgalı seyreder", color: "purple" },
        { icon: "🏥", label: "TRSM Modeli", highlight: "Toplum Temelli Merkez", detail: "Depo hastane yerine gündüzlü takip, gezici ev ziyareti ve sosyal içerme", color: "blue" },
        { icon: "🌟", label: "İyileşme (Recovery)", highlight: "Anlamlı Yaşam & Umut", detail: "Sadece ilaç içmek değil, toplum içinde üreten ve karar veren özne olmak", color: "emerald" }
      ]
    }
  },
  {
    id: "u4-t13",
    unitId: "unit-4",
    title: "Multidisipliner Rehabilitasyon Ekibi ve Sosyal Hizmet Uzmanının Rolleri",
    subtitle: "Fizyoterapist, Ergoterapist, Özel Eğitimci ve Sosyal Hizmet Uzmanı işbölümü",
    eli5: "Engellilik alanında tek bir meslek her sorunu çözemez; bir takım oyunu (multidisipliner ekip) gerekir! Doktor tıbbi tanıyı koyar, Fizyoterapist kasları güçlendirip yürütür, Ergoterapist evi/banyoyu düzenleyip günlük yaşam becerisi kazandırır, Sosyal Hizmet Uzmanı ise vaka yöneticisi olarak aileyi güçlendirir, haklara/maaşlara ulaştırır ve toplumsal engellerle mücadele eder.",
    bulletPoints: [
      "Fizyoterapist: Hareket açıklığı, kas gücü, denge, yürüme eğitimi ve fiziksel mobilite üzerine çalışır.",
      "Ergoterapist (İş ve Uğraşı Terapisti): Günlük yaşam aktivitelerinde (giyinme, yemek yeme, yazı yazma) bağımsızlık ve ev/okul/işyeri çevre uyarlamaları (banyo tutamağı, rampa, uyarlanmış kaşık) üzerine çalışır.",
      "Dil ve Konuşma Terapisti & Özel Eğitim Uzmanı: İletişim/yutma bozuklukları, alternatif iletişim sistemleri ve Bireyselleştirilmiş Eğitim Programı (BEP) yürütür.",
      "Sosyal Hizmet Uzmanının 6 Temel Rolü: 1) Vaka Yöneticisi (Koordinatör), 2) Danışman (Birey ve aile uyum süreci), 3) Bağlantı Kurucu / Aracı (Broker - kaynaklarla buluşturma), 4) Hak Savunucusu (Advocate), 5) Eğitici, 6) Sosyal Politika Değişim Ajanı."
    ],
    practicalTip: "En çok karıştırılan iki meslek: 'Kas gücü, denge ve yürüme egzersizi' = FİZYOTERAPİST! 'Günlük yaşam becerileri ve ev/banyo/masa çevre uyarlaması' = ERGOTERAPİST!",
    examClue: "Sosyal hizmet uzmanının müracaatçıyı 2022 aylığı, ÇÖZGER raporu, İŞKUR ve belediye hizmetleriyle buluşturması 'Bağlantı Kurucu / Aracı (Broker)' ve 'Vaka Yöneticisi' rolüdür.",
    keepInMind: "Fizyoterapist = Kas Gücü & Hareket | Ergoterapist = Günlük Yaşam & Ev/Çevre Uyarlaması | Sosyal Hizmet Uzmanı = Vaka Yönetimi, Psikososyal Destek & Hak Savunuculuğu.",
    aiPromptSuggestion: "Fizyoterapist ile Ergoterapist arasındaki farkı ve Sosyal Hizmet Uzmanının multidisipliner ekipteki rollerini örneklerle anlatır mısın?",
    visualSchema: {
      title: "Görsel Ekip Haritası · Multidisipliner Rehabilitasyon İşbölümü",
      items: [
        { icon: "🏃", label: "Fizyoterapist", highlight: "Kas Gücü & Hareket", detail: "Egzersiz, denge, spastisite kontrolü ve fiziksel yürüyüş eğitimi", color: "blue" },
        { icon: "🏠", label: "Ergoterapist", highlight: "Günlük Yaşam & Ev", detail: "Giyinme/beslenme becerisi ve banyo, mutfak, işyeri çevre uyarlaması", color: "amber" },
        { icon: "🧭", label: "Sosyal Hizmet Uzmanı", highlight: "Vaka Yönetimi & Hak", detail: "Psikososyal destek, aile danışmanlığı, kaynak bağlama ve savunuculuk", color: "emerald" }
      ]
    }
  },
  {
    id: "u4-t14",
    unitId: "unit-4",
    title: "Hak Temelli Etik İletişim, Dil Kullanımı ve 'İlham Pornografisi' Eleştirisi",
    subtitle: "Tekerlekli sandalyeye mahkûm değil, kullanan kişi! Beden uzantısına saygı",
    eli5: "Kullandığımız dil zihniyetimizi ele verir: Tekerlekli sandalye bir hapishane değildir, kişiyi özgürleştiren bir araçtır; o yüzden asla 'tekerlekli sandalyeye mahkûm/bağlı' denmez, 'tekerlekli sandalye kullanan kişi' denir! Ayrıca engelli birinin sadece sokağa çıkmasını veya çay içmesini 'Bakın engelli ama hayata nasıl tutunuyor, ibret alın!' diye abartarak paylaşmaya Stella Young 'İlham Pornografisi (Inspiration Porn)' adını vermiştir ve bu da bir nesneleştirmedir!",
    bulletPoints: [
      "Hak Temelli Dil Tablosu: 'Sakat, özürlü, çürük, malul' DENMEZ -> 'Engelli birey' denir. 'Tekerlekli sandalyeye mahkûm / yatalak' DENMEZ -> 'Tekerlekli sandalye kullanan birey / yatağa bağımlı' denir. 'Normal insanlar' DENMEZ -> 'Engelli olmayan bireyler' denir.",
      "İletişim Etiği Altın Kuralları: 1) Yanındaki refakatçiyle/anneyle değil DOĞRUDAN engelli bireyin kendisiyle konuşulur ('Tuz alır mı?' değil, 'Tuz alır mısınız?'). 2) Tekerlekli sandalye kullanan kişiyle uzun konuşulacaksa göz hizasına inilir (oturulur).",
      "Kişisel Alan Kuralı: Tekerlekli sandalye, koltuk değneği veya beyaz baston kişinin BEDENİNİN UZANTISIDIR; kendisinden izin almadan asla itilmez, çekilmez veya dokunulmaz!",
      "İlham Pornografisi (Inspiration Porn - Stella Young): Engelli bireylerin sıradan günlük yaşamlarının, engelli olmayan insanları motive etmek ve 'halimize şükredelim' dedirtmek için abartılı bir 'kahramanlık' nesnesi yapılmasıdır."
    ],
    practicalTip: "Slayttaki 3 iletişim kuralı banko sınav sorusudur: 1) 'Sandalyeye mahkûm' değil 'kullanan kişi', 2) Refakatçiyle değil doğrudan kişiyle konuş, 3) Tekerlekli sandalyeye/bastona (beden uzantısıdır) İZİNSİZ DOKUNMA!",
    examClue: "Engelli bireyi 'acınacak zavallı' görmek kadar, onu insanüstü bir 'melek / süper kahraman' gibi görmek de onu sıradan eşit yurttaş olmaktan uzaklaştırır.",
    keepInMind: "Mahkûm Değil Kullanan Kişi! | Refakatçiyle Değil Doğrudan Kişiyle Konuş! | Sandalyeye/Bastona İzinsiz Dokunma! | Kahramanlaştırma = İlham Pornografisi.",
    aiPromptSuggestion: "Engelli bireylerle iletişimde yapılan en yaygın hataları, doğru dil kullanımını ve 'İlham Pornografisi' kavramını anlatır mısın?"
  },
  {
    id: "u4-t15",
    unitId: "unit-4",
    title: "Bütüncül Vaka Analizi: 24 Yaşındaki Mert (T10 Parapleji)",
    subtitle: "ICF değerlendirmesi ve Mikro, Mezzo, Makro sosyal hizmet müdahale planı",
    eli5: "Dersin zirve özeti Mert vakasıdır: 24 yaşında sigortasız inşaat işçisi Mert, motosiklet kazası sonrası belden aşağı felç (parapleji) olur. Asansörsüz 3. katta yaşar, sokağa çıkamaz, 'Ben yarım insanım' der (içselleştirilmiş damga). Annesi tükenmiştir (bakım yükü), babası ise 'Yatılı kuruma verelim' der. Sosyal Hizmet Uzmanı kuruma kapatmayı reddeder; Mert'in kendi tercihini merkeze alarak 3 düzeyde müdahale eder!",
    bulletPoints: [
      "Vaka Formülasyonu (ICF Bakışı): Vücut yapısı = T10 parapleji (alt ekstremite felci). Etkinlik/Katılım = İşten, arkadaşlardan ve dışarıdan kopuş. Çevresel Engeller = Asansörsüz 3. kat, sigortasızlık/yoksulluk, babanın kuruma yatırma baskısı, ilçedeki bozuk kaldırımlar.",
      "İlk Etik İlke: Babanın 'kuruma yatırma' isteği tek seçenek kabul edilmez! CRPD Madde 12 ve 19 gereği Mert'in kendi iradesi ve toplum içinde bağımsız yaşam hakkı merkeze alınır.",
      "Mikro Müdahale: Mert ile bireysel psikososyal görüşme (yas ve içselleştirilmiş damgayla çalışma), Erişkin Engellilik Sağlık Kurulu Raporu çıkarılması, 2022 Engelli Aylığı / 2828 Evde Bakım Yardımı bağlantısı, İŞKUR/EKPSS mesleki yönlendirme.",
      "Mezzo ve Makro Müdahale: Mezzo = Anne ve babayla aile danışmanlığı (annenin bakım yükünü paylaşma, babayı bilgilendirme), Omurilik Felçlileri Derneği akran destek grubuyla buluşturma, Ergoterapist ile ev/bina giriş uyarlaması. Makro = İlçedeki ulaşım ve kaldırım engellerinin belediyeye ve Erişilebilirlik İzleme ve Denetleme Komisyonu'na bildirilmesi."
    ],
    practicalTip: "Klasik veya test sınavında Mert vakası sorulursa 4 adımı unutma: 1) Kuruma kapatma, Mert'i dinle (Md.19), 2) Mikro (Rapor, maaş, psikososyal destek, İŞKUR), 3) Mezzo (Aile bakım yükü paylaşımı, akran grubu, ev tadilatı), 4) Makro (Belediye ve Erişilebilirlik Komisyonu başvurusu)!",
    examClue: "Valilik bünyesinde binaları ve toplu taşımayı denetleyen resmi kurulun tam adı: 'Erişilebilirlik İzleme ve Denetleme Komisyonu'dur (5378 sayılı Kanun).",
    keepInMind: "Mert Vakası = Kurum Bakımı Son Çaredir | Mikro = Rapor/Maaş/Psikososyal/İŞKUR | Mezzo = Aile Danışmanlığı/Akran Grubu/Ev Tadilatı | Makro = Belediye & Erişilebilirlik Komisyonu.",
    aiPromptSuggestion: "24 yaşındaki Mert (Parapleji) vakasını ICF modeliyle ve Mikro, Mezzo, Makro müdahale adımlarıyla sınavda tam puan alacak şekilde yazar mısın?"
  },
  {
    id: "u4-t16",
    unitId: "unit-4",
    title: "Afet ve Acil Durumlarda Engellilik: Kapsayıcı Afet Riski Azaltma (DIDRM)",
    subtitle: "6 Şubat depremleri dersleri, tahliye zinciri ve kesintisiz elektrik ihtiyacı",
    eli5: "Deprem, sel veya yangın olduğunda 'Herkes binayı merdivenlerden terk etsin' anonsu tekerlekli sandalyeli için ölüm tuzağıdır! Görme engelli karanlıkta kaçamaz, işitme engelli sireni duyamaz, solunum cihazına bağlı engellinin elektriği kesilirse hayatı tehlikeye girer. 'Engellileri Kapsayan Afet Yönetimi (DIDRM)', her mahallede engellilerin önceden haritalandırılmasını ve erişilebilir çadır/konteyner kentler kurulmasını şart koşar.",
    bulletPoints: [
      "Kapsayıcı Afet Riski Azaltma (Disability-Inclusive Disaster Risk Management - DIDRM): Afet öncesi hazırlık, tahliye, kurtarma, çadır/konteyner yerleşimi ve yeniden inşa süreçlerinin engellilerin gereksinimlerine göre tasarlanmasıdır.",
      "CRPD Madde 11 (Risk Durumları ve İnsani Acil Haller): Taraf devletler silahlı çatışma, insani acil durumlar ve doğal afetlerde engelli bireylerin korunmasını ve güvenliğini sağlamak için gerekli tüm tedbirleri alır.",
      "Afet Alanında 4 Kritik İhtiyaç: 1) Engelli nüfusun önceden tespiti ve kişiye özel tahliye planı, 2) Erişilebilir geçici barınma (rampalı çadır/konteyner, alaturka değil alafranga engelli tuvaleti), 3) Elektriğe bağımlı cihazlar (oksijen konsantratörü, aspiratör, akülü sandalye) için kesintisiz jeneratör, 4) Kaybolan/kırılan protez, tekerlekli sandalye ve kronik ilaçların acil temini.",
      "Sosyal Hizmet Koordinasyonu: Sahadaki sosyal hizmet uzmanları afetten etkilenen engelli bireyleri hızla kayıt altına alır, psiko-sosyal destek ve yardımcı araç tedarikini organize eder."
    ],
    practicalTip: "Soruda 'CRPD Madde 11', 'Doğal afetlerde ve acil durumlarda engellilerin güvenliği ve tahliyesi' veya 'DIDRM' geçiyorsa bu kartı hatırla!",
    examClue: "6 Şubat 2023 depremleri, geçici barınma alanlarında engelli tuvaletlerinin ve rampaların bulunmamasının engellileri nasıl ikincil bir felakete sürüklediğini gösteren acı bir örnektir.",
    keepInMind: "CRPD Madde 11 = Afet ve Acil Durumlarda Koruma | DIDRM = Kapsayıcı Afet Yönetimi & Kesintisiz Güç/Erişilebilir Çadır.",
    aiPromptSuggestion: "Afet ve acil durumlarda engelli bireylerin yaşadığı özgül riskleri ve sosyal hizmet uzmanının afet sahasındaki rollerini anlatır mısın?",
    visualSchema: {
      title: "Görsel Plan · Kapsayıcı Afet Yönetiminin (DIDRM) 3 Ayağı",
      items: [
        { icon: "🚨", label: "1. Erken Uyarı & Tahliye", highlight: "Erişilebilir Alarm", detail: "Sesli siren + flaşörlü ışık ve her engelli için atanmış mahalle tahliye sorumlusu", color: "rose" },
        { icon: "⚡", label: "2. Yaşamsal Destek", highlight: "Cihaz & İlaç", detail: "Solunum cihazları için jeneratör, yedek akü, sonda, bez ve hayati ilaç temini", color: "amber" },
        { icon: "⛺", label: "3. Engelsiz Barınma", highlight: "Rampalı Konteyner", detail: "Erişilebilir girişli çadır, alafranga engelli tuvaleti ve psikososyal destek", color: "emerald" }
      ]
    }
  },
  {
    id: "u4-t17",
    unitId: "unit-4",
    title: "Yaşlılık, Demans ve Engellilik Kesişimi: Geriatrik Sosyal Hizmet",
    subtitle: "Nüfusun yaşlanması, 75+ yaşta %44,7 yürüme zorluğu ve Alzheimer bakımı",
    eli5: "Engellilik sadece gençlikte başlayan bir durum değildir; her insan yeterince yaşarsa engelli adayıdır! TÜİK verilerine göre Türkiye'de 75 yaş ve üzerindeki insanların neredeyse YARISI (%44,7) yardımsız yürüyemez hale gelir. Buna Demans ve Alzheimer gibi bellek kayıpları da eklenince 'Geriatrik Engellilik' ortaya çıkar. Yaşlanan anne-baba ile engelli evladın birbirine bakmaya çalıştığı 'çift taraflı yaşlılık' en zorlu sosyal hizmet vakalarındandır.",
    bulletPoints: [
      "Demografik Dönüşüm: Türkiye hızla yaşlanan bir ülkedir; ortalama yaşam süresi uzadıkça kronik hastalıklar ve yaşlılığa bağlı yeti kayıpları artmaktadır.",
      "TÜİK Sağlık Araştırması Verisi: 75 yaş ve üzerindeki bireylerin %44,7'si yardım veya yardımcı araç olmadan yürüyememektedir.",
      "Demans ve Alzheimer Hastalığı: Bellek, yön bulma ve günlük yaşam becerilerinde ilerleyici kayıp yaratan bilişsel engelliliktir; hasta kadar bakım veren aileyi de yoğun bir tükenmişliğe sürükler.",
      "İki Kuşaklı Engellilik Krizi: 75 yaşındaki bir annenin 50 yaşındaki zihinsel engelli evladına bakamaması durumudur; acilen gündüzlü bakım merkezleri ve palyatif sosyal hizmet müdahalesi gerekir."
    ],
    practicalTip: "Slayttaki sayı: 75 yaş ve üstünde yardımsız yürüyememe oranı = %44,7! Yaşlılık ile engelliliğin birleştiği alana 'Geriatrik Sosyal Hizmet' denir.",
    examClue: "Yaşlı bireyler yeti kaybı yaşadıklarında kendilerini 'engelli' olarak tanımlamaktan çekinebilirler (damgalanma korkusu); bu nedenle haklara erişim için özel bilgilendirme gerekir.",
    keepInMind: "75+ Yaş = %44,7 Yürüyememe Oranı | Demans & Alzheimer = Bilişsel Geriatrik Engel | Çözüm = Gündüzlü Yaşlı Bakım Merkezleri.",
    aiPromptSuggestion: "Yaşlılık ve engellilik kesişimini, 75+ yaş verilerini ve Alzheimer hastası olan ailelerde sosyal hizmet desteğini açıklar mısın?",
    visualSchema: {
      title: "Görsel Veri · Yaşlılık ve Engellilik Kesişimi",
      items: [
        { icon: "👵", label: "75+ Yaş Verisi", highlight: "%44,7 Yürüme Kaybı", detail: "İleri yaş grubunda nüfusun neredeyse yarısı hareket desteğine muhtaçtır", color: "blue" },
        { icon: "🧠", label: "Demans & Alzheimer", highlight: "Bilişsel Kayıp", detail: "Yön kaybı, unutkanlık ve bakım vereni tüketen 7/24 gözetim ihtiyacı", color: "purple" },
        { icon: "🤝", label: "Gündüzlü Bakım", highlight: "Aktif Yaşlanma", detail: "Huzurevine yatırmak yerine mahallede gündüzlü sosyal kulüpler ve evde destek", color: "emerald" }
      ]
    }
  },
  {
    id: "u4-t18",
    unitId: "unit-4",
    title: "Cinsellik, Üreme Hakları ve Mahremiyet Eğitimi",
    subtitle: "Aseksüelleştirme miti, beden dokunulmazlığı ve cinsel sağlık hakkı",
    eli5: "Toplumda engelliler hakkında çok büyük iki yanlış önyargı vardır: Ya 'Onlar melek, cinsellikleri hiç yoktur (aseksüeldir)' sanılır, ya da 'Onlar dürtülerini kontrol edemez' diye korkulur! Oysa engelli bireyler de herkes gibi cinsel ve üreme sağlığı haklarına sahiptir. Sosyal hizmet uzmanı ailelere 'Beden Dokunulmazlığı / Mahremiyet Eğitimi' vererek istismarı önler ve bireyin yetişkin haklarını savunur.",
    bulletPoints: [
      "Aseksüelleştirme Miti (Desexualization): Engelli bireylerin romantik ve cinsel duyguları, beden arzuları ve üreme hakları olmayan 'sonsuz çocuklar' gibi görülmesidir.",
      "Aşırı Cinselleştirme ve Tehlike Algısı: Özellikle zihinsel engelli erkeklerin haksız yere 'dürtüsel tehdit' olarak etiketlenmesi ve toplumdan tecrit edilmesidir.",
      "CRPD Madde 23 (Ev ve Aile Hayatına Saygı) & Madde 25: Engellilerin evlenme, aile kurma, çocuk sahibi olma ve cinsel sağlık/üreme sağlığı eğitimine eşit erişim hakkını güvenceye alır.",
      "Mahremiyet ve Beden Dokunulmazlığı Eğitimi: Zihinsel ve otizmli bireylere 'İyi dokunuş - Kötü dokunuş', 'Özel bölgeler', 'Hayır diyebilme' ve kapıyı çalma gibi mahremiyet kurallarının öğretilerek istismardan korunmasıdır."
    ],
    practicalTip: "Soruda 'Engelli bireylerin cinsiyetsiz ve aseksüel kabul edilerek üreme ve aile kurma haklarının yok sayılması' hangi CRPD maddesiyle çelişir derse: Madde 23!",
    examClue: "Zihinsel engelli gençlerin istismara uğramasının en büyük nedeni cinsellik konusunda bilgisiz bırakılmaları ve 'itaatkâr olmaya' şartlandırılmalarıdır.",
    keepInMind: "Engelli Birey Çocuk Değildir! | CRPD Madde 23 = Evlilik ve Aile Kurma Hakkı | Mahremiyet Eğitimi = İstismara Karşı En Güçlü Kalkan.",
    aiPromptSuggestion: "Engelli bireylerin cinsel hakları, mahremiyet eğitimi ve toplumdaki yanlış tabuları sosyal hizmet perspektifinden anlatır mısın?",
    visualSchema: {
      title: "Görsel Tablo · Engellilik ve Cinsel Haklar Gerçeği",
      items: [
        { icon: "❌", label: "Yanlış Toplumsal Tabu", highlight: "Cinsiyetsizleştirme", detail: "Engellileri 'çocuk/melek' sayıp duygularını ve üreme haklarını yok saymak", color: "rose" },
        { icon: "⚖️", label: "CRPD Madde 23 & 25", highlight: "Evlilik & Üreme Sağlığı", detail: "Aile kurma, çocuk sahibi olma ve aydınlatılmış cinsel sağlık eğitimi hakkı", color: "blue" },
        { icon: "🛡️", label: "Mahremiyet Eğitimi", highlight: "Beden Dokunulmazlığı", detail: "Özel bölgeler, 'Hayır' diyebilme becerisi ve istismara karşı korunma kalkanı", color: "emerald" }
      ]
    }
  },
  {
    id: "u4-t19",
    unitId: "unit-4",
    title: "Erişilebilirlik İzleme ve Denetleme Komisyonları (Valilikler) ve Standartlar",
    subtitle: "5378 sayılı Kanun denetimleri, 'Erişilebilirlik Belgesi' ve TSE standartları",
    eli5: "Bir bina veya otobüs kafaya göre 'Ben rampa yaptım oldu' diyemez! Türkiye'de 81 il valiliğinde 'Erişilebilirlik İzleme ve Denetleme Komisyonları' vardır. Bu komisyonda mühendisler, mimarlar ve engelli dernekleri temsilcileri kamu binalarını, kaldırımları ve otobüsleri TSE standartlarına (rampa eğimi %5-8, kapı genişliği en az 90 cm vb.) göre metreyle denetler, uygun olanlara resmi bayrak ve belge verir, uymayanlara ceza keser.",
    bulletPoints: [
      "Hukuki Dayanak: 5378 sayılı Engelliler Hakkında Kanun ve Erişilebilirlik İzleme ve Denetleme Yönetmeliği.",
      "Komisyonun Yapısı: Aile ve Sosyal Hizmetler İl Müdürlüğü koordinasyonunda, Valilik bünyesinde; Çevre-Şehircilik, İçişleri, Ulaştırma temsilcileri ile ENGELLİ KONFEDERASYONLARI temsilcilerinden oluşur.",
      "Denetim Alanları: 1) Kamuya açık tüm binalar (hastane, okul, adliye, AVM), 2) Açık alanlar (kaldırımlar, yaya geçitleri, parklar), 3) Şehir içi ve şehirlerarası toplu taşıma araçları.",
      "TSE Standartları Örnekleri: Rampa eğimi azami %5-8 olmalı, rampa genişliği en az 100 cm olmalı, kapı temiz geçiş genişliği en az 90 cm olmalı, hissedilebilir yüzey sarı şeritleri standartlara uygun olmalıdır.",
      "Erişilebilirlik Belgesi ve Bayrağı: Denetimden tam not alan kurumlara 'Erişilebilirlik Belgesi' ve logosu asılır; uymayan kurumlara idari para cezası uygulanır."
    ],
    practicalTip: "Soruda 'Valilikler bünyesinde kamu binalarını, kaldırımları ve otobüsleri denetleyen resmi kurulun adı nedir?' diye sorulursa: Erişilebilirlik İzleme ve Denetleme Komisyonu!",
    examClue: "Komisyon kararlarında engelli örgütleri temsilcilerinin bulunması 'Bizim hakkımızda biz olmadan asla' ilkesinin idari denetimdeki örneğidir.",
    keepInMind: "Valilik Erişilebilirlik Komisyonu = 5378 Denetimi + Bina/Kaldırım/Toplu Taşıma + TSE Standartları + İdari Para Cezası.",
    aiPromptSuggestion: "Erişilebilirlik İzleme ve Denetleme Komisyonlarının yapısını, görevlerini ve rampa/kapı TSE standartlarını anlatır mısın?",
    visualSchema: {
      title: "Görsel Denetim Şeması · Erişilebilirlik Komisyonu (Valilik)",
      items: [
        { icon: "🏛️", label: "Valilik Komisyonu", highlight: "5378 Sayılı Kanun", detail: "Mimar, mühendis ve engelli konfederasyon temsilcilerinden oluşan resmi kurul", color: "blue" },
        { icon: "📏", label: "TSE Standartları", highlight: "Ölçülebilir Kriterler", detail: "Rampa eğimi %5-8, kapı genişliği 90 cm, sesli uyarı ve hissedilebilir sarı çizgi", color: "amber" },
        { icon: "🚩", label: "Erişilebilirlik Belgesi", highlight: "Tescil & Ceza", detail: "Standartları karşılayan kuruma resmi bayrak/belge; uymayana idari para cezası", color: "emerald" }
      ]
    }
  },
  {
    id: "u4-t20",
    unitId: "unit-4",
    title: "Mesleki Rehabilitasyon, İş Koçluğu ve Destekli İstihdam (Supported Employment)",
    subtitle: "Korumalı atölyelerden açık piyasada iş koçuyla istihdama geçiş modeli",
    eli5: "Zihinsel veya otizmli bir gencin işe girmesi için sadece 'Sana şu fabrikada iş bulduk, git çalış' demek yetmez; ilk gün bocalar ve işi bırakır. 'Destekli İstihdam (Supported Employment)' modelinde gencin yanına bir 'İş Koçu (Job Coach)' verilir. İş koçu gençle birlikte işyerine gider, fotokopi çekmeyi veya masayı temizlemeyi birlikte yapar, çalışma arkadaşlarına otizmi anlatır ve genç alıştıkça desteğini yavaşça geri çeker!",
    bulletPoints: [
      "Mesleki Rehabilitasyon: Engelli bireyin ilgi, yetenek ve işlevsellik düzeyine uygun mesleki eğitim alarak istihdama hazırlanması sürecidir.",
      "Destekli İstihdam Modeli (Supported Employment - 'Yerleştir ve Eğit'): Geleneksel 'Önce eğit, hazır olunca işe yerleştir' modelinin yerine; 'Önce açık iş piyasasında gerçek bir işe yerleştir, işyerinde iş başında eğit' felsefesidir.",
      "İş Koçu (Job Coach): Engelli çalışana iş ortamında görev analizleri yapan, iş becerilerini birebir öğreten, işveren ve çalışma arkadaşlarıyla köprü kuran uzmandır.",
      "Solma / Geri Çekilme (Fading): Çalışan işi bağımsız yapmaya başladıkça iş koçunun desteğini aşamalı olarak azaltması, ancak kriz anlarında yeniden devreye girmesidir.",
      "Korumalı İşyerleri: Açık piyasada doğrudan çalışamayacak zihinsel/ruhsal engelli bireyler için devlet teşvikiyle kurulan özel donanımlı üretim atölyeleridir."
    ],
    practicalTip: "Soruda 'Engelli bireyi önce açık piyasada gerçek bir işe yerleştirip ardından işyerinde bir iş koçu (job coach) eşliğinde iş başında eğitme modeli' sorulursa cevap: DESTEKLİ İSTİHDAM (Supported Employment)!",
    examClue: "Destekli istihdam, tecrit edici korumalı atölyelerin yerini alan en çağdaş sosyal içerme modelidir.",
    keepInMind: "Destekli İstihdam = Yerleştir ve Eğit | İş Koçu (Job Coach) = Yanında Birebir Rehber | Fading = Desteğin Aşamalı Azaltılması.",
    aiPromptSuggestion: "Destekli İstihdam (Supported Employment) ve İş Koçluğu modelinin adımlarını bir zihinsel engelli genç örneğiyle anlatır mısın?",
    visualSchema: {
      title: "Görsel Süreç · Destekli İstihdam (Supported Employment) Adımları",
      items: [
        { icon: "🎯", label: "1. Eşleştirme & Yerleşim", highlight: "Açık İş Piyasası", detail: "Korumalı tecrit yerine herkesle birlikte çalışılacak gerçek bir işe yerleştirme", color: "blue" },
        { icon: "🤝", label: "2. İş Koçu Eşliği", highlight: "İş Başında Eğitim", detail: "İş koçu çalışanla birlikte mesaiye girer, görevleri basitleştirerek öğretir", color: "emerald" },
        { icon: "🕊️", label: "3. Solma (Fading)", highlight: "Bağımsız Çalışma", detail: "Çalışan öğrendikçe koç geri çekilir, uzaktan izler; çalışan özgüven kazanır", color: "purple" }
      ]
    }
  }
];

export const UNIT_3_EXTRA_TOPICS: TopicCard[] = [
  {
    id: "u3-t16",
    unitId: "unit-3",
    title: "CRPD Madde 1: Amaç ve Sözleşmenin 'Engellilik' Tanımı",
    subtitle: "Tıbbi noksanlık ile çevresel bariyerlerin etkileşimi olarak engel",
    eli5: "BM CRPD Sözleşmesinin 1. Maddesi engelliliği şöyle tanımlar: 'Engelli bireyler; çeşitli engellerle (bariyerlerle) karşılaştıklarında, diğerleriyle eşit şekilde topluma tam ve etkili katılımlarını engelleyen uzun süreli fiziksel, zihinsel, ruhsal ve duyusal bozuklukları olan kişilerdir.' Yani sözleşme engeli bedende değil, beden ile çevredeki engellerin ÇARPIŞMASINDA tanımlar!",
    bulletPoints: [
      "CRPD Madde 1 (Amaç): Engellilerin tüm insan hakları ve temel özgürlüklerden tam ve eşit şekilde yararlanmasını teşvik etmek, korumak ve sağlamak; doğuştan sahip oldukları onura saygıyı güçlendirmektir.",
      "Sözleşmenin Dinamik Engellilik Tanımı: Engellilik sabit/kapalı bir liste değildir; gelişen ve dönüşen bir kavramdır (Evolving concept).",
      "Tanımın 2 Temel Bileşeni: 1) Uzun süreli fiziksel, zihinsel, ruhsal veya duyusal hasar/noksanlık, 2) Çeşitli tutumsal ve çevresel engellerle (bariyerlerle) etkileşim.",
      "Sonuç Şartı: Bu etkileşimin 'topluma tam, etkili ve eşit katılımı engellemesi' durumunda hukuki anlamda engellilik ortaya çıkar."
    ],
    practicalTip: "Soruda 'CRPD Madde 1'e göre engelliliğin tanımında hangi iki unsurun etkileşimi esastır?' derse: 'Uzun süreli noksanlıklar ile çevresel/tutumsal engellerin etkileşimi'!",
    examClue: "Sözleşme geçici kırıkları veya kısa süreli hastalıkları değil, 'uzun süreli (long-term)' noksanlıkları kapsar.",
    keepInMind: "CRPD Madde 1 = Onura Saygı & Eşit Hak | Engellilik Tanımı = Uzun Süreli Noksanlık + Çevresel Bariyerler Etkileşimi.",
    aiPromptSuggestion: "BM CRPD Madde 1'deki engellilik tanımını ve bunun tıbbi model tanımından farkını açıklar mısın?",
    visualSchema: {
      title: "Görsel Formül · CRPD Madde 1 Engellilik Tanımı",
      items: [
        { icon: "🫀", label: "Uzun Süreli Noksanlık", highlight: "Fiziksel, Bilişsel, Duyusal", detail: "Bedensel, zihinsel veya duyusal işlev farklılığı", color: "blue" },
        { icon: "🚧", label: "+ Çevresel Bariyerler", highlight: "Tutum ve Mimari Engel", detail: "Asansörsüz bina, önyargı, ayrımcı mevzuat ve dışlama", color: "rose" },
        { icon: "⚖️", label: "= CRPD Engellilik", highlight: "Katılımın Engellenmesi", detail: "Haklardan eşit yararlanamama ve toplumsal dışlanma hali", color: "emerald" }
      ]
    }
  },
  {
    id: "u3-t17",
    unitId: "unit-3",
    title: "CRPD Madde 4: Taraf Devletlerin Genel Yükümlülükleri ve Mevzuat Taraması",
    subtitle: "Ayrımcı kanunları yürürlükten kaldırma, araştırma ve engellilere danışma",
    eli5: "Madde 4 devletlere ödev listesi verir: 1) Ayrımcılık yapan tüm eski kanunları çöpe atacaksın! 2) Yeni binaları ve teknolojileri en baştan evrensel tasarımla yapacaksın. 3) Engellilerle ilgili her kararda engelli örgütlerine (DPO) bizzat danışacaksın!",
    bulletPoints: [
      "Madde 4 (Genel Yükümlülükler): Devletlerin sözleşmede tanınan hakları hayata geçirmek için üstlendiği sistemik ödevlerdir.",
      "Mevzuat Uyumu: Ayrımcılık içeren mevcut yasa, yönetmelik, gelenek ve uygulamaları değiştirmek veya yürürlükten kaldırmak.",
      "Evrensel Tasarım ve Ar-Ge: Yeni teknolojiler ve ürünlerin en baştan engelsiz tasarlanması için araştırma-geliştirmeyi teşvik etmek ve uygun maliyetli kılmak.",
      "Madde 4/3 - Katılım ve Danışma Yükümlülüğü: Engellileri ilgilendiren her türlü politika ve yasa yapım sürecinde, engelli çocukları da temsil eden ENGELLİ ÖRGÜTLERİYLE (DPO) YAKIN İSTİŞAREDE BULUNMAK ve onları sürece etkin şekilde dahil etmek zorunludur."
    ],
    practicalTip: "Soruda 'CRPD Madde 4/3'e göre devletlerin politika üretirken kimlerle yakın istişare içinde olması zorunludur?' derse cevap: Engellileri temsil eden örgütlerle (DPO)!",
    examClue: "Ekonomik, sosyal ve kültürel haklarda 'kademeli gerçekleşme (progressive realization)' ilkesi geçerli olsa da, derhal uygulanması gereken asgari çekirdek yükümlülükler vardır.",
    keepInMind: "CRPD Madde 4 = Eski Ayrımcı Yasaları Kaldırma + Evrensel Tasarım Ar-Ge + Engelli Örgütleriyle Yakın İstişare (Md. 4/3).",
    aiPromptSuggestion: "CRPD Madde 4'ün taraf devletlere yüklediği genel yükümlülükleri ve engelli örgütleriyle istişare şartını açıklar mısın?",
    visualSchema: {
      title: "Görsel Taahhüt · CRPD Madde 4 Devlet Ödevleri",
      items: [
        { icon: "📜", label: "Mevzuat Ayıklama", highlight: "Ayrımcı Yasaları Kaldır", detail: "Mevzuattaki tüm vesayetçi ve dışlayıcı hükümleri temizlemek", color: "rose" },
        { icon: "🌐", label: "Evrensel Tasarım", highlight: "Ar-Ge ve Teknoloji", detail: "Yeni ürün ve mekanları herkes için baştan erişilebilir üretmek", color: "blue" },
        { icon: "🤝", label: "İstişare Şartı (Md. 4/3)", highlight: "Engelli Örgütlerine Danış", detail: "Hiçbir yasa ve kararı engelli örgütlerinin onayı olmadan almamak", color: "emerald" }
      ]
    }
  },
  {
    id: "u3-t18",
    unitId: "unit-3",
    title: "CRPD Madde 20 (Kişisel Hareketlilik) ve Madde 26 (Habilitasyon / Rehabilitasyon)",
    subtitle: "Yardımcı araçlara erişim ile doğuştan/sonradan kazanılan beceriler",
    eli5: "Madde 20 'Kişisel Hareketlilik' der ki: Akülü sandalye, beyaz baston veya protez lüks değildir; kişinin istediği zamanda ve ödenebilir fiyatla bu araçlara ulaşması devletin görevidir. Madde 26'da ise iki kritik kelime vardır: 'Habilitasyon', doğuştan engelli bir çocuğun daha önce hiç yapmadığı becerileri (kaşık tutma, konuşma) ilk kez öğrenmesidir. 'Rehabilitasyon' ise kaza geçirip bu beceriyi kaybeden birinin onu yeniden kazanmasıdır!",
    bulletPoints: [
      "Madde 20 (Kişisel Hareketlilik): Engelli bireylerin kendi istedikleri tarzda, zamanda ve uygun maliyetle bağımsız hareketliliğini sağlama hakkıdır (kaliteli tekerlekli sandalye, protez, rehber köpek, hareketlilik eğitimi).",
      "Madde 26 (Habilitasyon ve Rehabilitasyon): Bireyin azami bağımsızlığını, bedensel, zihinsel, sosyal ve mesleki becerilerini kazanmasını veya yeniden elde etmesini sağlayan bütüncül hizmetlerdir.",
      "Habilitasyon vs Rehabilitasyon Ayrımı (Sınav Sorusu!): Habilitasyon = Doğuştan engeli olan çocuğun hiç sahip olmadığı işlev ve becerileri İLK KEZ edinmesi. Rehabilitasyon = Sonradan hastalık/kaza sonucu kaybedilen becerilerin YENİDEN kazandırılmasıdır.",
      "Erken Müdahale İlkesi: Habilitasyon ve rehabilitasyon hizmetleri mümkün olan en erken evrede başlamalı ve bireyin evine/toplumuna en yakın yerde sunulmalıdır."
    ],
    practicalTip: "Habilitasyon ve Rehabilitasyon farkını asla unutma: İLK KEZ beceri öğrenme = HABİLİTASYON (Doğuştan). KAYBEDİLEN beceriyi geri kazanma = REHABİLİTASYON (Sonradan)!",
    examClue: "Rehber köpek (Guide dog) kullanan görme engelli bir bireyin kamu binasına veya restorana köpeğiyle alınmaması Madde 9 ve Madde 20 ihlalidir.",
    keepInMind: "Md.20 Kişisel Hareketlilik (Bastona/Sandalyeye Erişim) | Habilitasyon = İlk Kez Beceriyi Kazanma | Rehabilitasyon = Yeniden Kazanma.",
    aiPromptSuggestion: "Habilitasyon ile Rehabilitasyon arasındaki farkı ve CRPD Madde 20 Kişisel Hareketlilik hakkını anlatır mısın?",
    visualSchema: {
      title: "Görsel Ayrım · Habilitasyon vs Rehabilitasyon (Madde 26)",
      items: [
        { icon: "👶", label: "Habilitasyon (İlk Kez)", highlight: "Doğuştan Engel", detail: "SP'li veya otizmli çocuğun daha önce bilmediği becerileri ilk kez öğrenmesi", color: "purple" },
        { icon: "🔄", label: "Rehabilitasyon (Yeniden)", highlight: "Sonradan Edinilmiş", detail: "Kaza sonrası felç geçiren gencin kaybedilen yürüme/iş becerisini yeniden kazanması", color: "blue" },
        { icon: "🦽", label: "Kişisel Hareketlilik (Md.20)", highlight: "Cihaz & Rehber Köpek", detail: "Uygun maliyetli akülü sandalye, beyaz baston ve hareket özgürlüğü", color: "emerald" }
      ]
    }
  },
  {
    id: "u3-t19",
    unitId: "unit-3",
    title: "CRPD Madde 31 (İstatistik ve Veri Toplama) ve Madde 32 (Uluslararası İşbirliği)",
    subtitle: "Görünmeyen nüfus politika yapamaz: Gizlilik, insan hakları ve kalkınma",
    eli5: "Eğer bir ülkede kaç tane engelli olduğunu, nerede yaşadıklarını, okula gidip gitmediklerini tam sayamazsanız; onlar için bütçe ayıramazsınız, rampa yapamazsınız! Madde 31 devlete 'Engellilik verilerini insan hakları ve mahremiyet standartlarına uygun olarak topla ve kamuoyuyla paylaş' der. Madde 32 ise zengin ülkelerin yoksul ülkelere engellilik projelerinde teknoloji ve hibe desteği vermesini düzenler.",
    bulletPoints: [
      "Madde 31 (İstatistik ve Veri Toplama): Taraf devletler, sözleşmedeki politikaları planlamak ve yürütmek için gerekli istatistiksel ve araştırma verilerini toplamakla yükümlüdür.",
      "Veri Toplamada 3 Temel İlke: 1) Mahremiyet ve gizlilik haklarına tam saygı, 2) İnsan hakları ve etik standartlara uygunluk, 3) Toplanan istatistiklerin kamuya açık ve erişilebilir formatlarda yayınlanması.",
      "Washington Grubu Soru Seti: Dünya genelinde engellilik verilerinin karşılaştırılabilir toplanması için geliştirilen işlevsel soru setidir (Türkiye 2011 araştırmasında kullanılmıştır).",
      "Madde 32 (Uluslararası İşbirliği): Uluslararası kalkınma programlarının (BM Sürdürülebilir Kalkınma Amaçları) engellileri kapsaması, teknik ve finansal kapasite paylaşımıdır."
    ],
    practicalTip: "Soruda 'CRPD Madde 31'in konusu nedir?' derse: İstatistik ve Veri Toplama! 'Madde 32' derse: Uluslararası İşbirliği!",
    examClue: "Veri toplanırken bireylerin kişisel sağlık verilerinin korunması (GDPR/KVKK) ve ayrıştırılmış veri (cinsiyet, yaş, engel türü kırılımında) sunulması zorunludur.",
    keepInMind: "Madde 31 = İstatistik ve Veri Toplama (Washington Grubu) | Madde 32 = Uluslararası İşbirliği ve Kalkınma Desteği.",
    aiPromptSuggestion: "CRPD Madde 31 Veri Toplama hakkının neden sosyal politika için hayati olduğunu açıklar mısın?",
    visualSchema: {
      title: "Görsel Şema · CRPD Madde 31 ve Madde 32",
      items: [
        { icon: "📊", label: "Madde 31: Veri Toplama", highlight: "Sayılmayan Yok Sayılır!", detail: "Okullaşma, istihdam ve yoksulluk verilerinin cinsiyet ve yaş kırılımında toplanması", color: "blue" },
        { icon: "🔒", label: "Mahremiyet Kalkanı", highlight: "Kişisel Veri Koruma", detail: "İstatistik toplanırken bireyin tıbbi ve kişisel mahremiyetine tam saygı", color: "amber" },
        { icon: "🌍", label: "Madde 32: İşbirliği", highlight: "Uluslararası Destek", detail: "Ülkeler arası teknoloji, kaynak ve engelsiz kalkınma fonu transferi", color: "emerald" }
      ]
    }
  },
  {
    id: "u3-t20",
    unitId: "unit-3",
    title: "Hak Arama Yolları: TİHEK, KDK (Ombudsman) ve İdare Mahkemeleri",
    subtitle: "Türkiye'de ayrımcılığa uğrayan bir engelli nereye, nasıl başvurabilir?",
    eli5: "Bir engelli vatandaş okuldan veya işten kovulursa ya da otobüse alınmazsa hakkını nasıl arar? 1) TİHEK (Türkiye İnsan Hakları ve Eşitlik Kurumu): Ayrımcılık yapan şirkete veya kamuya doğrudan para cezası keser. 2) KDK (Kamu Denetçiliği Kurumu / Ombudsman): Belediyenin veya bakanlığın haksız uygulamalarını inceler ve düzeltilmesini tavsiye eder. 3) İdare Mahkemesi ve Anayasa Mahkemesi (AYM): İptal ve tazminat davası açılır. Hepsi biterse AİHM veya BM Komitesi'ne gidilir!",
    bulletPoints: [
      "1. TİHEK (Türkiye İnsan Hakları ve Eşitlik Kurumu - 6701 Sayılı Kanun): Engellilik temelli doğrudan/dolaylı ayrımcılık ve makul düzenleme reddi başvurularını inceler; ayrımcılık tespit ederse ilgililere İDARİ PARA CEZASI keser.",
      "2. KDK (Kamu Denetçiliği Kurumu / Ombudsman): Kamu kurumlarının engellilere yönelik işlem ve eylemlerindeki adaletsizlikleri, kötü yönetimi inceler; dostane çözüm arar ve kurumlara 'Tavsiye Kararı' gönderir.",
      "3. İdari Yargı (İdare ve Vergi Mahkemeleri): İptal davası ve tam yargı (tazminat) davaları açılır.",
      "4. Anayasa Mahkemesi (AYM) Bireysel Başvuru: Temel hakların ihlalinde derece mahkemeleri tüketildikten sonra gidilen en üst ulusal yargı yoludur.",
      "5. Uluslararası Başvuru: İç hukuk yolları tükendiğinde AİHM (Avrupa İnsan Hakları Mahkemesi) veya BM CRPD İhtiyari Protokolü kapsamında BM Engelli Hakları Komitesi."
    ],
    practicalTip: "Ayrımcılık şikayetlerinde: 'Ayrımcılık yasağı incelemesi yapıp idari para cezası kesebilen kurum' = TİHEK (6701 sayılı Kanun)! 'Kamu kurumlarına karşı vatandaşın avukatlığını yapan ve tavsiye kararı veren' = KAMU DENETÇİLİĞİ KURUMU (Ombudsman)!",
    examClue: "TİHEK'e başvuru harçtan muaftır ve ayrımcılık davalarında 'ispat yükü' yer değiştirir (mağdur ayrımcılık karinesi gösterirse, ayrımcılık yapmadığını ispatlama yükü karşı tarafa geçer).",
    keepInMind: "Ayrımcılıkta Para Cezası = TİHEK (6701) | Kamu Şikayeti = KDK (Ombudsman) | Ulusal Yargı = İdare & AYM | Uluslararası = BM Komitesi & AİHM.",
    aiPromptSuggestion: "Türkiye'de engelliliğe dayalı ayrımcılığa uğrayan bir bireyin başvurabileceği resmi hak arama yollarını (TİHEK, KDK, Yargı) özetler misin?",
    visualSchema: {
      title: "Görsel Başvuru Yolu · Hak Arama ve Ayrımcılıkla Mücadele",
      items: [
        { icon: "⚖️", label: "TİHEK (6701)", highlight: "İdari Para Cezası", detail: "Ayrımcılık ve makul düzenleme reddi başvurularında yaptırım yetkili kurum", color: "blue" },
        { icon: "🏛️", label: "KDK (Ombudsman)", highlight: "Kamu Denetçiliği", detail: "Belediye ve bakanlıkların engellilere yönelik haksız uygulamalarına tavsiye kararı", color: "amber" },
        { icon: "🌐", label: "AYM & BM Komitesi", highlight: "Bireysel Başvuru", detail: "İç hukuk yolları ve Anayasa Mahkemesi sonrası uluslararası denetim", color: "emerald" }
      ]
    }
  }
];

