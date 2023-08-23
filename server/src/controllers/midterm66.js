module.exports = {
    add1(req, res) {
      input = parseInt(JSON.stringify(req.body["input"]));
      console.log("input = " + input);
      output = input + 1;
      res.send(output.toString());
    },
  
    //Api1 ข้อ x+x
    func1(req, res) {
      n = parseInt(JSON.stringify(req.body["input"]));
      console.log("input = " + n);
      output = number + number;
      console.log("result = " + output);
      res.send(output.toString());
    },

    // Api2 GCD(X,Y) หรม. 
  que2 (req,res){
    x = parseInt(JSON.stringify(req.body['x']))
    y = parseInt(JSON.stringify(req.body['y']))
    console.log('x = '+ a)
    console.log('y = '+ b)

    for(i=x+y;i>0;i--)
    {
        if(y%i==0 && x%i==0){
            gcd=i;
            break;
        }
    }
    console.log('GCD = '+ gcd)
    res.send(gcd.toString())
}
}  
