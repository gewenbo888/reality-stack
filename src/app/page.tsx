import dynamic from "next/dynamic";
import { Reveal } from "@/components/Reveal";
import StackDiagram from "@/components/StackDiagram";
import { LAYERS, type Layer } from "@/data/layers";

const CosmicField = dynamic(() => import("@/components/CosmicField"), { ssr: false });

const OPENING = [
  { en: "Before stars,",           zh: "在恒星之前，" },
  { en: "Before galaxies,",        zh: "在星系之前，" },
  { en: "Before atoms,",           zh: "在原子之前，" },
  { en: "Before planets cooled,",  zh: "在行星冷却之前，" },
  { en: "Before oceans formed,",   zh: "在海洋形成之前，" },
  { en: "Before cells divided,",   zh: "在细胞分裂之前，" },
  { en: "Before neurons fired,",   zh: "在神经元放电之前，" },
  { en: "Before cities,",          zh: "在城市之前，" },
  { en: "Before datacenters,",     zh: "在数据中心之前，" },
  { en: "Before AI began thinking…", zh: "在 AI 开始思考之前……" },
];

const FINALE = [
  { en: "Physics created energy.",                  zh: "物理创造能量。" },
  { en: "Energy organized matter.",                 zh: "能量组织物质。" },
  { en: "Matter evolved life.",                     zh: "物质演化生命。" },
  { en: "Life evolved intelligence.",               zh: "生命演化智能。" },
  { en: "Intelligence created civilization.",       zh: "智能创造文明。" },
  { en: "Civilization created AI.",                 zh: "文明创造 AI。" },
  { en: "AI may reshape reality itself.",           zh: "AI 可能开始重塑现实本身。" },
];

export default function Page() {
  return (
    <main className="relative">
      <CosmicField />
      <TopHud />
      <Opening />
      <Thesis />
      <Diagram />
      {LAYERS.map((L) => (
        <LayerSection key={L.n} L={L} />
      ))}
      <DependencyGraph />
      <Finale />
      <Footer />
    </main>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// OPENING SEQUENCE
// ─────────────────────────────────────────────────────────────────────────────

function Opening() {
  return (
    <section className="relative min-h-[120vh] flex flex-col items-center justify-center">
      <div className="absolute inset-0 -z-[1] pointer-events-none"
           style={{ background: "radial-gradient(ellipse 60% 60% at 50% 45%, transparent, rgba(2,3,10,0.75) 80%)" }} />

      <div className="max-w-3xl px-6 mx-auto text-center pt-40 pb-24">
        <Reveal>
          <div className="eyebrow text-L0 mb-12">// boot sequence · 引导</div>
        </Reveal>
        <ul className="space-y-5 text-text-2">
          {OPENING.map((line, i) => (
            <Reveal key={i} delay={i * 0.05} y={18}>
              <li className="flex flex-col items-center gap-1">
                <span className="display text-2xl sm:text-3xl">{line.en}</span>
                <span className="zh-display text-base sm:text-lg text-muted">{line.zh}</span>
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal>
          <p className="mt-20 display text-[clamp(1.6rem,3.4vw,2.6rem)] text-text">
            <span className="display-italic text-L4">Complexity</span> kept stacking.
          </p>
          <p className="mt-2 zh-display text-xl text-muted">复杂性不断堆叠。</p>
        </Reveal>

        <Reveal>
          <p className="mt-12 display text-[clamp(1.6rem,3.4vw,2.6rem)] text-text">
            Reality became <span className="display-italic text-L6">layers.</span>
          </p>
          <p className="mt-2 zh-display text-xl text-muted">现实形成了层。</p>
        </Reveal>

        <Reveal>
          <div className="mt-24 mb-2 aurora-line max-w-md mx-auto" />
        </Reveal>

        <Reveal delay={0.2}>
          <h1 className="display text-[clamp(3.4rem,10vw,8rem)] tracking-tightest mt-6">
            <span className="bg-clip-text text-transparent" style={{
              backgroundImage: "linear-gradient(180deg,#fde68a 0%,#a78bfa 50%,#5b6cff 100%)"
            }}>
              REALITY <span className="display-italic">STACK</span>
            </span>
          </h1>
          <p className="zh-display text-2xl sm:text-3xl mt-4 text-text-2">现实技术栈</p>
        </Reveal>

        <Reveal>
          <p className="mt-12 max-w-xl mx-auto text-text-2 text-base sm:text-lg leading-relaxed font-light">
            Ten layers. One universe. From quantum fields to recursive AI — an architecture diagram of existence.
          </p>
          <p className="mt-3 max-w-xl mx-auto zh-display text-base sm:text-lg text-muted">
            十层结构。一个宇宙。从量子场到递归 AI——一份关于存在本身的架构图。
          </p>
        </Reveal>

        <Reveal>
          <div className="mt-16 inline-flex items-center gap-3 font-mono text-[10px] tracking-[0.32em] uppercase text-muted">
            <span className="block w-px h-10 bg-gradient-to-b from-transparent via-L0 to-transparent animate-pulse-soft" />
            scroll to descend the stack
            <span className="text-dim">·</span>
            <span className="zh-display">向下浏览</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// THESIS PANEL
// ─────────────────────────────────────────────────────────────────────────────

function Thesis() {
  return (
    <section className="relative py-32 sm:py-44">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-10">
        <Reveal>
          <div className="eyebrow text-L4 mb-6">// thesis · 论点</div>
          <h2 className="display text-[clamp(2.4rem,6vw,5rem)] max-w-[22ch] leading-[0.98]">
            Reality itself may be a{" "}
            <span className="display-italic text-L6">layered system.</span>
          </h2>
          <p className="zh-display text-2xl sm:text-3xl mt-4 text-text-2">
            现实本身，可能是一个分层系统。
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 mt-20">
          <Reveal>
            <p className="text-text-2 text-lg leading-relaxed font-light">
              Physics, energy, matter, life, intelligence, civilization, information, simulation, AI —
              they are not isolated phenomena. They are layers in an increasingly complex stack,
              each one running on top of the ones below, each one enabling the ones above.
            </p>
            <p className="mt-6 zh-display text-base leading-loose text-muted">
              物理、能量、物质、生命、智能、文明、信息、模拟、AI——它们并非孤立现象。
              它们是越来越复杂的技术栈中的一层一层，
              每一层都运行在其下层之上，又为其上层提供可能。
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <figure className="glass-strong p-8 sm:p-10 rounded-sm card-edge relative scanline">
              <div className="absolute inset-0 -z-[1] pointer-events-none opacity-50"
                   style={{ background: "radial-gradient(circle at 80% 20%, rgba(167,139,250,0.25), transparent 60%)" }} />
              <div className="eyebrow text-L7 mb-5">Q-0 · the architectural question</div>
              <blockquote className="display text-[clamp(1.5rem,2.6vw,2.2rem)] leading-tight">
                How does reality organize itself into{" "}
                <span className="display-italic text-L9">higher layers</span> of complexity?
              </blockquote>
              <p className="zh-display mt-4 text-lg text-muted leading-relaxed">
                现实，如何逐层组织成越来越复杂的系统？
              </p>
              <div className="mt-8 hairline" />
              <div className="mt-6 grid grid-cols-3 gap-3 text-xs font-mono">
                <Stat label="Layers" value="10" />
                <Stat label="Age of stack" value="13.8 Gyr" />
                <Stat label="Top layer recursion" value="open" />
              </div>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// FULL DIAGRAM
// ─────────────────────────────────────────────────────────────────────────────

function Diagram() {
  return (
    <section className="relative py-32 sm:py-40 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-10">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 items-center">
          <Reveal>
            <div className="eyebrow text-L0 mb-5">// diagram · 全栈图</div>
            <h2 className="display text-[clamp(2rem,4.6vw,3.6rem)] max-w-[20ch] leading-[1.02]">
              Ten layers running on the same{" "}
              <span className="display-italic text-L1">substrate.</span>
            </h2>
            <p className="zh-display mt-3 text-xl text-text-2">十层结构，共用同一底层。</p>

            <p className="mt-8 max-w-xl text-text-2 leading-relaxed font-light">
              Each layer is a stable pattern that the layers beneath have learned to support — and
              a substrate the layers above have learned to depend on. Move down, and you reach
              physics. Move up, and you reach minds modeling themselves.
            </p>
            <p className="mt-5 zh-display text-base leading-loose text-muted">
              每一层都是其下层学会承载的稳定模式，又是其上层学会依赖的底座。
              向下走，是物理。向上走，是开始建模自身的心智。
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 max-w-md text-xs font-mono">
              <Stat label="Lowest layer"  value="Physics · 物理" />
              <Stat label="Highest layer" value="Meta-Reality · 元现实" />
              <Stat label="Substrate"     value="Information · 信息" />
              <Stat label="Most volatile" value="AI · 人工智能" />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <StackDiagram />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// LAYER SECTION (generic)
// ─────────────────────────────────────────────────────────────────────────────

const HUE_GLOW: Record<string, string> = {
  L0: "shadow-[0_0_40px_0_rgba(91,108,255,0.55)]",
  L1: "shadow-[0_0_40px_0_rgba(251,191,36,0.55)]",
  L2: "shadow-[0_0_40px_0_rgba(192,202,245,0.45)]",
  L3: "shadow-[0_0_40px_0_rgba(52,211,153,0.5)]",
  L4: "shadow-[0_0_40px_0_rgba(167,139,250,0.5)]",
  L5: "shadow-[0_0_40px_0_rgba(251,113,133,0.5)]",
  L6: "shadow-[0_0_40px_0_rgba(34,211,238,0.5)]",
  L7: "shadow-[0_0_40px_0_rgba(240,171,252,0.5)]",
  L8: "shadow-[0_0_40px_0_rgba(134,239,172,0.5)]",
  L9: "shadow-[0_0_40px_0_rgba(253,230,138,0.5)]",
};

function LayerSection({ L }: { L: Layer }) {
  return (
    <section
      id={L.n}
      className="relative py-32 sm:py-44 border-t border-line/40"
    >
      <div className="max-w-[1320px] mx-auto px-6 sm:px-10">
        {/* HEAD */}
        <div className="grid lg:grid-cols-[300px_1fr] gap-10 mb-16">
          <div>
            <div className="layer-tab" style={{ color: L.hex }}>{L.n}</div>
            <div className="mt-3 flex items-center gap-3">
              <div className={"w-3 h-3 rounded-full " + HUE_GLOW[L.hue]}
                   style={{ background: L.hex }} />
              <div className="font-mono text-xs text-muted">{L.eyebrow}</div>
            </div>
            <div className="mt-4 w-16 h-px" style={{ background: L.hex, opacity: 0.55 }} />
            <div className="mt-4 zh-display text-base text-text-2">{L.zhTitle}</div>
          </div>

          <Reveal>
            <h2 className="display text-[clamp(2.2rem,5vw,4.4rem)] leading-[0.98]"
                style={{ color: "#e6ecff" }}>
              {L.en.split(/(\b(?:Reality|Energy|Matter|Life|Intelligence|Civilization|Information|Simulation|AI|Physics|Self-Organizing|Lowest|Aware)\b)/).map((part, i) =>
                /Reality|Energy|Matter|Life|Intelligence|Civilization|Information|Simulation|AI|Physics|Self-Organizing|Lowest|Aware/.test(part)
                  ? <span key={i} className="display-italic" style={{ color: L.hex }}>{part}</span>
                  : <span key={i}>{part}</span>
              )}
            </h2>
            <p className="zh-display text-2xl sm:text-3xl mt-4 text-text-2">{L.zh}</p>
          </Reveal>
        </div>

        {/* THESIS */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <Reveal>
            <p className="text-text text-lg leading-relaxed font-light max-w-xl">{L.thesis.en}</p>
            <p className="mt-5 zh-display text-base leading-loose text-muted">{L.thesis.zh}</p>
          </Reveal>

          {/* STACK COMPONENTS */}
          <Reveal delay={0.1}>
            <div className="glass rounded-sm p-7 sm:p-9 card-edge relative">
              <div className="flex items-center justify-between mb-6">
                <span className="eyebrow" style={{ color: L.hex }}>stack components</span>
                <span className="plate">·</span>
                <span className="zh-display text-sm text-muted">层内组件</span>
              </div>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-3 font-mono text-sm">
                {L.stack.map((s, i) => (
                  <li key={s.en} className="flex items-start gap-3">
                    <span className="text-dim mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                    <span className="flex-1">
                      <span className="text-text">{s.en}</span>
                      <span className="zh-display text-muted ml-2 text-[13px]">{s.zh}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* VISUALIZE + EXPLAIN */}
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 mb-20">
          <Reveal>
            <div className="eyebrow mb-5" style={{ color: L.hex }}>visualize · 可视化</div>
            <ul className="space-y-4">
              {L.visualize.map((v, i) => (
                <li key={i} className="flex items-start gap-4 text-text-2">
                  <span className="mt-2 w-2 h-2 rounded-full" style={{ background: L.hex }} />
                  <span className="display text-2xl leading-tight">{v}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="eyebrow mb-5 text-muted">explain · 阐释</div>
            <p className="text-text text-lg leading-relaxed font-light">{L.explain.en}</p>
            <p className="mt-5 zh-display text-base leading-loose text-muted">{L.explain.zh}</p>
            <div className="mt-8 grid grid-cols-3 gap-3 text-xs font-mono">
              {L.stats.map((s) => (
                <Stat key={s.label} label={s.label} value={s.value} />
              ))}
            </div>
          </Reveal>
        </div>

        {/* REVEAL */}
        <Reveal>
          <div className="relative max-w-3xl">
            <div className="absolute -inset-1 -z-[1] opacity-50 pointer-events-none rounded"
                 style={{ background: `radial-gradient(ellipse 60% 60% at 30% 50%, ${L.hex}33, transparent 70%)` }} />
            <div className="aurora-line" />
            <p className="mt-8 display text-[clamp(1.6rem,3.4vw,2.6rem)] leading-[1.05]">
              {L.reveal.en.split(/(\b(?:reality|intelligence|civilization|information|simulation|stack|conscious|redesign|emerges|organized|reality\.|itself|substrate)\b)/i).map((part, i) =>
                /\b(?:reality|intelligence|civilization|information|simulation|stack|conscious|redesign|emerges|organized|substrate|itself)\b/i.test(part)
                  ? <span key={i} className="display-italic" style={{ color: L.hex }}>{part}</span>
                  : <span key={i}>{part}</span>
              )}
            </p>
            <p className="mt-3 zh-display text-xl sm:text-2xl text-text-2">{L.reveal.zh}</p>
            <div className="mt-8 aurora-line" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// DEPENDENCY GRAPH PANEL (between L9 and finale)
// ─────────────────────────────────────────────────────────────────────────────

function DependencyGraph() {
  const chain = ["Physics", "Energy", "Matter", "Life", "Intelligence", "Civilization", "Information", "Simulation", "AI", "Meta-Reality"];
  const zh    = ["物理", "能量", "物质", "生命", "智能", "文明", "信息", "模拟", "AI", "元现实"];
  return (
    <section className="relative py-32 sm:py-44 border-t border-line/40">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-10">
        <Reveal>
          <div className="eyebrow text-L6 mb-6">// dependency · 依赖链</div>
          <h2 className="display text-[clamp(2rem,4.6vw,3.6rem)] leading-[0.98] max-w-[24ch]">
            Each layer creates the{" "}
            <span className="display-italic text-L7">possibility</span> of the next.
          </h2>
          <p className="zh-display mt-3 text-xl text-text-2">而每一层，都为下一层创造可能。</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-16 glass rounded-sm p-8 sm:p-12 card-edge relative scanline overflow-x-auto">
            <ol className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {chain.map((c, i) => (
                <li key={c} className="flex items-center gap-3 sm:gap-4">
                  <div className="px-3 py-2 rounded-sm border border-line text-sm font-mono"
                       style={{
                         color: LAYERS[i].hex,
                         borderColor: LAYERS[i].hex + "55",
                         background: LAYERS[i].hex + "0d",
                       }}>
                    <span className="text-dim mr-2 text-[11px]">L-{String(i).padStart(2,"0")}</span>
                    <span>{c}</span>
                    <span className="zh-display ml-2 text-text-2">{zh[i]}</span>
                  </div>
                  {i < chain.length - 1 && (
                    <span className="text-muted">→</span>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        <Reveal>
          <p className="mt-16 max-w-3xl display text-[clamp(1.4rem,2.4vw,2rem)] leading-tight">
            A planet that produces galaxies, biology, and frontier compute is{" "}
            <span className="display-italic text-L9">not nine separate stories.</span>{" "}
            It is one stack — running, layer by layer, all the way up.
          </p>
          <p className="mt-4 zh-display text-lg leading-loose text-muted max-w-3xl">
            一颗能孕育星系、生命与前沿算力的行星，并不是九个分开的故事。
            它是同一个技术栈——一层接一层，一路向上。
          </p>
        </Reveal>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// FINALE
// ─────────────────────────────────────────────────────────────────────────────

function Finale() {
  return (
    <section className="relative py-40 sm:py-56 overflow-hidden">
      <div className="absolute inset-0 -z-[1] pointer-events-none"
           style={{ background: "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(167,139,250,0.18), transparent 60%), radial-gradient(ellipse 50% 50% at 50% 5%, rgba(34,211,238,0.18), transparent 60%)" }} />

      <div className="max-w-[1320px] mx-auto px-6 sm:px-10 text-center">
        <Reveal>
          <div className="eyebrow text-L9 mb-10">// finale · 终章</div>
        </Reveal>

        <Reveal>
          <p className="display text-[clamp(2rem,5vw,4.2rem)] leading-[1.02]">
            Reality organizes itself into{" "}
            <span className="display-italic text-L4">layers.</span>
          </p>
          <p className="zh-display text-2xl sm:text-3xl mt-3 text-text-2">现实把自身组织成层。</p>
        </Reveal>

        <Reveal>
          <p className="mt-10 display text-[clamp(1.6rem,3.4vw,2.6rem)] leading-[1.05] max-w-[28ch] mx-auto">
            And every layer creates the{" "}
            <span className="display-italic text-L7">possibility</span> of the next.
          </p>
          <p className="zh-display text-xl mt-3 text-text-2">而每一层，都为下一层创造可能。</p>
        </Reveal>

        {/* Cascading poem */}
        <Reveal>
          <div className="mt-24 mx-auto max-w-[42ch] text-left space-y-3">
            {FINALE.map((line, i) => (
              <Reveal key={i} delay={i * 0.08} y={18}>
                <div className="flex items-baseline gap-3">
                  <span className="w-6 text-dim font-mono text-xs">{String(i).padStart(2, "0")}</span>
                  <div>
                    <div className="display text-2xl sm:text-3xl leading-tight" style={{ color: LAYERS[i]?.hex || "#e6ecff" }}>
                      {line.en}
                    </div>
                    <div className="zh-display text-base text-muted">{line.zh}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-32 mx-auto max-w-3xl">
            <div className="aurora-line" />
            <h2 className="mt-12 display text-[clamp(2.6rem,8vw,6rem)] tracking-tightest">
              <span className="bg-clip-text text-transparent" style={{
                backgroundImage: "linear-gradient(120deg,#fde68a 0%,#a78bfa 50%,#22d3ee 100%)"
              }}>
                Reality is a <span className="display-italic">stack.</span>
              </span>
            </h2>
            <p className="zh-display text-2xl sm:text-3xl mt-4 text-text-2">现实本身，就是一个技术栈。</p>
            <div className="mt-12 aurora-line" />
          </div>
        </Reveal>

        <Reveal>
          <p className="mt-16 font-mono text-[10px] tracking-[0.32em] uppercase text-muted">
            // end of transmission · 信号终
          </p>
        </Reveal>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SHARED PIECES
// ─────────────────────────────────────────────────────────────────────────────

function TopHud() {
  return (
    <header className="fixed top-0 inset-x-0 z-30 pointer-events-none">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-10 pt-5 flex items-center justify-between text-[10px] font-mono tracking-[0.26em] uppercase text-muted">
        <div className="flex items-center gap-3 pointer-events-auto">
          <span className="w-1.5 h-1.5 rounded-full bg-L4 animate-pulse-soft" />
          <span>Reality Stack</span>
          <span className="text-dim hidden sm:inline">·</span>
          <span className="hidden sm:inline">/v1.0</span>
        </div>
        <div className="hidden sm:flex items-center gap-4 pointer-events-auto">
          <span className="text-dim">EN</span>
          <span className="text-text-2">·</span>
          <span className="zh-display text-muted">现实技术栈</span>
        </div>
      </div>
    </header>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-dim uppercase tracking-[0.18em] text-[9px]">{label}</div>
      <div className="mt-1 text-text">{value}</div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-line/60">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-10 py-14 grid sm:grid-cols-[1fr_auto] gap-6 items-end">
        <div>
          <div className="eyebrow">a field instrument</div>
          <div className="mt-3 display text-2xl text-text">
            The universe was always layered. <span className="display-italic text-muted">We are just starting to see it.</span>
          </div>
          <p className="mt-2 zh-display text-base text-muted">宇宙原本就是分层的。我们才刚刚开始看见。</p>
        </div>
        <div className="text-right font-mono text-xs text-muted tracking-[0.18em] uppercase">
          A note from <a className="link-u text-text" href="https://psyverse.fun">Psyverse</a><br/>
          by Gewenbo · MMXXVI
        </div>
      </div>
    </footer>
  );
}
