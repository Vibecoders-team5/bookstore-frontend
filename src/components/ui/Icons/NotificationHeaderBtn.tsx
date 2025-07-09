export const NotificationHeaderBtn = ({ counter }: { counter: number }) => {
  return (
    <span className="absolute -top-1.5 -right-2 bg-[#EB5757] text-white text-[9px] font-semibold rounded-full w-[14px] h-[14px] flex items-center justify-center">
      {counter}
    </span>
  );
};
