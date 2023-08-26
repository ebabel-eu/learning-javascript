'use strict';

const findPoint = (px, py, qx, qy) => {
    const rx = qx + (qx - px) ;
    let ry = qy + (qy - py) ;

    return [rx, ry] ;
}

module.exports = findPoint;