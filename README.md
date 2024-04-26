# JS-2D-array-to-Vertex-Map
Used to convert a 2d Array[][] to a vertex map of its outline.

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
