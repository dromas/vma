#!/usr/bin/env python3
"""
Genera le icone SVG e PNG per la PWA Viareggio mon Amour.
Esegui: python3 make_icons.py
"""
import os, struct, zlib

os.makedirs('icons', exist_ok=True)

# SVG icona (usabile come fallback)
SVG = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192">
  <rect width="192" height="192" rx="40" fill="#0d2260"/>
  <rect x="0" y="60" width="64" height="72" fill="#1A3F8F"/>
  <rect x="64" y="60" width="64" height="72" fill="#ffffff"/>
  <rect x="128" y="60" width="64" height="72" fill="#C8282A"/>
  <text x="96" y="148" font-family="Arial,sans-serif" font-size="22"
        font-weight="bold" fill="white" text-anchor="middle">VmA</text>
</svg>'''

with open('icons/icon.svg', 'w') as f:
    f.write(SVG)
print("✅ icons/icon.svg creato")

# PNG minimale 192x192 (blu scuro con testo VmA)
def make_png(size, filename):
    import struct, zlib
    w = h = size
    # Crea immagine RGBA semplice
    pixels = []
    for y in range(h):
        row = []
        for x in range(w):
            # Sfondo blu scuro
            r, g, b, a = 13, 34, 96, 255
            # Tricolore in basso (ultimi 15px)
            if y > h - 15:
                third = w // 3
                if x < third:     r, g, b = 26, 63, 143
                elif x < 2*third: r, g, b = 255, 255, 255
                else:              r, g, b = 200, 40, 42
            row.extend([r, g, b, a])
        pixels.append(bytes(row))

    def chunk(tag, data):
        c = struct.pack('>I', len(data)) + tag + data
        return c + struct.pack('>I', zlib.crc32(tag + data) & 0xffffffff)

    raw = b''.join(b'\x00' + row for row in pixels)
    compressed = zlib.compress(raw)

    png = (b'\x89PNG\r\n\x1a\n'
        + chunk(b'IHDR', struct.pack('>IIBBBBB', w, h, 8, 6, 0, 0, 0))
        + chunk(b'IDAT', compressed)
        + chunk(b'IEND', b''))

    with open(filename, 'wb') as f:
        f.write(png)
    print(f"✅ {filename} creato ({size}x{size})")

make_png(192, 'icons/icon-192.png')
make_png(512, 'icons/icon-512.png')

print("\n✅ Tutte le icone generate nella cartella icons/")
print("   Sostituiscile con immagini vere prima del lancio.")
