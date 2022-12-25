## Data structure: Hash tables
Hash tables store's data in a 'key' 'value' pairs, where each unique key points to the data stored in memory. Hash tables are one of the most fastest and useful data structure.

It has a hashing function that hash keys in to indexes which determines where a value can be stored or found. The hash function is idempotent means it'll produce the same output no matter how many times you try ran it.

Note:
- They are also called Hash Map.
- Unlike Arrays hash maps are unstructured or unordered.
- The hash function sometimes produce the same output for 2 different input(keys) which causes the collisions AKA hash collision.

### Visualize
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Hash_table_3_1_1_0_1_0_0_SP.svg/1200px-Hash_table_3_1_1_0_1_0_0_SP.svg.png" width="100%" />

### Hash Collision diagram
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Hash_table_5_0_1_1_1_1_0_LL.svg/500px-Hash_table_5_0_1_1_1_1_0_LL.svg.png" width="100%" />