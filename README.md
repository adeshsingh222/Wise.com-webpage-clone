# Wise Clone

A high-performance, pixel-perfect clone of the Wise.com frontend, focused on clean architecture, smooth animations, and complex UI state management.

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Animations**: Framer Motion

## Why no global state exists
No global state management solution was introduced because the recreated screen consists primarily of presentational and localized interactive components. State is kept close to where it is used to reduce complexity and improve maintainability.

## Key Features & Implementations

### 1. Zero External UI Components
To demonstrate core engineering skills, no external UI libraries (like Radix or MUI) were used. Complex elements like the `CurrencyDropdown`—featuring search filtering, click-outside-to-close logic, and accessible state management—were built entirely from scratch.

### 2. Complex Local State Management
The `CurrencyConverter` orchestrates complex dependent state without infinite render loops. Changes to the "Send" amount, "Receive" amount, currency selection, and fee calculations are all derived from a single source of truth on every render, keeping the component perfectly synchronized.

### 3. High-Performance Animations
Framer Motion was utilized to handle staggered layout shifts, smooth modal pop-ins, and dynamic widget resizing without jank. 

### 4. Custom Reusable UI
- **ModalDrawer**: A responsive modal system that acts as a centered modal on desktop and seamlessly converts to a bottom-sheet drawer on mobile.
- **Fluid Typography & Responsive Grids**: Scales flawlessly from mobile devices to 4K monitors using Tailwind's robust responsive utilities.

## Local Development
```bash
npm install
npm run dev
```
