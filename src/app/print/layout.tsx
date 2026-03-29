/**
 * 인쇄 전용 레이아웃
 * 헤더·푸터 없이 콘텐츠만 렌더링
 */
export default function PrintLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-200 print:bg-white">
      {children}
    </div>
  );
}
