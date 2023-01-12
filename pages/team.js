import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import Invite from "../components/Invite";
import Card from "../components/Card";
import Plans from "../components/Plans";
import FrequentlyAskedQuestions from "../components/FrequentlyAskedQuestions";
import ContactSection from "../components/ContactSection";
import Subscribe from "../components/Subscribe";
import products from "../public/products.png";
import productsMob from "../public/products-mob.png";
import statistic from "../public/statistic.png";
import statisticMob from "../public/statistic-mob.png";
import dashboard from "../public/dashboard.png";
import dashboardMob from "../public/dashboard-mob.png";
import charts from "../public/charts.png";
import chartsMob from "../public/charts-mob.png";
import phone from "../public/phone.png";
import phoneMob from "../public/phone-mob.png";
import phoneAndCards from "../public/phone-and-cards.png";
import phoneAndCardsMob from "../public/phone-and-cards-mob.png";

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
  "**Codebase access is provided under the Gopop.me White-label Software License",
  "***$1 /mo per additional profile",
];

const Team = ({ openModalWindow }) => (
  <>
    <Hero
      path={products}
      pathMob={productsMob}
      imgPosition="bottom-14 tablet:-bottom-64 desktop:-bottom-24 left-auto right-auto tablet:-right-28 desktop:-right-3"
      start="Experience effortless "
      accent="team"
      end=" management!"
      text="Discover all the advantages that come with it."
      openModalWindow={openModalWindow}
    />
    <Benefits />
    <Invite
      path={statistic}
      pathMob={statisticMob}
      title="Customize everything to fit your team - all under your brand!"
      text="Make managing your team easier than ever with a customizable dashboard - all in one place! Discover our white label CRM system for teams and businesses that includes powerful statistics, social network capabilities and customizable features to fit the specific needs of your team. This offers the flexibility and convenience of a powerful CRM system without having to build it from scratch."
      btnTxt="Get started"
      type="center"
      imgPosition="left-0 top-3"
      openModalWindow={openModalWindow}
    >
      <div className="absolute left-60 top-24 w-1/4 rounded-full h-2/3 blur-3xl bg-gradient-to-t from-teal-400/40 to-purple-500/40"></div>
      <div className="absolute -rotate-12 -right-20 -bottom-24 w-1/2 rounded-full h-2/3 blur-3xl bg-indigo-400/30"></div>
    </Invite>
    <Invite
      path={dashboard}
      pathMob={dashboardMob}
      title="Manage your team with one dashboard."
      text="Our white label CRM system is a powerful and customizable solution for businesses of all sizes. It features a range of customizable features to help companies manage their team, contacts and customer relationships. With in-depth reporting and analytics capabilities, this system can help businesses make informed decisions and organize their team better."
      btnTxt="Get started"
      imgPosition="right-10 -top-14"
      openModalWindow={openModalWindow}
    >
      <div className="absolute right-60 top-24 w-1/3 rounded-full h-2/3 blur-3xl bg-teal-400/40"></div>
      <div className="absolute rotate-12 -left-20 -bottom-24 w-1/2 rounded-full h-2/3 blur-3xl bg-indigo-400/30"></div>
    </Invite>
    <Invite
      path={charts}
      pathMob={chartsMob}
      title="Get powerful statistics and insight, all in one place."
      text="Having statistical data for managing your team's digital products and interactions is incredibly beneficial. It allows you to track and measure progress, quickly identify patterns and trends, and make informed decisions about how to best manage your business."
      btnTxt="Get started"
      type="center"
      imgPosition="left-52 top-40"
      openModalWindow={openModalWindow}
    >
      <div className="absolute left-52 top-36 w-1/3 rounded-full h-2/3 blur-3xl bg-teal-300/40"></div>
    </Invite>
    <Invite
      path={phone}
      pathMob={phoneMob}
      title="Make team interactions and cooperation easier than ever."
      text="Introducing a social network system for your  team can offer many benefits, such as increased collaboration, improved communication, and increased engagement. By having a central place for employees to interact and share ideas, it can foster creativity and help build relationships."
      btnTxt="Get started"
      imgPosition="right-56 top-24"
      openModalWindow={openModalWindow}
    >
      <div className="absolute right-60 top-24 w-1/4 rounded-full h-2/3 blur-3xl bg-gradient-to-tl from-teal-400/40 via-teal-300/30 to-purple-500/40"></div>
      <div className="absolute -rotate-12 -right-20 -bottom-24 w-1/3 rounded-full h-2/3 blur-3xl bg-indigo-400/30"></div>
    </Invite>
    <Invite
      path={phoneAndCards}
      pathMob={phoneAndCardsMob}
      title="Get your customized NFC cards and make networking easier."
      text="Get your team NFC cards and start sharing your business’ information easier and smarter. Stand out with a customizable design, include your brand identity, and keep your contact information up-to-date and organized."
      btnTxt="Get started"
      type="right"
      imgPosition="left-20 top-0"
      openModalWindow={openModalWindow}
    >
      <div className="absolute left-72 top-24 w-1/4 rounded-full h-3/4 blur-3xl bg-gradient-to-b from-teal-400/40 to-purple-500/40"></div>
    </Invite>
    <Card text="We plant a tree for each NFC card!" />
    <Invite
      path={charts}
      pathMob={chartsMob}
      title="Promote your business and reach premium audience"
      text="Research indicates that people who use ride-sharing services and taxis tend to have a higher level of buying power than other demographic segments. Utilize in-car advertising to communicate your message to this audience, who are ready to interact. Visualizing your target audience is only part of the equation; take the opportunity to reach a higher tier of customers."
      btnTxt="Get started"
      imgPosition="right-52 top-40"
      openModalWindow={openModalWindow}
    >
      <div className="absolute -right-40 -top-40 w-1/3 rounded-full h-1/2 blur-3xl bg-gradient-to-l from-teal-300/40 to-purple-400/40"></div>
    </Invite>
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
    <ContactSection />
    <Subscribe />
  </>
);

export default Team;
