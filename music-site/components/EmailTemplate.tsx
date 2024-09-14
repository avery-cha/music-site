import * as React from "react";

interface EmailTemplateProps {
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  message,
}) => (
  <div>
    <h1>From the app: {message}</h1>
  </div>
);
