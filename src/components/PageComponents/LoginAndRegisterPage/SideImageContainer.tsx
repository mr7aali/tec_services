import Image from "next/image";

const SideImageContainer = ({ ImageUrl }: { ImageUrl: string }) => {
  return (
    <div className="w-1/2 md:block hidden ">
      <Image
        height={300}
        width={300}
        src={ImageUrl}
        className="rounded-md h-full w-full"
        alt="page img"
      />
    </div>
  );
};

export default SideImageContainer;
