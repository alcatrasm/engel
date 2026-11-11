import React from "react";
import { ArrowRight, CheckCircle2, AlertTriangle } from "lucide-react";

interface TopicVisualDiagramProps {
  topicId: string;
}

export const TopicVisualDiagram: React.FC<TopicVisualDiagramProps> = ({ topicId }) => {
  switch (topicId) {
    // u1-t1: Engelli ve Engellilik Tanımları (DMK, 2828, Hizmet Yasası)
    case "u1-t1":
      return (
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 text-center">
            Görsel Hafıza Şeması · 3 Kanun 3 Anahtar Kelime
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-white border-2 border-blue-200 rounded-xl p-3.5 text-center shadow-2xs">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-black text-base mb-2">
                %40
              </div>
              <div className="font-bold text-slate-900 text-sm">DMK (Memurluk)</div>
              <div className="text-xs text-slate-600 mt-1">
                Resmi sağlık kurulu raporuyla <strong>en az %40</strong> kayıp şartı
              </div>
            </div>

            <div className="bg-white border-2 border-emerald-200 rounded-xl p-3.5 text-center shadow-2xs">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center text-xl mb-2">
                🤝
              </div>
              <div className="font-bold text-slate-900 text-sm">2828 SHÇEK Kanunu</div>
              <div className="text-xs text-slate-600 mt-1">
                <strong>Bakım, rehabilitasyon</strong> ve danışmanlık ihtiyacı
              </div>
            </div>

            <div className="bg-white border-2 border-amber-200 rounded-xl p-3.5 text-center shadow-2xs">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center text-xl mb-2">
                ⚡
              </div>
              <div className="font-bold text-slate-900 text-sm">Hizmet Yasası</div>
              <div className="text-xs text-slate-600 mt-1">
                Kalıcı veya <strong>epizodik (aralıklarla/ataklı)</strong> kapasite azalması
              </div>
            </div>
          </div>
        </div>
      );

    // u1-t2: Engellilik Sebepleri ve Fetal Alkol Sendromu
    case "u1-t2":
      return (
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 text-center">
            Görsel Zaman Çizelgesi · Engelliliğin 3 Dönemi
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-white border-2 border-purple-200 rounded-xl p-3.5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🤰</span>
                <div>
                  <div className="text-[11px] font-bold text-purple-700 uppercase">1. Dönem</div>
                  <div className="font-bold text-slate-900 text-sm">Doğum Öncesi</div>
                </div>
              </div>
              <ul className="text-xs text-slate-600 space-y-1">
                <li>• <strong>Fetal Alkol Sendromu</strong> (Düşük IQ + Organ hasarı)</li>
                <li>• Akraba evliliği & kan uyuşmazlığı</li>
                <li>• Gebelikte ilaç / röntgen</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-blue-200 rounded-xl p-3.5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">👶</span>
                <div>
                  <div className="text-[11px] font-bold text-blue-700 uppercase">2. Dönem</div>
                  <div className="font-bold text-slate-900 text-sm">Doğum Sırası</div>
                </div>
              </div>
              <ul className="text-xs text-slate-600 space-y-1">
                <li>• <strong>Oksijensiz kalma (Asfiksi)</strong></li>
                <li>• Kordon dolanması</li>
                <li>• Vakum / forseps travması</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-emerald-200 rounded-xl p-3.5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🌱</span>
                <div>
                  <div className="text-[11px] font-bold text-emerald-700 uppercase">3. Dönem</div>
                  <div className="font-bold text-slate-900 text-sm">Doğum Sonrası</div>
                </div>
              </div>
              <ul className="text-xs text-slate-600 space-y-1">
                <li>• <strong>Ağır ateşli hastalık</strong> (Menenjit)</li>
                <li>• Trafik, iş kazaları ve deprem</li>
                <li>• Uzamış sarılık ve travmalar</li>
              </ul>
            </div>
          </div>
        </div>
      );

    // u1-t3: Engellilik Türleri 1: Otizm, İşitme ve Görme Engeli
    case "u1-t3":
      return (
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 text-center">
            Görsel Sayı Şifreleri · Otizm, İşitme ve Görme
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
            <div className="bg-white border-2 border-purple-200 rounded-xl p-3.5">
              <div className="text-2xl mb-1">🧩</div>
              <div className="font-bold text-sm text-slate-900">Otizm (OSB)</div>
              <div className="text-xs font-bold text-purple-700 mt-0.5">3 Yaş Öncesi · 6 Belirti</div>
              <div className="text-xs text-slate-600 mt-1">
                Sosyal etkileşim, iletişim ve tekrarlayıcı davranışlarda <strong>en az 6 belirti</strong>.
              </div>
            </div>

            <div className="bg-white border-2 border-amber-200 rounded-xl p-3.5">
              <div className="text-2xl mb-1">👂</div>
              <div className="font-bold text-sm text-slate-900">Sağırlık vs Ağır İşitme</div>
              <div className="text-xs font-bold text-amber-700 mt-0.5">Cihaz İşe Yarıyor mu?</div>
              <div className="text-xs text-slate-600 mt-1">
                Cihazla bile konuşmayı hiç duyamıyorsa <strong>Sağırlık</strong>; kısmen duyuyorsa <strong>Ağır İşitme</strong>.
              </div>
            </div>

            <div className="bg-white border-2 border-blue-200 rounded-xl p-3.5">
              <div className="text-2xl mb-1">👁️</div>
              <div className="font-bold text-sm text-slate-900">Yasal Körlük</div>
              <div className="text-xs font-bold text-blue-700 mt-0.5">6 Metre → 60 cm</div>
              <div className="text-xs text-slate-600 mt-1">
                Normal gözün <strong>6 metreden</strong> gördüğünü <strong>60 cm'den</strong> görememe (veya &lt;20° açı).
              </div>
            </div>
          </div>
        </div>
      );

    // u1-t4: Engellilik Türleri 2: Zihinsel, Çoklu, Fiziksel ve Öğrenme Güçlüğü
    case "u1-t4":
      return (
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 text-center">
            Görsel Tablo · Zihinsel, Çoklu, Ortopedik ve Öğrenme Güçlüğü
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center">
            <div className="bg-white border-2 border-blue-200 rounded-xl p-3">
              <div className="text-xl mb-1">🧠</div>
              <div className="font-bold text-xs text-slate-900">Zihinsel Engel</div>
              <div className="text-[11px] text-slate-600 mt-1">
                <strong>16 yaşından önce</strong> başlar (IQ düşüklüğü + uyum sorunu).
              </div>
            </div>
            <div className="bg-white border-2 border-rose-200 rounded-xl p-3">
              <div className="text-xl mb-1">🔗</div>
              <div className="font-bold text-xs text-slate-900">Çoklu Yetersizlik</div>
              <div className="text-[11px] text-slate-600 mt-1">
                Birden fazla ağır engel (Örn: Zihinsel + Görme). <em>Kör-sağırlık hariç!</em>
              </div>
            </div>
            <div className="bg-white border-2 border-emerald-200 rounded-xl p-3">
              <div className="text-xl mb-1">🦿</div>
              <div className="font-bold text-xs text-slate-900">Fiziksel 2'ye Ayrılır</div>
              <div className="text-[11px] text-slate-600 mt-1">
                1. <strong>Ortopedik</strong> (Kas-iskelet)<br />
                2. <strong>Süreğen</strong> (Kalp, diyabet)
              </div>
            </div>
            <div className="bg-white border-2 border-amber-200 rounded-xl p-3">
              <div className="text-xl mb-1">📖</div>
              <div className="font-bold text-xs text-slate-900">Öğrenme Güçlüğü</div>
              <div className="text-[11px] text-slate-600 mt-1">
                <strong>Zeka normaldir!</strong> Disleksi (okuma) ve afazi.
              </div>
            </div>
          </div>
        </div>
      );

    // u1-t5: Engellilik Modelleri: Ahlaki, Medikal, Sosyal ve İnsan Hakları
    case "u1-t5":
      return (
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 text-center">
            Görsel Karşılaştırma · 4 Model "Sorunu Nerede Görür?"
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <div className="bg-white border-2 border-slate-200 rounded-xl p-3 text-center">
              <div className="text-2xl mb-1">⛪</div>
              <div className="font-bold text-xs text-slate-900">1. Ahlaki Model</div>
              <div className="text-[11px] text-rose-700 font-semibold mt-1">Sorun: Günah / Kader</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Acıma ve sadaka</div>
            </div>
            <div className="bg-white border-2 border-amber-200 rounded-xl p-3 text-center">
              <div className="text-2xl mb-1">🩺</div>
              <div className="font-bold text-xs text-slate-900">2. Medikal (Tıbbi)</div>
              <div className="text-[11px] text-amber-700 font-semibold mt-1">Sorun: Bozuk Beden</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Kişiyi düzeltmeye çalışır</div>
            </div>
            <div className="bg-white border-2 border-blue-200 rounded-xl p-3 text-center">
              <div className="text-2xl mb-1">🏙️</div>
              <div className="font-bold text-xs text-slate-900">3. Sosyal Model</div>
              <div className="text-[11px] text-blue-700 font-semibold mt-1">Sorun: Bozuk Çevre</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Rampasız bina ve önyargı</div>
            </div>
            <div className="bg-white border-2 border-emerald-300 rounded-xl p-3 text-center">
              <div className="text-2xl mb-1">⚖️</div>
              <div className="font-bold text-xs text-slate-900">4. İnsan Hakları</div>
              <div className="text-[11px] text-emerald-700 font-semibold mt-1">Çözüm: Yasal Hak</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Eşit ve onurlu yurttaş</div>
            </div>
          </div>
        </div>
      );

    // u2-t1: Sosyal İnşacı Yaklaşım, Etiketleme ve Damgalama (Stigma)
    case "u2-t1":
      return (
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 text-center">
            Görsel Zincir · Toplum Nasıl Damgalar? (Goffman)
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2">
            <div className="flex-1 bg-white border-2 border-slate-200 rounded-xl p-3.5 text-center">
              <div className="text-2xl mb-1">🏗️</div>
              <div className="font-bold text-xs text-slate-900">1. Sosyal İnşa</div>
              <div className="text-xs text-slate-600 mt-1">
                Toplum kendi kafasına göre <strong>"Normal İnsan"</strong> kalıbı uydurur
              </div>
            </div>
            <div className="flex justify-center text-slate-400">
              <ArrowRight className="w-5 h-5 rotate-90 sm:rotate-0" />
            </div>
            <div className="flex-1 bg-white border-2 border-amber-200 rounded-xl p-3.5 text-center">
              <div className="text-2xl mb-1">🏷️</div>
              <div className="font-bold text-xs text-slate-900">2. Etiketleme</div>
              <div className="text-xs text-slate-600 mt-1">
                Kalıba uymayana <strong>"Yetersiz / Eksik"</strong> etiketi yapıştırılır
              </div>
            </div>
            <div className="flex justify-center text-slate-400">
              <ArrowRight className="w-5 h-5 rotate-90 sm:rotate-0" />
            </div>
            <div className="flex-1 bg-white border-2 border-rose-200 rounded-xl p-3.5 text-center">
              <div className="text-2xl mb-1">💔</div>
              <div className="font-bold text-xs text-slate-900">3. Damgalama (Stigma)</div>
              <div className="text-xs text-slate-600 mt-1">
                <strong>Erving Goffman:</strong> Kişi utandırılır, dışlanır ve eve kapanır
              </div>
            </div>
          </div>
        </div>
      );

    // u2-t2: Ekolojik Sistemler Kuramı (Bronfenbrenner)
    case "u2-t2":
      return (
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 text-center">
            Görsel İç İçe Halkalar · Ekolojik Sistem (Bronfenbrenner)
          </div>
          <div className="max-w-lg mx-auto bg-blue-100/80 border-2 border-blue-300 rounded-2xl p-3 text-center">
            <div className="text-xs font-bold text-blue-900 mb-1.5">
              🏛️ MAKRO & KRONO (Yasalar, Kültür ve Zaman)
            </div>
            <div className="bg-purple-100/80 border-2 border-purple-300 rounded-xl p-2.5">
              <div className="text-xs font-bold text-purple-900 mb-1.5">
                🏢 EKZO SİSTEM (Belediye Meclisi, Anne-Babanın İş Yeri)
              </div>
              <div className="bg-emerald-100/90 border-2 border-emerald-300 rounded-xl p-2.5">
                <div className="text-xs font-bold text-emerald-900 mb-1.5">
                  🏫 MEZO SİSTEM (Aile ↔ Okul ↔ Hastane İletişimi)
                </div>
                <div className="bg-white border-2 border-amber-300 rounded-lg p-2.5 shadow-2xs">
                  <div className="text-xs font-bold text-amber-900">
                    🎯 MİKRO SİSTEM (Bireyin Kendisi, Ailesi ve Evi)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    // u2-t3: Feminist Engellilik Kuramı ve Kesişimsellik (Intersectionality)
    case "u2-t3":
      return (
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 text-center">
            Görsel Şema · Feminist Kuram & Kesişimsellik (Crenshaw)
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-white border-2 border-purple-200 rounded-xl p-3.5 text-center">
              <div className="text-2xl mb-1">👩‍👧</div>
              <div className="font-bold text-sm text-slate-900">Feminist Engellilik Kuramı</div>
              <div className="text-xs font-bold text-purple-700 mt-0.5">Görünmeyen Bakım Emeği</div>
              <div className="text-xs text-slate-600 mt-1">
                Bakım yükü hep <strong>kadınların (annelerin)</strong> omuzlarına yüklenir; engelli kadınlar ise "cinsiyetsiz" görülür.
              </div>
            </div>
            <div className="bg-white border-2 border-rose-200 rounded-xl p-3.5 text-center">
              <div className="text-2xl mb-1">🔀</div>
              <div className="font-bold text-sm text-slate-900">Kesişimsellik (Crenshaw)</div>
              <div className="text-xs font-bold text-rose-700 mt-0.5">Katlanan Çoklu Ayrımcılık</div>
              <div className="text-xs text-slate-600 mt-1">
                <strong>Engelli + Kadın + Yoksul + Göçmen</strong> kimlikleri birleşince ayrımcılık katlanarak büyür.
              </div>
            </div>
          </div>
        </div>
      );

    // u2-t4: Eleştirel Engellilik Çalışmaları, Crip Teorisi ve Bedenleşme
    case "u2-t4":
      return (
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 text-center">
            Görsel 3 Kavram · Sağlamcılık, Crip Teorisi ve Bedenleşme
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
            <div className="bg-white border-2 border-rose-200 rounded-xl p-3.5">
              <div className="text-2xl mb-1">🚫</div>
              <div className="font-bold text-sm text-slate-900">Sağlamcılık (Ableism)</div>
              <div className="text-xs text-slate-600 mt-1">
                Sağlam bedeni "üstün", engelli bedeni "kusurlu" sayan ayrımcı ideoloji.
              </div>
            </div>
            <div className="bg-white border-2 border-purple-200 rounded-xl p-3.5">
              <div className="text-2xl mb-1">✊</div>
              <div className="font-bold text-sm text-slate-900">Crip Teorisi (McRuer)</div>
              <div className="text-xs text-slate-600 mt-1">
                <strong>"Normal olmak zorunda değiliz!"</strong> diyerek sağlamcılığa başkaldırı ve engelli gururu.
              </div>
            </div>
            <div className="bg-white border-2 border-blue-200 rounded-xl p-3.5">
              <div className="text-2xl mb-1">🫀</div>
              <div className="font-bold text-sm text-slate-900">Bedenleşme (Embodiment)</div>
              <div className="text-xs text-slate-600 mt-1">
                Sosyal modelin unuttuğu <strong>fiziksel ağrı, yorgunluk ve beden deneyimini</strong> hatırlar.
              </div>
            </div>
          </div>
        </div>
      );

    // u3-t1: Hak mı, Yardım mı? Üç Yaklaşım ve BM Sözleşmesi (CRPD)
    case "u3-t1":
      return (
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 text-center">
            Görsel Dönüşüm · Yardımdan Hak Temelli Sözleşmeye (CRPD)
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
            <div className="bg-white border-2 border-slate-200 rounded-xl p-3.5">
              <div className="text-2xl mb-1">🤲</div>
              <div className="font-bold text-sm text-slate-900">1. Hayırseverlik</div>
              <div className="text-xs text-rose-700 font-semibold mt-0.5">Birey = Yardım Nesnesi</div>
              <div className="text-xs text-slate-600 mt-1">Acıma, sadaka ve koruma odaklı</div>
            </div>
            <div className="bg-white border-2 border-amber-200 rounded-xl p-3.5">
              <div className="text-2xl mb-1">🏥</div>
              <div className="font-bold text-sm text-slate-900">2. Tıbbi Yaklaşım</div>
              <div className="text-xs text-amber-700 font-semibold mt-0.5">Birey = Hasta / Vaka</div>
              <div className="text-xs text-slate-600 mt-1">Doktor otoritesi ve tanı odaklı</div>
            </div>
            <div className="bg-white border-2 border-emerald-300 rounded-xl p-3.5">
              <div className="text-2xl mb-1">⚖️</div>
              <div className="font-bold text-sm text-slate-900">3. İnsan Hakları (CRPD)</div>
              <div className="text-xs text-emerald-700 font-semibold mt-0.5">Birey = Hak Öznesi!</div>
              <div className="text-xs text-slate-600 mt-1">2006 BM Sözleşmesi · Devletin görevi</div>
            </div>
          </div>
        </div>
      );

    // u3-t2: Biçimsel Eşitlik vs Maddi Eşitlik, Makul Düzenleme ve Evrensel Tasarım
    case "u3-t2":
      return (
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 text-center">
            Görsel Fark Şeması · Sınavda En Çok Çıkan 4 Kavram
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center">
            <div className="bg-white border-2 border-rose-200 rounded-xl p-3">
              <div className="text-xl mb-1">📏</div>
              <div className="font-bold text-xs text-slate-900">Biçimsel Eşitlik</div>
              <div className="text-[11px] text-slate-600 mt-1">
                Herkese aynı merdiveni vermek <strong>(Adaletsiz!)</strong>
              </div>
            </div>
            <div className="bg-white border-2 border-emerald-200 rounded-xl p-3">
              <div className="text-xl mb-1">⚖️</div>
              <div className="font-bold text-xs text-slate-900">Maddi Eşitlik</div>
              <div className="text-[11px] text-slate-600 mt-1">
                Görme engelliye <strong>ek sınav süresi</strong> vermek
              </div>
            </div>
            <div className="bg-white border-2 border-amber-300 rounded-xl p-3">
              <div className="text-xl mb-1">👤</div>
              <div className="font-bold text-xs text-slate-900">Makul Düzenleme</div>
              <div className="text-[11px] text-slate-600 mt-1">
                <strong>Tek 1 kişiye</strong> özel masa/saat uyarlaması
              </div>
            </div>
            <div className="bg-white border-2 border-purple-200 rounded-xl p-3">
              <div className="text-xl mb-1">🚪</div>
              <div className="font-bold text-xs text-slate-900">Evrensel Tasarım</div>
              <div className="text-[11px] text-slate-600 mt-1">
                En baştan <strong>herkes için</strong> düz girişli bina
              </div>
            </div>
          </div>
        </div>
      );

    // u3-t3: BM Sözleşmesi (CRPD) Kritik Maddeleri (Madde 3'ten 29'a Şifreli Liste)
    case "u3-t3":
      return (
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 text-center">
            Görsel Harita · BM CRPD Sınavda Çıkan 6 Altın Madde
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            <div className="bg-white border border-slate-200 rounded-xl p-3">
              <span className="font-mono text-xs font-black text-blue-700 bg-blue-50 px-2 py-0.5 rounded">Madde 5</span>
              <div className="font-bold text-xs text-slate-900 mt-1.5">Eşitlik & Ayrımcılık</div>
              <div className="text-[11px] text-slate-600">Makul düzenleme reddi = Ayrımcılık</div>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-3">
              <span className="font-mono text-xs font-black text-blue-700 bg-blue-50 px-2 py-0.5 rounded">Madde 9</span>
              <div className="font-bold text-xs text-slate-900 mt-1.5">Erişilebilirlik</div>
              <div className="text-[11px] text-slate-600">Bina, ulaşım ve dijital erişim</div>
            </div>
            <div className="bg-white border-2 border-amber-300 rounded-xl p-3">
              <span className="font-mono text-xs font-black text-amber-800 bg-amber-100 px-2 py-0.5 rounded">Madde 12 ★</span>
              <div className="font-bold text-xs text-slate-900 mt-1.5">Yasal Ehliyet</div>
              <div className="text-[11px] text-slate-600">Vasi yerine <strong>Destekli Karar Verme!</strong></div>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-3">
              <span className="font-mono text-xs font-black text-blue-700 bg-blue-50 px-2 py-0.5 rounded">Madde 19</span>
              <div className="font-bold text-xs text-slate-900 mt-1.5">Bağımsız Yaşam</div>
              <div className="text-[11px] text-slate-600">Kuruma kapatma değil, toplum içi yaşam</div>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-3">
              <span className="font-mono text-xs font-black text-blue-700 bg-blue-50 px-2 py-0.5 rounded">Madde 24</span>
              <div className="font-bold text-xs text-slate-900 mt-1.5">Kapsayıcı Eğitim</div>
              <div className="text-[11px] text-slate-600">Ayrı okul değil, akranlarla aynı sınıf</div>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-3">
              <span className="font-mono text-xs font-black text-blue-700 bg-blue-50 px-2 py-0.5 rounded">Madde 27</span>
              <div className="font-bold text-xs text-slate-900 mt-1.5">Çalışma & İstihdam</div>
              <div className="text-[11px] text-slate-600">Açık iş gücü piyasasında eşit ücret</div>
            </div>
          </div>
        </div>
      );

    // u3-t4: Türkiye Hukuki Çerçevesi (Anayasa 10-42-61, 5378) ve Erişim Zinciri
    case "u3-t4":
      return (
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 text-center">
            Görsel Erişim Zinciri · Bir Halka Koparsa Tüm Zincir Kopar!
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5 text-center">
            {["1. Evden Çıkış", "2. Kaldırım", "3. Durak", "4. Otobüs", "5. Bina Girişi", "6. Bilgi/Web"].map((step, i) => (
              <div key={i} className="bg-white border border-blue-200 rounded-lg p-2 text-[11px] font-bold text-slate-800">
                {step}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center pt-1">
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-2 text-xs">
              <strong>Anayasa Md. 10:</strong> Pozitif Ayrımcılık
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-2 text-xs">
              <strong>Anayasa Md. 42:</strong> Eğitim Hakkı
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-2 text-xs">
              <strong>Anayasa Md. 61:</strong> Devlet Korur
            </div>
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-2 text-xs">
              <strong>5378 Kanun:</strong> 2005 Temel Yasa
            </div>
          </div>
        </div>
      );

    // u4-t1: Fiziksel Engellilik Türleri: Omurilik Yaralanması, Serebral Palsi ve Kas Hastalıkları
    case "u4-t1":
      return (
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 text-center">
            Görsel Beden Şeması · Parapleji vs Tetrapleji vs Serebral Palsi
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-white border-2 border-blue-200 rounded-xl p-3.5 text-center">
              <div className="text-2xl mb-1">🦵</div>
              <div className="font-bold text-sm text-slate-900">Parapleji</div>
              <div className="text-xs font-bold text-blue-700 mt-0.5">Belden Aşağı (2 Uzuv)</div>
              <div className="text-xs text-slate-600 mt-1">
                Sırt/bel omuriliği (Örn: T10) yaralanması. <strong>Kollar sağlam, bacaklar felç.</strong>
              </div>
            </div>
            <div className="bg-white border-2 border-purple-200 rounded-xl p-3.5 text-center">
              <div className="text-2xl mb-1">🧍</div>
              <div className="font-bold text-sm text-slate-900">Tetrapleji (Kuadripleji)</div>
              <div className="text-xs font-bold text-purple-700 mt-0.5">Boyundan Aşağı (4 Uzuv)</div>
              <div className="text-xs text-slate-600 mt-1">
                Boyun (Servikal) yaralanması. <strong>Hem kollar hem bacaklar</strong> etkilenir.
              </div>
            </div>
            <div className="bg-white border-2 border-emerald-200 rounded-xl p-3.5 text-center">
              <div className="text-2xl mb-1">🧠</div>
              <div className="font-bold text-sm text-slate-900">Serebral Palsi (SP)</div>
              <div className="text-xs font-bold text-emerald-700 mt-0.5">İlerleyici Değildir!</div>
              <div className="text-xs text-slate-600 mt-1">
                Erken beyin gelişiminde oluşan kalıcı ama <strong>kötüleşmeyen</strong> kas/duruş bozukluğu.
              </div>
            </div>
          </div>
        </div>
      );

    // u4-t2: DSÖ ICF Sınıflandırması (2001) ve Türkiye İstatistikleri / Raporlar
    case "u4-t2":
      return (
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 text-center">
            Görsel İnfografik · DSÖ ICF Modeli & ÇÖZGER / Erişkin Raporu
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-white border-2 border-blue-200 rounded-xl p-3.5">
              <div className="font-bold text-xs text-blue-800 uppercase mb-2">
                🧩 DSÖ ICF (2001) Biyopsikososyal Model
              </div>
              <div className="space-y-1.5 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span><strong>Vücut Yapısı & İşlevi</strong> (Anatomik durum)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span><strong>Etkinlik & Katılım</strong> (Günlük yaşam & toplum)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span><strong>Çevresel & Kişisel Faktörler</strong> (Rampa, aile)</span>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-emerald-200 rounded-xl p-3.5">
              <div className="font-bold text-xs text-emerald-800 uppercase mb-2">
                📋 ÇÖZGER vs Erişkin Sağlık Raporu
              </div>
              <div className="grid grid-cols-2 gap-2 text-center">
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-2">
                  <div className="font-bold text-xs text-amber-900">👶 18 Yaş Altı</div>
                  <div className="text-[11px] text-slate-700 mt-0.5"><strong>ÇÖZGER</strong> (ÖKGV ibaresi)</div>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-2">
                  <div className="font-bold text-xs text-emerald-900">🧑 18 Yaş Üstü</div>
                  <div className="text-[11px] text-slate-700 mt-0.5"><strong>Erişkin (%40+)</strong> Balthazard</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    // u4-t3: İstihdam Kotaları (4857 & 657), Sosyal Yardımlar (2022 & 2828) ve Bakım
    case "u4-t3":
      return (
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 text-center">
            Görsel Sayı Şifreleri · İstihdam Kotaları ve Yardım Kanunları
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center">
            <div className="bg-white border-2 border-blue-200 rounded-xl p-3">
              <div className="font-mono font-black text-base text-blue-700">%3</div>
              <div className="font-bold text-xs text-slate-900 mt-1">Özel Sektör (4857)</div>
              <div className="text-[11px] text-slate-600 mt-0.5">50+ işçi olan özel iş yeri</div>
            </div>
            <div className="bg-white border-2 border-purple-200 rounded-xl p-3">
              <div className="font-mono font-black text-base text-purple-700">%4</div>
              <div className="font-bold text-xs text-slate-900 mt-1">Kamu İşçi (4857)</div>
              <div className="text-[11px] text-slate-600 mt-0.5">Devlet memuru (657): %3</div>
            </div>
            <div className="bg-white border-2 border-emerald-200 rounded-xl p-3">
              <div className="font-mono font-black text-base text-emerald-700">2022</div>
              <div className="font-bold text-xs text-slate-900 mt-1">Engelli Aylığı</div>
              <div className="text-[11px] text-slate-600 mt-0.5">Gelir &lt; 1/3 Asgari Ücret</div>
            </div>
            <div className="bg-white border-2 border-amber-200 rounded-xl p-3">
              <div className="font-mono font-black text-base text-amber-700">2828</div>
              <div className="font-bold text-xs text-slate-900 mt-1">Evde Bakım</div>
              <div className="text-[11px] text-slate-600 mt-0.5">"Tam Bağımlı" + Gelir &lt; 2/3</div>
            </div>
          </div>
        </div>
      );

    // u4-t4: Multidisipliner Ekip, Etik Dil ve Vaka Analizi: Mert (24 Yaş, Parapleji)
    case "u4-t4":
      return (
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 text-center">
            Görsel Vaka Özeti · 24 Yaşındaki Mert (T10 Parapleji) Müdahale Planı
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-white border-2 border-amber-200 rounded-xl p-3.5">
              <div className="text-xs font-bold text-amber-800 uppercase">🎯 1. Mikro Düzey</div>
              <div className="font-bold text-sm text-slate-900 mt-0.5">Mert ve Ailesi</div>
              <div className="text-xs text-slate-600 mt-1">
                Yas danışmanlığı, babanın <strong>"kuruma yatırma"</strong> fikrini değiştirme ve ev içi tadilat (Ergoterapist ile).
              </div>
            </div>
            <div className="bg-white border-2 border-emerald-200 rounded-xl p-3.5">
              <div className="text-xs font-bold text-emerald-800 uppercase">🤝 2. Mezo Düzey</div>
              <div className="font-bold text-sm text-slate-900 mt-0.5">Akran & Kurumlar</div>
              <div className="text-xs text-slate-600 mt-1">
                Omurilik felçlileri <strong>akran grubu</strong> ile tanıştırma, engelsiz ulaşım ve meslek kursu.
              </div>
            </div>
            <div className="bg-white border-2 border-blue-200 rounded-xl p-3.5">
              <div className="text-xs font-bold text-blue-800 uppercase">🏛️ 3. Makro Düzey</div>
              <div className="font-bold text-sm text-slate-900 mt-0.5">Hak & Politika</div>
              <div className="text-xs text-slate-600 mt-1">
                <strong>EKPSS / İş-Kur</strong> istihdam yönlendirmesi, evde bakım aylığı ve belediye rampa savunuculuğu.
              </div>
            </div>
          </div>
        </div>
      );

    default:
      return (
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex items-center gap-3">
          <AlertTriangle className="w-5 h-5 text-blue-600 shrink-0" />
          <span className="text-xs text-slate-600">Görsel hafıza kartı yüklendi.</span>
        </div>
      );
  }
};
