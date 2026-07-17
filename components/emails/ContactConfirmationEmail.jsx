import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
  Img,
  Row,
  Column,
  Button,
} from "@react-email/components";

export default function ContactConfirmationEmail({ name, subject, message }) {
  return (
    <Html>
      <Head />
      <Preview>We&apos;ve received your message — YUNGOLA BUILD AND DESIGN</Preview>

      <Body style={main}>
        <Container style={container}>
          {/* Brand Header */}
          <Section style={brandHeader}>
            <Row>
              <Column style={logoColumn}>
                <Img
                  src="https://www.yungolabuildanddesign.com/favicon.ico"
                  width="54"
                  height="54"
                  alt="Yungola Build and Design"
                  style={logo}
                />
              </Column>
              <Column>
                <Heading style={h1}>YUNGOLA BUILD AND DESIGN</Heading>
              </Column>
            </Row>
          </Section>

          <Text style={badge}>MESSAGE RECEIVED</Text>

          <Hr style={hr} />

          {/* Personalised greeting */}
          <Section style={section}>
            <Text style={greeting}>Hello, {name} 👋</Text>
            <Text style={bodyText}>
              Thank you for reaching out to us. We have successfully received
              your message and a member of our team will review it and get back
              to you as soon as possible — typically within{" "}
              <strong style={highlight}>1–2 business days</strong>.
            </Text>
          </Section>

          {/* Summary of what was submitted */}
          <Section style={summaryBox}>
            <Text style={summaryTitle}>YOUR SUBMISSION SUMMARY</Text>

            {subject && (
              <>
                <Text style={label}>Subject</Text>
                <Text style={value}>{subject}</Text>
              </>
            )}

            <Text style={label}>Your Message</Text>
            <Text style={messageBox}>{message}</Text>
          </Section>

          <Hr style={hr} />

          {/* CTA */}
          <Section style={ctaSection}>
            <Text style={bodyText}>
              In the meantime, feel free to explore our latest projects and
              craftsmanship.
            </Text>
            <Button
              style={button}
              href="https://www.yungolabuildanddesign.com/projects"
            >
              View Our Portfolio
            </Button>
          </Section>

          <Hr style={hr} />

          <Text style={footer}>
            {`© ${new Date().getFullYear()} Yungola Build and Design · All Rights Reserved\nYou are receiving this email because you submitted our contact form.`}
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

/* ── Styles ─────────────────────────────────────────────────── */

const main = {
  backgroundColor: "#131313",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
  padding: "40px 0",
};

const container = {
  backgroundColor: "#201f1f",
  margin: "0 auto",
  padding: "40px",
  borderRadius: "4px",
  border: "1px solid #4e4633",
  maxWidth: "600px",
};

const brandHeader = {
  margin: "0 0 12px",
};

const logoColumn = {
  width: "70px",
  verticalAlign: "middle",
};

const logo = {
  display: "block",
  objectFit: "contain",
};

const h1 = {
  color: "#ffffff",
  fontSize: "22px",
  fontWeight: "bold",
  letterSpacing: "3px",
  lineHeight: "1.4",
  textAlign: "left",
  margin: "0",
};

const badge = {
  color: "#ffe08b",
  fontSize: "12px",
  fontWeight: "bold",
  letterSpacing: "2px",
  textAlign: "center",
  margin: "0 0 30px",
};

const section = {
  padding: "20px 0",
};

const greeting = {
  color: "#ffffff",
  fontSize: "20px",
  fontWeight: "bold",
  margin: "0 0 12px",
};

const bodyText = {
  color: "#d1c5ac",
  fontSize: "15px",
  lineHeight: "1.7",
  margin: "0 0 16px",
};

const highlight = {
  color: "#ffe08b",
};

const summaryBox = {
  backgroundColor: "#0e0e0e",
  border: "1px solid #4e4633",
  borderRadius: "4px",
  padding: "20px 24px",
  margin: "20px 0",
};

const summaryTitle = {
  color: "#ffe08b",
  fontSize: "11px",
  fontWeight: "bold",
  letterSpacing: "2px",
  margin: "0 0 16px",
};

const label = {
  color: "#ffe08b",
  fontSize: "11px",
  fontWeight: "bold",
  textTransform: "uppercase",
  letterSpacing: "1px",
  margin: "0 0 4px",
};

const value = {
  color: "#d1c5ac",
  fontSize: "15px",
  margin: "0 0 16px",
  lineHeight: "1.5",
};

const messageBox = {
  color: "#d1c5ac",
  fontSize: "14px",
  lineHeight: "1.6",
  backgroundColor: "#201f1f",
  padding: "14px 18px",
  borderRadius: "4px",
  border: "1px solid #4e4633",
  margin: "0",
  whiteSpace: "pre-wrap",
};

const ctaSection = {
  padding: "20px 0",
  textAlign: "center",
};

const button = {
  backgroundColor: "#ffe08b",
  color: "#131313",
  fontSize: "13px",
  fontWeight: "bold",
  letterSpacing: "1.5px",
  textDecoration: "none",
  padding: "14px 32px",
  borderRadius: "2px",
  display: "inline-block",
};

const hr = {
  borderColor: "#4e4633",
  margin: "20px 0",
};

const footer = {
  color: "#d1c5ac",
  fontSize: "11px",
  textAlign: "center",
  opacity: 0.6,
  lineHeight: "1.8",
  whiteSpace: "pre-line",
};
