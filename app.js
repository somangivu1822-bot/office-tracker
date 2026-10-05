/* ============================================================
   I18N
============================================================ */
const I18N = {
  hi:{
    appName:"लक्ष्य ट्रैकर", tagline:"आपकी टीम के daily काम और targets, एक जगह",
    name:"नाम", password:"पासवर्ड", confirmPassword:"पासवर्ड फिर से लिखें",
    namePlaceholder:"अपना नाम लिखें",
    loginBtn:"लॉगिन करें", signupBtn:"Account बनाएं",
    noAccount:"नया अकाउंट नहीं है?", haveAccount:"पहले से अकाउंट है?",
    switchToSignup:"Sign up करें", switchToLogin:"लॉगिन करें",
    dashboard:"डैशबोर्ड", dailyTodo:"Daily To-Do", weeklyTargets:"Weekly Targets",
    monthlyTargets:"Monthly Targets", annualReview:"Annual Review", teamOverview:"Team Overview",
    logout:"लॉगआउट", admin:"Admin", employee:"Employee",
    welcomeBack:"नमस्ते", todayTasks:"आज के काम", completedToday:"आज पूरे हुए",
    thisWeekProgress:"इस हफ्ते की प्रगति", thisMonthProgress:"इस महीने की प्रगति",
    addTask:"जोड़ें", taskPlaceholder:"नया काम लिखें...",
    category:"Category", addTarget:"Target जोड़ें", targetPlaceholder:"Target लिखें...",
    status:"Status", notStarted:"शुरू नहीं", inProgress:"चल रहा है",
    achieved:"पूरा हुआ", partial:"आंशिक", notDone:"नहीं हुआ",
    progress:"प्रगति", save:"सेव करें", delete:"हटाएं", edit:"बदलें", cancel:"रद्द करें",
    today:"आज", selectWeek:"हफ्ता चुनें", selectMonth:"महीना चुनें", selectYear:"साल चुनें",
    weekLabel:"हफ्ता", noTasksYet:"अभी कोई काम नहीं जोड़ा गया", noTargetsYet:"अभी कोई target नहीं है",
    overallAchievement:"कुल Achievement", achievedCount:"पूरे", partialCount:"आंशिक", notDoneCount:"अधूरे",
    teamMembers:"टीम के सदस्य", viewDetails:"विवरण देखें", backToTeam:"टीम पर वापस जाएं",
    addCategory:"+ नई Category", newCategoryPlaceholder:"Category का नाम",
    errorNameExists:"यह नाम पहले से मौजूद है", errorInvalidLogin:"नाम या पासवर्ड गलत है",
    errorFillFields:"कृपया सभी fields भरें", errorPasswordMismatch:"पासवर्ड मेल नहीं खा रहे",
    confirmDeleteTitle:"क्या आप वाकई हटाना चाहते हैं?", confirmDeleteBody:"यह वापस नहीं होगा।",
    close:"बंद करें", yourDetail:"आपका विवरण", annualFor:"वार्षिक समीक्षा —",
    monthTargets:"महीने के targets", weekTargets:"हफ्ते के targets",
    firstAdminNote:"आप पहले user हैं इसलिए आपको Admin बना दिया गया है",
    reason:"कारण", reasonPlaceholder:"क्यों अधूरा/आंशिक रहा, लिखें...",
    taskReasonPlaceholder:"पूरा न होने का कारण (optional)...",
    viewReasons:"कारण देखें", hideReasons:"छुपाएं", pendingItems:"अधूरे / आंशिक Targets",
    noReasonGiven:"कोई कारण नहीं दिया गया", allEmployees:"सभी employees",
    forgotPassword:"पासवर्ड भूल गए?", newPassword:"नया पासवर्ड", resetPasswordBtn:"पासवर्ड बदलें",
    errorUserNotFound:"यह नाम registered नहीं है", resetSuccess:"पासवर्ड बदल दिया गया, अब login करें",
    adminResetPassword:"Password reset करें", adminResetPrompt:"इस employee का नया पासवर्ड लिखें:",
    adminResetSuccess:"पासवर्ड बदल दिया गया",
    categories_Sales:"Sales", categories_Marketing:"Marketing", categories_Operations:"Operations",
    categories_Client:"Client Work", categories_Admin:"Admin", categories_Other:"अन्य",
    noEmployeesYet:"अभी टीम में कोई employee नहीं है"
  },
  en:{
    appName:"Target Tracker", tagline:"Your team's daily tasks and targets, in one place",
    name:"Name", password:"Password", confirmPassword:"Confirm password",
    namePlaceholder:"Enter your name",
    loginBtn:"Log in", signupBtn:"Create account",
    noAccount:"New here?", haveAccount:"Already have an account?",
    switchToSignup:"Sign up", switchToLogin:"Log in",
    dashboard:"Dashboard", dailyTodo:"Daily To-Do", weeklyTargets:"Weekly Targets",
    monthlyTargets:"Monthly Targets", annualReview:"Annual Review", teamOverview:"Team Overview",
    logout:"Log out", admin:"Admin", employee:"Employee",
    welcomeBack:"Welcome back", todayTasks:"Tasks today", completedToday:"Completed today",
    thisWeekProgress:"This week's progress", thisMonthProgress:"This month's progress",
    addTask:"Add", taskPlaceholder:"Add a new task...",
    category:"Category", addTarget:"Add target", targetPlaceholder:"Describe the target...",
    status:"Status", notStarted:"Not started", inProgress:"In progress",
    achieved:"Achieved", partial:"Partial", notDone:"Not done",
    progress:"Progress", save:"Save", delete:"Delete", edit:"Edit", cancel:"Cancel",
    today:"Today", selectWeek:"Select week", selectMonth:"Select month", selectYear:"Select year",
    weekLabel:"Week", noTasksYet:"No tasks added yet", noTargetsYet:"No targets yet",
    overallAchievement:"Overall achievement", achievedCount:"Achieved", partialCount:"Partial", notDoneCount:"Not done",
    teamMembers:"Team members", viewDetails:"View details", backToTeam:"Back to team",
    addCategory:"+ New category", newCategoryPlaceholder:"Category name",
    errorNameExists:"This name is already taken", errorInvalidLogin:"Incorrect name or password",
    errorFillFields:"Please fill all fields", errorPasswordMismatch:"Passwords do not match",
    confirmDeleteTitle:"Are you sure you want to delete this?", confirmDeleteBody:"This can't be undone.",
    close:"Close", yourDetail:"Your detail", annualFor:"Annual review —",
    monthTargets:"Month's targets", weekTargets:"Week's targets",
    firstAdminNote:"You're the first user, so you've been made Admin",
    reason:"Reason", reasonPlaceholder:"Why was this partial / not done...",
    taskReasonPlaceholder:"Reason it wasn't completed (optional)...",
    viewReasons:"View reasons", hideReasons:"Hide", pendingItems:"Pending / partial targets",
    noReasonGiven:"No reason given", allEmployees:"All employees",
    forgotPassword:"Forgot password?", newPassword:"New password", resetPasswordBtn:"Reset password",
    errorUserNotFound:"This name is not registered", resetSuccess:"Password changed, please log in",
    adminResetPassword:"Reset password", adminResetPrompt:"Enter new password for this employee:",
    adminResetSuccess:"Password updated",
    categories_Sales:"Sales", categories_Marketing:"Marketing", categories_Operations:"Operations",
    categories_Client:"Client Work", categories_Admin:"Admin", categories_Other:"Other",
    noEmployeesYet:"No employees in the team yet"
  }
};
let LANG = 'hi';
function t(key){ return (I18N[LANG] && I18N[LANG][key]) || key; }

function applyStaticI18n(){
  document.documentElement.lang = LANG;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    el.textContent = t(el.getAttribute('data-i18n'));
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
    el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
  });
  document.querySelectorAll('.lang-toggle button').forEach(b=>{
    b.classList.toggle('active', b.dataset.lang === LANG);
  });
  const titleKey = document.getElementById('viewTitle')?.dataset.i18nKey;
  if(titleKey) document.getElementById('viewTitle').textContent = t(titleKey);
}

/* ============================================================
   STORAGE HELPERS (shared team data)
   Config js/config.js se aati hai (FIREBASE_DB_URL).
   1) FIREBASE_DB_URL bhara hai  -> data Firebase mein save hota hai
      (poori team ke liye shared, GitHub Pages par bhi chalta hai).
   2) FIREBASE_DB_URL khali hai  -> data browser ke localStorage mein
      save hota hai (sirf usi browser mein, team ke saath share nahi).
============================================================ */
const FB_URL = ((window.APP_CONFIG && window.APP_CONFIG.FIREBASE_DB_URL) || '').trim().replace(/\/+$/, '');
const BACKEND = FB_URL ? 'firebase' : 'local';   // 'firebase' | 'local'
const STORAGE_AVAILABLE = true;
let lastStorageError = null;
const LS_PREFIX = 'laksh-tracker:';
const backendReady = Promise.resolve();

function fbUrl(key){ return FB_URL + '/store/' + encodeURIComponent(key) + '.json'; }

async function sGet(key){
  if(BACKEND === 'firebase'){
    try{
      const r = await fetch(fbUrl(key), {cache:'no-store'});
      if(!r.ok) throw new Error('HTTP ' + r.status);
      const v = await r.json();            // null agar key nahi hai
      return v == null ? null : JSON.parse(v);
    }catch(e){ lastStorageError = e.message || String(e); return null; }
  }
  try{
    const v = localStorage.getItem(LS_PREFIX + key);
    return v == null ? null : JSON.parse(v);
  }catch(e){ lastStorageError = e.message || String(e); return null; }
}

async function sSet(key, value){
  const str = JSON.stringify(value);
  if(BACKEND === 'firebase'){
    for(let i=0;i<3;i++){
      try{
        const r = await fetch(fbUrl(key), {
          method:'PUT',
          headers:{'Content-Type':'application/json'},
          body: JSON.stringify(str)          // value ko string ke roop mein save karte hain
        });
        if(!r.ok) throw new Error('HTTP ' + r.status);
        return true;
      }catch(e){
        lastStorageError = e.message || String(e);
        console.error('storage set failed (attempt '+(i+1)+')', key, e);
        if(i < 2) await new Promise(res=>setTimeout(res, 400));
      }
    }
    return false;
  }
  try{ localStorage.setItem(LS_PREFIX + key, str); return true; }
  catch(e){ lastStorageError = e.message || String(e); return false; }
}

async function sDel(key){
  if(BACKEND === 'firebase'){
    try{
      const r = await fetch(fbUrl(key), {method:'DELETE'});
      return r.ok;
    }catch(e){ lastStorageError = e.message || String(e); return false; }
  }
  try{ localStorage.removeItem(LS_PREFIX + key); return true; }
  catch(e){ lastStorageError = e.message || String(e); return false; }
}

/* ============================================================
   STATE
============================================================ */
let STATE = {
  users: [],              // [{id,name,password,role}]
  categories: [],         // [string]
  currentUser: null,      // {id,name,role}
  view: 'dashboard',
  selectedDate: todayISO(),
  selectedWeek: getWeekKey(new Date()),
  selectedMonth: getMonthKey(new Date()),
  selectedYear: new Date().getFullYear(),
  viewingEmployeeId: null // for admin drill-in
};

function uid(){ return 'id' + Math.random().toString(36).slice(2,10) + Date.now().toString(36); }

function todayISO(){
  const d = new Date();
  return d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate());
}
function pad(n){ return n<10 ? '0'+n : ''+n; }

function getWeekKey(date){
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = (d.getUTCDay() + 6) % 7; // Mon=0
  d.setUTCDate(d.getUTCDate() - dayNum + 3);
  const firstThursday = new Date(Date.UTC(d.getUTCFullYear(),0,4));
  const weekNum = 1 + Math.round(((d - firstThursday) / 86400000 - 3 + ((firstThursday.getUTCDay()+6)%7)) / 7);
  return d.getUTCFullYear() + '-W' + pad(weekNum);
}
function getMonthKey(date){
  return date.getFullYear() + '-' + pad(date.getMonth()+1);
}
function weekRangeLabel(weekKey){
  const [y,w] = weekKey.split('-W');
  const simple = new Date(Date.UTC(+y,0,1 + (+w-1)*7));
  const dow = simple.getUTCDay();
  const monday = new Date(simple);
  const diff = (dow<=4 ? -(dow-1) : 8-dow);
  monday.setUTCDate(simple.getUTCDate()+diff);
  const sunday = new Date(monday); sunday.setUTCDate(monday.getUTCDate()+6);
  const fmt = d => pad(d.getUTCDate())+'/'+pad(d.getUTCMonth()+1);
  return fmt(monday)+' – '+fmt(sunday);
}
const MONTH_NAMES = {
  hi:['जनवरी','फरवरी','मार्च','अप्रैल','मई','जून','जुलाई','अगस्त','सितंबर','अक्टूबर','नवंबर','दिसंबर'],
  en:['January','February','March','April','May','June','July','August','September','October','November','December']
};
function monthLabel(monthKey){
  const [y,m] = monthKey.split('-');
  return MONTH_NAMES[LANG][+m-1] + ' ' + y;
}

const STATUS_KEYS = ['notStarted','inProgress','achieved','partial','notDone'];
const STATUS_CLASS = {notStarted:'status-not-started',inProgress:'status-in-progress',achieved:'status-achieved',partial:'status-partial',notDone:'status-not-done'};
const DEFAULT_CATEGORIES = ['categories_Sales','categories_Marketing','categories_Operations','categories_Client','categories_Admin','categories_Other'];

/* ============================================================
   BOOTSTRAP
============================================================ */
function showFatalError(err){
  const box = document.createElement('div');
  box.style.cssText = 'position:fixed;inset:0;background:#FFF3F3;color:#7A2020;padding:24px;font-family:monospace;font-size:13px;white-space:pre-wrap;overflow:auto;z-index:9999;';
  box.textContent = 'App load error:\n\n' + (err && err.stack ? err.stack : err);
  document.body.appendChild(box);
}
window.addEventListener('error', e=> showFatalError(e.error || e.message));
window.addEventListener('unhandledrejection', e=> showFatalError(e.reason));

async function boot(){
  try{
    applyStaticI18n();
    await backendReady;
    if(BACKEND === 'local'){
      const note = document.createElement('div');
      note.style.cssText = 'position:fixed;top:0;left:0;right:0;background:#FCEFE3;color:#8A4B12;text-align:center;padding:6px 10px;font-size:12.5px;z-index:60;';
      note.textContent = LANG==='hi'
        ? '⚠️ Local mode: Firebase जुड़ा नहीं है, इसलिए data सिर्फ इसी browser में सेव होगा (team के साथ share नहीं होगा)।'
        : '⚠️ Local mode: Firebase is not connected, so data is saved only in this browser (not shared with the team).';
      document.body.appendChild(note);
    }
    const existingCats = await sGet('categories');
    STATE.users = (await sGet('users')) || [];
    STATE.categories = existingCats || DEFAULT_CATEGORIES.map(k=>t(k));
    if(!existingCats){ await sSet('categories', STATE.categories); }
    wireAuthScreen();
    wireLangToggles();
    wireShell();
    refreshDebugUsers();
  }catch(err){
    showFatalError(err);
  }
}

async function refreshDebugUsers(){
  const el = document.getElementById('debugUsers');
  if(!el) return;
  const fresh = (await sGet('users')) || STATE.users || [];
  STATE.users = fresh;
  if(!fresh.length){
    el.textContent = LANG==='hi' ? 'अभी तक कोई भी register नहीं हुआ है।' : 'No one has registered yet.';
  } else {
    const names = fresh.map(u=>u.name).join(', ');
    el.textContent = (LANG==='hi' ? 'अभी तक register: ' : 'Registered so far: ') + names;
  }
}

function wireLangToggles(){
  document.querySelectorAll('.lang-toggle').forEach(group=>{
    group.querySelectorAll('button').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        LANG = btn.dataset.lang;
        applyStaticI18n();
        if(!document.getElementById('shell').classList.contains('hidden')){
          renderView();
        } else {
          refreshDebugUsers();
        }
      });
    });
  });
}

/* ============================================================
   AUTH
============================================================ */
function showAuthError(msg, isSuccess){
  const el = document.getElementById('authError');
  el.textContent = msg; el.classList.remove('hidden');
  el.classList.toggle('success', !!isSuccess);
}
function clearAuthError(){
  const el = document.getElementById('authError');
  el.classList.add('hidden'); el.classList.remove('success');
}

function wireAuthScreen(){
  document.getElementById('toSignup').addEventListener('click', ()=>{
    clearAuthError();
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('resetForm').classList.add('hidden');
    document.getElementById('signupForm').classList.remove('hidden');
  });
  document.getElementById('toLogin').addEventListener('click', ()=>{
    clearAuthError();
    document.getElementById('signupForm').classList.add('hidden');
    document.getElementById('resetForm').classList.add('hidden');
    document.getElementById('loginForm').classList.remove('hidden');
  });
  document.getElementById('toReset').addEventListener('click', ()=>{
    clearAuthError();
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('signupForm').classList.add('hidden');
    document.getElementById('resetForm').classList.remove('hidden');
    document.getElementById('resetName').value = document.getElementById('loginName').value;
  });
  document.getElementById('resetToLogin').addEventListener('click', ()=>{
    clearAuthError();
    document.getElementById('resetForm').classList.add('hidden');
    document.getElementById('loginForm').classList.remove('hidden');
  });

  document.getElementById('resetBtn').addEventListener('click', async ()=>{
    clearAuthError();
    const name = document.getElementById('resetName').value.trim();
    const pass = document.getElementById('resetPass').value.trim();
    const pass2 = document.getElementById('resetPass2').value.trim();
    if(!name || !pass || !pass2){ showAuthError(t('errorFillFields')); return; }
    if(pass !== pass2){ showAuthError(t('errorPasswordMismatch')); return; }
    STATE.users = (await sGet('users')) || STATE.users || [];
    const user = STATE.users.find(u => u.name.trim().toLowerCase() === name.toLowerCase());
    if(!user){ showAuthError(t('errorUserNotFound')); refreshDebugUsers(); return; }
    user.password = pass;
    await sSet('users', STATE.users);
    document.getElementById('resetForm').classList.add('hidden');
    document.getElementById('loginForm').classList.remove('hidden');
    document.getElementById('loginName').value = name;
    document.getElementById('loginPass').value = '';
    showAuthError(t('resetSuccess'), true);
  });

  document.getElementById('signupBtn').addEventListener('click', async ()=>{
    clearAuthError();
    const name = document.getElementById('signupName').value.trim();
    const pass = document.getElementById('signupPass').value.trim();
    const pass2 = document.getElementById('signupPass2').value.trim();
    if(!name || !pass || !pass2){ showAuthError(t('errorFillFields')); return; }
    if(pass !== pass2){ showAuthError(t('errorPasswordMismatch')); return; }
    // Always re-sync with storage right before checking, so we never work off stale data
    STATE.users = (await sGet('users')) || STATE.users || [];
    if(STATE.users.some(u => u.name.trim().toLowerCase() === name.toLowerCase())){
      showAuthError(t('errorNameExists')); return;
    }
    const role = STATE.users.length === 0 ? 'admin' : 'employee';
    const user = { id: uid(), name, password: pass, role };
    STATE.users.push(user);
    const saved = await sSet('users', STATE.users);
    if(!saved && STORAGE_AVAILABLE){
      // Real storage write failed after retries. memStore fallback inside sSet still
      // holds the data for this session — but don't silently navigate away; let the
      // person actually read/screenshot the technical reason and choose to continue.
      const msg = LANG==='hi'
        ? `⚠️ Data permanently save नहीं हो पाया (technical error: ${lastStorageError || 'unknown'}).`
        : `⚠️ Data could not be saved permanently (technical error: ${lastStorageError || 'unknown'}).`;
      showAuthError(msg);
      const oldBtn = document.getElementById('continueAnywayBtn');
      if(oldBtn) oldBtn.remove();
      const contBtn = document.createElement('button');
      contBtn.id = 'continueAnywayBtn';
      contBtn.className = 'btn btn-ghost btn-block btn-sm';
      contBtn.style.marginTop = '-6px';
      contBtn.style.marginBottom = '14px';
      contBtn.textContent = LANG==='hi' ? 'फिर भी आगे बढ़ें (सिर्फ इस session के लिए)' : 'Continue anyway (this session only)';
      contBtn.addEventListener('click', ()=> enterApp(user));
      document.getElementById('authError').insertAdjacentElement('afterend', contBtn);
      return;
    }
    enterApp(user);
  });

  document.getElementById('loginBtn').addEventListener('click', async ()=>{
    clearAuthError();
    const name = document.getElementById('loginName').value.trim();
    const pass = document.getElementById('loginPass').value.trim();
    if(!name || !pass){ showAuthError(t('errorFillFields')); return; }
    // Always re-sync with storage right before checking, so we never work off stale data
    STATE.users = (await sGet('users')) || STATE.users || [];
    const user = STATE.users.find(u => u.name.trim().toLowerCase() === name.toLowerCase() && u.password.trim() === pass);
    if(!user){ showAuthError(t('errorInvalidLogin')); refreshDebugUsers(); return; }
    enterApp(user);
  });
}

function enterApp(user){
  STATE.currentUser = { id:user.id, name:user.name, role:user.role };
  document.getElementById('authScreen').classList.add('hidden');
  document.getElementById('shell').classList.remove('hidden');
  document.getElementById('sideAvatar').textContent = user.name.trim()[0].toUpperCase();
  document.getElementById('sideName').textContent = user.name;
  document.getElementById('teamNavItem').classList.toggle('hidden', user.role !== 'admin');
  setView('dashboard');
}

function wireShell(){
  document.querySelectorAll('.nav-item').forEach(item=>{
    item.addEventListener('click', ()=> setView(item.dataset.view));
  });
  document.getElementById('logoutBtn').addEventListener('click', ()=>{
    STATE.currentUser = null;
    STATE.viewingEmployeeId = null;
    document.getElementById('shell').classList.add('hidden');
    document.getElementById('authScreen').classList.remove('hidden');
    document.getElementById('loginName').value='';
    document.getElementById('loginPass').value='';
  });
}

function setView(view){
  STATE.view = view;
  STATE.viewingEmployeeId = null;
  document.querySelectorAll('.nav-item').forEach(i=> i.classList.toggle('active', i.dataset.view===view));
  const titleKeys = {dashboard:'dashboard',daily:'dailyTodo',weekly:'weeklyTargets',monthly:'monthlyTargets',annual:'annualReview',team:'teamOverview'};
  document.getElementById('viewTitle').dataset.i18nKey = titleKeys[view];
  document.getElementById('viewTitle').textContent = t(titleKeys[view]);
  document.getElementById('sideRole').textContent = t(STATE.currentUser.role);
  renderView();
}

function renderView(){
  document.getElementById('sideRole').textContent = t(STATE.currentUser.role);
  const map = { dashboard:renderDashboard, daily:renderDaily, weekly:renderWeekly, monthly:renderMonthly, annual:renderAnnual, team:renderTeam };
  const fn = map[STATE.view] || renderDashboard;
  fn();
}

/* ============================================================
   DATA ACCESS HELPERS (per employee)
============================================================ */
async function getDailyTasks(empId, dateISO){
  return (await sGet(`emp:${empId}:daily:${dateISO}`)) || [];
}
async function setDailyTasks(empId, dateISO, tasks){
  await sSet(`emp:${empId}:daily:${dateISO}`, tasks);
}
async function getWeeklyTargets(empId, weekKey){
  return (await sGet(`emp:${empId}:weekly:${weekKey}`)) || [];
}
async function setWeeklyTargets(empId, weekKey, targets){
  await sSet(`emp:${empId}:weekly:${weekKey}`, targets);
}
async function getMonthlyTargets(empId, monthKey){
  return (await sGet(`emp:${empId}:monthly:${monthKey}`)) || [];
}
async function setMonthlyTargets(empId, monthKey, targets){
  await sSet(`emp:${empId}:monthly:${monthKey}`, targets);
}
function computeStats(targets){
  const total = targets.length;
  const achieved = targets.filter(x=>x.status==='achieved').length;
  const partial = targets.filter(x=>x.status==='partial').length;
  const notDone = targets.filter(x=>x.status==='notDone').length;
  const avgProgress = total ? Math.round(targets.reduce((s,x)=>s+(x.progress||0),0)/total) : 0;
  return {total,achieved,partial,notDone,avgProgress};
}

function activeEmpId(){
  return STATE.viewingEmployeeId || STATE.currentUser.id;
}

/* ============================================================
   DASHBOARD
============================================================ */
async function renderDashboard(){
  const c = document.getElementById('content');
  c.innerHTML = `<div id="dashLoading" style="color:var(--muted);font-size:13.5px;">…</div>`;
  const empId = STATE.currentUser.id;
  const [tasks, weekly, monthly] = await Promise.all([
    getDailyTasks(empId, todayISO()),
    getWeeklyTargets(empId, getWeekKey(new Date())),
    getMonthlyTargets(empId, getMonthKey(new Date()))
  ]);
  const doneToday = tasks.filter(x=>x.done).length;
  const wStats = computeStats(weekly);
  const mStats = computeStats(monthly);

  c.innerHTML = `
    <div class="card" style="margin-bottom:20px;">
      <div style="font-family:var(--font-display);font-size:19px;">${t('welcomeBack')}, ${escapeHtml(STATE.currentUser.name)} 👋</div>
    </div>
    <div class="grid grid-4" style="margin-bottom:28px;">
      <div class="card stat-card">
        <div class="stat-label">${t('todayTasks')}</div>
        <div class="stat-value">${tasks.length}</div>
      </div>
      <div class="card stat-card">
        <div class="stat-label">${t('completedToday')}</div>
        <div class="stat-value" style="color:var(--success);">${doneToday}</div>
      </div>
      <div class="card stat-card">
        <div class="stat-label">${t('thisWeekProgress')}</div>
        <div class="stat-value" style="color:var(--accent);">${wStats.avgProgress}%</div>
      </div>
      <div class="card stat-card">
        <div class="stat-label">${t('thisMonthProgress')}</div>
        <div class="stat-value" style="color:var(--primary);">${mStats.avgProgress}%</div>
      </div>
    </div>
    <div class="section-head"><h3>${t('todayTasks')}</h3></div>
    <div class="list">${ tasks.length ? tasks.slice(0,6).map(taskRowHtml).join('') : emptyState(t('noTasksYet')) }</div>
  `;
  wireDailyTaskEvents(empId, todayISO(), tasks, c);
}

function emptyState(msg){
  return `<div class="empty-state"><div class="e-icon">◌</div>${escapeHtml(msg)}</div>`;
}
function escapeHtml(s){
  return String(s).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
}

/* ============================================================
   DAILY TO-DO
============================================================ */
async function renderDaily(){
  const c = document.getElementById('content');
  const empId = STATE.currentUser.id;
  c.innerHTML = `
    <div class="toolbar">
      <input type="date" id="dateInput" value="${STATE.selectedDate}">
    </div>
    <div class="add-row">
      <input type="text" id="newTaskInput" placeholder="${t('taskPlaceholder')}">
      <button class="btn btn-primary" id="addTaskBtn">${t('addTask')}</button>
    </div>
    <div class="list" id="taskList"><div class="empty-state">…</div></div>
  `;
  document.getElementById('dateInput').addEventListener('change', (e)=>{
    STATE.selectedDate = e.target.value;
    renderDaily();
  });
  const tasks = await getDailyTasks(empId, STATE.selectedDate);
  const listEl = document.getElementById('taskList');
  listEl.innerHTML = tasks.length ? tasks.map(taskRowHtml).join('') : emptyState(t('noTasksYet'));
  wireDailyTaskEvents(empId, STATE.selectedDate, tasks, c);

  document.getElementById('addTaskBtn').addEventListener('click', async ()=>{
    const input = document.getElementById('newTaskInput');
    const text = input.value.trim();
    if(!text) return;
    const cur = await getDailyTasks(empId, STATE.selectedDate);
    cur.push({id:uid(), text, done:false, reason:''});
    await setDailyTasks(empId, STATE.selectedDate, cur);
    input.value='';
    renderDaily();
  });
  document.getElementById('newTaskInput').addEventListener('keydown', (e)=>{
    if(e.key==='Enter') document.getElementById('addTaskBtn').click();
  });
}

function taskRowHtml(task){
  const showReason = !task.done;
  return `
    <div class="task-row ${task.done?'done':''}" data-id="${task.id}">
      <input type="checkbox" ${task.done?'checked':''} class="task-check">
      <div class="task-text">${escapeHtml(task.text)}</div>
      <span class="tag" style="${task.done?'':'display:none;'}">${t('achieved')}</span>
      <span class="tag" style="background:var(--warn-soft);color:var(--warn);border-color:transparent;${task.done?'display:none;':''}">${t('pendingItems').split(' ')[0] || t('notDone')}</span>
      <button class="icon-btn task-del" title="${t('delete')}">✕</button>
    </div>
    ${ showReason ? `
    <div class="task-reason-row">
      <input type="text" class="task-reason-input" data-id="${task.id}" placeholder="${t('taskReasonPlaceholder')}" value="${escapeHtml(task.reason||'')}">
    </div>` : '' }`;
}
function wireDailyTaskEvents(empId, dateISO, tasksSnapshot, container){
  container.querySelectorAll('.task-check').forEach(cb=>{
    cb.addEventListener('change', async (e)=>{
      const row = e.target.closest('.task-row');
      const id = row.dataset.id;
      const cur = await getDailyTasks(empId, dateISO);
      const item = cur.find(x=>x.id===id);
      if(item){ item.done = e.target.checked; await setDailyTasks(empId, dateISO, cur); }
      if(STATE.view==='dashboard') renderDashboard(); else if(STATE.view==='daily') renderDaily();
    });
  });
  container.querySelectorAll('.task-del').forEach(btn=>{
    btn.addEventListener('click', async (e)=>{
      const row = e.target.closest('.task-row');
      const id = row.dataset.id;
      const cur = await getDailyTasks(empId, dateISO);
      const next = cur.filter(x=>x.id!==id);
      await setDailyTasks(empId, dateISO, next);
      if(STATE.view==='dashboard') renderDashboard(); else if(STATE.view==='daily') renderDaily();
    });
  });
  container.querySelectorAll('.task-reason-input').forEach(inp=>{
    inp.addEventListener('change', async (e)=>{
      const id = e.target.dataset.id;
      const cur = await getDailyTasks(empId, dateISO);
      const item = cur.find(x=>x.id===id);
      if(item){ item.reason = e.target.value; await setDailyTasks(empId, dateISO, cur); }
    });
  });
}

/* ============================================================
   WEEKLY & MONTHLY TARGETS (shared renderer)
============================================================ */
async function renderWeekly(){ await renderTargetsView('weekly'); }
async function renderMonthly(){ await renderTargetsView('monthly'); }

async function renderTargetsView(kind){
  const c = document.getElementById('content');
  const empId = activeEmpId();
  const isWeekly = kind === 'weekly';
  const periodKey = isWeekly ? STATE.selectedWeek : STATE.selectedMonth;
  const periodLabel = isWeekly ? (t('weekLabel')+' '+STATE.selectedWeek.split('-W')[1]+' · '+weekRangeLabel(STATE.selectedWeek)) : monthLabel(STATE.selectedMonth);

  const backLink = STATE.viewingEmployeeId ? `<div class="back-link" id="backToTeamBtn">← ${t('backToTeam')}</div>` : '';

  c.innerHTML = `
    ${backLink}
    <div class="toolbar">
      <button class="btn btn-ghost btn-sm" id="periodPrev">‹</button>
      <div class="card" style="padding:8px 14px;font-weight:600;font-size:13.5px;">${periodLabel}</div>
      <button class="btn btn-ghost btn-sm" id="periodNext">›</button>
      <button class="btn btn-ghost btn-sm" id="periodToday">${t('today')}</button>
    </div>
    ${ STATE.viewingEmployeeId ? '' : `
    <div class="add-row">
      <input type="text" id="newTargetInput" placeholder="${t('targetPlaceholder')}">
      <select id="newTargetCategory">${STATE.categories.map(cat=>`<option value="${escapeHtml(cat)}">${escapeHtml(cat)}</option>`).join('')}</select>
      <button class="btn btn-accent" id="addTargetBtn">${t('addTarget')}</button>
      <button class="btn btn-ghost" id="addCatBtn">${t('addCategory')}</button>
    </div>`}
    <div class="list" id="targetList"><div class="empty-state">…</div></div>
  `;

  if(backLink){
    document.getElementById('backToTeamBtn').addEventListener('click', ()=>{ STATE.viewingEmployeeId=null; setView('team'); });
  }

  document.getElementById('periodPrev').addEventListener('click', ()=> shiftPeriod(kind,-1));
  document.getElementById('periodNext').addEventListener('click', ()=> shiftPeriod(kind,1));
  document.getElementById('periodToday').addEventListener('click', ()=>{
    if(isWeekly) STATE.selectedWeek = getWeekKey(new Date()); else STATE.selectedMonth = getMonthKey(new Date());
    renderTargetsView(kind);
  });

  const getFn = isWeekly ? getWeeklyTargets : getMonthlyTargets;
  const setFn = isWeekly ? setWeeklyTargets : setMonthlyTargets;
  const targets = await getFn(empId, periodKey);
  const listEl = document.getElementById('targetList');
  listEl.innerHTML = targets.length ? targets.map(targetCardHtml).join('') : emptyState(t('noTargetsYet'));
  wireTargetEvents(empId, periodKey, setFn, getFn, kind);

  if(!STATE.viewingEmployeeId){
    document.getElementById('addTargetBtn').addEventListener('click', async ()=>{
      const input = document.getElementById('newTargetInput');
      const text = input.value.trim();
      const cat = document.getElementById('newTargetCategory').value;
      if(!text) return;
      const cur = await getFn(empId, periodKey);
      cur.push({id:uid(), title:text, category:cat, status:'notStarted', progress:0, reason:''});
      await setFn(empId, periodKey, cur);
      input.value='';
      renderTargetsView(kind);
    });
    document.getElementById('newTargetInput').addEventListener('keydown', e=>{
      if(e.key==='Enter') document.getElementById('addTargetBtn').click();
    });
    document.getElementById('addCatBtn').addEventListener('click', async ()=>{
      const name = prompt(t('newCategoryPlaceholder'));
      if(name && name.trim() && !STATE.categories.includes(name.trim())){
        STATE.categories.push(name.trim());
        await sSet('categories', STATE.categories);
        renderTargetsView(kind);
      }
    });
  }
}

function shiftPeriod(kind, dir){
  if(kind==='weekly'){
    const [y,w] = STATE.selectedWeek.split('-W');
    const base = new Date(Date.UTC(+y,0,1+(+w-1)*7));
    base.setUTCDate(base.getUTCDate() + dir*7);
    STATE.selectedWeek = getWeekKey(base);
  } else {
    let [y,m] = STATE.selectedMonth.split('-').map(Number);
    m += dir;
    if(m<1){m=12;y--;} if(m>12){m=1;y++;}
    STATE.selectedMonth = y+'-'+pad(m);
  }
  renderTargetsView(kind);
}

function targetCardHtml(target){
  const readOnly = !!STATE.viewingEmployeeId;
  return `
    <div class="target-card" data-id="${target.id}">
      <div class="target-top">
        <div>
          <div class="target-title">${escapeHtml(target.title)}</div>
          <span class="tag">${escapeHtml(target.category||'')}</span>
        </div>
        ${readOnly ? '' : `<div class="target-actions">
          <button class="icon-btn tgt-del" title="${t('delete')}">✕</button>
        </div>`}
      </div>
      <div class="target-controls">
        ${readOnly
          ? `<span class="status-pill ${STATUS_CLASS[target.status]}">${t(target.status)}</span>`
          : `<select class="status-select">${STATUS_KEYS.map(k=>`<option value="${k}" ${k===target.status?'selected':''}>${t(k)}</option>`).join('')}</select>`
        }
        <div class="progress-bar-track"><div class="progress-bar-fill" style="width:${target.progress||0}%"></div></div>
        ${readOnly
          ? `<span class="progress-pct">${target.progress||0}%</span>`
          : `<input type="range" min="0" max="100" value="${target.progress||0}" class="progress-range" style="width:90px;"><span class="progress-pct pct-live">${target.progress||0}%</span>`
        }
      </div>
      ${ (target.status==='partial' || target.status==='notDone') ? `
      <div class="reason-block">
        <label class="reason-label">${t('reason')}</label>
        ${ readOnly
            ? `<div class="reason-text">${target.reason ? escapeHtml(target.reason) : `<span class="muted-italic">${t('noReasonGiven')}</span>`}</div>`
            : `<textarea class="reason-input" rows="2" placeholder="${t('reasonPlaceholder')}">${escapeHtml(target.reason||'')}</textarea>`
        }
      </div>` : '' }
    </div>`;
}

function wireTargetEvents(empId, periodKey, setFn, getFn, kind){
  const container = document.getElementById('targetList');
  if(STATE.viewingEmployeeId) return; // read-only in team drill-in
  container.querySelectorAll('.tgt-del').forEach(btn=>{
    btn.addEventListener('click', async e=>{
      const id = e.target.closest('.target-card').dataset.id;
      const cur = await getFn(empId, periodKey);
      await setFn(empId, periodKey, cur.filter(x=>x.id!==id));
      renderTargetsView(kind);
    });
  });
  container.querySelectorAll('.status-select').forEach(sel=>{
    sel.addEventListener('change', async e=>{
      const id = e.target.closest('.target-card').dataset.id;
      const cur = await getFn(empId, periodKey);
      const item = cur.find(x=>x.id===id);
      if(item){
        item.status = e.target.value;
        if(item.status==='achieved') item.progress = 100;
        if(item.status==='notDone') item.progress = 0;
        await setFn(empId, periodKey, cur);
      }
      renderTargetsView(kind);
    });
  });
  container.querySelectorAll('.progress-range').forEach(range=>{
    range.addEventListener('input', e=>{
      const card = e.target.closest('.target-card');
      card.querySelector('.progress-bar-fill').style.width = e.target.value+'%';
      card.querySelector('.pct-live').textContent = e.target.value+'%';
    });
    range.addEventListener('change', async e=>{
      const id = e.target.closest('.target-card').dataset.id;
      const cur = await getFn(empId, periodKey);
      const item = cur.find(x=>x.id===id);
      if(item){ item.progress = +e.target.value; await setFn(empId, periodKey, cur); }
    });
  });
  container.querySelectorAll('.reason-input').forEach(ta=>{
    ta.addEventListener('change', async e=>{
      const id = e.target.closest('.target-card').dataset.id;
      const cur = await getFn(empId, periodKey);
      const item = cur.find(x=>x.id===id);
      if(item){ item.reason = e.target.value; await setFn(empId, periodKey, cur); }
    });
  });
}

/* ============================================================
   ANNUAL REVIEW
============================================================ */
async function renderAnnual(){
  const c = document.getElementById('content');
  const empId = activeEmpId();
  const backLink = STATE.viewingEmployeeId ? `<div class="back-link" id="backToTeamBtn">← ${t('backToTeam')}</div>` : '';
  c.innerHTML = `
    ${backLink}
    <div class="toolbar">
      <button class="btn btn-ghost btn-sm" id="yearPrev">‹</button>
      <div class="card" style="padding:8px 14px;font-weight:600;font-size:13.5px;">${STATE.selectedYear}</div>
      <button class="btn btn-ghost btn-sm" id="yearNext">›</button>
    </div>
    <div id="annualBody"><div class="empty-state">…</div></div>
  `;
  if(backLink){
    document.getElementById('backToTeamBtn').addEventListener('click', ()=>{ STATE.viewingEmployeeId=null; setView('team'); });
  }
  document.getElementById('yearPrev').addEventListener('click', ()=>{ STATE.selectedYear--; renderAnnual(); });
  document.getElementById('yearNext').addEventListener('click', ()=>{ STATE.selectedYear++; renderAnnual(); });

  const months = [];
  for(let m=1;m<=12;m++){
    const key = STATE.selectedYear+'-'+pad(m);
    const targets = await getMonthlyTargets(empId, key);
    months.push({key, targets, stats: computeStats(targets)});
  }
  const yearTotalTargets = months.reduce((s,x)=>s+x.stats.total,0);
  const yearAchieved = months.reduce((s,x)=>s+x.stats.achieved,0);
  const yearPartial = months.reduce((s,x)=>s+x.stats.partial,0);
  const yearNotDone = months.reduce((s,x)=>s+x.stats.notDone,0);
  const yearAvg = months.filter(x=>x.stats.total).length
    ? Math.round(months.reduce((s,x)=>s+ (x.stats.total?x.stats.avgProgress:0),0) / (months.filter(x=>x.stats.total).length))
    : 0;

  const body = document.getElementById('annualBody');
  body.innerHTML = `
    <div class="grid grid-4" style="margin-bottom:24px;">
      <div class="card stat-card"><div class="stat-label">${t('overallAchievement')}</div><div class="stat-value">${yearAvg}%</div></div>
      <div class="card stat-card"><div class="stat-label">${t('achievedCount')}</div><div class="stat-value" style="color:var(--success);">${yearAchieved}</div></div>
      <div class="card stat-card"><div class="stat-label">${t('partialCount')}</div><div class="stat-value" style="color:var(--accent);">${yearPartial}</div></div>
      <div class="card stat-card"><div class="stat-label">${t('notDoneCount')}</div><div class="stat-value" style="color:var(--danger);">${yearNotDone}</div></div>
    </div>
    ${months.map((mo,idx) => {
      const pct = mo.stats.total ? mo.stats.avgProgress : 0;
      const stampClass = pct>=70 ? 'high' : pct>=40 ? 'mid' : 'low';
      const pendingItems = mo.targets.filter(x=> x.status==='partial' || x.status==='notDone');
      return `
      <div class="month-block" style="flex-direction:column;align-items:stretch;">
        <div style="display:flex;gap:18px;align-items:center;">
          <div class="stamp ${stampClass}">
            <div class="stamp-pct">${mo.stats.total? pct+'%':'—'}</div>
            <div class="stamp-label">${mo.stats.total? t('achieved') : ''}</div>
          </div>
          <div class="month-info">
            <h4>${monthLabel(mo.key)}</h4>
            <div class="month-stats">
              <span><b>${mo.stats.total}</b> ${t('monthTargets').toLowerCase()}</span>
              <span style="color:var(--success);"><b>${mo.stats.achieved}</b> ${t('achievedCount')}</span>
              <span style="color:var(--accent);"><b>${mo.stats.partial}</b> ${t('partialCount')}</span>
              <span style="color:var(--danger);"><b>${mo.stats.notDone}</b> ${t('notDoneCount')}</span>
            </div>
            ${ pendingItems.length ? `<div class="back-link reasons-toggle" data-idx="${idx}" style="margin:8px 0 0;">${t('viewReasons')} (${pendingItems.length})</div>` : '' }
          </div>
        </div>
        ${ pendingItems.length ? `
        <div class="reasons-panel hidden" id="reasonsPanel-${idx}" style="margin-top:12px;padding-top:12px;border-top:1px dashed var(--border);display:flex;flex-direction:column;gap:8px;">
          ${pendingItems.map(pi => `
            <div>
              <div style="font-size:13.5px;font-weight:600;">${escapeHtml(pi.title)} <span class="tag">${escapeHtml(pi.category||'')}</span> <span class="status-pill ${STATUS_CLASS[pi.status]}">${t(pi.status)}</span></div>
              <div class="reason-text" style="margin-top:4px;">${pi.reason ? escapeHtml(pi.reason) : `<span class="muted-italic">${t('noReasonGiven')}</span>`}</div>
            </div>
          `).join('')}
        </div>` : ''}
      </div>`;
    }).join('')}
  `;
  body.querySelectorAll('.reasons-toggle').forEach(tgl=>{
    tgl.addEventListener('click', ()=>{
      const panel = document.getElementById('reasonsPanel-'+tgl.dataset.idx);
      if(panel) panel.classList.toggle('hidden');
    });
  });
}

/* ============================================================
   TEAM OVERVIEW (admin only)
============================================================ */
async function renderTeam(){
  const c = document.getElementById('content');
  c.innerHTML = `<div class="list" id="teamList"><div class="empty-state">…</div></div>`;
  // Re-fetch fresh from storage so newly signed-up employees always show up
  const freshUsers = await sGet('users');
  if(freshUsers) STATE.users = freshUsers;
  const employees = STATE.users;
  const headEl = document.createElement('div');
  headEl.className = 'section-head';
  headEl.innerHTML = `<h3>${t('allEmployees')} (${employees.length})</h3>`;
  c.prepend(headEl);
  if(!employees.length){
    document.getElementById('teamList').innerHTML = emptyState(t('noEmployeesYet'));
    return;
  }
  const rows = [];
  for(const u of employees){
    const monthKey = getMonthKey(new Date());
    const targets = await getMonthlyTargets(u.id, monthKey);
    const stats = computeStats(targets);
    rows.push({u, pct: stats.total ? stats.avgProgress : 0});
  }
  const listEl = document.getElementById('teamList');
  listEl.innerHTML = rows.map(r => `
    <div class="team-row" data-id="${r.u.id}">
      <div class="user-avatar">${escapeHtml(r.u.name.trim()[0].toUpperCase())}</div>
      <div>
        <div class="t-name">${escapeHtml(r.u.name)}</div>
        <div class="t-role">${t(r.u.role)}</div>
      </div>
      <div class="t-bar progress-bar-track"><div class="progress-bar-fill" style="width:${r.pct}%"></div></div>
      <div class="t-pct">${r.pct}%</div>
      <button class="btn btn-ghost btn-sm team-reset-btn" data-id="${r.u.id}" data-name="${escapeHtml(r.u.name)}">${t('adminResetPassword')}</button>
    </div>
  `).join('');
  listEl.querySelectorAll('.team-reset-btn').forEach(btn=>{
    btn.addEventListener('click', async (e)=>{
      e.stopPropagation();
      const id = btn.dataset.id;
      const name = btn.dataset.name;
      const newPass = prompt(t('adminResetPrompt') + ' (' + name + ')');
      if(!newPass || !newPass.trim()) return;
      const fresh = (await sGet('users')) || STATE.users || [];
      const user = fresh.find(u=>u.id===id);
      if(user){ user.password = newPass.trim(); await sSet('users', fresh); STATE.users = fresh; alert(t('adminResetSuccess')); }
    });
  });
  listEl.querySelectorAll('.team-row').forEach(row=>{
    row.addEventListener('click', (e)=>{
      if(e.target.closest('.team-reset-btn')) return;
      STATE.viewingEmployeeId = row.dataset.id;
      STATE.view = 'annual';
      document.getElementById('viewTitle').textContent = t('annualReview');
      renderAnnual();
    });
  });
}

/* ============================================================
   INIT
============================================================ */
boot();
