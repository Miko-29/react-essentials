export const MenuItem = ({ name, price, onOrder }) => {
    return (
        <div>
            <span>{name} - ${price}</span>
            {/* <button onClick={onOrder(name, price )}></button>  if we write this way, the function will be immediately called when component renders*/}
            <button onClick={() => onOrder(name, price )}>Order</button>
        </div>
    );
};