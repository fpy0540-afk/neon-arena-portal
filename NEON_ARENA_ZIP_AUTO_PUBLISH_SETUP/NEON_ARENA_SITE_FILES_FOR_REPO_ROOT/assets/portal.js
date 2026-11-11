'use strict';

const I18N = {
  en: {
    nav_home:'Home',nav_account:'Account',nav_sessions:'My sessions',nav_market:'Skin market',nav_servers:'Servers',nav_help:'Help',
    online_not_checked:'No background checks',site_setup_missing:'Portal is not set up yet',portal_ready:'Portal ready',
    home_eyebrow:'NEON ARENA PLAYER HUB',home_title:'Your game account, made simple.',home_intro:'Manage your profile, browse skins, find a room, and keep your account safe — all in one place.',
    open_account:'Open my account',browse_market:'Browse the market',find_room:'Find a game',home_no_auto:'Nothing is checked in the background. Pages load data only when you open them and press the matching button.',
    feature_profile:'Your profile',feature_profile_text:'See your player name, language, and game credits.',feature_sessions:'Account safety',feature_sessions_text:'Review and revoke sessions after you sign in.',feature_market:'Player market',feature_market_text:'Buy and list cosmetic skins for game credits only.',feature_servers:'Find a room',feature_servers_text:'Browse recent rooms and copy an invite for the game.',
    account_heading:'Your account',account_intro:'Sign in to view your profile and use account features.',portal_unconfigured:'The game portal has not been connected to its account service yet. Please try again later.',
    sign_in_title:'Welcome back',sign_in_text:'Use the same Neon Arena account as in the game.',email:'Email address',password:'Password',player_name:'Player name',sign_in:'Sign in',create_account:'Create account',sign_out:'Sign out',
    register_hint:'New here? Choose Create account, enter a player name, and we’ll get you started.',signed_in_as:'Signed in as',account_id:'Account ID',app_instance:'This browser app ID',app_session:'This browser session',credits:'Game credits',language:'Language',save_profile:'Save profile',load_profile:'Load my profile',profile_card:'Player profile',
    session_heading:'My sessions',session_intro:'Only sessions for your signed-in account appear here. This page does not check sessions until you choose Load sessions.',
    sign_in_first:'Sign in first',sessions_locked:'Your sessions are private. Sign in to view them.',go_sign_in:'Go to sign in',load_sessions:'Load sessions',refresh_sessions:'Refresh sessions',sessions_empty:'No active app sessions were found.',current_session:'This browser',revoke:'Revoke',session_active:'Active',session_revoked:'Revoked',last_seen:'Last used',session_label:'App / device',session_id:'Session ID',
    market_heading:'Skin market',market_intro:'Browse real player offers. Purchases use game credits only — no cash payments.',load_offers:'Load offers',refresh_offers:'Refresh offers',search:'Search skins',weapon_filter:'Weapon',all_weapons:'All weapons',sort_by:'Sort by',sort_newest:'Newest',sort_low_price:'Lowest price',sort_high_price:'Highest price',
    inventory_title:'Your synced skins',load_inventory:'Load my skins',inventory_loaded:'Your synced skins are loaded.',choose_skin:'Choose a skin',no_synced_skins:'No synced skins found. Sync your collection from the game first.',asking_price:'Your price in credits',list_skin:'List skin',market_empty:'No active offers right now.',market_offers:'Market offers',market_load_note:'Load the offer list when you are ready.',no_matching_offers:'No offers match these filters.',no_matching_servers:'No rooms match these filters.',inventory_hint:'Your game collection loads only after you ask for it.',buy:'Buy',cancel_listing:'Remove offer',seller:'Seller',owned_by_you:'Your offer',sign_in_to_buy:'Sign in to buy or list skins.',
    servers_heading:'Find a game',servers_intro:'Browse recently active rooms. Invite links can expire when the host’s temporary tunnel stops.',load_servers:'Find rooms',refresh_servers:'Refresh rooms',server_search:'Search name or room code',map_filter:'Map',all_maps:'All maps',mode_filter:'Mode',all_modes:'All modes',servers_empty:'No recent rooms found. Try again later.',players:'Players',bots:'Bots',room_code:'Room code',copy_invite:'Copy game invite',invite_copied:'Invite copied. Paste it into the game.',clipboard_error:'Could not copy automatically. Try again or copy the room details manually.',
    help_heading:'Quick help',help_intro:'A few simple steps to get going.',help_account_title:'Sign in',help_account_text:'Use the same account as your game. If you are new, choose Create account on the Account page.',help_market_title:'Use the skin market',help_market_text:'First sync your collection in the game. Then load your skins here, choose a price, and list one. Purchases use only game credits.',help_sessions_title:'Protect your account',help_sessions_text:'Sign in before opening My sessions. Revoke a browser or game session you do not recognize.',help_servers_title:'Join a room',help_servers_text:'Copy the invite from Servers and paste it into the game. Quick Tunnel addresses are temporary.',help_privacy_title:'Your privacy',help_privacy_text:'The site does not collect a hardware ID. It uses random app and session IDs. It does not make background internet checks.',
    need_config:'The portal is not connected to the account service yet. Please contact the game administrator.',invalid_email_password:'Enter a valid email and a password with at least 8 characters.',invalid_player_name:'Enter a player name between 1 and 24 characters.',invalid_price:'Choose a price between 1 and 999,999 credits.',public_key_rejected:'The site configuration is invalid. Contact the game administrator.',working:'Please wait…',loading:'Loading…',network_error:'Could not connect. Check your connection and try again.',
    signed_in_ok:'Signed in. Your account is ready.',signed_up_ok:'Account created. Check your email if confirmation is required, then sign in.',signed_out_ok:'Signed out.',profile_saved:'Profile saved.',session_missing:'This browser session is no longer active. Sign in again.',session_revoked_ok:'Session revoked.',offer_listed:'Your skin is listed.',offer_bought:'Purchase complete.',offer_cancelled:'Offer removed.',not_enough_data:'No data to show yet. Use the button above to load it.',
    map_dust:'Neon Dust',map_factory:'Factory',map_districts:'Districts',map_crossroads:'Crossroads',mode_surv:'Survival',mode_dm:'Deathmatch',mode_bomb:'Bomb',
    nav_aria:"Main navigation",
    nav_collection:"My collection",
    nav_stats:"Stats",
    nav_updates:"Updates",
    auth_tabs_aria:"Account access",
    auth_benefit_collection:"Your collection stays private until you sign in and choose to load it.",
    auth_benefit_privacy:"No hardware ID is collected. Browser and app IDs are random.",
    auth_benefit_profile:"Use the same account in the game and on the website.",
    auth_email_note:"We’ll email a one-time numeric code. Enter it here to confirm your address.",
    back_to_sign_in:"Back to sign in",
    code_help:"Enter the 6–10 digit code from the email. If it does not arrive, the project owner must configure custom SMTP in Supabase.",
    code_placeholder:"6–10 digit code",
    email_code:"Confirmation code",
    forgot_password:"Forgot password?",
    new_password:"New password",
    password_confirmation:"Confirm password",
    password_hint:"Use at least 8 characters.",
    recovery_heading:"Set a new password",
    recovery_intro:"Choose a new password for your account.",
    register_hint_title:"One account, game and portal",
    resend_code:"Resend code",
    resend_confirmation:"Resend confirmation code",
    save_new_password:"Save new password",
    schema_missing:"The portal database tables are missing. The project owner must apply the full supabase/schema.sql in the Supabase SQL Editor.",
    show_password:"Show",
    hide_password:"Hide",
    theme_amber:"Amber",
    theme_choose:"Choose accent color",
    theme_custom:"Custom color",
    theme_label:"Theme",
    theme_lime:"Lime",
    theme_neon:"Neon",
    theme_rose:"Rose",
    theme_tip:"Customize the portal accent color",
    theme_violet:"Violet",
    theme_heading:"Personalize your portal",
    theme_success:"Accent color saved.",
    theme_invalid:"Choose a valid color.",
    verify_code:"Verify email",
    verify_email_heading:"Confirm your email",
    verify_email_intro:"Enter the one-time code from your confirmation email to finish creating your account.",
    code_sent:"A confirmation code was requested. Check your inbox and spam folder.",
    code_format:"Enter a 6–10 digit code.",
    code_verified:"Email verified. You can now sign in with your email and password.",
    code_invalid_or_expired:"The code is invalid or expired. Request a new code and try again.",
    smtp_restricted:"Supabase rejected this recipient. Configure custom SMTP in the project to email ordinary players.",
    passwords_do_not_match:"Passwords do not match.",
    password_changed:"Password changed. You can now sign in.",
    recovery_email_sent:"If the address belongs to an account, a recovery email has been requested.",
    no_rows_updated:"The server did not confirm any changed rows. Refresh and try again.",
    signout_confirmed:"The server confirmed revocation of this session.",
    signout_partial:"Could not confirm session revocation on the server. You are signed out in this tab, but check your account sessions.",
    collection_heading:"My collection",
    collection_intro:"Your synced skins, visible only after you sign in and load them.",
    collection_private:"Private account data",
    collection_total:"Synced skins",
    load_collection:"Load collection",
    help_collection_text:"Sign in and press Load collection to see skins synced from the game.",
    help_collection_title:"View your collection",
    help_stats_text:"Your match results and earned game credits are private and load only on request.",
    help_stats_title:"Check your stats",
    help_updates_text:"Read the latest game and portal notes.",
    help_updates_title:"Read updates",
    feature_collection:"Your collection",
    feature_collection_text:"See game skins after you sign in and choose to load them.",
    feature_stats:"Match stats",
    feature_stats_text:"Review wins, losses, and credits earned.",
    feature_updates:"Latest updates",
    feature_updates_text:"A simple overview of game and portal changes.",
    home_features:"A simple place for your game account",
    home_tools:"Player tools",
    servers_sorted_note:"Rooms are shown by latest heartbeat. Quick Tunnel addresses can expire; copy the address and room code as a fallback.",
    credits_earned:"Credits earned",
    load_stats:"Load statistics",
    match_breakdown:"Match breakdown",
    matches_lost:"Losses",
    matches_played:"Matches played",
    matches_won:"Wins",
    recent_matches:"Recent matches",
    stats_heading:"Your stats",
    stats_intro:"Your match results and earned credits, loaded only when you ask.",
    stats_private:"Private statistics",
    stats_recent_note:"Recent match results",
    win_rate:"Win rate",
    game_sync_label:"Game sync",
    privacy_label:"Privacy",
    update_featured:"Featured update",
    update_game_text:"Neon Arena continues to add maps, weapons, and game modes.",
    update_game_title:"Game updates",
    update_portal_text:"The player portal brings account tools together in one place.",
    update_portal_title:"Portal updates",
    update_privacy_text:"The portal uses random app IDs and does not collect hardware IDs.",
    update_privacy_title:"Privacy first",
    updates_feedback_text:"Share suggestions with the Neon Arena team.",
    updates_feedback_title:"Have a suggestion?",
    updates_heading:"What’s new",
    updates_intro:"Recent notes about the game and player portal.",
    recovery_missing:"The recovery link is missing or has expired. Request a new password reset email.",
    inventory_not_loaded:"Your skins have not been loaded yet. Use Load my skins when you are ready.",
    market_loaded_note:"Offers are loaded. Your private inventory is fetched only when you press Load my skins.",
    limited_results:"The display limit was reached; the list may be incomplete. Narrow the filters or try again later.",
    collection_loaded:"Your collection is loaded.",
    collection_empty:"No synced skins were found. Sync your collection from the game first.",
    stats_loaded:"Your match statistics are loaded.",
    no_matches:"No match results were found.",
    skin_arctic:'Arctic Matte',skin_ember:'Coal & Flame',skin_olive:'Field Camo',skin_mono:'Monochrome',skin_neon_grid:'Neon Grid',skin_tiger:'Tiger Line',skin_viper:'Viper Pulse',skin_aurora:'Aurora',skin_pulse:'Electric Pulse',skin_goldstorm:'Goldstorm',skin_redline:'Redline',skin_circuit:'Cyber Circuit',skin_frostline:'Frostline',skin_toxic_halo:'Toxic Halo',skin_nebula:'Nebula',skin_prism:'Prismatic Shift',weapon_knife:'Knife',footer:'Neon Arena · Player portal · No real-money payments'
  },
  ru: {
    nav_home:'Главная',nav_account:'Аккаунт',nav_sessions:'Мои сессии',nav_market:'Рынок скинов',nav_servers:'Серверы',nav_help:'Помощь',
    online_not_checked:'Фоновых проверок нет',site_setup_missing:'Портал ещё не настроен',portal_ready:'Портал готов',
    home_eyebrow:'ПОРТАЛ ИГРОКА NEON ARENA',home_title:'Игровой аккаунт — просто и удобно.',home_intro:'Управляй профилем, смотри скины, находи комнату и контролируй безопасность аккаунта в одном месте.',
    open_account:'Открыть аккаунт',browse_market:'Перейти на рынок',find_room:'Найти игру',home_no_auto:'Сайт ничего не проверяет в фоне. Данные загружаются только на нужной странице после нажатия соответствующей кнопки.',
    feature_profile:'Твой профиль',feature_profile_text:'Имя игрока, язык и игровые кредиты.',feature_sessions:'Безопасность аккаунта',feature_sessions_text:'Посмотри и отзови сессии после входа.',feature_market:'Рынок игроков',feature_market_text:'Покупай и выставляй косметические скины только за игровые кредиты.',feature_servers:'Найди комнату',feature_servers_text:'Посмотри свежие комнаты и скопируй приглашение в игру.',
    account_heading:'Твой аккаунт',account_intro:'Войди, чтобы посмотреть профиль и использовать функции аккаунта.',portal_unconfigured:'Портал игры пока не подключён к сервису аккаунтов. Попробуй позже.',
    sign_in_title:'С возвращением',sign_in_text:'Используй тот же аккаунт Neon Arena, что и в игре.',email:'Электронная почта',password:'Пароль',player_name:'Имя игрока',sign_in:'Войти',create_account:'Создать аккаунт',sign_out:'Выйти',
    register_hint:'Впервые здесь? Нажми «Создать аккаунт» и введи имя игрока.',signed_in_as:'Вход выполнен как',account_id:'ID аккаунта',app_instance:'ID этого браузера',app_session:'Сессия этого браузера',credits:'Игровые кредиты',language:'Язык',save_profile:'Сохранить профиль',load_profile:'Загрузить профиль',profile_card:'Профиль игрока',
    session_heading:'Мои сессии',session_intro:'Здесь показываются только сессии твоего аккаунта. Проверка не начнётся, пока ты не нажмёшь «Загрузить сессии».',
    sign_in_first:'Сначала войди',sessions_locked:'Сессии видны только после входа в аккаунт.',go_sign_in:'Перейти ко входу',load_sessions:'Загрузить сессии',refresh_sessions:'Обновить сессии',sessions_empty:'Активных сессий приложения не найдено.',current_session:'Этот браузер',revoke:'Отозвать',session_active:'Активна',session_revoked:'Отозвана',last_seen:'Последнее использование',session_label:'Приложение / устройство',session_id:'ID сессии',
    market_heading:'Рынок скинов',market_intro:'Смотри реальные предложения игроков. Покупки — только за игровые кредиты, без оплаты деньгами.',load_offers:'Загрузить предложения',refresh_offers:'Обновить предложения',search:'Поиск скинов',weapon_filter:'Оружие',all_weapons:'Любое оружие',sort_by:'Сортировка',sort_newest:'Сначала новые',sort_low_price:'Сначала дешевле',sort_high_price:'Сначала дороже',
    inventory_title:'Твои синхронизированные скины',load_inventory:'Загрузить мои скины',inventory_loaded:'Твои скины загружены.',choose_skin:'Выбери скин',no_synced_skins:'Скины не найдены. Сначала синхронизируй коллекцию в игре.',asking_price:'Твоя цена в кредитах',list_skin:'Выставить скин',market_empty:'Активных предложений пока нет.',market_offers:'Предложения рынка',market_load_note:'Загрузи список предложений, когда будешь готов.',no_matching_offers:'По этим фильтрам предложений нет.',no_matching_servers:'По этим фильтрам комнат нет.',inventory_hint:'Коллекция из игры загружается только по твоему запросу.',buy:'Купить',cancel_listing:'Снять с продажи',seller:'Продавец',owned_by_you:'Твоё предложение',sign_in_to_buy:'Войди, чтобы покупать или выставлять скины.',
    servers_heading:'Найти игру',servers_intro:'Свежие комнаты. Приглашение может перестать работать, когда отключится временный туннель хоста.',load_servers:'Найти комнаты',refresh_servers:'Обновить комнаты',server_search:'Поиск по названию или коду',map_filter:'Карта',all_maps:'Любая карта',mode_filter:'Режим',all_modes:'Любой режим',servers_empty:'Свежих комнат не найдено. Попробуй позже.',players:'Игроки',bots:'Боты',room_code:'Код комнаты',copy_invite:'Скопировать приглашение',invite_copied:'Приглашение скопировано. Вставь его в игре.',clipboard_error:'Не удалось скопировать автоматически. Попробуй ещё раз или скопируй данные комнаты вручную.',
    help_heading:'Краткая помощь',help_intro:'Несколько простых шагов для начала.',help_account_title:'Вход в аккаунт',help_account_text:'Используй тот же аккаунт, что и в игре. Если аккаунта нет, нажми «Создать аккаунт» на странице Аккаунт.',help_market_title:'Рынок скинов',help_market_text:'Сначала синхронизируй коллекцию в игре. Затем загрузи свои скины здесь, укажи цену и выставь скин. Покупка оплачивается только игровыми кредитами.',help_sessions_title:'Защити аккаунт',help_sessions_text:'Сначала войди, затем открой «Мои сессии». Отзови незнакомую сессию браузера или игры.',help_servers_title:'Подключение к комнате',help_servers_text:'Скопируй приглашение на странице Серверы и вставь его в игре. Адреса Quick Tunnel временные.',help_privacy_title:'Конфиденциальность',help_privacy_text:'Сайт не собирает HWID. Используются случайные ID приложения и сессии. Фоновых проверок интернета нет.',
    need_config:'Портал пока не подключён к сервису аккаунтов. Обратись к администратору игры.',invalid_email_password:'Введи корректную почту и пароль длиной не менее 8 символов.',invalid_player_name:'Имя игрока должно содержать от 1 до 24 символов.',invalid_price:'Укажи цену от 1 до 999 999 кредитов.',public_key_rejected:'Настройки сайта некорректны. Обратись к администратору игры.',working:'Подожди…',loading:'Загрузка…',network_error:'Не удалось подключиться. Проверь интернет и попробуй снова.',
    signed_in_ok:'Вход выполнен. Аккаунт готов.',signed_up_ok:'Аккаунт создан. Если нужно подтверждение, проверь почту и затем войди.',signed_out_ok:'Выход выполнен.',profile_saved:'Профиль сохранён.',session_missing:'Сессия этого браузера больше не активна. Войди снова.',session_revoked_ok:'Сессия отозвана.',offer_listed:'Скин выставлен.',offer_bought:'Покупка завершена.',offer_cancelled:'Предложение снято.',not_enough_data:'Данных пока нет. Нажми кнопку выше, чтобы загрузить их.',
    map_dust:'Неон-Даст',map_factory:'Завод',map_districts:'Кварталы',map_crossroads:'Перекрёстки',mode_surv:'Выживание',mode_dm:'Бой насмерть',mode_bomb:'Бомба',
    nav_aria:"Основная навигация",
    nav_collection:"Моя коллекция",
    nav_stats:"Статистика",
    nav_updates:"Обновления",
    auth_tabs_aria:"Доступ к аккаунту",
    auth_benefit_collection:"Коллекция остаётся закрытой, пока ты не войдёшь и сам не нажмёшь кнопку загрузки.",
    auth_benefit_privacy:"HWID не собирается. ID браузера и приложения генерируются случайно.",
    auth_benefit_profile:"Используй один аккаунт в игре и на сайте.",
    auth_email_note:"Мы отправим числовой одноразовый код. Введи его здесь, чтобы подтвердить почту.",
    back_to_sign_in:"Вернуться ко входу",
    code_help:"Введи код из письма (6–10 цифр). Если письмо не приходит, владельцу проекта нужно настроить собственный SMTP в Supabase.",
    code_placeholder:"Код из 6–10 цифр",
    email_code:"Код подтверждения",
    forgot_password:"Забыли пароль?",
    new_password:"Новый пароль",
    password_confirmation:"Повтори пароль",
    password_hint:"Используй не менее 8 символов.",
    recovery_heading:"Задай новый пароль",
    recovery_intro:"Выбери новый пароль для аккаунта.",
    register_hint_title:"Один аккаунт для игры и сайта",
    resend_code:"Отправить код ещё раз",
    resend_confirmation:"Повторно отправить код",
    save_new_password:"Сохранить новый пароль",
    schema_missing:"В базе портала нет нужных таблиц. Владельцу проекта нужно выполнить весь файл supabase/schema.sql в SQL Editor Supabase.",
    show_password:"Показать",
    hide_password:"Скрыть",
    theme_amber:"Янтарный",
    theme_choose:"Выбери цвет акцента",
    theme_custom:"Свой цвет",
    theme_label:"Тема",
    theme_lime:"Лаймовый",
    theme_neon:"Неоновый",
    theme_rose:"Розовый",
    theme_tip:"Настроить цвет акцента портала",
    theme_violet:"Фиолетовый",
    theme_heading:"Настрой внешний вид портала",
    theme_success:"Цвет акцента сохранён.",
    theme_invalid:"Выбери корректный цвет.",
    verify_code:"Подтвердить почту",
    verify_email_heading:"Подтверди почту",
    verify_email_intro:"Введи одноразовый код из письма, чтобы завершить создание аккаунта.",
    code_sent:"Запрошен код подтверждения. Проверь входящие и папку «Спам».",
    code_format:"Введи код из 6–10 цифр.",
    code_verified:"Почта подтверждена. Теперь войди по адресу и паролю.",
    code_invalid_or_expired:"Код неверен или срок его действия истёк. Запроси новый код и попробуй ещё раз.",
    smtp_restricted:"Supabase отклонил адрес получателя. Настрой собственный SMTP в проекте, чтобы отправлять письма игрокам.",
    passwords_do_not_match:"Пароли не совпадают.",
    password_changed:"Пароль изменён. Теперь можно войти.",
    recovery_email_sent:"Если адрес связан с аккаунтом, письмо для восстановления запрошено.",
    no_rows_updated:"Сервер не подтвердил изменение строк. Обнови страницу и попробуй ещё раз.",
    signout_confirmed:"Сервер подтвердил отзыв этой сессии.",
    signout_partial:"Не удалось подтвердить отзыв сессии на сервере. В этой вкладке выполнен выход, но проверь сессии аккаунта.",
    collection_heading:"Моя коллекция",
    collection_intro:"Твои синхронизированные скины видны только после входа и нажатия кнопки загрузки.",
    collection_private:"Личные данные аккаунта",
    collection_total:"Синхронизированные скины",
    load_collection:"Загрузить коллекцию",
    help_collection_text:"Войди и нажми «Загрузить коллекцию», чтобы увидеть скины из игры.",
    help_collection_title:"Посмотри коллекцию",
    help_stats_text:"Результаты матчей и игровые кредиты видны только тебе и загружаются по запросу.",
    help_stats_title:"Посмотри статистику",
    help_updates_text:"Смотри последние новости игры и портала.",
    help_updates_title:"Читай обновления",
    feature_collection:"Твоя коллекция",
    feature_collection_text:"Смотри игровые скины после входа и нажатия кнопки загрузки.",
    feature_stats:"Статистика матчей",
    feature_stats_text:"Смотри победы, поражения и заработанные кредиты.",
    feature_updates:"Последние обновления",
    feature_updates_text:"Краткий обзор изменений игры и портала.",
    home_features:"Всё нужное для игрового аккаунта",
    home_tools:"Инструменты игрока",
    servers_sorted_note:"Комнаты отсортированы по последнему heartbeat. Адреса Quick Tunnel могут истечь — скопируй адрес и код комнаты как запасной вариант.",
    credits_earned:"Заработано кредитов",
    load_stats:"Загрузить статистику",
    match_breakdown:"Результаты матчей",
    matches_lost:"Поражения",
    matches_played:"Сыграно матчей",
    matches_won:"Победы",
    recent_matches:"Последние матчи",
    stats_heading:"Твоя статистика",
    stats_intro:"Результаты матчей и заработанные кредиты загружаются только по твоему запросу.",
    stats_private:"Личная статистика",
    stats_recent_note:"Недавние результаты матчей",
    win_rate:"Доля побед",
    game_sync_label:"Синхронизация игры",
    privacy_label:"Конфиденциальность",
    update_featured:"Главное обновление",
    update_game_text:"Neon Arena продолжает получать новые карты, оружие и режимы.",
    update_game_title:"Обновления игры",
    update_portal_text:"Портал объединяет инструменты аккаунта в одном месте.",
    update_portal_title:"Обновления портала",
    update_privacy_text:"Портал использует случайные ID приложения и не собирает аппаратные ID.",
    update_privacy_title:"Конфиденциальность прежде всего",
    updates_feedback_text:"Поделись предложениями с командой Neon Arena.",
    updates_feedback_title:"Есть предложение?",
    updates_heading:"Что нового",
    updates_intro:"Последние новости игры и портала.",
    recovery_missing:"Ссылка для восстановления отсутствует или истекла. Запроси новое письмо для сброса пароля.",
    inventory_not_loaded:"Скины ещё не загружены. Нажми «Загрузить мои скины», когда будешь готов.",
    market_loaded_note:"Предложения загружены. Личная коллекция запрашивается только после нажатия «Загрузить мои скины».",
    limited_results:"Достигнут лимит отображения; список может быть неполным. Уточни фильтр или попробуй позже.",
    collection_loaded:"Коллекция загружена.",
    collection_empty:"Скины не найдены. Сначала синхронизируй коллекцию в игре.",
    stats_loaded:"Статистика матчей загружена.",
    no_matches:"Результаты матчей не найдены.",
    skin_arctic:'Арктический матовый',skin_ember:'Уголь и пламя',skin_olive:'Полевой камуфляж',skin_mono:'Монохром',skin_neon_grid:'Неоновая сетка',skin_tiger:'Тигровая линия',skin_viper:'Змеиный импульс',skin_aurora:'Полярное сияние',skin_pulse:'Электрический импульс',skin_goldstorm:'Золотой шторм',skin_redline:'Красная линия',skin_circuit:'Кибер-цепь',skin_frostline:'Ледяной разлом',skin_toxic_halo:'Токсичный ореол',skin_nebula:'Небула',skin_prism:'Призматический сдвиг',weapon_knife:'Нож',footer:'Neon Arena · Портал игрока · Без реальных платежей'
  }
};

const WEAPONS={pistol:'P250',glock:'Glock-18',usp:'USP-S',deagle:'Desert Eagle',five7:'Five-SeveN',smg:'MP9',mac10:'MAC-10',mp7:'MP7',ump:'UMP-45',p90:'P90',shotgun:'Nova',xm:'XM1014',rifle:'AK-47',m4:'M4A1-S',famas:'FAMAS',galil:'Galil AR',aug:'AUG',sniper:'AWP',ssg:'SSG 08',negev:'Negev',knife:'Knife'};
const MAP_KEYS={'Неон-Даст':'map_dust','Завод':'map_factory','Кварталы':'map_districts','Перекрёстки':'map_crossroads'};
const MODE_KEYS={surv:'mode_surv',dm:'mode_dm',bomb:'mode_bomb'};
const SKINS=['arctic','ember','olive','mono','neon_grid','tiger','viper','aurora','pulse','goldstorm','redline','circuit','frostline','toxic_halo','nebula','prism'];
const STORE={get(k){try{return window.localStorage.getItem(k)}catch(_e){return null}},set(k,v){try{window.localStorage.setItem(k,v)}catch(_e){}},remove(k){try{window.localStorage.removeItem(k)}catch(_e){}}};
const TAB={get(k){try{return window.sessionStorage.getItem(k)}catch(_e){return null}},set(k,v){try{window.sessionStorage.setItem(k,v)}catch(_e){}},remove(k){try{window.sessionStorage.removeItem(k)}catch(_e){}}};
const AUTH_KEY='neon_arena_portal_auth_v2',APP_ID_KEY='neon_arena_portal_instance_v2',LOCALE_KEY='neon_arena_portal_locale_v2';
const PENDING_SIGNUP_EMAIL_KEY='neon_arena_portal_signup_email_v1',RECOVERY_KEY='neon_arena_portal_recovery_v1',THEME_KEY='neon_arena_portal_theme_v1';
const $=id=>document.getElementById(id);
const page=document.body.dataset.page||'home';
let locale=STORE.get(LOCALE_KEY)==='ru'?'ru':'en';
let config=window.NEON_PORTAL_CONFIG||{};
let auth=parseJson(TAB.get(AUTH_KEY));
let pendingSignupEmail=TAB.get(PENDING_SIGNUP_EMAIL_KEY)||'';
let recoveryToken=TAB.get(RECOVERY_KEY)||'';
let appInstanceId=STORE.get(APP_ID_KEY)||newUuid();
let offers=[],inventory=[],servers=[],sessionRows=[],collectionRows=[],matchRows=[];let offersLoaded=false,inventoryLoaded=false,serversLoaded=false,sessionRowsLoaded=false,collectionLoaded=false,statsLoaded=false;
const pendingMarket=new Set(),pendingSessions=new Set();
STORE.set(APP_ID_KEY,appInstanceId);

function parseJson(s){try{return s?JSON.parse(s):null}catch(_e){return null}}
function t(k){return (I18N[locale]&&I18N[locale][k])||I18N.en[k]||k}
function newUuid(){if(window.crypto&&crypto.randomUUID)return crypto.randomUUID();const a=new Uint8Array(16);crypto.getRandomValues(a);a[6]=(a[6]&15)|64;a[8]=(a[8]&63)|128;const h=[...a].map(x=>x.toString(16).padStart(2,'0')).join('');return `${h.slice(0,8)}-${h.slice(8,12)}-${h.slice(12,16)}-${h.slice(16,20)}-${h.slice(20)}`}
function status(id,msg,kind=''){const e=$(id);if(!e)return;e.textContent=msg||'';e.className='status'+(kind?' '+kind:'')}
function notice(msg,kind=''){const e=$('pageNotice');if(!e)return;e.textContent=msg||'';e.className='notice'+(kind?' '+kind:'');e.hidden=!msg}
function setBusy(id,busy){const b=$(id);if(!b)return;if(busy){if(!b.dataset.busy)b.dataset.old=b.textContent;b.dataset.busy='true';b.disabled=true;b.textContent=t('working')}else{b.disabled=false;delete b.dataset.busy;if(b.dataset.old!==undefined){b.textContent=b.dataset.i18n?t(b.dataset.i18n):b.dataset.old;delete b.dataset.old}}}
function validProjectUrl(value){try{const u=new URL(String(value||'').trim());if(u.username||u.password||u.search||u.hash)return false;return u.protocol==='https:'||u.protocol==='http:'&&['localhost','127.0.0.1'].includes(u.hostname)}catch(_e){return false}}
function serviceRoleKey(value){const k=String(value||'').trim();if(/^sb_secret_/i.test(k))return true;const p=k.split('.');if(p.length<2)return false;try{let b=p[1].replace(/-/g,'+').replace(/_/g,'/');while(b.length%4)b+='=';return JSON.parse(atob(b)).role==='service_role'}catch(_e){return false}}
function validPublicKey(value){const k=String(value||'').trim();if(/^sb_publishable_[A-Za-z0-9_-]+$/.test(k))return true;const p=k.split('.');if(p.length<2)return false;try{let b=p[1].replace(/-/g,'+').replace(/_/g,'/');while(b.length%4)b+='=';return JSON.parse(atob(b)).role==='anon'}catch(_e){return false}}
function ready(){return validProjectUrl(config.supabaseUrl)&&validPublicKey(config.publicKey)&&!serviceRoleKey(config.publicKey)}
function clientInfo(withSession=true){return 'neon-arena-web/2.0'+(withSession&&auth?.appSessionId?'; neon-app-session='+auth.appSessionId:'')}
function userName(){return auth?.profile?.username||auth?.email||''}
function renderConnection(){const box=$('connectionStatus'),label=$('connectionLabel');if(!box||!label)return;box.classList.toggle('ready',ready());label.textContent=ready()?t('portal_ready'):t('site_setup_missing')}
function applyLanguage(){document.documentElement.lang=locale;document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.dataset.i18n;if(!el.dataset.busy&&I18N[locale][k])el.textContent=I18N[locale][k]});document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{const k=el.dataset.i18nPlaceholder;if(I18N[locale][k])el.placeholder=I18N[locale][k]});document.querySelectorAll('[data-i18n-title]').forEach(el=>{const k=el.dataset.i18nTitle;if(I18N[locale][k])el.title=I18N[locale][k]});document.querySelectorAll('[data-i18n-aria-label]').forEach(el=>{const k=el.dataset.i18nAriaLabel;if(I18N[locale][k])el.setAttribute('aria-label',I18N[locale][k])});document.querySelectorAll('[data-lang]').forEach(b=>b.classList.toggle('active',b.dataset.lang===locale));renderConnection();document.title='Neon Arena · '+(I18N[locale][document.body.dataset.titleKey]||'Player portal')}
function setLanguage(v){locale=v==='ru'?'ru':'en';STORE.set(LOCALE_KEY,locale);applyLanguage();if($('profileLocale'))$('profileLocale').value=locale;if($('inventorySelect')){const selected=$('inventorySelect').value;renderInventory();$('inventorySelect').value=selected}if(offersLoaded)renderOffers();if(serversLoaded)renderServers();if(sessionRowsLoaded)renderSessions(sessionRows)}
function el(tag,cls,text){const e=document.createElement(tag);if(cls)e.className=cls;if(text!==undefined)e.textContent=String(text);return e}
function resetAuth(){auth=null;offers=[];inventory=[];servers=[];sessionRows=[];offersLoaded=false;serversLoaded=false;sessionRowsLoaded=false;TAB.remove(AUTH_KEY);clearPasswordFields();for(const id of ['signedInEmail','accountIdValue','appInstanceValue','appSessionValue','creditsValue','profileName']){const e=$(id);if(e){if(id==='profileName')e.value='';else e.textContent=id==='signedInEmail'||id==='accountIdValue'||id==='appSessionValue'||id==='creditsValue'?'—':''}}renderAccountState();renderInventory();if($('sessionsList'))renderSessions([])}
function saveAuth(){if(auth)TAB.set(AUTH_KEY,JSON.stringify(auth));else TAB.remove(AUTH_KEY)}
function localSignedIn(){return !!(auth&&auth.accessToken&&auth.userId&&auth.appSessionId)}
function configError(){if(!ready())throw new Error(t('need_config'))}
function safeError(e){const m=String(e&&e.message||'');const code=String(e&&e.code||'');if(code==='email_address_not_authorized'||/email address not authorized/i.test(m))return t('smtp_restricted');if(/token has expired|invalid.*token|otp.*expired|invalid or expired/i.test(m))return t('code_invalid_or_expired');if(/PGRST205|schema cache|does not exist|could not find the table/i.test(m))return t('schema_missing');if(/no_rows_updated/i.test(m))return t('no_rows_updated');return m||t('network_error')}
async function request(path,{method='GET',body,token=null,includeSession=true,prefer='',publicOnly=false}={}){
  configError();const bearer=token||(publicOnly||!auth?config.publicKey:auth.accessToken);const headers={apikey:config.publicKey,Authorization:'Bearer '+bearer,'X-Client-Info':clientInfo(includeSession),Accept:'application/json'};if(body!==undefined)headers['Content-Type']='application/json';if(prefer)headers.Prefer=prefer;
  let res;try{res=await fetch(config.supabaseUrl.replace(/\/$/,'')+path,{method,headers,body:body===undefined?undefined:JSON.stringify(body),cache:'no-store',credentials:'omit',mode:'cors'})}catch(_e){throw new Error(t('network_error'))}
  const raw=await res.text();let data=null;if(raw){try{data=JSON.parse(raw)}catch(_e){data={message:raw}}}if(!res.ok){const m=data&&(data.msg||data.message||data.error_description||data.error||data.hint);const err=new Error(m?`${res.status}: ${m}`:`${res.status}: ${t('network_error')}`);err.status=res.status;err.code=data&&(data.code||data.error_code||data.error);err.details=data;throw err}return data;
}
async function authRequest(path,body){return request('/auth/v1'+path,{method:'POST',body,token:config.publicKey,publicOnly:true,includeSession:false})}
function writeAuth(payload,preserve=false){const u=payload.user||{};auth={accessToken:payload.access_token||'',refreshToken:payload.refresh_token||'',expiresAt:Date.now()+Math.max(60,Number(payload.expires_in||3600))*1000,userId:u.id||payload.id||auth?.userId||'',email:u.email||payload.email||auth?.email||'',appSessionId:preserve&&auth?.appSessionId?auth.appSessionId:newUuid(),profile:preserve&&auth?.profile?auth.profile:null};if(!auth.accessToken||!auth.userId)throw new Error(t('network_error'));saveAuth()}
async function refreshToken(){if(!auth?.refreshToken)throw new Error(t('session_missing'));const old=auth;const p=await authRequest('/token?grant_type=refresh_token',{refresh_token:old.refreshToken});writeAuth(p,true);if(!auth.appSessionId)auth.appSessionId=old.appSessionId;saveAuth()}
async function ensureActive(){if(!localSignedIn())throw new Error(t('sign_in_first'));if(!auth.expiresAt||auth.expiresAt<Date.now()+60000)await refreshToken();const rows=await request(`/rest/v1/app_sessions?select=session_id&session_id=eq.${encodeURIComponent(auth.appSessionId)}&user_id=eq.${encodeURIComponent(auth.userId)}&revoked_at=is.null&limit=1`);if(!Array.isArray(rows)||!rows.length){resetAuth();throw new Error(t('session_missing'))}await request(`/rest/v1/app_sessions?session_id=eq.${encodeURIComponent(auth.appSessionId)}&user_id=eq.${encodeURIComponent(auth.userId)}`,{method:'PATCH',body:{last_seen_at:new Date().toISOString()},prefer:'return=minimal'});return true}
async function registerSession(){const row={session_id:auth.appSessionId,app_instance_id:appInstanceId,user_id:auth.userId,label:'Web browser · Neon Arena',last_seen_at:new Date().toISOString()};await request('/rest/v1/app_sessions?on_conflict=session_id',{method:'POST',body:row,includeSession:false,prefer:'resolution=merge-duplicates,return=representation'});await ensureActive()}
function renderAccountState(){const signed=localSignedIn();const out=$('signedOutCard'),inside=$('signedInCard');if(out)out.hidden=signed;if(inside)inside.hidden=!signed;if(signed){if($('signedInEmail'))$('signedInEmail').textContent=auth.email||'—';if($('accountIdValue'))$('accountIdValue').textContent=String(auth.userId||'—').slice(0,12);if($('appInstanceValue'))$('appInstanceValue').textContent=appInstanceId;if($('appSessionValue'))$('appSessionValue').textContent=auth.appSessionId||'—';if($('profileName'))$('profileName').value=auth.profile?.username||'';if($('profileLocale'))$('profileLocale').value=auth.profile?.locale||locale;if($('creditsValue'))$('creditsValue').textContent=auth.profile?Number(auth.profile.credits||0).toLocaleString(locale==='ru'?'ru-RU':'en-US'):'—'}}
function authRedirectUrl(){
  const safeFallback='https://fpy0540-afk.github.io/neon-arena-portal/account.html';
  for(const raw of [String(config.siteUrl||'').trim(),safeFallback]){
    try{const u=new URL(raw);if(u.protocol==='https:'&&!/^(localhost|127\.0\.0\.1|\[::1\])$/i.test(u.hostname)&&!u.username&&!u.password)return u.href}catch(_e){}
  }
  return safeFallback;
}
function clearPasswordFields(){
  for(const id of ['password','signupPassword','signupPasswordConfirm','newPassword','newPasswordConfirm']){const e=$(id);if(e){e.value='';e.type='password'}}
  document.querySelectorAll('[data-password-toggle]').forEach(b=>{b.setAttribute('aria-pressed','false');b.textContent=t('show_password')});
}
function setAuthMode(mode){
  const signup=mode==='signup';
  if($('signInForm'))$('signInForm').hidden=signup;
  if($('signUpForm'))$('signUpForm').hidden=!signup;
  if($('authModes'))$('authModes').hidden=false;
  if($('signupVerificationPanel'))$('signupVerificationPanel').hidden=true;
  if($('recoveryPanel'))$('recoveryPanel').hidden=true;
  if($('signInTab')){$('signInTab').classList.toggle('active',!signup);$('signInTab').setAttribute('aria-selected',String(!signup));$('signInTab').tabIndex=signup?-1:0}
  if($('signUpTab')){$('signUpTab').classList.toggle('active',signup);$('signUpTab').setAttribute('aria-selected',String(signup));$('signUpTab').tabIndex=signup?0:-1}
}
function authTabKeydown(event){
  const keys=['ArrowLeft','ArrowRight','Home','End'];if(!keys.includes(event.key))return;event.preventDefault();const signup=event.currentTarget&&event.currentTarget.id==='signUpTab';const next=event.key==='Home'?false:event.key==='End'?true:event.key==='ArrowRight'?!signup:signup;setAuthMode(next?'signup':'signin');(next?$('signUpTab'):$('signInTab'))?.focus();
}
function showSignupVerification(email,announce=true){
  pendingSignupEmail=String(email||'').trim();if(!pendingSignupEmail)return;
  TAB.set(PENDING_SIGNUP_EMAIL_KEY,pendingSignupEmail);
  if($('verifyEmail'))$('verifyEmail').value=pendingSignupEmail;
  if($('verificationCode'))$('verificationCode').value='';
  if($('authModes'))$('authModes').hidden=true;
  if($('signInForm'))$('signInForm').hidden=true;
  if($('signUpForm'))$('signUpForm').hidden=true;
  if($('signupVerificationPanel'))$('signupVerificationPanel').hidden=false;
  if($('recoveryPanel'))$('recoveryPanel').hidden=true;
  if(announce)status('authStatus',t('code_sent'),'success');
}
function cancelSignupVerification(){
  pendingSignupEmail='';TAB.remove(PENDING_SIGNUP_EMAIL_KEY);if($('verificationCode'))$('verificationCode').value='';
  if($('signupVerificationPanel'))$('signupVerificationPanel').hidden=true;
  if($('recoveryPanel'))$('recoveryPanel').hidden=true;
  if($('authModes'))$('authModes').hidden=false;
  if($('signInForm'))$('signInForm').hidden=false;
  if($('signUpForm'))$('signUpForm').hidden=true;
  if($('email')&&$('verifyEmail')?.value)$('email').value=$('verifyEmail').value;
  status('authStatus','','');
}
async function verifySignupCode(event){
  if(event&&event.preventDefault)event.preventDefault();
  if(!ready()){status('authStatus',t('need_config'),'error');return}
  const email=String($('verifyEmail')?.value||pendingSignupEmail||'').trim();
  const token=String($('verificationCode')?.value||'').trim();
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){status('authStatus',t('invalid_email_password'),'error');return}
  if(!/^\d{6,10}$/.test(token)){status('authStatus',t('code_format'),'error');return}
  setBusy('verifyCodeBtn',true);
  try{
    await authRequest('/verify',{type:'signup',email,token});
    pendingSignupEmail='';TAB.remove(PENDING_SIGNUP_EMAIL_KEY);
    if($('verificationCode'))$('verificationCode').value='';
    if($('signupVerificationPanel'))$('signupVerificationPanel').hidden=true;
    if($('authModes'))$('authModes').hidden=false;
    if($('signInForm'))$('signInForm').hidden=false;
    if($('signUpForm'))$('signUpForm').hidden=true;
    if($('email'))$('email').value=email;
    status('authStatus',t('code_verified'),'success');
  }catch(e){status('authStatus',safeError(e),'error')}
  finally{setBusy('verifyCodeBtn',false);applyLanguage()}
}
async function resendConfirmation(event){
  if(event&&event.preventDefault)event.preventDefault();
  if(!ready()){status('authStatus',t('need_config'),'error');return}
  const email=String($('verifyEmail')?.value||pendingSignupEmail||$('email')?.value||'').trim();
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){status('authStatus',t('invalid_email_password'),'error');return}
  setBusy('resendConfirmationBtn',true);
  try{await authRequest('/resend?redirect_to='+encodeURIComponent(authRedirectUrl()),{email,type:'signup'});showSignupVerification(email,true)}
  catch(e){status('authStatus',safeError(e),'error')}
  finally{setBusy('resendConfirmationBtn',false);applyLanguage()}
}
async function resendSignupCode(event){
  if(event&&event.preventDefault)event.preventDefault();
  if(!ready()){status('authStatus',t('need_config'),'error');return}
  const email=String($('verifyEmail')?.value||pendingSignupEmail||'').trim();
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){status('authStatus',t('invalid_email_password'),'error');return}
  setBusy('resendCodeBtn',true);
  try{await authRequest('/resend?redirect_to='+encodeURIComponent(authRedirectUrl()),{email,type:'signup'});showSignupVerification(email,true)}
  catch(e){status('authStatus',safeError(e),'error')}
  finally{setBusy('resendCodeBtn',false);applyLanguage()}
}
async function signIn(event){
  if(event&&event.preventDefault)event.preventDefault();
  if(!ready()){status('authStatus',t('need_config'),'error');return}
  const email=$('email')?.value.trim()||'',pass=$('password')?.value||'';
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)||pass.length<8){status('authStatus',t('invalid_email_password'),'error');return}
  setBusy('signInBtn',true);
  try{const p=await authRequest('/token?grant_type=password',{email,password:pass});writeAuth(p,false);await registerSession();status('authStatus',t('signed_in_ok'),'success');clearPasswordFields();renderAccountState();await loadProfile()}
  catch(e){resetAuth();status('authStatus',safeError(e),'error');clearPasswordFields()}
  finally{setBusy('signInBtn',false);applyLanguage()}
}
async function signUp(event){
  if(event&&event.preventDefault)event.preventDefault();
  if(!ready()){status('authStatus',t('need_config'),'error');return}
  const email=$('signupEmail')?.value.trim()||'',pass=$('signupPassword')?.value||'',confirmPass=$('signupPasswordConfirm')?.value||'',name=$('signupName')?.value.trim()||'';
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)||pass.length<8||pass.length>128){status('authStatus',t('invalid_email_password'),'error');return}
  if(pass!==confirmPass){status('authStatus',t('passwords_do_not_match'),'error');return}
  if(!name||name.length>24){status('authStatus',t('invalid_player_name'),'error');return}
  setBusy('signUpBtn',true);
  try{
    const p=await authRequest('/signup?redirect_to='+encodeURIComponent(authRedirectUrl()),{email,password:pass,data:{username:name,locale}});
    clearPasswordFields();
    if(p&&p.access_token){writeAuth(p,false);await registerSession();renderAccountState();status('authStatus',t('signed_in_ok'),'success');await loadProfile()}
    else showSignupVerification(email,true);
  }catch(e){status('authStatus',safeError(e),'error')}
  finally{setBusy('signUpBtn',false);applyLanguage()}
}
async function forgotPassword(){
  if(!ready()){status('authStatus',t('need_config'),'error');return}
  const email=String($('email')?.value||'').trim();if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){status('authStatus',t('invalid_email_password'),'error');return}
  setBusy('forgotPasswordBtn',true);
  try{await authRequest('/recover?redirect_to='+encodeURIComponent(authRedirectUrl()),{email});status('authStatus',t('recovery_email_sent'),'success')}
  catch(e){status('authStatus',safeError(e),'error')}
  finally{setBusy('forgotPasswordBtn',false);applyLanguage()}
}
function showRecovery(token){
  const tkn=String(token||'').trim();if(tkn){recoveryToken=tkn;TAB.set(RECOVERY_KEY,recoveryToken)}
  if($('authModes'))$('authModes').hidden=true;
  if($('signInForm'))$('signInForm').hidden=true;
  if($('signUpForm'))$('signUpForm').hidden=true;
  if($('signupVerificationPanel'))$('signupVerificationPanel').hidden=true;
  if($('recoveryPanel'))$('recoveryPanel').hidden=false;
}
function cancelRecovery(){
  recoveryToken='';TAB.remove(RECOVERY_KEY);clearPasswordFields();
  if($('recoveryPanel'))$('recoveryPanel').hidden=true;
  if($('signupVerificationPanel'))$('signupVerificationPanel').hidden=true;
  if($('authModes'))$('authModes').hidden=false;
  if($('signInForm'))$('signInForm').hidden=false;
  if($('signUpForm'))$('signUpForm').hidden=true;
  status('authStatus','','');
}
async function saveNewPassword(event){
  if(event&&event.preventDefault)event.preventDefault();
  const token=recoveryToken||TAB.get(RECOVERY_KEY)||'';const password=$('newPassword')?.value||'',confirmPass=$('newPasswordConfirm')?.value||'';
  if(!token){status('authStatus',t('recovery_missing'),'error');return}
  if(password.length<8||password.length>128){status('authStatus',t('invalid_email_password'),'error');return}
  if(password!==confirmPass){status('authStatus',t('passwords_do_not_match'),'error');return}
  setBusy('saveNewPasswordBtn',true);
  try{await request('/auth/v1/user',{method:'PUT',body:{password},token,publicOnly:true,includeSession:false});recoveryToken='';TAB.remove(RECOVERY_KEY);clearPasswordFields();if($('recoveryPanel'))$('recoveryPanel').hidden=true;if($('authModes'))$('authModes').hidden=false;if($('signInForm'))$('signInForm').hidden=false;status('authStatus',t('password_changed'),'success')}
  catch(e){status('authStatus',safeError(e),'error')}
  finally{setBusy('saveNewPasswordBtn',false);applyLanguage()}
}
function readRecoveryLink(){
  const hash=String(location.hash||'');const params={};for(const part of hash.replace(/^#/,'').split('&')){const i=part.indexOf('=');if(i>0){try{params[decodeURIComponent(part.slice(0,i))]=decodeURIComponent(part.slice(i+1).replace(/\+/g,' '))}catch(_e){}}}const token=params.access_token||'';const type=params.type||'';
  if(token&&type==='recovery'){showRecovery(token);try{window.history.replaceState({},document.title,location.pathname)}catch(_e){}}
  else if(recoveryToken)showRecovery(recoveryToken);
}
async function signOut(event){
  if(event&&event.preventDefault)event.preventDefault();
  if(!localSignedIn()){resetAuth();return}
  const old=auth;setBusy('signOutBtn',true);let confirmed=false;
  try{
    const rows=await request(`/rest/v1/app_sessions?session_id=eq.${encodeURIComponent(old.appSessionId)}&user_id=eq.${encodeURIComponent(old.userId)}&revoked_at=is.null&select=session_id,revoked_at`,{method:'PATCH',body:{revoked_at:new Date().toISOString()},token:old.accessToken,includeSession:true,prefer:'return=representation'});
    if(Array.isArray(rows)&&rows.length){await request('/auth/v1/logout?scope=local',{method:'POST',body:{},token:old.accessToken,includeSession:false});confirmed=true}
  }catch(_e){confirmed=false}
  finally{resetAuth();notice(t(confirmed?'signout_confirmed':'signout_partial'),confirmed?'success':'error');status('authStatus',t(confirmed?'signed_out_ok':'signout_partial'),confirmed?'success':'error');setBusy('signOutBtn',false);applyLanguage()}
}
async function loadProfile(){if(!localSignedIn()){status('profileStatus',t('sign_in_first'),'error');return}setBusy('loadProfileBtn',true);try{await ensureActive();const rows=await request(`/rest/v1/profiles?select=id,username,locale,credits&id=eq.${encodeURIComponent(auth.userId)}&limit=1`);const p=Array.isArray(rows)?rows[0]:null;if(!p)throw new Error(t('network_error'));auth.profile=p;saveAuth();renderAccountState();status('profileStatus','', '')}catch(e){status('profileStatus',safeError(e),'error')}finally{setBusy('loadProfileBtn',false)}}
async function saveProfile(){
  if(!localSignedIn()){status('profileStatus',t('sign_in_first'),'error');return}
  const username=$('profileName')?.value.trim()||'',profileLocale=$('profileLocale')?.value||locale;
  if(!username||username.length>24){status('profileStatus',t('invalid_player_name'),'error');return}
  setBusy('saveProfileBtn',true);
  try{
    await ensureActive();
    const changed=await request(`/rest/v1/profiles?id=eq.${encodeURIComponent(auth.userId)}&select=id`,{method:'PATCH',body:{username,locale:profileLocale},prefer:'return=representation'});
    if(!Array.isArray(changed)||!changed.length)throw new Error('no_rows_updated');
    locale=profileLocale;STORE.set(LOCALE_KEY,locale);auth.profile={...(auth.profile||{}),username,locale:profileLocale};saveAuth();applyLanguage();renderAccountState();status('profileStatus',t('profile_saved'),'success')
  }catch(e){status('profileStatus',safeError(e),'error')}
  finally{setBusy('saveProfileBtn',false)}
}
function renderSessions(rows){sessionRows=rows;sessionRowsLoaded=true;const root=$('sessionsList');if(!root)return;root.replaceChildren();if(!rows.length){root.append(el('div','empty',t('sessions_empty')));return}for(const rowData of rows){const current=rowData.session_id===auth?.appSessionId;const row=el('article','list-row'),icon=el('div','skin-icon',current?'●':'○'),main=el('div','list-main');main.append(el('div','list-title',rowData.label||'Neon Arena'));main.append(el('div','list-meta',`${t('last_seen')}: ${formatDate(rowData.last_seen_at)} · ${t('session_id')}: ${String(rowData.session_id||'').slice(0,8)}`));const actions=el('div','list-actions');if(current&&!rowData.revoked_at)actions.append(el('span','badge good',t('current_session')));else if(rowData.revoked_at)actions.append(el('span','badge warn',t('session_revoked')));else{actions.append(el('span','badge good',t('session_active')));const b=el('button','btn danger small',t('revoke'));b.type='button';b.addEventListener('click',()=>revokeSession(rowData.session_id));actions.append(b)}row.append(icon,main,actions);root.append(row)}}
function formatDate(v){if(!v)return'—';const d=new Date(v);if(Number.isNaN(d.valueOf()))return'—';try{return new Intl.DateTimeFormat(locale==='ru'?'ru-RU':'en-GB',{dateStyle:'medium',timeStyle:'short'}).format(d)}catch(_e){return d.toLocaleString()}}
async function loadSessions(){const locked=$('sessionsLocked'),panel=$('sessionsPanel');if(!localSignedIn()){if(locked)locked.hidden=false;if(panel)panel.hidden=true;return}if(locked)locked.hidden=true;if(panel)panel.hidden=false;setBusy('loadSessionsBtn',true);setBusy('refreshSessionsBtn',true);try{await ensureActive();const rows=await request(`/rest/v1/app_sessions?select=session_id,label,created_at,last_seen_at,revoked_at&user_id=eq.${encodeURIComponent(auth.userId)}&order=last_seen_at.desc`);renderSessions(Array.isArray(rows)?rows:[]);status('sessionsStatus','', '')}catch(e){status('sessionsStatus',safeError(e),'error');if(!localSignedIn()){if(locked)locked.hidden=false;if(panel)panel.hidden=true}}finally{setBusy('loadSessionsBtn',false);setBusy('refreshSessionsBtn',false)}}
async function revokeSession(id){
  if(!localSignedIn()||!window.confirm(locale==='ru'?'Отозвать эту сессию?':'Revoke this session?'))return;
  if(pendingSessions.has(String(id)))return;pendingSessions.add(String(id));
  try{
    await ensureActive();
    const rows=await request(`/rest/v1/app_sessions?session_id=eq.${encodeURIComponent(id)}&user_id=eq.${encodeURIComponent(auth.userId)}&select=session_id,revoked_at`,{method:'PATCH',body:{revoked_at:new Date().toISOString()},prefer:'return=representation'});
    if(!Array.isArray(rows)||!rows.length)throw new Error('no_rows_updated');
    if(id===auth.appSessionId){resetAuth();status('sessionsStatus',t('session_revoked_ok'),'success')}else{status('sessionsStatus',t('session_revoked_ok'),'success');await loadSessions()}
  }catch(e){status('sessionsStatus',safeError(e),'error')}
  finally{pendingSessions.delete(String(id))}
}
function skinName(id){return t('skin_'+id)||id||'—'}
function weaponName(id){return WEAPONS[id]||id||'—'}
const MAX_LIST_ROWS=5000;
async function requestAllRows(path,options={}){
  const rows=[];const pageSize=1000;let complete=false;
  while(rows.length<MAX_LIST_ROWS){
    const remaining=MAX_LIST_ROWS-rows.length;
    const separator=path.includes('?')?'&':'?';
    const page=await request(`${path}${separator}limit=${Math.min(pageSize,remaining)}&offset=${rows.length}`,options);
    if(!Array.isArray(page)){complete=true;break}
    rows.push(...page);
    if(page.length<Math.min(pageSize,remaining)){complete=true;break}
  }
  if(!complete&&rows.length>=MAX_LIST_ROWS)notice(t('limited_results'),'error');
  return rows;
}
function renderInventory(){
  const s=$('inventorySelect');if(s){s.replaceChildren();const first=el('option','',t(inventoryLoaded?(inventory.length?'choose_skin':'no_synced_skins'):'inventory_not_loaded'));first.value='';s.append(first);for(const it of inventory){const o=el('option','',`${weaponName(it.weapon_id)} · ${skinName(it.skin_id)}`);o.value=`${it.weapon_id}:${it.skin_id}`;s.append(o)}}
  if($('inventoryCount'))$('inventoryCount').textContent=inventoryLoaded?String(inventory.length):'—';
  if($('inventoryBadge'))$('inventoryBadge').textContent=inventoryLoaded?String(inventory.length):'—';
  if($('listSkinBtn'))$('listSkinBtn').disabled=!localSignedIn()||!inventoryLoaded||!inventory.length;
  if($('inventoryHint'))$('inventoryHint').textContent=t(inventoryLoaded?'inventory_loaded':'inventory_not_loaded');
}
function renderOffers(){const root=$('offersList');if(!root)return;root.replaceChildren();if(!offersLoaded){root.append(el('div','empty',t('not_enough_data')));return}const q=($('marketSearch')?.value||'').toLowerCase(),weapon=$('weaponFilter')?.value||'',sort=$('sortBy')?.value||'new';let rows=offers.filter(o=>{const label=(weaponName(o.weapon_id)+' '+skinName(o.skin_id)+' '+(o.seller_id||'')).toLowerCase();return (!q||label.includes(q))&&(!weapon||o.weapon_id===weapon)});if(sort==='low')rows.sort((a,b)=>Number(a.price)-Number(b.price));else if(sort==='high')rows.sort((a,b)=>Number(b.price)-Number(a.price));else rows.sort((a,b)=>new Date(b.created_at)-new Date(a.created_at));if(!offers.length){root.append(el('div','empty',t('market_empty')));return}if(!rows.length){root.append(el('div','empty',t('no_matching_offers')));return}for(const offer of rows){const row=el('article','list-row'),icon=el('div','skin-icon','✦'),main=el('div','list-main');main.append(el('div','list-title',`${weaponName(offer.weapon_id)} · ${skinName(offer.skin_id)}`));main.append(el('div','list-meta',`${t('seller')}: ${String(offer.seller_id||'').slice(0,8)} · ${formatDate(offer.created_at)}`));const actions=el('div','list-actions');actions.append(el('span','price',`${Number(offer.price||0).toLocaleString(locale==='ru'?'ru-RU':'en-US')} CR`));if(localSignedIn()&&offer.seller_id===auth.userId){const b=el('button','btn danger small',t('cancel_listing'));b.type='button';b.addEventListener('click',()=>cancelOffer(offer.id));actions.append(b)}else if(localSignedIn()){const b=el('button','btn primary small',t('buy'));b.type='button';b.addEventListener('click',()=>buyOffer(offer.id));actions.append(b)}else{const a=el('a','btn small',t('sign_in'));a.href='account.html';actions.append(a)}row.append(icon,main,actions);root.append(row)}}
async function loadMarket(){
  if(!ready()){status('marketStatus',t('need_config'),'error');return}
  setBusy('loadOffersBtn',true);setBusy('refreshOffersBtn',true);
  try{
    offers=await requestAllRows('/rest/v1/market_listings?select=id,seller_id,weapon_id,skin_id,price,status,created_at&status=eq.active&order=created_at.desc',{publicOnly:true,includeSession:false})||[];
    offersLoaded=true;renderOffers();
    if($('marketLoadNote'))$('marketLoadNote').textContent=t('market_loaded_note');
    status('marketStatus','', '');
  }catch(e){status('marketStatus',safeError(e),'error')}
  finally{setBusy('loadOffersBtn',false);setBusy('refreshOffersBtn',false)}
}
async function loadInventory(){
  if(!localSignedIn()){status('marketStatus',t('sign_in_to_buy'),'error');return}
  setBusy('loadInventoryBtn',true);
  try{await ensureActive();inventory=await requestAllRows(`/rest/v1/user_skins?select=id,weapon_id,skin_id,created_at&owner_id=eq.${encodeURIComponent(auth.userId)}&order=created_at.desc`);inventoryLoaded=true;renderInventory();status('marketStatus',t('inventory_loaded'),'success')}
  catch(e){status('marketStatus',safeError(e),'error')}
  finally{setBusy('loadInventoryBtn',false)}
}
async function listSkin(){if(!localSignedIn()){status('marketStatus',t('sign_in_to_buy'),'error');return}if(!inventoryLoaded){status('marketStatus',t('inventory_not_loaded'),'error');return}const value=$('inventorySelect')?.value||'',price=Number($('askingPrice')?.value);if(!value){status('marketStatus',t('no_synced_skins'),'error');return}if(!Number.isInteger(price)||price<1||price>999999){status('marketStatus',t('invalid_price')||t('network_error'),'error');return}const [weapon_id,skin_id]=value.split(':');setBusy('listSkinBtn',true);try{await ensureActive();await request('/rest/v1/market_listings',{method:'POST',body:{seller_id:auth.userId,weapon_id,skin_id,price,status:'active'},prefer:'return=minimal'});status('marketStatus',t('offer_listed'),'success');await loadMarket()}catch(e){status('marketStatus',safeError(e),'error')}finally{setBusy('listSkinBtn',false)}}
async function buyOffer(id){
  if(!localSignedIn()){status('marketStatus',t('sign_in_to_buy'),'error');return}
  const key=`buy:${id}`;if(pendingMarket.has(key))return;pendingMarket.add(key);
  try{await ensureActive();await request('/rest/v1/rpc/buy_market_listing',{method:'POST',body:{p_listing_id:id}});status('marketStatus',t('offer_bought'),'success');await loadMarket()}
  catch(e){status('marketStatus',safeError(e),'error')}
  finally{pendingMarket.delete(key)}
}
async function cancelOffer(id){
  if(!localSignedIn())return;
  const key=`cancel:${id}`;if(pendingMarket.has(key))return;pendingMarket.add(key);
  try{await ensureActive();await request('/rest/v1/rpc/cancel_market_listing',{method:'POST',body:{p_listing_id:id}});status('marketStatus',t('offer_cancelled'),'success');await loadMarket()}
  catch(e){status('marketStatus',safeError(e),'error')}
  finally{pendingMarket.delete(key)}
}
async function loadCollection(){
  const locked=$('collectionLocked'),panel=$('collectionPanel');
  if(!localSignedIn()){if(locked)locked.hidden=false;if(panel)panel.hidden=true;status('collectionStatus',t('sign_in_first'),'error');return}
  if(locked)locked.hidden=true;if(panel)panel.hidden=false;
  setBusy('loadCollectionBtn',true);
  try{await ensureActive();collectionRows=await requestAllRows(`/rest/v1/user_skins?select=id,weapon_id,skin_id,created_at&owner_id=eq.${encodeURIComponent(auth.userId)}&order=created_at.desc`);collectionLoaded=true;const root=$('collectionList');if(root){root.replaceChildren();if(!collectionRows.length)root.append(el('div','empty',t('collection_empty')));else for(const item of collectionRows){const row=el('article','list-row'),icon=el('div','skin-icon','✦'),main=el('div','list-main');main.append(el('div','list-title',`${weaponName(item.weapon_id)} · ${skinName(item.skin_id)}`));main.append(el('div','list-meta',formatDate(item.created_at)));row.append(icon,main);root.append(row)}}if($('collectionCountValue'))$('collectionCountValue').textContent=String(collectionRows.length);status('collectionStatus',t('collection_loaded'),'success')}
  catch(e){status('collectionStatus',safeError(e),'error')}
  finally{setBusy('loadCollectionBtn',false)}
}
async function loadStats(){
  const locked=$('statsLocked'),panel=$('statsPanel');
  if(!localSignedIn()){if(locked)locked.hidden=false;if(panel)panel.hidden=true;status('statsStatus',t('sign_in_first'),'error');return}
  if(locked)locked.hidden=true;if(panel)panel.hidden=false;
  setBusy('loadStatsBtn',true);
  try{
    await ensureActive();matchRows=await requestAllRows(`/rest/v1/match_credit_awards?select=match_id,mode,won,amount,created_at&user_id=eq.${encodeURIComponent(auth.userId)}&order=created_at.desc`);statsLoaded=true;
    const wins=matchRows.filter(r=>r.won===true||r.won===1||r.won==='true').length,losses=matchRows.length-wins,credits=matchRows.reduce((n,r)=>n+Number(r.amount||0),0),rate=matchRows.length?Math.round(wins*100/matchRows.length):0;
    for(const [id,value] of [['matchCountValue',matchRows.length],['winCountValue',wins],['lossCountValue',losses],['winRateValue',`${rate}%`],['creditsEarnedValue',credits.toLocaleString(locale==='ru'?'ru-RU':'en-US')]])if($(id))$(id).textContent=String(value);
    if($('winProgress'))$('winProgress').style.width=`${rate}%`;if($('lossProgress'))$('lossProgress').style.width=`${100-rate}%`;
    const root=$('recentMatches');if(root){root.replaceChildren();if(!matchRows.length)root.append(el('div','empty',t('no_matches')));else for(const match of matchRows.slice(0,10)){const row=el('article','list-row'),main=el('div','list-main');main.append(el('div','list-title',`${modeName(match.mode)} · ${match.won?'Win':'Loss'}`));main.append(el('div','list-meta',`${formatDate(match.created_at)} · ${Number(match.amount||0)} CR`));row.append(main);root.append(row)}}
    status('statsStatus',t('stats_loaded'),'success');
  }catch(e){status('statsStatus',safeError(e),'error')}
  finally{setBusy('loadStatsBtn',false)}
}
function mapName(id){return t(MAP_KEYS[id]||'')||id||'—'}
function modeName(id){return t(MODE_KEYS[id]||'')||id||'—'}
function renderServers(){const root=$('serversList');if(!root)return;root.replaceChildren();if(!serversLoaded){root.append(el('div','empty',t('not_enough_data')));return}const q=($('serverSearch')?.value||'').toLowerCase(),map=$('mapFilter')?.value||'',mode=$('modeFilter')?.value||'';const rows=servers.filter(s=>(!q||`${s.server_name} ${s.room_code}`.toLowerCase().includes(q))&&(!map||s.map_id===map)&&(!mode||s.mode===mode));if(!servers.length){root.append(el('div','empty',t('servers_empty')));return}if(!rows.length){root.append(el('div','empty',t('no_matching_servers')));return}for(const s of rows){const row=el('article','list-row'),icon=el('div','skin-icon','⌖'),main=el('div','list-main');main.append(el('div','list-title',s.server_name||'Neon Arena'));main.append(el('div','list-meta',`${mapName(s.map_id)} · ${modeName(s.mode)} · ${Number(s.player_count||0)}/${Number(s.max_players||6)} ${t('players')} · ${Number(s.bot_count||0)} ${t('bots')}`));const actions=el('div','list-actions'),tag=el('span','server-tag',`${t('room_code')}: ${s.room_code||'—'}`);actions.append(tag);const b=el('button','btn small',t('copy_invite'));b.type='button';b.addEventListener('click',()=>copyInvite(s));actions.append(b);row.append(icon,main,actions);root.append(row)}}
async function loadServers(){if(!ready()){status('serversStatus',t('need_config'),'error');return}setBusy('loadServersBtn',true);setBusy('refreshServersBtn',true);try{if(localSignedIn())await ensureActive();const cutoff=new Date(Date.now()-120000).toISOString();const q=`/rest/v1/server_directory?select=id,server_name,relay_url,room_code,map_id,mode,player_count,max_players,bot_count,last_seen_at&last_seen_at=gte.${encodeURIComponent(cutoff)}&order=last_seen_at.desc&limit=100`;servers=await request(q,{publicOnly:!localSignedIn(),includeSession:localSignedIn()})||[];serversLoaded=true;renderServers();status('serversStatus','', '')}catch(e){status('serversStatus',safeError(e),'error')}finally{setBusy('loadServersBtn',false);setBusy('refreshServersBtn',false)}}
async function copyInvite(s){const text=`${s.relay_address||s.relay_url||''}\n${locale==='ru'?'Код комнаты':'Room code'}: ${s.room_code||''}`;try{if(navigator.clipboard&&window.isSecureContext)await navigator.clipboard.writeText(text);else{const ta=document.createElement('textarea');ta.value=text;ta.style.position='fixed';ta.style.opacity='0';document.body.append(ta);ta.select();const copied=document.execCommand('copy');ta.remove();if(!copied)throw new Error('copy failed')}status('serversStatus',t('invite_copied'),'success')}catch(_e){notice(t('clipboard_error'),'error')}}
const THEME_PRESETS={neon:'#59e1d3',violet:'#a78bfa',rose:'#fb7185',amber:'#fbbf24',lime:'#a3e635'};
function setTheme(color,persist=true){
  const value=String(color||'').trim();if(!/^#[0-9a-f]{6}$/i.test(value))return false;
  const hex=value.slice(1),r=parseInt(hex.slice(0,2),16),g=parseInt(hex.slice(2,4),16),b=parseInt(hex.slice(4,6),16),luminance=(.2126*r+.7152*g+.0722*b)/255;
  const ink=luminance>.62?'#07131b':'#ffffff';if(document.documentElement.style&&document.documentElement.style.setProperty){document.documentElement.style.setProperty('--cyan',value);document.documentElement.style.setProperty('--primary-ink',ink)}
  if($('accentPicker')&&$('accentPicker').value.toLowerCase()!==value.toLowerCase())$('accentPicker').value=value;
  document.querySelectorAll('[data-theme-preset]').forEach(button=>button.classList.toggle('active',THEME_PRESETS[button.dataset.themePreset]===value));
  if(persist)STORE.set(THEME_KEY,value);return true;
}
function init(){
  document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>setLanguage(b.dataset.lang)));
  document.querySelectorAll('[data-theme-preset]').forEach(b=>b.addEventListener('click',()=>setTheme(THEME_PRESETS[b.dataset.themePreset])));
  const accentPicker=$('accentPicker');if(accentPicker)accentPicker.addEventListener('input',()=>setTheme(accentPicker.value,false));
  const savedTheme=STORE.get(THEME_KEY);if(accentPicker){if(savedTheme&&/^#[0-9a-f]{6}$/i.test(savedTheme))accentPicker.value=savedTheme;setTheme(accentPicker.value,false)}else setTheme(savedTheme||'#59e1d3',false);
  const links=[...document.querySelectorAll('.nav a')];for(const a of links)if(a.getAttribute('href')===location.pathname.split('/').pop()||page==='home'&&a.getAttribute('href')==='index.html')a.classList.add('active');
  document.querySelectorAll('[data-password-toggle]').forEach(b=>b.addEventListener('click',()=>{const input=$(b.dataset.passwordToggle);if(!input)return;const show=input.type==='password';input.type=show?'text':'password';b.setAttribute('aria-pressed',String(show));b.textContent=t(show?'hide_password':'show_password')}));
  if($('signInTab')){$('signInTab').addEventListener('click',()=>setAuthMode('signin'));$('signInTab').addEventListener('keydown',authTabKeydown)}
  if($('signUpTab')){$('signUpTab').addEventListener('click',()=>setAuthMode('signup'));$('signUpTab').addEventListener('keydown',authTabKeydown)}
  if($('signInForm'))$('signInForm').addEventListener('submit',signIn);
  if($('signUpForm'))$('signUpForm').addEventListener('submit',signUp);
  if($('signupVerificationForm'))$('signupVerificationForm').addEventListener('submit',verifySignupCode);
  if($('cancelVerifyBtn'))$('cancelVerifyBtn').addEventListener('click',cancelSignupVerification);
  if($('resendCodeBtn'))$('resendCodeBtn').addEventListener('click',resendSignupCode);
  if($('resendConfirmationBtn'))$('resendConfirmationBtn').addEventListener('click',resendConfirmation);
  if($('forgotPasswordBtn'))$('forgotPasswordBtn').addEventListener('click',forgotPassword);
  if($('recoveryForm'))$('recoveryForm').addEventListener('submit',saveNewPassword);
  if($('recoveryCancelBtn'))$('recoveryCancelBtn').addEventListener('click',cancelRecovery);
  if($('signOutBtn'))$('signOutBtn').addEventListener('click',signOut);
  if($('loadCollectionBtn'))$('loadCollectionBtn').addEventListener('click',loadCollection);
  if($('loadStatsBtn'))$('loadStatsBtn').addEventListener('click',loadStats);
  if($('loadProfileBtn'))$('loadProfileBtn').addEventListener('click',loadProfile);
  if($('saveProfileBtn'))$('saveProfileBtn').addEventListener('click',saveProfile);
  if($('loadSessionsBtn'))$('loadSessionsBtn').addEventListener('click',loadSessions);
  if($('refreshSessionsBtn'))$('refreshSessionsBtn').addEventListener('click',loadSessions);
  if($('loadOffersBtn'))$('loadOffersBtn').addEventListener('click',loadMarket);
  if($('refreshOffersBtn'))$('refreshOffersBtn').addEventListener('click',loadMarket);
  if($('loadInventoryBtn'))$('loadInventoryBtn').addEventListener('click',loadInventory);
  if($('loadServersBtn'))$('loadServersBtn').addEventListener('click',loadServers);
  if($('refreshServersBtn'))$('refreshServersBtn').addEventListener('click',loadServers);
  if($('listSkinBtn'))$('listSkinBtn').addEventListener('click',listSkin);
  for(const id of ['marketSearch','weaponFilter','sortBy'])if($(id))$(id).addEventListener('input',renderOffers);
  for(const id of ['serverSearch','mapFilter','modeFilter'])if($(id))$(id).addEventListener('input',renderServers);
  if($('sessionsLocked')&&!localSignedIn()){$('sessionsLocked').hidden=false;if($('sessionsPanel'))$('sessionsPanel').hidden=true}
  if($('collectionLocked')&&!localSignedIn()){$('collectionLocked').hidden=false;if($('collectionPanel'))$('collectionPanel').hidden=true}
  if($('statsLocked')&&!localSignedIn()){$('statsLocked').hidden=false;if($('statsPanel'))$('statsPanel').hidden=true}
  if($('sessionsLocked')&&localSignedIn()){$('sessionsLocked').hidden=true;if($('sessionsPanel'))$('sessionsPanel').hidden=false}
  if($('signInBtn'))$('signInBtn').disabled=!ready();if($('signUpBtn'))$('signUpBtn').disabled=!ready();if($('verifyCodeBtn'))$('verifyCodeBtn').disabled=!ready();if($('resendCodeBtn'))$('resendCodeBtn').disabled=!ready();if($('saveNewPasswordBtn'))$('saveNewPasswordBtn').disabled=!ready();
  if($('signupVerificationPanel'))$('signupVerificationPanel').hidden=true;if($('recoveryPanel'))$('recoveryPanel').hidden=true;
  setAuthMode('signin');
  if(pendingSignupEmail)showSignupVerification(pendingSignupEmail,false);
  readRecoveryLink();
  applyLanguage();renderAccountState();
  renderInventory();
  const cfgNote=$('configNote');if(cfgNote)cfgNote.hidden=ready();
}
document.addEventListener('DOMContentLoaded',init);
