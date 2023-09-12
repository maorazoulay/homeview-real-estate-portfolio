import { getProviders, signIn } from "next-auth/react"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../api/auth/[...nextauth]";
import SignInSkeleton from "@/components/SignInSkeleton";

export default function SignIn({ providers }) {
  return (
    <>
      <SignInSkeleton signIn={signIn} />
    </>
  )
}

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);

  // If the user is already logged in, redirect.
  // Note: Make sure not to redirect to the same page
  // To avoid an infinite loop!
  if (session) {
    return { redirect: { destination: "/dashboard/overview" } };
  }

  const providers = await getProviders();

  return {
    props: { providers: providers ?? [] },
  }
}