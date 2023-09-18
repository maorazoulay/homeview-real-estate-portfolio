import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <section className="bg-gray-800 text-gray-100 h-screen">
      <div className="container flex flex-col justify-center h-full p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl sm:text-5xl lg:text-6xl xl:text-7xl">Welcome to
            <span className="text-5xl font-bold sm:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-violet-400"> HomeView</span>
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">Your Real-Estate Protfolio Manager.
            <br className="hidden md:inline" /> Track Your Precious Assets For Free.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link rel="noopener noreferrer" href="/auth/signin" className="hvr-buzz-out px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-gray-900">Get Started</Link>
            <Link rel="noopener noreferrer" target='_blank' href="https://github.com/maorazoulay/homeview-portfolio-tracker/blob/master/README.md" className="hvr-buzz-out px-8 py-3 text-lg font-semibold border rounded border-gray-100">Learn More</Link>
          </div>
        </div>
        <div className="flex items-center justify-center mt-8 lg:mt-16 h-72 sm:h-80 lg:h-112 xl:h-128 2xl:h-140">
          <Image width={600} height={600} src="/Business_SVG.svg" alt="homeview logo" className="object-contain h-72 sm:h-80 lg:h-112 xl:h-128 2xl:h-140" />
        </div>
      </div>
    </section>
  )
}
