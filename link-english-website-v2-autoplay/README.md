# Link English — Website Starter

## Included
- `index.html` — responsive landing page, conversation hero, Google Evaluation label, six-course carousel, WhatsApp calls to action and sign-up banner
- `signup.html` — student registration interface
- `login.html` — student/staff sign-in interface
- `styles.css`, `login.css` — responsive styling
- `script.js` — mobile navigation, program carousel and WhatsApp links
- `signup.js`, `login.js` — front-end form handling
- `assets/` — Link English logo and generated conversation photo

## Run locally
Open `index.html` in a browser, or use VS Code with the Live Server extension.

## Important setup before publishing
1. The official Link English WhatsApp number is configured in `script.js` as `258845441607`. All WhatsApp buttons open `https://wa.me/258845441607` with a relevant pre-filled message. You can update this single setting if the number changes.
2. The sign-up and login pages are currently front-end interfaces. They do not create accounts, authenticate users, or store passwords. Connect them to the school's authentication backend (such as Supabase Auth) before real students use them. Do not store passwords in browser storage or expose a Supabase service-role key in client-side code.
3. Add the official Google Business Profile/review URL if you want the Google Evaluation label to link to reviews. No numerical rating is claimed on the page.
4. Verify course descriptions, contact details and policies before publishing.
5. Test the website on mobile, tablet and desktop.

## Brand
Navy blue, white and golden yellow. The administrator display name should be **Link English**.

### Program carousel
The program carousel advances automatically every 4 seconds and loops back to the first course. It pauses while a visitor hovers over it, focuses it with the keyboard, touches/swipes it, or switches browser tabs. Visitors can still use the arrows, swipe, or select a dot. Automatic movement respects the device's reduced-motion accessibility setting.
