
 class CuboidMaker2{
    constructor(cuboidAttr2){
      this.length = cuboidAttr2.length;
      this.width = cuboidAttr2.width;
      this.height = cuboidAttr2.height;
    }
    volume(){
        return (this.length * this.width * this.height);
    }
    surfaceArea(){
        return 2*(this.length * this.width + this.length * this.height + this.width * this.height);
    }
  }
  
  
  const cuboid2 = new CuboidMaker2({
      length: 4,
      width: 5,
      height: 5
  });
  

// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(cuboid2.volume()); // 100
 console.log(cuboid2.surfaceArea()); // 130
// I had to change the name to cuboid2 because it was conflicting in my console with my Prototype file due to them both having the same names.\\

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.