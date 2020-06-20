var form,record1;
function setup() {
  createCanvas(800,400);
   form = new Form();
   record1 =new Record();
}

function draw() {
  background(255,205,25);  
record1.display();
  form.display();
}