# Vistaar Exports — website

Website for **vistaarexports.com**. Plain HTML/CSS/JS — no build step.

## Files
- `index.html` — all page content (text, products, contact details)
- `styles.css` — colours, fonts, layout
- `script.js` — mobile menu + enquiry form (sends enquiry to WhatsApp)
- `favicon.svg` — browser tab icon

## Quick edits
Open `index.html` and search for these placeholders:
- `[YOUR ADDRESS]` — office address (contact section)
- `[Sea / Air]` — shipping mode (hero box)
- `[IF APPLICABLE]` — RCMC number (footer)
- `[add: WHO-GMP if applicable]` and `[COPP, GMP certificate, product dossier]` — quality section

To add a product: in `index.html`, copy one `<article class="product">` block, change the text, and add the product to the form's `<select>` list.

WhatsApp number is set in `script.js` (`WHATSAPP_NUMBER`) and in the `wa.me/917057507200` links in `index.html`.
