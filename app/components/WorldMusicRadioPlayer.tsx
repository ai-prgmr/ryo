import { useRef, useEffect, useState } from "react";
import { PlayCircle, PauseCircle } from "lucide-react";
const RADIO_STREAM =
  "https://radio.garden/api/ara/content/listen/g3NWdNKC/channel.mp3?1755757988500";

export default function WorldMusicRadioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  useEffect(() => {
    // Attempt to autoplay on mount
    if (audioRef.current) {
      audioRef.current.autoplay = true; // Ensures autoplay property is set
      // Try to play (may be blocked by browser)
      audioRef.current
        .play()
        .then(() => {
          setPlaying(true);
        })
        .catch(() => {
          // Autoplay was blocked; you can show a prompt or fallback here
          setPlaying(false);
        });
    }
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="relative inline-block">
      {showTooltip && (<div
        className="absolute left-1/2 -top-14 z-10 
                     -translate-x-1/2 transform 
                     px-5 py-2 text-xs font-medium 
                     text-white bg-gray-800 rounded-lg shadow-md 
                     transition-opacity duration-300 opacity-100"
      >
        {/* Tooltip Content */}
        {playing ? "Pause Music" : "Play Music"}

        {/* Tooltip Arrow (Tailwind CSS Triangle) */}
        <div className="absolute left-1/2 -bottom-2 h-0 w-0 -translate-x-1/2
                          border-x-8 border-x-transparent border-t-8 border-t-gray-800">
        </div>
      </div>
      )}
      <audio ref={audioRef} src={RADIO_STREAM} autoPlay={true} />
      <button name="Play Music" data-tooltip-target="tooltip-default" aria-description="Play Music" aria-hidden="false"
        onClick={togglePlay}
        style={{
          padding: "0.5rem",
          fontSize: "1.1em",
          borderRadius: 6,
          border: "none",
          background: "#0070f3",
          color: "#fff",
          cursor: "pointer",
        }}
        onMouseEnter={() => {
          setShowTooltip(true);
        }}
        onMouseLeave={() => {
          setShowTooltip(false)
        }}
      >
        {playing ? <PauseCircle /> : <PlayCircle />}
      </button>
    </div>
  );
}
