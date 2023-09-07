const fs = require(`fs`);

if (fs.existsSync(`dist`)) {
    fs.rmSync(`dist`, { recursive: true, force: true });
}

fs.cpSync('src', 'dist', { recursive: true });
