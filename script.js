const sampleContract = `勞動契約附件：個人資料蒐集、AI 訓練與數位行為監控條款

第一條（數位行為監控與蒐集）
乙方（員工）充分知悉並同意，甲方（公司）基於資安防護、勞動契約履行、人力資源管理及優化內部營運流程之合法目的，得在職務執行期間，透過專用軟硬體設備針對乙方之數位行為進行監控與紀錄。蒐集之項目包含：鍵盤與滑鼠操作紀錄、應用程式執行狀態、螢幕作業畫面（僅限於必要之資安稽核或專案除錯時）、參與會議之元數據（Metadata）及其他與職務執行相關之數位軌跡。

第二條（人工智慧技術與資料利用）
為提升公司自動化協作效能，乙方同意甲方得將去識別化後之職務執行數據，運用於內部人工智慧系統之模型訓練（包含基礎模型微調、RAG 技術優化及工作流程自動化）。甲方保證，相關資料在進入訓練集前，已進行去識別化或匿名化處理，確保無法直接連結至特定個人。但若該 AI 系統產出基於識別化資料，影響乙方重大勞動權益（如績效考核、升遷、職務調整）之決策，甲方應確保該決策過程具備人工介入機制，乙方得針對該自動化決策結果申請人工覆核。

第三條（跨境傳輸與資料存取）
因應甲方全球營運架構，乙方同意甲方得將前述個人資料，傳輸至甲方位於全球之分公司、總部或委任之雲端伺服器進行處理。甲方承諾，跨境傳輸將採取符合 GDPR 標準契約條款（SCCs）之技術與管理措施，確保資料安全性與隱私保障。資料之存取權限僅限於甲方之資安、人事與研發部門之授權人員，並建立完整之存取稽核日誌，嚴禁未經授權之存取與散佈。

第四條（保存期限與權利行使）
甲方對於乙方數位行為資料之保存，以勞動契約存續期間為原則，或依據《勞動基準法》及相關法規規定之年限辦理；蒐集目的消失後，除法規另有規定外，應即停止利用或刪除。乙方依法享有個人資料之查詢、複製、更正、要求停止利用及刪除等權利。乙方行使上述權利，得逕向公司個資保護官（DPO）提出申請。

第五條（拒絕蒐集之處理）
乙方得依據個人隱私權考量，拒絕甲方蒐集與職務執行無直接相關之非必要個人資料。若乙方行使拒絕權，甲方將尊重乙方意願，惟若該拒絕行為致使甲方無法確保企業資安或無法執行特定安全認證程序，甲方得限制乙方使用相關之公司系統權限。甲方保證，乙方因行使上述權利而拒絕提供特定非必要資料，絕不作為公司對乙方進行解僱、減薪、降職或任何其他歧視性處分之依據。`;

const steps = [
  {
    title: "讀取契約條款",
    copy: "正在拆分監控、AI 訓練、跨境傳輸、保存期限與拒絕權段落。",
    log: "已辨識 5 個條款段落與數位監控主題。",
    thoughts: [
      "掃描條款標題與段落順序。",
      "標記監控、AI 訓練、跨境傳輸與拒絕權關鍵詞。",
      "建立初步審查清單。",
    ],
  },
  {
    title: "定位資料取得行為",
    copy: "比對鍵盤、滑鼠、螢幕、應用程式、metadata 與數位軌跡等蒐集項目。",
    log: "偵測到鍵盤、滑鼠、螢幕畫面、應用程式狀態與會議 metadata。",
    thoughts: [
      "比對可識別員工行為的資料項目。",
      "分離工作事項與可能延伸到非工作事項的資料範圍。",
      "檢查是否包含連續監控或高密度行為紀錄。",
      "暫存需要回到比例原則檢查的項目。",
    ],
  },
  {
    title: "檢查 AI 利用目的",
    copy: "檢查資料是否被用於模型訓練、自動化流程、績效或人事決策。",
    log: "AI 訓練目的已揭露，但模型訓練與績效決策的邊界仍需補強。",
    thoughts: [
      "辨識模型訓練、RAG、流程自動化等用途。",
      "檢查 AI 產出是否可能影響績效、升遷或職務調整。",
      "確認是否有人工介入與覆核機制。",
    ],
  },
  {
    title: "評估比例與替代手段",
    copy: "檢查最小化原則、螢幕畫面必要性、識別化資料與替代方案。",
    log: "未看到完整資料最小化說明，也未說明為何需要螢幕畫面而非統計資料。",
    thoughts: [
      "比對蒐集目的與各資料類型的必要性。",
      "檢查是否可用低侵害方式替代螢幕畫面或連續軌跡。",
      "標記資料最小化說明不足的位置。",
      "整理法制漏洞與政策建議類型的輸出。",
    ],
  },
  {
    title: "整理程序保障",
    copy: "檢查拒絕權、DPO、安全隔離、去識別化、人工覆核與磋商流程。",
    log: "拒絕權與人工覆核較完整，但程序磋商與特種資料隔離仍不明確。",
    thoughts: [
      "確認拒絕權與不利益處分禁止是否有被明確寫入。",
      "檢查 DPO、稽核日誌、去識別化與跨境傳輸保障。",
      "評估是否欠缺程序上磋商與特種資料隔離。",
      "準備輸出指標表格。",
    ],
  },
];

const fallbackRows = [
  {
    indicator: "有無取得資料行為",
    rating: "無",
    tone: "clear",
    analysis: "目前輸入文字未明確偵測到監控、蒐集或紀錄行為。",
  },
];

const contractInput = document.querySelector("#contractInput");
const charCount = document.querySelector("#charCount");
const analyzeBtn = document.querySelector("#analyzeBtn");
const resetBtn = document.querySelector("#resetBtn");
const resultBody = document.querySelector("#resultBody");
const thinkingLog = document.querySelector("#thinkingLog");
const thinkingStatus = document.querySelector("#thinkingStatus");
const stageTitle = document.querySelector("#stageTitle");
const stageCopy = document.querySelector("#stageCopy");
const progressBar = document.querySelector("#progressBar");
const overallBadge = document.querySelector("#overallBadge");
const summary = document.querySelector("#summary");
const canvas = document.querySelector("#signalCanvas");
const ctx = canvas.getContext("2d");

let animationTick = 0;
let activeStep = 0;
let isAnalyzing = false;
let currentProgress = 0;

const STEP_DURATION_MIN_MS = 1800;
const STEP_DURATION_MAX_MS = 2600;
const FINAL_DURATION_MIN_MS = 800;
const FINAL_DURATION_MAX_MS = 1100;

function updateCharCount() {
  charCount.textContent = contractInput.value.trim().length.toLocaleString("zh-Hant");
}

function resetDemo() {
  contractInput.value = sampleContract;
  updateCharCount();
  setProgress(0);
  stageTitle.textContent = "等待契約輸入";
  stageCopy.textContent = "按下開始分析後，系統會模擬拆解條款並產生指標表格。";
  overallBadge.textContent = "待分析";
  overallBadge.className = "overall-badge is-idle";
  thinkingStatus.textContent = "等待分析";
  thinkingLog.innerHTML =
    '<div class="chat-message is-muted"><div class="chat-role">AI</div><div class="chat-bubble">尚未開始分析。</div></div>';
  summary.classList.add("is-hidden");
  resultBody.innerHTML = '<tr class="empty-row"><td colspan="3">分析完成後會在這裡顯示結果。</td></tr>';
}

function hasAny(text, terms) {
  return terms.some((term) => text.includes(term));
}

function buildRows(text) {
  const hasCollection = hasAny(text, ["蒐集", "監控", "紀錄", "鍵盤", "滑鼠", "螢幕", "Metadata", "數位軌跡"]);
  const hasAi = hasAny(text, ["AI", "人工智慧", "模型訓練", "RAG", "自動化"]);
  const hasRefusal = hasAny(text, ["拒絕", "拒絕權", "解僱", "減薪", "降職", "歧視性處分"]);
  const hasSecurity = hasAny(text, ["去識別化", "匿名化", "SCCs", "DPO", "稽核日誌", "安全"]);
  const hasScreen = hasAny(text, ["螢幕", "畫面"]);

  if (!hasCollection) {
    return fallbackRows;
  }

  return [
    {
      indicator: "有無取得資料行為",
      rating: "有",
      tone: "present",
      analysis: "明確載明有鍵盤、滑鼠、應用程式、螢幕畫面與會議 metadata 等行為監控。",
    },
    {
      indicator: "勞方資料種類、範圍、時間",
      rating: "不違法但有疑慮",
      tone: "concern",
      analysis: "種類涵蓋廣泛；範圍雖提及職務相關，但「數位軌跡」定義模糊，保存期間也仍需更精確對應各資料類型。",
    },
    {
      indicator: "蒐集處理利用目的與手段",
      rating: hasAi ? "不違法但有疑慮" : "法制漏洞建議",
      tone: hasAi ? "concern" : "gap",
      analysis: hasAi
        ? "已揭露 AI 訓練與營運優化目的，但模型訓練、績效評估與重大人事決策之間的具體流程仍不清楚。"
        : "未清楚揭露 AI 或自動化利用目的，若後續用於模型或決策系統，應補充告知與限制。",
    },
    {
      indicator: "必要性與替代手段",
      rating: "法制漏洞建議",
      tone: "gap",
      analysis: hasScreen
        ? "條款未說明為何必須蒐集螢幕畫面，也未提出以統計數值、事件紀錄或抽樣稽核取代連續監控的方案。"
        : "條款缺少資料最小化與替代手段說明，難以判斷蒐集範圍是否符合比例原則。",
    },
    {
      indicator: "已識別化資料的蒐集行為",
      rating: "法制漏洞建議",
      tone: "gap",
      analysis: "若資料在蒐集當下仍可連結至特定員工，連續監控可能超出單純個資告知可處理的範圍，適合進一步討論政策與修法。",
    },
    {
      indicator: "利益權衡",
      rating: "不違法但有疑慮",
      tone: "concern",
      analysis: "條款主要陳述資安、管理與研發利益，較少呈現對員工隱私、人格權與勞資權力不對等的具體權衡。",
    },
    {
      indicator: "勞方拒絕權",
      rating: hasRefusal ? "無疑慮" : "不違法但有疑慮",
      tone: hasRefusal ? "clear" : "concern",
      analysis: hasRefusal
        ? "條款明確賦予拒絕與非必要資料相關之權利，並聲明不得作為解僱、減薪、降職或歧視性處分依據。"
        : "未看到完整拒絕權與不利益處分禁止，建議補充拒絕後的處理程序。",
    },
    {
      indicator: "磋商、去識別化、安全措施",
      rating: hasSecurity ? "不違法但有疑慮" : "法制漏洞建議",
      tone: hasSecurity ? "concern" : "gap",
      analysis: hasSecurity
        ? "雖提及去識別化、SCCs、DPO 或稽核日誌，但未強制程序磋商，也未具體說明特種資料的安全隔離措施。"
        : "未看到足夠的去識別化、安全隔離、存取稽核或程序磋商設計，需優先補強。",
    },
  ];
}

function ratingClass(tone) {
  const map = {
    present: "is-present",
    concern: "is-concern",
    gap: "is-gap",
    clear: "is-clear",
    illegal: "is-illegal",
  };

  return map[tone] || "is-present";
}

function renderRows(rows) {
  resultBody.innerHTML = rows
    .map(
      (row) => `
      <tr>
        <td>${row.indicator}</td>
        <td><span class="rating-badge ${ratingClass(row.tone)}">${row.rating}</span></td>
        <td>${row.analysis}</td>
      </tr>
    `,
    )
    .join("");
}

function createChatMessage(text, active = false, muted = false) {
  const message = document.createElement("div");
  message.className = `chat-message${active ? " is-active" : ""}${muted ? " is-muted" : ""}`;

  const role = document.createElement("div");
  role.className = "chat-role";
  role.textContent = "AI";

  const bubble = document.createElement("div");
  bubble.className = "chat-bubble";
  bubble.textContent = text;

  message.append(role, bubble);
  return { message, bubble };
}

function addLog(text, active = false, muted = false) {
  const { message } = createChatMessage(text, active, muted);
  thinkingLog.appendChild(message);
  thinkingLog.scrollTop = thinkingLog.scrollHeight;
  return message;
}

async function addTypedLog(text, active = true) {
  const { message, bubble } = createChatMessage("", active);
  const caret = document.createElement("span");
  caret.className = "typing-caret";
  const dots = document.createElement("span");
  dots.className = "typing-dots";
  dots.innerHTML = "<span></span><span></span><span></span>";

  bubble.append(dots);
  thinkingLog.appendChild(message);
  thinkingLog.scrollTop = thinkingLog.scrollHeight;

  await wait(randomBetween(100, 220));
  dots.remove();
  bubble.textContent = "";
  bubble.append(caret);

  for (const char of text) {
    caret.before(char);
    thinkingLog.scrollTop = thinkingLog.scrollHeight;
    await wait(randomBetween(6, 16));
  }

  caret.remove();
  return message;
}

function settleLogs() {
  thinkingLog.querySelectorAll(".is-active").forEach((message) => {
    message.classList.remove("is-active");
  });
}

function setProgress(value) {
  currentProgress = Math.max(0, Math.min(100, value));
  progressBar.style.width = `${currentProgress}%`;
}

function randomBetween(min, max) {
  return Math.round(min + Math.random() * (max - min));
}

function animateProgress(from, to, duration) {
  const startProgress = Math.max(0, Math.min(100, from));
  const endProgress = Math.max(0, Math.min(100, to));

  return new Promise((resolve) => {
    const startTime = performance.now();

    function tick(now) {
      const elapsed = now - startTime;
      const rawProgress = Math.min(elapsed / duration, 1);
      const easedProgress =
        rawProgress < 0.5
          ? 2 * rawProgress * rawProgress
          : 1 - Math.pow(-2 * rawProgress + 2, 2) / 2;

      setProgress(startProgress + (endProgress - startProgress) * easedProgress);

      if (rawProgress < 1) {
        requestAnimationFrame(tick);
        return;
      }

      resolve();
    }

    requestAnimationFrame(tick);
  });
}

async function playThinkingMessages(messages, duration) {
  let elapsed = 0;

  for (let index = 0; index < messages.length; index += 1) {
    const remainingMessages = messages.length - index;
    const remainingTime = Math.max(duration - elapsed, 500);
    const slot = remainingTime / (remainingMessages + 1);
    const delay = randomBetween(slot * 0.65, slot * 1.2);

    await wait(delay);
    elapsed += delay;

    if (elapsed < duration - 180) {
      settleLogs();
      await addTypedLog(messages[index], true);
    }
  }
}

function wait(ms) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

async function analyze() {
  if (isAnalyzing) return;

  isAnalyzing = true;
  analyzeBtn.disabled = true;
  summary.classList.add("is-hidden");
  resultBody.innerHTML = '<tr class="empty-row"><td colspan="3">分析中...</td></tr>';
  thinkingLog.innerHTML = "";
  overallBadge.textContent = "分析中";
  overallBadge.className = "overall-badge is-running";
  thinkingStatus.textContent = "啟動中";
  setProgress(3);

  await addTypedLog("Thinking 已啟動，正在建立條款審查脈絡。", true);
  await wait(randomBetween(260, 480));

  for (let index = 0; index < steps.length; index += 1) {
    activeStep = index;
    const step = steps[index];
    const duration = randomBetween(STEP_DURATION_MIN_MS, STEP_DURATION_MAX_MS);
    const progress = Math.round(((index + 1) / steps.length) * 90);
    stageTitle.textContent = step.title;
    stageCopy.textContent = `第 ${index + 1} / ${steps.length} 步：${step.copy}`;
    thinkingStatus.textContent = `步驟 ${index + 1} / ${steps.length}`;
    settleLogs();
    await addTypedLog(step.log, true);
    await Promise.all([
      animateProgress(currentProgress, progress, duration),
      playThinkingMessages(step.thoughts, duration),
    ]);
  }

  settleLogs();
  stageTitle.textContent = "整合評級結果";
  stageCopy.textContent = "正在整理表格欄位、風險摘要與偵測說明。";
  thinkingStatus.textContent = "生成輸出";
  await addTypedLog("正在產生指標表格與整體風險摘要。", true);
  await animateProgress(currentProgress, 100, randomBetween(FINAL_DURATION_MIN_MS, FINAL_DURATION_MAX_MS));

  const rows = buildRows(contractInput.value);
  settleLogs();
  setProgress(100);
  stageTitle.textContent = "審查結果已產生";
  stageCopy.textContent = "系統已將契約條款轉換為指標式評級與偵測說明。";
  overallBadge.textContent = rows.length > 1 ? "中度風險" : "低風險";
  overallBadge.className = "overall-badge is-done";
  thinkingStatus.textContent = "完成";
  addLog("完成。表格已依指標、評級與偵測結果輸出。");
  renderRows(rows);
  summary.classList.toggle("is-hidden", rows.length <= 1);

  isAnalyzing = false;
  analyzeBtn.disabled = false;
}

function drawCanvas() {
  const width = canvas.width;
  const height = canvas.height;
  animationTick += 0.006;

  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(0, 0, width, height);

  const nodes = [
    { x: 95, y: 112, label: "條款" },
    { x: 270, y: 74, label: "隱私" },
    { x: 440, y: 132, label: "模型" },
    { x: 615, y: 82, label: "權利" },
    { x: 785, y: 112, label: "輸出" },
  ];

  ctx.lineWidth = 1.5;
  for (let index = 0; index < nodes.length - 1; index += 1) {
    const current = nodes[index];
    const next = nodes[index + 1];
    ctx.strokeStyle = "#233D4D";
    ctx.globalAlpha = 0.25;
    ctx.beginPath();
    ctx.moveTo(current.x, current.y);
    ctx.bezierCurveTo(current.x + 80, current.y - 34, next.x - 80, next.y + 34, next.x, next.y);
    ctx.stroke();
    ctx.globalAlpha = 1;
  }

  const signalIndex = isAnalyzing ? activeStep : 0;
  const signal = nodes[Math.min(signalIndex, nodes.length - 1)];
  const boxSize = 44 + Math.sin(animationTick * 5) * 4;
  ctx.strokeStyle = "#FE7F2D";
  ctx.lineWidth = 2;
  ctx.strokeRect(signal.x - boxSize / 2, signal.y - boxSize / 2, boxSize, boxSize);

  nodes.forEach((node, index) => {
    const isActive = isAnalyzing ? index <= activeStep : index === 0;
    ctx.fillStyle = isActive ? "#FE7F2D" : "#EAECF0";
    ctx.fillRect(node.x - 11, node.y - 11, 22, 22);

    ctx.fillStyle = isActive ? "#000000" : "#233D4D";
    ctx.font = "700 18px Inter, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(node.label, node.x, node.y + 42);
  });

  requestAnimationFrame(drawCanvas);
}

contractInput.addEventListener("input", updateCharCount);
analyzeBtn.addEventListener("click", analyze);
resetBtn.addEventListener("click", resetDemo);

resetDemo();
drawCanvas();
