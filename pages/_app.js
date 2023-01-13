import { useState } from "react";
import Layout from "../components/Layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [formType, setFormType] = useState(null);

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
    const body = document.querySelector("body");
    body.classList.toggle("overflow-hidden");
  };

  const openModalWindow = () => {
    setFormType("contact");
    toggleModal();
  };

  return (
    <>
      <Layout
        toggleModal={toggleModal}
        setFormType={setFormType}
        isOpenModal={isOpenModal}
        formType={formType}
      >
        <main>
          <Component openModalWindow={openModalWindow} {...pageProps} />
        </main>
      </Layout>
      <ToastContainer />
    </>
  );
}
