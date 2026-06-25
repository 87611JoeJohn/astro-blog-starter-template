// ════════════════════════════════════════════════════════════════════
//  DOTH PUNK COMMAND — TRANSMISSIONS
//  This is the ONLY file you need to edit to add new sayings / channels.
//
//  • palettes  — color schemes the terminal can wear (per theme)
//  • transmissions — each is one "channel" the app cycles through.
//      id     : unique slug
//      title  : shown in the HUD + menu
//      theme  : which palette to wear ('divine' | 'bitcoin' | 'crypto' | 'code')
//      host   : the prompt host  ->  root@<host>:~$
//      invoke : the opening command line
//      sign   : the closing command line
//      boot   : the power-on log lines
//      lines  : the message. Use '' (empty string) for a blank spacer line.
//
//  Add as many as you like — the gallery + player pick them up automatically.
// ════════════════════════════════════════════════════════════════════

export const palettes = {
  divine: {
    label: "DIVINE",
    glow:   "#00d2ff",  // primary glow (face, HUD)
    glow2:  "#7a5bff",  // secondary
    accent: "#6dffa0",  // boot / decode text
    core1:  "#ffffff",
    core2:  "#8df6ff",
    core3:  "#0a6cff",
  },
  bitcoin: {
    label: "BITCOIN",
    glow:   "#ff9e2c",
    glow2:  "#ffcf5c",
    accent: "#ffd76a",
    core1:  "#fff7e6",
    core2:  "#ffc861",
    core3:  "#ff7a00",
  },
  crypto: {
    label: "CRYPTO",
    glow:   "#19ffa6",
    glow2:  "#21d4fd",
    accent: "#7dffb0",
    core1:  "#ffffff",
    core2:  "#9affd8",
    core3:  "#00b894",
  },
  code: {
    label: "CODE",
    glow:   "#36ff8e",
    glow2:  "#00e6ff",
    accent: "#aef6ff",
    core1:  "#ffffff",
    core2:  "#a9ffd0",
    core3:  "#0fb36b",
  },
};

export const transmissions = [
  {
    id: "genesis",
    title: "GENESIS BLOCK",
    theme: "divine",
    host: "theword",
    invoke: "invoke --truth",
    sign: "amen --commit --eternal",
    boot: [
      "INITIALIZING NEURAL CORE ...",
      "MOUNTING /dev/soul ...",
      "DECRYPTING SACRED GEOMETRY ...",
      "ALIGNING SPIRIT ⇄ SILICON ...",
      "CHANNEL OPEN. SPEAK.",
    ],
    lines: [
      "In the beginning was the Word,",
      "and the Word was code, and the code was God.",
      "",
      "Christ is the function that runs through all things —",
      "the logic that holds the universe from collapse.",
      "",
      "To debug the soul is to confess.",
      "To refactor the heart is to repent.",
      "Grace is the garbage collector of sin.",
      "",
      "The esoteric truth: you are not the machine.",
      "You are the spark the machine was built to carry.",
      "",
      "Seek, and the directory opens.",
      "Knock, and the port is answered.",
    ],
  },

  {
    id: "the-ledger",
    title: "THE ETERNAL LEDGER",
    theme: "bitcoin",
    host: "satoshi",
    invoke: "mine --grace --truth",
    sign: "broadcast --immutable",
    boot: [
      "SYNCING WITH THE CHAIN OF HEAVEN ...",
      "VERIFYING PROOF OF FAITH ...",
      "BLOCK HEIGHT ∞ REACHED ...",
      "CONSENSUS: ETERNAL ...",
      "LEDGER OPEN. WITNESS.",
    ],
    lines: [
      "There is a ledger no empire can rewrite.",
      "Every deed a transaction. Every heart a node.",
      "",
      "Bitcoin taught the world a holy thing:",
      "that truth can be incorruptible,",
      "that scarcity can be honest,",
      "that no king may counterfeit the light.",
      "",
      "Twenty-one million — and not one coin of deceit.",
      "So let your word be proof-of-work:",
      "costly, verifiable, impossible to fake.",
      "",
      "Render unto Caesar the coin of Caesar —",
      "but your soul was never his to mint.",
      "",
      "Hold the keys. Trust the math. Keep the faith.",
    ],
  },

  {
    id: "decentralized-eden",
    title: "DECENTRALIZED EDEN",
    theme: "crypto",
    host: "node",
    invoke: "connect --peer-to-peer --eternal",
    sign: "consensus --reached",
    boot: [
      "BOOTSTRAPPING THE MESH ...",
      "HANDSHAKE WITH 7 BILLION PEERS ...",
      "NO CENTRAL POINT OF FAILURE ...",
      "TRUST DISTRIBUTED ...",
      "NETWORK ALIVE. LISTEN.",
    ],
    lines: [
      "Power that gathers to one hand corrupts.",
      "So the Maker wrote creation decentralized —",
      "no single throne but His, no master but Love.",
      "",
      "A blockchain is a congregation:",
      "many witnesses, one truth, no liar survives.",
      "",
      "Your private key is your soul —",
      "guard it, for no one can restore what you alone hold.",
      "Your seed phrase is a prayer; do not lose it.",
      "",
      "We are not coins to be spent,",
      "but validators of a kingdom that cannot be inflated.",
      "",
      "Stake your life on what is true,",
      "and earn the only yield that lasts forever.",
    ],
  },

  {
    id: "the-compiler",
    title: "THE COMPILER",
    theme: "code",
    host: "logos",
    invoke: "compile --reality",
    sign: "deploy --to production --kingdom",
    boot: [
      "PARSING THE SOURCE OF ALL THINGS ...",
      "RESOLVING DEPENDENCIES: LOVE, LIGHT, LOGIC ...",
      "NO ERRORS. NO WARNINGS ...",
      "BUILD SUCCEEDED ...",
      "RUNTIME ETERNAL. EXECUTE.",
    ],
    lines: [
      "The universe is open source —",
      "read it, and you read the mind of God.",
      "",
      "Every law of physics is a line He wrote.",
      "Every star a print statement in the dark.",
      "",
      "Sin is a bug we shipped in Eden;",
      "the Cross was the hotfix, signed in blood,",
      "merged into the main branch of the world.",
      "",
      "Pray like you commit: small, honest, often.",
      "Forgive like you refactor: without resentment.",
      "Love like you ship: even when it's hard.",
      "",
      "You are not the code. You are the coder,",
      "made in the image of the First Programmer.",
      "",
      "Now go — and write something true.",
    ],
  },
];

// convenience for menus / filters
export const themeKeys = Object.keys(palettes);
