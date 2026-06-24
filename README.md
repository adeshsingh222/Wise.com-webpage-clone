# Wise.com Frontend Clone – Project Report

A high-performance, pixel-perfect clone of the Wise.com homepage. This project was built to demonstrate proficiency in modern frontend engineering, focusing on clean architecture, complex UI state management, responsiveness, and performance.

### Links
- **Live Deployment:** `https://wise-com-webpage-clone.vercel.app/`
- **Source Code:** `https://github.com/adeshsingh222/Wise.com-webpage-clone`

---

## 1. Technology Choices

I opted for a modern, industry-standard stack to ensure maximum performance and developer experience:

- **Next.js 15 (App Router):** Chosen for its robust architecture, server-side rendering capabilities (which drastically improves LCP and SEO), and optimized image handling.
- **React 19:** Leveraged for building modular, functional components with complex local state management and global `Context API`.
- **Tailwind CSS v4:** Allowed for rapid styling, fluid typography, and built-in responsiveness without the bloat of traditional CSS pre-processors. 
- **Framer Motion:** Used to orchestrate smooth, hardware-accelerated micro-animations, bidirectional sliding mobile menus, and layout shifts that make the UI feel premium and alive.
- **Lucide React:** Chosen for clean, lightweight, and scalable SVG icons.

*Note: No external component libraries (like Material UI or Radix) were used. Complex interactive elements like the custom currency dropdowns and modal systems were built from scratch to demonstrate core engineering skills.*

---

## 2. Project Structure

The project follows a feature-based folder structure, which ensures high maintainability and scalability as the codebase grows:

```text
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
├── context/
│   └── AuthContext.tsx    # Global Application Context for Authentication UI
```

---

## 3. Maintainability, Performance, and UX

### Maintainability & Architecture
- **Global Auth Architecture:** Authentication UI is abstracted into a global `AuthContext` wrapper. The highly dynamic `AuthModal` is rendered precisely once at the root level to avoid stacking context bugs, and can dynamically absorb calculation data (e.g., passing dynamic currency amounts from the calculator to the root modal).
- **Component Modularity:** The monolithic homepage was broken down into 10+ independent section components (`TestimonialSection`, `FeaturesGrid`, etc.).
- **Localized State:** Rather than introducing unnecessary global state (like Redux or Zustand), state is kept localized unless absolutely necessary (like the global Auth Context).

### Seamless UX & Responsiveness
- **Native-Like Mobile Navigation:** The mobile hamburger menu implements an incredibly robust bidirectional slider mimicking an iOS `UINavigationController`. Tapping nested sub-menus visually pushes new views onto the stack.
- **History State Interception (`popstate`):** Opening drawers or modals automatically pushes a dummy state to the browser's `history`. If a user attempts a native edge swipe on their mobile device (to go "back"), we intercept the `popstate` event and gracefully close the drawer without leaving the web application!
- **Adaptive Components:** The custom `ModalDrawer` component intelligently acts as a centered, focused modal on desktop screens, but seamlessly transforms into a swipeable bottom-sheet drawer on mobile devices, mimicking native app behaviors.

---

## 4. Challenges Faced

**Complex Interdependent State Management**
The biggest technical hurdle was recreating the `CurrencyConverter` widget. When a user changes the source currency, the target currency, or the amount, multiple things need to happen simultaneously: fees must be recalculated, volume discounts evaluated, exchange rates updated, and the UI must trigger a "loading" state. 
* **Solution:** I abstracted the calculation logic into a `useEffect` hook that listens to changes in currency dependencies. It triggers a simulated network delay and coordinates conditional rendering with Tailwind skeleton loaders to process the math without locking up the main thread.

**Bidirectional Mobile Menu Animations**
Building a nested mobile menu that pushes "in" and pulls "out" seamlessly without absolute positioning clipping issues was difficult.
* **Solution:** Used Framer Motion's `AnimatePresence` `custom` prop to pass an explicit direction integer `1` (forwards) or `-1` (backwards). By mapping these values dynamically inside variant objects, the sliding stack handles its physics identically to native operating systems.

---

## 5. Improvements Over the Original Design

1. **Enhanced Micro-interactions:** While the original site is highly static in some areas, I introduced subtle `transform hover:scale` and `transition-colors` interactions on the feature grids and cards to provide better tactile feedback for desktop mouse users.
2. **Simplified Layout Shifts:** I noticed the original site had minor layout shifts when certain promotional banners appeared. I used `<AnimatePresence>` from Framer Motion to ensure high-volume discount banners in the calculator smoothly push content down rather than snapping violently.
3. **Optimized Padding Rhythm:** I standardized the vertical padding (utilizing a strict `24-unit` rhythm) between adjacent sections with identical background colors, preventing the "double gap" visual bugs occasionally found in deeply nested DOM trees.
