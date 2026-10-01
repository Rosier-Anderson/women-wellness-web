import ComingSoon from "@/components/sections/ComingSoon";
import useAuth from "@/hooks/useAuth";

export default function ClassesPage() {
  // const {auth} = useAuth();
  // console.log(auth);
  return (
    <>
      {" "}
      <ComingSoon
        title="Our Classes"
        description="We're putting the finishing touches on our class schedule. Check back soon to browse and book a session."
      />
    </>
  );
}
