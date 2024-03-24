import NavPostListEmpty from './NavPostListEmpty'
import { useRouter } from 'next/router'
import NavPostItem from './NavPostItem'
import CONFIG from '../config'
import { siteConfig } from '@/lib/config'

/**
 * 博客列表滚动分页
 * @param posts 所有文章
 * @param tags 所有标签
 * @returns {JSX.Element}
 * @constructor
 */
const NavPostList = (props) => {
  const { filteredNavPages } = props
  const router = useRouter()
  let selectedSth = false
  const groupedArray = filteredNavPages?.reduce((groups, item) => {
    const categoryName = item?.category ? item?.category : '' // 将category转换为字符串

    let existingGroup = null
    // Включение автоматической сортировки групп
    if (siteConfig('GITBOOK_AUTO_SORT', true, CONFIG)) {
      existingGroup = groups.find(group => group.category === categoryName) // Поиск последней подгруппы с таким же названием
    } else {
      existingGroup = groups[groups.length - 1] // Получите последнюю группировку
    }

    // Добавить данные
    if (existingGroup && existingGroup.category === categoryName) {
      existingGroup.items.push(item)
    } else {
      groups.push({ category: categoryName, items: [item] })
    }
    return groups
  }, [])

  // 处理是否选中
  groupedArray?.map((group) => {
    let groupSelected = false
    for (const post of group?.items) {
      if (router.asPath.split('?')[0] === '/' + post.slug) {
        groupSelected = true
        selectedSth = true
      }
    }
    group.selected = groupSelected
    return null
  })

  // Если ни один из них не отмечен, по умолчанию открывается первый.
  if (!selectedSth && groupedArray && groupedArray?.length > 0) {
    groupedArray[0].selected = true
  }

  if (!groupedArray || groupedArray.length === 0) {
    return <NavPostListEmpty />
  } else {
    return <div id='posts-wrapper' className='w-full flex-grow space-y-0.5 tracking-wider'>
            {/* Список статей */}
            {groupedArray?.map((group, index) => <NavPostItem key={index} group={group} onHeightChange={props.onHeightChange}/>)}
        </div>
  }
}

export default NavPostList
