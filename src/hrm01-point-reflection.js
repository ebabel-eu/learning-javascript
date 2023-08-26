
'use strict';


const findPoint = (px, py, qx, qy) => {
    // Write your code here
    const rx = qx + (qx - px) ;
    const ry = qy + (qy - py) ;

    return [rx, ry];
}

module.exports = findPoint;


