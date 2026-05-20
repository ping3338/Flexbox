// ===== 關卡資料 =====
const allLevels = {
  beginner: [
    {
      id: 1, title: "集合太空人", astronautCount: 3, properties: ["justify-content"],
      target: { "justify-content": "center" },
      description: "太空人散落在救援艙中，使用 justify-content 將他們集中到中間！",
      hint: "justify-content 控制項目在「主軸」（水平方向）的位置。想讓項目置中，試試哪個值？",
      tip: "💡 提示：center 代表「中間」的意思",
      values: ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"],
      learnedText: "justify-content: center 讓項目水平置中"
    },
    {
      id: 2, title: "靠左集合", astronautCount: 3, properties: ["justify-content"],
      target: { "justify-content": "flex-start" },
      description: "讓太空人全部靠左邊集合，準備出發！",
      hint: "flex-start 是 flexbox 的「起點」，預設情況下就是左邊。",
      tip: "💡 flex-start = 彈性盒子的起點 = 左邊",
      values: ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"],
      learnedText: "justify-content: flex-start 讓項目靠左對齊"
    },
    {
      id: 3, title: "緊急撤離", astronautCount: 4, properties: ["justify-content"],
      target: { "justify-content": "flex-end" },
      description: "警報響起！快將所有太空人集中到救援艙的右側出口！",
      hint: "與 flex-start 相反，flex-end 代表「終點」，就是右邊。",
      tip: "💡 flex-end = 彈性盒子的終點 = 右邊",
      values: ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"],
      learnedText: "justify-content: flex-end 讓項目靠右對齊"
    },
    {
      id: 4, title: "平均站位", astronautCount: 3, properties: ["justify-content"],
      target: { "justify-content": "space-between" },
      description: "讓太空人平均分散，第一個在最左邊，最後一個在最右邊！",
      hint: "space-between 會把第一個和最後一個項目推到兩端，中間的平均分布。",
      tip: "💡 between = 「之間」，空間分布在項目之間",
      values: ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"],
      learnedText: "justify-content: space-between 兩端對齊，中間平均"
    },
    {
      id: 5, title: "均勻分布", astronautCount: 3, properties: ["justify-content"],
      target: { "justify-content": "space-evenly" },
      description: "讓所有間距完全相等，包含左右兩邊！",
      hint: "space-evenly 讓所有間隙都相等，包含容器邊緣到項目的距離。",
      tip: "💡 evenly = 「均勻地」，所有空間完全相等",
      values: ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"],
      learnedText: "justify-content: space-evenly 所有間距相等"
    },
    {
      id: 6, title: "垂直置中", astronautCount: 3, properties: ["align-items"],
      target: { "align-items": "center" },
      description: "太空人漂浮在不同高度，讓他們在同一水平線上對齊！",
      hint: "align-items 控制「交叉軸」（垂直方向）的對齊。center 會讓它們垂直置中。",
      tip: "💡 align = 對齊，items = 項目們，交叉軸上對齊項目",
      values: ["flex-start", "flex-end", "center", "stretch"],
      learnedText: "align-items: center 讓項目垂直置中"
    },
    {
      id: 7, title: "頂部集合", astronautCount: 4, properties: ["align-items"],
      target: { "align-items": "flex-start" },
      description: "讓太空人全部對齊到頂部！",
      hint: "在交叉軸（垂直方向）上，flex-start 代表頂部。",
      tip: "💡 交叉軸的 flex-start = 頂部",
      values: ["flex-start", "flex-end", "center", "stretch"],
      learnedText: "align-items: flex-start 讓項目靠頂對齊"
    },
    {
      id: 8, title: "降落準備", astronautCount: 4, properties: ["align-items"],
      target: { "align-items": "flex-end" },
      description: "救援艙準備降落，讓太空人對齊到底部站穩！",
      hint: "在交叉軸上，flex-end 代表底部。",
      tip: "💡 交叉軸的 flex-end = 底部",
      values: ["flex-start", "flex-end", "center", "stretch"],
      learnedText: "align-items: flex-end 讓項目靠底對齊"
    },
    {
      id: 9, title: "環繞分布", astronautCount: 4, properties: ["justify-content"],
      target: { "justify-content": "space-around" },
      description: "讓每個太空人左右兩邊都有相等的空間！",
      hint: "space-around 讓每個項目周圍的空間相等，但邊緣空間是中間的一半。",
      tip: "💡 around = 「周圍」，每個項目周圍空間相等",
      values: ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"],
      learnedText: "justify-content: space-around 項目周圍空間相等"
    },
    {
      id: 10, title: "完美置中", astronautCount: 2, properties: ["justify-content", "align-items"],
      target: { "justify-content": "center", "align-items": "center" },
      description: "初級最終關！讓太空人在救援艙正中央！",
      hint: "同時使用 justify-content 和 align-items，兩個都設為 center！",
      tip: "💡 水平置中 + 垂直置中 = 正中央",
      values: { "justify-content": ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"], "align-items": ["flex-start", "flex-end", "center", "stretch"] },
      learnedText: "組合兩個屬性可以實現完美置中！"
    }
  ],
  intermediate: [
    {
      id: 1, title: "垂直編隊", astronautCount: 3, properties: ["flex-direction"],
      target: { "flex-direction": "column" },
      description: "改變救援艙的方向，讓太空人垂直排列！",
      hint: "flex-direction 改變主軸方向。column 表示「列」，就是垂直排列。",
      tip: "💡 column = 列 = 垂直排列（像報紙的欄位）",
      validValues: { "flex-direction": ["row", "row-reverse", "column", "column-reverse"] },
      learnedText: "flex-direction: column 垂直排列項目"
    },
    {
      id: 2, title: "反向撤離", astronautCount: 4, properties: ["flex-direction"],
      target: { "flex-direction": "row-reverse" },
      description: "太空人需要反向排列撤離，1號變到最右邊！",
      hint: "row-reverse 讓項目水平排列但順序相反。",
      tip: "💡 reverse = 反轉，row-reverse = 水平反向",
      validValues: { "flex-direction": ["row", "row-reverse", "column", "column-reverse"] },
      learnedText: "flex-direction: row-reverse 水平反向排列"
    },
    {
      id: 3, title: "倒掛金鉤", astronautCount: 3, properties: ["flex-direction"],
      target: { "flex-direction": "column-reverse" },
      description: "垂直排列但順序反過來，1號在最下面！",
      hint: "column-reverse 讓項目垂直排列但順序從下到上。",
      tip: "💡 column-reverse = 垂直反向（從下往上）",
      validValues: { "flex-direction": ["row", "row-reverse", "column", "column-reverse"] },
      learnedText: "flex-direction: column-reverse 垂直反向排列"
    },
    {
      id: 4, title: "垂直水平置中", astronautCount: 3, properties: ["flex-direction", "align-items"],
      target: { "flex-direction": "column", "align-items": "center" },
      description: "垂直排列，並讓太空人水平置中！",
      hint: "當 flex-direction 是 column 時，align-items 控制的是水平對齊！主軸變垂直，交叉軸就變水平。",
      tip: "💡 方向改變後，主軸和交叉軸會互換！column 時 align-items 控制左右",
      validValues: { "flex-direction": ["row", "row-reverse", "column", "column-reverse"], "align-items": ["flex-start", "flex-end", "center", "stretch"] },
      learnedText: "column 模式下 align-items 控制水平對齊"
    },
    {
      id: 5, title: "底部集結", astronautCount: 3, properties: ["flex-direction", "justify-content"],
      target: { "flex-direction": "column", "justify-content": "flex-end" },
      description: "垂直排列，並讓太空人集中在底部！",
      hint: "垂直排列時，justify-content 控制垂直方向的位置。flex-end 在 column 模式下代表底部。",
      tip: "💡 column 模式下，justify-content 的 flex-end = 底部",
      validValues: { "flex-direction": ["row", "row-reverse", "column", "column-reverse"], "justify-content": ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"] },
      learnedText: "column 模式下 justify-content 控制垂直對齊"
    },
    {
      id: 6, title: "右下角集合", astronautCount: 3, properties: ["justify-content", "align-items"],
      target: { "justify-content": "flex-end", "align-items": "flex-end" },
      description: "讓太空人集中到右下角！",
      hint: "justify-content: flex-end 靠右，align-items: flex-end 靠底。兩個都用 flex-end！",
      tip: "💡 兩個 flex-end = 右下角（終點 + 終點）",
      validValues: { "justify-content": ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"], "align-items": ["flex-start", "flex-end", "center", "stretch"] },
      learnedText: "組合 flex-end 可以定位到角落"
    },
    {
      id: 7, title: "左上角待命", astronautCount: 2, properties: ["justify-content", "align-items"],
      target: { "justify-content": "flex-start", "align-items": "flex-start" },
      description: "讓太空人在左上角待命！",
      hint: "兩個都用 flex-start 就會定位到左上角。",
      tip: "💡 兩個 flex-start = 左上角（起點 + 起點）",
      validValues: { "justify-content": ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"], "align-items": ["flex-start", "flex-end", "center", "stretch"] },
      learnedText: "組合 flex-start 定位到起點角落"
    },
    {
      id: 8, title: "垂直分散對齊", astronautCount: 4, properties: ["flex-direction", "justify-content"],
      target: { "flex-direction": "column", "justify-content": "space-between" },
      description: "垂直排列，且頭尾在容器的上下邊緣！",
      hint: "先用 column 垂直排列，再用 space-between 分散到兩端。",
      tip: "💡 垂直方向的 space-between 會貼上下邊緣",
      validValues: { "flex-direction": ["row", "row-reverse", "column", "column-reverse"], "justify-content": ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"] },
      learnedText: "垂直方向也能使用 space-between"
    },
    {
      id: 9, title: "反向靠底居中", astronautCount: 3, properties: ["flex-direction", "justify-content", "align-items"],
      target: { "flex-direction": "row-reverse", "justify-content": "center", "align-items": "flex-end" },
      description: "水平反向排列、水平置中、且全部靠底部！",
      hint: "row-reverse 反向水平，justify-content: center 水平置中，align-items: flex-end 靠底。",
      tip: "💡 三個屬性可以獨立控制：方向、主軸位置、交叉軸位置",
      validValues: { "flex-direction": ["row", "row-reverse", "column", "column-reverse"], "justify-content": ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"], "align-items": ["flex-start", "flex-end", "center", "stretch"] },
      learnedText: "可以同時控制方向和對齊"
    },
    {
      id: 10, title: "垂直居中分散", astronautCount: 4, properties: ["flex-direction", "justify-content", "align-items"],
      target: { "flex-direction": "column", "justify-content": "space-around", "align-items": "center" },
      description: "中級最終關！垂直排列、水平置中、均勻分散！",
      hint: "三個屬性配合：column 垂直、space-around 分散、center（align-items）水平置中。",
      tip: "💡 三屬性組合：方向決定軸向，justify 控制主軸，align 控制交叉軸",
      validValues: { "flex-direction": ["row", "row-reverse", "column", "column-reverse"], "justify-content": ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"], "align-items": ["flex-start", "flex-end", "center", "stretch"] },
      learnedText: "恭喜完成中級！你已能組合多個屬性"
    }
  ],
  advanced: [
    {
      id: 1, title: "自動換行", astronautCount: 6, properties: ["flex-wrap"],
      target: { "flex-wrap": "wrap" },
      description: "太空人太多了！讓他們自動換到下一行！",
      hint: "flex-wrap: wrap 讓項目在容器寬度不夠時自動換行。",
      tip: "💡 wrap = 包裹、換行，讓內容自動折到下一行",
      validValues: { "flex-wrap": ["nowrap", "wrap", "wrap-reverse"] },
      learnedText: "flex-wrap: wrap 啟用自動換行"
    },
    {
      id: 2, title: "反向換行", astronautCount: 6, properties: ["flex-wrap"],
      target: { "flex-wrap": "wrap-reverse" },
      description: "換行但從下往上排列！新的一行出現在上方！",
      hint: "wrap-reverse 會換行，但新行出現在上方而不是下方。",
      tip: "💡 wrap-reverse = 換行但方向相反（新行在上）",
      validValues: { "flex-wrap": ["nowrap", "wrap", "wrap-reverse"] },
      learnedText: "flex-wrap: wrap-reverse 反向換行"
    },
    {
      id: 3, title: "換行置中", astronautCount: 6, properties: ["flex-wrap", "justify-content"],
      target: { "flex-wrap": "wrap", "justify-content": "center" },
      description: "自動換行，且每行都置中對齊！",
      hint: "wrap 換行，justify-content: center 讓每一行都置中。",
      tip: "💡 換行後每一行都會套用 justify-content 的設定",
      validValues: { "flex-wrap": ["nowrap", "wrap", "wrap-reverse"], "justify-content": ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"] },
      learnedText: "換行後 justify-content 影響每一行"
    },
    {
      id: 4, title: "間距控制", astronautCount: 4, properties: ["gap"],
      target: { "gap": "20px" },
      description: "使用 gap 屬性，讓太空人之間保持 20px 的距離！",
      hint: "gap 是設定 flex 項目之間間距的簡單方法，直接寫數值加單位。",
      tip: "💡 gap: 20px 會在所有項目之間加上 20px 的間距",
      validValues: { "gap": ["10px", "15px", "20px", "25px", "30px"] },
      learnedText: "gap 屬性可以輕鬆設定項目間距"
    },
    {
      id: 5, title: "換行加間距", astronautCount: 8, properties: ["flex-wrap", "gap"],
      target: { "flex-wrap": "wrap", "gap": "15px" },
      description: "自動換行，且項目之間保持 15px 間距！",
      hint: "wrap 讓項目換行，gap 設定項目之間的間距。",
      tip: "💡 gap 在換行時也會作用於行與行之間",
      validValues: { "flex-wrap": ["nowrap", "wrap", "wrap-reverse"], "gap": ["10px", "15px", "20px", "25px", "30px"] },
      learnedText: "gap 配合 wrap 可以創造整齊的網格效果"
    },
    {
      id: 6, title: "垂直換行", astronautCount: 6, properties: ["flex-direction", "flex-wrap"],
      target: { "flex-direction": "column", "flex-wrap": "wrap" },
      description: "垂直排列且高度滿了自動換到右邊新列！",
      hint: "column 垂直排列，wrap 讓滿了之後換到右邊新列。",
      tip: "💡 垂直方向的 wrap 會換到右邊形成新的一列",
      validValues: { "flex-direction": ["row", "row-reverse", "column", "column-reverse"], "flex-wrap": ["nowrap", "wrap", "wrap-reverse"] },
      learnedText: "垂直方向也可以使用 wrap"
    },
    {
      id: 7, title: "右上角換行", astronautCount: 6, properties: ["flex-wrap", "justify-content", "align-items"],
      target: { "flex-wrap": "wrap", "justify-content": "flex-end", "align-items": "flex-start" },
      description: "換行、內容靠右、項目靠頂部！",
      hint: "wrap 換行、justify-content: flex-end 靠右、align-items: flex-start 靠頂。",
      tip: "💡 三屬性組合可以精確控制換行內容在容器中的位置",
      validValues: { "flex-wrap": ["nowrap", "wrap", "wrap-reverse"], "justify-content": ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"], "align-items": ["flex-start", "flex-end", "center", "stretch"] },
      learnedText: "可以精確控制換行內容的位置"
    },
    {
      id: 8, title: "複雜網格佈局", astronautCount: 9, properties: ["flex-wrap", "justify-content", "gap"],
      target: { "flex-wrap": "wrap", "justify-content": "space-between", "gap": "10px" },
      description: "9 位太空人！換行、兩端對齊、10px 間距！",
      hint: "wrap 換行、space-between 兩端對齊、gap 設定間距。",
      tip: "💡 這種組合常用於響應式卡片網格佈局",
      validValues: { "flex-wrap": ["nowrap", "wrap", "wrap-reverse"], "justify-content": ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"], "gap": ["10px", "15px", "20px", "25px", "30px"] },
      learnedText: "這種組合常用於卡片式網格佈局"
    },
    {
      id: 9, title: "垂直反向換行置中", astronautCount: 8, properties: ["flex-direction", "flex-wrap", "justify-content", "align-items"],
      target: { "flex-direction": "column-reverse", "flex-wrap": "wrap", "justify-content": "center", "align-items": "center" },
      description: "垂直反向、自動換行、垂直置中、水平置中！",
      hint: "column-reverse 垂直反向、wrap 換行、兩個 center 讓內容完全置中。",
      tip: "💡 四個屬性組合可以創造非常精確的佈局控制",
      validValues: { "flex-direction": ["row", "row-reverse", "column", "column-reverse"], "flex-wrap": ["nowrap", "wrap", "wrap-reverse"], "justify-content": ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"], "align-items": ["flex-start", "flex-end", "center", "stretch"] },
      learnedText: "多重屬性組合創造複雜佈局效果"
    },
    {
      id: 10, title: "終極救援", astronautCount: 12, properties: ["flex-direction", "flex-wrap", "justify-content", "align-items", "gap"],
      target: { "flex-direction": "row", "flex-wrap": "wrap", "justify-content": "space-evenly", "align-items": "center", "gap": "15px" },
      description: "高級最終關！12 位太空人的終極挑戰！水平排列、自動換行、均勻分散、垂直置中、15px 間距！",
      hint: "row 水平、wrap 換行、space-evenly 均勻、center 垂直置中、gap 間距。這是完整的響應式佈局！",
      tip: "💡 恭喜！你已經掌握了 Flexbox 所有核心概念，這是實際開發中最常用的組合之一",
      validValues: { "flex-direction": ["row", "row-reverse", "column", "column-reverse"], "flex-wrap": ["nowrap", "wrap", "wrap-reverse"], "justify-content": ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"], "align-items": ["flex-start", "flex-end", "center", "stretch"], "gap": ["10px", "15px", "20px", "25px", "30px"] },
      learnedText: "恭喜完成所有關卡！你已精通 Flexbox！"
    }
  ]
};

// 難度名稱對照
const difficultyNames = {
  beginner: "初級",
  intermediate: "中級", 
  advanced: "高級"
};

// ===== 遊戲狀態 =====
let currentDifficulty = "beginner";
let currentLevelIndex = 0;
let userValues = {};
let cheatsheetOpen = false;
let hintClickCount = 0; // 提示點擊計數器

// ===== DOM 元素 =====
const startScreen = document.getElementById('start-screen');
const difficultyScreen = document.getElementById('difficulty-screen');
const gameScreen = document.getElementById('game-screen');

const startBtn = document.getElementById('start-btn');
const backToStartBtn = document.getElementById('back-to-start');
const backToDifficultyBtn = document.getElementById('back-to-difficulty');
const difficultyCards = document.querySelectorAll('.difficulty-card');

const applyBtn = document.getElementById('apply-btn');
const hintBtn = document.getElementById('hint-btn');
const resetBtn = document.getElementById('reset-btn');
const nextLevelBtn = document.getElementById('next-level-btn');
const restartBtn = document.getElementById('restart-btn');
const nextDifficultyBtn = document.getElementById('next-difficulty-btn');
const closeHintBtn = document.getElementById('close-hint-btn');

const difficultyBadge = document.getElementById('difficulty-badge');
const currentLevelEl = document.getElementById('current-level');
const missionTitle = document.getElementById('mission-title');
const progressFill = document.getElementById('progress-fill');
const targetContainer = document.getElementById('target-container');
const rescuePod = document.getElementById('rescue-pod');
const propertyInputs = document.getElementById('property-inputs');
const feedback = document.getElementById('feedback');
const hintText = document.getElementById('hint-text');
const inputModeIndicator = document.getElementById('input-mode-indicator');

const successModal = document.getElementById('success-modal');
const completeModal = document.getElementById('complete-modal');
const hintModal = document.getElementById('hint-modal');
const successMessage = document.getElementById('success-message');
const learnedProperty = document.getElementById('learned-property');
const hintContent = document.getElementById('hint-content');
const hintTip = document.getElementById('hint-tip');
const hintValues = document.getElementById('hint-values');
const skillsList = document.getElementById('skills-list');
const completeTitle = document.getElementById('complete-title');
const completeDesc = document.getElementById('complete-desc');

const cheatsheetToggle = document.getElementById('cheatsheet-toggle');
const cheatsheetContent = document.getElementById('cheatsheet-content');
const toggleIcon = document.getElementById('toggle-icon');
const tabBtns = document.querySelectorAll('.tab-btn');

// ===== 事件監聽 =====
startBtn.addEventListener('click', showDifficultyScreen);
backToStartBtn.addEventListener('click', showStartScreen);
backToDifficultyBtn.addEventListener('click', showDifficultyScreen);

difficultyCards.forEach(card => {
  card.addEventListener('click', () => {
    currentDifficulty = card.dataset.difficulty;
    startGame();
  });
});

applyBtn.addEventListener('click', applyCode);
hintBtn.addEventListener('click', showHint);
resetBtn.addEventListener('click', resetLevel);
nextLevelBtn.addEventListener('click', nextLevel);
restartBtn.addEventListener('click', restartCurrentDifficulty);
nextDifficultyBtn.addEventListener('click', goToNextDifficulty);
closeHintBtn.addEventListener('click', () => hintModal.classList.remove('active'));

cheatsheetToggle.addEventListener('click', toggleCheatsheet);
tabBtns.forEach(btn => {
  btn.addEventListener('click', () => switchTab(btn.dataset.tab));
});

// ===== 畫面切換 =====
function showStartScreen() {
  startScreen.classList.add('active');
  difficultyScreen.classList.remove('active');
  gameScreen.classList.remove('active');
}

function showDifficultyScreen() {
  startScreen.classList.remove('active');
  difficultyScreen.classList.add('active');
  gameScreen.classList.remove('active');
}

function startGame() {
  difficultyScreen.classList.remove('active');
  gameScreen.classList.add('active');
  currentLevelIndex = 0;
  loadLevel();
}

// ===== 遊戲函數 =====
function loadLevel() {
  const levels = allLevels[currentDifficulty];
  const level = levels[currentLevelIndex];
  
  // 更新頂部資訊
  difficultyBadge.textContent = difficultyNames[currentDifficulty];
  difficultyBadge.className = `level-badge ${currentDifficulty}`;
  currentLevelEl.textContent = level.id;
  missionTitle.textContent = level.title;
  progressFill.style.width = `${(currentLevelIndex / levels.length) * 100}%`;
  hintText.textContent = level.description;
  
  // 更新輸入模式指示器
  const isTypingMode = currentDifficulty !== 'beginner';
  inputModeIndicator.style.display = isTypingMode ? 'flex' : 'none';
  
  // 重置用戶輸入值
  userValues = {};
  level.properties.forEach(prop => {
    userValues[prop] = '';
  });
  
  // 生成目標區和玩家區太空人
  renderAstronauts(targetContainer, level.astronautCount, true, level.target);
  renderAstronauts(rescuePod, level.astronautCount, false, {});
  
  // 重置救援艙樣式
  rescuePod.style.flexDirection = '';
  rescuePod.style.justifyContent = '';
  rescuePod.style.alignItems = '';
  rescuePod.style.flexWrap = '';
  rescuePod.style.gap = '';
  
  // 生成屬性輸入
  renderPropertyInputs(level);
  
  // 重置反饋
  feedback.classList.remove('show', 'error', 'success');
  
  // 重置提示計數器
  hintClickCount = 0;
}

function renderAstronauts(container, count, isTarget, styles) {
  container.innerHTML = '';
  
  for (let i = 0; i < count; i++) {
    const astronaut = document.createElement('div');
    astronaut.className = `astronaut${isTarget ? ' target-astronaut' : ''}`;
    astronaut.innerHTML = `<span class="astronaut-emoji">👨‍🚀</span>`;
    container.appendChild(astronaut);
  }
  
  // 應用樣式
  if (isTarget) {
    Object.keys(styles).forEach(prop => {
      container.style[toCamelCase(prop)] = styles[prop];
    });
  }
}

function renderPropertyInputs(level) {
  propertyInputs.innerHTML = '';
  const isTypingMode = currentDifficulty !== 'beginner';
  
  level.properties.forEach(prop => {
    const inputDiv = document.createElement('div');
    inputDiv.className = 'property-input';
    
    const label = document.createElement('label');
    label.textContent = `${prop}:`;
    
    if (isTypingMode) {
      // 中級和高級：打字輸入
      const input = document.createElement('input');
      input.type = 'text';
      input.id = `input-${prop}`;
      input.dataset.property = prop;
      input.placeholder = '輸入屬性值...';
      input.autocomplete = 'off';
      input.spellcheck = false;
      
      input.addEventListener('input', (e) => {
        userValues[prop] = e.target.value.trim().replace(';', '');
        previewCode();
      });
      
      input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          applyCode();
        }
      });
      
      inputDiv.appendChild(label);
      inputDiv.appendChild(input);
      
      // 加上分號顯示
      const semicolon = document.createElement('span');
      semicolon.className = 'semicolon';
      semicolon.textContent = ';';
      inputDiv.appendChild(semicolon);
    } else {
      // 初級：下拉選單
      const select = document.createElement('select');
      select.id = `input-${prop}`;
      select.dataset.property = prop;
      
      // 空白選項
      const emptyOpt = document.createElement('option');
      emptyOpt.value = '';
      emptyOpt.textContent = '-- 選擇 --';
      select.appendChild(emptyOpt);
      
      const options = Array.isArray(level.values) ? level.values : level.values[prop];
      options.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option;
        opt.textContent = option + ';';
        select.appendChild(opt);
      });
      
      select.addEventListener('change', (e) => {
        userValues[prop] = e.target.value;
        previewCode();
      });
      
      inputDiv.appendChild(label);
      inputDiv.appendChild(select);
    }
    
    propertyInputs.appendChild(inputDiv);
  });
}

function previewCode() {
  Object.keys(userValues).forEach(prop => {
    if (userValues[prop]) {
      rescuePod.style[toCamelCase(prop)] = userValues[prop];
    }
  });
}

function applyCode() {
  const levels = allLevels[currentDifficulty];
  const level = levels[currentLevelIndex];
  
  // 應用樣式
  Object.keys(userValues).forEach(prop => {
    if (userValues[prop]) {
      rescuePod.style[toCamelCase(prop)] = userValues[prop];
    }
  });
  
  // 檢查答案
  let isCorrect = true;
  let errorMsg = '';
  
  for (const prop in level.target) {
    const userVal = userValues[prop] ? userValues[prop].toLowerCase().trim() : '';
    const targetVal = level.target[prop].toLowerCase().trim();
    
    if (userVal !== targetVal) {
      isCorrect = false;
      if (!userVal) {
        errorMsg = `請填寫 ${prop} 的值`;
      } else {
        errorMsg = `${prop} 的值不正確，再想想看！`;
      }
      break;
    }
  }
  
  if (isCorrect) {
    showSuccess();
  } else {
    feedback.textContent = errorMsg || '還不太對，再試試看！觀察目標陣型的排列方式。';
    feedback.classList.add('show', 'error');
    feedback.classList.remove('success');
    
    rescuePod.style.animation = 'shake 0.5s ease';
    setTimeout(() => { rescuePod.style.animation = ''; }, 500);
  }
}

function showSuccess() {
  const levels = allLevels[currentDifficulty];
  const level = levels[currentLevelIndex];
  
  feedback.textContent = '太棒了！救援成功！';
  feedback.classList.add('show', 'success');
  feedback.classList.remove('error');
  
  setTimeout(() => {
    successMessage.textContent = `你成功使用 Flexbox 救回了 ${level.astronautCount} 位太空人！`;
    
    let codeText = '<code>.rescue-pod</code> {\n';
    for (const prop in level.target) {
      codeText += `  <code>${prop}: ${level.target[prop]};</code>\n`;
    }
    codeText += '}';
    learnedProperty.innerHTML = `<pre>${codeText}</pre><p class="learned-desc">${level.learnedText}</p>`;
    
    successModal.classList.add('active');
  }, 500);
}

function showHint() {
  const levels = allLevels[currentDifficulty];
  const level = levels[currentLevelIndex];
  
  hintClickCount++;
  
  if (hintClickCount === 1) {
    // 第一次點擊：顯示提示
    hintContent.textContent = level.hint;
    hintTip.textContent = level.tip;
    hintTip.style.display = 'block';
    
    // 顯示可用的值（針對打字模式）
    if (currentDifficulty !== 'beginner' && level.validValues) {
      let valuesHtml = '<div class="hint-valid-values"><strong>可用的值：</strong><br>';
      for (const prop in level.validValues) {
        valuesHtml += `<span class="hint-prop">${prop}:</span> `;
        valuesHtml += level.validValues[prop].map(v => `<code>${v}</code>`).join(', ');
        valuesHtml += '<br>';
      }
      valuesHtml += '</div>';
      hintValues.innerHTML = valuesHtml;
      hintValues.style.display = 'block';
    } else {
      hintValues.style.display = 'none';
    }
    
    // 更新按鈕文字提示再按一次會給答案
    closeHintBtn.textContent = '了解了（再按一次提示會顯示答案）';
  } else {
    // 第二次或之後點擊：直接給答案
    hintContent.textContent = '直接告訴你答案：';
    
    let answerHtml = '<div class="hint-answer"><strong>正確答案：</strong><br>';
    for (const prop in level.target) {
      answerHtml += `<code>${prop}: ${level.target[prop]};</code><br>`;
    }
    answerHtml += '</div>';
    
    hintTip.innerHTML = answerHtml;
    hintTip.style.display = 'block';
    hintValues.style.display = 'none';
    
    // 自動填入答案到輸入框
    for (const prop in level.target) {
      const input = document.getElementById(`input-${prop}`);
      if (input) {
        input.value = level.target[prop];
        userValues[prop] = level.target[prop];
      }
    }
    previewCode();
    
    closeHintBtn.textContent = '了解了';
  }
  
  hintModal.classList.add('active');
}

function resetLevel() {
  loadLevel();
}

function nextLevel() {
  successModal.classList.remove('active');
  const levels = allLevels[currentDifficulty];
  
  if (currentLevelIndex < levels.length - 1) {
    currentLevelIndex++;
    loadLevel();
  } else {
    showComplete();
  }
}

function showComplete() {
  const diffName = difficultyNames[currentDifficulty];
  completeTitle.textContent = `${diffName}任務完成！`;
  
  // 根據難度顯示不同內容
  const skillsMap = {
    beginner: ['justify-content - 主軸對齊', 'align-items - 交叉軸對齊', '雙屬性組合運用'],
    intermediate: ['flex-direction - 排列方向', '方向改變後軸的變化', '三屬性組合運用', '手動輸入 CSS 技能'],
    advanced: ['flex-wrap - 換行控制', 'gap - 間距設定', '四屬性以上綜合應用', '響應式佈局技巧', '完整 Flexbox 掌握']
  };
  
  skillsList.innerHTML = skillsMap[currentDifficulty].map(skill => `<li>${skill}</li>`).join('');
  
  // 判斷是否有下一個難度
  const difficulties = ['beginner', 'intermediate', 'advanced'];
  const currentIndex = difficulties.indexOf(currentDifficulty);
  
  if (currentIndex < difficulties.length - 1) {
    completeDesc.textContent = '準備好挑戰更高難度了嗎？';
    nextDifficultyBtn.style.display = 'inline-flex';
  } else {
    completeDesc.textContent = '🎊 恭喜你完成所有難度！你已經是 Flexbox 大師了！';
    nextDifficultyBtn.style.display = 'none';
  }
  
  completeModal.classList.add('active');
}

function restartCurrentDifficulty() {
  completeModal.classList.remove('active');
  currentLevelIndex = 0;
  loadLevel();
}

function goToNextDifficulty() {
  completeModal.classList.remove('active');
  
  const difficulties = ['beginner', 'intermediate', 'advanced'];
  const currentIndex = difficulties.indexOf(currentDifficulty);
  
  if (currentIndex < difficulties.length - 1) {
    currentDifficulty = difficulties[currentIndex + 1];
    currentLevelIndex = 0;
    loadLevel();
  }
}

// ===== 寶典功能 =====
function toggleCheatsheet() {
  cheatsheetOpen = !cheatsheetOpen;
  cheatsheetContent.classList.toggle('open', cheatsheetOpen);
  toggleIcon.textContent = cheatsheetOpen ? '▲' : '▼';
}

function switchTab(tabName) {
  tabBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabName);
  });
  
  document.querySelectorAll('.tab-content').forEach(content => {
    content.classList.toggle('active', content.id === `tab-${tabName}`);
  });
}

// ===== 工具函數 =====
function toCamelCase(str) {
  return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}
