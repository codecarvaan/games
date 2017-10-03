
            function setup() {
                
            createCanvas (300,400);
            player[0].color=color(255,0,0); 
            player[1].color=color(0,255,0); 
            againdraw();
            }
            var strokecolor;
            var player=[];
            for(var i=0;i<2;i++)
            {
            player[i]={
            name:"shivam",
            color:"red",
            id:1
            } ;

            }
            player[0]={
            name:"shivam",
            color:"red",
            id:1
            } ;
            player[1]={
            name:"mohit",
            color:"blue",
            id:2
            } ;

            var playeractive={
            name:" s",
            color:"black",
            id:0,
            } ;            


            playeractive.color=player[0].color;
            var arr=[];
            var turn=-1;
            arr[0]=[];
            for(var i=0;i<6;i++)
            {
            arr[i]=[];
            }
            arr[2][3]=2;
            for(var i=0;i<6;i++)
            {
            for(var j=0;j<8;j++)
            {
            arr[i][j]={
            val:0,
            color:"black",
            playerid:0
            };
            }


            function objectdraw( a, b) //when clicked to new position
            {

            arr[a][b].val=arr[a][b].val+1;
            arr[a][b].color=playeractive.color;
            arr[a][b].playerid=playeractive.id;
            }


            function draw() {

            // againdraw();

            }

            function mouseClicked() {
            turn++;
            if(turn>1)
            {
            turn=0;
            }


            console.log("mouse"+turn )
            playeractive.color=player[turn].color;
            playeractive.id=player[turn].id;
            playeractive.name=player[turn].name;




            normx = Math.floor(norm(mouseX, 0, width/6));
            normy = Math.floor(norm(mouseY, 0, height/8));

            if(arr[normx][normy].playerid==playeractive.id || arr[normx][normy].val==0)
            {
            objectdraw(normx,normy);


            refresh();
            }

            else{
            turn--;
            }
            console.log("turn"+turn);

            }


            function againdraw()
            {
            console.log("turn"+turn);
            background(0);

            console.log("turn+1"+(turn+1));
            if(turn+1>=2)
            {
            stroke(player[0].color);
            }
            else{
            stroke(player[turn+1].color);
            }
            strokeWeight(4); 
            var sizex=width/6;
            var sizey=height/8;
            for(var i=0;i <= width;)
            {

            for(var j=0;j <= height;)
            {

            line(0,j,width,j);
            line(i,0,i,height);  
            j=sizey+j;
            }
            i=sizex+i;
            }    
            }
            function refresh()
            {
            againdraw();

            for(var i=0;i < 6;i++)

            {   noStroke();

            for(var j=0;j < 8;j++)
            {

            if(i==0 || j==0 ||i==5||j==7 )
            {

            if((i==0 && j==0) ||(i==5 && j==0)||(i==0 && j==7) ||(i==5 && j==7))
             {
               if(arr[i][j].val==1)
                {
                    fill(arr[i][j].color);
                    ellipse(i*50+width/12,j*50+height/16,35,35);
                }
                 if(arr[i][j].val==2)
                    {
                        var a;
                        var b;
                        if(i+1>5)
                        {
                            a=i-1;
                        }
                        else{
                                a=i+1;
                        }
                        if(j+1>7)
                        {
                        b=j-1;
                        }
                        else{
                                b=j+1;
                        }   
             arr[a][j].val++;
             arr[a][j].color=playeractive.color;
             arr[a][j].playerid=playeractive.id;

             arr[i][b].val++;
             arr[i][b].color=playeractive.color;
             arr[i][b].playerid=playeractive.id;   //working         

              arr[i][j].val=0;
              arr[i][j].color=0;
              arr[i][j].playerid=0;        
            console.log(i+" "+j+" "+a+" "+b);
            refresh();
            }


            }
            else{


                     if(arr[i][j].val==1)
                        {
                          fill(arr[i][j].color);
                        ellipse(i*50+width/12,j*50+height/16,25,25);
                        }
                        if(arr[i][j].val==2)
                        {
                         fill(arr[i][j].color);
                        ellipse(i*50+width/12,j*50+height/16,35,35);
                        }

                     if(arr[i][j].val==3) //change capture
                    {

                        if(i==0)
                           {
                              arr[i][j+1].val++;
                              arr[i][j+1].color=playeractive.color;
                              arr[i][j+1].playerid=playeractive.id;

                              arr[i][j-1].val++;
                              arr[i][j-1].color=playeractive.color;
                              arr[i][j-1].playerid=playeractive.id;

                              arr[i+1][j].val++;
                              arr[i+1][j].color=playeractive.color;
                              arr[i+1][j].playerid=playeractive.id;

                              arr[i][j].val=0;
                               arr[i][j].color=0;
                               arr[i][j].playerid=0;
                              refresh();
                          }
                        if(i==5)
                           {
                              arr[i][j+1].val++;
                              arr[i][j+1].color=playeractive.color;
                              arr[i][j+1].playerid=playeractive.id;

                              arr[i][j-1].val++;
                              arr[i][j-1].color=playeractive.color;
                              arr[i][j-1].playerid=playeractive.id;

                              arr[i-1][j].val++;
                              arr[i-1][j].color=playeractive.color;
                              arr[i-1][j].playerid=playeractive.id;

                               arr[i][j].val=0;
                               arr[i][j].color=0;
                               arr[i][j].playerid=0; 
                               refresh();


                          }
                        if(j==0)
                           {

                              arr[i+1][j].val++;
                              arr[i+1][j].color=playeractive.color;
                              arr[i+1][j].playerid=playeractive.id;

                              arr[i-1][j].val++;
                              arr[i-1][j].color=playeractive.color;
                              arr[i-1][j].playerid=playeractive.id;

                              arr[i][j+1].val++;
                              arr[i][j+1].color=playeractive.color;
                              arr[i][j+1].playerid=playeractive.id;

                              arr[i][j].val=0;
                               arr[i][j].color=0;
                               arr[i][j].playerid=0; 
                              refresh();
                          }
                        if(j==7)
                           {
                              arr[i+1][j].val++;
                              arr[i+1][j].color=playeractive.color;
                              arr[i+1][j].playerid=playeractive.id;


                              arr[i-1][j].val++;
                              arr[i-1][j].color=playeractive.color;
                              arr[i-1][j].playerid=playeractive.id;


                              arr[i][j-1].val++;
                              arr[i][j-1].color=playeractive.color;
                              arr[i][j-1].playerid=playeractive.id;



                               arr[i][j].val=0;
                               arr[i][j].color=0;
                               arr[i][j].playerid=0; 
                               refresh();
                          }
                     }


            }


            }

            else{
            if(arr[i][j].val==0)
            {
            noStroke();
            }
            if(arr[i][j].val==1)
            {


            fill(arr[i][j].color);
            ellipse(i*50+width/12,j*50+height/16,15,15); 


            }
            if(arr[i][j].val==2)
            {
            fill(arr[i][j].color);
            ellipse(i*50+width/12,j*50+height/16,25,25);

            }
            if(arr[i][j].val==3)
            {
            fill(arr[i][j].color);
            ellipse(i*50+width/12,j*50+height/16,35,35);

            }
            if(arr[i][j].val==4)
            {


                              arr[i-1][j].val++;
                              arr[i-1][j].color=playeractive.color;
                              arr[i-1][j].playerid=playeractive.id;


                              arr[i][j+1].val++;
                              arr[i][j+1].color=playeractive.color;
                              arr[i][j+1].playerid=playeractive.id;


                              arr[i+1][j].val++;
                              arr[i+1][j].color=playeractive.color;
                              arr[i+1][j].playerid=playeractive.id;


                              arr[i][j-1].val++;
                              arr[i][j-1].color=playeractive.color;
                              arr[i][j-1].playerid=playeractive.id;

            arr[i][j].val=0;
            arr[i][j].color=0;
            arr[i][j].playerid=0; 
            refresh();
            }


            }
            }

            }}}
