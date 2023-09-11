import json
from pathlib import Path

lines = Path("1000.txt").read_text().splitlines()
words = []
for line in lines:
    if line and line.startswith(" "):
        line = line.strip().rstrip(".")
        line_words = [w.lower() for w in line.split(", ")]
        words.extend(line_words)

words = list(set(words))
print(len(words))
print(words[0], words[-1])
words.sort()
Path("words-1000.json").write_text(json.dumps(words))
