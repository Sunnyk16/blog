import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
         <div className="h-screen flex justify-center items-center bg-gradient-to-r from-purple-500 to-green-400 p-6">
          <div className="container mx-auto flex flex-col justify-center items-center">
            <h2 className=" text-5xl capitalize">browse our blog collection</h2>

            <Link href={'/blogs'}><button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Get Started</button></Link>

          </div>

         </div>
    </main>
  );
}
