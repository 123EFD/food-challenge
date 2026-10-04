_This is a submission for the Hacktoberfest Challenge: Build for a Friend (Open-Source AI at its Core) & Frontend Challenge - Comfort Food Edition_

# 🇲🇾 Rasa Malaysia: The Soul of Malaysian Comfort Food & The "Anything Lah!" AI Decider

## What I Built

**Rasa Malaysia** is an interactive culinary portfolio and transit-oriented food guide dedicated to celebrating the authentic comfort food of Malaysia — from steaming bowls of Penang Asam Laksa and rich Curry Mee to fragrant Nasi Lemak and wok-fired Char Kway Teow.

For the **"Build for a Friend"** challenge, I extended this application with an open-source AI feature designed for a universal problem in every Malaysian friendship group:

### 🎯 The "Anything Lah!" Indecision Destroyer (`/anything-lah`)
We all have that one friend who **ALWAYS** says *"Anything lah, you pick"* whenever you ask what to eat for lunch — only to reject every single suggestion you make because they are secretly tired, broke, don't want to sweat under the hot sun, or have an unarticulated craving.

Instead of arguing for 30 minutes, this tool lets you type their raw complaints (or pick quick emotional vibe chips), passes it through an **in-browser open-weight neural transformer**, and hands down an uncompromising, definitive food verdict paired with an **Anti-Excuse Defense Card** to shut down their complaints.

---

### ✨ Key Features

1. **In-Browser Open-Source Neural Matching (`Xenova/all-MiniLM-L6-v2`)**:
   - Converts your friend's natural language vents (e.g., *"I'm exhausted from study, it's raining outside, and I don't want to walk far"*) into 384-dimensional dense semantic embeddings using `@huggingface/transformers`.
   - Computes real-time cosine similarity against rich multi-attribute profiles of Malaysian dishes and hawker stalls.
2. **The "Laziness vs. Comfort" Scoring Engine**:
   - Factoring in physical transit realities: distance from LRT/MRT platforms, covered walkway availability (rain/sun protection), and air-conditioned dining sanctuaries.
3. **The Anti-Excuse Defense (Roast Card)**:
   - Arms you with counters against their classic excuses:
     - *Excuse: "Too far lah!"* → *Counter: "There's a continuous covered walkway from the LRT station, you won't even melt."*
     - *Excuse: "Too expensive lah!"* → *Counter: "It's literally RM8, you spent more on boba yesterday."*
4. **Instant WhatsApp Share Action**:
   - Generates a pre-formatted Manglish verdict message ready to paste directly into your group chat: *"Official AI Verdict: We are going to Foo Hing Dim Sum! LRT Taipan, covered walkway, only RM10. Stop saying anything lah!"*
5. **Transit-Oriented Comfort Food Blog (`/blog`)**:
   - Complete guides for food stalls accessible via LRT Kelana Jaya line, MRT, and RapidKL feeder buses.
   - Live sticky note commuter toolkit linking to *myrapid PULSE, Rapid On Demand, and live bus tracking*.
   - Interactive *Borak-borak Corner* comment board.
6. **Bespoke Pure Vanilla CSS Glassmorphism**:
   - Hand-crafted CSS variables using a traditional Malaysian palette (*Merah Bunga Raya, Kuning Telur, Hijau Daun*).
   - Zero CSS framework bloat, with dark/light mode toggle and mobile responsive navigation.

---

## Why Open-Source AI Matters for This Project

The core AI engine of this project relies entirely on **open-source, open-weight innovation** running client-side in the browser:

1. **Runs 100% Offline in Underground Transit Tunnels**:
   When commuters and students are riding the LRT or MRT underground where cellular data drops to zero, the model continues running seamlessly inside WebAssembly/WebGPU memory. Your friend can't use "no internet" as an excuse not to decide.
2. **Keeps Personal Data & Location Off Cloud Servers**:
   Your friend's daily whereabouts, financial complaints, and personal moods never touch an external third-party server. Everything is inferred locally on the device.
3. **Zero Token Cost & Freedom from Commercial APIs**:
   Commercial closed-source APIs charge per token and impose rate limits. By using open-weight models (`all-MiniLM-L6-v2`), this tool costs **RM0 / $0 to run forever**, making it truly accessible for students and everyday commuters.
4. **Inspectable & Swappable Architecture**:
   Built on the open `@huggingface/transformers` ecosystem, the model pipeline can be easily swapped for lighter quantized ONNX weights or fine-tuned on Malaysian Manglish slang datasets without vendor lock-in.

---

## Demo

- 🌐 **Live Website**: [Insert your deployment URL here, e.g. Vercel / Cloud Run]
- 💻 **Source Code**: [Insert your GitHub Repository URL here]

### 📸 Key Pages:
- `/` - Homepage with dynamic 5s dish cross-fades and smooth horizontal dish carousel.
- `/anything-lah` - The "Anything Lah!" AI Indecision Destroyer.
- `/blog` - Commuter food guide with transit directions and sticky notes.

---

## Journey & Tech Stack

### 🛠️ Architecture
- **Framework**: [Next.js (App Router)](https://nextjs.org/) + **React 19** + **TypeScript**
- **AI Core**: `@huggingface/transformers` with ONNX Web runtime (`Xenova/all-MiniLM-L6-v2`) + local semantic fallback
- **Styling**: Pure **Vanilla CSS** with glassmorphism backdrop-filters and responsive media queries
- **Typography**: Google Fonts (*Share Tech Mono*)
- **License**: MIT License

### 💡 What I Learned
- Running neural transformers in the browser via WebAssembly is now fast enough for real-time interactive UX without requiring a heavy Python/PyTorch backend.
- Combining semantic vector similarity with deterministic constraint filters (walk time, covered walkways, price level) produces far more accurate real-world recommendations than prompting alone.

---

*License: MIT*
