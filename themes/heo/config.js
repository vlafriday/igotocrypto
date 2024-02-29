const CONFIG = {
  HEO_HOME_BANNER_ENABLE: true,

  HEO_SITE_CREATE_TIME: '2019-10-06', // Дата создания веб-сайта. Используется для расчета количества дней, в течение которых веб-сайт работает.

  // 首页顶部通知条滚动内容，如不需要可以留空 []
  HEO_NOTICE_BAR: [
    { title: 'Добро пожаловать в мой блог', url: 'https://vlafriday.space' },
    { title: 'Добро пожаловать в мой мир', url: 'https://vlafriday.space' }
  ],

  // Левый и правый компоненты области героя поменялись местами
  HEO_HERO_REVERSE: false,
  // Левый и правый компоненты области тела блога меняются местами
  HEO_HERO_BODY_REVERSE: false,

  // Зона героев (большая карта в верхней части главной страницы)
  HEO_HERO_TITLE_1: 'Поделиться программированием',
  HEO_HERO_TITLE_2: 'и мышление познания',
  HEO_HERO_TITLE_3: 'vlafriday.space',
  HEO_HERO_TITLE_4: 'Тут я показываю',
  HEO_HERO_TITLE_5: 'Просто мой путь',
  HEO_HERO_TITLE_LINK: 'https://vlafriday.space/my-impossible-list',

  // В разделе "Герои" отображаются три главные категории
  HEO_HERO_CATEGORY_1: { title: 'Поиск', url: '/tag/search' },
  HEO_HERO_CATEGORY_2: { title: 'Важное', url: '/tag/carefully' },
  HEO_HERO_CATEGORY_3: { title: 'Ссылки', url: '/tag/links' },

  // Тег рекомендуемых статей в правой части области героя, например [Recommended], до шести статей; если оставить пустым '', то рекомендуются недавно обновленные статьи
  HEO_HERO_RECOMMEND_POST_TAG: 'Video',
  HEO_HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME: true, // Предлагаемые статьи сортируются по `true`, чтобы заставить обратный хронологический порядок последней модификации.
  //   HERO_RECOMMEND_COVER: 'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg', // 英雄区右侧图片

  // Приветственное сообщение на правой карточке профиля, нажмите для автоматического переключения
  HEO_INFOCARD_GREETINGS: [
    '🔍 Делимся и помогаем с энтузиазмом',
    '🤝 Специализируемся на взаимодействии и дизайне',
    '🏃 практичный активист',
    '🏠 Эксперт по умному дому',
    '🤖️ Энтузиаст цифровых технологий',
    '🧱 Механизм группы команд'
  ],
  HEO_INFO_CARD_URL: 'https://github.com/vlafriday', // Ссылка на кнопку внизу профиля

  // 用户技能图标
  HEO_GROUP_ICONS: [
    {
      title_1: 'AfterEffect',
      img_1: '/images/heo/20239df3f66615b532ce571eac6d14ff21cf072602.webp',
      color_1: '#989bf8',
      title_2: 'Sketch',
      img_2: '/images/heo/2023e0ded7b724a39f12d59c3dc8fbdc7cbe074202.webp',
      color_2: '#ffffff'
    },
    {
      title_1: 'Docker',
      img_1: '/images/heo/20231108a540b2862d26f8850172e4ea58ed075102.webp',
      color_1: '#57b6e6',
      title_2: 'Photoshop',
      img_2: '/images/heo/2023e4058a91608ea41751c4f102b131f267075902.webp',
      color_2: '#4082c3'
    },
    {
      title_1: 'FinalCutPro',
      img_1: '/images/heo/20233e777652412247dd57fd9b48cf997c01070702.webp',
      color_1: '#ffffff',
      title_2: 'Python',
      img_2: '/images/heo/20235c0731cd4c0c95fc136a8db961fdf963071502.webp',
      color_2: '#ffffff'
    },
    {
      title_1: 'Swift',
      img_1: '/images/heo/202328bbee0b314297917b327df4a704db5c072402.webp',
      color_1: '#eb6840',
      title_2: 'Principle',
      img_2: '/images/heo/2023f76570d2770c8e84801f7e107cd911b5073202.webp',
      color_2: '#8f55ba'
    },
    {
      title_1: 'illustrator',
      img_1: '/images/heo/20237359d71b45ab77829cee5972e36f8c30073902.webp',
      color_1: '#f29e39',
      title_2: 'CSS3',
      img_2: '/images/heo/20237c548846044a20dad68a13c0f0e1502f074602.webp',
      color_2: '#2c51db'
    },
    {
      title_1: 'JS',
      img_1: '/images/heo/2023786e7fc488f453d5fb2be760c96185c0075502.webp',
      color_1: '#f7cb4f',
      title_2: 'HTML',
      img_2: '/images/heo/202372b4d760fd8a497d442140c295655426070302.webp',
      color_2: '#e9572b'
    },
    {
      title_1: 'Git',
      img_1: '/images/heo/2023ffa5707c4e25b6beb3e6a3d286ede4c6071102.webp',
      color_1: '#df5b40',
      title_2: 'Rhino',
      img_2: '/images/heo/20231ca53fa0b09a3ff1df89acd7515e9516173302.webp',
      color_2: '#1f1f1f'
    }
  ],

  HEO_SOCIAL_CARD: false, // Если отображается правая сторона, нажмите кнопку «Присоединиться к сообществу»
  HEO_SOCIAL_CARD_TITLE_1: 'канал связи',
  HEO_SOCIAL_CARD_TITLE_2: 'Присоединяйтесь к нашему сообществу, чтобы обсуждать и делиться',
  HEO_SOCIAL_CARD_TITLE_3: 'Нажмите, чтобы присоединиться к сообществу',
  HEO_SOCIAL_CARD_URL: 'https://vlafriday.space',

  // *****  以下配置无效，只是预留开发 ****
  // 菜单配置
  HEO_MENU_INDEX: false, // 显示首页
  HEO_MENU_CATEGORY: false, // 显示分类
  HEO_MENU_TAG: true, // 显示标签
  HEO_MENU_ARCHIVE: false, // 显示归档
  HEO_MENU_SEARCH: false, // 显示搜索

  HEO_POST_LIST_COVER: true, // Показать обложки статей в списке
  HEO_POST_LIST_COVER_HOVER_ENLARGE: false, // Наведение курсора мыши на список для увеличения

  HEO_POST_LIST_COVER_DEFAULT: true, // Обложка по умолчанию с фоном сайта, когда обложка пуста
  HEO_POST_LIST_SUMMARY: true, // Краткое содержание статьи
  HEO_POST_LIST_PREVIEW: false, // Читать статью предварительно
  HEO_POST_LIST_IMG_CROSSOVER: true, // Изображения в блогролле расположены в шахматном порядке слева и справа

  HEO_ARTICLE_ADJACENT: true, // Показать Предыдущая Следующая статья Рекомендации
  HEO_ARTICLE_COPYRIGHT: false, // Показать уведомление об авторских правах на статью
  HEO_ARTICLE_RECOMMEND: true, // Рекомендации по работе со статьями

  HEO_WIDGET_LATEST_POSTS: true, // Показать карточку последней статьи
  HEO_WIDGET_ANALYTICS: false, // Отображение статистической карты
  HEO_WIDGET_TO_TOP: true,
  HEO_WIDGET_TO_COMMENT: true, // Перейти к разделу комментариев
  HEO_WIDGET_DARK_MODE: true, // Ночной режим
  HEO_WIDGET_TOC: true // Каталог мобильных устройств
}
export default CONFIG
