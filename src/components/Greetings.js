function Greetings(props) {
  return (
    <div>
      {props.lang && props.lang === 'de' ? <p>Hallo {props.children}</p> : null}
      {props.lang && props.lang === 'fr' ? (
        <p>Bonjour {props.children}</p>
      ) : null}
    </div>
  );
}

export default Greetings;
