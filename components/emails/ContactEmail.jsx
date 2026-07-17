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
} from "@react-email/components";

export default function ContactEmail({ name, email, phone, subject, message }) {
  return (
    <Html>
      <Head />
      <Preview>New Inquiry from {name} - YUNGOLA BUILD AND DESIGN</Preview>

      <Body style={main}>
        <Container style={container}>
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

          <Text style={badge}>NEW CONTACT INQUIRY</Text>

          <Hr style={hr} />

          <Section style={section}>
            <Text style={label}>From:</Text>
            <Text style={value}>{name}</Text>

            <Text style={label}>Email:</Text>
            <Text style={value}>{email}</Text>

            <Text style={label}>Phone:</Text>
            <Text style={value}>{phone || "Not provided"}</Text>

            <Text style={label}>Subject:</Text>
            <Text style={value}>{subject || "No subject"}</Text>
          </Section>

          <Hr style={hr} />

          <Section style={section}>
            <Text style={label}>Message:</Text>
            <Text style={messageBox}>{message}</Text>
          </Section>

          <Hr style={hr} />

          <Text style={footer}>
            This email was sent securely from the YUNGOLA BUILD AND DESIGN
            contact form.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

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

const label = {
  color: "#ffe08b",
  fontSize: "12px",
  fontWeight: "bold",
  textTransform: "uppercase",
  letterSpacing: "1px",
  margin: "0 0 4px",
};

const value = {
  color: "#d1c5ac",
  fontSize: "16px",
  margin: "0 0 20px",
  lineHeight: "1.5",
};

const messageBox = {
  color: "#d1c5ac",
  fontSize: "16px",
  lineHeight: "1.6",
  backgroundColor: "#0e0e0e",
  padding: "20px",
  borderRadius: "4px",
  border: "1px solid #4e4633",
  margin: "10px 0",
  whiteSpace: "pre-wrap",
};

const hr = {
  borderColor: "#4e4633",
  margin: "20px 0",
};

const footer = {
  color: "#d1c5ac",
  fontSize: "12px",
  textAlign: "center",
  opacity: 0.7,
};
