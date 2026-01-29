# CURSOR_RULES

Follow these rules for all changes in this repo.

## Pages and routes
- Pages: /, /about, /casestudy1-4
- Header: "Garry Grewal" -> /, "About" -> /about
- Footer: "Garry Grewal" -> /, email -> mailto

## Visual system
- Fonts: Playfair Display (display), Darker Grotesque (body)
- Colors: bg #fff, text #000, links #999 (hover #000)
- Spacing: 8px grid (2/4 ok)
- Cards: 0 radius, no border, no shadow
- Grid: 2 col desktop, 1 col mobile

## Components to reuse
- Layout, Header, Footer
- ProjectGrid + ProjectTile variants (wide, tall, square)
- CaseStudyLayout + MetricsRow + Figure + Callout

## Motion rules
- Respect prefers-reduced-motion
- CSS-first
- Only animate opacity/transform
- Never transition: all
- Scroll reveal allowed, subtle, disabled for reduced motion

## Wireframes are the layout source
- Home, About, Case Study template must match provided wireframes.

## More detail
- DESIGN_SYSTEM.md
- COMPONENTS.md
- CONTENT_GUIDE.md
- DECISIONS.md