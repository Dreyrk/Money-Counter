import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function BackButton() {
  return (
    <Link href="/" replace={true}>
      <button
        type="button"
        className="hover:scale-90 rounded-full p-2 bg-black">
        <ArrowBackIcon fontSize="large" htmlColor="white" />
      </button>
    </Link>
  );
}
