/**
 * 另一个落地页主题
 */
const CONFIG = {

  // По умолчанию отображается только текст логотипа, если задано изображение логотипа, то слева от текста будет отображаться иконка.
  STARTER_LOGO: '', // Пример обычного изображения логотипа：/images/starter/logo/logo.svg
  STARTER_LOGO_WHITE: '', // Пример светлого логотипа на прозрачном фоне： /images/starter/logo/logo-white.svg

  // MENU ， 菜单部分不在此处配置，请在Notion数据库中添加MENU

  // 英雄区块导航
  STARTER_HERO_ENABLE: true, // 开启英雄区
  STARTER_HERO_TITLE_1: 'Бесплатный конструктор сайтов с открытым исходным кодом, основанный на Notion notes', // Зона Героев текст
  STARTER_HERO_TITLE_2: 'Умножьте свою ценность, создав сайт без восприятия через заметки.', // Зона Героев текст
  // 英雄区两个按钮，如果TEXT留空则隐藏按钮
  STARTER_HERO_BUTTON_1_TEXT: 'Мой путь', // 英雄区按钮
  STARTER_HERO_BUTTON_1_URL: 'https://www.vlafriday.space/category/%D0%92%D0%B8%D0%B4%D0%B5%D0%BE', // 英雄区按钮
  STARTER_HERO_BUTTON_2_TEXT: 'YouTube канал', // 英雄区按钮
  STARTER_HERO_BUTTON_2_URL: 'https://youtube.com/@vlafriday', // 英雄区按钮
  STARTER_HERO_BUTTON_2_ICON: '/images/starter/github.svg', // 英雄区按钮2的图标，不需要则留空

  STARTER_HERO_PREVIEW_IMAGE: '/images/starter/hero/hero-image.webp', // 产品预览图 ，默认读取public目录下图片

  // 顶部右侧导航暗流
  STARTER_NAV_BUTTON_1_TEXT: 'Войти',
  STARTER_NAV_BUTTON_1_URL: '/signin',

  STARTER_NAV_BUTTON_2_TEXT: 'Регистрация',
  STARTER_NAV_BUTTON_2_URL: '/signup',

  // 特性区块
  STARTER_FEATURE_ENABLE: true, // 特性区块开关
  STARTER_FEATURE_TITLE: 'Характеристика', // характеристика
  STARTER_FEATURE_TEXT_1: 'Ключевые особенности NotionNext', // характеристика
  STARTER_FEATURE_TEXT_2: 'Концепция NotionNext заключается в том, чтобы помочь вам создать свой собственный веб-сайт простым, не требующим особого восприятия и стабильным способом, который повысит ценность вашего бренда.', // характеристика

  STARTER_FEATURE_1_TITLE_1: 'Бесплатно и с открытым исходным кодом', // Характеристика 1
  STARTER_FEATURE_1_TEXT_1: 'Исходный код проекта находится в открытом доступе на Github и соответствует протоколу MIT', // Характеристика 1
  STARTER_FEATURE_1_BUTTON_TEXT: 'Узнать больше', // Характеристика 1
  STARTER_FEATURE_1_BUTTON_URL: 'https://github.com/tangly1024/NotionNext', // Характеристика 1

  STARTER_FEATURE_2_TITLE_1: 'Многочисленные настройки тем', // Характеристика 2
  STARTER_FEATURE_2_TEXT_1: 'Десятки тем, подходящих для разных сцен, всегда найдут подходящую для вас!', // Характеристика 2
  STARTER_FEATURE_2_BUTTON_TEXT: 'Узнать больше', // Характеристика 2
  STARTER_FEATURE_2_BUTTON_URL: 'https://vlafriday.space', // Характеристика 2

  STARTER_FEATURE_3_TITLE_1: 'Отличная производительность', // Характеристика 3
  STARTER_FEATURE_3_TEXT_1: 'Разработка на основе NextJS, более быстрое время отклика, лучшее SEO', // Характеристика 3
  STARTER_FEATURE_3_BUTTON_TEXT: 'Узнать больше', // Характеристика 3
  STARTER_FEATURE_3_BUTTON_URL: 'https://docs.tangly1024.com/article/next-js', // Характеристика 3

  STARTER_FEATURE_4_TITLE_1: 'Удобный опыт написания', // Характеристика 4
  STARTER_FEATURE_4_TEXT_1: 'Просто редактируйте в заметках Notion и автоматически синхронизируйте их с сайтом!', // Характеристика 4
  STARTER_FEATURE_4_BUTTON_TEXT: 'Узнать больше', // Характеристика 4
  STARTER_FEATURE_4_BUTTON_URL: 'https://docs.tangly1024.com/about', // Характеристика 4

  // Главный блок ABOUT
  STARTER_ABOUT_ENABLE: true, // ABOUT区块开关
  STARTER_ABOUT_TITLE: 'Легкое и практичное решение для создания веб-сайтов',
  STARTER_ABOUT_TEXT: 'Цель NotionNext - помочь нетехническим хакерам создать свой собственный сайт с наименьшими затратами и максимально быстро, помогая вам эффективно доносить свои продукты и истории до мира. <br /> <br /> Мощные Notion Notes, простая и быстрая хостинговая платформа Vercel - создайте простой сайт!',
  STARTER_ABOUT_BUTTON_TEXT: 'Узнать больше',
  STARTER_ABOUT_BUTTON_URL: 'https://vlafriday.space/about',
  STARTER_ABOUT_IMAGE_1: 'https://i.pinimg.com/736x/c5/5c/43/c55c433333665e754ae17393b9dba800.jpg',
  STARTER_ABOUT_IMAGE_2: 'https://www.schwab.com/learn/sites/g/files/eyrktu1246/files/Getty_500706310_3x2.jpg',
  STARTER_ABOUT_TIPS_1: '100+',
  STARTER_ABOUT_TIPS_2: 'учеников,',
  STARTER_ABOUT_TIPS_3: 'кто зарабатывает на крипте',

  // Блок цен на главной странице
  STARTER_PRICING_ENABLE: true, // 价格区块开关
  STARTER_PRICING_TITLE: 'прайс-лист',
  STARTER_PRICING_TEXT_1: 'Отличный тарифный план.',
  STARTER_PRICING_TEXT_2: 'Мы разработали гибкую модель оплаты, которую вы можете выбрать по своему желанию. (NotionNext является бесплатным и с открытым исходным кодом, здесь представлена только демонстрация функции оплаты подписки на продукт, пожалуйста, не размещайте заказ на покупку!)',

  STARTER_PRICING_1_TITLE: 'Консультация',
  STARTER_PRICING_1_PRICE: '49.9',
  STARTER_PRICING_1_PRICE_CURRENCY: '$',
    STARTER_PRICING_1_PRICE_PERIOD: ' за 1 час',
    STARTER_PRICING_1_HEADER: 'Включает:',
    STARTER_PRICING_1_FEATURES: 'Все темы, бесплатные обновления, справочные руководства', // разделенные запятыми
    STARTER_PRICING_1_BUTTON_TEXT: 'Купить сейчас',
    STARTER_PRICING_1_BUTTON_URL: 'https://tangly1024.lemonsqueezy.com/checkout/buy/c1a38a65-362e-44c5-8065-733fee39eb54',

  STARTER_PRICING_2_TAG: 'Оптимально',
    STARTER_PRICING_2_TITLE: 'Курс "Криптовалюта для начинающих"',
    STARTER_PRICING_2_PRICE: '299.9',
    STARTER_PRICING_2_PRICE_CURRENCY: '$',
    STARTER_PRICING_2_PRICE_PERIOD: '',
    STARTER_PRICING_2_HEADER: 'Включает:',
    STARTER_PRICING_2_FEATURES: 'Включает в себя стартовую версию, исходный код проекта, внутреннее сообщество, технические консультации, SEO-оптимизацию.', // разделенные запятыми
    STARTER_PRICING_2_BUTTON_TEXT: 'Купить сейчас',
    STARTER_PRICING_2_BUTTON_URL: 'https://tangly1024.lemonsqueezy.com/checkout/buy/590ad70a-c3b7-4caf-94ec-9ca27bde06d4',

  STARTER_PRICING_3_TITLE: 'Менторство',
    STARTER_PRICING_3_PRICE: '799.9',
    STARTER_PRICING_3_PRICE_CURRENCY: '$',
    STARTER_PRICING_3_PRICE_PERIOD: '',
    STARTER_PRICING_3_HEADER: '',
    STARTER_PRICING_3_FEATURES: 'Включает в себя базовую версию, разработку индивидуальных функций', // разделенные запятыми
    STARTER_PRICING_3_BUTTON_TEXT: 'Купить сейчас',
    STARTER_PRICING_3_BUTTON_URL: 'https://tangly1024.lemonsqueezy.com/checkout/buy/df924d66-09dc-42a4-a632-a6b0c5cc4f28',

  // 首页用户测评区块
  STARTER_TESTIMONIALS_ENABLE: true, // 测评区块开关
  STARTER_TESTIMONIALS_TITLE: '用户反馈',
  STARTER_TESTIMONIALS_TEXT_1: 'Что говорят наши ученики',
    STARTER_TESTIMONIALS_TEXT_2: 'Тысячи веб-мастеров выбрали NotionNext для создания своих сайтов, и благодаря справочным руководствам, сообществам и техническим советам они успешно запустили свои сайты.',
    STARTER_TESTIMONIALS_STAR_ICON: '/images/starter/testimonials/icon-star.svg', // Значки рейтинга

   //CONFIG и переменные окружения здесь не поддерживаются, вам необходимо изменить код по очереди.
    STARTER_TESTIMONIALS_ITEMS: [
      {
        STARTER_TESTIMONIALS_ITEM_TEXT: 'Спасибо за метод старшего брата. Я уже пробовал Super, Potion и другие зарубежные сторонние платформы, и их реализация была средней и гораздо менее персонализированной, чем этот метод, который я уже использовал! ',
        STARTER_TESTIMONIALS_ITEM_AVATAR: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F22de3fcb-d90d-4271-bc01-f815f476122b%2F4FE0A0C0-E487-4C74-BF8E-6F01A27461B8-14186-000008094BC289A6.jpg?table=collection&id=a320a2cc-6ebe-4a8d-95cc-ea94e63bced9&width=200',
        STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Ryan_G',
        STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'Ryan`Log начальник станции',
        STARTER_TESTIMONIALS_ITEM_URL: 'https://blog.gaoran.xyz/'
      },
      {
        STARTER_TESTIMONIALS_ITEM_TEXT: 'Очень нравится эта тема',
        STARTER_TESTIMONIALS_ITEM_AVATAR: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0d33d169-f932-41ff-ac6b-88a923c08e02%2F%25E5%25A4%25B4%25E5%2583%258F.jfif?table=collection&id=7787658d-d5c0-4f34-8e32-60c523dfaba3&width=400',
        STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Asenkits',
        STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'Веб-мастер',
        STARTER_TESTIMONIALS_ITEM_URL: 'https://asenkits.top/'
      },
      {
        STARTER_TESTIMONIALS_ITEM_TEXT: 'ТОП',
        STARTER_TESTIMONIALS_ITEM_AVATAR: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F6c096b44-beb9-48ee-8f92-1efdde47f3a3%2F338962f1-d352-49c7-9a1b-746e35a7005c%2Fhf.png?table=block&id=ce5a48a9-d77a-4843-a3d9-a78cd4f794ce&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
        STARTER_TESTIMONIALS_ITEM_NICKNAME: 'DWIND',
        STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '  Слушайте ветер и прислушивайтесь к его шуму',
        STARTER_TESTIMONIALS_ITEM_URL: 'https://www.dwind.top/'
      },
      {
        STARTER_TESTIMONIALS_ITEM_TEXT: 'Спасибо',
        STARTER_TESTIMONIALS_ITEM_AVATAR: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd52f6766-3e32-4c3d-8529-46e1f214360f%2Ffavicon.svg?table=collection&id=7d76aad5-a2c4-4d9a-887c-c7913fae4eed&width=400',
        STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Дишенг ',
        STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'Совместное использование ресурсов ИИ Blog',
        STARTER_TESTIMONIALS_ITEM_URL: 'https://blog.disheng.org/'
      },
      {
        STARTER_TESTIMONIALS_ITEM_TEXT: 'очень',
        STARTER_TESTIMONIALS_ITEM_AVATAR: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fafb21381-f51b-4fd0-9998-800dbeb64dbe%2Favatar.png?table=block&id=195935d2-0d8d-49fc-bd81-1db42ee50840&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
        STARTER_TESTIMONIALS_ITEM_NICKNAME: 'AnJhon',
        STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'Anjhon Blog веб-мастер',
        STARTER_TESTIMONIALS_ITEM_URL: 'https://www.anjhon.top'
      },
      {
        STARTER_TESTIMONIALS_ITEM_TEXT: 'Давно пользуюсь, спасибо большое',
        STARTER_TESTIMONIALS_ITEM_AVATAR: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe4f391d7-7d65-4c05-a82c-c6e2c40f06e4%2Fa2a7641a26b367608c6ef28ce9b7e983_(2).png?table=block&id=a386eb0e-4c07-4b18-9ece-bba4e79ce21c&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
        STARTER_TESTIMONIALS_ITEM_NICKNAME: 'LUCEN',
        STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'Веб-мастер LUCEN по консультированию по тестированию',
        STARTER_TESTIMONIALS_ITEM_URL: 'https://www.lucenczz.top/'
      }
    ],

  //   FAQ модуль частозадаваемых вопросов
  STARTER_FAQ_ENABLE: true, // 常见问题模块开关
  STARTER_FAQ_TITLE: '常见问题解答',
  STARTER_FAQ_TEXT_1: '有任何问题吗？请看这里',
  STARTER_FAQ_TEXT_2: '我们收集了常见的用户疑问',

  STARTER_FAQ_1_QUESTION: 'NotionNext有帮助文档吗？',
  STARTER_FAQ_1_ANSWER: 'NotionNext提供了<a href="https://docs.tangly1024.com/about" className="underline">帮助文档</a>，操作<a href="https://www.bilibili.com/video/BV1fM4y1L7Qi/" className="underline">演示视频</a>，以及<a href="https://docs.tangly1024.com/article/chat-community" className="underline">交流社群</a>来协助您完成网站的搭建部署',

  STARTER_FAQ_2_QUESTION: '部署后要如何编写文章？',
  STARTER_FAQ_2_ANSWER: '您可以在Notion中之间添加或修改类型为Post的页面，内容将被实时同步在站点中，详情参考<a className="underline" href="https://docs.tangly1024.com/article/start-to-write">《帮助文档》</a>',

  STARTER_FAQ_3_QUESTION: '站点部署失败，更新失败？',
  STARTER_FAQ_3_ANSWER: '通常是配置修改错误导致，请检查配置或者重试操作步骤，或者通过Vercel后台的Deployments中找到错误日志，并向网友求助',

  STARTER_FAQ_4_QUESTION: '文章没有实时同步？',
  STARTER_FAQ_4_ANSWER: '先检查Notion_Page_ID是否正确配置，其次由于博客的每个页面都有独立缓存，刷新网页后即可解决',

  // 团队成员区块
  STARTER_TEAM_ENABLE: true, // 团队成员区块开关
  STARTER_TEAM_TITLE: '团队成员',
  STARTER_TEAM_TEXT_1: '我们的开发者团队',
  STARTER_TEAM_TEXT_2: 'NotionNext 由众多开源技术爱好者们共同合作完成，感谢每一位<a className="underline" href="https://github.com/tangly1024/NotionNext/graphs/contributors">贡献者</a>',

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TEAM_ITEMS: [
    {
      STARTER_TEAM_ITEM_AVATAR: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa06c61bb-980e-4180-bc18-c15f92c78bb4%2Ftangly1024.jpg?table=collection&id=8e7acf17-de09-4fa1-abde-b5b80ad4a813&t=8e7acf17-de09-4fa1-abde-b5b80ad4a813&width=100&cache=v2',
      STARTER_TEAM_ITEM_NICKNAME: 'Tangly',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Developer'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-01.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Melissa Tatcher',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Marketing Expert'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-02.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Stuard Ferrel',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Digital Marketer'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-03.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Eva Hudson',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Creative Designer'
    }
  ],

  // 博客文章区块
  STARTER_BLOG_ENABLE: true, // 首页博文区块开关
  STARTER_BLOG_TITLE: '我们的博客',
  STARTER_BLOG_COUNT: 3, // 首页博文区块默认展示前3篇文章
  STARTER_BLOG_TEXT_1: '最近的新闻',
  STARTER_BLOG_TEXT_2: '这里会发布一些关于NotionNext的最新动态，包括新的动向、新的未来计划，以及新功能的特性',

  // 联系模块
  STARTER_CONTACT_ENABLE: true, // 联系模块开关
  STARTER_CONTACT_TITLE: '联系我们',
  STARTER_CONTACT_TEXT: '告诉我们您遇到的问题',
  STARTER_CONTACT_LOCATION_TITLE: '我们的位置',
  STARTER_CONTACT_LOCATION_TEXT: '中国，福建',
  STARTER_CONTACT_EMAIL_TITLE: '我们如何帮助您？',
  STARTER_CONTACT_EMAIL_TEXT: 'mail@tangly1024.com',

  // 嵌入外部表单
  STARTER_CONTACT_MSG_EXTERNAL_URL: 'https://noteforms.com/forms/yfctc7', // 基于NoteForm创建，将留言数据存在Notion中
  //   自定义留言表单，以下几个配置暂时废弃
  //   STARTER_CONTACT_MSG_TITLE: '向我们留言',
  //   STARTER_CONTACT_MSG_NAME: '姓名',
  //   STARTER_CONTACT_MSG_EMAIL: '邮箱地址',
  //   STARTER_CONTACT_MSG_PHONE: '联系电话',
  //   STARTER_CONTACT_MSG_TEXT: '消息内容',
  //   STARTER_CONTACT_MSG_SEND: '发送消息',
  //   STARTER_CONTACT_MSG_THANKS: '感谢您的留言',

  // 合作伙伴的图标
  STARTER_BRANDS_ENABLE: true, // 合作伙伴开关
  STARTER_BRANDS: [
    {
      IMAGE: '/images/starter/brands/graygrids.svg',
      IMAGE_WHITE: '/images/starter/brands/graygrids-white.svg',
      URL: 'https://graygrids.com/',
      TITLE: 'graygrids'
    },
    {
      IMAGE: '/images/starter/brands/lineicons.svg',
      IMAGE_WHITE: '/images/starter/brands/lineicons-white.svg',
      URL: 'https://lineicons.com/',
      TITLE: 'lineicons'
    },
    {
      IMAGE: '/images/starter/brands/uideck.svg',
      IMAGE_WHITE: '/images/starter/brands/uideck-white.svg',
      URL: 'https://uideck.com/',
      TITLE: 'uideck'
    },
    {
      IMAGE: '/images/starter/brands/ayroui.svg',
      IMAGE_WHITE: '/images/starter/brands/ayroui-white.svg',
      URL: 'https://ayroui.com/',
      TITLE: 'ayroui'
    },
    {
      IMAGE: '/images/starter/brands/tailgrids.svg',
      IMAGE_WHITE: '/images/starter/brands/tailgrids-white.svg',
      URL: '"https://tailgrids.com/',
      TITLE: 'tailgrids'
    }
  ],

  STARTER_FOOTER_SLOGAN: '我们通过技术为品牌和公司创造数字体验。',

  // 页脚三列菜单组
  STARTER_FOOTER_LINK_GROUP: [
    {
      TITLE: '关于我们',
      LINK_GROUP: [
        { TITLE: '官方主页', URL: '/#home' },
        { TITLE: '操作文档', URL: 'https://docs.tangly1024.com/about' },
        { TITLE: '帮助支持', URL: 'https://docs.tangly1024.com/article/how-to-question' },
        { TITLE: '合作申请', URL: 'https://docs.tangly1024.com/article/my-service' }
      ]
    },
    {
      TITLE: '功能特性',
      LINK_GROUP: [
        { TITLE: '部署指南', URL: 'https://docs.tangly1024.com/article/vercel-deploy-notion-next' },
        { TITLE: '升级指南', URL: 'https://docs.tangly1024.com/article/how-to-update-notionnext' },
        { TITLE: '最新版本', URL: 'https://docs.tangly1024.com/article/latest' }
      ]
    },
    {
      TITLE: 'Notion写作',
      LINK_GROUP: [
        { TITLE: 'Notion开始写作', URL: 'https://docs.tangly1024.com/article/start-to-write' },
        { TITLE: '快捷键提升效率', URL: 'https://docs.tangly1024.com/article/notion-short-key' },
        { TITLE: '中国大陆使用Notion', URL: 'https://docs.tangly1024.com/article/notion-faster' }
      ]
    }
  ],

  STARTER_FOOTER_BLOG_LATEST_TITLE: '最新文章',

  STARTER_FOOTER_PRIVACY_POLICY_TEXT: '隐私政策',
  STARTER_FOOTER_PRIVACY_POLICY_URL: '/privacy-policy',

  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: '法律声明',
  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_URL: '/legacy-notice',

  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: '服务协议',
  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: '/terms-of-use',

  // 404页面的提示语
  STARTER_404_TITLE: '我们似乎找不到您要找的页面。',
  STARTER_404_TEXT: '抱歉！您要查找的页面不存在。可能已经移动或删除。',
  STARTER_404_BACK: '回到主页',

  STARTER_POST_REDIRECT_ENABLE: true, // 默認開啟重定向
  STARTER_POST_REDIRECT_URL: 'https://blog.tangly1024.com', // 重定向域名
  STARTER_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_STARTER_NEWSLETTER || false // 是否开启邮件订阅 请先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
}
export default CONFIG
