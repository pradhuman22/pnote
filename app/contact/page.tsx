"use client";

import React from "react";
import ContactForm from "./_components/ContactForm";

const ContactPage = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="container max-w-screen-xl px-4 md:px-16">
        <div className="space-y-2 py-8">
          <h1 className="text-3xl">Let&apos;s talk about your ideas</h1>
          <p className="text-muted-foreground text-lg">
            We help companies and individuals build out their digital presence.
          </p>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
