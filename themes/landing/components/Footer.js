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
                        <a href="https://www.twitter.com/igotocrypto" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Twitter">
                          <img src="путь_к_изображению" alt="Twitter Logo" className="w-8 h-8 fill-current" />
                        </a>
                      </li>
                      <li className="ml-4">
                        <a href="https://www.tiktok.com/@igotocrypto" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="TikTok">
                          <img src="путь_к_изображению" alt="TikTok Logo" className="w-8 h-8 fill-current" />
                        </a>
                      </li>
                      <li className="ml-4">
                        <a href="https://www.instagram.com/igotocrypto" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Instagram">
                          <img src="путь_к_изображению" alt="Instagram Logo" className="w-8 h-8 fill-current" />
                        </a>
                      </li>
                      <li className="ml-4">
                        <a href="https://www.youtube.com/@igotocrypto" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="YouTube">
                          <img src="путь_к_изображению" alt="YouTube Logo" className="w-8 h-8 fill-current" />
                        </a>
                      </li>
                      <li className="ml-4">
                        <a href="https://www.t.me/igotocrypto" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Telegram">
                        <svg className="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                          <image xlinkHref="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F76c3587d-2700-4001-879e-2de5535e70fb%2F6787a0b0-dd0d-4afc-8006-10592a481df7%2Fethereum.png?table=collection&id=0585b263-9d06-4851-99de-78c8238e6ac8&t=0585b263-9d06-4851-99de-78c8238e6ac8&width=800&cache=v2" width="32" height="32" />
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
