import Image from "next/image";

export const BtnLoader = () => {
  return (
    <Image
      src={require("@/assets/images/btn-loader.png")}
      alt="loader"
      className="animate-spin"
      width="20"
      height="20"
    />
  );
};
