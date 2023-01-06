import Container from "./Container";
import Question from "./Question";

const questions = [
  {
    title: "Question 1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Question 2",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Question 3",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Question 4",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const FrequentlyAskedQuestions = () => {
  return (
    <section className="py-8 tablet:py-12 desktop:py-20">
      <Container>
        <h2 className="text-center desktop:text-start font-extrabold text-2xl tablet:text-3xl desktop:text-titles mb-8 tablet:mb-10 desktop:mb-12">
          FAQ
        </h2>
        <ul className="flex flex-col gap-7">
          {questions.map(({ title, text }) => (
            <Question key={title} title={title} text={text} />
          ))}
        </ul>
        <div className="absolute right-0 top-0 w-1/4 rounded-full h-96 blur-3xl bg-gradient-to-br to-teal-300/50 from-purple-300/60"></div>
      </Container>
    </section>
  );
};

export default FrequentlyAskedQuestions;
