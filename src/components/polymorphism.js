//polymorphism
class shape{
    #area;
    constructor(area){
      this.#area = area;
    }
    calculate(){return 0;} //method overriding
    setarea(area){
      this.#area = area;
    }
    getarea(){
      return this.#area;
    }
  }
  class circle extends shape{
    calculate(r){  //method overriding
      this.setarea(2*3.14*r);
    }
  }
  class square extends shape{
    calculate(a){  //method overriding
      this.setarea(a*a);
    }
  }