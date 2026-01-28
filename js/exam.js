// ============================================
// SOLID 원칙을 적용한 정보처리기사 모의고사 시스템
// ============================================

// ============================================
// 1. Single Responsibility Principle (SRP)
// 각 클래스는 하나의 책임만 가짐
// ============================================

// 시험 상태 관리 (데이터만 관리)
class ExamState {
    constructor() {
        this.questions = [];
        this.examQuestions = [];
        this.answers = {};
        this.currentQuestion = 0;
        this.currentSubject = 1;
    }

    setQuestions(questions) {
        this.questions = questions;
    }

    setExamQuestions(examQuestions) {
        this.examQuestions = examQuestions;
    }

    setAnswer(questionNumber, optionNumber) {
        this.answers[questionNumber] = optionNumber;
    }

    getAnswer(questionNumber) {
        return this.answers[questionNumber];
    }

    getAnsweredCount() {
        return Object.keys(this.answers).length;
    }

    getCurrentQuestion() {
        return this.examQuestions[this.currentQuestion];
    }

    setCurrentQuestion(index) {
        if (index >= 0 && index < this.examQuestions.length) {
            this.currentQuestion = index;
            const question = this.examQuestions[index];
            if (question) {
                this.currentSubject = question.subjectId;
            }
        }
    }

    getAllAnswers() {
        return { ...this.answers };
    }

    loadAnswers(answers) {
        this.answers = answers;
    }
}

// ============================================
// 2. Dependency Inversion Principle (DIP)
// 추상화에 의존하도록 인터페이스 정의
// ============================================

// 저장소 인터페이스 (추상화)
class IStorage {
    save(key, value) {
        throw new Error('save() must be implemented');
    }

    load(key) {
        throw new Error('load() must be implemented');
    }

    remove(key) {
        throw new Error('remove() must be implemented');
    }
}

// LocalStorage 구현체
class LocalStorageAdapter extends IStorage {
    save(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (error) {
            console.error('Storage save error:', error);
            return false;
        }
    }

    load(key) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error('Storage load error:', error);
            return null;
        }
    }

    remove(key) {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (error) {
            console.error('Storage remove error:', error);
            return false;
        }
    }
}

// ============================================
// 3. SRP: 문제 선택 로직
// ============================================

class QuestionSelector {
    selectRandomQuestions(subjects, questionsPerSubject = 20) {
        const selectedQuestions = [];

        subjects.forEach(subject => {
            const shuffled = [...subject.questions].sort(() => Math.random() - 0.5);
            const selected = shuffled.slice(0, questionsPerSubject);

            selected.forEach(q => {
                selectedQuestions.push({
                    ...q,
                    subjectId: subject.id,
                    subjectName: subject.name,
                    examNumber: selectedQuestions.length + 1
                });
            });
        });

        return selectedQuestions;
    }
}

// ============================================
// 4. SRP: 타이머 관리
// ============================================

class TimerManager {
    constructor(initialTimeInSeconds, onTick, onComplete) {
        this.remainingTime = initialTimeInSeconds;
        this.initialTime = initialTimeInSeconds;
        this.onTick = onTick;
        this.onComplete = onComplete;
        this.interval = null;
        this.enabled = true;
        this.paused = false;
    }

    start() {
        if (!this.enabled || this.interval) return;

        this.interval = setInterval(() => {
            if (this.paused) return;

            this.remainingTime--;

            if (this.onTick) {
                this.onTick(this.remainingTime);
            }

            if (this.remainingTime <= 0) {
                this.stop();
                if (this.onComplete) {
                    this.onComplete();
                }
            }
        }, 1000);
    }

    stop() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }

    pause() {
        this.paused = true;
    }

    resume() {
        this.paused = false;
    }

    toggle() {
        this.paused = !this.paused;
    }

    getFormattedTime() {
        const minutes = Math.floor(this.remainingTime / 60);
        const seconds = this.remainingTime % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
}

// ============================================
// 5. SRP: UI 업데이트
// ============================================

class UIManager {
    constructor() {
        this.elements = {
            questionNumber: document.getElementById('question-number'),
            subjectName: document.getElementById('subject-name'),
            examInfo: document.getElementById('exam-info'),
            questionContent: document.getElementById('question-content'),
            optionsArea: document.getElementById('options-area'),
            answerGrid: document.getElementById('answer-grid'),
            answeredCount: document.getElementById('answered-count'),
            prevBtn: document.getElementById('prev-btn'),
            nextBtn: document.getElementById('next-btn'),
            timerDisplay: document.getElementById('time-display'),
            timer: document.getElementById('timer'),
            modal: document.getElementById('submit-modal'),
            modalMessage: document.getElementById('modal-message')
        };
    }

    formatExamInfo(exam) {
        // exam: "2024-1" → "(24년 1회)"
        // exam: "2025-3" → "(25년 3회)"
        if (!exam) return '';

        const [year, round] = exam.split('-');
        const shortYear = year.slice(2); // "2024" → "24"

        return `(${shortYear}년 ${round}회)`;
    }

    displayQuestion(question, selectedAnswer) {
        this.elements.questionNumber.textContent = `문제 ${question.examNumber}`;
        this.elements.subjectName.textContent = `${question.subjectId}과목: ${question.subjectName}`;

        // exam 정보 표시 추가
        this.elements.examInfo.textContent = this.formatExamInfo(question.exam);

        if (question.questionHTML) {
            this.elements.questionContent.innerHTML = question.question + question.questionHTML;
        } else {
            this.elements.questionContent.textContent = question.question;
        }

        this.renderOptions(question, selectedAnswer);
    }

    renderOptions(question, selectedAnswer) {
        this.elements.optionsArea.innerHTML = '';

        question.options.forEach((option, idx) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            if (selectedAnswer === idx + 1) {
                optionDiv.classList.add('selected');
            }

            optionDiv.innerHTML = `
                <span class="option-number">${idx + 1}</span>
                <span class="option-text">${option}</span>
            `;

            optionDiv.addEventListener('click', () => {
                if (this.onOptionClick) {
                    this.onOptionClick(question.examNumber, idx + 1);
                }
            });

            this.elements.optionsArea.appendChild(optionDiv);
        });
    }

    updateAnswerGrid(currentIndex, answers) {
        const buttons = this.elements.answerGrid.querySelectorAll('.answer-btn');
        buttons.forEach(btn => {
            const index = parseInt(btn.dataset.index);
            const questionNumber = index + 1;

            btn.classList.remove('current', 'answered');

            if (index === currentIndex) {
                btn.classList.add('current');
            }

            if (answers[questionNumber]) {
                btn.classList.add('answered');
            }
        });
    }

    updateAnsweredCount(count, total) {
        this.elements.answeredCount.textContent = `${count} / ${total}`;
    }

    updateNavigationButtons(isFirst, isLast) {
        this.elements.prevBtn.disabled = isFirst;
        this.elements.nextBtn.disabled = isLast;
    }

    updateTimer(formattedTime, remainingTime) {
        if (this.elements.timerDisplay) {
            this.elements.timerDisplay.textContent = formattedTime;
        }

        // 10분 이하일 때 경고 표시
        if (remainingTime <= 600 && remainingTime > 0 && this.elements.timer) {
            this.elements.timer.style.background = '#c0392b';
            this.elements.timer.style.animation = 'pulse 1s infinite';
        }
    }

    updateTimerButton(isPaused) {
        const btn = document.getElementById('timer-toggle');
        if (btn) {
            if (isPaused) {
                btn.textContent = '▶ 재개';
                btn.classList.add('paused');
            } else {
                btn.textContent = '⏸ 일시정지';
                btn.classList.remove('paused');
            }
        }
    }

    updateSubjectTabs(currentSubjectId, answers) {
        const tabs = document.querySelectorAll('.tab-btn');
        tabs.forEach(tab => {
            const subjectId = parseInt(tab.dataset.subject);
            tab.classList.toggle('active', subjectId === currentSubjectId);

            // 미답변 문제 체크
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

    showModal(message) {
        if (this.elements.modalMessage) {
            this.elements.modalMessage.textContent = message;
        }
        if (this.elements.modal) {
            this.elements.modal.classList.add('show');
        }
    }

    closeModal() {
        if (this.elements.modal) {
            this.elements.modal.classList.remove('show');
        }
    }

    createAnswerGrid(totalQuestions, subjectCount) {
        const grid = this.elements.answerGrid;
        if (!grid) return;

        grid.innerHTML = '';

        const questionsPerSubject = totalQuestions / subjectCount;

        for (let i = 0; i < totalQuestions; i++) {
            const subjectNum = Math.floor(i / questionsPerSubject) + 1;

            if (i % questionsPerSubject === 0) {
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
                if (this.onAnswerBtnClick) {
                    this.onAnswerBtnClick(i);
                }
            });

            grid.appendChild(btn);
        }
    }

    setOptionClickHandler(handler) {
        this.onOptionClick = handler;
    }

    setAnswerBtnClickHandler(handler) {
        this.onAnswerBtnClick = handler;
    }
}

// ============================================
// 6. Open/Closed Principle (OCP)
// 확장에는 열려있고 수정에는 닫혀있음
// ============================================

class IScoringStrategy {
    calculateScore(answers, correctAnswers) {
        throw new Error('calculateScore() must be implemented');
    }
}

class StandardScoringStrategy extends IScoringStrategy {
    calculateScore(answers, correctAnswers) {
        let totalScore = 0;
        const subjectScores = {};

        correctAnswers.forEach(question => {
            const userAnswer = answers[question.examNumber];
            const isCorrect = userAnswer === question.answer;

            if (isCorrect) {
                totalScore += 1;
                if (!subjectScores[question.subjectId]) {
                    subjectScores[question.subjectId] = 0;
                }
                subjectScores[question.subjectId]++;
            }
        });

        return { totalScore, subjectScores };
    }
}

// ============================================
// 7. 전체 조정 - ExamController (Facade Pattern)
// ============================================

class ExamController {
    constructor(storage, scoringStrategy) {
        this.state = new ExamState();
        this.storage = storage;
        this.questionSelector = new QuestionSelector();
        this.uiManager = new UIManager();
        this.timerManager = null;
        this.scoringStrategy = scoringStrategy;

        this.initializeEventHandlers();
    }

    initializeEventHandlers() {
        this.uiManager.setOptionClickHandler((questionNumber, optionNumber) => {
            this.selectOption(questionNumber, optionNumber);
        });

        this.uiManager.setAnswerBtnClickHandler((index) => {
            this.goToQuestion(index);
        });
    }

    loadQuestions(questionData) {
        this.state.setQuestions(questionData.subjects);
    }

    startExam() {
        const examQuestions = this.questionSelector.selectRandomQuestions(
            this.state.questions,
            20
        );
        this.state.setExamQuestions(examQuestions);

        this.storage.save('examQuestions', examQuestions);
        this.storage.save('examStartTime', Date.now());

        const savedAnswers = this.storage.load('examAnswers');
        if (savedAnswers) {
            this.state.loadAnswers(savedAnswers);
        }

        this.uiManager.createAnswerGrid(100, 5);
        this.displayCurrentQuestion();
        this.updateUI();

        this.setupSubjectTabs();
        this.setupKeyboardShortcuts();
        this.startTimer();
    }

    setupSubjectTabs() {
        document.querySelectorAll('.tab-btn').forEach(tab => {
            tab.addEventListener('click', () => {
                const subjectId = parseInt(tab.dataset.subject);
                const firstQuestionIndex = (subjectId - 1) * 20;
                this.goToQuestion(firstQuestionIndex);
            });
        });
    }

    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.previousQuestion();
            } else if (e.key === 'ArrowRight') {
                this.nextQuestion();
            } else if (e.key >= '1' && e.key <= '4') {
                const q = this.state.getCurrentQuestion();
                if (q) {
                    this.selectOption(q.examNumber, parseInt(e.key));
                }
            }
        });
    }

    startTimer() {
        this.timerManager = new TimerManager(
            100 * 60,
            (remainingTime) => {
                this.uiManager.updateTimer(
                    this.timerManager.getFormattedTime(),
                    remainingTime
                );
            },
            () => {
                alert('시험 시간이 종료되었습니다.');
                this.submitExam();
            }
        );
        this.timerManager.start();
    }

    selectOption(questionNumber, optionNumber) {
        this.state.setAnswer(questionNumber, optionNumber);
        this.storage.save('examAnswers', this.state.getAllAnswers());
        this.displayCurrentQuestion();
        this.updateUI();
    }

    goToQuestion(index) {
        this.state.setCurrentQuestion(index);
        this.displayCurrentQuestion();
        this.updateUI();
    }

    nextQuestion() {
        this.goToQuestion(this.state.currentQuestion + 1);
    }

    previousQuestion() {
        this.goToQuestion(this.state.currentQuestion - 1);
    }

    displayCurrentQuestion() {
        const question = this.state.getCurrentQuestion();
        if (!question) return;

        const answer = this.state.getAnswer(question.examNumber);
        this.uiManager.displayQuestion(question, answer);
    }

    updateUI() {
        const isFirst = this.state.currentQuestion === 0;
        const isLast = this.state.currentQuestion === 99;

        this.uiManager.updateNavigationButtons(isFirst, isLast);
        this.uiManager.updateAnswerGrid(
            this.state.currentQuestion,
            this.state.getAllAnswers()
        );
        this.uiManager.updateAnsweredCount(
            this.state.getAnsweredCount(),
            100
        );
        this.uiManager.updateSubjectTabs(
            this.state.currentSubject,
            this.state.getAllAnswers()
        );
    }

    submitExamWithConfirm() {
        const unanswered = 100 - this.state.getAnsweredCount();
        let message = '';

        if (unanswered > 0) {
            message = `풀지 않은 문제가 ${unanswered}개 있습니다.`;
        } else {
            message = '모든 문제를 풀었습니다.';
        }

        this.uiManager.showModal(message);
    }

    submitExam() {
        if (this.timerManager) {
            this.timerManager.stop();
        }

        const score = this.scoringStrategy.calculateScore(
            this.state.getAllAnswers(),
            this.state.examQuestions
        );

        this.storage.save('examResult', {
            score: score,
            answers: this.state.getAllAnswers(),
            questions: this.state.examQuestions,
            submittedAt: Date.now()
        });

        this.storage.save('examAnswers', this.state.getAllAnswers());
        this.storage.save('examQuestions', this.state.examQuestions);
        this.storage.save('examMode', 'full');

        window.location.href = 'result.html';
    }

    closeSubmitModal() {
        this.uiManager.closeModal();
    }

    submitCurrentSubject() {
        const currentSubjectNum = Math.floor(this.state.currentQuestion / 20) + 1;
        const startIdx = (currentSubjectNum - 1) * 20 + 1;
        const endIdx = currentSubjectNum * 20;

        let unanswered = 0;
        for (let i = startIdx; i <= endIdx; i++) {
            if (!this.state.getAnswer(i)) {
                unanswered++;
            }
        }

        let message = `${currentSubjectNum}과목을 제출하시겠습니까?`;
        if (unanswered > 0) {
            message += `\n풀지 않은 문제가 ${unanswered}개 있습니다.`;
        }

        if (confirm(message)) {
            const subjectQuestions = this.state.examQuestions.filter(
                q => q.subjectId === currentSubjectNum
            );
            const subjectAnswers = {};
            for (let i = startIdx; i <= endIdx; i++) {
                const answer = this.state.getAnswer(i);
                if (answer) {
                    subjectAnswers[i] = answer;
                }
            }

            this.storage.save('examAnswers', subjectAnswers);
            this.storage.save('examQuestions', subjectQuestions);
            this.storage.save('examMode', 'subject');
            this.storage.save('examSubject', currentSubjectNum);

            window.location.href = 'result.html';
        }
    }

    toggleTimerAndUpdateUI() {
        if (this.timerManager) {
            this.timerManager.toggle();
            this.uiManager.updateTimerButton(this.timerManager.paused);
        }
    }
}

// ============================================
// 8. 초기화 및 전역 함수 노출
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const storage = new LocalStorageAdapter();
    const scoringStrategy = new StandardScoringStrategy();
    const examController = new ExamController(storage, scoringStrategy);

    examController.loadQuestions(QUESTION_DATA);
    examController.startExam();

    window.examController = examController;
});

// HTML에서 호출하는 전역 함수들
function nextQuestion() {
    window.examController.nextQuestion();
}

function prevQuestion() {
    window.examController.previousQuestion();
}

function submitExam() {
    window.examController.submitExamWithConfirm();
}

function confirmSubmit() {
    window.examController.submitExam();
}

function closeModal() {
    window.examController.closeSubmitModal();
}

function submitCurrentSubject() {
    window.examController.submitCurrentSubject();
}

function toggleTimer() {
    window.examController.toggleTimerAndUpdateUI();
}
