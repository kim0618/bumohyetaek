# bumohyetaek 회생 수술 실행 계획 (2026-07-27 수립, 착수 대기)

트리아지 결과 = `revival-triage-2026-07-27.md`
분류: 220편 → **A보호 66 / B통합 55 / C제거 99**
수술 후 색인 예상: 66 + 합본 약 14편 = **약 80편** (목표 80~85 적중)

---

## 사전 확정 사실 (조사 완료)

| 항목 | 실측 결과 |
|---|---|
| 배포처 | **Cloudflare Pages** (`npx wrangler pages deploy out --project-name=bumohyetaek`) |
| 리다이렉트 수단 | **`public/_redirects` 파일**, 301 정식 지원. Pages 정적 리다이렉트 한도는 수천 줄 규모라 154줄은 여유 |
| rsync --delete | **불필요**. Pages는 배포마다 `out/` 전체를 새로 올리므로 삭제 파일이 서버에 남지 않음 |
| noindex 인프라 | **불필요**. 파일 삭제로 페이지·사이트맵 동시 제거 (sitemap이 `getAllContent()` 자동 생성) |
| 내부링크 방식 | `relatedSlugs` 배열만 사용. 본문 인라인 `/guide/` 링크 **0건** |
| 끊기는 내부링크 | **146개 / 보호글 64편**에 영향 (삭제·통합분 참조) |
| 하드코딩 참조 | categoryDetails.ts 31건, hubDetails.ts 7건, downloads.ts 2건 |
| 현재 깨진 링크 | 사이트 내부 0건 / 제이퍼 → bumo 1건 (404 실측) |

---

## 우선순위 1 - C 99편 제거 + 301 (반나절, 기계적, 위험 최저)

수술 효과의 대부분을 차지하면서 글쓰기가 필요 없는 구간. 여기만 끝나도 색인 220 → 121편으로 45% 축소.

1. `src/data/articles/**` 에서 C 99개 파일 삭제
2. `public/_redirects` 생성 - C 99줄, 허브별 배정
   - `/hub/health-checkup` 29 · `/hub/prepare-care` 21 · `/hub/financial-safety` 21 · `/hub/retirement-income` 15 · `/hub/government-benefits` 13
   - 형식: `/guide/{slug}/ /hub/{hub}/ 301` (trailingSlash:true 기준, 무슬래시 변형도 함께 기재)
   - 허브 5개 전부 라이브 200 확인 완료
3. 보호글 `relatedSlugs`에서 삭제 슬러그 제거
4. `npm run build` → 빌드 통과 + out/ 페이지 수 확인

**되돌리기**: git에 원본이 있으므로 파일 복원 + 재빌드로 원상복구.

## 우선순위 2 - B 55편 합본 통합 (2~3일, 글쓰기)

색인 121 → 80편. 시간이 가장 많이 드는 구간이라 1번 완료 후 착수.

허브별 분포: retirement-income 15 · health-checkup 14 · prepare-care 9 · government-benefits 9 · financial-safety 8

합본 설계 원칙
- 한 합본에 3~5편 흡수, 총 **약 14편** 목표 (15편을 1편에 몰지 않음 - 분량 과다 + 주제 희석)
- 흡수 대상의 고유 정보(수치·절차·신청처)는 누락 없이 이관, 중복 문단은 1회로 정리
- 합본 slug는 **신규 발급** (기존 슬러그 재사용 금지 - 어느 원본을 우대하는 모양이 되면 나머지 리다이렉트가 자기참조가 됨)
- 합본은 기존 허브에 편입, `hubKey` 지정

작업 순서: 합본 초안 작성 → 원본 55편 삭제 → `_redirects`에 55줄 추가(각 원본 → 해당 합본) → relatedSlugs 재배선

## 우선순위 3 - 정합성 마감 (반나절)

1. `categoryDetails.ts` 31건 / `hubDetails.ts` 7건 / `downloads.ts` 2건의 죽은 슬러그 참조를 생존 글 또는 합본으로 교체
2. 관련글이 전멸하는 보호글 1편(`senior-pneumonia-prevention`) relatedSlugs 재구성
3. 제이퍼 `blog/posts/long-term-care-cost-guide.html`의 깨진 링크 수정
   - 현재 `bumohyetaek.kr/guide/health-care/care-type-selection` → 404
   - 정정 `bumohyetaek.kr/guide/care-type-selection` (단 care-type-selection은 B통합 대상이므로 **합본 주소로 직접 연결**)
4. 제이퍼 → bumo 나머지 15개 링크가 생존 글을 가리키는지 전수 확인
5. `npm run build` + 사이트맵 URL 수 확인(약 80 + 허브·카테고리·정책 페이지)

## 우선순위 4 - 배포와 재색인 (사용자 실행)

1. 사용자: `npx wrangler pages deploy out --project-name=bumohyetaek`
2. 배포 후 즉시 검증 - 삭제 글 URL 3~5개가 301로 허브에 도달하는지, 허브·보호글이 200인지
3. GSC 사이트맵 재제출 + 네이버 서치어드바이저 재수집 요청
4. 제이퍼 배포(링크 수정분)

## 우선순위 5 - 관찰과 판정

- 관찰 3~4개월, **신규 생산 전면 금지**, 월 1회 `/report`만
- `/bumo-refresh`는 보호 66편 + 합본 14편 한정
- 2026-11월 판정: GSC 주 노출 100+ & 실질 키워드 30위권 진입 → 회복 판정 후 주1~2편 재개 / 미달 → 영구 동결

---

## 리스크와 대응

| 리스크 | 대응 |
|---|---|
| 네이버 블로그 본문 링크 전수 파악 불가 (GA는 클릭된 57개만 관측) | 154줄 301로 **모든 옛 주소가 살아있음**. 목록을 몰라도 안전 |
| 합본 품질 저하로 보호 자산까지 손상 | A보호 66편은 합본에 **포함하지 않음**. 통합은 B 55편 안에서만 |
| 배포 시 삭제분이 서버에 잔존 | Cloudflare Pages 특성상 해당 없음 (전체 교체 배포) |
| 리다이렉트 루프·자기참조 | 합본 slug 신규 발급으로 원천 차단, 배포 후 실주소 검증 |
| 되돌리기 필요 | git 복원 + 재빌드. `_redirects` 삭제만으로 리다이렉트도 해제 |

## 가드레일 (수술 중 금지사항)

- 보호 66편의 제목·메타·본문 **일절 무수정** (5/18 메타 7편 차단 전례)
- 수술은 한 번의 파도. 반복 스킬화 금지
- 배포는 사용자 직접, Claude는 빌드까지
