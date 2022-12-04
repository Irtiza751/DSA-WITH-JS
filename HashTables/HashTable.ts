/**
 * @HashTables
 * Hash tables are key value data structre w
*/

class HashTable<T> {
    // defining the data to be in this structure
    // ==> [ [ [key1, value1] ], [ [key2, value2] ] ]
    private data: any;

    constructor(size: number) {
        this.data = new Array(size).fill(0);
    }

    // this hash function is idempotent, output will be same for the same input.
    private hash(key: string): number {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key: string, value: T) {
        // getting the address from hash function
        const address = this.hash(key);
        if(!this.data[address]) {
            // create an empty array at the given address from hash
            this.data[address] = [];
            // push array of key & value in to the above array
            this.data[address].push([key, value]);
        }
        
        return this.data;
    };

    get(key: string): T {
        // getting the address
        const address = this.hash(key);
        // Note: data at this address is of form like
        // [ ['some key', 'some value'] ]
        console.log(this.data);
        
        return this.data[address][0][1];
    }
}

const hashTable = new HashTable<string>(5);
hashTable.set('name', 'Irtiza');
hashTable.set('age', '23');
hashTable.set('gender', 'male');

hashTable.get('gender');