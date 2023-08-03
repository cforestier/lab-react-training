function Greetings({ lang, children }) {
  return (
    <div>
      {lang && lang === 'de' ? <p>Hallo {children}</p> : null}
      {lang && lang === 'fr' ? <p>Bonjour {children}</p> : null}
    </div>
  );
}

export default Greetings;
