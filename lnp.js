function lnp(gr, sway, st , end)
	{
		for (var key in gr)
		{			
			gr[key].visit = false;
			gr[key].parent = null;
		}
		
		gr[st].visit = true;
		gr[st].parent = null;
		var Q = [st];
		

		while(Q.length)
		{	var P = Q.splice(0,1);
			var CQ = gr[P];
			while(CQ.length)
			{	
				var nxt = CQ.splice(0,1);
				if (gr[nxt].visit) continue;
				gr[nxt].visit = true;
				gr[nxt].parent = P;
				Q = Q.concat(nxt);				
			}
		}


		var way = [end];
		while(gr[end].parent)
		way = way.concat(end = gr[end].parent);


			if(way.length >= sway.length)
				return sway;
			else
				return way.reverse();

	}