function Checkout() {
  return (
    <div>
      <h2>Checkout</h2>
      <form>
        <input type="text" placeholder="Full Name" /><br />
        <input type="text" placeholder="Address" /><br />
        <input type="text" placeholder="City" /><br />
        <input type="text" placeholder="Postal Code" /><br />
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}

export default Checkout;
