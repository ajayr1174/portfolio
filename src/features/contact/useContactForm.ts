"use client";

import { useState } from "react";
import { contactSubmissionService } from "@/features/contact/service";
import type {
  ContactFormStatus,
  ContactFormValues,
  ContactSubmissionService,
} from "@/features/contact/types";
import {
  type ContactFormErrors,
  validateContactForm,
} from "@/features/contact/validation";

const INITIAL_VALUES: ContactFormValues = {
  name: "",
  email: "",
  message: "",
};

interface UseContactFormOptions {
  service?: ContactSubmissionService;
}

export function useContactForm({
  service = contactSubmissionService,
}: UseContactFormOptions = {}) {
  const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<ContactFormStatus>("idle");

  const isLoading = status === "loading";

  const setField = (field: keyof ContactFormValues, value: string) => {
    setValues((previous) => ({ ...previous, [field]: value }));
    if (errors[field]) {
      setErrors((previous) => ({ ...previous, [field]: undefined }));
    }
  };

  const handleSubmit = async () => {
    const nextErrors = validateContactForm(values);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("error");
      window.setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    setStatus("loading");

    try {
      await service.submit(values);
      setValues(INITIAL_VALUES);
      setErrors({});
      setStatus("success");
      window.setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("error");
      window.setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return {
    values,
    errors,
    status,
    isLoading,
    setField,
    submit: handleSubmit,
  };
}
