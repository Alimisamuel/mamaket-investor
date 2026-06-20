"use client"

import { useState } from "react";

const ranges = [
  "Under $25,000",
  "$25,000 – $50,000",
  "$50,000 – $100,000",
  "$100,000 – $250,000",
  "$250,000 – $500,000",
  "$500,000+",
];

const sources = ["Referral", "Event", "Social Media", "Other"];

const GRAPHQL_ENDPOINT = "https://dev-api.mamaket.com/graphql";

type FormState = {
  fullName: string;
  email: string;
  phoneNumber: string;
  investmentRange: string;
  organization: string;
  heardAboutUs: string;
  reasonForJoining: string;
};

const initialFormState: FormState = {
  fullName: "",
  email: "",
  phoneNumber: "",
  investmentRange: "",
  organization: "",
  heardAboutUs: "",
  reasonForJoining: "",
};

export function Apply() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleFieldChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toNullable = (value: string) => {
    const trimmed = value.trim();
    return trimmed.length > 0 ? trimmed : null;
  };

  const serializeValue = (value: string | null) => (value === null ? "null" : JSON.stringify(value));

  const buildMutation = (payload: Record<string, string | null>) => {
    return `mutation CreateInvestorInquiry {
      createInvestorInquiry(
        payload: {
          fullName: ${serializeValue(payload.fullName)}
          email: ${serializeValue(payload.email)}
          phoneNumber: ${serializeValue(payload.phoneNumber)}
          investmentRange: ${serializeValue(payload.investmentRange)}
          organization: ${serializeValue(payload.organization)}
          heardAboutUs: ${serializeValue(payload.heardAboutUs)}
          reasonForJoining: ${serializeValue(payload.reasonForJoining)}
        }
      ) {
        createdAt
        updatedAt
        _id
        fullName
        email
        phoneNumber
        organization
        investmentRange
        heardAboutUs
        reasonForJoining
      }
    }`;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError(null);
    setIsSubmitting(true);

    const payload = {
      fullName: toNullable(formData.fullName),
      email: toNullable(formData.email),
      phoneNumber: toNullable(formData.phoneNumber),
      investmentRange: toNullable(formData.investmentRange),
      organization: toNullable(formData.organization),
      heardAboutUs: toNullable(formData.heardAboutUs),
      reasonForJoining: toNullable(formData.reasonForJoining),
    };

    try {
      const response = await fetch(GRAPHQL_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: buildMutation(payload),
        }),
      });

      if (!response.ok) {
        throw new Error("Unable to submit your application right now. Please try again.");
      }

      const json = await response.json();
      if (json.errors?.length) {
        throw new Error(json.errors[0]?.message || "Unable to submit your application right now. Please try again.");
      }

      if (!json.data?.createInvestorInquiry) {
        throw new Error("Submission could not be completed. Please try again.");
      }

      setSubmitted(true);
      setFormData(initialFormState);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Unable to submit your application right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section id="apply" className="relative py-32 px-6 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-2xl text-center">
          <div className="eyebrow eyebrow-line text-amber-400 justify-center">Application Received</div>
          <h2 className="mt-8 font-display text-4xl sm:text-5xl">Thank you.</h2>
          <p className="mt-6 text-plum-200 leading-relaxed">
            A member of our team will review your application and reach out personally within 48 hours. We look forward to the conversation.
          </p>
          <div className="mt-12 h-px hairline mx-auto w-32" />
          <p className="mt-6 text-xs uppercase tracking-[0.28em] text-amber-400">Seamless · Sophisticated · Intuitive</p>
        </div>
      </section>
    );
  }

  return (
    <section id="apply" className="relative py-28 lg:py-40 px-6 bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05]" aria-hidden style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, #FFF9E5 1px, transparent 0)",
        backgroundSize: "32px 32px",
      }} />
      <div className="absolute top-1/4 -left-40 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-6xl grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <div className="eyebrow eyebrow-line text-amber-400">06 · Apply</div>
          <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-balance">
            This is your invitation.
          </h2>
          <p className="mt-8 text-lg text-plum-200 leading-relaxed max-w-md">
            The Founding Council is not open to everyone. It is open to the right people.
          </p>
          <p className="mt-4 text-base text-plum-300 max-w-md">
            If you are reading this, you may be one of them. Apply below — we will review your application and reach out personally.
          </p>

          <div className="mt-12 hidden lg:block">
            <div className="text-xs uppercase tracking-[0.28em] text-amber-400">Mamaket Global, Inc.</div>
            <div className="mt-2 text-sm text-plum-300">Seamless · Sophisticated · Intuitive</div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          aria-busy={isSubmitting}
          className="lg:col-span-7 bg-background text-foreground rounded-2xl p-8 sm:p-10 shadow-2xl shadow-plum-950/40"
        >
          <div className="space-y-6">
            <Field
              name="fullName"
              label="Full Name"
              required
              placeholder="Your full legal name"
              type="text"
              value={formData.fullName}
              onChange={handleFieldChange}
              disabled={isSubmitting}
            />
            <div className="grid sm:grid-cols-2 gap-6">
              <Field
                name="email"
                label="Email Address"
                required
                placeholder="you@domain.com"
                type="email"
                value={formData.email}
                onChange={handleFieldChange}
                disabled={isSubmitting}
              />
              <Field
                name="phoneNumber"
                label="Phone Number"
                required
                placeholder="Best number to reach you"
                type="tel"
                value={formData.phoneNumber}
                onChange={handleFieldChange}
                disabled={isSubmitting}
              />
            </div>
            <Field
              name="organization"
              label="Organization / Fund"
              placeholder="Company, fund, or family office"
              type="text"
              value={formData.organization}
              onChange={handleFieldChange}
              disabled={isSubmitting}
            />
            <Select
              name="investmentRange"
              label="Investment Range"
              required
              options={ranges}
              placeholder="Select your typical range"
              value={formData.investmentRange}
              onChange={handleFieldChange}
              disabled={isSubmitting}
            />
            <Select
              name="heardAboutUs"
              label="How did you hear about us?"
              options={sources}
              placeholder="Select one"
              value={formData.heardAboutUs}
              onChange={handleFieldChange}
              disabled={isSubmitting}
            />
            <div>
              <Label>Why do you want to join?</Label>
              <textarea
                name="reasonForJoining"
                rows={3}
                placeholder="Tell us briefly why you're interested in Mamaket"
                value={formData.reasonForJoining}
                onChange={handleFieldChange}
                disabled={isSubmitting}
                className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-plum-600/40 focus:border-plum-600 transition resize-none"
              />
            </div>
          </div>

          {submitError && (
            <p role="alert" className="mt-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {submitError}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-10 w-full inline-flex items-center justify-center gap-3 px-8 py-5 rounded-xl bg-primary text-primary-foreground font-medium tracking-wide hover:bg-plum-700 transition-all shadow-lg hover:shadow-xl"
          >
            {isSubmitting ? "Submitting..." : "Submit My Application"}
            <span aria-hidden>→</span>
          </button>
          <p className="mt-4 text-center text-xs text-muted-foreground">
            You will receive a personal response within 48 hours.
          </p>
        </form>
      </div>
    </section>
  );
}

function Label({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <label className="text-[11px] uppercase tracking-[0.22em] font-semibold text-plum-700">
      {children}
      {required && <span className="text-amber-600 ml-1">*</span>}
    </label>
  );
}

function Field({
  name,
  label,
  required,
  placeholder,
  type,
  value,
  onChange,
  disabled,
}: {
  name: keyof FormState;
  label: string;
  required?: boolean;
  placeholder: string;
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}) {
  return (
    <div>
      <Label required={required}>{label}</Label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-plum-600/40 focus:border-plum-600 transition"
      />
    </div>
  );
}

function Select({
  name,
  label,
  required,
  options,
  placeholder,
  value,
  onChange,
  disabled,
}: {
  name: keyof FormState;
  label: string;
  required?: boolean;
  options: string[];
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
}) {
  return (
    <div>
      <Label required={required}>{label}</Label>
      <select
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-plum-600/40 focus:border-plum-600 transition appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 viewBox=%220 0 12 12%22><path fill=%22%237B408C%22 d=%22M6 8L2 4h8z%22/></svg>')] bg-no-repeat bg-position-[right_1rem_center]"
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}
