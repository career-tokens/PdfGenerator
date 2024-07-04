/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'

const navigation = {
  connect: [
    // {
    //   name: 'Twitter',
    //   href: 'https://twitter.com/justansub',
    // },
    {
      name: 'Github',
      href: 'https://github.com/career-tokens/pdfGenerator',
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/mainak-mukherjee1234/',
    },
  ],
  company: [
    { name: 'Blogs', href: 'https://mainakkaniam.hashnode.dev/',target:"_blank" },
    { name: 'Pricing', href: '#pricing', target:"" },
  ],
}

const TwoColumnFooter = () => {
  return (
    <footer
      aria-labelledby="footer-heading"
      className="font-inter p-4 pt-14 border-t border-gray-900/10 dark:border-gray-100/10 dark:bg-black"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-xl lg:max-w-7xl">
        <div className="flex flex-col justify-between lg:flex-row">
          <div className="space-y-8">
          <img width="50" height="50" src="https://img.icons8.com/?size=100&id=23882&format=png&color=4a6cf7" alt="resume"/>
            <p className="text-md max-w-xs leading-6 text-gray-700 dark:text-gray-300">
              Not your average resume builder - build your dream resume faster.
            </p>
            <div className="flex space-x-6 text-sm text-gray-700  dark:text-gray-300">
              <div>Made with ❤️ by Mainak.</div>
            </div>
          </div>
          {/* Navigations */}
          <div className="mt-16 grid grid-cols-2 gap-14 md:grid-cols-2 lg:mt-0 xl:col-span-2">
            <div className="md:mt-0">
              <h3 className="text-sm font-semibold leading-6 text-gray-900  dark:text-gray-200">
                Connect
              </h3>
              <div className="mt-6 space-y-4">
                {navigation.connect.map((item) => (
                  <div key={item.name}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm leading-6 text-gray-700 hover:text-gray-900 dark:text-gray-500 hover:dark:text-gray-200"
                    >
                      {item.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-right lg:text-left">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200">
                  Company
                </h3>
                <div className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <div key={item.name}>
                      <a
                        target={item.target}
                        href={item.href}
                        className="text-sm leading-6 text-gray-700 hover:text-gray-900 dark:text-gray-500 hover:dark:text-gray-200"
                      >
                        {item.name}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 sm:mt-20 lg:mt-24 ">
          <p className="text-xs leading-5 text-gray-700 dark:text-gray-300">
            &copy; 2024 PDFternity. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default TwoColumnFooter