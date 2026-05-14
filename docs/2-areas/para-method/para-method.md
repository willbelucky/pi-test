# PARA Method 가이드라인

PARA (Projects, Areas, Resources, Archives)는 정보 관리의 기본 프레임워크입니다. 이 가이드는 pi-coding-agent 프로젝트에서 PARA Method를 활용한 작업 라이프사이클을 정의합니다.

## PARA 기본 개념

| 카테고리 | 설명 | 예시 |
|-----------|-------|------|
| **Projects** | 특정 결과를 창출하기 위한 활동 (시작과 끝이 있음) | "PARA Method 문서 작성", "Skill 추가 개발" |
| **Areas** | 지속적인 관심사/책임 영역 (계속 유지되어야 함) | "Agent Skill 개발", "Documentation 관리" |
| **Resources** | 잠재적으로 유용한 참고 자료/템플릿 | "Skill 작성 체크리스트", "ADR 템플릿" |
| **Archives** | 완료된 작업/보존 가능한 자료 | "2025 Q1 프로젝트 아카이브" |

## 작업 라이프사이클

### 1. Resource 수집 (Resources 폴더)

```
docs/3-resources/
├── skill-template.md
├── adr-template.md
└── checklist.md
```

- 관련 있는 파일/정보를 Resources에 수집
- Project 문서 내에 기입하기 너무 상세한 내용은 별도 파일로 분리 저장

### 2. Plan (Areas 폴더)

```
docs/2-areas/
├── para-method/
│   └── para-method.md  ← 이 문서
└── development-process/
    └── plan.md         ← Area별 계획/개선안
```

- Areas: 지속적인 관심사에 대한 현황과 계획
- 현재 상태 파악 후, 개선이 필요한 부분 문서화

### 3. Project 문서 생성 (1-projects 폴더)

**폴더명 규칙:** `{8자리 increment 문서번호}_{동사 형태의 간단한 작업명}`

```
docs/1-projects/
├── 00000001-create-para-method-doc
│   └── 00000001-create-para-method-doc.md
├── 00000002-add-tdd-skill-template
│   ├── 00000002-add-tdd-skill-template.md
│   └── tdd-checklist.md          ← 분리된 리소스 파일
└── 00000003-refactor-documentation
    └── 00000003-refactor-documentation.md
```

**필수:** 폴더 내에 같은 이름의 md 파일 생성 (Project 문서)

**선택:** 작업과 관련된 상세 내용은 별도 파일로 저장

### 4. 작업 진행 (마일스톤 단위)

- 마일스톤마다 Progress를 작성
- 확인 절차 거침

### 5. Area 업데이트 (필요 시)

작업 중發現한 개선사항을 Areas에 반영

### 6. Project 문서 갱신

마일스톤 완료 시마다 Project 문서를 업데이트

### 7. Archive 이관

**마일스톤 하나 완료 후:**

1. Project 문서를 Archive로 이동
2. 폴더명에 `-yyyymmdd` 형식으로 완료일 추가

```
docs/4-archives/
├── 00000001-create-para-method-doc-20260514
│   └── 00000001-create-para-method-doc.md
├── 00000002-add-tdd-skill-template-20260514
│   ├── 00000002-add-tdd-skill-template.md
│   └── tdd-checklist.md
└── 00000003-refactor-documentation-20260514
    └── 00000003-refactor-documentation.md
```

## 규칙 요약

| 단계 | 폴더 | 문서명 규칙 | Notes |
|------|------|-------------|-------|
| Resource 수집 | `docs/3-resources/` | 자유 | 참고 자료/템플릿 |
| Plan | `docs/2-areas/` | 자유 | Area별 계획 |
| Project 생성 | `docs/1-projects/` | `{8자리}_{동사_작업명}/` | 필수 md 파일 |
| Archive 이관 | `docs/4-archives/` | `{8자리}_{동사_작업명}-yyyymmdd/` | 완료일 추가 |

## 체크리스트

- [ ] Resources 수집
- [ ] Area Plan 작성/업데이트
- [ ] Project 문서 생성 (8자리 번호 + 동사 이름)
- [ ] 마일스톤 단위 작업
- [ ] Area 업데이트 (필요 시)
- [ ] Project 문서 갱신
- [ ] Archive 이관 (완료일 추가)
