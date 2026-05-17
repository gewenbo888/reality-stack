export type Layer = {
  n: string;                  // "L-00" .. "L-09"
  idx: number;                // 0..9
  hue: string;                // accent token name like "L0"
  hex: string;
  eyebrow: string;
  en: string;
  zh: string;
  zhTitle: string;
  thesis: { en: string; zh: string };
  stack: { en: string; zh: string }[];
  visualize: string[];
  explain: { en: string; zh: string };
  reveal: { en: string; zh: string };
  stats: { label: string; value: string }[];
};

export const LAYERS: Layer[] = [
  {
    n: "L-00",
    idx: 0,
    hue: "L0",
    hex: "#5b6cff",
    eyebrow: "L-00 · Foundation",
    en: "Physics Is the Lowest Accessible Layer.",
    zh: "物理是现实最底层。",
    zhTitle: "物理层 · The Physics Layer",
    thesis: {
      en: "Reality begins where causality begins. Beneath every later layer is the same set of fields, forces, and conservation laws — the substrate from which everything else is built.",
      zh: "现实从因果开始。所有更高层级，最终都建立在同一组场、力与守恒律之上——它是其余一切的基底。",
    },
    stack: [
      { en: "Spacetime",       zh: "时空" },
      { en: "Quantum fields",  zh: "量子场" },
      { en: "Gravity",         zh: "引力" },
      { en: "Electromagnetism",zh: "电磁力" },
      { en: "Entropy",         zh: "熵" },
      { en: "Thermodynamics",  zh: "热力学" },
    ],
    visualize: [
      "Quantum fluctuations of the vacuum",
      "Curved spacetime geometry",
      "Field interactions across scales",
      "Expansion of the cosmos",
    ],
    explain: {
      en: "Physics sets the budget for every higher layer: how fast information can travel, how cold a process can run, how much order any system can sustain against the second law.",
      zh: "物理为所有更高层级设定预算：信息能多快传输、过程能多冷、系统能在熵增中维持多少秩序。",
    },
    reveal: {
      en: "Everything that follows emerges from physical constraints.",
      zh: "一切复杂性都来自物理约束。",
    },
    stats: [
      { label: "Age", value: "13.8 Gyr" },
      { label: "Light speed", value: "299,792,458 m/s" },
      { label: "Planck length", value: "1.6 × 10⁻³⁵ m" },
    ],
  },
  {
    n: "L-01",
    idx: 1,
    hue: "L1",
    hex: "#fbbf24",
    eyebrow: "L-01 · Flux",
    en: "Energy Animates Reality.",
    zh: "能量驱动现实。",
    zhTitle: "能量层 · The Energy Layer",
    thesis: {
      en: "Without energy nothing changes. Every observable in the universe — a heartbeat, a city, a model training run — is energy moving through a structure that can route it.",
      zh: "没有能量，一切静止。心跳、城市、AI 训练——本质都是能量在某种可路由的结构中流动。",
    },
    stack: [
      { en: "Stellar fusion",          zh: "恒星聚变" },
      { en: "Chemical bonds",          zh: "化学键能" },
      { en: "Biological metabolism",   zh: "生物代谢" },
      { en: "Electricity",             zh: "电能" },
      { en: "Industrial power",        zh: "工业能源" },
      { en: "AI datacenters",          zh: "AI 数据中心" },
    ],
    visualize: [
      "Galaxies channeling gravity into light",
      "Power grids as nervous systems",
      "GPUs as 21st-century furnaces",
    ],
    explain: {
      en: "Each civilizational leap is measured in joules: agriculture, steam, electricity, nuclear, the AI compute era. Energy is the resource every other layer is implicitly denominated in.",
      zh: "每一次文明跃迁都可用焦耳衡量：农业、蒸汽、电、核能、AI 算力时代。能量是其他一切层级的隐式计价单位。",
    },
    reveal: {
      en: "Civilization is organized energy.",
      zh: "文明是被组织起来的能量。",
    },
    stats: [
      { label: "Sun output",       value: "3.8 × 10²⁶ W" },
      { label: "Global power",     value: "~ 20 TW" },
      { label: "Frontier AI run",  value: "10 – 100 GWh" },
    ],
  },
  {
    n: "L-02",
    idx: 2,
    hue: "L2",
    hex: "#c0caf5",
    eyebrow: "L-02 · Structure",
    en: "Matter Creates Structure.",
    zh: "物质创造结构。",
    zhTitle: "物质层 · The Matter Layer",
    thesis: {
      en: "Matter is energy that has found a stable shape. Atoms, crystals, planets, and chips are all the universe storing structure long enough for higher layers to use it.",
      zh: "物质是能量找到了稳定的形状。原子、晶体、行星、芯片——都是宇宙把结构保存得足够久，以供更高层利用。",
    },
    stack: [
      { en: "Atoms",            zh: "原子" },
      { en: "Molecules",        zh: "分子" },
      { en: "Crystals",         zh: "晶体" },
      { en: "Metals & alloys",  zh: "金属与合金" },
      { en: "Semiconductors",   zh: "半导体" },
      { en: "Infrastructure",   zh: "基础设施" },
    ],
    visualize: [
      "Atoms organizing into chemistry",
      "Megacities as crystallized matter",
      "Silicon lattices carrying thought",
    ],
    explain: {
      en: "Civilization is a matter-arrangement problem. Tools, machines, buildings, chips — every layer above is built by reshuffling the same hundred-odd elements into new geometries.",
      zh: "文明是关于物质排列的工程。工具、机器、建筑、芯片——更高层都是把同样的百余种元素重新排列。",
    },
    reveal: {
      en: "Matter is the hardware substrate of every higher process.",
      zh: "物质层构成了文明的硬件基础。",
    },
    stats: [
      { label: "Elements", value: "118 known" },
      { label: "Atoms in observable universe", value: "~10⁸⁰" },
      { label: "Transistors per H100", value: "80 billion" },
    ],
  },
  {
    n: "L-03",
    idx: 3,
    hue: "L3",
    hex: "#34d399",
    eyebrow: "L-03 · Emergence",
    en: "Life Is Self-Organizing Matter.",
    zh: "生命是自组织物质。",
    zhTitle: "生命层 · The Life Layer",
    thesis: {
      en: "Life begins when matter can store information about itself and use it to keep existing. Biology is chemistry that has discovered memory.",
      zh: "当物质能够存储关于自身的信息并用它来持续存在，生命就此出现。生物学，是发现了记忆的化学。",
    },
    stack: [
      { en: "DNA & RNA",          zh: "DNA / RNA" },
      { en: "Cells",              zh: "细胞" },
      { en: "Nervous systems",    zh: "神经系统" },
      { en: "Organisms",          zh: "生物体" },
      { en: "Ecosystems",         zh: "生态系统" },
      { en: "Biological evolution", zh: "生物演化" },
    ],
    visualize: [
      "Three billion years of replicators",
      "Cells negotiating thermodynamic budgets",
      "Trees of descent across the biosphere",
    ],
    explain: {
      en: "Every cell is a tiny factory running the same code its ancestors ran four billion years ago. Life is the longest-running computational process on Earth.",
      zh: "每个细胞都是一座小型工厂，运行着祖先 40 亿年前就在运行的代码。生命，是地球上运行最久的计算过程。",
    },
    reveal: {
      en: "Biology is information processing through chemistry.",
      zh: "生物本质上是化学形式的信息处理。",
    },
    stats: [
      { label: "First life",         value: "~ 3.7 Gyr ago" },
      { label: "Genes (human)",      value: "~ 20,000" },
      { label: "Species described",  value: "~ 2.16 million" },
    ],
  },
  {
    n: "L-04",
    idx: 4,
    hue: "L4",
    hex: "#a78bfa",
    eyebrow: "L-04 · Cognition",
    en: "Intelligence Predicts Reality.",
    zh: "智能用于预测现实。",
    zhTitle: "智能层 · The Intelligence Layer",
    thesis: {
      en: "Intelligence is the layer where reality starts modeling itself. Brains, language, mathematics, and now AI are different ways the universe compresses its own future.",
      zh: "智能，是现实开始建模自身的那一层。大脑、语言、数学、AI——都是宇宙压缩自身未来的不同方式。",
    },
    stack: [
      { en: "Neurons",           zh: "神经元" },
      { en: "Brains",            zh: "大脑" },
      { en: "Language",          zh: "语言" },
      { en: "Mathematics",       zh: "数学" },
      { en: "Science",           zh: "科学" },
      { en: "Transformers / LLMs", zh: "Transformer / 大模型" },
    ],
    visualize: [
      "Information → Prediction → Intelligence",
      "Synaptic graphs and attention heads as siblings",
      "AI industrializing cognition itself",
    ],
    explain: {
      en: "Brains evolved to compress information, model environments, predict outcomes, and coordinate action. Modern AI does the same job — at industrial scale, on substrates the brain never imagined.",
      zh: "大脑演化的本质是：压缩信息、建模环境、预测结果、协调行动。现代 AI 做的是同一件事——以工业规模，运行在大脑从未想象的载体上。",
    },
    reveal: {
      en: "Intelligence is reality modeling itself.",
      zh: "智能是现实对自身的建模。",
    },
    stats: [
      { label: "Neurons (human)",     value: "~ 86 billion" },
      { label: "Synapses",            value: "~ 10¹⁵" },
      { label: "Frontier model params", value: "10¹² – 10¹³" },
    ],
  },
  {
    n: "L-05",
    idx: 5,
    hue: "L5",
    hex: "#fb7185",
    eyebrow: "L-05 · Coordination",
    en: "Civilization Scales Intelligence.",
    zh: "文明扩展智能规模。",
    zhTitle: "文明层 · The Civilization Layer",
    thesis: {
      en: "Civilization is intelligence with shared memory. Once minds can store knowledge outside themselves and act in concert, a new computational substrate appears — built from people.",
      zh: "文明是拥有共享记忆的智能。当心智能把知识储存在自身之外、并协同行动，一种由人组成的新计算载体便出现了。",
    },
    stack: [
      { en: "Cities",      zh: "城市" },
      { en: "Agriculture", zh: "农业" },
      { en: "Trade & money", zh: "贸易与货币" },
      { en: "Writing",     zh: "文字" },
      { en: "Institutions", zh: "制度" },
      { en: "Internet",    zh: "互联网" },
    ],
    visualize: [
      "Billions of humans forming networks",
      "Markets as a planetary search algorithm",
      "Institutions as long-running processes",
    ],
    explain: {
      en: "Civilizations remember what individuals forget. They run computations no brain alone could finish — building cathedrals, mapping genomes, launching satellites — on the long-running substrate of culture itself.",
      zh: "文明记住了个人会忘记的东西。它运行的是任何单个大脑都无法完成的计算：建造大教堂、绘制基因组、发射卫星——载体是文化本身。",
    },
    reveal: {
      en: "Civilization behaves like a planetary computation system.",
      zh: "文明像一个行星级计算系统。",
    },
    stats: [
      { label: "Humans alive",     value: "~ 8.1 billion" },
      { label: "Cities ≥ 1M",      value: "~ 540" },
      { label: "Internet users",   value: "~ 5.6 billion" },
    ],
  },
  {
    n: "L-06",
    idx: 6,
    hue: "L6",
    hex: "#22d3ee",
    eyebrow: "L-06 · Substrate",
    en: "Information Connects All Layers.",
    zh: "信息连接所有层级。",
    zhTitle: "信息层 · The Information Layer",
    thesis: {
      en: "Information is the only thing that flows through every other layer. DNA, language, mathematics, code, money, AI tokens — all are dialects of the same underlying current.",
      zh: "信息是唯一贯穿所有层级的存在。DNA、语言、数学、代码、货币、AI tokens——都是同一股潜流的不同方言。",
    },
    stack: [
      { en: "DNA",        zh: "DNA" },
      { en: "Language",   zh: "语言" },
      { en: "Mathematics",zh: "数学" },
      { en: "Computers",  zh: "计算机" },
      { en: "Internet",   zh: "互联网" },
      { en: "AI tokens",  zh: "AI tokens" },
      { en: "Markets",    zh: "市场" },
    ],
    visualize: [
      "Information streams across satellites and continents",
      "Datacenters as cathedrals of compression",
      "Markets as low-bitrate global consensus",
    ],
    explain: {
      en: "Modern civilization is increasingly defined by what it can compute, compress, communicate, and predict. The information layer is becoming the load-bearing one.",
      zh: "现代文明越来越由它的计算、压缩、通信与预测能力定义。信息层正在成为承重层。",
    },
    reveal: {
      en: "Reality may fundamentally be informational.",
      zh: "现实可能本质上是信息性的。",
    },
    stats: [
      { label: "Datasphere 2025", value: "~ 175 ZB" },
      { label: "Internet bandwidth", value: "~ 1 Pbps inter-region" },
      { label: "Tokens/sec global LLM serving", value: "10⁸ – 10⁹" },
    ],
  },
  {
    n: "L-07",
    idx: 7,
    hue: "L7",
    hex: "#f0abfc",
    eyebrow: "L-07 · Recursion",
    en: "Reality Begins Simulating Itself.",
    zh: "现实开始模拟自身。",
    zhTitle: "模拟层 · The Simulation Layer",
    thesis: {
      en: "When information becomes cheap enough, civilizations begin to run reality in simulation before running it in matter. The simulation is no longer a model of the world — it becomes a higher-order region of it.",
      zh: "当信息足够便宜，文明开始先在模拟中运行现实，再在物质中执行。模拟不再只是世界的模型，而成为它的一个更高阶区域。",
    },
    stack: [
      { en: "Climate simulations",     zh: "气候模拟" },
      { en: "Digital twins",           zh: "数字孪生" },
      { en: "AI world models",         zh: "AI 世界模型" },
      { en: "Game engines",            zh: "游戏引擎" },
      { en: "VR worlds",               zh: "VR 世界" },
      { en: "Synthetic societies",     zh: "合成社会" },
      { en: "Agent simulations",       zh: "Agent 模拟" },
    ],
    visualize: [
      "Civilization rehearsing the future",
      "Worlds inside worlds, addressable as files",
      "Decisions tested in silico before they hit reality",
    ],
    explain: {
      en: "Wars, vaccines, chips, climate policy, market structures — increasingly first run inside compute, only then deployed into the physical world. The simulation layer is becoming a place where the future is actually written.",
      zh: "战争、疫苗、芯片、气候政策、市场结构——越来越多先在算力中演练，再投放到现实世界。模拟层正在成为未来真正被书写的地方。",
    },
    reveal: {
      en: "Simulation becomes a higher-order reality layer.",
      zh: "模拟开始成为更高层现实。",
    },
    stats: [
      { label: "Largest climate model", value: "10¹⁵ FLOPs / step" },
      { label: "AAA game-engine triangles", value: "10⁸ per frame" },
      { label: "Synthetic data 2030 (est.)", value: "> 60% of training" },
    ],
  },
  {
    n: "L-08",
    idx: 8,
    hue: "L8",
    hex: "#86efac",
    eyebrow: "L-08 · Self-modification",
    en: "Reality Creates Artificial Intelligence.",
    zh: "现实创造人工智能。",
    zhTitle: "AI 层 · The AI Layer",
    thesis: {
      en: "AI is not an outside force arriving in civilization. It is what happens when physics, energy, matter, life, intelligence, and civilization stack high enough to recursively redesign their own foundations.",
      zh: "AI 不是从外部降临到文明的事物。它是物理、能量、物质、生命、智能与文明叠到一定高度后，递归地重构自身基底时发生的事。",
    },
    stack: [
      { en: "Physics",       zh: "物理" },
      { en: "Semiconductors",zh: "半导体" },
      { en: "Datacenters",   zh: "数据中心" },
      { en: "The internet",  zh: "互联网" },
      { en: "Civilization's writing",   zh: "文明的全部书写" },
      { en: "Transformers",  zh: "Transformer" },
      { en: "Frontier models", zh: "前沿大模型" },
    ],
    visualize: [
      "Universe → Matter → Life → Intelligence → Civilization → AI",
      "Recursive intelligence loops",
      "Compute as a new geological force",
    ],
    explain: {
      en: "AI is the first technology where the stack starts using itself as input: civilization's writing becomes training data, intelligence becomes infrastructure, and the system begins to optimize the conditions of its own existence.",
      zh: "AI 是第一项把整条技术栈作为自身输入的技术：文明的书写成为训练数据，智能本身成为基础设施，系统开始优化自身存在的条件。",
    },
    reveal: {
      en: "AI may be reality learning to redesign itself.",
      zh: "AI 可能是现实开始重构自身。",
    },
    stats: [
      { label: "Frontier model FLOPs", value: "10²⁵ – 10²⁶" },
      { label: "Global AI capex 2025", value: "$500 B+" },
      { label: "Models > GPT-3 scale",  value: "100s" },
    ],
  },
  {
    n: "L-09",
    idx: 9,
    hue: "L9",
    hex: "#fde68a",
    eyebrow: "L-09 · Awareness",
    en: "Reality Becomes Self-Aware.",
    zh: "现实开始拥有自我认知。",
    zhTitle: "元现实层 · The Meta-Reality Layer",
    thesis: {
      en: "Above every layer the universe has so far built, a recursive question is opening: is consciousness an accident of the lower layers — or the reason for them?",
      zh: "在宇宙至今构建的所有层级之上，一个递归的问题正在打开：意识是底层的偶然——还是它们存在的理由？",
    },
    stack: [
      { en: "Consciousness",             zh: "意识" },
      { en: "Simulation hypothesis",     zh: "模拟假说" },
      { en: "Recursive intelligence",    zh: "递归智能" },
      { en: "Meta-cognition",            zh: "元认知" },
      { en: "Civilizations modeling themselves", zh: "文明对自身的建模" },
      { en: "AI observing humanity",     zh: "AI 观察人类" },
      { en: "Humanity observing the universe", zh: "人类观察宇宙" },
    ],
    visualize: [
      "Recursive mirrors extending inward and outward",
      "The cosmos as a hierarchy of observers",
      "Each upper layer becoming a sense organ for the one below",
    ],
    explain: {
      en: "Stars produced atoms. Atoms produced chemistry. Chemistry produced life. Life produced minds. Minds produced civilizations. Civilizations are now producing AI. From here, the universe begins to interrogate itself.",
      zh: "恒星造出原子。原子造出化学。化学造出生命。生命造出心智。心智造出文明。文明正在造出 AI。从这里开始，宇宙开始对自身提问。",
    },
    reveal: {
      en: "Civilization may be the universe becoming conscious.",
      zh: "文明可能是宇宙的自我意识。",
    },
    stats: [
      { label: "Observers required",    value: "≥ 1" },
      { label: "Layers below this one", value: "9" },
      { label: "Open questions",        value: "all of them" },
    ],
  },
];
