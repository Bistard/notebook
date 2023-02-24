const fs = require('fs');
const path = require('path');

/**
 * 
 * ## description
 * When moving a markdown file from a source to a destination, the linked 
 * resources under the current working directory named `.images` will also be
 * moved into the destination.
 */

class LinkedImage {
    constructor(name, link) {
        this.name = name ?? '';
        this.link = link ?? '';
    }
}

class SmartMove {

    #source;
    #destination;
    #cwd;

    /**
     * @param {string} source 
     * @param {string} destination 
     */
    constructor(
        source,
        destination,
    ) {
        this.#source = source;
        this.#destination = destination;
        this.#cwd = path.dirname(source);
    }

    async execute() {
        const imageArrays = await this.#findAllLinkedIamges(this.#source);
        await this.#moveLinkedImagesToDestination(this.#cwd, this.#destination, imageArrays);
        await this.#moveSourceFileToDestination(this.#source, this.#destination);
    }

    /**
     * @param {string} source 
     * @returns {Promise<LinkedImage[]>}
     */
    async #findAllLinkedIamges(source) {

        let content;
        try {
            content = (await fs.promises.readFile(source)).toString();
        } catch (err) {
            throw new Error('cannot read the source file');
        }

        const images = [];
        let entry;

        // find images
        let findImageRegExp = new RegExp(/\!\[.*\]\(.*\)/g);
        while ((entry = findImageRegExp.exec(content)) !== null) {
            const name = (new RegExp(/\[.*\]/g)).exec(entry)[0];
            const link = (new RegExp(/\(.*\)/g)).exec(entry)[0];
            images.push(new LinkedImage(name && name.slice(1, -1), link && link.slice(1, -1)));
        }

        // find html images
        findImageRegExp = new RegExp(/\<img .*\/\>/g);
        while ((entry = findImageRegExp.exec(content)) !== null) {
            const parts = entry[0].split(' ');
            let name;
            let link;

            for (const part of parts) {
                if (part.startsWith('src=')) {
                    link = part.slice(5, -1);
                } else if (part.startsWith('alt=')) {
                    name = part.slice(5, -1);
                }
            }
            
            images.push(new LinkedImage(name, link));
        }
        
        return images;
    }

    /**
     * @param {string} cwd 
     * @param {string} destination 
     * @param {LinkedImage[]} images 
     */
    async #moveLinkedImagesToDestination(cwd, destination, images) {
        
        // try to create a `.images` under the destination
        const destImageDir = path.resolve(destination, './.images');
        {
            try {
                await fs.promises.stat(destImageDir);
            } catch {
                await fs.promises.mkdir(destImageDir);
            }
        }

        for (const image of images) {
            const currImagePath = path.resolve(cwd, image.link);
            const destImagePath = path.resolve(destination, image.link);
            await fs.promises.copyFile(currImagePath, destImagePath);
            await fs.promises.rm(currImagePath);
        }
    }

    async #moveSourceFileToDestination(source, destination) {
        const destFilePath = path.resolve(destination, path.basename(source));
        fs.promises.copyFile(source, destFilePath);
        fs.promises.rm(source);
    }
}

const [from, to] = parseCliArguments();
const mover = new SmartMove(from, to);
mover.execute();

/**
 * @returns {[string, string]}
 */
function parseCliArguments() {
    const argv = process.argv.slice(2);
    if (argv.length != 2) {
        throw new Error(`The command line interface format must follows: node reorder.js <SOURCE_NAME> <DESTINATION_NAME>`);
    }
    return argv;
}
