function CreditCard(props) {
  return (
    <div className="credit-cards">
      {props.listOfCreditCards.map((creditCard) => (
        <div
          className="credit-card"
          style={{
            backgroundColor: `${creditCard.bgColor}`,
          }}
        >
          <div>{creditCard.type}</div>
          <div>{creditCard.number}</div>
          <div>
            Expires {creditCard.expirationMonth}/{creditCard.expirationYear}
            <span>{creditCard.bank}</span>
          </div>
          <div>{creditCard.owner}</div>
        </div>
      ))}
    </div>
  );
}

export default CreditCard;
