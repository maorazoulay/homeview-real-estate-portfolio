import DashboardLayout from "@/components/DashboardLayout"
import { useSession, signIn, signOut } from "next-auth/react"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { Avatar, Button } from "@material-tailwind/react"
export default function Account() {
  const { data: session } = useSession()
  const userImage = session.user.image

  console.log(session);

  return (
    <>
      <div className="w-4/5 md:w-2/3 lg:w-4/12 px-4 mx-auto">
        <div className="relative lg:h-full flex flex-col min-w-0 sm:p-5 break-words bg-white w-full mb-1 shadow-xl shadow-indigo-500 rounded-lg mt-6">
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4 flex justify-center">
                <div className="relative">
                  <Avatar src={userImage.replace('=s96-c', '')} referrerPolicy="no-referrer" alt="avatar" size="lg" className="rounded-full" />
                </div>
              </div>
            </div>
            <div className="text-center mt-6">
              <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700">
                {session.user.name}
              </h3>
              <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold">
                <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                {session.user.email}
              </div>
              <Button onClick={signOut} color="red" className="mt-3">Sign Out</Button>
            </div>
          </div>
        </div>
      </div>
      <footer className="relative  pt-8 pb-6 mt-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-6/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Made by <a href="https://www.linkedin.com/in/maorazoulay/" className="text-1xl font-bold text-indigo-600 hover:text-gray-800" target="_blank">Maor Azoulay</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export async function getServerSideProps({ req, res }) {
  const session = await getServerSession(req, res, authOptions)

  if (!session) {
    return { redirect: { destination: "/auth/signin" } };
  }

  return {
    props: {
      session: session
    }
  }
}

Account.getLayout = function getLayout(page) {
  return (
    <DashboardLayout>{page}</DashboardLayout>
  )
}