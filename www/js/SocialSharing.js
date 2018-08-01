function fbShare(){
  window.plugins.socialsharing.shareViaFacebook('Message via Facebook', 
                                                 null /* img */, 
                                                 null /* url */, 
                                                 null, 
                                                 function(errormsg){alert("Error: Cannot Share")}
                                                 );
};

function whatsappShare(){
  window.plugins.socialsharing.shareViaWhatsApp('Message via WhatsApp',
                                                 null /* img */,
                                                 "https://pointdeveloper.com/" /* url */, 
                                                 null, 
                                                 function(errormsg){alert("Error: Cannot Share")}
                                                 );
};

function twitterShare(){
   window.plugins.socialsharing.shareViaTwitter('Message via Twitter',
                                                 null /* img */, 
                                                 'http://twitter.com/', 
                                                 null, 
                                                 function(errormsg){alert("Error: Cannot Share")}
                                                 );
  };

 function otherShare(){
   window.plugins.socialsharing.share('Have unlimited fun with these Zombies.\n Download the App Now! \nhttps://play.google.com/store/apps/details?id=com.devsun.zombienight', null, null, null);
  };

 function storyShare(){ 
   var data = $('.text-flow').text();
   window.plugins.socialsharing.share('Download app \n https://play.google.com/store/apps/details?id=com.devsun.zombienight \n\n'+data, null, null, null);
  };

