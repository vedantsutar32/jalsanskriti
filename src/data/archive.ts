import raniImage from "@/assets/rani-ki-vav.jpg";
import adalajImage from "@/assets/adalaj-stepwell.jpg";
import johadImage from "@/assets/johad-rajasthan.jpg";
import aharImage from "@/assets/ahar-pyne.jpg";
import kuhlImage from "@/assets/kuhl-himachal.jpg";
import khadinImage from "@/assets/khadin-rajasthan.jpg";
import tankImage from "@/assets/temple-tank.jpg";

export type ArchiveRecord = {
  id: string; name: string; slug: string; type: string; state: string; region: string;
  location: string; historicalPeriod: string; primaryFunction: string; waterSource: string;
  materials: string; landscape: string; description: string; significance: string;
  conservationStatus: string; documentationStatus: string; image: string;
  imageAlt: string; imageCredit: string;
  overview: string; management: string; architecture: string; culture: string; conservation: string;
  principle: string; characteristics: string[]; modernRelevance: string;
  climate?: string; communityDimension?: string; scale?: string;
};

const prototypeCredit = "Illustrative reconstruction · generated for this archive prototype";

export const academicInformation = {
  institution: "Smt. Indira Gandhi College of Engineering",
  department: "Department of Computer Engineering",
  semester: "Semester V",
  subject: "Indian Knowledge Systems (IKS)",
  assignment: "Assignment 6",
  group: "Group 7",
  projectTitle: "Digital Archive of Traditional Indian Water Systems",
  tagline: "Ancient Knowledge. Living Water Wisdom. Digitally Preserved.",
} as const;

export const archiveRecords: ArchiveRecord[] = [
  {
    id: "JS-GUJ-SW-001", name: "Rani-ki-Vav", slug: "rani-ki-vav", type: "Stepwell",
    state: "Gujarat", region: "West India", location: "Patan, Gujarat", historicalPeriod: "11th century",
    primaryFunction: "Water storage & access", waterSource: "Groundwater and seasonal recharge", materials: "Stone",
    landscape: "Semi-arid alluvial plain", image: raniImage, imageAlt: "Illustrative view of a deep carved stone stepwell",
    imageCredit: prototypeCredit, conservationStatus: "Requires field/source verification", documentationStatus: "Prototype information · source verification required",
    description: "A monumental subterranean stepwell in Patan where water infrastructure, architecture and cultural expression meet.",
    significance: "Demonstrates how a utilitarian water structure could also become a highly articulated civic and ceremonial space.",
    overview: "Rani-ki-Vav is a monumental stepwell at Patan in Gujarat. Its descending sequence of terraces, pavilions and sculpted stonework leads toward a deep well shaft. The archive presents it as a documented example of water access shaped through architecture.",
    management: "The stepped descent enabled people to approach water as levels changed seasonally. The well was connected to the local groundwater system; access, shade and depth made the structure responsive to a dry climate.",
    architecture: "A long stepped corridor is articulated by pillared levels, landings and richly carved sandstone surfaces. Its underground form creates a gradual transition from the open landscape to the water source.",
    culture: "Stepwells could support gathering, rest and ritual alongside practical water access. The sculptural programme at Rani-ki-Vav gives the structure exceptional cultural and architectural importance.",
    conservation: "Stone weathering, water conditions and visitor pressure require continued care. Digital documentation can preserve spatial, material and water-management knowledge while the physical site changes.",
    principle: "Vertical access to groundwater through a descending architectural sequence.",
    characteristics: ["Deep stepped corridor", "Pillared pavilions", "Seasonal water access", "Subterranean thermal comfort"],
    modernRelevance: "Offers lessons in climate-responsive public architecture and the cultural value of water infrastructure."
  },
  {
    id: "JS-GUJ-SW-002", name: "Adalaj Stepwell", slug: "adalaj-stepwell", type: "Stepwell",
    state: "Gujarat", region: "West India", location: "Adalaj, Gujarat", historicalPeriod: "Late 15th century",
    primaryFunction: "Water access & community use", waterSource: "Groundwater", materials: "Stone",
    landscape: "Semi-arid settlement", image: adalajImage, imageAlt: "Illustrative view of a pillared Gujarati stepwell court", imageCredit: prototypeCredit,
    conservationStatus: "Requires field/source verification", documentationStatus: "Prototype information · source verification required",
    description: "A multi-level stepwell whose shaded galleries connect a settlement to groundwater through an elaborate descent.",
    significance: "Shows the social and climatic role of shaded, shared water architecture in western India.",
    overview: "Adalaj Stepwell is a multi-storeyed stepwell in Gujarat. Its sequence of landings and pillared galleries provides access to a well while creating sheltered spaces below ground.",
    management: "Users descended toward groundwater as the water level changed. Openings admit light and air while the deep masonry mass moderates heat.",
    architecture: "The structure combines a linear descent with cross-axial galleries, carved pillars and openings to the sky.",
    culture: "As a shared water place, the stepwell connected daily collection with rest, encounter and cultural expression.",
    conservation: "The prototype records its broad form and function; detailed condition assessment requires field documentation.",
    principle: "Stepped, shaded access to a groundwater well.", characteristics: ["Multi-level galleries", "Carved stone", "Light wells", "Community access"], modernRelevance: "Illustrates passive cooling and dignified civic infrastructure."
  },
  {
    id: "JS-RAJ-JH-001", name: "Johads", slug: "johads", type: "Johad", state: "Rajasthan", region: "North India", location: "Rajasthan–Haryana region", historicalPeriod: "Long-standing community practice", primaryFunction: "Groundwater recharge", waterSource: "Seasonal rainfall and runoff", materials: "Earth and local stone", landscape: "Semi-arid village catchments", image: johadImage, imageAlt: "Illustrative rural johad pond and earthen embankment", imageCredit: prototypeCredit, conservationStatus: "Requires field/source verification", documentationStatus: "Prototype information · source verification required", description: "Small earthen embankments that hold monsoon runoff, creating ponds and supporting groundwater recharge.", significance: "Represents landscape-scale, community-managed rainwater harvesting adapted to semi-arid terrain.", overview: "Johad is a broad regional term for small earthen water-harvesting structures. Forms vary by catchment, soil, rainfall and community practice.", management: "Runoff is slowed behind an embankment. Stored water can infiltrate soil, support nearby wells and remain available for local uses depending on conditions.", architecture: "Johads are landscape works rather than monumental buildings: a bund, spillway and carefully chosen catchment relationship form the core system.", culture: "Their upkeep has often depended on collective decisions about catchment, grazing, silt and water use.", conservation: "Effectiveness depends on an intact catchment and maintenance. Site-specific claims require local survey.", principle: "Capture monsoon runoff behind an earthen bund to store water and encourage infiltration.", characteristics: ["Earthen embankment", "Catchment-based", "Recharge function", "Collective maintenance"], modernRelevance: "A low-energy approach to slowing runoff and replenishing local water cycles."
  },
  {
    id: "JS-BIH-AP-001", name: "Ahar-Pyne", slug: "ahar-pyne", type: "Canal", state: "Bihar", region: "East India", location: "South Bihar plains", historicalPeriod: "Long-standing regional practice", primaryFunction: "Irrigation & floodwater management", waterSource: "Seasonal floodwater and runoff", materials: "Earth", landscape: "Low-gradient agricultural plains", image: aharImage, imageAlt: "Illustrative aerial view of a reservoir and field channels", imageCredit: prototypeCredit, conservationStatus: "Requires field/source verification", documentationStatus: "Prototype information · source verification required", description: "A linked system of channels and reservoirs that diverts seasonal water for storage and irrigation in Bihar.", significance: "Shows how flood-prone plains can turn seasonal water movement into an agricultural resource.", overview: "Ahar-Pyne systems pair pynes—channels that convey water—with ahars, embanked basins that retain it. Local forms and management arrangements differ.", management: "Seasonal flows are guided through channels into storage basins and fields. Gradient, timing, silt and shared maintenance influence performance.", architecture: "The system is an engineered agricultural landscape of earth channels, embankments, inlets and storage depressions.", culture: "Water distribution and desilting depend on coordination among cultivators and settlements.", conservation: "Encroachment, blocked channels and changing drainage can disrupt the network. Mapping connections is as important as documenting individual features.", principle: "Guide seasonal floodwater through channels into embanked storage and agricultural land.", characteristics: ["Linked channel–basin network", "Gravity flow", "Floodwater use", "Shared maintenance"], modernRelevance: "Suggests ways to work with seasonal floods rather than treating all floodwater only as a hazard."
  },
  {
    id: "JS-HP-KU-001", name: "Kuhls", slug: "kuhls", type: "Canal", state: "Himachal Pradesh", region: "Himalayan Region", location: "Himachal Pradesh", historicalPeriod: "Long-standing regional practice", primaryFunction: "Irrigation", waterSource: "Mountain streams and snowmelt", materials: "Earth, stone and local lining", landscape: "Mountain slopes and terraces", image: kuhlImage, imageAlt: "Illustrative stone-lined water channel on a Himalayan slope", imageCredit: prototypeCredit, conservationStatus: "Requires field/source verification", documentationStatus: "Prototype information · source verification required", description: "Gravity-fed channels that carry stream water along mountain contours toward terraced fields and settlements.", significance: "Embodies precise reading of slope, flow and collective distribution in Himalayan terrain.", overview: "Kuhls are gravity-fed irrigation channels associated with parts of Himachal Pradesh. They divert a portion of stream flow and follow contours toward cultivated land.", management: "Flow is controlled through channel alignment, diversions and outlets. Seasonal repairs are important because slopes, sediment and storms can damage channels.", architecture: "Narrow channels may be cut into earth, edged with stone or locally lined. Their form follows topography rather than a fixed monumental type.", culture: "Shared rules and maintenance traditions support distribution among fields; arrangements differ between communities.", conservation: "Road building, slope instability and changing water regimes can interrupt channels. Route mapping is essential to documentation.", principle: "Use gravity and contour-aligned channels to distribute mountain water.", characteristics: ["Contour-following channel", "Gravity-fed", "Terraced agriculture", "Seasonal repair"], modernRelevance: "Demonstrates low-energy distribution built around close knowledge of terrain."
  },
  {
    id: "JS-RAJ-KH-001", name: "Khadin", slug: "khadin", type: "Runoff harvesting", state: "Rajasthan", region: "North India", location: "Western Rajasthan", historicalPeriod: "Long-standing regional practice", primaryFunction: "Agriculture", waterSource: "Monsoon runoff", materials: "Earth and stone", landscape: "Arid rocky catchments and lower fields", image: khadinImage, imageAlt: "Illustrative runoff farming field divided by an earthen bund", imageCredit: prototypeCredit, conservationStatus: "Requires field/source verification", documentationStatus: "Prototype information · source verification required", description: "An arid-zone runoff farming system that retains seasonal water and moisture behind a long embankment.", significance: "Connects watershed capture directly to soil moisture and cultivation in low-rainfall landscapes.", overview: "A khadin uses an embankment across a lower slope to detain runoff from a rocky catchment. Water spreads over the field and leaves moisture in the soil.", management: "Runoff is held temporarily; infiltration and retained soil moisture can support cropping after surface water recedes. Safe overflow is important.", architecture: "A long earthen or masonry-supported bund defines the field edge, with spill arrangements responding to catchment and slope.", culture: "The system links land tenure, catchment care and agricultural timing. Practices vary locally.", conservation: "Sediment, breached bunds and altered catchments affect performance. Field verification is needed for each site.", principle: "Hold runoff over farmland so water infiltrates and leaves cultivable soil moisture.", characteristics: ["Long bund", "Run-on agriculture", "Soil-moisture storage", "Arid adaptation"], modernRelevance: "Shows how farming can store water in soil rather than relying only on tanks or pumps."
  },
  {
    id: "JS-TN-TT-001", name: "Traditional Temple Tanks", slug: "traditional-temple-tanks", type: "Tank", state: "Tamil Nadu", region: "South India", location: "Tamil Nadu", historicalPeriod: "Varied by site", primaryFunction: "Community, ritual & water storage", waterSource: "Rainfall, runoff and linked channels", materials: "Stone and earth", landscape: "Temple settlements and urban fabric", image: tankImage, imageAlt: "Illustrative South Indian temple tank with stepped stone edges", imageCredit: prototypeCredit, conservationStatus: "Requires field/source verification", documentationStatus: "Prototype information · source verification required", description: "Stepped tanks embedded in temple settlements, serving ritual, civic and water-storage roles in varied local networks.", significance: "Makes water a central element of sacred, social and urban space while participating in local drainage and storage.", overview: "Temple tanks occur across southern India in many forms. This prototype record describes the typology rather than claiming one site history.", management: "Depending on location, tanks receive rain, runoff or channel water. Inlets, outlets, desilting and surrounding drainage shape their function.", architecture: "Many have geometric stepped edges, retaining walls and a strong visual relationship with temple streets and gateways.", culture: "They may support ritual calendars and shared public life alongside practical water functions.", conservation: "Pollution, interrupted feeder channels and urban pressure can reduce function. Each tank needs site-specific study.", principle: "Store surface water in a stepped civic basin connected to a wider settlement landscape.", characteristics: ["Stepped basin", "Civic setting", "Ritual association", "Linked drainage"], modernRelevance: "Highlights the potential of visible public water storage within dense settlements."
  }
];

export const featuredSystems = archiveRecords.filter((record) => record.slug !== "adalaj-stepwell");
export const systemTypes = ["All systems", "Stepwell", "Tank", "Johad", "Canal", "Runoff harvesting"];
export const regions = ["All regions", "North India", "West India", "South India", "East India", "Himalayan Region"];
export const functions = ["All functions", "Drinking water", "Irrigation", "Groundwater recharge", "Flood management", "Agriculture", "Community use"];
export const stats = [
  { value: "07", label: "Archive records", note: "Prototype count" },
  { value: "06", label: "System families", note: "Educational typologies" },
  { value: "05", label: "Regions represented", note: "Prototype coverage" },
  { value: "01", label: "Living digital archive", note: "Designed to grow" },
];
export const comparisonFields = ["region", "climate", "landscape", "waterSource", "primaryFunction", "materials", "principle", "communityDimension", "scale", "modernRelevance"] as const;
export const comparisonLabels: Record<(typeof comparisonFields)[number], string> = { region: "Region", climate: "Climate", landscape: "Landscape", waterSource: "Water source", primaryFunction: "Main purpose", materials: "Construction", principle: "Working principle", communityDimension: "Community role", scale: "Scale", modernRelevance: "Modern relevance" };
export const team = ["Akshay Thorat", "Shubham Yadav", "Vedant Sutar", "Aaryan Patil", "Aryan Patil", "Yash D Patil", "Jihaan Lakka", "Luckshith Matta", "Vishwas Medhe", "Rahul Sharma"];
export const methodology = ["Identify", "Research", "Document", "Geotag", "Photograph", "Classify", "Digitize", "Preserve"];
export const galleryItems = archiveRecords.flatMap((r, i) => i < 3 ? [r, { ...r, id: `${r.id}-detail`, name: `${r.name} — landscape context` }] : [r]);
export function getRecord(slug: string) { return archiveRecords.find((record) => record.slug === slug); }
