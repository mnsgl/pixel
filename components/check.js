import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
export default function Check(componenet) {
  const Component = componenet;
  const router = useRouter();
  const user = useSelector((state) => state.user.user);
  const [check, setCheck] = React.useState(false);
  const [loading, setLoading] = React.useEffect(true);
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : check ? (
        <Component />
      ) : (
        router.push("/login")
      )}
    </div>
  );
}
