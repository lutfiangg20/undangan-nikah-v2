import { useMemo, useState } from "react";
import { Button } from "./ui/button";
import { Pause, Play } from "lucide-react";

const MusicPlayer = () => {
  const audio = useMemo(() => new Audio("/music.mp3"), []);
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

  return (
    <Button
      className="absolute bottom-28 right-5 z-[500] rounded-full p-5"
      onClick={playMusic}
    >
      {isPlaying ? <Pause /> : <Play />}
    </Button>
  );
};

export default MusicPlayer;
