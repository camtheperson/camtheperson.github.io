import type { MetaFunction } from '@remix-run/node'

import Detail from '../components/detail'
import Header from '../components/header'
import camdotjpg from '../assets/cam-sitting.jpg'

export const meta: MetaFunction = () => {
  return [
    { title: 'CamThePerson' },
    { name: 'description', content: 'Welcome to Remix!' },
    { name: 'og:locale', content: 'en_US' },
    { name: 'og:type', content: 'website' },
    { name: 'og:url', content: 'https://camtheperson.com' },
    { name: 'og:site_name', content: 'CamThePerson' },
  ]
}

export default function Index() {
  return (
    <div>
      <Header />

      <div className="md:flex px-4 max-w-screen-lg mx-auto pt-[100px]">
        <div className="md:flex-sidebar">
          <img
            alt="Cam sitting, looking all eloqent and shit."
            className="mb-9 max-w-[100%] shadow-pink"
            src={camdotjpg}
          />

          <Detail title="Name" description="Cameron Hermens" />
          <Detail title="Height" description="6'5&quot;" />
          <Detail title="Spirit Animal" description="Giraffe" />
          <Detail
            title="Capabilities"
            description="Jenkins / Docker / Go / TypeScript / React / Redux / JavaScript / Node.JS / PHP / MySQL / OOP / MVC / HTML5 / CSS3 / SASS / LESS / NPM / Yarn / Webpack / Jest / Cypress / Babel / Gulp / Git / WordPress / Magento / Shopify / i18n / a11y"
          />
        </div>

        <div className="md:flex-main lg:pl-[100px] md:pl-[50px]">
          <h2 className="relative inline-block text-4xl after:content-[''] after:bg-theme-pink after:inline-block after:h-[30px] after:w-[100%] after:absolute after:top-6 after:left-4 after:z-[-1] after:skew-x-[-15deg] mb-9">
            Oh. Well hey there.
          </h2>

          <p className="mb-6">
            My name is Cameron Hermens. I&apos;m a Portland-based Software
            Engineer.
          </p>

          <p className="mb-6">
            Keep an eye on this space—I know it&apos;s pretty barren right now,
            but I&apos;m working on some cool personal projects and case studies
            that truly showcase how far I&apos;ve come as an engineer. Might
            even mess around and develop some Kubernetes tutorials 😲.
          </p>

          <p className="mb-6">@TODO Redesign personal site</p>

          <p className="mb-6">Thanks y’all,</p>

          <p>— Cam 🙂</p>
        </div>
      </div>
    </div>
  )
}
