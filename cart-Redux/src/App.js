import NavBar from './components/NavBar';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartTotal } from './features/cart/CartSlice';
import CartContainer from './components/CartContainer';
import Modal from './components/Modal';
function App() {
    const { cartItems } = useSelector(STATE => STATE.cartReducer);
    const { isOpen } = useSelector(STATE => STATE.modalReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(cartTotal());
    }, [cartItems]);
    return (
        <main>
            {isOpen && <Modal />}
            <NavBar />
            <CartContainer />
        </main>
    );
}
export default App;
