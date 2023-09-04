import json
from pathlib import Path

PREFIXES = (
    "Basic",
    "International",
    "Addendum",
    "Compound",
    "Endings",
)
lines = Path("2000.txt").read_text().splitlines()
words = []
for line in lines:
    for prefix in PREFIXES:
        if line.startswith(prefix):
            line = line.removeprefix(prefix + ":").strip()
            line_words = [w.lower() for w in line.split(" • ")]
            words.extend(line_words)
            break

print(len(words))
words.sort()
Path("words-2000.json").write_text(json.dumps(words))
