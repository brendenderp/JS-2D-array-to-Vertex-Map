# JS-2D-array-to-Vertex-Map
Used to convert a 2d Array[][] to a vertex map of its outline.

This was developed specifically with Matterjs in mind.

<img width="422" alt="image" src="https://github.com/brendenderp/JS-2D-array-to-Vertex-Map/assets/29009423/02ba0eb3-3e5f-43a3-b153-adc55b3b44f5">
<img width="422" alt="image" src="https://github.com/brendenderp/JS-2D-array-to-Vertex-Map/assets/29009423/efcd3ca8-9aeb-41b2-bf0c-b734d32b3cfb">
<img width="422" alt="image" src="https://github.com/brendenderp/JS-2D-array-to-Vertex-Map/assets/29009423/0ad42cad-cca1-40af-bcd3-bf41d8a5d9b5">
<img width="422" alt="image" src="https://github.com/brendenderp/JS-2D-array-to-Vertex-Map/assets/29009423/a046a227-61b4-4952-818b-eebd4623bdaa">

first we start with our test array. 
```
0 0 0 0
0 1 1 0
0 1 1 0
0 0 0 0

```



Youll in most cases need to call the post processing functions to prepare your 2darray.
```
expandToVerts();
```
Takes an input arrray and outputs it expanded by 4.

```
0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0
0 0 1 1 1 1 0 0
0 0 1 1 1 1 0 0
0 0 1 1 1 1 0 0
0 0 1 1 1 1 0 0
0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0
```
```
getOuterSquares();
```
Takes an array as input and outputs the same array but hollow. Removing all its center squares. 

```
0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0
0 0 1 1 1 1 0 0
0 0 1 0 0 1 0 0
0 0 1 0 0 1 0 0
0 0 1 1 1 1 0 0
0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0
```

And Finally 
```
ArraytoVertexMap(newarray);
```
Recursively runs though the array clockwise removing any already visited spot, to create the final vertex map.
```
[
  '4 2', '5 2', '5 3',
  '5 4', '5 5', '4 5',
  '3 5', '2 5', '2 4',
  '2 3', '2 2', '3 2'
]
```

All the functions look like...

```
logArray(testArray);
console.log("--------Start Post Processing--------");
newarray = expandToVerts(testArray);
logArray(newarray);
newarray =getOuterSquares(newarray);
logArray(newarray);

console.log("--------Start Converting to vertexmap--------");
ArraytoVertexMap(newarray);


```
and the console log of the entire program is...

```
Time to get func-ey
0 0 0 0
0 1 1 0
0 1 1 0
0 0 0 0

--------Start Post Processing--------
0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0
0 0 1 1 1 1 0 0
0 0 1 1 1 1 0 0
0 0 1 1 1 1 0 0
0 0 1 1 1 1 0 0
0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0

0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0
0 0 1 1 1 1 0 0
0 0 1 0 0 1 0 0
0 0 1 0 0 1 0 0
0 0 1 1 1 1 0 0
0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0

--------Start Converting to vertexmap--------
0
0
1
Starting Position is X:  4  Y:  2
starting Loop
End position at 90
5 2
0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0
0 0 1 1 0 1 0 0
0 0 1 0 0 1 0 0
0 0 1 0 0 1 0 0
0 0 1 1 1 1 0 0
0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0

End position at 180
5 3
0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0
0 0 1 1 0 0 0 0
0 0 1 0 0 1 0 0
0 0 1 0 0 1 0 0
0 0 1 1 1 1 0 0
0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0

... The process then continues the walk and outputs the result..

End position at 90
3 2
0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0
0 0 0 1 0 0 0 0
0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0

[
  '4 2', '5 2', '5 3',
  '5 4', '5 5', '4 5',
  '3 5', '2 5', '2 4',
  '2 3', '2 2', '3 2'
]


```
