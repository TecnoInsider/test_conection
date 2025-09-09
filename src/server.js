import express from express;
import path from path;
import cors from cors;
import dotenv from dotenv;
import { fileURLToPath } from url;

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, public)));

app.get(/health, (_req, res) => res.json({ ok: true }));

// Mount feature routes
// Routes will be added in separate files

// Fallback to index.html for SPA-like behavior
app.get(*, (_req, res) => {
  res.sendFile(path.join(__dirname, public, index.html));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
EOF
cat > /workspace/src/public/index.html <<\"EOF\"
<!doctype html>
<html lang=\"ru\">
  <head>
    <meta charset=\"utf-8\" />
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />
    <title>Сайты с ИИ — быстрые лендинги</title>
    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" />
    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin />
    <link href=\"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Manrope:wght@600;700;800&display=swap\" rel=\"stylesheet\" />
    <link rel=\"stylesheet\" href=\"/styles.css\" />
  </head>
  <body>
    <div id=\"app\">Загрузка…</div>
    <script src=\"/main.js\" type=\"module\"></script>
  </body>
</html>
EOF
cat > /workspace/src/public/styles.css <<\"EOF\"
:root{--bg:#FFFFFF;--text:#0A0A0A;--muted:#475569;--divider:#E5E7EB;--radius:14px;--accent:#6366F1}
*{box-sizing:border-box}
html,body{margin:0;padding:0;background:var(--bg);color:var(--text);font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;}
.container{max-width:1120px;margin:0 auto;padding:0 20px}
.btn{display:inline-flex;align-items:center;justify-content:center;padding:14px 18px;border-radius:12px;background:var(--accent);color:white;text-decoration:none;font-weight:600;border:0;cursor:pointer}
.btn.secondary{background:#0A0A0A10;color:#0A0A0A}
.section{padding:56px 0;border-top:1px solid var(--divider)}
.hero{padding:88px 0}
.grid{display:grid;gap:16px}
.card{border:1px solid var(--divider);border-radius:var(--radius);padding:20px;background:#fff;box-shadow:0 6px 24px rgba(2,6,23,0.04)}
h1,h2,h3{font-family:Manrope,Inter,sans-serif;margin:0 0 12px}
h1{font-size:40px;line-height:1.1}
h2{font-size:28px}
p{margin:0 0 12px;color:var(--muted)}
.header{position:sticky;top:0;background:white;border-bottom:1px solid var(--divider);z-index:10}
.header-inner{display:flex;align-items:center;justify-content:space-between;padding:12px 0}
.logo{font-weight:800;font-family:Manrope}
.pricing{display:grid;grid-template-columns:1fr;gap:16px}
@media(min-width:720px){.grid.cols-2{grid-template-columns:repeat(2,1fr)}.pricing{grid-template-columns:repeat(2,1fr)}h1{font-size:56px}}
.small{font-size:12px;color:var(--muted)}
input,select,textarea{width:100%;padding:12px 14px;border:1px solid var(--divider);border-radius:12px;font:inherit}
label{font-size:14px;font-weight:600;margin-bottom:8px;display:block}
.form-row{display:grid;gap:12px}
@media(min-width:720px){.form-row.cols-2{grid-template-columns:1fr 1fr}}
.badge{display:inline-flex;align-items:center;gap:8px;background:#0A0A0A06;border:1px solid var(--divider);border-radius:999px;padding:8px 12px;font-weight:600}
.list{display:grid;gap:8px;margin:12px 0 0}
.list li{display:flex;gap:10px}
.footer{padding:24px 0;border-top:1px solid var(--divider);color:var(--muted)}
.notice{background:#F8FAFC;border:1px dashed #CBD5E1;padding:12px;border-radius:12px}
EOF
cat > /workspace/src/public/main.js <<\"EOF\"
const accentBySegment={beauty:#F43F5E,fitness:#10B981,experts:#6366F1,schools:#F97316};
function setAccent(segment){
  const color=accentBySegment[segment]||#6366F1;
  document.documentElement.style.setProperty(--accent,color);
}

function el(html){const t=document.createElement(template);t.innerHTML=html.trim();return t.content.firstElementChild}

const app=document.getElementById(app);

app.replaceChildren(
  el(`
  <header class="header">
    <div class="container header-inner">
      <div class="logo">Сайты с ИИ</div>
      <nav><a class="btn" href="#lead">Заказать сайт</a></nav>
    </div>
  </header>`),
  el(`
  <main>
    <section class="section hero">
      <div class="container">
        <div class="badge" style="margin-bottom:12px">Сайт за 5–7 дней • От 200€</div>
        <h1>Сайт + ИИ, который приводит клиентов и заявки</h1>
        <p>Сайт на 4–5 экранов за неделю. Лиды сразу в таблицу, уведомления — мгновенно.</p>
        <div style="display:flex;gap:12px;margin-top:16px">
          <a class="btn" href="#lead">Заказать сайт</a>
          <button class="btn secondary" id="switch-segment">Выбрать нишу</button>
        </div>
      </div>
    </section>

    <section class="section" id="offers">
      <div class="container">
        <h2>Что входит</h2>
        <div class="pricing">
          <div class="card">
            <h3>Вариант 1.1 — 200€</h3>
            <p>Простой сайт 4–5 экранов с формой заявки</p>
            <ul class="list">
              <li>• 4–5 экранов, адаптив</li>
              <li>• Минималистичный современный дизайн</li>
              <li>• Форма подписки → Google Sheets</li>
            </ul>
          </div>
          <div class="card">
            <h3>Вариант 1.2 — 350€</h3>
            <p>Сайт с ИИ-чат-продавцом и уведомлениями</p>
            <ul class="list">
              <li>• Всё из 1.1</li>
              <li>• Встроенный ИИ-чат</li>
              <li>• Лиды → Google Sheets</li>
              <li>• Уведомления в Telegram</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="segments">
      <div class="container">
        <h2>Для кого</h2>
        <div class="grid cols-2">
          <div class="card"><strong>Бьюти</strong><p>Запись и заявки без хаоса в мессенджерах</p></div>
          <div class="card"><strong>Фитнес и коучи</strong><p>Ассистент отвечает на частые вопросы</p></div>
          <div class="card"><strong>Эксперты</strong><p>Мини-сайт для личного бренда</p></div>
          <div class="card"><strong>Онлайн-школы</strong><p>Быстрая упаковка курса/марафона</p></div>
        </div>
      </div>
    </section>

    <section class="section" id="value">
      <div class="container">
        <h2>Почему это ценно</h2>
        <div class="grid cols-2">
          <div class="card">Готово за несколько дней — быстрее начнёте получать заявки.</div>
          <div class="card">Минимальный бюджет — сайт от 200€, чат с ИИ за 350€.</div>
          <div class="card">Автоматическая обработка заявок — без хаоса в мессенджерах.</div>
          <div class="card">Поддержка и сопровождение — я обновляю проекты по запросу.</div>
        </div>
      </div>
    </section>

    <section class="section" id="process">
      <div class="container">
        <h2>Как это работает</h2>
        <ol class="list">
          <li>Вы оставляете заявку.</li>
          <li>Я уточняю детали.</li>
          <li>Через 5–7 дней у вас готовый сайт.</li>
          <li>Все лиды уже летят в Google Sheets.</li>
        </ol>
      </div>
    </section>

    <section class="section" id="faq">
      <div class="container">
        <h2>FAQ</h2>
        <div class="grid">
          <div class="card"><strong>Сколько времени занимает?</strong><p>Обычно 5–7 дней.</p></div>
          <div class="card"><strong>Что нужно от меня?</strong><p>Короткий бриф: ниша, оффер, контакты, примеры.</p></div>
          <div class="card"><strong>Можно ли расширить сайт потом?</strong><p>Да, добавим разделы и интеграции.</p></div>
          <div class="card"><strong>Входит ли домен/хостинг?</strong><p>Клиент покупает сам. Помогу подключить.</p></div>
        </div>
      </div>
    </section>

    <section class="section" id="lead">
      <div class="container">
        <h2>Оставить заявку</h2>
        <form id="lead-form" class="card">
          <div class="form-row cols-2">
            <div>
              <label>Имя</label>
              <input name="name" required />
            </div>
            <div>
              <label>Телефон или email</label>
              <input name="contact" required />
            </div>
          </div>
          <div class="form-row cols-2">
            <div>
              <label>Ниша</label>
              <select name="segment">
                <option value="beauty">Бьюти / локальные услуги</option>
                <option value="fitness">Фитнес / коучи</option>
                <option value="experts">Эксперты / фрилансеры</option>
                <option value="schools">Онлайн-школы</option>
              </select>
            </div>
            <div>
              <label>Формат</label>
              <select name="plan">
                <option value="1.1">1.1 — 200€</option>
                <option value="1.2">1.2 — 350€</option>
              </select>
            </div>
          </div>
          <div>
            <label>Комментарий</label>
            <textarea name="comment" rows="4" placeholder="Коротко о задаче"></textarea>
          </div>
          <div class="small notice" id="lead-status">Отправьте форму — лид попадёт в Google Sheets</div>
          <div style="margin-top:12px"><button class="btn" type="submit">Отправить заявку</button></div>
        </form>
      </div>
    </section>
  </main>`),
  el(`<footer class="footer"><div class="container">Связь: <a href="https://t.me/" target="_blank">Telegram</a> • <a href="mailto:hello@example.com">email</a><div class="small">Все проекты я сопровождаю и обновляю</div></div></footer>`)
);

// Segment accent switcher
const switchBtn=document.getElementById(switch-segment);
switchBtn.addEventListener(click,()=>{
  const order=[beauty,fitness,experts,schools];
  const current=getComputedStyle(document.documentElement).getPropertyValue(--accent).trim();
  const currentIndex=order.findIndex(k=>accentBySegment[k].toLowerCase()===current.toLowerCase());
  const next=order[(currentIndex+1)%order.length];
  setAccent(next);
});

// Lead form handler
const form=document.getElementById(lead-form);
form.addEventListener(submit,async(e)=>{
  e.preventDefault();
  const fd=new FormData(form);
  const payload=Object.fromEntries(fd.entries());
  const statusEl=document.getElementById(lead-status);
  statusEl.textContent=Отправка…;
  try{
    const res=await fetch(/api/lead,{method:POST,headers:{Content-Type:application/json},body:JSON.stringify(payload)});
    const data=await res.json();
    if(!res.ok) throw new Error(data?.error||Ошибка
