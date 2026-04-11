

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/b4c134ec-cf1b-4fac-9f2e-cd20c41f562c

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Access from your phone (local network)

1. Make sure your phone and computer are on the same Wi-Fi network.
2. Start the dev server:
   `npm run dev`
3. In the terminal output, look for the `Network` URL (Vite prints both `Local` and `Network` when `host: true` is enabled).
4. If you don't see a network URL, use your computer's LAN IP and open it from your phone:
   - Windows LAN IP: run `ipconfig` and use the `IPv4 Address` from your Wi-Fi adapter
   - Then open: `http://<YOUR_IPV4_ADDRESS>:3000`

If you still get "refused to connect", you likely need to allow inbound connections in your Windows firewall for port `3000`.

## Fallback: use localtunnel

If local network access fails, run:

`npm run tunnel`

Then open the `https://...` URL printed in your terminal on your phone.
"# ec-creative-portifolio" 
"# ec-creative-portifolio" 
