/* PURSUE UAP Archive — Games module (zero-dependency, bilingual).
   Uses globals from app.js: lang, esc(), DATA, GEO_POOL, VERDICTS. */
"use strict";

const GI18N = {
  zh: {
    g_guessr: "🌍 UAP Guessr", g_duel: "🃏 檔案卡對決", g_desk: "🕵️ 分析官調查桌", g_debunk: "🔍 揪出騙局",
    // guessr
    gr_desc: "讀一則真實案件,在地圖上點出發生地點、拉時間軸猜年代。越準分越高。",
    gr_place: "在地圖上點出你認為的地點", gr_year: "年代", gr_submit: "提交猜測", gr_next: "下一題",
    gr_dist: "距離", gr_yearoff: "年份差", gr_pts: "分", gr_total: "總分", gr_round: "第",
    gr_actual: "實際地點", gr_km: "公里", gr_yr: "年", gr_needclick: "請先在地圖上點一個地點",
    gr_final: "遊戲結束!5 題總分", gr_again: "再玩一次",
    // duel
    du_desc: "抽兩張真實檔案卡,依提示選出正確的一張。答錯即結束,挑戰最長連勝。",
    du_q_score: "哪一張的「歷史/新聞價值」評分更高?", du_q_year: "哪一張的事件年代更早?",
    du_q_red: "哪一張的官方塗黑更嚴重?",
    du_streak: "連勝", du_best: "最佳", du_over: "連勝中斷!最終連勝", du_again: "重新挑戰", du_reveal: "解答",
    // desk
    dk_desc: "你是 AARO 分析官。線索逐條解鎖,用越少線索猜對官方裁定,分數越高。共 6 案。",
    dk_reveal: "🔓 再解鎖一條線索", dk_verdict: "你的裁定?",
    dk_explained: "已解釋", dk_hoax: "騙局/捏造", dk_unresolved: "未解決",
    dk_right: "✓ 正確", dk_wrong: "✗ 錯誤", dk_official: "官方裁定", dk_next: "下一案",
    dk_score: "分數", dk_case: "案件", dk_clue: "線索", dk_gained: "本案得分",
    dk_final: "考核結束!6 案總分", dk_again: "再玩一次",
    dk_c1: "機關 · 類型", dk_c2: "年代 · 地點", dk_c3: "主題標籤", dk_c4: "塗黑程度 · 摘要開頭",
    dk_r5: "🏅 AARO 主任級", dk_r4: "資深分析官", dk_r3: "合格分析官", dk_r2: "實習生", dk_r1: "建議重修",
    // debunk
    db_desc: "官方把部分案件判為「騙局或已解釋」。你是調查員——勾出所有被官方戳破/歸因的案件,別誤傷真正未解的。",
    db_submit: "提交判斷", db_again: "換一批", db_result: "結果", db_resolved: "已解釋/騙局", db_unres: "未解決",
    db_got: "答對", db_of: "/", db_perfect: "全數命中!你是王牌調查員。",
    verdict_lb: { explained: "已解釋", hoax: "騙局", unresolved: "未解決" },
  },
  en: {
    g_guessr: "🌍 UAP Guessr", g_duel: "🃏 File Card Duel", g_desk: "🕵️ Analyst Desk", g_debunk: "🔍 Debunker",
    gr_desc: "Read a real case, click where it happened on the map, and slide the timeline to guess the year. Closer = more points.",
    gr_place: "Click the map where you think it happened", gr_year: "Year", gr_submit: "Submit guess", gr_next: "Next",
    gr_dist: "Distance", gr_yearoff: "Year off by", gr_pts: "pts", gr_total: "Total", gr_round: "Round",
    gr_actual: "Actual location", gr_km: "km", gr_yr: "yr", gr_needclick: "Click a spot on the map first",
    gr_final: "Game over! Total over 5 rounds", gr_again: "Play again",
    du_desc: "Draw two real file cards and pick the right one per the prompt. One wrong ends it — chase your best streak.",
    du_q_score: "Which card has the higher historical / news value?", du_q_year: "Which event is earlier?",
    du_q_red: "Which is more heavily redacted?",
    du_streak: "Streak", du_best: "Best", du_over: "Streak broken! Final streak", du_again: "Try again", du_reveal: "Answer",
    dk_desc: "You're an AARO analyst. Clues unlock one at a time — guess the official verdict with fewer clues for more points. 6 cases.",
    dk_reveal: "🔓 Unlock another clue", dk_verdict: "Your verdict?",
    dk_explained: "Explained", dk_hoax: "Hoax / fabricated", dk_unresolved: "Unresolved",
    dk_right: "✓ Correct", dk_wrong: "✗ Wrong", dk_official: "Official verdict", dk_next: "Next case",
    dk_score: "Score", dk_case: "Case", dk_clue: "Clue", dk_gained: "Points",
    dk_final: "Exam complete! Total over 6 cases", dk_again: "Play again",
    dk_c1: "Agency · Type", dk_c2: "Era · Location", dk_c3: "Themes", dk_c4: "Redaction · summary opening",
    dk_r5: "🏅 AARO Director", dk_r4: "Senior Analyst", dk_r3: "Qualified Analyst", dk_r2: "Intern", dk_r1: "Needs retraining",
    db_desc: "The government ruled some cases hoaxes or explained. You're the investigator — tick every case officially debunked/attributed, without hitting the genuinely unresolved ones.",
    db_submit: "Submit", db_again: "New batch", db_result: "Result", db_resolved: "Explained/Hoax", db_unres: "Unresolved",
    db_got: "correct", db_of: "/", db_perfect: "Flawless! You're an ace investigator.",
    verdict_lb: { explained: "Explained", hoax: "Hoax", unresolved: "Unresolved" },
  }
};
const gt = k => GI18N[lang][k] || k;
const rec = id => DATA.find(r => r.id === id);
const tx = r => (r[lang] && r[lang].s ? r[lang] : r.zh);
const themeName = th => (typeof THEME_LB !== "undefined" && THEME_LB[th]) ? THEME_LB[th][lang === "zh" ? 0 : 1] : th;
const redName = rd => (typeof RED_LB !== "undefined" && RED_LB[rd]) ? RED_LB[rd][lang === "zh" ? 0 : 1] : rd;
function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[a[i], a[j]] = [a[j], a[i]]; } return a; }

/* ===== games sub-nav ===== */
let activeGame = "guessr";
function initGames() {
  const host = document.getElementById("tab-games");
  host.innerHTML = `
    <div class="game-nav">
      <button data-g="guessr">${gt("g_guessr")}</button>
      <button data-g="duel">${gt("g_duel")}</button>
      <button data-g="desk">${gt("g_desk")}</button>
      <button data-g="debunk">${gt("g_debunk")}</button>
    </div>
    <div id="gameStage"></div>`;
  host.querySelectorAll(".game-nav button").forEach(b => b.addEventListener("click", () => {
    activeGame = b.dataset.g; renderGame();
  }));
  renderGame();
}
function renderGame() {
  document.querySelectorAll(".game-nav button").forEach(b =>
    b.classList.toggle("active", b.dataset.g === activeGame));
  ({ guessr: gameGuessr, duel: gameDuel, desk: gameDesk, debunk: gameDebunk })[activeGame]();
}

/* ============ 1) UAP GUESSR ============ */
const CONTINENTS = [
  [[-168,66],[-95,72],[-60,60],[-52,47],[-66,45],[-81,26],[-97,16],[-110,23],[-124,40],[-130,54]],
  [[-92,14],[-77,8],[-60,10],[-50,0],[-35,-8],[-40,-23],[-58,-35],[-73,-52],[-75,-20],[-82,-3]],
  [[-10,36],[-9,44],[0,50],[-5,58],[10,60],[30,60],[40,48],[28,40],[20,38],[10,44],[3,42]],
  [[-17,15],[-16,28],[10,37],[33,32],[43,12],[51,12],[40,-5],[40,-25],[20,-35],[15,-30],[12,-6],[8,4],[-8,5]],
  [[30,60],[60,68],[100,72],[140,72],[145,60],[135,50],[142,45],[130,35],[122,30],[108,20],[95,15],[80,8],[77,20],[60,25],[45,38],[40,48]],
  [[113,-22],[130,-12],[142,-12],[150,-24],[145,-38],[130,-32],[115,-34]],
];
let grState;
function gameGuessr() {
  grState = { pool: shuffle(GEO_POOL).slice(0, 5), i: 0, total: 0, guess: null, year: 1985, done: false };
  renderGuessr();
}
function projX(lng) { return lng + 180; }
function projY(lat) { return 90 - lat; }
function haversine(a, b) {
  const R = 6371, d2r = Math.PI / 180;
  const dLat = (b.lat - a.lat) * d2r, dLng = (b.lng - a.lng) * d2r;
  const s = Math.sin(dLat / 2) ** 2 + Math.cos(a.lat * d2r) * Math.cos(b.lat * d2r) * Math.sin(dLng / 2) ** 2;
  return Math.round(2 * R * Math.asin(Math.sqrt(s)));
}
function worldSVG() {
  let grat = "";
  for (let lng = -150; lng <= 150; lng += 30) grat += `<line x1="${projX(lng)}" y1="0" x2="${projX(lng)}" y2="180" class="grat"/>`;
  for (let lat = -60; lat <= 60; lat += 30) grat += `<line x1="0" y1="${projY(lat)}" x2="360" y2="${projY(lat)}" class="grat ${lat === 0 ? 'eq' : ''}"/>`;
  const conts = CONTINENTS.map(c => `<polygon points="${c.map(p => projX(p[0]) + "," + projY(p[1])).join(" ")}" class="cont"/>`).join("");
  return `<svg id="mapSvg" viewBox="0 0 360 180" preserveAspectRatio="none">
    <rect width="360" height="180" class="ocean"/>${grat}${conts}
    <g id="pins"></g></svg>`;
}
function renderGuessr() {
  const st = grState, stage = document.getElementById("gameStage");
  if (st.i >= st.pool.length) {
    stage.innerHTML = `<div class="panel"><h3>${gt("gr_final")}: <span class="kfig">${st.total}</span> / 50000</h3>
      <button class="btn" id="grAgain">${gt("gr_again")}</button></div>`;
    document.getElementById("grAgain").onclick = gameGuessr; return;
  }
  const q = st.pool[st.i], r = rec(q.id);
  stage.innerHTML = `<div class="panel">
    <p class="muted">${gt("gr_desc")}</p>
    <div class="gr-hud">${gt("gr_round")} ${st.i + 1}/5 · ${gt("gr_total")}: <span class="kfig">${st.total}</span></div>
    <div class="gr-case">${esc(tx(r).s.slice(0, 240))}…</div>
    <div class="map-wrap">${worldSVG()}</div>
    <div class="muted small" id="grHint">${gt("gr_place")}</div>
    <div class="gr-year">${gt("gr_year")}: <b id="grYearVal">${st.year}</b>
      <input type="range" id="grYear" min="1940" max="2026" value="${st.year}"></div>
    <button class="btn" id="grSubmit">${gt("gr_submit")}</button>
    <div id="grResult"></div></div>`;
  const svg = document.getElementById("mapSvg");
  st.guess = null;
  svg.addEventListener("click", e => {
    if (st.locked) return;
    const rc = svg.getBoundingClientRect();
    const lng = (e.clientX - rc.left) / rc.width * 360 - 180;
    const lat = 90 - (e.clientY - rc.top) / rc.height * 180;
    st.guess = { lat, lng };
    document.getElementById("pins").innerHTML = `<circle cx="${projX(lng)}" cy="${projY(lat)}" r="3" class="pin-you"/>`;
    document.getElementById("grHint").textContent = "📍 " + lat.toFixed(0) + "°, " + lng.toFixed(0) + "°";
  });
  document.getElementById("grYear").addEventListener("input", e => {
    st.year = +e.target.value; document.getElementById("grYearVal").textContent = st.year;
  });
  document.getElementById("grSubmit").onclick = () => {
    if (!st.guess) { document.getElementById("grHint").textContent = "⚠ " + gt("gr_needclick"); return; }
    st.locked = true;
    const dist = haversine(st.guess, q);
    const dy = Math.abs(st.year - q.year);
    const distPts = Math.round(5000 * Math.exp(-dist / 1500));
    const yearPts = Math.round(5000 * Math.max(0, 1 - dy / 40));
    const pts = distPts + yearPts;
    st.total += pts;
    document.getElementById("pins").innerHTML +=
      `<circle cx="${projX(q.lng)}" cy="${projY(q.lat)}" r="3.4" class="pin-real"/>
       <line x1="${projX(st.guess.lng)}" y1="${projY(st.guess.lat)}" x2="${projX(q.lng)}" y2="${projY(q.lat)}" class="pin-line"/>`;
    document.getElementById("grResult").innerHTML = `<div class="gr-score">
      <b>${esc(q.name)}</b> · ${q.year}<br>
      ${gt("gr_dist")}: ${dist.toLocaleString()} ${gt("gr_km")} → ${distPts} ${gt("gr_pts")} ·
      ${gt("gr_yearoff")} ${dy} ${gt("gr_yr")} → ${yearPts} ${gt("gr_pts")}<br>
      <span class="kfig">+${pts} ${gt("gr_pts")}</span></div>
      <button class="btn" id="grNext">${gt("gr_next")} →</button>`;
    document.getElementById("grSubmit").style.display = "none";
    document.getElementById("grNext").onclick = () => { st.i++; st.locked = false; renderGuessr(); };
  };
}

/* ============ 2) FILE CARD DUEL ============ */
let duState;
function gameDuel() { duState = { streak: 0, best: 0 }; renderDuel(); }
function cardHTML(r, side) {
  return `<div class="duel-card" data-side="${side}">
    <div class="dc-badge">${agencyLb(r.agency)} · ${r.year || "—"}</div>
    <div class="dc-title">${esc(r.title.slice(0, 70))}</div>
    <div class="dc-type badge">${r.type}</div>
    <div class="dc-pick">▲</div></div>`;
}
function redRank(rd) { return { none: 0, light: 1, unknown: 1, heavy: 2 }[rd] ?? 1; }
function renderDuel() {
  const st = duState, stage = document.getElementById("gameStage");
  const modes = [
    { q: "du_q_score", val: r => r.score },
    { q: "du_q_year", val: r => -(r.year || 3000), need: r => r.year },
    { q: "du_q_red", val: r => redRank(r.red) },
  ];
  let a, b, m;
  for (let t = 0; t < 40; t++) {
    m = modes[Math.floor(Math.random() * modes.length)];
    const pool = m.need ? DATA.filter(m.need) : DATA;
    a = pool[Math.floor(Math.random() * pool.length)];
    b = pool[Math.floor(Math.random() * pool.length)];
    if (a.id !== b.id && m.val(a) !== m.val(b)) break;
  }
  const winner = m.val(a) > m.val(b) ? "a" : "b";
  stage.innerHTML = `<div class="panel">
    <p class="muted">${gt("du_desc")}</p>
    <div class="gr-hud">🔥 ${gt("du_streak")}: <span class="kfig">${st.streak}</span> · ${gt("du_best")}: ${st.best}</div>
    <h3 class="duel-q">${gt(m.q)}</h3>
    <div class="duel-row">${cardHTML(a, "a")}<span class="vs">VS</span>${cardHTML(b, "b")}</div>
    <div id="duResult"></div></div>`;
  stage.querySelectorAll(".duel-card").forEach(el => el.onclick = () => {
    const ok = el.dataset.side === winner;
    stage.querySelectorAll(".duel-card").forEach(c => {
      c.style.pointerEvents = "none";
      c.classList.add(c.dataset.side === winner ? "win" : "lose");
    });
    const reveal = m === modes[0] ? `★${a.score} vs ★${b.score}`
      : m === modes[1] ? `${a.year} vs ${b.year}`
      : `${redName(a.red)} vs ${redName(b.red)}`;
    if (ok) {
      st.streak++; st.best = Math.max(st.best, st.streak);
      document.getElementById("duResult").innerHTML = `<div class="ok">✓ ${reveal}</div>
        <button class="btn" id="duNext">${gt("gr_next")} →</button>`;
      document.getElementById("duNext").onclick = renderDuel;
    } else {
      document.getElementById("duResult").innerHTML =
        `<div class="bad">${gt("du_over")}: <span class="kfig">${st.streak}</span> · ${reveal}</div>
        <button class="btn" id="duAgain">${gt("du_again")}</button>`;
      document.getElementById("duAgain").onclick = gameDuel;
    }
  });
}

/* ============ 3) ANALYST DESK (progressive clues) ============ */
let dkState;
function clues(r) {
  const loc = r.loc ? esc(r.loc) : "—";
  const dec = r.year ? (Math.floor(r.year / 10) * 10) + "s" : "—";
  return [
    `${agencyLb(r.agency)} · ${r.type}`,
    `${dec} · ${loc}`,
    (r.themes || []).map(themeName).join(", "),
    `${redName(r.red)} · ${esc(tx(r).s.slice(0, 80))}…`,
  ];
}
function gameDesk() {
  dkState = { pool: shuffle(VERDICTS).slice(0, 6), i: 0, total: 0 };
  renderDesk();
}
function renderDesk() {
  const st = dkState, stage = document.getElementById("gameStage");
  if (st.i >= st.pool.length) {
    const pct = st.total / (st.pool.length * 400);
    const rk = pct >= .9 ? "dk_r5" : pct >= .72 ? "dk_r4" : pct >= .5 ? "dk_r3" : pct >= .3 ? "dk_r2" : "dk_r1";
    stage.innerHTML = `<div class="panel"><h3>${gt("dk_final")}: <span class="kfig">${st.total}</span> / 2400</h3>
      <p>${gt(rk)}</p><button class="btn" id="dkAgain">${gt("dk_again")}</button></div>`;
    document.getElementById("dkAgain").onclick = gameDesk; return;
  }
  const q = st.pool[st.i], r = rec(q.id);
  st.shown = st.shown || 1; st.locked = false;
  const cl = clues(r), lbls = ["dk_c1", "dk_c2", "dk_c3", "dk_c4"];
  const draw = () => {
    const pts = 400 - (st.shown - 1) * 80;
    stage.innerHTML = `<div class="panel">
      <p class="muted">${gt("dk_desc")}</p>
      <div class="gr-hud">${gt("dk_case")} ${st.i + 1}/6 · ${gt("dk_score")}: <span class="kfig">${st.total}</span> · ${gt("dk_gained")}: ${pts}</div>
      <div class="desk-clues">${cl.map((c, k) => `<div class="clue ${k < st.shown ? "on" : "off"}">
        <span class="clue-lb">${gt(lbls[k])}</span>${k < st.shown ? c : "🔒"}</div>`).join("")}</div>
      ${st.shown < 4 ? `<button class="btn ghost" id="dkMore">${gt("dk_reveal")} (−80)</button>` : ""}
      <h4 class="dk-ask">${gt("dk_verdict")}</h4>
      <div class="verdict-btns">
        <button data-v="explained">${gt("dk_explained")}</button>
        <button data-v="hoax">${gt("dk_hoax")}</button>
        <button data-v="unresolved">${gt("dk_unresolved")}</button></div>
      <div id="dkResult"></div></div>`;
    if (st.shown < 4) document.getElementById("dkMore").onclick = () => { st.shown++; draw(); };
    stage.querySelectorAll(".verdict-btns button").forEach(el => el.onclick = () => {
      if (st.locked) return; st.locked = true;
      const ok = el.dataset.v === q.verdict;
      const gained = ok ? pts : 0; st.total += gained;
      stage.querySelectorAll(".verdict-btns button").forEach(x => {
        x.disabled = true;
        if (x.dataset.v === q.verdict) x.classList.add("correct");
        else if (x === el) x.classList.add("wrong");
      });
      document.getElementById("dkResult").innerHTML = `<div class="quiz-fb2">
        ${ok ? `<span class="ok">${gt("dk_right")} +${pts}</span>` : `<span class="bad">${gt("dk_wrong")}</span>`}
        · <b>${gt("dk_official")}:</b> ${GI18N[lang].verdict_lb[q.verdict]}<br>
        <b>${esc(r.title)}</b><br>${esc(tx(r).c)}<br>
        <button class="btn" id="dkNext">${gt("dk_next")} →</button></div>`;
      document.getElementById("dkNext").onclick = () => { st.i++; st.shown = 1; renderDesk(); };
    });
  };
  draw();
}

/* ============ 4) DEBUNKER ============ */
let dbState;
function gameDebunk() {
  const resolved = VERDICTS.filter(v => v.verdict !== "unresolved");
  const unres = VERDICTS.filter(v => v.verdict === "unresolved");
  const pick = shuffle([...shuffle(resolved).slice(0, 3), ...shuffle(unres).slice(0, 3)]);
  dbState = { cards: pick, sel: new Set() };
  renderDebunk();
}
function renderDebunk() {
  const st = dbState, stage = document.getElementById("gameStage");
  stage.innerHTML = `<div class="panel">
    <p class="muted">${gt("db_desc")}</p>
    <div class="db-list">${st.cards.map((v, k) => { const r = rec(v.id); return `
      <label class="db-card"><input type="checkbox" data-k="${k}">
        <div><div class="dc-title">${esc(r.title.slice(0, 66))}</div>
        <div class="muted small">${agencyLb(r.agency)} · ${r.year || "—"} · ${esc(tx(r).s.slice(0, 90))}…</div></div></label>`; }).join("")}</div>
    <button class="btn" id="dbSubmit">${gt("db_submit")}</button>
    <div id="dbResult"></div></div>`;
  stage.querySelectorAll(".db-card input").forEach(c => c.onchange = () => {
    c.checked ? st.sel.add(+c.dataset.k) : st.sel.delete(+c.dataset.k);
  });
  document.getElementById("dbSubmit").onclick = () => {
    let correct = 0;
    st.cards.forEach((v, k) => {
      const isResolved = v.verdict !== "unresolved";
      const chose = st.sel.has(k);
      if (isResolved === chose) correct++;
      const el = stage.querySelectorAll(".db-card")[k];
      el.classList.add(isResolved ? "is-res" : "is-unres");
      el.querySelector("input").disabled = true;
      el.insertAdjacentHTML("beforeend",
        `<span class="db-tag ${isResolved ? "t-res" : "t-unres"}">${isResolved ? gt("db_resolved") : gt("db_unres")}</span>`);
    });
    document.getElementById("dbSubmit").style.display = "none";
    const perfect = correct === st.cards.length;
    document.getElementById("dbResult").innerHTML =
      `<div class="${perfect ? "ok" : ""}"><b>${gt("db_result")}: ${correct} ${gt("db_of")} ${st.cards.length} ${gt("db_got")}</b>
       ${perfect ? " — " + gt("db_perfect") : ""}</div>
       <button class="btn" id="dbAgain">${gt("db_again")}</button>`;
    document.getElementById("dbAgain").onclick = gameDebunk;
  };
}

window.initGames = initGames;
