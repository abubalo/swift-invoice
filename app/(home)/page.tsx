import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-24">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <div className="text-center space-y-8">
          <div className="">
          <small className="block w-max mx-auto text-gray-400 px-5 py-3 transition-colors border border-transparent rounded-lg  dark:border-neutral-800 dark:bg-neutral-800/30">Fastest way to generate PDF invoice</small>
          <h1 className="text-7xl font-bold">Simplify Your Invoicing Process</h1>
          </div>
          <p className=" text-xl text-gray-300 md:w-4/5 md:mx-auto">
          Effortlessly create, manage, and track invoices with InvoiSmart. Streamline your billing process and focus on what you do best – serving your clients. Experience hassle-free invoicing today!
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
