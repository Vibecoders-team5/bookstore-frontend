import { Volume2, VolumeOff } from 'lucide-react';
import { useRef, useState, useEffect, useCallback } from 'react';

export const RadioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [showVolume, setShowVolume] = useState(false);
  const hideTimeoutRef = useRef<number | null>(null);

  const togglePlayback = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setShowVolume(false);
    } else {
      audioRef.current.play().catch(console.error);
      setShowVolume(true);
      resetHideTimer();
    }

    setIsPlaying(!isPlaying);
  };

  const resetHideTimer = useCallback(() => {
    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    hideTimeoutRef.current = window.setTimeout(() => {
      setShowVolume(false);
    }, 3000);
  }, []);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    if (audioRef.current) audioRef.current.volume = newVol;
    resetHideTimer();
  };

  const handleMouseEnter = () => {
    if (isPlaying) {
      setShowVolume(true);
      resetHideTimer();
    }
  };

  const handleMouseLeave = () => {
    if (isPlaying) {
      resetHideTimer();
    }
  };

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Контейнер регулятора зверху (позиціонований абсолютно) */}
      {showVolume && (
        <div className="absolute bottom-full mb-8">
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-18 h-4 rotate-[-90deg] accent-[#c0a080] cursor-pointer"
            style={{ transformOrigin: 'center' }}
            aria-label="Volume control"
          />
        </div>
      )}

      <button
        onClick={togglePlayback}
        className="bg-[#493929] hover:bg-[#3d2f22] text-white font-semibold py-2 px-2 rounded-lg shadow-md transition flex items-center justify-center"
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ?
          <Volume2 size={24} />
        : <VolumeOff size={24} />}
      </button>

      <audio ref={audioRef}>
        <source
          src="https://wrti-live.streamguys1.com/jazz-mp3"
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};
