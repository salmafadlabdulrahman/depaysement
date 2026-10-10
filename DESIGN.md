# dépaysement: Design System v0.2

> **Daylight and organised.** A pale sky canvas, a calm near-monochrome interface, rounded pastel tiles and a few dark pill buttons. Clean and structured like Genie Studio and Givingli: the page's personality comes from its content (real trips, saved places, photos, lists, shared messages) and from a small set of supplied illustrations, with a few elements slightly tilted for a natural feel.

**What the product is:** a **web app** (Next.js, fully responsive) for keeping travel memories. Before and during a trip people save the places, food, hotels (with prices), museums, transport, photos and notes they want to do, in one place instead of scattered screenshots, and they can share a trip and revisit it later. It is not a trip planner or a budget tracker. It may become a native app later (React Native or similar), so tokens should stay platform-neutral.

**Feeling to hit:** clean, organised, warm. Playful in small doses, never cluttered.

**Where this comes from:** the type, colour, radii and component rules follow the *Genie Studio* system (airy, pastel, mid-weight type, charcoal pills). The *structure* (centred headline, tidy sections, numbered stories, small object captions) takes cues from *Givingli*. Take the principles, not their artwork, logos or copy.

---

## 1. Principles

1. **Clean and organised first.** Clear hierarchy, generous space, consistent grids. Centred layouts, rows of cards and tidy columns are welcome.
2. **Let the product speak.** Show real product content (a saved list, a trip card with a place and a price, a day-by-day list, a shared message) alongside the illustrations. The page should explain what the app does, not just look nice.
3. **A little natural looseness.** A few items per section may be slightly tilted (3° to 8°), overlapping or cropped by an edge. Most things stay straight and aligned.
4. **One dark anchor per view.** The charcoal pill is the only dense element on a screen.
5. **Mid-weight, tight type.** Weight 500 everywhere. Never bold. Headlines tracked tight.
6. **Pastel is for tiles.** Max two pastel washes per section.

---

## 2. Colour tokens

| Token | Hex | Use |
|---|---|---|
| `--sky` | `#EBF5FF` | Page canvas |
| `--card` | `#FAFDFF` | Cards, panels, photo-print borders |
| `--white` | `#FFFFFF` | Nav bar, secondary buttons, overlays |
| `--mist` | `#F6F7F8` | Subtle section banding |
| `--ink` | `#0A0D12` | Headlines and primary text. Never pure black |
| `--charcoal` | `#181D27` | Filled buttons, the trip-ticket card |
| `--graphite` | `#535862` | Body text |
| `--fog` | `#93979F` | Muted helper text |
| `--sky-blue` | `#0099FF` | Inline highlight words, small dots, links |
| `--iris` | `#0069E0` | Outlines and accent borders only. Never a fill |
| `--lavender` | `#F1E6FF` | Pastel tile |
| `--mint` | `#D3F6E3` | Pastel tile |
| `--powder` | `#CCE7FF` | Pastel tile, link-preview backdrop |
| `--peach` | `#FFD1B8` | Pastel tile or small accent |
| `--solar` | `#FFF2BE` | Pastel tile (rare) |
| `--paper` | `#ECE4D6` | Paper-textured objects (journal cover) |
| `--journal-ink` | `#1E2AB4` | Rare small marks only (underline, stamp) |
| `--msg-blue` | `#1A5CFF` | Message bubbles inside chat mockups only |

**Gradient (outline only):** `linear-gradient(#479DFF 11%, #0069E0 78%)`, for a 3px accent border on one featured frame. Never as a button or large fill.

**Shadow for floating objects:** `drop-shadow(0 18px 20px rgba(4,69,144,.22))`. Blue-tinted, never grey or black. Cards and tiles have *no* shadow; depth comes from the canvas-to-card colour shift.

---

## 3. Typography

| Role | Font | Notes |
|---|---|---|
| Display / headings | **General Sans** (free, Fontshare) or **Inter Tight** | Stand-in for Aeonik. Weight 500 only |
| UI / body | **Geist** | Weight 500 workhorse, 600 only for tiny labels |
| Labels / tickets | **Geist Mono** | Uppercase, 12–13px, letter-spacing 0.14em. Section numbers ("01.") and ticket labels |

| Style | Size | Line height | Tracking |
|---|---|---|---|
| hero | `clamp(56px, 10vw, 148px)` | 1.05 | -0.02em |
| display | `clamp(40px, 6vw, 72px)` | 1.1 | -0.02em |
| heading-lg | 48px | 1.17 | -0.02em |
| heading | 32px | 1.25 | -0.02em |
| heading-sm | 24px | 1.17 | -0.02em |
| subheading | 20px | 1.4 | -0.01em |
| body-lg | 18px | 1.33 | -0.01em |
| body | 16px | 1.35 | 0 |
| body-sm | 14px | 1.14 | -0.01em |
| mono-label | 12–13px | 1.4 | +0.14em, uppercase |

- Text colour: `--ink` for headlines, `--graphite` for body, `--fog` for muted.
- One word in a headline may be set in `--sky-blue`. Max once per headline.
- Display sizes are never used below 48px for editorial headings.

---

## 4. Shape, spacing, layout

- **Base unit:** 8px. Scale: 8, 16, 24, 32, 40, 48, 64, 80, 120, 160.
- **Radii:** pills and tags `9999px`, cards and tiles `32px`, images `24px`, inputs `16px`, small cards `16px`. No sharp corners.
- **Layout:** max-width 1200px for content, centred, with 24–40px gutters. Breakpoints: 1440 (design frame), 1024, 768, 390.
- **Rhythm:** section gap 80–120px, card padding 40px (24px on mobile), element gap 24px.
- **Borders:** none by default. Hairlines (`rgba(10,13,18,.12)`) only to divide list rows.

---

## 5. Components

**Nav.** A floating white pill bar (`--white`, radius 9999px), centred, max-width ~1200px. Logo left, two or three plain text links, one charcoal pill on the right. Links have no underline or hover fill; they shift to `--ink`. On mobile it collapses to logo + button + menu.

**Primary button.** Charcoal fill, white text, Geist 16/500, padding 12px 32px, radius 9999px, shadow ring `0 1px 2px rgba(10,13,18,.8), 0 0 0 1px #0A0D12`. Hover: arrow nudges 4px, scale 1.02.

**Secondary button.** White fill, ink text, same shape.

**Text link.** Ink, thin underline, trailing "→".

**Object caption (optional).** A tiny plain-text label beside a floating image (Geist 18/500, `--ink`, no box), e.g. *Places*, *Food*, *Rides*. Used where several images float around a headline.

**Section index.** A mono label ("01.") above the headline.

**Pastel tile.** Solid pastel fill, radius 32px, padding 40px, no border or shadow. Title top-left, content below. Illustration or mock UI inside may be cropped by the tile edge.

**Photo print.** A photo with a 16px `--card` border, 4px inner radius, floating-object shadow. May be straight or slightly tilted.

**Trip ticket (card).** Charcoal card, radius 30px, mono label "TRIP CARD · DAY 2" in `--fog`, big white title (e.g. "Taksim to Tünel"), subline in `--powder`, a small `--sky-blue` dot top-right, and a `--powder` "saved" pill bottom-right.

**Chat mockup.** Light messaging thread in a rounded screen: blue outgoing bubble (`--msg-blue`), grey incoming bubbles, a link-preview card with a photo and a dark caption bar, a pink heart reaction. Apple-style emoji inside the mockup only.

**Review card.** `--card` fill, radius 32px, padding 40px: quote in Geist 18 `--graphite`, divider, avatar + name (16/500 `--ink`) + role (14 `--fog`).

**FAQ row.** `--card` fill, radius 32px, padding 40px. Question 18–20/500, answer 16 `--fog`. Opens with a grid-template-rows transition, 0.65s ease.

**Chip / tag.** Radius 9999px, Geist 12–14/500, padding 4px 12px, on a pastel wash.

---

## 6. Imagery

All imagery is **supplied by the person. Do not generate or use stock images.** Each file is one of:

1. **Cutout.** Transparent PNG (illustrated objects). Float on the canvas with no box or background, only the blue-tinted drop shadow.
2. **Print.** A photo, shown with a white border and small radius (see Photo print). Photos can also be shown full-bleed inside a tile or card.
3. **Card.** A designed UI object (trip ticket, chat mock, journal cover).
4. **Composed image.** A finished piece of artwork made of several elements (for example the envelope with its contents, or the chat thread). Use it whole: don't split, redraw or restyle it.

**Guidance**
- Straight, centred and grid-aligned layouts are fine for most sections. Use a clean grid when showing several items of equal weight.
- Where an arrangement needs life (the hero, a feature story), tilt **one to three** items by 3°–8° and let one overlap or touch an edge. The rest stay straight.
- Vary scale: one large item, a couple of medium, a few small.
- Keep a clear area around text. Imagery never covers headings or buttons.
- Optional flat decorative extras in palette colours: 4-point sparkles, small dots, soft white cloud shapes. Use sparingly.

---

## 7. Motion

- **Scroll reveal:** `cubic-bezier(0.16, 1, 0.3, 1)`, 0.6s, items rise 24px and fade in, staggered by 80ms.
- **Hover on a floating image:** tilt eases to 0°, scale 1.04, shadow deepens slightly, 0.35s.
- **Hero images (optional):** a slow ambient float (±8px, 6–9s ease-in-out, different delay per item).
- **Marquee:** continuous horizontal scroll for reviews.
- **FAQ:** 0.65s ease.
- Durations sit between 0.3 and 0.65s. Nothing snappy, nothing slow.
- Respect `prefers-reduced-motion`: turn off float and marquee, keep fades.

---

## 8. Do and don't

**Do**
- Use weight 500 for all display and heading type.
- Use the pale-blue to near-white shift (`--sky` to `--card`) as the main depth cue.
- Reserve `--iris` for outlines and `--sky-blue` for inline highlights.
- Use charcoal for every filled button.
- Show real product content, not just decoration.
- Keep the layout aligned and easy to scan.

**Don't**
- No bold headlines (600+).
- No sharp corners (minimum 16px).
- No box-shadows on cards or tiles.
- No saturated blue fill on buttons.
- No gradient fills on large surfaces.
- No pure `#000` text.
- No stock icon sets, stock photos or emoji as decoration (Apple-style emoji are fine *inside chat mockups*).
- No more than two pastel washes in one section.
- No tilting everything; most elements stay straight.

---

## 9. CSS variables (starter)

```css
:root{
  --sky:#EBF5FF; --card:#FAFDFF; --white:#fff; --mist:#F6F7F8;
  --ink:#0A0D12; --charcoal:#181D27; --graphite:#535862; --fog:#93979F;
  --sky-blue:#0099FF; --iris:#0069E0;
  --lavender:#F1E6FF; --mint:#D3F6E3; --powder:#CCE7FF; --peach:#FFD1B8; --solar:#FFF2BE;
  --paper:#ECE4D6; --journal-ink:#1E2AB4; --msg-blue:#1A5CFF;

  --font-display:'General Sans','Inter Tight',ui-sans-serif,system-ui,sans-serif;
  --font-body:'Geist',ui-sans-serif,system-ui,sans-serif;
  --font-mono:'Geist Mono',ui-monospace,monospace;

  --radius-pill:9999px; --radius-card:32px; --radius-image:24px; --radius-input:16px;
  --space:8px; --page-max:1200px; --section-gap:96px; --card-pad:40px;

  --shadow-object:drop-shadow(0 18px 20px rgba(4,69,144,.22));
  --shadow-button:0 1px 2px rgba(10,13,18,.8), 0 0 0 1px #0A0D12;
  --ease-out:cubic-bezier(.16,1,.3,1);
}
```
