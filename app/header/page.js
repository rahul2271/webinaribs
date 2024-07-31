import Image from "next/image"
import Link from "next/link"
export default function Header(){

    return(
      <header className='bg-white mt-[20px] md:mx-auto md:w-full md:mt-[-70px] mx-auto w-full'>
      <img className=' mx-auto  relative  h-[60px] w-[255px] md:h-[70px] md:w-[300px] md:mt-[90px] md:mx-[10px]' src="./logo.png" alt="rchauhan" />
          <ul className='mt-[20px] md:mt-[-50px]  flex font-medium   md:text-xl  md:place-content-center lg:flex md:space-x-6 lg:place-content-center text-[12px] text-[#F14A04] space-x-6  place-content-center text-[12px] md:font-[500px]'>
            
            <li>
              <Link className="hover:text-mypurple" href="/">
              HOME
              </Link>
            </li>
            <li>
              <Link className="hover:text-mypurple"  href="/#doctor">
              DOCTOR
              </Link>
            </li>
            <li>
              <Link className="hover:text-mypurple"  href="/#testimonials">
              TESTIMONIALS
              </Link>
            </li>
            <li className="hidden">
              <Link className="hover:text-mypurple" href="/blogs">
              YUKTIPEDIA
              </Link>
            </li>
            <li className="hidden">
              <Link className="hover:text-mypurple" href="/rctechadminpanel">
              ABOUT US
              </Link>
            </li> 
            <li>
              <Link className="animate-pulse hover:text-mypurple" href="/#forem">
              CONTACT US
              </Link>
            </li>
            <li className="hidden">
              <Link className="animate-pulse hover:text-mypurple" href="/contact">
              TESIMONIALS
              </Link>
            </li>

          </ul>

          
        </header>   
    )
}

