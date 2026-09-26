"use client"
import ComingSoon from "@/components/layout/ComingSoon";
import useAuth from "@/hooks/useAuth";
import useRefreshToken from "@/hooks/useRefreshToken";

export default function ClassesPage() {
const refresh = useRefreshToken()
const {auth} = useAuth()
  return (
    <> <ComingSoon
      title="Our Classes"
      description="We're putting the finishing touches on our class schedule. Check back soon to browse and book a session."

    /> <button onClick={() => refresh()}>refresh</button>
    </>
   
  );
}
