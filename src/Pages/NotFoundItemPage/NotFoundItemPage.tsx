export const NotFoundItemPage = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center mt-10 gap-4 py-20">
      <img
        src="/books/img/product-not-found.png"
        alt="Item not found"
        className="w-100"
      />
      <p className="text-custom-secondary text-base sm:text-lg">
        Oops something went wrong...
        <br />
        Try another item
      </p>
    </div>
  );
};
