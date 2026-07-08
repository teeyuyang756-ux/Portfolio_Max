import { dictionaries, type Lang } from "@/lib/i18n";

export default function Footer({ lang }: { lang: Lang }) {
  return (
    <footer className="bg-black py-6 text-center text-sm text-white/40">
      © {new Date().getFullYear()} MAX · {dictionaries[lang].footer}
    </footer>
  );
}
