(function() {  
    require.config({  
          baseUrl : './js/',  
          paths : {  
				jquery : 'jquery.min',  
				bootstrap : 'bootstrap.min',
				fullPage:'jquery.fullPage.min',
				wow:'wow.min'
          },  
          shim : {  
               bootstrap : {  
                    deps : [ 'jquery' ],  
                    exports : 'bootstrap'  
               },  
			   fullPage: {  
                    deps : [ 'jquery' ],  
                    exports : 'fullPage'  
               } 
          }  
           
    });  
	require(['bootstrap']);  
	require(['fullPage'],function(){
		$('#fullpage').fullpage({
			
			anchors: ['page-home','page-abouts', 'page-services','page-solutions','page-clients','page-contacts',],
			menu: '#menu',
			loopTop: true,
			loopBottom: true,
			
			scrollBar:true//显示滚动条以兼容wow.min.js
		});
	});
	require(['wow'],function(){		
		new WOW().init();
	});	
})(this);  
 
