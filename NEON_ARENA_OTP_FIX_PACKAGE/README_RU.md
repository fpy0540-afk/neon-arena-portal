# Комплект исправления регистрации Neon Arena

## Что исправлено
- Веб-конфиг содержит публичный Supabase Project URL и publishable key, восстановленные из Godot-клиента. Секретные ключи не использовались.
- Регистрация ожидает числовой код, а Auth redirect указывает на публичную HTTPS-страницу аккаунта, не на localhost.
- Шаблон письма содержит `{{ .Token }}` и не содержит `{{ .ConfirmationURL }}`.

## Публикация сайта
1. Открой папку `GITHUB_PAGES` внутри архива.
2. Загрузи **содержимое** этой папки в корень репозитория GitHub Pages, чтобы `index.html` и `assets/` оказались прямо в корне.
3. Ожидаемый адрес страницы аккаунта: `https://fpy0540-afk.github.io/neon-arena-portal/account.html`. Если адрес сайта отличается, измени `siteUrl` в `GITHUB_PAGES/assets/site-config.js` и используй тот же адрес в настройках Supabase.

## Настройка письма в Supabase — обязательный внешний шаг
Файл в `SUPABASE_EMAIL_TEMPLATE/confirm_signup_otp.html` предназначен для **Authentication → Email Templates → Confirm signup**. Скопируй его содержимое в HTML-шаблон, а тему письма возьми из `confirm_signup_otp_subject.txt`. Для **Auth → URL Configuration** укажи публичный GitHub Pages URL как Site URL и добавь страницу аккаунта в Redirect URLs. Не добавляй localhost.

Для доставки писем обычным игрокам нужен настроенный SMTP. Эти настройки нельзя включить из статического ZIP. В этой сессии подключение Supabase недоступно, поэтому удалённый шаблон, Site URL, Redirect URLs и SMTP здесь не менялись. Не отправляй пароли, SMTP-секреты или service-role ключи в чат.
