"use client";

import { ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";

import { CompanyLogo } from "@/components/companyLogo";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type CompanyDialogProps = {
  company: string;
  logo?: string;
  description?: string;
  website?: string;
};

export function CompanyDialog({ company, logo, description, website }: CompanyDialogProps) {
  const t = useTranslations("Experience");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          aria-label={company}
          className="bg-card border-border text-foreground/75 hover:text-foreground hover:border-foreground/30 focus-visible:ring-ring grid size-12 shrink-0 cursor-pointer place-items-center rounded-lg border transition-colors outline-none focus-visible:ring-2"
        >
          {logo ? (
            <CompanyLogo src={logo} label={company} className="size-7" />
          ) : (
            <span className="bg-brand size-2 rounded-full" />
          )}
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg">
        <div className="flex items-stretch gap-5">
          {logo ? (
            <div className="bg-card border-border text-foreground grid size-28 shrink-0 place-items-center rounded-xl border">
              <CompanyLogo src={logo} label={company} className="size-20" />
            </div>
          ) : null}

          {logo ? <div className="bg-border w-px self-stretch" aria-hidden /> : null}

          <div className="min-w-0 flex-1">
            <DialogHeader className="text-start">
              <DialogTitle>{company}</DialogTitle>
              {description ? <DialogDescription>{description}</DialogDescription> : null}
            </DialogHeader>

            {website ? (
              <Button asChild variant="outline" className="mt-4 w-full sm:w-fit">
                <a href={website} target="_blank" rel="noopener noreferrer">
                  {t("visitWebsite")}
                  <ExternalLink className="size-4" />
                </a>
              </Button>
            ) : null}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
