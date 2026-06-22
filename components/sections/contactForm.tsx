"use client";

import { Loader2, Send } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { contactSchema, type ContactField } from "@/lib/contact";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";
type Values = Record<ContactField, string>;

const empty: Values = { name: "", email: "", message: "" };

const fieldClass =
  "border-input bg-background/40 placeholder:text-muted-foreground focus:border-ring focus-visible:ring-ring/30 w-full rounded-lg border px-3 py-2 text-sm outline-none transition-colors focus-visible:ring-2";

export function ContactForm() {
  const t = useTranslations("Contact");
  const [values, setValues] = useState<Values>(empty);
  const [errors, setErrors] = useState<Partial<Record<ContactField, string>>>({});
  const [status, setStatus] = useState<Status>("idle");

  const set = (field: ContactField, value: string) => {
    setValues((v) => ({ ...v, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = contactSchema.safeParse(values);
    if (!result.success) {
      const next: Partial<Record<ContactField, string>> = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as ContactField;
        if (!next[field]) next[field] = t(`errors.${issue.message}`);
      }
      setErrors(next);
      return;
    }
    setErrors({});
    setStatus("submitting");
    // #16 will POST result.data to /api/contact. Until then, simulate delivery.
    await new Promise((r) => setTimeout(r, 800));
    setStatus("success");
    setValues(empty);
  }

  return (
    <section id="contact" className="border-border/60 scroll-mt-16 border-t py-24">
      <p className="text-muted-foreground font-mono text-xs tracking-[0.2em] uppercase">
        {t("eyebrow")}
      </p>
      <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">{t("title")}</h2>
      <p className="text-muted-foreground mt-3 max-w-xl text-pretty">{t("body")}</p>

      <form onSubmit={onSubmit} noValidate className="mt-8 max-w-xl">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
              {t("nameLabel")}
            </label>
            <input
              id="name"
              name="name"
              value={values.name}
              onChange={(e) => set("name", e.target.value)}
              placeholder={t("namePlaceholder")}
              aria-invalid={!!errors.name}
              className={cn(fieldClass, errors.name && "border-destructive")}
            />
            {errors.name ? <p className="text-destructive mt-1.5 text-xs">{errors.name}</p> : null}
          </div>
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
              {t("emailLabel")}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={values.email}
              onChange={(e) => set("email", e.target.value)}
              placeholder={t("emailPlaceholder")}
              aria-invalid={!!errors.email}
              className={cn(fieldClass, errors.email && "border-destructive")}
            />
            {errors.email ? (
              <p className="text-destructive mt-1.5 text-xs">{errors.email}</p>
            ) : null}
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
            {t("messageLabel")}
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={values.message}
            onChange={(e) => set("message", e.target.value)}
            placeholder={t("messagePlaceholder")}
            aria-invalid={!!errors.message}
            className={cn(fieldClass, "resize-none", errors.message && "border-destructive")}
          />
          {errors.message ? (
            <p className="text-destructive mt-1.5 text-xs">{errors.message}</p>
          ) : null}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-4">
          <Button type="submit" disabled={status === "submitting"}>
            {status === "submitting" ? (
              <Loader2 className="size-4 animate-spin" />
            ) : (
              <Send className="size-4" />
            )}
            {t("submit")}
          </Button>
          {status === "success" ? (
            <span className="text-brand text-sm font-medium" role="status">
              {t("success")}
            </span>
          ) : null}
          {status === "error" ? (
            <span className="text-destructive text-sm font-medium" role="alert">
              {t("error")}
            </span>
          ) : null}
        </div>
      </form>
    </section>
  );
}
