import os
# os.system("python3 -m pip install htmlmin csscompressor jsmin")

import shutil
import time

from jsmin import jsmin
from csscompressor import compress
from htmlmin import minify


class Minify:
    def __init__(self, source: str, dest: str) -> None:
        self.target = {
            "html": self.html,
            "css": self.css,
            "js": self.javascript,
        }
        self.source = source
        self.dest = dest
        self.saved = 0

        print("Started Building")
        s = time.time()
        self.startBuild()
        e = time.time()
        print(f"Finished Build in {(e-s)*1e3:.3f} ms")
        print(f"Total saved: {self.saved/1024:.2f} KB")

    def startBuild(self):
        source = self.source
        dest = self.dest

        if os.path.exists(dest):
            shutil.rmtree(dest)
            print("Deleted Folder First")

        for root, dirs, files in os.walk(source):
            dirs[:] = [d for d in dirs if not d.startswith('.')]

            for file in files:
                sourcePath = os.path.join(root, file)
                relPath = os.path.relpath(sourcePath, source)
                destPath = os.path.join(dest, relPath)
                os.makedirs(os.path.dirname(destPath), exist_ok=True)
                self.justify(sourcePath, destPath)

    def justify(self, source, dest):
        ext = source.split('.')[-1]
        if ext in self.target:
            func = self.target[ext]
            content = self.readFile(source)
            minified = func(content)
            self.saved += len(content) - len(minified)
            self.writeFile(dest, minified)

        else:
            self.copyFile(source, dest)

    def html(self, code: str):
        return minify(code, remove_empty_space=1, reduce_boolean_attributes=1)

    def css(self, code: str):
        return compress(code)

    def javascript(self, code: str):
        return jsmin(code)

    def writeFile(self, dest: str, content: str):
        with open(dest, 'w', encoding="utf8") as f:
            f.write(content)

    def readFile(self, dest: str):
        with open(dest, 'r', encoding="utf8") as f:
            return f.read()

    def copyFile(self, source: str, dest: str):
        shutil.copy2(source, dest)


# Usage example:
source_directory = "src"
destination_directory = "dist"

Minify(source_directory, destination_directory)
