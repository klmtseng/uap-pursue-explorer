/* PURSUE UAP Archive Explorer — zero-dependency, bilingual */
"use strict";

/* ================= i18n ================= */
const I18N = {
  zh: {
    stamp: "已解密 DECLASSIFIED",
    subtitle: "美國戰爭部 PURSUE 計畫三批解密 UAP 檔案(2026)——294 筆記錄的完整下載、逐筆閱讀與獨立分析。非官方網站。",
    nav_overview: "總覽", nav_browse: "檔案瀏覽", nav_analysis: "深度分析", nav_games: "互動遊戲", nav_refs: "參考連結",
    st_records: "筆記錄", st_docs: "份文件", st_media: "部影音", st_span: "年時間跨度", st_hi: "筆高價值(≥4分)", st_size: "GB 原始檔",
    ch_agency: "機關分布", ch_type: "類型分布", ch_decade: "事件年代分布", ch_score: "價值評分(1-5)", ch_theme: "主題分布", ch_red: "塗黑程度",
    ov_note: "評分與主題為本專案的獨立判讀,非官方立場。原始檔 9.3GB 已全數留存本地(sha256 對帳),本站顯示逐筆摘要並附原始檔連結。",
    search_ph: "搜尋標題 / ID / 摘要…", all: "全部", release: "批次", agency: "機關", type: "類型", score: "評分",
    load_more: "載入更多", results: "筆結果",
    f_summary: "摘要", f_conclusion: "官方結論 / 裁定", f_highlight: "亮點", f_links: "原始檔連結",
    lk_wb: "📄 開啟檔案(存檔·全球可讀)", lk_orig: "war.gov 官方源(美國境外常被封鎖)", lk_dvids: "DVIDS 影音頁", lk_none: "(影音記錄——見 DVIDS 連結;無單獨文件檔)",
    date: "事件日期", loc: "地點", red: "塗黑",
    g1_title: "🎖️ 分析官考核:已解釋還是未解決?",
    g1_desc: "以下都是真實檔案。讀完摘要,判斷官方最終裁定是「已解釋/騙局」還是「至今未解決」。",
    g1_explained: "已解釋 / 騙局", g1_unresolved: "至今未解決", g1_next: "下一題", g1_restart: "再玩一次",
    g1_right: "✓ 答對了。", g1_wrong: "✗ 答錯了。", g1_verdict: "官方裁定:", g1_score: "得分",
    g1_done: "考核結束!你的成績:", g1_rank5: "AARO 主任級", g1_rank4: "資深分析官", g1_rank3: "合格分析官", g1_rank2: "實習生", g1_rank1: "建議重修",
    g2_title: "🕐 時間線挑戰:把事件按年代排序",
    g2_desc: "點擊卡片,按「最早 → 最晚」的順序排列這些真實檔案事件。",
    g2_check: "你的排序:", g2_perfect: "全對!你對 UAP 檔案史瞭若指掌。", g2_close: "對了 {n} 個位置。", g2_retry: "重排",
    footer: "資料來源:war.gov/ufo(PURSUE Releases 01-03)。本站為獨立研究專案,摘要由 AI 輔助逐筆閱讀產生,可能含 OCR/轉錄誤差;以原始檔為準。",
    quiz_src: "檔案", timeline_ans: "正確順序",
    disc_title: "非官方研究專案。",
    disc_body: "本站與美國政府無關。每筆摘要由 AI 輔助逐筆閱讀原始檔(OCR/語音轉錄)產生,可能含誤差——請勿當成官方定論引用;一切以 war.gov 原始檔為準。",
    disc_ok: "我了解,進入",
  },
  en: {
    stamp: "DECLASSIFIED",
    subtitle: "All three PURSUE releases of declassified UAP files from the U.S. Department of War (2026) — 294 records fully downloaded, read, and independently analyzed. Unofficial site.",
    nav_overview: "Overview", nav_browse: "Browse Files", nav_analysis: "Analysis", nav_games: "Games", nav_refs: "References",
    st_records: "records", st_docs: "documents", st_media: "videos & audio", st_span: "years spanned", st_hi: "high-value (≥4)", st_size: "GB raw files",
    ch_agency: "By Agency", ch_type: "By Type", ch_decade: "Incidents by Decade", ch_score: "Value Score (1-5)", ch_theme: "By Theme", ch_red: "Redaction Level",
    ov_note: "Scores and themes are this project's independent assessment, not official designations. All 9.3 GB of raw files are preserved locally (sha256-verified); this site shows per-record summaries with links to originals.",
    search_ph: "Search title / ID / summary…", all: "All", release: "Release", agency: "Agency", type: "Type", score: "Score",
    load_more: "Load more", results: "results",
    f_summary: "Summary", f_conclusion: "Official conclusion / verdict", f_highlight: "Why it matters", f_links: "Source links",
    lk_wb: "📄 Open file (archived · works worldwide)", lk_orig: "war.gov official (often geo-blocked outside US)", lk_dvids: "DVIDS video page", lk_none: "(AV record — see DVIDS link; no standalone document)",
    date: "Incident date", loc: "Location", red: "Redaction",
    g1_title: "🎖️ Analyst Exam: Explained or Unresolved?",
    g1_desc: "All cases below are real files. Read the summary and judge whether the official verdict was \"explained / hoax\" or \"still unresolved\".",
    g1_explained: "Explained / Hoax", g1_unresolved: "Still Unresolved", g1_next: "Next", g1_restart: "Play again",
    g1_right: "✓ Correct.", g1_wrong: "✗ Wrong.", g1_verdict: "Official verdict:", g1_score: "Score",
    g1_done: "Exam complete! Your score:", g1_rank5: "AARO Director level", g1_rank4: "Senior Analyst", g1_rank3: "Qualified Analyst", g1_rank2: "Intern", g1_rank1: "Needs retraining",
    g2_title: "🕐 Timeline Challenge: sort the events",
    g2_desc: "Click the cards in order from earliest to latest. All events come from real files.",
    g2_check: "Your order:", g2_perfect: "Perfect! You know your UAP history.", g2_close: "{n} positions correct.", g2_retry: "Retry",
    footer: "Source: war.gov/ufo (PURSUE Releases 01-03). Independent research project; summaries were produced by AI-assisted close reading and may contain OCR/transcription errors — the original files are authoritative.",
    quiz_src: "File", timeline_ans: "Correct order",
    disc_title: "Unofficial research project.",
    disc_body: "This site is not affiliated with the U.S. government. Each summary was produced by AI-assisted close reading of the source files (OCR / speech-to-text) and may contain errors — do not cite it as an official finding; the original files at war.gov are authoritative.",
    disc_ok: "I understand — enter",
  }
};
const AGENCY_EN2ZH = {
  "Department of War": "戰爭部", "FBI": "FBI", "NASA": "NASA", "CIA": "CIA",
  "Department of State": "國務院", "Department of Energy": "能源部",
  "Office of the Director of National Intelligence": "ODNI",
  "Intelligence Community Agency": "情報體系", "U.S. Government": "美國政府"
};
const THEME_LB = {
  "sensor-footage": ["感測器影像", "Sensor footage"], "military-encounter": ["軍事遭遇", "Military encounter"],
  "investigation-procedure": ["調查程序", "Investigation"], "civilian-report": ["民間報告", "Civilian report"],
  "internal-assessment": ["內部評估", "Internal assessment"], "astronaut-space": ["太空任務", "Astronaut/space"],
  "foreign-tech-suspicion": ["外國技術懷疑", "Foreign-tech suspicion"], "cold-war-sighting": ["冷戰目擊", "Cold-War sighting"],
  "ww2-foo-fighters": ["二戰 foo fighters", "WWII foo fighters"], "public-correspondence": ["公眾通信", "Public correspondence"],
  "other": ["其他", "Other"]
};
const REL_LB = { release_01: "R01 (2026-05-08)", release_02: "R02 (2026-05-22)", release_03: "R03 (2026-06-12)" };
const RED_LB = { none: ["無", "None"], light: ["輕度", "Light"], heavy: ["重度", "Heavy"], unknown: ["不明", "Unknown"] };

let lang = "zh";
const t = k => I18N[lang][k] || k;
const agencyLb = a => lang === "zh" ? (AGENCY_EN2ZH[a] || a) : (a === "Department of War" ? "Dept. of War" : a);

/* ================= boot ================= */
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("langBtn").addEventListener("click", () => {
    lang = lang === "zh" ? "en" : "zh";
    document.getElementById("langBtn").textContent = lang === "zh" ? "EN" : "中";
    document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";
    renderAll();
  });
  document.querySelectorAll("nav button").forEach(b => b.addEventListener("click", () => {
    document.querySelectorAll("nav button").forEach(x => x.classList.remove("active"));
    document.querySelectorAll(".tab").forEach(x => x.classList.remove("active"));
    b.classList.add("active");
    document.getElementById("tab-" + b.dataset.tab).classList.add("active");
  }));
  // 免責提示條:每個 session 顯示一次,關閉後不再擾人
  const ss = { get(k){try{return sessionStorage.getItem(k)}catch(e){return null}}, set(k,v){try{sessionStorage.setItem(k,v)}catch(e){}} };
  const disc = document.getElementById("disclaimer");
  if (!ss.get("uap_disc_ok")) disc.style.display = "block";
  document.getElementById("discOk").addEventListener("click", () => {
    ss.set("uap_disc_ok", "1");
    disc.style.display = "none";
  });
  renderAll();
});

function renderAll() {
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-ph]").forEach(el => { el.placeholder = t(el.dataset.i18nPh); });
  renderStats(); renderCharts(); initBrowse(); renderAnalysis(); initQuiz(); initTimeline(); renderRefs();
}

/* ================= overview ================= */
function count(arr, fn) { const m = {}; arr.forEach(r => { const k = fn(r); if (k) m[k] = (m[k] || 0) + 1; }); return m; }

function renderStats() {
  const docs = DATA.filter(r => r.type === "PDF").length;
  const av = DATA.filter(r => r.type === "VID" || r.type === "AUD").length;
  const hi = DATA.filter(r => r.score >= 4).length;
  const cards = [
    [DATA.length, t("st_records")], [docs, t("st_docs")], [av, t("st_media")],
    [82, t("st_span")], [hi, t("st_hi")], [9.3, t("st_size")]
  ];
  document.getElementById("statCards").innerHTML = cards.map(c =>
    `<div class="card"><div class="num">${c[0]}</div><div class="lbl">${c[1]}</div></div>`).join("");
}

function barChart(el, entries, color) {
  const max = Math.max(...entries.map(e => e[1]));
  el.innerHTML = entries.map(([k, v]) =>
    `<div class="bar-row"><div class="lb" title="${k}">${k}</div>
     <div class="tr"><div class="fl" style="width:${(v / max * 100).toFixed(1)}%;${color ? `background:${color}` : ""}"></div></div>
     <div class="vl">${v}</div></div>`).join("");
}

function donutChart(el, entries) {
  const total = entries.reduce((s, e) => s + e[1], 0);
  const colors = ["#4fc3f7", "#ffb74d", "#66bb6a", "#ef5350", "#ba68c8", "#4db6ac", "#f06292", "#a1887f"];
  let acc = 0, segs = "";
  entries.forEach(([k, v], i) => {
    const a0 = acc / total * 2 * Math.PI - Math.PI / 2; acc += v;
    const a1 = acc / total * 2 * Math.PI - Math.PI / 2;
    const large = (a1 - a0) > Math.PI ? 1 : 0;
    const p = (a, r) => `${(60 + r * Math.cos(a)).toFixed(2)},${(60 + r * Math.sin(a)).toFixed(2)}`;
    segs += `<path d="M ${p(a0, 52)} A 52 52 0 ${large} 1 ${p(a1, 52)} L ${p(a1, 28)} A 28 28 0 ${large} 0 ${p(a0, 28)} Z" fill="${colors[i % colors.length]}" opacity=".9"/>`;
  });
  el.innerHTML = `<div class="donut-wrap"><svg width="120" height="120" viewBox="0 0 120 120">${segs}</svg>
    <div class="legend">${entries.map(([k, v], i) =>
      `<div><span class="sw" style="background:${colors[i % colors.length]}"></span>${k} — ${v} (${(v / total * 100).toFixed(0)}%)</div>`).join("")}</div></div>`;
}

function decadeOf(r) {
  const s = (r.date || "") + " " + (r.id || "") + " " + r.title;
  const m = s.match(/(19[4-9]\d|20[0-2]\d)/);
  if (!m) return null;
  const y = +m[1];
  return y < 1950 ? "1940s" : y < 1960 ? "1950s" : y < 1970 ? "1960s" : y < 1980 ? "1970s" :
         y < 2000 ? "1980-90s" : y < 2020 ? "2000-10s" : "2020s";
}

function renderCharts() {
  const byA = Object.entries(count(DATA, r => agencyLb(r.agency))).sort((a, b) => b[1] - a[1]);
  barChart(document.getElementById("chAgency"), byA);
  donutChart(document.getElementById("chType"), Object.entries(count(DATA, r => r.type)).sort((a, b) => b[1] - a[1]));
  const order = ["1940s", "1950s", "1960s", "1970s", "1980-90s", "2000-10s", "2020s"];
  const byD = count(DATA, decadeOf);
  barChart(document.getElementById("chDecade"), order.filter(d => byD[d]).map(d => [d, byD[d]]), "linear-gradient(90deg,#ff7043,#ffb74d)");
  barChart(document.getElementById("chScore"), [5, 4, 3, 2, 1].map(s => ["★" + s, DATA.filter(r => r.score === s).length]), "linear-gradient(90deg,#8e24aa,#ba68c8)");
  const byT = {}; DATA.forEach(r => r.themes.forEach(th => { byT[th] = (byT[th] || 0) + 1; }));
  barChart(document.getElementById("chTheme"), Object.entries(byT).sort((a, b) => b[1] - a[1]).map(([k, v]) => [THEME_LB[k] ? THEME_LB[k][lang === "zh" ? 0 : 1] : k, v]), "linear-gradient(90deg,#00897b,#4db6ac)");
  donutChart(document.getElementById("chRed"), ["heavy", "light", "none", "unknown"].map(k => [RED_LB[k][lang === "zh" ? 0 : 1], DATA.filter(r => r.red === k).length]).filter(e => e[1]));
}

/* ================= browse ================= */
let shown = 30, filtered = DATA;
function initBrowse() {
  const sel = (id, label, opts) => {
    const el = document.getElementById(id);
    el.innerHTML = `<option value="">${label}: ${t("all")}</option>` + opts.map(o => `<option value="${o[0]}">${o[1]}</option>`).join("");
  };
  sel("fRelease", t("release"), Object.entries(REL_LB));
  sel("fAgency", t("agency"), [...new Set(DATA.map(r => r.agency))].sort().map(a => [a, agencyLb(a)]));
  sel("fType", t("type"), ["PDF", "VID", "IMG", "AUD"].map(x => [x, x]));
  sel("fScore", t("score"), [5, 4, 3].map(s => [s, "★" + s + "+"]));
  ["q", "fRelease", "fAgency", "fType", "fScore"].forEach(id =>
    document.getElementById(id).oninput = () => { shown = 30; applyFilter(); });
  document.getElementById("more").onclick = () => { shown += 30; renderList(); };
  applyFilter();
}
function applyFilter() {
  const q = document.getElementById("q").value.toLowerCase();
  const fr = document.getElementById("fRelease").value, fa = document.getElementById("fAgency").value;
  const ft = document.getElementById("fType").value, fs = +document.getElementById("fScore").value || 0;
  filtered = DATA.filter(r =>
    (!fr || r.release === fr) && (!fa || r.agency === fa) && (!ft || r.type === ft) && r.score >= fs &&
    (!q || (r.id + " " + r.title + " " + r.zh.s + " " + r.en.s).toLowerCase().includes(q)));
  renderList();
}
function esc(s) { return (s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;"); }
function renderList() {
  const L = lang;
  document.getElementById("count").textContent = filtered.length + " " + t("results");
  document.getElementById("list").innerHTML = filtered.slice(0, shown).map((r, i) => {
    const tx = r[L].s ? r[L] : r.zh;
    const links = [];
    if (r.links.wayback) links.push(`<a href="${r.links.wayback}" target="_blank" rel="noopener">${t("lk_wb")} ↗</a>`);
    if (r.links.dvids) links.push(`<a href="${r.links.dvids}" target="_blank" rel="noopener">${t("lk_dvids")} ↗</a>`);
    if (r.links.orig) links.push(`<a href="${r.links.orig}" target="_blank" rel="noopener" class="muted-link">${t("lk_orig")} ↗</a>`);
    return `<div class="rec" data-i="${i}">
      <div class="top"><span class="rid">${esc(r.id)}</span><span class="rtitle">${esc(r.title)}</span>
        <span class="badge s${r.score}">★${r.score}</span><span class="badge">${r.type}</span>
        <span class="badge">${agencyLb(r.agency)}</span></div>
      <div class="meta">${REL_LB[r.release]}${r.date ? " · " + t("date") + ": " + esc(r.date) : ""}${r.loc ? " · " + esc(r.loc) : ""} · ${t("red")}: ${RED_LB[r.red][L === "zh" ? 0 : 1]}</div>
      <div class="body">
        <h4>${t("f_summary")}</h4><p>${esc(tx.s)}</p>
        <h4>${t("f_conclusion")}</h4><p>${esc(tx.c)}</p>
        ${r.score >= 4 ? `<h4>${t("f_highlight")}</h4><p>${esc(tx.h)}</p>` : ""}
        <h4>${t("f_links")}</h4><p class="links">${links.length ? links.join("") : t("lk_none")}</p>
      </div></div>`;
  }).join("");
  document.getElementById("more").style.display = shown < filtered.length ? "" : "none";
  document.querySelectorAll(".rec").forEach(el => el.addEventListener("click", e => {
    if (e.target.tagName !== "A") el.classList.toggle("open");
  }));
}

/* ================= analysis ================= */
const STORIES = [
  {
    zh: ["主線 1|二戰「foo fighters」(1944-45)",
      "SHAEF 盟軍最高統帥部電文集收錄 415 夜戰中隊逐夜目擊:紅綠閃光、橙色光球成組跟隨戰機、轉向時同步調整、「受到完美控制」。英國空軍部承認:「整件事仍是個謎。」這是二戰 UAP 現象最完整的一手軍事史料。"],
    en: ["Storyline 1 | WWII \"foo fighters\" (1944-45)",
      "SHAEF cables log the 415th Night Fighter Squadron's night-by-night sightings: red-green flashes, orange fireballs pacing aircraft in formation and matching their turns — \"under perfect control\". The British Air Ministry admitted: \"the whole thing remains a mystery.\" The most complete first-hand military record of WWII UAP."],
    ids: "331_120752"
  },
  {
    zh: ["主線 2|1947-1955 冷戰第一波與官方態度擺盪",
      "特懷寧中將 1947 年意見書是美軍首份正式裁定 UFO「真實且非幻想」的最高層評估;1948 年 USAFE 頂密電文記錄瑞典技術情報官員結論「可能在地球之外」;參議員 Russell 1955 年在蘇聯境內親眼目擊兩架圓盤起飛;Hoover 親簽「一律斷然否認」備忘錄。同時,騙局也全部攤開——Maury Island 案 FBI 認定是為賣故事捏造;而 1964 年索科羅 Zamora 案,FBI 特工親臨現場確認了物理痕跡。"],
    en: ["Storyline 2 | The 1947-1955 Cold-War wave",
      "Gen. Twining's 1947 memo was the first top-level U.S. military assessment ruling the phenomenon \"real and not visionary\"; a 1948 TOP SECRET USAFE cable records Swedish intelligence concluding the objects \"may be of an earlier, unknown or extraterrestrial origin\"; Senator Russell personally watched two discs take off inside the USSR in 1955; Hoover signed a \"flatly deny\" memo. The hoaxes are laid bare too — the FBI ruled Maury Island fabricated for magazine money; yet in the 1964 Socorro/Zamora case, FBI agents verified physical ground traces on site."],
    ids: "18_100754 · 341_110448 · 341_110677 · Section_002 · Section_003 · Serial_438"
  },
  {
    zh: ["主線 3|Blue Book 特別報告 14:統計否定的基石(1955)",
      "空軍以 IBM 打孔卡統計 3,201 筆報告:物體目擊中 UNKNOWN 佔 <span class='kfig'>21.5%</span>;卡方檢定六特徵五項 p<1%,KNOWN 與 UNKNOWN 統計上不同源——但報告自己聲明這不等於「UNKNOWN=飛碟」。最反直覺:「Excellent」等級目擊中 UNKNOWN 反而高達 <span class='kfig'>33.3%</span>——品質越高越難解釋。正式結論:「高度難以置信」有任何一筆超越現有科學。"],
    en: ["Storyline 3 | Blue Book Special Report No. 14: the statistical bedrock (1955)",
      "The Air Force ran 3,201 reports through IBM punched cards: <span class='kfig'>21.5%</span> of object sightings were UNKNOWN; chi-square tests on six characteristics showed p<1% on five — KNOWNS and UNKNOWNS differ statistically — though the report itself stresses this does not mean \"UNKNOWNS = flying saucers\". Most counter-intuitive: among \"Excellent\"-rated sightings, UNKNOWN rises to <span class='kfig'>33.3%</span> — the better the report, the harder to explain. Official verdict: \"highly improbable\" any represent technology beyond known science."],
    ids: "CIA-UAP-015"
  },
  {
    zh: ["主線 4|CIA 的兩張底牌(Release 03 首次入列)",
      "CIA 官方歷史正式承認:1950 年代中期後 U-2/OXCART 高空飛行造成<span class='kfig'>過半數</span> UFO 目擊報告,藍皮書定期向 CIA 核對飛行日誌——真相不能公開。「政府確實隱瞞,但隱瞞的是偵察機」。1971 年澳洲國防部評析則從外部完整重建美國政策史:Sign 的星際結論遭壓制、Robertson Panel「去神秘化」、JANAP 146 以間諜罪威懾洩露者。"],
    en: ["Storyline 4 | The CIA's two cards (first appearance in Release 03)",
      "The CIA's official history formally admits that U-2/OXCART flights above 60,000 ft accounted for <span class='kfig'>over half</span> of UFO reports from the mid-1950s on, with Blue Book quietly cross-checking flight logs against sightings — a truth that couldn't be told. \"The government did cover something up — spy planes.\" A 1971 Australian Defence assessment reconstructs the whole U.S. policy arc from outside: Project Sign's interplanetary conclusion suppressed, the Robertson Panel's \"debunking\" mandate, JANAP 146 threatening leakers with espionage charges."],
    ids: "CIA-UAP-003 · CIA-UAP-019"
  },
  {
    zh: ["主線 5|太空計畫的異常記錄",
      "Apollo 16 科學簡報音檔中,研究員正式描述月球軌道「首次回報的瞬態閃光事件」並要求定位;McDivitt 在 Gemini 4 軌道目擊形狀可辨的物體——官方描述淡化為「看到火花」,與文件實質嚴重不符;Apollo 17 照片的三角形光點是全集中唯一標注「分析進行中」的案例。"],
    en: ["Storyline 5 | Anomalies in the space program",
      "In the Apollo 16 science debriefing audio, investigators formally describe \"the first transient flash event reported from lunar orbit\" and ask for time-and-position tracking; McDivitt sighted a shape-resolvable object with confirmed closing velocity on Gemini 4 — the official blurb waters it down to \"sparks\", starkly at odds with the document; the triangular light on an Apollo 17 photo is the only case in the corpus marked \"analysis ongoing\"."],
    ids: "NASA-UAP-D024 · D016 · D003 · D004 · VM006"
  },
  {
    zh: ["主線 6|現代軍事遭遇:感測器時代(2022-2024)",
      "84 部影片多為短促 FLIR 光點,但文件+影片配對後浮現硬核模式:希臘地中海菱形 UAP <span class='kfig'>只在短波紅外(SWIR)可見</span>、電光相機拍不到,影片完整記錄切到可見光即消失;6 個月後阿曼灣出現形態幾乎相同的物體——跨地理重複。伊拉克 AGM-176 武器測試期間,UAP 在武器釋放與命中之間高速穿越,IR 光斑確認高熱特徵。所有報告一律:「無法識別,任務繼續。」"],
    en: ["Storyline 6 | Modern military encounters: the sensor era (2022-2024)",
      "Most of the 84 videos are brief FLIR blobs, but pairing documents with footage reveals hard patterns: a diamond-shaped UAP over the Mediterranean was <span class='kfig'>visible only in short-wave infrared (SWIR)</span> — invisible to electro-optical cameras — and the video captures it vanishing the instant the sensor switches to visible light; six months later a nearly identical morphology appeared over the Gulf of Oman. During an AGM-176 live-fire test in Iraq, a UAP crossed the engagement zone between weapon release and impact, with IR lens flare confirming a significant heat signature. Every report ends the same way: \"unidentified, mission continued.\""],
    ids: "DOW-UAP-D025 · PR028 · D027 · PR029 · D028 · D019 · D020"
  },
  {
    zh: ["主線 7|西部設施事件群:本集最強的「未解決」(2023-2025)",
      "橫跨三批、至少 10 筆互相印證:2023 年 10 月,七名聯邦執法特工兩天內獨立目擊橙色母球射出紅色子球、12-18 公尺無聲火球、「零阻力」三角形、可透視見星的透明物體——AARO 自評「現有檔案中最具說服力」。2026 年 6 月 AARO 追蹤備忘錄逐一排除後,正式承認 <span class='kfig'>40%</span> 無法解釋、暫定「未識別技術」假說。2025 年續集:FBI FD-302 與 ODNI 高階情報官第一人稱無塗黑陳述互相印證,FLIR+夜視鏡+肉眼+雷達四重確認,證人自述「幾乎無語」。"],
    en: ["Storyline 7 | The Western-facility cluster: the strongest \"unresolved\" case (2023-2025)",
      "At least 10 mutually corroborating records across all three releases: in October 2023, seven federal law-enforcement agents independently witnessed an orange \"mother ball\" ejecting red daughter orbs, a silent 12-18 m fireball, a \"zero-friction\" triangle, and a translucent object through which stars were visible — AARO's own assessment: \"among the most compelling in our holdings.\" After eliminating alternatives, AARO's June 2026 memo formally concedes <span class='kfig'>40%</span> remains unexplained, tentatively hypothesizing \"unidentified technology\". The 2025 sequel: an FBI FD-302 and an unredacted first-person statement by a senior ODNI intelligence official corroborate each other — FLIR, night vision, naked eye and radar all confirming — the witness \"almost speechless\"."],
    ids: "Western_US_Event · DOW-UAP-D077 · D079-D083 · USPER_Statement · ODNI-UAP-D001 · FBI-UAP-D007"
  },
  {
    zh: ["整體評讀",
      "三個時代的官方統計收斂到同一結構:1955 年 21.5%→高品質 33.3%、2026 年 40%——排除大多數之後,總剩一塊高品質、無法解釋、也無法證明是什麼的殘差。這批檔案沒有「外星證據」,但完整呈現一部「官方如何管理不可知」的行政史:1947 認真 → 1950s 否定+去神秘化 → 過半目擊其實是自家偵察機 → 1998 制式否認 → 2026 願意寫下「未識別技術」。最有科學價值的不是任何單支影片,而是 SWIR 波段選擇性這類可檢驗、且跨地理重複的物理線索。"],
    en: ["Overall reading",
      "Official statistics from three different eras converge on the same structure: 21.5% in 1955 (rising to 33.3% among the best reports), 40% in 2026 — after everything explainable is removed, a residue of high-quality, unexplained, unprovable cases remains. There is no \"alien evidence\" here, but there is a complete administrative history of how a government manages the unknowable: earnest in 1947 → debunking in the 1950s → over half of sightings actually its own spy planes → boilerplate denial in 1998 → willing to write \"unidentified technology\" in 2026. The most scientifically valuable item is not any single video but the SWIR band-selectivity — a testable physical signature that repeats across geographies."],
    ids: ""
  }
];
function renderAnalysis() {
  document.getElementById("analysisBody").innerHTML = STORIES.map(s => {
    const [h, p] = s[lang];
    return `<div class="story"><h3>${h}</h3><p>${p}</p>${s.ids ? `<div class="ids">${t("quiz_src")}: ${s.ids}</div>` : ""}</div>`;
  }).join("");
}

/* ================= game 1: quiz ================= */
let qOrder = [], qIdx = 0, qScore = 0;
function initQuiz() {
  qOrder = QUIZ.map((q, i) => i).sort(() => Math.random() - 0.5);
  qIdx = 0; qScore = 0;
  renderQuiz();
}
function renderQuiz() {
  const box = document.getElementById("quizBox");
  if (qIdx >= qOrder.length) {
    const pct = qScore / qOrder.length;
    const rank = pct >= 0.95 ? "g1_rank5" : pct >= 0.8 ? "g1_rank4" : pct >= 0.6 ? "g1_rank3" : pct >= 0.4 ? "g1_rank2" : "g1_rank1";
    box.innerHTML = `<div class="quiz-q"><b>${t("g1_done")} ${qScore}/${qOrder.length}</b><br>🏅 ${t(rank)}</div>
      <button class="btn" onclick="initQuiz()">${t("g1_restart")}</button>`;
    return;
  }
  const q = QUIZ[qOrder[qIdx]];
  const r = DATA.find(x => x.id === q.id);
  const tx = r[lang].s ? r[lang] : r.zh;
  box.innerHTML = `
    <div class="quiz-score">${t("g1_score")}: ${qScore}/${qIdx} · ${qIdx + 1}/${qOrder.length}</div>
    <div class="quiz-q"><b>${esc(r.title)}</b> <span class="badge">${agencyLb(r.agency)}</span><br><br>${esc(tx.s)}</div>
    <div class="quiz-btns">
      <button data-v="explained">${t("g1_explained")}</button>
      <button data-v="unresolved">${t("g1_unresolved")}</button>
    </div>
    <div class="quiz-fb" id="quizFb"></div>`;
  box.querySelectorAll(".quiz-btns button").forEach(b => b.onclick = () => {
    const ok = b.dataset.v === q.verdict;
    if (ok) qScore++;
    box.querySelectorAll(".quiz-btns button").forEach(x => {
      x.disabled = true;
      if (x.dataset.v === q.verdict) x.classList.add("correct");
      else if (x === b) x.classList.add("wrong");
    });
    const fb = document.getElementById("quizFb");
    fb.style.display = "block";
    fb.innerHTML = `${ok ? `<span class="ok">${t("g1_right")}</span>` : `<span class="bad">${t("g1_wrong")}</span>`}
      <br><b>${t("g1_verdict")}</b> ${esc(tx.c)}
      <br><br><button class="btn" id="qNext">${t("g1_next")}</button>`;
    document.getElementById("qNext").onclick = () => { qIdx++; renderQuiz(); };
  });
}

/* ================= game 2: timeline ================= */
const TL_EVENTS = [
  { y: 1944, zh: "415 夜戰中隊回報「foo fighters」跟隨戰機", en: "415th NFS reports \"foo fighters\" pacing aircraft" },
  { y: 1947, zh: "特懷寧意見書:飛行碟「真實且非幻想」", en: "Twining memo: flying discs \"real, not visionary\"" },
  { y: 1955, zh: "Blue Book 特別報告 14:3,201 筆統計分析", en: "Blue Book Report 14: statistics on 3,201 reports" },
  { y: 1964, zh: "索科羅 Zamora 案:FBI 確認地面物理痕跡", en: "Socorro/Zamora case: FBI verifies ground traces" },
  { y: 2024, zh: "希臘菱形 UAP:僅 SWIR 波段可見", en: "Greece diamond UAP: visible only in SWIR" },
  { y: 2026, zh: "AARO 備忘錄:西部事件 40% 無法解釋", en: "AARO memo: 40% of Western event unexplained" },
];
let tlPick = [];
function initTimeline() {
  tlPick = [];
  const box = document.getElementById("timelineBox");
  const shuffled = TL_EVENTS.map((e, i) => i).sort(() => Math.random() - 0.5);
  box.innerHTML = `<div id="tlItems">${shuffled.map(i =>
    `<div class="tl-item" data-i="${i}"><span>${esc(TL_EVENTS[i][lang])}</span><span class="tl-slot" id="slot${i}"></span></div>`).join("")}</div>
    <div class="tl-result" id="tlResult"></div>`;
  box.querySelectorAll(".tl-item").forEach(el => el.onclick = () => {
    const i = +el.dataset.i;
    tlPick.push(i);
    el.classList.add("picked");
    document.getElementById("slot" + i).textContent = "#" + tlPick.length;
    if (tlPick.length === TL_EVENTS.length) tlFinish();
  });
}
function tlFinish() {
  const correctOrder = TL_EVENTS.map((e, i) => i).sort((a, b) => TL_EVENTS[a].y - TL_EVENTS[b].y);
  let ok = 0;
  tlPick.forEach((v, pos) => { if (v === correctOrder[pos]) ok++; });
  const res = document.getElementById("tlResult");
  const ans = correctOrder.map(i => `${TL_EVENTS[i].y} — ${esc(TL_EVENTS[i][lang])}`).join("<br>");
  res.innerHTML = (ok === TL_EVENTS.length
    ? `<span class="ok"><b>${t("g2_perfect")}</b></span>`
    : `<span class="bad"><b>${t("g2_close").replace("{n}", ok)}</b></span>`)
    + `<br><br><b>${t("timeline_ans")}:</b><br>${ans}<br><br><button class="btn" onclick="initTimeline()">${t("g2_retry")}</button>`;
}

/* ================= refs ================= */
const REFS = [
  {
    zh: "官方來源", en: "Official sources", items: [
      ["https://www.war.gov/ufo/", "war.gov/UFO — PURSUE 官方入口", "war.gov/UFO — official PURSUE portal"],
      ["https://www.war.gov/News/Releases/Release/Article/4515408/", "戰爭部 Release 03 新聞稿(2026-06-12)", "DoW press release for Release 03 (2026-06-12)"],
      ["https://www.dvidshub.net/", "DVIDS — 官方影音原始平台", "DVIDS — official media distribution platform"],
    ]
  },
  {
    zh: "存檔與鏡像(地區封鎖時可用)", en: "Archives & mirrors (work under geo-blocks)", items: [
      ["https://web.archive.org/web/2026/https://www.war.gov/UFO/", "Wayback Machine 頁面存檔", "Wayback Machine page archive"],
      ["https://www.warufo.com/", "WARUFO — 第三方逐檔分析索引", "WARUFO — third-party per-file analysis index"],
      ["https://war-gov-ufo-release-1.vercel.app/", "社群鏡像(整批打包下載)", "Community mirror (bulk bundles)"],
    ]
  },
  {
    zh: "新聞報導", en: "News coverage", items: [
      ["https://www.npr.org/2026/05/08/g-s1-121186/ufo-files-released-defense-department", "NPR:UFO files released", "NPR: UFO files released"],
      ["https://www.nbcnews.com/science/ufos-and-anomalous-phenomena/ufo-uap-files-pentagon-release-trump-rcna344204", "NBC:Pentagon releases declassified UFO files", "NBC: Pentagon releases declassified UFO files"],
      ["https://en.wikipedia.org/wiki/United_States_UFO_files", "Wikipedia:United States UFO files", "Wikipedia: United States UFO files"],
    ]
  },
  {
    zh: "歷史脈絡", en: "Historical context", items: [
      ["https://www.archives.gov/research/topics/uaps", "美國國家檔案局 UAP 專頁", "U.S. National Archives UAP page"],
      ["https://www.cia.gov/readingroom/", "CIA FOIA 閱覽室", "CIA FOIA Reading Room"],
      ["https://vault.fbi.gov/UFO", "FBI Vault:UFO 案卷", "FBI Vault: UFO files"],
      ["https://www.aaro.mil/", "AARO — 全域異常解析辦公室", "AARO — All-domain Anomaly Resolution Office"],
    ]
  },
];
function renderRefs() {
  document.getElementById("refsBody").innerHTML = REFS.map(g =>
    `<div class="panel ref-group"><h3>${g[lang]}</h3>${g.items.map(it =>
      `<a href="${it[0]}" target="_blank" rel="noopener">${it[lang === "zh" ? 1 : 2]}<span class="d"> — ${it[0]}</span></a>`).join("")}</div>`).join("");
}
