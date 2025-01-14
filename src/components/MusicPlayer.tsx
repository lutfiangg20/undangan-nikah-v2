import { useEffect, useMemo, useState } from "react";
import { Button } from "./ui/button";
import { Pause, Play } from "lucide-react";

const MusicPlayer = () => {
  const audio = useMemo(() => new Audio("/undangan-nikah-v2/music.mp3"), []);
  const [isPlaying, setIsPlaying] = useState(false);
  const playMusic = () => {
    if (isPlaying) {
      setIsPlaying(false);
      audio.pause();
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    const playAudio = async () => {
      try {
        await audio.play(); // Try to play the audio
        setIsPlaying(true); // Set state to indicate playback
      } catch (error) {
        console.error("Audio playback failed:", error); // Handle errors
      }
    };

    playAudio(); // Attempt to play on mount
    // setIsPlaying(true);

    return () => {
      audio.pause();
      setIsPlaying(false);
    };
  }, [audio]);

  return (
    <Button
      className="absolute bottom-28 right-5 z-[500] rounded-full p-5 bg-yellow-900 hover:bg-yellow-800"
      onClick={playMusic}
    >
      {isPlaying ? <Pause /> : <Play />}
    </Button>
  );
};

export default MusicPlayer;
