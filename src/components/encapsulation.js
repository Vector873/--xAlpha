//encapsulation
//access modifires
class shape{
    #area;  //private variables
    constructor(area){
      this.#area = area;
    }
    calculate(){return 0;}
    setarea(area){  //public method
      this.#area = area;
    }
    getarea(){  //public method
      return this.#area;
    }
  }
  class circle extends shape{ 
    calculate(r){  //public method
      this.setarea(2*3.14*r);
    }
  }
  class square extends shape{  
    calculate(a){ //public method
      this.setarea(a*a);
    }
  }