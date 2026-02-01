## TravelTrucks — Camper Rental Catalog

TravelTrucks is a small marketplace/catalog web app for renting campers, built with Next.js (App Router) and TypeScript. The app lets users browse available campers, apply filters, view camper details, and mark favorites. Data is fetched from an external mock API (a MockAPI endpoint is used in the codebase by default).

Quick summary:

- Stack: Next.js (App Router), React, TypeScript, Zustand (state management), Axios
- Styling: CSS Modules (component-scoped styles)
- Notifications: react-hot-toast
- Date picker: react-datepicker

Main features

- Browse paginated catalog of campers
- Filter by location, camper form (type) and equipment
- View camper details with gallery and reviews
- Mark/unmark favorites (persisted to localStorage)
- Simple booking form (local, no payments)

Key files and structure

- `app/layout.tsx` — global layout, header and toast provider
- `app/page.tsx` — home page (uses `Home` component)
- `app/catalog/page.tsx` — catalog page
- `components/` — UI components: `Catalog`, `CamperCard`, `Filters`, `Details`, `BookingForm`, etc.
- `store/useCamperStore.ts` — Zustand store for loading campers, pagination and favorites
- `store/useFitersStore.ts` — local store for filters
- `types/camper.ts` — TypeScript types for `Camper`

Installation and local run

1. Install Node.js (recommended Node 18+ or current LTS).
2. Install dependencies:

```bash
npm install
# or
pnpm install
# or
yarn
```

3. Start development server:

```bash
npm run dev
# open http://localhost:3000
```

4. Build and run production:

```bash
npm run build
npm start
```

Environment variables and API
The project uses a mock API URL in `store/useCamperStore.ts`:
`https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers`.
To use your own API, replace the `API_URL` constant in `useCamperStore.ts` or move it to an environment variable (for example `NEXT_PUBLIC_API_URL`) and read it via `process.env.NEXT_PUBLIC_API_URL`.

Useful npm scripts

- `npm run dev` — start dev server
- `npm run build` — build the app
- `npm start` — start production server
- `npm run lint` — run ESLint

Notes & suggestions

- Move `API_URL` to `.env` (`NEXT_PUBLIC_API_URL`) and update the store to read from env for easier configuration across environments.
- Add unit and integration tests (Jest + React Testing Library) for critical components and stores.
- Add CI (GitHub Actions) to run lint and build on push/PR.

If you want, I can:

- Extract `API_URL` into a `.env` / `.env.example` and update `useCamperStore.ts` to use `process.env.NEXT_PUBLIC_API_URL`.
- Add a short `README` section showing how to deploy to Vercel and what env variables to set.

---

Repository: `traveltrucks` (branch `master`)
