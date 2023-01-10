import Container from "./Container";

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
    <section className="py-10 tablet:py-16 desktop:py-20">
      <Container>
        <div className="flex flex-col items-center relative z-30">
          <h2 className="tablet:w-3/4 desktop:w-1/2 mb-12 tablet:mb-16 desktop:mb-24 text-center font-extrabold text-2xl tablet:text-3xl desktop:text-titles z-20 relative">
            Want to enjoy all of the {title} product benefits? Check our plans.
          </h2>
          <ul className="flex flex-col tablet:flex-row justify-center items-center gap-12 tablet:gap-8 desktop:gap-14">
            <li className="plans-item">
              <div className="plans-item-label">
                <h3>{firstType}</h3>
              </div>

              <ul className="plan-list">
                {scope.map((itm, idx) => (
                  <li key={idx} className="plan-item">
                    {idx < 3 ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={4}
                        stroke="currentColor"
                        className="w-3 desktop:w-4 h-3 desktop:h-4 shrink-0 stroke-teal-600"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={4}
                        stroke="currentColor"
                        className="w-3 desktop:w-4 h-3 desktop:h-4 shrink-0 stroke-slate-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    )}
                    <p className={idx >= 3 && "text-slate-400"}>{itm}</p>
                  </li>
                ))}
              </ul>
              {firstType === "Free" ? (
                <span className="text-center text-2xl desktop:text-3xl font-black">
                  {firstPrice}
                </span>
              ) : (
                <>
                  <span className="text-xs">
                    <span className="text-center text-2xl desktop:text-3xl font-black">
                      ${firstPrice}
                    </span>
                    /mo
                  </span>
                  <span className="absolute text-xs bottom-3 desktop:bottom-5">
                    + active profiles fees*
                  </span>
                  {notes.map((itm, idx) => (
                    <span key={`${idx}-${firstType}`} className="plan-note">
                      {itm}
                    </span>
                  ))}
                </>
              )}
            </li>
            <li className="plans-item">
              <h3 className="plans-item-label">{secondType}</h3>
              <ul className="plan-list">
                {scope.map((itm, idx) => (
                  <li key={idx} className="plan-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={4}
                      stroke="currentColor"
                      className="w-3 desktop:w-4 h-3 desktop:h-4 shrink-0 stroke-teal-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <p>{itm}</p>
                  </li>
                ))}
              </ul>
              <span className="text-xs">
                <span className="text-center text-2xl desktop:text-3xl font-black">
                  ${secondPrice}
                </span>
                /mo
              </span>
              <span className="absolute text-xs bottom-3 desktop:bottom-5">
                + active profiles fees*
              </span>
              {notes.map((itm, idx) => (
                <span key={`${idx}-${secondType}`} className="plan-note">
                  {itm}
                </span>
              ))}
            </li>
          </ul>
          <button className="gradient-btn mt-14 desktop:mt-16" type="button">
            Get started
          </button>
        </div>
        {/* <div className="bg-teal-700 w-7 h-7 rotate-18 hidden tablet:block absolute tablet:top-38 tablet:left-35 desktop:top-57 desktop:left-97"></div>
        <div className="bg-teal-700 w-7 h-7 rotate-18 hidden tablet:block absolute tablet:top-38 tablet:right-62 desktop:top-57 desktop:right-99"></div> */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-48 w-1/3 rounded-full h-1/2 blur-3xl bg-gradient-to-b from-teal-300/40 to-purple-400/40"></div>
      </Container>
    </section>
  );
};

export default Plans;
