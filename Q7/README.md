# Problem 7

## Description

You are given 2 containers: A and B. Container A can hold 5 litres of water, while
container B can hold 3 litres. You are also given a source of water that you can use as
you wish. Show how you can use the containers and the water source to put exactly 4
litres of water in container A. No coding required, just write down the steps.

## Solution

### Solution 1

1. Fill Container `A` full.
2. Pour Container `A` into Container `B`.
3. Now Container `A` has 2 litres, Container `B` has 3 litres.
4. Empty Container `B`.
5. Pour Container `A` into Container `B`.
6. Now Container `A` is empty, Container `B` has 2 litres.
7. Fill Container `A`.
8. Now Container `A` has 5 litres, Container `B` has 2 litres.
9. Pour Container `A` into Container `B`.
10. Now Container `A` has 4 litres, while Container `B` has 3 litres.

### Solution 2

1. Fill Container `B` full.
2. Pour Container `B` into Container `A`.
3. Fill Container `B` full again.
4. Pour Container `B` into Container `A` again.
5. Now Container `A` has 5 litres, while Container `B` has 1 litre.
6. Empty Container `A`.
7. Pour Container `B` into Container `A`.
8. Now Container `A` has 1 litre, Container `B` has 0 litres.
9. Fill Container `B`.
10. Pour Container `B` in Container `A`.
11. Now Container `A` has (1 + 3) litres.
