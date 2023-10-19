import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function BackButton() {
  return (
    <Link href="/" replace={true}>
      <button
        type="button"
        className="hover:scale-90 rounded-full p-1 bg-primary absolute left-6 top-5">
        <ArrowBackIcon fontSize="large" htmlColor="black" />
      </button>
    </Link>
  );
}
