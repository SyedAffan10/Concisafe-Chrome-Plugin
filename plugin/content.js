
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("reached")
    // sendResponse(message)
    if (message.type == "selector") {
        // Get all post elements by their role attribute
        // var tweetText = $("[data-testid='tweetText']").text();
        posts= []

        //this is just for a dummy response. this should be remove after implementing alogrithm
        dummy_response = []
        console.log(message.data)
        var postElements = 0                 //global variables
        var parentExists = false
        $.each(message.data, function(i,k){
              postElements = document.querySelectorAll(k.main);
              if(k.parentExists)
                parentExists = k.parentExists

             $.each(postElements, function(key, postElement){
                var description = postElement.querySelectorAll(k.description)
                var i;
                if(k.idSelector){
                    id = postElement.querySelectorAll(k.idSelector)
                    i= id[0].id
                }
                else{
                    console.log('not')
                    i = postElement.id

                }
               
                    posts.push({
                        id: i,
                        content: description,
                        contentToHide: k.thingsToHide,
                        showMessage: k.showMessage
                })

                dummy_response.push({
                    id: i,
                    hide: true,
                    contentToHide: k.thingsToHide,
                    showMessage: k.showMessage
                })
                
             })
        })
        console.log(dummy_response)
        // if(message.data)
        //     console.log(message.data)
        // for (var i = 0; i < postElements.length; i++) {
        //     console.log(postElements[i].id)
        //     post_id = postElements[i].id
        //     post_content = postElements[i].innerHTML
        //     posts.push({
        //         id: post_id,
        //         content: post_content
        //     })

        //     // this is a dummy response 
        //     dummy_response.push({
        //         id: post_id,
        //         hide: true 
        //     })
        //     console.log(posts)
        // }

        //send request to python algorithm with posts
        //sendToPython(posts)

        //get response from python with post
        for( var i = 0; i < dummy_response.length; i++){
            hide_post = dummy_response[i].hide
            if(hide_post){
            post = $("#"+dummy_response[i].id)[0]
            console.log(post)
             $.each(dummy_response[i].contentToHide, function(key, value) {
                var des;
                console.log(parentExists)
                if (parentExists){
                   
                    parent_element = post.parentNode
                    des = parent_element.nextElementSibling
                    des.style.display = "none"
                }
                else{
                    des = post.querySelectorAll(value)
                }
                
                console.log(des)

                if(des[0])
                    des[0].style.display = "none"
                    
             })
            if (parentExists){
                parent_element = post.parentNode
                msg = parent_element.querySelectorAll(dummy_response[i].showMessage)
            }
            else{
                msg = post.querySelectorAll(dummy_response[i].showMessage)
            }
           
            console.log(msg)
            if (msg[0])
                msg[0].innerHTML = "This post has been removed by concisafe"
                
                // if(message.data.parentSelector)
                // console.log(post)
                // parent_div = post.parentNode
                // console.log(parent_div)
                // next_sibling = parent_div.nextElementSibling

                // console.log(next_sibling)
                // next_sibling.style.display = "none";
            }
        }
        // console.log(message.data)
        info = [
            {
                "total" : posts.length,
                "filtered" : dummy_response.length
            }
        ]
        console.log(info[0])
        sendResponse(info[0])

    }
})
// content.js
