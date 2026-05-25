# NEW ARCHITECTURE MAP

## Directory Structure

```
src/
├── hooks/                          # NEW: Reusable hook library
│   ├── useInView.ts              # IntersectionObserver wrapper
│   ├── useSpotlight.ts           # Mouse spotlight effect
│   ├── useMouseGlow.ts           # Mouse glow effect  
│   ├── useTypewriter.ts          # Typewriter animation
│   ├── useParallaxTilt.ts        # 3D tilt effect (available)
│   ├── useIdentityPanelParallax.ts # Hero 3D panel
│   ├── useScrollEffects.ts       # ScrollFx split into hooks
│   └── use-mobile.tsx            # Existing (unchanged)
│
├── components/
│   └── portfolio/
│       ├── Hero.tsx              # Uses: useTypewriter, useIdentityPanelParallax
│       ├── Nav.tsx               # No hooks needed (static)
│       ├── Projects.tsx          # Uses: useInView, useMouseGlow
│       ├── Skills.tsx            # Uses: useInView
│       ├── Services.tsx          # Uses: useInView, useSpotlight
│       ├── About.tsx             # Uses: useInView
│       ├── Contact.tsx           # Uses: useInView
│       ├── ScrollFx.tsx          # Uses: useScrollEffects, useNavScroll, useHashScroll
│       ├── Loader.tsx            # No hooks needed (timing only)
│       ├── Reveal.tsx            # No hooks needed (simple)
│       ├── Floating3DShape.tsx   # Canvas (unchanged)
│       ├── Interactive3DBackground.tsx # Canvas (unchanged)
│       └── ...other components   # Unchanged
│
├── client/                       # Branding config (unchanged)
│   ├── branding.ts
│   ├── content.ts
│   ├── assets.ts
│   ├── sections.ts
│   └── animations.ts
│
├── data/                        # Data files (unchanged)
│   ├── projects.ts
│   ├── services.ts
│   ├── skills.ts
│   └── personalInfo.ts
│
└── config/                      # Config files (unchanged)
    ├── themeConfig.ts
    ├── siteConfig.ts
    └── themePresets.ts
```

## Hook Dependencies

```
useInView
    ├── Projects.tsx (ProjectRow)
    ├── Skills.tsx (SkillItem)
    ├── About.tsx (FactCard)
    ├── Contact.tsx (ContactCard)
    └── Services.tsx (ServiceCard)

useMouseGlow
    └── Projects.tsx (ProjectRow)

useSpotlight
    └── Services.tsx (ServiceCard)

useTypewriter
    └── Hero.tsx

useIdentityPanelParallax
    └── Hero.tsx

useScrollEffects + useNavScroll + useHashScroll
    └── ScrollFx.tsx
```

## Data Flow

### Before
```
Components → Direct IntersectionObserver + mouse handlers
```

### After
```
Components → Hooks → Generic logic → CSS/Style
```

## Hook Responsibilities

| Hook | Responsibility | Config Options |
|------|-----------------|-----------------|
| useInView | Trigger animations on scroll | threshold, delay, triggerOnce |
| useSpotlight | Track mouse for radial glow | size, color |
| useMouseGlow | Track mouse for card glow | size, color |
| useTypewriter | Cycle through words | typeSpeed, deleteSpeed, pauseDuration |
| useIdentityPanelParallax | 3D tilt on mouse move | (none, hardcoded for Hero) |
| useScrollEffects | Auto-tag + IO for data-fx | (none, internal) |
| useNavScroll | Navbar scroll state | (none, internal) |
| useHashScroll | Smooth hash navigation | (none, internal) |

## Import Convention

All new hooks imported from `@/hooks`:

```typescript
import { useInView } from "@/hooks/useInView";
import { useSpotlight, useMouseGlow } from "@/hooks/useSpotlight";
import { useTypewriter } from "@/hooks/useTypewriter";
import { useIdentityPanelParallax } from "@/hooks/useIdentityPanelParallax";
import { useScrollEffects, useNavScroll, useHashScroll } from "@/hooks/useScrollEffects";
```

## Benefits

1. **Single source of truth** for each behavior pattern
2. **Easy to modify** all instances from one place
3. **Consistent behavior** across components
4. **Testable** in isolation
5. **Documented** with config options
6. **Extensible** - add features to all at once