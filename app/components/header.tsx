import { Link } from '@remix-run/react'

import logo from '../assets/camtheperson-logo.svg'

export default function Header() {
  return (
    <header className="pt-[70px] pb-[20px]">
      <div className="flex items-center justify-between max-w-screen-lg mx-auto px-4">
        <Link reloadDocument to="/">
          <img className="w-[177px] h-[20px]" src={logo} alt="CamThePerson" />
        </Link>

        <nav>
          <ul className="flex list-none">
            <li>
              <Link
                className="text-lg px-3 py-6 hover:text-theme-pink transition-cb"
                reloadDocument
                to="https://github.com/camtheperson"
              >
                GitHub
              </Link>
            </li>

            <li>
              <Link
                className="text-lg px-3 py-6 hover:text-theme-pink transition-cb"
                reloadDocument
                to="https://www.linkedin.com/in/cameron-hermens/"
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                className="text-lg px-3 py-6 hover:text-theme-pink transition-cb"
                reloadDocument
                to="Contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
