//abstraction
class shape{
    #area;
    constructor(area){  //data hiding (hide the unnecessary data)
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
  class circle extends shape{ 
    calculate(r){  
      this.setarea(2*3.14*r);
    }
  }
  class square extends shape{  
    calculate(a){ 
      this.setarea(a*a);
    }
  }