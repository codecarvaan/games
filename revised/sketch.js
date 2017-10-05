
            function setup() {
            var myCanvas = createCanvas (300,400);
            myCanvas.parent("sharma");   
                for(var i=0;i<7;i++)
                                        {
                                            document.getElementById("player"+i).style.backgroundColor=col[i];
                                            }
            grid();
            }
            function draw() {

                if(totalplayer==1)
                    {   
                         document.getElementById("player"+i).style.backgroundColor=col[i];
                    }
             if(check()==totalplayer-1 &&totalplayer!=1){ 
                                    document.getElementById("head").innerHTML = "Congratulations! &nbsp"+player[won].name+" &nbsp wins ";
                                      won=66;
                                       for(var i=0;i<7;i++)
                                        {
                                            document.getElementById("player"+i).style.backgroundColor=col[i];
                                            }
                                      }
             }
            var totalplayer=0;
            var nextcolor="";
            var player=[];
            var won=99;
            var arr=[];
            var turn=-1;
            var col=["red","green","yellow","orange","blue","brown","cyan"];
            arr[0]=[];
                
            reset();
            
                for(var i=0;i<7;i++)
                {
                    player[i]={
                        name:"",
                        color:"",
                        id:i,
                        status:"active",
                        flag:0,    
                    } ;

                }
            var playeractive={
            name:"",
            color:"",
            id:"",
            } ;            
            
            
           
            
            function initilize(){
               
                nextcolor="";
                grid();
                won=99;
                turn=-1;
                disable=0;
               
                reset();
                var num=0;
                var pl="player"+0;
                
                for(var i=0;i<7;i++)
                    {
                        
                        var name=document.getElementById("player"+i).value;
                        if(name!="")
                            {
                             
                              player[i].name=document.getElementById("player"+i).value;
                              player[i].color=col[i];   
                              player[i].status="active"; 
                              player[i].flag=0; 
                              document.getElementById("player"+i).style.backgroundColor=player[i].color;
                                num++;
                             }
                        
                    else{
                        document.getElementById("player"+i).style.backgroundColor="black";
                        
                        }
                    }
                        totalplayer=num;
                    
                    }
         
           
            function reset()
            {
           
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
                        playerid:99
                        };
                    }
                }
            }
           
             
                 
    
            
            function mark( a, b) //when clicked to new position
            {
            player[playeractive.id].flag=1;    
            arr[a][b].val=arr[a][b].val+1;
            arr[a][b].color=playeractive.color;
            arr[a][b].playerid=playeractive.id;
            }

            function check()
                {
                    var count=0;
                    var have=0;
                    for(var pl=0;pl<totalplayer;pl++)
                        {
                            have=0;
                            if(player[pl].status=="deactivated")
                            {
                                count++;
                                continue;
                            }
                            else{
                                won=pl;
                            }
                            for(var i=0;i<6;i++)
                            {
                                for(var j=0;j<8;j++)
                                {
                                    if(arr[i][j].playerid==pl )
                                    {
                                        have++;
                                           
                                        }
                           
                                    
                                }
                            }
                            if(have==0 && player[pl].flag==1)
                                {   //console.log("deactivated="+pl);
                                    player[pl].status="deactivated";
                                    document.getElementById("player"+pl).style.backgroundColor="grey";
                                   refresh();
                                    count++; 
                                }
                        }
                    return count; 
  
                }

            
            function next(a)
            {   a++;
                if(a>totalplayer-1)
                            {
                                a=0;
                            }
                while(player[a].status!="active")
                    {
                        a++;
                        if(a>totalplayer-1)
                            {
                                a=0;
                            }
                    }
             return a;
            }


    var disable=0;
    var prv;
    function mouseClicked() {
                normx = Math.floor(norm(mouseX, 0, width/6));
                normy = Math.floor(norm(mouseY, 0, height/8));
                    if(normx >=0 && normy>=0)
                    {
                        if(won==66)
                            {
                                location.reload();
                            }
                      /*  if(disable!=1)
                            {
                                turn++;
                                disable=1;
                                 console.log("once");
                            }
                       */
                        prv=turn;
                        turn=next(turn);
                       
                        console.log(turn);
                        if(arr[normx][normy].playerid==player[turn].id || arr[normx][normy].val==0)
                        {       disable=1;
                                playeractive.color=player[turn].color;
                                playeractive.id=player[turn].id;
                                playeractive.name=player[turn].name;
                                player[turn].flag=1;
                                mark(normx,normy);
                                refresh();
                          
                                
                              
                              
                        }
                        else{
                            turn=prv;
                        }
                        
                    }
                   
                return;
                
            }





            function grid()
            {
                if(player[next(turn)].status=="active")
                    {
                        nextcolor=player[next(turn)].color;
                    }
                else{
                    nextcolor=player[next(turn)].color;
                }
                
                background(0);
                stroke(nextcolor);
                if(nextcolor=="")
                    {
                         stroke("red");
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
              grid();

                for(var i=0;i < 6;i++)
                {   
                    noStroke();

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
                                if(arr[i][j].val>=2)
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
                                    arr[i][b].playerid=playeractive.id;          
                                    
                                    arr[i][j].val=arr[i][j].val-2;
                               
                                        if(arr[i][j].val!=0)
                                        {
                                            arr[i][j].color=playeractive.color;
                                            arr[i][j].playerid=playeractive.id; 
                                        }
                                        else{
                                            arr[i][j].color=0;
                                            arr[i][j].playerid=99; 
                                        }    
                                   
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

                                if(arr[i][j].val>=3) //change capture
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

                                        arr[i][j].val=arr[i][j].val-3;
                               
                                        if(arr[i][j].val!=0)
                                        {
                                            arr[i][j].color=playeractive.color;
                                            arr[i][j].playerid=playeractive.id; 
                                        }
                                        else{
                                            arr[i][j].color=0;
                                            arr[i][j].playerid=99; 
                                        }
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
                                        
                                        arr[i][j].val=arr[i][j].val-3;
                               
                                        if(arr[i][j].val!=0)
                                        {
                                            arr[i][j].color=playeractive.color;
                                            arr[i][j].playerid=playeractive.id; 
                                        }
                                        else{
                                            arr[i][j].color=0;
                                            arr[i][j].playerid=99; 
                                        }
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

                                        arr[i][j].val=arr[i][j].val-3;
                               
                                        if(arr[i][j].val!=0)
                                        {
                                            arr[i][j].color=playeractive.color;
                                            arr[i][j].playerid=playeractive.id; 
                                        }
                                        else{
                                            arr[i][j].color=0;
                                            arr[i][j].playerid=99; 
                                        }
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
                                        


                                        arr[i][j].val=arr[i][j].val-3;
                               
                                        if(arr[i][j].val!=0)
                                        {
                                            arr[i][j].color=playeractive.color;
                                            arr[i][j].playerid=playeractive.id; 
                                        }
                                        else{
                                            arr[i][j].color=0;
                                            arr[i][j].playerid=99; 
                                        }
                                        refresh();
                                    }
                                }


                            }


                        }

                        else{
                            
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
                            if(arr[i][j].val>=4)
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

                                arr[i][j].val=arr[i][j].val-4;
                               
                                if(arr[i][j].val!=0)
                                    {
                                         arr[i][j].color=playeractive.color;
                                         arr[i][j].playerid=playeractive.id; 
                                    }
                                else{
                                         arr[i][j].color=0;
                                        arr[i][j].playerid=99; 
                                }
                              
                                refresh();
                            }


                        }
                    }

                }
                
            }
