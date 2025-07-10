import { useRef, useEffect, useState } from "react";
import { PlayCircle, PauseCircle } from "lucide-react";
const RADIO_STREAM = "https://direct.fipradio.fr/live/fip-webradio8.mp3";

export default function WorldMusicRadioPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

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
    <div>
      <audio ref={audioRef} src={RADIO_STREAM} />
      <button
        onClick={togglePlay}
        style={{
          padding: "0.5em 1.5em",
          fontSize: "1.1em",
          borderRadius: 6,
          border: "none",
          background: "#0070f3",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        {playing ? <PauseCircle /> : <PlayCircle />}
      </button>
    </div>
  );
}
