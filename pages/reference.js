import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import Invite from "../components/Invite";
import Card from "../components/Card";
import FrequentlyAskedQuestions from "../components/FrequentlyAskedQuestions";
import ContactForm from "../components/ContactForm";
import Subscribe from "../components/Subscribe";

const Reference = () => {
  return (
    <>
      <Hero
        title="Create Your Digital Business Page. Everything in just one link!"
        text="Discover all the advantages that come with it."
      />
      <Benefits />
      <Invite
        path="/"
        title="Discover the social network for users."
        text="Enjoy a built-in social network exclusively for users, giving you the opportunity to connect with like-minded professionals end expand your network."
        btnTxt="Get started for free"
        width={586}
        height={392}
      />
      <Invite
        path="/"
        title="Customize your profile at any time."
        text="The great thing about GPM.Link is that your business page is fully customizable. This means you can choose exactly what information you'd like to include, customize your page with an unique design to make it truly stand out. You have control over exactly how you present yourself to potential customers and contacts and you’re free to change it any time!"
        btnTxt="Get started for free"
        width={780}
        height={520}
      />
      <Invite
        path="/"
        title="Get an NFC card and link it to your profile."
        text="With an NFC card, you can easily share your business profile with potential customers. With just one tap, you instantly share your information with anyone. This is a great way to quickly and easily share your business profile, without the need for traditional methods like printed business cards."
        btnTxt="Get started for free"
        width={780}
        height={520}
      />
      <Card text="We plant a tree for each NFC card!" />
      <Invite
        path="/"
        title="Get benefits and earn with affiliate links."
        text="Create a profile for free, get your affiliate link and start sharing with friends and partners! Earn for each referral and subscription!"
        btnTxt="Get started"
        width={492}
        height={328}
      />
      <FrequentlyAskedQuestions />
      <ContactForm />
      <Subscribe />
    </>
  );
};

export default Reference;
