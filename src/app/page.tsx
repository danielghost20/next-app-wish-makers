import Image from 'next/image'
import { FaGhost } from "react-icons/fa";
import Link from 'next/link';
import { FaArrowDownLong } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { FcWiFiLogo } from "react-icons/fc";



export default function Home () {
  return (
    <>
      <header className='w-full flex flex-col justify-center items-center relative min-h-screen'>
        <nav className='w-full bg-black flex fixed top-0 items-center justify-between p-2 h-16'>
          <FaGhost/>
          <ul className='flex gap-2'>
            <li>
              <Link href=''>Home</Link>
            </li>
            <li>
              <Link href=''>Ruta</Link>
            </li>
            <li>
              <Link href=''>Organizaciones</Link>
            </li>
            <li>
              <Link href=''>Contacto</Link>
            </li>
          </ul>
          <div className='flex gap-2'>
            <button className='bg-gray-900 py-1 max-w-max text-white px-3 rounded-xl'>Login</button>
            <button className='bg-gray-900 py-1 max-w-max text-white px-3 rounded-xl'>Register</button>
          </div>
        </nav>
        <div className='max-w-3xl flex flex-col gap-7'>
          <span className='text-green-500 flex gap-3 items-center max-w-max  max-w-max m-auto border-2 border-green-500 px-3 py-1 rounded-xl'>Bienvenido a Organizacion <IoIosArrowForward className="text-lg" /></span>
          <h1 className='text-5xl font-semibold text-center w-80 m-auto'>Your team reimagined</h1>
          <p className='text-gray-400 text-center'>Ratione harum voluptas molestiae. Quae harum, eum ratione voluptates esse est. Odit non cupiditate expedita beatae deserunt ea eligendi soluta.</p>
          <button className='px-4 py-2 max-w-max m-auto rounded-md bg-white text-black text-center'>comenzar</button>
        </div>
        <div className='flex flex-col gap-2 justify-center items-center mt-8'>
          <span className='text-sm text-gray-400'>Leer más</span>
          <FaArrowDownLong className="text-xl" />
        </div>
      </header>
      <main className='w-full h-screen'>
        <section className='flex w-full justify-between px-3'>
        <div className='flex items-center gap-2'>
            <FcWiFiLogo className="text-8xl" />
            <span className='text-3xl font-semibold'>Wifi</span>
          </div>
          <div className='flex items-center gap-2'>
            <FcWiFiLogo  className="text-8xl"/>
            <span className='text-3xl font-semibold'>Wifi</span>
          </div>
          <div className='flex items-center gap-2'>
            <FcWiFiLogo className="text-8xl" />
            <span className='text-3xl font-semibold'>Wifi</span>
          </div>
          <div className='flex items-center gap-2'>
            <FcWiFiLogo className="text-8xl" />
            <span className='text-3xl font-semibold'>Wifi</span>
          </div>
          <div className='flex items-center gap-2'>
            <FcWiFiLogo  className="text-8xl"  />
            <span className='text-3xl font-semibold'>Wifi</span>
          </div>
        </section>
        <section className='w-full px-4 mt-16'>
          <h2 className='text-4xl font-semibold text-center max-w-xl w-full m-auto'>One organization, infinite possibilities.</h2>
          <p className='text-sm text-gray-500 mt-4 max-w-lg w-full m-auto text-center'> Molestias impedit quas, non natus ratione est necessitatibus iure tempore. Repudiandae nihil, necessitatibus voluptas voluptatibus ha</p>
        </section>
        <section className='px-4 mt-20'>
          <div className='flex gap-2 justify-between'>
          <Image src='/images/test-image.jpeg' alt='test-image'  width={500} height={300} />
          <div className='flex flex-col gap-4'>
            <h2 className='text-2xl font-semibold text-white'>Comprueba tus conocimientos</h2>
            <p className='text-base text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nam repellendus facilis minus suscipit labore neque exercitationem debitis molestiae quo quae eveniet vero modi vel cupiditate natus, quidem rem! Quisquam.</p>
          </div>
          </div>
        </section>
      </main>
    </>
  )
}
