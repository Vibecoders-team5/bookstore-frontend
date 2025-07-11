export const EmptyFavourites = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-4 py-20">
      <img
        src="/books/img/favourites-is-empty.png"
        alt="Empty cart illustration"
        className="w-48 h-auto"
      />

      <p className="text-[#89939A] text-base sm:text-lg">
        Your favourites is still sad...
        <br />
        Add some books to make it happy
      </p>
    </div>
  );
};
