const OpenMoreBtn = ({ func, value, classes, big }) => {
  const onClickToggle = () => {
    func(!value);
  };
  return (
    <button className={classes} type="button" onClick={onClickToggle}>
      {value ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={big ? "w-5 h-5" : "w-4 h-4"}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={big ? "w-5 h-5" : "w-4 h-4"}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      )}
    </button>
  );
};

export default OpenMoreBtn;
