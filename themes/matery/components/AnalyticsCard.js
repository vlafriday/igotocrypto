import Card from './Card'

export function AnalyticsCard (props) {
  const { postCount } = props
  return <Card>
    <div className='ml-2 mb-3 '>
      <i className='fas fa-chart-area' /> 统计
    </div>
    <div className='text-xs  font-light justify-center mx-7'>
      <div className='inline'>
        <div className='flex justify-between'>
          <div>Количество статей:</div>
          <div>{postCount}</div>
        </div>
      </div>
      <div className='hidden busuanzi_container_page_pv ml-2'>
        <div className='flex justify-between'>
          <div>Просмотры:</div>
          <div className='busuanzi_value_page_pv' />
        </div>
      </div>
      <div className='hidden busuanzi_container_site_uv ml-2'>
        <div className='flex justify-between'>
          <div>Посетители:</div>
          <div className='busuanzi_value_site_uv' />
        </div>
      </div>
    </div>
  </Card>
}
