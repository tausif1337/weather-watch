# Slide source

`07-project-weather-app.html` is the source for `../07-project-weather-app.pdf` (40 slides, 960×540pt / 16:9).

`fonts.css` embeds Poppins (400–800) and JetBrains Mono (400/500) as base64 so the deck renders identically offline.

## Rebuild the PDF

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --no-pdf-header-footer --virtual-time-budget=8000 \
  --print-to-pdf=../07-project-weather-app.pdf \
  07-project-weather-app.html
```

## Notes

- One `<section class="slide light|dark|accent">` per slide; content is vertically centred.
- Code blocks are plain text inside `<pre><code data-lang="js|jsx|bash|css|text">`; a small
  script at the bottom of the file applies syntax colours at load time.
- Escape `<`, `>` and `&` inside code blocks as `&lt;`, `&gt;`, `&amp;`.
- Keep code lines under ~85 characters and blocks under ~16 lines, or they will clip.
