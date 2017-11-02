var points = [{x: 1, y: 1 }, {x: -1, y: 1 }, {x: -1, y: -1 }, {x: 1, y: -1 }, {x: 2, y: 2 }, {x: -1, y: 2 }, {x: -1, y: -2 }, {x: 1, y: -2 }, {x: 1, y: 6 }, {x: -1, y: 4 }, {x: -3, y: -1 }, {x: 1, y: -1 }, {x: 10, y: 1 }, {x: -1, y: 11 }, {x: -1, y: -1 }, {x: 1, y: -1 } ]
var largeDistance = 0;
points.map((point)=>{

    x1 = point.x;
    y1 = point.y;

    points.map((p)=>{
        base = x1-p.x;
        altitude = y1-p.y;
        x = Math.sqrt( base*base + altitude*altitude );
        (x > largeDistance)?largeDistance=x:'';
    })
});
console.log(largeDistance);