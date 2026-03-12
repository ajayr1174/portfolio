import type {
  ContactFormValues,
  ContactSubmissionService,
} from "@/features/contact/types";

class SimulatedContactSubmissionService implements ContactSubmissionService {
  async submit(values: ContactFormValues): Promise<void> {
    void values;
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }
}

export const contactSubmissionService: ContactSubmissionService =
  new SimulatedContactSubmissionService();
