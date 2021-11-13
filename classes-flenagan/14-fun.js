class File {
    constructor(fullName, contents) {
      this._fullName = fullName;
      this.contents = contents;
    }

    get fullName() {
      console.log("getFN", this);
      return this._fullName;
    }
    
    get filename() {
      console.log("getF", this);
      console.log(
        this.fullName.substring(0, this.fullName.lastIndexOf('.'))
      );
      return this.fullName.substring(0, this.fullName.lastIndexOf('.'));
    }
    
    get extension() {
      console.log("getE", this)
      console.log(this.fullName.substring(this.fullName.lastIndexOf('.')+1))
      return this.fullName.substring(this.fullName.lastIndexOf('.')+1);
    }
    
    getContents () {
      console.log("getC", this);
      return this.contents;
    }
    
    write(str){
      console.log("getW", this);
      this.contents  += '\n'+str;
    }
    
    gets(){
      console.log("getS", this);
      let index = this.cotents.indexOf('/n');
      console.log(index)
    }
  }

  var example = new File("example.txt", "An example file");
  example.filename;
  example.extension;
  console.log('ihor\nTym')