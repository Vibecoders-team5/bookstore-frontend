export const MovingRows = () => {
  const commonClasses =
    'whitespace-nowrap flex h-full text-[100px] leading-[1] font-outline text-[#493929]';

  return (
    <div className="overflow-hidden w-full">
      <div className="flex animate-moving-right w-[200%]">
        <div className={commonClasses} aria-hidden="true">
          FICTION — <span className="italic">DRAMA</span> — FANTASY — ADVENTURES
          —
        </div>
        <div className={commonClasses}>
          HISTORY — FICTION — ADVENTURES — <span className="italic">DRAMA</span>
          —
        </div>
      </div>
      <div className="flex animate-moving-left w-[200%]">
        <div className={commonClasses}>
          THRILLER — <span className="italic">MYSTERY</span> — HORROR —
          DYSTOPIAN —
        </div>
        <div className={commonClasses} aria-hidden="true">
          THRILLER — <span className="italic">MYSTERY</span> — HORROR —
          DYSTOPIAN —
        </div>
      </div>
      <div className="flex animate-moving-right w-[200%]">
        <div className={commonClasses}>
          BIOGRAPHY — MEMOIR — <span className="italic">PSYCHOLOGY</span> —
          FINANCE —
        </div>
        <div className={commonClasses} aria-hidden="true">
          MEMOIR — BIOGRAPHY — FINANCE —{' '}
          <span className="italic">PSYCHOLOGY</span> —
        </div>
      </div>
    </div>
  );
};
