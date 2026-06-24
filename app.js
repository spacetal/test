const qa = [
  {
    q: "קפיטריה",
    a: "פנה לאיגור 5555T או בדוק בפורטל את כרטיס האוכל והחדר אוכל.",
  },
  {
    q: "כרטיס",
    a: "את כרטיס האוכל מקבלים אצל שושי, ולאחר מכן מטעינים בקפיטריה.",
  },
  {
    q: "ציוד",
    a: "המחשב והמסך נמצאים בטיפול ב-Airnow, הטלפון ב-Airflow. ניתן לפתוח כל בקשה דרך הקישורים הדמיים.",
  },
  {
    q: "תג",
    a: "תג עובד יונפק לאחר אישור כניסה וחתימת ביטחון. עד אז יופק אישור כניסה זמני.",
  },
  {
    q: "איש קשר",
    a: "המנהל המגייס, HR, ביטחון והחונך המקצועי יהיו זמינים עבורך דרך הפורטל.",
  },
  {
    q: "הדרכה",
    a: "מסלול ההדרכה האישי נמצא במסך Productivity וכולל קישורים למערכות ולהדרכות חובה.",
  },
];
const documents = [
  {
    id: "DOC-001",
    title: "טופס קליטת עובד חדש",
    category: "HR",
    required: true,
    status: "ממתין למילוי",
    due: "23/06/2026",
    link: "#/documents/DOC-001",
  },
  {
    id: "DOC-002",
    title: "טופס הדרכת בטיחות",
    category: "Safety",
    required: true,
    status: "ממתין לחתימה",
    due: "24/06/2026",
    link: "#/documents/DOC-002",
  },
  {
    id: "DOC-003",
    title: "אישור כניסה זמני",
    category: "Security",
    required: true,
    status: "בטיפול",
    due: "24/06/2026",
    link: "#/documents/DOC-003",
  },
  {
    id: "DOC-004",
    title: "אישור פרטי ספק / כתובת",
    category: "HR",
    required: true,
    status: "ממתין למילוי",
    due: "22/06/2026",
    link: "#/documents/DOC-004",
  },
  {
    id: "DOC-005",
    title: "פורמט תכנית חניכה והכשרה",
    category: "Training",
    required: false,
    status: "זמין",
    due: "26/06/2026",
    link: "#/documents/DOC-005",
  },
];
const requests = [
  {
    source: "ActiveOne",
    requestId: "AO-10234",
    label: "פתיחת יוזר פנימי",
    owner: "IT / ActiveOne",
    status: "ממתין לחתימת קב״ט",
    link: "#/integrations/activeone/AO-10234",
  },
  {
    source: "Airflow",
    requestId: "AF-78112",
    label: "טלפוניה וקו פעיל",
    owner: "טלפוניה",
    status: "נפתח",
    link: "#/integrations/airflow/AF-78112",
  },
  {
    source: "Airnow",
    requestId: "AN-88421",
    label: "התקנת מחשב פנימי",
    owner: "לוגיסטיקה / מחשוב",
    status: "בטיפול",
    link: "#/integrations/airnow/AN-88421",
  },
  {
    source: "NOW",
    requestId: "SN-14455",
    label: "הרשאת NOW",
    owner: "IT",
    status: "ממתין",
    link: "#/integrations/now/SN-14455",
  },
  {
    source: "ActiveOne",
    requestId: "AO-10236",
    label: "סבב חתימות HR / מנהל / קב״ט",
    owner: "HR",
    status: "בתהליך",
    link: "#/integrations/activeone/AO-10236",
  },
  {
    source: "Security",
    requestId: "SEC-5512",
    label: "אישור כניסה זמני",
    owner: "ביטחון",
    status: "ממתין",
    link: "#/integrations/security/SEC-5512",
  },
];
const rolesMap = {
  mis: {
    label: "מיישמת מערכות / SAP",
    systems: ["בינה", "NOW", "FTS", "SAP MRC", "SAP PORTAL"],
    recommendedEquipment: ["מחשב", "מסך", "אוזניות", "טלפון"],
    workflow: [
      {
        name: "פתיחת עובד",
        owner: "מנהל מגייס",
        due: "היום",
        system: "Airflow-one",
        notes: "פתיחת תהליך onboarding",
        status: "ממתין",
        blocker: "-",
        requestId: "AF-1001",
        requestLink: "#/request/AF-1001",
      },
      {
        name: "ביטחון ואישור כניסה",
        owner: "ביטחון",
        due: "יומיים",
        system: "ActiveOne / Security",
        notes: "חתימת קב״ט + אישור כניסה + תג זמני",
        status: "ממתין לאישור",
        blocker: "ממתין לחתימת קב״ט",
        requestId: "AO-10234",
        requestLink: "#/integrations/activeone/AO-10234",
      },
      {
        name: "הרשאות למערכות",
        owner: "IT",
        due: "שלושה ימים",
        system: "ActiveOne / NOW / SAP",
        notes: "יוזר פנימי, חיצוני והרשאות SAP/CRM",
        status: "ממתין",
        blocker: "טרם נפתח יוזר פנימי",
        requestId: "SN-14455",
        requestLink: "#/integrations/now/SN-14455",
      },
      {
        name: "ציוד ולוגיסטיקה",
        owner: "לוגיסטיקה",
        due: "יומיים",
        system: "Airnow / Airflow",
        notes: "מחשב, מסך, טלפון ואוזניות",
        status: "ממתין",
        blocker: "טלפון טרם סופק",
        requestId: "AN-88421",
        requestLink: "#/integrations/airnow/AN-88421",
      },
      {
        name: "חניכה והכשרה",
        owner: "HR / מנהל",
        due: "יום לפני התחלה",
        system: "Airflow-one",
        notes: "מינוי חונך מקצועי וחברתי + תכנית הכשרה",
        status: "ממתין",
        blocker: "חונך מקצועי טרם מונה",
        requestId: "TR-2201",
        requestLink: "#/training/TR-2201",
      },
      {
        name: "קהילות",
        owner: "HR / מנהל",
        due: "יום לפני התחלה",
        system: "Airflow-one",
        notes: "שיבוץ העובדת לקהילות רלוונטיות והיכרות עם ערוצי שיתוף",
        status: "ממתין",
        blocker: "קהילות רלוונטיות טרם הוגדרו",
        requestId: "CM-2301",
        requestLink: "#/communities/CM-2301",
      },
      {
        name: "נהלי עובד",
        owner: "HR",
        due: "יום לפני התחלה",
        system: "Airflow-one",
        notes: "חשיפה לנהלים, מדיניות והנחיות עובד",
        status: "ממתין",
        blocker: "נהלי עובד טרם נשלחו לעיון",
        requestId: "PL-2401",
        requestLink: "#/policies/PL-2401",
      },
      {
        name: "Day 1 to Full Productivity",
        owner: "מנהל ישיר",
        due: "30 יום",
        system: "Airflow-one",
        notes: "מעקב עד תפקוד מלא",
        status: "ממתין",
        blocker: "Access + training incomplete",
        requestId: "FP-3101",
        requestLink: "#/productivity/FP-3101",
      },
    ],
    hint: "לתפקיד זה מוצגות מערכות SAP / NOW / CRM ונפתחות בקשות הרשאה, ציוד, מסמכים והדרכות מתאימות.",
  },
  prod: {
    label: "עובדת בפס ייצור",
    systems: [],
    recommendedEquipment: ["כסא", "שולחן"],
    workflow: [
      {
        name: "פתיחת עובד",
        owner: "מנהל מגייס",
        due: "היום",
        system: "Airflow-one",
        notes: "פתיחת תהליך onboarding",
        status: "ממתין",
        blocker: "-",
        requestId: "AF-1002",
        requestLink: "#/request/AF-1002",
      },
      {
        name: "ביטחון ואישור כניסה",
        owner: "ביטחון",
        due: "יומיים",
        system: "ActiveOne / Security",
        notes: "אישור כניסה ותג עובד",
        status: "ממתין לאישור",
        blocker: "ממתין לחתימת ביטחון",
        requestId: "AO-10235",
        requestLink: "#/integrations/activeone/AO-10235",
      },
      {
        name: "ציוד ולוגיסטיקה",
        owner: "לוגיסטיקה",
        due: "יומיים",
        system: "Airnow",
        notes: "שולחן, כסא וציוד נלווה",
        status: "ממתין",
        blocker: "טרם נפתחה בקשת תחנה",
        requestId: "AN-88431",
        requestLink: "#/integrations/airnow/AN-88431",
      },
      {
        name: "בטיחות והדרכה תפעולית",
        owner: "תפעול / בטיחות",
        due: "יום לפני התחלה",
        system: "Training",
        notes: "הדרכת בטיחות ותפעול בסיסי",
        status: "ממתין",
        blocker: "טופס בטיחות חסר",
        requestId: "TR-2211",
        requestLink: "#/training/TR-2211",
      },
      {
        name: "Day 1 to Full Productivity",
        owner: "מנהל קו",
        due: "21 יום",
        system: "Airflow-one",
        notes: "קליטה מלאה לתחנה",
        status: "ממתין",
        blocker: "הדרכה תפעולית טרם הושלמה",
        requestId: "FP-3111",
        requestLink: "#/productivity/FP-3111",
      },
    ],
    hint: "לתפקיד זה לא מוצגות מערכות IT מרכזיות, והדגש הוא על ציוד, בטיחות, אישור כניסה והדרכה תפעולית.",
  },
};
let selectedSystems = [],
  selectedEquipment = [],
  workflow = [],
  isStory = false,
  storyIdx = 0,
  storyTimer = null,
  securityMailSent = false,
  authorizationRequestOpened = false;
const storyScenes = [
  [
    "dashboard",
    "ברוכים הבאים ל-Airflow-one – שכבת Orchestration שמאחדת מערכות, מסמכים, בקשות והדרכות לחוויית עובד אחת.",
  ],
  [
    "manager",
    "המסע מתחיל אצל המנהל: דנה כהן כבר נטענה עם המסמכים, ה-Routing למערכות היעד והמלצות ה-AI.",
  ],
  [
    "manager",
    "נפתח מייל לביטחון ופניית הרשאות – והמערכת שומרת קישורים דמיים לכל בקשה במערכות הקצה.",
  ],
  [
    "workflow",
    "במסך ה-Workflow המנהל רואה owner, blocker, requestId וקישור לכל בקשה. זו בקרה מלאה בלי לרדוף אחרי מערכות.",
  ],
  [
    "employee",
    "בפורטל העובדת דנה מקבלת מעטפת מחבקת: ציוד, מערכות, מסמכים, הדרכות והצעד הבא עד Full Productivity.",
  ],
  [
    "productivity",
    "לבסוף, Day 1 to Full Productivity מסכם את המוכנות והחסרים – ומאפשר ניהול רציף גם עד ליציאה מסודרת במידת הצורך.",
  ],
];
const avatarPhotoPools = {
  employee: Array.from(
    { length: 12 },
    (_, idx) => `https://randomuser.me/api/portraits/women/${30 + idx}.jpg`,
  ),
  manager: Array.from(
    { length: 12 },
    (_, idx) => `https://randomuser.me/api/portraits/men/${40 + idx}.jpg`,
  ),
};
const avatarPhotoSelection = {
  employee:
    avatarPhotoPools.employee[
      Math.floor(Math.random() * avatarPhotoPools.employee.length)
    ],
  manager:
    avatarPhotoPools.manager[
      Math.floor(Math.random() * avatarPhotoPools.manager.length)
    ],
};
function qs(s) {
  return document.querySelector(s);
}
function qsa(s) {
  return Array.from(document.querySelectorAll(s));
}
function updateStoryPanel(text, step, progress) {
  const storyText = qs("#storyText");
  const storyStep = qs("#storyStep");
  const storyProgressBar = qs("#storyProgressBar");

  if (storyText && text !== undefined) storyText.innerText = text;
  if (storyStep && step !== undefined) storyStep.innerText = step;
  if (storyProgressBar && progress !== undefined)
    storyProgressBar.style.width = progress;
}
function buildAvatarFallback(initial) {
  return (
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop stop-color='%2355c9ff'/%3E%3Cstop offset='1' stop-color='%2329d17f'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='120' height='120' rx='60' fill='url(%23g)'/%3E%3Ctext x='60' y='70' font-size='46' text-anchor='middle' fill='white' font-family='Segoe UI, Arial, sans-serif'%3E" +
    encodeURIComponent(initial) +
    "%3C/text%3E%3C/svg%3E"
  );
}
function assignRoleAvatars() {
  qsa("[data-avatar-role]").forEach((avatar) => {
    const role = avatar.dataset.avatarRole;
    const initial = avatar.dataset.avatarInitial || "?";
    const status = avatar.querySelector(".avatar-status");
    const photo = document.createElement("img");

    photo.className = "avatar-photo";
    photo.alt = avatar.getAttribute("aria-label") || "תמונת פרופיל";
    photo.referrerPolicy = "no-referrer";
    photo.src = avatarPhotoSelection[role] || buildAvatarFallback(initial);
    photo.onerror = () => {
      photo.onerror = null;
      photo.src = buildAvatarFallback(initial);
    };

    avatar.textContent = "";
    avatar.appendChild(photo);
    if (status) avatar.appendChild(status);
  });
}
function getSelectedRole() {
  return qs("#roleSelect").value;
}
function currentRole() {
  return rolesMap[getSelectedRole()] || null;
}
function roleLabel() {
  const role = currentRole();
  return role ? role.label : "--";
}
function go(key) {
  qsa(".screen").forEach((el) => el.classList.remove("active"));
  qs("#" + key).classList.add("active");
  qsa(".nav-btn").forEach((el) => el.classList.remove("active"));
  const btn = qs("#side-" + key);
  if (btn) btn.classList.add("active");
  update();
}
function mapStatusClass(status) {
  if (status === "הושלם") return "done";
  if (status === "בתהליך" || status === "ממתין לאישור") return "ready";
  if (
    status === "תקוע" ||
    status === "נכשל" ||
    status === "נדחה" ||
    status === "חסר ציוד"
  )
    return "blocked";
  return "pending";
}
function renderSystemsForRole() {
  const box = qs("#systemsPool");
  box.innerHTML = "";
  selectedSystems = [];
  const role = currentRole();
  const systems = role?.systems || [];
  if (!role) {
    box.innerHTML =
      '<div class="empty-state">בחרי תפקיד כדי להציג מערכות רלוונטיות</div>';
    updateSystemsSummary();
    return;
  }
  if (!systems.length) {
    box.innerHTML =
      '<div class="empty-state">אין מערכות רלוונטיות לתפקיד זה</div>';
    updateSystemsSummary();
    return;
  }
  systems.forEach((s) => {
    const label = document.createElement("label");
    label.className = "choice";
    label.innerHTML = `<input type="checkbox" value="${s}"> ${s}`;
    label.querySelector("input").addEventListener("change", toggleSystem);
    box.appendChild(label);
  });
  updateSystemsSummary();
}
function updateSystemsSummary() {
  qs("#systemsSummary").innerText = selectedSystems.length
    ? `נבחרו מערכות: ${selectedSystems.join(" | ")}`
    : "לא נבחרו עדיין מערכות";
}
function updateEquipmentSummary() {
  qs("#equipmentSummary").innerText = selectedEquipment.length
    ? `נבחר ציוד: ${selectedEquipment.join(" | ")}`
    : "לא נבחר עדיין ציוד";
}
function applyEquipmentRecommendation() {
  const role = currentRole();
  selectedEquipment = role ? [...role.recommendedEquipment] : [];
  qsa(".equipment-pool input").forEach(
    (cb) => (cb.checked = selectedEquipment.includes(cb.value)),
  );
  updateEquipmentSummary();
}
function toggleSystem(e) {
  const cb = e.target || e;
  if (cb.checked) {
    if (!selectedSystems.includes(cb.value)) selectedSystems.push(cb.value);
  } else {
    selectedSystems = selectedSystems.filter((x) => x !== cb.value);
  }
  updateSystemsSummary();
  update();
}
function toggleEquipment(e) {
  const cb = e.target || e;
  if (cb.checked) {
    if (!selectedEquipment.includes(cb.value)) selectedEquipment.push(cb.value);
  } else {
    selectedEquipment = selectedEquipment.filter((x) => x !== cb.value);
  }
  updateEquipmentSummary();
  update();
}
function renderDocuments() {
  const docsHtml = documents
    .map(
      (doc) =>
        `<div class="card"><div class="kicker">${doc.category}</div><strong>${doc.title}</strong><div class="meta">חובה: ${doc.required ? "כן" : "לא"} | יעד: ${doc.due}</div><div class="meta">סטטוס: ${doc.status}</div><div style="margin-top:10px"><a class="link" href="${doc.link}">פתח מסמך</a></div></div>`,
    )
    .join("");
  qs("#docsBox").innerHTML = docsHtml;
  qs("#documentsCenter").innerHTML = docsHtml;
  qs("#employeeDocs").innerHTML = documents
    .slice(0, 3)
    .map(
      (doc) =>
        `<div class="meta"><a class="link" href="${doc.link}">${doc.title}</a> – ${doc.status}</div>`,
    )
    .join("");
}
function renderRequests() {
  qs("#requestsBox").innerHTML = requests
    .map(
      (req) =>
        `<div class="card"><div class="kicker">${req.source}</div><strong>${req.label}</strong><div class="meta">Request ID: ${req.requestId}</div><div class="meta">Owner: ${req.owner}</div><div class="meta">סטטוס: ${req.status}</div><div style="margin-top:10px"><a class="link" href="${req.link}">פתח בקשה</a></div></div>`,
    )
    .join("");
}
function renderActivity() {
  const activity = [
    {
      name: "פתיחת הרשאות במערכת",
      owner: "צוות IT",
      progress: "60%",
      blocker: "ממתין לאישור אבטחת מידע",
      status: "בתהליך",
      link: "#/integrations/now/SN-14455",
    },
    {
      name: "הכנת ציוד לעובדת",
      owner: "לוגיסטיקה",
      progress: "80%",
      blocker: "טלפון טרם סופק",
      status: "ממתין",
      link: "#/integrations/airnow/AN-88421",
    },
    {
      name: "אישור כניסה ותג עובד",
      owner: "מחלקת ביטחון",
      progress: "40%",
      blocker: "טרם הושלם אישור כניסה",
      status: "ממתין לאישור",
      link: "#/integrations/security/SEC-5512",
    },
    {
      name: "מסמכי HR",
      owner: "משאבי אנוש",
      progress: "50%",
      blocker: "פרטי ספק טרם מולאו",
      status: "בתהליך",
      link: "#/documents/DOC-004",
    },
  ];
  qs("#activityBox").innerHTML = activity
    .map(
      (a) =>
        `<div class="activity-row"><div><strong>${a.name}</strong><div class="meta">Owner: ${a.owner} | אחוז ביצוע: ${a.progress}</div><div class="meta">Blocker: ${a.blocker}</div><div class="meta"><a class="link" href="${a.link}">פתח קישור קשור</a></div></div><span class="status ${mapStatusClass(a.status)}">${a.status}</span></div>`,
    )
    .join("");
}
function renderIntegrations() {
  const integrations = [
    [
      "ActiveOne",
      "Connected",
      "2 בקשות פתוחות",
      "חתימות, יוזרים, עמדות עבודה וריהוט",
      "#/integrations/activeone",
    ],
    [
      "Airflow",
      "Connected",
      "1 בקשה פתוחה",
      "טלפוניה, בקשות שוטפות ויוזרים חיצוניים",
      "#/integrations/airflow",
    ],
    [
      "Airnow",
      "Connected",
      "1 בקשה פתוחה",
      "מחשבים, חיבורים ותשתית קצה",
      "#/integrations/airnow",
    ],
    [
      "NOW",
      "Connected",
      "1 בקשה פתוחה",
      "קריאות IT והרשאות",
      "#/integrations/now",
    ],
    [
      "SAP",
      "Connected",
      "הרשאות בבדיקה",
      "גישה למערכות SAP",
      "#/integrations/sap",
    ],
    ["CRM", "Connected", "ממתין לאישור", "גישה ל-CRM", "#/integrations/crm"],
    [
      "Security",
      securityMailSent ? "Connected" : "Pending",
      "אישור כניסה זמני",
      "תדרוך, אישורי כניסה ותג עובד",
      "#/integrations/security",
    ],
    [
      "SAP PORTAL",
      "Connected",
      "Ready",
      "גישה לפורטל והכשרה רלוונטית",
      "#/integrations/sapportal",
    ],
  ];
  qs("#integrationGrid").innerHTML = integrations
    .map(
      (i) =>
        `<div class="card"><strong>${i[0]}</strong><div class="meta">${i[3]}</div><div class="meta">סטטוס: ${i[1]}</div><div class="meta">בקשות: ${i[2]}</div><div style="margin-top:10px"><a class="link" href="${i[4]}">לפרטי אינטגרציה</a></div></div>`,
    )
    .join("");
}
function buildWorkflowRequestUrl(requestId) {
  const digits = (requestId || "").replace(/\D/g, "");
  const externalId = digits ? (Number(digits.slice(-2)) % 10) + 1 : 1;

  return `https://jsonplaceholder.typicode.com/todos/${externalId}`;
}
function renderWorkflow() {
  qs("#steps").innerHTML = workflow
    .map(
      (step, idx) =>
        `<div class="workflow-node ${mapStatusClass(step.status)}"><div class="workflow-node-head"><span class="workflow-node-index">${idx + 1}</span><div class="status ${mapStatusClass(step.status)}">${step.status}</div></div><strong class="workflow-node-title">${step.name}</strong><button class="link workflow-toggle" type="button" data-idx="${idx}" aria-expanded="false">פתח בקשה</button><div class="workflow-details is-hidden" data-details-idx="${idx}"><div class="meta">Owner: ${step.owner}</div><div class="meta">יעד: ${step.due} | מערכת: ${step.system}</div><div class="meta">${step.notes}</div><div class="meta">Blocker: ${step.blocker}</div><div class="meta"><a class="link" href="${buildWorkflowRequestUrl(step.requestId)}" target="_blank" rel="noreferrer noopener">מעבר לבקשה ${step.requestId}</a></div></div>${step.status !== "הושלם" ? `<button class="button secondary complete-btn" data-idx="${idx}">סיים</button>` : ""}</div>${idx < workflow.length - 1 ? '<div class="workflow-arrow" aria-hidden="true"><span class="workflow-arrow-line"></span><span class="workflow-arrow-head">↓</span></div>' : ""}`,
    )
    .join("");
  qsa(".workflow-toggle").forEach((btn) => {
    btn.onclick = () => {
      const details = qs(`[data-details-idx="${btn.dataset.idx}"]`);
      const isHidden = details.classList.toggle("is-hidden");
      btn.setAttribute("aria-expanded", String(!isHidden));
      btn.innerText = isHidden ? "פתח בקשה" : "הסתר פרטים";
    };
  });
  qsa(".complete-btn").forEach(
    (btn) => (btn.onclick = () => completeStep(+btn.dataset.idx)),
  );
}
function completeStep(idx) {
  workflow[idx].status = "הושלם";
  workflow[idx].blocker = "—";
  if (workflow[idx + 1] && workflow[idx + 1].status === "ממתין")
    workflow[idx + 1].status = "בתהליך";
  renderWorkflow();
  update();
}
function updateTimelineBox() {
  const items = [
    securityMailSent
      ? "מייל לביטחון / HR / POC נשלח עבור דנה כהן"
      : "מייל תיאום טרם נשלח",
    authorizationRequestOpened
      ? "פנייה להרשאות נפתחה ב‑ActiveOne / Airflow"
      : "פנייה להרשאות טרם נפתחה",
    selectedSystems.length
      ? `מערכות נבחרו: ${selectedSystems.join(" | ")}`
      : "לא נבחרו מערכות",
    selectedEquipment.length
      ? `ציוד נבחר: ${selectedEquipment.join(" | ")}`
      : "לא נבחר ציוד",
    "טופס בטיחות עדיין ממתין לחתימה",
    "מומלץ למנות חונך מקצועי וחונך חברתי",
  ];
  qs("#timelineBox").innerHTML = items
    .map(
      (t) =>
        `<div class="timeline-item"><div class="timeline-dot"></div><div>${t}</div><div></div></div>`,
    )
    .join("");
}
function fillDemoEmployeeDetails() {
  qs("#employeeName").value = "דנה כהן";
  qs("#employeeRole").value = "מיישמת SAP";
  qs("#employeeNumber").value = "83145";
  qs("#employeeEmail").value = "dana.cohen@deltaone.co.il";
  qs("#employeePhone").value = "052-5559876";
  qs("#employeeStartDate").value = "2026-07-01";
  qs("#workLocation").value = "מטה מרכזי";
}
function updateManagerTasks() {
  const box = qs("#managerRequestBox");
  const security = qs("#securityMailStatus");
  const auth = qs("#userRequestStatus");
  if (securityMailSent) {
    security.className = "status done";
    security.innerText = "✅ בוצע";
  } else {
    security.className = "status pending";
    security.innerText = "⏳ ממתין";
  }
  if (authorizationRequestOpened) {
    auth.className = "status done";
    auth.innerText = "✅ פנייה נפתחה";
    box.style.display = "block";
  } else {
    auth.className = "status ready";
    auth.innerText = "🟢 מוכן לפתיחה";
  }
}
function update() {
  const done = workflow.filter((s) => s.status === "הושלם").length;
  const percent = workflow.length
    ? Math.round((done / workflow.length) * 100)
    : 0;
  qs("#bar").style.width = percent + "%";
  const pctText = percent + "%";
  qs("#progress").innerText = pctText;
  // battery indicator
  const fill = qs("#batteryFill");
  if (fill) {
    fill.style.width = pctText;
    const color = percent >= 100 ? "#2fd98a"
                : percent >= 60  ? "#5cc8ff"
                : percent >= 30  ? "#ffc15e"
                : "#ff7a7a";
    fill.style.background = `linear-gradient(90deg, ${color}cc, ${color})`;
    fill.style.boxShadow = `0 0 12px ${color}88`;
  }
  const next = workflow.find((s) => s.status !== "הושלם");
  qs("#guider").innerText =
    `השלב הבא: ${next ? next.name : workflow.length ? "הכול הושלם ✅" : "בחרי תפקיד והתחילי למלא פרטים"} | מיקום: ${qs("#workLocation").value || "--"}`;
  qs("#employeeWelcome").innerText =
    `ברוכה הבאה ${qs("#employeeName").value || "לעובדת החדשה"} 👋`;
  qs("#employeeRoleText").innerText = `תפקיד: ${roleLabel()}`;
  qs("#employeeSystems").innerText = selectedSystems.length
    ? selectedSystems.join(" | ")
    : "טרם נבחרו מערכות";
  qs("#employeeEquipment").innerText = selectedEquipment.length
    ? selectedEquipment.join(" | ")
    : "טרם נבחר ציוד";
  qs("#employeeMeta").innerText =
    `תחילת עבודה: ${qs("#employeeStartDate").value || "--"} | מייל: ${qs("#employeeEmail").value || "--"} | טלפון: ${qs("#employeePhone").value || "--"}`;
  qs("#summaryEmployee").innerText = `עובדת: ${qs("#employeeName").value || "--"}`;
  qs("#summaryRole").innerText = `תפקיד: ${roleLabel()}`;
  qs("#summarySystems").innerText = selectedSystems.length
    ? `מערכות: ${selectedSystems.join(" | ")}`
    : "מערכות: --";
  qs("#summaryEquipment").innerText = selectedEquipment.length
    ? `ציוד: ${selectedEquipment.join(" | ")}`
    : "ציוד: --";
  qs("#summaryTasks").innerText =
    `סטטוס pre‑boarding: ${securityMailSent ? "ביטחון ✅" : "ביטחון ⏳"} | ${authorizationRequestOpened ? "יוזר ✅" : "יוזר ⏳"}`;
  updateSystemsSummary();
  updateEquipmentSummary();
  updateManagerTasks();
  updateTimelineBox();
  renderIntegrations();
}
function handleRoleChange() {
  const role = currentRole();
  qs("#employeeRole").value = role ? role.label : "";
  qs("#roleHint").innerText = role
    ? role.hint
    : "בחרי תפקיד כדי לטעון מערכות, ציוד, Routing משימות ומסמכים מתאימים.";
  workflow = role ? JSON.parse(JSON.stringify(role.workflow)) : [];
  renderSystemsForRole();
  applyEquipmentRecommendation();
  updateSmartRecommendation();
  renderWorkflow();
  update();
}
function sendSecurityMail() {
  securityMailSent = true;
  const box = qs("#managerRequestBox");
  box.style.display = "block";
  box.innerText =
    "נשלח מייל היערכות לקליטת דנה כהן לביטחון, משאבי אנוש ו‑POC. נדרש תדריך ביטחון, אישור כניסה ותיאום הדרכת בטיחות.";
  update();
}
function openAuthorizationRequest() {
  authorizationRequestOpened = true;
  const box = qs("#managerRequestBox");
  box.style.display = "block";
  box.innerText =
    'נפתחה פנייה אוטומטית ב‑ActiveOne / Airflow לפתיחת יוזרים והמשך סבב חתימות. קישורים דמיים זמינים בטאב "בקשות במערכות קצה".';
  update();
}
function resetDemo() {
  stopAutoModes();
  securityMailSent = false;
  authorizationRequestOpened = false;
  fillDemoEmployeeDetails();
  qs("#roleSelect").value = "mis";
  selectedSystems = [];
  qsa(".equipment-pool input").forEach((cb) => (cb.checked = false));
  handleRoleChange();
  go("dashboard");
  qs("#a").innerText = "";
  qs("#q").value = "";
  resetStoryPanel();
}
function clearNewEmployeeForm() {
  stopAutoModes();
  securityMailSent = false;
  authorizationRequestOpened = false;
  qs("#roleSelect").value = "";
  qs("#employeeName").value = "";
  qs("#employeeRole").value = "";
  qs("#employeeNumber").value = "";
  qs("#employeeEmail").value = "";
  qs("#employeePhone").value = "";
  qs("#employeeStartDate").value = "";
  qs("#workLocation").value = "";
  selectedSystems = [];
  selectedEquipment = [];
  workflow = [];
  qsa(".equipment-pool input").forEach((cb) => (cb.checked = false));
  qs("#managerRequestBox").style.display = "none";
  qs("#managerRequestBox").innerText = "";
  qs("#a").innerText = "";
  qs("#q").value = "";
  handleRoleChange();
  go("manager");
  resetStoryPanel();
}
function startDemoMode() {
  triggerWowBurst();
  resetDemo();
  //selectedSystems = ["ניבה", "NOW", "FTS", "SAP MRC", "SAP PORTAL"];
   selectedSystems: ["בינה", "NOW", "FTS", "SAP MRC", "SAP PORTAL"],
  applyEquipmentRecommendation();
  qsa("#systemsPool input").forEach(
    (cb) => (cb.checked = selectedSystems.includes(cb.value)),
  );
  const actions = [
    () => go("dashboard"),
    () => go("manager"),
    () => sendSecurityMail(),
    () => openAuthorizationRequest(),
    () => go("workflow"),
    () => completeStep(0),
    () => completeStep(1),
    () => completeStep(2),
    () => go("employee"),
    () => go("productivity"),
  ];
  let i = 0;
  function next() {
    if (i >= actions.length) return;
    actions[i++]();
    storyTimer = setTimeout(next, 1300);
  }
  next();
}
function resetStoryPanel() {
  updateStoryPanel(
    "לחץ על Story Mode כדי להפעיל הצגה מודרכת ברמת WOW.",
    "0 / 0",
    "0%"
  );
}
function stopAutoModes() {
  if (storyTimer) clearTimeout(storyTimer);
  storyTimer = null;
  isStory = false;
}
function startStoryMode() {
  resetDemo();
  isStory = true;
  storyIdx = 0;
  function play() {
    if (!isStory || storyIdx >= storyScenes.length) {
      isStory = false;
      updateStoryPanel(
        "הדמו הסתיים בהצלחה. אפשר לאפס ולהריץ שוב.",
        `${storyScenes.length} / ${storyScenes.length}`,
        "100%"
      );
      return;
    }
    const [screen, txt] = storyScenes[storyIdx];
    go(screen);
    updateStoryPanel(
      txt,
      `${storyIdx + 1} / ${storyScenes.length}`,
      ((storyIdx + 1) / storyScenes.length) * 100 + "%"
    );
    if (storyIdx === 1) {
      sendSecurityMail();
    }
    if (storyIdx === 2) {
      openAuthorizationRequest();
    }
    if (storyIdx === 3) {
      completeStep(0);
      completeStep(1);
    }
    storyIdx++;
    storyTimer = setTimeout(play, 2400);
  }
  play();
}
function updateSmartRecommendation() {
  const role = currentRole();
  qs("#smartRecommendationBox").innerText = role
    ? `המלצה חכמה: ${role.hint}`
    : "המלצה חכמה: בחרי תפקיד כדי לראות התאמות, בקשות, מסמכים וחסמים.";
}
function toggleBotPanel() {
  const panel = qs("#botPanel");
  const toggle = qs("#botToggle");
  const isHidden = panel.classList.toggle("is-hidden");

  toggle.setAttribute("aria-expanded", String(!isHidden));
  if (!isHidden) qs("#q").focus();
}
qsa(".tab-btn").forEach((btn) =>
  btn.addEventListener("click", () => {
    qsa(".tab-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const key = btn.dataset.tab;
    qsa(".tab-pane").forEach((p) => p.classList.remove("active"));
    qs("#tab-" + key).classList.add("active");
  }),
);
qs("#roleSelect").addEventListener("change", handleRoleChange);
qsa(".equipment-pool input").forEach((cb) =>
  cb.addEventListener("change", toggleEquipment),
);
qs("#securityMailBtn").addEventListener("click", sendSecurityMail);
qs("#openAuthRequestBtn").addEventListener("click", openAuthorizationRequest);
qs("#fillDemoBtn").addEventListener("click", () => {
  fillDemoEmployeeDetails();
  qs("#roleSelect").value = "mis";
  handleRoleChange();
  applyEquipmentRecommendation();
});
qs("#botToggle").addEventListener("click", toggleBotPanel);
qs("#startProcessBtn").addEventListener("click", clearNewEmployeeForm);
qs("#askBtn").addEventListener("click", () => {
  const q = qs("#q").value.trim();
  const found = qa.find((item) => q.includes(item.q));
  qs("#a").innerText = found
    ? found.a
    : "אין תשובה כרגע. נסי לשאול על ציוד, תג, איש קשר, הדרכה או קפיטריה.";
});
fillDemoEmployeeDetails();
qs("#roleSelect").value = "mis";
handleRoleChange();
// Pre-complete first 6 of 8 steps so progress renders as 75% (teal zone)
workflow.slice(0, 6).forEach(function(s) { s.status = "הושלם"; });
renderDocuments();
renderRequests();
renderActivity();
assignRoleAvatars();
resetStoryPanel();
update();
// Demo override: display 78% for the POC presentation
(function() {
  var fill = qs('#batteryFill');
  var pct  = qs('#progress');
  var bar  = qs('#bar');
  if (fill && pct) {
    pct.innerText = '78%';
    fill.style.width = '78%';
    fill.style.background = 'linear-gradient(90deg, #5cc8ffcc, #5cc8ff)';
    fill.style.boxShadow  = '0 0 12px #5cc8ff88';
  }
  if (bar) bar.style.width = '78%';
})();

/* ─── Star rating widget ─── */
(function initRating() {
  const LABELS = ['', 'גרוע — צריך שיפור דחוף', 'מתחת לממוצע', 'בסדר', 'טוב מאוד', 'מעולה! חווייה מצוינת בחיים ✨'];
  let selected = 0;
  const stars = qsa('.star-btn');
  const label = qs('#starLabel');
  const btn   = qs('#submitRatingBtn');
  const thanks = qs('#ratingThanks');

  function paint(hovered) {
    const active = hovered || selected;
    stars.forEach(function(s) {
      const v = parseInt(s.dataset.val, 10);
      s.classList.toggle('selected', v <= selected);
      s.classList.toggle('hovered', hovered > 0 && v <= hovered);
    });
    label.textContent = active ? LABELS[active] : '';
  }

  stars.forEach(function(s) {
    s.addEventListener('mouseenter', function() { paint(parseInt(s.dataset.val, 10)); });
    s.addEventListener('mouseleave', function() { paint(0); });
    s.addEventListener('click', function() {
      selected = parseInt(s.dataset.val, 10);
      paint(0);
    });
  });

  btn.addEventListener('click', function() {
    if (!selected) {
      label.textContent = 'נא בחר/י לפחות כוכב אחד לפני השליחה ★';
      label.style.color = 'var(--warning)';
      return;
    }
    btn.disabled = true;
    thanks.classList.remove('is-hidden');
    stars.forEach(function(s) { s.disabled = true; });
    qs('#ratingComment').disabled = true;
  });
})();

/* ─── Particle network canvas ─── */
(function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H;
  function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
  resize();
  window.addEventListener('resize', resize);
  const COLORS = ['#5cc8ff', '#9d8bff', '#2fd98a'];
  const pts = Array.from({ length: 62 }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    vx: (Math.random() - 0.5) * 0.32,
    vy: (Math.random() - 0.5) * 0.32,
    r: Math.random() * 1.8 + 0.7,
    c: COLORS[Math.floor(Math.random() * 3)]
  }));
  function frame() {
    ctx.clearRect(0, 0, W, H);
    for (let i = 0; i < pts.length; i++) {
      const p = pts[i];
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.c + 'aa';
      ctx.fill();
      for (let j = i + 1; j < pts.length; j++) {
        const q = pts[j];
        const d = Math.hypot(p.x - q.x, p.y - q.y);
        if (d < 125) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = 'rgba(92,200,255,' + (0.14 * (1 - d / 125)).toFixed(2) + ')';
          ctx.lineWidth = 0.55;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(frame);
  }
  frame();
})();

/* ─── Splash dismiss + counter ─── */
function animateCounters() {
  document.querySelectorAll('.stat-card strong').forEach(function(el) {
    const target = parseInt(el.textContent, 10);
    if (isNaN(target)) return;
    let cur = 0;
    const step = Math.max(1, Math.ceil(target / 18));
    const iv = setInterval(function() {
      cur = Math.min(cur + step, target);
      el.textContent = cur;
      if (cur >= target) clearInterval(iv);
    }, 45);
  });
}

(function splashInit() {
  setTimeout(function() {
    const splash = document.getElementById('splash');
    if (!splash) return;
    splash.classList.add('fade-out');
    setTimeout(function() { splash.remove(); animateCounters(); }, 950);
  }, 2600);
})();

/* ─── WOW burst + confetti ─── */
function triggerWowBurst() {
  const burst = document.createElement('div');
  burst.className = 'wow-burst';
  burst.textContent = 'WOW';
  document.body.appendChild(burst);
  setTimeout(function() { if (burst.parentNode) burst.remove(); }, 1600);

  const canvas = document.createElement('canvas');
  canvas.id = 'confetti-canvas';
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const colors = ['#5cc8ff', '#9d8bff', '#2fd98a', '#ffc15e', '#ff7a7a', '#ffffff'];
  const pieces = Array.from({ length: 110 }, function() {
    return {
      x: Math.random() * canvas.width,
      y: -20 - Math.random() * 60,
      w: Math.random() * 10 + 5,
      h: Math.random() * 6 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      vy: Math.random() * 4.5 + 2,
      vx: (Math.random() - 0.5) * 3,
      rot: Math.random() * Math.PI * 2,
      rSpeed: (Math.random() - 0.5) * 0.14
    };
  });
  let cf = 0;
  function drawConf() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(function(p) {
      p.x += p.vx; p.y += p.vy; p.rot += p.rSpeed;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color + 'dd';
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });
    cf++;
    if (cf < 90) {
      requestAnimationFrame(drawConf);
    } else {
      canvas.style.transition = 'opacity 0.6s ease';
      canvas.style.opacity = '0';
      setTimeout(function() { if (canvas.parentNode) canvas.remove(); }, 700);
    }
  }
  drawConf();
}
