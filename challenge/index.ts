import { grid } from "./grid";
  
  function navigatedGrid(grid: string[]){
    let path: string = ''; 
    let letters: string = ''; 
    let x: number = grid[0].indexOf('>'); 
    let y: number = 0; 
    let direction: string = 'right';
  
    const visited: Set<string> = new Set(); 
    visited.add(`${y},${x}`); 
  
    
    function move(): void {
      if (direction === 'right') {
        x += 1;
      } else if (direction === 'left') {
        x -= 1;
      } else if (direction === 'up') {
        y -= 1;
      } else if (direction === 'down') {
        y += 1;
      }
    }
  
    
    function ChangingDirection() {
      
      const originalDirection: string = direction;
      for (const newDirection of ['right', 'left', 'up', 'down']) {
        direction = newDirection;
        move();
        if (!grid[y] || !grid[y][x] || grid[y][x] === ' ' || visited.has(`${y},${x}`)) {
         
          direction = originalDirection; 
          x = grid[0].indexOf('>'); 
          y = 0; 
        } else {
          break;
        }
      }
    }
  
    
    while (true) {
      move();
      const currentPosition: string = `${y},${x}`;
      if (grid[y] && grid[y][x] && !visited.has(currentPosition)) {
        path += grid[y][x];
        if (grid[y][x].match(/[A-Z]/)) letters += grid[y][x];
        visited.add(currentPosition);
      } else {
        ChangingDirection();
      }
  
      
      if (grid[y][x] === 's' || direction === null) break;
    }
  
    console.log(`Path ${path}`);
    console.log(`Letters ${letters}`);
  }
  
  navigatedGrid(grid);
  