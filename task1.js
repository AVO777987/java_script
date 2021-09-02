const container = document.querySelector('.container');
function chess() {
    const A_B = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    for (let line = 1; line <= 10; line++) {
        new_line = document.createElement('DIV');
        new_line.setAttribute('class', 'line_' + line);
        container.appendChild(new_line);
        const append_line = document.querySelector('.line_' + line);
        for (let cell = 1; cell <= 10; cell++) {
            const new_cell = document.createElement('DIV');
            if (line == 1 || line == 10) {
                if (cell != 1 && cell != 10) {
                    new_cell.textContent = A_B[cell - 2];
                }
                new_cell.setAttribute('class', 'menu');
            }
            else {
                if (cell == 1 || cell == 10) {
                    new_cell.textContent = 10 - line;
                    new_cell.setAttribute('class', 'menu')
                }
                else {
                    if (line % 2 == 0) {
                        if (cell % 2 == 0) {
                            new_cell.setAttribute('class', 'white_cell');
                        }
                        else {
                            new_cell.setAttribute('class', 'black_cell');
                        }
                    }
                    else {
                        if (cell % 2 == 0) {
                            new_cell.setAttribute('class', 'black_cell');
                        }
                        else {
                            new_cell.setAttribute('class', 'white_cell');
                        }
                    }
                }
            }
            append_line.appendChild(new_cell);
        }
    }
}

chess();