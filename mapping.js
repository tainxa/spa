function colors()
{		
		colorData = [	"khaki"  	,	"orange" 	,		"gold"		,
			 			"brown"		,	"seagreen"	,	 	"green"		,
						"aqua"		,  	"peru"		,		"purple"	, 
						"crimson"	,	"sienna"	,	 	"salmon"	,
			 			"brown"		,	"seagreen"	,	 	"green"		,
						"skyblue"	, 	"violet"	,	  	"powderblue",
						"aqua"		,  	"peru"		,		"midnightblue "	, 
						"plum"		,	"aqua"		,	 	"navy"		,
			 			"brown"		,	"seagreen"	,	 	"green"		,
						"skyblue"	, 	"violet"	,	  	"powderblue",
						"limegreen"	,	"mediumslateblue",	"navy"		,
						"mediumvioletred ","aqua"	,	 	"navy"		,
						"plum"		,	"aqua"		,	 	"navy"		,
						"plum"		,	"aqua"		,	 	"navy"		,
						"plum"		,	"aqua"		,	 	"navy"		,
						"plum"		,	"aqua"		,	 	"navy"		,
						"purple"	,  	"dimgray"	,		"dimgray"	,
						"purple"	,  	"dimgray"	,		"dimgray"	]
}
function lists(){
		
		
		// circles =  [{ x: 33,	y:  45	},  {  x: 76,	y: 290   },
		// 			{ x: 78,	y: 531	},  {  x: 181,	y:  75   },
		// 			{ x: 229,	y: 365	},  {  x: 408,	y: 306   },
		// 			{ x: 413,	y: 406	},  {  x: 399,	y: 206   },
		// 			{ x: 575,	y:  39	},  {  x: 603,	y: 298   },
		// 			{ x: 618,	y: 450	},  {  x: 773,	y: 110   },
		// 			{ x: 780,	y: 391	},  {  x: 916,	y: 287   },
		// 			{ x: 943,	y: 470	},  {  x: 1000,	y: 118   },
		// 			{ x: 1030,	y: 297	},  {  x: 1150,	y:  72   },
		// 			{ x: 1248,	y: 493	},  {  x: 1295,	y: 111   },
		// 			{ x: 1150,	y: 315	},  {  x: 330,	y: 530   }];



		// cirarr =  [[{x: 33, y: 45 },{x: 43, y: 426.5 },{x: 54.5, y: 624.5 },{x: 283, y: 47 },{x: 229, y: 365 },{x: 420, y: 281 },{x: 466, y: 467.5 },{x: 409, y: 185 },{x: 575, y: 39 },{x: 603, y: 298 },{x: 787, y: 561 },{x: 773, y: 110 },{x: 780.5, y: 229.5 },{x: 918, y: 268.5 },{x: 1014.5, y: 489 },{x: 990, y: 45 },{x: 1030, y: 297 },{x: 1139, y: 114 },{x: 1253.5, y: 636.5 },{x: 1295, y: 111 },{x: 1173, y: 274.5 },{x: 267, y: 640.5 }],
		// 			   [{x: 290, y: 368.5 },{x: 57, y: 204 },{x: 64.5, y: 614 },{x: 189, y: 47 },{x: 241, y: 638 },{x: 649, y: 293 },{x: 544, y: 371 },{x: 471, y: 219 },{x: 494, y: 50 },{x: 602, y: 191 },{x: 774.5, y: 481 },{x: 759, y: 60 },{x: 728, y: 246 },{x: 850, y: 333 },{x: 866.5, y: 585 },{x: 846, y: 53.5 },{x: 1113, y: 521 },{x: 940, y: 51 },{x: 1266.5, y: 657 },{x: 1198, y: 45 },{x: 1084, y: 270.5 },{x: 543.5, y: 639.5 }],	
		// 			   [{x: 72, y: 37 },{x: 240, y: 39 },{x: 579, y: 183 },{x: 72, y: 163 },{x: 524, y: 38 },{x: 1209, y: 42 },{x: 983, y: 36 },{x: 216, y: 258 },{x: 61, y: 404 },{x: 355, y: 277 },{x: 919, y: 122 },{x: 136, y: 526 },{x: 702, y: 249 },{x: 527, y: 352 },{x: 1272, y: 126 },{x: 439, y: 542 },{x: 901, y: 534 },{x: 826, y: 244 },{x: 1250, y: 509 },{x: 982, y: 325 },{x: 794, y: 390 },{x: 1002, y: 203 }],	
		// 			   [{x: 216, y: 199 },{x: 77, y: 159 },{x: 297, y: 203 },{x: 197, y: 59 },{x: 98, y: 392 },{x: 717, y: 358 },{x: 486, y: 359 },{x: 442, y: 216 },{x: 818, y: 35 },{x: 534, y: 252 },{x: 497, y: 461 },{x: 820, y: 249 },{x: 833, y: 360 },{x: 949, y: 240 },{x: 813, y: 465 },{x: 1048, y: 45 },{x: 1022, y: 445 },{x: 1149, y: 259 },{x: 1271, y: 539 },{x: 1263, y: 72 },{x: 1216, y: 406 },{x: 101, y: 557 }]	];
					



					   circles = [{x: 33, y: 45 },{x: 43, y: 426.5 },{x: 54.5, y: 624.5 },{x: 283, y: 47 },{x: 229, y: 365 },{x: 420, y: 281 },{x: 466, y: 467.5 },{x: 409, y: 185 },{x: 575, y: 39 },{x: 603, y: 298 },{x: 787, y: 561 },{x: 773, y: 110 },{x: 780.5, y: 229.5 },{x: 918, y: 268.5 },{x: 1014.5, y: 489 },{x: 990, y: 45 },{x: 1030, y: 297 },{x: 1139, y: 114 },{x: 1253.5, y: 636.5 },{x: 1295, y: 111 },{x: 1173, y: 274.5 },{x: 267, y: 640.5 }];



		linedata = [[ 0,   3 ], [  0,   1 ],
					[ 1,   3 ], [  1,   4 ],
					[ 2,   4 ], [  5,   6 ],
					[ 3,   8 ], [  3,   7 ],
					[ 4,   7 ], [  4,   6 ],
					[ 6,  10 ], [  7,   8 ],
					[ 7,   9 ], [  8,  11 ], 
					[ 9,  11 ], [  9,  12 ],
					[ 10, 12 ], [ 10,  14 ],
					[ 11, 15 ], [ 11,  13 ], 
					[ 12, 13 ], [ 13,  16 ], 
					[ 14, 16 ], [ 15,  16 ],
					[ 16, 20 ],	[ 15, 17 ], 
					[ 16,  18 ],[ 14, 18 ], 
					[ 18,  20 ],[ 17, 19 ], 
					[ 18,  19 ],[ 17, 20 ], 
					[ 19,  20 ],[ 4, 21  ],
					[ 21,  18 ],[ 6, 21  ]];


		
}



function mapping(){

		links = {
			 		  n0  : {n3:  linedis[0]     ,    n1: linedis[1]   }, 
			 		  n1  : {n0:  linedis[1]     ,    n3: linedis[2]   ,  n4:  linedis[3]  }, 
			 		  n2  : {n4:  linedis[4]     }, 
 			 		  n3  : {n0:  linedis[0]     ,    n1: linedis[2]   ,  n7:  linedis[7]     ,  n8: linedis[6]   }, 
			 		  n4  : {n1:  linedis[3]     ,    n2: linedis[4]   ,  n6:  linedis[9]     ,  n7: linedis[8] ,  n21: linedis[33]   }, 
			 		  n5  : {n6:  linedis[5]     }, 
 			 		  n6  : {n4:  linedis[9]     ,    n5: linedis[5]   , n10:  linedis[10]	  ,	 n21:  linedis[35] }  , 
			 		  n7  : {n3:  linedis[7]     ,    n4: linedis[8]   ,  n8:  linedis[11]    ,  n9: linedis[12]  }, 
			 		  n8  : {n3:  linedis[6]     ,    n7: linedis[11]  , n11:  linedis[13] }  , 
			 		  n9  : {n7:  linedis[12]    ,   n11: linedis[14]  , n12:  linedis[15] }  , 
			 		  n10 : {n6:  linedis[10]    ,   n12: linedis[16]  , n14:  linedis[17] }  , 
			 		  n11 : {n8:  linedis[13]    ,    n9: linedis[14]  , n13:  linedis[19]    , n15: linedis[18]  }, 
			 		  n12 : {n9:  linedis[15]    ,   n10: linedis[16]  , n13:  linedis[20] }  , 
			 		  n13 : {n11: linedis[19]    ,   n12: linedis[20]  , n16:  linedis[21] }  , 
			 		  n14 : {n10: linedis[17]    ,   n16: linedis[22]  , n18:  linedis[27] }  , 
			 		  n15 : {n11: linedis[18]    ,   n16: linedis[23]  , n17:  linedis[25] }  , 
			 		  n16 : {n13: linedis[21]    ,   n14: linedis[22]  , n15:  linedis[23]    , n18: linedis[26] , n20: linedis[24]  }, 
			 		  n17 : {n15: linedis[25]    ,   n19: linedis[29]  , n20:  linedis[31] }  , 
			 		  n18 : {n14: linedis[27]    ,   n16: linedis[26]  , n19:  linedis[30]    , n20: linedis[28] , n21: linedis[34]  }, 
			 		  n19 : {n17: linedis[29]    ,   n18: linedis[30]  , n20: linedis[32]  }  ,   
			 		  n20 : {n16: linedis[24]    ,   n17: linedis[31]  , n18: linedis[28]     , n19: linedis[32]  },   
			 		  n21 : {n4: linedis[33]     ,   n6: linedis[35]   , n18: linedis[34]}   
				}


		arrmap =	{
			 		 n0  : ["n1","n3"],
			 		 n1  : ["n0","n3","n4"],
			 		 n2  : ["n4"],
 			 		 n3  : ["n0","n1","n7","n8"],
			 		 n4  : ["n1","n2","n6","n7","n21"],
			 		 n5  : ["n6"],
 			 		 n6  : ["n4","n5","n10","n21"],
			 		 n7  : ["n3","n4","n8","n9"],
			 		 n8  : ["n3","n7","n11"],
			 		 n9  : ["n7","n11","n12"],
			 		 n10 : ["n6","n12","n14"],
			 		 n11 : ["n8","n9","n13","n15"],
			 		 n12 : ["n9","n10","n13"],
			 		 n13 : ["n11","n12","n16"],
			 		 n14 : ["n10","n16","n18"],
			 		 n15 : ["n11","n16","n17"],
			 		 n16 : ["n13","n14","n15","n18","n20"],
			 		 n17 : ["n15","n19","n20"],
			 		 n18 : ["n14","n16","n19","n20","n21"],
			 		 n19 : ["n17","n18","n20"],
			 		 n20 : ["n16","n17","n18","n19"],
			 		 n21 : ["n4","n6","n18"]
				}
}