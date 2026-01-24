// 문제 데이터
const QUESTION_DATA = {
  "subjects": [
    {
      "id": 1,
      "name": "소프트웨어 설계",
      "questions": [
        {
          "id": 1,
          "exam": "2024-1",
          "question": "E-R 다이어그램을 사용하여 객체의 행위를 모델링하며, 객체 식별, 구조 식별, 주제 정의, 속성 및 관계 정의, 서비스 정의 등의 과정으로 구성되는 객체지향 분석 방법론은?",
          "options": ["Coad와 Yourdon 방법", "Booch 방법", "Jacobson 방법", "Wirfs-Brocks 방법"],
          "answer": 1,
          "explanation": "Coad와 Yourdon 방법은 E-R 다이어그램을 사용하여 객체의 행위를 모델링하는 방법론입니다."
        },
        {
          "id": 2,
          "exam": "2024-1",
          "question": "트랜잭션이 올바르게 처리되고 있는지 데이터를 감시하고 제어하는 미들웨어는?",
          "options": ["ORB", "RPC", "HUB", "TP monitor"],
          "answer": 4,
          "explanation": "TP Monitor(Transaction Processing Monitor)는 트랜잭션을 감시하고 제어하는 미들웨어입니다."
        },
        {
          "id": 3,
          "exam": "2024-1",
          "question": "자료 흐름도(Data Flow Diagram)의 구성 요소로 옳은 것은?",
          "options": ["process, data flow, data store, comment", "process, data flow, data store, terminator", "data flow, data store, terminator, data dictionary", "process, data store, terminator, mini-spec"],
          "answer": 2,
          "explanation": "DFD의 구성 요소는 Process(처리), Data Flow(자료흐름), Data Store(자료저장소), Terminator(단말)입니다."
        },
        {
          "id": 4,
          "exam": "2024-1",
          "question": "객체지향에서 정보 은닉과 가장 밀접한 관계가 있는 것은?",
          "options": ["Class", "Encapsulation", "Instance", "Method"],
          "answer": 2,
          "explanation": "캡슐화(Encapsulation)는 정보 은닉과 가장 밀접한 관계가 있는 개념입니다."
        },
        {
          "id": 5,
          "exam": "2024-1",
          "question": "다음 중 자료 사전(Data Dictionary)에서 선택의 의미를 나타내는 것은?",
          "options": ["{ }", "[ ]", "＋", "＝"],
          "answer": 2,
          "explanation": "자료 사전에서 [ ]는 선택(OR)을 의미합니다. { }는 반복, ＋는 연결, ＝는 정의를 나타냅니다."
        },
        {
          "id": 6,
          "exam": "2024-1",
          "question": "소프트웨어 개발 단계에서 요구 분석 과정에 대한 설명으로 거리가 먼 것은?",
          "options": ["분석 결과의 문서화를 통해 향후 유지보수에 유용하게 활용할 수 있다.", "개발 비용이 가장 많이 소요되는 단계이다.", "자료흐름도, 자료 사전 등이 효과적으로 이용될 수 있다.", "보다 구체적인 명세를 위해 소단위 명세서(Mini-Spec)가 활용될 수 있다."],
          "answer": 2,
          "explanation": "요구 분석 단계는 개발 비용이 가장 많이 소요되는 단계가 아닙니다. 구현 단계가 가장 많은 비용이 소요됩니다."
        },
        {
          "id": 7,
          "exam": "2024-1",
          "question": "럼바우(Rumbaugh) 분석 기법에서 정보 모델링이라고도 하며, 시스템에서 요구되는 객체를 찾아내어 속성과 연산 식별 및 객체들 간의 관계를 규정하여 다이어그램을 표시하는 모델링은?",
          "options": ["Dynamic", "Object", "Static", "Function"],
          "answer": 2,
          "explanation": "럼바우 분석의 Object 모델은 정보 모델링으로 객체와 속성, 관계를 다이어그램으로 표현합니다."
        },
        {
          "id": 8,
          "exam": "2024-1",
          "question": "UML(Unified Modeling Language)에 대한 설명 중 틀린 것은?",
          "options": ["기능적 모델은 사용자 측면에서 본 시스템 기능이며, UML에서는 Use case Diagram을 사용한다.", "정적 모델은 객체, 속성, 연관관계, 오퍼레이션의 시스템의 구조를 나타내며, UML에서는 Class Diagram을 사용한다.", "동적 모델은 시스템의 내부 동작을 말하며, UML에서는 Sequence Diagram, State Diagram, Activity Diagram을 사용한다.", "State Diagram은 객체들 사이의 메시지 교환을 나타내며, Sequence Diagram은 하나의 객체가 가진 상태와 그 상태의 변화에 의한 동작순서를 나타낸다."],
          "answer": 4,
          "explanation": "State Diagram은 객체의 상태 변화를 나타내고, Sequence Diagram은 객체들 사이의 메시지 교환을 나타냅니다. 설명이 반대로 되어 있습니다."
        },
        {
          "id": 9,
          "exam": "2024-1",
          "question": "사용자 인터페이스(UI)의 특징으로 틀린 것은?",
          "options": ["구현하고자 하는 결과의 오류를 최소화한다.", "사용자의 편의성을 높임으로써 작업시간을 증가시킨다.", "막연한 작업 기능에 대해 구체적인 방법을 제시하여 준다.", "사용자 중심의 상호 작용이 되도록 한다."],
          "answer": 2,
          "explanation": "사용자의 편의성을 높임으로써 작업시간을 감소시켜야 합니다. 증가시키는 것이 아닙니다."
        },
        {
          "id": 10,
          "exam": "2024-1",
          "question": "GoF(Gangs of Four) 디자인 패턴에 대한 설명으로 틀린 것은?",
          "options": ["Factory Method Pattern은 상위클래스에서 객체를 생성하는 인터페이스를 정의하고, 하위클래스에서 인스턴스를 생성하도록 하는 방식이다.", "Prototype Pattern은 Prototype을 먼저 생성하고 인스턴스를 복제하여 사용하는 구조이다.", "Bridge Pattern은 기존에 구현되어 있는 클래스에 기능 발생 시 기존 클래스를 재사용할 수 있도록 중간에서 맞춰주는 역할을 한다.", "Mediator Pattern은 객체간의 통제와 지시의 역할을 하는 중재자를 두어 객체지향의 목표를 달성하게 해준다."],
          "answer": 3,
          "explanation": "Bridge Pattern은 구현과 추상을 분리하는 패턴이며, 설명은 Adapter Pattern에 해당합니다."
        },
        {
          "id": 11,
          "exam": "2024-1",
          "question": "익스트림 프로그래밍(XP)에 대한 설명으로 틀린 것은?",
          "options": ["빠른 개발을 위해 테스트를 수행하지 않는다.", "사용자의 요구사항은 언제든지 변할 수 있다.", "고객과 직접 대면하며 요구사항을 이야기하기 위해 사용자 스토리(User Story)를 활용할 수 있다.", "기존의 방법론에 비해 실용성(Pragmatism)을 강조한 것이라고 볼 수 있다."],
          "answer": 1,
          "explanation": "XP는 테스트 주도 개발(TDD)을 강조하며, 지속적인 테스트를 수행합니다."
        },
        {
          "id": 12,
          "exam": "2024-1",
          "question": "대표적으로 DOS 및 Unix 등의 운영체제에서 조작을 위해 사용하던 것으로, 정해진 명령 문자열을 입력하여 시스템을 조작하는 사용자 인터페이스(User Interface)는?",
          "options": ["GUI(Graphical User Interface)", "CLI(Command Line Interface)", "CUI(Cell User Interface)", "MUI(Mobile User Interface)"],
          "answer": 2,
          "explanation": "CLI(Command Line Interface)는 명령어를 텍스트로 입력하여 시스템을 조작하는 인터페이스입니다."
        },
        {
          "id": 13,
          "exam": "2024-1",
          "question": "UML 다이어그램 중 정적 다이어그램이 아닌 것은?",
          "options": ["배치 다이어그램", "컴포넌트 다이어그램", "패키지 다이어그램", "순차 다이어그램"],
          "answer": 4,
          "explanation": "순차 다이어그램(Sequence Diagram)은 동적(행위) 다이어그램입니다."
        },
        {
          "id": 14,
          "exam": "2024-1",
          "question": "다음 내용이 설명하는 UI 설계 도구는?\n\n• 디자인 사용 방법 설명, 평가 등을 위해 실제 화면과 유사하게 만든 정적인 형태의 모형\n• 시각적으로만 구성 요소를 배치하는 것으로 일반적으로 실제로 구현되지는 않음",
          "options": ["목업(Mockup)", "스토리보드(Storyboard)", "유스케이스(Usecase)", "프로토타입(Prototype)"],
          "answer": 1,
          "explanation": "목업(Mockup)은 실제 화면과 유사하게 만든 정적인 형태의 모형입니다."
        },
        {
          "id": 15,
          "exam": "2024-1",
          "question": "요구사항 분석에서 비기능적(Nonfunctional) 요구에 대한 설명으로 옳은 것은?",
          "options": ["시스템의 처리량, 반응 시간 등의 성능 요구나 품질 요구는 비기능적 요구에 해당하지 않는다.", "'차량 대여 시스템이 제공하는 모든 화면이 3초 이내에 사용자에게 보여야 한다'는 비기능적 요구이다.", "시스템 구축과 관련된 안전, 보안에 대한 요구사항들은 비기능적 요구에 해당하지 않는다.", "'금융 시스템은 조회, 인출, 입금, 송금의 기능이 있어야 한다'는 비기능적 요구이다."],
          "answer": 2,
          "explanation": "성능에 관한 요구사항(3초 이내)은 비기능적 요구사항입니다. 기능적 요구사항은 시스템이 무엇을 해야 하는지를 나타냅니다."
        },
        {
          "id": 16,
          "exam": "2024-1",
          "question": "명백한 역할을 가지고 독립적으로 존재할 수 있는 시스템의 부분으로, 넓은 의미에서는 재사용되는 모든 단위라고 볼 수 있으며, 인터페이스를 통해서만 접근할 수 있는 것은?",
          "options": ["Sheet", "Model", "Cell", "Component"],
          "answer": 4,
          "explanation": "컴포넌트(Component)는 독립적이고 재사용 가능한 소프트웨어 단위입니다."
        },
        {
          "id": 17,
          "exam": "2024-1",
          "question": "다음 중 SOLID 원칙이라고 불리는 객체지향 설계 원칙에 속하지 않는 것은?",
          "options": ["ISP(Interface Segregation Principle)", "DIP(Dependency Inversion Principle)", "LSP(Liskov Substitution Principle)", "SSO(Single Sign On)"],
          "answer": 4,
          "explanation": "SSO는 인증 방식이며, SOLID 원칙이 아닙니다. SOLID는 SRP, OCP, LSP, ISP, DIP입니다."
        },
        {
          "id": 18,
          "exam": "2024-1",
          "question": "UML 확장 모델에서 스테레오 타입 객체를 표현할 때 사용하는 기호로 맞는 것은?",
          "options": ["(( ))", "<< >>", "{{ }}", "[[ ]]"],
          "answer": 2,
          "explanation": "스테레오 타입은 << >>로 표현됩니다."
        },
        {
          "id": 19,
          "exam": "2024-1",
          "question": "CASE(Computer-Aided Software Engineering)의 원천 기술이 아닌 것은?",
          "options": ["프로토타이핑 기술", "구조적 기법", "일괄처리 기술", "정보 저장소 기술"],
          "answer": 3,
          "explanation": "일괄처리 기술은 CASE의 원천 기술이 아닙니다."
        },
        {
          "id": 20,
          "exam": "2024-1",
          "question": "다음 중 상태 다이어그램에서 객체 전이의 요인이 되는 요소는?",
          "options": ["state", "event", "transition", "message"],
          "answer": 2,
          "explanation": "이벤트(event)는 상태 전이(transition)를 발생시키는 요인입니다."
        },
        {
          "id": 101,
          "exam": "2024-2",
          "question": "요구공학(Requirements Engineering)에 대한 설명으로 옳지 않은 것은?",
          "options": ["무엇을 개발해야 하는지 요구사항을 정의하고, 분석 및 관리하는 프로세스를 연구하는 학문이다.", "사용자 요구사항이 더욱 복잡해지고 잦은 변경이 발생하자 이를 적절하게 관리하기 위해 등장하였다.", "요구사항 개발의 한 요소이다.", "품질 개선과 프로젝트 실패의 최소화를 목적으로 한다."],
          "answer": 3,
          "explanation": "요구공학은 요구사항 개발을 포함하는 상위 개념이며, 요구사항 개발의 한 요소가 아닙니다."
        },
        {
          "id": 102,
          "exam": "2024-2",
          "question": "XP(eXtreme Programming)에 대한 설명으로 옳지 않은 것은?",
          "options": ["릴리즈 기간을 짧게 반복하여 고객의 요구 변화에 빠르게 대응한다.", "코드들은 하나의 작업이 마무리될 때마다 지속적으로 통합한다.", "테스트가 지속적으로 진행될 수 있도록 테스트 자동화 도구를 사용한다.", "개발 책임자가 모든 책임을 가지므로 팀원들은 책임 없이 자유로운 개발이 가능하다."],
          "answer": 4,
          "explanation": "XP는 공동 책임(Collective Ownership)을 강조하며, 모든 팀원이 책임을 공유합니다."
        },
        {
          "id": 103,
          "exam": "2024-2",
          "question": "UML에서 활용되는 다이어그램의 이름과 설명의 연결이 올바르지 않은 것은?",
          "options": ["클래스 다이어그램: 시퀀스 다이어그램과 같이 동작에 참여하는 객체들이 주고받는 메시지를 표현하는데, 메시지뿐만 아니라 객체들 간의 연관까지 표현한다.", "배치 다이어그램: 결과물, 프로세스, 컴포넌트 등 물리적 요소들의 위치를 표현한다.", "유스케이스 다이어그램: 사용자의 요구를 분석하는 것으로, 기능 모델링 작업에 사용한다.", "활동 다이어그램: 시스템이 어떤 기능을 수행하는지 객체의 처리 로직이나 조건에 따른 처리의 흐름을 순서에 따라 표현한다."],
          "answer": 1,
          "explanation": "클래스 다이어그램은 정적 구조를 나타내며, 메시지 교환은 시퀀스 다이어그램이나 커뮤니케이션 다이어그램에서 표현합니다."
        },
        {
          "id": 104,
          "exam": "2024-2",
          "question": "다음 설명에 해당하는 도표는?\n\n시스템의 기능을 여러 개의 고유 모듈들로 분할하여 이들 간의 인터페이스를 계층 구조로 표현한 것으로, 가시적 도표(Visual Table of Contents), 총체적 도표(Overview Diagram), 세부적 도표(Detail Diagram)가 있다.",
          "options": ["Burn-down Chart", "Flow Chart", "HIPO Chart", "Visual Diagram"],
          "answer": 3,
          "explanation": "HIPO(Hierarchy Input Process Output) Chart는 시스템의 기능을 계층 구조로 표현하는 도구입니다."
        },
        {
          "id": 105,
          "exam": "2024-2",
          "question": "불필요한 메모리의 낭비를 최소화하기 위해 여러 프로세스가 동시에 참조할 수는 없지만 어디서든 참조할 수 있는 객체를 생성하는 디자인 패턴은?",
          "options": ["싱글톤 패턴(Singleton)", "옵서버 패턴(Observer)", "프로토타입 패턴(Prototype)", "상태 패턴(State)"],
          "answer": 1,
          "explanation": "싱글톤 패턴은 클래스의 인스턴스가 하나만 생성되도록 보장하는 패턴입니다."
        },
        {
          "id": 106,
          "exam": "2024-2",
          "question": "객체지향 기법에서 객체가 메시지를 받아 실행해야 할 객체의 구체적인 연산을 정의한 것은?",
          "options": ["Method", "Entity", "Class", "Instance"],
          "answer": 1,
          "explanation": "메소드(Method)는 객체가 수행할 수 있는 연산을 정의합니다."
        },
        {
          "id": 107,
          "exam": "2024-2",
          "question": "바람직한 소프트웨어 설계 지침이 아닌 것은?",
          "options": ["결합도를 최소화하고 응집도를 최대화한다.", "복잡도와 중복성을 줄이고 일관성을 유지시킨다.", "하나의 입구와 하나의 출구를 갖도록 해야 한다.", "모듈의 크기를 가능한 작게 구성하여 병행성 수준을 높여야 한다."],
          "answer": 4,
          "explanation": "모듈의 크기는 적절해야 하며, 너무 작으면 오히려 복잡도가 증가할 수 있습니다."
        },
        {
          "id": 108,
          "exam": "2024-2",
          "question": "객체지향 설계 원칙에 대한 설명 중 틀린 것은?",
          "options": ["OCP: 기존의 코드를 변경하지 않고 기능을 추가할 수 있도록 설계해야 한다는 원칙", "LSP: 자식 클래스는 최소한 자신의 부모 클래스에서 가능한 행위는 수행할 수 있어야 한다는 설계 원칙", "DIP: 각 객체들 간의 의존 관계가 성립될 때, 추상성이 낮은 클래스보다 추상성이 높은 클래스와 의존 관계를 맺어야 한다는 원칙", "ISP: 객체는 단 하나의 책임만 가져야 한다는 원칙"],
          "answer": 4,
          "explanation": "ISP(Interface Segregation Principle)는 인터페이스 분리 원칙이며, 단일 책임 원칙은 SRP입니다."
        },
        {
          "id": 109,
          "exam": "2024-2",
          "question": "객체지향 분석 방법론 중 미시적(Micro) 개발 프로세스와 거시적(Macro) 개발 프로세스를 모두 사용하는 분석 방법으로, 클래스와 객체들을 분석 및 식별하고 클래스의 속성과 연산을 정의하는 것은?",
          "options": ["Coad와 Yourdon 방법", "Booch 방법", "Jacobson 방법", "Wirfs-Brocks 방법"],
          "answer": 2,
          "explanation": "Booch 방법은 미시적/거시적 개발 프로세스를 모두 사용합니다."
        },
        {
          "id": 110,
          "exam": "2024-2",
          "question": "HIPO Chart에 대한 설명으로 틀린 것은?",
          "options": ["HIPO 차트 종류에는 가시적 도표, 총체적 도표, 세부적 도표가 있다.", "충분한 사전 지식과 학습이 없으면 이해하기 어렵다.", "기능과 자료의 의존 관계를 동시에 표현할 수 있다.", "하향식 소프트웨어 개발을 위한 문서화 도구이다."],
          "answer": 2,
          "explanation": "HIPO 차트는 보기 쉽고 이해하기 쉬운 문서화 도구입니다."
        },
        {
          "id": 111,
          "exam": "2024-2",
          "question": "코드 설계에서 코드화 대상 항목의 성질, 즉 길이, 넓이, 부피, 지름, 높이 등의 물리적 수치를 그대로 코드에 적용시키는 방식의 코드는?",
          "options": ["블록 코드", "연상 코드", "표의 숫자 코드", "순차 코드"],
          "answer": 4,
          "explanation": "표의 숫자 코드는 물리적 수치를 그대로 코드에 적용하는 방식입니다."
        },
        {
          "id": 112,
          "exam": "2024-2",
          "question": "애자일 소프트웨어 개발 기법의 가치가 아닌 것은?",
          "options": ["계획을 따르기보다는 변화에 대응하는 것에 더 가치를 둔다.", "실제 작동하는 소프트웨어보다는 이해하기 좋은 문서에 더 가치를 둔다.", "계약 협상보다는 고객과의 협업에 더 가치를 둔다.", "프로세스의 도구보다는 개인과 상호작용에 더 가치를 둔다."],
          "answer": 2,
          "explanation": "애자일은 포괄적인 문서보다 실제 작동하는 소프트웨어에 더 가치를 둡니다."
        },
        {
          "id": 113,
          "exam": "2024-2",
          "question": "Rayleigh-Norden 곡선의 노력 분포도를 이용한 프로젝트 비용 산정 기법은?",
          "options": ["델파이 모형", "Putnam 모형", "기능점수 모형", "COCOMO 모형"],
          "answer": 2,
          "explanation": "Putnam 모형은 Rayleigh-Norden 곡선을 기반으로 합니다."
        },
        {
          "id": 114,
          "exam": "2024-2",
          "question": "객체지향의 주요 개념에 대한 설명으로 틀린 것은?",
          "options": ["상속은 상위 클래스에서 속성이나 연산을 전달받아 새로운 형태의 클래스로 확장하여 사용하는 것을 의미한다.", "객체는 실세계에 존재하거나 생각할 수 있는 것을 말한다.", "캡슐화는 두 개 이상의 객체(클래스)들이 상호 참조하는 관계이다.", "다형성은 상속받은 여러 개의 하위 객체들이 다른 형태의 특성을 갖는 객체로 이용될 수 있는 성질이다."],
          "answer": 3,
          "explanation": "캡슐화는 데이터와 메소드를 하나로 묶는 것이며, 설명은 연관 관계에 해당합니다."
        },
        {
          "id": 115,
          "exam": "2024-2",
          "question": "웹 애플리케이션 서버(WAS; Web Application Server)에 대한 설명으로 틀린 것은?",
          "options": ["정적인 콘텐츠를 처리하기 위해 사용되는 미들웨어이다.", "클라이언트/서버 환경보다는 웹 환경을 구현하기 위한 미들웨어이다.", "미션 크리티컬한 기업 업무도 컴포넌트 기반으로 JAVA, EJB 구현이 가능하다.", "대표적인 WAS의 종류에는 오라클의 WebLogic, IBM의 WebSphere 등이 있다."],
          "answer": 1,
          "explanation": "WAS는 동적인 콘텐츠를 처리하며, 정적 콘텐츠는 웹 서버가 처리합니다."
        },
        {
          "id": 116,
          "exam": "2024-2",
          "question": "다음 중 유스케이스 다이어그램(Use Case Diagram)의 구성 요소가 아닌 것은?",
          "options": ["Actor", "System", "UseCase", "Operation"],
          "answer": 4,
          "explanation": "Operation은 클래스 다이어그램의 구성 요소입니다."
        },
        {
          "id": 117,
          "exam": "2024-2",
          "question": "폭포수 모형의 특징으로 거리가 먼 것은?",
          "options": ["순차적인 접근방법을 이용한다.", "나선형 모형의 단점을 보완하기 위한 모형이다.", "단계적 정의와 산출물이 명확하다.", "모형의 적용 경험과 성공사례가 많다."],
          "answer": 2,
          "explanation": "폭포수 모형이 먼저 나왔으며, 나선형 모형이 폭포수 모형의 단점을 보완합니다."
        },
        {
          "id": 118,
          "exam": "2024-2",
          "question": "송수신 데이터의 처리 방식 중 대량의 데이터를 처리할 때 사용하는 방식은?",
          "options": ["분산 처리 방식", "실시간 방식", "지연 처리 방식", "배치 방식"],
          "answer": 4,
          "explanation": "배치 방식은 대량의 데이터를 일괄 처리하는 방식입니다."
        },
        {
          "id": 119,
          "exam": "2024-2",
          "question": "결합도(Coupling)에 대한 설명으로 틀린 것은?",
          "options": ["데이터 결합도(Data Coupling)는 두 모듈이 매개 변수로 자료를 전달할 때 자료 구조 형태로 전달되어 이용될 때 데이터가 결합되어 있다고 한다.", "내용 결합도(Content Coupling)는 하나의 모듈이 직접적으로 다른 모듈의 내용을 참조할 때 두 모듈은 내용적으로 결합되어 있다고 한다.", "공통 결합도(Common Coupling)는 두 모듈이 동일한 전역 데이터를 접근한다면 공통 결합되어 있다고 한다.", "결합도(Coupling)는 두 모듈 간의 상호작용 또는 의존도 정도를 나타내는 것이다."],
          "answer": 1,
          "explanation": "데이터 결합도는 단순 자료(매개변수)로 전달되며, 자료 구조로 전달되는 것은 스탬프 결합도입니다."
        },
        {
          "id": 120,
          "exam": "2024-2",
          "question": "CASE(Computer Aided Software Engineering)의 주요 기능으로 옳지 않은 것은?",
          "options": ["S/W 라이프 사이클 전 단계의 연결", "그래픽 지원", "다양한 소프트웨어 개발 모형 지원", "언어 번역"],
          "answer": 4,
          "explanation": "언어 번역은 컴파일러의 기능이며, CASE 도구의 주요 기능이 아닙니다."
        }
      ]
    },
    {
      "id": 2,
      "name": "소프트웨어 개발",
      "questions": [
        {
          "id": 21,
          "exam": "2024-1",
          "question": "EAI(Enterprise Application Integration)의 구축 유형으로 옳지 않은 것은?",
          "options": ["Hub & Spoke", "Point-to-Point", "Tree", "Message Bus"],
          "answer": 3,
          "explanation": "EAI 구축 유형은 Point-to-Point, Hub & Spoke, Message Bus, Hybrid 방식입니다."
        },
        {
          "id": 22,
          "exam": "2024-1",
          "question": "검증 검사 기법 중 개발자의 장소에서 사용자가 개발자 앞에서 행하는 기법이며, 일반적으로 통제된 환경에서 사용자와 개발자가 함께 확인하면서 수행되는 검사는?",
          "options": ["형상 검사", "동치 분할 검사", "베타 검사", "알파 검사"],
          "answer": 4,
          "explanation": "알파 검사는 개발 환경에서 개발자 앞에서 사용자가 수행하는 검사입니다."
        },
        {
          "id": 23,
          "exam": "2024-1",
          "question": "다음 트리의 차수(degree)는?",
          "questionHTML": `<svg class="tree-diagram-svg" viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg">
            <!-- 연결선 -->
            <line x1="200" y1="40" x2="120" y2="90" stroke="#3498db" stroke-width="2"/>
            <line x1="200" y1="40" x2="280" y2="90" stroke="#3498db" stroke-width="2"/>
            <line x1="120" y1="110" x2="60" y2="160" stroke="#3498db" stroke-width="2"/>
            <line x1="120" y1="110" x2="120" y2="160" stroke="#3498db" stroke-width="2"/>
            <line x1="120" y1="110" x2="180" y2="160" stroke="#3498db" stroke-width="2"/>
            <line x1="280" y1="110" x2="340" y2="160" stroke="#3498db" stroke-width="2"/>
            <line x1="120" y1="180" x2="100" y2="230" stroke="#3498db" stroke-width="2"/>
            <line x1="120" y1="180" x2="140" y2="230" stroke="#3498db" stroke-width="2"/>

            <!-- 노드 -->
            <circle cx="200" cy="40" r="20" fill="white" stroke="#3498db" stroke-width="2"/>
            <text x="200" y="46" text-anchor="middle" font-size="16" font-weight="bold" fill="#2c3e50">A</text>

            <circle cx="120" cy="110" r="20" fill="white" stroke="#3498db" stroke-width="2"/>
            <text x="120" y="116" text-anchor="middle" font-size="16" font-weight="bold" fill="#2c3e50">B</text>

            <circle cx="280" cy="110" r="20" fill="white" stroke="#3498db" stroke-width="2"/>
            <text x="280" y="116" text-anchor="middle" font-size="16" font-weight="bold" fill="#2c3e50">C</text>

            <circle cx="60" cy="180" r="20" fill="white" stroke="#3498db" stroke-width="2"/>
            <text x="60" y="186" text-anchor="middle" font-size="16" font-weight="bold" fill="#2c3e50">D</text>

            <circle cx="120" cy="180" r="20" fill="white" stroke="#3498db" stroke-width="2"/>
            <text x="120" y="186" text-anchor="middle" font-size="16" font-weight="bold" fill="#2c3e50">E</text>

            <circle cx="180" cy="180" r="20" fill="white" stroke="#3498db" stroke-width="2"/>
            <text x="180" y="186" text-anchor="middle" font-size="16" font-weight="bold" fill="#2c3e50">F</text>

            <circle cx="340" cy="180" r="20" fill="white" stroke="#3498db" stroke-width="2"/>
            <text x="340" y="186" text-anchor="middle" font-size="16" font-weight="bold" fill="#2c3e50">G</text>

            <circle cx="100" cy="250" r="20" fill="white" stroke="#3498db" stroke-width="2"/>
            <text x="100" y="256" text-anchor="middle" font-size="16" font-weight="bold" fill="#2c3e50">H</text>

            <circle cx="140" cy="250" r="20" fill="white" stroke="#3498db" stroke-width="2"/>
            <text x="140" y="256" text-anchor="middle" font-size="16" font-weight="bold" fill="#2c3e50">I</text>
          </svg>`,
          "options": ["2", "3", "4", "5"],
          "answer": 2,
          "explanation": "트리의 차수는 노드가 가진 서브트리의 최대 개수입니다. 노드 B가 D, E, F 세 개의 자식을 가지므로 이 트리의 차수는 3입니다."
        },
        {
          "id": 24,
          "exam": "2024-1",
          "question": "인터페이스 구현 시 사용하는 기술 중 다음 내용이 설명하는 것은?\n\nJavaScript를 사용한 비동기 통신기술로, 클라이언트와 서버 간에 XML 데이터를 주고받는 기술",
          "options": ["Trigger", "Procedure", "AJAX", "Greedy"],
          "answer": 3,
          "explanation": "AJAX(Asynchronous JavaScript and XML)는 비동기 통신 기술입니다."
        },
        {
          "id": 25,
          "exam": "2024-1",
          "question": "해싱 함수 중, 레코드 키를 여러 부분으로 나누고, 나눈 부분의 각 숫자를 더하거나 XOR한 값을 홈 주소로 사용하는 방식은?",
          "options": ["폴딩법", "제산법", "숫자 분석법", "기수 변환법"],
          "answer": 1,
          "explanation": "폴딩법(Folding)은 키를 여러 부분으로 나누어 더하거나 XOR하여 해시값을 구합니다."
        },
        {
          "id": 26,
          "exam": "2024-1",
          "question": "다음 자료에 대하여 선택(Selection) 정렬을 이용하여 오름차순으로 정렬하고자 한다. 3회전 후의 결과로 옳은 것은?\n\n37, 14, 17, 40, 35",
          "options": ["14, 37, 17, 40, 35", "14, 17, 37, 40, 35", "14, 17, 35, 40, 37", "17, 14, 37, 35, 40"],
          "answer": 3,
          "explanation": "선택 정렬 3회전 후: 1회전(14, 37, 17, 40, 35) → 2회전(14, 17, 37, 40, 35) → 3회전(14, 17, 35, 40, 37)"
        },
        {
          "id": 27,
          "exam": "2024-1",
          "question": "소스 코드 품질 분석 도구 중 정적 분석 도구가 아닌 것은?",
          "options": ["checkstyle", "pmd", "cppcheck", "valance"],
          "answer": 4,
          "explanation": "valance는 동적 분석 도구입니다. checkstyle, pmd, cppcheck는 정적 분석 도구입니다."
        },
        {
          "id": 28,
          "exam": "2024-1",
          "question": "다음 트리에 대한 중위 순회 운행 결과는?",
          "questionHTML": `<svg class="tree-diagram-svg" viewBox="0 0 350 210" xmlns="http://www.w3.org/2000/svg">
            <!-- 연결선 -->
            <line x1="175" y1="40" x2="100" y2="100" stroke="#3498db" stroke-width="2"/>
            <line x1="175" y1="40" x2="250" y2="100" stroke="#3498db" stroke-width="2"/>
            <line x1="100" y1="120" x2="60" y2="170" stroke="#3498db" stroke-width="2"/>
            <line x1="250" y1="120" x2="210" y2="170" stroke="#3498db" stroke-width="2"/>
            <line x1="250" y1="120" x2="290" y2="170" stroke="#3498db" stroke-width="2"/>

            <!-- 노드 -->
            <circle cx="175" cy="40" r="20" fill="white" stroke="#3498db" stroke-width="2"/>
            <text x="175" y="46" text-anchor="middle" font-size="16" font-weight="bold" fill="#2c3e50">A</text>

            <circle cx="100" cy="120" r="20" fill="white" stroke="#3498db" stroke-width="2"/>
            <text x="100" y="126" text-anchor="middle" font-size="16" font-weight="bold" fill="#2c3e50">B</text>

            <circle cx="250" cy="120" r="20" fill="white" stroke="#3498db" stroke-width="2"/>
            <text x="250" y="126" text-anchor="middle" font-size="16" font-weight="bold" fill="#2c3e50">C</text>

            <circle cx="60" cy="190" r="20" fill="white" stroke="#3498db" stroke-width="2"/>
            <text x="60" y="196" text-anchor="middle" font-size="16" font-weight="bold" fill="#2c3e50">D</text>

            <circle cx="210" cy="190" r="20" fill="white" stroke="#3498db" stroke-width="2"/>
            <text x="210" y="196" text-anchor="middle" font-size="16" font-weight="bold" fill="#2c3e50">E</text>

            <circle cx="290" cy="190" r="20" fill="white" stroke="#3498db" stroke-width="2"/>
            <text x="290" y="196" text-anchor="middle" font-size="16" font-weight="bold" fill="#2c3e50">F</text>
          </svg>`,
          "options": ["ABCDEF", "ABDCEF", "DBAECF", "DBECFA"],
          "answer": 4,
          "explanation": "중위 순회(Inorder): Left → Root → Right 순으로 방문. D → B → E → A → C → F 순서입니다."
        },
        {
          "id": 29,
          "exam": "2024-1",
          "question": "소프트웨어 테스트와 관련한 설명으로 틀린 것은?",
          "options": ["화이트박스 테스트는 모듈의 논리적인 구조를 체계적으로 점검할 수 있다.", "블랙박스 테스트는 프로그램의 구조를 고려하지 않는다.", "테스트 케이스에는 일반적으로 시험 조건, 테스트 데이터, 예상 결과가 포함되어야 한다.", "화이트박스 테스트에서 기본 경로(Basis Path)란 흐름 그래프의 시작 노드에서 종료 노드까지의 서로 독립된 경로로 싸이클을 허용하지 않는 경로를 말한다."],
          "answer": 4,
          "explanation": "기본 경로는 싸이클을 포함할 수 있습니다."
        },
        {
          "id": 30,
          "exam": "2024-1",
          "question": "소프트웨어 형상 관리에 대한 설명으로 거리가 먼 것은?",
          "options": ["소프트웨어에 가해지는 변경을 제어하고 관리한다.", "프로젝트 계획, 분석서, 설계서, 프로그램, 테스트 케이스 모두 관리 대상이다.", "대표적인 형상 관리 도구로 Ant, Maven, Gradle 등이 있다.", "유지 보수 단계뿐만 아니라 개발 단계에도 적용할 수 있다."],
          "answer": 3,
          "explanation": "Ant, Maven, Gradle은 빌드 도구입니다. 형상 관리 도구는 Git, SVN, CVS 등이 있습니다."
        },
        {
          "id": 31,
          "exam": "2024-1",
          "question": "다음 중 최악의 경우 검색 효율이 가장 나쁜 트리 구조는?",
          "options": ["이진 탐색 트리", "AVL 트리", "레드 블랙 트리", "2-3 트리"],
          "answer": 1,
          "explanation": "이진 탐색 트리는 편향된 경우 O(n)의 시간 복잡도를 가집니다. 나머지는 균형 트리로 O(log n)을 보장합니다."
        },
        {
          "id": 32,
          "exam": "2024-1",
          "question": "다음 중 선형 구조로만 묶인 것은?",
          "options": ["큐, 데크", "스택, 트리", "리스트, 그래프", "큐, 그래프"],
          "answer": 1,
          "explanation": "큐와 데크는 선형 구조입니다. 트리와 그래프는 비선형 구조입니다."
        },
        {
          "id": 33,
          "exam": "2024-1",
          "question": "화이트박스 검사 기법에 해당하는 것으로만 짝지어진 것은?\n\n㉠ 루프 검사  ㉡ 데이터 흐름 검사\n㉢ 경계값 분석  ㉣ 동등 분할 검사\n㉤ 오류예측 기법  ㉥ 원인 결과 그래프 기법",
          "options": ["㉠, ㉡", "㉠, ㉣", "㉡, ㉤", "㉢, ㉥"],
          "answer": 1,
          "explanation": "화이트박스 기법: 루프 검사, 데이터 흐름 검사, 조건 검사 등. 블랙박스 기법: 경계값 분석, 동등 분할 등"
        },
        {
          "id": 34,
          "exam": "2024-1",
          "question": "단위 테스트에서 테스트의 대상이 되는 하위 모듈을 호출하고, 파라미터를 전달하는 가상의 모듈로 상향식 테스트에 필요한 것은?",
          "options": ["테스트 스텁(Test Stub)", "테스트 드라이버(Test Driver)", "테스트 슈트(Test Suites)", "테스트 케이스(Test Case)"],
          "answer": 2,
          "explanation": "테스트 드라이버(Test Driver)는 상향식 테스트에서 상위 모듈을 대체합니다."
        },
        {
          "id": 35,
          "exam": "2024-1",
          "question": "인터페이스 구현 시 사용하는 기술로 속성-값 쌍(Attribute-Value Pairs)으로 이루어진 데이터 오브젝트를 전달하기 위해 사용하는 개방형 표준 포맷은?",
          "options": ["HTML", "JSON", "DOF", "AVPN"],
          "answer": 2,
          "explanation": "JSON(JavaScript Object Notation)은 속성-값 쌍으로 데이터를 표현하는 경량 데이터 교환 형식입니다."
        },
        {
          "id": 36,
          "exam": "2024-1",
          "question": "DRM(Digital Rights Management)과 관련한 설명으로 틀린 것은?",
          "options": ["디지털 콘텐츠와 디바이스의 사용을 제한하기 위해 하드웨어 제조업자, 저작권자, 출판업자 등이 사용할 수 있는 접근 제어 기술을 의미한다.", "디지털 미디어의 생명 주기 동안 발생하는 사용 권한 관리, 과금, 유통 단계를 관리하는 기술로도 볼 수 있다.", "클리어링 하우스(Clearing House)는 사용자에게 콘텐츠 라이센스를 발급하고 권한을 부여해주는 시스템을 말한다.", "원본을 안전하게 유통하기 위한 전자적 보안은 고려하지 않기 때문에 불법 유통과 복제의 방지는 불가능하다."],
          "answer": 4,
          "explanation": "DRM은 전자적 보안을 통해 불법 유통과 복제를 방지하는 기술입니다."
        },
        {
          "id": 37,
          "exam": "2024-1",
          "question": "다음 중 테스트 오라클에 대한 설명으로 옳지 않은 것은?",
          "options": ["샘플링 오라클: 특정한 몇몇 테스트 케이스의 입력 값들에 대해서만 기대하는 결과를 제공하는 오라클이다.", "토탈 오라클: 모든 테스트 케이스의 입력 값에 대해 기대하는 결과를 제공하는 오라클이다.", "휴리스틱 오라클: 특정 테스트 케이스의 입력 값에 대해 기대하는 결과를 제공하고, 나머지 입력 값들에 대해서는 추정으로 처리하는 오라클이다.", "일관성 검사 오라클: 애플리케이션의 변경이 있을 경우, 테스트 케이스의 수행 전과 후의 결과 값이 동일한지를 확인하는 오라클이다."],
          "answer": 2,
          "explanation": "설명이 잘못되었습니다. 토탈 오라클은 모든 입력에 대한 결과를 알고 있는 이상적인 오라클을 의미합니다."
        },
        {
          "id": 38,
          "exam": "2024-1",
          "question": "인터페이스 구현 검증 도구가 아닌 것은?",
          "options": ["xUnit", "ESB", "NTAF", "STAF"],
          "answer": 2,
          "explanation": "ESB(Enterprise Service Bus)는 통합 솔루션이며, 인터페이스 검증 도구가 아닙니다."
        },
        {
          "id": 39,
          "exam": "2024-1",
          "question": "정점이 5개인 방향 그래프가 가질 수 있는 최대 간선 수는? (단, 자기 간선과 중복 간선은 배제한다.)",
          "options": ["7개", "10개", "20개", "27개"],
          "answer": 2,
          "explanation": "방향 그래프의 최대 간선 수는 n(n-1) = 5×4 = 20개입니다."
        },
        {
          "id": 40,
          "exam": "2024-1",
          "question": "물리데이터 저장소의 파티션 설계에서 파티션 유형으로 옳지 않은 것은?",
          "options": ["범위 분할(Range Partitioning)", "해시 분할(Hash Partitioning)", "조합 분할(Composite Partitioning)", "유닛 분할(Unit Partitioning)"],
          "answer": 4,
          "explanation": "파티션 유형에는 범위 분할, 해시 분할, 리스트 분할, 조합 분할이 있습니다."
        },
        {
          "id": 121,
          "exam": "2024-2",
          "question": "테스트 하네스(Test Harness)의 구성 요소에 해당하지 않는 것은?",
          "options": ["테스트 스텁", "테스트 드라이버", "테스트 시나리오", "테스트 케이스"],
          "answer": 3,
          "explanation": "테스트 하네스는 테스트 드라이버, 테스트 스텁, 테스트 슈트, 테스트 케이스, 테스트 스크립트, 목 객체 등으로 구성됩니다."
        },
        {
          "id": 122,
          "exam": "2024-2",
          "question": "통합 개발 환경(IDE)에 대한 설명으로 옳지 않은 것은?",
          "options": ["개발을 위한 편집기, 컴파일러, 디버거 등이 포함되어 있다.", "코드의 자동 생성이 가능하다.", "다양한 기능들을 다운로드하여 추가할 수 있다.", "단일 플랫폼만을 지원하는 한계가 있다."],
          "answer": 4,
          "explanation": "IDE는 다양한 플랫폼을 지원합니다."
        },
        {
          "id": 123,
          "exam": "2024-2",
          "question": "디지털 저작권 관리(DRM)에 대한 설명으로 가장 옳지 않은 것은?",
          "options": ["콘텐츠의 생성, 유통, 이용까지의 전 과정에 걸쳐 사용되는 디지털 콘텐츠 관리 및 보호 기술이다.", "패키징 수행 전 라이선스 정보를 클리어링 하우스에 등록한다.", "원본 콘텐츠가 아날로그인 경우에는 변환 작업을 수행한 뒤 패키징을 한다.", "암호화, 식별 기술, 크랙 방지, 인증 등의 기술이 사용된다."],
          "answer": 2,
          "explanation": "패키징 수행 후에 라이선스 정보를 클리어링 하우스에 등록합니다."
        },
        {
          "id": 124,
          "exam": "2024-2",
          "question": "스택에서 순서가 A, B, C, D로 정해진 입력 자료를, push → push → pop → push → pop → push → pop → pop으로 연산 했을 때 출력은?",
          "options": ["B, C, D, A", "C, B, D, A", "C, B, A, D", "B, C, A, D"],
          "answer": 2,
          "explanation": "push(A), push(B), pop(B), push(C), pop(C), push(D), pop(D), pop(A) = C, B, D, A"
        },
        {
          "id": 125,
          "exam": "2024-2",
          "question": "EAI(Enterprise Application Integration)의 구축유형에 대한 설명으로 틀린 것은?",
          "options": ["Point-to-Point는 가장 기본적인 애플리케이션 통합 방식으로, 애플리케이션을 1:1로 연결한다.", "Hub&Spoke는 단일 접점인 허브 시스템을 통해 데이터를 전송하는 중앙 집중형 방식이다.", "애플리케이션 사이에 미들웨어를 두어 처리하는 방식은 ESB이다.", "Hybrid는 Point-to-Point와 Hub&Spoke의 혼합 방식이다."],
          "answer": 4,
          "explanation": "Hybrid는 Hub&Spoke와 Message Bus의 혼합 방식입니다."
        },
        {
          "id": 126,
          "exam": "2024-2",
          "question": "디지털 저작권 관리(DRM)의 구성 요소에 대한 설명으로 틀린 것은?",
          "options": ["클리어링 하우스는 저작권에 대한 권한 및 결제에 대해 관리한다.", "패키저는 암호화된 콘텐츠를 배포한다.", "DRM 컨트롤러는 배포된 콘텐츠를 통제한다.", "보안 컨테이너는 콘텐츠 유통을 위한 전자적 보안장치이다."],
          "answer": 2,
          "explanation": "패키저는 콘텐츠를 암호화하고 패키징하는 역할이며, 배포는 배포자(Distributor)가 담당합니다."
        },
        {
          "id": 127,
          "exam": "2024-2",
          "question": "테스트 오라클(Test Oracle)에 대한 설명으로 틀린 것은?",
          "options": ["테스트 오라클을 모든 테스트 케이스에 적용할 수 있다.", "애플리케이션의 변경이 있을 때는 일관 검사 오라클을 이용하는 것이 효과적이다.", "테스트 오라클의 값을 수학적 기법을 이용하여 구할 수 있다.", "테스트 대상 프로그램의 실행 결과 비교, 커버리지 측정 등을 자동화 할 수 있다."],
          "answer": 1,
          "explanation": "테스트 오라클의 종류에 따라 일부 테스트 케이스에만 적용할 수 있습니다."
        },
        {
          "id": 128,
          "exam": "2024-2",
          "question": "버블 정렬을 이용한 오름차순 정렬 시 다음 자료에 대한 2회전 후의 결과는?\n\n9, 6, 7, 3, 5",
          "options": ["6, 7, 3, 5, 9", "3, 5, 6, 7, 9", "6, 3, 5, 7, 9", "3, 5, 9, 6, 7"],
          "answer": 4,
          "explanation": "버블 정렬 1회전: 6, 7, 3, 5, 9 / 2회전: 6, 3, 5, 7, 9"
        },
        {
          "id": 129,
          "exam": "2024-2",
          "question": "형상 관리 도구의 주요 기능으로 거리가 먼 것은?",
          "options": ["체크인(Check-in)", "체크아웃(Check-out)", "커밋(Commit)", "식별(Identification)"],
          "answer": 4,
          "explanation": "식별(Identification)은 형상 관리의 활동이지, 형상 관리 도구의 기능은 아닙니다."
        },
        {
          "id": 130,
          "exam": "2024-2",
          "question": "목적에 따른 테스트 방식 중 시스템에 과도한 정보량이나 빈도 등을 부과하여 과부하 시에도 소프트웨어가 정상적으로 실행되는지를 확인하는 테스트는?",
          "options": ["회복 테스트(Recovery)", "강도 테스트(Stress)", "성능 테스트(Performance)", "회귀 테스트(Regression)"],
          "answer": 2,
          "explanation": "강도 테스트는 시스템에 과부하를 가하여 한계를 테스트합니다."
        }
      ]
    },
    {
      "id": 3,
      "name": "데이터베이스 구축",
      "questions": [
        {
          "id": 41,
          "exam": "2024-1",
          "question": "참조 무결성을 유지하기 위하여 DROP문에서 부모 테이블의 항목 값을 삭제할 경우 자동적으로 자식 테이블의 해당 레코드를 삭제하기 위한 옵션은?",
          "options": ["CLUSTER", "CASCADE", "RESTRICTED", "SET-NULL"],
          "answer": 2,
          "explanation": "CASCADE 옵션은 부모 테이블의 레코드 삭제 시 자식 테이블의 관련 레코드도 함께 삭제합니다."
        },
        {
          "id": 42,
          "exam": "2024-1",
          "question": "뷰(View)에 대한 설명으로 옳지 않은 것은?",
          "options": ["뷰는 CREATE 문을 사용하여 정의한다.", "뷰는 데이터의 논리적 독립성을 제공한다.", "뷰를 제거할 때에는 DROP 문을 사용한다.", "뷰는 저장장치 내에 물리적으로 존재한다."],
          "answer": 4,
          "explanation": "뷰는 가상 테이블로 물리적으로 존재하지 않습니다."
        },
        {
          "id": 43,
          "exam": "2024-1",
          "question": "DML SQL에 해당하는 명령으로만 나열된 것은?",
          "options": ["DELETE, UPDATE, CREATE, ALTER", "INSERT, DELETE, UPDATE, DROP", "SELECT, INSERT, DELETE, UPDATE", "SELECT, INSERT, DELETE, ALTER"],
          "answer": 3,
          "explanation": "DML은 SELECT, INSERT, DELETE, UPDATE입니다. CREATE, ALTER, DROP은 DDL입니다."
        },
        {
          "id": 44,
          "exam": "2024-1",
          "question": "관계대수의 순수 관계 연산자가 아닌 것은?",
          "options": ["Cartesian Product", "Select", "Project", "Division"],
          "answer": 1,
          "explanation": "Cartesian Product는 일반 집합 연산자입니다. 순수 관계 연산자는 Select, Project, Join, Division입니다."
        },
        {
          "id": 45,
          "exam": "2024-1",
          "question": "관계 데이터 모델의 무결성 제약 중 기본키 값의 속성 값이 널(Null) 값이 아닌 원자 값을 갖는 성질은?",
          "options": ["참조 무결성", "개체 무결성", "튜플의 유일성", "도메인 무결성"],
          "answer": 2,
          "explanation": "개체 무결성(Entity Integrity)은 기본키가 NULL 값을 가질 수 없음을 의미합니다."
        },
        {
          "id": 46,
          "exam": "2024-1",
          "question": "제3정규형에서 보이스코드 정규형(BCNF)으로 정규화하기 위한 작업은?",
          "options": ["원자 값이 아닌 도메인을 분해", "부분 함수 종속 제거", "이행 함수 종속 제거", "결정자가 후보키가 아닌 함수 종속 제거"],
          "answer": 4,
          "explanation": "BCNF는 모든 결정자가 후보키인 정규형입니다."
        },
        {
          "id": 47,
          "exam": "2024-1",
          "question": "로킹(Locking) 기법에 대한 설명으로 틀린 것은?",
          "options": ["로킹의 대상이 되는 객체의 크기를 로킹 단위라고 한다.", "로킹 단위가 작아지면 병행성 수준이 낮아진다.", "데이터베이스도 로킹 단위가 될 수 있다.", "로킹 단위가 커지면 로크 수가 작아 로킹 오버헤드가 감소한다."],
          "answer": 2,
          "explanation": "로킹 단위가 작아지면 병행성 수준이 높아집니다."
        },
        {
          "id": 48,
          "exam": "2024-1",
          "question": "다음 SQL문에서 빈칸에 들어갈 내용으로 옳은 것은?\n\nUPDATE 회원 ( ) 전화번호='010-14'\nWHERE 회원번호='N4';",
          "options": ["FROM", "SET", "INTO", "TO"],
          "answer": 2,
          "explanation": "UPDATE 문에서는 SET 절을 사용하여 수정할 내용을 지정합니다."
        },
        {
          "id": 49,
          "exam": "2024-1",
          "question": "다음에서 설명하는 스키마(Schema)는?\n\n데이터베이스 전체를 정의한 것으로, 데이터개체, 관계, 제약조건, 접근권한, 무결성 규칙 등을 명세한 것",
          "options": ["내부 스키마", "개념 스키마", "내용 스키마", "외부 스키마"],
          "answer": 2,
          "explanation": "개념 스키마는 데이터베이스 전체의 논리적 구조를 정의합니다."
        },
        {
          "id": 50,
          "exam": "2024-1",
          "question": "시스템 카탈로그에 대한 설명으로 틀린 것은?",
          "options": ["시스템 카탈로그의 갱신은 무결성 유지를 위하여 SQL을 이용하여 사용자가 직접 갱신하여야 한다.", "데이터베이스에 포함되는 데이터 객체에 대한 정의나 명세에 대한 정보를 유지관리한다.", "DBMS가 스스로 생성하고 유지하는 데이터베이스 내의 특별한 테이블의 집합체이다.", "카탈로그에 저장된 정보를 메타 데이터라고도 한다."],
          "answer": 1,
          "explanation": "시스템 카탈로그는 DBMS가 자동으로 유지하며, 사용자가 직접 갱신할 수 없습니다."
        },
        {
          "id": 51,
          "exam": "2024-1",
          "question": "다음 릴레이션의 카디널리티와 차수가 옳게 나타낸 것은?",
          "options": ["카디널리티: 4, 차수: 4", "카디널리티: 4, 차수: 6", "카디널리티: 6, 차수: 4", "카디널리티: 6, 차수: 6"],
          "answer": 2,
          "explanation": "카디널리티는 튜플(행)의 개수(4개), 차수는 속성(열)의 개수(6개)입니다."
        },
        {
          "id": 52,
          "exam": "2024-1",
          "question": "병행제어 기법의 종류가 아닌 것은?",
          "options": ["시분할 기법", "로킹 기법", "다중 버전 기법", "타임 스탬프 기법"],
          "answer": 1,
          "explanation": "병행제어 기법: 로킹, 타임스탬프, 다중버전, 낙관적 검증 기법"
        },
        {
          "id": 53,
          "exam": "2024-1",
          "question": "데이터 속성 간의 종속성에 대한 엄밀한 고려없이 잘못 설계된 데이터베이스에서는 데이터 처리 연산 수행 시 각종 이상 현상이 발생할 수 있는데, 이러한 이상 현상이 아닌 것은?",
          "options": ["삽입 이상", "검색 이상", "갱신 이상", "삭제 이상"],
          "answer": 2,
          "explanation": "이상 현상에는 삽입 이상, 삭제 이상, 갱신 이상이 있습니다."
        },
        {
          "id": 54,
          "exam": "2024-1",
          "question": "트랜잭션의 주요 특성 중 하나로, 둘 이상의 트랜잭션이 동시에 병행 실행되는 경우 어느 하나의 트랜잭션 실행 중에 다른 트랜잭션의 연산이 끼어들 수 없음을 의미하는 것은?",
          "options": ["Consistency", "Log", "Durability", "Isolation"],
          "answer": 4,
          "explanation": "격리성(Isolation)은 트랜잭션이 독립적으로 실행되어야 함을 의미합니다."
        },
        {
          "id": 55,
          "exam": "2024-1",
          "question": "관계형 데이터베이스에서 다음 설명에 해당하는 키(Key)는?\n\n한 릴레이션 내의 속성들의 집합으로 구성된 키로서, 릴레이션을 구성하는 모든 튜플에 대한 유일성은 만족시키지만 최소성은 만족시키지 못한다.",
          "options": ["대체키", "후보키", "외래키", "슈퍼키"],
          "answer": 4,
          "explanation": "슈퍼키는 유일성은 만족하지만 최소성은 만족하지 못하는 키입니다."
        },
        {
          "id": 56,
          "exam": "2024-1",
          "question": "물리적 데이터베이스 설계에 대한 설명으로 거리가 먼 것은?",
          "options": ["물리적 설계의 목적은 효율적인 방법으로 데이터를 저장하는 것이다.", "트랜잭션 처리량과 응답시간, 디스크 용량 등을 고려해야 한다.", "저장 레코드의 형식, 순서, 접근 경로와 같은 정보를 사용하여 설계한다.", "트랜잭션의 인터페이스를 설계하며, 데이터 타입 및 데이터 타입들 간의 관계로 표현한다."],
          "answer": 4,
          "explanation": "트랜잭션 인터페이스 설계는 논리적 설계 단계에 해당합니다."
        },
        {
          "id": 57,
          "exam": "2024-1",
          "question": "관계해석에서 '모든 것에 대하여'의 의미를 나타내는 논리 기호는?",
          "options": ["∃", "∈", "∀", "⊂"],
          "answer": 3,
          "explanation": "∀(전칭 한정자)는 '모든'을 의미하고, ∃(존재 한정자)는 '존재한다'를 의미합니다."
        },
        {
          "id": 58,
          "exam": "2024-1",
          "question": "다음 [조건]에 부합하는 SQL문을 작성하고자 할 때, [SQL문]의 빈칸에 들어갈 내용으로 옳은 것은? (단, '팀코드' 및 '이름'은 속성이며, '직원'은 테이블이다.)\n\n[조건]\n이름이 '정도일'인 팀원이 소속된 팀코드를 이용하여 해당 팀에 소속된 팀원들의 이름을 출력하는 SQL 문 작성\n\n[SQL문]\nSELECT 이름\nFROM 직원\nWHERE 팀코드=( );",
          "options": ["WHERE 이름='정도일'", "SELECT 팀코드 FROM 이름 WHERE 직원='정도일'", "WHERE 직원='정도일'", "SELECT 팀코드 FROM 직원 WHERE 이름='정도일'"],
          "answer": 4,
          "explanation": "서브쿼리로 정도일의 팀코드를 먼저 찾아야 합니다."
        },
        {
          "id": 59,
          "exam": "2024-1",
          "question": "데이터베이스에 영향을 주는 생성, 읽기, 갱신, 삭제 연산으로 프로세스와 테이블 간에 매트릭스를 만들어서 트랜잭션을 분석하는 것은?",
          "options": ["일치 분석", "CASE 분석", "연관성 분석", "CRUD 분석"],
          "answer": 4,
          "explanation": "CRUD 분석은 Create, Read, Update, Delete 연산을 분석하는 기법입니다."
        },
        {
          "id": 60,
          "exam": "2024-1",
          "question": "데이터베이스에는 관계형, 계층형, 네트워크형 등 다양한 종류가 있는데, 이들을 구분하는 기준은?",
          "options": ["관계(Relationship)", "개체(Object)", "제약 조건(Constraint)", "속성(Attribute)"],
          "answer": 1,
          "explanation": "데이터베이스는 데이터 간의 관계(Relationship) 표현 방식에 따라 구분됩니다."
        }
      ]
    },
    {
      "id": 4,
      "name": "프로그래밍 언어 활용",
      "questions": [
        {
          "id": 61,
          "exam": "2024-1",
          "question": "C언어에서 문자열 처리 함수의 서식과 그 기능의 연결로 틀린 것은?",
          "options": ["strlen(s) - s의 길이를 구한다.", "strcpy(s1, s2) - s2를 s1으로 복사한다.", "strcmp(s1, s2) - s1과 s2를 연결한다.", "strrev(s) - s를 거꾸로 변환한다."],
          "answer": 3,
          "explanation": "strcmp는 문자열 비교 함수입니다. 문자열 연결은 strcat입니다."
        },
        {
          "id": 62,
          "exam": "2024-1",
          "question": "다음 C언어 프로그램의 결과로 옳은 것은?\n\n#include <stdio.h>\nmain( ) {\n  int a[10];\n  a[0] = 0;\n  a[1] = 1;\n  for (int i = 0; i < 8; i++)\n    a[i + 2] = a[i + 1] + a[i];\n  printf(\"%d\", a[9]);\n}",
          "options": ["13", "8", "34", "21"],
          "answer": 4,
          "explanation": "피보나치 수열을 생성합니다. a[9] = 21"
        },
        {
          "id": 63,
          "exam": "2024-1",
          "question": "IPv6에 대한 설명으로 틀린 것은?",
          "options": ["128비트의 주소 공간을 제공한다.", "인증 및 보안 기능을 포함하고 있다.", "패킷 크기가 64Kbyte로 고정되어 있다.", "IPv6 확장 헤더를 통해 네트워크 기능 확장이 용이하다."],
          "answer": 3,
          "explanation": "IPv6의 패킷 크기는 고정되어 있지 않으며, 최대 크기는 제한이 없습니다."
        },
        {
          "id": 64,
          "exam": "2024-1",
          "question": "파이썬의 변수 작성 규칙 설명으로 옳지 않은 것은?",
          "options": ["첫 자리에 숫자를 사용할 수 없다.", "영문 대문자/소문자, 숫자, 밑줄(_)의 사용이 가능하다.", "변수 이름의 중간에 공백을 사용할 수 있다.", "이미 사용되고 있는 예약어는 사용할 수 없다."],
          "answer": 3,
          "explanation": "변수 이름에는 공백을 사용할 수 없습니다."
        },
        {
          "id": 65,
          "exam": "2024-1",
          "question": "스레드(Thread)에 대한 설명으로 옳지 않은 것은?",
          "options": ["한 개의 프로세스는 여러 개의 스레드를 가질 수 없다.", "커널 스레드의 경우 운영체제에 의해 스레드를 운용한다.", "사용자 스레드의 경우 사용자가 만든 라이브러리를 사용하여 스레드를 운용한다.", "스레드를 사용함으로써 하드웨어, 운영체제의 성능과 응용 프로그램의 처리율을 향상시킬 수 있다."],
          "answer": 1,
          "explanation": "한 개의 프로세스는 여러 개의 스레드를 가질 수 있습니다."
        },
        {
          "id": 66,
          "exam": "2024-1",
          "question": "HRN 방식으로 스케줄링 할 경우, 입력된 작업이 다음과 같을 때 처리되는 작업 순서로 옳은 것은?\n\n작업 | 대기 시간 | 서비스(실행) 시간\nA | 5 | 20\nB | 40 | 20\nC | 15 | 45\nD | 20 | 2",
          "options": ["A → C → B → D", "A → B → C → D", "D → A → B → C", "D → B → C → A"],
          "answer": 3,
          "explanation": "HRN = (대기시간 + 서비스시간) / 서비스시간. D(11) → B(3) → C(1.33) → A(1.25)"
        },
        {
          "id": 67,
          "exam": "2024-1",
          "question": "다음 자바 코드를 실행한 결과는?\n\nint x=1, y=6;\nwhile (y--) {\n  x++;\n}\nSystem.out.println(\"x=\"+x+\"y=\"+y);",
          "options": ["x=7 y=0", "x=6 y=-1", "x=7 y=-1", "Unresolved compilation problem 오류 발생"],
          "answer": 3,
          "explanation": "y--는 후위 감소로 6번 반복 후 y=-1, x는 7이 됩니다."
        },
        {
          "id": 68,
          "exam": "2024-1",
          "question": "C언어에서 산술 연산자가 아닌 것은?",
          "options": ["*", "%", "=", "/"],
          "answer": 3,
          "explanation": "=는 대입 연산자입니다. *, %, /는 산술 연산자입니다."
        },
        {
          "id": 69,
          "exam": "2024-1",
          "question": "다음 JAVA 프로그램이 실행되었을 때의 결과는?\n\npublic class Operator {\n  public static void main(String[] args) {\n    int x=5, y=0, z=0;\n    y = x++;\n    z = --x;\n    System.out.print(x + \", \" + y +\", \" +z);\n  }\n}",
          "options": ["5, 6, 5", "5, 5, 5", "5, 6, 4", "6, 5, 5"],
          "answer": 2,
          "explanation": "y=x++(5), x는 6, z=--x(5), 결과: 5, 5, 5"
        },
        {
          "id": 70,
          "exam": "2024-1",
          "question": "C Class IP address에 속하는 것은?",
          "options": ["10.3.2.1", "200.168.30.1", "172.16.98.3", "225.2.4.1"],
          "answer": 1,
          "explanation": "Class C는 192.0.0.0 ~ 223.255.255.255입니다. 200.168.30.1이 해당합니다."
        },
        {
          "id": 71,
          "exam": "2024-1",
          "question": "빈 기억공간의 크기가 20KB, 16KB, 8KB, 40KB일 때 기억장치 배치 전략으로 \"Best Fit\"을 사용하여 17KB의 프로그램을 적재할 경우 내부 단편화의 크기는 얼마인가?",
          "options": ["3KB", "23KB", "64KB", "67KB"],
          "answer": 1,
          "explanation": "Best Fit은 가장 작은 적합한 공간인 20KB에 배치하므로 내부 단편화는 20-17=3KB입니다."
        },
        {
          "id": 72,
          "exam": "2024-1",
          "question": "다음의 페이지 참조열(Page reference)에 대해 페이지 교체 기법으로 선입선출 알고리즘을 사용할 경우 페이지 부재 횟수(Page Fault)는? (단, 할당된 페이지 프레임 수는 3이고, 처음에는 모든 프레임이 비어 있다.)\n\n<페이지 참조열>\n7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2, 1, 2, 0, 1, 7, 0",
          "options": ["14", "13", "20", "15"],
          "answer": 2,
          "explanation": "FIFO 알고리즘으로 페이지 부재 횟수를 계산하면 14회입니다."
        },
        {
          "id": 73,
          "exam": "2024-1",
          "question": "UNIX에서 새로운 프로세스를 생성하는 명령어는?",
          "options": ["cat", "ls", "chmod", "fork"],
          "answer": 4,
          "explanation": "fork()는 새로운 프로세스를 생성하는 시스템 콜입니다."
        },
        {
          "id": 74,
          "exam": "2024-1",
          "question": "페이징 기법에서 페이지 크기가 작아질수록 발생하는 현상이 아닌 것은?",
          "options": ["기억장소 이용 효율이 증가한다.", "입·출력 시간이 늘어난다.", "내부 단편화가 감소한다.", "페이지 맵 테이블의 크기가 감소한다."],
          "answer": 4,
          "explanation": "페이지 크기가 작아지면 페이지 수가 증가하므로 페이지 맵 테이블의 크기가 증가합니다."
        },
        {
          "id": 75,
          "exam": "2024-1",
          "question": "C언어에서 두 개의 논리 값 중 하나라도 참이면 1을, 모두 거짓이면 0을 반환하는 연산자는?",
          "options": ["∥", "&&", "**", "!="],
          "answer": 1,
          "explanation": "|| 연산자는 논리 OR 연산자입니다."
        },
        {
          "id": 76,
          "exam": "2024-1",
          "question": "IPv6의 주소체계로 거리가 먼 것은?",
          "options": ["Anycast", "Unicast", "Multicast", "Broadcast"],
          "answer": 4,
          "explanation": "IPv6에는 Broadcast가 없습니다. Unicast, Multicast, Anycast만 있습니다."
        },
        {
          "id": 77,
          "exam": "2024-1",
          "question": "어떤 모듈이 다른 모듈의 내부 논리 조직을 제어하기 위한 목적으로 제어신호를 이용하여 통신하는 경우이며, 하위 모듈에서 상위 모듈로 제어신호가 이동하여 상위 모듈에게 처리 명령을 부여하는 권리 전도현상이 발생하게 되는 결합도는?",
          "options": ["Stamp Coupling", "Data Coupling", "Common Coupling", "Control Coupling"],
          "answer": 4,
          "explanation": "제어 결합도(Control Coupling)는 제어 신호를 통해 모듈 간 통신하는 결합도입니다."
        },
        {
          "id": 78,
          "exam": "2024-1",
          "question": "TCP/IP에서 사용되는 논리 주소를 물리 주소로 변환시켜 주는 프로토콜은?",
          "options": ["TCP", "ARP", "IP", "FTP"],
          "answer": 2,
          "explanation": "ARP(Address Resolution Protocol)는 논리 주소(IP)를 물리 주소(MAC)로 변환합니다."
        },
        {
          "id": 79,
          "exam": "2024-1",
          "question": "운영체제의 가상기억장치 관리에서 프로세스가 일정 시간동안 자주 참조하는 페이지들의 집합을 의미하는 것은?",
          "options": ["Deadlock", "Locality", "Thrashing", "Working Set"],
          "answer": 4,
          "explanation": "워킹 셋(Working Set)은 프로세스가 자주 참조하는 페이지들의 집합입니다."
        },
        {
          "id": 80,
          "exam": "2024-1",
          "question": "다음 설명에 해당하는 방식은?\n\n• 무선 랜에서 데이터 전송 시, 매체가 비어있음을 확인한 뒤 충돌을 회피하기 위해 임의 시간을 기다린 후 데이터를 전송하는 방법이다.\n• 네트워크에 데이터의 전송이 없는 경우라도 동시 전송에 의한 충돌에 대비하여 확인 신호를 전송한다.",
          "options": ["STA", "Collision Domain", "CSMA/CA", "CSMA/CD"],
          "answer": 3,
          "explanation": "CSMA/CA(Carrier Sense Multiple Access with Collision Avoidance)는 충돌을 회피하는 방식입니다."
        }
      ]
    },
    {
      "id": 5,
      "name": "정보시스템 구축 관리",
      "questions": [
        {
          "id": 81,
          "exam": "2024-1",
          "question": "침입탐지 시스템(IDS: Intrusion Detection System)과 관련한 설명으로 틀린 것은?",
          "options": ["이상 탐지 기법(Anomaly Detection)은 Signature Base나 Knowledge Base라고도 불리며 이미 발견되고 정립된 공격 패턴을 입력해두었다가 탐지 및 차단한다.", "HIDS(Host-Based Intrusion Detection)는 운영체제에 설정된 사용자 계정에 따라 어떤 사용자가 어떤 접근을 시도하고 어떤 작업을 했는지에 대한 기록을 남기고 추적한다.", "NIDS(Network-Based Intrusion Detection System)로는 대표적으로 Snort가 있다.", "외부 인터넷에 서비스를 제공하는 서버가 위치하는 네트워크인 DMZ(Demilitarized Zone)에는 IDS가 설치될 수 있다."],
          "answer": 1,
          "explanation": "Signature Base는 오용 탐지(Misuse Detection) 기법에 해당합니다. 이상 탐지는 정상 행위 패턴과의 차이를 탐지합니다."
        },
        {
          "id": 82,
          "exam": "2024-1",
          "question": "정보시스템과 관련한 다음 설명에 해당하는 것은?\n\n• 각 시스템 간에 공유 디스크를 중심으로 클러스터링으로 엮어 다수의 시스템을 동시에 연결할 수 있다.\n• 조직, 기업의 기간 업무 서버 안정성을 높이기 위해 사용될 수 있다.\n• 여러 가지 방식으로 구현되며, 2개의 서버를 연결하는 것으로 2개의 시스템이 각각 업무를 수행하도록 구현하는 방식이 널리 사용된다.",
          "options": ["고가용성 솔루션(HACMP)", "점대점 연결 방식(Point-to-Point Mode)", "스턱스넷(Stuxnet)", "루팅(Rooting)"],
          "answer": 1,
          "explanation": "HACMP(High Availability Cluster Multi-Processing)는 고가용성을 제공하는 클러스터 솔루션입니다."
        },
        {
          "id": 83,
          "exam": "2024-1",
          "question": "기기를 키오스크에 갖다 대면 원하는 데이터를 바로 가져올 수 있는 기술로, 10㎝ 이내 근접 거리에서 기가급 속도로 데이터 전송이 가능한 초고속 근접무선통신(NFC; Near Field Communication) 기술은?",
          "options": ["BcN(Broadband Convergence Network)", "Zing", "Marine Navi", "C-V2X(Cellular Vehicle To Everything)"],
          "answer": 2,
          "explanation": "Zing은 초고속 근접무선통신 기술입니다."
        },
        {
          "id": 84,
          "exam": "2024-1",
          "question": "세션 하이재킹을 탐지하는 방법으로 거리가 먼 것은?",
          "options": ["FTP SYN SEGMENT 탐지", "비동기화 상태 탐지", "ACK STORM 탐지", "패킷의 유실 및 재전송 증가 탐지"],
          "answer": 1,
          "explanation": "세션 하이재킹 탐지 방법: ACK Storm, 비동기화 상태, 패킷 유실/재전송 증가 등"
        },
        {
          "id": 85,
          "exam": "2024-1",
          "question": "소프트웨어 생명 주기 모형 중 Spiral Model에 대한 설명으로 틀린 것은?",
          "options": ["비교적 대규모 시스템에 적합하다.", "개발 순서는 계획 및 정의, 위험 분석, 공학적 개발, 고객 평가 순으로 진행된다.", "소프트웨어를 개발하면서 발생할 수 있는 위험을 관리하고 최소화하는 것을 목적으로 한다.", "계획, 설계, 개발, 평가의 개발 주기가 한 번만 수행된다."],
          "answer": 4,
          "explanation": "나선형 모델은 개발 주기를 여러 번 반복하며 점진적으로 개발합니다."
        },
        {
          "id": 86,
          "exam": "2024-1",
          "question": "다음이 설명하는 용어로 옳은 것은?\n\n• 오픈 소스를 기반으로 한 분산 컴퓨팅 플랫폼이다.\n• 일반 PC급 컴퓨터들로 가상화된 대형 스토리지를 형성한다.\n• 다양한 소스를 통해 생성된 빅데이터를 효율적으로 저장하고 처리한다.",
          "options": ["비컨(Beacon)", "하둡(Hadoop)", "멤리스터(Memristor)", "포스퀘어(Foursquare)"],
          "answer": 2,
          "explanation": "하둡(Hadoop)은 오픈 소스 기반의 분산 컴퓨팅 플랫폼입니다."
        },
        {
          "id": 87,
          "exam": "2024-1",
          "question": "컴퓨터 사용자의 키보드 움직임을 탐지해 ID, 패스워드 등 개인의 중요한 정보를 몰래 빼가는 해킹 공격은?",
          "options": ["Key Logger Attack", "Worm", "Zombie Worm", "Rollback"],
          "answer": 1,
          "explanation": "키로거(Key Logger)는 키보드 입력을 기록하여 정보를 탈취하는 공격입니다."
        },
        {
          "id": 88,
          "exam": "2024-1",
          "question": "COCOMO 모델의 프로젝트 유형으로 거리가 먼 것은?",
          "options": ["Semi-detached", "Organic", "Sequential", "Embedded"],
          "answer": 3,
          "explanation": "COCOMO 모델의 프로젝트 유형은 Organic, Semi-detached, Embedded입니다."
        },
        {
          "id": 89,
          "exam": "2024-1",
          "question": "다음은 정보의 접근통제 정책에 대한 설명이다. (ㄱ)에 들어갈 내용으로 옳은 것은?\n\n정책 | (ㄱ) | DAC | RBAC\n권한부여 | 시스템 | 데이터소유자 | 중앙관리자\n접근결정 | 보안등급(Label) | 신분(Identity) | 역할(Role)\n정책변경 | 고정적(변경 어려움) | 변경 용이 | 변경 용이\n장점 | 안정적 중앙 집중적 | 구현 용이 유연함 | 관리 용이",
          "options": ["NAC", "MAC", "SDAC", "AAC"],
          "answer": 2,
          "explanation": "MAC(Mandatory Access Control)은 시스템이 권한을 부여하고 보안등급으로 접근을 결정합니다."
        },
        {
          "id": 90,
          "exam": "2024-1",
          "question": "정보 보안의 3요소에 해당하지 않는 것은?",
          "options": ["무결성", "기밀성", "휘발성", "가용성"],
          "answer": 3,
          "explanation": "정보 보안의 3요소(CIA): 기밀성(Confidentiality), 무결성(Integrity), 가용성(Availability)"
        },
        {
          "id": 91,
          "exam": "2024-1",
          "question": "CBD(Component Based Development) SW 개발 표준 산출물 중 분석 단계에 해당하는 것은?",
          "options": ["통합시험 결과서", "클래스 설계서", "사용자 요구사항 정의서", "프로그램 코드"],
          "answer": 3,
          "explanation": "사용자 요구사항 정의서는 분석 단계의 산출물입니다."
        },
        {
          "id": 92,
          "exam": "2024-1",
          "question": "구글의 구글 브레인 팀이 제작하여 공개한 기계 학습(Machine Learning)을 위한 오픈 소스 소프트웨어 라이브러리는?",
          "options": ["원 세그(One Seg)", "타조(Tajo)", "포스퀘어(Foursquare)", "텐서플로(TensorFlow)"],
          "answer": 4,
          "explanation": "텐서플로(TensorFlow)는 구글에서 개발한 기계 학습 라이브러리입니다."
        },
        {
          "id": 93,
          "exam": "2024-1",
          "question": "Secure 코딩에서 입력 데이터의 보안 약점과 관련한 설명으로 틀린 것은?",
          "options": ["SQL 삽입: 사용자의 입력 값 등 외부 입력 값이 SQL 쿼리에 삽입되어 공격", "크로스사이트 스크립트: 검증되지 않은 외부 입력 값에 의해 브라우저에서 악의적인 코드가 실행", "운영체제 명령어 삽입: 운영체제 명령어 파라미터 입력 값이 적절한 사전검증을 거치지 않고 사용되어 공격자가 운영체제 명령어를 조작", "자원 삽입: 사용자가 내부 입력 값을 통해 시스템 내에 사용이 불가능한 자원을 지속적으로 입력함으로써 시스템에 과부하 발생"],
          "answer": 4,
          "explanation": "자원 삽입은 외부 입력 값이 아닌 외부에서 사용 가능한 자원을 대상으로 합니다."
        },
        {
          "id": 94,
          "exam": "2024-1",
          "question": "두 명의 개발자가 5개월에 걸쳐 10000 라인의 코드를 개발하였을 때, 월별 생산성 측정(man-month)을 위한 계산 방식으로 가장 적합한 것은?",
          "options": ["10000/2", "10000/(5×2)", "10000/5", "(2×10000)/5"],
          "answer": 2,
          "explanation": "월별 생산성 = 총 라인 수 / (개발자 수 × 개월 수) = 10000/(2×5) = 1000 라인/man-month"
        },
        {
          "id": 95,
          "exam": "2024-1",
          "question": "소프트웨어 재공학의 주요 활동 중 기존 소프트웨어를 다른 운영체제나 하드웨어 환경에서 사용할 수 있도록 변환하는 것은?",
          "options": ["분석", "역공학", "재구성", "이식"],
          "answer": 4,
          "explanation": "이식(Migration)은 소프트웨어를 다른 환경으로 변환하는 활동입니다."
        },
        {
          "id": 96,
          "exam": "2024-1",
          "question": "전자 칩과 같은 소프트웨어 부품, 즉 블록(모듈)을 만들어서 끼워 맞추는 방법으로 소프트웨어를 완성시키는 재사용 방법은?",
          "options": ["생성 중심", "합성 중심", "구조 중심", "분리 중심"],
          "answer": 2,
          "explanation": "합성 중심(Composition-based)은 기존 컴포넌트를 조합하여 새로운 소프트웨어를 만드는 방법입니다."
        },
        {
          "id": 97,
          "exam": "2024-1",
          "question": "다음 내용이 설명하는 것은?\n\n• 네트워크상에 광채널 스위치의 이점인 고속 전송과 장거리 연결 및 멀티 프로토콜 기능을 활용\n• 각기 다른 운영체제를 가진 여러 기종들이 네트워크상에서 동일 저장장치의 데이터를 공유하게 함으로써, 여러 개의 저장장치나 백업 장비를 단일화시킨 시스템",
          "options": ["SAN", "MBR", "NAC", "NIC"],
          "answer": 1,
          "explanation": "SAN(Storage Area Network)은 저장장치를 네트워크로 연결하여 공유하는 시스템입니다."
        },
        {
          "id": 98,
          "exam": "2024-1",
          "question": "크래커가 침입하여 백도어를 만들어 놓거나, 설정 파일을 변경했을 때 분석하는 도구는?",
          "options": ["trace", "tripwire", "udpdump", "cron"],
          "answer": 2,
          "explanation": "tripwire는 파일 무결성을 검사하여 변경 사항을 탐지하는 도구입니다."
        },
        {
          "id": 99,
          "exam": "2024-1",
          "question": "SW 실무적으로 검증된 개발보안 방법론 중 하나로, 보안의 모범 사례를 SDLC(Software Development Life Cycle)에 통합한 소프트웨어 개발 보안 생명주기 방법론은?",
          "options": ["CWE", "CLASP", "PIMS", "Seven Touchpoints"],
          "answer": 2,
          "explanation": "CLASP(Comprehensive, Lightweight Application Security Process)는 보안을 SDLC에 통합한 방법론입니다."
        },
        {
          "id": 100,
          "exam": "2024-1",
          "question": "소프트웨어 프로세스에 대한 개선 및 능력 측정 기준에 대한 국제 표준은?",
          "options": ["IEEE 802.5", "ISO 14001", "IEEE 488", "SPICE"],
          "answer": 4,
          "explanation": "SPICE(Software Process Improvement and Capability dEtermination)는 ISO/IEC 15504로 소프트웨어 프로세스 평가 국제 표준입니다."
        }
      ]
    }
  ]
};
