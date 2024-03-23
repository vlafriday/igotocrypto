import { subscribeToNewsletter } from '@/lib/plugins/mailchimp'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import CONFIG from '../config'
import Logo from './Logo'
import { siteConfig } from '@/lib/config'

/**
 * 页脚
 */
export default function Footer() {
  const formRef = useRef()
  const [success, setSuccess] = useState(false)
  useEffect(() => {
    const form = formRef.current
    const handleSubmit = (e) => {
      e.preventDefault()
      const email = document.querySelector('#newsletter').value
      subscribeToNewsletter(email).then(response => {
        console.log('Subscription succeeded:', response)
        // 在此处添加成功订阅后的操作
        setSuccess(true)
      })
        .catch(error => {
          console.error('Subscription failed:', error)
          // 在此处添加订阅失败后的操作
        })
    }
    form?.addEventListener('submit', handleSubmit)
    return () => {
      form?.removeEventListener('submit', handleSubmit)
    }
  }, [subscribeToNewsletter])

  return (
        <footer>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">

                {/* Top area: Blocks */}
                <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">

                    {/* 1st block */}
                    <div className="sm:col-span-12 lg:col-span-3">
                        <div className="mb-2">
                            <Logo />
                        </div>
                        <div className="text-sm text-gray-600">
                            <Link href="/terms-of-use" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Условия предоставления услуг</Link>  <Link href="/privacy-policy" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Политика конфиденциальности</Link>
                        </div>
                    </div>

                    {/* 2nd block */}
                    <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
                        <h6 className="text-gray-800 font-medium mb-2">Предложения</h6>
                        <ul className="text-sm">
                            <li className="mb-2">
                                <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">NotionNext</a>
                            </li>
                            <li className="mb-2">
                                {/* <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Vercel</a> */}
                            </li>
                            <li className="mb-2">
                                { <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Github</a> }
                            </li>
                            <li className="mb-2">
                                { <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Notion</a> }
                            </li>
                            <li className="mb-2">
                                { <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">NextJs</a> }
                            </li>
                        </ul>
                    </div>

                    {/* 3rd block */}
                    <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
                        <h6 className="text-gray-800 font-medium mb-2">Ресурс</h6>
                        <ul className="text-sm">
                            <li className="mb-2">
                                <a href="https://docs.tangly1024.com" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Технический документ</a>
                            </li>
                            <li className="mb-2">
                                <a href="https://docs.tangly1024.com" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Учебное пособие</a>
                            </li>
                            <li className="mb-2">
                                <a href="https://blog.tangly1024.com" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Блог</a>
                            </li>
                            <li className="mb-2">
                                <a href="https://blog.tangly1024.com" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Центр поддержки</a>
                            </li>
                            <li className="mb-2">
                                <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Сотрудничающая сторона</a>
                            </li>
                        </ul>
                    </div>

                    {/* 4th block */}
                    <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
                        <h6 className="text-gray-800 font-medium mb-2">Корпорации</h6>
                        <ul className="text-sm">
                            <li className="mb-2">
                                <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Домашняя страница</a>
                            </li>
                            <li className="mb-2">
                                <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">О нас</a>
                            </li>
                            <li className="mb-2">
                                <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Ценности компании</a>
                            </li>
                            <li className="mb-2">
                                <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Цены</a>
                            </li>
                            <li className="mb-2">
                                <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Политика конфиденциальности</a>
                            </li>
                        </ul>
                    </div>

                    {/* 开启邮件收集 */}
                    {JSON.parse(siteConfig('LANDING_NEWSLETTER', null, CONFIG)) && <>
                        {/* 5th block */}
                        <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
                            <h6 className="text-gray-800 font-medium mb-2">Subscribe</h6>
                            <p className="text-sm text-gray-600 mb-4">Get the latest news and articles to your inbox every month.</p>
                            <form ref={formRef}>
                                <div className="flex flex-wrap mb-4">
                                    <div className="w-full">
                                        <label className="block text-sm sr-only" htmlFor="newsletter">Email</label>
                                        <div className="relative flex items-center max-w-xs">
                                            <input disabled={success} id="newsletter" type="email" className="form-input w-full text-gray-800 px-3 py-2 pr-12 text-sm" placeholder="Your email" required />
                                            <button disabled={success} type="submit" className="absolute inset-0 left-auto" aria-label="Subscribe">
                                                <span className="absolute inset-0 right-auto w-px -ml-px my-2 bg-gray-300" aria-hidden="true"></span>
                                                <svg className="w-3 h-3 fill-current text-blue-600 mx-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                                                </svg>
                                            </button>
                                        </div>
                                        {/* Success message */}
                                        {success && <p className="mt-2 text-green-600 text-sm">Thanks for subscribing!</p>}
                                    </div>
                                </div>
                            </form>
                        </div>

                    </>}
                </div>

                {/* Bottom area */}
                <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">

                    {/* Social as */}
                    <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
                      <li>
                        <div className='h-full flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100'>
                          Социальные сети <a href='https://www.youtube.com/@igotocrypto' className='mx-1 hover:underline font-semibold'></a>
                        </div>
                      </li>
                      <li className="ml-4">
                        <a href="https://www.twitter.com/igotocrypto" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="YouTube">
                          <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="500" height="500" viewBox="0 0 50 50">
                          <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
                          </svg>
                        </a>
                      </li>
                      <li className="ml-4">
                        <a href="https://www.tiktok.com/@igotocrypto" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Telegram">
                          <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="500" height="500" viewBox="0 0 50 50">
                          <path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z"></path>
                          </svg>
                        </a>
                      </li>
                      <li className="ml-4">
                        <a href="https://www.instagram.com/igotocrypto" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Facebook">
                          <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                          </svg>
                        </a>
                      </li>
                       <li className="ml-4">
                         <a href="https://www.youtube.com/@igotocrypto" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="YouTube">
                           <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                             <path d="M29.4,7.2C29.4,7.2,29.4,7.2,29.4,7.2c-0.2-0.9-0.9-1.6-1.8-1.8c-2-0.5-10-0.5-10-0.5s-8,0-10,0.5c-0.9,0.2-1.6,0.9-1.8,1.8C5,9.2,5,16,5,16s0,6.8,0.8,8.8c0.2,0.9,0.9,1.6,1.8,1.8c2,0.5,10,0.5,10,0.5s8,0,10-0.5c0.9-0.2,1.6-0.9,1.8-1.8c0.8-2,0.8-8.8,0.8-8.8S30.2,9.2,29.4,7.2z M12.6,20.4V11.6l8.7,4.4L12.6,20.4z" />
                           </svg>
                         </a>
                       </li>
                      <li className="ml-4">
                        <a href="https://www.t.me/igotocrypto" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Telegram">
                          <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <path d="M27.333,4.667c-0.387-0.147-13.147-5.013-14.667-5.6c-2.347-0.907-2.373-0.87-2.773-0.847 c-0.133,0.007-0.267,0.033-0.373,0.093c-0.12,0.067-0.227,0.153-0.32,0.26c-0.093,0.107-0.16,0.233-0.2,0.373 c-0.173,0.613-4.187,14.867-4.507,15.947c-0.387,1.307-0.387,2.387,1.093,2.833c0.653,0.2,2.68,0.813,4,1.387 c2.4,1.053,2.373,1.067,3.173,1.707c1.173,0.94,1.667,0.933,2.667,0.667c0.547-0.147,11.013-4.4,11.947-4.8 c0.987-0.42,1.813-1.867,1.813-3.133c0-2.34-0.013-4.667-0.013-4.667C32,9.993,32,9.993,32,9.333 c0-0.507-0.093-0.968-0.267-1.4C31.64,7.707,28.893,5.44,27.333,4.667z M26.067,12.867l-11.4,5.467 c-0.373,0.18-0.687,0.173-0.947-0.127c-0.147-0.167-0.347-1.253-0.42-1.553c-0.08-0.333-0.32-0.48-0.587-0.313 l-3.027,1.92l-0.893-2.767l10.88-10.12c0.373-0.347,0.72-0.273,0.873,0.1L26.067,12.867z" />
                           </svg>
                          </a>
                         </li>
                       </ul>



                    {/* Copyrights note */}
                    <div className="text-sm text-gray-600 mr-4">&copy; Идущий к крипте. Все права защищены.</div>

                </div>

            </div>
        </footer>
  )
}
