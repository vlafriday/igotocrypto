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
                            <Link href="/terms-of-use" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">условия предоставления услуг</Link> · <Link href="/privacy-policy" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">политика конфиденциальности</Link>
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
                                {/* <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Github</a> */}
                            </li>
                            <li className="mb-2">
                                {/* <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Notion</a> */}
                            </li>
                            <li className="mb-2">
                                {/* <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">NextJs</a> */}
                            </li>
                        </ul>
                    </div>

                    {/* 3rd block */}
                    <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
                        <h6 className="text-gray-800 font-medium mb-2">ресурс</h6>
                        <ul className="text-sm">
                            <li className="mb-2">
                                <a href="https://docs.tangly1024.com" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">технический документ</a>
                            </li>
                            <li className="mb-2">
                                <a href="https://docs.tangly1024.com" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Учебное пособие</a>
                            </li>
                            <li className="mb-2">
                                <a href="https://blog.tangly1024.com" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">блог</a>
                            </li>
                            <li className="mb-2">
                                <a href="https://blog.tangly1024.com" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Центр поддержки</a>
                            </li>
                            <li className="mb-2">
                                <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">сотрудничающая сторона</a>
                            </li>
                        </ul>
                    </div>

                    {/* 4th block */}
                    <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
                        <h6 className="text-gray-800 font-medium mb-2">корпорации</h6>
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
                                <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">цены</a>
                            </li>
                            <li className="mb-2">
                                <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">политика конфиденциальности</a>
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
                             Социальные сети <a href='https://www.youtube.com/@igotocrypto' className='mx-1 hover:underline font-semibold'>YouTube </a>
                          </div>
                        </li>
                        {/* <li>
              <a href="#0" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Twitter">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                </svg>
              </a>
            </li> */}
                        <li className="ml-4">
                            <a href="https://www.youtube.com/@igotocrypto" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Github">
                                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                                </svg>
                            </a>
                        </li>
                        {/* <li className="ml-4">
              <a href="#0" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Facebook">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                </svg>
              </a>
            </li> */}
                    </ul>

                    {/* Copyrights note */}
                    <div className="text-sm text-gray-600 mr-4">&copy; Идущий к крипте. Все права защищены.</div>

                </div>

            </div>
        </footer>
  )
}
