import Image from "next/image"
import googleLogo from '../public/google.svg'
import githubLogo from '../public/github.svg'
import facebookLogo from '../public/facebook.svg'

export default function SignInSkeleton({ signIn }) {
    return (
        <div className="h-screen relative py-16 bg-gradient-to-br from-indigo-300 to-indigo-600">
            <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
                <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
                    <div className="rounded-xl bg-white shadow-xl">
                        <div className="p-6 sm:p-16">
                            <div className="space-y-4">
                                <h2 className="mb-8 text-2xl text-blue-950 font-serif font-bold">Sign in to unlock the best of</h2>
                                <div className="flex justify-center">
                                    <span className="text-4xl sm:text-6xl text-indigo-500 font-serif font-bold">HomeView</span>
                                </div>
                            </div>
                            <div className="mt-16 grid space-y-4">
                                <button onClick={() => signIn('google')} 
                                className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-indigo-600 focus:bg-blue-50 active:bg-blue-100">
                                    <div className="relative flex items-center space-x-4 justify-center">
                                        <Image src={googleLogo} className="absolute left-0 w-5" alt="google logo" />
                                        <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-indigo-500 sm:text-base">Continue with Google</span>
                                    </div>
                                </button>
                                <button onClick={() => signIn('github')} 
                                className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-indigo-600 focus:bg-blue-50 active:bg-blue-100">
                                    <div className="relative flex items-center space-x-4 justify-center">
                                        <Image src={githubLogo} className="absolute left-0 w-5" alt="Github logo" />
                                        <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-indigo-500 sm:text-base">Continue with Github</span>
                                    </div>
                                </button>
                                <button onClick={() => signIn('facebook')} 
                                className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                                     hover:border-indigo-600 focus:bg-blue-50 active:bg-blue-100">
                                    <div className="relative flex items-center space-x-4 justify-center">
                                        <Image src={facebookLogo} className="absolute left-0 w-5" alt="Facebook logo" />
                                        <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-indigo-500 sm:text-base">Continue with Facebook</span>
                                    </div>
                                </button>
                            </div>

                            <div className="mt-32 space-y-4 text-gray-600 text-center sm:-mb-8">
                                <p className="text-xs">By proceeding, you agree to our <a href="#" className="underline">Terms of Use</a> and confirm you have read our <a href="#" className="underline">Privacy and Cookie Statement</a>.</p>
                                <p className="text-xs">This site is protected by reCAPTCHA and the <a href="#" className="underline">Google Privacy Policy</a> and <a href="#" className="underline">Terms of Service</a> apply.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}