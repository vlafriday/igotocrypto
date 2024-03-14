const CONFIG = {

  GITBOOK_INDEX_PAGE: '', // Для статей, отображаемых на главной странице документа, убедитесь, что этот путь включен в вашу базу данных понятий.

  GITBOOK_AUTO_SORT: process.env.NEXT_PUBLIC_GITBOOK_AUTO_SORT || true, // Нужно ли автоматически сортировать статьи по названию категории; автоматическая группировка может нарушить порядок статей в вашем понятии.

  GITBOOK_LATEST_POST_RED_BADGE: process.env.NEXT_PUBLIC_GITBOOK_LATEST_POST_RED_BADGE || true, // Показывать ли красные точки для последних сообщений

  // меню
  GITBOOK_MENU_CATEGORY: true, // 显示分类
  GITBOOK_BOOK_MENU_TAG: true, // 显示标签
  GITBOOK_MENU_ARCHIVE: true, // 显示归档
  GITBOOK_MENU_SEARCH: true, // 显示搜索

  // Widget
  GITBOOK_WIDGET_REVOLVER_MAPS: process.env.NEXT_PUBLIC_WIDGET_REVOLVER_MAPS || 'true', // Картографический плагин
  GITBOOK_WIDGET_TO_TOP: true // вернуться к началу
}
export default CONFIG
