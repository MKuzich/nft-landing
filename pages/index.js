import Hero from "../components/Hero";
import Invite from "../components/Invite";
import Card from "../components/Card";
import Roadmap from "../components/Roadmap";
import FrequentlyAskedQuestions from "../components/FrequentlyAskedQuestions";
import ContactSection from "../components/ContactSection";
import Subscribe from "../components/Subscribe";
import threePhones from "../public/three-phones.png";
import threePhonesMob from "../public/three-phones-mob.png";
import dashboard from "../public/dashboard.png";
import dashboardMob from "../public/dashboard-mob.png";
import discount from "../public/discount.png";
import discountMob from "../public/discount-mob.png";
import sea from "../public/sea.png";
import seaMob from "../public/sea-mob.png";
import grut from "../public/grut.png";
import grutMob from "../public/grut-mob.png";
import welcomeScr from "../public/welcome-screen.png";
import welcomeScrMob from "../public/welcome-screen-mob.png";
import clientsPhones from "../public/clients-phones.png";
import clientPhonesMobile from "../public/clients-phones-mob.png";

export default function Home({ openModalWindow }) {
  return (
    <>
      <Hero
        path={clientsPhones}
        pathMob={clientPhonesMobile}
        start="Experience the Power of Digital "
        accent="Business"
        end=" Profiles!"
        text="And discover the added perks."
        openModalWindow={openModalWindow}
      />
      <Invite
        path={threePhones}
        pathMob={threePhonesMob}
        picOrder={4}
        title="Create your personal or business profile in less than two minutes."
        text="Create a profile for free and start enjoying a range of benefits! Our platform provides a social network exclusively for users, giving you the opportunity to connect with like-minded professionals end expand your network. You will also be able to access exclusive discounts on selected products."
        type="right"
        imgPosition="desktop:left-0 desktop:-top-8"
        openModalWindow={openModalWindow}
      >
        <div className="absolute -right-20 -top-44 w-1/3 rounded-full h-full blur-2xl bg-gradient-to-r via-teal-300/30 from-purple-300/40 to-transparent"></div>
        <div className="absolute -right-32 top-96 w-2/3 rounded-full h-full blur-3xl bg-gradient-to-b to-purple-300/20 from-purple-300/20 "></div>
      </Invite>
      <Card text="Get an NFC card and link it to your profile. We plant a tree for each card!" />
      <Invite
        path={dashboard}
        pathMob={dashboardMob}
        title="Experience effortless team management."
        text="Make managing your team easier than ever with one dashboard - all in one place!
Discover our white label CRM system for teams and companies that includes powerful statistics and social network capabilities. Customize features to fit the specific needs of your team. This offers the flexibility and convenience of a powerful CRM system without having to build it from scratch."
        btnTxt="Get started"
        imgPosition="right-0 -top-16"
        openModalWindow={openModalWindow}
      >
        <div className="absolute -right-20 -top-80 w-1/3 rounded-full h-full blur-3xl bg-gradient-to-r to-teal-300/30 from-purple-300/40"></div>
      </Invite>
      <Invite
        path={discount}
        pathMob={discountMob}
        title="Get up to 70% discount on selected products."
        text="Register now and take advantage of numerous discounted products. By signing up, you'll have access to exclusive offers and be able to earn points by purchasing products or simply by being an active member. Unlock even better deals when you reach higher loyalty levels and enjoy the rewards of being a valued customer."
        type="center"
        imgPosition="left-56 top-28"
        openModalWindow={openModalWindow}
      >
        <div className="absolute -right-20 -bottom-96 w-1/3 rounded-full h-full blur-3xl bg-gradient-to-tr  from-purple-300/30 to-teal-300/40"></div>
        <div className="absolute left-48 top-20 w-1/3 rounded-full h-96 blur-3xl bg-teal-300/40"></div>
        <div className="absolute -left-96 -top-full -rotate-45 w-full rounded-3xl h-full blur-3xl bg-gradient-to-b to-purple-300/20 from-purple-300/20 "></div>
      </Invite>
      <Invite
        path={sea}
        pathMob={seaMob}
        title="Over 2M hotels worldwide, up to 70% off!"
        text="Take advantage of GPM.Travel now and get up to 70% off for your next stay. With an extensive selection of more than 2M hotels and resorts around the world, you'll be able to find the ideal destination for your next holiday! Register now and start making the most of your vacation with GPM.Travel!"
        imgPosition="right-40 top-16"
        openModalWindow={openModalWindow}
      />
      <Invite
        path={grut}
        pathMob={grutMob}
        title="Go further - get an NFT that gives you up to 300% per year!"
        text="Discover our NFT collection designed to provide up to 1000% return on your investment annually. With NFTs, you can experience true ownership of digital assets and have the opportunity to maximize your profits with referrals. Have some fun and laverage on the potential of NFTs!"
        btnTxt="Learn more"
        type="center"
        imgPosition="top-14 left-44"
        openModalWindow={openModalWindow}
      >
        <div className="absolute -left-96 -top-full -rotate-45 w-2/3 rounded-full h-full blur-3xl bg-gradient-to-t to-teal-300/20 from-purple-300/20 "></div>
        <div className="absolute -right-96 -bottom-20 -rotate-45 w-2/3 rounded-full h-full blur-3xl bg-gradient-to-b to-teal-300/20 from-purple-300/20 "></div>
      </Invite>
      <Invite
        path={welcomeScr}
        pathMob={welcomeScrMob}
        picOrder={4}
        title="Become a reseller and start earning now."
        text="Become a GPM.Team reseller by launching your own branded Digital Business Card Platform for Businesses & Teams in days and start earning up to 65% on your customers' subscriptions and up to 35% on customers' product purchases."
        btnTxt="Learn more"
        type="full-centered"
        openModalWindow={openModalWindow}
      />
      <Roadmap />
      <FrequentlyAskedQuestions />
      <ContactSection />
      <Subscribe />
    </>
  );
}
