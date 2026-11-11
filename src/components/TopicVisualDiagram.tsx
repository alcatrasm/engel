import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { TopicVisualSchema } from "../data/courseData";

interface TopicVisualDiagramProps {
  topicId: string;
  visualSchema?: TopicVisualSchema;
  keepInMind?: string;
}

const COLOR_STYLES: Record<
  "blue" | "emerald" | "amber" | "purple" | "rose",
  { border: string; badgeBg: string; badgeText: string; highlightText: string }
> = {
  blue: {
    border: "border-blue-200",
    badgeBg: "bg-blue-100",
    badgeText: "text-blue-700",
    highlightText: "text-blue-700"
  },
  emerald: {
    border: "border-emerald-200",
    badgeBg: "bg-emerald-100",
    badgeText: "text-emerald-700",
    highlightText: "text-emerald-700"
  },
  amber: {
    border: "border-amber-200",
    badgeBg: "bg-amber-100",
    badgeText: "text-amber-700",
    highlightText: "text-amber-700"
  },
  purple: {
    border: "border-purple-200",
    badgeBg: "bg-purple-100",
    badgeText: "text-purple-700",
    highlightText: "text-purple-700"
  },
  rose: {
    border: "border-rose-200",
    badgeBg: "bg-rose-100",
    badgeText: "text-rose-700",
    highlightText: "text-rose-700"
  }
};

export const TopicVisualDiagram: React.FC<TopicVisualDiagramProps> = ({
  topicId,
  visualSchema,
  keepInMind
}) => {
  // 1. If the topic card has a structured visualSchema, render its 3-card infographic
  if (visualSchema && visualSchema.items.length > 0) {
    return (
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5">
        <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 text-center">
          {visualSchema.title}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
          {visualSchema.items.map((item, idx) => {
            const style = COLOR_STYLES[item.color] || COLOR_STYLES.blue;
            return (
              <div
                key={idx}
                className={`bg-white border-2 ${style.border} rounded-xl p-3.5 shadow-2xs`}
              >
                <div
                  className={`w-11 h-11 mx-auto rounded-2xl ${style.badgeBg} ${style.badgeText} flex items-center justify-center text-xl mb-2`}
                >
                  {item.icon}
                </div>
                <div className="font-bold text-sm text-slate-900">{item.label}</div>
                <div className={`text-xs font-bold ${style.highlightText} mt-0.5`}>
                  {item.highlight}
                </div>
                <div className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {item.detail}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // 2. Custom bespoke diagrams for specific topics
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

    // u1-t5: Zihinsel Engellilik (16 Yaş), Çoklu Yetersizlik ve Öğrenme Güçlüğü
    case "u1-t5":
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
                Ağır zihinsel + en az 1 ek engel. <em>Kör-sağırlık hariç!</em>
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
                <strong>Zeka normaldir!</strong> Disleksi (okuma) ve diskalkuli.
              </div>
            </div>
          </div>
        </div>
      );

    // u2-t1 & u2-t3: Sosyal İnşacı Yaklaşım, Etiketleme ve Damgalama (Stigma)
    case "u2-t1":
    case "u2-t3":
      return (
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 text-center">
            Görsel Zincir · Toplum Nasıl İnşa Eder ve Damgalar? (Goffman)
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2">
            <div className="flex-1 bg-white border-2 border-slate-200 rounded-xl p-3.5 text-center">
              <div className="text-2xl mb-1">🏗️</div>
              <div className="font-bold text-xs text-slate-900">1. Sosyal İnşa</div>
              <div className="text-xs text-slate-600 mt-1">
                Toplum ve dil kendi kafasına göre <strong>"Normal İnsan"</strong> kalıbı üretir
              </div>
            </div>
            <div className="flex justify-center text-slate-400">
              <ArrowRight className="w-5 h-5 rotate-90 sm:rotate-0" />
            </div>
            <div className="flex-1 bg-white border-2 border-amber-200 rounded-xl p-3.5 text-center">
              <div className="text-2xl mb-1">🏷️</div>
              <div className="font-bold text-xs text-slate-900">2. Etiketleme (Becker)</div>
              <div className="text-xs text-slate-600 mt-1">
                Kalıba uymayana <strong>"Yetersiz / Eksik"</strong> etiketi yapıştırılır
              </div>
            </div>
            <div className="flex justify-center text-slate-400">
              <ArrowRight className="w-5 h-5 rotate-90 sm:rotate-0" />
            </div>
            <div className="flex-1 bg-white border-2 border-rose-200 rounded-xl p-3.5 text-center">
              <div className="text-2xl mb-1">💔</div>
              <div className="font-bold text-xs text-slate-900">3. Damgalama (Goffman)</div>
              <div className="text-xs text-slate-600 mt-1">
                Sosyal itibar zedelenir; kişi <strong>bilgi kontrolü</strong> ile gizlemeye çalışır
              </div>
            </div>
          </div>
        </div>
      );

    // u2-t6: Ekolojik Sistemler Kuramı (Bronfenbrenner)
    case "u2-t6":
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
                  🏫 MEZO SİSTEM (Aile ↔ Okul ↔ Rehabilitasyon İletişimi)
                </div>
                <div className="bg-white border-2 border-amber-300 rounded-lg p-2.5 shadow-2xs">
                  <div className="text-xs font-bold text-amber-900">
                    🎯 MİKRO SİSTEM (Bireyin Kendisi, Ailesi ve Sınıfı)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    // u2-t8: Feminist Engellilik Kuramı
    case "u2-t8":
      return (
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 text-center">
            Görsel Şema · Feminist Engellilik Kuramı (Garland-Thomson)
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
            <div className="bg-white border-2 border-purple-200 rounded-xl p-3.5">
              <div className="text-2xl mb-1">👩</div>
              <div className="font-bold text-sm text-slate-900">Çifte Eşitsizlik</div>
              <div className="text-xs text-slate-600 mt-1">
                Hem <strong>toplumsal cinsiyet</strong> hem de <strong>engellilik</strong> nedeniyle çoklu baskı.
              </div>
            </div>
            <div className="bg-white border-2 border-rose-200 rounded-xl p-3.5">
              <div className="text-2xl mb-1">🚫</div>
              <div className="font-bold text-sm text-slate-900">Beden & Temsil</div>
              <div className="text-xs text-slate-600 mt-1">
                Engelli kadınların <strong>"cinsiyetsiz / anne olamaz"</strong> görülmesine karşı çıkar.
              </div>
            </div>
            <div className="bg-white border-2 border-emerald-200 rounded-xl p-3.5">
              <div className="text-2xl mb-1">✊</div>
              <div className="font-bold text-sm text-slate-900">Özneleşme</div>
              <div className="text-xs text-slate-600 mt-1">
                Yardım nesnesi değil, kendi bedeni ve yaşamı üzerinde söz sahibi kadın.
              </div>
            </div>
          </div>
        </div>
      );

    // u2-t12: Crip Teorisi
    case "u2-t12":
      return (
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 text-center">
            Görsel 3 Kavram · Crip (Sakat) Teorisi (Robert McRuer, 2006)
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
            <div className="bg-white border-2 border-purple-200 rounded-xl p-3.5">
              <div className="text-2xl mb-1">🏳️‍🌈</div>
              <div className="font-bold text-sm text-slate-900">Queer + Engellilik</div>
              <div className="text-xs text-slate-600 mt-1">
                Engellilik çalışmaları ile <strong>Queer teorinin</strong> eleştirel birleşimidir.
              </div>
            </div>
            <div className="bg-white border-2 border-rose-200 rounded-xl p-3.5">
              <div className="text-2xl mb-1">🚫</div>
              <div className="font-bold text-sm text-slate-900">Zorunlu Engelsizlik</div>
              <div className="text-xs text-slate-600 mt-1">
                Toplumun herkesi <strong>normatif ve sağlam bedene</strong> zorlamasını eleştirir.
              </div>
            </div>
            <div className="bg-white border-2 border-emerald-200 rounded-xl p-3.5">
              <div className="text-2xl mb-1">✊</div>
              <div className="font-bold text-sm text-slate-900">Politik Sahiplenme</div>
              <div className="text-xs text-slate-600 mt-1">
                Argo <strong>"Crip / Sakat"</strong> kelimesini utanç değil politik direniş bayrağı yapar.
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
              <div className="text-xs text-slate-600 mt-1">Onur, özerklik ve devletin ödevi</div>
            </div>
          </div>
        </div>
      );

    // u3-t4: Evrensel Tasarım, Erişilebilirlik ve Makul Düzenleme
    case "u3-t4":
      return (
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 text-center">
            Görsel Fark Şeması · Evrensel Tasarım vs Erişilebilirlik vs Makul Düzenleme
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
            <div className="bg-white border-2 border-purple-200 rounded-xl p-3.5">
              <div className="text-2xl mb-1">🚪</div>
              <div className="font-bold text-sm text-slate-900">Evrensel Tasarım</div>
              <div className="text-xs font-bold text-purple-700 mt-0.5">En Baştan Herkes İçin</div>
              <div className="text-xs text-slate-600 mt-1">
                Ek uyarlamaya gerek kalmadan <strong>tüm insanların</strong> kullanabildiği tasarım.
              </div>
            </div>
            <div className="bg-white border-2 border-blue-200 rounded-xl p-3.5">
              <div className="text-2xl mb-1">♿</div>
              <div className="font-bold text-sm text-slate-900">Erişilebilirlik</div>
              <div className="text-xs font-bold text-blue-700 mt-0.5">Genel & Önleyici</div>
              <div className="text-xs text-slate-600 mt-1">
                Bina, ulaşım ve web sitelerinin <strong>gruplar için</strong> önceden ulaşılabilir olması.
              </div>
            </div>
            <div className="bg-white border-2 border-amber-300 rounded-xl p-3.5">
              <div className="text-2xl mb-1">👤</div>
              <div className="font-bold text-sm text-slate-900">Makul Düzenleme</div>
              <div className="text-xs font-bold text-amber-800 mt-0.5">Bireysel & Somut Durum</div>
              <div className="text-xs text-slate-600 mt-1">
                <strong>Tek bir kişiye</strong> özel masa/sınav uyarlaması. <strong>Reddi ayrımcılıktır!</strong>
              </div>
            </div>
          </div>
        </div>
      );

    // u3-t14: Türkiye Hukuki Çerçevesi (Anayasa 10-42-61-90 ve 5378)
    case "u3-t14":
      return (
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 text-center">
            Görsel Hukuk Piramidi · Anayasa Maddeleri ve 5378 Sayılı Kanun
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
            <div className="bg-white border-2 border-amber-200 rounded-xl p-3 text-xs">
              <div className="font-black text-amber-800 text-sm">Anayasa Md. 10</div>
              <div className="text-slate-600 mt-1">Kanun önünde eşitlik & pozitif tedbirler</div>
            </div>
            <div className="bg-white border-2 border-blue-200 rounded-xl p-3 text-xs">
              <div className="font-black text-blue-800 text-sm">Anayasa Md. 42</div>
              <div className="text-slate-600 mt-1">Kimse eğitim hakkından yoksun bırakılamaz</div>
            </div>
            <div className="bg-white border-2 border-purple-200 rounded-xl p-3 text-xs">
              <div className="font-black text-purple-800 text-sm">Anayasa Md. 61</div>
              <div className="text-slate-600 mt-1">Devlet engellileri korur ve intibak sağlar</div>
            </div>
            <div className="bg-white border-2 border-emerald-200 rounded-xl p-3 text-xs">
              <div className="font-black text-emerald-800 text-sm">5378 Kanunu</div>
              <div className="text-slate-600 mt-1">2005 tarihli Engelliler Hakkında Kanun</div>
            </div>
          </div>
        </div>
      );

    // u4-t2: Omurilik Yaralanmaları: Parapleji vs Tetrapleji
    case "u4-t2":
      return (
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 text-center">
            Görsel Beden Şeması · Omurilik Yaralanmalarında Parapleji vs Tetrapleji
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-white border-2 border-blue-200 rounded-xl p-3.5 text-center">
              <div className="text-2xl mb-1">🦵</div>
              <div className="font-bold text-sm text-slate-900">Parapleji</div>
              <div className="text-xs font-bold text-blue-700 mt-0.5">Belden Aşağı (Bacaklar)</div>
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
            <div className="bg-white border-2 border-rose-200 rounded-xl p-3.5 text-center">
              <div className="text-2xl mb-1">🛏️</div>
              <div className="font-bold text-sm text-slate-900">İkincil Sorunlar</div>
              <div className="text-xs font-bold text-rose-700 mt-0.5">Bası Yarası & Mesane</div>
              <div className="text-xs text-slate-600 mt-1">
                Dekübit (bası yarası), spastisite ve mesane-bağırsak kontrol sorunları.
              </div>
            </div>
          </div>
        </div>
      );

    // u4-t5: DSÖ ICF Sınıflandırması (2001)
    case "u4-t5":
      return (
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 text-center">
            Görsel İnfografik · DSÖ ICF (2001) Biyopsikososyal Modeli
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-white border-2 border-blue-200 rounded-xl p-3.5">
              <div className="font-bold text-xs text-blue-800 uppercase mb-2">
                🧩 1. İşlevsellik ve Yetiyitimi Boyutu
              </div>
              <div className="space-y-1.5 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span><strong>Vücut Yapısı & İşlevi</strong> (Kas gücü, organ yapısı)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span><strong>Etkinlik</strong> (Yürüme, giyinme gibi bireysel görevler)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span><strong>Katılım</strong> (Okul, iş ve toplumsal yaşamda yer alma)</span>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-emerald-200 rounded-xl p-3.5">
              <div className="font-bold text-xs text-emerald-800 uppercase mb-2">
                🌍 2. Bağlamsal Etkenler (Farkı Yaratan!)
              </div>
              <div className="grid grid-cols-2 gap-2 text-center">
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-2">
                  <div className="font-bold text-xs text-amber-900">🏙️ Çevresel</div>
                  <div className="text-[11px] text-slate-700 mt-0.5">Asansör, rampa, aile tutumu, gelir, yasalar</div>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-2">
                  <div className="font-bold text-xs text-emerald-900">👤 Kişisel</div>
                  <div className="text-[11px] text-slate-700 mt-0.5">Yaş, cinsiyet, eğitim, baş etme gücü</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    // u4-t8 & u4-t9: İstihdam Kotaları ve Sosyal Yardımlar
    case "u4-t8":
    case "u4-t9":
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
              <div className="text-[11px] text-slate-600 mt-0.5">"Tam Bağımlı" + Umut Evleri</div>
            </div>
          </div>
        </div>
      );

    // u4-t14: Hak Temelli Etik İletişim ve Dil
    case "u4-t14":
      return (
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 text-center">
            Görsel İletişim Etiği · 3 Altın Kural
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
            <div className="bg-white border-2 border-emerald-200 rounded-xl p-3.5">
              <div className="text-2xl mb-1">🗣️</div>
              <div className="font-bold text-sm text-slate-900">Doğru Dil Kullan</div>
              <div className="text-xs text-slate-600 mt-1">
                "Sandalyeye mahkûm / özürlü" DEĞİL; <strong>"Tekerlekli sandalye kullanan kişi"</strong>.
              </div>
            </div>
            <div className="bg-white border-2 border-blue-200 rounded-xl p-3.5">
              <div className="text-2xl mb-1">👀</div>
              <div className="font-bold text-sm text-slate-900">Doğrudan Konuş</div>
              <div className="text-xs text-slate-600 mt-1">
                Refakatçiye değil <strong>doğrudan kişinin kendisine</strong> hitap et ve göz hizasına in.
              </div>
            </div>
            <div className="bg-white border-2 border-rose-200 rounded-xl p-3.5">
              <div className="text-2xl mb-1">✋</div>
              <div className="font-bold text-sm text-slate-900">İzinsiz Dokunma!</div>
              <div className="text-xs text-slate-600 mt-1">
                Sandalye ve beyaz baston <strong>bedenin uzantısıdır</strong>; izin almadan itme/tutma.
              </div>
            </div>
          </div>
        </div>
      );

    // u4-t15: Mert Vakası
    case "u4-t15":
      return (
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 text-center">
            Görsel Vaka Özeti · 24 Yaşındaki Mert (T10 Parapleji) Müdahale Planı
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-white border-2 border-amber-200 rounded-xl p-3.5">
              <div className="text-xs font-bold text-amber-800 uppercase">🎯 1. Mikro Düzey</div>
              <div className="font-bold text-sm text-slate-900 mt-0.5">Mert (Bireysel)</div>
              <div className="text-xs text-slate-600 mt-1">
                Psikososyal destek, sağlık raporu, 2022/2828 maaşı ve <strong>İŞKUR/EKPSS</strong> yönlendirmesi.
              </div>
            </div>
            <div className="bg-white border-2 border-emerald-200 rounded-xl p-3.5">
              <div className="text-xs font-bold text-emerald-800 uppercase">🤝 2. Mezzo Düzey</div>
              <div className="font-bold text-sm text-slate-900 mt-0.5">Aile & Akran Grubu</div>
              <div className="text-xs text-slate-600 mt-1">
                Aile danışmanlığı (kuruma yatırma yerine ev içi destek), <strong>akran grubu</strong> ve bina rampası.
              </div>
            </div>
            <div className="bg-white border-2 border-blue-200 rounded-xl p-3.5">
              <div className="text-xs font-bold text-blue-800 uppercase">🏛️ 3. Makro Düzey</div>
              <div className="font-bold text-sm text-slate-900 mt-0.5">Belediye & Politika</div>
              <div className="text-xs text-slate-600 mt-1">
                İlçedeki kaldırım/ulaşım engellerinin belediyeye ve <strong>Erişilebilirlik Komisyonu'na</strong> bildirimi.
              </div>
            </div>
          </div>
        </div>
      );

    default: {
      // Automatic 3-column breakdown from keepInMind ("A | B | C") if ever needed
      const parts = (keepInMind || "").split("|").map((s) => s.trim()).filter(Boolean);
      return (
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 text-center">
            Görsel Hafıza Şifresi
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
            {parts.slice(0, 3).map((part, i) => (
              <div key={i} className="bg-white border-2 border-blue-200 rounded-xl p-3.5">
                <div className="text-xs font-bold text-slate-800">{part}</div>
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
};
