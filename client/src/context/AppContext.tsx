import { Modal } from "@/components/inside/Modal";
import { FC, PropsWithChildren, createContext, useState } from "react";
import s from "@/styles/ModalContent.module.scss";
import { client } from "@/utils/sanity";
import close from "@/asserts/close.svg";
import Image from "next/image";
import axios from "axios";

interface AppContextType {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  filled: boolean;
  setFilled: (value: boolean) => void;
  downloadResume: () => void;
}

export const AppContext = createContext<AppContextType>({} as AppContextType);

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filled, setFilled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const downloadResume = () => {
    axios
      .get("./Rupen_Resume.pdf", {
        responseType: "blob",
      })
      .then((res) => {
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Rupen_Resume.pdf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error: Error) => console.log("Error downloading file: ", error));
  };

  const addContact = async () => {
    if (
      !formData.name ||
      !formData.organization ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      alert("Please fill all the fields");
      return;
    }

    setIsLoading(true);

    const doc = {
      _type: "contact",
      name: formData.name,
      organization: formData.organization,
      email: formData.email,
      phone: Number(formData.phone),
      message: formData.message,
    };

    try {
      await client.create(doc).then(() => {
        setIsModalOpen(false);
        setFilled(true);
        downloadResume();
      });
    } catch (error) {
      console.error("Oh no, the update failed: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AppContext.Provider
      value={{ isModalOpen, setIsModalOpen, filled, setFilled, downloadResume }}
    >
      {children}

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {/* Header */}
        <div className={s.modal__header}>
          <h2>Hey there! 👋</h2>
          <button
            className={s.modal__header_close}
            onClick={() => setIsModalOpen(false)}
          >
            <Image src={close} alt="Close" quality={100} width={30} />
          </button>
        </div>

        {/* Request message for fill up form */}
        <p className={s.modal__request}>
          Can you fill up the form and send me a message?, I would love to hear
          from you! 🚀
        </p>

        {/* Content */}
        <div className={s.modal__content}>
          {/* Contact form */}
          <form className={s.modal__content_form}>
            <div className={s.modal__content_form_wrapper}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                onChange={handleChange}
                value={formData.name}
              />
            </div>
            <div className={s.modal__content_form_wrapper}>
              <label htmlFor="organization">Organization Name</label>
              <input
                type="text"
                id="organization"
                onChange={handleChange}
                value={formData.organization}
              />
            </div>
            <div className={s.modal__content_form_wrapper}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                onChange={handleChange}
                value={formData.email}
              />
            </div>
            <div className={s.modal__content_form_wrapper}>
              <label htmlFor="phone">Contact Number</label>
              <input
                type="number"
                id="phone"
                onChange={handleChange}
                value={formData.phone}
              />
            </div>
            <div className={s.modal__content_form_wrapper}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                onChange={handleChange}
                value={formData.message}
              />
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className={s.modal__footer}>
          {isLoading ? (
            <button type="button" disabled>
              Loading...
            </button>
          ) : (
            <>
              <button
                onClick={() => setIsModalOpen(false)}
                type="button"
                disabled={isLoading}
              >
                Close
              </button>
              <button
                type="submit"
                className={s.modal__footer_send}
                onClick={addContact}
                disabled={isLoading}
              >
                Send
              </button>
            </>
          )}
        </div>
      </Modal>
    </AppContext.Provider>
  );
};
