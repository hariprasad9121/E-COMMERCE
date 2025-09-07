import { useCart } from '../context/CartContext';
import './Home.css'; 

function Cart() {
  const { cartItems, removeFromCart } = useCart(); 

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-msg">No items added yet.</p>
      ) : (
        <div className="cart-grid">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-card">
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
              <p>${item.price}</p>
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
