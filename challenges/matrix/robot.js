var Robot = function (width, height) {
  this.width = width;
  this.height = height;
  this.x = 0;
  this.y = 0;
  this.directions = ['East', 'North', 'West', 'South'];
  this.dirIdx = 0;
};

Robot.prototype.step = function (num) {
  for (let i = 0; i < num; i++) {
    let dx = 0,
      dy = 0;
    if (this.directions[this.dirIdx] === 'East') {
      dx = 1;
    } else if (this.directions[this.dirIdx] === 'North') {
      dy = 1;
    } else if (this.directions[this.dirIdx] === 'West') {
      dx = -1;
    } else if (this.directions[this.dirIdx] === 'South') {
      dy = -1;
    }

    const newX = this.x + dx;
    const newY = this.y + dy;

    if (newX < 0 || newX >= this.width || newY < 0 || newY >= this.height) {
      this.dirIdx = (this.dirIdx + 1) % 4;
      i--;
      continue;
    }

    this.x = newX;
    this.y = newY;
  }
};

Robot.prototype.getPos = function () {
  return [this.x, this.y];
};

Robot.prototype.getDir = function () {
  return this.directions[this.dirIdx];
};

var obj = new Robot(3, 3);
obj.step(10);
console.log(obj.getPos());
console.log(obj.getDir());
