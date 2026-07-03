CDE — Project card photos
==========================

Drop project photos into this folder using EXACTLY these filenames.
Each card on the homepage (index.html) loads its photo from here. Until a
file exists, the card automatically falls back to its SVG placeholder
illustration (no broken-image icon).

Required filenames:
  trillionaire-residences.jpg   — Trillionaire Residences, Dubai
  serenia-residences.jpg        — Serenia Residences, Palm Jumeirah
  injaz-building.jpg            — Injaz Building, Dubai
  west-f5-building.jpg          — West F5 Building, Dubai
  seawater-intake-station.jpg   — Seawater Intake Pumping Station, Fujairah (wide card)

Recommended specs:
  - Format: JPG (or swap the .jpg in index.html to .webp/.png if preferred)
  - Aspect: landscape; the media area is ~16:9-ish and uses object-fit: cover
  - Size: ~1200px wide is plenty; keep files < ~300 KB for fast loading
  - The wide "Seawater Intake" card spans the full row — use a wider image.
