import ChockCard from './chockcard';

export default function Datalist(props) {
  // Destructure the props
  const { chocklate, handleAddtocart } = props;
  
  return (
    <div className="main">
      {/* Use map to render ChockCard components */}
      {chocklate.map((chocolate, index) => (
        <ChockCard
        chocklate={chocolate}
          key={index}
          
          handleAddtocart={handleAddtocart}
        />
      ))}
    </div>
  );
}
