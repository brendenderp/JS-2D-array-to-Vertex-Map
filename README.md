# JS-2D-array-to-Vertex-Map
Used to convert a 2d Array[][] to a vertex map of its outline.

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
