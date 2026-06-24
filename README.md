# Wise.com Frontend Clone – Project Report

A high-performance, pixel-perfect clone of the Wise.com homepage. This project was built to demonstrate proficiency in modern frontend engineering, focusing on clean architecture, complex UI state management, responsiveness, and performance.

### Links
- **Live Deployment:** `https://wise-com-webpage-clone.vercel.app/`
- **Source Code:** `https://github.com/adeshsingh222/Wise.com-webpage-clone`

---

## 1. Technology Choices

I opted for a modern, industry-standard stack to ensure maximum performance and developer experience:

- **Next.js 15 (App Router):** Chosen for its robust architecture, server-side rendering capabilities (which drastically improves LCP and SEO), and optimized image handling.
- **React 19:** Leveraged for building modular, functional components with complex local state management.
- **Tailwind CSS v4:** Allowed for rapid styling, fluid typography, and built-in responsiveness without the bloat of traditional CSS pre-processors. 
- **Framer Motion:** Used to orchestrate smooth, hardware-accelerated micro-animations (like the calculator skeleton loaders and layout shifts) that make the UI feel premium and alive.
- **Lucide React:** Chosen for clean, lightweight, and scalable SVG icons.

*Note: No external component libraries (like Material UI or Radix) were used. Complex interactive elements like the custom currency dropdowns and modal systems were built from scratch to demonstrate core engineering skills.*

---

## 2. Project Structure

The project follows a feature-based folder structure, which ensures high maintainability and scalability as the codebase grows:

```
src/
├── app/
│   ├── layout.tsx         # Global layout and font definitions
│   ├── page.tsx           # Main assembly of the homepage
│   └── globals.css        # Tailwind directives and CSS variables
├── components/
│   ├── calculator/        # Complex stateful widgets (CurrencyConverter, Dropdowns)
│   ├── home/              # Presentational sections (Hero, Features, Testimonials)
│   ├── layout/            # Shared structural components (Navbar, Footer)
│   └── ui/                # Reusable atoms (ModalDrawer)
```

---

## 3. Maintainability, Performance, and UX

### Maintainability & Architecture
- **Component Modularity:** The monolithic homepage was broken down into 10+ independent section components (`TestimonialSection`, `FeaturesGrid`, etc.).
- **Localized State:** Rather than introducing unnecessary global state (like Redux or Zustand), state is kept localized. The `CurrencyConverter` acts as a single source of truth for its child components, orchestrating dependent logic (amounts, fees, active currencies) cleanly and preventing infinite render loops.
- **Centralized Assets:** Reusable configuration and static data (like the currency rate tables and testimonial reviews) are abstracted out of the JSX to keep render functions clean.
- **Dynamic Interactions:** Navigation links feature complex interactions (such as the Framer Motion-powered "Personal" mega-menu dropdown) to demonstrate high-fidelity UI recreation, while authentication flows are left static to focus on the core layout and calculator functionality.

### Performance Optimizations
- **Next/Image & CDNs:** All flags and complex graphics are served via optimized CDNs (Flagcdn, Unsplash) or statically generated.
- **Skeleton UI:** Instead of blocking the UI or using jarring spinners, the calculator utilizes a pulsing Skeleton UI during "network" requests, ensuring layout stability and reducing Cumulative Layout Shift (CLS).
- **CSS over JS:** Heavy lifting for layouts (like grids and flexboxes) is done strictly via Tailwind classes, leaving JavaScript to handle only interaction and logic.

### Seamless UX & Responsiveness
- **Mobile-First Design:** The application scales flawlessly from 320px mobile screens to 4K monitors. 
- **Adaptive Components:** The custom `ModalDrawer` component intelligently acts as a centered, focused modal on desktop screens, but seamlessly transforms into a swipeable bottom-sheet drawer on mobile devices, mimicking native app behaviors.
- **Fluid Typography:** Tailwind's `md:` and `lg:` breakpoints were heavily utilized to ensure text hierarchy remains legible and perfectly proportioned across all devices.

---

## 4. Challenges Faced

**Complex Interdependent State Management**
The biggest technical hurdle was recreating the `CurrencyConverter` widget. When a user changes the source currency, the target currency, or the amount, multiple things need to happen simultaneously: fees must be recalculated, volume discounts evaluated, exchange rates updated, and the UI must trigger a "loading" state. 
* **Solution:** I abstracted the calculation logic into a `useEffect` hook that listens to changes in currency dependencies. It triggers a simulated network delay and coordinates conditional rendering with Tailwind skeleton loaders to process the math without locking up the main thread or causing visual jank.

**Accessible Custom Dropdowns**
Building a custom dropdown menu that looks identical to native inputs but behaves like a searchable modal was challenging.
* **Solution:** I implemented a custom React hook to detect "clicks outside" of the dropdown to close it securely. I also ensured that the input field within the dropdown auto-focuses on open, improving keyboard navigability.

---

## 5. Improvements Over the Original Design

1. **Enhanced Micro-interactions:** While the original site is highly static in some areas, I introduced subtle `transform hover:scale` and `transition-colors` interactions on the feature grids and cards to provide better tactile feedback for desktop mouse users.
2. **Simplified Layout Shifts:** I noticed the original site had minor layout shifts when certain promotional banners appeared. I used `<AnimatePresence>` from Framer Motion to ensure high-volume discount banners in the calculator smoothly push content down rather than snapping violently.
3. **Optimized Padding Rhythm:** I standardized the vertical padding (utilizing a strict `24-unit` rhythm) between adjacent sections with identical background colors, preventing the "double gap" visual bugs occasionally found in deeply nested DOM trees.
