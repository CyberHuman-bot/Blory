/* global Scratch */

class ExampleExtension {
    constructor() {}

    /**
     * Returns the extension metadata.
     */
    getInfo() {
        return {
            id: 'someBlocks',
            name: 'Some Blocks',
            iconURI: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAFCAAAAACyOJm3AAAAFklEQVQYV2P4DwMMEMgAI/+DE' +
                     'UIMBgAEWB7i7uidhAAAAABJRU5ErkJggg==',
            docsURI: 'https://example.com/docs',

            blocks: [
                {
                    opcode: 'exampleNoop',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'do nothing',
                    func: 'noop'
                },
                {
                    opcode: 'exampleConditional',
                    blockType: Scratch.BlockType.CONDITIONAL,
                    branchCount: 4,
                    isTerminal: true,
                    text: 'choose [BRANCH]',
                    arguments: {
                        BRANCH: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 1
                        }
                    },
                    func: 'noop'
                },
                {
                    opcode: 'myReporter',
                    blockType: Scratch.BlockType.REPORTER,
                    branchCount: 0,
                    isTerminal: true,
                    text: 'letter [LETTER_NUM] of [TEXT]',
                    arguments: {
                        LETTER_NUM: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 1
                        },
                        TEXT: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'text'
                        }
                    },
                    func: 'myReporter',
                    filter: ['someBlocks.wedo2', 'sprite', 'stage']
                },
                {
                    opcode: 'exampleBoolean',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: 'return true',
                    func: 'returnTrue'
                },
                {
                    opcode: 'exampleHat',
                    blockType: Scratch.BlockType.HAT,
                    text: 'after forever',
                    func: 'returnFalse'
                }
            ],

            menus: {
                menuA: [
                    { value: 'itemId1', text: 'Item One' },
                    'itemId2'
                ],
                menuB: 'getItemsForMenuB'
            },

            translation_map: {
                de: {
                    'extensionName': 'Einige Blöcke',
                    'myReporter': 'Buchstabe [LETTER_NUM] von [TEXT]',
                    'myReporter.TEXT_default': 'Text',
                    'menuA_item1': 'Artikel eins',
                    'menuB_example': 'Beispiel',
                    'myReporter.result': 'Buchstabe {LETTER_NUM} von {TEXT} ist {LETTER}.'
                },
                it: {
                    'extensionName': 'Alcuni Blocchi',
                    'myReporter': 'lettera [LETTER_NUM] di [TEXT]',
                    'myReporter.TEXT_default': 'Testo'
                }
            },

            targetTypes: [
                'wedo2',
                'speech'
            ]
        };
    }

    /**
     * Command: noop
     */
    noop() {}

    /**
     * Boolean: always returns true
     */
    returnTrue() {
        return true;
    }

    /**
     * Hat: always returns false
     */
    returnFalse() {
        return false;
    }

    /**
     * Reporter: return a letter from a string
     */
    myReporter(args) {
        // Unicode-safe indexing
        const letters = [...args.TEXT];
        const index = args.LETTER_NUM - 1;
        const result = letters[index] || '';
        return `Letter ${args.LETTER_NUM} of ${args.TEXT} is ${result}.`;
    }

    /**
     * Dynamic menu example
     */
    getItemsForMenuB() {
        return [
            { value: 'dynamic1', text: 'Dynamic One' },
            { value: 'dynamic2', text: 'Dynamic Two' },
            { value: 'dynamic3', text: 'Dynamic Three' }
        ];
    }
}

// Register the extension with Scratch
Scratch.extensions.register(new ExampleExtension());
