export interface NextErrorInterface {
  status: number;
  messages: string[];
}

export const GeneralError = (
  status: number | string,
  message: string | string[],
): NextErrorInterface => {
  const messages: string[] = Array.isArray(message) ? message : [message];

  const error = {
    status,
    messages,
  };

  throw error;
};
