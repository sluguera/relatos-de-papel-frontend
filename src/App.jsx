import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import { NotificationProvider } from './contexts/NotificationContext';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <BrowserRouter>
      <NotificationProvider>
        <CartProvider>
          <AppRoutes />
        </CartProvider>
      </NotificationProvider>
    </BrowserRouter>
  );
}

export default App;
