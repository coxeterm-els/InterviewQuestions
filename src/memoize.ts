export type Func = (...args: any[]) => any;

export function memoize(func: Func) {
    const cache = new Map();

    const result: Func = (...args) => {
        const key = JSON.stringify(args);

        if (cache.has(key)) {
            console.log(`Returning cached result for ${key}`);
            return cache.get(key);
        }

        const result = func(...args);
        console.log(`Calculating result for ${key}`);
        cache.set(key, result);
        return result;
    };
    return result;
}