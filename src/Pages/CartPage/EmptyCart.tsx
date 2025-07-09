export const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-4 py-40">
      <img
        src="/books/img/cart-is-empty.png"
        alt="Empty cart illustration"
        className="w-48 h-auto opacity-80"
      />

      <p className="text-[#89939A] text-base sm:text-lg">
        Your cart is still sleeping...
        <br />
        Add some books to gently wake it up
      </p>
    </div>
  );
};
