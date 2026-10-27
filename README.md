# Neon Arena Player Portal

Многостраничный статический портал для игроков Neon Arena. Без внешних CDN и без платёжных интеграций.

## Страницы / Pages

- `index.html` — главная / Home
- `account.html` — вход, регистрация и профиль / Sign-in, sign-up and profile
- `sessions.html` — просмотр и отзыв сессий / Review and revoke sessions
- `market.html` — скины за игровые кредиты / Cosmetic skin market using game credits
- `servers.html` — поиск комнат и копирование приглашения / Find rooms and copy invites
- `help.html` — краткая помощь / Quick help

## Настройка Supabase / Supabase setup

Сейчас `assets/site-config.js` оставлен с пустыми значениями, поэтому вход и загрузка данных отключены. Для подключения укажи только публичные значения проекта:

```js
window.NEON_PORTAL_CONFIG = Object.freeze({
  supabaseUrl: "https://YOUR_PROJECT_REF.supabase.co",
  publicKey: "YOUR_PUBLIC_ANON_OR_PUBLISHABLE_KEY"
});
```

ZIP содержит только статический сайт. Для нового Supabase-проекта возьми SQL-файлы из полной папки исходников Neon Arena (`NeonArena3D/supabase/schema.sql`) и выполни схему в SQL Editor проекта. Для уже существующей базы проверь и при необходимости примени обновление из `NeonArena3D/supabase/migrations/20261026_web_portal_session_header.sql`. После этого добавь полный URL GitHub Pages страницы аккаунта в Supabase Auth → URL Configuration → Redirect URLs (например, `https://USERNAME.github.io/REPOSITORY/account.html`).

**Никогда не вставляй сюда `service_role`, `sb_secret_*`, пароль или другие секреты.** В публичном сайте допустим только anon/publishable key, и только вместе с настроенными RLS-политиками из схемы проекта.

## Публикация на GitHub Pages вручную / Manual GitHub Pages publishing

1. Распакуй ZIP на компьютере. В GitHub открой корень репозитория и выбери **Add file → Upload files**.
2. Загрузи **содержимое** распакованной папки, а не саму папку: `index.html`, страницы аккаунта/сессий/рынка/серверов/помощи, `README.md` и папку `assets`. После загрузки в корне GitHub-репозитория должны сразу быть `index.html` и `assets/` — не только папка `NEON_ARENA_GITHUB_PAGES`.
3. Нажми **Commit changes**. Сначала настрой `assets/site-config.js` публичными значениями Supabase, если нужен вход и игровые данные. Не коммить секретные ключи.
4. На GitHub открой **Settings → Pages**, выбери публикацию из ветки `main`, папку `/(root)`, затем **Save**.
5. После публикации проверь главную страницу и переходы на `/account.html`, `/sessions.html`, `/market.html`, `/servers.html`, `/help.html`.

Если оставить конфигурацию пустой, сайт всё равно откроется как статический макет, но интерактивные данные будут недоступны. Публикацию из этой среды выполнить нельзя; ZIP предназначен для ручной загрузки.

## Поведение и ограничения

- До входа страница сессий показывает только сообщение о входе; запрос сессий выполняется только после нажатия игроком кнопки.
- Страницы не выполняют фоновые проверки интернета. Данные загружаются только после нажатия соответствующей кнопки.
- Идентификаторы приложения и сессии случайные; HWID не собирается. Состояние входа хранится в пределах вкладки.
- Рынок использует только внутриигровые кредиты, без реальных платежей. Для защиты экономики от читов нужны доверенные игровые серверы/Edge Functions.
- Список комнат зависит от опубликованного игровым хостом heartbeat; адреса Cloudflare Quick Tunnel временные, поэтому приглашение может устареть.
- Поддерживаются английский и русский языки. Внешние CDN не используются.
