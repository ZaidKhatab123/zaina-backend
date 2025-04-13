import './App.css';

function App() {
  return (
    <div className="App">
      <header style={{ background: '#F9D8B2', padding: '1rem' }}>
        <h1 style={{ color: '#B86C46' }}>Zaina Cake Shop</h1>
      </header>
      <main style={{ padding: '2rem' }}>
        <section>
          <h2>🍪 Welcome to Our Cookie Heaven!</h2>
          <p>Browse our delicious cookie menu below and place your order!</p>
        </section>

        <section>
          <h2>Menu</h2>
          <ul>
            <li>Chocolate Chip Cookie - $2.00</li>
            <li>Oatmeal Raisin Cookie - $1.50</li>
            <li>Peanut Butter Cookie - $2.50</li>
          </ul>
        </section>

        <section>
          <h2>🛒 Your Cart</h2>
          <p>No items in cart yet.</p>
        </section>

        <section>
          <h2>🧾 Checkout</h2>
          <form>
            <label>
              City:
              <input type="text" name="city" />
            </label>
            <br />
            <label>
              Payment Method:
              <select>
                <option>Cash on Delivery</option>
                <option>Payoneer</option>
              </select>
            </label>
            <br />
            <button type="submit">Place Order</button>
          </form>
        </section>
      </main>
      <footer style={{ background: '#fff7f0', padding: '1rem', marginTop: '2rem' }}>
        <p>Thanks for visiting Zaina Cake Shop! 😊</p>
      </footer>
    </div>
  );
}

export default App;
