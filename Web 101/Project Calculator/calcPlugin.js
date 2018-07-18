class Calculator {
    constructor(options){
      var self = this;
      var elem = this.elem = options.elem;
      var calcInput = elem.querySelector('.calc__expr input');
      self.operators = [];
      self.expr = '';
      
      function add(num,num2) {
        return num + num2;
      };
      function subtract(num,num2) {
        return num - num2;
      };
      function multiply(num,num2) {
        return num * num2;
      };
      function divide(num,num2) {
        return num / num2;
      }
      function operate(func,num,num2) {
        return func(num,num2);
      }
      
      elem.addEventListener('click',function input(e) {
        if(!e.target.classList.contains('calc__btn'))return;
        if(e.target.classList.contains('calc__equals') || e.target.classList.contains('calc__clear')) return;
        calcInput.value+=e.target.innerText;
        self.expr+=e.target.innerText;
        if(e.target.classList.contains('calc__operator')) {
          self.operators.push(e.target.innerText);
        }
      });
      
      elem.addEventListener('click',function clearAll(e) {
        if(!e.target.classList.contains('calc__clear')) return;
        calcInput.value = ''; 
        self.expr = '';
        self.operators = [];
      });
      
      elem.addEventListener('click', function evaluate(e){
        if(!e.target.classList.contains('calc__equals')) return;
        self.expr= self.expr.split(/\W/g);
        self.expr = self.expr.map(function(el){
          return parseInt(el);
        });
        for(var i=0;i<self.operators.length;i++) {
          var operator;
          switch(self.operators[i]) {
            case '+' :
              operator = add;
              break;
            case '-' :
              operator = subtract;
              break;
            case '*' :
              operator = multiply;
              break;
            case '/' :
              operator = divide;
              break;
          }
          
          self.expr[i + 1] = operate.call(self,operator,self.expr[i],self.expr[i + 1])
        }
        calcInput.value = self.expr[self.expr.length - 1]; 
        self.expr= self.expr[self.expr.length - 1].toString();
        self.operators = [];
      });
    };
    
  };
  