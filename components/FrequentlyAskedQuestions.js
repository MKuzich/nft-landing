import Container from "./Container";
import Question from "./Question";

const questions = [
  {
    title: "Why to choose us?",
    text: "Our interface is simple and easy to use so you can create your digital card quickly. There is no need for coding or design skills, just upload your photo, logo and information, and you will have a professional looking digital card, fully adjusted to all devices.",
  },
  {
    title: "How much does it cost?",
    text: "It's completely free. You can create your card and use it immediately. When you are ready, you can upgrade to enjoy the additional features!",
  },
  {
    title: "How many profiles can I register under my account?",
    text: "It's completely free. You can create your card and use it immediately. When you are ready, you can upgrade to enjoy the additional features!",
  },
  {
    title:
      "I am not a designer. Will I have to hire a professional to make my card?",
    text: "Our solution is designed to suit anyone. You dont need to have any design skills, the unique interface is straightforward and user friendly.You can have your card ready in just five minutes.",
  },
  {
    title: "Can I keep updating my card myself?",
    text: "Yes, you can keep editing and work on your card anytime from anywhere!",
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
