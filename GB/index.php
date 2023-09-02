<!doctype html>
<html>
   <meta charset="UTF-8">
  <meta name = viewport content = "width = device-width, initial-scale = 1">

<style>
            body, html {

                height: 90%;
width: 100%;
            }
h1{
color: #dff;
font-weight: bold;
   font-size: 20px;

                font-family: monospace;
                font-weight: bold;                                
}
h2{
color: blue;
font-weight: bold;
   font-size: 9px;

                font-family: monospace;
                font-weight: bold;                                
}
            body {
background: url(ico/gb.png) no-repeat  -50px 250px;
                font-family: monospace;
                font-weight: bold;
                font-size: 12px;
                margin: 0;
                overflow: hidden;
                background-color: #222
            }

            body, #box {
margin: 0;
	
                display: fixed;
                align-items: center;
                justify-content: center;
            }

            #box {
background: url(ico/char.png) no-repeat  -50px 50px;
opacity: 70%;
                color: #aaa;
                height: 20em;
                width: 30em;
                max-width: 80%;
                max-height: 80%;
                background-color: #333;
                border-radius: 0.4em;
                border: 2px solid #555;
                position: relative;
                flex-direction: column;
                transition-duration: 0.2s;
                overflow: hidden
            }

            #box:hover, #box[drag] {
                border-color: #38f;
                color: #ddd
            }

            #input {
                cursor: pointer;
                position: absolute;
                left: 65px;
                top: 70px;
                width: 50%;
                height: 20%;
                  align-items: center;
                justify-content: center;
            }

            #display {
position: relative;
                width: 100%;
               height: 100%;
top: 2px;
}
                
#game {
      position: absolute;
width: 100%;
                height: 100%;
top: -1px;
            }

            select, button {
                padding: 0.6em 0.4em;
                margin: 0.5em;
                width: 15em;
                max-width: 100%;
                font-family: monospace;
                font-weight: bold;
                font-size: 16px;
                background-color: #444;
                color: #dff;
                border-radius: 0.4em;
                border: 1px solid #555;
                cursor: pointer;
                transition-duration: 0.2s
            }

            select:hover, button:hover {
border-color: #38f;
                
                background-color: #666;
                color: #ddd
            }
#input:hover {
border-color: #38f;
                
                background-color: green;
                cursor: pointer;
                position: absolute;
                left: 65px;
                top: 70px;
                width: 50%;
                height: 20%;
                  align-items: center;
                justify-content: center;
            }
#status {
 left:40%;
bottom:98%;
font-size:13px;   
 height:0px;    
color: lightgreen;
  display: fixed;
height: 0px;
  justify-content: center;
  align-items: center;
z-index:99999; !important;
position:absolute;
overflow: visible; !important;
}   
        </style>
<head>
   <meta charset="UTF-8">
   <link rel="shortcut icon" href="./.favicon.ico">
   <title>جيم بوي</title>

   <link rel="stylesheet" href="./.stylge.css">
   <script src="./.sorttable.js"></script>
</head>

<script type="text/javascript" src="../chk.js"></script>
    <script type="text/javascript" src="../imgon.js"></script>

<body>
 
	<p id="status"></p>
<center>
<div id = stuff>
<h1>محطة ألعاب جيم بوي</h1>
</div>

	<div id = box>
<select id="rom" name="rom">
<option value="">- اختيار لعبة - <?php
$dirPath = dir('.'); 
$imgArray = array();
while (($file = $dirPath->read()) !== false)
{ if ((substr($file, -3)=="bin")  ||(substr($file, -3)=="z64") || (substr($file, -2)=="gb") || (substr($file, -3)=="zip") ||(substr($file, -3)=="nes") || (substr($file, -3)=="n64") || (substr($file, -3)=="gbc") || (substr($file, -3)=="smd") || (substr($file, -3)=="gba") || (substr($file, -3)=="bi1") ||(substr($file,
-3)=="smc"))
{ $imgArray[ ] = trim($file);
}
} $dirPath->close();
sort($imgArray);
$c = count($imgArray); for($i=0; $i<$c; $i++) { echo "<option value=\"" . $imgArray[$i] . "\">" . $imgArray[$i] . "\n";
} ?> </select>



     <button id = input value="a.gb" onclick="go();">ألعب</button>       
            قم بأختيار اللعبة واضغط ألعب واستمتع
        </div>


        <script>
				
					var select = document.getElementById('rom');
   var input = document.getElementById('input');

select.addEventListener('change', function(){
    input.value = select.value;

});

            function go() {

var url = input.value;
                var core = null; 

       var extension = url.split(".").pop().toLowerCase();

					if (extension=="nes")
								{
							 core = "nes"; 
								}
							else if (extension=="smc")
								{
								 core = "snes";
								}   

							else if (extension=="bin" || extension=="smd")
								{
							 core = "segaMD"; 
								}
							else if (extension=="n64" || extension=="z64")
								{
								 core = "n64";
								}   

	else	if (extension=="gba" || extension=="gbc" || extension=="gb")
								{
							 core = extension
								}
							else if (extension=="zip")
								{
								 core = "gb";
								}   
else if (extension=="bi1")
								{
								 core = "psx";
								}   




                 
                 
             
                 
                        
                       
                const div = document.createElement("div")
                const sub = document.createElement("div")
                const script = document.createElement("script")

                sub.id = "game"
                div.id = "display"
stuff.remove()
                box.remove()
                div.appendChild(sub)
                document.body.appendChild(div)
window.EJS_language = 'ar-AR';
                window.EJS_player = "#game"
                window.EJS_biosUrl = ""             

                    EJS_language = `ar-AR`
                window.EJS_core = core   
   window. EJS_gameUrl = url
            window.EJS_oldCores = true; 
                window.EJS_pathtodata = "../data/"
                window.EJS_startOnLoaded = true;
window.EJS_defaultOptions = {

    'save-state-slot': 4,
    'save-state-location': 'keep in browser'
}
window.EJS_CacheLimit = 1073741824

window.EJS_Buttons = {
    playPause: true,
    restart: true,
    mute: true,
    settings: true,
    fullscreen: true,
    saveState: true,
    loadState: true,
    screenRecord: false,
    gamepad: true,
    cheat: false,
    volume: true,
    quickSave: true,
    quickLoad: true,
    screenshot: false,
    cacheManager: false
}

                if (window.location.hostname === "demo.emulatorjs.org") {
                    window.EJS_AdUrl = "https://ads.emulatorjs.org/";
                }
                

                script.src = "../data/loader.js"
                document.body.appendChild(script)
            }

            box.ondragover = () => box.setAttribute("drag", true)
            box.ondragleave = () => box.removeAttribute("drag")
        </script>

</body>
<script>

var text = e.options[e.selectedIndex].text;

</script>
	    </tbody>
	</table>

	<h2>brought to you by Xod M.Aleiwi</h2>
</div>
</center>
</html>

