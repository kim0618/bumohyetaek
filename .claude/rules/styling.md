# 스타일링 / 접근성 규칙

시니어·가족 대상이라 접근성 기준이 일반 프로젝트보다 엄격. globals.css에 정의된 공용 클래스를 재사용하고 새 유틸을 중복 생성하지 말 것.

## 컨테이너 클래스

`max-w-[...]` 임의 너비 금지. [src/app/globals.css](../../src/app/globals.css)의 3종 컨테이너 사용.

| 클래스 | 용도 | 너비 |
|--------|------|------|
| `.container-content` | 글 본문 | 48rem (768px) |
| `.container-wide` | 목록·카드 그리드 | 64rem (1024px) |
| `.container-site` | 헤더·푸터 | 72rem (1152px) |

## 박스·배지·버튼

직접 `bg-blue-50 border p-4 rounded`로 박스를 재정의하지 말고 공용 클래스 사용.

- `.box-info` / `.box-tip` / `.box-warning` / `.box-summary` - 정보 박스 4종 (섹션 타입과 매칭)
- `.badge-blue` / `.badge-green` / `.badge-amber` / `.badge-gray` - 배지
- `.btn-primary` / `.btn-outline` / `.btn-ghost` / `.btn-sm` - 버튼
- `.card` / `.card-link` - 카드
- `.text-meta` - 보조 텍스트 (text-sm text-gray-500)

## 시니어 친화 기준

globals.css에 전역 설정. 페이지·컴포넌트에서 override 금지.

- 기본 폰트: **18px** (`html { font-size: 112.5% }`). `text-base`가 16px이 아니라 18px.
- 본문 줄간격: 1.85 (body).
- 한국어 줄바꿈: `word-break: keep-all` (어절 단위로 끊김).
- 최소 터치 영역: **44px** (모든 버튼·링크). 아이콘 버튼도 패딩으로 44x44 확보.
- 폰트 패밀리: Pretendard Variable (CDN 로드).

## 색상 / 대비 (WCAG 2.1 AA)

- brand blue: `#1D4ED8` (대비 5.74:1)
- 회색 텍스트: **`text-gray-500` 이상만 사용**. `text-gray-400`/`300` 금지 (대비 미달).
- Tailwind `colors.brand`: DEFAULT / light(#DBEAFE) / hover(#1E40AF) / dark(#1E3A8A).

## 기타 접근성

- 본문 바로가기 링크 (`#main-content`) 유지
- `:focus-visible` 포커스 스타일 제거 금지
- `<html lang="ko">` 변경 금지
- 이미지·아이콘에 `alt` 또는 `aria-label` 필수
