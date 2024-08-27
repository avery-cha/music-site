import Image from "next/image";

export default function Music() {
  return (
    <main className="absolute mt-28 flex flex-row flex-wrap items-center justify-evenly gap-10 w-full h-full">
      <div className=" bg-white p-8 rounded-lg shadow-md w-80">
        <iframe
          width="100%"
          height="300"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1866018798&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        ></iframe>
        <div>
          <a
            href="https://soundcloud.com/avery-e"
            title="AveryCha"
            target="_blank"
          >
            AveryCha
          </a>
          <a
            href="https://soundcloud.com/avery-e/sets/music-demos"
            title="Music Demos"
            target="_blank"
          >
            Music Demos
          </a>
        </div>
      </div>
      <div className=" items-center justify-evenly bg-slate-500 bg-opacity-80 h-2/5 laptop:w-2/5 w-5/6">
        <iframe
          className="embed-responsive-item h-full w-full"
          src="https://www.youtube.com/embed/8jWZ4zVc6c4?si=4KovRFylLZFfFSfT"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
      <div className=" items-center justify-evenly bg-slate-500 bg-opacity-80 h-2/5 laptop:w-2/5 w-5/6">
        <iframe
          className="embed-responsive-item h-full w-full"
          src="https://www.youtube.com/embed/KJcW3lZuwSE?si=pTVUQrsu5c5wT1xO"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </main>
  );
}
