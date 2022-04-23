import {
  CartDropDownContainer,
  CartItemsContainer,
  EmptyMessage,
} from "./cart-dropdown.styles";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";

export const CartDropdown = () => {
  const { cartItems, setIsCartOpen, isCartOpen } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartDropDownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
        <Button to="/checkout" onClick={goToCheckoutHandler}>
          GO TO CHECKOUT
        </Button>
      </CartItemsContainer>
    </CartDropDownContainer>
  );
};

export default CartDropdown;
