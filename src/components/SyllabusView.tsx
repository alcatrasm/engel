import React from "react";
import { SYLLABUS_WEEKS, COURSE_UNITS } from "../data/courseData";
import { FileText, BookOpen, Calendar } from "lucide-react";

interface SyllabusViewProps {
  onOpenUnit: (unitId: string) => void;
}

export const SyllabusView: React.FC<SyllabusViewProps> = ({ onOpenUnit }) => {
  return (
    <div className="max-w-3xl mx-auto space-y-5">
      {/* Top PDF Download Cards */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Yüklü Ders Notları ve Orijinal PDF Dosyaları
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
              2025-2026 Öğretim Yılı · SHZ237 Engellilerle Sosyal Hizmet (Dr. Yunus Serhat Çayır)
            </p>
          </div>
          <a
            href="/assets/aistudio/2026_Engellilerle_Sosyal_Hizmet_Ana_Hatt__66a0d71b.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[42px] px-4 py-2 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl flex items-center gap-2 transition-colors whitespace-nowrap shrink-0"
          >
            <FileText className="w-4 h-4" />
            <span>15 Haftalık Ders Ana Hattı (PDF)</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
          {COURSE_UNITS.map((unit) => (
            <div
              key={unit.id}
              className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between gap-3"
            >
              <div>
                <div className="text-xs text-slate-500">{unit.dateLabel}</div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mt-0.5">
                  {unit.title}
                </h3>
                <p className="text-xs text-slate-600 mt-1">{unit.description}</p>
              </div>
              <div className="flex items-center justify-between gap-2 pt-2 border-t border-slate-200/70">
                <button
                  onClick={() => onOpenUnit(unit.id)}
                  className="min-h-[38px] px-3.5 py-1.5 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Konu Özetlerini Çalış</span>
                </button>
                <a
                  href={unit.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[38px] px-3 py-1.5 text-xs font-medium text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg flex items-center gap-1.5 transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Slayt PDF</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 15-Week Course Outline */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blue-600" />
            <span>15 Haftalık Ders İşleme Planı</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Notları sistemde yüklü olan haftaların yanındaki "Konuya Git" butonuna tıklayarak hemen çalışabilirsiniz.
          </p>
        </div>

        <div className="divide-y divide-slate-100">
          {SYLLABUS_WEEKS.map((item) => (
            <div
              key={item.week}
              className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
            >
              <div className="space-y-0.5">
                <div className="flex items-center gap-2 text-xs text-slate-500 tabular-nums">
                  <span className="font-bold text-slate-800">{item.week}. Hafta</span>
                  <span aria-hidden="true">·</span>
                  <span>{item.date}</span>
                </div>
                <div className="text-sm font-medium text-slate-900">{item.title}</div>
              </div>

              {item.hasNotes && item.unitId ? (
                <button
                  onClick={() => onOpenUnit(item.unitId!)}
                  className="min-h-[38px] px-3.5 py-1.5 text-xs font-medium text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-lg whitespace-nowrap shrink-0 self-start sm:self-center cursor-pointer"
                >
                  Konu Özetine Git →
                </button>
              ) : (
                <span className="text-xs text-slate-400 self-start sm:self-center">
                  {item.week === 8 ? "Sınav Haftası" : "Genel Program"}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
