import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import Invite from "../components/Invite";
import Card from "../components/Card";
import FrequentlyAskedQuestions from "../components/FrequentlyAskedQuestions";
import ContactForm from "../components/ContactForm";
import Subscribe from "../components/Subscribe";
import Plans from "../components/Plans";
import phone from "../public/phone.png";
import phoneMob from "../public/phone-mob.png";
import threePhones from "../public/three-phones.png";
import threePhonesMob from "../public/three-phones-mob.png";
import phoneAndCards from "../public/phone-and-cards.png";
import phoneAndCardsMob from "../public/phone-and-cards-mob.png";
import phonePart from "../public/phone-part.png";
import phonePartMob from "../public/phone-part-mob.png";

const scope = [
  "1 Profile included",
  "Access to GPM.Mall over 100,000 products up to 35% off",
  "Access to GPM.Travel for your first night up to 70% off",
  "Unblock all the Premium features",
  "Double your savings, access to GPM.Mall over 100,000 products up to 70% off",
  "Unblock 4 additional Profiles",
];

const notes = ["*$1 /mo per additional profile"];

const Reference = () => {
  return (
    <>
      <Hero
        start="Create Your "
        accent="Digital"
        end=" Business Page. Everything in just one link!"
        text="Discover all the advantages that come with it."
      />
      <Benefits />
      <Invite
        path={phone}
        pathMob={phoneMob}
        title="Discover the social network for users."
        text="Enjoy a built-in social network exclusively for users, giving you the opportunity to connect with like-minded professionals end expand your network."
        type="right"
        imgPosition="left-32 top-0"
      >
        <div className="absolute left-64 bottom-0 w-96 rounded-full h-96 blur-3xl bg-gradient-to-tl from-teal-300/40 to-purple-600/40"></div>
        <div className="absolute right-0 -bottom-40 w-2/3 h-full -rotate-12 blur-3xl bg-gradient-to-tl to-transparent from-indigo-300/30"></div>
      </Invite>
      <Invite
        path={threePhones}
        pathMob={threePhonesMob}
        title="Customize your profile at any time."
        text="The great thing about GPM.Link is that your business page is fully customizable. This means you can choose exactly what information you'd like to include, customize your page with an unique design to make it truly stand out. You have control over exactly how you present yourself to potential customers and contacts and you’re free to change it any time!"
        imgPosition="right-0 top-0"
      >
        <div className="absolute left-0 -bottom-40 w-2/3 h-full rotate-12 blur-3xl bg-gradient-to-tl to-transparent from-indigo-300/30"></div>
      </Invite>
      <Invite
        path={phoneAndCards}
        pathMob={phoneAndCardsMob}
        title="Get an NFC card and link it to your profile."
        text="With an NFC card, you can easily share your business profile with potential customers. With just one tap, you instantly share your information with anyone. This is a great way to quickly and easily share your business profile, without the need for traditional methods like printed business cards."
        type="right"
        imgPosition="left-20 top-0"
      >
        <div className="absolute left-56 bottom-0 w-1/3 rounded-full h-full blur-3xl bg-gradient-to-l from-teal-300/40 to-purple-600/40"></div>
      </Invite>
      <Card text="We plant a tree for each NFC card!" />
      <Invite
        path={phonePart}
        pathMob={phonePartMob}
        title="Get benefits and earn with affiliate links."
        text="Create a profile for free, get your affiliate link and start sharing with friends and partners! Earn for each referral and subscription!"
        btnTxt="Get started"
        imgPosition="right-80 top-0"
      >
        <div className="absolute -right-28 -top-48 w-1/3 rounded-full h-full blur-3xl bg-gradient-to-l from-teal-400/40 to-purple-500/40"></div>
        <div className="hidden tablet:block absolute z-20 right-0 bottom-20 w-2/3 h-28 tablet:right-14 tablet:-bottom-10 tablet:w-80 tablet:h-28 desktop:right-72 desktop:-bottom-10 -rotate-18 desktop:w-96 desktop:h-48 bg-gradient-to-t dark:from-slate-900 from-slate-50 dark:via-slate-900 via-slate-50/90 to-transparent"></div>
      </Invite>
      <Plans
        title="GPM"
        scope={scope}
        firstType="Free"
        secondType="Premium"
        firstPrice="FREE"
        secondPrice="5"
        notes={notes}
      />
      <FrequentlyAskedQuestions />
      <ContactForm />
      <Subscribe />
    </>
  );
};

export default Reference;
