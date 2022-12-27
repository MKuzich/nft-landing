import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import Invite from "../components/Invite";
import Card from "../components/Card";
import Plans from "../components/Plans";
import FrequentlyAskedQuestions from "../components/FrequentlyAskedQuestions";
import ContactForm from "../components/ContactForm";
import Subscribe from "../components/Subscribe";

const scope = [
  "White-label Web App codebase access*",
  "Custom Web App domain hosting",
  "5 Profiles included",
  "Onboarding and training session",
  "White-label IOS App codebase access*",
  "White-label Android App codebase access*",
  "Priority support",
];

const notes = [
  "+ active profiles fees**",
  "*Codebase access is provided under the Gopop.me White-label Software License",
  "**&dollar;1 /mo per additional profile",
];

const Team = () => (
  <>
    <Hero
      title="Experience effortless team management!"
      text="Discover all the advantages that come with it"
    />
    <Benefits />
    <Invite
      path="/"
      title="Customize everything to fit your team - all under your brand!"
      text="Make managing your team easier than ever with a customizable dashboard - all in one place! Discover our white label CRM system for teams and businesses that includes powerful statistics, social network capabilities and customizable features to fit the specific needs of your team. This offers the flexibility and convenience of a powerful CRM system without having to build it from scratch."
      btnTxt="Get started"
      width={923}
      height={555}
    />
    <Invite
      path="/"
      title="Manage your team with one dashboard."
      text="Our white label CRM system is a powerful and customizable solution for businesses of all sizes. It features a range of customizable features to help companies manage their team, contacts and customer relationships. With in-depth reporting and analytics capabilities, this system can help businesses make informed decisions and organize their team better."
      btnTxt="Get started"
      width={1024}
      height={615}
    />
    <Invite
      path="/"
      title="Get powerful statistics and insight, all in one place."
      text="Having statistical data for managing your team's digital products and interactions is incredibly beneficial. It allows you to track and measure progress, quickly identify patterns and trends, and make informed decisions about how to best manage your business."
      btnTxt="Get started"
      width={452}
      height={283}
    />
    <Invite
      path="/"
      title="Make team interactions and cooperation easier than ever."
      text="Introducing a social network system for your  team can offer many benefits, such as increased collaboration, improved communication, and increased engagement. By having a central place for employees to interact and share ideas, it can foster creativity and help build relationships."
      btnTxt="Get started"
      width={586}
      height={392}
    />
    <Invite
      path="/"
      title="Get your customized NFC cards and make networking easier."
      text="Get your team NFC cards and start sharing your business’ information easier and smarter. Stand out with a customizable design, include your brand identity, and keep your contact information up-to-date and organized."
      btnTxt="Get started"
      width={780}
      height={520}
    />
    <Card text="We plant a tree for each NFC card!" />
    <Invite
      path="/"
      title="Promote your business and reach premium audience"
      text="Research indicates that people who use ride-sharing services and taxis tend to have a higher level of buying power than other demographic segments. Utilize in-car advertising to communicate your message to this audience, who are ready to interact. Visualizing your target audience is only part of the equation; take the opportunity to reach a higher tier of customers."
      btnTxt="Get started"
      width={452}
      height={283}
    />
    <Plans
      title="team"
      scope={scope}
      firstType="Standard"
      secondType="PRO"
      firstPrice="47"
      secondPrice="97"
      notes={notes}
    />
    <FrequentlyAskedQuestions />
    <ContactForm />
    <Subscribe />
  </>
);

export default Team;
