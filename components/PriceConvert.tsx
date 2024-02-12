interface PriceProps {
    price: number | undefined;
}

const PriceComponent: React.FC<PriceProps> = ({ price }) => {
    if (typeof price === 'number') {
        const convertedPrice = Math.floor(price * 83).toLocaleString();
        return <>{convertedPrice}</>;
    }
    return null;
};

export default PriceComponent;
