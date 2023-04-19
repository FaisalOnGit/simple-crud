import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Simple CRUD</h1>
            <h2 className="text-2xl font-bold">Techstack that i use</h2>
            <div className="flex flex-col w-full lg:flex-row p-5">
              <div className="grid flex-grow">
                <Image
                  src="nextjs.svg"
                  alt="Picture of the author"
                  width={50}
                  height={50}
                />
              </div>
              <div className="grid flex-grow">
                <Image
                  src="postgresql.svg"
                  alt="Picture of the author"
                  width={50}
                  height={50}
                />
              </div>
              <div className="grid flex-grow">
                <Image
                  src="prisma.svg"
                  alt="Picture of the author"
                  width={50}
                  height={50}
                />
              </div>
            </div>
            <Link href="/products">
              <button className="btn btn-primary">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
      <footer className="footer footer-center p-4 bg-base-200 text-base-content">
        <div className="font-bold">
          <p>Made with ❤️ Faisal Rahman</p>
        </div>
      </footer>
    </div>
  );
}
