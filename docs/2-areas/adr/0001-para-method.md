# ADR-0001: PARA Method for Project Lifecycle

## Context

pi-coding-agent 프로젝트는 지식 관리와 작업 라이프사이클을 체계화해야 할 필요가 있습니다. 기존의 단순한 문서 구조는 확장성과 유지보수 측면에서 한계가 있었습니다.

## Decision

PARA Method (Projects, Areas, Resources, Archives)를 기반으로 문서 구조와 작업 라이프사이클을 재설계하기로 결정했습니다.

### Structure

```
docs/
├── 1-projects/          # 시작과 끝이 있는 구체적인 작업
├── 2-areas/             # 지속적인 관심사/책임 영역
│   ├── adr/            # Architectural Decision Records
│   └── para-method/    # PARA Method 가이드
├── 3-resources/        # 참고 자료/템플릿
└── 4-archives/         # 완료된 작업 보존
```

### Workflow

1. **Resource 수집** — `docs/3-resources/`에 관련 정보 수집
2. **Plan** — `docs/2-areas/`에 Area별 계획 작성
3. **Project 생성** — `docs/1-projects/{8자리번호}_{작업명}/`에 Project 문서 생성
4. **작업 진행** — 마일스톤 단위로 진행 및 확인
5. **Area 업데이트** — 필요 시 Area 문서 갱신
6. **Project 갱신** — 마일스톤 완료 시 Project 문서 업데이트
7. **Archive 이관** — 마일스톤 완료 후 `docs/4-archives/{번호}_{작업명}-yyyymmdd/`로 이관

## Status

Approved — Implementation 시작

## References

- [PARA Method Guide](../para-method/para-method.md)
- `AGENTS.md` — Agent skills 설정
- `docs/CONTEXT.md` — Domain language
