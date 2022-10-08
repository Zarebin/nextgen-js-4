export function addEvent(val,res){
  let event= new CustomEvent('output',{
    detail:{
      value:val,
      res:res
    },

    bubbles:true,
    composed:true
  });

    dispatchEvent(event);
};

export function hist(val1,val2){
  let his= new CustomEvent('history',{
    detail:{
      history1:val1,
      history2:val2
    },

    bubbles:true,
    composed:true
  });

    dispatchEvent(his);
}



