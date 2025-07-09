export const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-4 py-20">
      <img
        src="/books/img/page-not-found.png"
        alt="Page not found"
        className="w-100"
      />
      <p className="text-[#89939A] text-base sm:text-lg">
        Oops something went wrong...
        <br />
        Try another page
      </p>
    </div>
  );
};
