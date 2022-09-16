/* Core */
import { writeFile } from 'fs/promises';
import { resolve } from 'path';

/* Instruments */
import palette from '@/ui-kit/palette.json';

async function convert() {
    let vars = ':root {\n';

    try {
        for (const [ key, value ] of Object.entries(palette)) {
            vars += `    --${key}: ${value};\n`;
        }

        vars += '}';

        await writeFile(resolve('.', 'src/ui-kit/palette.scss'), vars);
    } catch (error) {
        console.error('Error writing palette.scss', error);
    }
}

convert();
