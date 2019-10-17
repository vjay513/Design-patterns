//Advantage: Module which of our functions and variables may be accessed publicly which eases readability.
var revModulePattern = (function(){
    var privateLabel = "krishna", publicLabel = "Vijay";
    function getFullName(){
        console.log( publicLabel + ' ' + accessPrivateVariable());
    }
    function accessPrivateVariable(){
        return privateLabel;
    }
    function changeName(name){
        privateLabel = name; // altering private variables
    }
    return {
        getName: getFullName,
        setName: changeName,
        publicName: publicLabel // global value exposing to the outside
    }
})();
// Set value to the private variable of the class
revModulePattern.setName("Bammidi"); 
// After alter the private method we are able to see the expected changes
revModulePattern.getName() // Vijay Bammidi
console.log(revModulePattern.publicName) // Vijay

//Disadvantage: A disadvantage of this pattern is that if a private function refers to a public function, that public function can’t be overridden if a patch is necessary. This is because the private function will continue to refer to the private implementation, 
//and the pattern doesn’t apply to public members, only to functions.
var revealed = (function() {      
    function first() {
      return baz();
    }
  
    function third() {
      return "Hello world!!";
    }

    // private function always calls bar because it's in the closure
    // and it can't see the "instance" variable
    function second() {
      return third();
    }
  
    return { first : first, second : second }
  })();
  
  var child = Object.create(revealed);
  
  child.second = function() {
    return "Hello New World!!";
  }
  
  // we want this to call the new bar but it doesn't
  console.log(child.foo()); // Hello world!!
  



