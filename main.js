
		var txtmsg = document.getElementById("msg");
		var lnp1 = document.getElementById('lnp');
		var sdp = document.getElementById('sdp');
		var svg = d3.select("svg"); 
		var linedis  = [];	var linemid   = []; 
		var linedata = [];	var selected  = [];
		var circles  = [];	var colorData = [];
		var cirarr    = [];
		var inway     = [];
		var links    = {};	var grps = [];	
		var arrmap   = {};	var defaultmap = false;
		var g; 	var g1=1;	var opt;
		var radius  = 25; var maplist = [];
		colors();

				
		lists(); makegrps();
		
	if (localStorage.getItem("CurrentMap")!==undefined&&!defaultmap) 
 	{
 		var mapdata = JSON.parse(localStorage.getItem("CurrentMap"));
		circles  = mapdata[0];
		linedata = mapdata[1];
		clearpath();
		makegrps();
		custom();
		clearpath(); 	
	}


	function setdefault()
	{
		defaultmap = true;
		lists();
		makegrps();
		clearpath();
	}

	function get(){	
		var data11 = [];
		data11 = circles.map(function(v,i){	return [ "{x: "+v.x," y: "+v.y+" }"]	});

		var gb = localStorage.setItem("map1", "Adeel");
		var gb = localStorage.setItem("map2", "Adeel");
		var gb = localStorage.setItem("map3", "Adeel");
		var gb = localStorage.setItem("map4", "Adeel");
		var gb = localStorage.getItem("map1");
		var cir1 =  localStorage.getItem('mymap');
		var cir2 = JSON.parse(cir1);
		var lined = cir2[1];
		for (var i = 0; i < lined.length; i++)
		document.getElementById("str").innerHTML += lined[i]+"<br>";
	}
	function edit()
	{	defaultmap = false;
		var mapdata = [];
		mapdata.push(circles);
		mapdata.push(linedata);
		var savestr = JSON.stringify(mapdata);
		localStorage.setItem("CurrentMap",savestr);
		window.location.href="editmap.html";

	}
	function drawlines()
	{			
		svg.selectAll("line").data(linedata).enter().append("line")
   		.attr("id", function(d,i){	return	 "lin"+i;	        })
   		.attr("class", function(d){	return	 "lines";	        })
   		.attr("x1", function(d){	return	 circles[d[0]].x;	})
   		.attr("y1", function(d){	return	 circles[d[0]].y;	})
   		.attr("x2", function(d){ 	return	 circles[d[1]].x;	})
   		.attr("y2", function(d){	return	 circles[d[1]].y;	})
   		.style("stroke","lightgray").style("stroke-width", 7)

   		g = d3.select("svg").append("g");
	}

	function drawpath(f)
	{
		if (selected.length != 2)
		{	txtmsg.innerHTML = "(Double Click to select nodes)!";	 return }
		displacement();		if(defaultmap) mapping(); else custom();

		var graph = new Graph(links);
		var spa1 = graph.findShortestPath(selected[0], selected[1]);
		
		if (f)
    	{	var spa = spa1;
    		check1 = true;  }
    	else
    	{	var spa = lnp(arrmap, spa1, selected[0], selected[1]);
    		check1 = false;  }	

    	inway = spa.slice(1,-1);
    	inwayst();

		var path = (spa.map( function(v,i) {
					if(i==0){return "M"+(circles[v.slice(1)]).x+" "+(circles[v.slice(1)]).y}
		  	 			else{return "L"+(circles[v.slice(1)]).x+" "+(circles[v.slice(1)]).y;} 
		 			})).join(" ");

		d3.selectAll("#sp").remove();
 		svg.selectAll("path").data("data")
		.enter().append("path")
		.attr("d",  path)
		.attr("id",  "sp")
		.attr("class",  "sp")
		.attr("stroke", "lime")
		.attr("stroke-width", 8)
		.attr("fill", "none")
		.style("opacity",0.5);
		check = 1;	dismsg();	
		d3.selectAll("circle").remove();
		drawnodes('n');
	}

	function drawnodes(cls)
	{	drawlines();
		svg.selectAll("circle").data(circles)
		.enter().append("circle")
		.attr("id", function(d,i) { return   "n"+i;	})
		.attr("class", function(d) { return   "node"+cls	})
		.attr("cx", function(d) { return  		d.x;	})
		.attr("cy", function(d) { return  		d.y;	})
	    .attr("r", radius)
	    .data(colorData) .style("fill", function(d){return d}).style("cursor", "pointer")
		.on("dblclick",choose)  .call(   d3.drag().on("start", start) .on("drag", dragnode) );
		if(selected.length==2)	sstyle();	inwayst();
		label(cls);
	}

	function label(cls){	
		midpoint();	displacement();
		svg.selectAll("text").remove();
		svg.selectAll("text").data(circles).enter().append("text")
	    .attr("x", function(d){return d.x-5} )
	    .attr("y", function(d){return d.y+5} )
	    .text(	   function(d,i){return i	})
	    .attr("font-family","Arial")
	    .attr("font-size","12px")
	    .attr("fill","white").style("pointer-events", "none").style("user-select", "none");

	    g.selectAll("text").data(linemid).enter().append("text")
	    .attr("class", function(d) { return   "disla"+cls	})
	    .attr("id", function(d) { return   "dislab"	})
	    .attr("x", function(d){return d.x} )
	    .attr("y", function(d){return d.y} )
	    .text(	   function(d,i){return linedis[i]+"km"	})
	    .attr("font-family","Arial")
	    .attr("font-size","14px")
	    .attr("fill","black").style("pointer-events", "none").style("user-select", "none");
	}

	function clearpath(){
		
		d3.selectAll("#sp").remove();
		check=0;
		txtmsg.innerHTML = "Clear";
		selected = [];
		inway = [];
		svg.selectAll("line").remove();
		drawlines(); svg.selectAll("circle").remove();
		drawnodes('s'); label('b')
	}

	function makegrps()
	{	grps = [];
		for (var i = 0; i <circles.length; i++) 
		{	var arrx=[],arry=[];
			for (var j = 0; j < linedata.length; j++)
			{
				if (linedata[j][0]==i)
				arrx.push("#lin"+j);
				if (linedata[j][1]==i)
				arry.push("#lin"+j);
			}
			grps[i]= [arrx,arry];
		}
	}	

	function start(d) { 	curr = (d3.select(this).attr("id")).slice(1); txtmsg.innerHTML = "Node "+curr;	 dismsg() }

	function dragnode(d) {

		d3.select(this).attr("cx", circles[curr].x = d3.event.x).attr("cy", circles[curr].y = d3.event.y);
 		(grps[curr])[0].forEach( function(d){ svg.select(d).attr("x1",  d3.event.x).attr("y1", d3.event.y); 	});
 		(grps[curr])[1].forEach( function(d){ svg.select(d).attr("x2",  d3.event.x).attr("y2", d3.event.y); 	});
		label('n'); if(check)drawpath(check1);
	}
	
	function choose(d){
		
		if(selected.length <2 && selected[0] != d3.select(this).attr("id"))
		{	selected.push(d3.select(this).attr("id")); sstyle()		}

		txtmsg.innerHTML = "selected Node : "+selected[0].slice(1)+" Select Another";; dismsg()
	}
	
	function displacement(){

		linedis = d3.range(linedata.length).map(function(i) {
		return dis(		(circles[(linedata[i])[0]]).x,	(circles[(linedata[i])[0]]).y,
  						(circles[(linedata[i])[1]]).x,	(circles[(linedata[i])[1]]).y    )});
  	}
  	
  	function midpoint(){

		linemid = d3.range(linedata.length).map(function(i) {
		return mid(		(circles[(linedata[i])[0]]).x,	(circles[(linedata[i])[0]]).y,
  						(circles[(linedata[i])[1]]).x,	(circles[(linedata[i])[1]]).y    )});
  	}
	
	function dis(x1,y1,x2,y2){	return parseInt(Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2)))  }
	
	function mid(x1,y1,x2,y2){	return {x: parseInt((x1+x2)/2-16), y: parseInt((y1+y2)/2+4)}  }
	
	function dismsg(){	
		if(selected.length == 2) 
		txtmsg.innerHTML = "Click LNP or SDP for path("+(selected[0]).slice(1)+"-"+(selected[1]).slice(1)+")"

}
	
	function sstyle(){		selected.forEach(function(d){	d3.select("#"+d).attr("class","choose") })	}
	function inwayst(){		inway.forEach(function(d){	d3.select("#"+d).attr("class","inway")	 })	}
	
	function load(){	drawnodes("s"); label('b')	}
	
	function toggle(){	if(g1){svg.style("background", "url('map2.png')"); g1=0;}else {svg.style("background-image", "none").style("background-color","LemonChiffon");g1=1;}}

	function trans(fl)
	{
		if (selected.length != 2) return;

		if(fl==1)
		{
			lnp1.innerHTML = "LNP";
			sdp.style.width="150px";
			sdp.style.backgroundColor="lime";
			lnp1.style.width="60px";
			sdp.innerHTML = "Short Distance Path";
			lnp1.style.backgroundColor="orange";
		}
		else if(fl==0)
		{
			sdp.innerHTML = "SDP";
			lnp1.style.width="150px";
			lnp1.style.backgroundColor="lime";
			sdp.style.width="60px";
			lnp1.innerHTML = "Least Node Path";
			sdp.style.backgroundColor="orange";
		}
		else if(fl==2)
		{
			lnp1.innerHTML = "LNP";
			sdp.innerHTML = "SDP";
			lnp1.style.width="60px";
			sdp.style.width="60px";
			sdp.style.backgroundColor="orange";
			lnp1.style.backgroundColor="orange";
		}
	}


	function showmaplist()
	{		
		document.getElementById('listbody').innerHTML = "<div class='maplist'>Default Map <button class='btn btn-success btn1' onclick='setdefault()' data-dismiss='modal'>Selected by Default</button></div>";
		for(var key in localStorage)
		document.getElementById('listbody').innerHTML += "<div class='maplist'>"+key+"<button id="+key+" onclick='delmap(this)' class='btn btn-danger btn1'>Delete</button><button id="+key+" onclick='loadmap(this)' class='btn btn-success btn1' data-dismiss='modal'>Load</button></div>";
	}
	function delmap(itemid){
		localStorage.removeItem(itemid.id);
		showmaplist();
	}
	function deleteall()
	{
		localStorage.clear();
		showmaplist();

	}
	function loadmap(key){
		defaultmap = false;
		var mapdata = JSON.parse(localStorage.getItem(key.id));
		circles  = mapdata[0];
		linedata = mapdata[1];				
		makegrps();
		custom();
		clearpath();

	}

	function custom()
	{ 
		strlinks = '{ ';
		for (var p = 0; p <circles.length; p++) 
		{
			strlinks += '"n'+p+'":{ ';
			for (var i = 0; i <linedata.length; i++)
			{
				if(linedata[i][0] == p)
				{
					strlinks += '"n'+linedata[i][1]+'":'+linedis[i]+' ,';
				}else	if (linedata[i][1] == p) 
				{
					strlinks +='"n'+linedata[i][0]+'":'+linedis[i]+' ,';
				}	
			}
			strlinks = strlinks.slice(0,-1);
	
			strlinks += '} ,';
		}
						
		strlinks = strlinks.slice(0,-1);
		strlinks += '}';



		var strnodes;
		strnodes = '{ ';
		for (var p = 0; p<circles.length; p++)
		{
			strnodes += '"n'+p+'":[ ';
			for (var i = 0; i <linedata.length; i++)
			{
				if(linedata[i][0] == p)
				{
					strnodes += '"n'+linedata[i][1]+'" ,';
				}else	if (linedata[i][1] == p)
				{
					strnodes +='"n'+linedata[i][0]+'" ,';
				}	
			}
			strnodes = strnodes.slice(0,-1);
			strnodes += '] ,';
		}						
		strnodes = strnodes.slice(0,-1);
		strnodes += '}';
	
		links = JSON.parse(strlinks);
		arrmap = JSON.parse(strnodes);
	}
