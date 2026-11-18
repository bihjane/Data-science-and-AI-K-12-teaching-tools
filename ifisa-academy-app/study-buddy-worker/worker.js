// Study Buddy proxy for the IFISA app (Cloudflare Worker).
// Keeps your Claude API key secret. The app sends {messages}, this returns {text}.
const ALLOWED = ["https://app.ifisaacademy.org", "capacitor://localhost", "https://localhost", "http://localhost"];
const SYSTEM = "You are Study Buddy inside the IFISA Academy app for learners aged 5 to 18. Use simple, kind words. Keep answers short. Give hints and guiding questions rather than full answers. Stay on learning. Never ask for personal details. If a learner seems upset or unsafe, suggest talking to a trusted adult. When asked for JSON, reply with JSON only.";
export default {
  async fetch(req, env) {
    const origin = req.headers.get("Origin") || "";
    const allow = ALLOWED.includes(origin) || origin.endsWith(".netlify.app") ? origin : ALLOWED[0];
    const cors = { "Access-Control-Allow-Origin": allow, "Access-Control-Allow-Methods": "POST, OPTIONS", "Access-Control-Allow-Headers": "Content-Type" };
    const cors2 = { ...cors, "Access-Control-Allow-Headers": "Content-Type, x-admin-key", "Access-Control-Allow-Methods": "GET, POST, OPTIONS" };
    if (req.method === "OPTIONS") return new Response(null, { headers: cors2 });
    const path = new URL(req.url).pathname;
    // Anonymous usage counts and survey answers (needs a KV namespace bound as STATS)
    if (path === "/track" && req.method === "POST" && env.STATS) { const d = await req.json().catch(() => null); if (d && /^d[a-z0-9]{6,30}$/.test(d.dev || "")) { const keep = { dev: d.dev, role: String(d.role || "").slice(0, 20), ages: String(d.ages || "").slice(0, 8), region: String(d.region || "").slice(0, 40), lang: String(d.lang || "").slice(0, 5), first: d.first, last: new Date().toISOString(), days: +d.days || 0, lessons: +d.lessons || 0, photos: +d.photos || 0, games: +d.games || 0 }; await env.STATS.put("u:" + d.dev, JSON.stringify(keep)); } return Response.json({ ok: true }, { headers: cors2 }); }
    if (path === "/survey" && req.method === "POST" && env.STATS) { const d = await req.json().catch(() => null); if (d) { const t = (k, n) => String(d[k] || "").slice(0, n); const row = { date: new Date().toISOString(), role: t("role", 20), ages: t("ages", 8), region: t("region", 40), lang: t("lang", 5), rate: Math.max(0, Math.min(5, +d.rate || 0)), like: t("like", 400), hard: t("hard", 400), add: t("add", 400), rec: t("rec", 6), page: t("page", 40) }; await env.STATS.put("s:" + Date.now() + ":" + Math.random().toString(36).slice(2, 7), JSON.stringify(row)); } return Response.json({ ok: true }, { headers: cors2 }); }
    if (path === "/stats" && env.STATS) { if (!env.ADMIN_KEY || req.headers.get("x-admin-key") !== env.ADMIN_KEY) return new Response("Unauthorized", { status: 401, headers: cors2 });
      const all = async (prefix) => { const out = []; let cursor; do { const l = await env.STATS.list({ prefix, cursor }); for (const k of l.keys) { const v = await env.STATS.get(k.name); if (v) out.push(JSON.parse(v)); } cursor = l.list_complete ? null : l.cursor; } while (cursor); return out; };
      return Response.json({ usage: await all("u:"), survey: await all("s:") }, { headers: cors2 }); }
    if (req.method !== "POST") return new Response("Not found", { status: 404, headers: cors });
    let body; try { body = await req.json(); } catch { return Response.json({ text: "Bad request" }, { status: 400, headers: cors }); }
    const messages = (body.messages || []).slice(-12).map(m => ({ role: m.role === "assistant" ? "assistant" : "user", content: String(m.content).slice(0, 4000) }));
    if (!messages.length) return Response.json({ text: "" }, { headers: cors });
    const r = await fetch("https://api.anthropic.com/v1/messages", { method: "POST",
      headers: { "x-api-key": env.ANTHROPIC_API_KEY, "anthropic-version": "2023-06-01", "content-type": "application/json" },
      body: JSON.stringify({ model: env.MODEL || "claude-haiku-5-5", max_tokens: 900, system: SYSTEM, messages }) });
    if (!r.ok) return Response.json({ text: "Study Buddy is resting. Please try again soon." }, { status: 200, headers: cors });
    const j = await r.json();
    return Response.json({ text: (j.content || []).filter(c => c.type === "text").map(c => c.text).join("") }, { headers: cors });
  } };
