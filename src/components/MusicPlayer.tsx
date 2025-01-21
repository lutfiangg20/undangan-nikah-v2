import { useEffect, useMemo, useState } from "react";
import { Button } from "./ui/button";
import { Pause, Play } from "lucide-react";
import { create } from "zustand";

interface MusicState {
  isPlaying: boolean;
  setIsPlaying: (state: boolean) => void;
}

export const useMusic = create<MusicState>((set) => ({
  isPlaying: false,
  setIsPlaying: (state) => set({ isPlaying: state }),
}));

const MusicPlayer = () => {
  const audio = useMemo(() => new Audio("/music.mp3"), []);
  // const [isPlaying, setIsPlaying] = useState(false);
  const { isPlaying, setIsPlaying } = useMusic();
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
    if (isPlaying) {
      audio.play();
    }
    if (!isPlaying) {
      audio.pause();
    }
  }, [isPlaying]);

  // useEffect(() => {
  //   const playAudio = async () => {
  //     try {
  //       await audio.play(); // Try to play the audio
  //       setIsPlaying(true); // Set state to indicate playback
  //     } catch (error) {
  //       console.error("Audio playback failed:", error); // Handle errors
  //     }
  //   };
  //
  //   playAudio(); // Attempt to play on mount
  //   // setIsPlaying(true);
  //
  //   return () => {
  //     audio.pause();
  //     setIsPlaying(false);
  //   };
  // }, [audio]);

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
