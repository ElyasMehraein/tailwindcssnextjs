import Image from "next/image"
import GoldenCoffee from "@/public/app-logo-type.svg"
import appLogo from "@/public/app-logo.svg"
import { shopingCard, moon, sun, arrowLeft } from "@/public/svg"
export default function Home() {
  return (
    <>
      <header className="fixed top-9 right-0 left-0 w-[90%] h-24 mx-auto py-5 pr-10 pl-4  bg-black/50 flex items-center rounded-3xl" >
        <div className="flex w-full justify-between items-center ">
          <nav className="flex gap-x-9"  >
            <Image src={appLogo}
              alt="app Logo" />
            <ul className="flex items-center gap-x-9 text-xl text-gray-300">
              <li className="font-DanaMedium text-orange-200" >
                <a href="#">صفحه اصلی</a>
              </li>
              <li>
                <a href="#">فروشگاه </a>

                <ul className="hidden">
                  <li><a href="#">قهوه ویژه</a></li>
                  <li><a href="#">ویژه در سطح جهانی</a></li>
                  <li><a href="#">قهوه درجه یک</a></li>
                  <li><a href="#">نرکیبات تجاری</a></li>
                  <li><a href="#">کپسول قهوه</a></li>
                  <li><a href="#">قهوه زینو برزیلی</a></li>
                </ul>

              </li>
              <li>
                <a href="#">دیکشنری </a>
              </li>
              <li>
                <a href="#">بلاگ </a>
              </li>
              <li>
                <a href="#">درباره ما </a>
              </li>
              <li>
                <a href="#">تماس با ما </a>
              </li>
            </ul>
          </nav>

          <div className="flex ">
            <div className="flex gap-x-5">
              <div>
                {shopingCard}
              </div>
              <div>
                {moon}
              </div>
            </div>
            <div>
              {sun}
            </div >
            <div >
              <a href="#" className="flex items-center w-48 h-10" >
                <div className="h-10">
                  {arrowLeft}
                </div>
                ورود | ثبت نام
              </a>
            </div>
          </div>
        </div>
      </header >




















      <main className="flex items-center flex-col justify-center min-h-screen text-4xl"  >

      </main>
    </>
  )
}
