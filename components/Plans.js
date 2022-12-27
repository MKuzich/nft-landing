const items = [
  "1 Profile included",
  "Access to GPM.Mall over 100,000 products up to 35% off",
  "Access to GPM.Travel for your first night up to 70% off",
  "Unblock all the Premium features",
  "Double your savings, access to GPM.Mall over 100,000 products up to 70% off",
  "Unblock 4 additional Profiles",
];

const Plans = () => {
  return (
    <section>
      <h2>Want to enjoy all of the GPM product benefits? Check our plans.</h2>
      <ul>
        <li>
          <h3>Free</h3>
          <ul>
            {items.map((itm, idx) => (
              <li key={idx}>
                {idx < 3 ? <dix>true</dix> : <div>false</div>}
                <p>{itm}</p>
              </li>
            ))}
          </ul>
          <span>FREE</span>
        </li>
        <li>
          <h3>Premium</h3>
          <ul>
            {items.map((itm, idx) => (
              <li key={idx}>
                <dix>true</dix>
                <p>{itm}</p>
              </li>
            ))}
          </ul>
          <span>
            <span>&dollar;5</span>/mo
          </span>
          <span>+ active profiles fees*</span>
          <span>*&dollar;1 /mo per additional profile</span>
        </li>
      </ul>
      <button type="button">Get started</button>
    </section>
  );
};

export default Plans;
