/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

const RedirectUserButton = ({
  path,
  buttonValue,
}: {
  path: string;
  buttonValue: string;
}) => {
  return (
    <div className="text-sm flex justify-between items-center mt-3">
      <small className="text-sm mt-4  text-[#002D74] font-semibold text-[12px]">
        If you don't have an account...
      </small>
      <Link
        href={path}
        className="py-2 no-underline text-[#000] font-serif px-5 ml-3 bg-white border rounded-xl hover:scale-110 duration-300 border-blue-400  "
      >
        {buttonValue}
      </Link>
    </div>
  );
};

export default RedirectUserButton;
