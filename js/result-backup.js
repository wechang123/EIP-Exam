// 전역 변수
let examQuestions = [];
let answers = {};
let results = {
    subjects: [],
    totalScore: 0,
    totalCorrect: 0,
    passed: false,
    hasFail: false
};

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', () => {
    const examMode = localStorage.getItem('examMode') || 'full';
    const examSubject = parseInt(localStorage.getItem('examSubject')) || null;

    loadExamData();
    calculateResults(examMode, examSubject);
    displayResults(examMode, examSubject);
});

// 시험 데이터 로드
function loadExamData() {
    const savedQuestions = localStorage.getItem('examQuestions');
    const savedAnswers = localStorage.getItem('examAnswers');

    if (!savedQuestions) {
        alert('시험 데이터가 없습니다.');
        window.location.href = 'index.html';
        return;
    }

    examQuestions = JSON.parse(savedQuestions);
    answers = savedAnswers ? JSON.parse(savedAnswers) : {};
}

// 결과 계산
function calculateResults(examMode = 'full', examSubject = null) {
    // 과목별 결과 초기화
    const subjectResults = [
        { id: 1, name: '소프트웨어 설계', correct: 0, total: 20, score: 0, passed: false },
        { id: 2, name: '소프트웨어 개발', correct: 0, total: 20, score: 0, passed: false },
        { id: 3, name: '데이터베이스 구축', correct: 0, total: 20, score: 0, passed: false },
        { id: 4, name: '프로그래밍 언어 활용', correct: 0, total: 20, score: 0, passed: false },
        { id: 5, name: '정보시스템 구축 관리', correct: 0, total: 20, score: 0, passed: false }
    ];

    // 문제별 채점
    examQuestions.forEach(q => {
        const userAnswer = answers[q.examNumber];
        const isCorrect = userAnswer === q.answer;

        // 문제에 채점 결과 추가
        q.userAnswer = userAnswer || null;
        q.isCorrect = isCorrect;

        if (isCorrect) {
            subjectResults[q.subjectId - 1].correct++;
        }
    });

    // 과목별 점수 계산
    let totalCorrect = 0;
    let hasFail = false;

    subjectResults.forEach(subject => {
        subject.score = subject.correct * 5;  // 문항당 5점
        subject.passed = subject.score >= 40;  // 과목 합격: 40점 이상
        totalCorrect += subject.correct;

        if (!subject.passed) {
            hasFail = true;
        }
    });

    // 전체 결과
    const totalScore = totalCorrect;  // 100점 만점 (문항당 1점)
    const averageScore = (totalScore / 100) * 100;  // 평균 점수
    const passed = !hasFail && averageScore >= 60;  // 합격: 과락 없음 + 평균 60점 이상

    results = {
        subjects: subjectResults,
        totalScore: totalScore,
        totalCorrect: totalCorrect,
        averageScore: averageScore,
        passed: passed,
        hasFail: hasFail
    };
}

// 결과 표시
function displayResults(examMode = 'full', examSubject = null) {
    // 과목별 모드인 경우 제목 변경
    if (examMode === 'subject' && examSubject) {
        const headerTitle = document.querySelector('header h1');
        if (headerTitle) {
            headerTitle.textContent = `과목 ${examSubject} 채점 결과`;
        }
    }

    // 합격/불합격 배너
    const banner = document.getElementById('result-banner');
    if (results.passed) {
        banner.className = 'result-banner pass';
        banner.innerHTML = `
            <h2>합격</h2>
            <p>축하합니다! 정보처리기사 필기 모의시험에 합격하셨습니다.</p>
        `;
    } else {
        let failReason = '';
        if (results.hasFail) {
            failReason = '과락 과목이 있습니다.';
        }
        if (results.averageScore < 60) {
            failReason += (failReason ? ' ' : '') + '평균 60점 미만입니다.';
        }

        banner.className = 'result-banner fail';
        banner.innerHTML = `
            <h2>불합격</h2>
            <p>${failReason}</p>
        `;
    }

    // 총점 표시
    const totalScoreDiv = document.getElementById('total-score');
    totalScoreDiv.innerHTML = `
        <div class="score-label">총점</div>
        <div class="score-value">${results.totalCorrect}<span> / 100</span></div>
        <div class="score-label">평균 ${results.averageScore.toFixed(1)}점</div>
    `;

    // 과목별 점수
    const subjectScoresDiv = document.getElementById('subject-scores');
    subjectScoresDiv.innerHTML = '';

    results.subjects.forEach(subject => {
        const card = document.createElement('div');
        card.className = `subject-score-card ${subject.passed ? 'pass' : 'fail'}`;
        card.innerHTML = `
            <div class="subject-info">
                <h3>${subject.id}과목</h3>
                <div class="subject-name">${subject.name}</div>
            </div>
            <div class="subject-score">
                <div class="score">${subject.score}점</div>
                <div class="status">${subject.passed ? '합격' : '과락'} (${subject.correct}/20)</div>
            </div>
        `;
        subjectScoresDiv.appendChild(card);
    });

    // 상세 결과
    displayDetailedResults('all');
}

// 상세 결과 표시
function displayDetailedResults(filter) {
    const container = document.getElementById('detailed-results');
    container.innerHTML = '';

    let currentSubject = 0;

    examQuestions.forEach(q => {
        // 필터 적용
        if (filter === 'wrong' && q.isCorrect) return;
        if (filter === 'correct' && !q.isCorrect) return;

        // 과목 헤더 추가
        if (q.subjectId !== currentSubject) {
            currentSubject = q.subjectId;
            const header = document.createElement('div');
            header.className = 'subject-header';
            header.textContent = `${q.subjectId}과목: ${q.subjectName}`;
            container.appendChild(header);
        }

        const resultDiv = document.createElement('div');
        resultDiv.className = `question-result ${q.isCorrect ? 'correct' : 'wrong'}`;

        let answerText = '';
        if (q.userAnswer) {
            answerText = `<span class="your-answer">내 답: ${q.userAnswer}번 (${q.options[q.userAnswer - 1]})</span>`;
        } else {
            answerText = '<span class="your-answer">미응답</span>';
        }

        if (!q.isCorrect) {
            answerText += ` / <span class="correct-answer">정답: ${q.answer}번 (${q.options[q.answer - 1]})</span>`;
        }

        // 문제 내용 (HTML이 있으면 HTML 사용)
        const questionDisplay = q.questionHTML
            ? q.question + q.questionHTML
            : q.question;

        resultDiv.innerHTML = `
            <div class="question-result-header">
                <span class="question-result-number">문제 ${q.examNumber}</span>
                <span class="question-result-status">${q.isCorrect ? '정답' : '오답'}</span>
            </div>
            <div class="question-result-content">${questionDisplay}</div>
            <div class="question-result-answer">${answerText}</div>
            ${!q.isCorrect ? `
                <div class="question-result-explanation">
                    <h4>해설</h4>
                    <p>${q.explanation}</p>
                </div>
            ` : ''}
        `;

        container.appendChild(resultDiv);
    });

    // 표시할 문제가 없는 경우
    if (container.children.length === 0) {
        container.innerHTML = '<p style="text-align: center; padding: 40px; color: #7f8c8d;">해당하는 문제가 없습니다.</p>';
    }
}

// 문제 필터링
function filterQuestions(filter) {
    // 버튼 활성화 상태 업데이트
    document.querySelectorAll('.filter-buttons .btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === filter);
    });

    displayDetailedResults(filter);
}

// 다시 시험보기
function retakeExam() {
    localStorage.removeItem('examAnswers');
    localStorage.removeItem('examQuestions');
    localStorage.removeItem('examStartTime');
    window.location.href = 'exam.html';
}
