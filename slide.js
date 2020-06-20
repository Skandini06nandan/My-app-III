class slide{
    constructor(){
        this.input =createInput();
        this.button1 =createButton('Create your 1st Record')
        this.button2 =createButton('+');
        this.greeting =createElement('h2');
    this.title =createElement('h2')
    }
    display(){
    this.title.html("Good evening + name");
    this.title.position(100,10);
    
    this.button.position(470,210);
    this.input.position(300,210);

    this.button.mousePressed(()=>{
   
    this.greeting.hide();
    
   
    this.button2.position(300,130);
    this.button1.position(100,200)
    });
    
    
    }}