// 전역 변수
let questions = [];          // 전체 문제 데이터
let examQuestions = [];      // 시험에 출제된 문제 (랜덤 선택)
let answers = {};            // 사용자 답안 { questionId: selectedOption }
let currentQuestion = 0;     // 현재 문제 인덱스 (0-99)
let currentSubject = 1;      // 현재 과목 (1-5)
let timerInterval = null;    // 타이머 인터벌
let remainingTime = 100 * 60; // 남은 시간 (초) - 100분
let timerEnabled = true;     // 타이머 활성화 여부
let timerPaused = false;     // 타이머 일시정지 여부

// 과목 정보
const subjects = [
    { id: 1, name: '소프트웨어 설계' },
    { id: 2, name: '소프트웨어 개발' },
    { id: 3, name: '데이터베이스 구축' },
    { id: 4, name: '프로그래밍 언어 활용' },
    { id: 5, name: '정보시스템 구축 관리' }
];

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', () => {
    loadQuestions();
    initializeExam();
    setupEventListeners();
    startTimer();
});

// 문제 데이터 로드
function loadQuestions() {
    questions = QUESTION_DATA.subjects;
}

// 시험 초기화
function initializeExam() {
    // 과목별로 20문제씩 랜덤 선택
    examQuestions = [];

    questions.forEach(subject => {
        // 문제를 섞어서 20개 선택
        const shuffled = [...subject.questions].sort(() => Math.random() - 0.5);
        const selected = shuffled.slice(0, 20);

        selected.forEach((q, idx) => {
            examQuestions.push({
                ...q,
                subjectId: subject.id,
                subjectName: subject.name,
                examNumber: examQuestions.length + 1  // 시험 문제 번호 (1-100)
            });
        });
    });

    // localStorage에 시험 정보 저장
    localStorage.setItem('examQuestions', JSON.stringify(examQuestions));
    localStorage.setItem('examStartTime', Date.now());

    // 저장된 답안 불러오기 (새로고침 시)
    const savedAnswers = localStorage.getItem('examAnswers');
    if (savedAnswers) {
        answers = JSON.parse(savedAnswers);
    }

    // 답안지 그리드 생성
    createAnswerGrid();

    // 첫 문제 표시
    displayQuestion(0);
    updateAnsweredCount();
}

// 답안지 그리드 생성
function createAnswerGrid() {
    const grid = document.getElementById('answer-grid');
    grid.innerHTML = '';

    for (let i = 0; i < 100; i++) {
        const subjectNum = Math.floor(i / 20) + 1;

        // 과목 구분선 추가 (각 과목 시작 시)
        if (i % 20 === 0) {
            const divider = document.createElement('div');
            divider.className = 'subject-divider';
            divider.textContent = `${subjectNum}과목`;
            grid.appendChild(divider);
        }

        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        btn.textContent = i + 1;
        btn.dataset.index = i;

        btn.addEventListener('click', () => {
            goToQuestion(i);
        });

        grid.appendChild(btn);
    }
}

// 문제 표시
function displayQuestion(index) {
    if (index < 0 || index >= examQuestions.length) return;

    currentQuestion = index;
    const q = examQuestions[index];
    currentSubject = q.subjectId;

    // 문제 번호 및 과목 표시
    document.getElementById('question-number').textContent = `문제 ${q.examNumber}`;
    document.getElementById('subject-name').textContent = `${q.subjectId}과목: ${q.subjectName}`;

    // 문제 내용 표시 (HTML이 있으면 HTML 사용, 없으면 텍스트)
    const questionContent = document.getElementById('question-content');
    if (q.questionHTML) {
        questionContent.innerHTML = q.question + q.questionHTML;
    } else {
        questionContent.textContent = q.question;
    }

    // 선택지 표시
    const optionsArea = document.getElementById('options-area');
    optionsArea.innerHTML = '';

    q.options.forEach((option, idx) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        if (answers[q.examNumber] === idx + 1) {
            optionDiv.classList.add('selected');
        }

        optionDiv.innerHTML = `
            <span class="option-number">${idx + 1}</span>
            <span class="option-text">${option}</span>
        `;

        optionDiv.addEventListener('click', () => selectOption(q.examNumber, idx + 1));
        optionsArea.appendChild(optionDiv);
    });

    // 과목 탭 업데이트
    updateSubjectTabs();

    // 답안지 현재 문제 표시
    updateAnswerGrid();

    // 이전/다음 버튼 상태 업데이트
    document.getElementById('prev-btn').disabled = index === 0;
    document.getElementById('next-btn').disabled = index === 99;
}

// 선택지 선택
function selectOption(questionNumber, optionNumber) {
    answers[questionNumber] = optionNumber;

    // localStorage에 저장
    localStorage.setItem('examAnswers', JSON.stringify(answers));

    // UI 업데이트
    const options = document.querySelectorAll('.option');
    options.forEach((opt, idx) => {
        opt.classList.toggle('selected', idx + 1 === optionNumber);
    });

    // 답안지 업데이트
    updateAnswerGrid();
    updateAnsweredCount();
}

// 답안지 그리드 업데이트
function updateAnswerGrid() {
    const buttons = document.querySelectorAll('.answer-btn');
    buttons.forEach(btn => {
        const index = parseInt(btn.dataset.index);
        const questionNumber = index + 1;

        btn.classList.remove('current', 'answered');

        if (index === currentQuestion) {
            btn.classList.add('current');
        }

        if (answers[questionNumber]) {
            btn.classList.add('answered');
        }
    });
}

// 답안 개수 업데이트
function updateAnsweredCount() {
    const count = Object.keys(answers).length;
    document.getElementById('answered-count').textContent = `${count} / 100`;
}

// 과목 탭 업데이트
function updateSubjectTabs() {
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        const subjectId = parseInt(tab.dataset.subject);
        tab.classList.toggle('active', subjectId === currentSubject);

        // 미답변 문제 표시
        const startIdx = (subjectId - 1) * 20 + 1;
        const endIdx = subjectId * 20;
        let hasUnanswered = false;

        for (let i = startIdx; i <= endIdx; i++) {
            if (!answers[i]) {
                hasUnanswered = true;
                break;
            }
        }

        tab.classList.toggle('has-unanswered', hasUnanswered);
    });
}

// 이벤트 리스너 설정
function setupEventListeners() {
    // 과목 탭 클릭
    document.querySelectorAll('.tab-btn').forEach(tab => {
        tab.addEventListener('click', () => {
            const subjectId = parseInt(tab.dataset.subject);
            const firstQuestionIndex = (subjectId - 1) * 20;
            goToQuestion(firstQuestionIndex);
        });
    });
}

// 특정 문제로 이동
function goToQuestion(index) {
    displayQuestion(index);
}

// 이전 문제
function prevQuestion() {
    if (currentQuestion > 0) {
        displayQuestion(currentQuestion - 1);
    }
}

// 다음 문제
function nextQuestion() {
    if (currentQuestion < 99) {
        displayQuestion(currentQuestion + 1);
    }
}

// 타이머 시작
function startTimer() {
    if (!timerEnabled) return;

    updateTimerDisplay();

    timerInterval = setInterval(() => {
        if (!timerPaused) {
            remainingTime--;
            updateTimerDisplay();

            if (remainingTime <= 0) {
                clearInterval(timerInterval);
                alert('시험 시간이 종료되었습니다.');
                confirmSubmit();
            }
        }
    }, 1000);
}

// 타이머 토글
function toggleTimer() {
    timerPaused = !timerPaused;
    const btn = document.getElementById('timer-toggle');
    if (timerPaused) {
        btn.textContent = '▶ 재개';
        btn.classList.add('paused');
    } else {
        btn.textContent = '⏸ 일시정지';
        btn.classList.remove('paused');
    }
}

// 타이머 표시 업데이트
function updateTimerDisplay() {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    const display = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    document.getElementById('time-display').textContent = display;

    // 10분 이하일 때 경고 색상
    const timer = document.getElementById('timer');
    if (remainingTime <= 600) {
        timer.style.background = '#c0392b';
        timer.style.animation = 'pulse 1s infinite';
    }
}

// 시험 종료 확인
function submitExam() {
    const unanswered = 100 - Object.keys(answers).length;
    let message = '';

    if (unanswered > 0) {
        message = `풀지 않은 문제가 ${unanswered}개 있습니다.`;
    } else {
        message = '모든 문제를 풀었습니다.';
    }

    document.getElementById('modal-message').textContent = message;
    document.getElementById('submit-modal').classList.add('show');
}

// 모달 닫기
function closeModal() {
    document.getElementById('submit-modal').classList.remove('show');
}

// 시험 종료 확정
function confirmSubmit() {
    clearInterval(timerInterval);

    // 결과 데이터 저장
    localStorage.setItem('examAnswers', JSON.stringify(answers));
    localStorage.setItem('examQuestions', JSON.stringify(examQuestions));
    localStorage.setItem('examMode', 'full'); // 전체 시험 모드

    // 결과 페이지로 이동
    window.location.href = 'result.html';
}

// 현재 과목만 제출
function submitCurrentSubject() {
    const currentSubjectNum = Math.floor(currentQuestion / 20) + 1;
    const startIdx = (currentSubjectNum - 1) * 20 + 1;
    const endIdx = currentSubjectNum * 20;

    // 현재 과목의 미답변 문제 확인
    let unanswered = 0;
    for (let i = startIdx; i <= endIdx; i++) {
        if (!answers[i]) {
            unanswered++;
        }
    }

    let message = `${currentSubjectNum}과목을 제출하시겠습니까?`;
    if (unanswered > 0) {
        message += `\n풀지 않은 문제가 ${unanswered}개 있습니다.`;
    }

    if (confirm(message)) {
        // 현재 과목 정보 저장
        const subjectQuestions = examQuestions.filter(q => q.subjectId === currentSubjectNum);
        const subjectAnswers = {};
        for (let i = startIdx; i <= endIdx; i++) {
            if (answers[i]) {
                subjectAnswers[i] = answers[i];
            }
        }

        localStorage.setItem('examAnswers', JSON.stringify(subjectAnswers));
        localStorage.setItem('examQuestions', JSON.stringify(subjectQuestions));
        localStorage.setItem('examMode', 'subject'); // 과목별 모드
        localStorage.setItem('examSubject', currentSubjectNum); // 과목 번호 저장

        // 결과 페이지로 이동
        window.location.href = 'result.html';
    }
}

// 키보드 단축키
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        prevQuestion();
    } else if (e.key === 'ArrowRight') {
        nextQuestion();
    } else if (e.key >= '1' && e.key <= '4') {
        const q = examQuestions[currentQuestion];
        selectOption(q.examNumber, parseInt(e.key));
    }
});
