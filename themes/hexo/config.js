const CONFIG = {
  HEXO_HOME_BANNER_ENABLE: true,
  // В версии 3.14.1 и далее приветственное сообщение настраивается в файле blog.config.js путем разделения нескольких сообщений английскими запятыми ','.
  HEXO_HOME_BANNER_GREETINGS: ['Привет, я тестировщик', 'Привет, я исследователь', 'Привет, я энтузиаст', 'Привет, я инвестор', 'Просто добро пождаловать в мой мир...'], // 首页大图标语文字

  HEXO_HOME_NAV_BUTTONS: true, // Отображать или нет кнопку с большим значком категории на главной странице
  // Известно, что ошибка не исправлена, и картинка не будет загружаться после включения true на мобильном терминале; временно рекомендуется установить для нее значение false.
  HEXO_HOME_NAV_BACKGROUND_IMG_FIXED: false, // Фиксируется ли фоновое изображение главной страницы при прокрутке; true означает, что изображение не будет перемещаться при прокрутке; false означает, что оно будет прокручиваться с помощью мыши.
  // Отображать ли кнопку "Начать чтение"
  HEXO_SHOW_START_READING: true,

  // Конфигурация меню
  HEXO_MENU_INDEX: false, // Показать главную страницу Домой
  HEXO_MENU_CATEGORY: false, // Показать классификацию
  HEXO_MENU_TAG: false, // Показывать ярлыки
  HEXO_MENU_ARCHIVE: false, // Показать архив
  HEXO_MENU_SEARCH: false, // Показать поиск

  HEXO_POST_LIST_COVER: false, // Показать обложки статей в списке
  HEXO_POST_LIST_COVER_HOVER_ENLARGE: false, // Наведите курсор мыши на список, чтобы увеличить масштаб

  HEXO_POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
  HEXO_POST_LIST_SUMMARY: true, // 文章摘要
  HEXO_POST_LIST_PREVIEW: false, // 读取文章预览
  HEXO_POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错

  HEXO_ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
  HEXO_ARTICLE_COPYRIGHT: false, // 显示文章版权声明
  HEXO_ARTICLE_RECOMMEND: true, // 文章关联推荐

  HEXO_WIDGET_LATEST_POSTS: true, // 显示最新文章卡
  HEXO_WIDGET_ANALYTICS: false, // 显示统计卡
  HEXO_WIDGET_TO_TOP: true,
  HEXO_WIDGET_TO_COMMENT: true, // 跳到评论区
  HEXO_WIDGET_DARK_MODE: true, // 夜间模式
  HEXO_WIDGET_TOC: true // 移动端悬浮目录
}
export default CONFIG
