export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

export interface ContactSubmissionService {
  submit: (values: ContactFormValues) => Promise<void>;
}

export type ContactFormStatus = "idle" | "loading" | "success" | "error";
