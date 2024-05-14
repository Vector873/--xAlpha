//inheritance
class shape{  //parent class
    #area;
    constructor(area){
      this.#area = area;
    }
    calculate(){return 0;}
    setarea(area){
      this.#area = area;
    }
    getarea(){
      return this.#area;
    }
  }
  class circle extends shape{  //child class
    calculate(r){ 
      this.setarea(2*3.14*r);
    }
  }
  class square extends shape{  //child class
    calculate(a){ 
      this.setarea(a*a);
    }
  }