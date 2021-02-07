var coding_frames = ["<iframe src='https://open.spotify.com/embed/playlist/6nz9IKIvVF8veMGKChTbEI' width='300' height='380' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>",
"<iframe src='https://open.spotify.com/embed/playlist/4rjL73PtpJhzpcJhbUtbUC' width='300' height='380' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>",
"<iframe src='https://open.spotify.com/embed/playlist/03keGcFGUNgQ69mRCg0S5b' width='300' height='380' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>"]

var writing_frames=[
    "<iframe src='https://open.spotify.com/embed/playlist/0U9VNPXk6qVmC1VRFN67pe' width='300' height='380' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>", 
    "<iframe src='https://open.spotify.com/embed/playlist/5tddXXIb1AVhLzpGHZwWj6' width='300' height='380' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>",
    "<iframe src='https://open.spotify.com/embed/playlist/7fMBnUsJUIojnMe1IETZcy' width='300' height='380' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>"]
    
var reading_frames=[
        "<iframe src='https://open.spotify.com/embed/playlist/0U9VNPXk6qVmC1VRFN67pe' width='300' height='380' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>",
        "<iframe src='https://open.spotify.com/embed/playlist/0U9VNPXk6qVmC1VRFN67pe' width='300' height='380' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>",
        "<iframe src='https://open.spotify.com/embed/playlist/7fMBnUsJUIojnMe1IETZcy' width='300' height='380' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>"
    ]
    var test_frames = ["<iframe src='https://open.spotify.com/embed/playlist/27S4ofpnoFf0zMTxa3hbgU' width='300' height='380' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>", 
    "<iframe src='https://open.spotify.com/embed/playlist/0tljSod7DBwP8rtshKB99C' width='300' height='380' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>",
    "<iframe src='https://open.spotify.com/embed/playlist/1z3Hpi0SLeRppA1IzC2bJr' width='300' height='380' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>"]
    var art_frames = ["<iframe src='https://open.spotify.com/embed/playlist/7aUMBHujgItqES8Ec1IbdN' width='300' height='380' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>", 
    "<iframe src='https://open.spotify.com/embed/playlist/09URA8ukcUOSGuiyOap9Wp' width='300' height='380' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>", 
    "<iframe src='https://open.spotify.com/embed/playlist/1kxvLuW0ipqfLPU8y39MKV' width='300' height='380' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>"]

function getPlaylist(type){
    let num = Math.floor(Math.random() * 3);
    let frame_base =""  
    switch(type){
        case "coding":
            frame_base = coding_frames[num];
            break;
        case "reading":
            frame_base = reading_frames[num];
            break;
        case "writing":
            frame_base = writing_frames[num];
            break;
        case "art":
            frame_base = art_frames[num];
            break;
        case "testing":
            frame_base = test_frames[num];
            break;
    }
   
    //"<iframe src='https://open.spotify.com/embed/playlist/6nz9IKIvVF8veMGKChTbEI' width='300' height='380' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>"
    document.getElementById("test").innerHTML = frame_base;
}


