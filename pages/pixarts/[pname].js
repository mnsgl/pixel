import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import PixArt from "../pixart";

export default function Project() {
  const router = useRouter();
  const { pname } = router.query;
  const projects = useSelector((state) => state.project.projects);
  let res = projects.filter((proj) => proj.pname === pname);
  if (res) {
    return <PixArt pId={res[0]._id} pname={pname} />;
  } else {
    return <p>Page not found</p>;
  }
}
