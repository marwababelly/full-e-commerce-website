import styles   from "./CartActions.module.css";
const CartActions =({onBack,onUpdate})=>{
  return(
    <div  className={styles.row}>
    <button className={styles.btn} onClick={onBack}>
      Return To Shop
    </button>
    <button className={styles.btn} onClick={onUpdate}>
       Update Cart
    </button>
    </div>
  );
};
export default CartActions;