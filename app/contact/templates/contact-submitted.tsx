import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

interface ResetPasswordEmailProps {
  name?: string;
}

const ContactSubmitted = ({ name }: ResetPasswordEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>
        Thank you for reaching out! Your message has been successfully
        submitted.
      </Preview>
      <Tailwind>
        <Body className="bg-background px-4 py-6 font-sans">
          <Container className="bg-background border-muted-foreground mx-auto max-w-lg rounded-lg border p-6 shadow-md">
            <Section className="mb-4">
              <Text className="text-muted-foreground text-lg font-semibold">
                Hi {name},
              </Text>
            </Section>
            <Section className="mb-6">
              <Text className="text-muted-foreground text-base">
                Your message has been successfully submitted. I will review it
                and get back to you as soon as possible. Thank you for reaching
                out to us.
              </Text>
            </Section>
            <Section>
              <Text className="text-muted-foreground text-sm">
                If you have any further questions or concerns, please don&apos;t
                hesitate to contact us again. We&apos;re always here to help.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactSubmitted;
