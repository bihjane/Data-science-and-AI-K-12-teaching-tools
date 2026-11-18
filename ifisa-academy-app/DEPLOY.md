# Put the IFISA app online

1. Go to https://app.netlify.com/drop and sign in (free).
2. Drag this whole IFISA_App_Web folder onto the page. You get a live link in about a minute.
3. In Netlify: Domain settings > Add a domain > app.ifisaacademy.org. Then add the CNAME record Netlify shows you at your domain provider.
4. To update later: Deploys > drag the new folder again.

## Turn on Study Buddy, AI quizzes and lesson translation outside Claude
1. Create a Claude API key at https://console.anthropic.com and add billing.
2. Create a free Cloudflare account. In the study-buddy-worker folder run:
   npx wrangler deploy
   npx wrangler secret put ANTHROPIC_API_KEY
3. Copy the worker address (https://ifisa-study-buddy.<you>.workers.dev) into config.json:
   { "tutorUrl": "https://ifisa-study-buddy.<you>.workers.dev" }
4. Drag the folder to Netlify again.

Keep unlock_codes.csv and the sales folder private. Do not put this folder in a public GitHub repository: it contains the paid course packs.

## Turn on App insights (usage counts and survey answers)
1. In the study-buddy-worker folder run:
   npx wrangler kv namespace create STATS   (paste the id it prints into wrangler.toml)
   npx wrangler secret put ADMIN_KEY        (choose a private key only you know)
   npx wrangler deploy
2. Make sure config.json has your worker address as tutorUrl.
3. In the app, sign in as a teacher, open My space, then App insights, and type your admin key.
Survey answers can be downloaded as a CSV and added to the "IFISA App - Survey Responses" Google Sheet (File > Import > Append).
