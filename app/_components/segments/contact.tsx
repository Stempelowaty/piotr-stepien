"use client";
import { AvailableLocalesType } from "@/app/utils";
import EnterAnimation from "../enterAnimation";
import { useState } from "react";
import Link from "next/link";

interface ContactProps {
  lang: string;
}
export default function Contact(props: ContactProps) {
  const dict = getDictionary(props.lang);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setStatus("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(dict.sending);

    if (
      formData?.email?.length > 0 &&
      formData?.name?.length > 0 &&
      formData?.message?.length > 0
    ) {
      try {
        const response = await fetch("/api/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const data = await response.json();
        if (response.ok) {
          setStatus(dict.success);
          setFormData({ name: "", email: "", message: "" });
        } else {
          setStatus(data.message || dict.error);
        }
      } catch {
        setStatus(dict.error);
      }
    } else setStatus(dict.validate);
  };

  return (
    <div className="font-lexend text-foreground flex flex-col items-center mt-16 px-8 md:px-32 xl:px-64">
      <EnterAnimation isDefault>
        <h1 className="bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-transparent text-4xl pt-16">
          {dict.contact}
        </h1>
      </EnterAnimation>
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 my-16">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <EnterAnimation isDefault>
            <p className="w-full">Github</p>
            <Link
              href={"https://github.com/Stempelowaty"}
              className="font-thin underline"
            >
              <p className="hover:scale-105 transition duration-500">
                github.com/Stempelowaty
              </p>
            </Link>
          </EnterAnimation>
          <EnterAnimation isDefault>
            <p className="w-full">Linkedin</p>
            <Link
              href="https://linkedin.com/in/piotr-stepien-2169bb223/"
              className="font-thin underline"
            >
              <p className="hover:scale-105 transition duration-500">
                linkedin.com/in/piotr-stepien-2169bb223
              </p>
            </Link>
          </EnterAnimation>
          <EnterAnimation isDefault>
            <p className="w-full">Email</p>
            <p className="font-thin">pi.ad.stepien@gmail.com</p>
          </EnterAnimation>
        </div>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 font-lexend w-full md:w-1/2"
        >
          <div className="flex gap-2">
            <EnterAnimation isDefault className="w-1/2">
              <label htmlFor="name">{dict.name}</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border px-3 py-2 bg-slate-900 rounded"
              />
            </EnterAnimation>
            <EnterAnimation isDefault className="w-1/2">
              <label htmlFor="email">{dict.email}</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border px-3 py-2 bg-slate-900 rounded"
              />
            </EnterAnimation>
          </div>
          <EnterAnimation isDefault>
            <label htmlFor="message">{dict.message}</label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full border px-3 py-2 bg-slate-900 rounded"
            />
          </EnterAnimation>
          <EnterAnimation
            isDefault
            className="flex flex-col md:flex-row md:justify-start items-center justify-center gap-2"
          >
            <button
              type="submit"
              disabled={!!status}
              className="bg-gradient-to-br text-slate-950 from-cyan-500 via-cyan-200 to-slate-300 px-4 py-2 rounded-lg hover:scale-105 transition duration-500"
            >
              {dict.send}
            </button>
            <p className="font-thin h-12 flex items-center">{status}</p>
          </EnterAnimation>
        </form>
      </div>
    </div>
  );
}

const getDictionary = (locale: string) => {
  const dictionaries = {
    "pl-PL": {
      contact: "Kontakt",
      email: "Email",
      name: "Imię",
      message: "Wiadomość",
      send: "Wyślij",
      sending: "Wysyłanie...",
      validate: "Uzupełnij formularz!",
      success: "Pomyślnie wysłano wiadomość!",
      error: "Błąd wysyłania wiadomości, spróbuj jeszcze raz!",
    },
    "en-US": {
      contact: "Contact",
      email: "Email",
      name: "Name",
      message: "Message",
      send: "Send",
      sending: "Sending...",
      validate: "Fill the form!",
      success: "Message sent!",
      error: "An error occurred. Please try again.",
    },
  };
  return dictionaries[locale as AvailableLocalesType] ?? dictionaries["en-US"];
};
