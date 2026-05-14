# PARA Method Project Context

이 프로젝트는 pi-coding-agent 를 위한 지식 관리 및 작업 라이프사이클 가이드를 제공합니다.

## Language

**Order:**
PARA Method의 4가지 카테고리 중 하나. 시작과 끝이 있는 구체적인 작업
_Avoid_: Project, Task, Work

**Area:**
PARA Method의 4가지 카테고리 중 하나. 지속적인 관심사/책임 영역
_Avoid_: Domain, Area of Responsibility

**Resource:**
PARA Method의 4가지 카테고리 중 하나. 잠재적으로 유용한 참고 자료
_Avoid_: Material, Reference, Info

**Archive:**
PARA Method의 4가지 카테고리 중 하나. 완료된 작업/보존 자료
_Avoid_: History, Past, Completed

**Project:**
8자리 increment 번호 + 동사 형태의 작업명으로 식별되는 단위 작업
_Avoid_: Ticket, Issue, Task

**Milestone:**
Project 내에서 완료 확인을 위한 중간 단계
_Avoid_: Step, Phase

## Relationships

- **PARA Method** → Projects, Areas, Resources, Archives
- **Project** → Milestones (하나 이상의 마일스톤 포함)
- **Milestone** → Project 문서 갱신 + Area 업데이트 (필요 시)
- **Completed Project** → Archive 이관

## Example dialogue

> **Dev:** "PARA Method에서 Project와 Area의 차이는 무엇인가요?"
> **Guide:** "**Project**는 특정 결과를 창출하기 위한 활동으로 시작과 끝이 있습니다. 반면 **Area**는 지속적인 관심사/책임 영역으로 계속 유지되어야 합니다."

> **Dev:** "작업이 완료되면 어떻게 하나요?"
> **Guide:** "마일스톤 단위로 확인하고, 완료 시 Project 문서를 Archive로 이관합니다. 폴더명 뒤에 `-yyyymmdd` 형식으로 완료일을 추가합니다."

## Flagged ambiguities

- "Project"와 "Task"는 동의어로 사용될 수 있으나, 이 프로젝트에서는 **Project**만 사용
- "Area"는 일반적인 영역 개념과 PARA Method의 Area가 다를 수 있음 - PARA Method 맥락에서만 사용
- "Document"는 Project 문서를 의미하며, 다른 자료(리소스/아카이브)와 구분
