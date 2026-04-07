import Image from "next/image";

export default function Page() {
  return (
    <div className="relative w-full h-full px-20 bg-white">
      <Image
        src="/assets/menu/menu1.jpg"
        alt="Menu 1"
        className="w-full"
        width={1000}
        height={1000}
      />
      <Image
        src="/assets/menu/menu2.jpg"
        alt="Menu 1"
        className="w-full"
        width={1000}
        height={1000}
      />
      <Image
        src="/assets/menu/menu3.jpg"
        alt="Menu 1"
        className="w-full"
        width={1000}
        height={1000}
      />
    </div>
  );
}