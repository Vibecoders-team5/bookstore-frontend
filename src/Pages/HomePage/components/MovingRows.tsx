export const MovingRows = () => {
  const commonClasses =
    'whitespace-nowrap flex h-full text-[100px] leading-[1] font-outline text-[#493929]';

  return (
    <div className="overflow-hidden w-full">
      <div className="flex animate-moving-right w-[200%]">
        <div className={commonClasses} aria-hidden="true">
          FICTION — <span className="italic">DRAMA</span> — FANTASY —{' '}
          <span className="italic">ADVENTURES</span>—
        </div>
        <div className={commonClasses}>
          DRAMA — <span className="italic">FANTASY</span> — ADVENTURES —{' '}
          <span className="italic">FICTION</span>—
        </div>
      </div>
      <div className="flex animate-moving-left w-[200%]">
        <div className={commonClasses}>
          THRILLER — <span className="italic">MYSTERY</span> — HORROR —
          <span className="italic">DYSTOPIAN</span> —
        </div>
        <div className={commonClasses} aria-hidden="true">
          THRILLER — <span className="italic">MYSTERY</span> — DYSTOPIAN —
          <span className="italic">HORROR</span> —
        </div>
      </div>
      <div className="flex animate-moving-right w-[200%]">
        <div className={commonClasses}>
          <span className="italic">BIOGRAPHY</span> — MEMOIR —{' '}
          <span className="italic">PSYCHOLOGY</span> — FINANCE —
        </div>
        <div className={commonClasses} aria-hidden="true">
          PSYCHOLOGY — <span className="italic">MEMOIR</span> — BIOGRAPHY —{' '}
          <span className="italic">FINANCE</span> —
        </div>
      </div>
    </div>
  );
};
