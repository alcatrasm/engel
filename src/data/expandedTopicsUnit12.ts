import { TopicCard } from "./courseData";

export const UNIT_1_TOPICS: TopicCard[] = [
  {
    id: "u1-t1",
    unitId: "unit-1",
    title: "Engelli ve Engellilik Tanımları (DMK, 2828, Hizmet Yasası)",
    subtitle: "Resmi kanunlara göre kime engelli denir?",
    eli5: "Engelliliğin tek bir tanımı yoktur çünkü sadece tıbbi bir hastalık değildir; kişinin özelliği ile toplumun engellerinin çarpışmasıdır. Devlet Memurları Kanunu (DMK) 'En az %40 sağlık kurulu raporu olan kişi' derken, Sosyal Hizmetler Kanunu (2828) 'Doğuştan veya sonradan yeteneklerini kaybedip bakım, rehabilitasyon ve danışmanlığa ihtiyacı olan kişi' der.",
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
    title: "Engellilik Sebepleri ve Fetal Alkol Sendromu (FAS)",
    subtitle: "Doğuştan (doğum öncesi), doğum sırası ve doğum sonrası nedenler",
    eli5: "Bir insan 3 farklı dönemde engelli olabilir: Anne karnındayken (doğum öncesi), tam doğarken (doğum sırası) veya doğup büyürken (doğum sonrası). Özellikle hamilelikte annenin alkol kullanması bebekte 'Fetal Alkol Sendromu' yapar; bu çocuklarda hem organ sorunları hem de düşük IQ ve dikkat sorunları görülür.",
    bulletPoints: [
      "Doğuştan (Doğum Öncesi) Sebepler: Genetik faktörler, akraba evliliği, gebelikte travma, annenin hastalıkları (kızamıkçık, suçiçeği), ilaç kullanımı, röntgene/ışına maruz kalmak, alkol/madde bağımlılığı, kötü beslenme, kan uyuşmazlığı.",
      "Fetal Alkol Sendromu (FAS): Kalp, böbrek ve kemik sorunları; öğrenme güçlüğü ve düşük IQ; hafıza, koordinasyon ve dikkat sorunları; hiperaktivite; uyku ve bebek emzirme sorunları.",
      "Doğum Sırası Sebepler: Kötü ve yetersiz koşullarda doğum, doğum travmaları, yanlış vakum/forseps uygulamaları, bebeğin oksijensiz kalması (asfiksi), kordon dolanması, erken/geç doğum.",
      "Doğum Sonrası Sebepler: İş, ev ve trafik kazaları, savaşlar, depremler, ateşli hastalıklar (menenjit, uzamış sarılık, havale)."
    ],
    practicalTip: "Sorularda zaman ayrımına dikkat et: 'Röntgen, akraba evliliği, kan uyuşmazlığı' -> Doğum Öncesi. 'Oksijensiz kalma, vakum/forseps, kordon dolanması' -> Doğum Sırası. 'Menenjit, sarılık, iş kazası, deprem' -> Doğum Sonrası.",
    examClue: "Fetal Alkol Sendromu (FAS) slaytlarında 5 temel belirti (Kalp/böbrek/kemik + Düşük IQ + Hafıza/dikkat + Hiperaktivite + Uyku/emzirme) vurgulanmıştır.",
    keepInMind: "Anne hamileyken alkol alırsa = Fetal Alkol Sendromu (Hem organ hasarı hem düşük IQ hem hiperaktivite).",
    aiPromptSuggestion: "Fetal Alkol Sendromu nedir ve doğum öncesi, sırası, sonrası engellilik sebeplerini sınavda nasıl ayırt ederim?"
  },
  {
    id: "u1-t3",
    unitId: "unit-1",
    title: "Otizm Spektrum Bozukluğu (OSB) ve IDEA Tanı Kriterleri",
    subtitle: "İlk 3 yaş kuralı, 3 temel alan ve en az 6 belirti şartı",
    eli5: "Otizm bir hastalık değil, yaşamın ilk 3 yılında ortaya çıkan nöro-gelişimsel bir farklılıktır. Otizmli çocuk göz teması kurmakta zorlanır, konuşulanı papağan gibi tekrar edebilir (ekolali), oyuncak arabayı sürmek yerine ters çevirip tekerleğini döndürür ve günlük rutini değişirse çok huzursuz olur. Tanı konması için en az 6 belirti şarttır.",
    bulletPoints: [
      "Başlangıç Yaşı: Otizm genellikle yaşamın İLK 3 YILINDA ortaya çıkan gelişimsel bir bozukluktur.",
      "1. Alan - Sosyal Etkileşimde Yetersizlik: Göz teması kuramama, akranlarıyla ilgilenmeme, duyguları paylaşamama.",
      "2. Alan - İletişim Bozukluğu: Konuşmanın gecikmesi veya hiç olmaması, ekolali (duyduğu sözcüğü/reklamı aynen tekrar etme), zamirleri ters kullanma.",
      "3. Alan - Sınırlı/Tekrarlayıcı Davranış ve Oyun: Hayali/sembolik oyun oynayamama ('mış gibi' yapamama), sallanma/kanat çırpma (stereotipi) ve rutinlere aşırı bağlılık. Tanı için toplam EN AZ 6 BELİRTİ gerekir."
    ],
    practicalTip: "Soruda 'Yaşamın ilk 3 yılı', 'Ekolali', 'Hayali oyun kuramama', 'Göz teması kurmama' ve 'En az 6 belirti' geçiyorsa cevap kesinlikle Otizm'dir!",
    examClue: "Otizm başlangıç yaşı 3 yaş öncesidir; Zihinsel engellilik ise 16 yaş öncesidir. Sınavda bu iki yaş sınırını birbirinin yerine koyarak tuzak kurarlar!",
    keepInMind: "Otizm = İlk 3 Yaş + En Az 6 Belirti + Göz Teması Azlığı + Ekolali + Hayali Oyun Yok.",
    aiPromptSuggestion: "Otizm Spektrum Bozukluğundaki 3 temel alanı, ekolaliyi ve 6 belirti kuralını günlük örneklerle anlatır mısın?",
    visualSchema: {
      title: "Görsel Şifre · Otizm (OSB) Tanı Formülü",
      items: [
        { icon: "👶", label: "İlk 3 Yıl", highlight: "Erken Çocukluk", detail: "Belirtiler yaşamın ilk 36 ayında başlar", color: "purple" },
        { icon: "🗣️", label: "3 Temel Alan", highlight: "Sosyal + İletişim + Rutin", detail: "Göz teması azlığı, ekolali, hayali oyun yokluğu", color: "blue" },
        { icon: "6️⃣", label: "En Az 6 Belirti", highlight: "IDEA Tanı Şartı", detail: "Kriterlerden en az 6 tanesinin görülmesi gerekir", color: "emerald" }
      ]
    }
  },
  {
    id: "u1-t4",
    unitId: "unit-1",
    title: "İşitme ve Görme Engeli: Odyogram, Az Gören ve Kör Ayrımı",
    subtitle: "Sınavda çıkan metre ve ayak (foot) hesaplamaları",
    eli5: "İşitme kaybı 'odyogram' cihazıyla desibel (dB) olarak ölçülür; cihazla bile konuşmayı duyamayana 'sağır', cihazla kısmen duyabilene 'ağır işiten' denir. Görme engelinde ise bütün gözlük ve ameliyatlara rağmen normal insanın 200 ayaktan gördüğünü 70-20 ayaktan görene 'Az Gören', 6 metreden görüleni 60 cm'den bile göremeyene 'Kör' denir.",
    bulletPoints: [
      "İşitme Engeli ve Odyogram: Kulağın ses duyma işlevini kısmen/tamamen kaybetmesidir; Odyogram testi ile ölçülür.",
      "Sağırlık vs Ağır İşitme (IDEA): İşitme cihazı kullanılsa bile işitsel yolla konuşmayı işleme/anlama gerçekleşmiyorsa 'Sağırlık'; cihazla birlikte konuşmayı algılayabiliyorsa 'Ağır İşitme'dir.",
      "Az Gören Tanımı: Normal bir kişinin 200 ayaktan (yaklaşık 60 m) görebildiği şeyi, tüm düzeltmelere (gözlük/cerrahi) rağmen 70 ile 20 ayak arasından görebilen kişidir.",
      "Yasal Kör Tanımı: Normal kişinin 6 metreden gördüğünü 60 santimetreden veya daha yakından görebilen (ya da görme alanı açısı 20 derecenin altında olan) kişidir."
    ],
    practicalTip: "Metre görürsen KÖR (6 metre -> 60 cm), Ayak (foot) görürsen AZ GÖREN (200 ayak -> 70-20 ayak)! İkisini bu şifreyle saniyesinde ayırt edebilirsin.",
    examClue: "Görme engeli değerlendirmesi her zaman 'tüm tıbbi ve optik düzeltmeler (gözlük, lens, ameliyat) yapıldıktan sonra' kalan görme keskinliğine göre yapılır.",
    keepInMind: "İşitme = Odyogram | Az Gören = 200 Ayak -> 70-20 Ayak | Yasal Kör = 6 Metre -> 60 cm (veya <20° Açı).",
    aiPromptSuggestion: "Görme engelindeki 'Az Gören' ve 'Kör' sayılarını ve işitme engelinde sağırlık/ağır işitme farkını anlatır mısın?",
    visualSchema: {
      title: "Görsel Sayı Şifreleri · İşitme ve Görme Ölçümleri",
      items: [
        { icon: "🎧", label: "İşitme Engeli", highlight: "Odyogram Testi", detail: "Cihazla duyamayan = Sağır | Cihazla duyan = Ağır İşiten", color: "amber" },
        { icon: "👓", label: "Az Gören", highlight: "200 → 70-20 Ayak", detail: "Tedavi sonrası 200 ayağı 70 ila 20 ayaktan görebilen", color: "blue" },
        { icon: "🦯", label: "Yasal Kör", highlight: "6 Metre → 60 cm", detail: "6 metreyi 60 cm'den gören veya görme açısı <20° olan", color: "rose" }
      ]
    }
  },
  {
    id: "u1-t5",
    unitId: "unit-1",
    title: "Zihinsel Engellilik (16 Yaş), Çoklu Yetersizlik ve Öğrenme Güçlüğü",
    subtitle: "Zeka geriliği ile Özgül Öğrenme Güçlüğü (Disleksi) arasındaki kritik fark",
    eli5: "Zihinsel engellilik 16 yaşından önce başlar; çocuk hem zeka testinde (IQ < 70) hem de kendi başına yemek yeme, giyinme, para üstü alma gibi uyum becerilerinde geridedir. Öğrenme güçlüğü (Disleksi) olan çocuğun ise zekası NORMAL hatta parlaktır; sadece beyni harfleri veya sayıları farklı işlediği için okuma/yazmada zorlanır!",
    bulletPoints: [
      "Zihinsel Engellilik (3 Şart): 1) 16 yaşından önce ortaya çıkması, 2) Zeka işlevinin ortalamanın belirgin altında olması, 3) Özbakım, iletişim ve toplumsal uyum becerilerinde gerilik.",
      "Çoklu Engellilik (Çoklu Yetersizlik): Ağır düzeyde zihinsel yetersizliğe EK OLARAK en az bir engelin/hastalığın daha bulunmasıdır (Örn: Zihinsel + Ortopedik). Not: Kör-sağırlık bu kategorinin dışındadır.",
      "Özgül Öğrenme Güçlüğü: Zeka normal veya normalin üstündedir! Dinleme, okuma (Disleksi), yazma (Disgrafi) veya matematikte (Diskalkuli) yaşanan nörolojik temelli güçlüktür. Okul çağında en yaygın özel gereksinim kategorisidir.",
      "Ortopedik vs Süreğen Hastalık: Ortopedik = Kas-iskelet sistemi (SP, Spina Bifida); Süreğen = Sürekli tedavi/bakım gerektiren hastalık (Diyabet, kanser, hemofili, astım, epilepsi)."
    ],
    practicalTip: "Soruda 'Zekası normal olduğu halde okuma, yazma veya matematikte zorlanma' derse cevap Zihinsel Engel DEĞİL, Öğrenme Güçlüğüdür! '16 yaşından önce + uyum becerilerinde gerilik' derse Zihinsel Engeldir.",
    examClue: "Okul çağındaki çocuklar arasında EN YAYGIN görülen özel eğitim kategorisi 'Özgül Öğrenme Güçlüğü'dür.",
    keepInMind: "Zihinsel Engel = 16 Yaş Öncesi + Düşük IQ + Uyum Geriliği | Öğrenme Güçlüğü = Zeka Normal + Okuma/Matematik Zorluğu.",
    aiPromptSuggestion: "Zihinsel engellilik ile Özgül Öğrenme Güçlüğü (Disleksi) arasındaki farkları sınavda nasıl ayırt ederim?"
  },
  {
    id: "u1-t6",
    unitId: "unit-1",
    title: "Gelişimsel Gecikme ve Duygusal / Davranışsal Bozukluklar",
    subtitle: "Erken çocukluk risk faktörleri ve IDEA'nın 5 duygusal bozukluk kriteri",
    eli5: "Gelişimsel gecikme, küçük bir çocuğun yaşıtlarının yürüdüğü, konuştuğu veya kaşık tuttuğu yaşta bunları henüz yapamamasıdır (kurşun zehirlenmesi, erken doğum veya sık kulak enfeksiyonu buna yol açabilir). Duygusal bozukluk ise zekasında veya sağlığında hiçbir sorun olmadığı halde çocuğun sürekli mutsuz olması, arkadaş edinememesi ve açıklanamayan okul korkuları yaşamasıdır.",
    bulletPoints: [
      "Gelişimsel Gecikme: Çocuğun fiziksel, bilişsel, iletişim, sosyal veya özbakım gelişim alanlarından birinde/birkaçında yaşıtlarından sürekli geride kalmasıdır.",
      "Gelişimsel Gecikme Risk Faktörleri: Düşük doğum ağırlığı/erken doğum, kurşun zehirlenmesi, kronik orta kulak enfeksiyonları, çevresel uyaran eksikliği ve ihmal.",
      "Duygusal ve Davranışsal Bozukluklar (IDEA 5 Kriteri): Uzun süreli ve belirgin derecede; 1) Zihinsel/duyusal/sağlık nedenleriyle açıklanamayan öğrenememe, 2) Akran ve öğretmenlerle tatmin edici ilişki kuramama, 3) Normal koşullarda uygunsuz davranış/duygu tepkileri, 4) Yaygın mutsuzluk ve depresif ruh hali, 5) Okul veya kişisel sorunlarla bağlantılı fiziksel belirti/korkular.",
      "Not: Şizofreni duygusal bozukluk kategorisine dahildir; ancak sadece 'sosyal uyumsuzluk' (suça sürüklenme vb.) duygusal bozukluk kriterlerini karşılamazsa tek başına dahil edilmez."
    ],
    practicalTip: "Soruda 'Kurşun zehirlenmesi ve kronik kulak enfeksiyonu hangi durumun risk faktörüdür?' derse cevap Gelişimsel Gecikme! 'Zeka sorunuyla açıklanamayan öğrenememe ve yaygın mutsuzluk' derse Duygusal Bozukluktur.",
    examClue: "Duygusal bozukluk tanısı için belirtilerin 'geçici bir yas/sınav heyecanı' değil, UZUN SÜRELİ ve eğitim performansını olumsuz etkileyecek düzeyde olması şarttır.",
    keepInMind: "Gelişimsel Gecikme = Yaşıtlarından Geride Kalma (Kurşun/Erken Doğum) | Duygusal Bozukluk = 5 Kriter (Açıklanamayan Öğrenememe + Mutsuzluk + İlişki Kuramama).",
    aiPromptSuggestion: "Gelişimsel gecikme ile duygusal bozuklukların 5 tanı kriterini basit örneklerle anlatır mısın?",
    visualSchema: {
      title: "Görsel Karşılaştırma · Gelişimsel Gecikme vs Duygusal Bozukluk",
      items: [
        { icon: "⏳", label: "Gelişimsel Gecikme", highlight: "Yaşıtlarından Geride", detail: "Erken doğum, kurşun zehirlenmesi, kronik kulak iltihabı risktir", color: "amber" },
        { icon: "🌧️", label: "Duygusal Bozukluk", highlight: "IDEA 5 Kriteri", detail: "Zeka normaldir ama öğrenemez, arkadaş kuramaz, sürekli mutsuzdur", color: "purple" },
        { icon: "⚖️", label: "Süreklilik Şartı", highlight: "Uzun Süreli Etki", detail: "Geçici üzüntü değil, okul başarısını sürekli bozan durumdur", color: "blue" }
      ]
    }
  },
  {
    id: "u1-t7",
    unitId: "unit-1",
    title: "Dil-Konuşma Bozukluğu, Travmatik Beyin Hasarı ve Kör-Sağırlık",
    subtitle: "IDEA yasasındaki özel iletişim ve sonradan edinilmiş beyin hasarı kategorileri",
    eli5: "Kekemelik veya harfleri yanlış çıkarma 'Dil ve Konuşma Bozukluğu'dur. Hem görme hem işitme kaybının birlikte olması 'Kör-Sağırlık'tır ve bu kişilere sadece kör veya sadece sağır programı yetmez, dokunsal özel eğitim gerekir. 'Travmatik Beyin Hasarı' ise doğuştan DEĞİL, trafik kazası veya düşme gibi dışsal bir darbeyle beynin sonradan hasar görmesidir.",
    bulletPoints: [
      "Dil ve Konuşma Bozukluğu: Kekemelik (akıcılık bozukluğu), sesletim/artikülasyon bozukluğu (harfleri çıkaramama), ses bozukluğu veya alıcı/ifade edici dil bozukluğudur.",
      "Kör-Sağırlık (Deaf-Blindness): Eşzamanlı işitme ve görme kaybıdır. Sadece işitme veya sadece görme engelliler için hazırlanan özel eğitim programlarıyla eğitilemeyecek kadar ağır iletişim ve gelişim ihtiyaçları doğurur.",
      "Travmatik Beyin Hasarı (TBH): Dışsal bir fiziksel kuvvetin (trafik kazası, düşme, şiddet) neden olduğu, SONRADAN EDİNİLMİŞ beyin yaralanmasıdır.",
      "TBH Önemli Ayrım: Doğuştan olan veya doğum sırasındaki beyin hasarları (örn. Serebral Palsi) Travmatik Beyin Hasarı kategorisine GİRMEZ!"
    ],
    practicalTip: "Çok önemli sınav tuzağı: 'Doğum sırasında oksijensiz kalma sonucu oluşan beyin hasarı Travmatik Beyin Hasarı mıdır?' HAYIR! Travmatik Beyin Hasarı mutlaka doğumdan sonra dışsal bir fiziksel darbeyle oluşur.",
    examClue: "Kör-sağırlık (Deaf-blindness), Çoklu Yetersizlik kategorisinden ayrı, kendine özgü bağımsız bir IDEA kategorisidir.",
    keepInMind: "Dil-Konuşma = Kekemelik/Artikülasyon | Kör-Sağırlık = Dokunsal İletişim | Travmatik Beyin Hasarı = Sonradan Dış Darbeyle Oluşan Hasar.",
    aiPromptSuggestion: "Travmatik Beyin Hasarı ile Serebral Palsi arasındaki farkı ve Kör-Sağırlık kavramını açıklar mısın?",
    visualSchema: {
      title: "Görsel Ayrım · 3 Özel IDEA Kategorisi",
      items: [
        { icon: "💬", label: "Dil ve Konuşma", highlight: "Kekemelik & Sesletim", detail: "İletişimi ve okul başarısını etkileyen artikülasyon/dil sorunları", color: "blue" },
        { icon: "🤲", label: "Kör-Sağırlık", highlight: "Görme + İşitme Kaybı", detail: "Tekil kör veya sağır programlarına sığmayan özel iletişim ihtiyacı", color: "purple" },
        { icon: "🪖", label: "Travmatik Beyin (TBH)", highlight: "Sonradan Dış Darbe", detail: "Kaza/düşme sonucu oluşur (Doğuştan/doğum travması dahil değildir!)", color: "rose" }
      ]
    }
  },
  {
    id: "u1-t8",
    unitId: "unit-1",
    title: "Ahlaki (Dini/Geleneksel) Model ve Hayırseverlik Bakışı",
    subtitle: "1800'lere kadar uzanan en eski model: Günah, ceza, utanç ve Witcher örneği",
    eli5: "Tarihteki en eski bakış açısı olan Ahlaki Model, engelliliği 'Kesin sen veya annen-baban bir günah işledi, Tanrı da ceza olarak bu engeli verdi' ya da 'Kaderin sınavı' diye açıklar. Bu bakış açısı yüzünden aileler engelli çocuklarından utanıp onları bodruma/eve saklamıştır. Slaytlarda Witcher dizisindeki kambur Yennefer karakteri bu modelin en çarpıcı örneği olarak verilmiştir.",
    bulletPoints: [
      "Tarihsel Dönem: İnsanlık tarihinin en eski modelidir; 1800'lü yılların ortasına kadar baskın kalmıştır.",
      "Temel Varsayım: Engellilik işlenen bir günahın cezası, ahlaki bir kusurun bedeli, büyü/cadılık veya ilahi bir sınav olarak görülür.",
      "Toplumsal Sonucu: Aile için 'utanç ve damgalanma' yaratır; engelli birey toplumdan gizlenir, dışlanır veya sadece 'sadaka/hayır' nesnesi haline getirilir.",
      "Slayt Kültür Örneği: The Witcher dizisindeki Yennefer karakterinin kambur doğduğu için ailesi ve çevresi tarafından 'uğursuz/lanetli' görülüp dışlanması Ahlaki Modelin kurgudaki yansımasıdır."
    ],
    practicalTip: "Soruda 'Günahın bedeli, ilahi ceza, aile utancı, 1800'lere kadar baskın olan en eski model, Witcher Yennefer örneği' geçiyorsa cevap %100 Ahlaki Modeldir!",
    examClue: "Ahlaki modelin modern hayattaki kalıntısı 'Hayırseverlik / Trajedi yaklaşımı'dır (engelliye hak sahibi olarak değil, sevap kazanılacak acınası kişi olarak bakmak).",
    keepInMind: "Ahlaki Model = En Eski Model (1800 Öncesi) + Günah/Ceza + Utanç ve Gizleme + Witcher Yennefer Örneği.",
    aiPromptSuggestion: "Ahlaki Model nedir ve günümüzde bile insanlarda hangi yanlış davranışlara yol açmaktadır?",
    visualSchema: {
      title: "Görsel Özet · Ahlaki (Geleneksel) Modelin 3 Özelliği",
      items: [
        { icon: "⏳", label: "En Eski Model", highlight: "1800'lere Kadar", detail: "Modern tıp öncesi dönemde dünyadaki en baskın açıklamadır", color: "amber" },
        { icon: "⚡", label: "Temel İnanç", highlight: "Günah ve Ceza", detail: "Engelliliği ahlaki kusur, lanet veya ilahi ceza olarak görür", color: "rose" },
        { icon: "🎭", label: "Slayt Örneği", highlight: "Witcher - Yennefer", detail: "Ailede utanç, gizleme, dışlama veya acıma/sadaka yaratır", color: "purple" }
      ]
    }
  },
  {
    id: "u1-t9",
    unitId: "unit-1",
    title: "Medikal (Tıbbi) Model ve Parsons'ın 'Hasta Rolü' Kavramı",
    subtitle: "1800 ortalarından 1970'lere: Engelliliği 'tamir edilecek bozuk makine' görmek",
    eli5: "1800'lerin ortasında tıp gelişince 'Günah değil, bu bir hastalık!' dediler. İyi niyetli gibi görünse de Tıbbi Model engelli bireyi 'bozuk bir saat' gibi gördü: 'Sorun senin bacağında/gözünde, doktor ne derse itaat et, iyileşene kadar da toplumdan uzak dur!' dedi. Merdivenli binaları hiç sorgulamadı, sadece bireyi normalleştirmeye çalıştı.",
    bulletPoints: [
      "Tarihsel Dönem: 1800'lerin ortalarından 1970'li yıllara kadar egemen olmuştur.",
      "Temel Varsayım: Engellilik, normal insan bedeninden ve işlevinden biyolojik bir sapma (patoloji/anormallik) olarak tanımlanır.",
      "Uzman Otoritesi ve Hasta Rolü (Talcott Parsons): Doktor ve sağlık uzmanları mutlak otoritedir. Engelli birey pasif 'hasta rolünü' benimsemek, uzman kararlarına itaat etmek ve iyileşmeye çalışmak zorundadır.",
      "En Büyük Eksikliği: Çevresel, mimari ve toplumsal engelleri tamamen yok sayar; sorunu sadece bireyin bedeninde arar ve kişiyi kurumsal bakıma/hastanelere kapatma eğilimindedir."
    ],
    practicalTip: "Soruda 'Biyolojik sapma, anormallik, hasta rolü, uzman otoritesi, bireyi düzeltmeye odaklanma, çevreyi yok sayma' geçiyorsa cevap Medikal (Tıbbi) Modeldir!",
    examClue: "Tıbbi model engelli bireyi karar verici bir 'özne' olarak değil, üzerinde tıbbi işlem yapılacak bir 'vaka / hasta nesnesi' olarak konumlandırır.",
    keepInMind: "Medikal Model (1850-1970) = Sorun Bireyin Bedeninde + Hasta Rolü + Uzman Otoritesi + Çevre Yok Sayılır.",
    aiPromptSuggestion: "Medikal (Tıbbi) Modelin 'Hasta Rolü' kavramını ve neden engelli bireyler tarafından eleştirildiğini basitçe anlatır mısın?",
    visualSchema: {
      title: "Görsel Şema · Medikal (Tıbbi) Modelin Mantığı",
      items: [
        { icon: "🩺", label: "Sorun Nerede?", highlight: "Bireyin Bedeninde", detail: "Engelliliği biyolojik anormallik ve patoloji olarak görür", color: "amber" },
        { icon: "🛌", label: "Bireyin Konumu", highlight: "Pasif Hasta Rolü", detail: "Kişi uzman otoritesine itaat eden pasif alıcıdır (Parsons)", color: "rose" },
        { icon: "🙈", label: "Kör Noktası", highlight: "Çevreyi Görmez!", detail: "Rampasız binaları ve ayrımcılığı sorgulamaz, kişiyi değiştirmeye çalışır", color: "blue" }
      ]
    }
  },
  {
    id: "u1-t10",
    unitId: "unit-1",
    title: "Sosyal Modelin Doğuşu (1970 İngiltere - UPIAS)",
    subtitle: "Noksanlık (Impairment) ile Engellilik (Disability) arasındaki tarihi ayrım",
    eli5: "1970'lerde İngiltere'de tekerlekli sandalye kullanan aktivistler (UPIAS) doktorlara isyan etti: 'Benim bacağımın tutmaması tıbbi bir NOKSANLIKTIR (Impairment); ama belediye otobüsüne rampa koymadığınız için işe gidememem sizin yarattığınız ENGELLİLİKTİR (Disability)!' Yani insanı engelli yapan bedeni değil, merdivenli ve önyargılı toplumdur.",
    bulletPoints: [
      "Doğuşu: 1970'li yıllarda İngiltere'de UPIAS (Ayrımcılığa Karşı Fiziksel Engelli Birliği - Paul Hunt, Vic Finkelstein, Mike Oliver) öncülüğünde tıbbi modele bir başkaldırı olarak doğmuştur.",
      "Noksanlık (Impairment): Bireyin bedenindeki uzuv, organ veya mekanizma eksikliği / işlev kaybıdır (Biyolojik durum).",
      "Engellilik (Disability): Çağdaş toplumun, noksanlığı olan bireyleri hiç hesaba katmadan örgütlenmesi ve onları toplumsal yaşamın dışına itmesidir (Toplumsal baskı ve dışlanma).",
      "Sosyal Hizmete Etkisi: Müdahalenin hedefi 'bireyi tamir etmek' olmaktan çıkıp 'fiziksel çevreyi, kurumları ve önyargıları değiştirmek' haline gelmiştir."
    ],
    practicalTip: "Soruda 'UPIAS', 'Mike Oliver', '1970 İngiltere' veya 'Noksanlık bedendedir, engellilik ise toplumun dışlamasıdır' cümlesini görürsen gözün kapalı Sosyal Modeli işaretle!",
    examClue: "UPIAS kısaltmasının açılımı: Union of the Physically Impaired Against Segregation (Ayrımcılığa Karşı Fiziksel Engelli Birliği).",
    keepInMind: "UPIAS (1970 İngiltere) -> Noksanlık = Bedensel Eksiklik | Engellilik = Toplumun Yarattığı Dışlanma ve Bariyerler.",
    aiPromptSuggestion: "UPIAS'ın yaptığı 'Noksanlık' ve 'Engellilik' ayrımını çok net bir günlük hayat örneğiyle anlatır mısın?",
    visualSchema: {
      title: "Görsel Formül · UPIAS Sosyal Model Denklemi",
      items: [
        { icon: "🦿", label: "Noksanlık (Impairment)", highlight: "Biyolojik Durum", detail: "Bireyin bacağının, gözünün veya kulağının işlev kaybı", color: "blue" },
        { icon: "🚧", label: "+ Toplumsal Bariyer", highlight: "Merdiven & Önyargı", detail: "Asansörsüz bina, kabartmasız yazı, ayrımcı işveren", color: "rose" },
        { icon: "✊", label: "= Engellilik (Disability)", highlight: "Toplumsal Dışlanma", detail: "Çözüm bireyi değil, ayrımcı çevreyi değiştirmektir! (UPIAS)", color: "emerald" }
      ]
    }
  },
  {
    id: "u1-t11",
    unitId: "unit-1",
    title: "Sosyal Modelde 3 Engel Türü ve Sosyal Modele Yapılan 3 Eleştiri",
    subtitle: "Yapısal, Çevresel, Tutumsal engeller ve modelin eksik bıraktığı noktalar",
    eli5: "Sosyal Model toplumdaki engelleri 3'e ayırır: Yapısal (kurumların katı kuralları), Çevresel (dik merdiven, sesli uyarı olmaması) ve Tutumsal (insanların acıması veya korkması). Ancak daha sonra akademisyenler Sosyal Modeli de 3 noktada eleştirmiştir: 'Sadece rampaya odaklandınız ama engelli insanın çektiği gerçek fiziksel ağrıyı ve yorgunluğu unuttunuz!'",
    bulletPoints: [
      "1. Yapısal Engeller: Normların, yasaların ve kurumların işleyiş biçiminden kaynaklanan engeller (örn. esnek çalışma saatlerinin olmaması).",
      "2. Çevresel (Fiziksel/Mimari) Engeller: Dik kaldırımlar, asansörsüz binalar, Braille alfabesi veya işaret dili tercümanı bulunmaması.",
      "3. Tutum Engelleri: Toplumun engellilere yönelik önyargıları, acıma, küçümseme veya dışlama davranışları.",
      "Sosyal Modele Yapılan 3 Temel Eleştiri: 1) Noksanlığı sadece tıbbi/biyolojik kabul edip dilsel ikiliğe (noksanlık/engellilik) hapsetmesi, 2) Bireyin öznel yaşam deneyimlerini (kronik ağrı, yorgunluk vb.) göz ardı etmesi, 3) Toplumsal baskıyı sarsılmaz bir gerçeklik gibi kabul edip ayrımcılığı kurumsallaştırma riski taşıması."
    ],
    practicalTip: "Slaytta geçen 'Sosyal modele yapılan 3 eleştiri' çok kaliteli bir sınav sorusudur: Özellikle 'Bireysel bedensel deneyimleri (ağrı/yorgunluk) göz ardı etmesi' şıkkına dikkat et!",
    examClue: "Braille alfabesinin veya altyazının olmaması hangi engel türüne girer? Çevresel (Fiziksel/Bilgi) engellere girer.",
    keepInMind: "3 Engel = Yapısal (Kurum Kuralı) + Çevresel (Mimari/Braille) + Tutumsal (Önyargı) | Eleştiri = Bedensel Ağrı ve Deneyimi Unutması.",
    aiPromptSuggestion: "Sosyal modelin tanımladığı 3 engel türünü ve sosyal modele yöneltilen 3 eleştiriyi örneklerle açıklar mısın?",
    visualSchema: {
      title: "Görsel Tablo · 3 Toplumsal Engel Türü & Model Eleştirisi",
      items: [
        { icon: "🏛️", label: "Yapısal Engeller", highlight: "Kurum Normları", detail: "Katı mesai/sınav kuralları, dışlayıcı bürokrasi ve mevzuat", color: "purple" },
        { icon: "🪜", label: "Çevresel Engeller", highlight: "Mimari & İletişim", detail: "Dik kaldırım, rampa/asansör yokluğu, Braille/altyazı eksikliği", color: "blue" },
        { icon: "🗣️", label: "Tutum Engelleri", highlight: "Önyargı & Acıma", detail: "Damgalama, küçümseme (Not: Model ağrı/bedeni unuttuğu için eleştirilir)", color: "amber" }
      ]
    }
  },
  {
    id: "u1-t12",
    unitId: "unit-1",
    title: "DSÖ 1980 ICIDH Sınıflandırması (Bozukluk, Yetersizlik, Özür)",
    subtitle: "ICF (2001) öncesi Dünya Sağlık Örgütü'nün 3 düzlemli ilk modeli",
    eli5: "Dünya Sağlık Örgütü 1980 yılında ICIDH adıyla 3 basamaklı bir zincir kurdu: 1) Gözdeki retina hasarı 'Bozukluk / Vücut Yapısı'dır. 2) Bu yüzden küçük yazıları okuyamamak 'Bireysel Faaliyet / Yetersizlik'tir. 3) Bu yüzden iş bulamayıp toplumdan dışlanmak ise 'Sosyal Faaliyet / Özür (Handikap)'tır.",
    bulletPoints: [
      "DSÖ ICIDH (1980): Bozuklukların, Yetersizliklerin ve Özürlerin Uluslararası Sınıflandırması (International Classification of Impairments, Disabilities and Handicaps).",
      "1. Düzlem - Vücut Yapıları ve İşlevleri (Impairment / Bozukluk): Organ veya anatomik düzeydeki kayıp ya da anormallik.",
      "2. Düzlem - Bireysel Faaliyetler (Disability / Yetersizlik): Bozukluk nedeniyle bireyin normal kabul edilen bir etkinliği (yürüme, okuma) yapma becerisindeki kısıtlanma.",
      "3. Düzlem - Sosyal Faaliyetler (Handicap / Özür): Bireyin yaş, cinsiyet ve sosyal rollerini yerine getirmesini engelleyen toplumsal dezavantaj durumu."
    ],
    practicalTip: "Soruda 'DSÖ 1980 ICIDH modelinin 3 düzlemi nedir?' diye sorulursa: 1) Vücut yapıları/işlevleri, 2) Bireysel faaliyetler (beceri), 3) Sosyal faaliyetler (katılım/roller).",
    examClue: "1980 ICIDH modeli doğrusal (nedensel) olduğu ve çevresel faktörleri yeterince içermediği için 2001 yılında yerini etkileşimsel 'ICF' (Biyopsikososyal) modeline bırakmıştır.",
    keepInMind: "DSÖ 1980 ICIDH = 1. Vücut Yapısı (Bozukluk) -> 2. Bireysel Faaliyet (Beceri) -> 3. Sosyal Faaliyet (Toplumsal Rol).",
    aiPromptSuggestion: "1980 ICIDH sınıflandırması ile 2001 ICF sınıflandırması arasındaki farkı tek bir örnekle anlatır mısın?",
    visualSchema: {
      title: "Görsel Zincir · DSÖ 1980 ICIDH 3 Düzlemi",
      items: [
        { icon: "🫀", label: "1. Vücut Yapısı/İşlevi", highlight: "Organ Düzeyi (Bozukluk)", detail: "İç kulaktaki sinir hücrelerinin hasar görmesi", color: "rose" },
        { icon: "🚶", label: "2. Bireysel Faaliyet", highlight: "Kişi Düzeyi (Beceri)", detail: "Bireyin fısıltıyı veya konuşmaları duyamaması", color: "amber" },
        { icon: "🤝", label: "3. Sosyal Faaliyet", highlight: "Toplum Düzeyi (Katılım)", detail: "Altyazı/işaret dili olmadığı için toplantıya katılamaması", color: "blue" }
      ]
    }
  },
  {
    id: "u1-t13",
    unitId: "unit-1",
    title: "İnsan Hakları Modeli ve 1., 2., 3., 4. Kuşak İnsan Hakları",
    subtitle: "2006 BM Sözleşmesi ve Sivil, Sosyal, Dayanışma ve Sürdürülebilirlik hakları",
    eli5: "İnsan Hakları Modeli (2006) der ki: 'Engelli bireye hem oy verme ve özgürlük hakkını (1. Kuşak), hem eğitim ve sağlık hakkını (2. Kuşak) birlikte vermek zorundasınız!' Ayrıca slaytlarda 3. Kuşak (Barış ve Çevre) ile en yeni olan 4. Kuşak haklar (Kent Hakkı ve Dijital Ortama Eşit Erişim Hakkı) özellikle vurgulanmıştır.",
    bulletPoints: [
      "1. Kuşak Haklar (Sivil ve Siyasi Haklar): Yaşam hakkı, kişi güvenliği, mülkiyet hakkı, düşünce özgürlüğü, seçme ve seçilme hakkı.",
      "2. Kuşak Haklar (Ekonomik, Sosyal ve Kültürel Haklar): Çalışma hakkı, adil ücret, sendika hakkı, eğitim, sağlık, konut ve sosyal güvenlik hakkı. (İnsan Hakları Modeli 1. ve 2. kuşağın BİRLİKTE benimsenmesini savunur!).",
      "3. Kuşak Haklar (Dayanışma Hakları): Barış hakkı, sağlıklı çevrede yaşama hakkı, kendi kaderini tayin hakkı, insanlığın ortak mirasından yararlanma.",
      "4. Kuşak Haklar (Sürdürülebilir Yaşam Hakları): Ekosistem hakkı, gelecek nesillerin hakkı, KENT HAKKI, DİJİTAL GÜVENLİK ve DİJİTAL ORTAMA EŞİT ERİŞİM HAKKI."
    ],
    practicalTip: "Slaytın en favori soru adayı: 'Kent hakkı ve Dijital ortama eşit erişim hakkı kaçıncı kuşak insan haklarıdır?' Cevap: 4. Kuşak (Sürdürülebilir Yaşamla İlgili Haklar)!",
    examClue: "Oy verme hakkı (1. Kuşak) tanınsa bile okuma-yazma/eğitim hakkı ve ulaşım (2. Kuşak) sağlanmazsa engelli birey sandığa gidemez; bu yüzden 1. ve 2. kuşak haklar ayrılmaz bir bütündür.",
    keepInMind: "1. Kuşak = Sivil/Siyasi (Oy/Yaşam) | 2. Kuşak = Sosyal (Eğitim/Sağlık/İş) | 3. Kuşak = Dayanışma (Barış) | 4. Kuşak = Kent Hakkı & Dijital Erişim.",
    aiPromptSuggestion: "1., 2., 3. ve 4. Kuşak İnsan Haklarını engelli bir bireyin günlük hayatından örneklerle açıklar mısın?",
    visualSchema: {
      title: "Görsel Tablo · 4 Kuşak İnsan Hakları Şifresi",
      items: [
        { icon: "🗳️", label: "1. & 2. Kuşak", highlight: "Sivil + Sosyal Haklar", detail: "1. Kuşak: Yaşam, Oy, Mülkiyet | 2. Kuşak: Eğitim, Sağlık, Çalışma, Konut", color: "blue" },
        { icon: "🕊️", label: "3. Kuşak Haklar", highlight: "Dayanışma Hakları", detail: "Barış hakkı, çevre hakkı, kendi kaderini tayin hakkı", color: "emerald" },
        { icon: "💻", label: "4. Kuşak Haklar ★", highlight: "Kent & Dijital Erişim", detail: "Kent hakkı, dijital güvenlik, dijital eşit erişim, gelecek nesiller", color: "purple" }
      ]
    }
  },
  {
    id: "u1-t14",
    unitId: "unit-1",
    title: "Tarihsel Süreçte Engellilik: Antik Çağdan Sanayi Devrimine",
    subtitle: "Sparta, Orta Çağ bakımevleri, Sanayi Devrimi ve standart işgücü",
    eli5: "Tarih boyunca toplumun üretim biçimi değişince engelliliğe bakış da değişti: Antik Sparta'da savaşçı olamayacak bebekler ölüme terk edildi. Orta Çağ'da kilise hem 'günah' dedi hem de sadaka/bakımevi kurdu. Sanayi Devrimi'nde ise fabrikalar 'hızlı ve standart makine işçisi' isteyince, bu hıza uyamayan engelliler üretim dışına itilip büyük kurumlara kapatıldı.",
    bulletPoints: [
      "Antik Çağ (Yunan ve Roma): Fiziksel güç ve askeri yetenek ön plandaydı; ağır engelli bebeklerin terk edilmesi (infantisit) görülüyordu.",
      "Orta Çağ: Tek tanrılı dinlerin etkisiyle bir yandan merhamet/sadaka kurumları gelişirken, diğer yandan batıl inançlar nedeniyle dışlanma yaşandı.",
      "Sanayi Devrimi (18. ve 19. Yüzyıl): Tarım toplumunda engelli birey aile içinde gücüne göre üretime katılabilirken, fabrika sistemi 'standart zaman ve standart beden' dayattı.",
      "Büyük Kurumsallaşma (Asylum Dönemi): Fabrika hızına ayak uyduramayan bireyler 'üretken olmayan bağımlılar' olarak kodlanıp şehir dışındaki devasa yatılı kurumlara (tımarhane/bakımevi) kapatıldı."
    ],
    practicalTip: "Soruda 'Tarım toplumundan fabrika üretimine geçişle birlikte standart işgücü hızına uyamayan engellilerin üretim dışına itilmesi hangi dönemde olmuştur?' derse cevap Sanayi Devrimi'dir!",
    examClue: "Sosyal model kuramcıları (özellikle Finkelstein ve Oliver), modern anlamda 'engellilik dışlanmasının' Sanayi Devrimi ve kapitalist fabrika düzeniyle kurumsallaştığını savunur.",
    keepInMind: "Tarım Toplumu = Aile İçi Üretim | Sanayi Devrimi = Standart Fabrika İşçisi & Üretimden Dışlanma + Kurumlara Kapatılma.",
    aiPromptSuggestion: "Sanayi Devrimi'nin engelli bireylerin hayatında neden bir kırılma noktası olduğunu basitçe anlatır mısın?",
    visualSchema: {
      title: "Görsel Tarih Şeridi · Üretim Biçimi ve Engellilik",
      items: [
        { icon: "🌾", label: "Tarım Toplumu", highlight: "Esnek Ev Üretimi", detail: "Engelli birey köy/aile içinde kendi hızında üretime katılabiliyordu", color: "emerald" },
        { icon: "🏭", label: "Sanayi Devrimi", highlight: "Standart Fabrika Hızı", detail: "Makine temposuna uyamayan bedenler 'verimsiz' ilan edilip dışlandı", color: "amber" },
        { icon: "🏢", label: "Kurumsallaşma", highlight: "Büyük Yatılı Kurumlar", detail: "Üretim dışı kalanlar şehir dışındaki kapalı kurumlara izole edildi", color: "rose" }
      ]
    }
  },
  {
    id: "u1-t15",
    unitId: "unit-1",
    title: "Normalleştirme İlkesi (Nirje) ve Değerli Sosyal Roller (Wolfensberger)",
    subtitle: "Kışla tipi kurumlardan toplum içi yaşama geçişin kuramsal temeli",
    eli5: "1960'larda İskandinavya'da doğan 'Normalleştirme İlkesi', zihinsel engelli kişiyi zorla 'normal bir insana benzetmek' DEĞİLDİR! Tam tersine, onun da herkes gibi sabah uyanıp işe/okula gittiği, akşam evinde dinlendiği, hafta sonu tatile çıktığı 'normal bir yaşam ritmine' sahip olması demektir. Wolfensberger ise buna 'Değerli Sosyal Rollerin Güçlendirilmesi' adını vermiştir.",
    bulletPoints: [
      "Normalleştirme İlkesi (Bank-Mikkelsen & Bengt Nirje - 1960'lar): Engelli bireylere, içinde yaşadıkları toplumun ana akım günlük yaşam örüntülerine ve koşullarına mümkün olduğunca yakın bir yaşam sunulmasıdır.",
      "Büyük Yanılgı Tuzağı: Normalleştirme 'bireyi tıbbi olarak normalleştirmek veya kalıba sokmak' DEĞİLDİR; yaşam koşullarını ve günlük ritmi (günlük, haftalık, yıllık yaşam döngüsü) insani ve normal kılmaktır!",
      "Değerli Sosyal Rollerin Güçlendirilmesi (Social Role Valorization - Wolfensberger): Toplumda değersizleştirilen gruplara (engellilere) saygın sosyal roller (çalışan, öğrenci, komşu, sanatçı) kazandırılmasıdır.",
      "Kurumsuzlaştırma (Deinstitutionalization): Büyük kışla tipi bakım kurumlarının kapatılarak grup evleri (Umut Evleri) ve toplum temelli desteklere geçilmesinin temelini oluşturmuştur."
    ],
    practicalTip: "Sınavda 'Normalleştirme ilkesi bireyi normal insan kalıbına sokmayı amaçlar' derse YANLIŞ! Doğrusu: 'Bireyi değil, bireyin yaşam koşullarını ve günlük yaşam ritmini normalleştirmeyi amaçlar.'",
    examClue: "Wolfensberger'in geliştirdiği kavramın adı: 'Değerli Sosyal Rollerin Güçlendirilmesi' (Social Role Valorization - SRV).",
    keepInMind: "Normalleştirme (Nirje) = Bireyi Değil, Yaşam Koşullarını Normal Kılma | Wolfensberger = Değerli Sosyal Roller (SRV).",
    aiPromptSuggestion: "Normalleştirme ilkesinin ne olduğunu ve ne olmadığını (tıbbi normalleştirme ile farkını) örneklerle anlatır mısın?",
    visualSchema: {
      title: "Görsel Ayrım · Normalleştirme İlkesi Nedir, Ne Değildir?",
      items: [
        { icon: "❌", label: "Yanlış Anlama", highlight: "Kişiyi Kalıba Sokmak Değil!", detail: "Engelli bireyi zorla sağlam/normal insana benzetmeye çalışmak değildir", color: "rose" },
        { icon: "✅", label: "Doğru Anlamı (Nirje)", highlight: "Normal Yaşam Ritmi", detail: "Sabah okul/iş, akşam ev, tatil ve seçim hakkı olan insani yaşam koşulları", color: "emerald" },
        { icon: "🌟", label: "Wolfensberger (SRV)", highlight: "Değerli Sosyal Roller", detail: "Yardım alan pasif kişi yerine 'komşu, çalışan, öğrenci' rolü kazandırma", color: "blue" }
      ]
    }
  }
];

export const UNIT_2_TOPICS: TopicCard[] = [
  {
    id: "u2-t1",
    unitId: "unit-2",
    title: "Model vs Kuram Farkı ve Sosyal İnşacı Yaklaşım",
    subtitle: "Toplum, kültür ve dil 'normal' ile 'anormal'i nasıl üretir?",
    eli5: "Model 'Sorun nerede ve nasıl müdahale edelim?' diye pratik harita çizerken, Kuram 'Bu sorun neden oluştu ve toplum bunu nasıl sürdürüyor?' diye derinlemesine açıklar. Sosyal İnşacı Yaklaşım der ki: 'Normal, yeterli veya bağımlı dediğimiz şeyler doğada yazılı değildir; toplumun, kültürün ve sosyal hizmet uzmanlarının kullandığı dilin uydurmasıdır!'",
    bulletPoints: [
      "Model ve Kuram Ayrımı: Model sınıflandırma ve müdahale şeması sunarken; Kuram engellilik deneyiminin nasıl oluştuğunu, sürdüğünü ve anlamlandırıldığını açıklayan kavramsal çerçevedir.",
      "Sosyal İnşacı Yaklaşım (Social Constructionism): 'Normal, anormal, yeterli, yetersiz, bağımlı' kavramları biyolojik olarak sabit değildir; tarihsel, kültürel ve kurumsal süreçlerde inşa edilmiştir.",
      "Kurumsal Dil Eleştirisi: Vaka kayıtlarında ve raporlarda geçen 'bakıma muhtaç', 'özürlü', 'yetersiz' gibi ifadeler tarafsız birer tespit değil, kişiyi güçsüzleştiren toplumsal inşalardır.",
      "Sosyal Hizmet Uygulaması: Uzman sadece müracaatçıyı değil, kendi kurumunun kullandığı dili ve 'normal aile / normal birey' varsayımlarını da sorgulamalıdır."
    ],
    practicalTip: "Soruda 'Normal, yeterli ve bağımlı kavramlarının biyolojik olarak sabit olmayıp dil, kültür ve kurumlar tarafından üretildiğini savunan yaklaşım hangisidir?' derse cevap Sosyal İnşacı Yaklaşımdır!",
    examClue: "Sosyal inşacı yaklaşıma göre bir özelliğin 'engel' sayılması zamana ve kültüre göre değişir (örn. herkesin işaret dili bildiği Martha's Vineyard adasında sağırlığın engel sayılmaması).",
    keepInMind: "Model = Pratik Şema | Kuram = Derin Açıklama | Sosyal İnşacı Yaklaşım = 'Normal' ve 'Bağımlı' Kavramlarını Dil ve Kültür Üretir.",
    aiPromptSuggestion: "Sosyal İnşacı Yaklaşımı ve 'normal' kavramının toplum tarafından nasıl üretildiğini günlük bir örnekle anlatır mısın?"
  },
  {
    id: "u2-t2",
    unitId: "unit-2",
    title: "Etiketleme Kuramı (Howard Becker) ve İkincil Sapma",
    subtitle: "Tanılar ve raporlar bireyi açıklıyor mu, yoksa bir kutuya mı hapsediyor?",
    eli5: "Howard Becker'in Etiketleme Kuramı der ki: 'Bir çocuğa resmi olarak Zihinsel Yetersiz veya Uyumsuz etiketi yapıştırdığınız an, öğretmenleri ve komşuları ona sadece o etiket üzerinden davranmaya başlar.' Çocuk da bir süre sonra 'Zaten ben yetersizim' diyerek bu rolü kabullenir (buna İkincil Sapma / Kendini Gerçekleştiren Kehanet denir).",
    bulletPoints: [
      "Etiketleme Kuramı (Howard Becker - 1963): Sapma veya yetersizlik eylemin kendisinde değil, güçlü kurumların (tıp, hukuk, okul) bireye bu etiketi yapıştırması sürecindedir.",
      "Baskın Statü (Master Status): Engellilik etiketi kişinin tüm diğer kimliklerinin (başarılı bir müzisyen, iyi bir arkadaş, ebeveyn) önüne geçerek tek tanımlayıcı kimliği haline gelir.",
      "Etiketin İkili İşlevi (Sınav Noktası!): Sosyal hizmette resmi tanı/rapor bir yandan haklara ve hizmetlere erişimi açarken, diğer yandan bireyi kategorik bir kutuya hapsedip dışlayabilir.",
      "Sosyal Hizmet Uzmanının Sorusu: 'Bu tanı müracaatçının ihtiyacını mı açıklıyor, yoksa potansiyelini görünmez kılan bir etikete mi dönüşüyor?'"
    ],
    practicalTip: "Soruda 'Howard Becker', 'Tanının bireyi bir kutuya hapsetmesi', 'Baskın statü (Master status)' veya 'Etiketin haklara erişim sağlarken aynı zamanda dışlama yaratması ikilemi' geçiyorsa cevap Etiketleme Kuramıdır!",
    examClue: "Sosyal hizmet uzmanı resmi raporları tamamen reddetmez (çünkü maaş ve haklar rapora bağlıdır); ancak raporun kişiyi tanımlayan tek etiket olmasına izin vermez.",
    keepInMind: "Etiketleme Kuramı (Becker) = Tanı/Rapor Kişiyi Kutuya Hapseder + Baskın Statü + Haklara Erişim vs Dışlanma İkilemi.",
    aiPromptSuggestion: "Howard Becker'in Etiketleme Kuramını ve engelli sağlık raporunun ikili etkisini (hak sağlama vs etiketleme) anlatır mısın?",
    visualSchema: {
      title: "Görsel İkilem · Etiketleme Kuramı (Howard Becker)",
      items: [
        { icon: "🏷️", label: "Resmi Tanı / Rapor", highlight: "Kurumsal Etiket", detail: "Tıp ve bürokrasi bireye '%50 Engelli / Yetersiz' etiketi verir", color: "amber" },
        { icon: "🔑", label: "Olumlu İşlevi", highlight: "Haklara Kapı Açar", detail: "Ücretsiz ulaşım, EKPSS, evde bakım ve özel eğitim hakkı sağlar", color: "emerald" },
        { icon: "📦", label: "Olumsuz Etkisi", highlight: "Kutuya Hapseder!", detail: "Kişinin yetenekleri unutulur, sadece 'yetersiz' etiketiyle görülür", color: "rose" }
      ]
    }
  },
  {
    id: "u2-t3",
    unitId: "unit-2",
    title: "Damgalama / Stigma Kuramı 1 (Erving Goffman)",
    subtitle: "Örselenmiş kimlik, sosyal itibarın zedelenmesi ve 3 damga türü",
    eli5: "Sosyolog Erving Goffman (1963) 'Stigma: Örselenmiş Kimliğin İdaresi' kitabında damgayı şöyle anlatır: Toplumun kafasında bir 'normal insan' şablonu vardır. Bu şablondan farklı bir özelliğiniz varsa toplum sizi 'kusurlu/eksik' görür ve sosyal itibarınızı düşürür. Yani sorun kişinin özgüvensiz olması değil, çevrenin onu utandırıp damgalamasıdır!",
    bulletPoints: [
      "Erving Goffman (1963): Damga (Stigma), bireyin sosyal itibarını derinden zedeleyen ve onu toplumun gözünde 'bütün ve sıradan bir insandan kusurlu/eksik bir insana' indirgeyen özelliktir.",
      "Sanal vs Gerçek Sosyal Kimlik: Toplumun kişiden beklediği normatif kimlik (sanal kimlik) ile kişinin gerçek özellikleri arasındaki uçurum damgayı doğurur.",
      "Goffman'ın 3 Damga Türü: 1) Bedensel damgalar (fiziksel/duyusal farklılıklar), 2) Karakter/bireysel geçmiş damgaları (ruhsal hastalık öyküsü, bağımlılık), 3) Kabile/grup damgaları (ırk, etnisite, din).",
      "Sosyal Hizmet Perspektifi: Müracaatçının geri çekilmesini 'bireysel özgüven eksikliği' olarak değil, 'damgalanma ve dışlanma deneyiminin sonucu' olarak yeniden çerçeveler."
    ],
    practicalTip: "Soruda 'Erving Goffman', 'Sosyal itibarın zedelenmesi', 'Örselenmiş kimlik' veya 'Bireysel özgüven eksikliği değil damgalanma sonucu geri çekilme' geçiyorsa cevap Damgalama (Stigma) Kuramıdır!",
    examClue: "Goffman'a göre damga bir nesne veya özelliğin kendisi değil, o özellik ile toplumsal kalıpyargılar arasındaki İLİŞKİDİR.",
    keepInMind: "Erving Goffman (1963) = Stigma (Damga) + Sosyal İtibar Zedelenmesi + 3 Damga Türü (Beden, Karakter, Grup).",
    aiPromptSuggestion: "Erving Goffman'ın Damgalama (Stigma) kuramını ve 3 damga türünü günlük hayattan örneklerle anlatır mısın?"
  },
  {
    id: "u2-t4",
    unitId: "unit-2",
    title: "Damgalama 2: Görünür vs Gizlenebilir Engel ve 'Bilgi Kontrolü'",
    subtitle: "Goffman'ın İtibarı Sarsılmış (Discredited) ve Sarsılabilir (Discreditable) ayrımı",
    eli5: "Goffman çok zekice bir ayrım yapar: Tekerlekli sandalye kullanan birinin engeli ilk bakışta görülür; onun derdi ortamdaki gerginliği yönetmektir. Ama epilepsisi, MS hastalığı veya ruhsal engeli olan birinin durumu dışarıdan görünmez! Onun en büyük stresi ise 'Acaba iş yerinde söylesem mi, yoksa saklasam mı? Öğrenirlerse beni kovarlar mı?' kaygısıdır; buna 'Bilgi Kontrolü' denir.",
    bulletPoints: [
      "Görünür Özellik (İtibarı Sarsılmış / Discredited): Engelin dışarıdan hemen fark edildiği durumdur (örn. tekerlekli sandalye, beyaz baston). Temel mesele sosyal etkileşimdeki gerginliği ve bakışları yönetmektir.",
      "Gizli / Görünmez Özellik (İtibarı Sarsılabilir / Discreditable): Engelin ilk bakışta bilinmediği durumdur (örn. epilepsi, işitme cihazı gizleme, psikiyatrik tanı, MS, kronik hastalık).",
      "Bilgi Kontrolü (Information Control): Gizlenebilir engeli olan bireyin 'Kime, ne zaman, ne kadar anlatmalıyım, nasıl gizlemeliyim?' stratejilerini yönetmesidir.",
      "Normal Geçinme (Passing) ve Örtme (Covering): Damgalanmamak için engelini tamamen gizleyip sağlam gibi davranmaya 'Passing', dikkat çekmesini azaltmaya çalışmaya ise 'Covering' denir."
    ],
    practicalTip: "Sınavda 'Epilepsi veya ruhsal engeli olan bir çalışanın iş yerinde hastalığını gizlemeye çalışması Goffman'ın hangi kavramıdır?' diye sorulursa cevap: Bilgi Kontrolü (Information Control) / Passing!",
    examClue: "Gizlenebilir bir engeli saklamak kişiyi dışlanmaktan koruyor gibi görünse de yoğun bir 'ifşa olma kaygısı' ve psikolojik tükenmişlik yaratır.",
    keepInMind: "Görünür Engel = Etkileşim Gerginliği Yönetimi | Görünmez Engel = Bilgi Kontrolü (Saklama/İfşa Kaygısı) & Passing.",
    aiPromptSuggestion: "Goffman'ın görünür engel ve görünmez engel ayrımını ve 'Bilgi Kontrolü' kavramını örneklerle anlatır mısın?",
    visualSchema: {
      title: "Görsel Karşılaştırma · Goffman'da Görünür vs Görünmez Engel",
      items: [
        { icon: "🦽", label: "Görünür Özellik", highlight: "İtibarı Sarsılmış", detail: "İlk bakışta fark edilir; kişi meraklı bakışları ve gerginliği yönetir", color: "blue" },
        { icon: "🎭", label: "Görünmez Özellik", highlight: "İtibarı Sarsılabilir", detail: "Epilepsi, MS, ruhsal tanı; dışarıdan hemen anlaşılmaz", color: "purple" },
        { icon: "🔐", label: "Bilgi Kontrolü", highlight: "Gizleme vs Açıklama", detail: "'Söylersem dışlanır mıyım?' kaygısıyla bilginin saklanması (Passing)", color: "amber" }
      ]
    }
  },
  {
    id: "u2-t5",
    unitId: "unit-2",
    title: "İçselleştirilmiş Sağlamcılık ve Aileye Yansıyan Damga (Courtesy Stigma)",
    subtitle: "Damganın bireyin iç dünyasına ve ailesine yayılması",
    eli5: "Toplum bir insana yıllarca 'Sen eksiksin, yük oluyorsun' mesajı verirse, kişi sonunda bu yalana kendisi de inanır ve kendinden utanmaya başlar; buna 'İçselleştirilmiş Sağlamcılık (İçselleştirilmiş Damga)' denir. Ayrıca damga sadece engelli bireyi vurmaz; otizmli çocuğuyla otobüse binen anneye yolcuların 'Çocuğuna terbiye verememiş' diye ters bakması ise 'Yansıyan Damga (Nezaket Damgası)'dır.",
    bulletPoints: [
      "İçselleştirilmiş Damga / Sağlamcılık (Internalized Ableism): Engelli bireyin toplumdaki olumsuz önyargıları benimseyerek kendini yetersiz, değersiz ve 'başkalarına yük' olarak görmesidir.",
      "Yansıyan Damga / İlişkisel Damga (Courtesy / Affiliate Stigma): Goffman'a göre damgalanan bireyin yakınlarının (anne, baba, kardeş, eş) sırf onunla ilişkili oldukları için toplum tarafından damgalanması ve yalnızlaştırılmasıdır.",
      "Aile İzolasyonu: Yansıyan damga nedeniyle aileler komşu ziyaretlerini, düğünleri ve sosyal ortamları terk ederek eve kapanabilir.",
      "Sosyal Hizmet Müdahalesi: Akran destek grupları ve aile dayanışma ağları, hem içselleştirilmiş damgayı hem de ailelerin yaşadığı yansıyan damgayı kırmanın en etkili yoludur."
    ],
    practicalTip: "Soruda 'Otizmli çocuğu olan bir annenin komşuların bakışları yüzünden parka gitmekten vazgeçmesi' hangi damga türüdür derse: Yansıyan (İlişkisel / Courtesy) Damga!",
    examClue: "Mert vakasında Mert'in kaza sonrası 'Ben artık yarım insanım, kimseye faydam olmaz' demesi İçselleştirilmiş Sağlamcılığın (İçselleştirilmiş Damga) klasik örneğidir.",
    keepInMind: "Kişinin Önyargıyı Benimseyip Kendini Değersiz Görmesi = İçselleştirilmiş Damga | Ailenin de Dışlanması = Yansıyan (İlişkisel) Damga.",
    aiPromptSuggestion: "İçselleştirilmiş damga ile ailelerin yaşadığı yansıyan (ilişkisel) damgayı örneklerle açıklar mısın?",
    visualSchema: {
      title: "Görsel Şema · Damganın İki Yönlü Yayılımı",
      items: [
        { icon: "🪞", label: "İçe Yayılım", highlight: "İçselleştirilmiş Damga", detail: "Birey toplumun önyargısına inanır: 'Ben yüküm, hiçbir işe yaramam'", color: "rose" },
        { icon: "👨‍👩‍👧", label: "Aileye Yayılım", highlight: "Yansıyan (Courtesy) Damga", detail: "Anne, baba ve kardeşler de çevrenin suçlayıcı bakışlarına maruz kalır", color: "amber" },
        { icon: "🤝", label: "Çözüm Anahtarı", highlight: "Akran & Aile Grupları", detail: "Ortak deneyim paylaşımı utancı kırar ve hak bilincini güçlendirir", color: "emerald" }
      ]
    }
  },
  {
    id: "u2-t6",
    unitId: "unit-2",
    title: "Ekolojik Sistemler Kuramı 1 (Bronfenbrenner): Mikro ve Mezosistem",
    subtitle: "Bireyin en yakın çevresi ve kurumlar arası iletişim ağı",
    eli5: "Bronfenbrenner der ki: 'Bir çocuğu anlamak için sadece çocuğa bakmak yetmez, içinde yaşadığı çevrelere bakmalısın.' Çocuğun her gün yüz yüze olduğu ailesi, okulu ve arkadaşları 'Mikrosistem'dir. Annesinin okuldaki öğretmeniyle veya rehabilitasyon merkeziyle yaptığı toplantı ve işbirliği ise iki mikrosistemi birbirine bağlayan 'Mezosistem'dir!",
    bulletPoints: [
      "Mikrosistem: Bireyin doğrudan, yüz yüze ve günlük olarak etkileşimde bulunduğu en yakın çevredir (Aile, sınıf, akran grubu, rehabilitasyon merkezi).",
      "Mikrosistemde Risk ve Koruyucu Faktör: Ailenin aşırı koruyucu veya reddedici olması risktir; destekleyici ve özerkliği teşvik eden aile ise koruyucu faktördür.",
      "Mezosistem: İki veya daha fazla mikrosistem arasındaki ilişkiler ve bağlantılar ağıdır (Örn: Aile-Okul iletişimi, Hastane-Rehabilitasyon merkezi koordinasyonu).",
      "Mezosistem Müdahalesi: Sosyal hizmet uzmanının okul rehberlik servisi ile aileyi bir araya getirerek çocuk için ortak BEP (Bireyselleştirilmiş Eğitim Programı) toplantısı düzenlemesi doğrudan Mezosistem müdahalesidir."
    ],
    practicalTip: "Altın kural: Tek bir yakın ortam varsa (sadece aile veya sadece okul) = MİKROSİSTEM. İki yakın ortam birbiriyle konuşuyorsa (Aile <-> Okul işbirliği) = MEZOSİSTEM!",
    examClue: "Sınavda en çok 'Okul ile ailenin iletişim kopukluğu hangi sistem düzeyindeki sorundur?' diye sorulur -> Cevap: Mezosistem!",
    keepInMind: "Mikrosistem = Bireyin Doğrudan İçinde Olduğu Aile/Okul | Mezosistem = İki Mikrosistemin İlişkisi (Aile ↔ Okul İşbirliği).",
    aiPromptSuggestion: "Bronfenbrenner'in Mikrosistem ve Mezosistem kavramlarını sınavda hiç karıştırmamak için örneklerle anlatır mısın?"
  },
  {
    id: "u2-t7",
    unitId: "unit-2",
    title: "Ekolojik Sistemler Kuramı 2: Ekzosistem, Makrosistem ve Kronosistem",
    subtitle: "Dolaylı çevre, kültürel/yasal yapı ve zaman boyutu",
    eli5: "Engelli çocuk belediye meclisinde veya babasının çalıştığı fabrikada bizzat bulunmaz; ama babasının patronu babaya izin vermezse çocuk doktora gidemez! İşte çocuğun içinde olmadığı ama hayatını etkileyen bu yer 'Ekzosistem'dir. Ülkenin yasaları ve sağlamcı kültür 'Makrosistem', çocuğun büyümesi ve yıllar içindeki tarihsel değişimler ise 'Kronosistem'dir.",
    bulletPoints: [
      "Ekzosistem: Bireyin doğrudan içinde yer almadığı ancak orada alınan kararlardan dolaylı olarak etkilendiği sistemdir (Ebeveynin işyeri koşulları, belediye ulaşım daire başkanlığı, yerel hizmet ağları).",
      "Makrosistem: Toplumun en geniş kültürel değerleri, inançları, ekonomik yapısı, ulusal yasalar (5378 sayılı Kanun) ve sağlamcılık (ableism) ideolojisidir.",
      "Kronosistem: Yaşam boyu gerçekleşen geçişler (çocukluktan yetişkinliğe geçiş, ebeveynin yaşlanması) ve tarihsel-toplumsal dönüşümlerdir (örn. 2006 BM Sözleşmesi öncesi ve sonrası dönem).",
      "Çevresi İçinde Birey (Person-in-Environment): Ekolojik kuram sosyal hizmetin 'çevresi içinde birey' ilkesinin ana omurgasıdır; sorunu sadece bireye yıkmaz."
    ],
    practicalTip: "Soruda 'Bireyin doğrudan içinde bulunmadığı ama dolaylı etkilendiği belediye kararları ve ebeveynin işyeri' geçiyorsa cevap %100 EKZOSİSTEM! 'Mevzuat, kültür ve ableism' geçiyorsa MAKROSİSTEM!",
    examClue: "Yaşlanan ebeveynlerin 'Biz öldükten sonra engelli çocuğumuza kim bakacak?' kaygısı zaman ve yaşam döngüsüyle ilgili olduğu için KRONOSİSTEM boyutuyla doğrudan ilişkilidir.",
    keepInMind: "Ekzo = Birey İçinde Yok Ama Etkilenir (Belediye/Baba İşyeri) | Makro = Yasa/Kültür/Ableism | Krono = Zaman ve Yaşam Geçişleri.",
    aiPromptSuggestion: "Ekzosistem, Makrosistem ve Kronosistemi karıştırmamak için tek bir tablo halinde örnekler misin?",
    visualSchema: {
      title: "Görsel Ayrım · Ekzo, Makro ve Kronosistem Şifreleri",
      items: [
        { icon: "🏢", label: "Ekzosistem", highlight: "Birey İçinde Yok!", detail: "Anne-babanın işyeri izinleri, belediye ulaşım müdürlüğü kararları", color: "purple" },
        { icon: "🏛️", label: "Makrosistem", highlight: "Yasa, Kültür & Ableism", detail: "Ulusal mevzuat (5378), toplumsal değerler ve sağlamcılık ideolojisi", color: "blue" },
        { icon: "⏳", label: "Kronosistem", highlight: "Zaman & Geçişler", detail: "Okuldan işe geçiş, ebeveynlerin yaşlanması ve tarihsel değişimler", color: "emerald" }
      ]
    }
  },
  {
    id: "u2-t8",
    unitId: "unit-2",
    title: "Feminist Engellilik Kuramı (Rosemarie Garland-Thomson)",
    subtitle: "Toplumsal cinsiyet, beden politikaları ve çifte dezavantaj",
    eli5: "Rosemarie Garland-Thomson'ın öncülük ettiği Feminist Engellilik Kuramı der ki: 'Klasik engellilik çalışmaları engelliyi cinsiyetsiz gibi anlattı, klasik feminizm ise hep sağlam kadınları anlattı; peki engelli kadınlar ne olacak?' Engelli kadınlar toplumda hem kadın oldukları için hem de engelli oldukları için çifte ayrımcılığa uğrar ve 'anne/eş olamaz, cinsiyetsizdir' önyargısıyla karşılaşır.",
    bulletPoints: [
      "Öncüsü: Rosemarie Garland-Thomson ('Integrating Disability, Transforming Feminist Theory').",
      "Temel Eleştirisi: Hem geleneksel feminizmin sağlam bedenli kadınları norm almasını hem de klasik engellilik çalışmalarının toplumsal cinsiyeti görmezden gelmesini eleştirir.",
      "Engelli Kadınların Deneyimi: Engelli kadınlar bir yandan güzellik/beden normları dışına itilirken, diğer yandan 'aseksüel (cinsiyetsiz), çocuk bakamaz, pasif' olarak kodlanır.",
      "Şiddet ve İstismar Riski: Engelli kadın ve kız çocukları, ev içinde ve kurumlarda fiziksel, duygusal ve ekonomik şiddete sağlam akranlarına göre çok daha yüksek oranda maruz kalmaktadır (CRPD Madde 6)."
    ],
    practicalTip: "Soruda 'Rosemarie Garland-Thomson', 'Engellilik ve toplumsal cinsiyetin birlikte analizi' veya 'Engelli kadınların cinsiyetsizleştirilmesi eleştirisi' geçiyorsa cevap Feminist Engellilik Kuramıdır!",
    examClue: "Feminist Engellilik Kuramı, kadın bedenini ve engelli bedeni tarih boyunca 'eksik/kusurlu beden' olarak tanımlayan ataerkil ve sağlamcı tıbbi söylemi birlikte sorgular.",
    keepInMind: "Feminist Engellilik Kuramı (Garland-Thomson) = Toplumsal Cinsiyet + Beden Politikası + Engelli Kadınların Özneleşmesi.",
    aiPromptSuggestion: "Rosemarie Garland-Thomson'ın Feminist Engellilik Kuramını ve engelli kadınların yaşadığı özgül sorunları anlatır mısın?"
  },
  {
    id: "u2-t9",
    unitId: "unit-2",
    title: "Bakım Etiği, Görünmeyen Kadın Emeği ve 'Karşılıklı Bağımlılık'",
    subtitle: "Bağımsızlık mitinin eleştirisi ve bakım verenin 'fedakâr anne' tuzağı",
    eli5: "Toplumda 'İyi insan kimseye muhtaç olmayan, her işini tek başına yapan insandır' diye yanlış bir efsane vardır. Feminist bakım etiği der ki: 'Hayır! Bebekken, hastayken, yaşlıyken hepimiz birbirimize bağımlıyız; buna Karşılıklı Bağımlılık (Interdependence) denir.' Ayrıca evde engelli bakımının 'Sen fedakâr annesin' denilerek sadece kadınların sırtına yüklenip karşılıksız sömürülmesine karşı çıkar.",
    bulletPoints: [
      "Karşılıklı Bağımlılık (Interdependence - Eva Feder Kittay): Özerklik, hiç kimseye ihtiyaç duymamak değildir; tüm insanlar yaşam boyu karşılıklı bağımlılık ağları içinde yaşar.",
      "Görünmeyen Bakım Emeği: Türkiye'de ve dünyada evde bakım yükünün büyük çoğunluğu kadınlar (anneler, eşler, kız kardeşler) tarafından üstlenilmektedir.",
      "'Fedakâr Anne' İdealleştirmesi Eleştirisi: Bakım veren kadının 'kutsal/fedakâr' ilan edilmesi, devletin kurumsal destek sorumluluğunu gizler ve kadını sosyal hayattan, istihdamdan ve dinlenmeden koparır.",
      "İkili Özne Korunması: Sosyal hizmette hem bakım verenin emeği ve dinlenme hakkı savunulmalı, hem de bakım alan engelli bireyin kendi hayatı üzerindeki söz hakkı (özerkliği) korunmalıdır."
    ],
    practicalTip: "Soruda 'Özerkliğin bağımlılığın karşıtı olmadığını, tüm insanların karşılıklı bağımlılık içinde yaşadığını ve bakım verenin fedakâr olarak idealize edilmesinin kadın emeğini görünmez kıldığını savunan yaklaşım' sorulursa cevap: Feminist Engellilik Kuramı / Bakım Etiği!",
    examClue: "Bakım ilişkisinde iki tuzaktan kaçınılır: 1) Bakım veren kadını tükenmişliğe terk etmek, 2) Bakım vereni dinlerken engelli bireyi 'konuşulan nesne' haline getirip susturmak.",
    keepInMind: "Karşılıklı Bağımlılık = Kimse Tamamen Bağımsız Değildir | Fedakârlık Söylemi = Kadın Bakım Emeğini Görünmez Kılar.",
    aiPromptSuggestion: "Feminist kuramdaki 'Karşılıklı Bağımlılık' (Interdependence) kavramını ve bakım emeğinin neden politik bir konu olduğunu anlatır mısın?",
    visualSchema: {
      title: "Görsel Şema · Feminist Bakım Etiği ve İki Tarafın Güçlendirilmesi",
      items: [
        { icon: "👩‍👧", label: "Görünmeyen Emek", highlight: "Fedakârlık Tuzağı", detail: "'Kutsal anne' söylemiyle bakım yükünün sadece kadına yıkılması eleştirilir", color: "purple" },
        { icon: "🔄", label: "Karşılıklı Bağımlılık", highlight: "Interdependence", detail: "Bağımsızlık tek başına kalmak değil, destekle kendi kararını vermektir", color: "blue" },
        { icon: "⚖️", label: "Sosyal Hizmet Dengesi", highlight: "İki Özneyi de Koru!", detail: "Bakım verene mola/destek sağla, engelli bireyin de özerkliğini koru", color: "emerald" }
      ]
    }
  },
  {
    id: "u2-t10",
    unitId: "unit-2",
    title: "Kesişimsellik Kuramı (Intersectionality - Kimberlé Crenshaw)",
    subtitle: "Engellilik + Cinsiyet + Sınıf + Yaş + Göçmenlik nasıl özgül bir deneyim üretir?",
    eli5: "Hukukçu Kimberlé Crenshaw (1989) Kesişimselliği bir trafik kavşağına benzetir: Bir kavşakta hem 'Yoksulluk' caddesinden, hem 'Mültecilik' caddesinden, hem 'Kadınlık' hem de 'Engellilik' caddesinden gelen araçlar çarpışırsa, ortadaki kişinin yaşadığı kaza tek bir caddeyle açıklanamaz! Yani zengin, kentli, genç engelli bir erkek ile yoksul, kırsalda yaşayan, mülteci, yaşlı engelli bir kadının sorunu aynı değildir.",
    bulletPoints: [
      "Öncüsü: Kimberlé Crenshaw (1989) tarafından siyah kadınların yaşadığı çoklu ayrımcılığı açıklamak için geliştirilmiş, engellilik çalışmalarına uyarlanmıştır.",
      "Matematiksel Toplam Değildir: Kesişimsellik 'Engellilik + Kadınlık + Yoksulluk = 3 kat sorun' gibi basit bir toplama işlemi DEĞİLDİR; bu kimliklerin kesişimi bambaşka ve ÖZGÜL (kendine has) bir deneyim üretir.",
      "Homojenlik Yanılgısının Reddi: 'Engelliler' tek tip (homojen) bir grup değildir; sınıf, yaş, toplumsal cinsiyet, etnisite, coğrafya ve cinsel yönelim deneyimi kökten değiştirir.",
      "Sosyal Hizmet Uygulaması: Standart/tek tip paket hizmet yerine, müracaatçının kesişen konumlarına (örn. dil bilmeyen mülteci engelli çocuk) duyarlı vaka planlaması yapılmalıdır."
    ],
    practicalTip: "Soruda 'Kimberlé Crenshaw', 'Engellilerin homojen bir grup olmaması', 'Basit bir dezavantajlar toplamı değil özgül deneyim üretmesi' geçiyorsa cevap %100 Kesişimsellik (Intersectionality)!",
    examClue: "Slayttaki 'Heteronormativite' kavramı da bu başlık altındadır: Heteroseksüelliğin toplumun tek doğal ve normal yönelimi kabul edilip diğerlerinin sapma görülmesidir.",
    keepInMind: "Kesişimsellik (Crenshaw) = Çoklu Kimlikler (Engel + Sınıf + Cinsiyet + Göç) + Homojen Grup Değildir + Özgül Deneyim.",
    aiPromptSuggestion: "Kimberlé Crenshaw'ın Kesişimsellik (Intersectionality) kuramını iki farklı engelli birey örneği üzerinden karşılaştırarak anlatır mısın?",
    visualSchema: {
      title: "Görsel Kavşak · Kesişimsellik (Kimberlé Crenshaw)",
      items: [
        { icon: "🔀", label: "Kesişen Eksenler", highlight: "Engel + Sınıf + Cinsiyet", detail: "Yaş, yoksulluk, göçmenlik, kırsal yaşam ve cinsiyet üst üste biner", color: "rose" },
        { icon: "🧬", label: "Özgül Deneyim", highlight: "Basit Toplama Değil!", detail: "Dezavantajlar sadece toplanmaz, nitelik olarak bambaşka bir engel yaratır", color: "purple" },
        { icon: "🎯", label: "Vaka Değerlendirmesi", highlight: "Tek Tip Hizmet Yetmez", detail: "Kentli zengin engelli ile kırsaldaki mülteci engelli kadının ihtiyacı farklıdır", color: "blue" }
      ]
    }
  },
  {
    id: "u2-t11",
    unitId: "unit-2",
    title: "Eleştirel Engellilik Çalışmaları (Goodley) ve Sağlamcılık (Ableism)",
    subtitle: "Sorunu engellide değil, 'kusursuz ve verimli insan' dayatan sağlamcılıkta aramak",
    eli5: "Irkçılık bir ırkı üstün görür, cinsiyetçilik bir cinsiyeti üstün görür; 'Sağlamcılık (Ableism)' ise sağlam, hızlı, yorulmayan ve bağımsız bedeni 'tam insan' sayıp engelli bedeni 'eksik/kusurlu' sayan ayrımcı ideolojidir! Dan Goodley ve Eleştirel Engellilik Çalışmaları der ki: 'Engelliliğe acımayı bırakın, asıl toplumun bu sağlamcılık takıntısını sorgulayın!'",
    bulletPoints: [
      "Sağlamcılık (Ableism - Fiona Kumari Campbell & Dan Goodley): Sağlam, özerk, üretken ve standart bedeni 'ideal insan normu' kabul eden; engelliliği ise doğası gereği olumsuz ve düzeltilmesi gereken bir eksiklik olarak gören inanç ve pratikler ağıdır.",
      "Eleştirel Engellilik Çalışmaları (Critical Disability Studies - CDS): Klasik sosyal modelin ötesine geçerek kültür, dil, psikoloji, ekonomi ve biyo-iktidarın 'normallik ideolojisini' nasıl ürettiğini inceler.",
      "Kurumsal Sorgulama: Sosyal hizmet kurumlarının 'uyumlu, itaatkâr, ideal müracaatçı' beklentilerini ve bürokratik güç ilişkilerini eleştirir.",
      "Sağlamcılığın Dili: 'Gözleri görmüyor ama maşallah çok zeki', 'Özürlü', 'Yatalak' gibi günlük ifadeler sağlamcı ideolojinin dildeki yansımalarıdır."
    ],
    practicalTip: "Soruda 'Ableism (Sağlamcılık)', 'Normallik ideolojisinin sorgulanması', 'Dan Goodley' veya 'İdeal/standart beden dayatmasının eleştirisi' geçiyorsa cevap Eleştirel Engellilik Çalışmalarıdır!",
    examClue: "Disablism (engelli ayrımcılığı) doğrudan engelli bireye yapılan kötü muameleye odaklanırken; Ableism (sağlamcılık) sağlam bedeni ayrıcalıklı kılan tüm toplumsal/mimari/kültürel sistemi ifade eder.",
    keepInMind: "Sağlamcılık (Ableism) = Sağlam Bedeni Üstün ve Standart İnsan Normu Sayan İdeoloji | Eleştirel Çalışmalar (Goodley) = Normallik İdeolojisini Yıkar.",
    aiPromptSuggestion: "Sağlamcılık (Ableism) nedir ve günlük hayatta fark etmeden yaptığımız sağlamcı davranışlar nelerdir?",
    visualSchema: {
      title: "Görsel Analiz · Sağlamcılık (Ableism) Buzdağı",
      items: [
        { icon: "🏆", label: "Normallik İdeolojisi", highlight: "İdeal Beden Miti", detail: "Hızlı, yorulmayan, standart ve bağımsız bedeni 'tek normal' sayar", color: "amber" },
        { icon: "🏛️", label: "Kurumsal Sağlamcılık", highlight: "Standart Tasarım", detail: "Okulları, sınavları ve işyerlerini sadece sağlam bedenlere göre kurar", color: "rose" },
        { icon: "🔍", label: "Eleştirel Bakış (CDS)", highlight: "Bakışı Tersine Çevir!", detail: "'Engelli neden uyum sağlayamıyor?' değil, 'Kurum neden sağlamcı?' diye sorar", color: "blue" }
      ]
    }
  },
  {
    id: "u2-t12",
    unitId: "unit-2",
    title: "Crip (Sakat) Teorisi (Robert McRuer) ve 'Zorunlu Engelsizlik'",
    subtitle: "Engellilik çalışmaları ile Queer teorinin birleşimi ve politik direniş",
    eli5: "İngilizcede 'Crip' (Türkçede 'Sakat'), eskiden engellileri aşağılamak için kullanılan bir hakaret kelimesiydi. Tıpkı LGBT+ hareketinin 'Queer' kelimesini sahiplenmesi gibi, engelli aktivistler de 'Evet sakatız ve bundan utanmıyoruz, sizin normal kalıplarınıza girmeyeceğiz!' diyerek bu kelimeyi politik bir gurur bayrağına dönüştürdü. Robert McRuer (2006) buna Crip Teorisi adını verdi.",
    bulletPoints: [
      "Öncüsü: Robert McRuer ('Crip Theory: Cultural Signs of Queerness and Disability', 2006).",
      "Teorik Kökeni: Eleştirel engellilik çalışmaları ile Queer Teorinin (Judith Butler, Adrienne Rich) kesişiminden doğmuştur.",
      "Zorunlu Engelsizlik (Compulsory Able-Bodiedness): Toplumun herkesi sağlam, verimli ve normatif bedene sahip olmaya zorlamasını; sakatlığı ise 'trajedi' olarak kodlamasını eleştirir.",
      "Asimilasyon Eleştirisi: Engelli bireylerin 'Bakın ben de tıpkı sağlamlar gibiyim, engelim hiç belli olmuyor' diyerek normallik kalıbına girmeye zorlanmasına karşı çıkar; farklılığı ve 'Crip zamanı' (esnek hızı) savunur."
    ],
    practicalTip: "Soruda 'Robert McRuer', 'Queer teori ile engellilik çalışmalarının birleşimi', 'Zorunlu engelsizlik (Compulsory able-bodiedness)' veya 'Aşağılayıcı sakat/crip kelimesinin politik direniş olarak sahiplenilmesi' geçiyorsa cevap Crip Teorisidir!",
    examClue: "Crip Teorisi, neoliberalizmin engellileri sadece 'tüketici veya vitrinlik başarı hikayesi' olarak göstermesini de sert biçimde eleştirir.",
    keepInMind: "Crip Teorisi (McRuer, 2006) = Queer Teori + Zorunlu Engelsizlik Eleştirisi + 'Sakat/Crip' Kelimesinin Politik Sahiplenilmesi.",
    aiPromptSuggestion: "Robert McRuer'in Crip Teorisini ve 'Zorunlu Engelsizlik' kavramını hiç bilmeyen birine anlatır mısın?"
  },
  {
    id: "u2-t13",
    unitId: "unit-2",
    title: "Bedenleşme (Embodiment) ve Yaşantı Temelli Yaklaşımlar",
    subtitle: "Sosyal modelin unuttuğu ağrı, yorgunluk, kırılganlık ve mahremiyet",
    eli5: "Klasik Sosyal Model 'Bütün sorun kaldırımda ve rampada, beden tamamen önemsiz' diyordu. Ama MS hastası, omurilik felçli veya kronik ağrısı olan insanlar itiraz etti: 'Belediye dünyanın en güzel rampasını yapsa bile benim sabah yataktan kalkamayacak kadar şiddetli nöropatik ağrım ve yorgunluğum var! Bedenimi yok saymayın!' İşte bu yaklaşıma Bedenleşme (Embodiment) denir.",
    bulletPoints: [
      "Temel İddiası: Engellilik ne sadece tıbbi bir patolojidir (Tıbbi model hatası), ne de sadece dışsal mimari engellerden ibarettir (Katı sosyal modelin eksikliği); aynı zamanda bedensel olarak YAŞANAN bir deneyimdir.",
      "Merkezdeki Kavramlar: Kronik ağrı, tükenmişlik/yorgunluk (fatigue), kırılganlık, beden algısı, yaşlanma ve bedensel mahremiyet.",
      "'Rampa Her Şeyi Çözmez' Eleştirisi: Çevresel bariyerler kaldırıldığında tüm sorunların biteceği varsayımını aşırı basitleştirici bulur.",
      "Sosyal Hizmete Katkısı: Uzman müracaatçıyla görüşürken onun ağrısını, ilaç yan etkilerini, tuvalet/banyo mahremiyetini ve günlük enerji sınırlarını (kaşık teorisi) dikkate alarak planlama yapar."
    ],
    practicalTip: "Soruda 'Ağrı, yorgunluk, mahremiyet, kırılganlık' ve 'Çevresel bariyer kalktıysa her sorun çözülmüştür anlayışına eleştiri' geçiyorsa cevap Bedenleşme ve Yaşantı Temelli Yaklaşımdır!",
    examClue: "Bu yaklaşımın öncü isimleri arasında Tom Shakespeare, Carol Thomas ve Jenny Morris yer alır ('Kişisel olan politiktir' ilkesini bedensel deneyime taşırlar).",
    keepInMind: "Bedenleşme (Embodiment) = Rampa Tek Başına Yetmez + Ağrı, Yorgunluk, Kırılganlık ve Mahremiyet Deneyimi.",
    aiPromptSuggestion: "Bedenleşme (Embodiment) yaklaşımının Sosyal Modeli nasıl tamamladığını ve 'ağrı/yorgunluk' boyutunu örneklerle anlatır mısın?",
    visualSchema: {
      title: "Görsel Sentez · Bedenleşme (Embodiment) Yaklaşımı",
      items: [
        { icon: "🩺", label: "Tıbbi Model Hatası", highlight: "Sadece Hastalık Görür", detail: "Kişiyi sadece bozuk organa indirger, toplumu yok sayar", color: "amber" },
        { icon: "🏗️", label: "Katı Sosyal Model", highlight: "Sadece Rampa Görür", detail: "Dış engellere odaklanırken kişinin çektiği gerçek ağrıyı unutur", color: "blue" },
        { icon: "🫀", label: "Bedenleşme (Sentez)", highlight: "İçeriden Yaşanan Beden", detail: "Hem çevresel hakkı savunur hem de ağrı, yorgunluk ve mahremiyeti dinler", color: "emerald" }
      ]
    }
  },
  {
    id: "u2-t14",
    unitId: "unit-2",
    title: "Michel Foucault: Biyo-İktidar, Tıbbi Bakış ve Bedenin Disiplini",
    subtitle: "Modern devlet, hastaneler ve istatistikler 'normal insanı' nasıl denetler?",
    eli5: "Ünlü düşünür Michel Foucault der ki: Modern devlet insanları kırbaçla değil; hastaneler, okullar, IQ testleri ve sağlık kurulu raporlarıyla yönetir. Buna 'Biyo-İktidar' denir. Doktorların, psikologların ve uzmanların insanları ölçüp 'Sen %40 özürlüsün, sen normal değilsin, özel sınıfa git' diye sınıflandırması masum bir bilim değil, bedenleri hizaya sokan bir iktidar tekniğidir!",
    bulletPoints: [
      "Tıbbi Bakış (Medical Gaze): Doktorun karşısındaki insanı hikayesi olan bir özne olarak değil, incelenecek bir organ/semptom nesnesi olarak görmesidir.",
      "Biyo-İktidar ve Biyo-Politika: Modern devletin nüfusun sağlığını, doğurganlığını, verimliliğini ve 'normalliğini' istatistikler ve kurumlar aracılığıyla denetlemesidir.",
      "Gözetim ve Normalleştirici Yargı: Okullar, hastaneler ve rehabilitasyon kurumları bireyleri sürekli ölçer (IQ testi, gelişim eğrisi), karşılaştırır ve ortalamadan sapanları 'anormal' olarak işaretler.",
      "Sosyal Hizmette Öz-Düşünümsellik: Sosyal hizmet uzmanı da rapor yazarken ve ev incelemesi yaparken 'yardım eden uzman' maskesi altında müracaatçının hayatını denetleyen bir iktidar aracına dönüşmemeye dikkat etmelidir!"
    ],
    practicalTip: "Soruda 'Michel Foucault', 'Biyo-iktidar / Biyo-politika', 'Tıbbi bakış (Medical gaze)' veya 'Uzman bilgisinin ve istatistiklerin bedenleri sınıflandırıp denetlemesi' geçiyorsa cevap Foucaultcu / Post-yapısalcı yaklaşımdır!",
    examClue: "Foucault'ya göre 'bilgi ve iktidar' (iktidar/bilgi) birbirinden ayrılamaz; bir kişiyi 'eğitilebilir/eğitilemez' diye sınıflandıran bilimsel tanı aynı zamanda onun üzerinde kurulan bir iktidardır.",
    keepInMind: "Michel Foucault = Biyo-İktidar + Tıbbi Bakış (Medical Gaze) + Uzman Bilgisinin ve Kurumların Bedenleri Sınıflandırıp Denetlemesi.",
    aiPromptSuggestion: "Michel Foucault'nun 'Biyo-İktidar' ve 'Tıbbi Bakış' kavramlarını engelli sağlık kurulu raporları üzerinden basitçe anlatır mısın?",
    visualSchema: {
      title: "Görsel Şema · Foucault'da Bilgi, İktidar ve Normalleştirme",
      items: [
        { icon: "🔬", label: "Tıbbi Bakış", highlight: "Medical Gaze", detail: "İnsanı hikayesi olan özne değil, incelenen tıbbi vaka/organ olarak görür", color: "blue" },
        { icon: "📊", label: "Biyo-İktidar", highlight: "Ölçüm & İstatistik", detail: "IQ testleri, heyet raporları ve norm eğrileriyle nüfusu sınıflandırır", color: "purple" },
        { icon: "🏛️", label: "Disiplin Kurumları", highlight: "Okul, Hastane, Kurum", detail: "Standart dışı bedenleri gözetler, ıslah etmeye veya ayırmaya çalışır", color: "rose" }
      ]
    }
  },
  {
    id: "u2-t15",
    unitId: "unit-2",
    title: "Güçlendirme (Empowerment) ve Baskı Karşıtı Sosyal Hizmet",
    subtitle: "'Bizim hakkımızda, biz olmadan asla!' ilkesi ve yapısal güç ilişkileri",
    eli5: "Baskı Karşıtı Sosyal Hizmet (Anti-Oppressive Practice) ve Güçlendirme Yaklaşımı tüm bu kuramların sahadaki uygulama halidir. Uzman müracaatçıya 'Ben uzmanım, senin için en doğrusunu ben bilirim' demez; tam tersine müracaatçıyı masanın başköşesine oturtur ve Engelli Hakları Hareketinin ünlü sloganını uygular: 'Bizim hakkımızda, biz olmadan asla! (Nothing about us without us!)'",
    bulletPoints: [
      "Güçlendirme (Empowerment - Barbara Solomon): Damgalanmış ve dışlanmış birey ve grupların, kendi yaşamları üzerinde kontrol kazanması ve öz-yeterliliklerinin desteklenmesi sürecidir.",
      "Baskı Karşıtı Uygulama (Anti-Oppressive Practice - Dominelli & Thompson): Kişisel sorunların kökenindeki yapısal eşitsizlikleri (sağlamcılık, yoksulluk, cinsiyetçilik) hedef alır; uzmanın kendi ayrıcalığını sorgulamasını şart koşar.",
      "'Bizim Hakkımızda, Biz Olmadan Asla!' (Nothing About Us Without Us): Engelli bireyleri ilgilendiren hiçbir yasa, hizmet veya vaka kararının engellilerin doğrudan katılımı olmadan alınmaması ilkesidir.",
      "Güçler Perspektifi (Strengths Perspective - Saleebey): Müracaatçının 'neleri yapamadığına (eksiklerine)' değil, 'yeteneklerine, direncine, kaynaklarına ve hayallerine' odaklanır."
    ],
    practicalTip: "Soruda 'Nothing about us without us (Bizim hakkımızda, biz olmadan asla)', 'Müracaatçının eksikleri yerine kaynaklarına ve direncine odaklanma (Güçler perspektifi)' veya 'Yapısal eşitsizliklerle mücadele' geçiyorsa bu karttaki kavramları hatırla!",
    examClue: "Barbara Solomon (1976), sosyal hizmette 'Güçlendirme (Empowerment)' kavramını sistematik olarak geliştiren öncü kuramcıdır.",
    keepInMind: "Güçlendirme (Solomon) = Kendi Yaşamı Üzerinde Kontrol | Güçler Perspektifi = Eksiklere Değil Potansiyele Bak | Slogan = Bizim Hakkımızda Biz Olmadan Asla!",
    aiPromptSuggestion: "Güçlendirme (Empowerment), Güçler Perspektifi ve Baskı Karşıtı Sosyal Hizmet uygulamasını bir vaka örneğiyle anlatır mısın?",
    visualSchema: {
      title: "Görsel Özet · Modern Sosyal Hizmetin 3 Uygulama Sütunu",
      items: [
        { icon: "⚡", label: "Güçlendirme", highlight: "Barbara Solomon", detail: "Kişinin kendi hayatı ve kararları üzerindeki kontrolünü artırma", color: "amber" },
        { icon: "🌱", label: "Güçler Perspektifi", highlight: "Saleebey", detail: "Rapordaki kayıp yüzdesine değil, kişinin yetenek ve kaynaklarına odaklanma", color: "emerald" },
        { icon: "✊", label: "Baskı Karşıtı Uygulama", highlight: "Biz Olmadan Asla!", detail: "Sağlamcılığa karşı müracaatçıyla eşit ortaklık kurarak hak savunuculuğu yapma", color: "blue" }
      ]
    }
  },
  {
    id: "u2-t16",
    unitId: "unit-2",
    title: "Normalite İdeolojisi ve Lennard Davis: 'Çan Eğrisi' ve İstatistik",
    subtitle: "Modern toplum 'ortalama insanı' nasıl tek norm haline getirdi?",
    eli5: "Lennard Davis çok çarpıcı bir gerçeği gösterir: 'Normal' kelimesi 1840'lara kadar dillerde yoktu! 19. yüzyılda Adolphe Quetelet adlı istatistikçi insanları ölçüp 'ortalama insan (l'homme moyen)' kavramını uydurdu ve çan eğrisini çizdi. Bu çan eğrisinin ortasında kalanlar 'makbul normal', kenarlarda kalanlar ise 'anormal / yetersiz' ilan edildi. Yani engellilik bedenlerin değil, modern istatistiğin ürettiği bir kategoridir.",
    bulletPoints: [
      "Lennard Davis ('Enforcing Normalcy'): 'Normal' kavramının tarihsel ve dilsel kökenini inceler; sanayi toplumu öncesinde insanların ideali 'kusursuz tanrılar/mitoloji' iken, 19. yüzyılda 'ortalama/normal insan' hedeflenmeye başlanmıştır.",
      "Adolphe Quetelet ve Çan Eğrisi (Normal Dağılım): İnsan bedenlerinin ve özelliklerinin istatistiksel ortalaması 'ideal ve ahlaki norm' ilan edilmiştir.",
      "Engelliliğin İnşası: Çan eğrisinin iki ucunda kalan bireyler (engelliler, deliler, norm dışı olanlar) patolojik ilan edilerek 'düzeltilmesi gereken sapmalar' olarak kodlanmıştır.",
      "Sosyal Hizmet Eleştirisi: Müracaatçıları değerlendirirken 'normal gelişim eğrisine ne kadar uyuyor?' baskısı yerine, bireyin kendi özgül ritmine saygı gösterilmelidir."
    ],
    practicalTip: "Soruda 'Lennard Davis', 'Normal kavramının 19. yüzyılda ortaya çıkması', 'Çan eğrisi (Normal dağılım)' veya 'Adolphe Quetelet' geçiyorsa cevap Normalite İdeolojisidir!",
    examClue: "Normalite ideolojisi, sağlamcılığın (ableism) bilimsel ve istatistiksel kılıfıdır.",
    keepInMind: "Lennard Davis = Normalite İdeolojisi + Çan Eğrisi (Quetelet) + Normal Kavramının 19. Yüzyılda Üretilmesi.",
    aiPromptSuggestion: "Lennard Davis'in 'Normalite İdeolojisi' ve çan eğrisi eleştirisini hiç bilmeyen birine anlatır mısın?",
    visualSchema: {
      title: "Görsel Analiz · Normalite İdeolojisi ve Çan Eğrisi",
      items: [
        { icon: "📈", label: "Çan Eğrisi (19. Yüzyıl)", highlight: "Adolphe Quetelet", detail: "İstatistiksel ortalama insan uydurulup 'tek doğru model' ilan edildi", color: "amber" },
        { icon: "🏷️", label: "Sapma Olarak Engel", highlight: "Lennard Davis", detail: "Ortalamanın dışında kalan her beden 'anormal ve eksik' olarak kodlandı", color: "rose" },
        { icon: "🔓", label: "Eleştirel Çözüm", highlight: "Çeşitliliği Kucakla", detail: "İnsanı tek bir çan eğrisi standardına zorlamaktan vazgeçmek", color: "blue" }
      ]
    }
  },
  {
    id: "u2-t17",
    unitId: "unit-2",
    title: "Medikalizasyon (Tıbbileştirme) ve İatrojenez (Ivan Illich)",
    subtitle: "Toplumsal ve mimari sorunların 'bireysel hastalık' haline getirilmesi",
    eli5: "Tıbbileştirme (Medikalizasyon); yoksulluk, adaletsizlik veya mimari engeller gibi sosyal sorunların 'tıbbın alanıymış gibi' gösterilip hapla, ameliyatla çözülmeye çalışılmasıdır. Ivan Illich ise 'İatrojenez (tıbbın yarattığı zarar)' kavramıyla uyarır: Tıp bazen insanları iyileştirmek yerine bağımlı hale getirir ve toplumsal mücadeleyi bastırır.",
    bulletPoints: [
      "Medikalizasyon (Tıbbileştirme): Yaşamın doğal evrelerinin (yaşlanma, üzüntü, beden farklılıkları) ve toplumsal engellerin tıbbi hastalık/tanı kategorilerine dönüştürülmesidir.",
      "İatrojenez (Ivan Illich - 'Sağlığın Gaspı'): Tıbbın bizzat kendisinin ürettiği zararlardır (Klinik, Sosyal ve Kültürel iatrojenez).",
      "Kültürel İatrojenez: İnsanların kendi acıları, kırılganlıkları ve yaşam zorluklarıyla baş etme kültürel becerilerini kaybedip tamamen tıp uzmanlarına bağımlı hale gelmesidir.",
      "Sosyal Hizmet Direnci: Sosyal hizmet uzmanı müracaatçının sorununu 'ilaç dozu artırılsın' diye geçiştirmek yerine, ortamdaki çevresel ve ilişkisel engelleri çözmeye odaklanır."
    ],
    practicalTip: "Soruda 'Ivan Illich', 'İatrojenez (tıbbın zararı)' veya 'Sosyal/mimari sorunların tıbbi tanı ve ilaçla çözülmeye çalışılması (Tıbbileştirme)' geçiyorsa bu kartı hatırla!",
    examClue: "Tıbbileştirme, iktidarların yapısal eşitsizlikleri gizlemek için kullandığı en yaygın tekniktir (örn. asansör yapmayıp engelliye 'depresyondasın, antidepresan iç' demek).",
    keepInMind: "Medikalizasyon = Sosyal Sorunu Hastalık Sayma | İatrojenez (Ivan Illich) = Tıbbın Yarattığı Zarar ve Bağımlılık.",
    aiPromptSuggestion: "Tıbbileştirme (Medikalizasyon) ve Ivan Illich'in İatrojenez kavramını engellilik alanı üzerinden örneklerle anlatır mısın?",
    visualSchema: {
      title: "Görsel Şema · Tıbbileştirme (Medikalizasyon) Çarkı",
      items: [
        { icon: "🚧", label: "Sosyal / Mimari Sorun", highlight: "Rampasız Bina / Dışlanma", detail: "Birey dışarı çıkamadığı için mutsuz ve yalnız kalır", color: "blue" },
        { icon: "💊", label: "Tıbbileştirme", highlight: "Hastalık Etiketi", detail: "Rampa yapmak yerine bireye 'ağır depresyon' teşhisi konur", color: "amber" },
        { icon: "⚠️", label: "İatrojenez (Illich)", highlight: "Uzman Bağımlılığı", detail: "Toplumsal değişim yerine birey pasif tedavi tüketicisi yapılır", color: "rose" }
      ]
    }
  },
  {
    id: "u2-t18",
    unitId: "unit-2",
    title: "Engelli Kimliği Gelişimi ve Forber-Pratt Modeli",
    subtitle: "Kabullenme, aidiyet ve kolektif engelli kimliğine geçiş adımları",
    eli5: "Bir birey sonradan engelli olduğunda veya büyüdüğünde pat diye hak savunucusu olmaz; aşamalı bir kimlik yolculuğundan geçer: Önce durumunu kabullenmeye çalışır, sonra diğer engellilerle tanışıp ortak deneyimi fark eder (kolektif kimlik), ardından haklarını savunmaya başlar ve en sonunda engelliliğini kişiliğinin doğal, zenginleştirici bir parçası olarak bütünleştirir.",
    bulletPoints: [
      "Bireysel vs Sosyal Kimlik: Engellilik yalnızca tıbbi bir rapor değil, aynı zamanda paylaşılan bir kültür, tarih ve sosyal kimliktir.",
      "Forber-Pratt Engelli Kimliği Modeli (4 Statü/Aşama): 1) Kabullenme (Kişinin durumunu tanıması), 2) İlişkilenme / Bağ Kurma (Diğer engelli akranlarla temas ve izolasyondan çıkış), 3) Kolektif Kimlik / Dayanışma (Engelliler topluluğunun bir parçası olduğunu hissetme), 4) Bütünleşme / Savunuculuk (Engelli kimliğini gururla benimseyip hak savunuculuğu yapma).",
      "Akran Danışmanlığının Gücü: Bir omurilik felçli için en dönüştürücü destek, aynı durumu yaşamış deneyimli bir akranıyla (peer mentor) sohbet etmektir.",
      "Sosyal Hizmet Rolü: Uzman müracaatçıyı sadece pasif hizmet alıcısı olarak tutmaz; onu dernekler, spor kulüpleri ve akran gruplarıyla buluşturarak kimlik gelişimini destekler."
    ],
    practicalTip: "Soruda 'Engelli bireyin kendi engelini kabullenip diğer engellilerle dayanışma içine girerek hak savunuculuğu geliştirmesi süreci' sorulursa: Engelli Kimliği Gelişimi!",
    examClue: "Mert vakasında Mert'in Omurilik Felçlileri Derneği'ndeki akran grubuyla buluşturulması doğrudan 'İlişkilenme ve Kolektif Kimlik' aşamasını tetikler.",
    keepInMind: "Engelli Kimliği Gelişimi = Bireysel Tanıdan Kolektif Hak Bilincine ve Gurura Geçiş Yolculuğu.",
    aiPromptSuggestion: "Engelli kimliği gelişim aşamalarını ve akran desteğinin bu süreçteki kritik rolünü açıklar mısın?",
    visualSchema: {
      title: "Görsel Merdiven · Engelli Kimliği Gelişim Basamakları",
      items: [
        { icon: "🌱", label: "1. Kabullenme", highlight: "Bireysel Farkındalık", detail: "Durumu inkar etmeyi bırakıp yeni beden gerçekliğiyle yüzleşme", color: "amber" },
        { icon: "🤝", label: "2. Akran Teması", highlight: "Kolektif Aidiyet", detail: "Diğer engellilerle tanışıp 'Yalnız değilmişim' duygusunu yaşama", color: "blue" },
        { icon: "✊", label: "3. Hak Savunuculuğu", highlight: "Bütünleşmiş Kimlik", detail: "Engelliliği bir utanç değil, gururlu bir kimlik ve hak mücadelesi görme", color: "emerald" }
      ]
    }
  },
  {
    id: "u2-t19",
    unitId: "unit-2",
    title: "Mikro-Saldırılar (Microaggressions) ve İyiliksever Sağlamcılık",
    subtitle: "'Kıyamam sana', 'Çok cesursun' gibi görünürde sevimli gizli ayrımcılıklar",
    eli5: "Ayrımcılık her zaman küfür veya hakaretle olmaz; bazen en tatlı gülümsemeyle yapılır! Sokakta tek başına yürüyen engelliye 'Ayy maşallah ne kadar cesursun, evde oturmayıp çıkmışsın' demek ya da otobüste omzunu okşayıp 'Kıyamam sana' demek 'Mikro-Saldırı' ve 'İyiliksever Sağlamcılık'tır. Kişiyi çocuklaştırır (infantilize eder) ve eşit bir yetişkin olarak görmez.",
    bulletPoints: [
      "Engelliliğe Yönelik Mikro-Saldırılar: Günlük yaşamda engelli bireylere yönelik incitici, küçümseyici ve ötekileştirici sözlü veya davranışsal mesajlardır.",
      "3 Mikro-Saldırı Türü: 1) Mikro-Saldırı (Açık ayrımcılık), 2) Mikro-Hakaret (Bireyin yetkinliğini küçümseme; örn. 'Körsün ama ne güzel giyinmişsin'), 3) Mikro-Geçersiz Kılma (Kişinin yaşadığı zorluğu yok sayma; örn. 'Hepimizin engelleri var, kafana takma').",
      "İyiliksever Sağlamcılık (Benevolent Ableism): Acıma, aşırı yardım etme ve çocuklaştırma (infantilization) yoluyla bireyin özerkliğini zedeleyen sözde 'sevgi dolu' ayrımcılıktır.",
      "Zoraki Yardım: Kişinin 'İstemiyorum, kendim yapabilirim' demesine rağmen tekerlekli sandalyesini zorla itmek veya kolundan çekmek iyi niyet değil, sınır ihlalidir!"
    ],
    practicalTip: "Soruda 'Aşırı korumacılık, acıma, çocuklaştırma ve yardımseverlik maskesi altına gizlenmiş ayrımcılık biçimi' sorulursa cevap: İyiliksever Sağlamcılık (Benevolent Ableism)!",
    examClue: "Görünmez engeli olan birine 'Hiç de engelliye benzemiyorsun, maşallahın var' demek iltifat değil, bir 'Mikro-Geçersiz Kılma' saldırısıdır.",
    keepInMind: "Mikro-Saldırı = Günlük İnce Ayrımcılıklar | İyiliksever Sağlamcılık = Acıma ve Çocuklaştırma Yoluyla Bağımlı Kılma.",
    aiPromptSuggestion: "Engellilere yönelik mikro-saldırıları ve iyiliksever sağlamcılık örneklerini günlük diyaloglarla anlatır mısın?",
    visualSchema: {
      title: "Görsel Uyarı · İyiliksever Sağlamcılığın 3 Maskesi",
      items: [
        { icon: "🧸", label: "Çocuklaştırma", highlight: "İnfantilization", detail: "Yetişkin bireye çocukmuş gibi ses tonuyla ve acıyarak konuşmak", color: "rose" },
        { icon: "🦸", label: "Aşırı Övgü", highlight: "İlham Nesnesi Yapma", detail: "Sıradan bir işi (su içmeyi/sokağa çıkmayı) olağanüstü cesaret saymak", color: "amber" },
        { icon: "✋", label: "Zorla Yardım", highlight: "Sınır İhlali", detail: "İstemediğini söylediği halde zorla bastonunu veya sandalyesini tutmak", color: "purple" }
      ]
    }
  },
  {
    id: "u2-t20",
    unitId: "unit-2",
    title: "Kullanıcı Denetimli Hizmetler ve Kişisel Bütçe Modeli",
    subtitle: "Hizmeti devlet veya aile değil, engelli bireyin kendisinin yönetmesi",
    eli5: "Geleneksel sistemde belediye veya bakanlık engelliye 'Biz sana şu yemeği, şu saatte gelen şu bakıcıyı layık gördük, itiraz etme' der. Kullanıcı Denetimli Hizmetler (Kişisel Bütçe) ise devrim niteliğindedir: Devlet bakım parasını doğrudan engelli bireyin hesabına yatırır; kişi kendi asistanını kendisi mülakatla seçer, çalışma saatini kendisi belirler ve istemediği asistanı değiştirebilir!",
    bulletPoints: [
      "Kişisel Bütçe (Direct Payments / Personal Budgets): Devletin engelli bireye hizmeti ayni (paket) olarak dayatmak yerine, bütçeyi doğrudan bireye vererek hizmet alımını onun kontrolüne bırakmasıdır.",
      "Kullanıcı Denetimi (User-Led Services): Hizmetin planlanması, sunumu ve değerlendirilmesinde karar vericinin doğrudan engelli birey olmasıdır.",
      "Bağımsız Yaşam Hareketi (Ed Roberts - Berkeley): 1960'larda ABD'de tekerlekli sandalye kullanan üniversite öğrencilerinin kendi kişisel asistanlarını kendilerinin işe alıp yönetmesiyle başlamıştır.",
      "Sosyal Hizmet Uzmanının Rol Değişimi: Uzman 'müracaatçı adına karar veren patron' olmaktan çıkar; bireyin bütçesini yönetmesine ve asistan bulmasına rehberlik eden bir 'destek uzmanı' haline gelir."
    ],
    practicalTip: "Soruda 'Hizmet paketinin doğrudan devletçe dayatılması yerine engelli bireye doğrudan nakit bütçe verilerek asistanını kendisinin seçip yönetmesi modeli' sorulursa: Kişisel Bütçe / Kullanıcı Denetimli Model!",
    examClue: "Kişisel bütçe modeli, CRPD Madde 19 (Bağımsız Yaşam) ilkesinin dünyadaki en ileri uygulama aracıdır.",
    keepInMind: "Kişisel Bütçe Modeli = Hizmeti Dayatma, Parayı Bireye Ver -> Kendi Asistanını ve Yaşamını Kendisi Yönetsin.",
    aiPromptSuggestion: "Kişisel Bütçe (Personal Budget) modelini ve geleneksel bakım paketlerinden farkını anlatır mısın?",
    visualSchema: {
      title: "Görsel Karşılaştırma · Paket Hizmet vs Kişisel Bütçe",
      items: [
        { icon: "📦", label: "Geleneksel Paket Hizmet", highlight: "Bürokratik Kontrol", detail: "Devlet yemeği ve bakıcıyı seçer; bireyin saat veya kişi seçme hakkı yoktur", color: "amber" },
        { icon: "💳", label: "Kişisel Bütçe Modeli", highlight: "Kullanıcı Denetimi!", detail: "Bütçe bireye verilir; birey asistanını kendisi seçer, saatini kendisi belirler", color: "emerald" },
        { icon: "🧭", label: "Sosyal Hizmet Rolü", highlight: "Rehberlik & Eşlik", detail: "Müracaatçıyı yönetmek yerine bütçe ve hak yönetiminde danışmanlık yapmak", color: "blue" }
      ]
    }
  }
];

export const UNIT_1_EXTRA_TOPICS: TopicCard[] = [
  {
    id: "u1-t16",
    unitId: "unit-1",
    title: "Engellilik Tarihinde Öjenik (Eugenics) Hareketi ve Zorla Kısırlaştırma",
    subtitle: "Francis Galton, Nazi T4 programı ve 'yaşamaya değmeyen hayatlar' vahşeti",
    eli5: "19. yüzyılın sonunda Darwin'in kuzeni Francis Galton 'Öjenik (Eugenics)' adında tehlikeli bir fikir ortaya attı: 'Nasıl ki yarış atlarının en güçlülerini çiftleştirip zayıfları eliyorsak, insan ırkını da ıslah etmeliyiz; engelliler, zeka geriliği olanlar kısırlaştırılsın, üremesin!' Bu sapkın fikir ABD'de 60 binden fazla engellinin zorla kısırlaştırılmasına, Nazi Almanyası'nda ise 'Aktion T4' programıyla 200 binden fazla engellinin gaz odalarında katledilmesine yol açtı.",
    bulletPoints: [
      "Öjenik (Eugenics - Francis Galton): İnsan ırkını yapay seçilimle 'iyileştirme' ve genetik olarak 'kusurlu' sayılan bireylerin üremesini engelleme teorisidir.",
      "Zorla Kısırlaştırma Yasaları: 20. yüzyılın ilk yarısında ABD (Buck v. Bell davası), İsveç ve birçok ülkede zihinsel ve fiziksel engelliler mahkeme kararlarıyla zorla kısırlaştırılmıştır.",
      "Nazi Almanyası ve Aktion T4 (1939): Engelli bireyler 'yaşamaya değmeyen hayatlar (Lebensunwertes Leben)' ve devlete ekonomik yük ilan edilerek sistematik olarak öldürülmüştür.",
      "Tarihsel Ders ve Sosyal Hizmet: Tıbbın ve devlet gücünün etik değerlerden koptuğunda engelli bedenleri nasıl yok edebileceğini gösteren en karanlık derstir."
    ],
    practicalTip: "Soruda 'Francis Galton', 'Öjenik (Eugenics)', 'Zorla kısırlaştırma' veya 'Nazi T4 programı' geçiyorsa bu karttaki tarihi süreci hatırla!",
    examClue: "CRPD Madde 23 (Ev ve Aile Hayatına Saygı), engelli bireylerin doğurganlıklarını koruma ve rızaları dışında kısırlaştırılamama hakkını özellikle bu acı tarihe dayanarak güvence altına almıştır.",
    keepInMind: "Öjenik (Francis Galton) = Engellileri Kısırlaştırma/Eleme Girişimi | Nazi Aktion T4 = Engellilerin Katliamı | CRPD = Doğurganlığı Koruma Hakkı.",
    aiPromptSuggestion: "Öjenik (Eugenics) hareketinin engellilik tarihindeki yıkıcı etkilerini ve günümüz insan hakları anlayışına etkisini anlatır mısın?",
    visualSchema: {
      title: "Görsel Tarih · Öjenik Hareketi ve Yaşanan Trajedi",
      items: [
        { icon: "🧬", label: "Öjenik Fikri", highlight: "Francis Galton", detail: "İnsan ırkını ıslah etme bahanesiyle engellileri 'ayıklama' teorisi", color: "rose" },
        { icon: "⚖️", label: "Zorla Kısırlaştırma", highlight: "Hukuksuz Yasalar", detail: "Binlerce zihinsel ve fiziksel engelli bireyin üreme hakkı elinden alındı", color: "amber" },
        { icon: "🕊️", label: "CRPD Madde 23", highlight: "Doğurganlığı Koruma", detail: "Hiç kimse rızası dışında kısırlaştırılamaz, aile kurma hakkı vardır", color: "blue" }
      ]
    }
  },
  {
    id: "u1-t17",
    unitId: "unit-1",
    title: "Sağır Kültürü (Deaf Culture) ve Dilsel Azınlık Yaklaşımı",
    subtitle: "Büyük 'D' (Deaf) ile küçük 'd' (deaf) farkı ve işaret dilinin zenginliği",
    eli5: "İşitme engelliler dünyasında çok önemli bir ayrım vardır: Küçük 'd' (deaf) tıbbi işitme kaybını anlatır. Büyük 'D' (Deaf) ise kendilerini 'hasta veya engelli' olarak DEĞİL, kendi dili (İşaret Dili), kendi sanatı, mizahı ve geleneği olan 'Kültürel ve Dilsel bir Azınlık' olarak gören topluluğu anlatır! Tıpkı Türkçe veya Fransızca konuşanlar gibi, onlar da İşaret Dili konuşan bir kültürdür.",
    bulletPoints: [
      "Kültürel / Dilsel Azınlık Modeli: Sağırlığı tıbbi bir kusur/eksiklik değil, zengin bir dilsel ve kültürel çeşitlilik olarak kabul eder.",
      "Büyük 'D' (Deaf) vs Küçük 'd' (deaf): Küçük 'd' odyometrik işitme kaybını; Büyük 'D' ise Sağır topluluğunun kültürünü, değerlerini ve işaret dilini benimseyen kültürel kimliği ifade eder.",
      "Koklear İmplant Tartışması: Tıp dünyası bebeklere hemen biyonik kulak (koklear implant) takıp onları 'sağlamlaştırmaya' çalışırken; Sağır Kültürü savunucuları çocuğun işaret diliyle doğal kimliğini kazanma hakkını savunur.",
      "CRPD Madde 30/4: Sağır bireylerin kendilerine özgü kültürel ve dilsel kimliklerinin (işaret dilleri ve sağır kültürü) tanınması ve desteklenmesi devlet yükümlülüğüdür."
    ],
    practicalTip: "Soruda 'Sağırlığı tıbbi bir engel olarak değil, işaret diline dayalı kültürel ve dilsel bir azınlık kimliği olarak gören yaklaşım' sorulursa: Sağır Kültürü (Deaf Culture)!",
    examClue: "CRPD Madde 21 (İfade Özgürlüğü) ve Madde 30 (Kültürel Yaşama Katılım), ulusal işaret dillerinin resmi dil olarak tanınmasını şart koşar.",
    keepInMind: "Sağır Kültürü (Büyük 'D' Deaf) = Engelli Değil, İşaret Diline Sahip Kültürel ve Dilsel Azınlık.",
    aiPromptSuggestion: "Sağır Kültürü (Deaf Culture) nedir ve büyük 'D' ile küçük 'd' ayrımı ne anlama gelir?",
    visualSchema: {
      title: "Görsel Ayrım · Tıbbi Sağırlık vs Sağır Kültürü",
      items: [
        { icon: "🩺", label: "Tıbbi Bakış (küçük 'd')", highlight: "Odyometrik Kayıp", detail: "Kulağın duymamasını bozukluk görür; cihazla tamir etmeye odaklanır", color: "amber" },
        { icon: "🤟", label: "Sağır Kültürü (Büyük 'D')", highlight: "Dilsel Azınlık", detail: "Kendine özgü işaret dili, kültürü ve mizahı olan eşit bir topluluk", color: "blue" },
        { icon: "⚖️", label: "CRPD Madde 30", highlight: "Kültürel Kimlik", detail: "İşaret dillerinin ve sağır kültürünün resmi olarak tanınması güvencesi", color: "emerald" }
      ]
    }
  },
  {
    id: "u1-t18",
    unitId: "unit-1",
    title: "Nöroçeşitlilik (Neurodiversity) Hareketi ve Otizm Kabulü",
    subtitle: "Otizm, DEHB ve Disleksiyi 'hastalık' değil, beyin çeşitliliği görmek",
    eli5: "Avustralyalı sosyolog Judy Singer 1990'larda 'Nöroçeşitlilik (Neurodiversity)' kavramını ortaya attı. Nasıl ki doğada biyolojik çeşitlilik (farklı ağaçlar, farklı çiçekler) bir zenginlikse; insan beyninin de farklı çalışma biçimleri (Otizm, DEHB, Disleksi) bir zenginliktir! Amaç otizmli insanı 'iyileştirmek veya normal insana benzetmek' değil; onun duyusal hassasiyetlerine saygı duyup ortamı uyarlamaktır.",
    bulletPoints: [
      "Nöroçeşitlilik (Neurodiversity - Judy Singer, 1998): İnsan beyinlerinin bilgi işleme, dikkat ve sosyalleşme biçimlerindeki farklılıkların doğal bir insan çeşitliliği olduğunu savunan yaklaşımdır.",
      "Nörotipik vs Nöro-ıraksak: Toplumun çoğunluğunun sahip olduğu beyin yapısına 'Nörotipik (Neurotypical)'; Otizm, DEHB, Disleksi, Tourette gibi farklılıklara sahip olanlara 'Nöro-ıraksak / Nöro-farklı (Neurodivergent)' denir.",
      "Maskeleme (Camouflaging / Masking): Nöro-farklı bireylerin dışlanmamak için nörotipik gibi davranmaya çalışmasıdır; bu durum ağır psikolojik tükenmişliğe yol açar.",
      "Otizm Farkındalığı Değil, Otizm KABULÜ: 2 Nisan Dünya Otizm gününde artık acıma temelli 'mavi ışık yakma' yerine, istihdamda ve okulda duyusal dostu ortamlar ve tam kabul savunulmaktadır."
    ],
    practicalTip: "Soruda 'Judy Singer', 'Nöroçeşitlilik (Neurodiversity)', 'Beyin farklılıklarının doğal çeşitlilik kabul edilmesi' veya 'Maskeleme (Camouflaging)' geçiyorsa bu kartı hatırla!",
    examClue: "Nöroçeşitlilik yaklaşımı, otizmli bireylerin el çırpma veya sallanma (stimming) gibi sakinleşme davranışlarının zorla engellenmesini insan hakları ihlali olarak görür.",
    keepInMind: "Nöroçeşitlilik (Judy Singer) = Otizm, DEHB ve Disleksi Hastalık Değil, Doğal Beyin Çeşitliliğidir.",
    aiPromptSuggestion: "Nöroçeşitlilik (Neurodiversity) yaklaşımını ve nörotipik ile nöro-ıraksak farkını örneklerle açıklar mısın?",
    visualSchema: {
      title: "Görsel Şema · Nöroçeşitlilik (Neurodiversity) Yelpazesi",
      items: [
        { icon: "🧠", label: "Doğal Beyin Çeşitliliği", highlight: "Judy Singer (1998)", detail: "Tek bir 'doğru beyin' yoktur; Otizm, DEHB, Disleksi doğal çeşitliliktir", color: "purple" },
        { icon: "🎭", label: "Maskeleme Riski", highlight: "Tükenmişlik Sebebi", detail: "Nöro-farklı bireyin 'normalmiş gibi' rol yapmaya zorlanması ağır yüktür", color: "rose" },
        { icon: "🌱", label: "Duyusal Uyarlama", highlight: "Dost Ortamlar", detail: "Kişiyi değiştirmek yerine gürültüyü, ışığı ve sınıfı duyusal dostu yapmak", color: "emerald" }
      ]
    }
  },
  {
    id: "u1-t19",
    unitId: "unit-1",
    title: "Yardımcı Teknolojiler ve Dijital Erişilebilirlik (WCAG)",
    subtitle: "Ekran okuyucular, alternatif klavyeler ve web erişilebilirlik ilkeleri (POUR)",
    eli5: "Tekerlekli sandalyeli için rampa neyse; görme engelli, işitme engelli veya kollarını kullanamayan biri için de 'Yardımcı Teknolojiler' ve 'Dijital Erişilebilirlik' odur! Ekran okuyucu (JAWS, TalkBack), göz takip cihazları ve sesli komut sistemleri bireyi bağımsız kılar. Bir web sitesinin erişilebilir olması için ise POUR ilkelerine (Algılanabilir, İşletilebilir, Anlaşılabilir, Sağlam) uyması şarttır.",
    bulletPoints: [
      "Yardımcı Teknoloji (Assistive Technology): Engelli bireylerin işlevsel kapasitelerini artıran, sürdüren veya geliştiren her türlü yazılım, donanım ve cihazdır (örn. ekran okuyucu, Braille ekran, göz takip cihazı, akıllı protez).",
      "Dijital Erişilebilirlik ve WCAG (Web Content Accessibility Guidelines): Web sitelerinin ve mobil uygulamaların tüm kullanıcılar için erişilebilir olmasını sağlayan uluslararası standartlardır.",
      "POUR İlkeleri: 1) Algılanabilir (Perceivable - resimlerde alternatif metin, videoda altyazı), 2) İşletilebilir (Operable - mouse olmadan sadece klavyeyle kullanılabilirlik), 3) Anlaşılabilir (Understandable - sade dil ve hata uyarıları), 4) Sağlam (Robust - farklı ekran okuyucularla uyumlu kod).",
      "Sosyal Hizmet Önemi: e-Devlet, online bankacılık veya hastane randevu sistemi erişilebilir değilse engelli birey başkasına bağımlı kalır ve mahremiyeti ihlal edilir."
    ],
    practicalTip: "Soruda 'Web erişilebilirliğinin 4 temel POUR ilkesi nedir?' diye sorulursa: Algılanabilir, İşletilebilir, Anlaşılabilir, Sağlam (Perceivable, Operable, Understandable, Robust)!",
    examClue: "Görsellere 'alt-text (alternatif açıklama metni)' eklenmemesi, ekran okuyucu kullanan bir görme engellinin o bilgiyi hiç alamamasına yol açan temel bir dijital erişim ihlalidir.",
    keepInMind: "Yardımcı Teknoloji = Bağımsızlık Aracı | Dijital Erişilebilirlik = POUR (Algılanabilir, İşletilebilir, Anlaşılabilir, Sağlam).",
    aiPromptSuggestion: "Yardımcı teknolojileri ve web erişilebilirliğinin 4 temel ilkesini (POUR) günlük örneklerle anlatır mısın?",
    visualSchema: {
      title: "Görsel Standart · Dijital Erişilebilirliğin 4 Sütunu (POUR)",
      items: [
        { icon: "👁️", label: "P - Algılanabilir", highlight: "Alternatif Metin", detail: "Resimlerin alt yazısı, videoların sesli betimlemesi ve altyazısı olmalıdır", color: "blue" },
        { icon: "⌨️", label: "O - İşletilebilir", highlight: "Tam Klavye Erişimi", detail: "Mouse kullanamayan biri sadece klavye veya sesle siteyi yönetebilmelidir", color: "emerald" },
        { icon: "💡", label: "U & R - Anlaşılır & Sağlam", highlight: "Sade Dil & Uyum", detail: "Karmaşık olmayan yönergeler ve tüm ekran okuyucu cihazlarla tam uyum", color: "purple" }
      ]
    }
  },
  {
    id: "u1-t20",
    unitId: "unit-1",
    title: "Sosyal Hizmet Müdahalesinde Çevresi İçinde Birey (PIE) ve Savunuculuk",
    subtitle: "Sorunu müracaatçıya yıkmadan çok boyutlu vaka değerlendirmesi yapmak",
    eli5: "Sosyal hizmetin en temel ilkesi 'Çevresi İçinde Birey (Person-in-Environment - PIE)' yaklaşımıdır. Kapımızı çalan engelli bir müracaatçıya baktığımızda 'Bu adam neden sinirli ve içe kapanık?' diye kişiyi suçlamayız; içinde yaşadığı asansörsüz binaya, alamadığı maaşa, ailenin tükenmişliğine ve toplumun önyargılarına birlikte bakarız. Uzman sadece rapor veren memur değil, müracaatçının haklarını savunan bir 'Savunucu (Advocate)'dur.",
    bulletPoints: [
      "Çevresi İçinde Birey (Person-in-Environment - PIE): Bireyin davranışlarını, psikolojisini ve yaşam zorluklarını içinde bulunduğu fiziksel, sosyal, kültürel ve ekonomik çevreyle etkileşimi içinde değerlendirmektir.",
      "Sorunun Kaynağı Nerede?: Bireysel yetersizlikte değil; bireyin ihtiyaçları ile çevrenin sunduğu kaynaklar ve engeller arasındaki uyumsuzluktadır.",
      "Bütüncül Değerlendirme Alanları: 1) Biyopsikososyal durum, 2) Aile dinamikleri ve bakım yükü, 3) Fiziksel/mimari çevre, 4) Gelir ve istihdam durumu, 5) Yasal haklar ve kurumsal bağlantılar.",
      "Sosyal Hizmet Savunuculuğu: Hakları ihlal edilen, hizmetten mahrum bırakılan veya bürokratik engellere takılan engelli bireyin haklarını kurumlar ve yasalar karşısında aktif olarak savunmaktır."
    ],
    practicalTip: "Soruda 'Engelli bireyin sorununu tek başına bireyin biyolojik veya psikolojik kusuru olarak değil, çevresel ve kurumsal sistemlerle etkileşimi içinde ele alan temel sosyal hizmet yaklaşımı' sorulursa cevap: Çevresi İçinde Birey (PIE)!",
    examClue: "Savunuculuk (Advocacy), engelli birey adına her şeyi yapmak demek DEĞİLDİR; bireyin kendi sesini duyurabilmesi için 'Öz-Savunuculuk (Self-Advocacy)' becerilerini güçlendirmektir.",
    keepInMind: "Çevresi İçinde Birey (PIE) = Birey + Aile + Çevre + Kurumlar Arasındaki Etkileşim | Sosyal Hizmet = Güçlendirme & Savunuculuk.",
    aiPromptSuggestion: "Sosyal hizmetteki 'Çevresi İçinde Birey (PIE)' yaklaşımını engelli bir müracaatçı vakası üzerinden açıklar mısın?",
    visualSchema: {
      title: "Görsel Model · Çevresi İçinde Birey (PIE) Etkileşimi",
      items: [
        { icon: "👤", label: "Birey", highlight: "Biyopsikososyal Özellik", detail: "Kişinin yetenekleri, duyguları, sağlık durumu ve hedefleri", color: "blue" },
        { icon: "🏘️", label: "Çevre & Kurumlar", highlight: "Fiziksel & Sosyal Alan", detail: "Aile desteği, okul, işyeri, mimari engeller ve belediye hizmetleri", color: "amber" },
        { icon: "⚖️", label: "Sosyal Hizmet Uzmanı", highlight: "Köprü & Savunuculuk", detail: "Bireyi çevresiyle uyumlu ve haklarını kullanabilir hale getiren köprü", color: "emerald" }
      ]
    }
  }
];

