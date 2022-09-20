export type Spell = {
    _id?: string;
    index: string;
    name: string;
    url: string; 
    desc?: string[];
    higher_level:
}

export type Spells = {
    results: Spell[];
};