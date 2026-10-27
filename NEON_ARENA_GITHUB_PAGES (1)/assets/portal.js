'use strict';

const I18N = {
  en: {
    nav_aria:'Main navigation',home_features:'Player features',home_tools:'More player tools',auth_tabs_aria:'Account access',back_to_sign_in:'Back to sign in',nav_home:'Home',nav_account:'Account',nav_sessions:'My sessions',nav_collection:'My collection',nav_stats:'Stats',nav_market:'Skin market',nav_servers:'Servers',nav_updates:'Updates',nav_help:'Help',theme_label:'Theme',theme_choose:'Choose accent color',theme_custom:'Custom color',theme_neon:'Neon',theme_violet:'Violet',theme_rose:'Rose',theme_amber:'Amber',theme_lime:'Lime',theme_tip:'Customize the portal accent colors.',
    online_not_checked:'No background checks',site_setup_missing:'Portal is not set up yet',portal_ready:'Client config loaded',
    home_eyebrow:'NEON ARENA PLAYER HUB',home_title:'Your game account, made simple.',home_intro:'Manage your profile, browse skins, find a room, and keep your account safe — all in one place.',
    open_account:'Open my account',browse_market:'Browse the market',find_room:'Find a game',home_no_auto:'Nothing is checked in the background. Pages load data only when you open them and press the matching button.',
    feature_profile:'Your profile',feature_profile_text:'See your player name, language, and game credits.',feature_sessions:'Account safety',feature_sessions_text:'Review and revoke sessions after you sign in.',feature_market:'Player market',feature_market_text:'Buy and list cosmetic skins for game credits only.',feature_servers:'Find a room',feature_servers_text:'Browse recent rooms and copy an invite for the game.',feature_collection:'Your collection',feature_collection_text:'See your game skins in one private, synced list.',feature_stats:'Your stats',feature_stats_text:'Review wins, match history, and earned credits.',feature_updates:'Portal updates',feature_updates_text:'See what changed and get quick guidance.',help_collection_title:'View your collection',help_collection_text:'Sign in, then load the collection. Sync skins from the game first.',help_stats_title:'Check your stats',help_stats_text:'Your private match history loads only after sign-in and a button press.',help_updates_title:'Read updates',help_updates_text:'Learn about new portal features, privacy, and setup notes.',
    account_heading:'Your account',account_intro:'Sign in to view your profile and use account features.',portal_unconfigured:'The game portal has not been connected to its account service yet. Please try again later.',
    sign_in_title:'Welcome back',sign_in_text:'Use the same Neon Arena account as in the game.',email:'Email address',password:'Password',password_confirmation:'Confirm password',password_hint:'Use at least 8 characters.',show_password:'Show',hide_password:'Hide',forgot_password:'Forgot password?',send_reset_link:'Send reset link',resend_confirmation:'Resend confirmation email',auth_invalid_email:'Enter a valid email address.',password_mismatch:'Passwords do not match.',password_too_short:'Password must be at least 8 characters.',auth_invalid_credentials:'Email or password is incorrect.',auth_email_not_confirmed:'Confirm your email first, then sign in.',auth_email_taken:'An account already exists for this email. Sign in instead.',auth_email_smtp_needed:'Supabase test email only reaches project team members. Configure custom SMTP to email regular users.',auth_rate_limited:'Too many attempts. Wait a bit and try again.',auth_signups_disabled:'Account registration is currently disabled.',confirmation_sent:'Confirmation email sent. Check your inbox.',password_reset_sent:'If that email is registered, a password reset link has been sent.',recovery_heading:'Set a new password',recovery_intro:'Choose a new password for your account.',new_password:'New password',save_new_password:'Save new password',password_reset_done:'Password changed. Sign in with your new password.',auth_email_note:'A confirmation link is sent when verification is enabled. If nothing arrives, check spam and the project SMTP settings.',email_confirmed_hint:'Email confirmed. Sign in to continue.',auth_link_invalid:'This email link is invalid or expired. Request a new link and try again.',register_hint_title:'One account, game and portal',auth_benefit_profile:'Keep one player profile for the game and website.',auth_benefit_collection:'Browse your synced skins and match stats after sign-in.',auth_benefit_privacy:'No hardware ID and no background internet checks.',schema_missing:'The portal database schema has not been applied yet. Ask the project owner to run the provided SQL schema.',player_name:'Player name',sign_in:'Sign in',create_account:'Create account',sign_out:'Sign out',
    register_hint:'New here? Choose Create account, enter a player name, and we’ll get you started.',signed_in_as:'Signed in as',account_id:'Account ID',app_instance:'This browser app ID',app_session:'This browser session',credits:'Game credits',language:'Language',save_profile:'Save profile',load_profile:'Load my profile',profile_card:'Player profile',collection_heading:'My collection',collection_intro:'View cosmetic skins synced from your game account. Your collection loads only when you press the button.',load_collection:'Load my collection',collection_total:'Synced skins',collection_empty:'No synced skins yet. Sync your collection from the game, then try again.',collection_error:'Could not load your collection.',collection_private:'Your collection is private. Sign in, then choose Load my collection to see skins synced from your game.',synced_at:'Synced',collection_synced:'In collection',stats_heading:'Player stats',stats_private:'Match results belong to your account. Sign in, then press Load my stats to request them.',match_breakdown:'Match breakdown',stats_recent_note:'Showing your latest recorded results.',stats_intro:'Review your match results and earned game credits. Stats load only when you ask for them.',load_stats:'Load my stats',matches_played:'Matches played',matches_won:'Wins',matches_lost:'Losses',win_rate:'Win rate',credits_earned:'Credits earned',recent_matches:'Recent matches',stats_empty:'No match results yet. Play a match and try again later.',match_mode:'Mode',match_result:'Result',match_when:'Date',result_won:'Victory',result_lost:'Defeat',updates_heading:'Latest updates',updates_intro:'Notes and helpful changes for the Neon Arena player portal.',update_portal_title:'Portal improvements',update_portal_text:'A cleaner account experience, stronger sign-up validation, private player stats, and a dedicated skin collection page.',update_privacy_title:'Privacy by design',update_privacy_text:'No hardware IDs and no background internet checks. Personal data is requested only after sign-in and your action.',update_game_title:'Game account sync',update_game_text:'Use the same Neon Arena account in the game and portal. Sync your skins from the game before loading your collection here.',update_featured:'Player experience',privacy_label:'Privacy',game_sync_label:'Game sync',updates_feedback_title:'Good to know',updates_feedback_text:'Online sections depend on the database schema being installed by the project owner. If a page reports missing portal tables, the owner needs to apply the supplied SQL schema.',
    session_heading:'My sessions',session_intro:'Only sessions for your signed-in account appear here. This page does not check sessions until you choose Load sessions.',
    sign_in_first:'Sign in first',sessions_locked:'Your sessions are private. Sign in to view them.',go_sign_in:'Go to sign in',load_sessions:'Load sessions',refresh_sessions:'Refresh sessions',sessions_empty:'No active app sessions were found.',current_session:'This browser',revoke:'Revoke',session_active:'Active',session_revoked:'Revoked',last_seen:'Last used',session_label:'App / device',session_id:'Session ID',
    market_heading:'Skin market',market_intro:'Browse real player offers. Purchases use game credits only — no cash payments.',load_offers:'Load offers',refresh_offers:'Refresh offers',search:'Search skins',weapon_filter:'Weapon',all_weapons:'All weapons',sort_by:'Sort by',sort_newest:'Newest',sort_low_price:'Lowest price',sort_high_price:'Highest price',
    inventory_title:'Your synced skins',load_inventory:'Load my skins',inventory_loaded:'Your synced skins are loaded.',inventory_not_loaded:'Not loaded yet. Use “Load my skins”.',inventory_signed_in:'Signed in. Load your skins to list one.',inventory_ready:'Inventory ready',profile_not_found:'Your profile row was not returned. Check the applied portal schema and profile trigger.',choose_skin:'Choose a skin',no_synced_skins:'No synced skins found. Sync your collection from the game first.',asking_price:'Your price in credits',list_skin:'List skin',market_empty:'No active offers right now.',market_offers:'Market offers',market_load_note:'Load the offer list when you are ready.',market_loaded_note:'Offers loaded. Search and sort the results below.',no_matching_offers:'No offers match these filters.',no_matching_servers:'No rooms match these filters.',inventory_hint:'Your game collection loads only after you ask for it.',buy:'Buy',cancel_listing:'Remove offer',seller:'Seller',owned_by_you:'Your offer',sign_in_to_buy:'Sign in to buy or list skins.',limited_results:'Only the latest {n} records were loaded; totals or search results may be incomplete.',no_rows_updated:'The server did not confirm any changed rows. Reload the data before retrying.',request_timeout:'The request timed out. Check the current state before retrying.',signout_partial:'Signed out on this tab, but the server could not confirm session revocation. Review sessions or sign out again.',relay_address:'Relay address',copy_manual_hint:'Automatic copy failed. The relay address and room code are shown below; select and copy them manually.',
    servers_heading:'Find a game',servers_intro:'Browse rooms ordered by their latest heartbeat. Invite links can expire when the host’s temporary tunnel stops.',load_servers:'Find rooms',refresh_servers:'Refresh rooms',server_search:'Search name or room code',map_filter:'Map',all_maps:'All maps',mode_filter:'Mode',all_modes:'All modes',servers_empty:'No recent rooms found. Try again later.',servers_sorted_note:'Rooms are ordered by the latest heartbeat reported by each host.',players:'Players',bots:'Bots',room_code:'Room code',copy_invite:'Copy game invite',invite_copied:'Invite copied. Paste it into the game.',clipboard_error:'Automatic copy failed. The relay address and room code are shown below; select and copy them manually.',
    help_heading:'Quick help',help_intro:'A few simple steps to get going.',help_account_title:'Sign in',help_account_text:'Use the same account as your game. Create one with an email and a confirmed password; use Forgot password or resend the confirmation email if needed.',help_market_title:'Use the skin market',help_market_text:'First sync your collection in the game. Then load your skins here, choose a price, and list one. Purchases use only game credits.',help_sessions_title:'Protect your account',help_sessions_text:'Sign in before opening My sessions. Revoke a browser or game session you do not recognize.',help_servers_title:'Join a room',help_servers_text:'Copy the invite from Servers and paste it into the game. Quick Tunnel addresses are temporary.',help_privacy_title:'Your privacy',help_privacy_text:'The site does not collect a hardware ID. It uses random app and session IDs. It does not make background internet checks.',
    need_config:'The portal is not connected to the account service yet. Please contact the game administrator.',invalid_email_password:'Enter a valid email and a password with at least 8 characters.',invalid_player_name:'Enter a player name between 1 and 24 characters.',invalid_price:'Choose a price between 1 and 999,999 credits.',public_key_rejected:'The site configuration is invalid. Contact the game administrator.',working:'Please wait…',loading:'Loading…',network_error:'Could not connect. Check your connection and try again.',
    signed_in_ok:'Signed in. Your account is ready.',signed_up_ok:'Account created. Check your email if confirmation is required, then sign in.',signed_out_ok:'Signed out; the server confirmed revocation.',profile_saved:'Profile saved.',session_missing:'This browser session is no longer active. Sign in again.',session_revoked_ok:'Session revoked.',offer_listed:'Your skin is listed.',offer_bought:'Purchase complete.',offer_cancelled:'Offer removed.',not_enough_data:'No data to show yet. Use the button above to load it.',
    map_dust:'Neon Dust',map_factory:'Factory',map_districts:'Districts',map_crossroads:'Crossroads',mode_surv:'Survival',mode_dm:'Deathmatch',mode_bomb:'Bomb',
    skin_arctic:'Arctic Matte',skin_ember:'Coal & Flame',skin_olive:'Field Camo',skin_mono:'Monochrome',skin_neon_grid:'Neon Grid',skin_tiger:'Tiger Line',skin_viper:'Viper Pulse',skin_aurora:'Aurora',skin_pulse:'Electric Pulse',skin_goldstorm:'Goldstorm',skin_redline:'Redline',skin_circuit:'Cyber Circuit',skin_frostline:'Frostline',skin_toxic_halo:'Toxic Halo',skin_nebula:'Nebula',skin_prism:'Prismatic Shift',weapon_knife:'Knife',footer:'Neon Arena · Player portal · No real-money payments'
  },
  ru: {
    nav_aria:'Главная навигация',home_features:'Возможности игрока',home_tools:'Дополнительные инструменты',auth_tabs_aria:'Доступ к аккаунту',back_to_sign_in:'Вернуться ко входу',nav_home:'Главная',nav_account:'Аккаунт',nav_sessions:'Мои сессии',nav_collection:'Моя коллекция',nav_stats:'Статистика',nav_market:'Рынок скинов',nav_servers:'Серверы',nav_updates:'Обновления',nav_help:'Помощь',theme_label:'Цвет',theme_choose:'Выбери акцентный цвет',theme_custom:'Свой цвет',theme_neon:'Неон',theme_violet:'Фиолетовый',theme_rose:'Розовый',theme_amber:'Янтарный',theme_lime:'Лаймовый',theme_tip:'Настрой акцентные цвета портала.',
    online_not_checked:'Фоновых проверок нет',site_setup_missing:'Портал ещё не настроен',portal_ready:'Настройки клиента загружены',
    home_eyebrow:'ПОРТАЛ ИГРОКА NEON ARENA',home_title:'Игровой аккаунт — просто и удобно.',home_intro:'Управляй профилем, смотри скины, находи комнату и контролируй безопасность аккаунта в одном месте.',
    open_account:'Открыть аккаунт',browse_market:'Перейти на рынок',find_room:'Найти игру',home_no_auto:'Сайт ничего не проверяет в фоне. Данные загружаются только на нужной странице после нажатия соответствующей кнопки.',
    feature_profile:'Твой профиль',feature_profile_text:'Имя игрока, язык и игровые кредиты.',feature_sessions:'Безопасность аккаунта',feature_sessions_text:'Посмотри и отзови сессии после входа.',feature_market:'Рынок игроков',feature_market_text:'Покупай и выставляй косметические скины только за игровые кредиты.',feature_servers:'Найди комнату',feature_servers_text:'Посмотри свежие комнаты и скопируй приглашение в игру.',feature_collection:'Твоя коллекция',feature_collection_text:'Все игровые скины — в одном личном синхронизированном списке.',feature_stats:'Твоя статистика',feature_stats_text:'Победы, история матчей и заработанные кредиты.',feature_updates:'Новости портала',feature_updates_text:'Смотри изменения и полезные подсказки.',help_collection_title:'Посмотри коллекцию',help_collection_text:'Войди и нажми загрузку коллекции. Сначала синхронизируй скины в игре.',help_stats_title:'Проверь статистику',help_stats_text:'Личная история матчей загрузится только после входа и нажатия кнопки.',help_updates_title:'Новости портала',help_updates_text:'Узнай о новых функциях, настройках и конфиденциальности.',
    account_heading:'Твой аккаунт',account_intro:'Войди, чтобы посмотреть профиль и использовать функции аккаунта.',portal_unconfigured:'Портал игры пока не подключён к сервису аккаунтов. Попробуй позже.',
    sign_in_title:'С возвращением',sign_in_text:'Используй тот же аккаунт Neon Arena, что и в игре.',email:'Электронная почта',password:'Пароль',password_confirmation:'Повторите пароль',password_hint:'Не менее 8 символов.',show_password:'Показать',hide_password:'Скрыть',forgot_password:'Забыли пароль?',send_reset_link:'Отправить ссылку для сброса',resend_confirmation:'Отправить письмо подтверждения ещё раз',auth_invalid_email:'Введите корректный адрес электронной почты.',password_mismatch:'Пароли не совпадают.',password_too_short:'Пароль должен содержать не менее 8 символов.',auth_invalid_credentials:'Неверный адрес почты или пароль.',auth_email_not_confirmed:'Сначала подтвердите почту, затем войдите.',auth_email_taken:'Аккаунт с этой почтой уже существует. Войдите в него.',auth_email_smtp_needed:'Тестовая почта Supabase отправляет письма только участникам команды проекта. Настрой собственный SMTP для отправки игрокам.',auth_rate_limited:'Слишком много попыток. Подождите и повторите.',auth_signups_disabled:'Регистрация временно отключена.',confirmation_sent:'Письмо подтверждения отправлено. Проверьте почту.',password_reset_sent:'Если этот адрес зарегистрирован, на него отправлена ссылка для сброса пароля.',recovery_heading:'Создать новый пароль',recovery_intro:'Выберите новый пароль для своего аккаунта.',new_password:'Новый пароль',save_new_password:'Сохранить новый пароль',password_reset_done:'Пароль изменён. Войдите с новым паролем.',auth_email_note:'При включённом подтверждении придёт ссылка. Если письма нет, проверь спам и настройки SMTP проекта.',email_confirmed_hint:'Почта подтверждена. Теперь войди в аккаунт.',auth_link_invalid:'Ссылка недействительна или устарела. Запроси новую и попробуй ещё раз.',register_hint_title:'Один аккаунт для игры и сайта',auth_benefit_profile:'Используй единый профиль игрока в игре и на сайте.',auth_benefit_collection:'Просматривай синхронизированные скины и статистику после входа.',auth_benefit_privacy:'Без HWID и фоновых проверок интернета.',schema_missing:'Схема базы портала ещё не применена. Попроси владельца проекта выполнить предоставленный SQL-файл.',player_name:'Имя игрока',sign_in:'Войти',create_account:'Создать аккаунт',sign_out:'Выйти',
    register_hint:'Впервые здесь? Нажми «Создать аккаунт» и введи имя игрока.',signed_in_as:'Вход выполнен как',account_id:'ID аккаунта',app_instance:'ID этого браузера',app_session:'Сессия этого браузера',credits:'Игровые кредиты',language:'Язык',save_profile:'Сохранить профиль',load_profile:'Загрузить профиль',collection_heading:'Моя коллекция',collection_intro:'Просматривай скины, синхронизированные с игровым аккаунтом. Коллекция загрузится только после нажатия кнопки.',load_collection:'Загрузить коллекцию',collection_total:'Синхронизировано скинов',collection_empty:'Синхронизированных скинов пока нет. Сначала синхронизируй коллекцию в игре.',collection_error:'Не удалось загрузить коллекцию.',collection_private:'Коллекция видна только тебе. Войди и нажми «Загрузить коллекцию», чтобы посмотреть синхронизированные скины.',synced_at:'Синхронизирован',collection_synced:'В коллекции',stats_heading:'Статистика игрока',stats_private:'Результаты матчей привязаны к твоему аккаунту. Войди и нажми «Загрузить статистику».',match_breakdown:'Результаты матчей',stats_recent_note:'Показаны последние записанные результаты.',stats_intro:'Просматривай результаты матчей и заработанные игровые кредиты. Статистика загружается только по твоему запросу.',load_stats:'Загрузить статистику',matches_played:'Сыграно матчей',matches_won:'Победы',matches_lost:'Поражения',win_rate:'Процент побед',credits_earned:'Заработано кредитов',recent_matches:'Последние матчи',stats_empty:'Результатов матчей пока нет. Сыграй матч и попробуй позже.',match_mode:'Режим',match_result:'Результат',match_when:'Дата',result_won:'Победа',result_lost:'Поражение',updates_heading:'Последние обновления',updates_intro:'Новости и полезные изменения портала игрока Neon Arena.',update_portal_title:'Улучшения портала',update_portal_text:'Удобнее работа с аккаунтом, проверка регистрации, личная статистика игрока и отдельная страница коллекции скинов.',update_privacy_title:'Конфиденциальность прежде всего',update_privacy_text:'Без HWID и фоновых проверок интернета. Личные данные запрашиваются только после входа и твоего действия.',update_game_title:'Синхронизация с игрой',update_game_text:'Используй один аккаунт Neon Arena в игре и на сайте. Перед загрузкой коллекции синхронизируй скины в игре.',update_featured:'Удобство игрока',privacy_label:'Конфиденциальность',game_sync_label:'Связь с игрой',updates_feedback_title:'Важно знать',updates_feedback_text:'Онлайн-разделы требуют, чтобы владелец проекта установил схему базы данных. Если сайт сообщает об отсутствующих таблицах, владельцу нужно выполнить предоставленный SQL-файл в Supabase.',profile_card:'Профиль игрока',
    session_heading:'Мои сессии',session_intro:'Здесь показываются только сессии твоего аккаунта. Проверка не начнётся, пока ты не нажмёшь «Загрузить сессии».',
    sign_in_first:'Сначала войди',sessions_locked:'Сессии видны только после входа в аккаунт.',go_sign_in:'Перейти ко входу',load_sessions:'Загрузить сессии',refresh_sessions:'Обновить сессии',sessions_empty:'Активных сессий приложения не найдено.',current_session:'Этот браузер',revoke:'Отозвать',session_active:'Активна',session_revoked:'Отозвана',last_seen:'Последнее использование',session_label:'Приложение / устройство',session_id:'ID сессии',
    market_heading:'Рынок скинов',market_intro:'Смотри реальные предложения игроков. Покупки — только за игровые кредиты, без оплаты деньгами.',load_offers:'Загрузить предложения',refresh_offers:'Обновить предложения',search:'Поиск скинов',weapon_filter:'Оружие',all_weapons:'Любое оружие',sort_by:'Сортировка',sort_newest:'Сначала новые',sort_low_price:'Сначала дешевле',sort_high_price:'Сначала дороже',
    inventory_title:'Твои синхронизированные скины',load_inventory:'Загрузить мои скины',inventory_loaded:'Твои скины загружены.',inventory_not_loaded:'Ещё не загружено. Нажми «Загрузить мои скины».',inventory_signed_in:'Вход выполнен. Загрузи скины, чтобы выставить один из них.',inventory_ready:'Коллекция готова',profile_not_found:'Профиль не получен. Проверь установленную схему портала и триггер создания профиля.',choose_skin:'Выбери скин',no_synced_skins:'Скины не найдены. Сначала синхронизируй коллекцию в игре.',asking_price:'Твоя цена в кредитах',list_skin:'Выставить скин',market_empty:'Активных предложений пока нет.',market_offers:'Предложения рынка',market_load_note:'Загрузи список предложений, когда будешь готов.',market_loaded_note:'Предложения загружены. Ниже можно искать и менять сортировку.',no_matching_offers:'По этим фильтрам предложений нет.',no_matching_servers:'По этим фильтрам комнат нет.',inventory_hint:'Коллекция из игры загружается только по твоему запросу.',buy:'Купить',cancel_listing:'Снять с продажи',seller:'Продавец',owned_by_you:'Твоё предложение',sign_in_to_buy:'Войди, чтобы покупать или выставлять скины.',limited_results:'Загружены только последние {n} записей; статистика или поиск могут быть неполными.',no_rows_updated:'Сервер не подтвердил изменение строк. Обнови данные перед повторной попыткой.',request_timeout:'Время ожидания запроса истекло. Перед повтором проверь текущее состояние.',signout_partial:'Выход выполнен на этой вкладке, но сервер не подтвердил отзыв сессии. Проверь список сессий или повтори выход.',relay_address:'Адрес ретранслятора',copy_manual_hint:'Автоматическое копирование не удалось. Адрес ретранслятора и код комнаты показаны ниже — выдели и скопируй их вручную.',
    servers_heading:'Найти игру',servers_intro:'Комнаты отсортированы по последнему сигналу активности. Приглашение может перестать работать, когда отключится временный туннель хоста.',load_servers:'Найти комнаты',refresh_servers:'Обновить комнаты',server_search:'Поиск по названию или коду',map_filter:'Карта',all_maps:'Любая карта',mode_filter:'Режим',all_modes:'Любой режим',servers_empty:'Свежих комнат не найдено. Попробуй позже.',servers_sorted_note:'Комнаты отсортированы по последнему сигналу активности от хоста.',players:'Игроки',bots:'Боты',room_code:'Код комнаты',copy_invite:'Скопировать приглашение',invite_copied:'Приглашение скопировано. Вставь его в игре.',clipboard_error:'Автоматическое копирование не удалось. Адрес ретранслятора и код комнаты показаны ниже — выдели и скопируй их вручную.',
    help_heading:'Краткая помощь',help_intro:'Несколько простых шагов для начала.',help_account_title:'Вход в аккаунт',help_account_text:'Используй тот же аккаунт, что и в игре. Создай его с почтой и подтверждением пароля; если нужно, запроси сброс пароля или повторную отправку письма.',help_market_title:'Рынок скинов',help_market_text:'Сначала синхронизируй коллекцию в игре. Затем загрузи свои скины здесь, укажи цену и выставь скин. Покупка оплачивается только игровыми кредитами.',help_sessions_title:'Защити аккаунт',help_sessions_text:'Сначала войди, затем открой «Мои сессии». Отзови незнакомую сессию браузера или игры.',help_servers_title:'Подключение к комнате',help_servers_text:'Скопируй приглашение на странице Серверы и вставь его в игре. Адреса Quick Tunnel временные.',help_privacy_title:'Конфиденциальность',help_privacy_text:'Сайт не собирает HWID. Используются случайные ID приложения и сессии. Фоновых проверок интернета нет.',
    need_config:'Портал пока не подключён к сервису аккаунтов. Обратись к администратору игры.',invalid_email_password:'Введи корректную почту и пароль длиной не менее 8 символов.',invalid_player_name:'Имя игрока должно содержать от 1 до 24 символов.',invalid_price:'Укажи цену от 1 до 999 999 кредитов.',public_key_rejected:'Настройки сайта некорректны. Обратись к администратору игры.',working:'Подожди…',loading:'Загрузка…',network_error:'Не удалось подключиться. Проверь интернет и попробуй снова.',
    signed_in_ok:'Вход выполнен. Аккаунт готов.',signed_up_ok:'Аккаунт создан. Если нужно подтверждение, проверь почту и затем войди.',signed_out_ok:'Выход выполнен; сервер подтвердил отзыв сессии.',profile_saved:'Профиль сохранён.',session_missing:'Сессия этого браузера больше не активна. Войди снова.',session_revoked_ok:'Сессия отозвана.',offer_listed:'Скин выставлен.',offer_bought:'Покупка завершена.',offer_cancelled:'Предложение снято.',not_enough_data:'Данных пока нет. Нажми кнопку выше, чтобы загрузить их.',
    map_dust:'Неон-Даст',map_factory:'Завод',map_districts:'Кварталы',map_crossroads:'Перекрёстки',mode_surv:'Выживание',mode_dm:'Бой насмерть',mode_bomb:'Бомба',
    skin_arctic:'Арктический матовый',skin_ember:'Уголь и пламя',skin_olive:'Полевой камуфляж',skin_mono:'Монохром',skin_neon_grid:'Неоновая сетка',skin_tiger:'Тигровая линия',skin_viper:'Змеиный импульс',skin_aurora:'Полярное сияние',skin_pulse:'Электрический импульс',skin_goldstorm:'Золотой шторм',skin_redline:'Красная линия',skin_circuit:'Кибер-цепь',skin_frostline:'Ледяной разлом',skin_toxic_halo:'Токсичный ореол',skin_nebula:'Небула',skin_prism:'Призматический сдвиг',weapon_knife:'Нож',footer:'Neon Arena · Портал игрока · Без реальных платежей'
  }
};

const WEAPONS={pistol:'P250',glock:'Glock-18',usp:'USP-S',deagle:'Desert Eagle',five7:'Five-SeveN',smg:'MP9',mac10:'MAC-10',mp7:'MP7',ump:'UMP-45',p90:'P90',shotgun:'Nova',xm:'XM1014',rifle:'AK-47',m4:'M4A1-S',famas:'FAMAS',galil:'Galil AR',aug:'AUG',sniper:'AWP',ssg:'SSG 08',negev:'Negev',knife:'Knife'};
const MAP_KEYS={'Неон-Даст':'map_dust','Завод':'map_factory','Кварталы':'map_districts','Перекрёстки':'map_crossroads'};
const MODE_KEYS={surv:'mode_surv',dm:'mode_dm',bomb:'mode_bomb'};
const SKINS=['arctic','ember','olive','mono','neon_grid','tiger','viper','aurora','pulse','goldstorm','redline','circuit','frostline','toxic_halo','nebula','prism'];
const STORE={get(k){try{return window.localStorage.getItem(k)}catch(_e){return null}},set(k,v){try{window.localStorage.setItem(k,v)}catch(_e){}},remove(k){try{window.localStorage.removeItem(k)}catch(_e){}}};
const THEME_KEY='neon_arena_portal_theme_v1';
const THEME_PRESETS={neon:{cyan:'#59e1d3',blue:'#8ba9ff'},violet:{cyan:'#b69cff',blue:'#72c9ff'},rose:{cyan:'#ff8ab8',blue:'#ffbe75'},amber:{cyan:'#ffbd62',blue:'#83d8ff'},lime:{cyan:'#b0e66a',blue:'#59d9ca'}};
const TAB={get(k){try{return window.sessionStorage.getItem(k)}catch(_e){return null}},set(k,v){try{window.sessionStorage.setItem(k,v)}catch(_e){}},remove(k){try{window.sessionStorage.removeItem(k)}catch(_e){}}};
const AUTH_KEY='neon_arena_portal_auth_v2',APP_ID_KEY='neon_arena_portal_instance_v2',LOCALE_KEY='neon_arena_portal_locale_v2',RECOVERY_KEY='neon_arena_portal_recovery_v1';
const $=id=>document.getElementById(id);
const page=document.body.dataset.page||'home';
let locale=STORE.get(LOCALE_KEY)==='ru'?'ru':'en';
let themeSetting=STORE.get(THEME_KEY)||'neon';
let config=window.NEON_PORTAL_CONFIG||{};
let auth=parseJson(TAB.get(AUTH_KEY));
let appInstanceId=STORE.get(APP_ID_KEY)||newUuid();
let offers=[],inventory=[],servers=[],sessionRows=[],collectionRows=[],statsRows=[];let offersLoaded=false,inventoryLoaded=false,serversLoaded=false,sessionRowsLoaded=false,collectionLoaded=false,statsLoaded=false;let offersTruncated=false,collectionTruncated=false,statsTruncated=false,serversTruncated=false;let authMode='signin',recoveryAccessToken='';const pendingActions=new Set(),pendingSessions=new Set();
STORE.set(APP_ID_KEY,appInstanceId);

function parseJson(s){try{return s?JSON.parse(s):null}catch(_e){return null}}
function t(k){return (I18N[locale]&&I18N[locale][k])||I18N.en[k]||k}
function newUuid(){if(window.crypto&&crypto.randomUUID)return crypto.randomUUID();const a=new Uint8Array(16);crypto.getRandomValues(a);a[6]=(a[6]&15)|64;a[8]=(a[8]&63)|128;const h=[...a].map(x=>x.toString(16).padStart(2,'0')).join('');return `${h.slice(0,8)}-${h.slice(8,12)}-${h.slice(12,16)}-${h.slice(16,20)}-${h.slice(20)}`}
function status(id,msg,kind=''){const e=$(id);if(!e)return;e.textContent=msg||'';e.className='status'+(kind?' '+kind:'')}
function notice(msg,kind=''){const e=$('pageNotice');if(!e)return;e.textContent=msg||'';e.className='notice'+(kind?' '+kind:'');e.hidden=!msg}
function lightenHex(hex,ratio=.28){const m=/^#([0-9a-f]{6})$/i.exec(String(hex||''));if(!m)return'#8ba9ff';const n=parseInt(m[1],16),parts=[(n>>16)&255,(n>>8)&255,n&255].map(c=>Math.round(c+(255-c)*ratio));return'#'+parts.map(c=>c.toString(16).padStart(2,'0')).join('')}
function colorLuminance(hex){
  const m=/^#([0-9a-f]{6})$/i.exec(String(hex||''));
  if(!m)return 0;
  const rgb=[0,2,4].map(i=>parseInt(m[1].slice(i,i+2),16)/255).map(c=>c<=.04045?c/12.92:((c+.055)/1.055)**2.4);
  return .2126*rgb[0]+.7152*rgb[1]+.0722*rgb[2];
}
function applyTheme(value=themeSetting){
  let colors=THEME_PRESETS[value];
  if(!colors&&/^#[0-9a-f]{6}$/i.test(value))colors={cyan:value,blue:lightenHex(value)};
  if(!colors){themeSetting='neon';colors=THEME_PRESETS.neon}
  const root=document.documentElement;
  if(root.style&&root.style.setProperty){
    root.style.setProperty('--cyan',colors.cyan);
    root.style.setProperty('--blue',colors.blue);
    const dark=colorLuminance('#07131b'),light=colorLuminance('#f7f8fb');
    const ratio=(a,b)=>(Math.max(a,b)+.05)/(Math.min(a,b)+.05);
    const darkContrast=Math.min(ratio(dark,colorLuminance(colors.cyan)),ratio(dark,colorLuminance(colors.blue)));
    const lightContrast=Math.min(ratio(light,colorLuminance(colors.cyan)),ratio(light,colorLuminance(colors.blue)));
    root.style.setProperty('--primary-ink',darkContrast>=lightContrast?'#07131b':'#f7f8fb');
  }
  document.querySelectorAll('[data-theme-preset]').forEach(b=>b.classList.toggle('active',b.dataset.themePreset===value));
  const picker=$('accentPicker');if(picker)picker.value=colors.cyan;
}
function setTheme(value,close=true){
  const v=String(value||'');
  if(!THEME_PRESETS[v]&&!/^#[0-9a-f]{6}$/i.test(v))return;
  themeSetting=v;STORE.set(THEME_KEY,v);applyTheme(v);
  const control=$('themeControl');if(close&&control)control.open=false;
}
function setBusy(id,busy){const b=$(id);if(!b)return;if(busy){if(!b.dataset.busy)b.dataset.old=b.textContent;b.dataset.busy='true';b.disabled=true;b.textContent=t('working')}else{b.disabled=false;delete b.dataset.busy;if(b.dataset.old!==undefined){b.textContent=b.dataset.i18n?t(b.dataset.i18n):b.dataset.old;delete b.dataset.old}}}
function validProjectUrl(value){try{const u=new URL(String(value||'').trim());if(u.username||u.password||u.search||u.hash)return false;return u.protocol==='https:'||u.protocol==='http:'&&['localhost','127.0.0.1'].includes(u.hostname)}catch(_e){return false}}
function serviceRoleKey(value){const k=String(value||'').trim();if(/^sb_secret_/i.test(k))return true;const p=k.split('.');if(p.length<2)return false;try{let b=p[1].replace(/-/g,'+').replace(/_/g,'/');while(b.length%4)b+='=';return JSON.parse(atob(b)).role==='service_role'}catch(_e){return false}}
function validPublicKey(value){const k=String(value||'').trim();if(/^sb_publishable_[A-Za-z0-9_-]+$/.test(k))return true;const p=k.split('.');if(p.length<2)return false;try{let b=p[1].replace(/-/g,'+').replace(/_/g,'/');while(b.length%4)b+='=';return JSON.parse(atob(b)).role==='anon'}catch(_e){return false}}
function ready(){return validProjectUrl(config.supabaseUrl)&&validPublicKey(config.publicKey)&&!serviceRoleKey(config.publicKey)}
function clientInfo(withSession=true){return 'neon-arena-web/2.0'+(withSession&&auth?.appSessionId?'; neon-app-session='+auth.appSessionId:'')}
function userName(){return auth?.profile?.username||auth?.email||''}
function renderConnection(){const box=$('connectionStatus'),label=$('connectionLabel');if(!box||!label)return;box.classList.toggle('ready',ready());label.textContent=ready()?t('portal_ready'):t('site_setup_missing')}
function applyLanguage(){
  document.documentElement.lang=locale;
  document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.dataset.i18n;if(!el.dataset.busy&&I18N[locale][k])el.textContent=I18N[locale][k]});
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{const k=el.dataset.i18nPlaceholder;if(I18N[locale][k])el.placeholder=I18N[locale][k]});
  document.querySelectorAll('[data-i18n-title]').forEach(el=>{const k=el.dataset.i18nTitle;if(I18N[locale][k])el.title=I18N[locale][k]});
  document.querySelectorAll('[data-i18n-aria-label]').forEach(el=>{const k=el.dataset.i18nAriaLabel;if(I18N[locale][k])el.setAttribute('aria-label',I18N[locale][k])});
  document.querySelectorAll('[data-lang]').forEach(b=>b.classList.toggle('active',b.dataset.lang===locale));
  renderConnection();document.title='Neon Arena · '+(I18N[locale][document.body.dataset.titleKey]||'Player portal');
}
function setLanguage(v){locale=v==='ru'?'ru':'en';STORE.set(LOCALE_KEY,locale);applyLanguage();if($('profileLocale'))$('profileLocale').value=locale;if($('inventorySelect')){const selected=$('inventorySelect').value;renderInventory();$('inventorySelect').value=selected}if(offersLoaded)renderOffers();if(serversLoaded)renderServers();if(sessionRowsLoaded)renderSessions(sessionRows);if(collectionLoaded)renderCollection();if(statsLoaded)renderStats()}
function el(tag,cls,text){const e=document.createElement(tag);if(cls)e.className=cls;if(text!==undefined)e.textContent=String(text);return e}
function clearPasswordFields(){
  for(const id of ['password','signupPassword','signupPasswordConfirm','newPassword','newPasswordConfirm']){
    const input=$(id);if(input){input.value='';input.type='password'}
  }
  document.querySelectorAll('[data-password-toggle]').forEach(button=>{
    button.dataset.i18n='show_password';button.setAttribute('aria-pressed','false');button.textContent=t('show_password');
  });
}
function clearPrivateDom(){
  for(const id of ['signedInEmail','accountIdValue','appInstanceValue','appSessionValue','creditsValue'])if($(id))$(id).textContent='—';
  if($('profileName'))$('profileName').value='';
  if($('profileLocale'))$('profileLocale').value=locale;
}
function resetAuth(){
  auth=null;offers=[];inventory=[];servers=[];sessionRows=[];collectionRows=[];statsRows=[];
  offersLoaded=false;inventoryLoaded=false;serversLoaded=false;sessionRowsLoaded=false;collectionLoaded=false;statsLoaded=false;
  offersTruncated=false;collectionTruncated=false;statsTruncated=false;serversTruncated=false;
  pendingActions.clear();pendingSessions.clear();TAB.remove(AUTH_KEY);
  clearPasswordFields();clearPrivateDom();notice('');
  for(const id of ['authStatus','profileStatus','sessionsStatus','collectionStatus','statsStatus','marketStatus','serversStatus'])status(id,'');
  renderAccountState();renderInventory();renderCollection();renderStats();
  if($('sessionsList')){$('sessionsList').replaceChildren(el('div','empty',t('not_enough_data')))}
}
function saveAuth(){if(auth)TAB.set(AUTH_KEY,JSON.stringify(auth));else TAB.remove(AUTH_KEY)}
function localSignedIn(){return !!(auth&&auth.accessToken&&auth.userId&&auth.appSessionId)}
function configError(){if(!ready())throw new Error(t('need_config'))}
function safeError(e){return e&&e.message?e.message:t('network_error')}
function validEmail(v){return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v||'').trim())}
function authError(e){const m=String(e&&e.message||'').toLowerCase();if(/invalid login credentials|invalid_credentials/.test(m))return t('auth_invalid_credentials');if(/email not confirmed|email_not_confirmed/.test(m))return t('auth_email_not_confirmed');if(/already registered|already exists|user_already_exists|email_exists/.test(m))return t('auth_email_taken');if(/email_address_not_authorized|email address not authorized/.test(m))return t('auth_email_smtp_needed');if(/invalid email|email_address_invalid/.test(m))return t('auth_invalid_email');if(/rate.?limit|too many requests/.test(m))return t('auth_rate_limited');if(/signup.*disabled|signups.*disabled|signup_disabled/.test(m))return t('auth_signups_disabled');return safeError(e)}
function missingPortalSchema(e){return /PGRST205|schema cache|could not find the table/i.test(String(e&&e.message||''))}
function showDataError(id,e){
  const missing=missingPortalSchema(e);
  if($('schemaNote'))$('schemaNote').hidden=!missing;
  status(id,missing?t('schema_missing'):safeError(e),'error');
}
function setAuthMode(mode,opts={}){
  authMode=mode==='signup'?'signup':'signin';const isSignup=authMode==='signup';
  const a=$('signInTab'),b=$('signUpTab'),f1=$('signInForm'),f2=$('signUpForm'),recovery=$('recoveryPanel');
  if(a){a.classList.toggle('active',!isSignup);a.setAttribute('aria-selected',String(!isSignup));a.setAttribute('tabindex',isSignup?'-1':'0')}
  if(b){b.classList.toggle('active',isSignup);b.setAttribute('aria-selected',String(isSignup));b.setAttribute('tabindex',isSignup?'0':'-1')}
  if(f1)f1.hidden=isSignup;if(f2)f2.hidden=!isSignup;if(recovery)recovery.hidden=true;
  if($('authModes'))$('authModes').hidden=false;
  if(opts.copyEmail!==false){const target=$(isSignup?'signupEmail':'email'),source=$(isSignup?'email':'signupEmail');if(target&&source&&!target.value.trim())target.value=source.value}
  if(opts.clearStatus!==false){status('authStatus','','');notice('')}
}
function cleanAuthHash(){
  if(window.history&&typeof window.history.replaceState==='function')window.history.replaceState(null,'',location.pathname+location.search);
}
function showRecovery(token){
  resetAuth();
  recoveryAccessToken=String(token||'');
  if(recoveryAccessToken)TAB.set(RECOVERY_KEY,recoveryAccessToken);else TAB.remove(RECOVERY_KEY);
  if($('signedOutCard'))$('signedOutCard').hidden=false;
  if($('signedInCard'))$('signedInCard').hidden=true;
  if($('signedOutInfo'))$('signedOutInfo').hidden=true;
  if($('authModes'))$('authModes').hidden=true;
  if($('signInForm'))$('signInForm').hidden=true;
  if($('signUpForm'))$('signUpForm').hidden=true;
  if($('recoveryPanel'))$('recoveryPanel').hidden=false;
  if($('saveNewPasswordBtn'))$('saveNewPasswordBtn').disabled=!ready()||!recoveryAccessToken;
  status('authStatus',recoveryAccessToken?'':t('auth_link_invalid'),recoveryAccessToken?'':'error');
}
function handleAuthRedirect(){
  const raw=String(location.hash||'').replace(/^#/,'');
  if(!raw){const stored=TAB.get(RECOVERY_KEY);if(stored&&$('recoveryPanel'))showRecovery(stored);return}
  const p=new URLSearchParams(raw),type=p.get('type')||'',token=p.get('access_token')||'',err=p.get('error_description')||p.get('error')||'';
  if(type==='recovery'){
    cleanAuthHash();showRecovery(token);return;
  }
  if(err||token||type){
    cleanAuthHash();resetAuth();
    if($('signedOutCard'))$('signedOutCard').hidden=false;
    if($('signedInCard'))$('signedInCard').hidden=true;
    if($('signedOutInfo'))$('signedOutInfo').hidden=false;
    setAuthMode('signin',{clearStatus:false});
    if(type==='signup'||type==='email')status('authStatus',t('email_confirmed_hint'),'success');
    else if(err||token)status('authStatus',t('auth_link_invalid'),'error');
  }
}
function redirectUrl(){return encodeURIComponent(location.origin+location.pathname)}
async function request(path,{method='GET',body,token=null,includeSession=true,prefer='',publicOnly=false,timeoutMs=20000}={}){
  configError();
  const bearer=token||(publicOnly||!auth?config.publicKey:auth.accessToken);
  const headers={apikey:config.publicKey,Authorization:'Bearer '+bearer,'X-Client-Info':clientInfo(includeSession),Accept:'application/json'};
  if(body!==undefined)headers['Content-Type']='application/json';if(prefer)headers.Prefer=prefer;
  const controller=typeof AbortController==='function'?new AbortController():null;
  let timer=null;
  try{
    const options={method,headers,body:body===undefined?undefined:JSON.stringify(body),cache:'no-store',credentials:'omit',mode:'cors'};
    if(controller){options.signal=controller.signal;if(typeof setTimeout==='function')timer=setTimeout(()=>controller.abort(),timeoutMs)}
    const res=await fetch(config.supabaseUrl.replace(/\/$/,'')+path,options);
    const raw=await res.text();let data=null;
    if(raw){try{data=JSON.parse(raw)}catch(_e){data={message:raw}}}
    if(!res.ok){const m=data&&(data.msg||data.message||data.error_description||data.error||data.hint||data.code||data.error_code);throw new Error(m?`${res.status}: ${m}`:`${res.status}: ${t('network_error')}`)}
    return data;
  }catch(e){
    if(e&&e.name==='AbortError')throw new Error(t('request_timeout'));
    if(e&&e.message&&e.message!==t('network_error')&&!/Failed to fetch|NetworkError|Load failed/i.test(String(e.message)))throw new Error(String(e.message));
    throw new Error(t('network_error'));
  }finally{if(timer!==null&&typeof clearTimeout==='function')clearTimeout(timer)}
}
async function requestAllRows(path,{pageSize=500,maxRows=10000,publicOnly=false,includeSession=true}={}){
  const rows=[];const cap=Math.max(pageSize,Math.floor(maxRows/pageSize)*pageSize);
  while(rows.length<cap){
    if(includeSession&&auth?.expiresAt&&auth.expiresAt<Date.now()+60000)await refreshToken();
    const sep=path.includes('?')?'&':'?';
    const pageRows=await request(`${path}${sep}limit=${pageSize}&offset=${rows.length}`,{publicOnly,includeSession});
    if(!Array.isArray(pageRows))throw new Error(t('network_error'));
    rows.push(...pageRows);
    if(pageRows.length<pageSize)return{rows,truncated:false};
  }
  return{rows,truncated:true};
}

async function authRequest(path,body){return request('/auth/v1'+path,{method:'POST',body,token:config.publicKey,publicOnly:true,includeSession:false})}
function writeAuth(payload,preserve=false){const u=payload.user||{};auth={accessToken:payload.access_token||'',refreshToken:payload.refresh_token||'',expiresAt:Date.now()+Math.max(60,Number(payload.expires_in||3600))*1000,userId:u.id||payload.id||auth?.userId||'',email:u.email||payload.email||auth?.email||'',appSessionId:preserve&&auth?.appSessionId?auth.appSessionId:newUuid(),profile:preserve&&auth?.profile?auth.profile:null};if(!auth.accessToken||!auth.userId)throw new Error(t('network_error'));saveAuth()}
async function refreshToken(){
  if(!auth?.refreshToken)throw new Error(t('session_missing'));
  const old=auth;
  try{
    const p=await authRequest('/token?grant_type=refresh_token',{refresh_token:old.refreshToken});
    writeAuth(p,true);if(!auth.appSessionId)auth.appSessionId=old.appSessionId;saveAuth();
  }catch(e){
    if(/401|invalid.*refresh|refresh.*token.*(expired|invalid|not found)|invalid grant/i.test(String(e&&e.message||''))){resetAuth();throw new Error(t('session_missing'))}
    throw e;
  }
}
async function ensureActive(){
  if(!localSignedIn())throw new Error(t('sign_in_first'));
  if(!auth.expiresAt||auth.expiresAt<Date.now()+60000)await refreshToken();
  const rows=await request(`/rest/v1/app_sessions?select=session_id&session_id=eq.${encodeURIComponent(auth.appSessionId)}&user_id=eq.${encodeURIComponent(auth.userId)}&revoked_at=is.null&limit=1`);
  if(!Array.isArray(rows)||!rows.some(r=>r.session_id===auth.appSessionId)){resetAuth();throw new Error(t('session_missing'))}
  const touched=await request(`/rest/v1/app_sessions?session_id=eq.${encodeURIComponent(auth.appSessionId)}&user_id=eq.${encodeURIComponent(auth.userId)}`,{method:'PATCH',body:{last_seen_at:new Date().toISOString()},prefer:'return=representation'});
  if(!Array.isArray(touched)||!touched.some(r=>r.session_id===auth.appSessionId)){resetAuth();throw new Error(t('session_missing'))}
  return true;
}
async function registerSession(){
  const row={session_id:auth.appSessionId,app_instance_id:appInstanceId,user_id:auth.userId,label:'Web browser · Neon Arena',last_seen_at:new Date().toISOString()};
  await request('/rest/v1/app_sessions?on_conflict=session_id',{method:'POST',body:row,includeSession:false,prefer:'resolution=merge-duplicates,return=minimal'});
  const rows=await request(`/rest/v1/app_sessions?select=session_id&session_id=eq.${encodeURIComponent(auth.appSessionId)}&user_id=eq.${encodeURIComponent(auth.userId)}&revoked_at=is.null&limit=1`);
  if(!Array.isArray(rows)||!rows.some(r=>r.session_id===auth.appSessionId))throw new Error(t('session_missing'));
}
function renderPrivatePageGates(){const signed=localSignedIn();for(const [locked,panel] of [['collectionLocked','collectionPanel'],['statsLocked','statsPanel']]){if($(locked))$(locked).hidden=signed;if($(panel))$(panel).hidden=!signed}}
function renderAccountState(){
  const signed=localSignedIn(),out=$('signedOutCard'),inside=$('signedInCard'),aside=$('signedOutInfo');
  if(out)out.hidden=signed;if(inside)inside.hidden=!signed;if(aside)aside.hidden=signed;
  renderPrivatePageGates();
  if(!signed){clearPrivateDom();return}
  if($('signedInEmail'))$('signedInEmail').textContent=auth.email||'—';
  if($('accountIdValue'))$('accountIdValue').textContent=String(auth.userId||'—').slice(0,12);
  if($('appInstanceValue'))$('appInstanceValue').textContent=appInstanceId;
  if($('appSessionValue'))$('appSessionValue').textContent=auth.appSessionId||'—';
  if($('profileName'))$('profileName').value=auth.profile?.username||'';
  if($('profileLocale'))$('profileLocale').value=auth.profile?.locale||locale;
  if($('creditsValue'))$('creditsValue').textContent=auth.profile?Number(auth.profile.credits||0).toLocaleString(locale==='ru'?'ru-RU':'en-US'):'—';
}
async function signIn(event){
  if(event?.preventDefault)event.preventDefault();
  if(!ready()){status('authStatus',t('need_config'),'error');return}
  const email=$('email')?.value.trim()||'',pass=$('password')?.value||'';
  if(!validEmail(email)){status('authStatus',t('auth_invalid_email'),'error');return}
  if(pass.length<8){status('authStatus',t('password_too_short'),'error');return}
  notice('');status('authStatus','');setBusy('signInBtn',true);
  try{
    const p=await authRequest('/token?grant_type=password',{email,password:pass});writeAuth(p,false);clearPasswordFields();
    await registerSession();status('authStatus',t('signed_in_ok'),'success');renderAccountState();await loadProfile();
  }catch(e){resetAuth();status('authStatus',missingPortalSchema(e)?t('schema_missing'):authError(e),'error')}
  finally{setBusy('signInBtn',false);applyLanguage()}
}
async function signUp(event){
  if(event?.preventDefault)event.preventDefault();
  if(!ready()){status('authStatus',t('need_config'),'error');return}
  const email=$('signupEmail')?.value.trim()||'',pass=$('signupPassword')?.value||'',confirm=$('signupPasswordConfirm')?.value||'',name=$('signupName')?.value.trim()||'';
  if(!validEmail(email)){status('authStatus',t('auth_invalid_email'),'error');return}
  if(pass.length<8){status('authStatus',t('password_too_short'),'error');return}
  if(pass!==confirm){status('authStatus',t('password_mismatch'),'error');return}
  if(!name||name.length>24){status('authStatus',t('invalid_player_name'),'error');return}
  notice('');status('authStatus','');setBusy('signUpBtn',true);
  try{
    const p=await authRequest('/signup?redirect_to='+redirectUrl(),{email,password:pass,data:{username:name,locale}});clearPasswordFields();
    if(p.access_token){writeAuth(p,false);await registerSession();renderAccountState();await loadProfile();status('authStatus',t('signed_in_ok'),'success')}
    else{setAuthMode('signin',{clearStatus:false});if($('email'))$('email').value=email;status('authStatus',t('signed_up_ok'),'success')}
  }catch(e){if(localSignedIn())resetAuth();clearPasswordFields();status('authStatus',missingPortalSchema(e)?t('schema_missing'):authError(e),'error')}
  finally{setBusy('signUpBtn',false);applyLanguage()}
}
async function resendConfirmation(){const email=$('email')?.value.trim()||$('signupEmail')?.value.trim()||'';if(!validEmail(email)){status('authStatus',t('auth_invalid_email'),'error');return}notice('');status('authStatus','');setBusy('resendConfirmationBtn',true);try{await authRequest('/resend?redirect_to='+redirectUrl(),{email,type:'signup'});status('authStatus',t('confirmation_sent'),'success')}catch(e){status('authStatus',authError(e),'error')}finally{setBusy('resendConfirmationBtn',false);applyLanguage()}}
async function forgotPassword(){const email=$('email')?.value.trim()||$('signupEmail')?.value.trim()||'';if(!validEmail(email)){status('authStatus',t('auth_invalid_email'),'error');return}notice('');status('authStatus','');setBusy('forgotPasswordBtn',true);try{await authRequest('/recover?redirect_to='+redirectUrl(),{email});status('authStatus',t('password_reset_sent'),'success')}catch(e){status('authStatus',authError(e),'error')}finally{setBusy('forgotPasswordBtn',false);applyLanguage()}}
async function saveNewPassword(event){
  if(event?.preventDefault)event.preventDefault();
  const pass=$('newPassword')?.value||'',confirm=$('newPasswordConfirm')?.value||'';
  if(!recoveryAccessToken){status('authStatus',t('auth_link_invalid'),'error');return}
  if(pass.length<8){status('authStatus',t('password_too_short'),'error');return}
  if(pass!==confirm){status('authStatus',t('password_mismatch'),'error');return}
  setBusy('saveNewPasswordBtn',true);
  try{
    await request('/auth/v1/user',{method:'PUT',body:{password:pass},token:recoveryAccessToken,includeSession:false});
    recoveryAccessToken='';TAB.remove(RECOVERY_KEY);clearPasswordFields();
    if($('recoveryPanel'))$('recoveryPanel').hidden=true;if($('authModes'))$('authModes').hidden=false;
    setAuthMode('signin',{clearStatus:false});status('authStatus',t('password_reset_done'),'success');
  }catch(e){
    if(/401|invalid.*token|expired|otp/i.test(String(e&&e.message||''))){recoveryAccessToken='';TAB.remove(RECOVERY_KEY);if($('saveNewPasswordBtn'))$('saveNewPasswordBtn').disabled=true;status('authStatus',t('auth_link_invalid'),'error')}
    else status('authStatus',authError(e),'error');
  }finally{setBusy('saveNewPasswordBtn',false);if($('saveNewPasswordBtn')&&!recoveryAccessToken)$('saveNewPasswordBtn').disabled=true;applyLanguage()}
}
function cancelRecovery(){
  recoveryAccessToken='';TAB.remove(RECOVERY_KEY);clearPasswordFields();
  if($('recoveryPanel'))$('recoveryPanel').hidden=true;if($('authModes'))$('authModes').hidden=false;
  setAuthMode('signin',{clearStatus:false});status('authStatus','','');
}
async function signOut(){
  if(!localSignedIn()){resetAuth();return}
  const old=auth;setBusy('signOutBtn',true);let appRevoked=false,authRevoked=false;
  try{
    if(!auth.expiresAt||auth.expiresAt<Date.now()+60000){try{await refreshToken()}catch(_e){}}
    try{
      const rows=await request(`/rest/v1/app_sessions?select=session_id,revoked_at&session_id=eq.${encodeURIComponent(old.appSessionId)}&user_id=eq.${encodeURIComponent(old.userId)}`,{method:'PATCH',body:{revoked_at:new Date().toISOString()},prefer:'return=representation'});
      appRevoked=Array.isArray(rows)&&rows.some(r=>r.session_id===old.appSessionId&&!!r.revoked_at);
    }catch(_e){}
    try{await request('/auth/v1/logout?scope=local',{method:'POST',body:{},token:auth?.accessToken||old.accessToken,includeSession:false});authRevoked=true}catch(_e){}
  }finally{
    resetAuth();const complete=appRevoked&&authRevoked;
    notice(t(complete?'signed_out_ok':'signout_partial'),complete?'success':'error');
    setBusy('signOutBtn',false);applyLanguage();
  }
}
async function loadProfile(){
  if(!localSignedIn()){status('profileStatus',t('sign_in_first'),'error');return}
  status('profileStatus','');setBusy('loadProfileBtn',true);
  try{
    await ensureActive();
    const rows=await request(`/rest/v1/profiles?select=id,username,locale,credits&id=eq.${encodeURIComponent(auth.userId)}&limit=1`);
    const profile=Array.isArray(rows)?rows[0]:null;if(!profile)throw new Error(t('profile_not_found'));
    auth.profile=profile;saveAuth();renderAccountState();status('profileStatus','');
  }catch(e){showDataError('profileStatus',e)}finally{setBusy('loadProfileBtn',false)}
}
async function saveProfile(){
  if(!localSignedIn()){status('profileStatus',t('sign_in_first'),'error');return}
  const username=$('profileName')?.value.trim()||'',profileLocale=$('profileLocale')?.value||locale;
  if(!username||username.length>24){status('profileStatus',t('invalid_player_name'),'error');return}
  status('profileStatus','');setBusy('saveProfileBtn',true);
  try{
    await ensureActive();
    const updated=await request(`/rest/v1/profiles?id=eq.${encodeURIComponent(auth.userId)}`,{method:'PATCH',body:{username,locale:profileLocale},prefer:'return=representation'});
    if(!Array.isArray(updated)||!updated.some(r=>r.id===auth.userId))throw new Error(t('no_rows_updated'));
    locale=profileLocale;STORE.set(LOCALE_KEY,locale);auth.profile={...(auth.profile||{}),username,locale:profileLocale};saveAuth();
    applyLanguage();renderAccountState();status('profileStatus',t('profile_saved'),'success');
  }catch(e){showDataError('profileStatus',e)}finally{setBusy('saveProfileBtn',false)}
}
function renderSessions(rows){
  sessionRows=rows;sessionRowsLoaded=true;const root=$('sessionsList');if(!root)return;root.replaceChildren();
  if(!rows.length){root.append(el('div','empty',t('sessions_empty')));return}
  for(const rowData of rows){
    const current=rowData.session_id===auth?.appSessionId,row=el('article','list-row'),icon=el('div','skin-icon',current?'●':'○'),main=el('div','list-main');
    main.append(el('div','list-title',rowData.label||'Neon Arena'));
    main.append(el('div','list-meta',`${t('last_seen')}: ${formatDate(rowData.last_seen_at)} · ${t('session_id')}: ${String(rowData.session_id||'').slice(0,8)}`));
    const actions=el('div','list-actions');
    if(current&&!rowData.revoked_at)actions.append(el('span','badge good',t('current_session')));
    else if(rowData.revoked_at)actions.append(el('span','badge warn',t('session_revoked')));
    else{
      actions.append(el('span','badge good',t('session_active')));
      const busy=pendingSessions.has(String(rowData.session_id)),b=el('button','btn danger small',busy?t('working'):t('revoke'));
      b.type='button';b.disabled=busy;b.addEventListener('click',()=>revokeSession(rowData.session_id));actions.append(b);
    }
    row.append(icon,main,actions);root.append(row);
  }
}
function formatDate(v){if(!v)return'—';const d=new Date(v);if(Number.isNaN(d.valueOf()))return'—';try{return new Intl.DateTimeFormat(locale==='ru'?'ru-RU':'en-GB',{dateStyle:'medium',timeStyle:'short'}).format(d)}catch(_e){return d.toLocaleString()}}
async function loadSessions(){
  const locked=$('sessionsLocked'),panel=$('sessionsPanel');
  if(!localSignedIn()){if(locked)locked.hidden=false;if(panel)panel.hidden=true;return}
  if(locked)locked.hidden=true;if(panel)panel.hidden=false;
  notice('');setBusy('loadSessionsBtn',true);setBusy('refreshSessionsBtn',true);status('sessionsStatus','');
  try{
    await ensureActive();
    const rows=await requestAllRows(`/rest/v1/app_sessions?select=session_id,label,created_at,last_seen_at,revoked_at&user_id=eq.${encodeURIComponent(auth.userId)}&order=last_seen_at.desc`,{pageSize:500,maxRows:5000});
    renderSessions(rows.rows);if(rows.truncated)status('sessionsStatus',t('limited_results').replace('{n}',rows.rows.length.toLocaleString(locale==='ru'?'ru-RU':'en-US')),'warn');
    else status('sessionsStatus','');
  }catch(e){showDataError('sessionsStatus',e);if(!localSignedIn()){if(locked)locked.hidden=false;if(panel)panel.hidden=true;notice(t('session_missing'),'error')}}
  finally{setBusy('loadSessionsBtn',false);setBusy('refreshSessionsBtn',false)}
}
async function revokeSession(id){
  if(!localSignedIn()||pendingSessions.has(String(id)))return;
  if(!window.confirm(locale==='ru'?'Отозвать эту сессию?':'Revoke this session?'))return;
  const key=String(id);status('sessionsStatus','');pendingSessions.add(key);renderSessions(sessionRows);
  try{
    await ensureActive();
    const updated=await request(`/rest/v1/app_sessions?session_id=eq.${encodeURIComponent(id)}&user_id=eq.${encodeURIComponent(auth.userId)}`,{method:'PATCH',body:{revoked_at:new Date().toISOString()},prefer:'return=representation'});
    const confirmed=Array.isArray(updated)&&updated.some(r=>String(r.session_id)===key&&!!r.revoked_at);
    if(!confirmed&&id===auth.appSessionId){
      // RLS may hide a revoked current row from RETURNING. Leave locally, but do not claim server confirmation.
      try{await request('/auth/v1/logout?scope=local',{method:'POST',body:{},token:auth.accessToken,includeSession:false})}catch(_e){}
      resetAuth();if($('sessionsLocked'))$('sessionsLocked').hidden=false;if($('sessionsPanel'))$('sessionsPanel').hidden=true;notice(t('signout_partial'),'error');return;
    }
    if(!confirmed)throw new Error(t('no_rows_updated'));
    if(id===auth.appSessionId){
      resetAuth();if($('sessionsLocked'))$('sessionsLocked').hidden=false;if($('sessionsPanel'))$('sessionsPanel').hidden=true;notice(t('session_revoked_ok'),'success');
    }else{status('sessionsStatus',t('session_revoked_ok'),'success');await loadSessions()}
  }catch(e){showDataError('sessionsStatus',e);if(!localSignedIn()){if($('sessionsLocked'))$('sessionsLocked').hidden=false;if($('sessionsPanel'))$('sessionsPanel').hidden=true;notice(t('session_missing'),'error')}}
  finally{pendingSessions.delete(key);if(sessionRowsLoaded&&localSignedIn())renderSessions(sessionRows)}
}
function skinName(id){
  const key='skin_'+String(id||'');return (I18N[locale]&&I18N[locale][key])||I18N.en[key]||id||'—';
}
function weaponName(id){
  const key='weapon_'+String(id||'');return (I18N[locale]&&I18N[locale][key])||I18N.en[key]||WEAPONS[id]||id||'—';
}
function renderInventory(){
  const select=$('inventorySelect');
  if(select){
    select.replaceChildren();
    const firstKey=!inventoryLoaded?'inventory_not_loaded':inventory.length?'choose_skin':'no_synced_skins';
    const first=el('option','',t(firstKey));first.value='';select.append(first);
    for(const item of inventory){const option=el('option','',`${weaponName(item.weapon_id)} · ${skinName(item.skin_id)}`);option.value=`${item.weapon_id}:${item.skin_id}`;select.append(option)}
  }
  if($('inventoryCount'))$('inventoryCount').textContent=inventoryLoaded?String(inventory.length):'—';
  if($('inventoryHint')){const key=!inventoryLoaded?'inventory_hint':inventory.length?'inventory_loaded':'no_synced_skins';$('inventoryHint').dataset.i18n=key;$('inventoryHint').textContent=t(key)}
  if($('inventoryBadge')){const key=!localSignedIn()?'sign_in_to_buy':inventoryLoaded?(inventory.length?'inventory_ready':'inventory_loaded'):'inventory_signed_in';$('inventoryBadge').dataset.i18n=key;$('inventoryBadge').textContent=t(key);$('inventoryBadge').classList.toggle('good',localSignedIn()&&inventoryLoaded)}
  if($('listSkinBtn')){const busy=$('listSkinBtn').dataset.busy==='true';$('listSkinBtn').disabled=busy||!ready()||!localSignedIn()||!inventoryLoaded||!inventory.length}
  if($('loadInventoryBtn')){$('loadInventoryBtn').disabled=!ready()||!localSignedIn()||pendingActions.has('load-inventory')}
}
function renderCollection(){
  const root=$('collectionList');if(!root)return;root.replaceChildren();
  if($('collectionCountValue'))$('collectionCountValue').textContent=collectionLoaded?String(collectionRows.length):'—';
  if(!collectionLoaded){root.append(el('div','empty',t('not_enough_data')));return}
  if(!collectionRows.length){root.append(el('div','empty',t('collection_empty')));return}
  for(const item of collectionRows){
    const row=el('article','list-row'),icon=el('div','skin-icon','✦'),main=el('div','list-main');
    main.append(el('div','list-title',`${weaponName(item.weapon_id)} · ${skinName(item.skin_id)}`));
    main.append(el('div','list-meta',`${t('synced_at')}: ${formatDate(item.created_at)}`));
    row.append(icon,main,el('span','badge good',t('collection_synced')));root.append(row);
  }
}
async function loadCollection(){
  if(!localSignedIn()){status('collectionStatus',t('sign_in_first'),'error');return}
  notice('');setBusy('loadCollectionBtn',true);status('collectionStatus','');
  try{
    await ensureActive();
    const result=await requestAllRows(`/rest/v1/user_skins?select=id,weapon_id,skin_id,created_at&owner_id=eq.${encodeURIComponent(auth.userId)}&order=created_at.desc`,{pageSize:500,maxRows:10000});
    collectionRows=result.rows;collectionTruncated=result.truncated;collectionLoaded=true;renderCollection();
    status('collectionStatus',collectionTruncated?t('limited_results').replace('{n}',collectionRows.length.toLocaleString(locale==='ru'?'ru-RU':'en-US')):'',collectionTruncated?'warn':'');
  }catch(e){showDataError('collectionStatus',e)}finally{setBusy('loadCollectionBtn',false)}
}
function renderStats(){
  if(!statsLoaded){
    for(const id of ['matchCountValue','winCountValue','lossCountValue','winRateValue','creditsEarnedValue','winBarLabel','lossBarLabel'])if($(id))$(id).textContent='—';
    if($('recentMatches')){$('recentMatches').replaceChildren();$('recentMatches').append(el('div','empty',t('not_enough_data')))}return;
  }
  const total=statsRows.length,wins=statsRows.filter(r=>r.won===true).length,losses=total-wins,earned=statsRows.reduce((n,r)=>n+Math.max(0,Number(r.amount)||0),0),rate=total?(wins/total*100):0;
  const values={matchCountValue:total,winCountValue:wins,lossCountValue:losses,winRateValue:`${rate.toLocaleString(locale==='ru'?'ru-RU':'en-US',{maximumFractionDigits:1})}%`,creditsEarnedValue:earned.toLocaleString(locale==='ru'?'ru-RU':'en-US')};
  for(const [id,value] of Object.entries(values))if($(id))$(id).textContent=String(value);
  if($('winBarLabel'))$('winBarLabel').textContent=String(wins);if($('lossBarLabel'))$('lossBarLabel').textContent=String(losses);
  const wp=$('winProgress'),lp=$('lossProgress');if(wp){wp.max=Math.max(total,1);wp.value=wins}if(lp){lp.max=Math.max(total,1);lp.value=losses}
  if($('statsStatus'))status('statsStatus',statsTruncated?t('limited_results').replace('{n}',statsRows.length.toLocaleString(locale==='ru'?'ru-RU':'en-US')):'',statsTruncated?'warn':'');
  const root=$('recentMatches');if(!root)return;root.replaceChildren();
  if(!total){root.append(el('div','empty',t('stats_empty')));return}
  for(const rowData of statsRows.slice(0,12)){
    const row=el('article','list-row'),icon=el('div','skin-icon',rowData.won?'✓':'×'),main=el('div','list-main');
    main.append(el('div','list-title',`${modeName(rowData.mode)} · ${t(rowData.won?'result_won':'result_lost')}`));
    main.append(el('div','list-meta',`${t('match_when')}: ${formatDate(rowData.created_at)} · ${t('credits')}: ${Math.max(0,Number(rowData.amount)||0).toLocaleString(locale==='ru'?'ru-RU':'en-US')} CR`));
    row.append(icon,main,el('span',`badge ${rowData.won?'good':'warn'}`,rowData.won?t('result_won'):t('result_lost')));root.append(row);
  }
}
async function loadStats(){
  if(!localSignedIn()){status('statsStatus',t('sign_in_first'),'error');return}
  notice('');setBusy('loadStatsBtn',true);status('statsStatus','');
  try{
    await ensureActive();
    const result=await requestAllRows(`/rest/v1/match_credit_awards?select=match_id,mode,won,amount,created_at&user_id=eq.${encodeURIComponent(auth.userId)}&order=created_at.desc`,{pageSize:500,maxRows:10000});
    statsRows=result.rows;statsTruncated=result.truncated;statsLoaded=true;renderStats();
  }catch(e){showDataError('statsStatus',e)}finally{setBusy('loadStatsBtn',false)}
}
function renderOffers(){
  const root=$('offersList');if(!root)return;
  if($('marketLoadNote')){$('marketLoadNote').dataset.i18n=offersLoaded?'market_loaded_note':'market_load_note';$('marketLoadNote').textContent=t(offersLoaded?'market_loaded_note':'market_load_note')}
  root.replaceChildren();
  if(!offersLoaded){root.append(el('div','empty',t('not_enough_data')));return}
  const q=($('marketSearch')?.value||'').toLowerCase(),weapon=$('weaponFilter')?.value||'',sort=$('sortBy')?.value||'new';
  let rows=offers.filter(o=>{const label=(weaponName(o.weapon_id)+' '+skinName(o.skin_id)+' '+(o.seller_id||'')).toLowerCase();return(!q||label.includes(q))&&(!weapon||o.weapon_id===weapon)});
  if(sort==='low')rows.sort((a,b)=>Number(a.price)-Number(b.price));else if(sort==='high')rows.sort((a,b)=>Number(b.price)-Number(a.price));else rows.sort((a,b)=>new Date(b.created_at)-new Date(a.created_at));
  if(!offers.length){root.append(el('div','empty',t('market_empty')));return}
  if(!rows.length){root.append(el('div','empty',t('no_matching_offers')));return}
  for(const offer of rows){
    const row=el('article','list-row'),icon=el('div','skin-icon','✦'),main=el('div','list-main');
    main.append(el('div','list-title',`${weaponName(offer.weapon_id)} · ${skinName(offer.skin_id)}`));
    main.append(el('div','list-meta',`${t('seller')}: ${String(offer.seller_id||'').slice(0,8)} · ${formatDate(offer.created_at)}`));
    const actions=el('div','list-actions');actions.append(el('span','price',`${Number(offer.price||0).toLocaleString(locale==='ru'?'ru-RU':'en-US')} CR`));
    if(localSignedIn()&&offer.seller_id===auth.userId){
      const busy=pendingActions.has(`cancel:${offer.id}`),b=el('button','btn danger small',busy?t('working'):t('cancel_listing'));b.type='button';b.disabled=busy;b.addEventListener('click',()=>cancelOffer(offer.id));actions.append(b);
    }else if(localSignedIn()){
      const busy=pendingActions.has(`buy:${offer.id}`),b=el('button','btn primary small',busy?t('working'):t('buy'));b.type='button';b.disabled=busy;b.addEventListener('click',()=>buyOffer(offer.id));actions.append(b);
    }else{const a=el('a','btn small',t('sign_in'));a.href='account.html';actions.append(a)}
    row.append(icon,main,actions);root.append(row);
  }
}
async function loadMarket(options={}){
  if(pendingActions.has('load-market'))return;
  if(!ready()){status('marketStatus',t('need_config'),'error');return}
  pendingActions.add('load-market');setBusy('loadOffersBtn',true);setBusy('refreshOffersBtn',true);
  if(!options?.preserveNotice)notice('');status('marketStatus','');offers=[];offersLoaded=false;offersTruncated=false;renderOffers();
  try{
    const signed=localSignedIn();if(signed)await ensureActive();
    const result=await requestAllRows('/rest/v1/market_listings?select=id,seller_id,weapon_id,skin_id,price,status,created_at&status=eq.active&order=created_at.desc',{pageSize:500,maxRows:10000,publicOnly:!signed,includeSession:signed});
    offers=result.rows;offersTruncated=result.truncated;offersLoaded=true;renderOffers();
    status('marketStatus',offersTruncated?t('limited_results').replace('{n}',offers.length.toLocaleString(locale==='ru'?'ru-RU':'en-US')):'',offersTruncated?'warn':'');
  }catch(e){showDataError('marketStatus',e)}
  finally{pendingActions.delete('load-market');setBusy('loadOffersBtn',false);setBusy('refreshOffersBtn',false)}
}
async function loadInventory(){
  if(!localSignedIn()){status('marketStatus',t('sign_in_to_buy'),'error');return}
  if(pendingActions.has('load-inventory'))return;
  pendingActions.add('load-inventory');setBusy('loadInventoryBtn',true);status('marketStatus','');
  try{
    await ensureActive();
    const result=await requestAllRows(`/rest/v1/user_skins?select=id,weapon_id,skin_id,created_at&owner_id=eq.${encodeURIComponent(auth.userId)}&order=created_at.desc`,{pageSize:500,maxRows:10000});
    inventory=result.rows;inventoryLoaded=true;renderInventory();
    status('marketStatus',result.truncated?t('limited_results').replace('{n}',inventory.length.toLocaleString(locale==='ru'?'ru-RU':'en-US')):t('inventory_loaded'),result.truncated?'warn':'success');
  }catch(e){showDataError('marketStatus',e)}
  finally{pendingActions.delete('load-inventory');setBusy('loadInventoryBtn',false);renderInventory()}
}
async function listSkin(){
  if(!localSignedIn()){status('marketStatus',t('sign_in_to_buy'),'error');return}
  if(pendingActions.has('list-skin'))return;
  const value=$('inventorySelect')?.value||'',price=Number($('askingPrice')?.value);
  if(!value){status('marketStatus',t(inventoryLoaded?'no_synced_skins':'inventory_not_loaded'),'error');return}
  if(!Number.isInteger(price)||price<1||price>999999){status('marketStatus',t('invalid_price'),'error');return}
  const [weapon_id,skin_id]=value.split(':');status('marketStatus','');pendingActions.add('list-skin');setBusy('listSkinBtn',true);
  try{
    await ensureActive();
    const listed=await request('/rest/v1/market_listings',{method:'POST',body:{seller_id:auth.userId,weapon_id,skin_id,price,status:'active'},prefer:'return=representation'});
    if(!Array.isArray(listed)||!listed.some(r=>r.seller_id===auth.userId&&r.weapon_id===weapon_id&&r.skin_id===skin_id&&Number(r.price)===price))throw new Error(t('no_rows_updated'));
    status('marketStatus',t('offer_listed'),'success');notice(t('offer_listed'),'success');await loadMarket({preserveNotice:true});
  }catch(e){showDataError('marketStatus',e)}
  finally{pendingActions.delete('list-skin');setBusy('listSkinBtn',false);renderInventory()}
}
async function buyOffer(id){
  if(!localSignedIn()){status('marketStatus',t('sign_in_to_buy'),'error');return}
  const key=`buy:${id}`;if(pendingActions.has(key))return;
  if(!window.confirm(locale==='ru'?'Купить этот скин за игровые кредиты?':'Buy this skin with game credits?'))return;
  status('marketStatus','');pendingActions.add(key);renderOffers();
  try{
    await ensureActive();const result=await request('/rest/v1/rpc/buy_market_listing',{method:'POST',body:{p_listing_id:id}});
    if(!result||typeof result!=='object'||Array.isArray(result)||String(result.listing_id)!==String(id))throw new Error(t('no_rows_updated'));
    notice(t('offer_bought'),'success');inventory=[];inventoryLoaded=false;renderInventory();await loadMarket({preserveNotice:true});
  }catch(e){showDataError('marketStatus',e)}
  finally{pendingActions.delete(key);renderOffers()}
}
async function cancelOffer(id){
  if(!localSignedIn())return;
  const key=`cancel:${id}`;if(pendingActions.has(key))return;
  status('marketStatus','');pendingActions.add(key);renderOffers();
  try{
    await ensureActive();const result=await request('/rest/v1/rpc/cancel_market_listing',{method:'POST',body:{p_listing_id:id}});
    if(result!==true)throw new Error(t('no_rows_updated'));
    notice(t('offer_cancelled'),'success');await loadMarket({preserveNotice:true});
  }catch(e){showDataError('marketStatus',e)}
  finally{pendingActions.delete(key);renderOffers()}
}
function mapName(id){return t(MAP_KEYS[id]||'')||id||'—'}
function modeName(id){return t(MODE_KEYS[id]||'')||id||'—'}
function renderServers(){
  const root=$('serversList');if(!root)return;root.replaceChildren();
  if(!serversLoaded){root.append(el('div','empty',t('not_enough_data')));return}
  const q=($('serverSearch')?.value||'').toLowerCase(),map=$('mapFilter')?.value||'',mode=$('modeFilter')?.value||'';
  const rows=servers.filter(s=>(!q||`${s.server_name} ${s.room_code} ${s.relay_url}`.toLowerCase().includes(q))&&(!map||s.map_id===map)&&(!mode||s.mode===mode));
  if(!servers.length){root.append(el('div','empty',t('servers_empty')));return}
  if(!rows.length){root.append(el('div','empty',t('no_matching_servers')));return}
  for(const server of rows){
    const row=el('article','list-row'),icon=el('div','skin-icon','⌖'),main=el('div','list-main');
    main.append(el('div','list-title',server.server_name||'Neon Arena'));
    main.append(el('div','list-meta',`${mapName(server.map_id)} · ${modeName(server.mode)} · ${Number(server.player_count||0)}/${Number(server.max_players||6)} ${t('players')} · ${Number(server.bot_count||0)} ${t('bots')} · ${t('last_seen')}: ${formatDate(server.last_seen_at)}`));
    main.append(el('div','list-meta mono',`${t('relay_address')}: ${server.relay_url||'—'}`));
    const actions=el('div','list-actions'),tag=el('span','server-tag',`${t('room_code')}: ${server.room_code||'—'}`);actions.append(tag);
    const button=el('button','btn small',t('copy_invite'));button.type='button';button.addEventListener('click',()=>copyInvite(server));actions.append(button);
    row.append(icon,main,actions);root.append(row);
  }
}
async function loadServers(){
  if(pendingActions.has('load-servers'))return;
  if(!ready()){status('serversStatus',t('need_config'),'error');return}
  pendingActions.add('load-servers');setBusy('loadServersBtn',true);setBusy('refreshServersBtn',true);status('serversStatus','');notice('');
  servers=[];serversLoaded=false;serversTruncated=false;renderServers();
  try{
    const signed=localSignedIn();if(signed)await ensureActive();
    const result=await requestAllRows('/rest/v1/server_directory?select=id,server_name,relay_url,room_code,map_id,mode,player_count,max_players,bot_count,last_seen_at&order=last_seen_at.desc',{pageSize:500,maxRows:5000,publicOnly:!signed,includeSession:signed});
    servers=result.rows;serversLoaded=true;serversTruncated=result.truncated;renderServers();
    status('serversStatus',serversTruncated?t('limited_results').replace('{n}',servers.length.toLocaleString(locale==='ru'?'ru-RU':'en-US')):'',serversTruncated?'warn':'');
  }catch(e){showDataError('serversStatus',e)}
  finally{pendingActions.delete('load-servers');setBusy('loadServersBtn',false);setBusy('refreshServersBtn',false)}
}
async function copyInvite(server){
  const text=`${server.relay_url||''}\n${locale==='ru'?'Код комнаты':'Room code'}: ${server.room_code||''}`;
  try{
    if(navigator.clipboard&&window.isSecureContext)await navigator.clipboard.writeText(text);
    else{const area=document.createElement('textarea');area.className='clipboard-temp';area.value=text;document.body.append(area);area.select();const copied=document.execCommand('copy');area.remove();if(!copied)throw new Error('clipboard unavailable')}
    notice('');status('serversStatus',t('invite_copied'),'success');
  }catch(_e){status('serversStatus',t('clipboard_error'),'error');notice(t('clipboard_error'),'error')}
}
function authTabKeydown(event){
  const tabs=[$('signInTab'),$('signUpTab')].filter(Boolean);if(!tabs.length)return;
  const current=tabs.indexOf(event.currentTarget);let next=current;
  if(event.key==='ArrowRight'||event.key==='ArrowDown')next=(current+1)%tabs.length;
  else if(event.key==='ArrowLeft'||event.key==='ArrowUp')next=(current+tabs.length-1)%tabs.length;
  else if(event.key==='Home')next=0;else if(event.key==='End')next=tabs.length-1;else return;
  event.preventDefault();const target=tabs[next];if(target.focus)target.focus();setAuthMode(next===0?'signin':'signup');
}

function init(){
  document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>setLanguage(b.dataset.lang)));
  const links=[...document.querySelectorAll('.nav a')];
  for(const a of links)if(a.getAttribute('href')===location.pathname.split('/').pop()||page==='home'&&a.getAttribute('href')==='index.html')a.classList.add('active');
  applyLanguage();applyTheme(themeSetting);renderAccountState();renderInventory();setAuthMode('signin',{copyEmail:false,clearStatus:false});
  document.querySelectorAll('[data-theme-preset]').forEach(b=>b.addEventListener('click',()=>setTheme(b.dataset.themePreset)));
  const accentPicker=$('accentPicker');
  if(accentPicker){accentPicker.addEventListener('input',()=>setTheme(accentPicker.value,false));accentPicker.addEventListener('change',()=>setTheme(accentPicker.value,true))}
  if($('signInTab')){$('signInTab').addEventListener('click',()=>setAuthMode('signin'));$('signInTab').addEventListener('keydown',authTabKeydown)}
  if($('signUpTab')){$('signUpTab').addEventListener('click',()=>setAuthMode('signup'));$('signUpTab').addEventListener('keydown',authTabKeydown)}
  if($('signInForm'))$('signInForm').addEventListener('submit',signIn);
  if($('signUpForm'))$('signUpForm').addEventListener('submit',signUp);
  if($('recoveryForm'))$('recoveryForm').addEventListener('submit',saveNewPassword);
  if($('recoveryCancelBtn'))$('recoveryCancelBtn').addEventListener('click',cancelRecovery);
  document.querySelectorAll('[data-password-toggle]').forEach(b=>b.addEventListener('click',()=>{const input=$(b.dataset.passwordToggle);if(!input)return;const show=input.type==='password';input.type=show?'text':'password';b.dataset.i18n=show?'hide_password':'show_password';b.setAttribute('aria-pressed',String(show));b.textContent=t(b.dataset.i18n)}));
  if($('forgotPasswordBtn'))$('forgotPasswordBtn').addEventListener('click',forgotPassword);
  if($('resendConfirmationBtn'))$('resendConfirmationBtn').addEventListener('click',resendConfirmation);
  if($('signOutBtn'))$('signOutBtn').addEventListener('click',signOut);
  if($('loadProfileBtn'))$('loadProfileBtn').addEventListener('click',loadProfile);
  if($('saveProfileBtn'))$('saveProfileBtn').addEventListener('click',saveProfile);
  if($('loadSessionsBtn'))$('loadSessionsBtn').addEventListener('click',loadSessions);
  if($('refreshSessionsBtn'))$('refreshSessionsBtn').addEventListener('click',loadSessions);
  if($('loadOffersBtn'))$('loadOffersBtn').addEventListener('click',()=>loadMarket());
  if($('refreshOffersBtn'))$('refreshOffersBtn').addEventListener('click',()=>loadMarket());
  if($('loadInventoryBtn'))$('loadInventoryBtn').addEventListener('click',loadInventory);
  if($('loadCollectionBtn'))$('loadCollectionBtn').addEventListener('click',loadCollection);
  if($('loadStatsBtn'))$('loadStatsBtn').addEventListener('click',loadStats);
  if($('loadServersBtn'))$('loadServersBtn').addEventListener('click',loadServers);
  if($('refreshServersBtn'))$('refreshServersBtn').addEventListener('click',loadServers);
  if($('listSkinBtn'))$('listSkinBtn').addEventListener('click',listSkin);
  for(const id of ['marketSearch','weaponFilter','sortBy'])if($(id))$(id).addEventListener('input',renderOffers);
  for(const id of ['serverSearch','mapFilter','modeFilter'])if($(id))$(id).addEventListener('input',renderServers);
  if($('sessionsLocked')){$('sessionsLocked').hidden=localSignedIn();if($('sessionsPanel'))$('sessionsPanel').hidden=!localSignedIn()}
  handleAuthRedirect();
  for(const id of ['signInBtn','signUpBtn','forgotPasswordBtn','resendConfirmationBtn','loadCollectionBtn','loadStatsBtn','loadOffersBtn','refreshOffersBtn','loadServersBtn','refreshServersBtn'])if($(id))$(id).disabled=!ready();
  if($('loadInventoryBtn'))$('loadInventoryBtn').disabled=!ready()||!localSignedIn();
  if($('saveNewPasswordBtn'))$('saveNewPasswordBtn').disabled=!ready()||!recoveryAccessToken;
  renderInventory();
  const cfgNote=$('configNote');if(cfgNote)cfgNote.hidden=ready();
}
document.addEventListener('DOMContentLoaded',init);
