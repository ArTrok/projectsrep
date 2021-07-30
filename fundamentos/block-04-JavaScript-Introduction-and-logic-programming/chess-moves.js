let chessPiece = 'Knight';
switch (chessPiece.toLowerCase()) {
    case 'knight' :
        console.log('It may move two squares vertically and one square horizontally, \n or two squares horizontally and one square vertically (with both \n forming the shape of an L).While moving, the knight can jump over pieces to reach its destination.')
        break;
    case 'bishop' :
        console.log('It has no restrictions in distance for each move, but is limited \nto diagonal movement.')
        break;
    case 'pawn' :
        console.log('It cannot move backwards. Normally a pawn moves by advancing a single \nsquare, but the first time a pawn moves, it has the option of \nadvancing two squares. Pawns may not use the initial two-square advance to \njump over an occupied square, or to capture. Any piece immediately in \nfront of a pawn, friend or foe, blocks its advance.')
        break;
    case 'queen' :
        console.log('It can be moved any number of unoccupied squares in a straight line \n vertically, horizontally, or diagonally, thus combining the moves \nof the rook and bishop.')
        break;
    case 'king' :
        console.log('It can move one square in any direction (horizontally, vertically, or \ndiagonally), unless the square is already occupied by a friendly piece, \nor the move would place the king in check.')
        break;
    case 'rook' :
        console.log('It moves horizontally or vertically, through any number of unoccupied squares (see diagram).')
        break;
    default:
        console.log('not a piece')
        break;
    }