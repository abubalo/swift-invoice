import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <div className="text-center space-y-8">
          <h1 className="text-7xl font-bold">Generate Invoice on The Go!</h1>
          <p className="text-xl text-gray-300 md:w-4/5 md:mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            doloribus repudiandae optio et quis architecto qui voluptatibus
            tempore, officia, illo accusantium veritatis quam, ratione eligendi
            cupiditate quidem vitae dolore in?
          </p>
          <div className="mt-4">
            <Link
              href={"/signup"}
              className="px-8 py-3 bg-white text-black font-bold rounded-md"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
