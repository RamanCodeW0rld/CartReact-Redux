import { UseSelector, useSelector } from 'react-redux';
import { CartIcon } from '../icons';

const NavBar = () => {
  const {amount,cartItems,isLoading} = useSelector((STATE) => STATE.cartReducer);
    return (
        <nav>
            <div className="nav-center">
                <h3>redux toolkit</h3>
                <div className="nav-container">
                    <CartIcon />
                    <div className="amount-container">
                        <p className="total-amount">{amount}</p>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
