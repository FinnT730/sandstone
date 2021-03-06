"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COMMANDS_TREE = void 0;
exports.COMMANDS_TREE = {
    type: 'root',
    children: {
        advancement: {
            type: 'literal',
            children: {
                grant: {
                    type: 'literalArgument',
                    parsers: [
                        'minecraft:entity'
                    ],
                    executables: [
                        false
                    ],
                    properties: [
                        {
                            amount: 'multiple',
                            type: 'players'
                        }
                    ],
                    children: {
                        everything: {
                            type: 'literalArgument',
                            parsers: [],
                            executables: [],
                            arguments: [],
                            parsersId: 1
                        },
                        from: {
                            type: 'literalArgument',
                            parsers: [
                                'minecraft:resource_location'
                            ],
                            executables: [
                                true
                            ],
                            arguments: [
                                'advancement'
                            ],
                            parsersId: 2
                        },
                        only: {
                            type: 'literalArgument',
                            parsers: [
                                'minecraft:resource_location',
                                'brigadier:string'
                            ],
                            executables: [
                                true,
                                true
                            ],
                            properties: [
                                undefined,
                                {
                                    type: 'greedy'
                                }
                            ],
                            arguments: [
                                'advancement',
                                'criterion'
                            ],
                            parsersId: 3
                        },
                        through: {
                            type: 'literalArgument',
                            parsers: [
                                'minecraft:resource_location'
                            ],
                            executables: [
                                true
                            ],
                            arguments: [
                                'advancement'
                            ],
                            parsersId: 2
                        },
                        until: {
                            type: 'literalArgument',
                            parsers: [
                                'minecraft:resource_location'
                            ],
                            executables: [
                                true
                            ],
                            arguments: [
                                'advancement'
                            ],
                            parsersId: 2
                        }
                    },
                    arguments: [
                        'targets'
                    ],
                    parsersId: 0
                },
                revoke: {
                    type: 'literalArgument',
                    parsers: [
                        'minecraft:entity'
                    ],
                    executables: [
                        false
                    ],
                    properties: [
                        {
                            amount: 'multiple',
                            type: 'players'
                        }
                    ],
                    children: {
                        everything: {
                            type: 'literalArgument',
                            parsers: [],
                            executables: [],
                            arguments: [],
                            parsersId: 1
                        },
                        from: {
                            type: 'literalArgument',
                            parsers: [
                                'minecraft:resource_location'
                            ],
                            executables: [
                                true
                            ],
                            arguments: [
                                'advancement'
                            ],
                            parsersId: 2
                        },
                        only: {
                            type: 'literalArgument',
                            parsers: [
                                'minecraft:resource_location',
                                'brigadier:string'
                            ],
                            executables: [
                                true,
                                true
                            ],
                            properties: [
                                undefined,
                                {
                                    type: 'greedy'
                                }
                            ],
                            arguments: [
                                'advancement',
                                'criterion'
                            ],
                            parsersId: 3
                        },
                        through: {
                            type: 'literalArgument',
                            parsers: [
                                'minecraft:resource_location'
                            ],
                            executables: [
                                true
                            ],
                            arguments: [
                                'advancement'
                            ],
                            parsersId: 2
                        },
                        until: {
                            type: 'literalArgument',
                            parsers: [
                                'minecraft:resource_location'
                            ],
                            executables: [
                                true
                            ],
                            arguments: [
                                'advancement'
                            ],
                            parsersId: 2
                        }
                    },
                    arguments: [
                        'targets'
                    ],
                    parsersId: 0
                }
            }
        },
        attribute: {
            type: 'literalArgument',
            parsers: [
                'minecraft:entity',
                'minecraft:resource_location'
            ],
            executables: [
                false,
                false
            ],
            properties: [
                {
                    amount: 'single',
                    type: 'entities'
                },
                undefined
            ],
            arguments: [
                'target',
                'attribute'
            ],
            children: {
                base: {
                    type: 'literal',
                    children: {
                        get: {
                            type: 'literalArgument',
                            parsers: [
                                'brigadier:double'
                            ],
                            executables: [
                                true,
                                true
                            ],
                            arguments: [
                                'scale'
                            ],
                            parsersId: 5
                        },
                        set: {
                            type: 'literalArgument',
                            parsers: [
                                'brigadier:double'
                            ],
                            executables: [
                                true
                            ],
                            arguments: [
                                'value'
                            ],
                            parsersId: 6
                        }
                    }
                },
                get: {
                    type: 'literalArgument',
                    parsers: [
                        'brigadier:double'
                    ],
                    executables: [
                        true,
                        true
                    ],
                    arguments: [
                        'scale'
                    ],
                    parsersId: 5
                },
                modifier: {
                    type: 'literal',
                    children: {
                        add: {
                            type: 'literalArgument',
                            parsers: [
                                'minecraft:uuid',
                                'brigadier:string',
                                'brigadier:double',
                                'sandstone:literals'
                            ],
                            executables: [
                                false,
                                false,
                                false,
                                true
                            ],
                            properties: [
                                undefined,
                                {
                                    type: 'phrase'
                                },
                                undefined
                            ],
                            arguments: [
                                'uuid',
                                'name',
                                'value',
                                'option'
                            ],
                            parsersId: 7
                        },
                        remove: {
                            type: 'literalArgument',
                            parsers: [
                                'minecraft:uuid'
                            ],
                            executables: [
                                true
                            ],
                            arguments: [
                                'uuid'
                            ],
                            parsersId: 8
                        },
                        value: {
                            type: 'literalArgument',
                            parsers: [
                                'minecraft:uuid',
                                'brigadier:double'
                            ],
                            executables: [
                                true,
                                true
                            ],
                            arguments: [
                                'get',
                                'uuid',
                                'scale'
                            ],
                            parsersId: 9
                        }
                    }
                }
            },
            parsersId: 4
        },
        bossbar: {
            type: 'literal',
            children: {
                add: {
                    type: 'literalArgument',
                    parsers: [
                        'minecraft:resource_location',
                        'minecraft:component'
                    ],
                    executables: [
                        false,
                        true
                    ],
                    arguments: [
                        'id',
                        'name'
                    ],
                    parsersId: 10
                },
                get: {
                    type: 'literalArgument',
                    parsers: [
                        'minecraft:resource_location',
                        'sandstone:literals'
                    ],
                    executables: [
                        false,
                        true
                    ],
                    arguments: [
                        'id',
                        'option'
                    ],
                    parsersId: 11
                },
                list: {
                    type: 'literalArgument',
                    parsers: [],
                    executables: [],
                    arguments: [],
                    parsersId: 1
                },
                remove: {
                    type: 'literalArgument',
                    parsers: [
                        'minecraft:resource_location'
                    ],
                    executables: [
                        true
                    ],
                    arguments: [
                        'id'
                    ],
                    parsersId: 12
                },
                set: {
                    type: 'literalArgument',
                    parsers: [
                        'minecraft:resource_location'
                    ],
                    executables: [
                        false
                    ],
                    children: {
                        color: {
                            type: 'literalArgument',
                            parsers: [
                                'sandstone:literals'
                            ],
                            executables: [
                                true
                            ],
                            literalValues: [
                                [
                                    'blue',
                                    'green',
                                    'pink',
                                    'purple',
                                    'red',
                                    'white',
                                    'yellow'
                                ]
                            ],
                            arguments: [
                                'option'
                            ],
                            parsersId: 13
                        },
                        max: {
                            type: 'literalArgument',
                            parsers: [
                                'brigadier:integer'
                            ],
                            executables: [
                                true
                            ],
                            properties: [
                                {
                                    min: 1
                                }
                            ],
                            arguments: [
                                'max'
                            ],
                            parsersId: 14
                        },
                        name: {
                            type: 'literalArgument',
                            parsers: [
                                'minecraft:component'
                            ],
                            executables: [
                                true
                            ],
                            arguments: [
                                'name'
                            ],
                            parsersId: 15
                        },
                        players: {
                            type: 'literalArgument',
                            parsers: [
                                'minecraft:entity'
                            ],
                            executables: [
                                true,
                                true
                            ],
                            properties: [
                                {
                                    amount: 'multiple',
                                    type: 'players'
                                }
                            ],
                            arguments: [
                                'targets'
                            ],
                            parsersId: 0
                        },
                        style: {
                            type: 'literalArgument',
                            parsers: [
                                'sandstone:literals'
                            ],
                            executables: [
                                true
                            ],
                            literalValues: [
                                [
                                    'notched_10',
                                    'notched_12',
                                    'notched_20',
                                    'notched_6',
                                    'progress'
                                ]
                            ],
                            arguments: [
                                'option'
                            ],
                            parsersId: 16
                        },
                        value: {
                            type: 'literalArgument',
                            parsers: [
                                'brigadier:integer'
                            ],
                            executables: [
                                true
                            ],
                            properties: [
                                {
                                    min: 0
                                }
                            ],
                            arguments: [
                                'value'
                            ],
                            parsersId: 17
                        },
                        visible: {
                            type: 'literalArgument',
                            parsers: [
                                'brigadier:bool'
                            ],
                            executables: [
                                true
                            ],
                            arguments: [
                                'visible'
                            ],
                            parsersId: 18
                        }
                    },
                    arguments: [
                        'id'
                    ],
                    parsersId: 12
                }
            }
        },
        clear: {
            type: 'literalArgument',
            parsers: [
                'minecraft:entity',
                'minecraft:item_predicate',
                'brigadier:integer'
            ],
            executables: [
                true,
                true,
                true,
                true
            ],
            properties: [
                {
                    amount: 'multiple',
                    type: 'players'
                },
                undefined,
                {
                    min: 0
                }
            ],
            arguments: [
                'targets',
                'item',
                'maxCount'
            ],
            parsersId: 19
        },
        clone: {
            type: 'literalArgument',
            parsers: [
                'minecraft:block_pos',
                'minecraft:block_pos',
                'minecraft:block_pos'
            ],
            executables: [
                false,
                false,
                true
            ],
            arguments: [
                'begin',
                'end',
                'destination'
            ],
            children: {
                filtered: {
                    type: 'literalArgument',
                    parsers: [
                        'minecraft:block_predicate',
                        'sandstone:literals'
                    ],
                    executables: [
                        true,
                        true
                    ],
                    arguments: [
                        'filter',
                        'option'
                    ],
                    parsersId: 21
                },
                masked: {
                    type: 'literalArgument',
                    parsers: [
                        'sandstone:literals'
                    ],
                    executables: [
                        true,
                        true
                    ],
                    literalValues: [
                        [
                            'force',
                            'move',
                            'normal'
                        ]
                    ],
                    arguments: [
                        'option'
                    ],
                    parsersId: 22
                },
                replace: {
                    type: 'literalArgument',
                    parsers: [
                        'sandstone:literals'
                    ],
                    executables: [
                        true,
                        true
                    ],
                    literalValues: [
                        [
                            'force',
                            'move',
                            'normal'
                        ]
                    ],
                    arguments: [
                        'option'
                    ],
                    parsersId: 22
                }
            },
            parsersId: 20
        },
        data: {
            type: 'literal',
            children: {
                get: {
                    type: 'literal',
                    children: {
                        block: {
                            type: 'literalArgument',
                            parsers: [
                                'minecraft:block_pos',
                                'minecraft:nbt_path',
                                'brigadier:double'
                            ],
                            executables: [
                                true,
                                true,
                                true
                            ],
                            arguments: [
                                'targetPos',
                                'path',
                                'scale'
                            ],
                            parsersId: 23
                        },
                        entity: {
                            type: 'literalArgument',
                            parsers: [
                                'minecraft:entity',
                                'minecraft:nbt_path',
                                'brigadier:double'
                            ],
                            executables: [
                                true,
                                true,
                                true
                            ],
                            properties: [
                                {
                                    amount: 'single',
                                    type: 'entities'
                                },
                                undefined,
                                undefined
                            ],
                            arguments: [
                                'target',
                                'path',
                                'scale'
                            ],
                            parsersId: 24
                        },
                        storage: {
                            type: 'literalArgument',
                            parsers: [
                                'minecraft:resource_location',
                                'minecraft:nbt_path',
                                'brigadier:double'
                            ],
                            executables: [
                                true,
                                true,
                                true
                            ],
                            arguments: [
                                'target',
                                'path',
                                'scale'
                            ],
                            parsersId: 25
                        }
                    }
                },
                merge: {
                    type: 'literal',
                    children: {
                        block: {
                            type: 'literalArgument',
                            parsers: [
                                'minecraft:block_pos',
                                'minecraft:nbt_compound_tag'
                            ],
                            executables: [
                                false,
                                true
                            ],
                            arguments: [
                                'targetPos',
                                'nbt'
                            ],
                            parsersId: 26
                        },
                        entity: {
                            type: 'literalArgument',
                            parsers: [
                                'minecraft:entity',
                                'minecraft:nbt_compound_tag'
                            ],
                            executables: [
                                false,
                                true
                            ],
                            properties: [
                                {
                                    amount: 'single',
                                    type: 'entities'
                                },
                                undefined
                            ],
                            arguments: [
                                'target',
                                'nbt'
                            ],
                            parsersId: 27
                        },
                        storage: {
                            type: 'literalArgument',
                            parsers: [
                                'minecraft:resource_location',
                                'minecraft:nbt_compound_tag'
                            ],
                            executables: [
                                false,
                                true
                            ],
                            arguments: [
                                'target',
                                'nbt'
                            ],
                            parsersId: 28
                        }
                    }
                },
                modify: {
                    type: 'literal',
                    children: {
                        block: {
                            type: 'literalArgument',
                            parsers: [
                                'minecraft:block_pos',
                                'minecraft:nbt_path'
                            ],
                            executables: [
                                false,
                                false
                            ],
                            arguments: [
                                'targetPos',
                                'targetPath'
                            ],
                            children: {
                                append: {
                                    type: 'literal',
                                    children: {
                                        from: {
                                            type: 'literal',
                                            children: {
                                                block: {
                                                    type: 'literalArgument',
                                                    parsers: [
                                                        'minecraft:block_pos',
                                                        'minecraft:nbt_path'
                                                    ],
                                                    executables: [
                                                        true,
                                                        true
                                                    ],
                                                    arguments: [
                                                        'sourcePos',
                                                        'sourcePath'
                                                    ],
                                                    parsersId: 30
                                                },
                                                entity: {
                                                    type: 'literalArgument',
                                                    parsers: [
                                                        'minecraft:entity',
                                                        'minecraft:nbt_path'
                                                    ],
                                                    executables: [
                                                        true,
                                                        true
                                                    ],
                                                    properties: [
                                                        {
                                                            amount: 'single',
                                                            type: 'entities'
                                                        },
                                                        undefined
                                                    ],
                                                    arguments: [
                                                        'source',
                                                        'sourcePath'
                                                    ],
                                                    parsersId: 31
                                                },
                                                storage: {
                                                    type: 'literalArgument',
                                                    parsers: [
                                                        'minecraft:resource_location',
                                                        'minecraft:nbt_path'
                                                    ],
                                                    executables: [
                                                        true,
                                                        true
                                                    ],
                                                    arguments: [
                                                        'source',
                                                        'sourcePath'
                                                    ],
                                                    parsersId: 32
                                                }
                                            }
                                        },
                                        value: {
                                            type: 'literalArgument',
                                            parsers: [
                                                'minecraft:nbt_tag'
                                            ],
                                            executables: [
                                                true
                                            ],
                                            arguments: [
                                                'value'
                                            ],
                                            parsersId: 33
                                        }
                                    }
                                },
                                insert: {
                                    type: 'literalArgument',
                                    parsers: [
                                        'brigadier:integer'
                                    ],
                                    executables: [
                                        false
                                    ],
                                    children: {
                                        from: {
                                            type: 'literal',
                                            children: {
                                                block: {
                                                    type: 'literalArgument',
                                                    parsers: [
                                                        'minecraft:block_pos',
                                                        'minecraft:nbt_path'
                                                    ],
                                                    executables: [
                                                        true,
                                                        true
                                                    ],
                                                    arguments: [
                                                        'sourcePos',
                                                        'sourcePath'
                                                    ],
                                                    parsersId: 30
                                                },
                                                entity: {
                                                    type: 'literalArgument',
                                                    parsers: [
                                                        'minecraft:entity',
                                                        'minecraft:nbt_path'
                                                    ],
                                                    executables: [
                                                        true,
                                                        true
                                                    ],
                                                    properties: [
                                                        {
                                                            amount: 'single',
                                                            type: 'entities'
                                                        },
                                                        undefined
                                                    ],
                                                    arguments: [
                                                        'source',
                                                        'sourcePath'
                                                    ],
                                                    parsersId: 31
                                                },
                                                storage: {
                                                    type: 'literalArgument',
                                                    parsers: [
                                                        'minecraft:resource_location',
                                                        'minecraft:nbt_path'
                                                    ],
                                                    executables: [
                                                        true,
                                                        true
                                                    ],
                                                    arguments: [
                                                        'source',
                                                        'sourcePath'
                                                    ],
                                                    parsersId: 32
                                                }
                                            }
                                        },
                                        value: {
                                            type: 'literalArgument',
                                            parsers: [
                                                'minecraft:nbt_tag'
                                            ],
                                            executables: [
                                                true
                                            ],
                                            arguments: [
                                                'value'
                                            ],
                                            parsersId: 33
                                        }
                                    },
                                    arguments: [
                                        'index'
                                    ],
                                    parsersId: 34
                                },
                                merge: {
                                    type: 'literal',
                                    children: {
                                        from: {
                                            type: 'literal',
                                            children: {
                                                block: {
                                                    type: 'literalArgument',
                                                    parsers: [
                                                        'minecraft:block_pos',
                                                        'minecraft:nbt_path'
                                                    ],
                                                    executables: [
                                                        true,
                                                        true
                                                    ],
                                                    arguments: [
                                                        'sourcePos',
                                                        'sourcePath'
                                                    ],
                                                    parsersId: 30
                                                },
                                                entity: {
                                                    type: 'literalArgument',
                                                    parsers: [
                                                        'minecraft:entity',
                                                        'minecraft:nbt_path'
                                                    ],
                                                    executables: [
                                                        true,
                                                        true
                                                    ],
                                                    properties: [
                                                        {
                                                            amount: 'single',
                                                            type: 'entities'
                                                        },
                                                        undefined
                                                    ],
                                                    arguments: [
                                                        'source',
                                                        'sourcePath'
                                                    ],
                                                    parsersId: 31
                                                },
                                                storage: {
                                                    type: 'literalArgument',
                                                    parsers: [
                                                        'minecraft:resource_location',
                                                        'minecraft:nbt_path'
                                                    ],
                                                    executables: [
                                                        true,
                                                        true
                                                    ],
                                                    arguments: [
                                                        'source',
                                                        'sourcePath'
                                                    ],
                                                    parsersId: 32
                                                }
                                            }
                                        },
                                        value: {
                                            type: 'literalArgument',
                                            parsers: [
                                                'minecraft:nbt_tag'
                                            ],
                                            executables: [
                                                true
                                            ],
                                            arguments: [
                                                'value'
                                            ],
                                            parsersId: 33
                                        }
                                    }
                                },
                                prepend: {
                                    type: 'literal',
                                    children: {
                                        from: {
                                            type: 'literal',
                                            children: {
                                                block: {
                                                    type: 'literalArgument',
                                                    parsers: [
                                                        'minecraft:block_pos',
                                                        'minecraft:nbt_path'
                                                    ],
                                                    executables: [
                                                        true,
                                                        true
                                                    ],
                                                    arguments: [
                                                        'sourcePos',
                                                        'sourcePath'
                                                    ],
                                                    parsersId: 30
                                                },
                                                entity: {
                                                    type: 'literalArgument',
                                                    parsers: [
                                                        'minecraft:entity',
                                                        'minecraft:nbt_path'
                                                    ],
                                                    executables: [
                                                        true,
                                                        true
                                                    ],
                                                    properties: [
                                                        {
                                                            amount: 'single',
                                                            type: 'entities'
                                                        },
                                                        undefined
                                                    ],
                                                    arguments: [
                                                        'source',
                                                        'sourcePath'
                                                    ],
                                                    parsersId: 31
                                                },
                                                storage: {
                                                    type: 'literalArgument',
                                                    parsers: [
                                                        'minecraft:resource_location',
                                                        'minecraft:nbt_path'
                                                    ],
                                                    executables: [
                                                        true,
                                                        true
                                                    ],
                                                    arguments: [
                                                        'source',
                                                        'sourcePath'
                                                    ],
                                                    parsersId: 32
                                                }
                                            }
                                        },
                                        value: {
                                            type: 'literalArgument',
                                            parsers: [
                                                'minecraft:nbt_tag'
                                            ],
                                            executables: [
                                                true
                                            ],
                                            arguments: [
                                                'value'
                                            ],
                                            parsersId: 33
                                        }
                                    }
                                },
                                set: {
                                    type: 'literal',
                                    children: {
                                        from: {
                                            type: 'literal',
                                            children: {
                                                block: {
                                                    type: 'literalArgument',
                                                    parsers: [
                                                        'minecraft:block_pos',
                                                        'minecraft:nbt_path'
                                                    ],
                                                    executables: [
                                                        true,
                                                        true
                                                    ],
                                                    arguments: [
                                                        'sourcePos',
                                                        'sourcePath'
                                                    ],
                                                    parsersId: 30
                                                },
                                                entity: {
                                                    type: 'literalArgument',
                                                    parsers: [
                                                        'minecraft:entity',
                                                        'minecraft:nbt_path'
                                                    ],
                                                    executables: [
                                                        true,
                                                        true
                                                    ],
                                                    properties: [
                                                        {
                                                            amount: 'single',
                                                            type: 'entities'
                                                        },
                                                        undefined
                                                    ],
                                                    arguments: [
                                                        'source',
                                                        'sourcePath'
                                                    ],
                                                    parsersId: 31
                                                },
                                                storage: {
                                                    type: 'literalArgument',
                                                    parsers: [
                                                        'minecraft:resource_location',
                                                        'minecraft:nbt_path'
                                                    ],
                                                    executables: [
                                                        true,
                                                        true
                                                    ],
                                                    arguments: [
                                                        'source',
                                                        'sourcePath'
                                                    ],
                                                    parsersId: 32
                                                }
                                            }
                                        },
                                        value: {
                                            type: 'literalArgument',
                                            parsers: [
                                                'minecraft:nbt_tag'
                                            ],
                                            executables: [
                                                true
                                            ],
                                            arguments: [
                                                'value'
                                            ],
                                            parsersId: 33
                                        }
                                    }
                                }
                            },
                            parsersId: 29
                        },
                        entity: {
                            type: 'literalArgument',
                            parsers: [
                                'minecraft:entity',
                                'minecraft:nbt_path'
                            ],
                            executables: [
                                false,
                                false
                            ],
                            properties: [
                                {
                                    amount: 'single',
                                    type: 'entities'
                                },
                                undefined
                            ],
                            arguments: [
                                'target',
                                'targetPath'
                            ],
                            children: {
                                append: {
                                    type: 'literal',
                                    children: {
                                        from: {
                                            type: 'literal',
                                            children: {
                                                block: {
                                                    type: 'literalArgument',
                                                    parsers: [
                                                        'minecraft:block_pos',
                                                        'minecraft:nbt_path'
                                                    ],
                                                    executables: [
                                                        true,
                                                        true
                                                    ],
                                                    arguments: [
                                                        'sourcePos',
                                                        'sourcePath'
                                                    ],
                                                    parsersId: 30
                                                },
                                                entity: {
                                                    type: 'literalArgument',
                                                    parsers: [
                                                        'minecraft:entity',
                                                        'minecraft:nbt_path'
                                                    ],
                                                    executables: [
                                                        true,
                                                        true
                                                    ],
                                                    properties: [
                                                        {
                                                            amount: 'single',
                                                            type: 'entities'
                                                        },
                                                        undefined
                                                    ],
                                                    arguments: [
                                                        'source',
                                                        'sourcePath'
                                                    ],
                                                    parsersId: 31
                                                },
                                                storage: {
                                                    type: 'literalArgument',
                                                    parsers: [
                                                        'minecraft:resource_location',
                                                        'minecraft:nbt_path'
                                                    ],
                                                    executables: [
                                                        true,
                                                        true
                                                    ],
                                                    arguments: [
                                                        'source',
                                                        'sourcePath'
                                                    ],
                                                    parsersId: 32
                                                }
                                            }
                                        },
                                        value: {
                                            type: 'literalArgument',
                                            parsers: [
                                                'minecraft:nbt_tag'
                                            ],
                                            executables: [
                                                true
                                            ],
                                            arguments: [
                                                'value'
                                            ],
                                            parsersId: 33
                                        }
                                    }
                                },
                                insert: {
                                    type: 'literalArgument',
                                    parsers: [
                                        'brigadier:integer'
                                    ],
                                    executables: [
                                        false
                                    ],
                                    children: {
                                        from: {
                                            type: 'literal',
                                            children: {
                                                block: {
                                                    type: 'literalArgument',
                                                    parsers: [
                                                        'minecraft:block_pos',
                                                        'minecraft:nbt_path'
                                                    ],
                                                    executables: [
                                                        true,
                                                        true
                                                    ],
                                                    arguments: [
                                                        'sourcePos',
                                                        'sourcePath'
                                                    ],
                                                    parsersId: 30
                                                },
                                                entity: {
                                                    type: 'literalArgument',
                                                    parsers: [
                                                        'minecraft:entity',
                                                        'minecraft:nbt_path'
                                                    ],
                                                    executables: [
                                                        true,
                                                        true
                                                    ],
                                                    properties: [
                                                        {
                                                            amount: 'single',
                                                            type: 'entities'
                                                        },
                                                        undefined
                                                    ],
                                                    arguments: [
                                                        'source',
                                                        'sourcePath'
                                                    ],
                                                    parsersId: 31
                                                },
                                                storage: {
                                                    type: 'literalArgument',
                                                    parsers: [
                                                        'minecraft:resource_location',
                                                        'minecraft:nbt_path'
                                                    ],
                                                    executables: [
                                                        true,
                                                        true
                                                    ],
                                                    arguments: [
                                                        'source',
                                                        'sourcePath'
                                                    ],
                                                    parsersId: 32
                                                }
                                            }
                                        },
                                        value: {
                                            type: 'literalArgument',
                                            parsers: [
                                                'minecraft:nbt_tag'
                                            ],
                                            executables: [
                                                true
                                            ],
                                            arguments: [
                                                'value'
                                            ],
                                            parsersId: 33
                                        }
                                    },
                                    arguments: [
                                        'index'
                                    ],
                                    parsersId: 34
                                },
                                merge: {
                                    type: 'literal',
                                    children: {
                                        from: {
                                            type: 'literal',
                                            children: {
                                                block: {
                                                    type: 'literalArgument',
                                                    parsers: [
                                                        'minecraft:block_pos',
                                                        'minecraft:nbt_path'
                                                    ],
                                                    executables: [
                                                        true,
                                                        true
                                                    ],
                                                    arguments: [
                                                        'sourcePos',
                                                        'sourcePath'
                                                    ],
                                                    parsersId: 30
                                                },
                                                entity: {
                                                    type: 'literalArgument',
                                                    parsers: [
                                                        'minecraft:entity',
                                                        'minecraft:nbt_path'
                                                    ],
                                                    executables: [
                                                        true,
                                                        true
                                                    ],
                                                    properties: [
                                                        {
                                                            amount: 'single',
                                                            type: 'entities'
                                                        },
                                                        undefined
                                                    ],
                                                    arguments: [
                                                        'source',
                                                        'sourcePath'
                                                    ],
                                                    parsersId: 31
                                                },
                                                storage: {
                                                    type: 'literalArgument',
                                                    parsers: [
                                                        'minecraft:resource_location',
                                                        'minecraft:nbt_path'
                                                    ],
                                                    executables: [
                                                        true,
                                                        true
                                                    ],
                                                    arguments: [
                                                        'source',
                                                        'sourcePath'
                                                    ],
                                                    parsersId: 32
                                                }
                                            }
                                        },
                                        value: {
                                            type: 'literalArgument',
                                            parsers: [
                                                'minecraft:nbt_tag'
                                            ],
                                            executables: [
                                                true
                                            ],
                                            arguments: [
                                                'value'
                                            ],
                                            parsersId: 33
                                        }
                                    }
                                },
                                prepend: {
                                    type: 'literal',
                                    children: {
                                        from: {
                                            type: 'literal',
                                            children: {
                                                block: {
                                                    type: 'literalArgument',
                                                    parsers: [
                                                        'minecraft:block_pos',
                                                        'minecraft:nbt_path'
                                                    ],
                                                    executables: [
                                                        true,
                                                        true
                                                    ],
                                                    arguments: [
                                                        'sourcePos',
                                                        'sourcePath'
                                                    ],
                                                    parsersId: 30
                                                },
                                                entity: {
                                                    type: 'literalArgument',
                                                    parsers: [
                                                        'minecraft:entity',
                                                        'minecraft:nbt_path'
                                                    ],
                                                    executables: [
                                                        true,
                                                        true
                                                    ],
                                                    properties: [
                                                        {
                                                            amount: 'single',
                                                            type: 'entities'
                                                        },
                                                        undefined
                                                    ],
                                                    arguments: [
                                                        'source',
                                                        'sourcePath'
                                                    ],
                                                    parsersId: 31
                                                },
                                                storage: {
                                                    type: 'literalArgument',
                                                    parsers: [
                                                        'minecraft:resource_location',
                                                        'minecraft:nbt_path'
                                                    ],
                                                    executables: [
                                                        true,
                                                        true
                                                    ],
                                                    arguments: [
                                                        'source',
                                                        'sourcePath'
                                                    ],
                                                    parsersId: 32
                                                }
                                            }
                                        },
                                        value: {
                                            type: 'literalArgument',
                                            parsers: [
                                                'minecraft:nbt_tag'
                                            ],
                                            executables: [
                                                true
                                            ],
                                            arguments: [
                                                'value'
                                            ],
                                            parsersId: 33
                                        }
                                    }
                                },
                                set: {
                                    type: 'literal',
                                    children: {
                                        from: {
                                            type: 'literal',
                                            children: {
                                                block: {
                                                    type: 'literalArgument',
                                                    parsers: [
                                                        'minecraft:block_pos',
                                                        'minecraft:nbt_path'
                                                    ],
                                                    executables: [
                                                        true,
                                                        true
                                                    ],
                                                    arguments: [
                                                        'sourcePos',
                                                        'sourcePath'
                                                    ],
                                                    parsersId: 30
                                                },
                                                entity: {
                                                    type: 'literalArgument',
                                                    parsers: [
                                                        'minecraft:entity',
                                                        'minecraft:nbt_path'
                                                    ],
                                                    executables: [
                                                        true,
                                                        true
                                                    ],
                                                    properties: [
                                                        {
                                                            amount: 'single',
                                                            type: 'entities'
                                                        },
                                                        undefined
                                                    ],
                                                    arguments: [
                                                        'source',
                                                        'sourcePath'
                                                    ],
                                                    parsersId: 31
                                                },
                                                storage: {
                                                    type: 'literalArgument',
                                                    parsers: [
                                                        'minecraft:resource_location',
                                                        'minecraft:nbt_path'
                                                    ],
                                                    executables: [
                                                        true,
                                                        true
                                                    ],
                                                    arguments: [
                                                        'source',
                                                        'sourcePath'
                                                    ],
                                                    parsersId: 32
                                                }
                                            }
                                        },
                                        value: {
                                            type: 'literalArgument',
                                            parsers: [
                                                'minecraft:nbt_tag'
                                            ],
                                            executables: [
                                                true
                                            ],
                                            arguments: [
                                                'value'
                                            ],
                                            parsersId: 33
                                        }
                                    }
                                }
                            },
                            parsersId: 35
                        },
                        storage: {
                            type: 'literalArgument',
                            parsers: [
                                'minecraft:resource_location',
                                'minecraft:nbt_path'
                            ],
                            executables: [
                                false,
                                false
                            ],
                            arguments: [
                                'target',
                                'targetPath'
                            ],
                            children: {
                                append: {
                                    type: 'literal',
                                    children: {
                                        from: {
                                            type: 'literal',
                                            children: {
                                                block: {
                                                    type: 'literalArgument',
                                                    parsers: [
                                                        'minecraft:block_pos',
                                                        'minecraft:nbt_path'
                                                    ],
                                                    executables: [
                                                        true,
                                                        true
                                                    ],
                                                    arguments: [
                                                        'sourcePos',
                                                        'sourcePath'
                                                    ],
                                                    parsersId: 30
                                                },
                                                entity: {
                                                    type: 'literalArgument',
                                                    parsers: [
                                                        'minecraft:entity',
                                                        'minecraft:nbt_path'
                                                    ],
                                                    executables: [
                                                        true,
                                                        true
                                                    ],
                                                    properties: [
                                                        {
                                                            amount: 'single',
                                                            type: 'entities'
                                                        },
                                                        undefined
                                                    ],
                                                    arguments: [
                                                        'source',
                                                        'sourcePath'
                                                    ],
                                                    parsersId: 31
                                                },
                                                storage: {
                                                    type: 'literalArgument',
                                                    parsers: [
                                                        'minecraft:resource_location',
                                                        'minecraft:nbt_path'
                                                    ],
                                                    executables: [
                                                        true,
                                                        true
                                                    ],
                                                    arguments: [
                                                        'source',
                                                        'sourcePath'
                                                    ],
                                                    parsersId: 32
                                                }
                                            }
                                        },
                                        value: {
                                            type: 'literalArgument',
                                            parsers: [
                                                'minecraft:nbt_tag'
                                            ],
                                            executables: [
                                                true
                                            ],
                                            arguments: [
                                                'value'
                                            ],
                                            parsersId: 33
                                        }
                                    }
                                },
                                insert: {
                                    type: 'literalArgument',
                                    parsers: [
                                        'brigadier:integer'
                                    ],
                                    executables: [
                                        false
                                    ],
                                    children: {
                                        from: {
                                            type: 'literal',
                                            children: {
                                                block: {
                                                    type: 'literalArgument',
                                                    parsers: [
                                                        'minecraft:block_pos',
                                                        'minecraft:nbt_path'
                                                    ],
                                                    executables: [
                                                        true,
                                                        true
                                                    ],
                                                    arguments: [
                                                        'sourcePos',
                                                        'sourcePath'
                                                    ],
                                                    parsersId: 30
                                                },
                                                entity: {
                                                    type: 'literalArgument',
                                                    parsers: [
                                                        'minecraft:entity',
                                                        'minecraft:nbt_path'
                                                    ],
                                                    executables: [
                                                        true,
                                                        true
                                                    ],
                                                    properties: [
                                                        {
                                                            amount: 'single',
                                                            type: 'entities'
                                                        },
                                                        undefined
                                                    ],
                                                    arguments: [
                                                        'source',
                                                        'sourcePath'
                                                    ],
                                                    parsersId: 31
                                                },
                                                storage: {
                                                    type: 'literalArgument',
                                                    parsers: [
                                                        'minecraft:resource_location',
                                                        'minecraft:nbt_path'
                                                    ],
                                                    executables: [
                                                        true,
                                                        true
                                                    ],
                                                    arguments: [
                                                        'source',
                                                        'sourcePath'
                                                    ],
                                                    parsersId: 32
                                                }
                                            }
                                        },
                                        value: {
                                            type: 'literalArgument',
                                            parsers: [
                                                'minecraft:nbt_tag'
                                            ],
                                            executables: [
                                                true
                                            ],
                                            arguments: [
                                                'value'
                                            ],
                                            parsersId: 33
                                        }
                                    },
                                    arguments: [
                                        'index'
                                    ],
                                    parsersId: 34
                                },
                                merge: {
                                    type: 'literal',
                                    children: {
                                        from: {
                                            type: 'literal',
                                            children: {
                                                block: {
                                                    type: 'literalArgument',
                                                    parsers: [
                                                        'minecraft:block_pos',
                                                        'minecraft:nbt_path'
                                                    ],
                                                    executables: [
                                                        true,
                                                        true
                                                    ],
                                                    arguments: [
                                                        'sourcePos',
                                                        'sourcePath'
                                                    ],
                                                    parsersId: 30
                                                },
                                                entity: {
                                                    type: 'literalArgument',
                                                    parsers: [
                                                        'minecraft:entity',
                                                        'minecraft:nbt_path'
                                                    ],
                                                    executables: [
                                                        true,
                                                        true
                                                    ],
                                                    properties: [
                                                        {
                                                            amount: 'single',
                                                            type: 'entities'
                                                        },
                                                        undefined
                                                    ],
                                                    arguments: [
                                                        'source',
                                                        'sourcePath'
                                                    ],
                                                    parsersId: 31
                                                },
                                                storage: {
                                                    type: 'literalArgument',
                                                    parsers: [
                                                        'minecraft:resource_location',
                                                        'minecraft:nbt_path'
                                                    ],
                                                    executables: [
                                                        true,
                                                        true
                                                    ],
                                                    arguments: [
                                                        'source',
                                                        'sourcePath'
                                                    ],
                                                    parsersId: 32
                                                }
                                            }
                                        },
                                        value: {
                                            type: 'literalArgument',
                                            parsers: [
                                                'minecraft:nbt_tag'
                                            ],
                                            executables: [
                                                true
                                            ],
                                            arguments: [
                                                'value'
                                            ],
                                            parsersId: 33
                                        }
                                    }
                                },
                                prepend: {
                                    type: 'literal',
                                    children: {
                                        from: {
                                            type: 'literal',
                                            children: {
                                                block: {
                                                    type: 'literalArgument',
                                                    parsers: [
                                                        'minecraft:block_pos',
                                                        'minecraft:nbt_path'
                                                    ],
                                                    executables: [
                                                        true,
                                                        true
                                                    ],
                                                    arguments: [
                                                        'sourcePos',
                                                        'sourcePath'
                                                    ],
                                                    parsersId: 30
                                                },
                                                entity: {
                                                    type: 'literalArgument',
                                                    parsers: [
                                                        'minecraft:entity',
                                                        'minecraft:nbt_path'
                                                    ],
                                                    executables: [
                                                        true,
                                                        true
                                                    ],
                                                    properties: [
                                                        {
                                                            amount: 'single',
                                                            type: 'entities'
                                                        },
                                                        undefined
                                                    ],
                                                    arguments: [
                                                        'source',
                                                        'sourcePath'
                                                    ],
                                                    parsersId: 31
                                                },
                                                storage: {
                                                    type: 'literalArgument',
                                                    parsers: [
                                                        'minecraft:resource_location',
                                                        'minecraft:nbt_path'
                                                    ],
                                                    executables: [
                                                        true,
                                                        true
                                                    ],
                                                    arguments: [
                                                        'source',
                                                        'sourcePath'
                                                    ],
                                                    parsersId: 32
                                                }
                                            }
                                        },
                                        value: {
                                            type: 'literalArgument',
                                            parsers: [
                                                'minecraft:nbt_tag'
                                            ],
                                            executables: [
                                                true
                                            ],
                                            arguments: [
                                                'value'
                                            ],
                                            parsersId: 33
                                        }
                                    }
                                },
                                set: {
                                    type: 'literal',
                                    children: {
                                        from: {
                                            type: 'literal',
                                            children: {
                                                block: {
                                                    type: 'literalArgument',
                                                    parsers: [
                                                        'minecraft:block_pos',
                                                        'minecraft:nbt_path'
                                                    ],
                                                    executables: [
                                                        true,
                                                        true
                                                    ],
                                                    arguments: [
                                                        'sourcePos',
                                                        'sourcePath'
                                                    ],
                                                    parsersId: 30
                                                },
                                                entity: {
                                                    type: 'literalArgument',
                                                    parsers: [
                                                        'minecraft:entity',
                                                        'minecraft:nbt_path'
                                                    ],
                                                    executables: [
                                                        true,
                                                        true
                                                    ],
                                                    properties: [
                                                        {
                                                            amount: 'single',
                                                            type: 'entities'
                                                        },
                                                        undefined
                                                    ],
                                                    arguments: [
                                                        'source',
                                                        'sourcePath'
                                                    ],
                                                    parsersId: 31
                                                },
                                                storage: {
                                                    type: 'literalArgument',
                                                    parsers: [
                                                        'minecraft:resource_location',
                                                        'minecraft:nbt_path'
                                                    ],
                                                    executables: [
                                                        true,
                                                        true
                                                    ],
                                                    arguments: [
                                                        'source',
                                                        'sourcePath'
                                                    ],
                                                    parsersId: 32
                                                }
                                            }
                                        },
                                        value: {
                                            type: 'literalArgument',
                                            parsers: [
                                                'minecraft:nbt_tag'
                                            ],
                                            executables: [
                                                true
                                            ],
                                            arguments: [
                                                'value'
                                            ],
                                            parsersId: 33
                                        }
                                    }
                                }
                            },
                            parsersId: 36
                        }
                    }
                },
                remove: {
                    type: 'literal',
                    children: {
                        block: {
                            type: 'literalArgument',
                            parsers: [
                                'minecraft:block_pos',
                                'minecraft:nbt_path'
                            ],
                            executables: [
                                false,
                                true
                            ],
                            arguments: [
                                'targetPos',
                                'path'
                            ],
                            parsersId: 37
                        },
                        entity: {
                            type: 'literalArgument',
                            parsers: [
                                'minecraft:entity',
                                'minecraft:nbt_path'
                            ],
                            executables: [
                                false,
                                true
                            ],
                            properties: [
                                {
                                    amount: 'single',
                                    type: 'entities'
                                },
                                undefined
                            ],
                            arguments: [
                                'target',
                                'path'
                            ],
                            parsersId: 38
                        },
                        storage: {
                            type: 'literalArgument',
                            parsers: [
                                'minecraft:resource_location',
                                'minecraft:nbt_path'
                            ],
                            executables: [
                                false,
                                true
                            ],
                            arguments: [
                                'target',
                                'path'
                            ],
                            parsersId: 39
                        }
                    }
                }
            }
        },
        datapack: {
            type: 'literal',
            children: {
                disable: {
                    type: 'literalArgument',
                    parsers: [
                        'brigadier:string'
                    ],
                    executables: [
                        true
                    ],
                    properties: [
                        {
                            type: 'phrase'
                        }
                    ],
                    arguments: [
                        'name'
                    ],
                    parsersId: 40
                },
                enable: {
                    type: 'literalArgument',
                    parsers: [
                        'brigadier:string'
                    ],
                    executables: [
                        true
                    ],
                    properties: [
                        {
                            type: 'phrase'
                        }
                    ],
                    children: {
                        after: {
                            type: 'literalArgument',
                            parsers: [
                                'brigadier:string'
                            ],
                            executables: [
                                true
                            ],
                            properties: [
                                {
                                    type: 'phrase'
                                }
                            ],
                            arguments: [
                                'existing'
                            ],
                            parsersId: 41
                        },
                        before: {
                            type: 'literalArgument',
                            parsers: [
                                'brigadier:string'
                            ],
                            executables: [
                                true
                            ],
                            properties: [
                                {
                                    type: 'phrase'
                                }
                            ],
                            arguments: [
                                'existing'
                            ],
                            parsersId: 41
                        },
                        first: {
                            type: 'literalArgument',
                            parsers: [],
                            executables: [],
                            arguments: [],
                            parsersId: 1
                        },
                        last: {
                            type: 'literalArgument',
                            parsers: [],
                            executables: [],
                            arguments: [],
                            parsersId: 1
                        }
                    },
                    arguments: [
                        'name'
                    ],
                    parsersId: 40
                },
                list: {
                    type: 'literalArgument',
                    parsers: [
                        'sandstone:literals'
                    ],
                    executables: [
                        true,
                        true
                    ],
                    literalValues: [
                        [
                            'available',
                            'enabled'
                        ]
                    ],
                    arguments: [
                        'option'
                    ],
                    parsersId: 42
                }
            }
        },
        defaultgamemode: {
            type: 'literalArgument',
            parsers: [
                'sandstone:literals'
            ],
            executables: [
                true
            ],
            literalValues: [
                [
                    'adventure',
                    'creative',
                    'spectator',
                    'survival'
                ]
            ],
            arguments: [
                'option'
            ],
            parsersId: 43
        },
        difficulty: {
            type: 'literalArgument',
            parsers: [
                'sandstone:literals'
            ],
            executables: [
                true,
                true
            ],
            literalValues: [
                [
                    'easy',
                    'hard',
                    'normal',
                    'peaceful'
                ]
            ],
            arguments: [
                'option'
            ],
            parsersId: 44
        },
        effect: {
            type: 'literal',
            children: {
                clear: {
                    type: 'literalArgument',
                    parsers: [
                        'minecraft:entity',
                        'minecraft:mob_effect'
                    ],
                    executables: [
                        true,
                        true,
                        true
                    ],
                    properties: [
                        {
                            amount: 'multiple',
                            type: 'entities'
                        },
                        undefined
                    ],
                    arguments: [
                        'targets',
                        'effect'
                    ],
                    parsersId: 45
                },
                give: {
                    type: 'literalArgument',
                    parsers: [
                        'minecraft:entity',
                        'minecraft:mob_effect',
                        'brigadier:integer',
                        'brigadier:integer',
                        'brigadier:bool'
                    ],
                    executables: [
                        false,
                        true,
                        true,
                        true,
                        true
                    ],
                    properties: [
                        {
                            amount: 'multiple',
                            type: 'entities'
                        },
                        undefined,
                        {
                            min: 1,
                            max: 1000000
                        },
                        {
                            min: 0,
                            max: 255
                        },
                        undefined
                    ],
                    arguments: [
                        'targets',
                        'effect',
                        'seconds',
                        'amplifier',
                        'hideParticles'
                    ],
                    parsersId: 46
                }
            }
        },
        enchant: {
            type: 'literalArgument',
            parsers: [
                'minecraft:entity',
                'minecraft:item_enchantment',
                'brigadier:integer'
            ],
            executables: [
                false,
                true,
                true
            ],
            properties: [
                {
                    amount: 'multiple',
                    type: 'entities'
                },
                undefined,
                {
                    min: 0
                }
            ],
            arguments: [
                'targets',
                'enchantment',
                'level'
            ],
            parsersId: 47
        },
        execute: {
            type: 'literal',
            children: {
                align: {
                    type: 'literalArgument',
                    parsers: [
                        'minecraft:swizzle'
                    ],
                    executables: [
                        false
                    ],
                    redirect: [
                        'execute',
                        'root'
                    ],
                    arguments: [
                        'axes'
                    ],
                    parsersId: 48
                },
                anchored: {
                    type: 'literalArgument',
                    parsers: [
                        'minecraft:entity_anchor'
                    ],
                    executables: [
                        false
                    ],
                    redirect: [
                        'execute',
                        'root'
                    ],
                    arguments: [
                        'anchor'
                    ],
                    parsersId: 49
                },
                as: {
                    type: 'literalArgument',
                    parsers: [
                        'minecraft:entity'
                    ],
                    executables: [
                        false
                    ],
                    properties: [
                        {
                            amount: 'multiple',
                            type: 'entities'
                        }
                    ],
                    redirect: [
                        'execute',
                        'root'
                    ],
                    arguments: [
                        'targets'
                    ],
                    parsersId: 0
                },
                at: {
                    type: 'literalArgument',
                    parsers: [
                        'minecraft:entity'
                    ],
                    executables: [
                        false
                    ],
                    properties: [
                        {
                            amount: 'multiple',
                            type: 'entities'
                        }
                    ],
                    redirect: [
                        'execute',
                        'root'
                    ],
                    arguments: [
                        'targets'
                    ],
                    parsersId: 0
                },
                facing: {
                    type: 'literal',
                    children: {
                        entity: {
                            type: 'literalArgument',
                            parsers: [
                                'minecraft:entity',
                                'minecraft:entity_anchor'
                            ],
                            executables: [
                                false,
                                false
                            ],
                            properties: [
                                {
                                    amount: 'multiple',
                                    type: 'entities'
                                },
                                undefined
                            ],
                            arguments: [
                                'targets',
                                'anchor'
                            ],
                            redirect: [
                                'execute',
                                'root'
                            ],
                            parsersId: 50
                        },
                        pos: {
                            type: 'argument',
                            redirect: [
                                'execute',
                                'root'
                            ],
                            parsers: [
                                'minecraft:vec3'
                            ],
                            executables: [
                                false
                            ],
                            parsersId: 51
                        }
                    }
                },
                if: {
                    type: 'literal',
                    children: {
                        block: {
                            type: 'literalArgument',
                            parsers: [
                                'minecraft:block_pos',
                                'minecraft:block_predicate'
                            ],
                            executables: [
                                false,
                                true
                            ],
                            arguments: [
                                'pos',
                                'block'
                            ],
                            redirect: [
                                'execute',
                                'root'
                            ],
                            parsersId: 52
                        },
                        blocks: {
                            type: 'literalArgument',
                            parsers: [
                                'minecraft:block_pos',
                                'minecraft:block_pos',
                                'minecraft:block_pos',
                                'sandstone:literals'
                            ],
                            executables: [
                                false,
                                false,
                                false,
                                true
                            ],
                            arguments: [
                                'start',
                                'end',
                                'destination',
                                'option'
                            ],
                            redirect: [
                                'execute',
                                'root'
                            ],
                            parsersId: 53
                        },
                        data: {
                            type: 'literal',
                            children: {
                                block: {
                                    type: 'literalArgument',
                                    parsers: [
                                        'minecraft:block_pos',
                                        'minecraft:nbt_path'
                                    ],
                                    executables: [
                                        false,
                                        true
                                    ],
                                    arguments: [
                                        'sourcePos',
                                        'path'
                                    ],
                                    redirect: [
                                        'execute',
                                        'root'
                                    ],
                                    parsersId: 54
                                },
                                entity: {
                                    type: 'literalArgument',
                                    parsers: [
                                        'minecraft:entity',
                                        'minecraft:nbt_path'
                                    ],
                                    executables: [
                                        false,
                                        true
                                    ],
                                    properties: [
                                        {
                                            amount: 'single',
                                            type: 'entities'
                                        },
                                        undefined
                                    ],
                                    arguments: [
                                        'source',
                                        'path'
                                    ],
                                    redirect: [
                                        'execute',
                                        'root'
                                    ],
                                    parsersId: 55
                                },
                                storage: {
                                    type: 'literalArgument',
                                    parsers: [
                                        'minecraft:resource_location',
                                        'minecraft:nbt_path'
                                    ],
                                    executables: [
                                        false,
                                        true
                                    ],
                                    arguments: [
                                        'source',
                                        'path'
                                    ],
                                    redirect: [
                                        'execute',
                                        'root'
                                    ],
                                    parsersId: 56
                                }
                            }
                        },
                        entity: {
                            type: 'literalArgument',
                            parsers: [
                                'minecraft:entity'
                            ],
                            executables: [
                                true
                            ],
                            properties: [
                                {
                                    amount: 'multiple',
                                    type: 'entities'
                                }
                            ],
                            redirect: [
                                'execute',
                                'root'
                            ],
                            arguments: [
                                'entities'
                            ],
                            parsersId: 57
                        },
                        predicate: {
                            type: 'literalArgument',
                            parsers: [
                                'minecraft:resource_location'
                            ],
                            executables: [
                                true
                            ],
                            redirect: [
                                'execute',
                                'root'
                            ],
                            arguments: [
                                'predicate'
                            ],
                            parsersId: 58
                        },
                        score: {
                            type: 'literalArgument',
                            parsers: [
                                'minecraft:score_holder',
                                'minecraft:objective'
                            ],
                            executables: [
                                false,
                                false
                            ],
                            properties: [
                                {
                                    amount: 'single'
                                },
                                undefined
                            ],
                            arguments: [
                                'target',
                                'targetObjective'
                            ],
                            children: {
                                '<': {
                                    type: 'literalArgument',
                                    parsers: [
                                        'minecraft:score_holder',
                                        'minecraft:objective'
                                    ],
                                    executables: [
                                        false,
                                        true
                                    ],
                                    properties: [
                                        {
                                            amount: 'single'
                                        },
                                        undefined
                                    ],
                                    arguments: [
                                        'source',
                                        'sourceObjective'
                                    ],
                                    redirect: [
                                        'execute',
                                        'root'
                                    ],
                                    parsersId: 60
                                },
                                '<=': {
                                    type: 'literalArgument',
                                    parsers: [
                                        'minecraft:score_holder',
                                        'minecraft:objective'
                                    ],
                                    executables: [
                                        false,
                                        true
                                    ],
                                    properties: [
                                        {
                                            amount: 'single'
                                        },
                                        undefined
                                    ],
                                    arguments: [
                                        'source',
                                        'sourceObjective'
                                    ],
                                    redirect: [
                                        'execute',
                                        'root'
                                    ],
                                    parsersId: 60
                                },
                                '=': {
                                    type: 'literalArgument',
                                    parsers: [
                                        'minecraft:score_holder',
                                        'minecraft:objective'
                                    ],
                                    executables: [
                                        false,
                                        true
                                    ],
                                    properties: [
                                        {
                                            amount: 'single'
                                        },
                                        undefined
                                    ],
                                    arguments: [
                                        'source',
                                        'sourceObjective'
                                    ],
                                    redirect: [
                                        'execute',
                                        'root'
                                    ],
                                    parsersId: 60
                                },
                                '>': {
                                    type: 'literalArgument',
                                    parsers: [
                                        'minecraft:score_holder',
                                        'minecraft:objective'
                                    ],
                                    executables: [
                                        false,
                                        true
                                    ],
                                    properties: [
                                        {
                                            amount: 'single'
                                        },
                                        undefined
                                    ],
                                    arguments: [
                                        'source',
                                        'sourceObjective'
                                    ],
                                    redirect: [
                                        'execute',
                                        'root'
                                    ],
                                    parsersId: 60
                                },
                                '>=': {
                                    type: 'literalArgument',
                                    parsers: [
                                        'minecraft:score_holder',
                                        'minecraft:objective'
                                    ],
                                    executables: [
                                        false,
                                        true
                                    ],
                                    properties: [
                                        {
                                            amount: 'single'
                                        },
                                        undefined
                                    ],
                                    arguments: [
                                        'source',
                                        'sourceObjective'
                                    ],
                                    redirect: [
                                        'execute',
                                        'root'
                                    ],
                                    parsersId: 60
                                },
                                matches: {
                                    type: 'literalArgument',
                                    parsers: [
                                        'minecraft:int_range'
                                    ],
                                    executables: [
                                        true
                                    ],
                                    redirect: [
                                        'execute',
                                        'root'
                                    ],
                                    arguments: [
                                        'range'
                                    ],
                                    parsersId: 61
                                }
                            },
                            parsersId: 59
                        }
                    }
                },
                in: {
                    type: 'literalArgument',
                    parsers: [
                        'minecraft:dimension'
                    ],
                    executables: [
                        false
                    ],
                    redirect: [
                        'execute',
                        'root'
                    ],
                    arguments: [
                        'dimension'
                    ],
                    parsersId: 62
                },
                positioned: {
                    type: 'literal',
                    children: {
                        as: {
                            type: 'literalArgument',
                            parsers: [
                                'minecraft:entity'
                            ],
                            executables: [
                                false
                            ],
                            properties: [
                                {
                                    amount: 'multiple',
                                    type: 'entities'
                                }
                            ],
                            redirect: [
                                'execute',
                                'root'
                            ],
                            arguments: [
                                'targets'
                            ],
                            parsersId: 0
                        },
                        pos: {
                            type: 'argument',
                            redirect: [
                                'execute',
                                'root'
                            ],
                            parsers: [
                                'minecraft:vec3'
                            ],
                            executables: [
                                false
                            ],
                            parsersId: 51
                        }
                    }
                },
                rotated: {
                    type: 'literal',
                    children: {
                        as: {
                            type: 'literalArgument',
                            parsers: [
                                'minecraft:entity'
                            ],
                            executables: [
                                false
                            ],
                            properties: [
                                {
                                    amount: 'multiple',
                                    type: 'entities'
                                }
                            ],
                            redirect: [
                                'execute',
                                'root'
                            ],
                            arguments: [
                                'targets'
                            ],
                            parsersId: 0
                        },
                        rot: {
                            type: 'argument',
                            redirect: [
                                'execute',
                                'root'
                            ],
                            parsers: [
                                'minecraft:rotation'
                            ],
                            executables: [
                                false
                            ],
                            parsersId: 63
                        }
                    }
                },
                store: {
                    type: 'literal',
                    children: {
                        result: {
                            type: 'literal',
                            children: {
                                block: {
                                    type: 'literalArgument',
                                    parsers: [
                                        'minecraft:block_pos',
                                        'minecraft:nbt_path'
                                    ],
                                    executables: [
                                        false,
                                        false
                                    ],
                                    arguments: [
                                        'targetPos',
                                        'path'
                                    ],
                                    children: {
                                        byte: {
                                            type: 'literalArgument',
                                            parsers: [
                                                'brigadier:double'
                                            ],
                                            executables: [
                                                false
                                            ],
                                            redirect: [
                                                'execute',
                                                'root'
                                            ],
                                            arguments: [
                                                'scale'
                                            ],
                                            parsersId: 5
                                        },
                                        double: {
                                            type: 'literalArgument',
                                            parsers: [
                                                'brigadier:double'
                                            ],
                                            executables: [
                                                false
                                            ],
                                            redirect: [
                                                'execute',
                                                'root'
                                            ],
                                            arguments: [
                                                'scale'
                                            ],
                                            parsersId: 5
                                        },
                                        float: {
                                            type: 'literalArgument',
                                            parsers: [
                                                'brigadier:double'
                                            ],
                                            executables: [
                                                false
                                            ],
                                            redirect: [
                                                'execute',
                                                'root'
                                            ],
                                            arguments: [
                                                'scale'
                                            ],
                                            parsersId: 5
                                        },
                                        int: {
                                            type: 'literalArgument',
                                            parsers: [
                                                'brigadier:double'
                                            ],
                                            executables: [
                                                false
                                            ],
                                            redirect: [
                                                'execute',
                                                'root'
                                            ],
                                            arguments: [
                                                'scale'
                                            ],
                                            parsersId: 5
                                        },
                                        long: {
                                            type: 'literalArgument',
                                            parsers: [
                                                'brigadier:double'
                                            ],
                                            executables: [
                                                false
                                            ],
                                            redirect: [
                                                'execute',
                                                'root'
                                            ],
                                            arguments: [
                                                'scale'
                                            ],
                                            parsersId: 5
                                        },
                                        short: {
                                            type: 'literalArgument',
                                            parsers: [
                                                'brigadier:double'
                                            ],
                                            executables: [
                                                false
                                            ],
                                            redirect: [
                                                'execute',
                                                'root'
                                            ],
                                            arguments: [
                                                'scale'
                                            ],
                                            parsersId: 5
                                        }
                                    },
                                    parsersId: 37
                                },
                                bossbar: {
                                    type: 'literalArgument',
                                    parsers: [
                                        'minecraft:resource_location',
                                        'sandstone:literals'
                                    ],
                                    executables: [
                                        false,
                                        false
                                    ],
                                    arguments: [
                                        'id',
                                        'option'
                                    ],
                                    redirect: [
                                        'execute',
                                        'root'
                                    ],
                                    parsersId: 64
                                },
                                entity: {
                                    type: 'literalArgument',
                                    parsers: [
                                        'minecraft:entity',
                                        'minecraft:nbt_path'
                                    ],
                                    executables: [
                                        false,
                                        false
                                    ],
                                    properties: [
                                        {
                                            amount: 'single',
                                            type: 'entities'
                                        },
                                        undefined
                                    ],
                                    arguments: [
                                        'target',
                                        'path'
                                    ],
                                    children: {
                                        byte: {
                                            type: 'literalArgument',
                                            parsers: [
                                                'brigadier:double'
                                            ],
                                            executables: [
                                                false
                                            ],
                                            redirect: [
                                                'execute',
                                                'root'
                                            ],
                                            arguments: [
                                                'scale'
                                            ],
                                            parsersId: 5
                                        },
                                        double: {
                                            type: 'literalArgument',
                                            parsers: [
                                                'brigadier:double'
                                            ],
                                            executables: [
                                                false
                                            ],
                                            redirect: [
                                                'execute',
                                                'root'
                                            ],
                                            arguments: [
                                                'scale'
                                            ],
                                            parsersId: 5
                                        },
                                        float: {
                                            type: 'literalArgument',
                                            parsers: [
                                                'brigadier:double'
                                            ],
                                            executables: [
                                                false
                                            ],
                                            redirect: [
                                                'execute',
                                                'root'
                                            ],
                                            arguments: [
                                                'scale'
                                            ],
                                            parsersId: 5
                                        },
                                        int: {
                                            type: 'literalArgument',
                                            parsers: [
                                                'brigadier:double'
                                            ],
                                            executables: [
                                                false
                                            ],
                                            redirect: [
                                                'execute',
                                                'root'
                                            ],
                                            arguments: [
                                                'scale'
                                            ],
                                            parsersId: 5
                                        },
                                        long: {
                                            type: 'literalArgument',
                                            parsers: [
                                                'brigadier:double'
                                            ],
                                            executables: [
                                                false
                                            ],
                                            redirect: [
                                                'execute',
                                                'root'
                                            ],
                                            arguments: [
                                                'scale'
                                            ],
                                            parsersId: 5
                                        },
                                        short: {
                                            type: 'literalArgument',
                                            parsers: [
                                                'brigadier:double'
                                            ],
                                            executables: [
                                                false
                                            ],
                                            redirect: [
                                                'execute',
                                                'root'
                                            ],
                                            arguments: [
                                                'scale'
                                            ],
                                            parsersId: 5
                                        }
                                    },
                                    parsersId: 38
                                },
                                score: {
                                    type: 'literalArgument',
                                    parsers: [
                                        'minecraft:score_holder',
                                        'minecraft:objective'
                                    ],
                                    executables: [
                                        false,
                                        false
                                    ],
                                    properties: [
                                        {
                                            amount: 'multiple'
                                        },
                                        undefined
                                    ],
                                    arguments: [
                                        'targets',
                                        'objective'
                                    ],
                                    redirect: [
                                        'execute',
                                        'root'
                                    ],
                                    parsersId: 65
                                },
                                storage: {
                                    type: 'literalArgument',
                                    parsers: [
                                        'minecraft:resource_location',
                                        'minecraft:nbt_path'
                                    ],
                                    executables: [
                                        false,
                                        false
                                    ],
                                    arguments: [
                                        'target',
                                        'path'
                                    ],
                                    children: {
                                        byte: {
                                            type: 'literalArgument',
                                            parsers: [
                                                'brigadier:double'
                                            ],
                                            executables: [
                                                false
                                            ],
                                            redirect: [
                                                'execute',
                                                'root'
                                            ],
                                            arguments: [
                                                'scale'
                                            ],
                                            parsersId: 5
                                        },
                                        double: {
                                            type: 'literalArgument',
                                            parsers: [
                                                'brigadier:double'
                                            ],
                                            executables: [
                                                false
                                            ],
                                            redirect: [
                                                'execute',
                                                'root'
                                            ],
                                            arguments: [
                                                'scale'
                                            ],
                                            parsersId: 5
                                        },
                                        float: {
                                            type: 'literalArgument',
                                            parsers: [
                                                'brigadier:double'
                                            ],
                                            executables: [
                                                false
                                            ],
                                            redirect: [
                                                'execute',
                                                'root'
                                            ],
                                            arguments: [
                                                'scale'
                                            ],
                                            parsersId: 5
                                        },
                                        int: {
                                            type: 'literalArgument',
                                            parsers: [
                                                'brigadier:double'
                                            ],
                                            executables: [
                                                false
                                            ],
                                            redirect: [
                                                'execute',
                                                'root'
                                            ],
                                            arguments: [
                                                'scale'
                                            ],
                                            parsersId: 5
                                        },
                                        long: {
                                            type: 'literalArgument',
                                            parsers: [
                                                'brigadier:double'
                                            ],
                                            executables: [
                                                false
                                            ],
                                            redirect: [
                                                'execute',
                                                'root'
                                            ],
                                            arguments: [
                                                'scale'
                                            ],
                                            parsersId: 5
                                        },
                                        short: {
                                            type: 'literalArgument',
                                            parsers: [
                                                'brigadier:double'
                                            ],
                                            executables: [
                                                false
                                            ],
                                            redirect: [
                                                'execute',
                                                'root'
                                            ],
                                            arguments: [
                                                'scale'
                                            ],
                                            parsersId: 5
                                        }
                                    },
                                    parsersId: 39
                                }
                            }
                        },
                        success: {
                            type: 'literal',
                            children: {
                                block: {
                                    type: 'literalArgument',
                                    parsers: [
                                        'minecraft:block_pos',
                                        'minecraft:nbt_path'
                                    ],
                                    executables: [
                                        false,
                                        false
                                    ],
                                    arguments: [
                                        'targetPos',
                                        'path'
                                    ],
                                    children: {
                                        byte: {
                                            type: 'literalArgument',
                                            parsers: [
                                                'brigadier:double'
                                            ],
                                            executables: [
                                                false
                                            ],
                                            redirect: [
                                                'execute',
                                                'root'
                                            ],
                                            arguments: [
                                                'scale'
                                            ],
                                            parsersId: 5
                                        },
                                        double: {
                                            type: 'literalArgument',
                                            parsers: [
                                                'brigadier:double'
                                            ],
                                            executables: [
                                                false
                                            ],
                                            redirect: [
                                                'execute',
                                                'root'
                                            ],
                                            arguments: [
                                                'scale'
                                            ],
                                            parsersId: 5
                                        },
                                        float: {
                                            type: 'literalArgument',
                                            parsers: [
                                                'brigadier:double'
                                            ],
                                            executables: [
                                                false
                                            ],
                                            redirect: [
                                                'execute',
                                                'root'
                                            ],
                                            arguments: [
                                                'scale'
                                            ],
                                            parsersId: 5
                                        },
                                        int: {
                                            type: 'literalArgument',
                                            parsers: [
                                                'brigadier:double'
                                            ],
                                            executables: [
                                                false
                                            ],
                                            redirect: [
                                                'execute',
                                                'root'
                                            ],
                                            arguments: [
                                                'scale'
                                            ],
                                            parsersId: 5
                                        },
                                        long: {
                                            type: 'literalArgument',
                                            parsers: [
                                                'brigadier:double'
                                            ],
                                            executables: [
                                                false
                                            ],
                                            redirect: [
                                                'execute',
                                                'root'
                                            ],
                                            arguments: [
                                                'scale'
                                            ],
                                            parsersId: 5
                                        },
                                        short: {
                                            type: 'literalArgument',
                                            parsers: [
                                                'brigadier:double'
                                            ],
                                            executables: [
                                                false
                                            ],
                                            redirect: [
                                                'execute',
                                                'root'
                                            ],
                                            arguments: [
                                                'scale'
                                            ],
                                            parsersId: 5
                                        }
                                    },
                                    parsersId: 37
                                },
                                bossbar: {
                                    type: 'literalArgument',
                                    parsers: [
                                        'minecraft:resource_location',
                                        'sandstone:literals'
                                    ],
                                    executables: [
                                        false,
                                        false
                                    ],
                                    arguments: [
                                        'id',
                                        'option'
                                    ],
                                    redirect: [
                                        'execute',
                                        'root'
                                    ],
                                    parsersId: 64
                                },
                                entity: {
                                    type: 'literalArgument',
                                    parsers: [
                                        'minecraft:entity',
                                        'minecraft:nbt_path'
                                    ],
                                    executables: [
                                        false,
                                        false
                                    ],
                                    properties: [
                                        {
                                            amount: 'single',
                                            type: 'entities'
                                        },
                                        undefined
                                    ],
                                    arguments: [
                                        'target',
                                        'path'
                                    ],
                                    children: {
                                        byte: {
                                            type: 'literalArgument',
                                            parsers: [
                                                'brigadier:double'
                                            ],
                                            executables: [
                                                false
                                            ],
                                            redirect: [
                                                'execute',
                                                'root'
                                            ],
                                            arguments: [
                                                'scale'
                                            ],
                                            parsersId: 5
                                        },
                                        double: {
                                            type: 'literalArgument',
                                            parsers: [
                                                'brigadier:double'
                                            ],
                                            executables: [
                                                false
                                            ],
                                            redirect: [
                                                'execute',
                                                'root'
                                            ],
                                            arguments: [
                                                'scale'
                                            ],
                                            parsersId: 5
                                        },
                                        float: {
                                            type: 'literalArgument',
                                            parsers: [
                                                'brigadier:double'
                                            ],
                                            executables: [
                                                false
                                            ],
                                            redirect: [
                                                'execute',
                                                'root'
                                            ],
                                            arguments: [
                                                'scale'
                                            ],
                                            parsersId: 5
                                        },
                                        int: {
                                            type: 'literalArgument',
                                            parsers: [
                                                'brigadier:double'
                                            ],
                                            executables: [
                                                false
                                            ],
                                            redirect: [
                                                'execute',
                                                'root'
                                            ],
                                            arguments: [
                                                'scale'
                                            ],
                                            parsersId: 5
                                        },
                                        long: {
                                            type: 'literalArgument',
                                            parsers: [
                                                'brigadier:double'
                                            ],
                                            executables: [
                                                false
                                            ],
                                            redirect: [
                                                'execute',
                                                'root'
                                            ],
                                            arguments: [
                                                'scale'
                                            ],
                                            parsersId: 5
                                        },
                                        short: {
                                            type: 'literalArgument',
                                            parsers: [
                                                'brigadier:double'
                                            ],
                                            executables: [
                                                false
                                            ],
                                            redirect: [
                                                'execute',
                                                'root'
                                            ],
                                            arguments: [
                                                'scale'
                                            ],
                                            parsersId: 5
                                        }
                                    },
                                    parsersId: 38
                                },
                                score: {
                                    type: 'literalArgument',
                                    parsers: [
                                        'minecraft:score_holder',
                                        'minecraft:objective'
                                    ],
                                    executables: [
                                        false,
                                        false
                                    ],
                                    properties: [
                                        {
                                            amount: 'multiple'
                                        },
                                        undefined
                                    ],
                                    arguments: [
                                        'targets',
                                        'objective'
                                    ],
                                    redirect: [
                                        'execute',
                                        'root'
                                    ],
                                    parsersId: 65
                                },
                                storage: {
                                    type: 'literalArgument',
                                    parsers: [
                                        'minecraft:resource_location',
                                        'minecraft:nbt_path'
                                    ],
                                    executables: [
                                        false,
                                        false
                                    ],
                                    arguments: [
                                        'target',
                                        'path'
                                    ],
                                    children: {
                                        byte: {
                                            type: 'literalArgument',
                                            parsers: [
                                                'brigadier:double'
                                            ],
                                            executables: [
                                                false
                                            ],
                                            redirect: [
                                                'execute',
                                                'root'
                                            ],
                                            arguments: [
                                                'scale'
                                            ],
                                            parsersId: 5
                                        },
                                        double: {
                                            type: 'literalArgument',
                                            parsers: [
                                                'brigadier:double'
                                            ],
                                            executables: [
                                                false
                                            ],
                                            redirect: [
                                                'execute',
                                                'root'
                                            ],
                                            arguments: [
                                                'scale'
                                            ],
                                            parsersId: 5
                                        },
                                        float: {
                                            type: 'literalArgument',
                                            parsers: [
                                                'brigadier:double'
                                            ],
                                            executables: [
                                                false
                                            ],
                                            redirect: [
                                                'execute',
                                                'root'
                                            ],
                                            arguments: [
                                                'scale'
                                            ],
                                            parsersId: 5
                                        },
                                        int: {
                                            type: 'literalArgument',
                                            parsers: [
                                                'brigadier:double'
                                            ],
                                            executables: [
                                                false
                                            ],
                                            redirect: [
                                                'execute',
                                                'root'
                                            ],
                                            arguments: [
                                                'scale'
                                            ],
                                            parsersId: 5
                                        },
                                        long: {
                                            type: 'literalArgument',
                                            parsers: [
                                                'brigadier:double'
                                            ],
                                            executables: [
                                                false
                                            ],
                                            redirect: [
                                                'execute',
                                                'root'
                                            ],
                                            arguments: [
                                                'scale'
                                            ],
                                            parsersId: 5
                                        },
                                        short: {
                                            type: 'literalArgument',
                                            parsers: [
                                                'brigadier:double'
                                            ],
                                            executables: [
                                                false
                                            ],
                                            redirect: [
                                                'execute',
                                                'root'
                                            ],
                                            arguments: [
                                                'scale'
                                            ],
                                            parsersId: 5
                                        }
                                    },
                                    parsersId: 39
                                }
                            }
                        }
                    }
                },
                unless: {
                    type: 'literal',
                    children: {
                        block: {
                            type: 'literalArgument',
                            parsers: [
                                'minecraft:block_pos',
                                'minecraft:block_predicate'
                            ],
                            executables: [
                                false,
                                true
                            ],
                            arguments: [
                                'pos',
                                'block'
                            ],
                            redirect: [
                                'execute',
                                'root'
                            ],
                            parsersId: 52
                        },
                        blocks: {
                            type: 'literalArgument',
                            parsers: [
                                'minecraft:block_pos',
                                'minecraft:block_pos',
                                'minecraft:block_pos',
                                'sandstone:literals'
                            ],
                            executables: [
                                false,
                                false,
                                false,
                                true
                            ],
                            arguments: [
                                'start',
                                'end',
                                'destination',
                                'option'
                            ],
                            redirect: [
                                'execute',
                                'root'
                            ],
                            parsersId: 53
                        },
                        data: {
                            type: 'literal',
                            children: {
                                block: {
                                    type: 'literalArgument',
                                    parsers: [
                                        'minecraft:block_pos',
                                        'minecraft:nbt_path'
                                    ],
                                    executables: [
                                        false,
                                        true
                                    ],
                                    arguments: [
                                        'sourcePos',
                                        'path'
                                    ],
                                    redirect: [
                                        'execute',
                                        'root'
                                    ],
                                    parsersId: 54
                                },
                                entity: {
                                    type: 'literalArgument',
                                    parsers: [
                                        'minecraft:entity',
                                        'minecraft:nbt_path'
                                    ],
                                    executables: [
                                        false,
                                        true
                                    ],
                                    properties: [
                                        {
                                            amount: 'single',
                                            type: 'entities'
                                        },
                                        undefined
                                    ],
                                    arguments: [
                                        'source',
                                        'path'
                                    ],
                                    redirect: [
                                        'execute',
                                        'root'
                                    ],
                                    parsersId: 55
                                },
                                storage: {
                                    type: 'literalArgument',
                                    parsers: [
                                        'minecraft:resource_location',
                                        'minecraft:nbt_path'
                                    ],
                                    executables: [
                                        false,
                                        true
                                    ],
                                    arguments: [
                                        'source',
                                        'path'
                                    ],
                                    redirect: [
                                        'execute',
                                        'root'
                                    ],
                                    parsersId: 56
                                }
                            }
                        },
                        entity: {
                            type: 'literalArgument',
                            parsers: [
                                'minecraft:entity'
                            ],
                            executables: [
                                true
                            ],
                            properties: [
                                {
                                    amount: 'multiple',
                                    type: 'entities'
                                }
                            ],
                            redirect: [
                                'execute',
                                'root'
                            ],
                            arguments: [
                                'entities'
                            ],
                            parsersId: 57
                        },
                        predicate: {
                            type: 'literalArgument',
                            parsers: [
                                'minecraft:resource_location'
                            ],
                            executables: [
                                true
                            ],
                            redirect: [
                                'execute',
                                'root'
                            ],
                            arguments: [
                                'predicate'
                            ],
                            parsersId: 58
                        },
                        score: {
                            type: 'literalArgument',
                            parsers: [
                                'minecraft:score_holder',
                                'minecraft:objective'
                            ],
                            executables: [
                                false,
                                false
                            ],
                            properties: [
                                {
                                    amount: 'single'
                                },
                                undefined
                            ],
                            arguments: [
                                'target',
                                'targetObjective'
                            ],
                            children: {
                                '<': {
                                    type: 'literalArgument',
                                    parsers: [
                                        'minecraft:score_holder',
                                        'minecraft:objective'
                                    ],
                                    executables: [
                                        false,
                                        true
                                    ],
                                    properties: [
                                        {
                                            amount: 'single'
                                        },
                                        undefined
                                    ],
                                    arguments: [
                                        'source',
                                        'sourceObjective'
                                    ],
                                    redirect: [
                                        'execute',
                                        'root'
                                    ],
                                    parsersId: 60
                                },
                                '<=': {
                                    type: 'literalArgument',
                                    parsers: [
                                        'minecraft:score_holder',
                                        'minecraft:objective'
                                    ],
                                    executables: [
                                        false,
                                        true
                                    ],
                                    properties: [
                                        {
                                            amount: 'single'
                                        },
                                        undefined
                                    ],
                                    arguments: [
                                        'source',
                                        'sourceObjective'
                                    ],
                                    redirect: [
                                        'execute',
                                        'root'
                                    ],
                                    parsersId: 60
                                },
                                '=': {
                                    type: 'literalArgument',
                                    parsers: [
                                        'minecraft:score_holder',
                                        'minecraft:objective'
                                    ],
                                    executables: [
                                        false,
                                        true
                                    ],
                                    properties: [
                                        {
                                            amount: 'single'
                                        },
                                        undefined
                                    ],
                                    arguments: [
                                        'source',
                                        'sourceObjective'
                                    ],
                                    redirect: [
                                        'execute',
                                        'root'
                                    ],
                                    parsersId: 60
                                },
                                '>': {
                                    type: 'literalArgument',
                                    parsers: [
                                        'minecraft:score_holder',
                                        'minecraft:objective'
                                    ],
                                    executables: [
                                        false,
                                        true
                                    ],
                                    properties: [
                                        {
                                            amount: 'single'
                                        },
                                        undefined
                                    ],
                                    arguments: [
                                        'source',
                                        'sourceObjective'
                                    ],
                                    redirect: [
                                        'execute',
                                        'root'
                                    ],
                                    parsersId: 60
                                },
                                '>=': {
                                    type: 'literalArgument',
                                    parsers: [
                                        'minecraft:score_holder',
                                        'minecraft:objective'
                                    ],
                                    executables: [
                                        false,
                                        true
                                    ],
                                    properties: [
                                        {
                                            amount: 'single'
                                        },
                                        undefined
                                    ],
                                    arguments: [
                                        'source',
                                        'sourceObjective'
                                    ],
                                    redirect: [
                                        'execute',
                                        'root'
                                    ],
                                    parsersId: 60
                                },
                                matches: {
                                    type: 'literalArgument',
                                    parsers: [
                                        'minecraft:int_range'
                                    ],
                                    executables: [
                                        true
                                    ],
                                    redirect: [
                                        'execute',
                                        'root'
                                    ],
                                    arguments: [
                                        'range'
                                    ],
                                    parsersId: 61
                                }
                            },
                            parsersId: 59
                        }
                    }
                },
                run: {
                    type: 'literalArgument',
                    parsers: [
                        'sandstone:callback'
                    ],
                    executables: [
                        true
                    ],
                    arguments: [
                        'callback'
                    ],
                    parsersId: 66
                }
            }
        },
        experience: {
            type: 'literal',
            children: {
                add: {
                    type: 'literalArgument',
                    parsers: [
                        'minecraft:entity',
                        'brigadier:integer',
                        'sandstone:literals'
                    ],
                    executables: [
                        false,
                        true,
                        true
                    ],
                    properties: [
                        {
                            amount: 'multiple',
                            type: 'players'
                        },
                        undefined
                    ],
                    arguments: [
                        'targets',
                        'amount',
                        'option'
                    ],
                    parsersId: 67
                },
                query: {
                    type: 'literalArgument',
                    parsers: [
                        'minecraft:entity',
                        'sandstone:literals'
                    ],
                    executables: [
                        false,
                        true
                    ],
                    properties: [
                        {
                            amount: 'single',
                            type: 'players'
                        }
                    ],
                    arguments: [
                        'targets',
                        'option'
                    ],
                    parsersId: 68
                },
                set: {
                    type: 'literalArgument',
                    parsers: [
                        'minecraft:entity',
                        'brigadier:integer',
                        'sandstone:literals'
                    ],
                    executables: [
                        false,
                        true,
                        true
                    ],
                    properties: [
                        {
                            amount: 'multiple',
                            type: 'players'
                        },
                        {
                            min: 0
                        }
                    ],
                    arguments: [
                        'targets',
                        'amount',
                        'option'
                    ],
                    parsersId: 67
                }
            }
        },
        fill: {
            type: 'literalArgument',
            parsers: [
                'minecraft:block_pos',
                'minecraft:block_pos',
                'minecraft:block_state'
            ],
            executables: [
                false,
                false,
                true
            ],
            arguments: [
                'from',
                'to',
                'block'
            ],
            children: {
                destroy: {
                    type: 'literalArgument',
                    parsers: [],
                    executables: [],
                    arguments: [],
                    parsersId: 1
                },
                hollow: {
                    type: 'literalArgument',
                    parsers: [],
                    executables: [],
                    arguments: [],
                    parsersId: 1
                },
                keep: {
                    type: 'literalArgument',
                    parsers: [],
                    executables: [],
                    arguments: [],
                    parsersId: 1
                },
                outline: {
                    type: 'literalArgument',
                    parsers: [],
                    executables: [],
                    arguments: [],
                    parsersId: 1
                },
                replace: {
                    type: 'literalArgument',
                    parsers: [
                        'minecraft:block_predicate'
                    ],
                    executables: [
                        true,
                        true
                    ],
                    arguments: [
                        'filter'
                    ],
                    parsersId: 70
                }
            },
            parsersId: 69
        },
        forceload: {
            type: 'literal',
            children: {
                add: {
                    type: 'literalArgument',
                    parsers: [
                        'minecraft:column_pos',
                        'minecraft:column_pos'
                    ],
                    executables: [
                        true,
                        true
                    ],
                    arguments: [
                        'from',
                        'to'
                    ],
                    parsersId: 71
                },
                query: {
                    type: 'literalArgument',
                    parsers: [
                        'minecraft:column_pos'
                    ],
                    executables: [
                        true,
                        true
                    ],
                    arguments: [
                        'pos'
                    ],
                    parsersId: 72
                },
                remove: {
                    type: 'literal',
                    children: {
                        all: {
                            type: 'literalArgument',
                            parsers: [],
                            executables: [],
                            arguments: [],
                            parsersId: 1
                        },
                        from: {
                            type: 'argument',
                            children: {
                                to: {
                                    type: 'argument',
                                    parsers: [
                                        'minecraft:column_pos'
                                    ],
                                    executables: [
                                        true
                                    ],
                                    parsersId: 74
                                }
                            },
                            parsers: [
                                'minecraft:column_pos'
                            ],
                            executables: [
                                true
                            ],
                            parsersId: 73
                        }
                    }
                }
            }
        },
        function: {
            type: 'literalArgument',
            parsers: [
                'minecraft:function'
            ],
            executables: [
                true
            ],
            arguments: [
                'name'
            ],
            parsersId: 75
        },
        gamemode: {
            type: 'literal',
            children: {
                adventure: {
                    type: 'literalArgument',
                    parsers: [
                        'minecraft:entity'
                    ],
                    executables: [
                        true,
                        true
                    ],
                    properties: [
                        {
                            amount: 'multiple',
                            type: 'players'
                        }
                    ],
                    arguments: [
                        'target'
                    ],
                    parsersId: 76
                },
                creative: {
                    type: 'literalArgument',
                    parsers: [
                        'minecraft:entity'
                    ],
                    executables: [
                        true,
                        true
                    ],
                    properties: [
                        {
                            amount: 'multiple',
                            type: 'players'
                        }
                    ],
                    arguments: [
                        'target'
                    ],
                    parsersId: 76
                },
                spectator: {
                    type: 'literalArgument',
                    parsers: [
                        'minecraft:entity'
                    ],
                    executables: [
                        true,
                        true
                    ],
                    properties: [
                        {
                            amount: 'multiple',
                            type: 'players'
                        }
                    ],
                    arguments: [
                        'target'
                    ],
                    parsersId: 76
                },
                survival: {
                    type: 'literalArgument',
                    parsers: [
                        'minecraft:entity'
                    ],
                    executables: [
                        true,
                        true
                    ],
                    properties: [
                        {
                            amount: 'multiple',
                            type: 'players'
                        }
                    ],
                    arguments: [
                        'target'
                    ],
                    parsersId: 76
                }
            }
        },
        gamerule: {
            type: 'literal',
            children: {
                announceAdvancements: {
                    type: 'literalArgument',
                    parsers: [
                        'brigadier:bool'
                    ],
                    executables: [
                        true,
                        true
                    ],
                    arguments: [
                        'value'
                    ],
                    parsersId: 77
                },
                commandBlockOutput: {
                    type: 'literalArgument',
                    parsers: [
                        'brigadier:bool'
                    ],
                    executables: [
                        true,
                        true
                    ],
                    arguments: [
                        'value'
                    ],
                    parsersId: 77
                },
                disableElytraMovementCheck: {
                    type: 'literalArgument',
                    parsers: [
                        'brigadier:bool'
                    ],
                    executables: [
                        true,
                        true
                    ],
                    arguments: [
                        'value'
                    ],
                    parsersId: 77
                },
                disableRaids: {
                    type: 'literalArgument',
                    parsers: [
                        'brigadier:bool'
                    ],
                    executables: [
                        true,
                        true
                    ],
                    arguments: [
                        'value'
                    ],
                    parsersId: 77
                },
                doDaylightCycle: {
                    type: 'literalArgument',
                    parsers: [
                        'brigadier:bool'
                    ],
                    executables: [
                        true,
                        true
                    ],
                    arguments: [
                        'value'
                    ],
                    parsersId: 77
                },
                doEntityDrops: {
                    type: 'literalArgument',
                    parsers: [
                        'brigadier:bool'
                    ],
                    executables: [
                        true,
                        true
                    ],
                    arguments: [
                        'value'
                    ],
                    parsersId: 77
                },
                doFireTick: {
                    type: 'literalArgument',
                    parsers: [
                        'brigadier:bool'
                    ],
                    executables: [
                        true,
                        true
                    ],
                    arguments: [
                        'value'
                    ],
                    parsersId: 77
                },
                doImmediateRespawn: {
                    type: 'literalArgument',
                    parsers: [
                        'brigadier:bool'
                    ],
                    executables: [
                        true,
                        true
                    ],
                    arguments: [
                        'value'
                    ],
                    parsersId: 77
                },
                doInsomnia: {
                    type: 'literalArgument',
                    parsers: [
                        'brigadier:bool'
                    ],
                    executables: [
                        true,
                        true
                    ],
                    arguments: [
                        'value'
                    ],
                    parsersId: 77
                },
                doLimitedCrafting: {
                    type: 'literalArgument',
                    parsers: [
                        'brigadier:bool'
                    ],
                    executables: [
                        true,
                        true
                    ],
                    arguments: [
                        'value'
                    ],
                    parsersId: 77
                },
                doMobLoot: {
                    type: 'literalArgument',
                    parsers: [
                        'brigadier:bool'
                    ],
                    executables: [
                        true,
                        true
                    ],
                    arguments: [
                        'value'
                    ],
                    parsersId: 77
                },
                doMobSpawning: {
                    type: 'literalArgument',
                    parsers: [
                        'brigadier:bool'
                    ],
                    executables: [
                        true,
                        true
                    ],
                    arguments: [
                        'value'
                    ],
                    parsersId: 77
                },
                doPatrolSpawning: {
                    type: 'literalArgument',
                    parsers: [
                        'brigadier:bool'
                    ],
                    executables: [
                        true,
                        true
                    ],
                    arguments: [
                        'value'
                    ],
                    parsersId: 77
                },
                doTileDrops: {
                    type: 'literalArgument',
                    parsers: [
                        'brigadier:bool'
                    ],
                    executables: [
                        true,
                        true
                    ],
                    arguments: [
                        'value'
                    ],
                    parsersId: 77
                },
                doTraderSpawning: {
                    type: 'literalArgument',
                    parsers: [
                        'brigadier:bool'
                    ],
                    executables: [
                        true,
                        true
                    ],
                    arguments: [
                        'value'
                    ],
                    parsersId: 77
                },
                doWeatherCycle: {
                    type: 'literalArgument',
                    parsers: [
                        'brigadier:bool'
                    ],
                    executables: [
                        true,
                        true
                    ],
                    arguments: [
                        'value'
                    ],
                    parsersId: 77
                },
                drowningDamage: {
                    type: 'literalArgument',
                    parsers: [
                        'brigadier:bool'
                    ],
                    executables: [
                        true,
                        true
                    ],
                    arguments: [
                        'value'
                    ],
                    parsersId: 77
                },
                fallDamage: {
                    type: 'literalArgument',
                    parsers: [
                        'brigadier:bool'
                    ],
                    executables: [
                        true,
                        true
                    ],
                    arguments: [
                        'value'
                    ],
                    parsersId: 77
                },
                fireDamage: {
                    type: 'literalArgument',
                    parsers: [
                        'brigadier:bool'
                    ],
                    executables: [
                        true,
                        true
                    ],
                    arguments: [
                        'value'
                    ],
                    parsersId: 77
                },
                keepInventory: {
                    type: 'literalArgument',
                    parsers: [
                        'brigadier:bool'
                    ],
                    executables: [
                        true,
                        true
                    ],
                    arguments: [
                        'value'
                    ],
                    parsersId: 77
                },
                logAdminCommands: {
                    type: 'literalArgument',
                    parsers: [
                        'brigadier:bool'
                    ],
                    executables: [
                        true,
                        true
                    ],
                    arguments: [
                        'value'
                    ],
                    parsersId: 77
                },
                maxCommandChainLength: {
                    type: 'literalArgument',
                    parsers: [
                        'brigadier:integer'
                    ],
                    executables: [
                        true,
                        true
                    ],
                    arguments: [
                        'value'
                    ],
                    parsersId: 17
                },
                maxEntityCramming: {
                    type: 'literalArgument',
                    parsers: [
                        'brigadier:integer'
                    ],
                    executables: [
                        true,
                        true
                    ],
                    arguments: [
                        'value'
                    ],
                    parsersId: 17
                },
                mobGriefing: {
                    type: 'literalArgument',
                    parsers: [
                        'brigadier:bool'
                    ],
                    executables: [
                        true,
                        true
                    ],
                    arguments: [
                        'value'
                    ],
                    parsersId: 77
                },
                naturalRegeneration: {
                    type: 'literalArgument',
                    parsers: [
                        'brigadier:bool'
                    ],
                    executables: [
                        true,
                        true
                    ],
                    arguments: [
                        'value'
                    ],
                    parsersId: 77
                },
                randomTickSpeed: {
                    type: 'literalArgument',
                    parsers: [
                        'brigadier:integer'
                    ],
                    executables: [
                        true,
                        true
                    ],
                    arguments: [
                        'value'
                    ],
                    parsersId: 17
                },
                reducedDebugInfo: {
                    type: 'literalArgument',
                    parsers: [
                        'brigadier:bool'
                    ],
                    executables: [
                        true,
                        true
                    ],
                    arguments: [
                        'value'
                    ],
                    parsersId: 77
                },
                sendCommandFeedback: {
                    type: 'literalArgument',
                    parsers: [
                        'brigadier:bool'
                    ],
                    executables: [
                        true,
                        true
                    ],
                    arguments: [
                        'value'
                    ],
                    parsersId: 77
                },
                showDeathMessages: {
                    type: 'literalArgument',
                    parsers: [
                        'brigadier:bool'
                    ],
                    executables: [
                        true,
                        true
                    ],
                    arguments: [
                        'value'
                    ],
                    parsersId: 77
                },
                spawnRadius: {
                    type: 'literalArgument',
                    parsers: [
                        'brigadier:integer'
                    ],
                    executables: [
                        true,
                        true
                    ],
                    arguments: [
                        'value'
                    ],
                    parsersId: 17
                },
                spectatorsGenerateChunks: {
                    type: 'literalArgument',
                    parsers: [
                        'brigadier:bool'
                    ],
                    executables: [
                        true,
                        true
                    ],
                    arguments: [
                        'value'
                    ],
                    parsersId: 77
                }
            }
        },
        give: {
            type: 'literalArgument',
            parsers: [
                'minecraft:entity',
                'minecraft:item_stack',
                'brigadier:integer'
            ],
            executables: [
                false,
                true,
                true
            ],
            properties: [
                {
                    amount: 'multiple',
                    type: 'players'
                },
                undefined,
                {
                    min: 1
                }
            ],
            arguments: [
                'targets',
                'item',
                'count'
            ],
            parsersId: 78
        },
        help: {
            type: 'literalArgument',
            parsers: [
                'brigadier:string'
            ],
            executables: [
                true,
                true
            ],
            properties: [
                {
                    type: 'greedy'
                }
            ],
            arguments: [
                'command'
            ],
            parsersId: 79
        },
        kill: {
            type: 'literalArgument',
            parsers: [
                'minecraft:entity'
            ],
            executables: [
                true,
                true
            ],
            properties: [
                {
                    amount: 'multiple',
                    type: 'entities'
                }
            ],
            arguments: [
                'targets'
            ],
            parsersId: 0
        },
        locate: {
            type: 'literalArgument',
            parsers: [
                'sandstone:literals'
            ],
            executables: [
                true
            ],
            literalValues: [
                [
                    'Bastion_Remnant',
                    'Buried_Treasure',
                    'Desert_Pyramid',
                    'EndCity',
                    'Fortress',
                    'Igloo',
                    'Jungle_Pyramid',
                    'Mansion',
                    'Mineshaft',
                    'Monument',
                    'Nether_Fossil',
                    'Ocean_Ruin',
                    'Pillager_Outpost',
                    'Ruined_Portal',
                    'Shipwreck',
                    'Stronghold',
                    'Swamp_Hut',
                    'Village'
                ]
            ],
            arguments: [
                'option'
            ],
            parsersId: 80
        },
        locatebiome: {
            type: 'literalArgument',
            parsers: [
                'minecraft:resource_location'
            ],
            executables: [
                true
            ],
            arguments: [
                'biome'
            ],
            parsersId: 81
        },
        loot: {
            type: 'literal',
            children: {
                give: {
                    type: 'literalArgument',
                    parsers: [
                        'minecraft:entity'
                    ],
                    executables: [
                        false
                    ],
                    properties: [
                        {
                            amount: 'multiple',
                            type: 'players'
                        }
                    ],
                    children: {
                        fish: {
                            type: 'literalArgument',
                            parsers: [
                                'minecraft:resource_location',
                                'minecraft:block_pos'
                            ],
                            executables: [
                                false,
                                true
                            ],
                            arguments: [
                                'loot_table',
                                'pos'
                            ],
                            children: {
                                mainhand: {
                                    type: 'literalArgument',
                                    parsers: [],
                                    executables: [],
                                    arguments: [],
                                    parsersId: 1
                                },
                                offhand: {
                                    type: 'literalArgument',
                                    parsers: [],
                                    executables: [],
                                    arguments: [],
                                    parsersId: 1
                                },
                                tool: {
                                    type: 'argument',
                                    parsers: [
                                        'minecraft:item_stack'
                                    ],
                                    executables: [
                                        true
                                    ],
                                    parsersId: 84
                                }
                            },
                            parsersId: 83
                        },
                        kill: {
                            type: 'literalArgument',
                            parsers: [
                                'minecraft:entity'
                            ],
                            executables: [
                                true
                            ],
                            properties: [
                                {
                                    amount: 'single',
                                    type: 'entities'
                                }
                            ],
                            arguments: [
                                'target'
                            ],
                            parsersId: 76
                        },
                        loot: {
                            type: 'literalArgument',
                            parsers: [
                                'minecraft:resource_location'
                            ],
                            executables: [
                                true
                            ],
                            arguments: [
                                'loot_table'
                            ],
                            parsersId: 85
                        },
                        mine: {
                            type: 'literalArgument',
                            parsers: [
                                'minecraft:block_pos'
                            ],
                            executables: [
                                true
                            ],
                            children: {
                                mainhand: {
                                    type: 'literalArgument',
                                    parsers: [],
                                    executables: [],
                                    arguments: [],
                                    parsersId: 1
                                },
                                offhand: {
                                    type: 'literalArgument',
                                    parsers: [],
                                    executables: [],
                                    arguments: [],
                                    parsersId: 1
                                },
                                tool: {
                                    type: 'argument',
                                    parsers: [
                                        'minecraft:item_stack'
                                    ],
                                    executables: [
                                        true
                                    ],
                                    parsersId: 84
                                }
                            },
                            arguments: [
                                'pos'
                            ],
                            parsersId: 86
                        }
                    },
                    arguments: [
                        'players'
                    ],
                    parsersId: 82
                },
                insert: {
                    type: 'literalArgument',
                    parsers: [
                        'minecraft:block_pos'
                    ],
                    executables: [
                        false
                    ],
                    children: {
                        fish: {
                            type: 'literalArgument',
                            parsers: [
                                'minecraft:resource_location',
                                'minecraft:block_pos'
                            ],
                            executables: [
                                false,
                                true
                            ],
                            arguments: [
                                'loot_table',
                                'pos'
                            ],
                            children: {
                                mainhand: {
                                    type: 'literalArgument',
                                    parsers: [],
                                    executables: [],
                                    arguments: [],
                                    parsersId: 1
                                },
                                offhand: {
                                    type: 'literalArgument',
                                    parsers: [],
                                    executables: [],
                                    arguments: [],
                                    parsersId: 1
                                },
                                tool: {
                                    type: 'argument',
                                    parsers: [
                                        'minecraft:item_stack'
                                    ],
                                    executables: [
                                        true
                                    ],
                                    parsersId: 84
                                }
                            },
                            parsersId: 83
                        },
                        kill: {
                            type: 'literalArgument',
                            parsers: [
                                'minecraft:entity'
                            ],
                            executables: [
                                true
                            ],
                            properties: [
                                {
                                    amount: 'single',
                                    type: 'entities'
                                }
                            ],
                            arguments: [
                                'target'
                            ],
                            parsersId: 76
                        },
                        loot: {
                            type: 'literalArgument',
                            parsers: [
                                'minecraft:resource_location'
                            ],
                            executables: [
                                true
                            ],
                            arguments: [
                                'loot_table'
                            ],
                            parsersId: 85
                        },
                        mine: {
                            type: 'literalArgument',
                            parsers: [
                                'minecraft:block_pos'
                            ],
                            executables: [
                                true
                            ],
                            children: {
                                mainhand: {
                                    type: 'literalArgument',
                                    parsers: [],
                                    executables: [],
                                    arguments: [],
                                    parsersId: 1
                                },
                                offhand: {
                                    type: 'literalArgument',
                                    parsers: [],
                                    executables: [],
                                    arguments: [],
                                    parsersId: 1
                                },
                                tool: {
                                    type: 'argument',
                                    parsers: [
                                        'minecraft:item_stack'
                                    ],
                                    executables: [
                                        true
                                    ],
                                    parsersId: 84
                                }
                            },
                            arguments: [
                                'pos'
                            ],
                            parsersId: 86
                        }
                    },
                    arguments: [
                        'targetPos'
                    ],
                    parsersId: 87
                },
                replace: {
                    type: 'literal',
                    children: {
                        block: {
                            type: 'literalArgument',
                            parsers: [
                                'minecraft:block_pos',
                                'minecraft:item_slot'
                            ],
                            executables: [
                                false,
                                false
                            ],
                            arguments: [
                                'targetPos',
                                'slot'
                            ],
                            children: {
                                fish: {
                                    type: 'literalArgument',
                                    parsers: [
                                        'minecraft:resource_location',
                                        'minecraft:block_pos'
                                    ],
                                    executables: [
                                        false,
                                        true
                                    ],
                                    arguments: [
                                        'loot_table',
                                        'pos'
                                    ],
                                    children: {
                                        mainhand: {
                                            type: 'literalArgument',
                                            parsers: [],
                                            executables: [],
                                            arguments: [],
                                            parsersId: 1
                                        },
                                        offhand: {
                                            type: 'literalArgument',
                                            parsers: [],
                                            executables: [],
                                            arguments: [],
                                            parsersId: 1
                                        },
                                        tool: {
                                            type: 'argument',
                                            parsers: [
                                                'minecraft:item_stack'
                                            ],
                                            executables: [
                                                true
                                            ],
                                            parsersId: 84
                                        }
                                    },
                                    parsersId: 83
                                },
                                kill: {
                                    type: 'literalArgument',
                                    parsers: [
                                        'minecraft:entity'
                                    ],
                                    executables: [
                                        true
                                    ],
                                    properties: [
                                        {
                                            amount: 'single',
                                            type: 'entities'
                                        }
                                    ],
                                    arguments: [
                                        'target'
                                    ],
                                    parsersId: 76
                                },
                                loot: {
                                    type: 'literalArgument',
                                    parsers: [
                                        'minecraft:resource_location'
                                    ],
                                    executables: [
                                        true
                                    ],
                                    arguments: [
                                        'loot_table'
                                    ],
                                    parsersId: 85
                                },
                                mine: {
                                    type: 'literalArgument',
                                    parsers: [
                                        'minecraft:block_pos'
                                    ],
                                    executables: [
                                        true
                                    ],
                                    children: {
                                        mainhand: {
                                            type: 'literalArgument',
                                            parsers: [],
                                            executables: [],
                                            arguments: [],
                                            parsersId: 1
                                        },
                                        offhand: {
                                            type: 'literalArgument',
                                            parsers: [],
                                            executables: [],
                                            arguments: [],
                                            parsersId: 1
                                        },
                                        tool: {
                                            type: 'argument',
                                            parsers: [
                                                'minecraft:item_stack'
                                            ],
                                            executables: [
                                                true
                                            ],
                                            parsersId: 84
                                        }
                                    },
                                    arguments: [
                                        'pos'
                                    ],
                                    parsersId: 86
                                },
                                count: {
                                    type: 'argument',
                                    properties: [
                                        {
                                            min: 0
                                        }
                                    ],
                                    children: {
                                        fish: {
                                            type: 'literalArgument',
                                            parsers: [
                                                'minecraft:resource_location',
                                                'minecraft:block_pos'
                                            ],
                                            executables: [
                                                false,
                                                true
                                            ],
                                            arguments: [
                                                'loot_table',
                                                'pos'
                                            ],
                                            children: {
                                                mainhand: {
                                                    type: 'literalArgument',
                                                    parsers: [],
                                                    executables: [],
                                                    arguments: [],
                                                    parsersId: 1
                                                },
                                                offhand: {
                                                    type: 'literalArgument',
                                                    parsers: [],
                                                    executables: [],
                                                    arguments: [],
                                                    parsersId: 1
                                                },
                                                tool: {
                                                    type: 'argument',
                                                    parsers: [
                                                        'minecraft:item_stack'
                                                    ],
                                                    executables: [
                                                        true
                                                    ],
                                                    parsersId: 84
                                                }
                                            },
                                            parsersId: 83
                                        },
                                        kill: {
                                            type: 'literalArgument',
                                            parsers: [
                                                'minecraft:entity'
                                            ],
                                            executables: [
                                                true
                                            ],
                                            properties: [
                                                {
                                                    amount: 'single',
                                                    type: 'entities'
                                                }
                                            ],
                                            arguments: [
                                                'target'
                                            ],
                                            parsersId: 76
                                        },
                                        loot: {
                                            type: 'literalArgument',
                                            parsers: [
                                                'minecraft:resource_location'
                                            ],
                                            executables: [
                                                true
                                            ],
                                            arguments: [
                                                'loot_table'
                                            ],
                                            parsersId: 85
                                        },
                                        mine: {
                                            type: 'literalArgument',
                                            parsers: [
                                                'minecraft:block_pos'
                                            ],
                                            executables: [
                                                true
                                            ],
                                            children: {
                                                mainhand: {
                                                    type: 'literalArgument',
                                                    parsers: [],
                                                    executables: [],
                                                    arguments: [],
                                                    parsersId: 1
                                                },
                                                offhand: {
                                                    type: 'literalArgument',
                                                    parsers: [],
                                                    executables: [],
                                                    arguments: [],
                                                    parsersId: 1
                                                },
                                                tool: {
                                                    type: 'argument',
                                                    parsers: [
                                                        'minecraft:item_stack'
                                                    ],
                                                    executables: [
                                                        true
                                                    ],
                                                    parsersId: 84
                                                }
                                            },
                                            arguments: [
                                                'pos'
                                            ],
                                            parsersId: 86
                                        }
                                    },
                                    parsers: [
                                        'brigadier:integer'
                                    ],
                                    executables: [
                                        false
                                    ],
                                    parsersId: 89
                                }
                            },
                            parsersId: 88
                        },
                        entity: {
                            type: 'literalArgument',
                            parsers: [
                                'minecraft:entity',
                                'minecraft:item_slot'
                            ],
                            executables: [
                                false,
                                false
                            ],
                            properties: [
                                {
                                    amount: 'multiple',
                                    type: 'entities'
                                },
                                undefined
                            ],
                            arguments: [
                                'entities',
                                'slot'
                            ],
                            children: {
                                fish: {
                                    type: 'literalArgument',
                                    parsers: [
                                        'minecraft:resource_location',
                                        'minecraft:block_pos'
                                    ],
                                    executables: [
                                        false,
                                        true
                                    ],
                                    arguments: [
                                        'loot_table',
                                        'pos'
                                    ],
                                    children: {
                                        mainhand: {
                                            type: 'literalArgument',
                                            parsers: [],
                                            executables: [],
                                            arguments: [],
                                            parsersId: 1
                                        },
                                        offhand: {
                                            type: 'literalArgument',
                                            parsers: [],
                                            executables: [],
                                            arguments: [],
                                            parsersId: 1
                                        },
                                        tool: {
                                            type: 'argument',
                                            parsers: [
                                                'minecraft:item_stack'
                                            ],
                                            executables: [
                                                true
                                            ],
                                            parsersId: 84
                                        }
                                    },
                                    parsersId: 83
                                },
                                kill: {
                                    type: 'literalArgument',
                                    parsers: [
                                        'minecraft:entity'
                                    ],
                                    executables: [
                                        true
                                    ],
                                    properties: [
                                        {
                                            amount: 'single',
                                            type: 'entities'
                                        }
                                    ],
                                    arguments: [
                                        'target'
                                    ],
                                    parsersId: 76
                                },
                                loot: {
                                    type: 'literalArgument',
                                    parsers: [
                                        'minecraft:resource_location'
                                    ],
                                    executables: [
                                        true
                                    ],
                                    arguments: [
                                        'loot_table'
                                    ],
                                    parsersId: 85
                                },
                                mine: {
                                    type: 'literalArgument',
                                    parsers: [
                                        'minecraft:block_pos'
                                    ],
                                    executables: [
                                        true
                                    ],
                                    children: {
                                        mainhand: {
                                            type: 'literalArgument',
                                            parsers: [],
                                            executables: [],
                                            arguments: [],
                                            parsersId: 1
                                        },
                                        offhand: {
                                            type: 'literalArgument',
                                            parsers: [],
                                            executables: [],
                                            arguments: [],
                                            parsersId: 1
                                        },
                                        tool: {
                                            type: 'argument',
                                            parsers: [
                                                'minecraft:item_stack'
                                            ],
                                            executables: [
                                                true
                                            ],
                                            parsersId: 84
                                        }
                                    },
                                    arguments: [
                                        'pos'
                                    ],
                                    parsersId: 86
                                },
                                count: {
                                    type: 'argument',
                                    properties: [
                                        {
                                            min: 0
                                        }
                                    ],
                                    children: {
                                        fish: {
                                            type: 'literalArgument',
                                            parsers: [
                                                'minecraft:resource_location',
                                                'minecraft:block_pos'
                                            ],
                                            executables: [
                                                false,
                                                true
                                            ],
                                            arguments: [
                                                'loot_table',
                                                'pos'
                                            ],
                                            children: {
                                                mainhand: {
                                                    type: 'literalArgument',
                                                    parsers: [],
                                                    executables: [],
                                                    arguments: [],
                                                    parsersId: 1
                                                },
                                                offhand: {
                                                    type: 'literalArgument',
                                                    parsers: [],
                                                    executables: [],
                                                    arguments: [],
                                                    parsersId: 1
                                                },
                                                tool: {
                                                    type: 'argument',
                                                    parsers: [
                                                        'minecraft:item_stack'
                                                    ],
                                                    executables: [
                                                        true
                                                    ],
                                                    parsersId: 84
                                                }
                                            },
                                            parsersId: 83
                                        },
                                        kill: {
                                            type: 'literalArgument',
                                            parsers: [
                                                'minecraft:entity'
                                            ],
                                            executables: [
                                                true
                                            ],
                                            properties: [
                                                {
                                                    amount: 'single',
                                                    type: 'entities'
                                                }
                                            ],
                                            arguments: [
                                                'target'
                                            ],
                                            parsersId: 76
                                        },
                                        loot: {
                                            type: 'literalArgument',
                                            parsers: [
                                                'minecraft:resource_location'
                                            ],
                                            executables: [
                                                true
                                            ],
                                            arguments: [
                                                'loot_table'
                                            ],
                                            parsersId: 85
                                        },
                                        mine: {
                                            type: 'literalArgument',
                                            parsers: [
                                                'minecraft:block_pos'
                                            ],
                                            executables: [
                                                true
                                            ],
                                            children: {
                                                mainhand: {
                                                    type: 'literalArgument',
                                                    parsers: [],
                                                    executables: [],
                                                    arguments: [],
                                                    parsersId: 1
                                                },
                                                offhand: {
                                                    type: 'literalArgument',
                                                    parsers: [],
                                                    executables: [],
                                                    arguments: [],
                                                    parsersId: 1
                                                },
                                                tool: {
                                                    type: 'argument',
                                                    parsers: [
                                                        'minecraft:item_stack'
                                                    ],
                                                    executables: [
                                                        true
                                                    ],
                                                    parsersId: 84
                                                }
                                            },
                                            arguments: [
                                                'pos'
                                            ],
                                            parsersId: 86
                                        }
                                    },
                                    parsers: [
                                        'brigadier:integer'
                                    ],
                                    executables: [
                                        false
                                    ],
                                    parsersId: 89
                                }
                            },
                            parsersId: 90
                        }
                    }
                },
                spawn: {
                    type: 'literalArgument',
                    parsers: [
                        'minecraft:vec3'
                    ],
                    executables: [
                        false
                    ],
                    children: {
                        fish: {
                            type: 'literalArgument',
                            parsers: [
                                'minecraft:resource_location',
                                'minecraft:block_pos'
                            ],
                            executables: [
                                false,
                                true
                            ],
                            arguments: [
                                'loot_table',
                                'pos'
                            ],
                            children: {
                                mainhand: {
                                    type: 'literalArgument',
                                    parsers: [],
                                    executables: [],
                                    arguments: [],
                                    parsersId: 1
                                },
                                offhand: {
                                    type: 'literalArgument',
                                    parsers: [],
                                    executables: [],
                                    arguments: [],
                                    parsersId: 1
                                },
                                tool: {
                                    type: 'argument',
                                    parsers: [
                                        'minecraft:item_stack'
                                    ],
                                    executables: [
                                        true
                                    ],
                                    parsersId: 84
                                }
                            },
                            parsersId: 83
                        },
                        kill: {
                            type: 'literalArgument',
                            parsers: [
                                'minecraft:entity'
                            ],
                            executables: [
                                true
                            ],
                            properties: [
                                {
                                    amount: 'single',
                                    type: 'entities'
                                }
                            ],
                            arguments: [
                                'target'
                            ],
                            parsersId: 76
                        },
                        loot: {
                            type: 'literalArgument',
                            parsers: [
                                'minecraft:resource_location'
                            ],
                            executables: [
                                true
                            ],
                            arguments: [
                                'loot_table'
                            ],
                            parsersId: 85
                        },
                        mine: {
                            type: 'literalArgument',
                            parsers: [
                                'minecraft:block_pos'
                            ],
                            executables: [
                                true
                            ],
                            children: {
                                mainhand: {
                                    type: 'literalArgument',
                                    parsers: [],
                                    executables: [],
                                    arguments: [],
                                    parsersId: 1
                                },
                                offhand: {
                                    type: 'literalArgument',
                                    parsers: [],
                                    executables: [],
                                    arguments: [],
                                    parsersId: 1
                                },
                                tool: {
                                    type: 'argument',
                                    parsers: [
                                        'minecraft:item_stack'
                                    ],
                                    executables: [
                                        true
                                    ],
                                    parsersId: 84
                                }
                            },
                            arguments: [
                                'pos'
                            ],
                            parsersId: 86
                        }
                    },
                    arguments: [
                        'targetPos'
                    ],
                    parsersId: 91
                }
            }
        },
        me: {
            type: 'literalArgument',
            parsers: [
                'brigadier:string'
            ],
            executables: [
                true
            ],
            properties: [
                {
                    type: 'greedy'
                }
            ],
            arguments: [
                'action'
            ],
            parsersId: 92
        },
        msg: {
            type: 'literalArgument',
            parsers: [
                'minecraft:entity',
                'minecraft:message'
            ],
            executables: [
                false,
                true
            ],
            properties: [
                {
                    amount: 'multiple',
                    type: 'players'
                },
                undefined
            ],
            arguments: [
                'targets',
                'message'
            ],
            parsersId: 93
        },
        particle: {
            type: 'literalArgument',
            parsers: [
                'minecraft:particle',
                'minecraft:vec3',
                'minecraft:vec3',
                'brigadier:float',
                'brigadier:integer'
            ],
            executables: [
                true,
                true,
                false,
                false,
                true
            ],
            properties: [
                undefined,
                undefined,
                undefined,
                {
                    min: 0
                },
                {
                    min: 0
                }
            ],
            arguments: [
                'name',
                'pos',
                'delta',
                'speed',
                'count'
            ],
            children: {
                force: {
                    type: 'literalArgument',
                    parsers: [
                        'minecraft:entity'
                    ],
                    executables: [
                        true,
                        true
                    ],
                    properties: [
                        {
                            amount: 'multiple',
                            type: 'players'
                        }
                    ],
                    arguments: [
                        'viewers'
                    ],
                    parsersId: 95
                },
                normal: {
                    type: 'literalArgument',
                    parsers: [
                        'minecraft:entity'
                    ],
                    executables: [
                        true,
                        true
                    ],
                    properties: [
                        {
                            amount: 'multiple',
                            type: 'players'
                        }
                    ],
                    arguments: [
                        'viewers'
                    ],
                    parsersId: 95
                }
            },
            parsersId: 94
        },
        playsound: {
            type: 'literalArgument',
            parsers: [
                'minecraft:resource_location'
            ],
            executables: [
                false
            ],
            children: {
                ambient: {
                    type: 'literalArgument',
                    parsers: [
                        'minecraft:entity',
                        'minecraft:vec3',
                        'brigadier:float',
                        'brigadier:float',
                        'brigadier:float'
                    ],
                    executables: [
                        true,
                        true,
                        true,
                        true,
                        true
                    ],
                    properties: [
                        {
                            amount: 'multiple',
                            type: 'players'
                        },
                        undefined,
                        {
                            min: 0
                        },
                        {
                            min: 0,
                            max: 2
                        },
                        {
                            min: 0,
                            max: 1
                        }
                    ],
                    arguments: [
                        'targets',
                        'pos',
                        'volume',
                        'pitch',
                        'minVolume'
                    ],
                    parsersId: 97
                },
                block: {
                    type: 'literalArgument',
                    parsers: [
                        'minecraft:entity',
                        'minecraft:vec3',
                        'brigadier:float',
                        'brigadier:float',
                        'brigadier:float'
                    ],
                    executables: [
                        true,
                        true,
                        true,
                        true,
                        true
                    ],
                    properties: [
                        {
                            amount: 'multiple',
                            type: 'players'
                        },
                        undefined,
                        {
                            min: 0
                        },
                        {
                            min: 0,
                            max: 2
                        },
                        {
                            min: 0,
                            max: 1
                        }
                    ],
                    arguments: [
                        'targets',
                        'pos',
                        'volume',
                        'pitch',
                        'minVolume'
                    ],
                    parsersId: 97
                },
                hostile: {
                    type: 'literalArgument',
                    parsers: [
                        'minecraft:entity',
                        'minecraft:vec3',
                        'brigadier:float',
                        'brigadier:float',
                        'brigadier:float'
                    ],
                    executables: [
                        true,
                        true,
                        true,
                        true,
                        true
                    ],
                    properties: [
                        {
                            amount: 'multiple',
                            type: 'players'
                        },
                        undefined,
                        {
                            min: 0
                        },
                        {
                            min: 0,
                            max: 2
                        },
                        {
                            min: 0,
                            max: 1
                        }
                    ],
                    arguments: [
                        'targets',
                        'pos',
                        'volume',
                        'pitch',
                        'minVolume'
                    ],
                    parsersId: 97
                },
                master: {
                    type: 'literalArgument',
                    parsers: [
                        'minecraft:entity',
                        'minecraft:vec3',
                        'brigadier:float',
                        'brigadier:float',
                        'brigadier:float'
                    ],
                    executables: [
                        true,
                        true,
                        true,
                        true,
                        true
                    ],
                    properties: [
                        {
                            amount: 'multiple',
                            type: 'players'
                        },
                        undefined,
                        {
                            min: 0
                        },
                        {
                            min: 0,
                            max: 2
                        },
                        {
                            min: 0,
                            max: 1
                        }
                    ],
                    arguments: [
                        'targets',
                        'pos',
                        'volume',
                        'pitch',
                        'minVolume'
                    ],
                    parsersId: 97
                },
                music: {
                    type: 'literalArgument',
                    parsers: [
                        'minecraft:entity',
                        'minecraft:vec3',
                        'brigadier:float',
                        'brigadier:float',
                        'brigadier:float'
                    ],
                    executables: [
                        true,
                        true,
                        true,
                        true,
                        true
                    ],
                    properties: [
                        {
                            amount: 'multiple',
                            type: 'players'
                        },
                        undefined,
                        {
                            min: 0
                        },
                        {
                            min: 0,
                            max: 2
                        },
                        {
                            min: 0,
                            max: 1
                        }
                    ],
                    arguments: [
                        'targets',
                        'pos',
                        'volume',
                        'pitch',
                        'minVolume'
                    ],
                    parsersId: 97
                },
                neutral: {
                    type: 'literalArgument',
                    parsers: [
                        'minecraft:entity',
                        'minecraft:vec3',
                        'brigadier:float',
                        'brigadier:float',
                        'brigadier:float'
                    ],
                    executables: [
                        true,
                        true,
                        true,
                        true,
                        true
                    ],
                    properties: [
                        {
                            amount: 'multiple',
                            type: 'players'
                        },
                        undefined,
                        {
                            min: 0
                        },
                        {
                            min: 0,
                            max: 2
                        },
                        {
                            min: 0,
                            max: 1
                        }
                    ],
                    arguments: [
                        'targets',
                        'pos',
                        'volume',
                        'pitch',
                        'minVolume'
                    ],
                    parsersId: 97
                },
                player: {
                    type: 'literalArgument',
                    parsers: [
                        'minecraft:entity',
                        'minecraft:vec3',
                        'brigadier:float',
                        'brigadier:float',
                        'brigadier:float'
                    ],
                    executables: [
                        true,
                        true,
                        true,
                        true,
                        true
                    ],
                    properties: [
                        {
                            amount: 'multiple',
                            type: 'players'
                        },
                        undefined,
                        {
                            min: 0
                        },
                        {
                            min: 0,
                            max: 2
                        },
                        {
                            min: 0,
                            max: 1
                        }
                    ],
                    arguments: [
                        'targets',
                        'pos',
                        'volume',
                        'pitch',
                        'minVolume'
                    ],
                    parsersId: 97
                },
                record: {
                    type: 'literalArgument',
                    parsers: [
                        'minecraft:entity',
                        'minecraft:vec3',
                        'brigadier:float',
                        'brigadier:float',
                        'brigadier:float'
                    ],
                    executables: [
                        true,
                        true,
                        true,
                        true,
                        true
                    ],
                    properties: [
                        {
                            amount: 'multiple',
                            type: 'players'
                        },
                        undefined,
                        {
                            min: 0
                        },
                        {
                            min: 0,
                            max: 2
                        },
                        {
                            min: 0,
                            max: 1
                        }
                    ],
                    arguments: [
                        'targets',
                        'pos',
                        'volume',
                        'pitch',
                        'minVolume'
                    ],
                    parsersId: 97
                },
                voice: {
                    type: 'literalArgument',
                    parsers: [
                        'minecraft:entity',
                        'minecraft:vec3',
                        'brigadier:float',
                        'brigadier:float',
                        'brigadier:float'
                    ],
                    executables: [
                        true,
                        true,
                        true,
                        true,
                        true
                    ],
                    properties: [
                        {
                            amount: 'multiple',
                            type: 'players'
                        },
                        undefined,
                        {
                            min: 0
                        },
                        {
                            min: 0,
                            max: 2
                        },
                        {
                            min: 0,
                            max: 1
                        }
                    ],
                    arguments: [
                        'targets',
                        'pos',
                        'volume',
                        'pitch',
                        'minVolume'
                    ],
                    parsersId: 97
                },
                weather: {
                    type: 'literalArgument',
                    parsers: [
                        'minecraft:entity',
                        'minecraft:vec3',
                        'brigadier:float',
                        'brigadier:float',
                        'brigadier:float'
                    ],
                    executables: [
                        true,
                        true,
                        true,
                        true,
                        true
                    ],
                    properties: [
                        {
                            amount: 'multiple',
                            type: 'players'
                        },
                        undefined,
                        {
                            min: 0
                        },
                        {
                            min: 0,
                            max: 2
                        },
                        {
                            min: 0,
                            max: 1
                        }
                    ],
                    arguments: [
                        'targets',
                        'pos',
                        'volume',
                        'pitch',
                        'minVolume'
                    ],
                    parsersId: 97
                }
            },
            arguments: [
                'sound'
            ],
            parsersId: 96
        },
        recipe: {
            type: 'literal',
            children: {
                give: {
                    type: 'literalArgument',
                    parsers: [
                        'minecraft:entity'
                    ],
                    executables: [
                        false
                    ],
                    properties: [
                        {
                            amount: 'multiple',
                            type: 'players'
                        }
                    ],
                    children: {
                        '*': {
                            type: 'literalArgument',
                            parsers: [],
                            executables: [],
                            arguments: [],
                            parsersId: 1
                        },
                        recipe: {
                            type: 'argument',
                            parsers: [
                                'minecraft:resource_location'
                            ],
                            executables: [
                                true
                            ],
                            parsersId: 98
                        }
                    },
                    arguments: [
                        'targets'
                    ],
                    parsersId: 0
                },
                take: {
                    type: 'literalArgument',
                    parsers: [
                        'minecraft:entity'
                    ],
                    executables: [
                        false
                    ],
                    properties: [
                        {
                            amount: 'multiple',
                            type: 'players'
                        }
                    ],
                    children: {
                        '*': {
                            type: 'literalArgument',
                            parsers: [],
                            executables: [],
                            arguments: [],
                            parsersId: 1
                        },
                        recipe: {
                            type: 'argument',
                            parsers: [
                                'minecraft:resource_location'
                            ],
                            executables: [
                                true
                            ],
                            parsersId: 98
                        }
                    },
                    arguments: [
                        'targets'
                    ],
                    parsersId: 0
                }
            }
        },
        reload: {
            type: 'literalArgument',
            parsers: [],
            executables: [],
            arguments: [],
            parsersId: 1
        },
        replaceitem: {
            type: 'literal',
            children: {
                block: {
                    type: 'literalArgument',
                    parsers: [
                        'minecraft:block_pos',
                        'minecraft:item_slot',
                        'minecraft:item_stack',
                        'brigadier:integer'
                    ],
                    executables: [
                        false,
                        false,
                        true,
                        true
                    ],
                    properties: [
                        undefined,
                        undefined,
                        undefined,
                        {
                            min: 1,
                            max: 64
                        }
                    ],
                    arguments: [
                        'pos',
                        'slot',
                        'item',
                        'count'
                    ],
                    parsersId: 99
                },
                entity: {
                    type: 'literalArgument',
                    parsers: [
                        'minecraft:entity',
                        'minecraft:item_slot',
                        'minecraft:item_stack',
                        'brigadier:integer'
                    ],
                    executables: [
                        false,
                        false,
                        true,
                        true
                    ],
                    properties: [
                        {
                            amount: 'multiple',
                            type: 'entities'
                        },
                        undefined,
                        undefined,
                        {
                            min: 1,
                            max: 64
                        }
                    ],
                    arguments: [
                        'targets',
                        'slot',
                        'item',
                        'count'
                    ],
                    parsersId: 100
                }
            }
        },
        say: {
            type: 'literalArgument',
            parsers: [
                'minecraft:message'
            ],
            executables: [
                true
            ],
            arguments: [
                'message'
            ],
            parsersId: 101
        },
        schedule: {
            type: 'literal',
            children: {
                clear: {
                    type: 'literalArgument',
                    parsers: [
                        'brigadier:string'
                    ],
                    executables: [
                        true
                    ],
                    properties: [
                        {
                            type: 'greedy'
                        }
                    ],
                    arguments: [
                        'function'
                    ],
                    parsersId: 102
                },
                function: {
                    type: 'literalArgument',
                    parsers: [
                        'minecraft:function',
                        'minecraft:time',
                        'sandstone:literals'
                    ],
                    executables: [
                        false,
                        true,
                        true
                    ],
                    arguments: [
                        'function',
                        'time',
                        'option'
                    ],
                    parsersId: 103
                }
            }
        },
        scoreboard: {
            type: 'literal',
            children: {
                objectives: {
                    type: 'literal',
                    children: {
                        add: {
                            type: 'literalArgument',
                            parsers: [
                                'brigadier:string',
                                'minecraft:objective_criteria',
                                'minecraft:component'
                            ],
                            executables: [
                                false,
                                true,
                                true
                            ],
                            properties: [
                                {
                                    type: 'word'
                                },
                                undefined,
                                undefined
                            ],
                            arguments: [
                                'objective',
                                'criteria',
                                'displayName'
                            ],
                            parsersId: 104
                        },
                        list: {
                            type: 'literalArgument',
                            parsers: [],
                            executables: [],
                            arguments: [],
                            parsersId: 1
                        },
                        modify: {
                            type: 'literalArgument',
                            parsers: [
                                'minecraft:objective'
                            ],
                            executables: [
                                false
                            ],
                            children: {
                                displayname: {
                                    type: 'literalArgument',
                                    parsers: [
                                        'minecraft:component'
                                    ],
                                    executables: [
                                        true
                                    ],
                                    arguments: [
                                        'displayName'
                                    ],
                                    parsersId: 106
                                },
                                rendertype: {
                                    type: 'literalArgument',
                                    parsers: [
                                        'sandstone:literals'
                                    ],
                                    executables: [
                                        true
                                    ],
                                    literalValues: [
                                        [
                                            'hearts',
                                            'integer'
                                        ]
                                    ],
                                    arguments: [
                                        'option'
                                    ],
                                    parsersId: 107
                                }
                            },
                            arguments: [
                                'objective'
                            ],
                            parsersId: 105
                        },
                        remove: {
                            type: 'literalArgument',
                            parsers: [
                                'minecraft:objective'
                            ],
                            executables: [
                                true
                            ],
                            arguments: [
                                'objective'
                            ],
                            parsersId: 105
                        },
                        setdisplay: {
                            type: 'literalArgument',
                            parsers: [
                                'minecraft:scoreboard_slot',
                                'minecraft:objective'
                            ],
                            executables: [
                                true,
                                true
                            ],
                            arguments: [
                                'slot',
                                'objective'
                            ],
                            parsersId: 108
                        }
                    }
                },
                players: {
                    type: 'literal',
                    children: {
                        add: {
                            type: 'literalArgument',
                            parsers: [
                                'minecraft:score_holder',
                                'minecraft:objective',
                                'brigadier:integer'
                            ],
                            executables: [
                                false,
                                false,
                                true
                            ],
                            properties: [
                                {
                                    amount: 'multiple'
                                },
                                undefined,
                                {
                                    min: 0
                                }
                            ],
                            arguments: [
                                'targets',
                                'objective',
                                'score'
                            ],
                            parsersId: 109
                        },
                        enable: {
                            type: 'literalArgument',
                            parsers: [
                                'minecraft:score_holder',
                                'minecraft:objective'
                            ],
                            executables: [
                                false,
                                true
                            ],
                            properties: [
                                {
                                    amount: 'multiple'
                                },
                                undefined
                            ],
                            arguments: [
                                'targets',
                                'objective'
                            ],
                            parsersId: 65
                        },
                        get: {
                            type: 'literalArgument',
                            parsers: [
                                'minecraft:score_holder',
                                'minecraft:objective'
                            ],
                            executables: [
                                false,
                                true
                            ],
                            properties: [
                                {
                                    amount: 'single'
                                },
                                undefined
                            ],
                            arguments: [
                                'target',
                                'objective'
                            ],
                            parsersId: 110
                        },
                        list: {
                            type: 'literalArgument',
                            parsers: [
                                'minecraft:score_holder'
                            ],
                            executables: [
                                true,
                                true
                            ],
                            properties: [
                                {
                                    amount: 'single'
                                }
                            ],
                            arguments: [
                                'target'
                            ],
                            parsersId: 111
                        },
                        operation: {
                            type: 'literalArgument',
                            parsers: [
                                'minecraft:score_holder',
                                'minecraft:objective',
                                'minecraft:operation',
                                'minecraft:score_holder',
                                'minecraft:objective'
                            ],
                            executables: [
                                false,
                                false,
                                false,
                                false,
                                true
                            ],
                            properties: [
                                {
                                    amount: 'multiple'
                                },
                                undefined,
                                undefined,
                                {
                                    amount: 'multiple'
                                },
                                undefined
                            ],
                            arguments: [
                                'targets',
                                'targetObjective',
                                'operation',
                                'source',
                                'sourceObjective'
                            ],
                            parsersId: 112
                        },
                        remove: {
                            type: 'literalArgument',
                            parsers: [
                                'minecraft:score_holder',
                                'minecraft:objective',
                                'brigadier:integer'
                            ],
                            executables: [
                                false,
                                false,
                                true
                            ],
                            properties: [
                                {
                                    amount: 'multiple'
                                },
                                undefined,
                                {
                                    min: 0
                                }
                            ],
                            arguments: [
                                'targets',
                                'objective',
                                'score'
                            ],
                            parsersId: 109
                        },
                        reset: {
                            type: 'literalArgument',
                            parsers: [
                                'minecraft:score_holder',
                                'minecraft:objective'
                            ],
                            executables: [
                                true,
                                true
                            ],
                            properties: [
                                {
                                    amount: 'multiple'
                                },
                                undefined
                            ],
                            arguments: [
                                'targets',
                                'objective'
                            ],
                            parsersId: 113
                        },
                        set: {
                            type: 'literalArgument',
                            parsers: [
                                'minecraft:score_holder',
                                'minecraft:objective',
                                'brigadier:integer'
                            ],
                            executables: [
                                false,
                                false,
                                true
                            ],
                            properties: [
                                {
                                    amount: 'multiple'
                                },
                                undefined,
                                undefined
                            ],
                            arguments: [
                                'targets',
                                'objective',
                                'score'
                            ],
                            parsersId: 109
                        }
                    }
                }
            }
        },
        seed: {
            type: 'literalArgument',
            parsers: [],
            executables: [],
            arguments: [],
            parsersId: 1
        },
        setblock: {
            type: 'literalArgument',
            parsers: [
                'minecraft:block_pos',
                'minecraft:block_state',
                'sandstone:literals'
            ],
            executables: [
                false,
                true,
                true
            ],
            arguments: [
                'pos',
                'block',
                'option'
            ],
            parsersId: 114
        },
        setworldspawn: {
            type: 'literalArgument',
            parsers: [
                'minecraft:block_pos'
            ],
            executables: [
                true,
                true
            ],
            arguments: [
                'pos'
            ],
            parsersId: 86
        },
        spawnpoint: {
            type: 'literalArgument',
            parsers: [
                'minecraft:entity',
                'minecraft:block_pos'
            ],
            executables: [
                true,
                true,
                true
            ],
            properties: [
                {
                    amount: 'multiple',
                    type: 'players'
                },
                undefined
            ],
            arguments: [
                'targets',
                'pos'
            ],
            parsersId: 115
        },
        spectate: {
            type: 'literalArgument',
            parsers: [
                'minecraft:entity',
                'minecraft:entity'
            ],
            executables: [
                true,
                true,
                true
            ],
            properties: [
                {
                    amount: 'single',
                    type: 'entities'
                },
                {
                    amount: 'single',
                    type: 'players'
                }
            ],
            arguments: [
                'target',
                'player'
            ],
            parsersId: 116
        },
        spreadplayers: {
            type: 'literalArgument',
            parsers: [
                'minecraft:vec2',
                'brigadier:float',
                'brigadier:float',
                'brigadier:bool',
                'minecraft:entity'
            ],
            executables: [
                false,
                false,
                false,
                false,
                true
            ],
            properties: [
                undefined,
                {
                    min: 0
                },
                {
                    min: 1
                },
                undefined,
                {
                    amount: 'multiple',
                    type: 'entities'
                }
            ],
            arguments: [
                'center',
                'spreadDistance',
                'maxRange',
                'respectTeams',
                'targets'
            ],
            parsersId: 117
        },
        stopsound: {
            type: 'literalArgument',
            parsers: [
                'minecraft:entity'
            ],
            executables: [
                true
            ],
            properties: [
                {
                    amount: 'multiple',
                    type: 'players'
                }
            ],
            children: {
                '*': {
                    type: 'literalArgument',
                    parsers: [
                        'minecraft:resource_location'
                    ],
                    executables: [
                        true
                    ],
                    arguments: [
                        'sound'
                    ],
                    parsersId: 96
                },
                ambient: {
                    type: 'literalArgument',
                    parsers: [
                        'minecraft:resource_location'
                    ],
                    executables: [
                        true,
                        true
                    ],
                    arguments: [
                        'sound'
                    ],
                    parsersId: 96
                },
                block: {
                    type: 'literalArgument',
                    parsers: [
                        'minecraft:resource_location'
                    ],
                    executables: [
                        true,
                        true
                    ],
                    arguments: [
                        'sound'
                    ],
                    parsersId: 96
                },
                hostile: {
                    type: 'literalArgument',
                    parsers: [
                        'minecraft:resource_location'
                    ],
                    executables: [
                        true,
                        true
                    ],
                    arguments: [
                        'sound'
                    ],
                    parsersId: 96
                },
                master: {
                    type: 'literalArgument',
                    parsers: [
                        'minecraft:resource_location'
                    ],
                    executables: [
                        true,
                        true
                    ],
                    arguments: [
                        'sound'
                    ],
                    parsersId: 96
                },
                music: {
                    type: 'literalArgument',
                    parsers: [
                        'minecraft:resource_location'
                    ],
                    executables: [
                        true,
                        true
                    ],
                    arguments: [
                        'sound'
                    ],
                    parsersId: 96
                },
                neutral: {
                    type: 'literalArgument',
                    parsers: [
                        'minecraft:resource_location'
                    ],
                    executables: [
                        true,
                        true
                    ],
                    arguments: [
                        'sound'
                    ],
                    parsersId: 96
                },
                player: {
                    type: 'literalArgument',
                    parsers: [
                        'minecraft:resource_location'
                    ],
                    executables: [
                        true,
                        true
                    ],
                    arguments: [
                        'sound'
                    ],
                    parsersId: 96
                },
                record: {
                    type: 'literalArgument',
                    parsers: [
                        'minecraft:resource_location'
                    ],
                    executables: [
                        true,
                        true
                    ],
                    arguments: [
                        'sound'
                    ],
                    parsersId: 96
                },
                voice: {
                    type: 'literalArgument',
                    parsers: [
                        'minecraft:resource_location'
                    ],
                    executables: [
                        true,
                        true
                    ],
                    arguments: [
                        'sound'
                    ],
                    parsersId: 96
                },
                weather: {
                    type: 'literalArgument',
                    parsers: [
                        'minecraft:resource_location'
                    ],
                    executables: [
                        true,
                        true
                    ],
                    arguments: [
                        'sound'
                    ],
                    parsersId: 96
                }
            },
            arguments: [
                'targets'
            ],
            parsersId: 0
        },
        summon: {
            type: 'literalArgument',
            parsers: [
                'minecraft:entity_summon',
                'minecraft:vec3',
                'minecraft:nbt_compound_tag'
            ],
            executables: [
                true,
                true,
                true
            ],
            arguments: [
                'entity',
                'pos',
                'nbt'
            ],
            parsersId: 118
        },
        tag: {
            type: 'literalArgument',
            parsers: [
                'minecraft:entity'
            ],
            executables: [
                false
            ],
            properties: [
                {
                    amount: 'multiple',
                    type: 'entities'
                }
            ],
            children: {
                add: {
                    type: 'literalArgument',
                    parsers: [
                        'brigadier:string'
                    ],
                    executables: [
                        true
                    ],
                    properties: [
                        {
                            type: 'word'
                        }
                    ],
                    arguments: [
                        'name'
                    ],
                    parsersId: 40
                },
                list: {
                    type: 'literalArgument',
                    parsers: [],
                    executables: [],
                    arguments: [],
                    parsersId: 1
                },
                remove: {
                    type: 'literalArgument',
                    parsers: [
                        'brigadier:string'
                    ],
                    executables: [
                        true
                    ],
                    properties: [
                        {
                            type: 'word'
                        }
                    ],
                    arguments: [
                        'name'
                    ],
                    parsersId: 40
                }
            },
            arguments: [
                'targets'
            ],
            parsersId: 0
        },
        team: {
            type: 'literal',
            children: {
                add: {
                    type: 'literalArgument',
                    parsers: [
                        'brigadier:string',
                        'minecraft:component'
                    ],
                    executables: [
                        true,
                        true
                    ],
                    properties: [
                        {
                            type: 'word'
                        },
                        undefined
                    ],
                    arguments: [
                        'team',
                        'displayName'
                    ],
                    parsersId: 119
                },
                empty: {
                    type: 'literalArgument',
                    parsers: [
                        'minecraft:team'
                    ],
                    executables: [
                        true
                    ],
                    arguments: [
                        'team'
                    ],
                    parsersId: 120
                },
                join: {
                    type: 'literalArgument',
                    parsers: [
                        'minecraft:team',
                        'minecraft:score_holder'
                    ],
                    executables: [
                        true,
                        true
                    ],
                    properties: [
                        undefined,
                        {
                            amount: 'multiple'
                        }
                    ],
                    arguments: [
                        'team',
                        'members'
                    ],
                    parsersId: 121
                },
                leave: {
                    type: 'literalArgument',
                    parsers: [
                        'minecraft:score_holder'
                    ],
                    executables: [
                        true
                    ],
                    properties: [
                        {
                            amount: 'multiple'
                        }
                    ],
                    arguments: [
                        'members'
                    ],
                    parsersId: 122
                },
                list: {
                    type: 'literalArgument',
                    parsers: [
                        'minecraft:team'
                    ],
                    executables: [
                        true,
                        true
                    ],
                    arguments: [
                        'team'
                    ],
                    parsersId: 120
                },
                modify: {
                    type: 'literalArgument',
                    parsers: [
                        'minecraft:team'
                    ],
                    executables: [
                        false
                    ],
                    children: {
                        collisionRule: {
                            type: 'literalArgument',
                            parsers: [
                                'sandstone:literals'
                            ],
                            executables: [
                                true
                            ],
                            literalValues: [
                                [
                                    'always',
                                    'never',
                                    'pushOtherTeams',
                                    'pushOwnTeam'
                                ]
                            ],
                            arguments: [
                                'option'
                            ],
                            parsersId: 123
                        },
                        color: {
                            type: 'literalArgument',
                            parsers: [
                                'minecraft:color'
                            ],
                            executables: [
                                true
                            ],
                            arguments: [
                                'value'
                            ],
                            parsersId: 124
                        },
                        deathMessageVisibility: {
                            type: 'literalArgument',
                            parsers: [
                                'sandstone:literals'
                            ],
                            executables: [
                                true
                            ],
                            literalValues: [
                                [
                                    'always',
                                    'hideForOtherTeams',
                                    'hideForOwnTeam',
                                    'never'
                                ]
                            ],
                            arguments: [
                                'option'
                            ],
                            parsersId: 125
                        },
                        displayName: {
                            type: 'literalArgument',
                            parsers: [
                                'minecraft:component'
                            ],
                            executables: [
                                true
                            ],
                            arguments: [
                                'displayName'
                            ],
                            parsersId: 106
                        },
                        friendlyFire: {
                            type: 'literalArgument',
                            parsers: [
                                'brigadier:bool'
                            ],
                            executables: [
                                true
                            ],
                            arguments: [
                                'allowed'
                            ],
                            parsersId: 126
                        },
                        nametagVisibility: {
                            type: 'literalArgument',
                            parsers: [
                                'sandstone:literals'
                            ],
                            executables: [
                                true
                            ],
                            literalValues: [
                                [
                                    'always',
                                    'hideForOtherTeams',
                                    'hideForOwnTeam',
                                    'never'
                                ]
                            ],
                            arguments: [
                                'option'
                            ],
                            parsersId: 125
                        },
                        prefix: {
                            type: 'literalArgument',
                            parsers: [
                                'minecraft:component'
                            ],
                            executables: [
                                true
                            ],
                            arguments: [
                                'prefix'
                            ],
                            parsersId: 127
                        },
                        seeFriendlyInvisibles: {
                            type: 'literalArgument',
                            parsers: [
                                'brigadier:bool'
                            ],
                            executables: [
                                true
                            ],
                            arguments: [
                                'allowed'
                            ],
                            parsersId: 126
                        },
                        suffix: {
                            type: 'literalArgument',
                            parsers: [
                                'minecraft:component'
                            ],
                            executables: [
                                true
                            ],
                            arguments: [
                                'suffix'
                            ],
                            parsersId: 128
                        }
                    },
                    arguments: [
                        'team'
                    ],
                    parsersId: 120
                },
                remove: {
                    type: 'literalArgument',
                    parsers: [
                        'minecraft:team'
                    ],
                    executables: [
                        true
                    ],
                    arguments: [
                        'team'
                    ],
                    parsersId: 120
                }
            }
        },
        teammsg: {
            type: 'literalArgument',
            parsers: [
                'minecraft:message'
            ],
            executables: [
                true
            ],
            arguments: [
                'message'
            ],
            parsersId: 101
        },
        teleport: {
            type: 'literal',
            children: {
                destination: {
                    type: 'argument',
                    properties: [
                        {
                            amount: 'single',
                            type: 'entities'
                        }
                    ],
                    parsers: [
                        'minecraft:entity'
                    ],
                    executables: [
                        true
                    ],
                    parsersId: 129
                },
                location: {
                    type: 'argument',
                    parsers: [
                        'minecraft:vec3'
                    ],
                    executables: [
                        true
                    ],
                    parsersId: 130
                },
                targets: {
                    type: 'argument',
                    properties: [
                        {
                            amount: 'multiple',
                            type: 'entities'
                        }
                    ],
                    children: {
                        destination: {
                            type: 'argument',
                            properties: [
                                {
                                    amount: 'single',
                                    type: 'entities'
                                }
                            ],
                            parsers: [
                                'minecraft:entity'
                            ],
                            executables: [
                                true
                            ],
                            parsersId: 129
                        },
                        location: {
                            type: 'argument',
                            children: {
                                facing: {
                                    type: 'literal',
                                    children: {
                                        entity: {
                                            type: 'literalArgument',
                                            parsers: [
                                                'minecraft:entity',
                                                'minecraft:entity_anchor'
                                            ],
                                            executables: [
                                                true,
                                                true
                                            ],
                                            properties: [
                                                {
                                                    amount: 'single',
                                                    type: 'entities'
                                                },
                                                undefined
                                            ],
                                            arguments: [
                                                'facingEntity',
                                                'facingAnchor'
                                            ],
                                            parsersId: 132
                                        },
                                        facingLocation: {
                                            type: 'argument',
                                            parsers: [
                                                'minecraft:vec3'
                                            ],
                                            executables: [
                                                true
                                            ],
                                            parsersId: 133
                                        }
                                    }
                                },
                                rotation: {
                                    type: 'argument',
                                    parsers: [
                                        'minecraft:rotation'
                                    ],
                                    executables: [
                                        true
                                    ],
                                    parsersId: 134
                                }
                            },
                            parsers: [
                                'minecraft:vec3'
                            ],
                            executables: [
                                true
                            ],
                            parsersId: 130
                        }
                    },
                    parsers: [
                        'minecraft:entity'
                    ],
                    executables: [
                        false
                    ],
                    parsersId: 131
                }
            }
        },
        tell: {
            type: 'literalArgument',
            redirect: [
                'msg'
            ],
            parsers: [],
            executables: [],
            arguments: [],
            parsersId: 1
        },
        tellraw: {
            type: 'literalArgument',
            parsers: [
                'minecraft:entity',
                'minecraft:component'
            ],
            executables: [
                false,
                true
            ],
            properties: [
                {
                    amount: 'multiple',
                    type: 'players'
                },
                undefined
            ],
            arguments: [
                'targets',
                'message'
            ],
            parsersId: 135
        },
        time: {
            type: 'literal',
            children: {
                add: {
                    type: 'literalArgument',
                    parsers: [
                        'minecraft:time'
                    ],
                    executables: [
                        true
                    ],
                    arguments: [
                        'time'
                    ],
                    parsersId: 136
                },
                query: {
                    type: 'literalArgument',
                    parsers: [
                        'sandstone:literals'
                    ],
                    executables: [
                        true
                    ],
                    literalValues: [
                        [
                            'day',
                            'daytime',
                            'gametime'
                        ]
                    ],
                    arguments: [
                        'option'
                    ],
                    parsersId: 137
                },
                set: {
                    type: 'literal',
                    children: {
                        day: {
                            type: 'literalArgument',
                            parsers: [],
                            executables: [],
                            arguments: [],
                            parsersId: 1
                        },
                        midnight: {
                            type: 'literalArgument',
                            parsers: [],
                            executables: [],
                            arguments: [],
                            parsersId: 1
                        },
                        night: {
                            type: 'literalArgument',
                            parsers: [],
                            executables: [],
                            arguments: [],
                            parsersId: 1
                        },
                        noon: {
                            type: 'literalArgument',
                            parsers: [],
                            executables: [],
                            arguments: [],
                            parsersId: 1
                        },
                        time: {
                            type: 'argument',
                            parsers: [
                                'minecraft:time'
                            ],
                            executables: [
                                true
                            ],
                            parsersId: 138
                        }
                    }
                }
            }
        },
        title: {
            type: 'literalArgument',
            parsers: [
                'minecraft:entity'
            ],
            executables: [
                false
            ],
            properties: [
                {
                    amount: 'multiple',
                    type: 'players'
                }
            ],
            children: {
                actionbar: {
                    type: 'literalArgument',
                    parsers: [
                        'minecraft:component'
                    ],
                    executables: [
                        true
                    ],
                    arguments: [
                        'title'
                    ],
                    parsersId: 139
                },
                clear: {
                    type: 'literalArgument',
                    parsers: [],
                    executables: [],
                    arguments: [],
                    parsersId: 1
                },
                reset: {
                    type: 'literalArgument',
                    parsers: [],
                    executables: [],
                    arguments: [],
                    parsersId: 1
                },
                subtitle: {
                    type: 'literalArgument',
                    parsers: [
                        'minecraft:component'
                    ],
                    executables: [
                        true
                    ],
                    arguments: [
                        'title'
                    ],
                    parsersId: 139
                },
                times: {
                    type: 'literalArgument',
                    parsers: [
                        'brigadier:integer',
                        'brigadier:integer',
                        'brigadier:integer'
                    ],
                    executables: [
                        false,
                        false,
                        true
                    ],
                    properties: [
                        {
                            min: 0
                        },
                        {
                            min: 0
                        },
                        {
                            min: 0
                        }
                    ],
                    arguments: [
                        'fadeIn',
                        'stay',
                        'fadeOut'
                    ],
                    parsersId: 140
                },
                title: {
                    type: 'literalArgument',
                    parsers: [
                        'minecraft:component'
                    ],
                    executables: [
                        true
                    ],
                    arguments: [
                        'title'
                    ],
                    parsersId: 139
                }
            },
            arguments: [
                'targets'
            ],
            parsersId: 0
        },
        tm: {
            type: 'literalArgument',
            redirect: [
                'teammsg'
            ],
            parsers: [],
            executables: [],
            arguments: [],
            parsersId: 1
        },
        tp: {
            type: 'literalArgument',
            redirect: [
                'teleport'
            ],
            parsers: [],
            executables: [],
            arguments: [],
            parsersId: 1
        },
        trigger: {
            type: 'literalArgument',
            parsers: [
                'minecraft:objective'
            ],
            executables: [
                true
            ],
            children: {
                add: {
                    type: 'literalArgument',
                    parsers: [
                        'brigadier:integer'
                    ],
                    executables: [
                        true
                    ],
                    arguments: [
                        'value'
                    ],
                    parsersId: 17
                },
                set: {
                    type: 'literalArgument',
                    parsers: [
                        'brigadier:integer'
                    ],
                    executables: [
                        true
                    ],
                    arguments: [
                        'value'
                    ],
                    parsersId: 17
                }
            },
            arguments: [
                'objective'
            ],
            parsersId: 105
        },
        w: {
            type: 'literalArgument',
            redirect: [
                'msg'
            ],
            parsers: [],
            executables: [],
            arguments: [],
            parsersId: 1
        },
        weather: {
            type: 'literal',
            children: {
                clear: {
                    type: 'literalArgument',
                    parsers: [
                        'brigadier:integer'
                    ],
                    executables: [
                        true,
                        true
                    ],
                    properties: [
                        {
                            min: 0,
                            max: 1000000
                        }
                    ],
                    arguments: [
                        'duration'
                    ],
                    parsersId: 141
                },
                rain: {
                    type: 'literalArgument',
                    parsers: [
                        'brigadier:integer'
                    ],
                    executables: [
                        true,
                        true
                    ],
                    properties: [
                        {
                            min: 0,
                            max: 1000000
                        }
                    ],
                    arguments: [
                        'duration'
                    ],
                    parsersId: 141
                },
                thunder: {
                    type: 'literalArgument',
                    parsers: [
                        'brigadier:integer'
                    ],
                    executables: [
                        true,
                        true
                    ],
                    properties: [
                        {
                            min: 0,
                            max: 1000000
                        }
                    ],
                    arguments: [
                        'duration'
                    ],
                    parsersId: 141
                }
            }
        },
        worldborder: {
            type: 'literal',
            children: {
                add: {
                    type: 'literalArgument',
                    parsers: [
                        'brigadier:float',
                        'brigadier:integer'
                    ],
                    executables: [
                        true,
                        true
                    ],
                    properties: [
                        {
                            min: -60000000,
                            max: 60000000
                        },
                        {
                            min: 0
                        }
                    ],
                    arguments: [
                        'distance',
                        'time'
                    ],
                    parsersId: 142
                },
                center: {
                    type: 'literalArgument',
                    parsers: [
                        'minecraft:vec2'
                    ],
                    executables: [
                        true
                    ],
                    arguments: [
                        'pos'
                    ],
                    parsersId: 143
                },
                damage: {
                    type: 'literal',
                    children: {
                        amount: {
                            type: 'literalArgument',
                            parsers: [
                                'brigadier:float'
                            ],
                            executables: [
                                true
                            ],
                            properties: [
                                {
                                    min: 0
                                }
                            ],
                            arguments: [
                                'damagePerBlock'
                            ],
                            parsersId: 144
                        },
                        buffer: {
                            type: 'literalArgument',
                            parsers: [
                                'brigadier:float'
                            ],
                            executables: [
                                true
                            ],
                            properties: [
                                {
                                    min: 0
                                }
                            ],
                            arguments: [
                                'distance'
                            ],
                            parsersId: 145
                        }
                    }
                },
                get: {
                    type: 'literalArgument',
                    parsers: [],
                    executables: [],
                    arguments: [],
                    parsersId: 1
                },
                set: {
                    type: 'literalArgument',
                    parsers: [
                        'brigadier:float',
                        'brigadier:integer'
                    ],
                    executables: [
                        true,
                        true
                    ],
                    properties: [
                        {
                            min: -60000000,
                            max: 60000000
                        },
                        {
                            min: 0
                        }
                    ],
                    arguments: [
                        'distance',
                        'time'
                    ],
                    parsersId: 142
                },
                warning: {
                    type: 'literal',
                    children: {
                        distance: {
                            type: 'literalArgument',
                            parsers: [
                                'brigadier:integer'
                            ],
                            executables: [
                                true
                            ],
                            properties: [
                                {
                                    min: 0
                                }
                            ],
                            arguments: [
                                'distance'
                            ],
                            parsersId: 146
                        },
                        time: {
                            type: 'literalArgument',
                            parsers: [
                                'brigadier:integer'
                            ],
                            executables: [
                                true
                            ],
                            properties: [
                                {
                                    min: 0
                                }
                            ],
                            arguments: [
                                'time'
                            ],
                            parsersId: 147
                        }
                    }
                }
            }
        },
        xp: {
            type: 'literalArgument',
            redirect: [
                'experience'
            ],
            parsers: [],
            executables: [],
            arguments: [],
            parsersId: 1
        }
    },
    parsers: [],
    executables: []
};
//# sourceMappingURL=commands.js.map