import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/rani-ki-vav.jpg";
import { SectionHeader, StatsSection, PrototypeNote } from "@/components/jal/archive-components";
import { ComparisonPreview, FeaturedSystems, FlowSection, MethodologySection, RecordSpotlight } from "@/components/jal/home-sections";
import { academicInformation } from "@/data/archive";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "JalSanskriti — Digital Archive of Traditional Indian Water Systems" },
    { name: "description", content: "Explore traditional Indian water systems through Group 7's academic IKS digital archive." },
    { property: "og:title", content: "JalSanskriti — Digital Archive of Traditional Indian Water Systems" },
    { property: "og:description", content: "Ancient Knowledge. Living Water Wisdom. Digitally Preserved." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

function Index() {
  return <>
    <section className="grain overflow-hidden border-b border-border bg-background">
      <div className="page-shell grid gap-8 py-8 md:min-h-[calc(100svh-5rem)] md:grid-cols-[minmax(0,.8fr)_minmax(22rem,1.2fr)] md:items-center md:py-12 lg:gap-16">
        <div className="reveal flex min-w-0 flex-col md:py-10">
          <div className="flex items-end justify-between border-b border-border pb-4">
            <p className="eyebrow">Digital archive · Group 7</p>
            <span className="grid size-9 place-items-center border border-primary font-mono text-[10px] text-primary">07</span>
          </div>
          <h1 className="mt-8 break-words font-display text-[clamp(4.25rem,10vw,8.75rem)] leading-[.78] text-primary">Jal<br/><span className="italic text-patina">Sanskriti</span></h1>
          <p className="mt-7 max-w-lg font-display text-2xl italic leading-tight text-foreground sm:text-3xl">Water wisdom, carved into the land.</p>
          <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">An academic study of traditional Indian water systems and the ecological knowledge held in their architecture, landscapes and community practice.</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <Button asChild size="lg" className="justify-between"><Link to="/archive" search={{q:"",type:"All systems",region:"All regions",fn:"All functions"}}>Explore Archive <ArrowRight/></Link></Button>
            <Button asChild size="lg" variant="outline" className="justify-between"><Link to="/systems">Systems Taxonomy <ArrowRight/></Link></Button>
          </div>
          <p className="mt-7 border-t border-border pt-4 text-[10px] uppercase tracking-[.12em] text-muted-foreground">{academicInformation.institution} · {academicInformation.subject} · {academicInformation.assignment}</p>
        </div>
        <figure className="plate-frame relative mx-2 min-w-0 self-center md:mx-0">
          <div className="relative overflow-hidden bg-primary">
            <img src={heroImage} alt="Illustrative view of a carved Indian stepwell" width={1536} height={1024} fetchPriority="high" className="aspect-[4/5] max-h-[72svh] w-full object-cover grayscale-[.18] transition duration-700 hover:scale-[1.015]"/>
            <span className="absolute left-3 top-3 bg-background px-2 py-1 font-mono text-[9px] uppercase text-primary">Archive plate · JS-GUJ-SW-001</span>
          </div>
          <figcaption className="grid gap-2 border-t border-border px-1 pt-3 text-[10px] leading-4 text-muted-foreground sm:grid-cols-[1fr_auto]"><span>Illustrative reconstruction · educational visualization</span><span>Traditional water systems</span></figcaption>
        </figure>
      </div>
    </section>
    <StatsSection/>
    <div className="page-shell pt-8"><PrototypeNote/></div>
    <FeaturedSystems/><FlowSection/>
    <section className="section-pad bg-secondary"><div className="page-shell"><SectionHeader eyebrow="IKS connection" title="Water Knowledge as Indian Knowledge" copy="Traditional water management links environmental observation with material, agricultural and social knowledge."/><div className="grid gap-px border-y border-border bg-border sm:grid-cols-2 lg:grid-cols-3">{["Local ecology and rainfall","Groundwater and terrain","Agriculture and seasonal timing","Architecture and material knowledge","Community participation","Resource conservation"].map((item,i)=><article key={item} className="bg-background p-6"><span className="font-mono text-xs text-patina">0{i+1}</span><h3 className="mt-4 font-display text-2xl">{item}</h3></article>)}</div><p className="mt-7 max-w-4xl text-sm leading-7 text-muted-foreground">These knowledge systems were diverse and place-specific. Their value lies not in romanticising the past, but in studying how people observed local conditions, organised seasonal water use and adapted construction to landscape and available materials.</p></div></section>
    <ComparisonPreview/><MethodologySection/><RecordSpotlight/>
  </>;
}