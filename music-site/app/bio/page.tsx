import Image from "next/image";

export default function Bio() {
  return (
    <main className="absolute flex flex-col items-center justify-center top-24 laptop:top-1/4 laptop:right-1/3 m-16">
      <div className="flex w-full laptop:w-2/3 p-4 laptop:p-10 justify-center bg-blue-700 bg-opacity-75 rounded-lg">
        <p className="text-white text-l">
          Avery Evans is an acoustic singer/songwriter who recently moved to the
          Colorado Springs area from Los Angeles. She loves performing in local
          bars, restaurants, and events to connect with her community. Her music
          style spans across indie, pop, jazz, and even hip-hop covers to an
          acoustic style. She loves to take requests from her audiences and
          engage with her listeners.
        </p>
      </div>
    </main>
  );
}
