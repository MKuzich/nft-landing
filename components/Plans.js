const Plans = ({
  title,
  scope,
  firstType,
  secondType,
  firstPrice,
  secondPrice,
  notes,
}) => {
  return (
    <section>
      <h2>
        Want to enjoy all of the {title} product benefits? Check our plans.
      </h2>
      <ul>
        <li>
          <h3>{firstType}</h3>
          <ul>
            {scope.map((itm, idx) => (
              <li key={idx}>
                {idx < 3 ? <dix>true</dix> : <div>false</div>}
                <p>{itm}</p>
              </li>
            ))}
          </ul>
          {firstType === "Free" ? (
            <span>{firstPrice}</span>
          ) : (
            <>
              <span>
                <span>&dollar;{firstPrice}</span>/mo
              </span>
              {notes.map((itm, idx) => (
                <span key={`${idx}-${firstType}`}>{itm}</span>
              ))}
            </>
          )}
        </li>
        <li>
          <h3>{secondType}</h3>
          <ul>
            {scope.map((itm, idx) => (
              <li key={idx}>
                <dix>true</dix>
                <p>{itm}</p>
              </li>
            ))}
          </ul>
          <span>
            <span>&dollar;{secondPrice}</span>/mo
          </span>
          {notes.map((itm, idx) => (
            <span key={`${idx}-${secondType}`}>{itm}</span>
          ))}
        </li>
      </ul>
      <button type="button">Get started</button>
    </section>
  );
};

export default Plans;
