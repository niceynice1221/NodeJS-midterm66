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
}  