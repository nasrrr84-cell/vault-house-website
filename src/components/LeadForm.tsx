import { useState } from "react";
import { useT } from "@/providers/lang";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2, Loader2 } from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xeaojynw";

type LeadPayload = {
  name: string;
  email: string;
  interest: string;
  message?: string;
};

async function submitLead(payload: LeadPayload) {
  const res = await fetch(FORMSPREE_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    throw new Error("Formspree submit failed");
  }
}

export function LeadForm({ defaultInterest = "booklet" }: { defaultInterest?: string }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState(defaultInterest);
  const [message, setMessage] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const [isPending, setIsPending] = useState(false);
  const t = useT();

  const INTERESTS = [
    { v: "booklet", l: t("تحميل الكتيّب المجاني", "Free booklet download") },
    { v: "private-home", l: t("بيت خاص", "Private home") },
    { v: "tourism", l: t("مشروع سياحي", "Tourism project") },
    { v: "partnership", l: t("شراكة أو تدريب", "Partnership or training") },
    { v: "other", l: t("أخرى", "Other") },
  ];

  if (done) {
    return (
      <div className="rounded-2xl bg-secondary p-8 text-center">
        <CheckCircle2 className="mx-auto mb-3 h-10 w-10 text-primary" />
        <h3 className="font-display mb-2 text-xl font-bold">
          {t("وصلنا طلبك — شكراً لك", "Request received — thank you")}
        </h3>
        <p className="mb-6 text-sm text-muted-foreground">
          {interest === "booklet"
            ? t("إليك رابط الكتيّب مباشرة، وسنراسلك بأخبار المشاريع القادمة.", "Here is your booklet link — we will also email you project news.")
            : t("سنرد عليك خلال أيام عمل قليلة.", "We will reply within a few working days.")}
        </p>
        <a
          href="/media/booklet.pdf"
          target="_blank"
          rel="noreferrer"
          className="pill-btn"
          download
        >
          {t("تحميل كتيّب «بيت القبة» PDF", "Download the Vault House booklet PDF")}
        </a>
      </div>
    );
  }

  return (
    <form
      className="space-y-4"
      onSubmit={async (e) => {
        e.preventDefault();
        setError("");
        setIsPending(true);
        try {
          await submitLead({
            name,
            email,
            interest,
            message: [phone && `${t("هاتف", "Phone")}: ${phone}`, message].filter(Boolean).join("\n") || undefined,
          });
          setDone(true);
        } catch {
          setError(
            t(
              "حدث خطأ في الإرسال — جرّب مرة أخرى أو راسلنا مباشرة على البريد.",
              "Something went wrong — please try again or email us directly."
            )
          );
        } finally {
          setIsPending(false);
        }
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Input
          required
          minLength={2}
          placeholder={t("الاسم الكامل", "Full name")}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          required
          type="email"
          placeholder={t("البريد الإلكتروني", "Email address")}
          dir="ltr"
          style={{ textAlign: "start" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Input
          placeholder={t("الهاتف / واتساب (اختياري)", "Phone / WhatsApp (optional)")}
          dir="ltr"
          style={{ textAlign: "start" }}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <Select value={interest} onValueChange={setInterest}>
          <SelectTrigger>
            <SelectValue placeholder={t("أنا مهتم بـ…", "I am interested in…")} />
          </SelectTrigger>
          <SelectContent>
            {INTERESTS.map((i) => (
              <SelectItem key={i.v} value={i.v}>
                {i.l}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Textarea
        placeholder={t("رسالتك — المساحة، المدينة، أو أي سؤال (اختياري)", "Your message — area, city, or any question (optional)")}
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      {error && <p className="text-sm text-destructive">{error}</p>}
      <Button type="submit" disabled={isPending} className="pill-btn w-full border-0 sm:w-auto">
        {isPending && <Loader2 className="h-4 w-4 animate-spin" />}
        {interest === "booklet"
          ? t("أرسل واعطني رابط الكتيّب", "Send & give me the booklet link")
          : t("أرسل الرسالة", "Send the message")}
      </Button>
      <p className="text-xs text-muted-foreground">
        {t(
          "نستعمل بريدك فقط لإرسال الكتيّب وأخبار المشاريع — لا رسائل مزعجة، ويمكنك إلغاء الاشتراك بنقرة.",
          "We use your email only for the booklet and project news — no spam, unsubscribe in one click."
        )}
      </p>
    </form>
  );
}

/** Gated download: email capture before revealing any PDF link. */
export function GatedPdfDialog({
  trigger,
  pdf,
  titleAr,
  titleEn,
  blurbAr,
  blurbEn,
}: {
  trigger: React.ReactNode;
  pdf: string;
  titleAr: string;
  titleEn: string;
  blurbAr: string;
  blurbEn: string;
}) {
  const [open, setOpen] = useState(false);
  const t = useT();
  const isAr = t("a", "") === "a";
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <span onClick={() => setOpen(true)} className="cursor-pointer">
        {trigger}
      </span>
      <DialogContent className="max-w-lg bg-background" dir={isAr ? "rtl" : "ltr"}>
        <DialogHeader>
          <DialogTitle className="font-display text-2xl font-bold">{t(titleAr, titleEn)}</DialogTitle>
        </DialogHeader>
        <p className="text-sm leading-7 text-muted-foreground">{t(blurbAr, blurbEn)}</p>
        <GatedPdfForm pdf={pdf} />
      </DialogContent>
    </Dialog>
  );
}

function GatedPdfForm({ pdf }: { pdf: string }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const [isPending, setIsPending] = useState(false);
  const t = useT();

  if (done) {
    return (
      <div className="rounded-2xl bg-secondary p-6 text-center">
        <CheckCircle2 className="mx-auto mb-3 h-10 w-10 text-primary" />
        <p className="mb-5 text-sm text-muted-foreground">
          {t("شكراً — إليك رابط التحميل مباشرة:", "Thank you — here is your download link:")}
        </p>
        <a href={pdf} target="_blank" rel="noreferrer" className="pill-btn" download>
          {t("تحميل الملف PDF", "Download the PDF")}
        </a>
      </div>
    );
  }
  return (
    <form
      className="space-y-4"
      onSubmit={async (e) => {
        e.preventDefault();
        setError("");
        setIsPending(true);
        try {
          await submitLead({ name, email, interest: "booklet", message: `PDF: ${pdf}` });
          setDone(true);
        } catch {
          setError(t("حدث خطأ في الإرسال — جرّب مرة أخرى.", "Something went wrong — please try again."));
        } finally {
          setIsPending(false);
        }
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Input required minLength={2} placeholder={t("الاسم الكامل", "Full name")} value={name} onChange={(e) => setName(e.target.value)} />
        <Input required type="email" placeholder={t("البريد الإلكتروني", "Email address")} dir="ltr" style={{ textAlign: "start" }} value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      {error && <p className="text-sm text-destructive">{error}</p>}
      <Button type="submit" disabled={isPending} className="pill-btn w-full border-0">
        {isPending && <Loader2 className="h-4 w-4 animate-spin" />}
        {t("أرسل واعطني رابط التحميل", "Send & give me the download link")}
      </Button>
      <p className="text-xs text-muted-foreground">
        {t("نستعمل بريدك فقط لإرسال الملف وأخبار المشاريع — لا رسائل مزعجة.", "We use your email only for the file and project news — no spam.")}
      </p>
    </form>
  );
}

export function BookletDialog({ trigger }: { trigger: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const t = useT();
  const isAr = t("a", "") === "a";
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <span onClick={() => setOpen(true)} className="cursor-pointer">
        {trigger}
      </span>
      <DialogContent className="max-w-lg bg-background" dir={isAr ? "rtl" : "ltr"}>
        <DialogHeader>
          <DialogTitle className="font-display text-2xl font-bold">
            {t(
              "كتيّب «بيت القبة» — الفكرة، الأرقام، والتجربة",
              "The Vault House booklet — the idea, the numbers, the experience"
            )}
          </DialogTitle>
        </DialogHeader>
        <p className="text-sm leading-7 text-muted-foreground">
          {t(
            "20 صفحة مجانية تلخّص كل ما في الموقع + 8 صفحات من كتاب المشروع الأصلي. اترك اسمك وبريدك ويظهر لك رابط التحميل فوراً.",
            "20 free pages summarising the whole site + 8 pages from the original project book. Leave your name and email and the download link appears instantly."
          )}
        </p>
        <LeadForm defaultInterest="booklet" />
      </DialogContent>
    </Dialog>
  );
}
