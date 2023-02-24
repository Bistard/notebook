const fs = require('fs');
const path = require('path');

/**
 * ## Description
 * Assume all the files and directories in the current working directory are 
 * following some consistent index format (will be explained later), the script
 * essentially requires two target: source and target. 
 * 
 * Firstly, the script will modify the index format of the source as the same as 
 * the index format of the target.
 * 
 * Secondly, the script will modify the index format of all the files or the 
 * directories that starting from the target by incrementing one (The script 
 * will try to detect the index format and try to find a legal way to increment 
 * the index format).
 * 
 * Notice that if any of the items that requires a change is directory, the 
 * script will apply the reordering to all its children recursively.
 * 
 * ## Command Line Interface
 * ```js
 * > node reorder.js <SOURCE_NAME> <DESTINATION_NAME>
 * ```
 * 
 * ## Example
 * given the source with the full name <SOURCE_NAME> that follows the format: 
 *      <INDEX_FORMAT> <NAME>.<EXTENSION>
 *      Ex. "1. Intermediate.md" (file) or 
 *          "1. Intermediate" (directory)
 * Similarily, the script also requires a target that follows the same name 
 * format. 
 *      Ex. "3. Basics.md" (file) or
 *          "3. Basics" (directory)
 * 
 * Firstly, the script will simply modify the index format of the source as the 
 * index format of the target.
 *      Ex. Change from "3. Basics" to "1. Basics". Assume that if the source
 *          directory has any children. For example "3.1 introduction.md". The
 *          script will automatically detect the index format of the parent item
 *          and make a guess on how its children's index format will be changed.
 *          Ex. the new index format of that child will be "1.1 introduction.md".
 * 
 * Now, the current working directory will have two items that has the same 
 * index format which is logically invalid:
 *      Ex. At this moment, "1. Basics" and "1. Intermediate" shares the same 
 *          index format. This will be fixed in the next stage.
 * 
 * Secondly, the script will modify the original target index format by 
 * incrementing one, including all the items that sequenntially follows the 
 * target.
 *      Ex. Assume there are items named "1. Intermediate" and "2. Advanced" in
 *          the current working directory. Since the original "3. Basics" source 
 *          is already changed into "1. Basics". We need to modify all the other
 *          items that follows up the index format of "1.", that is, the script
 *          will increment the other index formats into "2. Intermediate" and
 *          "3. Advanced".
 *          
 *          Likewise, if there are children inside "2. Intermediate" or
 *          "3. Advanced", their index format will also be incremented by one
 *          recursively.
 */

class Reorderer {

    // [constructor]

    /**
     * @param {string} cwd
     * @param {string} source 
     * @param {string} destination 
     */
    constructor(
        cwd,
        source,
        destination,
    ) {
        this.cwd = cwd;
        this.source = source;
        this.destination = destination;
    }

    // [public methods]

    execute() {
        // const 
    }

    // [private helper methods]

    /**
     * @param {string} target 
     */
    async __getIndex(target) {
        // await fs.promises.readFile(target, );
    }
}

const [from, to] = parseCliArguments();
const reorderer = new Reorderer(cliArgv[0], cliArgv[1]);
reorderer.execute();

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
