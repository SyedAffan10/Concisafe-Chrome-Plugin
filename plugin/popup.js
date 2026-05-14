chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
   
    //rare case
    if (tabs.length === 0) {
      // There is no tab currently activated.
      return;
    }

    console.log(tabs)
    // Get the tab that was activated.
    let tab = tabs[0];
    console.log(tab)
 
    // tab.url = "www.twitter.com"
    const platforms_json = "config.json";
    
    //This regex should able to extract platform name from url 
    //sub-domains are currently not working and I am not expecting that this
    // plugin should work on sub-domains
   
    const domainRegex = /\/\/(?:www\.)?([^\/.]+)\./;
    const platform_name = tab.url.match(domainRegex)[1]
    //twitter
    
    $('#url').html(platform_name)

    $('#bt').click(function(){
 
        $.getJSON(platforms_json, function(data) {
            $.each(data.platforms, function(i,value){
                if(platform_name == value.name){
                    console.log(value.selectors)
                    // console.log(platform_name , value.name, value.selectors)
                    chrome.tabs.sendMessage(tab.id, {type: "selector", data: value.selectors }, response => {
                        console.log(response)
                        $("#post_send").html(response.total)
                        $("#post_filtered").html(response.filtered)
                    });   
                } else {
                    console.log('platform does not exists')
                } 
    
            })
    
           
        });

    })
});
