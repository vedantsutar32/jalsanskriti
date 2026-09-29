import { Link } from "@tanstack/react-router";
import { ArrowUp, Menu, Search, Waves } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { academicInformation } from "@/data/archive";

const nav = [
  ["/", "Home"], ["/archive", "Explore Archive"], ["/systems", "Water Systems"],
  ["/gallery", "Gallery"], ["/about", "About"],
] as const;

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return <Link to="/" className="group flex min-w-0 items-center gap-3" aria-label="JalSanskriti home">
    <span className={`grid size-10 shrink-0 place-items-center border ${inverse ? "border-primary-foreground/30" : "border-border"}`}><Waves className="size-5" /></span>
    <span className="min-w-0"><small className={`mb-1 block truncate text-[9px] font-semibold uppercase tracking-[.16em] ${inverse ? "text-primary-foreground/65" : "text-patina"}`}>Digital archive · Group 7</small><strong className="block font-display text-2xl leading-none">JalSanskriti</strong></span>
  </Link>;
}

export function Navbar() {
  return <header className="sticky top-0 z-40 border-b border-border/80 bg-background/95 backdrop-blur-md">
    <div className="page-shell grid h-20 grid-cols-[minmax(0,1fr)_auto] items-center gap-3 lg:grid-cols-[auto_1fr_auto]">
      <Brand />
      <nav className="hidden items-center justify-center gap-1 lg:flex" aria-label="Primary navigation">
        {nav.map(([to, label]) => <Link key={to} to={to} activeOptions={{ exact: to === "/" }} className="nav-link" activeProps={{ className: "nav-link-active" }}>{label}</Link>)}
      </nav>
      <div className="flex shrink-0 items-center gap-1">
        <Button asChild variant="ghost" size="icon" className="hidden sm:inline-flex" aria-label="Search archive"><Link to="/archive" search={{ q: "", type: "All systems", region: "All regions", fn: "All functions" }}><Search /></Link></Button>
        <Button asChild className="hidden lg:inline-flex"><Link to="/archive" search={{ q: "", type: "All systems", region: "All regions", fn: "All functions" }}>Explore Archive</Link></Button>
        <Sheet><SheetTrigger asChild><Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open navigation"><Menu /></Button></SheetTrigger>
          <SheetContent className="w-[88vw] border-border bg-background p-0">
            <SheetHeader className="border-b border-border p-6 text-left"><SheetTitle><Brand /></SheetTitle><SheetDescription className="sr-only">Site navigation</SheetDescription></SheetHeader>
            <nav className="grid p-4" aria-label="Mobile navigation">{nav.map(([to, label]) => <SheetClose asChild key={to}><Link to={to} className="border-b border-border px-3 py-4 font-medium">{label}</Link></SheetClose>)}</nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  </header>;
}

export function Footer() {
  return <footer className="bg-primary text-primary-foreground"><div className="page-shell py-14 sm:py-20">
    <div className="grid gap-10 border-b border-primary-foreground/20 pb-12 lg:grid-cols-[1.15fr_1fr_auto]">
      <div><Brand inverse /><p className="mt-6 max-w-md font-display text-3xl leading-tight">{academicInformation.projectTitle}</p></div>
      <div className="text-sm leading-7 text-primary-foreground/70"><strong className="block text-primary-foreground">{academicInformation.institution}</strong><span className="block">{academicInformation.department}</span><span className="block">{academicInformation.semester} · IKS · {academicInformation.assignment}</span><span className="block">{academicInformation.group}</span></div>
      <nav className="grid grid-cols-2 gap-x-8 gap-y-3 self-start text-sm" aria-label="Footer navigation">{nav.map(([to, label]) => <Link key={to} to={to} className="text-primary-foreground/70 transition-colors hover:text-primary-foreground">{label === "Explore Archive" ? "Archive" : label === "Water Systems" ? "Systems" : label}</Link>)}</nav>
    </div>
    <div className="flex flex-col gap-2 pt-6 text-xs text-primary-foreground/60 sm:flex-row sm:justify-between"><span>{academicInformation.subject} · {academicInformation.assignment} · {academicInformation.group}</span><span>{academicInformation.tagline}</span></div>
  </div></footer>;
}

export function BackToTop() { const [visible,setVisible]=useState(false); useEffect(()=>{const update=()=>setVisible(window.scrollY>600);update();window.addEventListener("scroll",update,{passive:true});return()=>window.removeEventListener("scroll",update)},[]); if(!visible)return null; return <Button variant="secondary" size="icon" className="fixed bottom-5 right-5 z-30 shadow-archive" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top"><ArrowUp /></Button>; }
