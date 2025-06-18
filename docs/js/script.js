// import { createClient } from '@supabase/supabase-js' // 삭제

// Supabase 초기화
const supabaseUrl = 'https://toxjfcqzdoxjjtiaihml.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRveGpmY3F6ZG94amp0aWFpaG1sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwMjI0NzUsImV4cCI6MjA2NTU5ODQ3NX0.HzcsHR2TRogV8PuIB7b1KDrLJsgn096A9iuxDaPfJFA'
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey)

// 언어별 번역 데이터
const translations = {
  en: {
    title: 'Tell me your Problem',
    subtitle: "I'm an aspiring IT CEO who wants to create innovative apps and websites. <br />From minor inconveniences that no one seems to care about to ideas you think would be nice to have, please feel free to share anything! <br/>👇",
    emailLabel: 'Email (Optional)',
    emailPlaceholder: 'Enter your email address',
    ideaLabel: 'Your Idea',
    ideaPlaceholder: 'Please type your idea or problem here...',
    submit: 'Submit',
    thanksTitle: 'Thank you so much!',
    thanksMsg: 'Your valuable idea has been successfully submitted.<br>We truly appreciate your contribution.',
    backHome: 'Back to Home',
    socialTitle: 'This is my social media!'
  },
  ko: {
    title: '당신의 문제를 알려주세요',
    subtitle: '저는 혁신적인 앱과 웹사이트를 만들고 싶은 예비 IT CEO입니다. <br />누구도 신경 쓰지 않을 것 같은 사소한 불편함부터, 혹시 이런 게 있으면 좋겠다 싶은 아이디어까지, 뭐든 편하게 말씀해주세요! <br/>👇',
    emailLabel: '이메일 (선택)',
    emailPlaceholder: '이메일 주소를 입력하세요',
    ideaLabel: '아이디어',
    ideaPlaceholder: '아이디어나 문제점을 입력해 주세요...',
    submit: '제출하기',
    thanksTitle: '감사합니다!',
    thanksMsg: '소중한 아이디어가 성공적으로 제출되었습니다.<br>진심으로 감사드립니다.',
    backHome: '처음으로',
    socialTitle: '이것이 제 소셜 미디어입니다!'
  },
  ja: {
    title: 'あなたの問題を教えてください',
    subtitle: '私は革新的なアプリとウェブサイトを作りたいIT CEO志望者です。 <br />誰も気にしないような些細な不便さから、こんなのあったらいいなと思うアイデアまで、何でも気軽に教えてください！ <br/>👇',
    emailLabel: 'メール（任意）',
    emailPlaceholder: 'メールアドレスを入力してください',
    ideaLabel: 'アイデア',
    ideaPlaceholder: 'アイデアや問題点を入力してください...',
    submit: '送信',
    thanksTitle: 'ありがとうございます！',
    thanksMsg: 'あなたの貴重なアイデアが正常に送信されました。<br>ご協力に心より感謝いたします。',
    backHome: '最初に戻る',
    socialTitle: '僕のソーシャルメディアです'
  },
  es: {
    title: 'Cuéntame tu Problema',
    subtitle: 'Soy un aspirante a CEO de IT que quiere crear aplicaciones y sitios web innovadores. <br />Desde pequeñas molestias que a nadie le importan hasta ideas que crees que estarían bien tener, ¡por favor comparte lo que quieras! <br/>👇',
    emailLabel: 'Correo electrónico (opcional)',
    emailPlaceholder: 'Introduce tu correo electrónico',
    ideaLabel: 'Tu idea',
    ideaPlaceholder: 'Escribe tu idea o problema aquí...',
    submit: 'Enviar',
    thanksTitle: '¡Muchas gracias!',
    thanksMsg: 'Tu valiosa idea se ha enviado correctamente.<br>Te agradecemos sinceramente tu contribución.',
    backHome: 'Volver al inicio',
    socialTitle: '¡Esta es mi red social!'
  },
  zh: {
    title: '告诉我你的问题',
    subtitle: '我是一位想要创造创新应用和网站的准IT CEO。 <br />从没人会在意的微小不便到你觉得有就好了的想法，请随意分享任何内容！ <br/>👇',
    emailLabel: '邮箱（可选）',
    emailPlaceholder: '请输入你的邮箱地址',
    ideaLabel: '你的想法',
    ideaPlaceholder: '请在这里输入你的想法或问题...',
    submit: '提交',
    thanksTitle: '非常感谢！',
    thanksMsg: '您的宝贵想法已成功提交。<br>我们由衷感谢您的贡献。',
    backHome: '返回首页',
    socialTitle: '这是我的社交媒体'
  }
};

function setLanguage(lang) {
  const t = translations[lang];
  document.getElementById('main-title').innerHTML = t.title;
  document.getElementById('subtitle').innerHTML = t.subtitle;
  document.querySelector('label[for="emailInput"]').innerText = t.emailLabel;
  document.getElementById('emailInput').placeholder = t.emailPlaceholder;
  document.querySelector('label[for="ideaInput"]').innerText = t.ideaLabel;
  document.getElementById('ideaInput').placeholder = t.ideaPlaceholder;
  document.querySelector('.submit-container button').innerText = t.submit;
  document.querySelector('#thanks-container h2').innerText = t.thanksTitle;
  document.querySelector('#thanks-container p').innerHTML = t.thanksMsg;
  document.querySelector('#thanks-container button').innerText = t.backHome;
  
  // 소셜 미디어 문구 번역
  const socialTitle = document.querySelector('.social-title');
  socialTitle.textContent = t.socialTitle;
}

// 언어 선택 UI 이벤트
const langSelect = document.getElementById('lang-select');
langSelect.addEventListener('change', (e) => {
  setLanguage(e.target.value);
});

// DOM이 완전히 로드된 후 초기화
document.addEventListener('DOMContentLoaded', function() {
  // 페이지 최초 로딩 시 영어로 설정
  setLanguage('en');
  
  // 언어 선택 이벤트 리스너 다시 설정
  const langSelect = document.getElementById('lang-select');
  if (langSelect) {
    langSelect.addEventListener('change', (e) => {
      setLanguage(e.target.value);
    });
  }
});

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// 토스트 컨테이너 생성
function createToastContainer() {
  const container = document.createElement('div');
  container.className = 'toast-container';
  document.body.appendChild(container);
  return container;
}

// 페이지 로드 시 토스트 컨테이너 생성
let toastContainer = createToastContainer();

function showMessage(message, isError = false) {
  const messageDiv = document.createElement('div');
  messageDiv.textContent = message;
  messageDiv.className = `message ${isError ? 'error' : 'success'}`;
  
  const existingMessage = toastContainer.querySelector('.message');
  if (existingMessage) {
    existingMessage.classList.add('hide');
    existingMessage.addEventListener('animationend', () => {
      existingMessage.remove();
    }, { once: true });
  }
  
  toastContainer.appendChild(messageDiv);
  
  setTimeout(() => {
    messageDiv.classList.add('hide');
    messageDiv.addEventListener('animationend', () => {
      messageDiv.remove();
    }, { once: true });
  }, 2000);
}

async function submitForm() {
  const email = document.getElementById('emailInput').value.trim();
  const idea = document.getElementById('ideaInput').value.trim();
  
  // 이메일이 입력된 경우에만 유효성 검사
  if (email && !validateEmail(email)) {
    showMessage('Please enter a valid email address.', true);
    return;
  }
  
  if (!idea) {
    showMessage('Please enter your idea.', true);
    return;
  }
  
  if (idea.length < 10) {
    showMessage('Your idea should be at least 10 characters long.', true);
    return;
  }
  
  try {
    // Supabase에 데이터 저장
    const { data, error } = await supabase
      .from('ideas')
      .insert([
        { 
          email: email || null, 
          idea: idea 
        }
      ]);
    
    if (error) {
      console.error('Supabase error:', error);
      showMessage('Something went wrong. Please try again.', true);
      return;
    }
    
    // 성공 메시지 표시
    // showMessage('Form submitted successfully!'); // 기존 메시지 주석 처리

    // 폼 숨기고 감사 메시지 보여주기
    document.getElementById('form-container').style.display = 'none';
    document.getElementById('thanks-container').style.display = 'block';
    document.getElementById('main-title').style.display = 'none';
    document.getElementById('subtitle').style.display = 'none';

    // 콘솔에 데이터 출력
    console.log("👉 Form submitted to Supabase:");
    if (email) console.log("Email:", email);
    console.log("Idea:", idea);
    console.log("Saved data:", data);
    
    // 입력 필드 초기화
    document.getElementById('emailInput').value = '';
    document.getElementById('ideaInput').value = '';
    
  } catch (error) {
    console.error('Network error:', error);
    showMessage('Network error. Please try again.', true);
  }
}

// 보너스: 관리자용 데이터 조회 함수
async function getAllIdeas() {
  try {
    const { data, error } = await supabase
      .from('ideas')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error('Error fetching ideas:', error);
      return;
    }
    
    console.log('All ideas:', data);
    return data;
  } catch (error) {
    console.error('Network error:', error);
  }
}

// goHome 함수 추가
function goHome() {
  document.getElementById('thanks-container').style.display = 'none';
  document.getElementById('form-container').style.display = 'block';
  document.getElementById('main-title').style.display = 'block';
  document.getElementById('subtitle').style.display = 'block';
}

window.submitForm = submitForm;
window.goHome = goHome; 
